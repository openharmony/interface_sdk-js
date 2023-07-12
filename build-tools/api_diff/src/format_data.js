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

const fs = require('fs');
const path = require('path');
const url = `${__dirname.replace('src', '')}\\version_diff_collection`;
const urlObject = fs.readFileSync(__dirname.replace('\\src', '') + '\\url.json', 'utf-8');

const oldVersion = JSON.parse(urlObject).oldVersion;
const newVersion = JSON.parse(urlObject).newVersion;

filiterVersion(oldVersion, newVersion, url);
function filiterVersion(oldVersion, newVersion, url) {
  let versionArr = fs.readdirSync(url);
  const oldVersionNumber = oldVersion.replace(/\./g, '');
  const newVersionNumber = newVersion.replace(/\./g, '');
  for (let i = 0; i < versionArr.length; i++) {
    const version = versionArr[i].replace(/\./g, '');
    if (version < oldVersionNumber || version > newVersionNumber) {
      versionArr.splice(i, 1);
      i--;
    }
  }

  let orderVersionArr = versionArr.sort((a, b) => {
    return a.replace(/\./g, '') - b.replace(/\./g, '');
  });

  formatExcelData(orderVersionArr);
}

// 合并前两个版本的数据，作为初始数据
function formatExcelData(orderVersionArr) {
  let initialData = [];
  let allMergeData = [];
  if (orderVersionArr.length === 1) {
    let versionUrl = `${url}\\${orderVersionArr[0]}`;
    allMergeData = getSingleVersionData(versionUrl);
  } else if (orderVersionArr.length > 1) {
    let oldestVersionUrl = `${url}\\${orderVersionArr[0]}`;
    let nearOldVersionUrl = `${url}\\${orderVersionArr[1]}`;
    let oldestData = getSingleVersionData(oldestVersionUrl);
    let nearOldVersionData = getSingleVersionData(nearOldVersionUrl);
    const dataObject = compareDiffApi(oldestData, nearOldVersionData);
    initialData = dataObject.initialData;
    oldestData = dataObject.oldestData;
    nearOldVersionData = dataObject.nearOldVersionData;
    initialData = initialData.concat(oldestData, nearOldVersionData);
    allMergeData = mergeAllData(initialData, orderVersionArr);
  }
  exports.allMergeData = allMergeData;
}

function compareDiffApi(oldestData, nearOldVersionData) {
  let initialData = [];
  let oldestVersionIndexes = [];
  let nearOldestVersionIndexes = [];
  for (let i = 0; i < oldestData.length; i++) {
    for (let j = 0; j < nearOldVersionData.length; j++) {
      let oldData = oldestData[i];
      let newData = nearOldVersionData[j];
      if (oldData.subsystem === newData.subsystem && oldData.diffNew === newData.diffOld &&
                oldData.packageName === newData.packageName) {
        initialData.push(collectData(oldData.diffOld, newData.diffNew, oldData.subsystem, oldData.packageName));
        oldestVersionIndexes.push(i);
        nearOldestVersionIndexes.push(j);
      }
    }
  }
  oldestVersionIndexes.forEach(index => {
    oldestData.splice(index, 1);
  });

  nearOldestVersionIndexes.forEach(index => {
    nearOldestVersionIndexes.splice(index, 1);
  });
  return { initialData, oldestData, nearOldVersionData };
}

// 收集一个版本的所有API变更数据
function getSingleVersionData(versionUrl) {
  let singleVersionFiles = fs.readdirSync(versionUrl);
  let oneVersionData = []
  singleVersionFiles.forEach(file => {
    let filePath = path.join(versionUrl, file);
    let subsystem = file.replace('.md', '');
    let fileContent = fs.readFileSync(filePath, 'utf-8');
    let oneSubsystemDataArr = fileContent.split('\r\n');
    let index = oneSubsystemDataArr.length;

    while (index--) {
      if (oneSubsystemDataArr[index] === '') {
        oneSubsystemDataArr.splice(index, 1);
      }
    }

    // 用 | 分隔开表格里的一行数据，得到新旧版本以及文件名
    for (let i = 2; i < oneSubsystemDataArr.length; i++) {
      const regx = /(?<!\\)\|/g;
      let oneDataArr = oneSubsystemDataArr[i].split(regx);
      const OLD_INDEX = 1;
      const NEW_INDEX = 2;
      const PACKAGE_INDEX = 3;
      const diffOld = oneDataArr[OLD_INDEX].replace(/\\/g, '').trim();
      const diffNew = oneDataArr[NEW_INDEX].replace(/\\/g, '').trim();
      const packageName = oneDataArr[PACKAGE_INDEX].trim();
      if (oneDataArr.length === 5) {
        oneVersionData.push(collectData(diffOld, diffNew, subsystem, packageName));
      }
    }
  });
  return oneVersionData;
}

// 用初始数据跟其他版本的数据比较合并
function mergeAllData(initialData, orderVersionArr) {
  let number = 2;
  while (number < orderVersionArr.length) {
    let versionUrl = `${url}\\${orderVersionArr[number]}`;
    let oneVersionData = getSingleVersionData(versionUrl);
    initialData = mergeData(initialData, oneVersionData)
    number++;
  }
  return initialData;
}

// 合并初始数据和邻近版本的数据
function mergeData(initialData, oneVersionData) {
  let indexList = [];
  for (let i = 0; i < initialData.length; i++) {
    const data = initialData[i];
    for (let j = 0; j < oneVersionData.length; j++) {
      if (data.subsystem === oneVersionData[j].subsystem && data.packageName === oneVersionData[j].packageName &&
                data.diffNew === oneVersionData[j].diffOld) {
        initialData[i].diffNew = oneVersionData[j].diffNew;
        indexList.push(j);
      }
    }
  }

  indexList.forEach(index => {
    oneVersionData.splice(index, 1);
  })

  return initialData.concat(oneVersionData);
}

function collectData(oldData, newData, subsystem, fileName) {
  return {
    flag: '函数有变化',
    diffOld: oldData,
    diffNew: newData,
    subsystem: subsystem,
    packageName: fileName,
  }
}

