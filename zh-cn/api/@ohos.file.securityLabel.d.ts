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
 * @file
 * @kit CoreFileKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 该模块提供文件数据安全等级的相关功能：向应用程序提供查询、设置文件数据安全等级的JS接口。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace securityLabel {

  /**
   * 数据安全等级。
   *
   * @unionmember { 's0' } Level S0
   * @unionmember { 's1' } Level S1
   * @unionmember { 's2' } Level S2
   * @unionmember { 's3' } Level S3
   * @unionmember { 's4' } Level S4
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   * @since 23 static
   */
  type DataLevel = 's0' | 's1' | 's2' | 's3' | 's4';

  /**
   * 设置文件或目录的数据安全等级。数据安全等级仅可由低向高或平级设置。使用Promise异步回调。
   *
   * @param { string } path - 文件路径。
   * @param { DataLevel } type - 数据安全等级，只支持"s0","s1","s2","s3","s4"。
   * @returns { Promise<void> } Promise实例，用于异步获取结果。本调用将返回空值。
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
   * 设置文件或目录的数据安全等级。数据安全等级仅可由低向高或平级设置。使用callback异步回调。
   *
   * @param { string } path - 文件路径。
   * @param { DataLevel } type - 数据安全等级，只支持"s0","s1","s2","s3","s4"。
   * @param { AsyncCallback<void> } [callback] - 设置数据安全等级之后的回调。
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
   * 以同步方法设置文件或目录的数据安全等级。数据安全等级仅可由低向高或平级设置。
   *
   * @param { string } path - 文件路径。
   * @param { DataLevel } type - 数据安全等级，只支持"s0","s1","s2","s3","s4"。
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
   * @param { string } path - 文件路径。
   * @returns { Promise<string> } 返回数据安全等级。
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
   * @param { string } path - 文件路径。
   * @param { AsyncCallback<string> } [callback] - 异步获取数据安全等级之后的回调。
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
   * @param { string } path - 文件路径。
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