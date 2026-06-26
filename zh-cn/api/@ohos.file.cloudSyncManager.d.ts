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
 * 该模块向云盘管理应用提供端云同步管理能力：包括全量下载的状态和停止原因，以及应用本地和云端文件数量信息。
 *
 * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace cloudSyncManager {
  /**
   * 异步方法修改应用的端云文件同步开关。使用Promise异步回调。
   *
   * @param { string } accountId - 账号Id。
   * @param { string } bundleName - 应用包名。
   * @param { boolean } status - 修改的应用云同步开关状态。true为打开；false为关闭。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 异步方法修改应用的端云文件同步开关。使用callback异步回调。
   *
   * @param { string } accountId - 账号Id。
   * @param { string } bundleName - 应用包名
   * @param { boolean } status - 修改的应用云同步开关状态。true为打开；false为关闭。
   * @param { AsyncCallback<void> } [callback] - 回调函数。异步修改应用的端云文件同步开关之后。
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
   * 通知端云服务指定账号下的特定应用云数据已发生变更。使用Promise异步回调。
   *
   * @param { string } accountId - 账号Id。
   * @param { string } bundleName - 应用包名。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 通知端云服务指定账号下的特定应用云数据已发生变更。使用callback异步回调。
   *
   * @param { string } accountId - 账号Id。
   * @param { string } bundleName - 应用包名。
   * @param { AsyncCallback<void> } [callback] - 回调函数。异步通知端云服务应用的云数据变更之后的。
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
   * 异步方法使能端云协同能力。使用Promise异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - 账号Id。
   * @param { Record<string, boolean> } switches - 应用的端云协同特性使能开关，string类型为应用包名，boolean类型为开关状态。true为打开；false为关闭。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 异步方法使能端云协同能力。使用callback异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - 账号Id。
   * @param { Record<string, boolean> } switches - 应用的端云协同特性使能开关，string类型为应用包名，boolean类型为开关状态。true为打开；false为关闭。
   * @param { AsyncCallback<void> } [callback] - 回调函数。异步使能端云协同能力之后。
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
   * 异步方法去使能端云协同能力。使用Promise异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - 账号Id。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 异步方法去使能端云协同能力。使用callback异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - 账号Id。
   * @param { AsyncCallback<void> } callback - 回调函数。异步去使能端云协同能力之后。
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
   * 清理本地云相关数据时的Action，为枚举类型。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  enum Action {
    /**
     * 仅清除云端标识，保留本地缓存文件。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    RETAIN_DATA = 0,

    /**
     * 清除云端标识信息，若存在本地缓存文件，一并删除。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CLEAR_DATA = 1
  }

  /**
   * 异步方法清理本地云相关数据。使用Promise异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - 账号Id。
   * @param { Record<string, Action> } appActions - 清理动作类型，string类型为待清理应用包名， [Action]{@link cloudSyncManager.Action}为清理动
   *     作类型。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 异步方法清理本地云相关数据。使用callback异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - 账号Id。
   * @param { Record<string, Action> } appActions - 清理动作类型，string类型为待清理应用包名， [Action]{@link cloudSyncManager.Action}为清理动
   *     作类型。
   * @param { AsyncCallback<void> } callback - 回调函数。异步方法清理本地云相关数据。
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
   * 通知端云服务应用指定用户的云数据变更信息。使用Promise异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { int } userId - 用户Id。
   * @param { ExtraData } extraData - 云端数据变更信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 通知端云服务应用指定用户的云数据变更信息。使用callback异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { int } userId - 用户Id。
   * @param { ExtraData } extraData - 云端数据变更信息。
   * @param { AsyncCallback<void> } callback - 回调函数。异步通知端云服务应用的云数据变更之后。
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
   * 云端数据变更信息。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface ExtraData {
    /**
     * 变更事件id。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    eventId: string;
    /**
     * 云端数据变更信息。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    extraData: string;
  }

  /**
   * 全量下载停止原因的枚举，默认值为NO_STOP。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum DownloadStopReason {
    /**
     * 下载中未停止。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    NO_STOP = 0,
    /**
     * 下载过程中，移动数据网络和WIFI均不可用。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    NETWORK_UNAVAILABLE = 1,
    /**
     * 下载过程中，当前设备空间不足。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    LOCAL_STORAGE_FULL = 2,
    /**
     * 下载过程中，设备温度过高。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    TEMPERATURE_LIMIT = 3,
    /**
     * 下载过程中，客户端主动停止下载。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    USER_STOPPED = 4,
    /**
     * 下载过程中，云文件所属应用被卸载。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    APP_UNLOAD = 5,
    /**
     * 下载过程中，因其他原因停止下载，如：云服务器未响应等。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    OTHER_REASON = 6
  }

  /**
   * 全量下载任务状态的枚举。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum DownloadState {
    /**
     * 下载中未停止。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    RUNNING = 0,
    /**
     * 下载完成。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    COMPLETED = 1,
    /**
     * 下载停止。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    STOPPED = 2,
    /**
     * 下载任务不存在。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MISSING = 3
  }

  /**
   * 搬迁任务状态的枚举。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum TransferState {
    /**
     * 搬迁中。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RUNNING = 0,
    /**
     * 搬迁完成。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMPLETED = 1,
    /**
     * 搬迁停止。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STOPPED = 2
  }

  /**
   * 搬迁停止原因的枚举。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum TransferStopReason {
    /**
     * 搬迁过程中，云服务开关关闭。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SWITCH_OFF = 0,
    /**
     * 搬迁过程中，账户登出。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ACCOUNT_LOGOUT = 1,
    /**
     * 搬迁过程中，其他原因导致停止。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    OTHER_REASON = 2
  }

  /**
   * 应用本地和云端文件个数以及大小信息。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface CloudFileInfo {
    /**
     * 本地未下载的云端文件总个数，取值范围[0, INT32_MAX]，单位：个。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    cloudFileCount: int;
    /**
     * 本地未下载的云端文件总大小，取值范围[0, INT64_MAX]，单位：Byte。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    cloudFileTotalSize: long;
    /**
     * 本地未上传云端的文件总个数，取值范围[0, INT32_MAX]，单位：个。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    localFileCount: int;
    /**
     * 本地未上传云端的文件总大小，取值范围[0, INT64_MAX]，单位：Byte。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    localFileTotalSize: long;
    /**
     * 本地已上传云端的文件总个数，取值范围[0, INT32_MAX]，单位：个。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    bothFileCount: int;
    /**
     * 本地已上传云端的文件总大小，取值范围[0, INT64_MAX]，单位：Byte。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    bothFileTotalSize: long;
  }

  /**
   * 搬迁任务的进度信息。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface TransferProgress {
    /**
     * 搬迁任务的状态。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: TransferState;
    /**
     * 已搬迁的文件个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    successfulCount: int;
    /**
     * 搬迁失败的文件个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    failedCount: int;
    /**
     * 待搬迁文件总个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    totalCount: int;
    /**
     * 已搬迁的数据大小，取值范围[0, INT64_MAX)，单位：Byte。进度异常时返回INT64_MAX。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    transferredSize: long;
    /**
     * 需要搬迁的文件总大小，取值范围[0, INT64_MAX)，单位：Byte。进度异常时返回INT64_MAX。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    totalSize: long;
    /**
     * 搬迁停止的原因。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopReason: TransferStopReason;
  }

  /**
   * 全量下载任务的进度信息。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @since 20 dynamic
   * @since 23 static
   */
  class DownloadProgress {
    /**
     * 下载任务的状态。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    state: DownloadState;
    /**
     * 已下载的文件个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    successfulCount: int;
    /**
     * 下载失败的文件个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    failedCount: int;
    /**
     * 待下载文件总个数，取值范围[0, INT32_MAX]，单位：个。进度异常时返回-1。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    totalCount: int;
    /**
     * 已下载数据大小，取值范围[0, INT64_MAX)，单位：Byte。进度异常时返回INT64_MAX。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    downloadedSize: long;
    /**
     * 需要下载文件的总大小，取值范围[0, INT64_MAX)，单位：Byte。进度异常时返回INT64_MAX。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    totalSize: long;
    /**
     * 下载停止的原因。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @since 20 dynamic
     * @since 23 static
     */
    stopReason: DownloadStopReason;
  }

  /**
   * 全量下载：为云盘管理应用提供集中下载云端数据的能力。
   * 
   * 云盘全量下载对象，用于支撑云盘管理应用完成云盘文件的全量下载流程。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  class DowngradeDownload {
    /**
     * 全量下载对象的构造函数，用于获取指定包名的DowngradeDownload类的实例。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { string } bundleName - 应用包名。
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
     * 获取需要全量下载的应用仅位于本地、仅位于云端或者本地和云端均有的文件大小和个数信息。使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<CloudFileInfo> } Promise对象，返回携带本地与云端文件信息的对象。
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
     * 启动指定应用的云文件的全量下载，使用Promise异步回调。使用callback异步回调。
     * 
     * 同一应用存在正在执行的全量下载任务的情况下，重复触发会返回错误信息（22400006）。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { Callback<DownloadProgress> } callback - 回调函数。全量下载进度，参数为DownloadProgress，返回值为void。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 停止由[startDownload]{@link cloudSyncManager.DowngradeDownload.startDownload}触发的全量下载任务，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 将云盘目录下已完成本地下载的文件搬迁至指定目录，过程中通过回调上报搬迁进度。使用callback异步回调。
     * 
     * 同一应用存在正在执行的搬迁任务的情况下，重复触发会返回错误信息（22400006）。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { string } targetUri - 用于存放搬迁后的文件路径URI，必须以“/file://docs/storage/Users/currentUser/”为前缀。
     * @param { Callback<TransferProgress> } callback - 回调函数，返回搬迁进度。
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
   * 查询接入云盘的应用的全量下载任务状态。使用Promise异步回调。
   * 
   * 由于返回的DownloadProgress对象中不包含包名信息，因此在批量查询多个应用时，调用方需自行记录应用包名。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { Array<string> } bundleNames - 需要查询的应用包名数组，每个元素为应用的包名字符串，包名数组大小上限为20个。
   * @returns { Promise<Array<DownloadProgress>> } - Promise对象，返回查询的全量下载任务的状态信息数组。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13900010 - Try again.
   * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
   *     <br>1.Mandatory parameter are left unspecified. 2.The length of the input parameter exceeds the upper limit.
   *     <br>3.The input parameter contains an invalid bundleName.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getDowngradeDownloadTaskState(bundleNames: Array<string>): Promise<Array<DownloadProgress>>;

  /**
   * 检测结果对象，包含应用包名及其在云盘存储空间内是否存在未上云文件的状态信息。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface LocalFilePresentStatus {
    /**
     * 应用包名。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 23 dynamic&static
     */
    bundleName: string;
    /**
     * 该应用在云盘存储空间内是否存在尚未同步至云端的本地文件。true 表示存在， false 表示不存在。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 23 dynamic&static
     */
    isLocalFilePresent: boolean;
  }

  /**
   * 对接入云盘的应用，检测其在云盘存储空间内是否存在未上云文件，支持同时查询多个应用。使用Promise异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { Array<string> } bundleNames - 需要检测的应用包名数组。每个元素为应用的包名字符串。
   * @returns { Promise<Array<LocalFilePresentStatus>> } Promise对象，返回对象数组，数组内每个对象包含指定检测的应用包名及其本地文件存在状态。
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