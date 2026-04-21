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

/**
 * @file
 * @kit BasicServicesKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * The **update** module implements update of the entire system, including built-in resources and preset applications,
 * but not third-party applications.
 *
 * There are three types of updates: SD card update, over the air (OTA) update, and factory reset update.
 *
 * - The SD card update depends on the update packages and SD cards.
 * - The OTA update depends on the server deployed by the device manufacturer for managing update packages. The OTA
 * server IP address is passed by the caller. The request interface is fixed and developed by the device manufacturer.
 * - The factory reset update object provides the API for restoring factory settings.
 *
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.Update.UpdateService
 * @systemapi hide for inner use.
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace update {
  /**
   * Obtains an **OnlineUpdater** object.
   *
   * @param { UpgradeInfo } upgradeInfo - **OnlineUpdater** object information.
   * @returns { Updater } **OnlineUpdater** object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getOnlineUpdater(upgradeInfo: UpgradeInfo): Updater;

  /**
   * Obtains a **Restorer** object for restoring factory settings.
   *
   * @returns { Restorer } **Restorer** object for restoring factory settings.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getRestorer(): Restorer;

  /**
   * Obtains a **LocalUpdater** object.
   *
   * @returns { LocalUpdater } **LocalUpdater** object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getLocalUpdater(): LocalUpdater;

  /**
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Updater {
    /**
     * Checks whether a new version is available. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<CheckResult> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    checkNewVersion(callback: AsyncCallback<CheckResult>): void;

    /**
     * Checks whether a new version is available. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<CheckResult> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    checkNewVersion(): Promise<CheckResult>;

    /**
     * Obtains information about the new version. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<NewVersionInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionInfo(callback: AsyncCallback<NewVersionInfo>): void;

    /**
     * Obtains information about the new version. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<NewVersionInfo> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionInfo(): Promise<NewVersionInfo>;

    /**
     * Obtains the description file of the new version. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { DescriptionOptions } descriptionOptions - Options of the description file.
     * @param { AsyncCallback<Array<ComponentDescription>> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void;

    /**
     * Obtains the description file of the new version. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { DescriptionOptions } descriptionOptions - Options of the description file.
     * @returns { Promise<Array<ComponentDescription>> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions
    ): Promise<Array<ComponentDescription>>;

    /**
     * Obtains information about the current version. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<CurrentVersionInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionInfo(callback: AsyncCallback<CurrentVersionInfo>): void;

    /**
     * Obtains information about the current version. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<CurrentVersionInfo> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionInfo(): Promise<CurrentVersionInfo>;

    /**
     * Obtains the description file of the current version. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { DescriptionOptions } descriptionOptions - Options of the description file.
     * @param { AsyncCallback<Array<ComponentDescription>> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionDescription(
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void;

    /**
     * Obtains the description file of the current version. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { DescriptionOptions } descriptionOptions - Options of the description file.
     * @returns { Promise<Array<ComponentDescription>> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionDescription(descriptionOptions: DescriptionOptions): Promise<Array<ComponentDescription>>;

    /**
     * Obtains information about the update task. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<TaskInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskInfo(callback: AsyncCallback<TaskInfo>): void;

    /**
     * Obtains information about the update task. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<TaskInfo> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskInfo(): Promise<TaskInfo>;

    /**
     * Downloads the new version. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { DownloadOptions } downloadOptions - Download options.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an **Error** object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    download(
      versionDigestInfo: VersionDigestInfo,
      downloadOptions: DownloadOptions,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Downloads the new version. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { DownloadOptions } downloadOptions - Download options.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    download(versionDigestInfo: VersionDigestInfo, downloadOptions: DownloadOptions): Promise<void>;

    /**
     * Resumes download of the new version. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { ResumeDownloadOptions } resumeDownloadOptions - Options for resuming download.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an **Error** object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    resumeDownload(
      versionDigestInfo: VersionDigestInfo,
      resumeDownloadOptions: ResumeDownloadOptions,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Resumes download of the new version. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { ResumeDownloadOptions } resumeDownloadOptions - Options for resuming download.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    resumeDownload(versionDigestInfo: VersionDigestInfo, resumeDownloadOptions: ResumeDownloadOptions): Promise<void>;

    /**
     * Pauses download of the new version. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { PauseDownloadOptions } pauseDownloadOptions - Options for pausing download.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an **Error** object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    pauseDownload(
      versionDigestInfo: VersionDigestInfo,
      pauseDownloadOptions: PauseDownloadOptions,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Pauses download of the new version. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { PauseDownloadOptions } pauseDownloadOptions - Options for pausing download.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    pauseDownload(versionDigestInfo: VersionDigestInfo, pauseDownloadOptions: PauseDownloadOptions): Promise<void>;

    /**
     * Updates the version. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { UpgradeOptions } upgradeOptions - Update options.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an **Error** object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions, callback: AsyncCallback<void>): void;

    /**
     * Updates the version. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { UpgradeOptions } upgradeOptions - Update options.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions): Promise<void>;

    /**
     * Clears errors. If an exception occurs during version download or installation, the upgrade package and upgrade 
     * status are cleared. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { ClearOptions } clearOptions - Clear options.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an **Error** object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions, callback: AsyncCallback<void>): void;

    /**
     * Clears errors. If an exception occurs during version download or installation, the upgrade package and upgrade 
     * status are cleared. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { ClearOptions } clearOptions - Update options.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions): Promise<void>;

    /**
     * Obtains the update policy. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<UpgradePolicy> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getUpgradePolicy(callback: AsyncCallback<UpgradePolicy>): void;

    /**
     * Obtains the update policy. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<UpgradePolicy> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getUpgradePolicy(): Promise<UpgradePolicy>;

    /**
     * Sets the update policy. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradePolicy } policy - Update policy.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    setUpgradePolicy(policy: UpgradePolicy, callback: AsyncCallback<void>): void;

    /**
     * Sets the update policy. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradePolicy } policy - Update policy.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    setUpgradePolicy(policy: UpgradePolicy): Promise<void>;

    /**
     * Terminates the update. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an **Error** object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    terminateUpgrade(callback: AsyncCallback<void>): void;

    /**
     * Terminates the update. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    terminateUpgrade(): Promise<void>;

    /**
     * Enables listening for update events. This API uses an asynchronous callback to return the result.
     *
     * @param { EventClassifyInfo } eventClassifyInfo - Event information.
     * @param { UpgradeTaskCallback } taskCallback - Event callback.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void;

    /**
     * Disables listening for update events. This API uses an asynchronous callback to return the result.
     *
     * @param { EventClassifyInfo } eventClassifyInfo - Event information.
     * @param { UpgradeTaskCallback } taskCallback - Event callback.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void;
  }

  /**
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Restorer {
    /**
     * Clears the user data partition. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.FACTORY_RESET
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation fails, **err** is
     *     an error object and a callback is returned. If the operation is successful, **err** is undefined and no
     *     callback is returned.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    factoryReset(callback: AsyncCallback<void>): void;

    /**
     * Clears the user data partition. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FACTORY_RESET
     * @returns { Promise<void> } Promise that returns no value. If the operation fails, a callback is returned. If the
     *     operation is successful, no callback is returned.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    factoryReset(): Promise<void>;

    /**
     * Clears the user data partition and the file key. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FORCE_FACTORY_RESET
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 23 dynamic&static
     */
    forceFactoryReset(): Promise<void>;

    /**
     * Clears the user data partition and OS partition by means of overwriting. This API uses a promise to return the 
     * result.
     *
     * @permission ohos.permission.FACTORY_RESET
     * @param { FactoryResetStrategy } factoryResetStrategy - Factory reset strategy.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deepFactoryReset(factoryResetStrategy: FactoryResetStrategy): Promise<void>;

    /**
     * Obtains the factory reset information. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FACTORY_RESET
     * @param { FactoryResetStrategy } factoryResetStrategy - Factory reset strategy.
     * @returns { Promise<FactoryResetInfo> } Promise used to return the factory reset information.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeepFactoryResetInfo(factoryResetStrategy: FactoryResetStrategy): Promise<FactoryResetInfo>;
  }

  /**
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface LocalUpdater {
    /**
     * Verifies the update package. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradeFile } upgradeFile - Update file.
     * @param { string } certsFile - Path of the certificate file.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string, callback: AsyncCallback<void>): void;

    /**
     * Verifies the update package. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradeFile } upgradeFile - Update file.
     * @param { string } certsFile - Path of the certificate file.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string): Promise<void>;

    /**
     * Installs the update package. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { Array<UpgradeFile> } upgradeFiles - Update file.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an **Error** object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    applyNewVersion(upgradeFiles: Array<UpgradeFile>, callback: AsyncCallback<void>): void;

    /**
     * Installs the update package. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { Array<UpgradeFile> } upgradeFiles - Update file.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    applyNewVersion(upgradeFiles: Array<UpgradeFile>): Promise<void>;

    /**
     * Enables listening for update events. This API uses an asynchronous callback to return the result.
     *
     * @param { EventClassifyInfo } eventClassifyInfo - Event information.
     * @param { UpgradeTaskCallback } taskCallback - Event callback.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void;

    /**
     * Disables listening for update events. This API uses an asynchronous callback to return the result.
     *
     * @param { EventClassifyInfo } eventClassifyInfo - Event information.
     * @param { UpgradeTaskCallback } taskCallback - Event callback.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void;
  }

  /**
   * Represents update information.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradeInfo {
    /**
     * Application package name.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgradeApp: string;

    /**
     * Update service type.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    businessType: BusinessType;
  }

  /**
   * Represents an update service type.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface BusinessType {
    /**
     * Supplier or vendor.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    vendor: BusinessVendor;

    /**
     * Represents an update type.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    subType: BusinessSubType;
  }

  /**
   * Represents the package check result.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CheckResult {
    /**
     * Whether a new version is available.
     *
     * The value **true** indicates that a new version is available, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    isExistNewVersion: boolean;

    /**
     * Information about the new version.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    newVersionInfo: NewVersionInfo;
  }

  /**
   * Represents information about the new version.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface NewVersionInfo {
    /**
     * Version digest information.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionDigestInfo: VersionDigestInfo;

    /**
     * Version components.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionComponents: Array<VersionComponent>;
  }

  /**
   * Represents version digest information.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface VersionDigestInfo {
    /**
     * Version digest information.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionDigest: string;
  }

  /**
   * Represents a version component.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface VersionComponent {
    /**
     * Component ID.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    componentId: string;

    /**
     * Component type.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    componentType: ComponentType;

    /**
     * Update mode.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgradeAction: UpgradeAction;

    /**
     * Display version number.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    displayVersion: string;

    /**
     * Internal version number.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    innerVersion: string;

    /**
     * Size of the update package, in bytes.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    size: int;

    /**
     * Effective mode.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    effectiveMode: EffectiveMode;

    /**
     * Information about the version description file.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionInfo: DescriptionInfo;

    /**
     * OTA mode.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    otaMode?: OtaMode;
  }

  /**
   * Represents options of the description file.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DescriptionOptions {
    /**
     * Format of the description file.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    format: DescriptionFormat;

    /**
     * Language of the description file.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    language: string;
  }

  /**
   * Represents a component description file.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ComponentDescription {
    /**
     * Component ID.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    componentId: string;

    /**
     * Information about the description file.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionInfo: DescriptionInfo;
  }

  /**
   * Represents information about the version description file.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DescriptionInfo {
    /**
     * Type of the description file.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionType: DescriptionType;

    /**
     * Content of the description file.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    content: string;
  }

  /**
   * Represents information about the current version.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CurrentVersionInfo {
    /**
     * System version number.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    osVersion: string;

    /**
     * Device name.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * Version components.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionComponents: Array<VersionComponent>;
  }

  /**
   * Represents download options.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DownloadOptions {
    /**
     * Network type.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    allowNetwork: NetType;

    /**
     * Update command.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    order: Order;
  }

  /**
   * Represents options for resuming download.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ResumeDownloadOptions {
    /**
     * Network type.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    allowNetwork: NetType;
  }

  /**
   * Represents options for pausing download.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface PauseDownloadOptions {
    /**
     * Whether to allow automatic resuming of download.
     *
     * The value **true** indicates that automatic resuming is allowed, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    isAllowAutoResume: boolean;
  }

  /**
   * Represents update options.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradeOptions {
    /**
     * Update command.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    order: Order;
  }

  /**
   * Represents options for clearing errors.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ClearOptions {
    /**
     * Error status.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    status: UpgradeStatus;
  }

  /**
   * Represents an update policy.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradePolicy {
    /**
     * Automatic download policy.
     *
     * The value **true** indicates that automatic download is supported, and the value **false** indicates the
     * opposite.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    downloadStrategy: boolean;

    /**
     * Automatic update policy.
     *
     * The value **true** indicates that automatic update is supported, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    autoUpgradeStrategy: boolean;

    /**
     * Automatic update period.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    autoUpgradePeriods: Array<UpgradePeriod>;
  }

  /**
   * Represents an automatic update period.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradePeriod {
    /**
     * Start time.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * End time.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * Task information.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface TaskInfo {
    /**
     * Whether a task exists.
     *
     * The value **true** indicates that the task exists, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    existTask: boolean;

    /**
     * Task data.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    taskBody: TaskBody;
  }

  /**
   * Describes event information.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EventInfo {
    /**
     * Event ID.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    eventId: EventId;

    /**
     * Task data.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    taskBody: TaskBody;
  }

  /**
   * Represents task data.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface TaskBody {
    /**
     * Version digest information.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionDigestInfo: VersionDigestInfo;

    /**
     * Update status.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    status: UpgradeStatus;

    /**
     * Sub-status.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    subStatus: int;

    /**
     * Progress.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    progress: int;

    /**
     * Installation mode.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    installMode: int;

    /**
     * Error message.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    errorMessages: Array<ErrorMessage>;

    /**
     * Version components.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionComponents: Array<VersionComponent>;
  }

  /**
   * Represents an error message.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ErrorMessage {
    /**
     * Error code.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    errorCode: int;

    /**
     * Error message.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    errorMessage: string;
  }

  /**
   * Describes event type information.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EventClassifyInfo {
    /**
     * Event type.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    eventClassify: EventClassify;

    /**
     * Additional information.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    extraInfo: string;
  }

  /**
   * Represents an update file.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradeFile {
    /**
     * File type.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    fileType: ComponentType;

    /**
     * File path.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    filePath: string;
  }

  /**
   * Describes the factory reset strategy.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface FactoryResetStrategy {
    /**
     * Reset scope.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    scope: FactoryResetScope;

    /**
     * Reset strategy.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    strategy: string;
  }

  /**
   * Describes the scope of restoring factory settings.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum FactoryResetScope {
    /**
     * User data.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DATA = 1,

    /**
     * User data and operating system.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DATA_AND_OS = 2
  }

  /**
   * Describes the information of restoring factory settings.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface FactoryResetInfo {
    /**
     * Duration required for restoring factory settings.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    duration: int;
  }

  /**
   * Represents an event callback.
   *
   * @typedef UpgradeTaskCallback [since 9 - 22]
   * @typedef { function } UpgradeTaskCallback [since 23]
   * @param { EventInfo } eventInfo - Event information. [since 23]
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export type UpgradeTaskCallback = (eventInfo: EventInfo) => void;

  /**
   * Represents a device vendor.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum BusinessVendor {
    /**
     * Open source.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    PUBLIC = 'public'
  }

  /**
   * Represents an update type.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum BusinessSubType {
    /**
     * Firmware.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    FIRMWARE = 1
  }

  /**
   * Represents a component type.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ComponentType {
    /**
     * Firmware.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    OTA = 1
  }

  /**
   * Enumerates update actions.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum UpgradeAction {
    /**
     * Differential package.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPGRADE = 'upgrade',

    /**
     * Recovery package.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    RECOVERY = 'recovery'
  }

  /**
   * Enumerates effective modes.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum EffectiveMode {
    /**
     * Cold update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    COLD = 1,

    /**
     * Live update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    LIVE = 2,

    /**
     * Hybrid live and cold update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    LIVE_AND_COLD = 3
  }

  /**
   * Enumerates the update modes.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 20 dynamic
   * @since 23 static
   */
  export enum OtaMode {
    /**
     * Regular update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    REGULAR_OTA = 0,

    /**
     * Streaming update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    STREAM_OTA = 1,

    /**
     * Regular A/B update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    AB_REGULAR_OTA = 2,

    /**
     * Streaming A/B update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    AB_STREAM_OTA = 3
  }

  /**
   * Enumerates description file types.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DescriptionType {
    /**
     * Content.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONTENT = 0,

    /**
     * Link.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    URI = 1
  }

  /**
   * Enumerates description file formats.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DescriptionFormat {
    /**
     * Standard format.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    STANDARD = 0,

    /**
     * Simple format.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    SIMPLIFIED = 1
  }

  /**
   * Enumerates network types.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum NetType {
    /**
     * Data network.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    CELLULAR = 1,

    /**
     * Wi-Fi hotspot.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    METERED_WIFI = 2,

    /**
     * Non Wi-Fi hotspot.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    NOT_METERED_WIFI = 4,

    /**
     * Wi-Fi.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI = 6,

    /**
     * Data network and Wi-Fi.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    CELLULAR_AND_WIFI = 7
  }

  /**
   * Enumerates update commands.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum Order {
    /**
     * Download.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD = 1,

    /**
     * Install.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    INSTALL = 2,

    /**
     * Download and install.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD_AND_INSTALL = 3,

    /**
     * Apply.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    APPLY = 4,

    /**
     * Install and apply.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    INSTALL_AND_APPLY = 6
  }

  /**
   * Enumerates update states.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum UpgradeStatus {
    /**
     * Waiting for download.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WAITING_DOWNLOAD = 20,

    /**
     * Downloading.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOADING = 21,

    /**
     * Download paused.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD_PAUSED = 22,

    /**
     * Download failed.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD_FAIL = 23,

    /**
     * Waiting for installation.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WAITING_INSTALL = 30,

    /**
     * Updating.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPDATING = 31,

    /**
     * Waiting for applying the update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WAITING_APPLY = 40,

    /**
     * Applying the update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    APPLYING = 41,

    /**
     * Update succeeded.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPGRADE_SUCCESS = 50,

    /**
     * Update failed.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPGRADE_FAIL = 51
  }

  /**
   * Represents an event type.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum EventClassify {
    /**
     * Task event.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    TASK = 0x01000000
  }

  /**
   * Enumerates event IDs.
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum EventId {
    /**
     * Task event.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_TASK_BASE = EventClassify.TASK,

    /**
     * Task received.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_TASK_RECEIVE = 0x01000001,

    /**
     * Task cancelled.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_TASK_CANCEL = 0x01000002,

    /**
     * Waiting for download.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_WAIT = 0x01000003,

    /**
     * Download started.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_START = 0x01000004,

    /**
     * Download progress update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_UPDATE = 0x01000005,

    /**
     * Download paused.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_PAUSE = 0x01000006,

    /**
     * Download resumed.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_RESUME = 0x01000007,

    /**
     * Download succeeded.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_SUCCESS = 0x01000008,

    /**
     * Download failed.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_FAIL = 0x01000009,

    /**
     * Waiting for update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_WAIT = 0x0100000a,

    /**
     * Update started.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_START = 0x0100000b,

    /**
     * Update in progress.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_UPDATE = 0x0100000c,

    /**
     * Waiting for applying the update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_APPLY_WAIT = 0x0100000d,

    /**
     * Applying the update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_APPLY_START = 0x0100000e,

    /**
     * Update succeeded.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_SUCCESS = 0x0100000f,

    /**
     * Update failed.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_FAIL = 0x01000010
  }
}

export default update;