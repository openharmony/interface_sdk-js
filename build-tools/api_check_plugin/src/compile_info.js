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
const path = require('path');
const result = require('../check_result.json');
const { apiCheckArr, getApiInfo, ErrorLevel, ApiCheckResult, apiCheckInfoArr } = require('../src/utils');

/**
 * 
 * @param {ts.Node} node current node
 * @param {ts.Sourcefile} sourcefile root node
 * @param {String} fileName full file name
 * @param {String} errorType enum object:ErrorType
 * @param {String} errorInfo error infomation
 * @param {String} type jsdoc | api
 * @param {Enum} level enum object:ErrorLevel
 */
function addAPICheckErrorLogs(node, sourcefile, fileName, errorType, errorInfo, type, level) {
  if (level === ErrorLevel.HIGH || level === ErrorLevel.MIDDLE) {
    ApiCheckResult.format_check_result = false;
  }
  const checkFailFileNameSet = new Set(result.apiFiles);
  if (!checkFailFileNameSet.has(fileName)) {
    result.apiFiles.push(fileName);
  }
  const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.getStart());
  const baseFileName = fileName.substring(fileName.indexOf('api'), fileName.length);
  const errorMessage = `API check error of [${errorType.description}]: ${errorInfo}`;

  apiCheckArr.push({
    errorType: errorType.description,
    fileName: `${baseFileName}(line: ${posOfNode.line + 1}, col: ${posOfNode.character + 1})`,
    type: type,
    errorInfo: errorInfo,
    version: getApiInfo(node).version,
    basename: path.basename(fileName).replace(/\.d\.ts/g, ''),
    level: level,
    apiName: node.symbol ? node.symbol.escapedName : '',
    apiFullText: node.getFullText()
  });

  apiCheckInfoArr.push({
    id: errorType.id,
    level: level,
    location: `${baseFileName}(line: ${posOfNode.line + 1}, col: ${posOfNode.character + 1})`,
    filePath: baseFileName,
    message: errorMessage
  });

}
exports.addAPICheckErrorLogs = addAPICheckErrorLogs;
