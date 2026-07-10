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
 * The **cloudSyncManager** module provides APIs for managing device-cloud sync for applications. You can use the APIs
 * to manage the full download state, the reason why the full download stops, and number of local and cloud files.
 *
 * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace cloudSyncManager {
  /**
   * Changes the device-cloud file sync switch for an application. This API uses a promise to return the result.
   *
   * @param { string } accountId - Account ID.
   * @param { string } bundleName - Bundle name.
   * @param { boolean } status - State of the cloud-device file sync switch to set. The value **true** means to enable
   *     this function; the value **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean): Promise<void>;

  /**
   * Changes the device-cloud file sync switch for an application. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { string } accountId - Account ID.
   * @param { string } bundleName - Bundle name of the application.
   * @param { boolean } status - State of the cloud-device file sync switch to set. The value **true** means to enable
   *     this function; the value **false** means the opposite.
   * @param { AsyncCallback<void> } [callback] - Callback used to return the result of changing the device-cloud file
   *     sync switch for an application.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean, callback: AsyncCallback<void>): void;

  /**
   * Notifies the device-cloud service that the cloud data of a specific application under a specified account has been
   * changed. This API uses a promise to return the result.
   *
   * @param { string } accountId - Account ID.
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function notifyDataChange(accountId: string, bundleName: string): Promise<void>;

  /**
   * Notifies the device-cloud service that the cloud data of a specific application under a specified account has been
   * changed. This API uses an asynchronous callback to return the result.
   *
   * @param { string } accountId - Account ID.
   * @param { string } bundleName - Bundle name.
   * @param { AsyncCallback<void> } [callback] - Callback used to return the application data change in the cloud.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function notifyDataChange(accountId: string, bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Enables device-cloud sync. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Account ID.
   * @param { Record<string, boolean> } switches - Whether to enable the device-cloud sync feature. The application
   *     bundle name is a string. The switch status is a Boolean value. The value **true** means to enable this function
   *     ; the value **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function enableCloud(accountId: string, switches: Record<string, boolean>): Promise<void>;

  /**
   * Enables device-cloud sync. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Account ID.
   * @param { Record<string, boolean> } switches - Whether to enable the device-cloud sync feature. The application
   *     bundle name is a string. The switch status is a Boolean value. The value **true** means to enable this function
   *     ; the value **false** means the opposite.
   * @param { AsyncCallback<void> } [callback] - Callback used to return the result of enabling device-cloud sync.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function enableCloud(
    accountId: string,
    switches: Record<string, boolean>,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Disables device-cloud sync. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Account ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function disableCloud(accountId: string): Promise<void>;

  /**
   * Disables device-cloud sync. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Account ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result of disabling device-cloud sync.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function disableCloud(accountId: string, callback: AsyncCallback<void>): void;

  /**
   * Enumerates the actions that can be taken to clear local cloud data.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  enum Action {
    /**
     * Clear the cloud identifier but retain the files cached locally.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    RETAIN_DATA = 0,

    /**
     * Clear the cloud identifier and the files cached locally.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CLEAR_DATA = 1
  }

  /**
   * Callback used to clear the cloud data locally. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Account ID.
   * @param { Record<string, Action> } appActions - Action to perform. The bundle name of the application whose data is
   *     to be cleared is a string. [Action]{@link cloudSyncManager.Action} specifies the action to perform.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function clean(accountId: string, appActions: Record<string, Action>): Promise<void>;

  /**
   * Callback used to clear the cloud data locally. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Account ID.
   * @param { Record<string, Action> } appActions - Action to perform. The bundle name of the application whose data is
   *     to be cleared is a string. [Action]{@link cloudSyncManager.Action} specifies the action to perform.
   * @param { AsyncCallback<void> } callback - Callback used to clear the cloud data locally.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function clean(accountId: string, appActions: Record<string, Action>, callback: AsyncCallback<void>): void;

  /**
   * Notifies the device-cloud service of the cloud data change information of a specified user. This API uses a promise
   * to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { int } userId - User ID.
   * @param { ExtraData } extraData - Represents the cloud data change information.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
   *     system API.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function notifyDataChange(userId: int, extraData: ExtraData): Promise<void>;

  /**
   * Notifies the device-cloud service of the cloud data change information of a specified user. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { int } userId - User ID.
   * @param { ExtraData } extraData - Represents the cloud data change information.
   * @param { AsyncCallback<void> } callback - Callback used to return the application data change in the cloud.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
   *     system API.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function notifyDataChange(userId: int, extraData: ExtraData, callback: AsyncCallback<void>): void;

  /**
   * Represents the cloud data change information.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface ExtraData {
    /**
     * Change event ID.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    eventId: string;
    /**
     * Represents the cloud data change information.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    extraData: string;
  }

  /**
   * Enumerates the reasons why the full download stops. The default value is **NO_STOP**.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum DownloadStopReason {
    /**
     * Downloading.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    NO_STOP = 0,
    /**
     * Downloading. Mobile network and Wi-Fi are unavailable.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    NETWORK_UNAVAILABLE = 1,
    /**
     * Downloading. The device storage is full.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    LOCAL_STORAGE_FULL = 2,
    /**
     * Downloading. The device temperature exceeds the upper limit.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    TEMPERATURE_LIMIT = 3,
    /**
     * Downloading. The user stops the download.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    USER_STOPPED = 4,
    /**
     * Downloading. The application is uninstalled.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    APP_UNLOAD = 5,
    /**
     * Downloading. The download stops due to other reasons, for example, the cloud server does not respond.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    OTHER_REASON = 6
  }

  /**
   * Enumerates the full download states.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum DownloadState {
    /**
     * Downloading.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    RUNNING = 0,
    /**
     * Downloaded.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    COMPLETED = 1,
    /**
     * Downloading stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    STOPPED = 2,
    /**
     * Indicates that the download task is missing.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MISSING = 3
  }

  /**
   * Describes the state type of transfer task.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum TransferState {
    /**
     * Indicates that the transfer task is running.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RUNNING = 0,
    /**
     * Indicates that the transfer task has been finished.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMPLETED = 1,
    /**
     * Indicates that the transfer task has been stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STOPPED = 2
  }

  /**
   * Describes the state type of transfer stop reason.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum TransferStopReason {
    /**
     * Indicates that the transfer task stopped by switch off.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SWITCH_OFF = 0,
    /**
     * Indicates that the transfer task stopped by account logout.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ACCOUNT_LOGOUT = 1,
    /**
     * Indicates that the transfer task stopped by other reason.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    OTHER_REASON = 2
  }

  /**
   * Represents the number and size of local and cloud files of an application.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface CloudFileInfo {
    /**
     * Total number of cloud files that are not downloaded locally. The value range is [0, INT32_MAX].
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    cloudFileCount: int;
    /**
     * Total size of cloud files that are not downloaded locally, in bytes. The value range is [0, INT64_MAX].
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    cloudFileTotalSize: long;
    /**
     * Total number of local files that are not uploaded to the cloud. The value range is [0, INT32_MAX].
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    localFileCount: int;
    /**
     * Total size of local files that are not uploaded to the cloud, in bytes. The value range is [0, INT64_MAX].
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    localFileTotalSize: long;
    /**
     * Total number of local files that have been uploaded to the cloud. The value range is [0, INT32_MAX].
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    bothFileCount: int;
    /**
     * Total size of local files that have been uploaded to the cloud, in bytes. The value range is [0, INT64_MAX].
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    bothFileTotalSize: long;
  }

  /**
   * Defines the TransferProgress data structure.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface TransferProgress {
    /**
     * Describes the state type of transfer task.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: TransferState;
    /**
     * successful count in TransferProgress.
     * The value should be an integer.
     * <br>Unit:Pcs.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    successfulCount: int;
    /**
     * failed count in TransferProgress.
     * The value should be an integer.
     * <br>Unit:Pcs.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    failedCount: int;
    /**
     * total count in TransferProgress.
     * The value should be an integer.
     * <br>Unit:Pcs.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    totalCount: int;
    /**
     * transferred size in TransferProgress.
     * <br>Unit:Byte.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    transferredSize: long;
    /**
     * Total size in TransferProgress.
     * <br>Unit:Byte.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    totalSize: long;
    /**
     * Describes the state type of transfer stop reason.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopReason: TransferStopReason;
  }

  /**
   * Describes the full download progress.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @since 20 dynamic
   * @since 23 static
   */
  class DownloadProgress {
    /**
     * Download state.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    state: DownloadState;
    /**
     * Number of downloaded files. The value range is [0, INT32_MAX]. If the progress is abnormal, **-1** is returned.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    successfulCount: int;
    /**
     * Number of files that fail to be downloaded. The value range is [0, INT32_MAX]. If the progress is abnormal,
     * **-1** is returned.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    failedCount: int;
    /**
     * Total number of files to be downloaded. The value range is [0, INT32_MAX]. If the progress is abnormal, **-1** is
     * returned.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    totalCount: int;
    /**
     * Size of the downloaded data, in bytes. The value range is
     * [0, INT64_MAX). If the progress is abnormal, **INT64_MAX** is returned.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    downloadedSize: long;
    /**
     * Total size of the files to be downloaded, in bytes. The value range is
     * [0, INT64_MAX). If the progress is abnormal, **INT64_MAX** is returned.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    totalSize: long;
    /**
     * Reason why the download stops.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    stopReason: DownloadStopReason;
  }

  /**
   * Full download: provides the capability of downloading cloud data for applications.
   *
   * It supports the full download of cloud application files.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  class DowngradeDownload {
    /**
     * A constructor used to create an instance of the **DowngradeDownload** class with a specified bundle name.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { string } bundleName - Bundle name.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(bundleName: string);
    /**
     * Obtains the size and count of files for applications requiring full download, including those stored only locally
     * , only in the cloud, or both locally and in the cloud. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<CloudFileInfo> } Promise used to return the local and cloud file information.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCloudFileInfo(): Promise<CloudFileInfo>;
    /**
     * Starts the full download for the specified application's cloud files. This API uses a promise to return the
     * result. This API uses an asynchronous callback to return the result.
     *
     * Repeated triggering of a full download task will throw an error (22400006).
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { Callback<DownloadProgress> } callback - Callback used to return the download progress. The parameter is
     *     **DownloadProgress**, and the return value is **void**.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @throws { BusinessError } 22400006 - The same task is already in progress.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    startDownload(callback: Callback<DownloadProgress>): Promise<void>;
    /**
     * Stops the full download task triggered by [startDownload]{@link cloudSyncManager.DowngradeDownload.startDownload}
     * . This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    stopDownload(): Promise<void>;
    /**
     * Start to migrate the downloaded full data to the specified public directory of file management.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { string } targetUri - Transfer target Uri.
     * @param { Callback<TransferProgress> } callback - Callback function. The callback will be triggered when the transfer progress changes or the transfer task completes.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 13900001 - Operation not permitted. Possible causes:
     *     <br>1.The DowngradeDownload task is running.
     *     <br>2.The full data synchronization task is running.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified.
     *     <br>2.The length of the input uri does not meet the value range requirement.
     *     <br>3.The input uri does not belong to a File Manager public directory.
     * @throws { BusinessError } 22400006 - The same task is already in progress.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    startTransfer(targetUri: string, callback: Callback<TransferProgress>): void;
  }

  /**
   * Supports querying the execution status of full data download tasks for integrated cloud drive applications.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { Array<string> } bundleNames - array of bundleName.
   * @returns { Promise<Array<DownloadProgress>> } - Return Promise.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13900010 - Try again.
   * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
   *     <br>1.Mandatory parameter are left unspecified.
   *     <br>2.The length of the input parameter exceeds the upper limit. Maximum array length is 20.
   *     <br>3.The input parameter contains an invalid bundleName.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getDowngradeDownloadTaskState(bundleNames: Array<string>): Promise<Array<DownloadProgress>>;

  /**
   * Specifies a result object that contains the application bundle name and the status information about whether there
   * are files that have not been uploaded to the cloud in the cloud storage space.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface LocalFilePresentStatus {
    /**
     * Bundle name.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 23 dynamic&static
     */
    bundleName: string;
    /**
     * Whether there are local files that have not been synchronized to the cloud in the cloud storage space of the
     * application. The value **true** indicates that such file exists, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 23 dynamic&static
     */
    isLocalFilePresent: boolean;
  }

  /**
   * Obtains the existence status of local files for multiple applications and checks whether there are files that
   * have not been uploaded to the cloud in the cloud storage space. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { Array<string> } bundleNames - Array of application bundle names to be checked. Each element is the
   *     bundle name of an application.
   * @returns { Promise<Array<LocalFilePresentStatus>> } Promise used to return an array of objects. Each object in
   *     the array contains the bundle name of the application to be checked and the local file existence status.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error. Possible causes:
   *     <br>1.IPC failed or timed out. 2.Failed to load the service.
   * @throws { BusinessError } 13900010 - Try again.
   * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
   *     <br>1.Mandatory parameter are left unspecified. 2.The length of the input parameter exceeds the upper limit.
   *     <br>3.The input parameter contains an invalid bundleName.
   * @throws { BusinessError } 22400005 - Inner error. Possible causes:
   *     <br>1.Failed to access the database or execute the SQL statement.
   *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 23 dynamic&static
   */
  function getBundlesLocalFilePresentStatus(bundleNames: Array<string>): Promise<Array<LocalFilePresentStatus>>;
}

export default cloudSyncManager;