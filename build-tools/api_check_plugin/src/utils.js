/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');
const cm = require('comment-parser');
function requireTypescriptModule() {
  const buildOption = require('./build.json');
  if (buildOption.isBundle) {
    return require('typescript');
  }
  const tsPathArray = [
    path.resolve(__dirname, "../node_modules/typescript"),
    path.resolve(__dirname, "../../node_modules/typescript")
  ];
  if (fs.existsSync(tsPathArray[0])) {
    return require(tsPathArray[0]);
  } else if (fs.existsSync(tsPathArray[1])) {
    return require(tsPathArray[1]);
  }
}
exports.requireTypescriptModule = requireTypescriptModule;
const ts = requireTypescriptModule();

const commentNodeWhiteList = [
  ts.SyntaxKind.PropertySignature, ts.SyntaxKind.CallSignature, ts.SyntaxKind.MethodSignature,
  ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.EnumMember, ts.SyntaxKind.VariableStatement,
  ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.Constructor, ts.SyntaxKind.ModuleDeclaration,
  ts.SyntaxKind.NamespaceExportDeclaration, ts.SyntaxKind.ClassDeclaration, ts.SyntaxKind.InterfaceDeclaration,
  ts.SyntaxKind.EnumDeclaration, ts.SyntaxKind.Parameter, ts.SyntaxKind.TypeLiteral, ts.SyntaxKind.FunctionDeclaration,
  ts.SyntaxKind.LabeledStatement, ts.SyntaxKind.TypeAliasDeclaration
];
exports.commentNodeWhiteList = commentNodeWhiteList;

const tagsArrayOfOrder = [
  'namespace', 'extends', 'typedef', 'interface', 'permission', 'enum', 'constant', 'type', 'param', 'default',
  'returns', 'readonly', 'throws', 'static', 'fires', 'syscap', 'systemapi', 'famodelonly', 'FAModelOnly',
  'stagemodelonly', 'StageModelOnly', 'crossplatform', 'since', 'deprecated', 'useinstead', 'test', 'form', 'example'
];
exports.tagsArrayOfOrder = tagsArrayOfOrder;

function getAPINote(node) {
  const apiLength = node.getText().length;
  const apiFullLength = node.getFullText().length;
  return node.getFullText().substring(0, apiFullLength - apiLength);
}
exports.getAPINote = getAPINote;

function hasAPINote(node) {
  if (!node) {
    return false;
  }
  const apiNote = getAPINote(node).replace(/[\s]/g, '');
  if (apiNote && apiNote.length !== 0) {
    return true;
  }
  return false;
}
exports.hasAPINote = hasAPINote;

function removeDir(url) {
  let statObj = fs.statSync(url);
  if (statObj.isDirectory()) {
    let dirs = fs.readdirSync(url);
    dirs = dirs.map(dir => path.join(url, dir));
    for (let i = 0; i < dirs.length; i++) {
      removeDir(dirs[i]);
    }
    fs.rmdirSync(url);
  } else {
    fs.unlinkSync(url);
  }
}
exports.removeDir = removeDir;

function writeResultFile(resultData, outputPath, option) {
  fs.writeFile(path.resolve(__dirname, outputPath), JSON.stringify(resultData, null, 2), option, err => {
    if (err) {
      console.error(`ERROR FOR CREATE FILE:${err}`);
    } else {
      console.log('API CHECK FINISH!');
    }
  });
}
exports.writeResultFile = writeResultFile;

function overwriteIndexOf(item, array) {
  let indexArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      indexArr.push(i);
    }
  }
  return indexArr;
}
exports.overwriteIndexOf = overwriteIndexOf;

const ErrorType = {
  UNKNOW_DECORATOR: 'unknow decorator',
  MISSPELL_WORDS: 'misspell words',
  NAMING_ERRORS: 'naming errors',
  UNKNOW_PERMISSION: 'unknow permission',
  UNKNOW_SYSCAP: 'unknow syscap',
  UNKNOW_DEPRECATED: 'unknow deprecated',
  INVALID_IMPORT: 'invalid import',
  WRONG_ORDER: 'wrong order',
  WRONG_VALUE: 'wrong value',
  WRONG_SCENE: 'wrong scene',
};
exports.ErrorType = ErrorType;

const LogType = {
  LOG_API: 'Api',
  LOG_JSDOC: 'JsDoc',
  LOG_FILE: 'File'
};
exports.LogType = LogType;

