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

const { readFile, etsComponentSet, collectAllApi, callMethod } = require('./util');
const { excel } = require('./collectApi');
const { collectBaseApi } = require('./format');
const path = require('path');
const fs = require('fs');
const ts = require('typescript');

let allCallApisInApp = [];

function collectApis(url) {
  const applicationUrl = path.resolve(__dirname, url);
  const applicationFiles = [];
  readFile(applicationUrl, applicationFiles);
  if (applicationFiles.length === 0) {
    console.error('ERROR:application directory is empty!');
  } else {
    parseFileContent(applicationFiles, visitEachNode);
    const noRepeatApis = deleteRepeatApis(allCallApisInApp);
    excel(noRepeatApis);
  }
}

function deleteRepeatApis(allApis) {
  let allApisSet = new Set();
  let noRepeatApis = []
  allApis.forEach(api => {
    allApisSet.add(JSON.stringify(api));
  })
  allApisSet.forEach(item => {
    noRepeatApis.push(JSON.parse(item))
  })
  return noRepeatApis;
}

function parseFileContent(applicationFiles, callback) {
  applicationFiles.forEach(url => {
    if (/\.ets/.test(path.basename(url)) || /\.ts/.test(path.basename(url)) ||
      /\.js(?!on)/.test(path.basename(url))) {
      const content = fs.readFileSync(url, 'utf-8');
      const fileName = path.basename(url).replace(/\.d.ts$|\.js/g, 'ts');
      ts.transpileModule(content, {
        compilerOptions: {
          "target": ts.ScriptTarget.ES2017
        },
        fileName: fileName,
        transformers: { before: [callback(url)] }
      })
    }
  });
}

function visitEachNode(url) {
  return (context) => {
    return (sourcefile) => {
      const statements = sourcefile.statements;
      // 存放import的d.ts文件和类
      let importFiles = [];
      // 存放符合调用条件的API和组件
      let apiList = [];
      statements.forEach(item => {
        if (ts.isImportDeclaration(item)) {
          judgeImportFile(item, importFiles);
        } else {
          collectApplicationApi(item, sourcefile, url, apiList);
        }
      })
      apiList = addPackageName(apiList, importFiles);
      handleInstantiatedCall(apiList)
      allCallApisInApp = allCallApisInApp.concat(collectBaseApi(importFiles, apiList));
      return sourcefile;
    }
  }
}

function handleInstantiatedCall(apiList) {
  apiList.forEach(instantiatedApi => {
    apiList.forEach(api => {
      if (api !== undefined && instantiatedApi !== undefined && instantiatedApi.instantiateObject === api.moduleName) {
        // 将所有实例化调用方式的API备注统一改为‘实例化对象方式调用’，便于后续处理。
        api.notes = '实例化对象方式调用';
        if (instantiatedApi.notes === callMethod.firstCallMethod) {
          api.packageName = instantiatedApi.packageName;
        } else if (instantiatedApi.notes === callMethod.secondCallMethod) {
          api.packageName = instantiatedApi.packageName;
          api.moduleName = instantiatedApi.apiName;
        } else if (instantiatedApi.notes === callMethod.thirdCallMethod) {
          api.packageName = instantiatedApi.packageName;
          api.moduleName = instantiatedApi.moduleName;
        } else if (instantiatedApi.notes === callMethod.fourthCallMethod) {
          api.packageName = instantiatedApi.packageName;
          api.moduleName = instantiatedApi.apiName;

        }
      }
    })
  })
}

// 收集import的文件名和类
function judgeImportFile(node, importFiles) {
  if (isImportFiles(node)) {
    let importFileName = node.moduleSpecifier.text;
    if (node.importClause && node.importClause.name != undefined) {
      importFiles.push({
        importFile: importFileName,
        importClass: node.importClause.name.escapedText
      })
    } else if (node.importClause.namedBindings !== undefined &&
      ts.isNamedImports(node.importClause.namedBindings)) {
      node.importClause.namedBindings.elements.forEach(element => {
        importFiles.push({
          importFile: importFileName,
          importClass: element.name.escapedText
        })
      })
    }
  }
}

