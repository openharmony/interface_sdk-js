/*
 * Copyright (C) 2022-2025 Huawei Device Co., Ltd.
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

/**
 * @file @ohos.file.securityLabel (数据标签)
 * @kit CoreFileKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 该模块提供文件数据安全等级的相关功能：向应用程序提供查询、设置文件数据安全等级的ArkTS接口。该功能可以帮助应用实现对不同安全等级文件的分级管理和访问控制，解决数据安全管控的需求，提升应用的数据安全合规性。
 *
 * > **使用说明：**
 *
 * 使用该功能模块对文件/目录进行操作前，需要先获取其应用沙箱路径，获取沙箱路径的方式及其接口用法可参考：
 * [应用上下文Context-获取应用文件路径](docroot://application-models/application-context-stage.md#获取应用文件路径)。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace securityLabel {

  /**
   * 数据安全等级。
   *
   * @unionmember { 's0' } 数据安全等级"S0"。
   * @unionmember { 's1' } 数据安全等级"S1"。
   * @unionmember { 's2' } 数据安全等级"S2"。
   * @unionmember { 's3' } 数据安全等级"S3"。
   * @unionmember { 's4' } 数据安全等级"S4"。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   * @since 23 static
   */
  type DataLevel = 's0' | 's1' | 's2' | 's3' | 's4';

  /**
   * 设置文件或目录的数据安全等级，用于实现文件的分级管理和访问控制。使用Promise异步回调。
   *
   * @param { string } path - 文件或目录的应用沙箱路径。
   * @param { DataLevel } type - 数据安全等级，只支持"s0","s1","s2","s3","s4"。<br>注意：数据安全等级仅可由低向高或同级设置。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900007 - Arg list too long
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900037 - No data available
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   * @since 23 static
   */
  function setSecurityLabel(path: string, type: DataLevel): Promise<void>;

  /**
   * 设置文件或目录的数据安全等级，用于实现文件的分级管理和访问控制。使用callback异步回调。
   *
   * @param { string } path - 文件或目录的应用沙箱路径。
   * @param { DataLevel } type - 数据安全等级，只支持"s0","s1","s2","s3","s4"。<br>注意：数据安全等级仅可由低向高或同级设置。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置数据安全等级成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900007 - Arg list too long
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900037 - No data available
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   * @since 23 static
   */
  function setSecurityLabel(path: string, type: DataLevel, callback: AsyncCallback<void>): void;

  /**
   * 以同步方法设置文件或目录的数据安全等级，用于实现文件的分级管理和访问控制。
   *
   * @param { string } path - 文件或目录的应用沙箱路径。
   * @param { DataLevel } type - 数据安全等级，只支持"s0","s1","s2","s3","s4"。<br>注意：数据安全等级仅可由低向高或同级设置。
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900007 - Arg list too long
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900037 - No data available
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   * @since 23 static
   */
  function setSecurityLabelSync(path: string, type: DataLevel): void;

  /**
   * 获取文件或目录的数据安全等级。若未设置过数据安全等级则默认返回“s3”。使用Promise异步回调。
   *
   * @param { string } path - 文件或目录的应用沙箱路径。
   * @returns { Promise<string> } Promise对象，返回数据安全等级。
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900007 - Arg list too long
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900037 - No data available
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   * @since 23 static
   */
  function getSecurityLabel(path: string): Promise<string>;

  /**
   * 获取文件或目录的数据安全等级。若未设置过数据安全等级则默认返回“s3”。使用callback异步回调。
   *
   * @param { string } path - 文件或目录的应用沙箱路径。
   * @param { AsyncCallback<string> } callback - 回调函数，返回数据安全等级。
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900007 - Arg list too long
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900037 - No data available
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   * @since 23 static
   */
  function getSecurityLabel(path: string, callback: AsyncCallback<string>): void;

  /**
   * 以同步方法获取文件或目录的数据安全等级。若未设置过数据安全等级则默认返回“s3”。
   *
   * @param { string } path - 文件或目录的应用沙箱路径。
   * @returns { string } 返回数据安全等级。
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900007 - Arg list too long
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900037 - No data available
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   * @since 23 static
   */
  function getSecurityLabelSync(path: string): string;
}

export default securityLabel;