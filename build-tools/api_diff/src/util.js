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

const path = require('path');
const fs = require('fs');

function readFile(dir, utFiles) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else if (filePath.indexOf('\\component\\') > 0 || filePath.indexOf('\\api\\') >= 0) {
        if (/\.d\.ts/.test(filePath)) {
          utFiles.push(filePath);
        }
      }
    });
  } catch (error) {
    console.error('ETS ERROR: ' + error);
  }
}

function getFilePath(filePath) {
  if (filePath.indexOf('\\component\\') > 0 || filePath.indexOf('\\api\\') >= 0) {
    if (/\.d\.ts/.test(filePath)) {
      return filePath;
    }
  }
  return '';
}

function getSubsystemBySyscap(baseApi, syscap) {
  let syscapInfo = '';
  let filePath = __dirname.replace('\\src', '') + '\\subsystem.json';
  let subsystemArr = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  let subsystemSet = new Set([]);

  subsystemArr.forEach(subsystem => {
    subsystemSet.add(subsystem.subsystem);
  });

  if (syscap !== 'N/A' && syscap.new !== 'N/A') {
    let syscapArr = syscap instanceof Object ? syscap.new.split('.') : syscap.split('.');
    syscapInfo = syscapArr[1];
  } else if (baseApi.dtsPath.indexOf('component') > 0) {
    syscapInfo = 'ArkUI';
  } else {
    let fileContent = fs.readFileSync(baseApi.dtsPath, 'utf-8');
    if (/\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(fileContent)) {
      fileContent.replace(/\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g, sysCapInfo => {
        syscapInfo = sysCapInfo.replace(/\@[S|s][Y|y][S|s][C|c][A|a][P|p]/g, '').trim().split('.')[1];
      });
    }
  }
  return syscapInfo;
}

// 给api信息添加flag标记
function getApiInfoWithFlag(baseApi, flag, diffOld, diffNew, subsystemMap, syscap, note, fileNameMap) {
  return {
    packageName: baseApi.packageName,
    className: baseApi.className,
    methodName: baseApi.methodName,
    methodText: baseApi.methodText,
    isSystemApi: baseApi.isSystemApi,
    version: baseApi.version,
    deprecated: baseApi.deprecated,
    apiType: baseApi.apiType,
    sysCap: baseApi.sysCap,
    permission: baseApi.permission,
    model: baseApi.model,
    useinsteadInfo: baseApi.useinsteadInfo,
    errorCode: baseApi.errorCode,
    subsystem: subsystemMap.get(syscap),
    fileName: fileNameMap.get(syscap),
    headimport: baseApi.headimport,
    endexport: baseApi.endexport,
    dtsPath: baseApi.dtsPath,
    flag: flag,
    diffOld: diffOld,
    diffNew: diffNew,
    note: note,
    typeInfo: baseApi.typeInfo,
  };
}

// 给api信息添加去掉dtsPath
function getApiInfoDeleteDtsPath(baseApi) {
  return {
    packageName: baseApi.packageName,
    className: baseApi.className,
    methodName: baseApi.methodName,
    methodText: baseApi.methodText,
    isSystemApi: baseApi.isSystemApi,
    version: baseApi.version,
    deprecated: baseApi.deprecated,
    apiType: baseApi.apiType,
    sysCap: baseApi.sysCap,
    permission: baseApi.permission,
    model: baseApi.model,
    headimport: baseApi.headimport,
    endexport: baseApi.endexport,
    errorCode: baseApi.errorCode,
    typeInfo: baseApi.typeInfo,
  };
}

exports.readFile = readFile;
exports.getSubsystemBySyscap = getSubsystemBySyscap;
exports.getApiInfoWithFlag = getApiInfoWithFlag;
exports.getApiInfoDeleteDtsPath = getApiInfoDeleteDtsPath;
