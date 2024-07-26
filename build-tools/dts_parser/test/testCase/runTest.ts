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

import { expect } from 'chai';
import path from 'path';
import fs from 'fs';
import { FileUtils } from '../../src/utils/FileUtils';
import { FilesMap, Parser } from '../../src/coreImpl/parser/parser';
import { StringConstant } from '../../src/utils/Constant';
import { DiffHelper } from '../../src/coreImpl/diff/diff';
import { BasicDiffInfo } from '../../src/typedef/diff/ApiInfoDiff';
import { ApiStatisticsHelper } from '../../src/coreImpl/statistics/Statistics';
import { ApiStatisticsInfo } from '../../src/typedef/statistics/ApiStatistics'
import { Check } from '../../src/coreImpl/checker/src/api_check_plugin';
import { apiCheckResult, cleanApiCheckResult, compositiveResult } from '../../src/utils/checkUtils';
import { LocalEntry } from '../../src/coreImpl/checker/local_entry';
import { ApiChangeCheck } from '../../src/coreImpl/checker/src/check_api_diff';
import { ApiResultMessage } from '../../src/typedef/checker/result_type';

describe('testParserEachSince', function () {
  const testFileDir: string = path.join(FileUtils.getBaseDirName(), '/test/ut/parserSince');
  const outputFileDir: string = path.join(FileUtils.getBaseDirName(), '/test/output/parserSince');
  const expectFileDir: string = path.join(FileUtils.getBaseDirName(), '/test/expect/parserSince');
  const testFileNames: string[] = fs.readdirSync(testFileDir);
  testFileNames.forEach((testFileName: string) => {
    const baseName: string = path
      .basename(testFileName)
      .replace(/.d.ts/g, '')
      .replace(/.d.ets/g, '');
    const testFilePath: string = path.join(testFileDir, testFileName);
    const outputFilePath: string = path.join(outputFileDir, `${baseName}.json`);
    const expectFilePath: string = path.join(expectFileDir, `${baseName}.json`);
    it('\ntestFile#' + testFilePath + '\noutput:' + outputFilePath + '\nexpect:' + expectFilePath, function () {
      if (fs.existsSync(outputFilePath)) {
        fs.rmdirSync(outputFilePath, { recursive: true });
      }
      if (!fs.existsSync(outputFileDir)) {
        fs.mkdirSync(outputFileDir);
      }
      const outputContent: string = Parser.getParseEachSince(Parser.parseFile(testFileDir, testFilePath));
      fs.writeFileSync(outputFilePath, outputContent, StringConstant.UTF8);
      const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputContent).eql(expectFileContent);
    });
  });
});

describe('testParser', function () {
  const testFileDir: string = path.join(FileUtils.getBaseDirName(), '/test/ut/parser');
  const outputFileDir: string = path.join(FileUtils.getBaseDirName(), '/test/output/parser');
  const expectFileDir: string = path.join(FileUtils.getBaseDirName(), '/test/expect/parser');
  const testFileNames: string[] = fs.readdirSync(testFileDir);
  testFileNames.forEach((testFileName: string) => {
    const baseName: string = path
      .basename(testFileName)
      .replace(/.d.ts/g, '')
      .replace(/.d.ets/g, '');
    const testFilePath: string = path.join(testFileDir, testFileName);
    const outputFilePath: string = path.join(outputFileDir, `${baseName}.json`);
    const expectFilePath: string = path.join(expectFileDir, `${baseName}.json`);
    it('\ntestFile#' + testFilePath + '\noutput:' + outputFilePath + '\nexpect:' + expectFilePath, function () {
      if (fs.existsSync(outputFilePath)) {
        fs.rmdirSync(outputFilePath, { recursive: true });
      }
      if (!fs.existsSync(outputFileDir)) {
        fs.mkdirSync(outputFileDir);
      }
      const outputContent: string = Parser.getParseResults(Parser.parseFile(testFileDir, testFilePath));
      fs.writeFileSync(outputFilePath, outputContent, StringConstant.UTF8);
      const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputContent).eql(expectFileContent);
    });
  });
});

