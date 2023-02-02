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

const nodeXlsx = require('node-xlsx');
const fs = require('fs');
const url = `${__dirname.replace('src', '')}\\版本迭代合集`;
const urlObject = fs.readFileSync(__dirname.replace('\\src', '') + '\\url.json', 'utf-8');

const oldVersion = JSON.parse(urlObject).oldVersion;
const newVersion = JSON.parse(urlObject).newVersion;

filiterVersion(oldVersion, newVersion, url);
function filiterVersion(oldVersion, newVersion, url) {
    let excels = fs.readdirSync(url);
    let correctVersions = [];
    const oldVersionNumber = oldVersion.replace(/\./g, '');
    const newVersionNumber = newVersion.replace(/\./g, '');
    let orderExcelVersion = [];
    for (let i = 0; i < excels.length; i++) {
        const version = excels[i].replace(/\.|\xlsx/g, '');
        if (version >= oldVersionNumber && version <= newVersionNumber) {
            correctVersions.push(version);
        } else {
            excels.splice(i, 1);
            i--;
        }
    }
    let orderVersionArr = correctVersions.sort((a, b) => {
        return a - b;
    })
    orderVersionArr.forEach(orderVersion => {
        excels.forEach(excel => {
            let excelVersion = excel.replace(/\.|\xlsx/g, '');
            if (orderVersion == excelVersion) {
                orderExcelVersion.push(excel);
            }
        })
    });
    formatExcelData(orderExcelVersion);
}

function formatExcelData(orderExcelVersion) {
    let number = 0;
    let oldestData = [];
    let nearOldVersionData = [];
    let initialData = [];
    let allMergeData = []
    for (let i = 0; i < orderExcelVersion.length; i++) {
        const version = orderExcelVersion[number];
        let excelurl = `${url}\\${version}`;
        if (number === 0) {
            oldestData = nodeXlsx.parse(excelurl);
            number++;
        } else if (number === 1) {
            nearOldVersionData = nodeXlsx.parse(excelurl);
            number++;
        }
    }
    let oldestNameSet = getSubsystem(oldestData);
    let nearOldVersionNameSet = getSubsystem(nearOldVersionData);
    for (let i = 0; i < oldestData.length; i++) {
        for (let j = 0; j < nearOldVersionData.length; j++) {
            if (oldestData[i].name === nearOldVersionData[j].name) {
                initialData = mergeData(oldestData[i].data, nearOldVersionData[j].data, oldestData[i].name, initialData);
            } else if (!nearOldVersionNameSet.has(oldestData[i].name)) {                
                initialData = initialData.concat(getNewSubsystemApi(oldestData[i].data, oldestData[i].name));
                nearOldVersionNameSet.add(oldestData[i].name)
            } else if (!oldestNameSet.has(nearOldVersionData[j].name)) {
                initialData = initialData.concat(getNewSubsystemApi(nearOldVersionData[j].data,
                    nearOldVersionData[j].name));
                oldestNameSet.add(nearOldVersionData[j].name);
            }
        }

    }
    let initialSet = new Set([...oldestNameSet, ...nearOldVersionNameSet]);
    allMergeData = mergeAllData(initialData, orderExcelVersion, number, initialSet);
    exports.allMergeData = allMergeData;
}

function getNewSubsystemApi(dataArr, subsystem) {
    let newSubsystemApis = []
    for (let i = 1; i < dataArr.length; i++) {
        const data = dataArr[i];
        newSubsystemApis.push(collectData(data[0], data[1], subsystem, data[2]));
    }
    return newSubsystemApis;
}

function mergeAllData(initialData, orderExcelVersion, number, initialSet) {
    while (number < orderExcelVersion.length) {
        let excelurl = `${url}\\${orderExcelVersion[number]}`;
        let excelData = nodeXlsx.parse(excelurl);
        initialData = collectAllData(initialData, excelData, initialSet);
        number++;
    }
    return initialData;
}

function collectAllData(initialData, excelData, initialSet) {
    for (let i = 0; i < initialData.length; i++) {
        const data = initialData[i];
        for (let j = 0; j < excelData.length; j++) {
            if (data.subsystem === excelData[j].name && compareData(data, excelData[j].data)) {
                const index = compareData(data, excelData[j].data).i;
                const diffNew = compareData(data, excelData[j].data).newDiff;
                excelData[j].data.splice(index, 1)
                initialData[i].diffNew = diffNew;
            }
        }
    }
    for (let n = 0; n < excelData.length; n++) {
        let pisitionNumber = 1;
        while (pisitionNumber < excelData[n].data.length) {
            initialData.push(collectData(excelData[n].data[pisitionNumber][0], excelData[n].data[pisitionNumber][1],
                excelData[n].name, excelData[n].data[pisitionNumber][2]))
            pisitionNumber++;
        }
    }
    return initialData;
}

function compareData(oldData, newData) {
    for (let i = 1; i < newData.length; i++) {
        if (oldData.packageName == newData[i][2] && oldData.diffNew === newData[i][0]) {
            const newDiff = newData[i][1];
            return { newDiff, i };
        }

    }
}

function mergeData(oldData, newData, subsystem, array) {
    for (let i = 1; i < oldData.length; i++) {
        let number = 1;
        for (let j = 1; j < newData.length; j++) {
            if (oldData[i].length > 0 && newData[j].length > 0 && oldData[i][1] === newData[j][0] &&
                oldData[i][2] === newData[j][2] && oldData[i][0] !== '旧版本' && newData[j][0] !== '旧版本') {
                array.push(collectData(oldData[i][0], newData[j][1], subsystem, oldData[i][2]));
                oldData.splice(i, 1);
                newData.splice(j, 1);
                i--;
                j--;
            } else if (judgeCondition(oldData[i], newData[j]) && number === 1) {
                array.push(collectData(oldData[i][0], oldData[i][1], subsystem, oldData[i][2]));
                number++;
                array.push(collectData(newData[j][0], newData[j][1], subsystem, newData[j][2]));
            } else if (judgeCondition(oldData[i], newData[j]) && number !== 1) {
                array.push(collectData(newData[j][0], newData[j][1], subsystem, newData[j][2]));
            }

        }

    }
    return deleteRepeatData(array);
}

function judgeCondition(oldData, newData) {
    if (oldData.length > 0 && newData.length > 0 && oldData[1] !== newData[0] &&
        oldData[0] !== '旧版本' && oldData[0] !== '旧版本') {
        return true;
    } else {
        return false;
    }
}

function deleteRepeatData(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (JSON.stringify(array[i]) === JSON.stringify(array[j])) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
}

function getSubsystem(array) {
    let nameSet = new Set();
    array.forEach(data => {
        nameSet.add(data.name)
    })
    return nameSet;
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

