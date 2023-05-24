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
const path = require("path");
const fs = require("fs");
const {
  ErrorType,
  ErrorLevel,
  FileType,
  requireTypescriptModule,
  getApiVersion,
  getcheckApiVersion,
} = require("./utils");
const { addAPICheckErrorLogs } = require("./compile_info");
const nameDictionary = require("./name_dictionary.json");
const nameScenarioScope = require("./name_scenario_scope.json");
const ts = requireTypescriptModule();

function checkNaming(node, sourcefile, fileName) {
  const checkApiVersion = getcheckApiVersion();
  const apiVersion = Number(getApiVersion(node));
  if (checkApiVersion.indexOf("^") !== -1) {
    let minCheckApiVersion = Number(checkApiVersion.substr(1));
    if (apiVersion > minCheckApiVersion) {
      checkApiNaming(node, sourcefile, fileName);
    }
  } else if (apiVersion === Number(checkApiVersion)) {
    checkApiNaming(node, sourcefile, fileName);
  }
}
exports.checkNaming = checkNaming;

function checkApiNaming(node, sourcefile, fileName) {
  let lowercaseNamingMap = getlowercaseNamingMap();
  let lowercaseNamingScenarioMap = getlowercaseNamingScenarioMap();
  let lowIdentifier = node.getText().toLowerCase();

  for (const [key, value] of lowercaseNamingMap) {
    const prohibitedWordIndex = lowIdentifier.indexOf(key)
    const lowercaseIgnoreWordArr = value.ignore.map(word => word.toLowerCase())
    for (let i = 0; i < lowercaseIgnoreWordArr.length; i++) {
      if (prohibitedWordIndex !== -1 && lowIdentifier.indexOf(lowercaseIgnoreWordArr[i]) === - 1) {
        const internalWord = node.getText().substr(prohibitedWordIndex, key.length)
        const errorInfo = `Prohibited word in [${node.getText()}]:{${internalWord}}.The word allowed is [${value.suggestion}]`;
        addAPICheckErrorLogs(
          node,
          sourcefile,
          fileName,
          ErrorType.NAMING_ERRORS,
          errorInfo,
          FileType.LOG_API,
          ErrorLevel.MIDDLE
        );
      }
    }
  }

  for (const [key, value] of lowercaseNamingScenarioMap) {
    const prohibitedWordIndex = lowIdentifier.indexOf(key)
    if (
      prohibitedWordIndex !== -1 &&
      !isInAllowedFiles(value.files, path.basename(fileName))
    ) {
      const internalWord = node.getText().substr(prohibitedWordIndex, key.length)
      const errorInfo = `Prohibited word in [${node.getText()}]:{${internalWord}} in the [${path.basename(fileName)}] file`;
      addAPICheckErrorLogs(
        node,
        sourcefile,
        fileName,
        ErrorType.NAMING_ERRORS,
        errorInfo,
        FileType.LOG_API,
        ErrorLevel.MIDDLE
      );
    }
  }
}

function getlowercaseNamingMap() {
  const lowercaseNamingMap = new Map();
  for (const item of nameDictionary) {
    const key = item.badWord.toLowerCase();
    const { badWord, suggestion, ignore } = item;
    lowercaseNamingMap.set(key, { badWord, suggestion, ignore });
  }
  return lowercaseNamingMap;
}

function getlowercaseNamingScenarioMap() {
  const lowercaseNamingScenarioMap = new Map();
  for (const item of nameScenarioScope) {
    const key = item.word.toLowerCase();
    const { word, files } = item;
    lowercaseNamingScenarioMap.set(key, { word, files });
  }
  return lowercaseNamingScenarioMap;
}

function isInAllowedFiles(files, fileName) {
  for (let item of files) {
    const pattern = new RegExp(item)
    pattern.test(fileName)
    if (pattern.test(fileName)) {
      return true
    }
  }
  return false
}