const ErrorLevel = {
  HIGH: 3,
  MIDDLE: 2,
  LOW: 1
};
exports.ErrorLevel = ErrorLevel;

const FileType = {
  API: 'Api',
  JSDOC: 'JsDoc'
};
exports.FileType = FileType;

let apiCheckArr = [];
exports.apiCheckArr = apiCheckArr;

class ApiCheckResultClass {
  format_check_result = true;
}
exports.ApiCheckResult = new ApiCheckResultClass();

async function excelApiCheckResult(apiCheckArr) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Js Api', { views: [{ xSplit: 1 }] });
  sheet.getRow(1).values = ['order', 'errorType', 'fileName', 'apiName', 'apiContent', 'type', 'errorInfo', 'version', 'model'];
  for (let i = 1; i <= apiCheckArr.length; i++) {
    const apiData = apiCheckArr[i - 1];
    sheet.getRow(i + 1).values = [i, apiData.errorType, apiData.fileName, apiData.apiName, apiData.apiFullText,
      apiData.type, apiData.errorInfo, apiData.version, apiData.basename];
  }
  const buffer = await workbook.xlsx.writeBuffer();
  fs.writeFile('Js_Api.xlsx', buffer, function (err) {
    if (err) {
      console.error(err);
      return;
    }
  });
  return buffer;
}
exports.excelApiCheckResult = excelApiCheckResult;

function getApiInfo(node) {
  const notesStr = getAPINote(node);
  let apiInfo = {};
  if (notesStr !== '') {
    if (/\@systemapi/g.test(notesStr)) {
      apiInfo.isSystemApi = 'system api';
    }
    if (/\@constant/g.test(notesStr)) {
      apiInfo.isConstant = true;
    }
    if (/\@since\s*(\d+)/g.test(notesStr)) {
      notesStr.replace(/\@since\s*(\d+)/g, (versionInfo) => {
        apiInfo.version = versionInfo.replace(/\@since/g, '').trim();
      });
    }
    if (/\@deprecated.*since\s*(\d+)/g.test(notesStr)) {
      notesStr.replace(/\@deprecated.*since\s*(\d+)/g,
        versionInfo => {
          apiInfo.deprecated = versionInfo.replace(
            /\@deprecated.*since\s*/g, '').trim();
        });
    }
    if (/\@famodelonly/g.test(notesStr)) {
      notesStr.replace(/\@famodelonly/g, modelInfo => {
        apiInfo.model = modelInfo;
      });
    } else if (/\@stagemodelonly/g.test(notesStr)) {
      notesStr.replace(/\@stagemodelonly/g, modelInfo => {
        apiInfo.model = modelInfo;
      });
    }
    if (/\@syscap\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
      notesStr.replace(/\@syscap\s*((\w|\.|\/|\{|\@|\}|\s)+)/g, sysCapInfo => {
        apiInfo.sysCap = sysCapInfo.replace(/\@syscap/g, '').trim();
      });
    }
    if (/\@permission\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
      notesStr.replace(/\@permission\s*((\w|\.|\/|\{|\@|\}|\s)+)/g,
        permissionInfo => {
          apiInfo.permission =
            permissionInfo.replace(/\@permission/g, '').trim();
        });
    }
  }
  return apiInfo;
}
exports.getApiInfo = getApiInfo;

function getApiVersion(node) {
  if (getApiInfo(node).version) {
    return getApiInfo(node).version;
  } else if (node.parent) {
    return getApiVersion(node.parent);
  } else {
    return 'NA';
  }
}
exports.getApiVersion = getApiVersion;

function parseJsDoc(node) {
  if (!hasAPINote(node)) {
    return [];
  } else {
    return cm.parse(getAPINote(node));
  }
}
exports.parseJsDoc = parseJsDoc;

let systemPermissionFile = path.resolve(__dirname, '../../../../../',
  "base/global/system_resources/systemres/main/config.json");

exports.systemPermissionFile = systemPermissionFile;

exports.checkOption = {
  permissionContent: undefined
};

const inheritArr = ['test', 'famodelonly', 'FAModelOnly', 'stagemodelonly', 'StageModelOnly', 'deprecated',
  'systemapi'];
exports.inheritArr = inheritArr;

