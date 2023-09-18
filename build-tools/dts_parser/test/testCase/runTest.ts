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
