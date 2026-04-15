/*
 * Copyright (C) 2022-2026 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * The **storageStatistics** module provides APIs for obtaining storage space information, including the space of
 * built-in and plug-in memory cards, space occupied by different types of data, and space of application data.
 *
 * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace storageStatistics {
  /**
   * Get the total size of volume.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - The uuid of the volume
   * @param { AsyncCallback<long> } callback - callback
   *     <br>Unit: Byte.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
   *     parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getTotalSizeOfVolume(volumeUuid: string, callback: AsyncCallback<long>): void;

  /**
   * Get the total size of volume.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - The uuid of the volume
   * @returns { Promise<long> } return Promise (Unit: Byte)
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
   *     parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getTotalSizeOfVolume(volumeUuid: string): Promise<long>;
  /**
   * Get the free size of volume.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - The uuid of the volume
   * @param { AsyncCallback<long> } callback - callback
   *     <br>Unit: Byte.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
  parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getFreeSizeOfVolume(volumeUuid: string, callback: AsyncCallback<long>): void;

  /**
   * Get the free size of volume.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - The uuid of the volume
   * @returns { Promise<long> } return Promise (Unit: Byte)
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
   *     parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getFreeSizeOfVolume(volumeUuid: string): Promise<long>;

  /**
   * Get the bundle statistics.
   *
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 9 dynamic
   * @since 23 static
   */
  export interface BundleStats {
    /**
     * The size of application installation data.
     * <br>Unit: Byte.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @since 9 dynamic
     * @since 23 static
     */
    appSize: long;

    /**
     * The size of application cache data.
     * <br>Unit: Byte.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @since 9 dynamic
     * @since 23 static
     */
    cacheSize: long;

    /**
     * The size of application local data, distributed data and database data.
     * <br>Unit: Byte.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @since 9 dynamic
     * @since 23 static
     */
    dataSize: long;
  }
  /**
   * Obtains the storage space of an application, in bytes. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } packageName - Package name of the application.
   * @param { AsyncCallback<BundleStats> } callback - Callback used to return the application storage space obtained.
   * @param { int } index - Index of an application clone. The default value is **0**, which indicates the application
   *     itself. When an application clone is created, an index is assigned from 1 sequentially to **appIndex** of
   *     [BundleResourceInfo]{@link ./bundleManager/BundleResourceInfo:BundleResourceInfo} The index can be obtained by
   *     [getBundleResourceInfo]{@link @ohos.bundle.bundleResourceManager:bundleResourceManager.getBundleResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int)} [since 12]
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundleStats(packageName: string, callback: AsyncCallback<BundleStats>, index?: int): void;

  /**
   * Obtains the storage space of an application, in bytes. This API uses a promise to return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } packageName - Package name of the application.
   * @param { int } index - Index of an application clone. The default value is **0**, which indicates the application
   *     itself. When an application clone is created, an index is assigned from 1 sequentially to **appIndex** of
   *     [BundleResourceInfo]{@link ./bundleManager/BundleResourceInfo:BundleResourceInfo} The index can be obtained by
   *     [getBundleResourceInfo]{@link @ohos.bundle.bundleResourceManager:bundleResourceManager.getBundleResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int)} [since 12]
   * @returns { Promise<BundleStats> } Promise used to return the application storage space (in bytes) obtained.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundleStats(packageName: string, index?: int): Promise<BundleStats>;

  /**
   * Obtains the storage space (in bytes) of this application. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { AsyncCallback<BundleStats> } callback - Callback used to return the application space obtained.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
   *     parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentBundleStats(callback: AsyncCallback<BundleStats>): void;

  /**
   * Obtains the storage space (in bytes) of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<BundleStats> } Promise used to return the application storage space obtained.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
   *     parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentBundleStats(): Promise<BundleStats>;

  /**
   * Get the system size.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { AsyncCallback<long> } callback - callback
   *     <br>Unit: Byte.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
   *     parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getSystemSize(callback: AsyncCallback<long>): void;

  /**
   * Get the system size.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<long> } return Promise (Unit: Byte)
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
   *     parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getSystemSize(): Promise<long>;

  /**
   * Get the user storage statistics.
   *
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface StorageStats {
    /**
     * The total size of device.
     * <br>Unit: Byte.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    total: long;

    /**
     * The size of audio file.
     * <br>Unit: Byte.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    audio: long;

    /**
     * The size of video file.
     * <br>Unit: Byte.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    video: long;

    /**
     * The size of image file.
     * <br>Unit: Byte.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    image: long;

    /**
     * The size of other file.
     * <br>Unit: Byte.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    file: long;

    /**
     * The size of application.
     * <br>Unit: Byte.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    app: long;
  }

  /**
   * Obtains the storage statistics of this user, in bytes. This API uses a promise to return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<StorageStats> } Promise used to return the storage statistics (in bytes) obtained.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getUserStorageStats(): Promise<StorageStats>;

  /**
   * Obtains the storage statistics of this user, in bytes. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { AsyncCallback<StorageStats> } callback - Callback used to return the storage statistics obtained.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getUserStorageStats(callback: AsyncCallback<StorageStats>): void;

  /**
   * Obtains the storage statistics of the specified user, in bytes. This API uses a promise to return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { long } userId - User ID.
   * @returns { Promise<StorageStats> } Promise used to return the storage statistics (in bytes) obtained.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600009 - User if out of range.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getUserStorageStats(userId: long): Promise<StorageStats>;

  /**
   * Obtains the storage statistics of the specified user, in bytes. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { long } userId - User ID.
   * @param { AsyncCallback<StorageStats> } callback - Callback used to return the storage statistics obtained.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600009 - User if out of range.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getUserStorageStats(userId: long, callback: AsyncCallback<StorageStats>): void;

  /**
   * Obtains the total size (in bytes) of the built-in storage. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.STORAGE_MANAGER [since 9 - 14]
   * @param { AsyncCallback<long> } callback - Callback used to return the built-in storage space obtained.
   * @throws { BusinessError } 201 - Permission verification failed. [since 9 - 14]
   * @throws { BusinessError } 202 - The caller is not a system application. [since 9 - 14]
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
   *     parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi [since 9 - 14]
   * @publicapi [since 15]
   * @since 9 dynamic
   * @since 23 static
   */
  function getTotalSize(callback: AsyncCallback<long>): void;
  /**
   * Get the total size.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
  parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9
   */
  /**
   * Get the total size.
   *
   * @returns { Promise<long> } return Promise (Unit: Byte)
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 15 dynamic
   * @since 23 static
   */
  function getTotalSize(): Promise<long>;

  /**
   * Obtains the total space of the built-in storage, in bytes. This API returns the result synchronously.
   *
   * @permission ohos.permission.STORAGE_MANAGER [since 10 - 14]
   * @returns { long } Built-in storage space obtained.
   * @throws { BusinessError } 201 - Permission verification failed. [since 10 - 14]
   * @throws { BusinessError } 202 - The caller is not a system application. [since 10 - 14]
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi [since 10 - 14]
   * @publicapi [since 15]
   * @since 10 dynamic
   * @since 23 static
   */
  function getTotalSizeSync(): long;

  /**
   * Obtains the available space (in bytes) of the built-in storage. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.STORAGE_MANAGER [since 9 - 14]
   * @param { AsyncCallback<long> } callback - Callback used to return the available space of the built-in storage
   *     obtained.
   * @throws { BusinessError } 201 - Permission verification failed. [since 9 - 14]
   * @throws { BusinessError } 202 - The caller is not a system application. [since 9 - 14]
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
   *     parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi [since 9 - 14]
   * @publicapi [since 15]
   * @since 9 dynamic
   * @since 23 static
   */
  function getFreeSize(callback: AsyncCallback<long>): void;

  /**
   * Get the free size.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
  parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9
   */
  /**
   * Get the free size.
   *
   * @returns { Promise<long> } return Promise (Unit: Byte)
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 15 dynamic
   * @since 23 static
   */
  function getFreeSize(): Promise<long>;

  /**
   * Obtains the available space of the built-in storage, in bytes. This API returns the result synchronously.
   *
   * @permission ohos.permission.STORAGE_MANAGER [since 10 - 14]
   * @returns { long } Available space of the built-in storage obtained.
   * @throws { BusinessError } 201 - Permission verification failed. [since 10 - 14]
   * @throws { BusinessError } 202 - The caller is not a system application. [since 10 - 14]
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi [since 10 - 14]
   * @publicapi [since 15]
   * @since 10 dynamic
   * @since 23 static
   */
  function getFreeSizeSync(): long;

  /**
   * Details the space usage of system applications or system services.
   *
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface ExtBundleStats {
    /**
     * System application bundle name or system service name.
     *
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    businessName: string;

    /**
     * The business size.
     * <br>Unit: Byte.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    size: long;

    /**
     * Whether the space occupied by system applications or system services needs to be displayed separately on the
     * **Settings** > **Storage** page. A value of **true** enables independent display; a value of **false** merges
     * the usage data into the application specified by **businessName**.
     *
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    flag: boolean;
  }

  /**
   * Reports the space usage of system applications or system services. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > If the value of **flag** in **stats** is **false**, the value of **businessName** must be the bundle name of an
   * > application.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { int } userId - User ID.
   * @param { ExtBundleStats } stats - Space usage of system applications or system services.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600011 - Failed to report the specified business space usage.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function setExtBundleStats(userId: int, stats: ExtBundleStats): Promise<void>;

  /**
   * Obtains the space usage of a specified user, system application bundle name, or system service name. This API uses
   * a promise to return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { int } userId - User ID.
   * @param { string } businessName - System application bundle name or system service name.
   * @returns { Promise<ExtBundleStats> } Promise used to return the space usage of a specified user, system
   *     application bundle name, or system service name.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600012 - Failed to query the specified business space usage.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getExtBundleStats(userId: int, businessName: string): Promise<ExtBundleStats>;

  /**
   * Obtains the space usage of all system applications or system services of a specified user. This API uses a promise
   * to return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { int } userId - User ID.
   * @returns { Promise<Array<ExtBundleStats>> } Promise used to return the space usage of all system applications or
   *     system services of a specified user.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600013 - Failed to query all business space usage.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getAllExtBundleStats(userId: int): Promise<Array<ExtBundleStats>>;
  /**
   * Details the space usage of the **\/data** directory on the user device.
   *
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface UserdataDirInfo {
    /**
     * Path name.
     *
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    path: string;
    /**
     * The size of user data dirs.
     * <br>Unit: Byte.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    totalSize: long;
    /**
     * The size of inode count.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    totalCnt: int;
  }

  /**
   * Queries the space usage of the **\/data** directory on the user device.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<Array<UserdataDirInfo>> } Promise used to return the space usage of the **\/data** directory
   *     on the user device.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600015 - Failed to traverse the query data partition directory.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function listUserdataDirInfo(): Promise<Array<UserdataDirInfo>>;

  /**
   * Get the total inodes.
   *
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600016 - Failed to query the inode information of the data partition.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getTotalInodes(): Promise<long>;
  /**
   * Get the free inodes.
   *
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600016 - Failed to query the inode information of the data partition.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getFreeInodes(): Promise<long>;
  /**
   * Get the current bundle inodes.
   *
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - File system not supported.
   * @throws { BusinessError } 13600017 - Failed to query the inode information of the application.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getCurrentBundleInodes(): Promise<long>;
  /**
   * Get the system data size.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<long> } return Promise (Unit: Byte)
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600018 - Failed to query the system data size.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getSystemDataSize(): Promise<long>;
}

export default storageStatistics;