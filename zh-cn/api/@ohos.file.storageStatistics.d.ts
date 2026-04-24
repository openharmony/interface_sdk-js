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
 * 该模块提供空间查询相关的常用功能：包括对内外卡的空间查询、对应用分类数据统计的查询、对应用数据的查询等。
 *
 * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace storageStatistics {
  /**
   * 异步获取外置存储设备中指定卷设备的总空间大小（单位为Byte），以callback方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - 卷设备uuid。
   * @param { AsyncCallback<long> } callback - 获取指定卷设备总空间之后的回调。
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
   * 异步获取外置存储设备中指定卷设备的总空间大小（单位为Byte），以Promise方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - 卷设备uuid。
   * @returns { Promise<long> } Promise对象，返回指定卷的可用空间大小（单位为Byte）。
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
   * 异步获取外置存储设备中指定卷设备的可用空间大小（单位为Byte），以callback方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - 卷设备uuid。
   * @param { AsyncCallback<long> } callback - 获取指定卷可用空间之后的回调。
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
   * 异步获取外置存储设备中指定卷设备的可用空间大小（单位为Byte），以Promise方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - 卷设备uuid。
   * @returns { Promise<long> } Promise对象，返回指定卷的可用空间大小（单位为Byte）。
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
   * 获取捆绑包统计信息。
   *
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 9 dynamic
   * @since 23 static
   */
  export interface BundleStats {
    /**
     * 应用安装文件大小（单位为Byte）。
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @since 9 dynamic
     * @since 23 static
     */
    appSize: long;

    /**
     * 应用缓存文件大小（单位为Byte）。
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @since 9 dynamic
     * @since 23 static
     */
    cacheSize: long;

    /**
     * 应用文件存储大小（除应用安装文件）（单位为Byte）。
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @since 9 dynamic
     * @since 23 static
     */
    dataSize: long;
  }
  /**
   * 异步获取应用存储数据的空间大小（单位为Byte），以callback方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } packageName - 应用包名。
   * @param { AsyncCallback<BundleStats> } callback - 获取指定卷上的应用存储数据的空间大小之后的回调。
   * @param { int } index - 分身应用的索引号，默认值为0（表示未分身的主应用）。分身应用索引号在分身创建时默认
   *     占用从1开始且当前未被占用的最小索引号，并赋值给该应用的
   *     [BundleResourceInfo]{@link ./bundleManager/BundleResourceInfo:BundleResourceInfo}的appIndex属性，后续可以通过调用
   *     [getBundleResourceInfo]{@link @ohos.bundle.bundleResourceManager:bundleResourceManager.getBundleResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int)}
   *     接口获得。 [since 12]
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
   * 异步获取应用存储数据的空间大小（单位为Byte），以Promise方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } packageName - 应用包名。
   * @param { int } index - 分身应用的索引号，默认值为0（表示未分身的主应用）。分身应用索引号在分身创建时默认占用
   *     从1开始且当前未被占用的最小索引号，并赋值给该应用的
   *     [BundleResourceInfo]{@link ./bundleManager/BundleResourceInfo:BundleResourceInfo}的appIndex属性，后续可以通过调用
   *     [getBundleResourceInfo] {@link @ohos.bundle.bundleResourceManager:bundleResourceManager.getBundleResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int)}
   *     接口获得。 [since 12]
   * @returns { Promise<BundleStats> } Promise对象，返回指定卷上的应用存储数据的空间大小（单位为Byte）。
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
   * 应用异步获取当前应用存储空间大小（单位为Byte），使用callback异步回调。
   *
   * @param { AsyncCallback<BundleStats> } callback - 获取指定卷上的应用存储空间大小之后的回调。
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
   * 应用异步获取当前应用存储空间大小（单位为Byte），以Promise方式返回。
   *
   * @returns { Promise<BundleStats> } Promise对象，返回指定卷上的应用存储空间大小（单位为Byte）。
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
   * 异步获取系统数据的空间大小（单位为Byte），以callback方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { AsyncCallback<long> } callback - 获取系统数据的空间大小之后的回调。
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
   * 异步获取系统数据的空间大小（单位为Byte），以Promise方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<long> } Promise对象，返回系统数据的空间大小（单位为Byte）。
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
   *
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface StorageStats {
    /**
     * 内置存储总空间大小，单位为Byte。
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    total: long;

    /**
     * 音频数据大小，单位为Byte。
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    audio: long;

    /**
     * 视频数据大小，单位为Byte。
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    video: long;

    /**
     * 图像数据大小，单位为Byte。
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    image: long;

    /**
     * 文件数据大小，单位为Byte。
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    file: long;

    /**
     * 应用数据大小，单位为Byte。
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
   * 异步获取当前用户各类别存储空间大小（单位为Byte），以Promise方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<StorageStats> } Promise对象，返回当前用户各类别存储空间大小（单位为Byte）。
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
   * 异步获取当前用户各类别存储空间大小（单位为Byte），以callback方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { AsyncCallback<StorageStats> } callback - 返回用户各类别存储空间大小之后的回调。
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
   * 异步获取指定用户各类别存储空间大小（单位为Byte），以Promise方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { long } userId - 用户id。
   * @returns { Promise<StorageStats> } Promise对象，返回指定用户各类别存储空间大小（单位为Byte）。
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
   * 异步获取指定用户各类别存储空间大小（单位为Byte），以callback方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { long } userId - 用户id。
   * @param { AsyncCallback<StorageStats> } callback - 返回指定用户各类别存储空间大小之后的回调。
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
   * 获取内置存储的总空间大小（单位为Byte），以callback方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER [since 9 - 14]
   * @param { AsyncCallback<long> } callback - 获取内置存储的总空间大小之后的回调。
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
   * 获取内置存储的总空间大小（单位为Byte），以Promise方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<long> } Promise对象，返回内置存储的总空间大小（单位为Byte）。
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
   * 获取内置存储的总空间大小（单位为Byte），以Promise方式返回。
   *
   * @returns { Promise<long> } Promise对象，返回内置存储的总空间大小（单位为Byte）。 (Unit: Byte)
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 15 dynamic
   * @since 23 static
   */
  function getTotalSize(): Promise<long>;

  /**
   * 同步获取内置存储的总空间大小（单位为Byte）。
   *
   * @permission ohos.permission.STORAGE_MANAGER [since 10 - 14]
   * @returns { long } 返回内置存储的总空间大小（单位为Byte）。
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
   * 获取内置存储的可用空间大小（单位为Byte），以callback方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER [since 9 - 14]
   * @param { AsyncCallback<long> } callback - 获取内置存储的可用空间大小之后的回调。
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
   * 获取内置存储的可用空间大小（单位为Byte），以Promise方式返回。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<long> } Promise对象，返回内置存储的可用空间大小（单位为Byte）。
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
   * 获取内置存储的可用空间大小（单位为Byte），以Promise方式返回。
   *
   * @returns { Promise<long> } Promise对象，返回内置存储的可用空间大小（单位为Byte）。 (Unit: Byte)
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 15 dynamic
   * @since 23 static
   */
  function getFreeSize(): Promise<long>;

  /**
   * 同步获取内置存储的可用空间大小（单位为Byte）。
   *
   * @permission ohos.permission.STORAGE_MANAGER [since 10 - 14]
   * @returns { long } 返回内置存储的可用空间大小（单位为Byte）。
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
   * 系统应用或系统服务的空间占用详情。
   *
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface ExtBundleStats {
    /**
     * 系统应用包名或系统服务名称。
     *
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    businessName: string;

    /**
     * 系统应用或系统服务的空间占用大小，单位Byte。
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    size: long;

    /**
     * 系统应用或系统服务的空间占用是否需要在“设置-存储”界面单独展示。true表示单独显示，false表示不单独显示。
     *     该值为false时，空间占用会被归并到businessName指定的应用中。
     *
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    flag: boolean;
  }

  /**
   * 系统应用或系统服务上报自身的空间占用信息。使用Promise异步回调。
   * 
   * > **说明**：
   * >
   * > 入参stats中的flag为false时，businessName必须为某个应用的包名。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { int } userId - 用户id。
   * @param { ExtBundleStats } stats - 系统应用或系统服务的空间占用详情。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 获取指定用户、指定系统应用包名或系统服务名称的空间占用详情。使用Promise异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { int } userId - 用户id。
   * @param { string } businessName - 系统应用包名或系统服务名称。
   * @returns { Promise<ExtBundleStats> } Promise对象，返回指定用户、指定系统应用包名或系统服务名称的空间占用详情。
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
   * 获取指定用户下所有系统应用或系统服务的空间占用详情。使用Promise异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { int } userId - 用户id。
   * @returns { Promise<Array<ExtBundleStats>> } Promise对象，返回指定用户下所有系统应用或系统服务的空间占用详情。
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
   * 用户设备中/data目录下的空间占用详情。
   *
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface UserdataDirInfo {
    /**
     * 路径名称。
     *
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    path: string;
    /**
     * 路径占用的总空间大小，单位Byte。
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    totalSize: long;
    /**
     * 路径下目录和文件总数量。
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
   * 查询用户设备中/data目录下的空间占用详情，使用Promise异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<Array<UserdataDirInfo>> } Promise对象，返回用户设备中/data目录下的空间占用详情。
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
   * 获取文件系统的inode资源总量，仅支持查询系统数据分区。使用Promise异步回调。
   *
   * @returns { Promise<long> } Promise对象，返回文件系统inode资源总量。
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600016 - Failed to query the inode information of the data partition.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getTotalInodes(): Promise<long>;
  /**
   * 获取文件系统的inode资源剩余量，仅支持查询系统数据分区。使用Promise异步回调。
   *
   * @returns { Promise<long> } Promise对象，返回文件系统inode资源剩余量。
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600016 - Failed to query the inode information of the data partition.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getFreeInodes(): Promise<long>;
  /**
   * 获取当前应用的inode占用量，使用Promise异步回调。
   *
   * @returns { Promise<long> } Promise对象，返回当前应用的inode占用量。
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - File system not supported.
   * @throws { BusinessError } 13600017 - Failed to query the inode information of the application.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getCurrentBundleInodes(): Promise<long>;
  /**
   * 获取系统数据的总空间大小，使用Promise异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<long> } Promise对象，返回系统数据的总空间大小，单位：Byte。
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