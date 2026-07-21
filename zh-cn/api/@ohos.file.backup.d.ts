/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * 提供备份和恢复能力的模块。
 *
 * @namespace backup
 * @syscap SystemCapability.FileManagement.StorageService.Backup
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace backup {
  /**
   * 文件的元数据，包含应用名称及文件URI，在与备份服务进行IPC时使用。
   *
   * @interface FileMeta
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface FileMeta {
    /**
     * 应用名称。
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 应用沙箱内待传输文件的名称。
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 应用沙箱内待传输文件的名称数组。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uris?: Array<string>;
  }

  /**
   * 文件数据，包含一个已经打开的文件描述符，在与备份服务进行IPC时使用。
   *
   * @interface FileData
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface FileData {
    /**
     * 已经打开的文件描述符，通过备份服务获取，可用于读取或写入备份、恢复文件内容。
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    fd: int;
  }

  /**
   * 记录最后一次增量备份时间，用于描述备份增量的时间点。
   *
   * @interface IncrementalBackupTime
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface IncrementalBackupTime {
    /**
     * 应用名称。
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 最后一次增量备份时间。
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    lastIncrementalTime: long;
  }

  /**
   * 增量数据中的清单文件信息，用于描述应用增量备份、恢复时对应文件的基础信息。
   *
   * @interface FileManifestData
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface FileManifestData {
    /**
     * 清单文件的文件描述符，通过备份服务获取。
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    manifestFd: int;
  }

  /**
   * 为备份恢复提供可选配置参数。
   *
   * @interface BackupParams
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface BackupParams {
    /**
     * 备份或恢复时使用的可选配置参数，以JSON格式字符串表示。
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    parameters?: string;
  }

  /**
   * 控制备份和恢复的优先级顺序。
   *
   * @interface BackupPriority
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface BackupPriority {
    /**
     * 应用的优先级，数值越大优先级越高。
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    priority?: int;
  }

  /**
   * 一次增量备份对象，包含最后一次增量备份时间和增量清单。
   *
   * @extends IncrementalBackupTime, FileManifestData, BackupParams, BackupPriority
   * @interface IncrementalBackupData
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface IncrementalBackupData extends IncrementalBackupTime, FileManifestData, BackupParams, BackupPriority {}

  /**
   * 文件对象，包含文件元数据和文件数据。
   * 用于与备份服务进行IPC。
   *
   * @extends FileMeta, FileData, FileManifestData
   * @interface File
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10
   */
  /**
   * 文件对象，包含文件元数据、文件数据和清单文件信息。
   * 用于客户端与备份服务进行IPC。
   *
   * @extends FileMeta, FileData, FileManifestData
   * @interface File
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface File extends FileMeta, FileData, FileManifestData {}

  /**
   * 配置系统执行碎片清理所需的参数。
   *
   * @interface FileSystemRequestConfig
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface FileSystemRequestConfig {
    /**
     * 指定碎片清理的触发类型，取值0表示执行存储器件碎片清理。
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    triggerType: int;

    /**
     * 碎片清理的目标大小，单位为MB，取值范围为0至2097152。
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    writeSize: int;

    /**
     * 执行碎片清理的最大允许时间，单位为秒，取值范围为0至300。
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    waitTime: int;
  }

  /**
   * 根据指定配置请求文件系统执行碎片清理。
   *
   * @permission ohos.permission.BACKUP
   * @param { FileSystemRequestConfig } config - 碎片清理的配置参数。
   *     <br>triggerType取值为0，writeSize取值范围为0至2097152 MB，waitTime取值范围为0至300秒。
   * @returns { Promise<int> } Promise对象，返回碎片清理的错误码。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed,
   *     application which is not a system application uses system API.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function fileSystemServiceRequest(config: FileSystemRequestConfig): Promise<int>;

  /**
   * 获取备份版本信息。
   *
   * @permission ohos.permission.BACKUP
   * @returns { string } 返回备份版本信息。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getBackupVersion(): string;

  /**
   * 一批文件准备好发送给客户端时触发的回调函数。
   *
   * @param { BusinessError<void> } error - 获取文件句柄失败时返回的错误对象。
   * @param { Array<File> } files - 获取到的文件句柄数组。
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type OnFileReadyBatch = (error: BusinessError<void>, files: Array<File>) => void;

  /**
   * 获取描述本地能力的JSON文件。
   *
   * @permission ohos.permission.BACKUP
   * @returns { Promise<FileData> } Promise对象，返回包含本地能力文件描述符的FileData。返回的文件为临时文件，关闭后将
   *     自动删除。
   * @throws { BusinessError } 13600001 - IPC error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getLocalCapabilities(): Promise<FileData>;

  /**
   * 获取描述本地能力的JSON文件。
   *
   * @permission ohos.permission.BACKUP
   * @param { AsyncCallback<FileData> } callback 回调函数，返回包含本地能力文件描述符的FileData。
   *     返回的文件为临时文件，关闭后将自动删除。
   * @throws { BusinessError } 13600001 - IPC error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getLocalCapabilities(callback: AsyncCallback<FileData>): void;

  /**
   * 获取描述本地能力的JSON文件。
   *
   * @permission ohos.permission.BACKUP
   * @param { Array<IncrementalBackupTime> } dataList 增量备份数据列表，包含待查询应用及其最后一次增量备份时间。
   * @returns { Promise<FileData> } Promise对象，返回包含本地能力文件描述符的FileData。返回的文件为临时文件，关闭后将
   * 自动删除。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 13600001 - IPC error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getLocalCapabilities(dataList: Array<IncrementalBackupTime>): Promise<FileData>;

  /**
    * 获取需要备份的应用信息。
    *
    * @permission ohos.permission.BACKUP
    * @param { string } bundleToBackup 需要备份的应用名称。
    * @returns { string } 返回应用上报的备份信息，具体内容和格式由应用自定义。
    * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
    * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
    * <br>2. Incorrect parameter types. 3.Parameter verification failed.
    * @syscap SystemCapability.FileManagement.StorageService.Backup
    * @systemapi
    * @since 12 dynamic
    * @since 23 static
    */
  function getBackupInfo(bundleToBackup: string): string;

  /**
   * 设置应用备份或恢复的时长。
   *
   * @permission ohos.permission.BACKUP
   * @param { string } bundleName 需要设置备份或恢复时长的应用名称。
   * @param { int } timeout 备份或恢复的限制时长，单位为毫秒，取值范围为0至14400000。
   * @returns { boolean } 设置结果，true表示成功，false表示失败。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function updateTimer(bundleName: string, timeout: int): boolean;

  /**
   * 更新备份应用发送文件描述符的速率。
   *
   * @permission ohos.permission.BACKUP
   * @param { string } bundleName 需要控制文件描述符发送速率的应用名称。
   * @param { int } sendRate 文件描述符发送速率，单位为个/秒，取值范围为0至800。
   * @returns { boolean } 设置结果，true表示成功，false表示失败。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
  */
  function updateSendRate(bundleName: string, sendRate: int): boolean;

  /**
   * 返回应用备份数据量信息的回调函数。
   *
   * @typedef {function} OnBackupSizeReport
   * @param {string} reportInfo 框架扫描到的应用待备份数据量信息，为JSON格式字符串。
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
   type OnBackupSizeReport = (reportInfo: string) => void;

  /**
   * 备份或恢复回调的应用名称参数类型。
   *
   * @typedef { undefined | string }
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  type BundlePara = undefined | string;

  /**
   * 返回应用备份数据量信息的回调函数。
   * 备份服务返回结果或进度信息时触发的回调。
   * 返回应用的处理结果或进度信息。
   * 
   * @typedef {function} OnProcess
   * @param { string } bundleName - 触发回调的应用名称。
   * @param { string } process - 应用备份或恢复的进度信息。
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  type OnProcess = (bundleName: string, process: string) => void;

  /**
   * 备份服务返回结果信息时触发的回调。
   * 第一个字符串参数表示触发回调的应用名称。
   * 第二个字符串参数表示应用的处理结果。
   * 
   * @typedef {function} OnResultReport
   * @param { string } bundleName - 触发回调的应用名称。
   * @param { string } result - 应用备份或恢复的结果信息。
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  type OnResultReport = (bundleName: string, result: string) => void;

  /**
   * 备份和恢复过程中的通用回调。
   * 备份服务通过这些回调向客户端通知备份或恢复阶段。
   *
   * @interface GeneralCallbacks
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface GeneralCallbacks {
    /**
     * 备份服务向客户端发送文件时触发的回调。
     * File参数表示发送给客户端的文件。
     *     返回的文件归备份服务所有，客户端关闭文件句柄后由备份服务清理。
     *
     * @type { AsyncCallback<File> }
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    onFileReady: AsyncCallback<File>;

    /**
     * 应用备份或恢复开始时触发的回调。
     * 返回的字符串参数表示应用名称。
     *
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     */
    /**
     * 应用备份或恢复开始时触发的回调。
     * 第一个字符串参数表示应用名称。
     * 发生BusinessError时，第二个字符串参数
     * 返回对应的应用名称。
     *
     * @type { AsyncCallback<string, void | string> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500001 - The application is not added to the backup or restore
     * @throws { BusinessError } 13500002 - Failed to start application extension Procedure
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     */
    onBundleBegin: AsyncCallback<string, void | string>;

    /**
     * 应用备份或恢复开始时触发的回调。
     * 第一个字符串参数表示应用名称。
     * 发生BusinessError时，第二个字符串参数
     * 返回对应的应用名称。
     *
     * @type { AsyncCallback<string, BundlePara> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500001 - The application is not added to the backup or restore
     * @throws { BusinessError } 13500002 - Failed to start application extension Procedure
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onBundleBegin: AsyncCallback<string, BundlePara>;

    /**
     * 应用备份或恢复成功结束或异常中止时触发的回调。
     * 返回的字符串参数表示应用名称。
     *
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     */
    /**
     * 应用备份或恢复成功结束或异常中止时触发的回调。
     * 第一个字符串参数表示应用名称。
     * 发生BusinessError时，第二个字符串参数
     * 返回对应的应用名称。
     *
     * @type { AsyncCallback<string, void | string> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500003 - Backup or restore timed out
     * @throws { BusinessError } 13500004 - Application extension death
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     */
    onBundleEnd: AsyncCallback<string, void | string>;

    /**
     * 应用备份或恢复成功结束或异常中止时触发的回调。
     * 第一个字符串参数表示应用名称。
     * 发生BusinessError时，第二个字符串参数
     * 返回对应的应用名称。
     *
     * @type { AsyncCallback<string, BundlePara> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500003 - Backup or restore timed out
     * @throws { BusinessError } 13500004 - Application extension death
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onBundleEnd: AsyncCallback<string, BundlePara>;

    /**
     * 所有应用的备份或恢复完成或异常中止时触发的回调。
     *
     * @type { AsyncCallback<undefined> }
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    onAllBundlesEnd: AsyncCallback<undefined>;

    /**
     * 备份服务异常死亡时触发的回调。
     *
     * @type { Callback<undefined> }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    onBackupServiceDied: Callback<undefined>;

    /**
     * 备份服务返回结果信息时触发的回调。
     * 第一个字符串参数表示触发回调的应用名称。
     * 第二个字符串参数表示应用的处理结果。
     *
     * @param { string } bundleName 触发回调的应用名称。
     * @param { string } result 应用备份或恢复的结果信息。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    onResultReport(bundleName: string, result: string): void;

    /**
     * 备份服务返回结果信息时触发的回调。
     * 第一个字符串参数表示触发回调的应用名称。
     * 第二个字符串参数表示应用的处理结果。
     *
     * @type { OnResultReport }
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onResultReport: OnResultReport;

    /**
     * 备份服务返回结果或进度信息时触发的回调。
     * 返回应用的处理结果或进度信息。
     *
     * @param { string } bundleName 触发回调的应用名称。
     * @param { string } process 应用备份或恢复的进度信息。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500006 - Tar error
     * @throws { BusinessError } 13500008 - Untar error
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    onProcess(bundleName: string, process: string): void;

    /**
     * 备份服务返回结果或进度信息时触发的回调。
     * 返回应用的处理结果或进度信息。
     *
     * @type { OnProcess }
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500006 - Tar error
     * @throws { BusinessError } 13500008 - Untar error
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onProcess: OnProcess;

    /**
     * 备份服务返回结果或进度信息时触发的回调。
     * 返回框架扫描到的应用待备份数据量信息。
     *
     * @type {OnBackupSizeReport}.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    onBackupSizeReport?: OnBackupSizeReport;

    /**
     * 文件迁移流程结束时触发的回调。
     * 第一个字符串参数表示应用名称。
     * 发生BusinessError时，第二个字符串参数
     * 返回对应的应用名称。
     *
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onMigrateResult?: AsyncCallback<string, void | string>;

    /**
     * 备份服务向客户端发送文件时触发的回调。
     * File参数表示发送给客户端的文件。
     * 返回的文件归备份服务所有，客户端关闭文件句柄后由备份服务清理。
     *
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onFileReadyBatch?: OnFileReadyBatch;
  }

  /**
   * 备份流程对象，用于支撑应用全量备份流程。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class SessionBackup {
    /**
     * 构造SessionBackup实例。
     *
     * @permission ohos.permission.BACKUP
     * @param { GeneralCallbacks } callbacks 备份流程所需的回调。
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    constructor(callbacks: GeneralCallbacks);

    /**
     * 获取描述本地能力的JSON文件。
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<FileData> } Promise对象，返回包含本地能力文件描述符的FileData。返回的文件为临时文件，关闭后将
     * 自动删除。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Internal error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getLocalCapabilities(): Promise<FileData>;

    /**
     * 获取应用待备份数据量。
     *
     * @permission ohos.permission.BACKUP
     * @param { boolean } isPreciseScan 是否精确扫描，true表示精确扫描，false表示非精确扫描。
     * @param { Array<IncrementalBackupTime> } dataList 备份应用列表及其最后一次增量备份时间。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Internal error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getBackupDataSize(isPreciseScan: boolean, dataList: Array<IncrementalBackupTime>): Promise<void>;

    /**
     * 添加需要备份的应用。
     *
     * @permission ohos.permission.BACKUP
     * @param { string[] } bundlesToBackup 需要备份的应用名称数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    /**
     * 添加需要备份的应用及其扩展信息。
     *
     * @permission ohos.permission.BACKUP
     * @param { string[] } bundlesToBackup 需要备份的应用名称数组。
     * @param { string[] } infos 备份时各应用所需扩展信息的数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    appendBundles(bundlesToBackup: string[], infos?: string[]): Promise<void>;

    /**
     * 添加需要备份的应用。
     *
     * @permission ohos.permission.BACKUP
     * @param { string[] } bundlesToBackup 需要备份的应用名称数组。
     * @param { AsyncCallback<void> } callback 添加备份应用完成后的异步回调。
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    appendBundles(bundlesToBackup: string[], callback: AsyncCallback<void>): void;

    /**
     * 结束备份流程，断开应用与备份恢复服务的连接。
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 取消指定应用的备份任务。
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - 需要取消任务的应用名称。
     * @returns { int } 取消结果，0表示成功，13500011表示失败，13500012表示没有对应任务。 
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    cancel(bundleName: string): int;

     /**
     * 清理指定应用的临时目录。
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - 需要清理临时目录的应用名称。
     * @returns { Promise<boolean> } 清理结果，true表示成功，false表示失败。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    cleanBundleTempDir(bundleName: string): Promise<boolean>;

    /**
     * 获取指定应用的兼容性信息。
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - 需要获取兼容性信息的应用名称。
     * @param { string } extInfo - 传递给应用的额外信息，由应用自行处理。
     * @returns { Promise<string> } Promise对象，返回应用的兼容性信息。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCompatibilityInfo(bundleName: string, extInfo: string): Promise<string>;
  }

 /**
  * 文件迁移的路径信息。
  * @syscap SystemCapability.FileManagement.StorageService.Backup
  * @systemapi
  * @stagemodelonly
  * @since 26.0.0 dynamic&static
  */
 interface PathInfo {
    /**
    * 迁移的源路径。
    * @syscap SystemCapability.FileManagement.StorageService.Backup
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
   srcPath: string;

    /**
     * 迁移的目标路径。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    destPath: string;
  }

  /**
   * 恢复流程对象，用于支撑应用全量恢复流程。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class SessionRestore {
    /**
     * 构造SessionRestore实例。
     *
     * @permission ohos.permission.BACKUP
     * @param { GeneralCallbacks } callbacks 恢复流程所需的回调。
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    constructor(callbacks: GeneralCallbacks);

    /**
     * 获取描述本地能力的JSON文件。
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<FileData> } Promise对象，返回包含本地能力文件描述符的FileData。返回的文件为临时文件，关闭后将
     * 自动删除。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Internal error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getLocalCapabilities(): Promise<FileData>;

    /**
     * 添加需要恢复的应用。
     *
     * @permission ohos.permission.BACKUP
     * @param { int } remoteCapabilitiesFd 保存远端设备能力信息的已打开JSON文件描述符。
     *     可通过getLocalCapabilities方法获取该值。
     * @param { string[] } bundlesToBackup 需要恢复的应用名称数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    /**
     * 添加需要恢复的应用及其扩展信息。
     *
     * @permission ohos.permission.BACKUP
     * @param { int } remoteCapabilitiesFd 保存远端设备能力信息的已打开JSON文件描述符。
     *     可通过getLocalCapabilities方法获取该值。
     * @param { string[] } bundlesToBackup 需要恢复的应用名称数组。
     * @param { string[] } [infos] 恢复时各应用所需扩展信息的数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    appendBundles(remoteCapabilitiesFd: int, bundlesToBackup: string[], infos?: string[]): Promise<void>;

    /**
     * 添加需要恢复的应用。
     *
     * @permission ohos.permission.BACKUP
     * @param { int } remoteCapabilitiesFd 保存远端设备能力信息的已打开JSON文件描述符。
     *     可通过getLocalCapabilities方法获取该值。
     * @param { string[] } bundlesToBackup 需要恢复的应用名称数组。
     * @param { AsyncCallback<void> } callback 添加恢复应用完成后的异步回调。
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    appendBundles(remoteCapabilitiesFd: int, bundlesToBackup: string[], callback: AsyncCallback<void>): void;

    /**
     * 向备份服务发布文件句柄，通知服务端文件内容已准备完成。
     * 该接口属于零拷贝能力。
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta 待发送文件的元数据。应确保备份框架已持有
     *     通过getFileHandle获取的文件。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    publishFile(fileMeta: FileMeta): Promise<void>;

    /**
     * 向备份服务发布文件句柄，通知服务端文件内容已准备完成。
     * 该接口属于零拷贝能力。
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta 待发送文件的元数据。应确保备份框架已持有
     *     通过getFileHandle获取的文件。
     * @param { AsyncCallback<void> } callback 发布文件句柄完成后的异步回调。
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    publishFile(fileMeta: FileMeta, callback: AsyncCallback<void>): void;

    /**
     * 向服务端请求共享文件，该接口属于零拷贝能力。
     * 开发者可通过onFileReady回调获取文件。
     * 客户端完成文件处理后，调用publishFile发布文件。
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta 待发送文件的元数据。所有文件都应来自
     *     备份流程或getLocalCapabilities方法。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getFileHandle(fileMeta: FileMeta): Promise<void>;

    /**
     * 向服务端请求共享文件，该接口属于零拷贝能力。
     * 开发者可通过onFileReady回调获取文件。
     * 客户端完成文件处理后，调用publishFile发布文件。
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta 待发送文件的元数据。所有文件都应来自
     *     备份流程或getLocalCapabilities方法。
     * @param { AsyncCallback<void> } callback 获取文件句柄完成后的异步回调。
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getFileHandle(fileMeta: FileMeta, callback: AsyncCallback<void>): void;

    /**
     * 结束恢复流程，断开应用与备份恢复服务的连接。
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 取消指定应用的恢复任务。
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - 需要取消任务的应用名称。
     * @returns { int } 取消结果，0表示成功，13500011表示失败，13500012表示没有对应任务。 
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    cancel(bundleName: string): int;

    /**
     * 清理指定应用的临时目录。
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - 需要清理临时目录的应用名称。
     * @returns { Promise<boolean> } 清理结果，true表示成功，false表示失败。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    cleanBundleTempDir(bundleName: string): Promise<boolean>;

    /**
     * 获取指定应用的兼容性信息。
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - 需要获取兼容性信息的应用名称。
     * @param { string } extInfo - 传递给应用的额外信息，由应用自行处理。
     * @returns { Promise<string> } Promise对象，返回应用的兼容性信息。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCompatibilityInfo(bundleName: string, extInfo: string): Promise<string>;

    /**
     * 将文件从源路径迁移到目标路径。
     *
     * @permission ohos.permission.BACKUP
     * @param { PathInfo } pathInfo - 包含源路径和目标路径的迁移路径信息。
     * @param { FileMeta } fileMeta - 包含应用名称及可选文件名的文件元数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    migrateFile(pathInfo: PathInfo, fileMeta: FileMeta): Promise<void>;

    /**
     * 获取APK文件的文件句柄。
     *
     * @permission ohos.permission.BACKUP
     * @param { string } path - APK文件路径。
     * @param { string } fileName - APK文件名称。
     * @returns { Promise<FileData> } Promise对象，返回包含APK文件描述符的FileData。
     *     返回的文件为临时文件，关闭后将自动删除。  
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getApkFileHandle(path: string, fileName: string): Promise<FileData>;

    /**
     * 向服务端批量请求共享文件，该接口属于零拷贝能力。
     * 开发者可通过onFileReadyBatch回调获取文件。
     * 客户端完成文件处理后，调用publishFile发布文件。
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta - 待发送文件的元数据。所有文件都应来自
     *     备份流程或getLocalCapabilities方法。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getFileHandles(fileMeta: FileMeta): Promise<void>;
  }
  
  /**
   * 增量备份流程对象，用于支撑应用增量备份流程。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  class IncrementalBackupSession {
    /**
     * 构造IncrementalBackupSession实例。
     *
     * @permission ohos.permission.BACKUP
     * @param { GeneralCallbacks } callbacks 备份流程所需的回调。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(callbacks: GeneralCallbacks);

   /**
     * 获取描述本地能力的JSON文件。
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<FileData> } Promise对象，返回包含本地能力文件描述符的FileData。返回的文件为临时文件，关闭后将
     * 自动删除。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Internal error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getLocalCapabilities(): Promise<FileData>;

    /**
     * 获取应用待备份数据量。
     *
     * @permission ohos.permission.BACKUP
     * @param { boolean } isPreciseScan 是否精确扫描，true表示精确扫描，false表示非精确扫描。
     * @param { Array<IncrementalBackupTime> } dataList 备份应用列表及其最后一次增量备份时间。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Internal error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getBackupDataSize(isPreciseScan: boolean, dataList: Array<IncrementalBackupTime>): Promise<void>;

    /**
     * 添加需要增量备份的应用。
     *
     * @permission ohos.permission.BACKUP
     * @param { Array<IncrementalBackupData> } bundlesToBackup 需要增量备份的应用数据列表。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    appendBundles(bundlesToBackup: Array<IncrementalBackupData>): Promise<void>;

    /**
     * 添加需要增量备份的应用。
     *
     * @permission ohos.permission.BACKUP
     * @param { Array<IncrementalBackupData> } bundlesToAppend 需要增量备份的应用数据列表。
     * @param { string[] } infos 增量备份时各应用所需扩展信息的数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed. This error code is usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    appendBundles(bundlesToAppend: Array<IncrementalBackupData>, infos: string[]): Promise<void>;

    /**
     * 结束增量备份流程，断开应用与备份恢复服务的连接。
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 取消指定应用的增量备份任务。
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - 需要取消任务的应用名称。
     * @returns { int } 取消结果，0表示成功，13500011表示失败，13500012表示没有对应任务。 
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    cancel(bundleName: string): int;

    /**
     * 清理指定应用的临时目录。
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - 需要清理临时目录的应用名称。
     * @returns { Promise<boolean> } 清理结果，true表示成功，false表示失败。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    cleanBundleTempDir(bundleName: string): Promise<boolean>;

    /**
     * 获取指定应用的兼容性信息。
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - 需要获取兼容性信息的应用名称。
     * @param { string } extInfo - 传递给应用的额外信息，由应用自行处理。
     * @returns { Promise<string> } Promise对象，返回应用的兼容性信息。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCompatibilityInfo(bundleName: string, extInfo: string): Promise<string>;
  }
}
export default backup;