/**
 * 收集所有的API，包含组件和API
 * @param {ts.node} node 
 * @param {ts.sourcefile} sourcefile 
 * @param {string} url 
 * @param {Array} apiList [{callLocation:'', moduleName:'', apiName: '', packageName: '',
 * instantiateObject:'',interfaceName: '',value:'', type:'',notes:''}]
 */
function collectApplicationApi(node, sourcefile, url, apiList) {
  if (ts.isPropertyAccessExpression(node) && node.expression && ts.isIdentifier(node.name)) {
    collectCommonCallApis(node, sourcefile, url, apiList);
  } else if (ts.isQualifiedName(node) && ts.isTypeReferenceNode(node.parent)) {
    if (node.parent.parent.name && ts.isIdentifier(node.parent.parent.name)) {
      const note = callMethod.secondCallMethod;
      const type = 'API';
      const instantiateObject = node.parent.parent.name.escapedText;
      const moduleName = node.left.escapedText;
      const apiName = node.right.escapedText;
      apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, instantiateObject, '', '', type, note, node));
    }else{
      const type = 'API';
      const instantiateObject = '';
      const moduleName = node.left.escapedText;
      const apiName = node.right.escapedText;
      apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, instantiateObject, '', '', type, '', node));
    }

  } else if (ts.isNewExpression(node) && ts.isPropertyDeclaration(node.parent)) {
    collectNewExpressionApi(node, url, sourcefile, apiList);
  } else if (ts.isClassDeclaration(node) && node.heritageClauses && node.members) {
    collectLifeCycleApi(node, url, sourcefile, apiList);
  } else if (isEtsComponentNode(node)) {
    const type = 'ArkUI';
    collectComponentApi(node, apiList, type, url, sourcefile);
    if (node.arguments && ts.isIdentifier(node.expression)) {
      collectComponentApis(sourcefile, url, type, node, apiList);
    }
  }
  node.getChildren().forEach(item => collectApplicationApi(item, sourcefile, url, apiList));
}

function collectNewExpressionApi(node, url, sourcefile, apiList) {
  if (etsComponentSet.has(node.expression.escapedText)) {
    const type = 'ArkUI';
    collectComponentApis(sourcefile, url, type, node, apiList);
  } else if (ts.isPropertyAccessExpression(node.expression)) {
    const moduleName = node.expression.expression.escapedText;
    const apiName = node.expression.name.escapedText;
    const instantiateObject = node.parent.name.escapedText;
    const note = callMethod.fourthCallMethod;
    const type = 'API';
    apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, instantiateObject, '', '', type, note, node));
  } else {
    const note = callMethod.thirdCallMethod;
    const type = 'API';
    const instantiateObject = node.parent.name.escapedText;
    const moduleName = node.expression.escapedText;
    apiList.push(collectAllApi(url, sourcefile, moduleName, '', instantiateObject, '', '', type, note, node));
  }
}

function isEtsComponentNode(node) {
  return ts.isEtsComponentExpression(node) || (ts.isCallExpression(node) && node.expression &&
    ts.isIdentifier(node.expression) && etsComponentSet.has(node.expression.escapedText.toString()))
}

// 收集生命周期类型的API。
function collectLifeCycleApi(node, url, sourcefile, apiList) {
  const classNode = node.heritageClauses[0].types[0].expression;
  const note = '';
  const type = 'API';

  if (ts.isIdentifier(classNode)) {
    const moduleName = classNode.escapedText;
    getLifeCycleApiWithoutValue(node.members, moduleName, type, note, node, apiList, url, sourcefile);
  } else if (ts.isPropertyAccessExpression(classNode)) {
    const moduleName = classNode.expression.escapedText;
    const apiName = classNode.name.escapedText;
    getValuableLifeCycleApi(node.members, moduleName, apiName, type, note, node, apiList, url, sourcefile);
  }
}

