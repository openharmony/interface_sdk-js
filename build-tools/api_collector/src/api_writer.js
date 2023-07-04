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

const { ReporterFormat } = require('./configs');
const { Logger } = require('./utils');
const exceljs = require('exceljs');
const fs = require('fs');
const path = require('path');

class ApiJsonWriter {
  constructor(outputPath) {
    this.outputPath = outputPath;
    this.apiInfos = [];
    this.noSerializeKeys = new Set(['apiSourceFile', 'apiNode']);
  }

  add(apiInfos) {
    this.apiInfos.push(...apiInfos);
  }

  flush() {
    const output = path.resolve(this.outputPath, 'collectedApi.json');
    fs.writeFileSync(output, JSON.stringify(this.apiInfos, (key, value) => {
      if (this.noSerializeKeys.has(key)) {
        return undefined;
      }
      return value;
    }));
    Logger.info('ApiJsonWriter', `report is in ${output}`);
  }
}

class ApiExcelWriter {
  constructor(outputDir) {
    this.outputDir = outputDir;
    this.apiInfos = [];
    this.enable = true;
  }

  close() {
    this.enable = false;
  }

  open() {
    this.enable = true;
  }

  add(apiInfos) {
    this.apiInfos.push(...apiInfos.filter((value) => {
      return !(value.packageName === 'ArkUI' && value.qualifiedTypeName === '');
    }));
  }

  async flush() {
    if (!this.enable) {
      return;
    }
    const apiInfoSet = new Set();
    const subscribeWorkbook = new exceljs.Workbook();
    const subscribeSheet = subscribeWorkbook.addWorksheet('Js Api', { views: [{ xSplit: 1 }] });
    subscribeSheet.getRow(1).values = ['类名', '接口名', '接口类型', '方法声明', '接口路径'];
    let lineNumber = 0;
    this.apiInfos.forEach((apiInfo, index) => {
      const typeName = apiInfo.qualifiedTypeName ? apiInfo.qualifiedTypeName : (apiInfo.typeName ? apiInfo.typeName : "unnamed");
      if (!apiInfoSet.has(formatInfo(apiInfo, typeName))) {
        subscribeSheet.getRow(lineNumber + 2).values = [
          typeName,
          apiInfo.propertyName,
          apiInfo.apiType,
          apiInfo.apiText.replace(/\;$/g, ''),
          apiInfo.dtsPath
        ]
        lineNumber++;
        apiInfoSet.add(formatInfo(apiInfo, typeName));
      }
    });
    const subscribeBuffer = await subscribeWorkbook.xlsx.writeBuffer();
    const subscribeOutputFile = path.resolve(this.outputDir, 'subscribe_api.xlsx');
    fs.writeFileSync(subscribeOutputFile, subscribeBuffer);
    const workbook = new exceljs.Workbook();
    const sheet = workbook.addWorksheet('Js Api', { views: [{ xSplit: 1 }] });
    sheet.getRow(1).values = ['模块名', '类名', '方法名', '函数', '文件位置'];
    this.apiInfos.forEach((apiInfo, index) => {
      const typeName = apiInfo.componentName ? apiInfo.componentName :
        (apiInfo.typeName ? apiInfo.typeName : apiInfo.qualifiedTypeName);
      sheet.getRow(index + 2).values = [
        path.basename(apiInfo.packageName, '.d.ts').replace('@', ''),
        typeName,
        apiInfo.propertyName,
        apiInfo.apiRawText,
        `${apiInfo.sourceFileName}(${apiInfo.pos})`
      ]
    });
    const buffer = await workbook.xlsx.writeBuffer();
    const outputFile = path.resolve(this.outputDir, 'app_api.xlsx');
    fs.writeFileSync(outputFile, buffer);
    Logger.info('ApiExcelWriter', `report is in ${outputFile}`);
  }
}

class ApiWriter {
  constructor(outputPath, formatFlag) {
    this.outputPath = outputPath;
    this.formatFlag = formatFlag;
    this.apiInfos = [];
  }

  add(apiInfos) {
    this.apiInfos.push(...apiInfos);
  }

  async flush() {
    if (this.formatFlag === ReporterFormat.FLAG_JSON) {
      this.writeJson(this.apiInfos);
    } else if (this.formatFlag === ReporterFormat.FLAG_EXCEL) {
      await this.writeExcel(this.apiInfos);
    } else if (this.formatFlag === ReporterFormat.FLAG_DEBUG) {
      this.writeJson(this.apiInfos);
      await this.writeExcel(this.apiInfos);
    } else {
      this.writeJson(this.apiInfos);
    }
  }

  writeJson(apiInfos) {
    const apiJsonWriter = new ApiJsonWriter(this.outputPath);
    apiJsonWriter.add(apiInfos);
    apiJsonWriter.flush();
  }

  async writeExcel(apiInfos) {
    const apiExcelWriter = new ApiExcelWriter(this.outputPath);
    apiExcelWriter.add(apiInfos);
    await apiExcelWriter.flush();
  }
}

function formatInfo(apiInfo, typeName) {
  return `${typeName}_${apiInfo.propertyName}_${apiInfo.apiText}_ ${apiInfo.dtsPath}`
}

exports.ApiJsonWriter = ApiJsonWriter;
exports.ApiExcelWriter = ApiExcelWriter;
exports.ApiWriter = ApiWriter;