describe('testApiDiff', function () {
  const testOldFileDir: string = path.join(FileUtils.getBaseDirName(), '/test/ut/apiDiff/old');
  const testNewFileDir: string = testOldFileDir.replace('old', 'new');
  const outputFileDir: string = path.join(FileUtils.getBaseDirName(), '/test/output/apiDiff');
  const expectFileDir: string = path.join(FileUtils.getBaseDirName(), '/test/expect/apiDiff');
  const testOldFileNames: string[] = fs.readdirSync(testOldFileDir);
  testOldFileNames.forEach((testOldFileName: string) => {
    const baseName: string = path
      .basename(testOldFileName)
      .replace(/.d.ts/g, '')
      .replace(/.d.ets/g, '');
    const testOldFilePath: string = path.join(testOldFileDir, testOldFileName);
    const testNewFilePath: string = testOldFilePath.replace('old', 'new');
    const outputFilePath: string = path.join(outputFileDir, `${baseName}.json`);
    const expectFilePath: string = path.join(expectFileDir, `${baseName}.json`);
    it('\ntestFile#' + testOldFilePath + '\noutput:' + outputFilePath + '\nexpect:' + expectFilePath, function () {
      if (fs.existsSync(outputFilePath)) {
        fs.rmdirSync(outputFilePath, { recursive: true });
      }
      if (!fs.existsSync(outputFileDir)) {
        fs.mkdirSync(outputFileDir);
      }
      const oldSDKApiMap: FilesMap = Parser.parseFile(testOldFileDir, testOldFilePath);
      const newSDKApiMap: FilesMap = Parser.parseFile(testNewFileDir, testNewFilePath);
      const diffInfos: BasicDiffInfo[] = DiffHelper.diffSDK(oldSDKApiMap, newSDKApiMap, false);
      const outputContent: string = JSON.stringify(diffInfos, null, 2);
      fs.writeFileSync(outputFilePath, outputContent, StringConstant.UTF8);
      const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputContent).eql(expectFileContent);
    });
  });
});

describe('testStatistics', function () {
  const testFileDir: string = path.join(__dirname, '..', '/ut/apiStatistics');
  const outputFileDir: string = path.join(__dirname, '..', '/output/apiStatistics');
  const expectFileDir: string = path.join(__dirname, '..', '/expect/apiStatistics');
  const testFileNames: string[] = fs.readdirSync(testFileDir);
  testFileNames.forEach((testFileName: string) => {
    const baseName: string = path
      .basename(testFileName)
      .replace(/.d.ts/g, '')
      .replace(/.d.ets/g, '');
    const testFilePath: string = path.join(testFileDir, testFileName);
    const outputFilePath: string = path.join(outputFileDir, `${baseName}.json`);
    const expectFilePath: string = path.join(expectFileDir, `${baseName}.json`);
    it('\ntestFile#' + testFilePath + '\noutput:' + outputFilePath + '\nexpect:' + expectFilePath, function () {
      if (!fs.existsSync(outputFileDir)) {
        fs.mkdirSync(outputFileDir);
      }      
      const apiInfos: ApiStatisticsInfo[] = ApiStatisticsHelper.getApiStatisticsInfos(
        Parser.parseFile(testFileDir, testFilePath)
      ).apiStatisticsInfos;
      const outputContent: string = JSON.stringify(apiInfos, null, 2);
      fs.writeFileSync(outputFilePath, outputContent, StringConstant.UTF8);
      const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputContent).eql(expectFileContent);
    });
  });
});

