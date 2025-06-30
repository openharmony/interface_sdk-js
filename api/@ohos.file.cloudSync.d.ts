/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * Provides the capabilities to control cloud file synchronization.
 *
 * @namespace cloudSync
 * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
 * @since arkts{ '1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace cloudSync {
  /**
   * Describes the Sync state type.
   *
   * @enum { number }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum SyncState {
    /**
     * Indicates that the sync state is uploading.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    UPLOADING = 0,
    /**
     * Indicates that the sync failed in upload processing.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    UPLOAD_FAILED = 1,
    /**
     * Indicates that the sync state is downloading.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DOWNLOADING = 2,
    /**
     * Indicates that the sync failed in download processing.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DOWNLOAD_FAILED = 3,
    /**
     * Indicates that the sync finish.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMPLETED = 4,
    /**
     * Indicates that the sync has been stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STOPPED = 5,
  }

  /**
   * Describes the Sync Error type.
   *
   * @enum { number }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum ErrorType {
    /**
     * No error occurred.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NO_ERROR = 0,
    /**
     * Synchronization aborted due to network unavailable.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NETWORK_UNAVAILABLE = 1,
    /**
     * Synchronization aborted due to wifi unavailable.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    WIFI_UNAVAILABLE = 2,
    /**
     * Synchronization aborted due to low capacity level.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    BATTERY_LEVEL_LOW = 3,
    /**
     * Synchronization aborted due to warning low capacity level.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    BATTERY_LEVEL_WARNING = 4,
    /**
     * Synchronization aborted due to cloud storage is full.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CLOUD_STORAGE_FULL = 5,
    /**
     * Synchronization aborted due to local storage is full.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    LOCAL_STORAGE_FULL = 6,
    /**
     * Synchronization aborted due to device temperature is too high.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DEVICE_TEMPERATURE_TOO_HIGH = 7,
    
  }

  /**
   * The SyncProgress data structure.
   *
   * @interface SyncProgress
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface SyncProgress {
    /**
     * The current sync state.
     *
     * @type { SyncState }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    state: SyncState;
    /**
     * The error type of sync.
     *
     * @type { ErrorType }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    error: ErrorType;
  }

  /**
   * GallerySync object.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class GallerySync {
    /**
     * A constructor used to create a GallerySync object.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor();
    /**
     * Subscribes to sync progress change event. This method uses a callback to get sync progress changes.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @param { function } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    on(evt: 'progress', callback: (pg: SyncProgress) => void): void;
    /**
     * Unsubscribes from sync progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @param { function } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    off(evt: 'progress', callback: (pg: SyncProgress) => void): void;
    /**
     * Unsubscribes all callbacks objects from sync progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    off(evt: 'progress'): void;
    /**
     * Start the gallery sync task.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    start(): Promise<void>;
    /**
     * Start the gallery sync task with callback.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { AsyncCallback<void> } [callback] - Callback function.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Stop the gallery sync task.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    stop(): Promise<void>;
    /**
     * Stop the gallery sync task with callback.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { AsyncCallback<void> } [callback] - Callback function.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    stop(callback: AsyncCallback<void>): void;
  }

  /**
   * Describes the State type of download.
   *
   * @enum { number }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum State {
    /**
     * Indicates that the download task in process now.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    RUNNING = 0,
    /**
     * Indicates that the download task finished.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMPLETED = 1,
    /**
     * Indicates that the download task failed.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    FAILED = 2,
    /**
     * Indicates that the download task stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STOPPED = 3,
  }

  /**
   * Describes the download Error type.
   *
   * @enum { number }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum DownloadErrorType {
    /**
     * No error occurred.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NO_ERROR = 0,
    /**
     * download aborted due to unknown error.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    UNKNOWN_ERROR = 1,
    /**
     * download aborted due to network unavailable.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NETWORK_UNAVAILABLE = 2,
    /**
     * download aborted due to local storage is full.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    LOCAL_STORAGE_FULL = 3,
    /**
     * download aborted due to content is not found in the cloud.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONTENT_NOT_FOUND = 4,
    /**
     * download aborted due to frequent user requests.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    FREQUENT_USER_REQUESTS = 5,
  }

  /**
   * The DownloadProgress data structure.
   *
   * @interface DownloadProgress
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface DownloadProgress {
    /**
     * The current download state.
     *
     * @type { State }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    state: State;
    /**
     * The processed data size for current file.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    processed: number;
    /**
     * The size of current file.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    size: number;
    /**
     * The uri of current file.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    uri: string;
    /**
     * The error type of download.
     *
     * @type { DownloadErrorType }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    error: DownloadErrorType;
  }

  /**
   * Describes the download file type.
   * @enum { number }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20
   * @arkts 1.1&1.2
   */
  enum DownloadFileType {
    /**
     * Content file type.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    CONTENT = 0,
    /**
     * Thumbnail file type.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    THUMBNAIL = 1,
    /**
     * LCD file type.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    LCD = 2
  }

  /**
   * FailedFileInfo struct.
   * @interface FailedFileInfo
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20
   * @arkts 1.1&1.2
   */
  interface FailedFileInfo {
    /**
     * The uri of the file that failes to be downloaded.
     * @type { string }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    uri: string;
    /**
     * Error code of the file that failes to be downloaded.
     * @type { DownloadErrorType }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    error: DownloadErrorType;
  }

  /**
   * MultiDownloadProgress object.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20
   * @arkts 1.1&1.2
   */
  class MultiDownloadProgress {
    /**
     * The current download state.
     * @type { State }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    state: State;
    /**
     * The download ID of the batch files.
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    taskId: number;
    /**
     * The number of files that downloaded successfully
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    successfulCount: number;
    /**
     * The number of files that fail to be downloaded.
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    failedCount: number;
    /**
     * Total number of the batch files.
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    totalCount: number;
    /**
     * Total size of downloaded files.
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    downloadedSize: number;
    /**
     * Total size of the batch files.
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    totalSize: number;
    /**
     * The error type of download.
     * @type { DownloadErrorType }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    errType: DownloadErrorType;
    /**
     * Get the list of files that fail to be downloaded.
     * @returns { Array<FailedFileInfo> } - Return list of files that fail to be downloaded.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    getFailedFiles(): Array<FailedFileInfo>;
    /**
     * Get the list of files that are successfully downloaded.
     * @returns { Array<string> } - Return list of files that are successfully downloaded.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    getSuccessfulFiles(): Array<string>;
  }

  /**
   * Download object.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class Download {
    /**
     * A constructor used to create a Download object.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor();
    /**
     * Subscribes to download progress change event. This method uses a callback to get download progress changes.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @param { function } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    on(evt: 'progress', callback: (pg: DownloadProgress) => void): void;
    /**
     * Unsubscribes from download progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @param { function } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    off(evt: 'progress', callback: (pg: DownloadProgress) => void): void;
    /**
     * Unsubscribes all callbacks objects from download progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    off(evt: 'progress'): void;
    /**
     * Start the download task.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    start(uri: string): Promise<void>;
    /**
     * Start the download task with callback.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @param { AsyncCallback<void> } [callback] - Callback function.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    start(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Stop the download task.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    stop(uri: string): Promise<void>;
    /**
     * Stop the download task with callback.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @param { AsyncCallback<void> } [callback] - Callback function.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'10','1.2':'20'}
     * @arkts 1.1&1.2
     */
    stop(uri: string, callback: AsyncCallback<void>): void;
  }

  /**
   * FileSync object.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class FileSync {
    /**
     * A constructor used to create a FileSync object.
     *
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor();
    /**
     * A constructor used to create a FileSync object.
     *
     * @param { string } bundleName - Name of the bundle that need to synchronize and subscribe the sync progress event.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor(bundleName: string);
    /**
     * Subscribes to sync progress change event. This method uses a callback to get sync progress changes.
     *
     * @param { 'progress' } event - event type.
     * @param { Callback<SyncProgress> } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    on(event: 'progress', callback: Callback<SyncProgress>): void;
    /**
     * Unsubscribes from sync progress event.
     *
     * @param { 'progress' } event - event type.
     * @param { Callback<SyncProgress> } [callback] - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    off(event: 'progress', callback?: Callback<SyncProgress>): void;
    /**
     * Start the file sync task.
     *
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    start(): Promise<void>;
    /**
     * Start the file sync task with callback.
     *
     * @param { AsyncCallback<void> } callback - Callback function.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Stop the file sync task.
     *
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    stop(): Promise<void>;
    /**
     * Stop the file sync task with callback.
     *
     * @param { AsyncCallback<void> } callback - Callback function.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Get the last synchronization time.
     *
     * @returns { Promise<number> } - Return the date of last synchronization.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getLastSyncTime(): Promise<number>;
    /**
     * Get the last synchronization time.
     *
     * @param { AsyncCallback<number> } callback - Callback function.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getLastSyncTime(callback: AsyncCallback<number>): void;
  }
  /**
   * CloudFileCache object.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  class CloudFileCache {
    /**
     * A constructor used to create a CloudFileCache object.
     *
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor();
    /**
     * Subscribes to cloud file cache download progress change event. This method uses a callback to get download progress changes.
     *
     * @param { 'progress' } event - event type.
     * @param { Callback<DownloadProgress> } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    on(event: 'progress', callback: Callback<DownloadProgress>): void;
    /**
     * Subscribes to a batch of cloud file cache download progress change event. This method uses a callback to get download progress changes.
     *
     * @param { 'batchDownload' } event - event type.
     * @param { Callback<MultiDownloadProgress> } callback - callback function with a `MultiDownloadProgress` argument.
     * @throws { BusinessError } 13900020 - Parameter error. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    on(event: 'batchDownload', callback: Callback<MultiDownloadProgress>): void;
    /**
     * Unsubscribes from cloud file cache download progress event.
     *
     * @param { 'progress' } event - event type.
     * @param { Callback<DownloadProgress> } [callback] - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    off(event: 'progress', callback?: Callback<DownloadProgress>): void;
    /**
     * Unsubscribes from cloud file cache download progress event.
     *
     * @param { 'batchDownload' } event - event type.
     * @param { Callback<MultiDownloadProgress> } [callback] - callback function with a `MultiDownloadProgress` argument.
     * @throws { BusinessError } 13900020 - Parameter error. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    off(event: 'batchDownload', callback?: Callback<MultiDownloadProgress>): void;
    /**
     * Start the cloud file cache download task.
     *
     * @param { string } uri - uri of file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    start(uri: string): Promise<void>;
    /**
     * Start the cloud file cache download task with callback.
     *
     * @param { string } uri - uri of file.
     * @param { AsyncCallback<void> } callback - Callback function.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    start(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Batch start the cloud file cache download task.
     *
     * @param { Array<string> } uris - The list of uri of file.
     * @param { DownloadFileType } [fileType] - download file type.
     * @returns { Promise<number> } - Return the downloadId in Promise mode.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900020 - Parameter error. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400004 - Exceed the maximum limit.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    startBatch(uris: Array<string>, fileType?: DownloadFileType): Promise<number>;
    /**
     * Stop the cloud file cache download task.
     *
     * @param { string } uri - uri of file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11
     */
    /**
     * Stop the cloud file cache download task.
     *
     * @param { string } uri - uri of file.
     * @param { boolean } [needClean] - whether to delete the file that already downloaded.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    stop(uri: string, needClean?: boolean): Promise<void>;
    /**
     * Stop the cloud file cache download task with callback.
     *
     * @param { string } uri - uri of file.
     * @param { AsyncCallback<void> } callback - Callback function.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    stop(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Batch stop the cloud file caches download task.
     *
     * @param { number } downloadId - The download ID of a batch of file cache.
     * @param { boolean } [needClean] - whether to delete the file that already downloaded.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900020 - Parameter error. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    stopBatch(downloadId: number, needClean?: boolean): Promise<void>;
    /**
     * Clean the local file cache.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    cleanCache(uri: string): void;
  }

  /**
   * Describes the sync state of file.
   *
   * @enum { number }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum FileSyncState {
    /**
     * Indicates that the file cache is uploading now.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    UPLOADING = 0,
    /**
     * Indicates that the file cache is downloading now.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DOWNLOADING = 1,
    /**
     * Indicates that the file cache sync task finished.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMPLETED = 2,
    /**
     * Indicates that the file cache sync task stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STOPPED = 3,
    /**
     * Indicates that the file is waiting for upload.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TO_BE_UPLOADED = 4,
    /**
     * Indicates that the file has been already uploaded successfully.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    UPLOAD_SUCCESS = 5,
    /**
     * Indicates that the file upload failure.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    UPLOAD_FAILURE = 6,
  }

  /**
   * Get the sync state of file.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { Array<string> } uri - uri of files.
   * @returns { Promise<Array<FileSyncState>> } - Return the sync state of given files.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getFileSyncState(uri: Array<string>): Promise<Array<FileSyncState>>;
  /**
   * Get the sync state of file.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { Array<string> } uri - uri of file.
   * @param { AsyncCallback<Array<FileSyncState>> } callback - The callback is used to return the sync state of given files.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getFileSyncState(uri: Array<string>, callback: AsyncCallback<Array<FileSyncState>>): void;
  /**
   * Get the sync state of file.
   *
   * @param { string } uri - uri of file.
   * @returns { FileSyncState } - return the sync state of given files.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900012 - Permission denied by the file system
   * @throws { BusinessError } 13900031 - Function not implemented
   * @throws { BusinessError } 13900042 - Unknown error 
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getFileSyncState(uri: string): FileSyncState;
  /**
   * Register change notify for the specified uri.
   *
   * @param { string } uri - uri of file.
   * @param { boolean } recursion - Whether to monitor the child files.
   * @param { Callback<ChangeData> } callback - Returns the changed data.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function registerChange(uri: string, recursion: boolean, callback: Callback<ChangeData>): void;
  /**
   * Unregister change notify fir the specified uri.
   *
   * @param { string } uri - uri of file.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function unregisterChange(uri: string): void;

  /**
   * Enumeration types of data change.
   *
   * @enum { number } NotifyType
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum NotifyType {
    /**
     * File has been newly created
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NOTIFY_ADDED = 0,
    /**
     * File has been modified.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NOTIFY_MODIFIED = 1,
    /**
     * File has been deleted.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NOTIFY_DELETED = 2,
    /**
     * File has been renamed or moved.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NOTIFY_RENAMED = 3,
  }

  /** 
   * Defines the change data
   * 
   * @interface ChangeData
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since arkts{ '1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ChangeData {
    /**
     * The notify type of the change.
     * 
     * @type {NotifyType}
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    type: NotifyType;
    /**
     * Indicates whether the changed uri is directory.
     * 
     * @type {Array<boolean>}
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    isDirectory: Array<boolean>;
    /**
     * The changed uris.
     * 
     * @type {Array<string>}
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since arkts{ '1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    uris: Array<string>;
  }

  /**
   * Optimize storage space
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @returns { Promise<void> } - Return Promise.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'17','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function optimizeStorage(): Promise<void>;

  /**
   * Start optimize storage space task.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { OptimizeSpaceParam } optimizePara - Setting parameters with a `OptimizeSpaceParam` argument.
   * @param { Callback<OptimizeSpaceProgress> } callback - callback function with a `OptimizeSpaceProgress` argument.
   * @returns { Promise<void> } - Return Promise.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 22400005 - Inner error.
   * @throws { BusinessError } 22400006 - The same task is already in progress.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'17','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function startOptimizeSpace(optimizePara: OptimizeSpaceParam, callback?: Callback<OptimizeSpaceProgress>): Promise<void>;

  /**
   * Stop optimize storage space task.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 22400005 - Inner error.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'17','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function stopOptimizeSpace(): void;

  /**
   * Describes the state type of optimize space task.
   * @enum { number } OptimizeState
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'17','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum OptimizeState {

    /**
     * Indicates that the optimize space task in process now.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'17','1.2':'20'}
     * @arkts 1.1&1.2
     */
    RUNNING = 0,

    /**
     * Indicates that the optimize space task finished successfully.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'17','1.2':'20'}
     * @arkts 1.1&1.2
     */
    COMPLETED = 1,

    /**
     * Indicates that the optimize space task failed.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'17','1.2':'20'}
     * @arkts 1.1&1.2
     */
    FAILED = 2,

    /**
     * Indicates that the optimize space task stopped.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'17','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STOPPED = 3
  }

  /**
   * Defines the OptimizeSpaceProgress data structure.
   * @typedef OptimizeSpaceProgress
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'17','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface OptimizeSpaceProgress {

    /**
     * The current optimize space task state.
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @type { OptimizeState }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'17','1.2':'20'}
     * @arkts 1.1&1.2
     */
    state: OptimizeState;

    /**
     * The percentage of clearing files.
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'17','1.2':'20'}
     * @arkts 1.1&1.2
     */
    progress: number;
  }

  /**
   * Defines the OptimizeSpaceParam data structure.
   * @typedef OptimizeSpaceParam
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since arkts{ '1.1':'17','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface OptimizeSpaceParam {

    /**
     * The total size(Unit:byte) of clean space.
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'17','1.2':'20'}
     * @arkts 1.1&1.2
     */
    totalSize: number;

    /**
     * Clean files that are not accessed agingDays(unit:day) ago.
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since arkts{ '1.1':'17','1.2':'20'}
     * @arkts 1.1&1.2
     */
    agingDays: number;
  }

  /**
   * Defines the HistoryVersion data structure.
   * @typedef HistoryVersion
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20
   * @arkts 1.1&1.2
   */
  interface HistoryVersion {
    /**
     * The time when the content of this version file is edited.
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    editedTime: number;
    /**
     * The size of this history version file.
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    fileSize: number;
    /**
     * The version ID of this version.
     * @type { string }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    versionId: string;
    /**
     * The original file name used to create this version.
     * @type { string }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    originalFileName: string;
    /**
     * The Sha256 check value of this version file.
     * @type { string }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    sha256: string;
    /**
     * Indicates whether this version automatically resolves the conflict.
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    autoResolved: boolean;
  }

  /**
   * Defines the VersionDownloadProgress data structure.
   * @typedef VersionDownloadProgress
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20
   * @arkts 1.1&1.2
   */
  interface VersionDownloadProgress {
    /**
     * The current download task state.
     * @type { State }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    state: State;
    /**
     * The percentage of downloaded files.
     * @type { number }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    progress: number;
    /**
     * The error type of download.
     * @type { DownloadErrorType }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    errType: DownloadErrorType;
  }

  /**
   * FileVersion object.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20
   * @arkts 1.1&1.2
   */
  class FileVersion {
    /**
     * A constructor used to create a FileVersion object.
     *
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    constructor();
    /**
     * Get the specified number of most recent historical versions of the file specified by the URI.
     *
     * @param { string } uri - uri of file.
     * @param { number } versionNumLimit - Maximum number of historical versions you want to obtained.
     * @returns { Promise<Array<HistoryVersion>> } - Return the most recent history version list of the specified file.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Parameter error. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    getHistoryVersionList(uri: string, versionNumLimit: number): Promise<Array<HistoryVersion>>;
    /**
     * Download the content of the specified history version to the specified temporary directory.
     *
     * @param { string } uri - Uri of file.
     * @param { string } versionId - The version ID of the history version you want.
     * @param { Callback<VersionDownloadProgress> } callback - callback function with a `VersionDownloadProgress` argument.
     * @returns { Promise<string> } - Return the temporary directory to use for saving the content of the specified history version.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Parameter error. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    downloadHistoryVersion(uri: string, versionId: string, callback: Callback<VersionDownloadProgress>): Promise<string>;
    /**
     * Replace the content of the specified file with the content of the specified history version.
     *
     * @param { string } originalUri - The uri of the file whose content you want to replace.
     * @param { string } versionUri - The uri of the downloaded history version used to replace the original file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900005 - I/O error.
     * @throws { BusinessError } 13900008 - Bad file descriptor.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Parameter error. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI. Possible causes: 1.originalUri invalid; 2.versionUri invalid.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @throws { BusinessError } 22400007 - The version file specified to replace the original file does not exist.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    replaceFileWithHistoryVersion(originalUri: string, versionUri: string): Promise<void>;
    /**
     * Check whether the current file content is in conflict with other versions.
     *
     * @param { string } uri - Uri of file.
     * @returns { Promise<boolean> } - Return a Boolean value indicating whether the current file content is in conflict with other versions.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Parameter error. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    isFileConflict(uri: string): Promise<boolean>;
    /**
     * Clean the current file conflict flag after the conflict is resolved.
     *
     * @param { string } uri - Uri of file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Parameter error. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20
     * @arkts 1.1&1.2
     */
    clearFileConflict(uri: string): Promise<void>;
  }
}

export default cloudSync;
