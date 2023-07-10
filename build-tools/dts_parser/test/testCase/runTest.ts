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

import { parse } from '../../src/core/entry';

describe('testSingleFile', function () {
  const testFileDir = path.join(__dirname, '..', '/ut/');
  const outputFileDir = path.join(__dirname, '..', '/output/');
  const expectFileDir = path.join(__dirname, '..', '/expect/');
  const testFileNames = fs.readdirSync(testFileDir);
  testFileNames.forEach((testFileName) => {
    const baseName: string = path.basename(testFileName, '.d.ts');
    const testFilePath = path.join(testFileDir, testFileName);
    const outputFilePath = path.join(outputFileDir, `${baseName}.json`);
    const expectFilePath = path.join(expectFileDir, `${baseName}.json`);
    it('testFile#' + testFilePath, function () {
      if (fs.existsSync(outputFilePath)) {
        fs.rmSync(outputFilePath);
      }
      if (!fs.existsSync(outputFileDir)) {
        fs.mkdirSync(outputFileDir);
      }
      parse(testFilePath, outputFilePath);
      const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      const outputFileContent: string = fs.readFileSync(outputFilePath, 'utf-8').replace(/\r\n/g, '\n');
      expect(outputFileContent).eql(expectFileContent);
    });
  });
});