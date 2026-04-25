/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @kit PerformanceAnalysisKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 本模块提供了获取各类系统维测日志的能力。
 *
 * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace logLibrary {
  /**
   * 日志文件对象接口。
   *
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface LogEntry {
    /**
     * 文件名称。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 上次修改该文件的时间，表示距1970年1月1日0时0分0秒的秒数。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    mtime: long;

    /**
     * 文件大小，以字节为单位。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    size: long;
  }

  /**
   * 以同步方法查询指定类型的日志文件列表，接收string类型的对象作为参数，返回指定类型日志的文件列表信息。
   *
   * @permission ohos.permission.READ_HIVIEW_SYSTEM
   * @param { string } logType - 日志类型字符串，例如“HILOG”, "FAULTLOG", "BETACLUB", "REMOTELOG"等。
   * @returns { LogEntry[] } 日志文件对象的数组。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function list(logType: string): LogEntry[];

  /**
   * 拷贝指定日志类型的指定文件到目标应用目录下。使用Promise回调。
   *
   * @permission ohos.permission.READ_HIVIEW_SYSTEM
   * @param { string } logType - 日志类型字符串，例如“HILOG”, "FAULTLOG", "BETACLUB", "REMOTELOG"等。
   * @param { string } logName - 日志文件名称。
   * @param { string } dest - 目标目录，需填入相对目录名称。传入dest字串后，日志文件将保存到应用缓存路径下的"hiview/*dest*"文件夹，即"../cache/hiview/*dest*"。可填入多
   *     层目录。
   *     <br>如果传入空字串，将保存到根目录下，即应用缓存路径下的hiview文件夹。
   * @returns { Promise<void> } Promise实例，可以在其then()、catch()方法中分别对拷贝成功、拷贝异常的回调进行处理。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 21300001 - Source file does not exists
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function copy(logType: string, logName: string, dest: string): Promise<void>;

  /**
   * 拷贝指定日志类型的指定文件到目标应用目录下。使用callback回调。
   *
   * @permission ohos.permission.READ_HIVIEW_SYSTEM
   * @param { string } logType - 日志类型字符串，例如“HILOG”, "FAULTLOG", "BETACLUB", "REMOTELOG"等。
   * @param { string } logName - 日志文件名称。
   * @param { string } dest - 目标目录，需填入相对目录名称。传入dest字串后，日志文件将保存到应用缓存路径下的"hiview/*dest*"文件夹，即"../cache/hiview/*dest*"。可填入多
   *     层目录。
   *     <br>如果传入空字串，将保存到根目录下，即应用缓存路径下的hiview文件夹。
   * @param { AsyncCallback<void> } callback - 回调函数，可以在回调函数中处理接口返回值。0表示拷贝成功，其它值表示拷贝失败。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 21300001 - Source file does not exists
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function copy(logType: string, logName: string, dest: string, callback: AsyncCallback<void>): void;

  /**
   * 移动指定日志类型的指定文件到目标应用目录下。使用Promise回调。
   *
   * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
   * @param { string } logType - 日志类型字符串，例如"FAULTLOG", "BETACLUB", "REMOTELOG"等。
   * @param { string } logName - 日志文件名称。
   * @param { string } dest - 目标目录，需填入相对目录名称。传入dest字串后，日志文件将保存到应用缓存路径下的"hiview/*dest*"文件夹，即"../cache/hiview/*dest*"。可填入多
   *     层目录。
   *     <br>如果传入空字串，将保存到根目录下，即应用缓存路径下的hiview文件夹。
   * @returns { Promise<void> } Promise实例，可以在其then()、catch()方法中分别对移动成功、移动异常的回调进行处理。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 21300001 - Source file does not exists
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function move(logType: string, logName: string, dest: string): Promise<void>;

  /**
   * 移动指定日志类型的指定文件到目标应用目录下。使用callback回调。
   *
   * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
   * @param { string } logType - 日志类型字符串，例如“HILOG”, "FAULTLOG", "BETACLUB", "REMOTELOG"等。
   * @param { string } logName - 日志文件名称。
   * @param { string } dest - 目标目录，需填入相对目录名称。传入dest字串后，日志文件将保存到应用缓存路径下的"hiview/*dest*"文件夹，即"../cache/hiview/*dest*"。可填入多
   *     层目录。
   *     <br>如果传入空字串，将保存到根目录下，即应用缓存路径下的hiview文件夹。
   * @param { AsyncCallback<void> } callback - 回调函数，可以在回调函数中处理接口返回值。0表示移动成功，其它值表示移动失败。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 21300001 - Source file does not exists
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function move(logType: string, logName: string, dest: string, callback: AsyncCallback<void>): void;

  /**
   * 以同步方法删除指定日志类型的指定文件。
   *
   * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
   * @param { string } logType - 日志类型字符串，例如"FAULTLOG", "BETACLUB", "REMOTELOG"等。
   * @param { string } logName - 日志文件名称。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 21300001 - Source file does not exists
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function remove(logType: string, logName: string): void;
}

export default logLibrary;