describe('testApiCheck', function () {
  const testFileDir: string = path.join(__dirname, '..', '/ut/apiCheck');
  const outputFileDir: string = path.join(__dirname, '..', '/output/apiCheck');
  const expectFileDir: string = path.join(__dirname, '..', '/expect/apiCheck');
  const testFileNames: string[] = fs.readdirSync(testFileDir);

  testFileNames.forEach((testFileName: string) => {
    const baseName: string = path
      .basename(testFileName)
      .replace(/.d.ts/g, '')
      .replace(/.d.ets/g, '');
    const testFilePath: string = path.join(testFileDir, testFileName);
    const outputFilePath: string = path.join(outputFileDir, `${baseName}.json`);
    const expectFilePath: string = path.join(expectFileDir, `${baseName}.json`);
    it('\ntestFile#' + testFilePath + '\noutput:' + outputFilePath + '\nexpect:' + expectFilePath, function () {
      if (!fs.existsSync(outputFileDir)) {
        fs.mkdirSync(outputFileDir);
      }
      cleanApiCheckResult();
      Check.scanEntry([testFilePath], '', true);
      let ruleName: string = testFileName.substring(0, testFileName.indexOf('.'));
      ruleName = testFileName.indexOf('API_DEFINE_ANONYMOUS_FUNCTION') !== -1 ?
        'API_DEFINE_ANONYMOUS_FUNCTION_01' : ruleName;
      ruleName = testFileName.indexOf('API_DEFINE_HUMP_01_small') !== -1 ?
        'API_DEFINE_HUMP_01' : ruleName;
      ruleName = testFileName.indexOf('API_DEFINE_HUMP_02_LARGE') !== -1 ?
        'API_DEFINE_HUMP_02' : ruleName;
        ruleName = testFileName.indexOf('API_DEFINE_NAME_02_ability') !== -1 ?
        'API_DEFINE_NAME_02' : ruleName;

      LocalEntry.maskAlarm(compositiveResult, [ruleName]);
      const outputContent: string = JSON.stringify(apiCheckResult, null, 2);
      fs.writeFileSync(outputFilePath, outputContent, StringConstant.UTF8);
      const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputContent).eql(expectFileContent);
    });
  });
})

describe('testApiChangeCheck', function () {
  const testFileDir: string = path.join(FileUtils.getBaseDirName(), '/test/ut/apiChange');
  const outputFileDir: string = path.join(__dirname, '..', '/output/apiChange');
  const expectFileDir: string = path.join(__dirname, '..', '/expect/apiChange');
  const testOldFileDir: string = path.join(FileUtils.getBaseDirName(), '/test/ut/apiChange/old');
  const testOldFileNames: string[] = fs.readdirSync(testOldFileDir);

  testOldFileNames.forEach((testOldFileName: string) => {
    const baseName: string = path
      .basename(testOldFileName)
      .replace(/.d.ts/g, '')
      .replace(/.d.ets/g, '');
    const testOldFilePath: string = path.join(testOldFileDir, testOldFileName);
    const outputFilePath: string = path.join(outputFileDir, `${baseName}.json`);
    const expectFilePath: string = path.join(expectFileDir, `${baseName}.json`);
    it('\ntestFile#' + testOldFilePath + '\noutput:' + outputFilePath + '\nexpect:' + expectFilePath, function () {
      cleanApiCheckResult();
      ApiChangeCheck.checkApiChange(testFileDir);
      LocalEntry.maskAlarm(compositiveResult, [baseName]);
      const keyString: string[] = [];
      const finalResult: ApiResultMessage[] = [];
      apiCheckResult.forEach(apiCheck => {
        const key: string = apiCheck.description + apiCheck.mainBuggyCode + apiCheck.extendInfo.hierarchicalRelations;
        if (!keyString.includes(key)) {
          keyString.push(key);
          finalResult.push(apiCheck);
        }
      });
      const outputContent: string = JSON.stringify(finalResult, null, 2);
      fs.writeFileSync(outputFilePath, outputContent, StringConstant.UTF8);
      const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputContent).eql(expectFileContent);
    });
  });

})

