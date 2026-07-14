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
 * The **cloudSync** module provides the device-cloud sync capabilities for applications. You can use the APIs to start
 * or stop device-cloud sync and start or stop the download of images.
 *
 * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace cloudSync {
  /**
   * Enumerates the device-cloud sync states.
   *
   * > **NOTE**
   * >
   * > If a sync progress event listener is registered for an application, a callback will be invoked to notify the
   * > application when the device-cloud sync state is changed.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum SyncState {
    /**
     * The file is being uploaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOADING = 0,
    /**
     * Upload failed.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOAD_FAILED = 1,
    /**
     * The file is being downloaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    DOWNLOADING = 2,
    /**
     * Download failed.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    DOWNLOAD_FAILED = 3,
    /**
     * Sync completed.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    COMPLETED = 4,
    /**
     * Sync stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    STOPPED = 5
  }

  /**
   * Enumerates the device-cloud sync errors.
   *
   * - In the current phase, **NETWORK_UNAVAILABLE** is returned only when the mobile data network and Wi-Fi are
   * unavailable. If the mobile data network is available, the synchronization can be performed normally.
   * - During the sync process, if the battery level is lower than 10% in non-charging scenarios, **BATTERY_LEVEL_LOW**
   * will be return when the current upload is complete.
   * - When sync is being triggered, if the battery level is lower than 10% in non-charging scenarios, sync is not
   * allowed.
   * - If the cloud space is insufficient when a file is uploaded, the upload will fail and there is no such a file in
   * the cloud.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum ErrorType {
    /**
     * No error.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NO_ERROR = 0,
    /**
     * No network is available.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NETWORK_UNAVAILABLE = 1,
    /**
     * Wi-Fi is unavailable.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI_UNAVAILABLE = 2,
    /**
     * The battery level is lower than 10%.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BATTERY_LEVEL_LOW = 3,
    /**
     * The battery level is lower than 15%.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BATTERY_LEVEL_WARNING = 4,
    /**
     * The cloud space is insufficient.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    CLOUD_STORAGE_FULL = 5,
    /**
     * The local space is insufficient.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    LOCAL_STORAGE_FULL = 6,
    /**
     * The device temperature is too high.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_TEMPERATURE_TOO_HIGH = 7,
    /**
     * The remote service is unavailable.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    REMOTE_SERVER_ABNORMAL = 8,
    /**
     * Upload aborted due to cloud response time out.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RESPONSE_TIME_OUT = 9,
    /**
     * Upload aborted due to unknown error.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_ERROR = 10
  }

  /**
   * Represents information about the device-cloud sync progress.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface SyncProgress {
    /**
     * Device-cloud sync state.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    state: SyncState;
    /**
     * Sync error.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    error: ErrorType;
  }

  /**
   * Provides APIs to implement device-cloud sync of media assets in **Gallery**. Before using the APIs of
   * **GallerySync**, you need to create a **GallerySync** instance.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class GallerySync {
    /**
     * A constructor used to create a **GallerySync** instance.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Registers a listener for the device-cloud sync progress.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - Event type. The value is **progress**, which indicates the sync progress event.
     * @param { function } callback - Callback used to return the sync progress. The input parameter is
     *     [SyncProgress]{@link @ohos.file.cloudSync:cloudSync.SyncProgress}, and the return value is **void**.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    on(evt: 'progress', callback: (pg: SyncProgress) => void): void;
    /**
     * Subscribes to sync progress change event. This method uses a callback to get sync progress changes.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Callback<SyncProgress> } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    onProgress(callback: Callback<SyncProgress>): void;
    /**
     * Removes the specified callback from the device-cloud sync progress.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - Event type. The value is **progress**, which indicates the sync progress event.
     * @param { function } callback - Callback used to return the sync progress. The input parameter is
     *     [SyncProgress]{@link @ohos.file.cloudSync:cloudSync.SyncProgress}, and the return value is **void**.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(evt: 'progress', callback: (pg: SyncProgress) => void): void;
    /**
     * Unsubscribes from sync progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Callback<SyncProgress> } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    offProgress(callback: Callback<SyncProgress>): void;
    /**
     * Removes all callbacks from the device-cloud sync progress.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - Event type. The value is **progress**, which indicates the sync progress event.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(evt: 'progress'): void;
    /**
     * Unsubscribes all callbacks objects from sync progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    offProgress(): void;
    /**
     * Starts device-cloud sync. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    start(): Promise<void>;
    /**
     * Starts device-cloud sync. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { AsyncCallback<void> } [callback] - Callback used to start device-cloud sync.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Stops device-cloud sync. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > Calling **stop** will stop the sync process. To resume the sync, call
     * > [start]{@link cloudSync.GallerySync#start()}.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;
    /**
     * Stops device-cloud sync. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Calling **stop** will stop the sync process. To resume the sync, call
     * > [start]{@link cloudSync.GallerySync#start()}.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { AsyncCallback<void> } [callback] - Callback used to stop device-cloud sync.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
  }

  /**
   * Enumerates the download states of a cloud file.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum State {
    /**
     * The cloud file is being downloaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    RUNNING = 0,
    /**
     * The cloud file download is complete.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    COMPLETED = 1,
    /**
     * The cloud file download failed.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    FAILED = 2,
    /**
     * The cloud file download is stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    STOPPED = 3,
    /**
     * Indicates that the download task is missing.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MISSING = 4
  }

  /**
   * Describes the State type of file upload.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum UploadState {
    /**
     * Indicates that the upload task is in waiting state.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WAITING = 0,
    /**
     * Indicates that the upload task is in process now.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RUNNING = 1,
    /**
     * Indicates that the upload task finished.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMPLETED = 2,
    /**
     * Indicates that the upload task failed.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FAILED = 3,
    /**
     * Indicates that the upload task stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STOPPED = 4,
    /**
     * Indicates that the upload task paused.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAUSED = 5
  }

  /**
   * Enumerates the device-cloud download error types.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum DownloadErrorType {
    /**
     * No error.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    NO_ERROR = 0,
    /**
     * Unknown error.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    UNKNOWN_ERROR = 1,
    /**
     * The network is unavailable.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    NETWORK_UNAVAILABLE = 2,
    /**
     * The local space is insufficient.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    LOCAL_STORAGE_FULL = 3,
    /**
     * The file is not found in the cloud space.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CONTENT_NOT_FOUND = 4,
    /**
     * The user requests are too frequent to respond.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    FREQUENT_USER_REQUESTS = 5
  }

  /**
   * Represents information about the download progress of a cloud file.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface DownloadProgress {
    /**
     * File download state.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    state: State;
    /**
     * Size of the downloaded data, in bytes. The value range is [0, 9223372036854775807].
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    processed: long;
    /**
     * Size of the cloud file, in bytes. The value range is [0, 9223372036854775807].
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    size: long;
    /**
     * URI of the cloud file.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * Download error type.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    error: DownloadErrorType;
  }

  /**
   * The UploadProgress data structure.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface UploadProgress {
    /**
     * The current upload state.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: UploadState;
    /**
     * The processed data size for current file.
     * <br>Unit:Byte.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    processed: long;
    /**
     * The size of current file.
     * <br>Unit:Byte.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    size: long;
    /**
     * The uri of current file.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uri: string;
    /**
     * The error type of upload.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    error: ErrorType;
  }

  /**
   * Enumerates the download file types from the Drive Kit.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum DownloadFileType {
    /**
     * Content file.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CONTENT = 0,
    /**
     * Thumbnail file.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL = 1,
    /**
     * LCD file.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    LCD = 2
  }

  /**
   * Represents a list of files that fail to be downloaded from the Drive Kit and failure causes.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface FailedFileInfo {
    /**
     * URI of the file that fails to be downloaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * Error type of the file download failure.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    error: DownloadErrorType;
  }

  /**
   * Represents the batch download progress of a file from the Drive Kit.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  class MultiDownloadProgress {
    /**
     * Execution state of the batch download.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    state: State;
    /**
     * ID of a batch download task. The value ranges from 0 to INT64_MAX. If the progress is abnormal, the value **-1**
     * is returned.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    taskId: long;
    /**
     * Number of successfully downloaded files. The value ranges from 0 to 400. If the progress is abnormal, the value
     * **-1** is returned.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    successfulCount: int;
    /**
     * Number of files that fail to be downloaded. The value ranges from 0 to 400. If the progress is abnormal, the
     * value **-1** is returned.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    failedCount: int;
    /**
     * Total number of files. The value ranges from 0 to 400. If the progress is abnormal, the value **-1** is returned.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    totalCount: int;
    /**
     * Size of the downloaded file, in bytes. The value range is
     * [0, INT64_MAX). If the progress is abnormal, the value **INT64_MAX** is returned.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    downloadedSize: long;
    /**
     * Total size of the files to be downloaded, in bytes. The value range is
     * [0, INT64_MAX). If the progress is abnormal, the value **INT64_MAX** is returned.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    totalSize: long;
    /**
     * Type of the error returned when the batch download fails.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    errType: DownloadErrorType;
    /**
     * Obtains the list of files that fail to be downloaded in batches.
     *
     * @returns { Array<FailedFileInfo> } List of file URIs that fail to be downloaded and the corresponding error
     *     types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    getFailedFiles(): Array<FailedFileInfo>;
    /**
     * Obtains the list of files that are successfully downloaded in batches.
     *
     * @returns { Array<string> } List of URIs of the files that are successfully downloaded. The value is an array.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    getSuccessfulFiles(): Array<string>;
  }
  /**
   * Provides APIs for downloading image files to **Gallery**. Before using the APIs of **Download**, you need to create
   * a **Download** instance.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class Download {
    /**
     * A constructor used to create a **Download** instance.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Registers a listener for the download progress of a cloud file.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - Event. The value is **progress**, which indicates the download progress event of a
     *     cloud file.
     * @param { function } callback - Callback used to return the file download progress. The input parameter is
     *     [DownloadProgress]{@link @ohos.file.cloudSync:cloudSync.DownloadProgress}, and the return value is **void**.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    on(evt: 'progress', callback: (pg: DownloadProgress) => void): void;
    /**
     * Subscribes to download progress change event. This method uses a callback to get download progress changes.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Callback<DownloadProgress> } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    onProgress(callback: Callback<DownloadProgress>): void;
    /**
     * Removes the specified callback from the device-cloud download progress.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - Event type. The value is **progress**, which indicates the sync progress event.
     * @param { function } callback - Callback used to return the file download progress. The input parameter is
     *     [DownloadProgress]{@link @ohos.file.cloudSync:cloudSync.DownloadProgress}, and the return value is **void**.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(evt: 'progress', callback: (pg: DownloadProgress) => void): void;
    /**
     * Unsubscribes from download progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Callback<DownloadProgress> } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    offProgress(callback: Callback<DownloadProgress>): void;
    /**
     * Removes all callbacks from the device-cloud download progress.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - Event type. The value is **progress**, which indicates the download progress event of
     *     a cloud file.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(evt: 'progress'): void;
    /**
     * Unsubscribes all callbacks objects from download progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    offProgress(): void;
    /**
     * Starts downloading a cloud file. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - URI of the target file.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    start(uri: string): Promise<void>;
    /**
     * Starts downloading a cloud file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - URI of the target file.
     * @param { AsyncCallback<void> } [callback] - Callback used to start downloading a cloud file.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    start(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Stops downloading a cloud file. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > Calling **stop** will terminate the download of the current file and clear the cache file. You can use
     * > **start** to start the download again.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - URI of the target file.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    stop(uri: string): Promise<void>;
    /**
     * Stops downloading a cloud file. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Calling **stop** will terminate the download of the current file and clear the cache file. You can use
     * > **start** to start the download again.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - URI of the target file.
     * @param { AsyncCallback<void> } [callback] - Callback used to stop downloading a cloud file.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    stop(uri: string, callback: AsyncCallback<void>): void;
  }

  /**
   * Provides APIs for the file manager application to perform device-cloud sync of the files stored in the Drive Kit.
   * Before using the APIs of this class, you need to create a **FileSync** instance.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  class FileSync {
    /**
     * A constructor used to create a **FileSync** instance.
     *
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * A constructor used to create a **FileSync** instance.
     *
     * @param { string } bundleName - Bundle name.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(bundleName: string);
    /**
     * Registers a listener for the device-cloud sync progress.
     *
     * @param { 'progress' } event - Event type. The value is **progress**, which indicates the sync progress event.
     * @param { Callback<SyncProgress> } callback - Callback used to return the sync progress.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     */
    on(event: 'progress', callback: Callback<SyncProgress>): void;
    /**
     * Subscribes to sync progress change event. This method uses a callback to get sync progress changes.
     *
     * @param { Callback<SyncProgress> } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    onProgress(callback: Callback<SyncProgress>): void;
    /**
     * Removes the specified callback from the device-cloud sync progress.
     *
     * @param { 'progress' } event - Event type. The value is **progress**, which indicates the sync progress event.
     * @param { Callback<SyncProgress> } [callback] - Callback used to return the sync progress. The default value is
     *     null.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     */
    off(event: 'progress', callback?: Callback<SyncProgress>): void;
    /**
     * Unsubscribes from sync progress event.
     *
     * @param { Callback<SyncProgress> } [callback] - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    offProgress(callback?: Callback<SyncProgress>): void;
    /**
     * Starts device-cloud sync of a file. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    start(): Promise<void>;
    /**
     * Starts device-cloud sync of a file. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to start device-cloud sync.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Stops device-cloud sync of a file. This API uses a promise to return the result.
     *
     * Calling **stop** will stop the sync process. To resume the sync, call [start]{@link cloudSync.FileSync#start()}.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;
    /**
     * Stops device-cloud sync of a file. This API uses an asynchronous callback to return the result.
     *
     * Calling **stop** will stop the sync process. To resume the sync, call [start]{@link cloudSync.FileSync#start()}.
     *
     * @param { AsyncCallback<void> } callback - Callback used to stop device-cloud sync.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Obtains the last sync time. This API uses a promise to return the result.
     *
     * @returns { Promise<long> } Promise used to return the last sync time.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    getLastSyncTime(): Promise<long>;
    /**
     * Obtains the last sync time. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<long> } callback - Callback used to obtain the last sync time.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    getLastSyncTime(callback: AsyncCallback<long>): void;
    /**
     * Registers to cloud file upload progress change. This method uses a callback to get upload progress changes.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Callback<UploadProgress> } callback - Callback function. The callback will be triggered when the upload progress changes, including state updates, processed size changes, and error occurrences.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameter are left unspecified.
     *     <br>2.The number of instances registered at the same time exceeds the upper limit.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    registerUploadProgress(callback: Callback<UploadProgress>): void;
    /**
     * Unregisters from cloud file upload progress change.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 13900010 - Try again.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    unregisterUploadProgress(): void;
    /**
     * Query the upload state of the cloud file list.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Array<string> } uris - uris of queryed files.
     * @returns { Promise<Array<UploadProgress>> } - Return Promise.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified. 2.The length of the input parameter exceeds the upper limit.
     *     <br>3.The input parameter contains an invalid uri.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getUploadList(uris: Array<string>): Promise<Array<UploadProgress>>;
    /**
     * Pause the upload of the cloud file.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 14000002 - Invalid uri.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    pauseUpload(uri: string): void;
    /**
     * Resume the upload of the cloud file.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 14000002 - Invalid uri.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    resumeUpload(uri: string): void;
  }
  /**
   * Provides APIs for the file manager application to download files from the Drive Kit to a local device.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 11 dynamic
   * @since 23 static
   */
  class CloudFileCache {
    /**
     * A constructor used to create a **CloudFileCache** instance. Data is not shared between multiple instances.
     *
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * A constructor used to create a CloudFileCache object.
     *
     * @param { string } bundleName - Name of the bundle that need to start download task and subscribes download
     *     progress.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    constructor(bundleName: string);
    /**
     * Registers a listener for the download progress of a file from the Drive Kit.
     *
     * @param { 'progress' } event - Event. The value is **progress**, which indicates the download progress event of a
     *     cloud file.
     * @param { Callback<DownloadProgress> } callback - Callback used to return the file download progress.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     */
    on(event: 'progress', callback: Callback<DownloadProgress>): void;
    /**
     * Subscribes to cloud file cache download progress change event.
     * This method uses a callback to get download progress changes.
     *
     * @param { Callback<DownloadProgress> } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    onProgress(callback: Callback<DownloadProgress>): void;
    /**
     * Registers a listener for the batch download of a file from the Drive Kit.
     *
     * @param { 'batchDownload' } event - Event type. The value is **'batchDownload'**, indicating the batch download
     *     event.
     * @param { Callback<MultiDownloadProgress> } callback - Callback used to return the download progress of a file.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     */
    on(event: 'batchDownload', callback: Callback<MultiDownloadProgress>): void;
    /**
     * Subscribes to a batch of cloud file cache download progress change event.
     * This method uses a callback to get download progress changes.
     *
     * @param { Callback<MultiDownloadProgress> } callback - callback function with a `MultiDownloadProgress` argument.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    onBatchDownload(callback: Callback<MultiDownloadProgress>): void;
    /**
     * Removes the specified callback from the device-cloud file cache progress.
     *
     * @param { 'progress' } event - Event type. The value is **progress**, which indicates the sync progress event.
     * @param { Callback<DownloadProgress> } [callback] - Callback used to return the file download progress. If this
     *     parameter is not specified, this API unregisters all callbacks for the download progress event.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     */
    off(event: 'progress', callback?: Callback<DownloadProgress>): void;
    /**
     * Unsubscribes from cloud file cache download progress event.
     *
     * @param { Callback<DownloadProgress> } [callback] - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    offProgress(callback?: Callback<DownloadProgress>): void;
    /**
     * Removes the listener added via the
     * [on]{@link cloudSync.CloudFileCache#on(event: 'batchDownload', callback: Callback<MultiDownloadProgress>)} API
     * for file batch downloads.
     *
     * @param { 'batchDownload' } event - Event type. The value is **'batchDownload'**, indicating the batch download
     *     event.
     * @param { Callback<MultiDownloadProgress> } [callback] - Callback used to return the download progress of a file.
     *     If this parameter is set, the specified callback will be canceled; otherwise, all currently subscribed
     *     callbacks of the same event type will be canceled.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     */
    off(event: 'batchDownload', callback?: Callback<MultiDownloadProgress>): void;
    /**
     * Unsubscribes from cloud file cache download progress event.
     *
     * @param { Callback<MultiDownloadProgress> } [callback] - callback function with a `MultiDownloadProgress`
     *     argument.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    offBatchDownload(callback?: Callback<MultiDownloadProgress>): void;
    /**
     * Starts downloading a file from the Drive Kit to the local device. This API uses a promise to return the result.
     *
     * @param { string } uri - URI of the file to download.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @throws { BusinessError } 14000002 - Invalid uri.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    start(uri: string): Promise<void>;
    /**
     * Starts downloading a file from the Drive Kit to the local device. This API uses an asynchronous callback to
     * return the result.
     *
     * @param { string } uri - URI of the file to download.
     * @param { AsyncCallback<void> } callback - Callback used to start downloading a cloud file asynchronously.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @throws { BusinessError } 14000002 - Invalid uri.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    start(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Starts the batch download of a file from the Drive Kit. This API uses a promise to return the result.
     *
     * Different batch download tasks can be distinguished by the task ID returned.
     *
     * @param { Array<string> } uris - URI list. A maximum of 400 URIs can be transferred at a time. An error (22400004)
     *     will be thrown if the number of URIs exceeds 400.
     * @param { DownloadFileType } [fileType] - File type. The default value is **CONTENT**.
     * @returns { Promise<long> } Promise used to return the ID of the batch download task.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid uri.
     * @throws { BusinessError } 22400004 - Exceed the maximum limit.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    startBatch(uris: Array<string>, fileType?: DownloadFileType): Promise<long>;
    /**
     * Stop the cloud file cache download task.
     *
     * @param { string } uri - URI of the file to download.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid uri.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11
     */
    /**
     * Stops downloading a file from the Drive Kit to the local device. This API uses a promise to return the result.
     *
     * When **stop()** is called, the current file download process terminates, and downloaded files are retained by
     * default. You can call **start()** to resume the download.
     *
     * @param { string } uri - URI of the file to download.
     * @param { boolean } [needClean] - Whether to delete the downloaded files. The default value **false** means not to
     *     delete the downloaded files; the value **true** means the opposite.<br>This parameter is available since API
     *     version 12. [since 12]
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid uri.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    stop(uri: string, needClean?: boolean): Promise<void>;
    /**
     * Stops downloading a file from the Drive Kit to the local device. This API uses an asynchronous callback to return
     * the result.
     *
     * When **stop()** is called, the current file download process terminates, and downloaded files are retained. You
     * can call **start()** to resume the download.
     *
     * @param { string } uri - URI of the file to download.
     * @param { AsyncCallback<void> } callback - Callback used to stop downloading a cloud file asynchronously.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid uri.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    stop(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Stops the batch download task enabled by [startBatch]{@link cloudSync.CloudFileCache.startBatch} of a file from
     * the Drive Kit. This API uses a promise to return the result.
     *
     * When **stopBatch()** is called, the batch download terminates. The **needClean** parameter determines whether to
     * delete incompletely downloaded files.
     *
     * @param { long } downloadId - ID of the download task to be stopped.
     * @param { boolean } [needClean] - Whether to delete incompletely downloaded files. The default value **false**
     *     means not to delete the files; the value **true** means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    stopBatch(downloadId: long, needClean?: boolean): Promise<void>;
    /**
     * Deletes a cache file. This API returns the result synchronously.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - URI of the cache file to delete.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
     *     unspecified;
     *     <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid uri.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    cleanCache(uri: string): void;
    /**
     * Deletes a cache file. This API returns the result synchronously.
     *
     * @param { string } uri - URI of the cache file to delete.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    cleanFileCache(uri: string): void;
    /**
     * Query the download state of the cloud file list.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Array<string> } uris - uris of queryed files.
     * @returns { Promise<Array<DownloadProgress>> } - Return Promise.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified. 2.The length of the input parameter exceeds the upper limit.
     *     <br>3.The input parameter contains an invalid uri.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDownloadList(uris: Array<string>): Promise<Array<DownloadProgress>>;
    /**
     * Query the total size of cached files.
     *
     * @returns { Promise<long> } - Return the total size of cached files.
     * @throws { BusinessError } 13900010 - Try again.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getCachedTotalSize(): Promise<long>;
    /**
     * Clean all downloaded files except those not yet migrated to the cloud or those that are being written to.
     *
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 13900010 - Try again.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
     cleanAllFileCache(): Promise<void>;
  }

  /**
   * Enumerates the device-cloud file sync states.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum FileState {
    /**
     * Initial state after the first download.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    INITIAL_AFTER_DOWNLOAD = 0,
    /**
     * The file is being uploaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    UPLOADING = 1,
    /**
     * The upload has been stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    STOPPED = 2,
    /**
     * The file is going to be uploaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    TO_BE_UPLOADED = 3,
    /**
     * The file has been successfully uploaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    UPLOAD_SUCCESS = 4,
    /**
     * The file fails to be uploaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    UPLOAD_FAILURE = 5
  }

  /**
   * Enumerates the device-cloud file sync states.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum FileSyncState {
    /**
     * The file is being uploaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UPLOADING = 0,
    /**
     * The file is being downloaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DOWNLOADING = 1,
    /**
     * Sync completed.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    COMPLETED = 2,
    /**
     * Sync stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    STOPPED = 3,
    /**
     * The file is going to be uploaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TO_BE_UPLOADED = 4,
    /**
     * The file has been successfully uploaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOAD_SUCCESS = 5,
    /**
     * The file fails to be uploaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOAD_FAILURE = 6
  }

  /**
   * Obtains the file sync state. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { Array<string> } uri - URI of the file whose sync state is to be obtained.
   * @returns { Promise<Array<FileSyncState>> } Promise used to return the sync state obtained.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
   *     system API.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 14000002 - Invalid uri.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getFileSyncState(uri: Array<string>): Promise<Array<FileSyncState>>;
  /**
   * Obtains the file sync state. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { Array<string> } uri - URI of the file whose sync state is to be obtained.
   * @param { AsyncCallback<Array<FileSyncState>> } callback - Callback used to return the file sync state.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
   *     system API.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 14000002 - Invalid uri.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getFileSyncState(uri: Array<string>, callback: AsyncCallback<Array<FileSyncState>>): void;
  /**
   * Obtains the file sync state.
   *
   * @param { string } uri - URI of the target file.
   * @returns { FileSyncState } Sync state of the file.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
   *     system API.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900012 - Permission denied by the file system
   * @throws { BusinessError } 13900031 - Function not implemented
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14000002 - Invalid uri.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getFileSyncState(uri: string): FileSyncState;
  /**
   * Obtains the upload sync state of a cloud file. This API returns the result synchronously.
   *
   * @param { string } uri - URI of the file whose sync state is to be obtained.
   * @returns { FileState } Upload sync state of the given cloud file.
   * @throws { BusinessError } 13600001 - IPC error. Possible causes:
   *     <br>1.IPC failed or timed out. 2.Failed to load the service.
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900012 - Permission denied by the file system
   * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
   *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 13900031 - Function not implemented
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @throws { BusinessError } 22400005 - Inner error. Possible causes:
   *     <br>1.Failed to access the database or execute the SQL statement.
   *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function getCoreFileSyncState(uri: string): FileState;
  /**
   * Subscribes to the change of a file. The callback returns the changed data.
   *
   * @param { string } uri - URI of the file to download.
   * @param { boolean } recursion - Whether to listen for the change of the URI, subfiles, and subdirectories. The value
   *     **true** means to listen for the change of the URI, subfiles, and subdirectories; the value **false** means to
   *     only listen for the change of the URI.
   * @param { Callback<ChangeData> } callback - Callback used to return the changed data.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 14000002 - Invalid uri.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  function registerChange(uri: string, recursion: boolean, callback: Callback<ChangeData>): void;
  /**
   * Unsubscribes from the change of a file.
   *
   * @param { string } uri - URI of the file to download.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 14000002 - Invalid uri.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  function unregisterChange(uri: string): void;

  /**
   * Enumerates the data change types.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum NotifyType {
    /**
     * A file is created.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_ADDED = 0,
    /**
     * The file is modified.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_MODIFIED = 1,
    /**
     * The file is deleted.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_DELETED = 2,
    /**
     * The file is renamed or moved.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_RENAMED = 3
  }

  /**
   * Represents the data change information.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface ChangeData {
    /**
     * Type of the data change.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    type: NotifyType;
    /**
     * Whether the URIs with data changed are of directories. The value **true** means the URIs are of directories; the
     * value **false** means the opposite.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    isDirectory: Array<boolean>;
    /**
     * List of URIs whose data needs to be changed.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    uris: Array<string>;
  }
  /**
   * Optimizes the resources that have been synced to the cloud from the local Gallery and executes the automatic aging
   * policy according to the remaining local space. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
   *     system API.
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  function optimizeStorage():Promise<void>;

  /**
   * Optimizes local resources that have been synced to the cloud and optimizes local images and videos that have not
   * been accessed before the aging period expires. This API uses a promise to return the result. The callback returns
   * the optimization progress.
   *
   * startOptimizeSpace is used together with **stopOptimizeSpace**. If **startOptimizeSpace** is called repeatedly, the
   * error code 22400006 will be returned, indicating that other tasks are being executed.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { OptimizeSpaceParam } optimizePara - Optimizes parameters.
   * @param { Callback<OptimizeSpaceProgress> } callback - Callback used to return the optimization progress. By default
   *     , error code 401 is returned and no clearing task is executed.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
   *     system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2
   *     .Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 22400005 - Inner error.
   * @throws { BusinessError } 22400006 - The same task is already in progress.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  function startOptimizeSpace(optimizePara: OptimizeSpaceParam, callback?: Callback<OptimizeSpaceProgress>): Promise<void>;

  /**
   * Synchronously stops optimizing cloud resource space. This method is used with **startOptimizeSpace**.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
   *     system API.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 22400005 - Inner error.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  function stopOptimizeSpace(): void;

  /**
   * Enumerates the space optimization states.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  enum OptimizeState {
    /**
     * The space is being optimized.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    RUNNING = 0,

    /**
     * The space optimization is complete.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    COMPLETED = 1,

    /**
     * Space optimization failed.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    FAILED = 2,

    /**
     * Space optimization stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    STOPPED = 3
  }

  /**
   * Represents the space optimization states and optimization progress.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  interface OptimizeSpaceProgress {
    /**
     * Enumerates the space optimization states.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    state: OptimizeState;

    /**
     * Optimization progress percentage. The value range is [0, 100].
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    progress: int;
  }

  /**
   * Sets the total optimization space and aging days.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  interface OptimizeSpaceParam {
    /**
     * Total size of the optimization space. You can obtain the total size of all files to be aged through the media
     * library API. The size is transferred by the application and is in bytes.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    totalSize:long;

    /**
     * Aging days. The system optimizes the local images and videos that have been uploaded to the cloud but not viewed
     * for more than the aging days.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    agingDays: int;
  }

  /**
   * Represents the historical version information of the device-cloud file when the
   * [gethistoryversionlist]{@link cloudSync.FileVersion.getHistoryVersionList} method of the
   * [FileVersion]{@link cloudSync.FileVersion} class is called.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface HistoryVersion {
    /**
     * File content modification timestamp, in milliseconds.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    editedTime: long;
    /**
     * File size in bytes.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    fileSize: long;
    /**
     * File version.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    versionId: string;
    /**
     * File name of the current version.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    originalFileName: string;
    /**
     * Hash value of the file content of the current version.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    sha256: string;
    /**
     * Whether the current version is the one where conflicts were automatically resolved.
     *
     * When the application is set to manually resolve conflicts, **false** is returned by default, which is
     * meaningless.
     *
     * When the application is set to automatically resolve conflicts, the device side automatically resolves conflicts.
     * The value **true** means conflicts exist in the current version and have been automatically resolved by the
     * device-cloud service; the value **false** means no conflict exists and conflicts are not automatically resolved.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    autoResolved: boolean;
  }

  /**
   * Represents the download state and progress information of historical version files when the
   * [downloadHistoryVersion]{@link cloudSync.FileVersion.downloadHistoryVersion} method of the
   * [FileVersion]{@link cloudSync.FileVersion} class is called.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface VersionDownloadProgress {
    /**
     * Download state of the cloud file of the selected version.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    state: State;
    /**
     * Download progress, in percentage.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    progress: int;
    /**
     * Type of the error returned when the batch download fails.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    errType: DownloadErrorType;
  }

  /**
   * Represents the device-cloud file version management class. It allows you to manage historical versions of client-
   * cloud files, obtain the list of historical versions, download historical versions to the local device, replace the
   * current local file with a historical version file, and query and remove conflict flags for version conflicts.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  class FileVersion {
    /**
     * A constructor used to create a **FileVersion** instance.
     *
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Obtains the list of historical versions. The returned versions are sorted by modification time. The earlier the
     * modification time, the later the version. This API uses a promise to return the result.
     *
     * If the number of cloud versions is less than the length limit, the list will be returned with the actual number
     * of versions.
     *
     * If the number of cloud versions is greater than or equal to the length limit, the number of the latest versions (
     * specified by **versionNumLimit**) will be returned.
     *
     * @param { string } uri - File URI.
     * @param { int } versionNumLimit - Length limit of the historical version list. The value range is [0, 100000] (
     *     unit: number). If the input value is greater than 100,000, the list is returned according to the maximum
     *     value.
     * @returns { Promise<Array<HistoryVersion>> } Promise used to return the list of historical versions.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    getHistoryVersionList(uri: string, versionNumLimit: int): Promise<Array<HistoryVersion>>;
    /**
     * Obtains the content of a file of a specified version based on the version number. You can download a file of a
     * specified version from the cloud to a temporary local path. The application determines whether to replace the
     * original file with the temporary file, or retain or delete the temporary file. The callback returns the file
     * download progress, and the promise returns the URI of the temporary file of an earlier version.
     *
     * @param { string } uri - File URI.
     * @param { string } versionId - Version ID of a file. The format is returned by the
     *     [gethistoryversionlist]{@link cloudSync.FileVersion.getHistoryVersionList} API.
     * @param { Callback<VersionDownloadProgress> } callback - Callback used to return the download progress.
     * @returns { Promise<string> } Promise used to return the URI of the temporary file of a historical version.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    downloadHistoryVersion(uri: string, versionId: string, callback: Callback<VersionDownloadProgress>): Promise<string>;
    /**
     * Replaces the local file with the file of a historical version. Before replacement, call the
     * [downloadHistoryVersion]{@link cloudSync.FileVersion.downloadHistoryVersion} method to download the selected
     * historical version and obtain its version URI. If this API is called directly without prior download or the
     * version URI is invalid, an exception will be thrown. Once replacement is complete, the temporary file will be
     * automatically deleted. This API uses a promise to return the result.
     *
     * @param { string } originalUri - URI of the local file.
     * @param { string } versionUri - URI of the historical file.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900005 - I/O error.
     * @throws { BusinessError } 13900008 - Bad file descriptor.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI. Possible causes: 1.originalUri invalid; 2.versionUri invalid.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @throws { BusinessError } 22400007 - The version file specified to replace the original file does not exist.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    replaceFileWithHistoryVersion(originalUri: string, versionUri: string): Promise<void>;
    /**
     * Obtains the version conflict flag of a local file. This API uses a promise to return the result. This API takes
     * effect only when the application is configured for manual conflict resolution. Otherwise, conflicts are
     * automatically resolved during synchronization, and the return value will be **false**.
     *
     * Once the application is configured for manual conflict resolution, calling this API returns whether the current
     * local file conflicts with the cloud file. The application then prompts the user to handle the conflict. After the
     * conflict is resolved, you need to call the [clearFileConflict]{@link cloudSync.FileVersion.clearFileConflict}
     * method to clear the conflict flag and synchronize the file to the cloud.
     *
     * @param { string } uri - File URI.
     * @returns { Promise<boolean> } Promise used to return the conflict flag between the local file and the cloud file.
     *     The value **true** indicates that the local file conflicts with the cloud file, and the value **false**
     *     indicates the opposite.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isFileConflict(uri: string): Promise<boolean>;
    /**
     * Clears the version conflict flag of the local file. If a conflict occurs, you need to call this API to clear the
     * conflict flag after the conflict is resolved locally and trigger automatic synchronization. This API uses a
     * promise to return the result.
     *
     * @param { string } uri - URI of the file for which the conflict flag is to be cleared.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    clearFileConflict(uri: string): Promise<void>;
  }
}

export default cloudSync;