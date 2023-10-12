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
import { NumberConstant } from './Constant';

export class FunctionUtils {
  /**
   * 判断文件路径是否为ArkUI，返回ArkUI或文件名
   *
   * @param fileFilePath 文件路径
   * @returns { string } 返回ArkUI或文件名
   */
  static getPackageName(fileFilePath: string): string {
    const packageName =
      fileFilePath.indexOf('component\\ets\\') >= NumberConstant.IS_FIELD_EXIST ||
      fileFilePath.indexOf('component/ets/') >= NumberConstant.IS_FIELD_EXIST ? 
        'ArkUI' : 
        path.basename(fileFilePath).replace(/@|.d.ts$/g, '');
    return packageName;
  }
}