const ErrorValueInfo = {
  ERROR_INFO_VALUE_EXTENDS: '第[$$]段JSDoc中, extends标签值错误, 请检查标签值是否与继承类名保持一致.',
  ERROR_INFO_VALUE_ENUM: '第[$$]段JSDoc中,enum标签类型错误, 请检查标签类型是否为string或number.',
  ERROR_INFO_VALUE_SINCE: '第[$$]段JSDoc中,since标签值错误, 请检查标签值是否为数值.',
  ERROR_INFO_RETURNS: '第[$$]段JSDoc中,returns标签使用错误, 返回类型为void时不应该使用returns标签.',
  ERROR_INFO_VALUE_RETURNS: '第[$$]段JSDoc中,returns标签类型错误, 请检查标签类型是否与返回类型一致.',
  ERROR_INFO_VALUE_USEINSTEAD: '第[$$]段JSDoc中,useinstead标签值错误, 请检查使用方法.',
  ERROR_INFO_VALUE_TYPE: '第[$$]段JSDoc中,type标签类型错误, 请检查类型是否与属性类型一致.',
  ERROR_INFO_VALUE_DEFAULT: '第[$$]段JSDoc中,default标签值错误, 请补充默认值.',
  ERROR_INFO_VALUE_PERMISSION: '第[$$]段JSDoc中,permission标签值书写错误, 请检查权限字段是否已配置或者更新配置文件.',
  ERROR_INFO_VALUE_DEPRECATED: '第[$$]段JSDoc中,deprecated标签值错误, 请检查使用方法.',
  ERROR_INFO_VALUE_SYSCAP: '第[$$]段JSDoc中,syscap标签值错误, 请检查syscap字段是否已配置.',
  ERROR_INFO_VALUE_NAMESPACE: '第[$$]段JSDoc中,namespace标签值错误, 请检查是否与namespace名称保持一致.',
  ERROR_INFO_VALUE_INTERFACE: '第[$$]段JSDoc中,interface标签值错误, 请检查是否与interface名称保持一致.',
  ERROR_INFO_VALUE_TYPEDEF: '第[$$]段JSDoc中,typedef标签值错误, 请检查是否与interface名称保持一致.',
  ERROR_INFO_TYPE_PARAM: '第[$$]段JSDoc中,第[$$]个param标签类型错误, 请检查是否与第[$$]个参数类型保持一致.',
  ERROR_INFO_VALUE_PARAM: '第[$$]段JSDoc中,第[$$}]个param标签值错误, 请检查是否与第[$$]个参数名保持一致.',
  ERROR_INFO_VALUE1_THROWS: '第[$$]段JSDoc中,第[$$}]个throws标签类型错误, 请填写BusinessError.',
  ERROR_INFO_VALUE2_THROWS: '第[$$]段JSDoc中,第[$$}]个throws标签类型错误, 请检查标签值是否为数值.',
  ERROR_INFO_INHERIT: '第[$$]段JSDoc中,检测到当前文件中存在可继承标签[$$]，但存在子节点没有此标签.',
  ERROR_ORDER: 'JSDoc标签顺序错误,请进行调整',
  ERROR_LABELNAME: '第[$$]段JSDoc中,[$$]标签不存在, 请使用合法的JSDoc标签.',
  ERROR_LOST_LABEL: 'JSDoc标签合法性校验失败,请确认是否遗失$$标签.',
  ERROR_USE: 'JSDoc标签合法性校验失败,不允许使用[$$]标签, 请检查标签使用方法.',
  ERROR_MORELABEL: 'JSDoc标签合法性校验失败,第[$$]个[$$]标签多余, 请检查是否应该删除标签',
  ERROR_REPEATLABEL: '第[$$]段JSDoc中,JSDoc标签合法性校验失败,[$$]标签不允许重复使用, 请删除多余标签.',
  ERROR_USE_INTERFACE: '第[$$]段JSDoc中,JSDoc标签合法性校验失败,interface标签与typedef标签不允许同时使用, 请确认接口类型.',
};
exports.ErrorValueInfo = ErrorValueInfo;

/**
   * 组装错误信息
   */
function createErrorInfo(errorInfo, params) {
  params.forEach((param) => {
    errorInfo = errorInfo.replace('$$', param);
  });
  return errorInfo;
}
exports.createErrorInfo = createErrorInfo;

/**
 * 判断是否为arkui的api文件
 */
function isArkUIApiFile(fileName) {
  if (fileName.indexOf("component\\ets\\") >= 0 || fileName.indexOf("component/ets/") >= 0) {
    return true;
  }
  return false;
}
exports.isArkUIApiFile = isArkUIApiFile;
