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
import path from 'path';
import { ApiResultSimpleInfo } from '../../typedef/checker/result_type';
import { Check } from './src/api_check_plugin';
import { TsSyntaxCheck } from './src/ts_check_plugin';
import { FileUtils } from '../../utils/FileUtils';
import { LogUtil } from '../../utils/logUtil';
import { GenerateFile } from '../../utils/checkUtils';
import { compositiveResult, compositiveLocalResult } from '../../utils/checkUtils';

/**
 * local entrance
 */
export class LocalEntry {
  static checkEntryLocal(): ApiResultSimpleInfo[] {
    const mdFilesPath = path.resolve(FileUtils.getBaseDirName(), '../mdFiles.txt');
    let allResult: ApiResultSimpleInfo[] = compositiveResult;
    try {
      TsSyntaxCheck.checkAPISyntax(mdFilesPath);
      Check.scanEntry(mdFilesPath);
    } catch (error) {
      LogUtil.e('API_CHECK_ERROR', error);
    } finally {
      GenerateFile.writeFile(compositiveResult, '../result.txt', {});
      GenerateFile.writeExcelFile(compositiveLocalResult);
    }
    return allResult;
  }
}
