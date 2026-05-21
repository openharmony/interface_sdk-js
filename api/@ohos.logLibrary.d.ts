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
 * The **logLibrary** module provides APIs for obtaining various system maintenance and test logs.
 *
 * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace logLibrary {
  /**
   * Defines a **LogEntry** object.
   *
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface LogEntry {
    /**
     * Log file name.
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Time of the last modification to the file. The value is the number of seconds elapsed
     * since 00:00:00 on January 1, 1970.
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    mtime: long;

    /**
     * File size, in bytes.
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    size: long;
  }

  /**
   * Obtains the list of log files of the specified type in synchronous mode. This API accepts objects of the string
   * type as input parameters and returns a list log files of the specified type.
   *
   * @permission ohos.permission.READ_HIVIEW_SYSTEM
   * @param { string } logType - Log type, for example, **HILOG**, **FAULTLOG**, **BETACLUB**, or **REMOTELOG**.
   * @returns { LogEntry[] } Array of log file objects.
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
   * Copies log files of the specified type to the target application directory. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.READ_HIVIEW_SYSTEM
   * @param { string } logType - Log type, for example, **HILOG**, **FAULTLOG**, **BETACLUB**, or **REMOTELOG**.
   * @param { string } logName - Log file name.
   * @param { string } dest - Target directory. Enter the relative path of the directory. If this parameter is
   *     specified, log files will be saved to the **hiview/dest** folder in the application cache path, that is,
   *     **../cache/hiview/dest**. You can enter a multi-level directory.
   *     <br>If you leave this parameter empty, log files will be saved to the root directory, that is,
   *     the **hiview** folder in the application cache path.
   * @returns { Promise<void> } Promise used to return the result. Depending on whether the operation is successful, you
   *     can use the **then()** or **catch()** method to process the callback.
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
   * Copies log files of the specified type to the target application directory. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.READ_HIVIEW_SYSTEM
   * @param { string } logType - Log type, for example, **HILOG**, **FAULTLOG**, **BETACLUB**, or **REMOTELOG**.
   * @param { string } logName - Log file name.
   * @param { string } dest - Target directory. Enter the relative path of the directory. If this parameter is
   *     specified, log files will be saved to the **hiview/dest** folder in the application cache path, that is,
   *     **../cache/hiview/dest**. You can enter a multi-level directory.
   *     <br>If you leave this parameter empty, log files will be saved to the root directory, that is,
   *     the **hiview** folder in the application cache path.
   * @param { AsyncCallback<void> } callback - Callback used to process the received return value. The value **0**
   *     indicates that the operation is successful, and any other value indicates that the operation has failed.
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
   * Moves log files of the specified type to the target application directory. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
   * @param { string } logType - Log type, for example, **FAULTLOG**, **BETACLUB**, or **REMOTELOG**.
   * @param { string } logName - Log file name.
   * @param { string } dest - Target directory. Enter the relative path of the directory. If this parameter is
   *     specified, log files will be saved to the **hiview/dest** folder in the application cache path, that is,
   *     **../cache/hiview/dest**. You can enter a multi-level directory.
   *     <br>If you leave this parameter empty, log files will be saved to the root directory, that is,
   *     the **hiview** folder in the application cache path.
   * @returns { Promise<void> } Promise used to return the result. Depending on whether the operation is successful, you
   *     can use the **then()** or **catch()** method to process the callback.
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
   * Moves log files of the specified type to the target application directory. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
   * @param { string } logType - Log type, for example, **HILOG**, **FAULTLOG**, **BETACLUB**, or **REMOTELOG**.
   * @param { string } logName - Log file name.
   * @param { string } dest - Target directory. Enter the relative path of the directory. If this parameter is
   *     specified, log files will be saved to the **hiview/dest** folder in the application cache path, that is,
   *     **../cache/hiview/dest**. You can enter a multi-level directory.
   *     <br>If you leave this parameter empty, log files will be saved to the root directory, that is,
   *     the **hiview** folder in the application cache path.
   * @param { AsyncCallback<void> } callback - Callback used to process the received return value. The value **0**
   *     indicates that the operation is successful, and any other value indicates that the operation has failed.
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
   * Deletes log files of the specified type in synchronous mode.
   *
   * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
   * @param { string } logType - Log type, for example, **FAULTLOG**, **BETACLUB**, or **REMOTELOG**.
   * @param { string } logName - Log file name.
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