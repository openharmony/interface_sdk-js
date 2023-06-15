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
const {
  ErrorType,
  ErrorLevel,
  FileType,
  getApiVersion,
  getCheckApiVersion
} = require("./utils");
const { addAPICheckErrorLogs } = require("./compile_info");
const nameDictionary = require("./name_dictionary.json");
const nameScenarioScope = require("./name_scenario_scope.json");

function checkNaming(node, sourcefile, fileName) {
  const apiVersionToBeVerified = getCheckApiVersion();
  const apiVersion = Number(getApiVersion(node));

  if (apiVersionToBeVerified.indexOf("^") === 0) {
    let minCheckApiVersion = Number(apiVersionToBeVerified.substr(1));
    checkApiVerion(minCheckApiVersion);
    if (apiVersion > minCheckApiVersion) {
      checkApiNaming(node, sourcefile, fileName);
    }
  } else if (apiVersion === Number(apiVersionToBeVerified)) {
    checkApiNaming(node, sourcefile, fileName);
  } else {
    checkApiVerion(apiVersionToBeVerified);
  }
}
exports.checkNaming = checkNaming;

function checkApiNaming(node, sourcefile, fileName) {
  let lowIdentifier = node.getText().toLowerCase();
  checkApiNamingWords(node, sourcefile, fileName, lowIdentifier);
  checkApiNamingScenario(node, sourcefile, fileName, lowIdentifier);
}

function checkApiNamingWords(node, sourcefile, fileName, lowIdentifier) {
  let lowercaseNamingMap = getlowercaseNamingMap();
  for (const [key, value] of lowercaseNamingMap) {
    const prohibitedWordIndex = lowIdentifier.indexOf(key);
    if (prohibitedWordIndex === -1) {
      continue;
    }
    const lowercaseIgnoreWordArr = value.ignore.map(word => word.toLowerCase());
    const internalWord = node.getText().substr(prohibitedWordIndex, key.length);
    const errorInfo = `Prohibited word in [${node.getText()}]:{${internalWord}}.The word allowed is [${value.suggestion}]`;
    if (lowercaseIgnoreWordArr.length === 0) {
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.NAMING_ERRORS, errorInfo, FileType.LOG_API,
        ErrorLevel.MIDDLE
      );
      break;
    } else {
      let isIgnoreWord = checkIgnoreWord(lowercaseIgnoreWordArr, lowIdentifier);
      if (isIgnoreWord === false) {
        addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.NAMING_ERRORS, errorInfo, FileType.LOG_API,
          ErrorLevel.MIDDLE
        );
      }
    }
  }
}

function checkIgnoreWord(lowercaseIgnoreWordArr, lowIdentifier) {
  let isIgnoreWord = false;
  for (let i = 0; i < lowercaseIgnoreWordArr.length; i++) {
    if (lowercaseIgnoreWordArr[i] && lowIdentifier.indexOf(lowercaseIgnoreWordArr[i]) !== -1) {
      isIgnoreWord = true;
      break;
    }
  }
  return isIgnoreWord;
}

function checkApiVerion(apiVersion) {
  if (isNaN(parseInt(apiVersion))) {
    throw `Please configure the correct API version to be verified`;
  }
}

function checkApiNamingScenario(node, sourcefile, fileName, lowIdentifier) {
  let lowercaseNamingScenarioMap = getlowercaseNamingScenarioMap();
  for (const [key, value] of lowercaseNamingScenarioMap) {
    const prohibitedWordIndex = lowIdentifier.indexOf(key);
    if (
      prohibitedWordIndex !== -1 &&
      !isInAllowedFiles(value.files, path.basename(fileName))
    ) {
      const internalWord = node.getText().substr(prohibitedWordIndex, key.length);
      const errorInfo = `Prohibited word in [${node.getText()}]:{${internalWord}} in the [${path.basename(fileName)}] file`;
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.NAMING_ERRORS, errorInfo, FileType.LOG_API,
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
    const pattern = new RegExp(item);
    pattern.test(fileName);
    if (pattern.test(fileName)) {
      return true;
    }
  }
  return false;
}
