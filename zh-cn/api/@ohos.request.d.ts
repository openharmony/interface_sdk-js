/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * @file 上传下载
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import BaseContext from './application/BaseContext';
import { WantAgent } from './@ohos.app.ability.wantAgent';

/**
 * request模块给应用提供上传下载文件、后台代理传输的基础功能。
 * 
 * - request暂不支持在Extension中调用。
 *
 * @syscap SystemCapability.Request.FileTransferAgent [since 10]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace request {
  /**
   * 通用错误码：权限校验失败。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_PERMISSION: int;
  /**
   * 通用错误码：参数检查失败。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_PARAMCHECK: int;
  /**
   * 通用错误码：该设备不支持此API。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_UNSUPPORTED: int;
  /**
   * 特有错误码：文件操作异常。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_FILEIO: int;
  /**
   * 特有错误码：文件路径异常。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_FILEPATH: int;
  /**
   * 特有错误码：服务异常。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_SERVICE: int;
  /**
   * 特有错误码：其他错误。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const EXCEPTION_OTHERS: int;

  /**
   * 网络类型：使用蜂窝网络时允许下载的位标志。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   */
  const NETWORK_MOBILE: int;

  /**
   * 网络类型：使用WLAN时允许下载的位标志。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   */
  const NETWORK_WIFI: int;

  /**
   * 下载任务错误码：网络原因导致恢复下载失败。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_CANNOT_RESUME: int;

  /**
   * 下载任务错误码：找不到SD卡等存储设备。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_DEVICE_NOT_FOUND: int;

  /**
   * 下载任务错误码：要下载的文件已存在，下载会话无法覆盖现有文件。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_FILE_ALREADY_EXISTS: int;

  /**
   * 下载任务错误码：文件操作失败。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_FILE_ERROR: int;

  /**
   * 下载任务错误码：HTTP传输失败。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_HTTP_DATA_ERROR: int;

  /**
   * 下载任务错误码：存储空间不足。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_INSUFFICIENT_SPACE: int;

  /**
   * 下载任务错误码：网络重定向过多导致的错误。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_TOO_MANY_REDIRECTS: int;

  /**
   * 下载任务错误码：无法识别的HTTP代码。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_UNHANDLED_HTTP_CODE: int;

  /**
   * 下载任务错误码：未知错误。
   * 
   * 例如：API version 12及以下版本，系统仅支持串行地尝试连接域名相关IP，不支持单个IP的连接时间控制。若DNS返回的首个IP被阻塞，可能会由于握手超时导致ERROR_UNKNOWN错误。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const ERROR_UNKNOWN: int;

  /**
   * 下载任务错误码：网络未连接。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const ERROR_OFFLINE: int;

  /**
   * 下载任务错误码：网络类型不匹配。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const ERROR_UNSUPPORTED_NETWORK_TYPE: int;

  /**
   * 下载任务暂停原因：文件大小超过了使用蜂窝网络会话允许的最大值，下载被暂停并等待WLAN连接。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const PAUSED_QUEUED_FOR_WIFI: int;

  /**
   * 下载任务暂停原因：网络问题导致下载暂停。
   * 
   * 例如：网络断开。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const PAUSED_WAITING_FOR_NETWORK: int;

  /**
   * 下载任务暂停原因：网络错误导致下载会话将被重试。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const PAUSED_WAITING_TO_RETRY: int;

  /**
   * 下载任务暂停原因：用户暂停会话。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  const PAUSED_BY_USER: int;

  /**
   * 下载任务暂停原因：未知原因导致暂停下载。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const PAUSED_UNKNOWN: int;

  /**
   * 下载任务状态码：下载会话已完成。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const SESSION_SUCCESSFUL: int;

  /**
   * 下载任务状态码：下载会话正在进行中。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const SESSION_RUNNING: int;

  /**
   * 下载任务状态码：下载会话正在被调度中。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const SESSION_PENDING: int;

  /**
   * 下载任务状态码：下载会话已暂停。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const SESSION_PAUSED: int;

  /**
   * 下载任务状态码：下载会话已失败，将不会重试。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  const SESSION_FAILED: int;

  /**
   * 创建并启动一个下载任务，使用callback异步回调。
   *
   * @permission ohos.permission.INTERNET
   * @param { DownloadConfig } config - 下载的配置信息。
   * @param { AsyncCallback<DownloadTask> } callback - 回调函数。当下载任务成功，err为undefined，data为获取到的DownloadTask对象；否则为错误对象。
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Download
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead request.downloadFile(context: BaseContext, config: DownloadConfig, callback: AsyncCallback<DownloadTask>)
   */
  function download(config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void;

  /**
   * 创建并启动一个下载任务，使用callback异步回调，支持HTTP协议。通过
   * [on('complete'|'pause'|'remove')]{@link request.DownloadTask.on(type: 'complete' | 'pause' | 'remove', callback: () => void)}
   * 可获取任务下载时的状态信息，包括任务完成、暂停或移除。通过
   * [on('fail')]{@link request.DownloadTask.on(type: 'fail', callback: (err: int) => void)}可获取任务下载时的错误信息。
   * 
   * > **说明：**
   * >
   * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context - 基于应用程序的上下文。
   * @param { DownloadConfig } config - 下载的配置信息。
   * @param { AsyncCallback<DownloadTask> } callback - 回调函数。当下载任务成功，err为undefined，data为获取到的DownloadTask对象；否则为错误对象。
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
   *     <br> 1. Missing mandatory parameters.
   *     <br> 2. Incorrect parameter type.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 13400001 - Invalid file or file system error.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @throws { BusinessError } 13400003 - Task service ability error.
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function downloadFile(context: BaseContext, config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void;

  /**
   * 创建并启动一个下载任务，使用Promise异步回调。
   *
   * @permission ohos.permission.INTERNET
   * @param { DownloadConfig } config - 下载的配置信息。
   * @returns { Promise<DownloadTask> } 使用Promise方式，异步返回下载任务DownloadTask的Promise对象。
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Download
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead request.downloadFile(context: BaseContext, config: DownloadConfig)
   */
  function download(config: DownloadConfig): Promise<DownloadTask>;

  /**
   * 创建并启动一个下载任务，使用Promise异步回调，支持HTTP协议。通过
   * [on('complete'|'pause'|'remove')]{@link request.DownloadTask.on(type: 'complete' | 'pause' | 'remove', callback: () => void)}
   * 可以获取任务下载时的状态信息，包括任务完成、暂停或移除。通过
   * [on('fail')]{@link request.DownloadTask.on(type: 'fail', callback: (err: int) => void)}可以获取任务下载时的错误信息。
   * 
   * > **说明：**
   * >
   * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context - 基于应用程序的上下文。
   * @param { DownloadConfig } config - 下载的配置信息。
   * @returns { Promise<DownloadTask> } 使用Promise方式，异步返回下载任务DownloadTask的Promise对象。
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
   *     <br> 1. Missing mandatory parameters.
   *     <br> 2. Incorrect parameter type.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 13400001 - Invalid file or file system error.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @throws { BusinessError } 13400003 - Task service ability error.
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function downloadFile(context: BaseContext, config: DownloadConfig): Promise<DownloadTask>;

  /**
   * 创建并启动一个上传任务，使用callback异步回调。
   *
   * @permission ohos.permission.INTERNET
   * @param { UploadConfig } config - 上传的配置信息。
   * @param { AsyncCallback<UploadTask> } callback - 回调函数，异步返回UploadTask对象。当上传成功，err为undefined，data为获取到的UploadTask对象；否则为
   *     错误对象。
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Upload
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead request.uploadFile(context: BaseContext, config: UploadConfig)
   */
  function upload(config: UploadConfig, callback: AsyncCallback<UploadTask>): void;

  /**
   * 创建并启动一个上传任务，使用callback异步回调，支持HTTP协议。通过
   * [on('complete'|'fail')]{@link request.UploadTask.on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>)}
   * 可获取任务上传时的成功信息或错误信息。
   * 
   * > **说明：**
   * >
   * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context - 基于应用程序的上下文。
   * @param { UploadConfig } config - 上传的配置信息。
   * @param { AsyncCallback<UploadTask> } callback - 回调函数，异步返回UploadTask对象。当上传成功，err为undefined，data为获取到的UploadTask对象；否则为
   *     错误对象。
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
   *     <br> 1. Missing mandatory parameters.
   *     <br> 2. Incorrect parameter type.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function uploadFile(context: BaseContext, config: UploadConfig, callback: AsyncCallback<UploadTask>): void;

  /**
   * 创建并启动一个上传任务，使用Promise异步回调。
   *
   * @permission ohos.permission.INTERNET
   * @param { UploadConfig } config - 上传的配置信息。
   * @returns { Promise<UploadTask> } 使用Promise方式，异步返回上传任务UploadTask的Promise对象。
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Upload
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead request.uploadFile(context: BaseContext, config: UploadConfig)
   */
  function upload(config: UploadConfig): Promise<UploadTask>;

  /**
   * 创建并启动一个上传任务，使用Promise异步回调，支持HTTP协议。通过
   * [on('complete'|'fail')]{@link request.UploadTask.on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>)}
   * 可获取任务上传时的成功信息或错误信息。
   * 
   * > **说明：**
   * >
   * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context - 基于应用程序的上下文。
   * @param { UploadConfig } config - 上传的配置信息。
   * @returns { Promise<UploadTask> } 使用Promise方式，异步返回上传任务UploadTask的Promise对象。
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
   *     <br> 1. Missing mandatory parameters.
   *     <br> 2. Incorrect parameter type.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function uploadFile(context: BaseContext, config: UploadConfig): Promise<UploadTask>;

  /**
   * 下载任务的配置信息。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   * @name DownloadConfig
   */
  interface DownloadConfig {
    /**
     * 资源地址。从API 6到API 14，最大长度为2048个字符；从API 15开始，最大长度为8192个字符。支持
     * [HTTP拦截](docroot://basic-services/request/app-file-upload-download.md#http拦截)功能。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    url: string;
    /**
     * 添加要包含在下载请求中的HTTPS标志头。默认值为空。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    header?: Object;
    /**
     * Adds an HTTP or HTTPS header to be included with the download request.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    header?: Record<string, string>;
    /**
     * 表示设置是否允许在按流量计费的连接下下载任务的配置信息。true表示允许，false表示不允许。默认值为false。
     * 
     * > **说明：**
     * > 
     * > Wi-Fi为非计费网络，数据流量为计费网络。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    enableMetered?: boolean;
    /**
     * 表示设置是否允许在漫游网络中下载任务的配置信息。true表示允许，false表示不允许。默认值为false。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    enableRoaming?: boolean;
    /**
     * 设置下载会话的描述。默认值为空字符串。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    description?: string;
    /**
     * 设置允许下载的网络类型，通过
     * [网络类型常量](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)的位运算方式决定允许
     * 的网络类型，支持如下几种设置方式: 
     * 
     * - 仅支持蜂窝网络下载，参数为NETWORK_MOBILE或0x00000001 
     * - 仅支持WLAN网络下载，参数为NETWORK_WIFI或0x00010000
     * - 参数默认值，支持蜂窝/WLAN网络下载，参数为NETWORK_MOBILE | NETWORK_WIFI或0x00010001。
     * 
     * 当参数为NETWORK_MOBILE | NETWORK_WIFI时，enableMetered和enableRoaming参数不生效。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    networkType?: int;
    /**
     * 设置下载路径。默认为调用方（即传入的context）对应的缓存路径。默认文件名从url的最后一个"/"后截取。
     * 
     * - FA模型下使用
     * [Context.getCacheDir](docroot://reference/apis-ability-kit/js-apis-inner-app-context.md#contextgetcachedir)方法获取应用
     * 存储路径。
     * 
     * - Stage模型下使用[Context (Stage模型的上下文基类)]{@link ./application/Context:Context}中AbilityContext的类获取文件路径。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    filePath?: string;
    /**
     * 设置下载任务名称。默认值为download。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    title?: string;
    /**
     * 后台任务通知开关，启用后可在通知中显示下载状态。true表示启用，false表示禁用。默认值为false。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    background?: boolean;
  }

  /**
   * 下载任务信息，[getTaskInfo]{@link request.DownloadTask.getTaskInfo()}接口的回调参数。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   * @name DownloadInfo [since 7 - 9]
   */
  interface DownloadInfo {
    /**
     * 待下载任务的描述信息。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    description: string;
    /**
     * 实时下载大小，单位为字节（B）。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    downloadedBytes: long;
    /**
     * 下载任务id。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    downloadId: long;
    /**
     * 下载失败原因，可以是任何
     * [下载任务的错误码](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)常量。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    failedReason: int;
    /**
     * 下载的文件名。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    fileName: string;
    /**
     * 存储文件的URI。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    filePath: string;
    /**
     * 会话暂停的原因，可以是任何
     * [下载任务暂停原因](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)常量。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    pausedReason: int;
    /**
     * 下载状态码，可以是任何
     * [下载任务状态码](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)常量。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    status: int;
    /**
     * 下载文件的URI。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    targetURI: string;
    /**
     * 下载任务名称。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    downloadTitle: string;
    /**
     * 下载的文件的总大小，单位为字节（B）。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    downloadTotalBytes: long;
  }

  /**
   * The callback function for the download progress event.
   *
   * @param { long } receivedSize - the length of downloaded data, in bytes.
   * @param { long } totalSize - the length of data expected to be downloaded, in bytes.
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadProgressCallback = (receivedSize: long, totalSize: long) => void;

  /**
   * The callback function for the download complete event.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadCompleteCallback = () => void;

  /**
   * The callback function for the download pause event.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadPauseCallback = () => void;

  /**
   * The callback function for the download remove event.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadRemoveCallback = () => void;

  /**
   * The callback function for the download fail event.
   *     <br>The value should be an integer.
   *
   * @param { int } err - the error code for download task.
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadFailCallback = (err: int) => void;

  /**
   * 下载任务，使用下列方法前，需要先获取DownloadTask对象，promise形式通过
   * [request.downloadFile]{@link request.downloadFile(context: BaseContext, config: DownloadConfig)}获取，callback形式通过
   * [request.downloadFile]{@link request.downloadFile(context: BaseContext, config: DownloadConfig, callback: AsyncCallback<DownloadTask>)}
   * 获取。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   */
  interface DownloadTask {
    /**
     * 订阅下载任务进度事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 应用处于后台时，为满足功耗性能要求，不支持调用此接口进行回调。
     *
     * @param { 'progress' } type - 订阅的事件类型。<br>- 取值为'progress'，表示下载的进度信息，当任务进度有进展时触发该事件。
     * @param { function } callback - 下载任务进度的回调函数，返回已上传文件大小和上传文件大小总和，单位为字节（B）。在下载过程中，若服务器使用chunk方式传输导致无法从请求头中获取文件总大小时，
     *     totalSize为 -1。
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    on(type: 'progress', callback: (receivedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current download session is in process.
     *
     * @param { DownloadProgressCallback } callback - The callback function for the download progress event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onProgress(callback: DownloadProgressCallback): void;

    /**
     * 取消订阅下载任务进度事件。
     *
     * @param { 'progress' } type - 取消订阅的事件类型。<br>- 取值为'progress'，表示下载的进度信息。
     * @param { function } [callback] - 需要取消订阅的回调函数。若无此参数，则取消订阅当前类型的所有回调函数。
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    off(type: 'progress', callback?: (receivedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current download session is in process.
     *
     * @param { DownloadProgressCallback } [callback] - The callback function for the download progress event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offProgress(callback?: DownloadProgressCallback): void;

    /**
     * 订阅下载任务相关的事件，使用callback异步回调。
     *
     * @param { 'complete' | 'pause' | 'remove' } type - 订阅的事件类型。<br>- 取值为'complete'，表示下载任务完成，任务完成时触发该事件。<br/>- 取值为'
     *     pause'，表示下载任务暂停，任务暂停时触发该事件。<br/>- 取值为'remove'，表示下载任务移除，任务移除时触发该事件。
     * @param { function } callback - 下载任务相关的回调函数。
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'complete' | 'pause' | 'remove', callback: () => void): void;

    /**
     * Called when the current download session complete.
     *
     * @param { DownloadCompleteCallback } callback - The callback function for the download complete event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onComplete(callback: DownloadCompleteCallback): void;

	  /**
     * Called when the current download session pause.
     *
     * @param { DownloadPauseCallback } callback - The callback function for the download pause event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onPause(callback: DownloadPauseCallback): void;

    /**
     * Called when the current download session remove.
     *
     * @param { DownloadRemoveCallback } callback - The callback function for the download remove event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onRemove(callback: DownloadRemoveCallback): void;

    /**
     * 取消订阅下载任务相关的事件。
     *
     * @param { 'complete' | 'pause' | 'remove' } type - 取消订阅的事件类型。<br/>- 取值为'complete'，表示下载任务完成。<br/>- 取值为'pause'，表示下载任
     *     务暂停。<br/>- 取值为'remove'，表示下载任务移除。
     * @param { function } [callback] - 需要取消订阅的回调函数。若无此参数，则取消订阅当前类型的所有回调函数。
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'complete' | 'pause' | 'remove', callback?: () => void): void;

    /**
     * Called when the current download session complete.
     *
     * @param { DownloadCompleteCallback } [callback] - The callback function for the download complete event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offComplete(callback?: DownloadCompleteCallback): void;

	  /**
     * Called when the current download session pause.
     *
     * @param { DownloadPauseCallback } [callback] - The callback function for the download pause event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offPause(callback?: DownloadPauseCallback): void;

	/**
     * Called when the current download session remove.
     *
     * @param { DownloadRemoveCallback } [callback] - The callback function for the download remove event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offRemove(callback?: DownloadRemoveCallback): void;

    /**
     * 订阅下载任务失败事件，使用callback异步回调。
     *
     * @param { 'fail' } type - 订阅的事件类型。<br>- 取值为'fail'，表示下载失败，任务失败时触发该事件。
     * @param { function } callback - 下载失败的回调函数。错误原因见
     *     [下载任务的错误码](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)。
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'fail', callback: (err: int) => void): void;

    /**
     * Called when the current download session fails.
     *
     * @param { DownloadFailCallback } callback - The callback function for the download fail event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onFail(callback: DownloadFailCallback): void;

    /**
     * 取消订阅下载任务失败事件。
     *
     * @param { 'fail' } type - 取消订阅的事件类型。<br>- 取值为'fail'，表示下载失败。
     * @param { function } [callback] - 需要取消订阅的回调函数。若无此参数，则取消订阅当前类型的所有回调函数。
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'fail', callback?: (err: int) => void): void;

    /**
     * Called when the current download session fails.
     *
     * @param { DownloadFailCallback } [callback] - The callback function for the download fail event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offFail(callback?: DownloadFailCallback): void;

    /**
     * 移除下载的任务，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [delete]{@link request.UploadTask.delete(callback: AsyncCallback<boolean>)}替代。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示移除下载任务成功；返回false表示移除下载任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead request.UploadTask.delete(callback: AsyncCallback<boolean>)
     */
    remove(callback: AsyncCallback<boolean>): void;

    /**
     * 移除下载的任务，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用[delete]{@link request.UploadTask.delete()}替代。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } Promise对象。返回true表示移除下载任务成功；返回false表示移除下载任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead request.UploadTask.delete()
     */
    remove(): Promise<boolean>;

    /**
     * 暂停下载正在运行中的任务，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [suspend]{@link request.DownloadTask.suspend(callback: AsyncCallback<boolean>)}替代。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<void> } callback - 回调函数。当暂停下载任务成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.suspend(callback: AsyncCallback<boolean>)
     */
    pause(callback: AsyncCallback<void>): void;

    /**
     * 暂停下载正在运行中的任务，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[suspend]{@link request.DownloadTask.suspend()}替代。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.suspend()
     */
    pause(): Promise<void>;

    /**
     * 重新启动被暂停的下载任务，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [restore]{@link request.DownloadTask.restore(callback: AsyncCallback<boolean>)}替代。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<void> } callback - 回调函数。当重新启动已暂停的下载任务成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.restore(callback: AsyncCallback<boolean>)
     */
    resume(callback: AsyncCallback<void>): void;

    /**
     * 重新启动被暂停的下载任务，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[restore]{@link request.DownloadTask.restore()}替代。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.restore()
     */
    resume(): Promise<void>;

    /**
     * 查询下载任务，返回下载任务的信息，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [getTaskInfo]{@link request.DownloadTask.getTaskInfo(callback: AsyncCallback<DownloadInfo>)}替代。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<DownloadInfo> } callback - 回调函数。当查询下载任务成功，err为undefined，data为获取到的DownloadInfo对象；否则为错误对象。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.getTaskInfo(callback: AsyncCallback<DownloadInfo>)
     */
    query(callback: AsyncCallback<DownloadInfo>): void;

    /**
     * 查询下载任务，返回下载任务的信息，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃,建议使用[getTaskInfo]{@link request.DownloadTask.getTaskInfo()}替代。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<DownloadInfo> } Promise对象。返回DownloadInfo。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.getTaskInfo()
     */
    query(): Promise<DownloadInfo>;

    /**
     * 查询下载的任务的MimeType，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [getTaskMimeType]{@link request.DownloadTask.getTaskMimeType(callback: AsyncCallback<string>)}替代。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<string> } callback - 回调函数。当查询下载任务的MimeType成功，err为undefined，data为获取到的任务的MimeType对象；否则为错误对象。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.getTaskMimeType(callback: AsyncCallback<string>)
     */
    queryMimeType(callback: AsyncCallback<string>): void;

    /**
     * 查询下载任务的MimeType，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[getTaskMimeType]{@link request.DownloadTask.getTaskMimeType()}替代。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<string> } Promise对象。返回下载任务的MimeType。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead request.DownloadTask.getTaskMimeType()
     */
    queryMimeType(): Promise<string>;

    /**
     * 移除下载的任务，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示移除下载任务成功；返回false表示移除下载任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(callback: AsyncCallback<boolean>): void;

    /**
     * 移除下载的任务，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } Promise对象。返回true表示移除下载任务成功；返回false表示移除下载任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(): Promise<boolean>;

    /**
     * 暂停下载正在运行中的任务，已暂停的任务可被[restore]{@link request.DownloadTask.restore()}恢复，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示暂停下载任务成功；返回false表示暂停下载任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    suspend(callback: AsyncCallback<boolean>): void;

    /**
     * 暂停下载正在运行中的任务，已暂停的任务可被[restore]{@link request.DownloadTask.restore()}恢复，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } Promise对象。返回true表示暂停下载正在运行中的任务成功；返回false表示暂停下载正在运行中的任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    suspend(): Promise<boolean>;

    /**
     * 重新启动被暂停的下载任务，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示重新启动已暂停的下载任务成功；返回false表示重新启动下载任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    restore(callback: AsyncCallback<boolean>): void;

    /**
     * 重新启动被暂停的下载任务，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } Promise对象。返回true表示重新启动被暂停的下载任务成功；返回false表示重新启动被暂停的下载任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    restore(): Promise<boolean>;

    /**
     * 查询下载的任务，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<DownloadInfo> } callback - 回调函数。当查询下载任务操作成功，err为undefined，data为获取到的DownloadInfo对象；否则为错误对象。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskInfo(callback: AsyncCallback<DownloadInfo>): void;

    /**
     * 查询下载任务的信息，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<DownloadInfo> } Promise对象，返回DownloadInfo对象。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskInfo(): Promise<DownloadInfo>;

    /**
     * 查询下载任务的 MimeType（HTTP中表示资源的媒体类型），使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<string> } callback - 回调函数。当查询下载任务MimeType成功，err为undefined，data为获取到的下载任务的MimeType的对象；否则为错误对
     *     象。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskMimeType(callback: AsyncCallback<string>): void;

    /**
     * 查询下载的任务的MimeType(HTTP中表示资源的媒体类型)，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<string> } Promise对象。返回下载任务的MimeType。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskMimeType(): Promise<string>;
  }

  /**
   * [UploadConfig]{@link request.UploadConfig}中的文件列表。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   * @name File [since 6 - 9]
   */
  interface File {
    /**
     * multipart提交时，请求头中的文件名。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    filename: string;
    /**
     * multipart提交时，表单项目的名称，缺省为file。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    name: string;
    /**
     * 文件的本地存储路径。
     * 
     * 仅支持"internal://cache/"，即调用方（传入的context）对应的缓存路径context.cacheDir。
     * 
     * 示例：internal://cache/path/to/file.txt
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * 文件的内容类型，默认根据文件名或路径的后缀获取。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    type: string;
  }

  /**
   * [UploadConfig]{@link request.UploadConfig}中的表单数据。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   * @name RequestData [since 6 - 9]
   */
  interface RequestData {
    /**
     * 表示表单元素的名称。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    name: string;
    /**
     * 表示表单元素的值。
     *
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    value: string;
  }

  /**
   * 上传任务的配置信息。
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   * @name UploadConfig [since 6 - 9]
   */
  interface UploadConfig {
    /**
     * 资源地址。从API 6到API 14，最大长度为2048个字符；从API 15开始，最大长度为8192个字符。支持
     * [HTTP拦截](docroot://basic-services/request/app-file-upload-download.md#http拦截)功能。
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    url: string;
    /**
     * 添加要包含在上传请求中的HTTP或HTTPS标志头。
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    header: Object;
    /**
     * Adds an HTTP or HTTPS header to be included with the upload request.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    header: Record<string, string>;
    /**
     * HTTP请求方法：POST、PUT，缺省为POST。使用POST新增资源，使用PUT修改资源。
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    method: string;
    /**
     * 任务的路径索引，默认值为0。
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    index?: int;
    /**
     * 上传任务开始时读取的文件起点，单位为字节（B）。默认值为0，取值范围为闭区间，表示从头开始传输。
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    begins?: long;
    /**
     * 上传任务结束时读取的文件终点，单位为字节（B）。默认值为-1，取值范围为闭区间，表示传输到整个文件末尾结束。
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    ends?: long;
    /**
     * 要上传的文件列表。文件以HTTP的multipart/form-data格式提交。
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    files: Array<File>;
    /**
     * 请求的表单数据。
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    data: Array<RequestData>;
  }

  /**
   * 上传任务的任务信息，是
   * [on('complete' | 'fail')]{@link request.UploadTask.on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>)}
   * 和
   * [off('complete' | 'fail')]{@link request.UploadTask.off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>)}
   * 接口的回调参数。
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   * @name TaskState [since 9 - 9]
   */
  interface TaskState {
    /**
     * 文件路径。
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    path: string;
    /**
     * 上传任务返回码。返回0表示上传任务成功，返回其它值表示上传任务失败，具体请参见message参数中的上传任务结果描述信息。
     * 
     * 此处推荐使用
     * [request.agent.create]{@link request.agent.create(context: BaseContext, config: Config)}创建上传
     * 任务，并获取标准错误码处理异常分支。
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    responseCode: int;
    /**
     * 上传任务结果描述信息。
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * The callback function for the download progress event.
   *
   * @param { long } uploadedSize - the length of uploaded data, in bytes
   * @param { long } totalSize - the length of data expected to be uploaded, in bytes.
   * @syscap SystemCapability.MiscServices.Upload
   * @since 23 static
   */
  export type UploadProgressCallback = (uploadedSize: long, totalSize: long) => void;

  /**
   * The callback function for the HTTP Response Header event.
   *
   * @param { object } header - HTTP Response Header returned by the developer server.
   * @syscap SystemCapability.MiscServices.Upload
   * @since 23 static
   */
  export type UploadHeaderReceiveCallback = (header: object) => void;

  /**
   * 上传任务，使用下列方法前，需要先获取UploadTask对象，promise形式通过
   * [request.uploadFile]{@link request.uploadFile(context: BaseContext, config: UploadConfig)}获取，callback形式通过
   * [request.uploadFile]{@link request.uploadFile(context: BaseContext, config: UploadConfig, callback: AsyncCallback<UploadTask>)}
   * 获取。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform [since 10]
   * @since 6 dynamic
   * @since 23 static
   */
  interface UploadTask {
    /**
     * 订阅上传任务进度事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 应用处于后台时，为满足功耗性能要求，不支持调用此接口进行回调。
     *
     * @param { 'progress' } type - 订阅的事件类型。取值为'progress'，表示上传的进度信息，任务进度有进展时触发该事件。
     * @param { function } callback - 上传任务进度的回调函数，返回已上传文件大小和上传文件总大小，单位为字节（B）。
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    on(type: 'progress', callback: (uploadedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current upload session is in process.
     *
     * @param { UploadProgressCallback } callback - The callback function for the upload progress event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onProgress(callback: UploadProgressCallback): void;

    /**
     * 取消订阅上传任务进度事件。
     *
     * @param { 'progress' } type - 取消订阅的事件类型。<br>- 取值为'progress'，表示上传的进度信息。
     * @param { function } [callback] - 需要取消订阅的回调函数。若无此参数，则取消订阅当前类型的所有回调函数。
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 6 dynamic
     */
    off(type: 'progress', callback?: (uploadedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current upload session is in process.
     *
     * @param { UploadProgressCallback } [callback] - The callback function for the upload progress event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offProgress(callback?: UploadProgressCallback): void;

    /**
     * 订阅上传任务HTTP响应事件，使用callback异步回调。
     *
     * @param { 'headerReceive' } type - 订阅的事件类型。<br>- 取值为'headerReceive'，HTTP请求接收到响应时触发该事件。
     * @param { function } callback - HTTP Response事件的回调函数，返回响应请求内容。
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'headerReceive', callback: (header: object) => void): void;

    /**
     * Called when the header of the current upload session has been received.
     *
     * @param { UploadHeaderReceiveCallback } callback - The callback function for the HTTP Response Header event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onHeaderReceive(callback: UploadHeaderReceiveCallback): void;

    /**
     * 取消订阅上传任务HTTP响应事件。
     *
     * @param { 'headerReceive' } type - 取消订阅的事件类型。<br>- 取值为'headerReceive'，表示HTTP请求接收到响应。
     * @param { function } [callback] - 需要取消订阅的回调函数。若无此参数，则取消订阅当前类型的所有回调函数。
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'headerReceive', callback?: (header: object) => void): void;

    /**
     * Called when the header of the current upload session has been received.
     *
     * @param { UploadHeaderReceiveCallback } [callback] - The callback function for the HTTP Response Header event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offHeaderReceive(callback?: UploadHeaderReceiveCallback): void;

    /**
     * 订阅上传任务完成或失败事件，使用callback异步回调。
     *
     * @param { 'complete' | 'fail' } type - 订阅的事件类型，支持的事件包括：`'complete'`|`'fail'`。<br/>- `'complete'`：表示上传任务完成，任务完成时触发该
     *     事件。 <br/>- `'fail'`：表示上传任务失败，任务失败时触发该事件。
     * @param { Callback<Array<TaskState>> } callback - 上传任务完成或失败的回调函数。返回上传任务的任务状态信息。
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session complete.
     *
     * @param { Callback<Array<TaskState>> } callback - The callback function for the upload complete event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onComplete(callback: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session fail.
     *
     * @param { Callback<Array<TaskState>> } callback - The callback function for the upload fail event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onFail(callback: Callback<Array<TaskState>>): void;

    /**
     * 取消订阅上传任务的完成或失败事件。
     *
     * @param { 'complete' | 'fail' } type - 取消订阅的事件类型。<br>- 取值为'complete'，表示上传任务完成。<br>- 取值为'fail'，表示上传任务失败。
     * @param { Callback<Array<TaskState>> } [callback] - 需要取消订阅的回调函数。若无此参数，则取消订阅当前类型的所有回调函数。
     * @throws { BusinessError } 401 - the parameters check fails. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed. [since 12]
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session complete.
     *
     * @param { Callback<Array<TaskState>> } [callback] - The callback function for the upload complete event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offComplete(callback?: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session fail.
     *
     * @param { Callback<Array<TaskState>> } [callback] - The callback function for the upload fail change event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offFail(callback?: Callback<Array<TaskState>>): void;

    /**
     * 移除上传的任务，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [delete]{@link request.UploadTask.delete(callback: AsyncCallback<boolean>)}替代。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示移除上传任务成功；返回false表示移除上传任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead request.UploadTask.delete(callback: AsyncCallback<boolean>)
     */
    remove(callback: AsyncCallback<boolean>): void;

    /**
     * 移除上传的任务，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用[delete]{@link request.UploadTask.delete()}替代。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } 使用Promise方式异步回调，返回true表示移除上传任务成功；返回false表示移除上传任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead request.UploadTask.delete()
     */
    remove(): Promise<boolean>;

    /**
     * 移除上传的任务，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示移除上传任务成功；返回false表示移除上传任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(callback: AsyncCallback<boolean>): void;

    /**
     * 移除上传的任务，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 由于不存在401报错场景，在api12中 `401 the parameters check fails` 这个错误码被移除。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } Promise对象。返回true表示移除上传任务成功；返回false表示移除上传任务失败。
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(): Promise<boolean>;
  }

  /**
   * The request agent api.
   * Supports "background" and "frontend" tasks as while.
   * Though "background" and "frontend" here do not the same with process's concept.
   * All tasks will be executed at request manager service and recorded.
   * Background tasks is for concurrent transfer, such as caching videos for a later play.
   * Frontend tasks is for instant transfer, such as submitting forms for a consumption bill.
   * Background tasks use notification to tell user tasks' status information.
   * Frontend tasks use callback to tell caller tasks' status information.
   * Background has some automatically restore mechanism.
   * Frontend tasks controlled by caller.
   * Uses `multipart/form-data` in client request for upload.
   * A `Content-Disposition: attachment; filename=<filename>` response from server leads to download.
   * More details, please see the architecture documents of the request subsystem.
   * Only front-end mode is supported in cross-platform scenarios.
   *
   * @syscap SystemCapability.Request.FileTransferAgent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  namespace agent {
    /**
     * [通知栏]{@link request.agent.Notification} 展示类型：显示完成通知
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 21 dynamic
     */
    const VISIBILITY_COMPLETION: 1;
    /**
     * Indicates to show completion notification.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @stagemodelonly
     * @since 23 static
     */
    const VISIBILITY_COMPLETION: int = 1;
    /**
     * [通知栏]{@link request.agent.Notification} 展示类型：显示进度通知
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 21 dynamic
     */
    const VISIBILITY_PROGRESS: 2;
    /**
     * Indicates to show progress notification.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @stagemodelonly
     * @since 23 static
     */
    const VISIBILITY_PROGRESS: int = 2;
    /**
     * 定义操作选项。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    enum Action {
      /**
       * 表示下载任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      DOWNLOAD,
      /**
       * 表示上传任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      UPLOAD
    }

    /**
     * 定义模式选项。
     * 
     * 当应用的前台任务切换到后台一段时间后会显示运行失败或暂停，而后台任务不受此操作影响。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    enum Mode {
      /**
       * 表示后台任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      BACKGROUND,
      /**
       * 表示前台任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      FOREGROUND
    }

    /**
     * 定义网络选项。
     * 
     * 网络不满足设置条件时，未执行的任务会等待执行，执行中的任务将失败或暂停。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    enum Network {
      /**
       * 表示不限网络类型。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      ANY,
      /**
       * 表示无线网络。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      WIFI,
      /**
       * 表示蜂窝数据网络。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      CELLULAR
    }

    /**
     * 定义自定义系统事件。用户可以使用公共事件接口获取该事件。
     * 
     * 上传下载SA具有'ohos.permission.SEND_TASK_COMPLETE_EVENT'权限，用户可以配置事件的metadata指向的二级配置文件来拦截其他事件发送者。
     * 
     * 调用CommonEventData类型传输公共事件相关数据，成员的内容填写和 [CommonEventData]{@link ./commonEvent/commonEventData:CommonEventData} 介绍的
     * 有所区别，其中CommonEventData.code表示任务的状态，目前为0x40 COMPLETE或0x41 FAILED；CommonEventData.data表示任务的taskId。
     * 
     * <!--Del-->
     * 
     * 请参考[静态订阅公共事件](docroot://basic-services/common-event/common-event-static-subscription-sys.md)以获取事件配置信息和二级配置文件的配置方式
     * 。<!--DelEnd-->
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 11 dynamic
     * @since 23 static
     */
    enum BroadcastEvent {
      /**
       * 表示自定义系统事件完成。在任务结束后会触发该事件，根据任务的成功或失败，事件的code返回0x40或者0x41。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11 dynamic
       * @since 23 static
       */
      COMPLETE = 'ohos.request.event.COMPLETE'
    }

    /**
     * 表单项的文件信息。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface FileSpec {
      /**
       * 文件路径。
       * 
       * - 相对路径，位于调用方的缓存路径下。
       * 
       * 例如："./xxx/yyy/zzz.html"、"xxx/yyy/zzz.html"。
       * 
       * - internal协议路径，支持"internal://"及其子路径。internal为调用方（即传入的context）对应路径，"internal://cache"对应context.cacheDir。
       * 
       * 例如："internal://cache/path/to/file.txt"。
       * 
       * - 应用沙箱目录，只支持到base及其子目录下。
       * 
       * 例如："/data/storage/el1/base/path/to/file.txt"。
       * 
       * - file协议路径，必须匹配应用包名，只支持到base及其子目录下。
       * 
       * 例如："file://com.example.test/data/storage/el2/base/file.txt"。
       * 
       * - 用户公共文件，仅支持上传任务。
       * 
       * 例如："file://media/Photo/path/to/file.img"。仅支持前台任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      path: string;
      /**
       * 文件的mimeType，通过文件名获取，默认值为文件名后缀。
       * 
       * 从 API version 18 开始废弃，建议使用contentType替代。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamiconly
       * @deprecated since 18
       * @useinstead request.agent.FileSpec.contentType
       */
      mimeType?: string;
      /**
       * 文件名，默认值通过路径获取。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      filename?: string;
      /**
       * 文件信息的附加内容，该参数不会体现在HTTP请求中。默认值为空。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      extras?: object;
      /**
       * The extras for the file information.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      extras?: Record<string, string>;
      /**
       * 文件内容类型，默认值为文件名后缀。该选项会被填写到HTTP表单指定的Content-Type字段中。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 18 dynamic
       * @since 23 static
       */
      contentType?: string;
    }

    /**
     * 任务的表单项信息。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface FormItem {
      /**
       * 表单参数名。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      name: string;
      /**
       * 表单参数值。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      value: string | FileSpec | Array<FileSpec>;
    }

    /**
     * 通知栏自定义信息。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    interface Notification {
      /**
       * 通知栏自定义标题。若不设置则使用默认显示方式。title长度上限为1024B。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      title?: string;
      /**
       * 通知栏自定义正文。若不设置则使用默认显示方式。text长度上限为3072B。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      text?: string;
      /**
       * Disables the notification.
       * If the value is false, a notification will be displayed, otherwise nothing will be displayed.
       * If not specified, the value is false.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 20 dynamic
       * @since 23 static
       */
      disable?: boolean;
      /**
       * 设置任务的通知栏显示方式，通过[VISIBILITY常量](docroot://reference/apis-basic-services-kit/js-apis-request.md#常量-1)的位运算方式决定显示方式，
       * 任务通知的显示方式，包括如下几种：
       * 
       * - 仅显示完成通知，参数为VISIBILITY_COMPLETION或1，任务完成/失败后展示对应通知。
       * - 仅显示进度通知，参数为VISIBILITY_PROGRESS或2，任务在进行中显示进度通知，当任务下载成功/失败后会直接退出进度通知，不会显示完成通知。
       * - 显示进度通知/完成通知，参数为VISIBILITY_COMPLETION | VISIBILITY_PROGRESS或3，任务在进行中显示进度通知，当任务下载成功/失败后会退出进度通知，并显示完成通知。
       * 
       * 若不设置该参数，则根据gauge字段来判断；若无gauge字段，则仅显示完成通知。
	   *
	   * The value should be an integer.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 21 dynamic
       * @since 23 static
       */
      visibility?: int;
      /**
       * 通知参数，用于实现点击任务通知后跳转的功能。默认值为空。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 22 dynamic
       * @since 23 static
       */
      wantAgent?: WantAgent;
    }

    /**
     * 任务的最低限速配置。若任务速度持续低于设定值并达到指定时长，则任务失败，失败原因为
     * [LOW_SPEED]{@link request.agent.Faults}。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface MinSpeed {
      /**
       * 任务最低速度，单位为字节每秒（B/s）。若任务速度持续低于该值达到指定时长，则任务失败。设置为0表示不启用最低速度限制。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      speed: long;
      /**
       * 允许低于最低速度的持续时间，单位为秒。若任务速度持续低于设定值达到该时长，则任务失败。设置为0表示不启用最低速度限制。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      duration: int;
    }

    /**
     * 任务的超时配置。任务处于等待状态的时间不参与计算，上传下载任务会存在以下任务等待的原因:
     * [WaitingReason<sup>20+</sup>]{@link request.agent.WaitingReason}
     * 。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface Timeout {
      /**
       * 任务连接超时时间，单位为秒。连接超时是指客户端与服务器建立连接的最大耗时。若不设置则使用默认值60秒，允许设置的最小值为1秒。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      connectionTimeout?: int;
      /**
       * 任务总超时时间，单位为秒。总超时包括建立连接、发送请求和接收响应的全部时间。未指定时使用默认值604800秒（1周）。允许设置的最小值为1秒，最大值为604800秒（1周）。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      totalTimeout?: int;
    }

    /**
     * 上传/下载任务的配置信息。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface Config {
      /**
       * 任务操作选项。
       * 
       * - UPLOAD表示上传任务。
       * - DOWNLOAD表示下载任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      action: Action;
      /**
       * 资源地址。从API 6到API 14，最大长度为2048个字符；从API 15开始，最大长度为8192个字符。支持
       * [HTTP拦截](docroot://basic-services/request/app-file-upload-download.md#http拦截)功能。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      url: string;
      /**
       * 任务标题，其最大长度为256个字符，默认值为小写的 upload 或 download，与上面的 action 保持一致。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      title?: string;
      /**
       * 任务的详细信息，其最大长度为1024个字符，默认值为空字符串。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      description?: string;
      /**
       * 任务模式，默认为后台任务。从API version 20开始，下载到用户文件场景必须为request.agent.Mode.FOREGROUND。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      mode?: Mode;
      /**
       * 下载过程中路径已存在时的解决方案选择，默认为false。
       * 
       * - true，覆盖已存在的文件。
       * - false，下载失败。
       * 
       * 从API version 20开始，下载到用户文件场景必须为true。
       * 
       * 设置为 `true` 时，不建议创建多个任务同时往同一个文件下载内容，会导致文件内容混乱。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      overwrite?: boolean;
      /**
       * 上传或下载HTTP的标准方法，包括GET、POST和PUT，不区分大小写。
       * 
       * - 上传时，使用PUT或POST，默认值为PUT。
       * - 下载时，使用GET或POST，默认值为GET。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      method?: string;
      /**
       * 添加要包含在任务中的HTTP协议标志头。
       * 
       * - 上传请求，默认的Content-Type为"multipart/form-data"。
       * - 下载请求，默认的Content-Type为"application/json"。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      headers?: object;
      /**
       * The HTTP headers.
       * For upload request, the `Content-Type` is forced to `multipart/form-data`.
       * For download request, the default `Content-Type` is `application/json`.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      headers?: Record<string, string>;
      /**
       * - 下载时，data为字符串类型，通常情况下使用json格式（object将被转换为json文本），默认为空。
       * - 上传时，data是表单项数组Array<
       * [FormItem]{@link request.agent.FormItem}>。从API version
       * 15开始，创建单个任务可以上传最多100个文件。默认为空。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      data?: string | Array<FormItem>;
      /**
       * 保存下载文件的路径，包括如下几种：
       * 
       * - 相对路径，位于调用方的缓存路径下，如"./xxx/yyy/zzz.html"、"xxx/yyy/zzz.html"。
       * - internal协议路径，支持"internal://"及其子路径，internal为调用方（传入的context）对应路径，"internal://cache"对应context.cacheDir。如"
       * internal://cache/path/to/file.txt"。
       * - 应用沙箱目录，只支持到base及其子目录下，如"/data/storage/el1/base/path/to/file.txt"。
       * - file协议路径，支持应用文件和用户文件，应用文件必须匹配应用包名，只支持到base及其子目录下，如"file://com.example.test/data/storage/el2/base/file.txt"。用户
       * 文件必须为调用方创建好的用户文件uri。
       * 
       * 从API version 20开始，除[下载网络资源文件至用户文件](docroot://basic-services/request/app-file-upload-download.md#下载网络资源文件至用户文件)外
       * ，其他可默认为调用方（即传入的context）对应的缓存路径。默认文件名从url的最后一个"/"后截取。
       *
       * @default ./
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      saveas?: string;
      /**
       * 网络选项，当前支持无线网络WIFI和蜂窝数据网络CELLULAR，默认为ANY（WIFI或CELLULAR）。
       *
       * @default Network.ANY
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      network?: Network;
      /**
       * 是否允许在按流量计费的网络中工作，默认为false。
       * 
       * - true：是 
       * - false：否
       *
       * @default false
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      metered?: boolean;
      /**
       * 是否允许在漫游网络中工作，默认为true。
       * 
       * - true：是 
       * - false：否
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      roaming?: boolean;
      /**
       * 是否为后台任务启用自动重试，仅应用于后台任务，默认为true。
       * 
       * - true：是 
       * - false：否
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      retry?: boolean;
      /**
       * 是否允许重定向，默认为true。
       * 
       * - true：是 
       * - false：否
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      redirect?: boolean;
      /**
       * 设置代理地址，其最大长度为512个字符，默认为空。
       * 
       * 代理地址格式:"http://<domain or address>:<port>"
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 12 dynamic
       * @since 23 static
       */
      proxy?: string;
      /**
       * 任务的路径索引，通常情况下用于任务断点续传，默认为0。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      index?: int;
      /**
       * 文件起点，单位为字节（B），通常情况下用于断点续传。默认值为0，取值为闭区间，表示从头开始传输。
       * 
       * - 下载时，请求读取服务器开始下载文件时的起点位置（HTTP协议中设置"Range"选项）。
       * - 上传时，读取需上传的文件的起点位置。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      begins?: long;
      /**
       * 文件终点，单位为字节（B），通常情况下用于断点续传。默认值为-1，取值为闭区间，表示传输到整个文件末尾结束。
       * 
       * - 下载时，请求读取服务器开始下载文件时的结束位置（HTTP协议中设置"Range"选项）。
       * - 上传时，读取需上传的文件的结束位置。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      ends?: long;
      /**
       * 后台任务的过程进度通知策略，仅应用于后台任务，默认值为false。
       * 
       * - false：代表仅完成或失败的通知。
       * - true：发出每个进度已完成或失败的通知。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      gauge?: boolean;
      /**
       * - 如果设置为true，在上传/下载无法获取文件大小时任务失败。
       * - 如果设置为false，将文件大小设置为-1时任务继续。
       * 
       * 默认值为false。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      precise?: boolean;
      /**
       * 任务令牌。查询带有token的任务需提供token并通过
       * [request.agent.touch]{@link request.agent.touch(id: string, token: string, callback: AsyncCallback<TaskInfo>)}查询，否则无
       * 法查询到指定任务。其最小为8个字节，最大为2048个字节。默认为空。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      token?: string;
      /**
       * 任务的优先级。前台任务的优先级比后台任务高。任务模式相同的情况下，该配置项的数字越小优先级越高，默认值为0。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11 dynamic
       * @since 23 static
       */
      priority?: int;
      /**
       * 配置的附加功能，默认为空。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      extras?: object;
      /**
       * The extras for the configuration.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      extras?: Record<string, string>;
      /**
       * 是否使用单个请求进行上传，单个请求上传时必定使用multipart/form-data。
       * 
       * - false：每个文件使用一个请求传输。 
       * - true：使用多文件单请求上传。 
       * 
       * 默认值为false。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      multipart?: boolean;
      /**
       * 通知栏自定义设置。默认值为`{}`。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      notification?: Notification;
      /**
       * 最低限速自定义设置，默认不启用最低限速。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      minSpeed?: MinSpeed;
      /**
       * 超时时间自定义设置，连接超时时间默认60秒，总超时时间默认604800秒（1周）。当retry参数为true时，
       * [timeout]{@link request.agent.Timeout}事件会触发立即重试，导致
       * [timeout]{@link request.agent.Timeout}在外部观察中被重试动作所掩盖，但
       * 内部[timeout]{@link request.agent.Timeout}条件已实际触发。若需显性观察
       * [timeout]{@link request.agent.Timeout}事件，需关闭retry参数。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      timeout?: Timeout;
    }

    /**
     * 定义任务当前的状态。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    enum State {
      /**
       * 表示通过配置信息（[Config]{@link request.agent.Config}）创建的任务已初始
       * 化。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      INITIALIZED = 0x00,
      /**
       * 表示任务缺少运行或重试的资源，又或是网络状态不匹配。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      WAITING = 0x10,
      /**
       * 表示任务正在运行中。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      RUNNING = 0x20,
      /**
       * 表示任务至少失败一次，现在正在再次处理中。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      RETRYING = 0x21,
      /**
       * 表示任务暂停，通常后续会恢复任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      PAUSED = 0x30,
      /**
       * 表示任务停止。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      STOPPED = 0x31,
      /**
       * 表示任务完成。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      COMPLETED = 0x40,
      /**
       * 表示任务失败。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      FAILED = 0x41,
      /**
       * 表示任务移除。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      REMOVED = 0x50
    }

    /**
     * 任务进度的数据结构。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface Progress {
      /**
       * 任务当前的状态。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly state: State;
      /**
       * 任务中当前正在处理的文件索引。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly index: int;
      /**
       * 任务中当前文件的已处理数据大小，单位为字节（B）。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly processed: long;
      /**
       * 任务中文件的大小，单位为字节（B）。在下载过程中，若服务器使用chunk方式传输导致无法从请求头中获取文件总大小时，sizes为 -1。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly sizes: Array<long>;
      /**
       * 交互的额外内容，例如：来自服务器的响应的header和body。默认值为空。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      readonly extras?: object;
      /**
       * The extras for an interaction.
       * Such as headers and body of response from server.
       * But when the Content-Disposition header responded,
       * <br>the body will be into the uri of its attachment only, the body here is empty.
       * {"headers": {"key": v}, "body": "contents"}.
       * The "body" field is not supported in cross-platform scenarios.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      readonly extras?: Record<string, string>;
    }

    /**
     * 定义任务失败的原因。
     * 
     * > **说明：**
     * >
     * > API version 12及以下版本，只支持串行的尝试连接域名相关ip，且不支持单个ip的连接时间控制，如果DNS返回的首个ip是阻塞的，可能会导致握手超时，进而引发TIMEOUT错误。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    enum Faults {
      /**
       * 表示其他故障。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      OTHERS = 0xFF,
      /**
       * 表示网络断开连接。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      DISCONNECTED = 0x00,
      /**
       * 表示任务超时。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      TIMEOUT = 0x10,
      /**
       * 表示协议错误，例如：服务器内部错误（500）、无法处理的数据区间（416）等。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      PROTOCOL = 0x20,
      /**
       * 表示参数错误，例如：url格式错误等。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      PARAM = 0x30,
      /**
       * 表示文件系统io错误，例如：打开/查找/读取/写入/关闭。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      FSIO = 0x40,
      /**
       * 表示DNS解析错误。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      DNS = 0x50,
      /**
       * 表示TCP连接错误。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      TCP = 0x60,
      /**
       * 表示SSL连接错误，例如：证书错误、证书校验失败错误等。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      SSL = 0x70,
      /**
       * 表示重定向错误。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      REDIRECT = 0x80,
      /**
       * 表示任务速度过低。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      LOW_SPEED = 0x90
    }

    /**
     * 过滤条件。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface Filter {
      /**
       * Specify the package name of an application.
       * Only for advanced search, common search will be fixed to the caller.
       * A "*" means any bundle.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 10 dynamic
       * @since 23 static
       */
      bundle?: string;
      /**
       * 结束的Unix时间戳（毫秒），默认为调用时刻。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      before?: long;
      /**
       * 开始的Unix时间戳（毫秒），默认值为调用时刻减24小时。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      after?: long;
      /**
       * 指定任务的状态。如果未填写，则查询所有任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      state?: State;
      /**
       * 任务操作选项。
       * 
       * - UPLOAD表示上传任务。
       * - DOWNLOAD表示下载任务。
       * - 如果未填写，则查询所有任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      action?: Action;
      /**
       * 任务模式。
       * 
       * - FOREGROUND表示前台任务。
       * - BACKGROUND表示后台任务。
       * - 如果未填写，则查询所有任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      mode?: Mode;
    }

    /**
     * 查询结果的任务信息数据结构，提供普通查询和系统查询，两种字段的可见范围不同。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface TaskInfo {
      /**
       * The UID of an application.
       * For system query only.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 10 dynamic
       * @since 23 static
       */
      readonly uid?: string;
      /**
       * The bundle name.
       * For system query only.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 10 dynamic
       * @since 23 static
       */
      readonly bundle?: string;
      /**
       * 保存下载文件的路径。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly saveas?: string;
      /**
       * 任务的url。
       * 
       * - 通过[request.agent.show]{@link request.agent.show(id: string)}、
       * [request.agent.touch]{@link request.agent.touch(id: string, token: string)}进行查询
       * 。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly url?: string;
      /**
       * 任务值。
       * 
       * - 通过[request.agent.show]{@link request.agent.show(id: string)}、
       * [request.agent.touch]{@link request.agent.touch(id: string, token: string)}进行查询
       * 。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly data?: string | Array<FormItem>;
      /**
       * 任务id。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly tid: string;
      /**
       * 任务标题。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly title: string;
      /**
       * 任务描述。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly description: string;
      /**
       * 任务操作选项。
       * 
       * - UPLOAD表示上传任务。
       * - DOWNLOAD表示下载任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly action: Action;
      /**
       * 任务模式。
       * 
       * - FOREGROUND表示前台任务。
       * - BACKGROUND表示后台任务。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly mode: Mode;
      /**
       * 任务的优先级。前台任务的优先级比后台任务高。任务模式相同的情况下，该配置项的数字越小优先级越高，默认值为0。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11 dynamic
       * @since 23 static
       */
      readonly priority: int;
      /**
       * 任务配置中的mimetype。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly mimeType: string;
      /**
       * 任务的过程进度。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly progress: Progress;
      /**
       * 后台任务的进度通知策略。
       * 
       * - false：代表仅完成或失败的通知。
       * - true，发出每个进度已完成或失败的通知。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10 dynamic
       * @since 23 static
       */
      readonly gauge: boolean;
      /**
       * 创建任务的Unix时间戳（毫秒），由当前设备的系统生成。
       * 
       * 说明：使用
       * [request.agent.search]{@link request.agent.search(filter: Filter, callback: AsyncCallback<Array<string>>)}进行
       * 查询时，该值需处于[after,before]区间内才可正常查询到任务id，before和after信息详见
       * [Filter]{@link request.agent.Filter}。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly ctime: long;
      /**
       * 任务状态改变时的Unix时间戳（毫秒），由当前设备的系统生成。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly mtime: long;
      /**
       * 任务的重试开关，仅应用于后台任务。
       * 
       * - true：是 
       * - false：否
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10 dynamic
       * @since 23 static
       */
      readonly retry: boolean;
      /**
       * 任务的尝试次数。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10 dynamic
       * @since 23 static
       */
      readonly tries: int;
      /**
       * 任务的失败原因。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly faults: Faults;
      /**
       * 等待/失败/停止/暂停任务的原因。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly reason: string;
      /**
       * 任务的额外部分。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @since 10 dynamic
       */
      readonly extras?: object;
      /**
       * The extras of a task.
       * For frontend, nothing now.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      readonly extras?: Record<string, string>;
    }

    /**
     * 任务响应头的数据结构。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    interface HttpResponse {
      /**
       * Http版本。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      readonly version: string,
      /**
       * Http响应状态码。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      readonly statusCode: int,
      /**
       * Http响应原因。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      readonly reason: string,
      /**
       * Http响应头部。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      readonly headers: Map<string, Array<string>>,
    }

    /**
     * 枚举，定义任务等待的原因。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    enum WaitingReason {
      /**
       * 表示任务因任务队列已满而进入等待状态。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      TASK_QUEUE_FULL = 0x00,
      /**
       * 表示任务因所需网络条件不满足而进入等待状态。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      NETWORK_NOT_MATCH = 0x01,
      /**
       * 表示任务因应用长时间处于后台而进入等待状态。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      APP_BACKGROUND = 0x02,
      /**
       * 表示任务因所属用户处于非激活状态而进入等待状态。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      USER_INACTIVATED = 0x03,
    }

    /**
     * The callback function for the download progress event.
     *
     * @param { Progress } progress - callback function with a `Progress` argument.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 static
     */
    export type ProgressCallback = (progress: Progress) => void;

    /**
     * 上传或下载任务。使用该方法前需要先获取Task对象，promise形式通过
     * [request.agent.create]{@link request.agent.create(context: BaseContext, config: Config)}获取，
     * callback形式通过
     * [request.agent.create]{@link request.agent.create(context: BaseContext, config: Config, callback: AsyncCallback<Task>)}获取。
     * 
     * > **说明：**
     * >
     * > Task对象及其挂载回调函数会在调用remove方法后释放并被系统自动回收。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    interface Task {
      /**
       * 任务id，由系统自动生成且唯一。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      readonly tid: string;
      /**
       * 任务的配置信息。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      config: Config;
      /**
       * 订阅任务进度的事件，使用callback异步回调。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'progress' } event - 订阅的事件类型。<br>- 取值为'progress'，表示任务进度，任务进度有进展时触发该事件。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - task mode error. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      on(event: 'progress', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onProgress(callback: ProgressCallback): void;
      /**
       * 取消订阅任务进度事件。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'progress' } event - 取消订阅的事件类型。<br>- 取值为'progress'，表示任务进度。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有进度回调函数。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - task mode error. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      off(event: 'progress', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offProgress(callback?: ProgressCallback): void;
      /**
       * 订阅任务完成事件，使用callback异步回调。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'completed' } event - 订阅的事件类型。<br>- 取值为'completed'，表示任务完成，任务完成时触发该事件。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - task mode error. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      on(event: 'completed', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onCompleted(callback: ProgressCallback): void;
      /**
       * 取消订阅任务完成事件。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'completed' } event - 取消订阅的事件类型。<br>- 取值为'completed'，表示任务完成。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有完成回调函数。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      off(event: 'completed', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offCompleted(callback?: ProgressCallback): void;
      /**
       * 订阅任务失败事件，使用callback异步回调。可通过调用
       * [request.agent.show]{@link request.agent.show(id: string)}查看错误原因
       * 。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'failed' } event - 订阅的事件类型。<br>- 取值为'failed'，表示任务失败，任务失败时触发该事件。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      on(event: 'failed', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onFailed(callback: ProgressCallback): void;
      /**
       * 取消订阅任务失败事件。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'failed' } event - 取消订阅的事件类型。<br>- 取值为'failed'，表示任务失败。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有失败回调函数。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       */
      off(event: 'failed', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offFailed(callback?: ProgressCallback): void;
      /**
       * 订阅任务暂停事件，使用callback异步回调。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'pause' } event - 订阅的事件类型。<br>- 取值为'pause'，表示任务已暂停，任务暂停时触发该事件。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      on(event: 'pause', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onPause(callback: ProgressCallback): void;
      /**
       * 取消订阅任务暂停事件。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'pause' } event - 取消订阅的事件类型。<br>- 取值为'pause'，表示任务暂停。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有暂停回调函数。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      off(event: 'pause', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offPause(callback?: ProgressCallback): void;
      /**
       * 订阅任务恢复事件，使用callback异步回调。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'resume' } event - 订阅的事件类型。<br>- 取值为'resume'，表示任务恢复，任务恢复时触发该事件。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      on(event: 'resume', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onResume(callback: ProgressCallback): void;
      /**
       * 取消订阅任务恢复事件。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'resume' } event - 取消订阅的事件类型。<br>- 取值为'resume'，表示任务恢复。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有恢复回调函数。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      off(event: 'resume', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offResume(callback?: ProgressCallback): void;
      /**
       * 订阅任务移除事件，使用callback异步回调。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'remove' } event - 订阅的事件类型。<br>- 取值为'remove'，表示任务被移除，任务移除时触发该事件。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      on(event: 'remove', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onRemove(callback: ProgressCallback): void;
      /**
       * 取消订阅任务移除事件。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'remove' } event - 取消订阅的事件类型。<br>- 取值为'remove'，表示任务被移除。
       * @param { function } callback - 回调函数，发生相关的事件时触发该回调方法。若无此参数，则取消订阅的所有移除回调函数。
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 
       *     <br> 1. Mandatory parameters are left unspecified.
       *     <br> 2. Incorrect parameter types.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 11 dynamic
       */
      off(event: 'remove', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offRemove(callback?: ProgressCallback): void;
      /**
       * 订阅任务响应头，使用callback异步回调。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'response' } event - 订阅的事件类型。<br>- 取值为'response'，表示任务响应，请求接收到响应时触发该事件。
       * @param { Callback<HttpResponse> } callback - 回调函数，发生相关的事件时触发该回调方法，返回任务响应头的数据结构。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       */
      on(event: 'response', callback: Callback<HttpResponse>): void;
      /**
       * Enables the response callback.
       *
       * @param { Callback<HttpResponse> } callback - callback function with an `HttpResponse` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onResponse(callback: Callback<HttpResponse>): void;
      /**
       * 取消订阅任务响应事件。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'response' } event - 取消订阅的事件类型。<br>- 取值为'response'，表示任务响应。
       * @param { Callback<HttpResponse> } callback - 需要取消订阅的回调函数。若无此参数，则取消订阅当前类型的所有回调函数。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @atomicservice
       * @since 12 dynamic
       */
      off(event: 'response', callback?: Callback<HttpResponse>): void;
      /**
       * Disables the response callback.
       *
       * @param { Callback<HttpResponse> } [callback] - callback function with an `HttpResponse` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offResponse(callback?: Callback<HttpResponse>): void;
      /**
       * 订阅任务失败原因，使用callback形式返回结果。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'faultOccur' } event - 订阅的事件类型。<br>- 取值为'faultOccur'，表示任务失败。
       * @param { Callback<Faults> } callback - 发生相关的事件时触发该回调方法，返回任务失败的原因。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      on(event: 'faultOccur', callback: Callback<Faults>): void;
      /**
       * Enables the 'faultOccur' callback.
       * This callback is triggered when the task failed.
       * The returned `Faults` will contain the reason why the task failed.
       *
       * @param { Callback<Faults> } callback - callback function with a `Faults` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onFaultOccur(callback: Callback<Faults>): void;
      /**
       * 取消订阅任务失败原因相关的事件。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'faultOccur' } event - 订阅的事件类型。<br>- 取值为'faultOccur'，表示任务失败。
       * @param { Callback<Faults> } callback - 需要取消订阅的回调函数。若无此参数，则默认取消订阅当前类型的所有回调函数。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      off(event: 'faultOccur', callback?: Callback<Faults>): void;
      /**
       * Disables the 'faultOccur' callback.
       *
       * @param { Callback<Faults> } [callback] - callback function with a `Faults` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offFaultOccur(callback?: Callback<Faults>): void;
      /**
       * 订阅任务等待原因，使用callback形式返回结果。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'wait' } event - 订阅的事件类型。<br>- 取值为'wait'，表示任务等待。
       * @param { Callback<WaitingReason> } callback - 发生相关的事件时触发该回调方法，返回任务等待的原因。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      on(event: 'wait', callback: Callback<WaitingReason>): void;
      /**
       * Enables the wait callback.
       * This callback is triggered when the task changes from other states to the waiting state.
       * The returned `WaitingReason` will contain the reason why the task enters waiting state.
       *
       * @param { Callback<WaitingReason> } callback - callback function with an `WaitingReason` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onWait(callback: Callback<WaitingReason>): void;
      /**
       * 取消订阅任务等待原因相关的事件。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @param { 'wait' } event - 订阅的事件类型。<br>- 取值为'wait'，表示任务等待。
       * @param { Callback<WaitingReason> } callback - 需要取消订阅的回调函数。若无此参数，则默认取消订阅当前类型的所有回调函数。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      off(event: 'wait', callback?: Callback<WaitingReason>): void;
      /**
       * Disables the wait callback.
       *
       * @param { Callback<WaitingReason> } [callback] - callback function with an `WaitingReason` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offWait(callback?: Callback<WaitingReason>): void;
      /**
       * 启动一个任务。使用callback异步回调。
       * 
       * 以下状态的任务可以被启动：
       * 
       * 1. 刚被request.agent.create接口创建的任务。
       * 2. 使用request.agent.create接口创建的已经失败或者停止的下载任务。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @permission ohos.permission.INTERNET
       * @param { AsyncCallback<void> } callback - 回调函数。当开启任务成功，err为undefined，否则为错误对象。
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      start(callback: AsyncCallback<void>): void;
      /**
       * 启动一个任务。使用Promise异步回调。
       * 
       * 以下状态的任务可以被启动：
       * 
       * 1. 刚被request.agent.create接口创建的任务。
       * 2. 使用request.agent.create接口创建的已经失败或者停止的下载任务。
       * 
       * > **说明：**
       * >
       * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
       *
       * @permission ohos.permission.INTERNET
       * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      start(): Promise<void>;
      /**
       * 暂停任务，可以暂停正在等待/正在运行/正在重试的任务，已暂停的任务可被
       * [resume]{@link request.agent.Task.resume(callback: AsyncCallback<void>)}恢复。使用callback异步回调。
       *
       * @param { AsyncCallback<void> } callback - 回调函数。当暂停任务成功，err为undefined，否则为错误对象。
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 10 dynamic
       * @since 23 static
       */
      pause(callback: AsyncCallback<void>): void;
      /**
       * 暂停任务，可以暂停正在等待/正在运行/正在重试的任务，已暂停的任务可被
       * [resume]{@link request.agent.Task.resume(callback: AsyncCallback<void>)}恢复。使用Promise异步回调。
       *
       * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 10 dynamic
       * @since 23 static
       */
      pause(): Promise<void>;
      /**
       * 重新启动任务，可以恢复被暂停的任务。使用callback异步回调。
       *
       * @permission ohos.permission.INTERNET
       * @param { AsyncCallback<void> } callback - 回调函数。当重新启动任务成功，err为undefined，否则为错误对象。
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 10 dynamic
       * @since 23 static
       */
      resume(callback: AsyncCallback<void>): void;
      /**
       * 重新启动任务，可以恢复被暂停的任务。使用Promise异步回调。
       *
       * @permission ohos.permission.INTERNET
       * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode. [since 10 - 10]
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 20]
       * @since 10 dynamic
       * @since 23 static
       */
      resume(): Promise<void>;
      /**
       * 停止任务，可以停止正在运行/正在等待/正在重试的任务，已停止的任务可被
       * [start]{@link request.agent.Task.start(callback: AsyncCallback<void>)}恢复。使用callback异步回调。
       *
       * @param { AsyncCallback<void> } callback - 回调函数。当停止任务成功，err为undefined，否则为错误对象。
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      stop(callback: AsyncCallback<void>): void;
      /**
       * 停止任务，可以停止正在运行/正在等待/正在重试的任务，已停止的任务可被
       * [start]{@link request.agent.Task.start(callback: AsyncCallback<void>)}恢复。使用Promise异步回调。
       *
       * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform [since 11]
       * @atomicservice [since 11]
       * @since 10 dynamic
       * @since 23 static
       */
      stop(): Promise<void>;
      /**
       * 设置任务每秒能传输的字节数上限。使用Promise异步回调。
       *
       * @param { long } speed - 设置任务每秒能传输的字节数上限，单位为字节（B），最小值为16384字节，同时该值不得低于
       *     [MinSpeed]{@link request.agent.MinSpeed}设置的最低速度。
       * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
       * @throws { BusinessError } 401 - Parameter error. Possible causes:
       *     <br> 1. Missing mandatory parameters.
       *     <br> 2. Incorrect parameter type.
       *     <br> 3. Parameter verification failed.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 18 dynamic
       * @since 23 static
       */
      setMaxSpeed(speed: long): Promise<void>;
    }

    /**
     * 创建需要上传或下载的任务，并将其排入队列。支持HTTP/HTTPS协议，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
     *
     * @permission ohos.permission.INTERNET
     * @param { BaseContext } context - 基于应用程序的上下文。
     * @param { Config } config - 上传/下载任务的配置信息。
     * @param { AsyncCallback<Task> } callback - 回调函数。当创建上传或下载任务成功，err为undefined，data为获取到的Task对象；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400001 - Invalid file or file system error.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900004 - The application task queue is full.
     * @throws { BusinessError } 21900005 - Operation with wrong task mode.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function create(context: BaseContext, config: Config, callback: AsyncCallback<Task>): void;

    /**
     * 创建需要上传或下载的任务，并将其排入队列。支持HTTP/HTTPS协议，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。
     *
     * @permission ohos.permission.INTERNET
     * @param { BaseContext } context - 基于应用程序的上下文。
     * @param { Config } config - 上传/下载任务的配置信息。
     * @returns { Promise<Task> } Promise对象。返回任务配置信息的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400001 - Invalid file or file system error.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900004 - The application task queue is full.
     * @throws { BusinessError } 21900005 - Operation with wrong task mode.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function create(context: BaseContext, config: Config): Promise<Task>;

    /**
     * 根据任务id查询任务。使用Promise异步回调。
     *
     * @param { BaseContext } context - 基于应用程序的上下文。
     * @param { string } id - 任务id。
     * @param { string } token - 任务查询token。默认值为空。
     * @returns { Promise<Task> } Promise对象。返回任务配置信息的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 11 dynamic
     * @since 23 static
     */
    function getTask(context: BaseContext, id: string, token?: string): Promise<Task>;

    /**
     * 移除属于调用方的指定任务，如果正在处理中，该任务将被迫停止。使用callback异步回调。在调用后任务对象和其回调函数会被释放。
     *
     * @param { string } id - 任务id。
     * @param { AsyncCallback<void> } callback - 回调函数。当移除指定任务成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function remove(id: string, callback: AsyncCallback<void>): void;

    /**
     * 移除属于调用方的指定任务，如果正在处理中，该任务将被迫停止。使用Promise异步回调。在调用后任务对象和其回调函数会被释放。
     *
     * @param { string } id - 任务id。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function remove(id: string): Promise<void>;

    /**
     * 根据任务id查询任务的详细信息。使用callback异步回调。
     *
     * @param { string } id - 任务id。
     * @param { AsyncCallback<TaskInfo> } callback - 回调函数。当查询任务操作成功，err为undefined，data为查询到的任务TaskInfo信息；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function show(id: string, callback: AsyncCallback<TaskInfo>): void;

    /**
     * 根据任务id查询任务的详细信息。使用Promise异步回调。
     *
     * @param { string } id - 任务id。
     * @returns { Promise<TaskInfo> } Promise对象。返回任务详细信息TaskInfo的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function show(id: string): Promise<TaskInfo>;

    /**
     * 根据任务id和token查询任务的详细信息。使用callback异步回调。
     *
     * @param { string } id - 任务id。
     * @param { string } token - 任务查询token。
     * @param { AsyncCallback<TaskInfo> } callback - 回调函数。当查询任务操作成功，err为undefined，data为查询到的任务TaskInfo信息；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function touch(id: string, token: string, callback: AsyncCallback<TaskInfo>): void;

    /**
     * 根据任务id和token查询任务的详细信息。使用Promise异步回调。
     *
     * @param { string } id - 任务id。
     * @param { string } token - 任务查询token。
     * @returns { Promise<TaskInfo> } Promise对象。返回任务详细信息TaskInfo的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function touch(id: string, token: string): Promise<TaskInfo>;

    /**
     * 根据默认[Filter]{@link request.agent.Filter}过滤条件查找任务id，即查询调用
     * 时刻至24小时前的所有任务的任务id。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<string>> } callback - 回调函数。当根据过滤条件查找任务成功，err为undefined，data为满足条件的任务id；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Incorrect parameter type.
     *     <br> 2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function search(callback: AsyncCallback<Array<string>>): void;

    /**
     * 根据[Filter]{@link request.agent.Filter}过滤条件查找任务id。使用
     * callback异步回调。
     *
     * @param { Filter } filter - 过滤条件。
     * @param { AsyncCallback<Array<string>> } callback - 回调函数。当根据过滤条件查找任务成功，err为undefined，data为满足条件的任务id；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Incorrect parameter type.
     *     <br> 2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function search(filter: Filter, callback: AsyncCallback<Array<string>>): void;

    /**
     * 根据[Filter]{@link request.agent.Filter}过滤条件查找任务id。使用
     * Promise异步回调。
     *
     * @param { Filter } filter - 过滤条件。默认值为空。
     * @returns { Promise<Array<string>> } Promise对象。返回满足条件任务id的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Incorrect parameter type.
     *     <br> 2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    function search(filter?: Filter): Promise<Array<string>>;

    /**
     * Queries specified task details.
     * Creates a group based on GroupConfig
     *
     * @permission ohos.permission.DOWNLOAD_SESSION_MANAGER or ohos.permission.UPLOAD_SESSION_MANAGER
     * @param { string } id the task id.
     * @param { AsyncCallback<TaskInfo> } callback callback function with a `TaskInfo` argument for informations of the
     *     current task.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    function query(id: string, callback: AsyncCallback<TaskInfo>): void;

    /**
     * Queries specified task details.
     *
     * @permission ohos.permission.DOWNLOAD_SESSION_MANAGER or ohos.permission.UPLOAD_SESSION_MANAGER
     * @param { string } id the task id.
     * @returns { Promise<TaskInfo> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    function query(id: string): Promise<TaskInfo>;

    /**
     * 下载任务分组配置选项。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    interface GroupConfig {
      /**
       * 后台任务的进度通知策略。 
       * 
       * - true，显示进度、成功、失败通知。 
       * - false，仅显示成功、失败通知。
       * 
       * 默认为false。
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      gauge?: boolean;
      /**
       * 通知栏自定义设置。默认值为`{}`
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      notification: Notification;
    }

    /**
     * 根据[GroupConfig]{@link request.agent.GroupConfig}分组条件创建分组
     * ，并返回分组id。使用Promise异步回调。
     *
     * @param { GroupConfig } config - 下载任务分组选项。
     * @returns { Promise<string> } Promise对象。返回创建完成的分组id。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    function createGroup(config: GroupConfig): Promise<string>;

    /**
     * 向指定分组id中绑定多个下载任务id。使用Promise异步回调。
     * 
     * 如果任意一个任务id不满足添加条件，则所有列表中的任务都不会添加到分组中。
     *
     * @param { string } gid - 目标分组id。
     * @param { string[] } tids - 待绑定的任务id列表。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900005 - Operation with wrong task mode.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @throws { BusinessError } 21900007 - Operation with wrong task state.
     * @throws { BusinessError } 21900008 - Group deleted or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    function attachGroup(gid: string, tids: string[]): Promise<void>;

    /**
     * 移除指定分组，后续不能再往该分组中添加任务id。使用Promise异步回调。
     * 
     * 当分组中的所有任务处于完成、失败或移除状态，并且分组被移除时，显示该分组的完成或失败通知。
     *
     * @param { string } gid - 目标分组id。与创建的任务分组ID保持一致，即使用
     *     [request.agent.createGroup]{@link request.agent.createGroup(config: GroupConfig)}
     *     接口成功创建任务分组时的返回值。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900008 - Group deleted or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    function deleteGroup(gid: string): Promise<void>;
  }
}

export default request;