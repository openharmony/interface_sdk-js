/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * @file Upload and Download
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import BaseContext from './application/BaseContext';
import { WantAgent } from './@ohos.app.ability.wantAgent';

/**
 * The **request** module provides applications with basic upload, download, and background transmission agent 
 * capabilities.
 * 
 * - Currently, the **request** module cannot be called in extensions.
 *
 * @syscap SystemCapability.Request.FileTransferAgent [since 10]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace request {
  /**
   * (Universal error codes) Permission verification failed.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_PERMISSION: int;
  /**
   * (Universal error codes) Parameter check failed.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_PARAMCHECK: int;
  /**
   * (Universal error codes) The device does not support this API.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_UNSUPPORTED: int;
  /**
   * (Specific error codes) Abnormal file operation.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_FILEIO: int;
  /**
   * (Specific error codes) Abnormal file path.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_FILEPATH: int;
  /**
   * (Specific error codes) Abnormal service.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_SERVICE: int;
  /**
   * (Specific error codes) Other errors.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_OTHERS: int;

  /**
   * (Network type) Bit flag download allowed on a mobile network.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   */
  const NETWORK_MOBILE: int;

  /**
   * (Network type) Bit flag download allowed on a WLAN.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   */
  const NETWORK_WIFI: int;

  /**
   * (Download error codes) Failure to resume the download due to network errors.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_CANNOT_RESUME: int;

  /**
   * (Download error codes) Failure to find a storage device such as a memory card.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_DEVICE_NOT_FOUND: int;

  /**
   * (Download error codes) Failure to download the file because it already exists.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_FILE_ALREADY_EXISTS: int;

  /**
   * (Download error codes) File operation failed.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_FILE_ERROR: int;

  /**
   * (Download error codes) HTTP transmission failed.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_HTTP_DATA_ERROR: int;

  /**
   * (Download error codes) Insufficient storage space.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_INSUFFICIENT_SPACE: int;

  /**
   * (Download error codes) Error caused by too many network redirections.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_TOO_MANY_REDIRECTS: int;

  /**
   * (Download error codes) Unidentified HTTP code.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_UNHANDLED_HTTP_CODE: int;

  /**
   * (Download error codes) Unknown error.
   * 
   * In API version 12 or earlier, only serial connection to the IP addresses associated with the specified domain name 
   * is supported, and the connection time for a single IP address is not controllable. If the first IP address returned
   * by the DNS is blocked, a handshake timeout may occur, leading to an ERROR_UNKNOWN error.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_UNKNOWN: int;

  /**
   * (Download error codes) No network connection.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const ERROR_OFFLINE: int;

  /**
   * (Download error codes) Network type mismatch.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const ERROR_UNSUPPORTED_NETWORK_TYPE: int;

  /**
   * (Causes of download pause) Download paused and queuing for a WLAN connection because the file size exceeds the 
   * maximum value allowed for a mobile network session.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const PAUSED_QUEUED_FOR_WIFI: int;

  /**
   * (Causes of download pause) Download paused due to a network connection problem.
   * 
   * Example: network disconnection
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const PAUSED_WAITING_FOR_NETWORK: int;

  /**
   * (Causes of download pause) Download paused due to network error and then retried.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const PAUSED_WAITING_TO_RETRY: int;

  /**
   * (Causes of download pause) The user paused the session.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const PAUSED_BY_USER: int;

  /**
   * (Causes of download pause) Download paused due to unknown reasons.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const PAUSED_UNKNOWN: int;

  /**
   * (Download task status codes) Successful download.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const SESSION_SUCCESSFUL: int;

  /**
   * (Download task status codes) Download in progress.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const SESSION_RUNNING: int;

  /**
   * (Download task status codes) Download pending.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const SESSION_PENDING: int;

  /**
   * (Download task status codes) Download paused.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const SESSION_PAUSED: int;

  /**
   * (Download task status codes) Download failure without retry.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const SESSION_FAILED: int;

  /**
   * Downloads a file. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.INTERNET
   * @param { DownloadConfig } config - Download configuration.
   * @param { AsyncCallback<DownloadTask> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined** and **data** is the **DownloadTask** object obtained. Otherwise, **err**
   *     is an error object.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Download
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead request.downloadFile(context: BaseContext, config: DownloadConfig, callback: AsyncCallback<DownloadTask>)
   */
  function download(config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void;

  /**
   * Downloads a file. This API uses an asynchronous callback to return the result. HTTP is supported. You can use 
   * [on('complete'|'pause'|'remove')]{@link request.DownloadTask.on(type: 'complete' | 'pause' | 'remove', callback: () => void)}
   * to obtain the download task state, including task completion, pause, and removal. You can also use 
   * [on('fail')]{@link request.DownloadTask.on(type: 'fail', callback: (err: int) => void)} to obtain the task download
   * error information.
   * 
   * > **NOTE**
   * >
   * > For details about how to obtain the context in the example, see 
   * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
   * > .
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context - Application-based context.
   * @param { DownloadConfig } config - Download configuration.
   * @param { AsyncCallback<DownloadTask> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined** and **data** is the **DownloadTask** object obtained. Otherwise, **err**
   *     is an error object.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
   *     <br> 1. Missing mandatory parameters.
   *     <br> 2. Incorrect parameter type.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 13400001 - Invalid file or file system error.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @throws { BusinessError } 13400003 - Task service ability error.
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function downloadFile(context: BaseContext, config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void;

  /**
   * Downloads a file. This API uses a promise to return the result.
   *
   * @permission ohos.permission.INTERNET
   * @param { DownloadConfig } config - Download configuration.
   * @returns { Promise<DownloadTask> } Promise used to return the **DownloadTask** object.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Download
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead request.downloadFile(context: BaseContext, config: DownloadConfig)
   */
  function download(config: DownloadConfig): Promise<DownloadTask>;

  /**
   * Downloads a file. This API uses a promise to return the result. HTTP is supported. You can use 
   * [on('complete'|'pause'|'remove')]{@link request.DownloadTask.on(type: 'complete' | 'pause' | 'remove', callback: () => void)}
   * to obtain the download task state, including task completion, pause, and removal. You can also use 
   * [on('fail')]{@link request.DownloadTask.on(type: 'fail', callback: (err: int) => void)} to obtain the task download
   * error information.
   * 
   * > **NOTE**
   * >
   * > For details about how to obtain the context in the example, see 
   * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
   * > .
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context - Application-based context.
   * @param { DownloadConfig } config - Download configuration.
   * @returns { Promise<DownloadTask> } Promise used to return the **DownloadTask** object.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
   *     <br> 1. Missing mandatory parameters.
   *     <br> 2. Incorrect parameter type.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 13400001 - Invalid file or file system error.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @throws { BusinessError } 13400003 - Task service ability error.
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function downloadFile(context: BaseContext, config: DownloadConfig): Promise<DownloadTask>;

  /**
   * Uploads a file. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.INTERNET
   * @param { UploadConfig } config - Upload configurations.
   * @param { AsyncCallback<UploadTask> } callback - Callback used to return the **UploadTask** object. If the operation
   *     is successful, **err** is **undefined**, and **data** is the **UploadTask** object obtained. Otherwise, **err**
   *     is an error object.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Upload
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead request.uploadFile(context: BaseContext, config: UploadConfig)
   */
  function upload(config: UploadConfig, callback: AsyncCallback<UploadTask>): void;

  /**
   * Uploads a file. This API uses an asynchronous callback to return the result. HTTP is supported. You can use 
   * [on('complete'|'fail')]{@link request.UploadTask.on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>)}
   * to obtain the upload success or error information.
   * 
   * > **NOTE**
   * >
   * > For details about how to obtain the context in the example, see 
   * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
   * > .
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context - Application-based context.
   * @param { UploadConfig } config - Upload configurations.
   * @param { AsyncCallback<UploadTask> } callback - Callback used to return the **UploadTask** object. If the operation
   *     is successful, **err** is **undefined**, and **data** is the **UploadTask** object obtained. Otherwise, **err**
   *     is an error object.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
   *     <br> 1. Missing mandatory parameters.
   *     <br> 2. Incorrect parameter type.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function uploadFile(context: BaseContext, config: UploadConfig, callback: AsyncCallback<UploadTask>): void;

  /**
   * Uploads a file. This API uses a promise to return the result.
   *
   * @permission ohos.permission.INTERNET
   * @param { UploadConfig } config - Upload configurations.
   * @returns { Promise<UploadTask> } Promise used to return the **UploadTask** object.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Upload
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead request.uploadFile(context: BaseContext, config: UploadConfig)
   */
  function upload(config: UploadConfig): Promise<UploadTask>;

  /**
   * Uploads a file. This API uses a promise to return the result. HTTP is supported. You can use 
   * [on('complete'|'fail')]{@link request.UploadTask.on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>)}
   * to obtain the upload success or error information.
   * 
   * > **NOTE**
   * >
   * > For details about how to obtain the context in the example, see 
   * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
   * > .
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context - Application-based context.
   * @param { UploadConfig } config - Upload configurations.
   * @returns { Promise<UploadTask> } Promise used to return the **UploadTask** object.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
   *     <br> 1. Missing mandatory parameters.
   *     <br> 2. Incorrect parameter type.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function uploadFile(context: BaseContext, config: UploadConfig): Promise<UploadTask>;

  /**
   * Defines the download task configuration.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   * @name DownloadConfig
   */
  interface DownloadConfig {
    /**
     * Resource URL. From API version 6 to 14, the value contains a maximum of 2048 characters; since API version 15, 
     * the value contains a maximum of 8192 characters. 
     * [Intercepting HTTP](docroot://basic-services/request/app-file-upload-download.md#intercepting-http) is supported.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    url: string;
    /**
     * HTTPS flag header to be included in the download request. The default value is empty.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    header?: Object;
    /**
     * Adds an HTTP or HTTPS header to be included with the download request.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    header?: Record<string, string>;
    /**
     * Whether download is allowed on a metered connection. The value **true** means the download is allowed, and 
     * **false** means the opposite. The default value is **false**.
     * 
     * > **NOTE**
     * > 
     * > In general cases, a mobile data connection is metered, while a Wi-Fi connection is not.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    enableMetered?: boolean;
    /**
     * Whether download is allowed on a roaming network. The value **true** means the download is allowed, and **false**
     * means the opposite. The default value is **false**.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    enableRoaming?: boolean;
    /**
     * Description of the download session. The default value is an empty string.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    description?: string;
    /**
     * Network type that can be used for download. The allowed network type is determined by bitwise operation of 
     * [network type constants](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)
     * . The following settings are supported:
     * 
     * - Only the cellular network is supported. The parameter is **NETWORK_MOBILE** or **0x00000001**.
     * - Only WLAN is supported. The parameter is **NETWORK_WIFI** or **0x00010000**.
     * - Both cellular network and WLAN are supported, which is the default settings. The parameter is 
     * **NETWORK_MOBILE **
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    networkType?: int;
    /**
     * Path where the downloaded file is stored. The default value is the cache directory of the caller (that is, the 
     * input **context**). The default file name is the part truncated from the last slash (/) in the URL.
     * 
     * - In the FA model, use the 
     * [Context.getCacheDir](docroot://reference/apis-ability-kit/js-apis-inner-app-context.md#contextgetcachedir) 
     * method to obtain the application storage path.
     * - In the Stage model, use the **AbilityContext** class in 
     * [Context (Context Base Class of the Stage Model)]{@link ./application/Context:Context} to obtain the file path.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    filePath?: string;
    /**
     * Download task name. The default value is **download**.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    title?: string;
    /**
     * Whether to enable the background task notification. When this parameter is enabled, the download status is 
     * displayed in the notification panel. The value **true** means the parameter is enabled, and **false** means the 
     * opposite. The default value is **false**.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    background?: boolean;
  }

  /**
   * Defines the download task information, which is the callback parameter of the 
   * [getTaskInfo]{@link request.DownloadTask.getTaskInfo()} API.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   * @name DownloadInfo [since 7 - 9]
   */
  interface DownloadInfo {
    /**
     * Description of the download task.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    description: string;
    /**
     * Real-time download size, in bytes.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    downloadedBytes: long;
    /**
     * Download task ID.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    downloadId: long;
    /**
     * Cause of the download failure. The value can be any constant in 
     * [Download Error Codes](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)
     * .
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    failedReason: int;
    /**
     * Name of the downloaded file.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    fileName: string;
    /**
     * URI of the saved file.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    filePath: string;
    /**
     * Cause of download pause. The value can be any constant in 
     * [Causes of Download Pause](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)
     * .
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    pausedReason: int;
    /**
     * Download task status code. The value can be any constant in 
     * [Download Task Status Codes](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)
     * .
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    status: int;
    /**
     * URI of the downloaded file.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    targetURI: string;
    /**
     * Name of the download task.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    downloadTitle: string;
    /**
     * Total size of the files to download, in bytes.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    downloadTotalBytes: long;
  }

  /**
   * The callback function for the download progress event.
   *
   * @param { long } receivedSize - the length of downloaded data, in bytes.
   * @param { long } totalSize - the length of data expected to be downloaded, in bytes.
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadProgressCallback = (receivedSize: long, totalSize: long) => void;

  /**
   * The callback function for the download complete event.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadCompleteCallback = () => void;

  /**
   * The callback function for the download pause event.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadPauseCallback = () => void;

  /**
   * The callback function for the download remove event.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadRemoveCallback = () => void;

  /**
   * The callback function for the download fail event.
   *
   * @param { int } err - the error code for download task.
   *     <br>The value should be an integer.
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadFailCallback = (err: int) => void;

  /**
   * Implements file downloads. Before using any APIs of this class, you must obtain a **DownloadTask** object, from a 
   * promise through [request.downloadFile]{@link request.downloadFile(context: BaseContext, config: DownloadConfig)} or
   * from a callback through 
   * [request.downloadFile]{@link request.downloadFile(context: BaseContext, config: DownloadConfig, callback: AsyncCallback<DownloadTask>)}
   * .
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   */
  interface DownloadTask {
    /**
     * Subscribes to download progress events. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > To maintain a balance between power consumption and performance, this API cannot be called when the application
     * > is running in the background.
     *
     * @param { 'progress' } type - Event type.<br>- **'progress'**: download progress.
     * @param { function } callback - Callback used to return the size of the uploaded file and the total size of the
     *     file to upload, in bytes. If the server uses the chunk mode for data transmission and the total file size
     *     cannot be obtained from the request header, the value of **totalSize** is treated as **-1**.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    on(type: 'progress', callback: (receivedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current download session is in process.
     *
     * @param { DownloadProgressCallback } callback - The callback function for the download progress event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onProgress(callback: DownloadProgressCallback): void;

    /**
     * Unsubscribes from download progress events.
     *
     * @param { 'progress' } type - Event type.<br>- **'progress'**: download progress.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, all callbacks of the
     *     current type will be unregistered.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    off(type: 'progress', callback?: (receivedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current download session is in process.
     *
     * @param { DownloadProgressCallback } [callback] - The callback function for the download progress event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offProgress(callback?: DownloadProgressCallback): void;

    /**
     * Subscribes to download events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'complete' | 'pause' | 'remove' } type - Event type.<br>- **'complete'**: download task completion.<br>-
     *     **'pause'**: download task pause.<br>- **'remove'**: download task removal.
     * @param { function } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'complete' | 'pause' | 'remove', callback: () => void): void;

    /**
     * Called when the current download session complete.
     *
     * @param { DownloadCompleteCallback } callback - The callback function for the download complete event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onComplete(callback: DownloadCompleteCallback): void;

	  /**
     * Called when the current download session pause.
     *
     * @param { DownloadPauseCallback } callback - The callback function for the download pause event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onPause(callback: DownloadPauseCallback): void;

    /**
     * Called when the current download session remove.
     *
     * @param { DownloadRemoveCallback } callback - The callback function for the download remove event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onRemove(callback: DownloadRemoveCallback): void;

    /**
     * Unsubscribes from download events.
     *
     * @param { 'complete' | 'pause' | 'remove' } type - Event type.<br>- **'complete'**: download task completion.<br>-
     *     **'pause'**: download task pause.<br>- **'remove'**: download task removal.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, all callbacks of the
     *     current type will be unregistered.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'complete' | 'pause' | 'remove', callback?: () => void): void;

    /**
     * Called when the current download session complete.
     *
     * @param { DownloadCompleteCallback } [callback] - The callback function for the download complete event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offComplete(callback?: DownloadCompleteCallback): void;

	  /**
     * Called when the current download session pause.
     *
     * @param { DownloadPauseCallback } [callback] - The callback function for the download pause event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offPause(callback?: DownloadPauseCallback): void;

	/**
     * Called when the current download session remove.
     *
     * @param { DownloadRemoveCallback } [callback] - The callback function for the download remove event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offRemove(callback?: DownloadRemoveCallback): void;

    /**
     * Subscribes to download failure events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'fail' } type - Event type.<br>- **'fail'**: download task failure.
     * @param { function } callback - Callback for the download task failure event.For details about the error codes,
     *     see
     *     [Download Error Codes](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)
     *     .
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'fail', callback: (err: int) => void): void;

    /**
     * Called when the current download session fails.
     *
     * @param { DownloadFailCallback } callback - The callback function for the download fail event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onFail(callback: DownloadFailCallback): void;

    /**
     * Unsubscribes from download failure events.
     *
     * @param { 'fail' } type - Event type.<br>- **'fail'**: download task failure.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, all callbacks of the
     *     current type will be unregistered.For details about the error codes, see
     *     [Download Error Codes](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)
     *     .
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'fail', callback?: (err: int) => void): void;

    /**
     * Called when the current download session fails.
     *
     * @param { DownloadFailCallback } [callback] - The callback function for the download fail event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offFail(callback?: DownloadFailCallback): void;

    /**
     * Deletes the download task. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates
     *     that the operation is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead request.UploadTask.delete(callback: AsyncCallback<boolean>)
     */
    remove(callback: AsyncCallback<boolean>): void;

    /**
     * Deletes the download task. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the operation
     *     is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead request.UploadTask.delete()
     */
    remove(): Promise<boolean>;

    /**
     * Pauses this download task. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.suspend(callback: AsyncCallback<boolean>)
     */
    pause(callback: AsyncCallback<void>): void;

    /**
     * Pauses this download task. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.suspend()
     */
    pause(): Promise<void>;

    /**
     * Restores the download task. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.restore(callback: AsyncCallback<boolean>)
     */
    resume(callback: AsyncCallback<void>): void;

    /**
     * Restores the download task. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.restore()
     */
    resume(): Promise<void>;

    /**
     * Queries this download task. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<DownloadInfo> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the **DownloadInfo** object obtained. Otherwise, **err**
     *     is an error object.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.getTaskInfo(callback: AsyncCallback<DownloadInfo>)
     */
    query(callback: AsyncCallback<DownloadInfo>): void;

    /**
     * Queries this download task. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<DownloadInfo> } Promise used to return the **DownloadInfo** object.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.getTaskInfo()
     */
    query(): Promise<DownloadInfo>;

    /**
     * Queries the MIME type of this download task. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and data is the **MimeType** object obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.getTaskMimeType(callback: AsyncCallback<string>)
     */
    queryMimeType(callback: AsyncCallback<string>): void;

    /**
     * Queries the MIME type of this download task. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<string> } Promise used to return the MIME type of a download task.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.getTaskMimeType()
     */
    queryMimeType(): Promise<string>;

    /**
     * Deletes the download task. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates
     *     that the operation is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(callback: AsyncCallback<boolean>): void;

    /**
     * Deletes the download task. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the operation
     *     is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(): Promise<boolean>;

    /**
     * Suspends this download task. You can use [restore]{@link request.DownloadTask.restore()} to restore the download.
     * This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates
     *     that the operation is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    suspend(callback: AsyncCallback<boolean>): void;

    /**
     * Suspends this download task. You can use [restore]{@link request.DownloadTask.restore()} to restore the download.
     * This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the operation
     *     is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    suspend(): Promise<boolean>;

    /**
     * Restores the download task. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates
     *     that the operation is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    restore(callback: AsyncCallback<boolean>): void;

    /**
     * Restores the download task. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the operation
     *     is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    restore(): Promise<boolean>;

    /**
     * Obtains the information about this download task. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<DownloadInfo> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the **DownloadInfo** object obtained. Otherwise, **err**
     *     is an error object.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskInfo(callback: AsyncCallback<DownloadInfo>): void;

    /**
     * Obtains the information about this download task. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<DownloadInfo> } Promise used to return a **DownloadInfo** object.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskInfo(): Promise<DownloadInfo>;

    /**
     * Obtains the MIME type (that is, media type of resources in HTTP) of a download task. This API uses an 
     * asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and data is the **MimeType** object obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskMimeType(callback: AsyncCallback<string>): void;

    /**
     * Obtains the MIME type (that is, media type of resources in HTTP) of a download task. This API uses a promise to 
     * return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<string> } Promise used to return the MIME type of a download task.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskMimeType(): Promise<string>;
  }

  /**
   * Describes the list of files in [UploadConfig]{@link request.UploadConfig}.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   * @name File [since 6 - 9]
   */
  interface File {
    /**
     * File name in the header when **multipart** is used.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    filename: string;
    /**
     * Name of a form item when **multipart** is used. The default value is **file**.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    name: string;
    /**
     * Local path for storing files.
     * 
     * Only **internal://cache/** is supported, that is, **context.cacheDir** of the caller (namely, cache directory of 
     * the input **context**).
     * 
     * Example: **internal://cache/path/to/file.txt**.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * Type of the file content. By default, the type is obtained based on the extension of the file name or URI.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    type: string;
  }

  /**
   * Describes the form data in [UploadConfig]{@link request.UploadConfig}.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   * @name RequestData [since 6 - 9]
   */
  interface RequestData {
    /**
     * Name of a form element.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    name: string;
    /**
     * Value of a form element.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    value: string;
  }

  /**
   * Describes the configuration of an upload task.
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   * @name UploadConfig [since 6 - 9]
   */
  interface UploadConfig {
    /**
     * Resource URL. From API version 6 to 14, the value contains a maximum of 2048 characters; since API version 15, 
     * the value contains a maximum of 8192 characters. 
     * [Intercepting HTTP](docroot://basic-services/request/app-file-upload-download.md#intercepting-http) is supported.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    url: string;
    /**
     * HTTP or HTTPS header added to an upload request.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    header: Object;
    /**
     * Adds an HTTP or HTTPS header to be included with the upload request.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    header: Record<string, string>;
    /**
     * HTTP request method. The value can be **POST** or **PUT**. The default value is **POST**. Use **POST** to add 
     * resources and **PUT** to modify resources.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    method: string;
    /**
     * Path index of the task. The default value is **0**.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    index?: int;
    /**
     * File start point to read when the upload task begins, in bytes. The default value is **0**. The value is a closed
     * interval, indicating that the file is read from the beginning.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    begins?: long;
    /**
     * File end point to read when the upload task ends, in bytes. The default value is **-1**. The value is a closed 
     * interval, indicating that the file is read till the end.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    ends?: long;
    /**
     * List of files to upload. The files are submitted in multipart/form-data format.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    files: Array<File>;
    /**
     * Form data in the request body.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    data: Array<RequestData>;
  }

  /**
   * Upload task information, which is the callback parameter of the 
   * [on('complete' | 'fail')]{@link request.UploadTask.on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>)}
   * and 
   * [off('complete' | 'fail')]{@link request.UploadTask.off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>)}
   * APIs.
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   * @name TaskState [since 9 - 9]
   */
  interface TaskState {
    /**
     * File path.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    path: string;
    /**
     * Return value of an upload task. The value **0** means that the task is successful, and other values means that 
     * the task fails. For details about the task result, see **message**.
     * 
     * You are advised to create an upload task by using 
     * [request.agent.create]{@link request.agent.create(context: BaseContext, config: Config)}and
     * handle exceptions based on standard error codes.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    responseCode: int;
    /**
     * Description of the upload task result.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * The callback function for the download progress event.
   *
   * @param { long } uploadedSize - the length of uploaded data, in bytes
   * @param { long } totalSize - the length of data expected to be uploaded, in bytes.
   * @syscap SystemCapability.MiscServices.Upload
   * @since 23 static
   */
  export type UploadProgressCallback = (uploadedSize: long, totalSize: long) => void;

  /**
   * The callback function for the HTTP Response Header event.
   *
   * @param { object } header - HTTP Response Header returned by the developer server.
   * @syscap SystemCapability.MiscServices.Upload
   * @since 23 static
   */
  export type UploadHeaderReceiveCallback = (header: object) => void;

  /**
   * Implements file uploads. Before using any APIs of this class, you must obtain an **UploadTask** object, from a 
   * promise through [request.uploadFile]{@link request.uploadFile(context: BaseContext, config: UploadConfig)} or from 
   * a callback through 
   * [request.uploadFile]{@link request.uploadFile(context: BaseContext, config: UploadConfig, callback: AsyncCallback<UploadTask>)}
   * .
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   */
  interface UploadTask {
    /**
     * Subscribes to upload progress events. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > To maintain a balance between power consumption and performance, this API cannot be called when the application
     * > is running in the background.
     *
     * @param { 'progress' } type - Event type. The value is fixed at **'progress'**, indicating upload progress.
     * @param { function } callback - Callback used to return the size of the uploaded file and the total size of the
     *     file to upload, in bytes.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    on(type: 'progress', callback: (uploadedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current upload session is in process.
     *
     * @param { UploadProgressCallback } callback - The callback function for the upload progress event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onProgress(callback: UploadProgressCallback): void;

    /**
     * Unsubscribes from upload progress events.
     *
     * @param { 'progress' } type - Event type.<br>- **'progress'**: upload progress.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, all callbacks of the
     *     current type will be unregistered.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    off(type: 'progress', callback?: (uploadedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current upload session is in process.
     *
     * @param { UploadProgressCallback } [callback] - The callback function for the upload progress event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offProgress(callback?: UploadProgressCallback): void;

    /**
     * Subscribes to HTTP response events for the upload task.This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'headerReceive' } type - Event type.<br>- **'headerReceive'**: The HTTP request receives a response.
     * @param { function } callback - Callback used to return the response content.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'headerReceive', callback: (header: object) => void): void;

    /**
     * Called when the header of the current upload session has been received.
     *
     * @param { UploadHeaderReceiveCallback } callback - The callback function for the HTTP Response Header event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onHeaderReceive(callback: UploadHeaderReceiveCallback): void;

    /**
     * Unsubscribes from HTTP response events for the upload task.
     *
     * @param { 'headerReceive' } type - Event type.<br>- **'headerReceive'**: The HTTP request receives a response.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, all callbacks of the
     *     current type will be unregistered.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'headerReceive', callback?: (header: object) => void): void;

    /**
     * Called when the header of the current upload session has been received.
     *
     * @param { UploadHeaderReceiveCallback } [callback] - The callback function for the HTTP Response Header event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offHeaderReceive(callback?: UploadHeaderReceiveCallback): void;

    /**
     * Subscribes to upload completion or failure events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'complete' | 'fail' } type - Type of the event to subscribe to.
     * @param { Callback<Array<TaskState>> } callback - Callback used to return the state of the upload task.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session complete.
     *
     * @param { Callback<Array<TaskState>> } callback - The callback function for the upload complete event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onComplete(callback: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session fail.
     *
     * @param { Callback<Array<TaskState>> } callback - The callback function for the upload fail event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onFail(callback: Callback<Array<TaskState>>): void;

    /**
     * Unsubscribes from upload completion or failure events.
     *
     * @param { 'complete' | 'fail' } type - Event type.<br>- **'complete'**: upload task completion.<br>- **'fail'**:
     *     upload task failure.
     * @param { Callback<Array<TaskState>> } [callback] - Callback to unregister. If this parameter is not specified,
     *     all callbacks of the current type will be unregistered.
     * @throws { BusinessError } 401 - the parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session complete.
     *
     * @param { Callback<Array<TaskState>> } [callback] - The callback function for the upload complete event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offComplete(callback?: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session fail.
     *
     * @param { Callback<Array<TaskState>> } [callback] - The callback function for the upload fail change event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offFail(callback?: Callback<Array<TaskState>>): void;

    /**
     * Deletes the upload task. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates
     *     that the operation is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead request.UploadTask.delete(callback: AsyncCallback<boolean>)
     */
    remove(callback: AsyncCallback<boolean>): void;

    /**
     * Deletes the upload task. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the operation
     *     is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead request.UploadTask.delete()
     */
    remove(): Promise<boolean>;

    /**
     * Deletes the upload task. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates
     *     that the operation is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(callback: AsyncCallback<boolean>): void;

    /**
     * Deletes the upload task. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > The scenarios for triggering error code **401 the parameters check fails** do not exist. Therefore, this error 
     * > code is removed from API version 12.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the operation
     *     is successful; **false** indicates the opposite.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(): Promise<boolean>;
  }

  /**
   * The request agent api.
   * Supports "background" and "frontend" tasks as while.
   * Though "background" and "frontend" here do not the same with process's concept.
   * All tasks will be executed at request manager service and recorded.
   * Background tasks is for concurrent transfer, such as caching videos for a later play.
   * Frontend tasks is for instant transfer, such as submitting forms for a consumption bill.
   * Background tasks use notification to tell user tasks' status information.
   * Frontend tasks use callback to tell caller tasks' status information.
   * Background has some automatically restore mechanism.
   * Frontend tasks controlled by caller.
   * Uses `multipart/form-data` in client request for upload.
   * A `Content-Disposition: attachment; filename=<filename>` response from server leads to download.
   * More details, please see the architecture documents of the request subsystem.
   * Only front-end mode is supported in cross-platform scenarios.
   * 
   * @syscap SystemCapability.Request.FileTransferAgent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  namespace agent {
    /**
     * ([Notification]{@link request.agent.Notification} 
     * visibility type) Displays completion notifications.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 21 dynamic
     */
    const VISIBILITY_COMPLETION: 1;
    /**
     * Indicates to show completion notification.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @stagemodelonly
     * @since 23 static
     */
    const VISIBILITY_COMPLETION: int;
    /**
     * ([Notification]{@link request.agent.Notification} 
     * visibility type) Displays progress notifications.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 21 dynamic
     */
    const VISIBILITY_PROGRESS: 2;
    /**
     * Indicates to show progress notification.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @stagemodelonly
     * @since 23 static
     */
    const VISIBILITY_PROGRESS: int;
    /**
     * Defines action options.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    enum Action {
      /**
       * Download.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      DOWNLOAD,
      /**
       * Upload.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      UPLOAD
    }

    /**
     * Defines mode options.
     * 
     * After foreground tasks of an application are switched to the background for a period of time, background tasks 
     * are not affected but foreground tasks will fail or pause.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    enum Mode {
      /**
       * Background task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      BACKGROUND,
      /**
       * Foreground task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      FOREGROUND
    }

    /**
     * Defines network options.
     * 
     * If the network does not meet the preset conditions, the tasks that have not been executed will await for 
     * execution, and the tasks that are being executed will fail or pause.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    enum Network {
      /**
       * Network of any type.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      ANY,
      /**
       * Wi-Fi network.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      WIFI,
      /**
       * Cellular data network.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      CELLULAR
    }

    /**
     * Defines a custom system event. You can use a common event API to obtain the event.
     * 
     * The upload and download SA has the **ohos.permission.SEND_TASK_COMPLETE_EVENT** permission. You can configure the
     * level-2 configuration file to which the metadata of an event points to intercept other event senders.
     * 
     * Use the **CommonEventData** type to transmit data related to common events. The members in **CommonEventData** 
     * are different from those described in [CommonEventData]{@link ./commonEvent/commonEventData:CommonEventData}. 
     * Specifically, **CommonEventData.code** indicates the task status, which is **0x40 COMPLETE** or **0x41 FAILED**, 
     * and **CommonEventData.data** indicates the task ID.
     * 
     * <!--Del-->
     * 
     * For details about how to obtain the event configuration and configure the level-2 configuration file, see 
     * [Subscribing to Common Events in Static Mode (for System Applications Only)](docroot://basic-services/common-event/common-event-static-subscription-sys.md)
     * .<!--DelEnd-->
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 11 dynamic
     * @since 23 static
     */
    enum BroadcastEvent {
      /**
       * Task completion event. The returned event code can be **0x40** or **0x41**, depending on whether the task is 
       * successful or fails.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11 dynamic
       * @since 23 static
       */
      COMPLETE = 'ohos.request.event.COMPLETE'
    }

    /**
     * Provides the file information of a table item.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface FileSpec {
      /**
       * File path.
       * 
       * - Relative path, which is in the cache directory of the caller.
       * 
       * Example: **./xxx/yyy/zzz.html** or **xxx/yyy/zzz.html**
       * 
       * - Internal protocol path, which can be **internal://** or its subdirectory. **internal** indicates the cache 
       * directory of the caller (that is, the input **context**), and **internal://cache** corresponds to 
       * **context.cacheDir**.
       * 
       * Example: **internal://cache/path/to/file.txt**
       * 
       * - Application sandbox directory. Only the **base** directory and its subdirectories are supported.
       * 
       * Example: **./data/storage/el1/base/path/to/file.txt**
       * 
       * - File protocol path, which must match the application bundle name. Only the **base** directory and its 
       * subdirectories are supported.
       * 
       * Example: **file://com.example.test/data/storage/el2/base/file.txt**
       * 
       * - Public files of users. Only upload tasks are supported.
       * 
       * Example: **file://media/Photo/path/to/file.img**. Only foreground tasks are supported.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      path: string;
      /**
       * MIME type of the file, which is obtained from the file name. The default value is the file name extension.
       * 
       * This API is deprecated since API version 18. You are advised to use **contentType** instead.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamiconly
       * @deprecated since 18
       * @useinstead request.agent.FileSpec.contentType
       */
      mimeType?: string;
      /**
       * File name. The default value is obtained from the file path.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      filename?: string;
      /**
       * Additional information. This parameter is not included in HTTP requests. The default value is empty.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      extras?: object;
      /**
       * The extras for the file information.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      extras?: Record<string, string>;
      /**
       * Content type of the file. The default value is the file name extension. This option is filled in the 
       * **Content-Type** field specified in the HTTP form.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 18 dynamic
       * @since 23 static
       */
      contentType?: string;
    }

    /**
     * Describes the form item of a task.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface FormItem {
      /**
       * Form parameter name.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      name: string;
      /**
       * Form parameter value.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      value: string | FileSpec | Array<FileSpec>;
    }

    /**
     * Describes the custom information of the notification bar.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    interface Notification {
      /**
       * Custom title, with a maximum of 1024 bytes. The default title is used if this parameter is not set.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      title?: string;
      /**
       * Custom body text, with a maximum of 3072 bytes. The default text is used if this parameter is not set.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      text?: string;
      /**
       * Disables the notification.
       * If the value is false, a notification will be displayed, otherwise nothing will be displayed.
       * If not specified, the value is false.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 20 dynamic
       * @since 23 static
       */
      disable?: boolean;
      /**
       * Task visibility mode for the notification bar, which is determined by bitwise operations on the
       * [VISIBILITY constant](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants-1). The options
       * are as follows:
       * - Only the completion notification is displayed. The parameter is **VISIBILITY_COMPLETION** or **1**. The
       * corresponding notification is displayed after the task is complete or fails.
       * - Only the progress notification is displayed when the task is in progress. The parameter is
       * **VISIBILITY_PROGRESS** or **2**. Completion notification is not displayed when the download task is complete
       * or fails.
       * - The progress notification and completion notification are displayed. The parameter is VISIBILITY_COMPLETION |
       * VISIBILITY_PROGRESS or **3**. The progress notification is displayed when the task is in progress. When the
       * download task is complete or fails, the completion notification is displayed as well.
       * If this parameter is not set, the **gauge** field is used for determination. If there is no **gauge** field,
       * only the completion notification is displayed.
       * The value should be an integer.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 21 dynamic
       * @since 23 static
       */
      visibility?: int;
      /**
       * Notification parameter, which is used to implement redirection after a task notification is tapped. The default
       * value is empty.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 22 dynamic
       * @since 23 static
       */
      wantAgent?: WantAgent;
    }

    /**
     * Defines the minimum speed of a task. If the task speed is lower than the preset value for a specified period of 
     * time, the task fails. The failure cause is 
     * [LOW_SPEED]{@link request.agent.Faults}.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface MinSpeed {
      /**
       * Minimum speed of a task, in byte/s. If the task speed is lower than this value for a specified period of time, 
       * the task fails. If the value is set to **0**, there is no minimum speed limit.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      speed: long;
      /**
       * Duration during which the task speed can be lower than the minimum speed, in seconds. If the task speed is 
       * lower than the preset value for a specified period of time, the task fails. If the value is set to **0**, there
       * is no minimum speed limit.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      duration: int;
    }

    /**
     * Defines the timeout configuration of a task. The task waiting duration is not counted. For details about the 
     * waiting reasons, see 
     * [WaitingReason<sup>20+</sup>]{@link request.agent.WaitingReason}
     * .
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface Timeout {
      /**
       * Task connection timeout interval, in seconds. The connection timeout interval indicates the maximum time 
       * required for establishing a connection between the client and server. If this parameter is not set, the default
       * value **60** is used. The minimum value is **1**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      connectionTimeout?: int;
      /**
       * Total timeout interval of a task, in seconds. The total timeout interval includes the time required for 
       * establishing a connection, sending a request, and receiving a response. If this parameter is not set, the 
       * default value **604800** is used. The minimum value is **1**, and the maximum value is **604800** (that is, one
       * week).
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      totalTimeout?: int;
    }

    /**
     * Provides the configuration information of an upload or download task.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface Config {
      /**
       * Task action.
       * 
       * - **UPLOAD**: Upload tasks.
       * - **DOWNLOAD**: Download tasks.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      action: Action;
      /**
       * Resource URL. From API version 6 to 14, the value contains a maximum of 2048 characters; since API version 15, 
       * the value contains a maximum of 8192 characters. 
       * [Intercepting HTTP](docroot://basic-services/request/app-file-upload-download.md#intercepting-http) is 
       * supported.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      url: string;
      /**
       * Task title. The value contains a maximum of 256 characters. The default value is **upload** or **download** in 
       * lowercase. Set the value to that of **action**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      title?: string;
      /**
       * Task description. The value contains a maximum of 1024 characters. The default value is a null string.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      description?: string;
      /**
       * Task mode. The default mode is background. Since API version 20, the task mode for downloading files to the 
       * user file folder must be set to **request.agent.Mode.FOREGROUND**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      mode?: Mode;
      /**
       * Whether to overwrite an existing file during the download. The default value is **false**.
       * 
       * - **true**: Overwrite the existing file.
       * - **false**: Do not overwrite the existing file. In this case, the download fails.
       * 
       * Since API version 20, the overwrite mode for downloading files to the user file folder must be set to **true**.
       * 
       * In this case, do not create multiple tasks to download content to the same file at a time. Otherwise, the file 
       * content will be disordered.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      overwrite?: boolean;
      /**
       * Standard HTTP method for the task. The value can be **GET**, **POST**, or **PUT**, which is case-insensitive.
       * 
       * - For the upload task, use **PUT** or **POST**. The default value is **PUT**.
       * - For the download task, use **GET** or **POST**. The default value is **GET**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      method?: string;
      /**
       * HTTP headers to be included in the task.
       * 
       * - For the upload task, the default **Content-Type** is **multipart/form-data**.
       * - For the download task, the default **Content-Type** is **application/json**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      headers?: object;
      /**
       * The HTTP headers.
       * For upload request, the `Content-Type` is forced to `multipart/form-data`.
       * For download request, the default `Content-Type` is `application/json`.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      headers?: Record<string, string>;
      /**
       * - For the download task, the value is a string, typically in JSON format (an object will be converted to a JSON
       * string); the default value is null.
       * - For the upload task, the value is Array<
       * [FormItem]{@link request.agent.FormItem}>. Since API 
       * version 15, a maximum of 100 files can be uploaded in a single task. This parameter is left empty by default.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      data?: string | Array<FormItem>;
      /**
       * Path for storing downloaded files. The options are as follows:
       * 
       * - Relative path, which is in the cache directory of the caller, for example, **./xxx/yyy/zzz.html** or 
       * **xxx/yyy/zzz.html**.
       * - Internal protocol path, which can be **internal://** or its subdirectory. **internal** indicates the cache 
       * directory of the caller (that is, the input **context**), and **internal://cache** corresponds to 
       * **context.cacheDir**, for example, **internal://cache/path/to/file.txt**.
       * - Application sandbox path. Only the **base** directory and its subdirectories are supported, for example, 
       * **./data/storage/el1/base/path/to/file.txt**.
       * - File protocol path, which can be the path of an application file or a user file. For the application file, 
       * the application bundle name must be matched and only the **base** directory and its subdirectories are 
       * supported, for example, **file://com.example.test/data/storage/el2/base/file.txt**. For the user file, its path
       * must be the user file URI created by the caller.
       * 
       * Since API version 20, the default file path can be the cache path of the caller (that is, the passed context), 
       * except for 
       * [downloading network resource files to the user file](docroot://basic-services/request/app-file-upload-download.md#downloading-network-resource-files-to-the-user-file)
       * . The default file name is the part truncated from the last slash (/) in the URL.
       *
       * @default ./
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      saveas?: string;
      /**
       * Network used for the task. The default value is **ANY** (Wi-Fi or cellular).
       *
       * @default Network.ANY
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      network?: Network;
      /**
       * Whether the task is allowed on a metered network. The default value is **false**.
       * 
       * - **true**: allowed
       * - **false**: not allowed
       *
       * @default false
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      metered?: boolean;
      /**
       * Whether the task is allowed on a roaming network. The default value is **true**.
       * 
       * - **true**: allowed
       * - **false**: not allowed
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      roaming?: boolean;
      /**
       * Whether automatic retry is enabled for the task. This parameter is only applicable to background tasks. The 
       * default value is **true**.
       * 
       * - **true**: enabled
       * - **false**: not allowed
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      retry?: boolean;
      /**
       * Whether redirection is allowed. The default value is **true**.
       * 
       * - **true**: allowed
       * - **false**: not allowed
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      redirect?: boolean;
      /**
       * Proxy address. The value contains a maximum of 512 characters.
       * 
       * It is in the format of **http://<***domain or address***>:<***port***>**. By default, this parameter is left 
       * empty.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 12 dynamic
       * @since 23 static
       */
      proxy?: string;
      /**
       * Path index of the task. It is usually used for resumable transfers. The default value is **0**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      index?: int;
      /**
       * File start point of the task, in bytes. It is usually used for resumable transfers. The default value is **0**.
       * The value is a closed interval.
       * 
       * - For the download task, the value is obtained by sending an HTTP range request to read the start position when
       * the server starts to download files.
       * - For the upload task, the value is obtained at the start position of the upload.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      begins?: long;
      /**
       * File end point of the task, in bytes. It is usually used for resumable transfers. The default value is **-1**. 
       * The value is a closed interval.
       * 
       * - For the download task, the value is obtained by sending an HTTP range request to read the end position when 
       * the server starts to download files.
       * - For the upload task, the value is obtained at the end position of the upload.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      ends?: long;
      /**
       * Whether to send progress notifications. This parameter applies only to background tasks. The default value is 
       * **false**.
       * 
       * - **false**: Progress notifications are not sent. This means that a notification is sent only to indicate the 
       * result of the total task.
       * - **true**: Progress notifications are sent to indicate the result of each file.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      gauge?: boolean;
      /**
       * - If this parameter is set to **true**, the task fails when the file size cannot be obtained.
       * - If this parameter is set to **false**, the task continues when the file size is set to **-1**.
       * 
       * The default value is **false**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      precise?: boolean;
      /**
       * Task token. To query a task with a token, you need to provide the token and use 
       * [request.agent.touch]{@link request.agent.touch(id: string, token: string, callback: AsyncCallback<TaskInfo>)}. 
       * Otherwise, the specified task cannot be queried. The value contains 8 to 2048 bytes. This parameter is left 
       * empty by default.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      token?: string;
      /**
       * Priority of the task. The priority of a foreground task is higher than that of a background task. For tasks in 
       * the same mode, a smaller value indicates a higher priority.
       * 
       * Default value: **0**
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11 dynamic
       * @since 23 static
       */
      priority?: int;
      /**
       * Additional information of the task. This parameter is left empty by default.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      extras?: object;
      /**
       * The extras for the configuration.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      extras?: Record<string, string>;
      /**
       * Whether to use a single request to upload multiple files. If yes, **multipart/form-data** must be used.
       * 
       * - **false**: A single request is used to upload one file.
       * - **true**: A single request is used to upload multiple files.
       * 
       * The default value is **false**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      multipart?: boolean;
      /**
       * Custom settings for the notification bar. The default value is **{}**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      notification?: Notification;
      /**
       * Minimum speed, which is disabled by default.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      minSpeed?: MinSpeed;
      /**
       * Custom timeout interval. The default connection timeout interval is 60 seconds, and the default total timeout 
       * interval is 604800 seconds (one week). If retry is set to **true**, the 
       * [timeout]{@link request.agent.Timeout} event triggers 
       * immediate retry, which will obscure the timeout event itself. As a result, the internal 
       * [timeout]{@link request.agent.Timeout} condition has 
       * been triggered but the 
       * [timeout]{@link request.agent.Timeout} event is not 
       * observable. Set **retry** to **false** to explicitly observe the 
       * [timeout]{@link request.agent.Timeout} event.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      timeout?: Timeout;
    }

    /**
     * Defines the current task status.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    enum State {
      /**
       * The task is initialized based on the configuration specified in 
       * [Config]{@link request.agent.Config}.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      INITIALIZED = 0x00,
      /**
       * The task lacks resources for running or the resources for retries, or does not match the network status.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      WAITING = 0x10,
      /**
       * The task is being executed.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      RUNNING = 0x20,
      /**
       * The task has failed at least once and is being executed again.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      RETRYING = 0x21,
      /**
       * The task is suspended and will be resumed later.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      PAUSED = 0x30,
      /**
       * The task is stopped.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      STOPPED = 0x31,
      /**
       * The task is complete.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      COMPLETED = 0x40,
      /**
       * The task fails.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      FAILED = 0x41,
      /**
       * The task is removed.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      REMOVED = 0x50
    }

    /**
     * Describes the data structure of the task progress.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface Progress {
      /**
       * Current task status.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly state: State;
      /**
       * Index of the file that is being processed in the task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly index: int;
      /**
       * Size of processed data in the current file in the task, in bytes.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly processed: long;
      /**
       * Size of a file in a task, in bytes. If the server uses the chunk mode for data transmission and the total file 
       * size cannot be obtained from the request header, the value of **sizes** is treated as **-1**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly sizes: Array<long>;
      /**
       * Extra information of the task, for example, the header and body of the response from the server. The default 
       * value is empty.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      readonly extras?: object;
      /**
       * The extras for an interaction.
       * Such as headers and body of response from server.
       * But when the Content-Disposition header responded,
       * <br>the body will be into the uri of its attachment only, the body here is empty.
       * {"headers": {"key": v}, "body": "contents"}.
       * The "body" field is not supported in cross-platform scenarios.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      readonly extras?: Record<string, string>;
    }

    /**
     * Defines the cause of a task failure.
     * 
     * > **NOTE**
     * >
     * > In API version 12 or earlier, only serial connection to the IP addresses associated with the specified domain 
     * > name is supported, and the connection time for a single IP address is not controllable. If the first IP address
     * > returned by the DNS is blocked, a handshake timeout may occur, leading to a **TIMEOUT** error.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    enum Faults {
      /**
       * Other fault.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      OTHERS = 0xFF,
      /**
       * Network disconnection.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      DISCONNECTED = 0x00,
      /**
       * Timeout.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      TIMEOUT = 0x10,
      /**
       * Protocol error, for example, an internal server error (500) or a data range that cannot be processed (416).
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      PROTOCOL = 0x20,
      /**
       * Parameter error, for example, incorrect URL format.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      PARAM = 0x30,
      /**
       * File system I/O error, for example, an error that occurs during the open, search, read, write, or close 
       * operation.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      FSIO = 0x40,
      /**
       * DNS resolution error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      DNS = 0x50,
      /**
       * TCP connection error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      TCP = 0x60,
      /**
       * SSL connection error, for example, a certificate error or certificate verification failure.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      SSL = 0x70,
      /**
       * Redirection error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      REDIRECT = 0x80,
      /**
       * Low speed.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      LOW_SPEED = 0x90
    }

    /**
     * Defines the filter criteria.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface Filter {
      /**
       * Specify the package name of an application.
       * Only for advanced search, common search will be fixed to the caller.
       * A "*" means any bundle.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 10 dynamic
       * @since 23 static
       */
      bundle?: string;
      /**
       * Unix timestamp of the end time, in milliseconds. The default value is the invoking time.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      before?: long;
      /**
       * Unix timestamp of the start time, in milliseconds. The default value is the invoking time minus 24 hours.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      after?: long;
      /**
       * Task state. If this parameter is not set, all tasks are queried.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      state?: State;
      /**
       * Task action.
       * 
       * - **UPLOAD**: Upload tasks.
       * - **DOWNLOAD**: Download tasks.
       * - If this parameter is not set, all tasks are queried.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      action?: Action;
      /**
       * Task mode.
       * 
       * - **FOREGROUND**: foreground task.
       * - **BACKGROUND**: background task.
       * - If this parameter is not set, all tasks are queried.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      mode?: Mode;
    }

    /**
     * Defines the data structure of the task information for query. The fields available vary depending on the query 
     * type.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface TaskInfo {
      /**
       * The UID of an application.
       * For system query only.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 10 dynamic
       * @since 23 static
       */
      readonly uid?: string;
      /**
       * The bundle name.
       * For system query only.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 10 dynamic
       * @since 23 static
       */
      readonly bundle?: string;
      /**
       * Path for storing downloaded files.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly saveas?: string;
      /**
       * Task URL.
       * 
       * - Use [request.agent.show]{@link request.agent.show(id: string)}
       * and [request.agent.touch]{@link request.agent.touch(id: string, token: string)}
       * to query the value.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly url?: string;
      /**
       * Task value.
       * 
       * - Use [request.agent.show]{@link request.agent.show(id: string)}
       * and [request.agent.touch]{@link request.agent.touch(id: string, token: string)}
       * to query the value.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly data?: string | Array<FormItem>;
      /**
       * Task ID.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly tid: string;
      /**
       * Task title.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly title: string;
      /**
       * Task description.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly description: string;
      /**
       * Task action.
       * 
       * - **UPLOAD**: Upload tasks.
       * - **DOWNLOAD**: Download tasks.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly action: Action;
      /**
       * Task mode.
       * 
       * - **FOREGROUND**: foreground task.
       * - **BACKGROUND**: background task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly mode: Mode;
      /**
       * Priority of the task. The priority of a foreground task is higher than that of a background task. For tasks in 
       * the same mode, a smaller value indicates a higher priority.
       * 
       * Default value: **0**
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11 dynamic
       * @since 23 static
       */
      readonly priority: int;
      /**
       * MIME type in the task configuration.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly mimeType: string;
      /**
       * Task progress.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly progress: Progress;
      /**
       * Whether to send progress notifications. This parameter applies only to background tasks.
       * 
       * - **false**: Progress notifications are not sent. This means that a notification is sent only to indicate the 
       * result of the total task.
       * - **true**: Progress notifications are sent to indicate the result of each file.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10 dynamic
       * @since 23 static
       */
      readonly gauge: boolean;
      /**
       * Unix timestamp when the task is created, in milliseconds. The value is generated by the system of the current 
       * device.
       * 
       * Note: When 
       * [request.agent.search]{@link request.agent.search(filter: Filter, callback: AsyncCallback<Array<string>>)} 
       * is used for query, this value must be within the range of [after,before] for the task ID to be obtained. For 
       * details about **before** and **after**, see 
       * [Filter]{@link request.agent.Filter}.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly ctime: long;
      /**
       * Unix timestamp when the task state changes, in milliseconds. The value is generated by the system of the 
       * current device.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly mtime: long;
      /**
       * Whether automatic retry is enabled for the task. This parameter applies only to background tasks.
       * 
       * - **true**: enabled
       * - **false**: The automatic retry is disabled.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10 dynamic
       * @since 23 static
       */
      readonly retry: boolean;
      /**
       * Number of retries of the task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10 dynamic
       * @since 23 static
       */
      readonly tries: int;
      /**
       * Failure cause of the task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly faults: Faults;
      /**
       * Reason why the task is waiting, failed, stopped, or paused.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly reason: string;
      /**
       * Extra information of the task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       */
      readonly extras?: object;
      /**
       * The extras of a task.
       * For frontend, nothing now.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      readonly extras?: Record<string, string>;
    }

    /**
     * Describes the data structure of the task response header.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    interface HttpResponse {
      /**
       * HTTP version.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      readonly version: string,
      /**
       * HTTP response status code.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      readonly statusCode: int,
      /**
       * HTTP response cause.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      readonly reason: string,
      /**
       * HTTP response header.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      readonly headers: Map<string, Array<string>>,
    }

    /**
     * Enumerates the reasons why a task is waiting.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    enum WaitingReason {
      /**
       * The task queue is full.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      TASK_QUEUE_FULL = 0x00,
      /**
       * The required network conditions are not met.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      NETWORK_NOT_MATCH = 0x01,
      /**
       * The application has been running in the background for a long time.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      APP_BACKGROUND = 0x02,
      /**
       * The user is inactive.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      USER_INACTIVATED = 0x03,
    }

    /**
     * The callback function for the download progress event.
     *
     * @param { Progress } progress - callback function with a `Progress` argument.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 static
     */
    export type ProgressCallback = (progress: Progress) => void;

    /**
     * Implements an upload or download task. Before using this API, you must obtain a **Task** object, from a promise 
     * through 
     * [request.agent.create]{@link request.agent.create(context: BaseContext, config: Config)} or 
     * from a callback through 
     * [request.agent.create]{@link request.agent.create(context: BaseContext, config: Config, callback: AsyncCallback<Task>)}.
     * 
     * > **NOTE**
     * >
     * > The **Task** object and its mounting callback function are released and automatically reclaimed by the system 
     * > after the **remove** method is called.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface Task {
      /**
       * Task ID, which is unique and automatically generated by the system.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly tid: string;
      /**
       * Task configuration.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      config: Config;
      /**
       * Subscribes to task progress changes. This API uses an asynchronous callback to return the result.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'progress' } event - Event type.<br>- **'progress'**: task progress.
       * @param { function } callback - Callback to be invoked when the specified event occurs.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - task mode error. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      on(event: 'progress', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onProgress(callback: ProgressCallback): void;
      /**
       * Unsubscribes from task progress events.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'progress' } event - Event type.<br>- **'progress'**: task progress.
       * @param { function } callback - Callback to be invoked when the specified event occurs. If this parameter is not
       *     specified, all callbacks of the task progress events are unregistered.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - task mode error. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      off(event: 'progress', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offProgress(callback?: ProgressCallback): void;
      /**
       * Subscribes to task completion events. This API uses an asynchronous callback to return the result.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'completed' } event - Event type.<br>- **'completed'**: task completion.
       * @param { function } callback - Callback to be invoked when the specified event occurs.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - task mode error. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      on(event: 'completed', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onCompleted(callback: ProgressCallback): void;
      /**
       * Unsubscribes from task completion events.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'completed' } event - Event type.<br>- **'completed'**: task completion.
       * @param { function } callback - Callback to be invoked when the specified event occurs. If this parameter is not
       *     specified, all callbacks of the task completion events are unregistered.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      off(event: 'completed', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offCompleted(callback?: ProgressCallback): void;
      /**
       * Subscribes to task failure events. This API uses an asynchronous callback to return the result. You can call 
       * [request.agent.show]{@link request.agent.show(id: string)} to 
       * view the error cause.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'failed' } event - Event type.<br>- **'failed'**: task failure.
       * @param { function } callback - Callback to be invoked when the specified event occurs.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      on(event: 'failed', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onFailed(callback: ProgressCallback): void;
      /**
       * Unsubscribes from task failure events.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'failed' } event - Event type.<br>- **'failed'**: task failure.
       * @param { function } callback - Callback to be invoked when the specified event occurs. If this parameter is not
       *     specified, all callbacks of the task failure events are unregistered.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      off(event: 'failed', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offFailed(callback?: ProgressCallback): void;
      /**
       * Subscribes to task pause events. This API uses an asynchronous callback to return the result.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'pause' } event - Event type.<br>- **'pause'**: task pause.
       * @param { function } callback - Callback to be invoked when the specified event occurs.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      on(event: 'pause', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onPause(callback: ProgressCallback): void;
      /**
       * Unsubscribes from the foreground task pause event.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'pause' } event - Event type.<br>- **'pause'**: task pause.
       * @param { function } callback - Callback to be invoked when the specified event occurs. If this parameter is not
       *     specified, all callbacks of the task pause events are unregistered.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      off(event: 'pause', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offPause(callback?: ProgressCallback): void;
      /**
       * Subscribes to task resume events. This API uses an asynchronous callback to return the result.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'resume' } event - Event type.<br>- **'resume'**: task resume.
       * @param { function } callback - Callback to be invoked when the specified event occurs.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      on(event: 'resume', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onResume(callback: ProgressCallback): void;
      /**
       * Unsubscribes from foreground task resume events.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'resume' } event - Event type.<br>- **'resume'**: task resume.
       * @param { function } callback - Callback to be invoked when the specified event occurs. If this parameter is not
       *     specified, all callbacks of the task resume events are unregistered.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      off(event: 'resume', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offResume(callback?: ProgressCallback): void;
      /**
       * Subscribes to task removal events. This API uses an asynchronous callback to return the result.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'remove' } event - Event type.<br>- **'remove'**: task removal.
       * @param { function } callback - Callback to be invoked when the specified event occurs.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      on(event: 'remove', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onRemove(callback: ProgressCallback): void;
      /**
       * Unsubscribes from the task removal event.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'remove' } event - Event type.<br>- **'remove'**: task removal.
       * @param { function } callback - Callback to be invoked when the specified event occurs. If this parameter is not
       *     specified, all callbacks of the task removal events are unregistered.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Mandatory parameters are left unspecified.
       *     <br> 2. Incorrect parameter types.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      off(event: 'remove', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offRemove(callback?: ProgressCallback): void;
      /**
       * Subscribes to task response headers. This API uses an asynchronous callback to return the result.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'response' } event - Event type.<br>- **'response'**: task response.
       * @param { Callback<HttpResponse> } callback - Callback used to return the data structure of the task response
       *     header.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       */
      on(event: 'response', callback: Callback<HttpResponse>): void;
      /**
       * Enables the response callback.
       *
       * @param { Callback<HttpResponse> } callback - callback function with an `HttpResponse` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onResponse(callback: Callback<HttpResponse>): void;
      /**
       * Unsubscribes from task response headers.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'response' } event - Event type.<br>- **response**: task response.
       * @param { Callback<HttpResponse> } callback - Callback to unregister. If this parameter is not specified, all
       *     callbacks of the current type will be unregistered.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       */
      off(event: 'response', callback?: Callback<HttpResponse>): void;
      /**
       * Disables the response callback.
       *
       * @param { Callback<HttpResponse> } [callback] - callback function with an `HttpResponse` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offResponse(callback?: Callback<HttpResponse>): void;
      /**
       * Subscribes to task failure events. This API uses a callback to return the result.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'faultOccur' } event - Event type.<br>- **'faultOccur'**: task failure.
       * @param { Callback<Faults> } callback - Callback used to return the failure cause of the task.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      on(event: 'faultOccur', callback: Callback<Faults>): void;
      /**
       * Enables the 'faultOccur' callback.
       * This callback is triggered when the task failed.
       * The returned `Faults` will contain the reason why the task failed.
       *
       * @param { Callback<Faults> } callback - callback function with a `Faults` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onFaultOccur(callback: Callback<Faults>): void;
      /**
       * Unsubscribes from task failure events.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'faultOccur' } event - Event type.<br>- **'faultOccur'**: task failure.
       * @param { Callback<Faults> } callback - Callback to unregister. If this parameter is not specified, all
       *     callbacks of the current type will be unregistered.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      off(event: 'faultOccur', callback?: Callback<Faults>): void;
      /**
       * Disables the 'faultOccur' callback.
       *
       * @param { Callback<Faults> } [callback] - callback function with a `Faults` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offFaultOccur(callback?: Callback<Faults>): void;
      /**
       * Subscribes to task wait events. This API uses a callback to return the result.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'wait' } event - Event type.<br>- 'wait': The task is waiting.
       * @param { Callback<WaitingReason> } callback - Callback used to return the waiting reason of the task.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      on(event: 'wait', callback: Callback<WaitingReason>): void;
      /**
       * Enables the wait callback.
       * This callback is triggered when the task changes from other states to the waiting state.
       * The returned `WaitingReason` will contain the reason why the task enters waiting state.
       *
       * @param { Callback<WaitingReason> } callback - callback function with an `WaitingReason` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onWait(callback: Callback<WaitingReason>): void;
      /**
       * Unsubscribes from task waiting events.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @param { 'wait' } event - Event type.<br>- 'wait': The task is waiting.
       * @param { Callback<WaitingReason> } callback - Callback to unregister. If this parameter is not specified, all
       *     callbacks of the current type will be unregistered.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      off(event: 'wait', callback?: Callback<WaitingReason>): void;
      /**
       * Disables the wait callback.
       *
       * @param { Callback<WaitingReason> } [callback] - callback function with an `WaitingReason` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offWait(callback?: Callback<WaitingReason>): void;
      /**
       * Starts a task. This API uses an asynchronous callback to return the result.
       * 
       * Tasks in the following states can be started:
       * 
       * 1. Task created by **request.agent.create**.
       * 2. Download tasks that are created by **request.agent.create** but have failed or paused.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @permission ohos.permission.INTERNET
       * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
       *     **err** is **undefined**. Otherwise, **err** is an error object.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      start(callback: AsyncCallback<void>): void;
      /**
       * Starts a task. This API uses a promise to return the result.
       * 
       * Tasks in the following states can be started:
       * 
       * 1. Task created by **request.agent.create**.
       * 2. Download tasks that are created by **request.agent.create** but have failed or paused.
       * 
       * > **NOTE**
       * >
       * > For details about how to obtain the context in the example, see 
       * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
       * > .
       *
       * @permission ohos.permission.INTERNET
       * @returns { Promise<void> } Promise that returns no value.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      start(): Promise<void>;
      /**
       * Pauses a task that is waiting, running, or retrying. A paused task can be resumed by 
       * [resume]{@link request.agent.Task.resume(callback: AsyncCallback<void>)}. This API uses an 
       * asynchronous callback to return the result.
       *
       * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
       *     **err** is **undefined**. Otherwise, **err** is an error object.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 10 dynamic
       * @since 23 static
       */
      pause(callback: AsyncCallback<void>): void;
      /**
       * Pauses a task that is waiting, running, or retrying. A paused task can be resumed by 
       * [resume]{@link request.agent.Task.resume(callback: AsyncCallback<void>)}. This API uses a promise to 
       * return the result.
       *
       * @returns { Promise<void> } Promise that returns no value.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 10 dynamic
       * @since 23 static
       */
      pause(): Promise<void>;
      /**
       * Resumes a paused task. This API uses an asynchronous callback to return the result.
       *
       * @permission ohos.permission.INTERNET
       * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
       *     **err** is **undefined**. Otherwise, **err** is an error object.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 10 dynamic
       * @since 23 static
       */
      resume(callback: AsyncCallback<void>): void;
      /**
       * Resumes a paused task. This API uses a promise to return the result.
       *
       * @permission ohos.permission.INTERNET
       * @returns { Promise<void> } Promise that returns no value.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 10 dynamic
       * @since 23 static
       */
      resume(): Promise<void>;
      /**
       * Stops a task that is running, waiting, or retrying. A paused task can be resumed by 
       * [start]{@link request.agent.Task.start(callback: AsyncCallback<void>)}. This API uses an asynchronous 
       * callback to return the result.
       *
       * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
       *     **err** is **undefined**. Otherwise, **err** is an error object.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      stop(callback: AsyncCallback<void>): void;
      /**
       * Stops a task that is running, waiting, or retrying. A paused task can be resumed by 
       * [start]{@link request.agent.Task.start(callback: AsyncCallback<void>)}. This API uses a promise to 
       * return the result.
       *
       * @returns { Promise<void> } Promise that returns no value.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      stop(): Promise<void>;
      /**
       * Sets the maximum number of bytes that can be transmitted by a task per second. This API uses a promise to 
       * return the result.
       *
       * @param { long } speed - Maximum number of bytes that can be transmitted by a task per second, with a minimum of
       *     16384 bytes. The value cannot be less than the minimum speed value specified by
       *     [MinSpeed]{@link request.agent.MinSpeed}.
       * @returns { Promise<void> } Promise that returns no value.
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 18 dynamic
       * @since 23 static
       */
      setMaxSpeed(speed: long): Promise<void>;
    }

    /**
     * Creates an upload or download task and adds it to the queue. This API uses an asynchronous callback to return the
     * result. HTTP/HTTPS is supported.
     * 
     * > **NOTE**
     * >
     * > For details about how to obtain the context in the example, see 
     * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
     * > .
     *
     * @permission ohos.permission.INTERNET
     * @param { BaseContext } context - Application-based context.
     * @param { Config } config - Task configuration.
     * @param { AsyncCallback<Task> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the **Task** object obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400001 - Invalid file or file system error.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900004 - The application task queue is full.
     * @throws { BusinessError } 21900005 - Operation with wrong task mode.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function create(context: BaseContext, config: Config, callback: AsyncCallback<Task>): void;

    /**
     * Creates an upload or download task and adds it to the queue. This API uses a promise to return the result. HTTP/
     * HTTPS is supported.
     * 
     * > **NOTE**
     * >
     * > For details about how to obtain the context in the example, see 
     * > [Obtaining the Context of UIAbility](docroot://application-models/uiability-usage.md#obtaining-the-context-of-uiability)
     * > .
     *
     * @permission ohos.permission.INTERNET
     * @param { BaseContext } context - Application-based context.
     * @param { Config } config - Task configuration.
     * @returns { Promise<Task> } Promise used to return the created task.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400001 - Invalid file or file system error.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900004 - The application task queue is full.
     * @throws { BusinessError } 21900005 - Operation with wrong task mode.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function create(context: BaseContext, config: Config): Promise<Task>;

    /**
     * Obtains task information based on the task ID. This API uses a promise to return the result.
     *
     * @param { BaseContext } context - Application-based context.
     * @param { string } id - Task ID.
     * @param { string } token - Token for task query. The default value is empty.
     * @returns { Promise<Task> } Promise used to return the created task.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 11 dynamic
     * @since 23 static
     */
    function getTask(context: BaseContext, id: string, token?: string): Promise<Task>;

    /**
     * Removes a specified task of the invoker. If the task is being executed, the task is forced to stop. This API uses
     * an asynchronous callback to return the result. After this API is called, the **task** object and its callback 
     * function are released.
     *
     * @param { string } id - Task ID.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function remove(id: string, callback: AsyncCallback<void>): void;

    /**
     * Removes a specified task of the invoker. If the task is being executed, the task is forced to stop. This API uses
     * a promise to return the result. After this API is called, the **task** object and its callback function are 
     * released.
     *
     * @param { string } id - Task ID.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function remove(id: string): Promise<void>;

    /**
     * Queries the task details based on the task ID. This API uses an asynchronous callback to return the result.
     *
     * @param { string } id - Task ID.
     * @param { AsyncCallback<TaskInfo> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the **TaskInfo** object obtained. Otherwise, **err** is an error
     *     object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function show(id: string, callback: AsyncCallback<TaskInfo>): void;

    /**
     * Queries the task details based on the task ID. This API uses a promise to return the result.
     *
     * @param { string } id - Task ID.
     * @returns { Promise<TaskInfo> } Promise used to return the **TaskInfo** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function show(id: string): Promise<TaskInfo>;

    /**
     * Queries the task details based on the task ID and token. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { string } id - Task ID.
     * @param { string } token - Token for task query.
     * @param { AsyncCallback<TaskInfo> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the **TaskInfo** object obtained. Otherwise, **err** is an error
     *     object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function touch(id: string, token: string, callback: AsyncCallback<TaskInfo>): void;

    /**
     * Queries the task details based on the task ID and token. This API uses a promise to return the result.
     *
     * @param { string } id - Task ID.
     * @param { string } token - Token for task query.
     * @returns { Promise<TaskInfo> } Promise used to return the **TaskInfo** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function touch(id: string, token: string): Promise<TaskInfo>;

    /**
     * Searches for task IDs based on 
     * [Filter]{@link request.agent.Filter}. The IDs of all 
     * tasks from the invoking time to 24 hours ago are searched. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the task ID. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Incorrect parameter type.
     *     <br> 2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function search(callback: AsyncCallback<Array<string>>): void;

    /**
     * Searches for task IDs based on 
     * [Filter]{@link request.agent.Filter}. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { Filter } filter - Filter criteria.
     * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the task ID. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Incorrect parameter type.
     *     <br> 2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function search(filter: Filter, callback: AsyncCallback<Array<string>>): void;

    /**
     * Searches for task IDs based on 
     * [Filter]{@link request.agent.Filter}. This API uses a 
     * promise to return the result.
     *
     * @param { Filter } filter - Filter criteria. The default value is empty.
     * @returns { Promise<Array<string>> } Promise used to return the task IDs that meet the filter criteria.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Incorrect parameter type.
     *     <br> 2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function search(filter?: Filter): Promise<Array<string>>;

    /**
     * Queries specified task details.
     * Creates a group based on GroupConfig
     *
     * @permission ohos.permission.DOWNLOAD_SESSION_MANAGER or ohos.permission.UPLOAD_SESSION_MANAGER
     * @param { string } id the task id.
     * @param { AsyncCallback<TaskInfo> } callback callback function with a `TaskInfo` argument for informations of the
     *     current task.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    function query(id: string, callback: AsyncCallback<TaskInfo>): void;

    /**
     * Queries specified task details.
     *
     * @permission ohos.permission.DOWNLOAD_SESSION_MANAGER or ohos.permission.UPLOAD_SESSION_MANAGER
     * @param { string } id the task id.
     * @returns { Promise<TaskInfo> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    function query(id: string): Promise<TaskInfo>;

    /**
     * Describes group configuration options for download tasks.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    interface GroupConfig {
      /**
       * Whether to send progress notifications. This parameter applies only to background tasks.
       * 
       * - **true**: The progress, success, and failure notifications are displayed.
       * - **false**: Only success and failure notifications are displayed.
       * 
       * The default value is **false**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      gauge?: boolean;
      /**
       * Custom settings for the notification bar. The default value is **{}**.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      notification: Notification;
    }

    /**
     * Creates a group based on 
     * [GroupConfig]{@link request.agent.GroupConfig}. This API
     * uses a promise to return the result.
     *
     * @param { GroupConfig } config - Group options for a download task.
     * @returns { Promise<string> } Promise used to return the ID of the created group.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    function createGroup(config: GroupConfig): Promise<string>;

    /**
     * Attaches multiple download task IDs to a specified group ID. This API uses a promise to return the result.
     * 
     * If any task ID does not meet the attachment conditions, all tasks in the list will not be added to the group.
     *
     * @param { string } gid - Target group ID.
     * @param { string[] } tids - List of task IDs to attach.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900005 - Operation with wrong task mode.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @throws { BusinessError } 21900007 - Operation with wrong task state.
     * @throws { BusinessError } 21900008 - Group deleted or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    function attachGroup(gid: string, tids: string[]): Promise<void>;

    /**
     * Deletes a specified group. No task ID can be added to the group. This API uses a promise to return the result.
     * 
     * When all tasks in a group are succeeded, failed, or removed and the group is deleted, the completion and failure 
     * notifications of this group are displayed.
     *
     * @param { string } gid - Target group ID. The value must be the same as the ID of the created task group, that is,
     *     the return value of the task group created using the
     *     [request.agent.createGroup]{@link request.agent.createGroup(config: GroupConfig)}
     *     API.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900008 - Group deleted or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    function deleteGroup(gid: string): Promise<void>;
  }
}

export default request;