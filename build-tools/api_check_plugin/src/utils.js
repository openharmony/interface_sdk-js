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
const ts = require(path.resolve(__dirname, "../node_modules/typescript"));

const commentNodeWhiteList = [
  ts.SyntaxKind.PropertySignature, ts.SyntaxKind.CallSignature, ts.SyntaxKind.MethodSignature,
  ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.EnumMember, ts.SyntaxKind.VariableStatement,
  ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.Constructor, ts.SyntaxKind.ModuleDeclaration,
  ts.SyntaxKind.NamespaceExportDeclaration, ts.SyntaxKind.ClassDeclaration, ts.SyntaxKind.InterfaceDeclaration,
  ts.SyntaxKind.EnumDeclaration, ts.SyntaxKind.Parameter, ts.SyntaxKind.TypeLiteral, ts.SyntaxKind.FunctionDeclaration,
  ts.SyntaxKind.LabeledStatement
];
exports.commentNodeWhiteList = commentNodeWhiteList;

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
  WRONG_ORDER: 'wrong order'
};
exports.ErrorType = ErrorType;

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
  sheet.getRow(1).values = ['order', 'errorType', 'fileName', 'type', 'errorInfo', 'version', 'model'];
  for (let i = 1; i <= apiCheckArr.length; i++) {
    const apiData = apiCheckArr[i - 1];
    sheet.getRow(i + 1).values = [i, apiData.errorType, apiData.fileName, apiData.type, apiData.errorInfo,
      apiData.version, apiData.basename];
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
    if (/\@[S|s][Y|y][S|s][T|t][E|e][M|m][A|a][P|p][I|i]/g.test(notesStr)) {
      apiInfo.isSystemApi = 'system api';
    }
    if (/\@[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g.test(notesStr)) {
      notesStr.replace(/\@[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g, (versionInfo) => {
        apiInfo.version = versionInfo.replace(/\@[S|s][I|i][N|n][C|c][E|e]/g, '').trim();
      });
    }
    if (/\@[D|d][E|e][P|p][R|r][E|e][C|c][A|a][T|t][E|e][D|d].*[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g.test(notesStr)) {
      notesStr.replace(/\@[D|d][E|e][P|p][R|r][E|e][C|c][A|a][T|t][E|e][D|d].*[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g,
        versionInfo => {
          apiInfo.deprecated = versionInfo.replace(
            /\@[D|d][E|e][P|p][R|r][E|e][C|c][A|a][T|t][E|e][D|d].*[S|s][I|i][N|n][C|c][E|e]\s*/g, '').trim();
        });
    }
    if (/\@[F|f][A|a][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g.test(notesStr)) {
      notesStr.replace(/\@[F|f][A|a][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g, modelInfo => {
        apiInfo.model = modelInfo;
      });
    } else if (/\@[S|s][T|t][A|a][G|g][E|e][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g.test(notesStr)) {
      notesStr.replace(/\@[S|s][T|t][A|a][G|g][E|e][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g, modelInfo => {
        apiInfo.model = modelInfo;
      });
    }
    if (/\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
      notesStr.replace(/\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g, sysCapInfo => {
        apiInfo.sysCap = sysCapInfo.replace(/\@[S|s][Y|y][S|s][C|c][A|a][P|p]/g, '').trim();
      });
    }
    if (/\@[P|p][E|e][R|r][M|m][I|i][S|s][S|s][I|i][O|o][N|n]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
      notesStr.replace(/\@[P|p][E|e][R|r][M|m][I|i][S|s][S|s][I|i][O|o][N|n]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g,
        permissionInfo => {
          apiInfo.permission =
            permissionInfo.replace(/\@[P|p][E|e][R|r][M|m][I|i][S|s][S|s][I|i][O|o][N|n]/g, '').trim();
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

let permissionFile = path.resolve(__dirname, '../config/config.json');

exports.permissionFile = permissionFile;
