/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import { Callback } from './basic';
import BaseContext from './application/BaseContext';

/**
 * upload and download
 *
 * @namespace request
 * @permission ohos.permission.INTERNET
 * @since 6
 */
declare namespace request {
  /**
   * Error code 201. the permissions check fails
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  const EXCEPTION_PERMISSION: number;
  /**
   * Error code 401. the parameters check fails
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  const EXCEPTION_PARAMCHECK: number;
  /**
   * Error code 801. call unsupported api
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  const EXCEPTION_UNSUPPORTED: number;
  /**
   * Error code 13400001. file operation error
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  const EXCEPTION_FILEIO: number;
  /**
   * Error code 13400002. bad file path
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  const EXCEPTION_FILEPATH: number;
  /**
   * Error code 13400003. task manager service error
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  const EXCEPTION_SERVICE: number;
  /**
   * Error code 13499999. others error
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  const EXCEPTION_OTHERS: number;

  /**
   * Code 0x00000001. Bit flag indicating download is allowed when using the cellular network.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   */
  const NETWORK_MOBILE: number;

  /**
   * Code 0x00010000. Bit flag indicating download is allowed when using the WLAN.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   */
  const NETWORK_WIFI: number;

  /**
   * Error code 0. Indicates that the download cannot be resumed for network reasons.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const ERROR_CANNOT_RESUME: number;

  /**
   * Error code 1. Indicates that no storage device, such as an SD card, is found.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const ERROR_DEVICE_NOT_FOUND: number;

  /**
   * Error code 2. Indicates that files to be downloaded already exist, and that the download session cannot overwrite the existing files.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const ERROR_FILE_ALREADY_EXISTS: number;

  /**
   * Error code 3. Indicates that a file operation fails.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const ERROR_FILE_ERROR: number;

  /**
   * Error code 4. Indicates that the HTTP transmission fails.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const ERROR_HTTP_DATA_ERROR: number;

  /**
   * Error code 5. Indicates insufficient storage space.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const ERROR_INSUFFICIENT_SPACE: number;

  /**
   * Error code 6. Indicates an error caused by too many network redirections.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const ERROR_TOO_MANY_REDIRECTS: number;

  /**
   * Error code 7. Indicates an HTTP code that cannot be identified.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const ERROR_UNHANDLED_HTTP_CODE: number;

  /**
   * Error code 8. Indicates an undefined error.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const ERROR_UNKNOWN: number;

  /**
   * Error code 9. Indicates network offline.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  const ERROR_OFFLINE: number;

  /**
   * Error code 10. Indicates network type configuration error.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  const ERROR_UNSUPPORTED_NETWORK_TYPE: number;

  /**
   * Paused code 0. Indicates that the download is paused and waiting for a WLAN connection, because the file size exceeds the maximum allowed for a session using the cellular network.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const PAUSED_QUEUED_FOR_WIFI: number;

  /**
   * Paused code 1. Indicates that the download is paused due to a network problem, for example, network disconnection.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const PAUSED_WAITING_FOR_NETWORK: number;

  /**
   * Paused code 2. Indicates that a network error occurs, and the download session will be retried.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const PAUSED_WAITING_TO_RETRY: number;

  /**
   * Paused code 3. Indicates that the download is paused due to the user.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  const PAUSED_BY_USER: number;

  /**
   * Paused code 4. Indicates that the download is paused for some reasons.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const PAUSED_UNKNOWN: number;

  /**
   * Session status code 0. Indicates that the download session is completed.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const SESSION_SUCCESSFUL: number;

  /**
   * Session status code 1. Indicates that the download session is in progress.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const SESSION_RUNNING: number;

  /**
   * Session status code 2. Indicates that the download session is being scheduled.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const SESSION_PENDING: number;

  /**
   * Session status code 3. Indicates that the download session has been paused.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const SESSION_PAUSED: number;

  /**
   * Session status code 4. Indicates that the download session has failed and will not be retried.
   *
   * @permission ohos.permission.INTERNET
   * @constant
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  const SESSION_FAILED: number;

  /**
   * Starts a download task.
   *
   * @permission ohos.permission.INTERNET
   * @param { DownloadConfig } config Download config
   * @param { AsyncCallback<DownloadTask> } callback Indicate the callback function to receive DownloadTask.
   * @syscap SystemCapability.MiscServices.Download
   * @FAModelOnly
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.request.downloadFile
   */
  function download(config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void;

  /**
   * Starts a download task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { DownloadConfig } config Download config
   * @param { AsyncCallback<DownloadTask> } callback Indicate the callback function to receive DownloadTask.
   * @throws { BusinessError } 201 - the permissions check fails
   * @throws { BusinessError } 401 - the parameters check fails
   * @throws { BusinessError } 13400001 - file operation error
   * @throws { BusinessError } 13400002 - bad file path
   * @throws { BusinessError } 13400003 - task service ability error
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  function downloadFile(context: BaseContext, config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void;

  /**
   * Starts a download task.
   *
   * @permission ohos.permission.INTERNET
   * @param { DownloadConfig } config Download config
   * @returns { Promise<DownloadTask> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Download
   * @FAModelOnly
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.request.downloadFile
   */
  function download(config: DownloadConfig): Promise<DownloadTask>;

  /**
   * Starts a download task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { DownloadConfig } config Download config
   * @returns { Promise<DownloadTask> } the promise returned by the function.
   * @throws { BusinessError } 201 - the permissions check fails
   * @throws { BusinessError } 401 - the parameters check fails
   * @throws { BusinessError } 13400001 - file operation error
   * @throws { BusinessError } 13400002 - bad file path
   * @throws { BusinessError } 13400003 - task service ability error
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  function downloadFile(context: BaseContext, config: DownloadConfig): Promise<DownloadTask>;

  /**
   * Starts a upload task.
   *
   * @permission ohos.permission.INTERNET
   * @param { UploadConfig } config Upload config
   * @param { AsyncCallback<UploadTask> } callback Indicate the callback function to receive UploadTask.
   * @syscap SystemCapability.MiscServices.Upload
   * @FAModelOnly
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.request.uploadFile
   */
  function upload(config: UploadConfig, callback: AsyncCallback<UploadTask>): void;

  /**
   * Starts a upload task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { UploadConfig } config Upload config
   * @param { AsyncCallback<UploadTask> } callback Indicate the callback function to receive UploadTask.
   * @throws { BusinessError } 201 - the permissions check fails
   * @throws { BusinessError } 401 - the parameters check fails
   * @throws { BusinessError } 13400002 - bad file path
   * @syscap SystemCapability.MiscServices.Upload
   * @since 9
   */
  function uploadFile(context: BaseContext, config: UploadConfig, callback: AsyncCallback<UploadTask>): void;

  /**
   * Starts a upload task.
   *
   * @permission ohos.permission.INTERNET
   * @param { UploadConfig } config Upload config
   * @returns { Promise<UploadTask> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Upload
   * @FAModelOnly
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.request.uploadFile
   */
  function upload(config: UploadConfig): Promise<UploadTask>;

  /**
   * Starts a upload task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { UploadConfig } config Upload config
   * @returns { Promise<UploadTask> } the promise returned by the function.
   * @throws { BusinessError } 201 - the permissions check fails
   * @throws { BusinessError } 401 - the parameters check fails
   * @throws { BusinessError } 13400002 - bad file path
   * @syscap SystemCapability.MiscServices.Upload
   * @since 9
   */
  function uploadFile(context: BaseContext, config: UploadConfig): Promise<UploadTask>;

  /**
   * DownloadConfig data Structure
   *
   * @interface DownloadConfig
   * @permission ohos.permission.INTERNET
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   * @name DownloadConfig
   */
  interface DownloadConfig {
    /**
     * Resource address.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    url: string;
    /**
     * Adds an HTTP or HTTPS header to be included with the download request.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    header?: Object;
    /**
     * Allows download under a metered connection.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    enableMetered?: boolean;
    /**
     * Allows download in a roaming network.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    enableRoaming?: boolean;
    /**
     * Sets the description of a download session.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    description?: string;
    /**
     * Sets the network type allowed for download.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    networkType?: number;
    /**
     * Sets the path for downloads.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    filePath?: string;
    /**
     * Sets a download session title.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    title?: string;
    /**
     * Allow download background task notifications.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    background?: boolean;
  }

  /**
   * DownloadInfo data Structure
   *
   * @interface DownloadInfo
   * @permission ohos.permission.INTERNET
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   * @name DownloadInfo
   */
  interface DownloadInfo {
    /**
     * the description of a file to be downloaded.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    description: string;
    /**
     * the real-time downloads size (in bytes).
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    downloadedBytes: number;
    /**
     * the ID of a file to be downloaded.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    downloadId: number;
    /**
     * a download failure cause, which can be any DownloadSession.ERROR_* constant.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    failedReason: number;
    /**
     * the name of a file to be downloaded.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    fileName: string;
    /**
     * the URI of a stored file.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    filePath: string;
    /**
     * the reason why a session is paused, which can be any DownloadSession.PAUSED_* constant.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    pausedReason: number;
    /**
     * the download status code, which can be any DownloadSession.SESSION_* constant.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    status: number;
    /**
     * the URI of files to be downloaded.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    targetURI: string;
    /**
     * the title of a file to be downloaded.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    downloadTitle: string;
    /**
     * the total size of files to be downloaded (in bytes).
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    downloadTotalBytes: number;
  }

  /**
   * Download task interface
   *
   * @interface DownloadTask
   * @permission ohos.permission.INTERNET
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   */
  interface DownloadTask {
    /**
     * Called when the current download session is in process.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'progress' } type progress Indicates the download task progress.
     * @param { (receivedSize: number, totalSize: number) => void } callback
     *        The callback function for the download progress change event
     *        receivedSize the length of downloaded data, in bytes
     *        totalSize he length of data expected to be downloaded, in bytes.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    on(type: 'progress', callback: (receivedSize: number, totalSize: number) => void): void;

    /**
     * Called when the current download session is in process.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'progress' } type progress Indicates the download task progress.
     * @param { (receivedSize: number, totalSize: number) => void } [callback]
     *        The callback function for the download progress change event
     *        receivedSize the length of downloaded data, in bytes
     *        totalSize he length of data expected to be downloaded, in bytes.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    off(type: 'progress', callback?: (receivedSize: number, totalSize: number) => void): void;

    /**
     * Called when the current download session complete pause or remove.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'complete' | 'pause' | 'remove' } type Indicates the download session event type
     *        complete: download task completed,
     *        pause: download task stopped,
     *        remove: download task deleted.
     * @param { () => void } callback The callback function for the download complete pause or remove change event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    on(type: 'complete' | 'pause' | 'remove', callback: () => void): void;

    /**
     * Called when the current download session complete pause or remove.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'complete' | 'pause' | 'remove' } type Indicates the download session event type
     *        complete: download task completed,
     *        pause: download task stopped,
     *        remove: download task deleted.
     * @param { () => void } [callback] The callback function for the download complete pause or remove change event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    off(type: 'complete' | 'pause' | 'remove', callback?: () => void): void;

    /**
     * Called when the current download session fails.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'fail' } type Indicates the download session type, fail: download task has failed.
     * @param { (err: number) => void } callback The callback function for the download fail change event
     *        err The error code for download task.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    on(type: 'fail', callback: (err: number) => void): void;

    /**
     * Called when the current download session fails.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'fail' } type Indicates the download session type, fail: download task has failed.
     * @param { (err: number) => void } [callback] Indicate the callback function to receive err.
     *        err The error code for download task.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    off(type: 'fail', callback?: (err: number) => void): void;

    /**
     * Deletes a download session and the downloaded files.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback Indicates asynchronous invoking Result.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.request.delete
     */
    remove(callback: AsyncCallback<boolean>): void;

    /**
     * Deletes a download session and the downloaded files.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.request.delete
     */
    remove(): Promise<boolean>;

    /**
     * Pause a download session.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<void> } callback Indicates asynchronous invoking Result.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.request.suspend
     */
    pause(callback: AsyncCallback<void>): void;

    /**
     * Pause a download session.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.request.suspend
     */
    pause(): Promise<void>;

    /**
     * Resume a paused download session.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<void> } callback Indicates asynchronous invoking Result.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.request.restore
     */
    resume(callback: AsyncCallback<void>): void;

    /**
     * Resume a paused download session.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.request.restore
     */
    resume(): Promise<void>;

    /**
     * Queries download information of a session, which is defined in DownloadSession.DownloadInfo.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<DownloadInfo> } callback Indicate the callback function to receive download info.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.request.getTaskInfo
     */
    query(callback: AsyncCallback<DownloadInfo>): void;

    /**
     * Queries download information of a session, which is defined in DownloadSession.DownloadInfo.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<DownloadInfo> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.request.getTaskInfo
     */
    query(): Promise<DownloadInfo>;

    /**
     * Queries the MIME type of the download file.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<string> } callback Indicate the callback function to receive download file MIME type.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.request.getTaskMimeType
     */
    queryMimeType(callback: AsyncCallback<string>): void;

    /**
     * Queries the MIME type of the download file.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<string> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.request.getTaskMimeType
     */
    queryMimeType(): Promise<string>;

    /**
     * Delete the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    delete(callback: AsyncCallback<boolean>): void;

    /**
     * Delete the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    delete(): Promise<boolean>;

    /**
     * Suspend the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    suspend(callback: AsyncCallback<boolean>): void;

    /**
     * Suspend the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    suspend(): Promise<boolean>;

    /**
     * Restore the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    restore(callback: AsyncCallback<boolean>): void;

    /**
     * Restore the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    restore(): Promise<boolean>;

    /**
     * Get the download task info
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<DownloadInfo> } callback
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    getTaskInfo(callback: AsyncCallback<DownloadInfo>): void;

    /**
     * Get the download task info
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<DownloadInfo> } the promise returned by the function.
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    getTaskInfo(): Promise<DownloadInfo>;

    /**
     * Get mimetype of the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<string> } callback
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    getTaskMimeType(callback: AsyncCallback<string>): void;

    /**
     * Get mimetype of the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<string> } the promise returned by the function.
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    getTaskMimeType(): Promise<string>;
  }

  /**
   * File data Structure
   *
   * @interface File
   * @permission ohos.permission.INTERNET
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   * @name File
   */
  interface File {
    /**
     * When multipart is submitted, the file name in the request header.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    filename: string;
    /**
     * When multipart is submitted, the name of the form item. The default is file.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    name: string;
    /**
     * The local storage path of the file (please refer to the storage directory definition for path usage).
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    uri: string;
    /**
     * The content type of the file is obtained by default according to the suffix of the file name or path.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    type: string;
  }

  /**
   * RequestData data Structure
   *
   * @interface RequestData
   * @permission ohos.permission.INTERNET
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   * @name RequestData
   */
  interface RequestData {
    /**
     * Represents the name of the form element.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    name: string;
    /**
     * Represents the value of the form element.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    value: string;
  }

  /**
   * UploadConfig data Structure
   *
   * @interface UploadConfig
   * @permission ohos.permission.INTERNET
   * @syscap SystemCapability.MiscServices.Upload
   * @since 6
   * @name UploadConfig
   */
  interface UploadConfig {
    /**
     * Resource address.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    url: string;
    /**
     * Adds an HTTP or HTTPS header to be included with the upload request.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    header: Object;
    /**
     * Request method: POST, PUT. The default POST.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    method: string;
    /**
     * A list of files to be uploaded. Please use multipart/form-data to submit.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    files: Array<File>;
    /**
     * The requested form data.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    data: Array<RequestData>;
  }

  /**
   * TaskState data Structure
   *
   * @interface TaskState
   * @permission ohos.permission.INTERNET
   * @syscap SystemCapability.MiscServices.Upload
   * @since 9
   * @name TaskState
   */
  interface TaskState {
    /**
     * Upload file path.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    path: string;
    /**
     * Upload task return value.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    responseCode: number;
    /**
     * Upload task information.
     *
     * @permission ohos.permission.INTERNET
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    message: string;
  }

  /**
   * Upload task interface
   *
   * @interface UploadTask
   * @permission ohos.permission.INTERNET
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   */
  interface UploadTask {
    /**
     * Called when the current upload session is in process.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'progress' } type progress Indicates the upload task progress.
     * @param { (uploadedSize: number, totalSize: number) => void } callback
     *        The callback function for the upload progress change event
     *        uploadedSize The length of uploaded data, in bytes
     *        totalSize The length of data expected to be uploaded, in bytes.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    on(type: 'progress', callback: (uploadedSize: number, totalSize: number) => void): void;

    /**
     * Called when the current upload session is in process.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'progress' } type progress Indicates the upload task progress.
     * @param { (uploadedSize: number, totalSize: number) => void } [callback]
     *        The callback function for the upload progress change event
     *        uploadedSize The length of uploaded data, in bytes
     *        totalSize The length of data expected to be uploaded, in bytes.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    off(type: 'progress', callback?: (uploadedSize: number, totalSize: number) => void): void;

    /**
     * Called when the header of the current upload session has been received.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'headerReceive' } type headerReceive Indicates the upload task headed receive.
     * @param { (header: object) => void } callback The callback function for the HTTP Response Header event
     *        header HTTP Response Header returned by the developer server.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 7
     */
    on(type: 'headerReceive', callback: (header: object) => void): void;

    /**
     * Called when the header of the current upload session has been received.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'headerReceive' } type headerReceive Indicates the upload task headed receive.
     * @param { (header: object) => void } [callback] The callback function for the HTTP Response Header event
     *        header HTTP Response Header returned by the developer server.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 7
     */
    off(type: 'headerReceive', callback?: (header: object) => void): void;

    /**
     * Called when the current upload session complete or fail.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'complete' | 'fail' } type Indicates the upload session event type
     *        complete: upload task completed
     *        fail: upload task failed
     * @param { Callback<Array<TaskState>> } callback The callback function for the upload complete or fail change event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session complete or fail.
     *
     * @permission ohos.permission.INTERNET
     * @param { 'complete' | 'fail' } type Indicates the upload session event type
     *        complete: upload task completed
     *         fail: upload task failed
     * @param { Callback<Array<TaskState>> } [callback]
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void;

    /**
     * Deletes a upload session.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback Indicates asynchronous invoking Result.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.request.delete
     */
    remove(callback: AsyncCallback<boolean>): void;

    /**
     * Deletes a upload session.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.request.delete
     */
    remove(): Promise<boolean>;

    /**
     * Delete the upload task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    delete(callback: AsyncCallback<boolean>): void;

    /**
     * Delete the upload task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - the permissions check fails
     * @throws { BusinessError } 401 - the parameters check fails
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    delete(): Promise<boolean>;
  }
}

export default request;
