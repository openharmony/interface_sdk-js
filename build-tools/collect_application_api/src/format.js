/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { readFile, parseFiles } = require('./collectApi');
const path = require('path');
const fs = require('fs');
const ts = require('typescript');

let exportClass = '';

function collectBaseApi(importFiles, applicationApis) {
  const SDK_API_FILES = [];
  const APP_API_FILES = [];
  getAllApiFiles(SDK_API_FILES);

  importFiles.forEach(importData => {
    for (let i = 0; i < SDK_API_FILES.length; i++) {
      const filePath = SDK_API_FILES[i];
      if (path.basename(filePath).replace(/\.d\.ts/, '') === importData.importFile) {
        APP_API_FILES.push(filePath);
        break;
      }
    }
  });

  let noRepeatImportFiles = [...new Set(APP_API_FILES)];
  const baseApis = parseFiles(noRepeatImportFiles);
  return compareApis(baseApis, applicationApis, SDK_API_FILES);
}

function compareApis(baseApis, applicationApis, sdkFiles) {
  let callApisInApp = [];
  let componentApiIndexSet = new Set();
  applicationApis = deleteUndefinedApi(applicationApis);

  applicationApis.forEach(applicationApi => {
    sdkFiles.forEach(sdkFile => {
      if (applicationApi.notes !== '实例化对象方式调用' &&
        path.basename(sdkFile).replace(/\.d\.ts/, '') === applicationApi.packageName) {
        applicationApi.moduleName = handleImportClass(sdkFile);
      }
    });
  });

  for (let i = 0; i < applicationApis.length; i++) {
    for (let j = 0; j < baseApis.length; j++) {
      if (applicationApis[i].type === 'ArkUI' && baseApis[j].packageName === 'ArkUI') {
        compareComponentApi(applicationApis[i], baseApis[j], callApisInApp, componentApiIndexSet, i);
      } else if (!applicationApis[i].value && applicationApis[i].type === 'API') {
        compareApisWithoutValue(applicationApis[i], baseApis[j], callApisInApp);
      } else if (applicationApis[i].value && applicationApis[i].type === 'API') {
        compareValuableApis(applicationApis[i], baseApis[j], callApisInApp);
      }
    }
  }
  return callApisInApp;
}

exports.collectBaseApi = collectBaseApi;

function deleteUndefinedApi(applicationApis) {
  for (let i = 0; i < applicationApis.length; i++) {
    if (applicationApis[i] === undefined) {
      applicationApis.splice(i, 1);
    }
  }
  return applicationApis;
}

function compareApisWithoutValue(applicationApi, baseApi, callApisInApp) {
  if (typeof (applicationApi.moduleName) === 'string' &&
    baseApi.className.toLowerCase() === applicationApi.moduleName.toLowerCase() &&
    applicationApi.apiName === baseApi.methodName &&
    applicationApi.packageName.replace('@', '') === baseApi.packageName) {
    let applyApi = JSON.parse(JSON.stringify(baseApi));
    applyApi.pos = applicationApi.callLocation;
    applyApi.notes = applicationApi.notes ? applicationApi.notes : '';
    callApisInApp.push(applyApi);
  }
}

function compareValuableApis(applicationApi, baseApi, callApisInApp) {
  if (applicationApi.apiName === baseApi.className && applicationApi.value === baseApi.methodName &&
    applicationApi.packageName.replace('@', '') === baseApi.packageName) {
    let applyApi = JSON.parse(JSON.stringify(baseApi));
    applyApi.pos = applicationApi.callLocation;
    callApisInApp.push(applyApi);
  }
}

function handleImportClass(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  ts.transpileModule(fileContent, {
    compilerOptions: {
      'target': ts.ScriptTarget.ES2017,
    },
    fileName: filePath.replace(/\.d\.ts/, '.ts'),
    transformers: { before: [isExportClass()] },
  });
  return exportClass;
}

function isExportClass() {
  return (context) => {
    return (sourcefile) => {
      const statements = sourcefile.statements;
      statements.forEach(statement => {
        if (ts.isClassDeclaration(statement)) {
          exportClass = statement.name.escapedText;
        } else if (ts.isExportAssignment(statement)) {
          exportClass = statement.expression.escapedText;
        }
      });
      return sourcefile;
    };
  };
}

function compareComponentApi(applicationApi, baseApi, callApisInApp, componentApiIndexSet, index) {
  let applyApi = JSON.parse(JSON.stringify(baseApi));
  applyApi.pos = applicationApi.callLocation;
  if (applicationApi.moduleName.match(new RegExp(baseApi.className.replace(/Attribute|Interface/, ''), 'i')) &&
    applicationApi.apiName === baseApi.methodName && !componentApiIndexSet.has(index)) {
    applyApi.className = applicationApi.moduleName;
    callApisInApp.push(applyApi);
    componentApiIndexSet.add(index);
  } else if (applicationApi.apiName === baseApi.methodName && baseApi.className === 'CommonMethod' &&
    applicationApi.notes !== '比较API' && !componentApiIndexSet.has(index)) {
    applyApi.className = applicationApi.moduleName;
    applyApi.notes = 'CommonMethod';
    callApisInApp.push(applyApi);
    componentApiIndexSet.add(index);
  } else if (applicationApi.notes === '比较API' && applicationApi.apiName === baseApi.methodName &&
    baseApi.className.match(new RegExp(applicationApi.moduleName, 'i')) &&
    baseApi.className !== 'CommonMethod' && !componentApiIndexSet.has(index)) {
    callApisInApp.push(applyApi);
    componentApiIndexSet.add(index);
  }
}

function getAllApiFiles(files) {
  readFile(path.resolve(__dirname, '../sdk'), files);
}