function getLifeCycleApiWithoutValue(members, moduleName, type, note, node, apiList, url, sourcefile) {
  members.forEach(member => {
    if (ts.isConstructorDeclaration(member)) {
      const apiName = 'constructor';
      apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', '', type, note, node));
    } else {
      const apiName = member.name ? member.name.escapedText : '';
      apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', '', type, note, node));
    }
  })
}

function getValuableLifeCycleApi(members, moduleName, apiName, type, note, node, apiList, url, sourcefile) {
  let value = '';

  members.forEach(member => {
    if (ts.isConstructorDeclaration(member)) {
      value = 'constructor';
      apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', value, type, note, node));
    } else {
      value = member.name ? member.name.escapedText : '';
      apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', value, type, note, node));
    }
  })
}

function collectComponentApis(sourcefile, url, type, componentNode, apiList) {
  let componentName = componentNode.expression.escapedText;
  const notes = '比较API';

  if (componentNode.arguments) {
    componentNode.arguments.forEach(argument => {
      if (ts.isObjectLiteralExpression(argument)) {
        let componentApiArr = collectNestedComponentApi(argument);
        componentApiArr.forEach(componentApi => {
          apiList.push(collectAllApi(url, sourcefile, componentName, componentApi, '',
            '', '', type, notes, componentNode));
        })
      }
    })
  }
}

// 收集组件中写在{}里调用的API，可能会有嵌套调用的情况
function collectNestedComponentApi(node) {
  let resultArr = [];

  if (ts.isObjectLiteralExpression(node)) {
    node.properties.forEach(property => {
      if (ts.isPropertyAssignment(property) && property.name && ts.isIdentifier(property.name)) {
        resultArr.push(property.name.escapedText.toString());
        if (property.initializer && ts.isObjectLiteralExpression(property.initializer)) {
          resultArr = resultArr.concat(collectNestedComponentApi(property.initializer));
        }
      }
    });
  }
  return resultArr;
}

function collectComponentApi(node, apiList, type, url, sourcefile) {
  const notes = '';
  let etsComponentBlockPos = new Set([]);
  const componentName = node.expression.escapedText ? node.expression.escapedText.toString() :
    node.expression.expression.escapedText.toString();

  if (ts.isEtsComponentExpression(node) && ts.isBlock(node.parent.parent) &&
    !etsComponentBlockPos.has(node.parent.parent.pos)) {
    etsComponentBlockPos.add(node.parent.parent);
    const blockNode = node.parent.parent;
    const statements = blockNode.statements;
    statements.forEach((stat, index) => {
      if (stat.expression && ts.isEtsComponentExpression(stat.expression) &&
        (componentName === stat.expression.escapedText || componentName === stat.expression.expression.escapedText)) {
        getCommonCallComponentApi(statements, url, sourcefile, componentName, type, notes, apiList, index, stat);
      }
    });
  } else if (ts.isCallExpression(node)) {
    let temp = node.parent;
    while (!ts.isExpressionStatement(temp) && !(ts.isCallExpression(temp) && ts.isCallExpression(temp.parent))) {
      collectExpressionStatementApis(temp, url, sourcefile, componentName, type, notes, node, apiList)
      temp = temp.parent
    }
  }
}

function collectExpressionStatementApis(temp, url, sourcefile, componentName, type, notes, node, apiList) {
  if (ts.isPropertyAccessExpression(temp)) {
    if (ts.isPropertyAccessExpression(temp)) {
      apiName = temp.name.escapedText.toString();
      apiList.push(collectAllApi(url, sourcefile, componentName, apiName, '', '', '', type, notes, node));
    } else if (ts.isIdentifier(temp)) {
      apiName = temp.escapedText.toString();
      apiList.push(collectAllApi(url, sourcefile, componentName, apiName, '', '', '', type, notes, node));
    }
  }
}

