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
 * 该模块向应用提供端云同步能力，包括启动/停止端云同步以及启动/停止原图下载功能。
 *
 * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace cloudSync {
  /**
   * 端云同步状态，为枚举类型。
   * 
   * > **说明：**
   * >
   * > 以下同步状态发生变更时，如果应用注册了同步过程事件监听，则通过回调通知应用。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum SyncState {
    /**
     * 上行同步中。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOADING = 0,
    /**
     * 上行同步失败。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOAD_FAILED = 1,
    /**
     * 下行同步中。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    DOWNLOADING = 2,
    /**
     * 下行同步失败。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    DOWNLOAD_FAILED = 3,
    /**
     * 同步成功。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    COMPLETED = 4,
    /**
     * 同步已停止。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    STOPPED = 5
  }

  /**
   * 端云同步失败类型，为枚举类型。
   * 
   * - 当前阶段，同步过程中，当开启无限量使用移动数据网络，移动数据网络和WIFI均不可用时，才会返回NETWORK_UNAVAILABLE；开启无限量使用移动数据网络，若有一种类型网络可用，则能正常同步。
   * - 同步过程中，非充电场景下，电量低于10%，完成当前批上行同步后停止同步，返回低电量；
   * - 触发同步时，非充电场景下，若电量低于10%，则不允许同步
   * - 上行时，若云端空间不足，则文件上行失败，云端无该文件记录。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum ErrorType {
    /**
     * 没有错误。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NO_ERROR = 0,
    /**
     * 所有网络不可用。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NETWORK_UNAVAILABLE = 1,
    /**
     * WIFI不可用。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI_UNAVAILABLE = 2,
    /**
     * 低电量（低于10%）。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BATTERY_LEVEL_LOW = 3,
    /**
     * 告警电量（低于15%）。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BATTERY_LEVEL_WARNING = 4,
    /**
     * 云端空间不足。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    CLOUD_STORAGE_FULL = 5,
    /**
     * 本地空间不足。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    LOCAL_STORAGE_FULL = 6,
    /**
     * 设备温度过高。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_TEMPERATURE_TOO_HIGH = 7,
    /**
     * 远端服务不可用。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    REMOTE_SERVER_ABNORMAL = 8,
    /**
     * 云服务超时。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RESPONSE_TIME_OUT = 9,
    /**
     * 未知错误。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_ERROR = 10
  }

  /**
   * 端云同步过程。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface SyncProgress {
    /**
     * 枚举值，端云同步状态。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    state: SyncState;
    /**
     * 枚举值，同步失败错误类型。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    error: ErrorType;
  }

  /**
   * 云图同步对象，用来支撑图库应用媒体资源端云同步流程。在使用前，需要先创建GallerySync实例。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class GallerySync {
    /**
     * 端云同步流程的构造函数，用于获取GallerySync类的实例。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * 云图同步对象添加同步过程事件监听。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - 订阅的事件类型，取值为'progress'（同步过程事件）。
     * @param { function } callback - 回调函数。同步过程事件，入参为[SyncProgress]{@link @ohos.file.cloudSync:cloudSync.SyncProgress}，返
     *     回值为void。
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
     * 云图同步对象移除'progress'类型中指定的callback回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - 取消订阅的事件类型，取值为'progress'（同步过程事件）。
     * @param { function } callback - 回调函数。同步过程事件，入参为[SyncProgress]{@link @ohos.file.cloudSync:cloudSync.SyncProgress}，返
     *     回值为void。
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
     * 云图同步对象移除'progress'类型的所有回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - 取消订阅的事件类型，取值为'progress'（同步过程事件）。
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
     * 启动端云同步。使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 异步方法启动端云同步。使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { AsyncCallback<void> } [callback] - 回调函数。异步启动端云同步。
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
     * 异步方法停止端云同步。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 调用stop接口，同步流程会停止。再次调用[start]{@link cloudSync.GallerySync#start()}接口会继续同步。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 异步方法停止端云同步。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 调用stop接口，同步流程会停止。再次调用[start]{@link cloudSync.GallerySync#start()}接口会继续同步。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { AsyncCallback<void> } [callback] - 回调函数。异步停止端云同步。
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
   * 云文件下载状态，为枚举类型。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum State {
    /**
     * 云文件正在下载中。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    RUNNING = 0,
    /**
     * 云文件下载完成。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    COMPLETED = 1,
    /**
     * 云文件下载失败。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    FAILED = 2,
    /**
     * 云文件下载已停止。
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
   * 文件上传状态的枚举。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum UploadState {
    /**
     * 等待上传。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WAITING = 0,
    /**
     * 正在上传中。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RUNNING = 1,
    /**
     * 上传完成。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMPLETED = 2,
    /**
     * 上传失败。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FAILED = 3,
    /**
     * 上传已停止。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STOPPED = 4,
    /**
     * 上传已暂停。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAUSED = 5
  }

  /**
   * 端云下载错误类型，为枚举类型。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum DownloadErrorType {
    /**
     * 没有错误。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    NO_ERROR = 0,
    /**
     * 未知错误。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    UNKNOWN_ERROR = 1,
    /**
     * 网络不可用。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    NETWORK_UNAVAILABLE = 2,
    /**
     * 本地空间不足。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    LOCAL_STORAGE_FULL = 3,
    /**
     * 云端空间未找到对应文件。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CONTENT_NOT_FOUND = 4,
    /**
     * 用户请求过于频繁。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    FREQUENT_USER_REQUESTS = 5
  }

  /**
   * 云文件下载过程。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface DownloadProgress {
    /**
     * 枚举值，云文件下载状态。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    state: State;
    /**
     * 已下载数据大小，取值范围[0，9223372036854775807]（单位：Byte）。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    processed: long;
    /**
     * 当前云文件大小，取值范围[0，9223372036854775807]（单位：Byte）。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    size: long;
    /**
     * 当前云文件URI。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * 下载的错误类型。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    error: DownloadErrorType;
  }

  /**
   * 文件上传进度信息。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface UploadProgress {
    /**
     * 文件上传状态。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: UploadState;
    /**
     * 已上传数据大小，取值范围[0, 9223372036854775807]，单位：Byte。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    processed: long;
    /**
     * 当前文件总大小，取值范围[0, 9223372036854775807]，单位：Byte。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    size: long;
    /**
     * 当前文件的URI。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uri: string;
    /**
     * 上传的错误类型。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    error: ErrorType;
  }

  /**
   * 云盘缓存文件类型的枚举。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum DownloadFileType {
    /**
     * content类型文件。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CONTENT = 0,
    /**
     * thumbnail类型文件。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL = 1,
    /**
     * lcd类型文件。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    LCD = 2
  }

  /**
   * 云文件批量缓存失败列表及失败原因。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface FailedFileInfo {
    /**
     * 下载失败文件URI。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * 文件下载失败错误类型。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    error: DownloadErrorType;
  }

  /**
   * 云文件批量缓存的进度信息。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  class MultiDownloadProgress {
    /**
     * 批量缓存任务的执行状态。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    state: State;
    /**
     * 批量缓存任务的ID，取值范围为0到INT64_MAX。如果进度异常，返回值为-1。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    taskId: long;
    /**
     * 缓存成功的文件数量，取值范围为0至400，单位：个。如果进度异常，返回值为-1。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    successfulCount: int;
    /**
     * 缓存失败的文件数，取值范围为0至400，单位：个。如果进度异常，返回值为-1。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    failedCount: int;
    /**
     * 文件总数，取值范围为0至400，单位：个。如果进度异常，返回值为-1。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    totalCount: int;
    /**
     * 已缓存的文件大小，取值范围为 [0, INT64_MAX)，单位：Byte。如果进度异常，返回值为 INT64_MAX。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    downloadedSize: long;
    /**
     * 待缓存的文件总大小，取值范围为 [0, INT64_MAX)，单位为 Byte。如果进度异常，返回值为 INT64_MAX。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    totalSize: long;
    /**
     * 返回批量缓存任务执行失败时的错误类型。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    errType: DownloadErrorType;
    /**
     * 获取批量缓存失败的文件列表。
     *
     * @returns { Array<FailedFileInfo> } 返回缓存失败的文件URI列表及其对应的错误类型。
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    getFailedFiles(): Array<FailedFileInfo>;
    /**
     * 获取批量缓存成功的文件列表。
     *
     * @returns { Array<string> } 数组类型，返回缓存成功的文件URI列表。
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
   * 云文件下载对象，用来支撑图库应用原图文件下载流程。在使用前，需要先创建Download实例。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class Download {
    /**
     * 云文件下载流程的构造函数，用于获取Download类的实例。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * 添加云文件下载过程事件监听。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - 订阅的事件类型，取值为'progress'（下载过程事件）。
     * @param { function } callback - 回调函数。云文件下载过程事件，入参为
     *     [DownloadProgress]{@link @ohos.file.cloudSync:cloudSync.DownloadProgress}，返回值为void。
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
     * 云图下载对象移除'progress'类型中指定的callback回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - 取消订阅的事件类型，取值为'progress'（同步过程事件）。
     * @param { function } callback - 回调函数。云文件下载过程事件，入参为
     *     [DownloadProgress]{@link @ohos.file.cloudSync:cloudSync.DownloadProgress}，返回值为void。
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
     * 云图下载对象移除'progress'类型的所有回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - 取消订阅的事件类型，取值为'progress'（下载过程事件）。
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
     * 异步方法启动云文件下载。使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - 待下载文件uri。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 异步方法启动云文件下载。使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - 待下载文件uri。
     * @param { AsyncCallback<void> } [callback] - 回调函数。异步启动云文件下载。
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
     * 异步方法停止云文件下载。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 调用stop接口，当前文件下载流程会终止，缓存文件会被删除，再次调用start接口会重新开始下载。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - 待下载文件uri。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 异步方法停止云文件下载。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 调用stop接口，当前文件下载流程会终止，缓存文件会被删除，再次调用start接口会重新开始下载。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - 待下载文件uri。
     * @param { AsyncCallback<void> } [callback] - 回调函数。异步停止云文件下载。
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
   * 云盘同步对象，用于支撑文件管理器应用完成云盘文件的端云同步流程。在使用前，需要先创建FileSync实例。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  class FileSync {
    /**
     * 端云同步流程的构造函数，用于获取FileSync类的实例。
     *
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * 端云同步流程的构造函数，用于获取FileSync类的实例。
     *
     * @param { string } bundleName - 应用包名。
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
     * 云盘同步对象添加同步过程事件监听。
     *
     * @param { 'progress' } event - 订阅的事件类型，取值为'progress'（同步过程事件）。
     * @param { Callback<SyncProgress> } callback - 回调函数。同步过程事件。
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
     * 云盘同步对象移除'progress'类型的指定callback回调。
     *
     * @param { 'progress' } event - 取消订阅的事件类型，取值为'progress'（同步过程事件）。
     * @param { Callback<SyncProgress> } [callback] - 回调函数。同步过程事件， 默认值为null。
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
     * 异步方法启动云盘端云同步。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 异步方法启动云盘端云同步。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。异步启动端云同步。
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
     * 异步方法停止云盘端云同步。使用Promise异步回调。
     * 
     * 调用stop接口，同步流程会停止。再次调用[start]{@link cloudSync.FileSync#start()}接口会继续同步。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;
    /**
     * 异步方法停止云盘端云同步。使用callback异步回调。
     * 
     * 调用stop接口，同步流程会停止。再次调用[start]{@link cloudSync.FileSync#start()}接口会继续同步。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。异步停止端云同步。
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
     * 异步方法获取上次同步时间。使用Promise异步回调。
     *
     * @returns { Promise<long> } Promise对象，返回上次同步时间。
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    getLastSyncTime(): Promise<long>;
    /**
     * 获取上次同步时间。使用callback异步回调。
     *
     * @param { AsyncCallback<long> } callback - 回调函数。异步获取上次同步时间。
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
     * 注册上传进度回调函数，用于监听文件上传进度变化。使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Callback<UploadProgress> } callback - 回调函数，监听文件上传进度变化。当文件上传进度发生变化时触发回调，返回上传进度信息。
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
     * 取消注册上传进度回调函数。
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
     * 获取文件上传列表和进度信息。使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Array<string> } uris - 待查询上传进度的文件URI数组，数组长度取值范围[1,100]。
     * @returns { Promise<Array<UploadProgress>> } - Promise对象，返回上传进度信息数组。
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
     * 暂停云文件上传。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - 待暂停的文件URI。
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
     * 恢复云文件上传。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - 待恢复上传的文件URI。
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
   * # construct<sup>11+</sup>
   * 
   * constructor()
   * 
   * 云盘文件缓存流程的构造函数，用于获取CloudFileCache类的实例。多个实例之间不互相共享数据。
   * 
   * **系统能力**：SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * 
   * **错误码：**
   * 
   * 以下错误码的详细介绍请参见[通用错误码](docroot://reference/errorcode-universal.md)。
   * 
   * | 错误码ID                     | 错误信息        |
   * | ---------------------------- | ---------- |
   * | 401 | The input parameter is invalid. Possible causes:Incorrect parameter types. |
   * 
   * **示例：**
   * 
   * ```ts
   * let fileCache = new cloudSync.CloudFileCache();
   * ```
   */
/**
   * # construct<sup>11+</sup>
   * 
   * constructor()
   * 
   * 云盘文件缓存流程的构造函数，用于获取CloudFileCache类的实例。多个实例之间不互相共享数据。
   * 
   * **系统能力**：SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * 
   * **错误码：**
   * 
   * 以下错误码的详细介绍请参见[通用错误码](docroot://reference/errorcode-universal.md)。
   * 
   * | 错误码ID                     | 错误信息        |
   * | ---------------------------- | ---------- |
   * | 401 | The input parameter is invalid. Possible causes:Incorrect parameter types. |
   * 
   * **示例：**
   * 
   * ```ts
   * let fileCache = new cloudSync.CloudFileCache();
   * ```
   */
/**
   * 云盘文件缓存对象，用来支撑文件管理应用原文件下载流程。
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
     * 添加云盘文件缓存过程事件监听。
     *
     * @param { 'progress' } event - 订阅的事件类型，取值为'progress'（下载过程事件）。
     * @param { Callback<DownloadProgress> } callback - 回调函数。云文件下载过程事件。
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
     * 添加云文件批量缓存事件的监听。
     *
     * @param { 'batchDownload' } event - 订阅的事件类型，取值为'batchDownload'，表示批量缓存过程事件。
     * @param { Callback<MultiDownloadProgress> } callback - 回调函数。云文件批量缓存过程事件。
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
     * 云盘文件缓存对象移除'progress'类型的指定callback回调。
     *
     * @param { 'progress' } event - 取消订阅的事件类型，取值为'progress'（同步过程事件）。
     * @param { Callback<DownloadProgress> } [callback] - 回调函数。云文件下载过程事件。若填写，将视为取消指定的回调函数；否则为取消当前订阅的所有回调函数。
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
     * 云盘文件缓存对象移除由
     * [on]{@link cloudSync.CloudFileCache#on(event: 'batchDownload', callback: Callback<MultiDownloadProgress>)}接口添加的云文
     * 件批量缓存过程事件的监听。
     *
     * @param { 'batchDownload' } event - 取消订阅的事件类型，取值为'batchDownload'，表示批量缓存过程事件。
     * @param { Callback<MultiDownloadProgress> } [callback] - 回调函数。云文件批量缓存过程事件。如果填写此参数，将取消指定的回调函数；否则，将取消当前订阅的相同事件类型的所有回
     *     调函数。
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
     * @param { Callback<MultiDownloadProgress> } [callback] - callback function with a `MultiDownloadProgress` argument.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    offBatchDownload(callback?: Callback<MultiDownloadProgress>): void;
    /**
     * 异步方法启动云盘文件缓存。使用Promise异步回调。
     *
     * @param { string } uri - 待下载文件uri。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 异步方法启动云盘文件缓存。使用callback异步回调。
     *
     * @param { string } uri - 待下载文件uri。
     * @param { AsyncCallback<void> } callback - 回调函数。异步启动云文件下载。
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
     * 启动云文件批量缓存。使用Promise异步回调。
     * 
     * 不同的批量缓存任务可以通过接口返回的任务ID区分。
     *
     * @param { Array<string> } uris - URI列表，一次调用最多支持传入400个URI，超过报错22400004。
     * @param { DownloadFileType } [fileType] - 文件类型，默认值为CONTENT类型。
     * @returns { Promise<long> } Promise对象，返回启动的云文件批量缓存任务的ID。
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
     * @param { string } uri - 待下载文件uri。
     * @returns { Promise<void> } - Promise对象，无返回结果。
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
     * @param { string } uri - 待下载文件uri。
     * @param { boolean } [needClean] - 是否删除已下载的文件。默认值为false表示不删除；true表示删除。<br>从API version12开始支持该参数。 [since 12]
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 异步方法停止云盘文件缓存。使用callback异步回调。
     * 
     * 调用stop接口，当前文件下载流程会终止，不删除缓存文件，再次调用start接口重新启动下载。
     *
     * @param { string } uri - 待下载文件uri。
     * @param { AsyncCallback<void> } callback - 回调函数。异步停止云文件下载。
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
     * 停止由[startBatch]{@link cloudSync.CloudFileCache.startBatch}启动的云文件批量缓存任务。使用Promise异步回调。
     * 
     * 调用stopBatch接口会终止当前文件批量缓存流程，未下载完成的缓存文件是否删除由needClean参数决定。
     *
     * @param { long } downloadId - 需要停止缓存的任务ID。
     * @param { boolean } [needClean] - 是否删除未完成缓存的文件。默认值为false表示不删除；true表示删除。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 同步方法删除文件缓存。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - 待删除缓存文件的uri。
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
     * 同步方法删除文件缓存。
     *
     * @param { string } uri - 待删除缓存文件的URI。
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
     * 获取文件下载进度列表。使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Array<string> } uris - 待查询下载进度的文件URI数组，数组长度取值范围[1,100]。
     * @returns { Promise<Array<DownloadProgress>> } - Promise对象，返回文件下载进度列表的结果。
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
     *
     *
     *
     *
     * @returns { Promise<long> } - Return the total size of cached files.
     * @throws { BusinessError } 13900010 - Try again.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getCachedTotalSize(): Promise<long>;
    /**
     *
     *
     *
     *
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 13900010 - Try again.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    cleanFileCache(): Promise<void>;
  }

  /**
   * 端云文件同步状态，为枚举类型。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum FileState {
    /**
     * 首次下行后的初始状态。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    INITIAL_AFTER_DOWNLOAD = 0,
    /**
     * 上行同步中。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    UPLOADING = 1,
    /**
     * 上行已停止。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    STOPPED = 2,
    /**
     * 正在等待上行。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    TO_BE_UPLOADED = 3,
    /**
     * 文件已成功上行。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    UPLOAD_SUCCESS = 4,
    /**
     * 文件上行失败。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    UPLOAD_FAILURE = 5
  }

  /**
   * 端云文件同步状态，为枚举类型。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum FileSyncState {
    /**
     * 上行同步中。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UPLOADING = 0,
    /**
     * 下行同步中。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DOWNLOADING = 1,
    /**
     * 同步成功。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    COMPLETED = 2,
    /**
     * 同步已停止。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    STOPPED = 3,
    /**
     * 正在等待上行。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TO_BE_UPLOADED = 4,
    /**
     * 文件已成功上行。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOAD_SUCCESS = 5,
    /**
     * 文件上行失败。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOAD_FAILURE = 6
  }

  /**
   * 异步方法获取文件同步状态。使用Promise异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { Array<string> } uri - 待获取同步状态的uri。
   * @returns { Promise<Array<FileSyncState>> } Promise对象，返回文件同步状态的结果。
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
   * 异步方法获取文件同步状态。使用callback异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { Array<string> } uri - 待获取同步状态的uri。
   * @param { AsyncCallback<Array<FileSyncState>> } callback - 回调函数。异步获取文件状态。
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
   * 获取文件同步状态。
   *
   * @param { string } uri - 待下载文件uri。
   * @returns { FileSyncState } 返回给定文件的同步状态。
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
   * 同步方法获取云盘文件同步上行状态。
   *
   * @param { string } uri - 待获取云盘文件同步上行状态的文件URI。
   * @returns { FileState } 返回给定云盘文件的同步上行状态。
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
   * 订阅监听指定文件的变化通知。callback返回更改的数据。
   *
   * @param { string } uri - 待下载文件uri。
   * @param { boolean } recursion - true为监听该URI以及子文件和子目录，false为仅监听该URI文件。
   * @param { Callback<ChangeData> } callback - 回调函数，返回更改的数据。
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
   * 取消订阅监听指定文件的变化通知。
   *
   * @param { string } uri - 待下载文件uri。
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
   * 数据变更通知类型。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum NotifyType {
    /**
     * 文件已新建。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_ADDED = 0,
    /**
     * 文件已修改。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_MODIFIED = 1,
    /**
     * 文件已被删除。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_DELETED = 2,
    /**
     * 文件被重命名或者移动。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_RENAMED = 3
  }

  /**
   * 定义变更数据。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface ChangeData {
    /**
     * 更改的通知类型。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    type: NotifyType;
    /**
     * 指示更改的URI是否为目录。true：是目录。false：非目录。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    isDirectory: Array<boolean>;
    /**
     * 需要更改的URI列表。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    uris: Array<string>;
  }
  /**
   * 优化图库已同步云空间的本地资源，按照本地剩余空间执行自动老化策略。使用Promise异步回调。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 优化图库已同步云空间的本地资源，执行立即优化空间策略，对老化天数前未访问的本地图片/视频进行优化。使用Promise异步回调。callback返回优化进度。
   * 
   * startOptimizeSpace的使用和stopOptimizeSpace方法调用一一对应，重复开启将返回其他任务正在执行的错误信息（22400006）。
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { OptimizeSpaceParam } optimizePara - 优化参数。
   * @param { Callback<OptimizeSpaceProgress> } callback - 回调函数。返回优化进度，缺省情况下返回401错误，不执行清理任务
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 同步方法停止图库云图资源空间优化，和startOptimizeSpace配对使用。
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
   * 优化空间状态，为枚举类型。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  enum OptimizeState {
    /**
     * 正在优化空间。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    RUNNING = 0,

    /**
     * 优化空间成功结束。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    COMPLETED = 1,

    /**
     * 优化空间失败。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    FAILED = 2,

    /**
     * 优化空间停止。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    STOPPED = 3
  }

  /**
   * 立即优化空间状态和当前进度。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  interface OptimizeSpaceProgress {
    /**
     * 枚举值，优化空间状态。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    state: OptimizeState;

    /**
     * 优化进度百分比，范围[0,100]，单位：百分比。
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
   * 立即优化空间设置参数，设置优化总空间和老化天数。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  interface OptimizeSpaceParam {
    /**
     * 优化空间总大小。查询媒体库接口获得需要老化的所有文件总大小，由应用传入，单位byte。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    totalSize:long;

    /**
     * 老化天数。系统会以当前时间为基准，优化老化天数前未访问、已同步云空间的本地图片/视频，单位：天。
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
   * 端云文件历史版本信息，调用端云文件版本管理类[FileVersion]{@link cloudSync.FileVersion}的
   * [gethistoryversionlist]{@link cloudSync.FileVersion.getHistoryVersionList}方法时，历史版本列表中的属性。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface HistoryVersion {
    /**
     * 文件内容修改的时间戳，单位：ms。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    editedTime: long;
    /**
     * 文件大小，单位：Byte。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    fileSize: long;
    /**
     * 文件版本号。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    versionId: string;
    /**
     * 当前版本对应的文件名。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    originalFileName: string;
    /**
     * 当前版本对应文件内容的哈希值。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    sha256: string;
    /**
     * 当前版本是否为自动解决冲突的版本。
     * 
     * 应用设置手动解冲突时，默认返回false，无意义。
     * 
     * 应用设置自动解冲突时，端侧会自动解冲突，true表示当前版本存在冲突，端云服务已自动解决冲突，false表示无冲突，未自动解冲突。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    autoResolved: boolean;
  }

  /**
   * 历史版本文件下载状态和进度信息，调用端云文件版本管理类[FileVersion]{@link cloudSync.FileVersion}的
   * [downloadHistoryVersion]{@link cloudSync.FileVersion.downloadHistoryVersion}方法时，回调函数的入参类型。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface VersionDownloadProgress {
    /**
     * 所选版本云文件的下载状态。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    state: State;
    /**
     * 下载进度，单位：百分比。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    progress: int;
    /**
     * 返回批量缓存任务执行失败时的错误类型。
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    errType: DownloadErrorType;
  }

  /**
   * # construct<sup>20+</sup>
   * 
   * constructor()
   * 
   * 端云文件版本管理的构造函数，用于获取FileVersion类的实例。
   * 
   * **系统能力**：SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * 
   * **错误码：**
   * 
   * 以下错误码的详细介绍请参见[文件管理错误码](docroot://reference/apis-core-file-kit/errorcode-filemanagement.md)。
   * 
   * | 错误码ID                     | 错误信息        |
   * | ---------------------------- | ---------- |
   * | 22400005 | Inner error. Possible causes: 1.Failed to access the database or execute the SQL statement. 2.System 
   * error, such as a null pointer, insufficient memory or a JS engine exception. |
   * 
   * **示例：**
   * 
   * ```ts
   * let fileVersion = new cloudSync.FileVersion();
   * ```
   */
/**
   * # construct<sup>20+</sup>
   * 
   * constructor()
   * 
   * 端云文件版本管理的构造函数，用于获取FileVersion类的实例。
   * 
   * **系统能力**：SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * 
   * **错误码：**
   * 
   * 以下错误码的详细介绍请参见[文件管理错误码](docroot://reference/apis-core-file-kit/errorcode-filemanagement.md)。
   * 
   * | 错误码ID                     | 错误信息        |
   * | ---------------------------- | ---------- |
   * | 22400005 | Inner error. Possible causes: 1.Failed to access the database or execute the SQL statement. 2.System 
   * error, such as a null pointer, insufficient memory or a JS engine exception. |
   * 
   * **示例：**
   * 
   * ```ts
   * let fileVersion = new cloudSync.FileVersion();
   * ```
   */
/**
   * 端云文件版本管理类。支持对端云文件的历史版本进行管理，提供获取文件历史版本信息列表的能力，通过历史版本信息，可将历史版本下载到本地；并提供历史版本文件替换当前本地文件的能力，针对版本冲突，提供查询冲突标志，解除冲突标志的能力。
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  class FileVersion {
    /**
     * A constructor used to create a FileVersion object.
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
     * 获取历史版本列表，返回内容按修改时间排序，修改时间越早，位置越靠后。使用Promise异步回调。
     * 
     * 当云上版本数量小于传入的长度限制时，按照实际版本数量返回历史版本列表。
     * 
     * 当云上版本数量大于等于传入的长度限制时，则返回最新的versionNumLimit个版本。
     *
     * @param { string } uri - 文件的URI。
     * @param { int } versionNumLimit - 历史版本列表长度限制，取值范围[0, 100000]（单位：个）。当输入值大于100000时，按照最大值返回列表。
     * @returns { Promise<Array<HistoryVersion>> } Promise对象，返回历史版本列表。
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
     * 根据版本号获取指定文件的某一版本的文件内容。用户通过版本号指定云上某一版本，将其下载到本地临时存储路径，临时文件由应用自行决定是否替换原始文件，也可以选择保留或直接删除。callback返回文件下载进度，Promise返回历史
     * 版本临时文件的URI。
     *
     * @param { string } uri - 文件的URI。
     * @param { string } versionId - 文件某一版本的版本号，格式以接口
     *     [gethistoryversionlist]{@link cloudSync.FileVersion.getHistoryVersionList}返回为准。
     * @param { Callback<VersionDownloadProgress> } callback - 回调函数，返回下载进度。
     * @returns { Promise<string> } Promise对象，返回历史版本临时存储文件的URI。
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
     * 提供使用历史版本文件替换本地文件的能力。在替换前，需要调用[downloadHistoryVersion]{@link cloudSync.FileVersion.downloadHistoryVersion}方法对选择的历史
     * 版本进行下载并拿到versionUri；直接调用此接口或者versionUri非法会产生异常；替换完成后会删除临时存储文件。使用Promise异步回调。
     *
     * @param { string } originalUri - 本地文件的URI。
     * @param { string } versionUri - 历史版本文件的URI。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 获取本地文件版本冲突标志。使用Promise异步回调。此方法只有应用在配置手动解冲突后才会生效，否则默认自动解冲突，返回值为false，由同步流程自动完成解冲突；
     * 
     * 当应用配置手动解冲突后，调用此方法会返回当前文件是否与云侧文件产生冲突，并且由应用提示用户对冲突进行处理，在冲突解决前不会再自动同步上云。当处理完冲突后，需要调用
     * [clearFileConflict]{@link cloudSync.FileVersion.clearFileConflict}方法来清除冲突标志，后续才会继续触发同步，与云端保持一致。
     *
     * @param { string } uri - 文件的URI。
     * @returns { Promise<boolean> } Promise对象，返回本地文件和云端文件的冲突标志，true表示冲突，false表示不冲突。
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
     * 清除本地文件版本冲突标志。如果产生冲突，本地解决冲突后需要调用此方法来清除冲突标记，后续才可以触发自动同步机制，和云上保持一致。使用Promise异步回调。
     *
     * @param { string } uri - 待清除冲突标志的文件URI。
     * @returns { Promise<void> } Promise对象，无返回结果。
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