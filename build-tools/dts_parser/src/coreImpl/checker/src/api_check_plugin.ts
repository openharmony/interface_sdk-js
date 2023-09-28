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
import fs from 'fs';
import { Parser, FilesMap } from '../../parser/parser';
import { ApiResultSimpleInfo } from '../../../typedef/checker/result_type';

export class Check {

  /**
   * checker tool main entrance
   * @param { string } url -File path for storing file information.
   * @returns { ApiResultSimpleInfo[] } error message array
   */
  static scanEntry(url: string): ApiResultSimpleInfo[] {
    const checkErrorArr: ApiResultSimpleInfo[] = [];
    if (fs.existsSync(url)) {
      const files: Array<string> = Check.getMdFiles(url);
      files.forEach((filePath: string) => {
        Check.parseAPICodeStyle(filePath);
      });
    }
    return checkErrorArr;
  }

  /**
   * Obtain the path of the file to be checked.
   * @param { string } url -File path for storing file information.
   * @returns { Array<string> } -file path array
   */
  static getMdFiles(url: string): Array<string> {
    const content: string = fs.readFileSync(url, 'utf-8');
    const mdFiles: Array<string> = content.split(/[(\r\n)\r\n]+/);
    return mdFiles;
  }

  /**
   * Based on a single file path,parse it using the Parser method.
   * @param { string } filePath -single file path to be checked
   */
  static parseAPICodeStyle(filePath: string): FilesMap {
    const fileDir: string = filePath.substring(0, filePath.lastIndexOf('\\'));
    const parseResult: FilesMap = Parser.parseFile(fileDir, filePath);
    return parseResult;
  }
}