function getCommonCallComponentApi(statements, url, sourcefile, componentName, type, notes, apiList, index, stat) {
  if (index + 1 < statements.length && ts.isExpressionStatement(statements[index + 1]) &&
    statements[index + 1].expression && ts.isCallExpression(statements[index + 1].expression)) {
    let temp = statements[index + 1].expression.expression;
    while (temp) {
      if (ts.isPropertyAccessExpression(temp)) {
        apiName = temp.name.escapedText.toString();
        apiList.push(collectAllApi(url, sourcefile, componentName, apiName, '', '', '', type, notes, temp));
      } else if (ts.isIdentifier(temp)) {
        apiName = temp.escapedText.toString();
        apiList.push(collectAllApi(url, sourcefile, componentName, apiName, '', '', '', type, notes, temp));
      }
      temp = temp.expression;
    }
  }
}

// 收集常见调用方式的API
function collectCommonCallApis(node, sourcefile, url, apiList) {
  let type = 'API';
  let moduleName = '';
  let apiName = '';

  if (ts.isCallExpression(node.expression) && ts.isPropertyAccessExpression(node.expression.expression) &&
    node.expression.expression.expression.escapedText) {
    moduleName = node.expression.expression.expression.escapedText;
    apiName = node.name.escapedText.toString;
    apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', '', type, '', node));
  } else if (ts.isPropertyAccessExpression(node.expression) && node.expression.expression) {
    if (ts.isIdentifier(node.expression.expression)) {
      moduleName = node.expression.expression.escapedText;
      apiName = node.expression.name.escapedText;
      const value = node.name.escapedText;
      apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', value, type, '', node));
    } else {
      moduleName = node.expression.name.escapedText;
      apiName = node.name.escapedText;
      apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', '', type, '', node));
    }
  } else if (ts.isIdentifier(node.expression) && ts.isCallExpression(node.parent)) {
    apiList.push(collectOnOffApi(node, url, type, sourcefile));
  } else if (ts.isIdentifier(node.expression) && ts.isIdentifier(node.name)) {
    moduleName = node.expression.escapedText;
    apiName = node.name.escapedText;
    apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', '', type, '', node));
  }
}

// 收集到的API是没有d.ts文件名的，通过这个函数添加上
function addPackageName(apiList, importFiles) {
  importFiles.forEach(importData => {
    apiList.forEach(api => {
      if (api !== undefined && importData.importClass.match(new RegExp(api.moduleName, 'i'))) {
        api.packageName = importData.importFile;
      }
    })
  })
  return apiList;
}

// API名字为on/off的单独处理，拼接上type类型。
function collectOnOffApi(node, url, type, sourcefile) {
  const moduleName = node.expression.escapedText;
  let instantiateObject = '';
  let apiName = '';
  let note = '';
  if (node.parent.arguments && node.name.escapedText.toString() === 'on' ||
    node.name.escapedText.toString() === 'off') {
    node.parent.arguments.forEach(argument => {
      if (ts.isStringLiteral(argument) || ts.isIdentifier(argument)) {
        apiName = node.name.escapedText + '_' + argument.text;
      }
    })
  } else if (ts.isVariableDeclaration(node.parent.parent)) {
    instantiateObject = node.parent.parent.name.escapedText;
    apiName = node.name.escapedText;
    note = callMethod.firstCallMethod;
  } else {
    apiName = node.name.escapedText;
  }
  if (apiName !== '') {
    return collectAllApi(url, sourcefile, moduleName, apiName, instantiateObject, '', '', type, note, node)
  }
  return {};
}

function isImportFiles(node) {
  if (ts.isStringLiteral(node.moduleSpecifier) && ((node.moduleSpecifier.text).indexOf('@ohos.') != -1 ||
    (node.moduleSpecifier.text).indexOf('@system.') != -1) && node.importClause !== undefined) {
    return true;
  }
  return false;
}

try {
  collectApis('../application');
} catch (error) {
  console.error('COLLECT IMPORT NAME ERROR: ', error);
}