/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file 缓存下载
 * @kit BasicServicesKit
 */

import { BusinessError } from './@ohos.base';
import { Callback } from './@ohos.base';

/**
 * request部件主要给应用提供上传下载文件、后台传输代理的基础能力。
 * 
 * - request的cacheDownload子组件主要给应用提供应用资源提前缓存的基础能力。
 * - cacheDownload组件使用HTTP协议进行数据下载，并将数据资源缓存至应用内存或应用沙箱目录的指定文件中。
 * - 这些缓存数据可以被特定的ArkUI组件（例如：Image组件）使用，从而提升资源加载效率。请查看ArkUI组件文档确定组件是否支持该功能。
 *
 * @syscap SystemCapability.Request.FileTransferAgent
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace cacheDownload {
    /**
     * 表示安全通信协议的枚举。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 21 dynamic
     * @since 23 static
     */
    enum SslType {
        /**
         * 使用TLS安全通信协议。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 21 dynamic
         * @since 23 static
         */
        TLS = 'TLS',
        /**
         * 使用TLCP安全通信协议。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 21 dynamic
         * @since 23 static
         */
        TLCP = 'TLCP'
    }

    /**
     * 表示缓存刷新策略的枚举。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    enum CacheStrategy {
        /**
         * 强制更新缓存，无论缓存是否已经存在。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        FORCE = 0,
        /**
         * 延迟更新缓存，只有当缓存不存在时才会更新。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        LAZY = 1,
    }

    /**
     * 表示错误返回信息的特定类型枚举。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    enum ErrorCode {  
        /**
         * 表示未分类的其他类型错误。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        OTHERS = 0xFF,

        /**
         * 表示DNS相关错误。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        DNS = 0x00,

        /**
         * 表示TCP相关错误。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        TCP = 0x10,

        /**
         * 表示SSL相关错误。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        SSL = 0x20,
        
        /**
         * 表示HTTP相关错误。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        HTTP = 0x30,
    }

    /**
     * Task timeout configuration.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    interface TimeoutOptions {  
      /**
       * Network availability check timeout, in seconds.
       * The default value is 20.
       * The minimum value is 0.
       * The maximum value is 20.
       * When set to 0, no check will be performed.
	   * The value should be an integer.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
       */
      networkCheckTimeout?: int;
      /**
       * Complete HTTP request-response cycle timeout, in seconds.
       * The default value is 60.
       * The minimum value is 1.
       * The value should be an integer.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
       */
      httpTotalTimeout?: int;
    }
   
    /**
     * Task retry configuration.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    interface RetryOptions {
      /**
       * Maximum number of retry attempts.
       * The default value is 1.
       * The minimum value is 0.
       * The maximum value is 10.
       * When set to 0, no retries will be performed.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
       */
      maxRetryCount?: int;
    }

    /**
     * 缓存下载的配置选项。包括HTTP选项、传输选项和任务选项。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 18 dynamic
     * @since 23 static
     */
    interface CacheDownloadOptions {
        /**
         * 缓存下载任务在HTTP传输时使用的请求头。默认值为空。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 18 dynamic
         * @since 23 static
         */
        headers?: Record<string, string>;
        /**
         * 使用安全通信协议TLS或TLCP，默认使用TLS。当前TLS和TLCP均不支持双向认证。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 21 dynamic
         * @since 23 static
         */
        sslType?: SslType;
        /**
         * CA证书路径。目前仅支持.pem格式证书，默认使用系统预设的CA证书。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 21 dynamic
         * @since 23 static
         */
        caPath?: string;
        /**
         * 使用缓存刷新策略FORCE或LAZY，默认使用FORCE。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        cacheStrategy?: CacheStrategy;
        /**
         * Task retry configuration.
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        retry?: RetryOptions;
        /**
         * Task timeout configuration.
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        timeout?: TimeoutOptions;
    }

    /**
     * 预下载的资源信息。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface ResourceInfo {
        /**
         * 预下载资源解压后的大小，单位为字节（B）。当值为正整数时表示资源下载成功，-1表示下载失败。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly size: long;
    }

    /**
     * 预下载的网络信息。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface NetworkInfo {
        /**
         * 下载资源时使用的dns服务器列表。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly dnsServers: string[];
        /**
         * 下载资源时url的ip地址。当dns解析失败时，ip为undefined。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        readonly ip?: string;
    }

    /**
     * 预下载的性能信息。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface PerformanceInfo {
        /**
         * 从启动到dns解析完成所需的时间，单位：毫秒（ms）。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly dnsTime: double;
        /**
         * 从启动到tcp连接完成所需的时间，单位：毫秒（ms）。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly connectTime: double;
        /**
         * 从启动到tls连接完成所需的时间，单位：毫秒（ms）。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly tlsTime: double;
        /**
         * 从启动到开始发送第一个字节所需的时间，单位：毫秒（ms）。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly firstSendTime: double;
        /**
         * 从启动到接收第一个字节所需的时间，单位：毫秒（ms）。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly firstReceiveTime: double;
        /**
         * 从启动到完成请求所需的时间，单位：毫秒（ms）。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly totalTime: double;
        /**
         * 从启动到完成所有重定向步骤所需的时间，单位：毫秒（ms）。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly redirectTime: double;
    }

    /**
     * 预下载的下载信息。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface DownloadInfo {
        /**
         * 预下载的资源信息。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly resource: ResourceInfo;
        /**
         * 预下载的网络信息。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly network: NetworkInfo;
        /**
         * 预下载的性能信息。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly performance: PerformanceInfo;
    }

    /**
     * 预下载错误回调的返回信息。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    interface DownloadError {
        /**
         * 预下载错误回调返回的特定错误类型。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        readonly errorCode: ErrorCode;
        /**
         * 返回[通用错误码](docroot://reference/errorcode-universal.md)或
         * [HTTP错误码](docroot://reference/apis-network-kit/errorcode-net-http.md)。
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        readonly message: string;
    }

    /**
     * 启动一个缓存下载任务，若传输成功，则将数据下载到内存缓存和文件缓存中。
     * 
     * - 目标资源经过HTTP传输自动解压后的大小不能超过20971520B（即20MB），否则不会保存到内存缓存或文件缓存中。
     * - 在缓存下载数据时，如果在该url下已存在缓存内容，新的缓存内容会覆盖旧缓存内容。
     * - 目标资源在存储到内存缓存或文件缓存中时，依照缓存下载组件的各类型缓存大小上限决定文件是否存储到指定位置，并默认使用“LRU”（最近最少使用）方式替换已有缓存内容。
     * - 该方法为同步方法，不阻塞调用线程。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - 目标资源的地址。支持HTTP和HTTPS协议，长度不超过8192字节。
     * @param { CacheDownloadOptions } options - 目标资源的缓存下载选项。
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 18 dynamic
     * @since 23 static
     */
    function download(url: string, options: CacheDownloadOptions): void;

    /**
     * 根据url移除一个正在执行的缓存下载任务，已保存的内存缓存和文件缓存不会受到影响。
     * 
     * - 当不存在对应url的任务时无其他效果。
     * - 使用该方法同步执行时，不阻塞调用线程。
     *
     * @param { string } url - 目标资源的地址。支持HTTP和HTTPS协议，长度不超过8192字节。
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 18 dynamic
     * @since 23 static
     */
    function cancel(url: string): void;

    /**
     * 设置缓存下载组件能够保存的内存缓存上限。
     * 
     * - 使用该接口调整缓存大小时，默认使用“LRU”（最近最少使用）方式清除多余的已缓存的内存缓存内容。
     * - 该方法为同步方法，不阻塞调用线程。
     *
     * @param { long } bytes - 设置的缓存上限。默认值为0B，最大值不超过1073741824B（即1GB）。
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 18 dynamic
     * @since 23 static
     */
    function setMemoryCacheSize(bytes: long): void;

    /**
     * 设置缓存下载组件能够保存的文件缓存的上限。
     * 
     * - 使用该接口调整缓存大小时，默认使用“LRU”（最近最少使用）方式清除多余的已缓存的文件缓存内容。
     * - 使用该接口时，若bytes设置为0，将会删除所有缓存文件。
     * - 该方法为同步方法，不会阻塞调用线程。
     *
     * @param { long } bytes - 设置的缓存上限。默认值为104857600B（即100MB），最大值不超过4294967296B（即4GB）。
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     <br> 1. Missing mandatory parameters.
     *     <br> 2. Incorrect parameter type.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 18 dynamic
     * @since 23 static
     */
    function setFileCacheSize(bytes: long): void;

    /**
     * 基于url获取预下载的下载信息。信息存储在内存中的下载信息列表，当应用程序退出时清除。
     * 
     * - 如果下载信息列表中能够找到指定url，返回该url对应的最新[DownloadInfo]{@link cacheDownload.DownloadInfo}。
     * - 如果下载信息列表中找不到指定url，返回undefined。
     * - 在缓存下载信息时，如果在该url下已存在缓存信息，新的缓存内容会覆盖旧缓存。
     * - 目标信息在存储到内存时，使用“LRU”（最近最少使用）方式替换已存在的缓存数据。
     *
     * @permission ohos.permission.GET_NETWORK_INFO
     * @param { string } url - 待查询的url，最大长度为8192字节。
     * @returns { DownloadInfo | undefined } 返回对应url的下载信息，url未记录时返回undefined。
     * @throws { BusinessError } 201 - permission denied.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    function getDownloadInfo(url: string): DownloadInfo | undefined;

    /**
     * 设置下载信息列表的大小。
     * 
     * - 下载信息列表用于存储预下载信息。
     * - 下载信息和url一一对应，每次预下载都会生成一个下载信息，相同url下只会保存最新的下载信息。
     * - 使用该接口调整列表大小时，size更新增大，列表中原有的信息不变，更新减小，默认使用“LRU”（最近最少使用）方式清除多余的已缓存信息。
     *
     * @param { long } size - 设置的下载信息列表大小。取值范围：[0, 8192]，默认为0，表示不会存储任何下载信息。
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    function setDownloadInfoListSize(size: long): void;

    /**
     * 清除缓存下载内容的内存缓存。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function clearMemoryCache(): void;
   
    /**
     * 清除保存下载内容的文件缓存。
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function clearFileCache(): void;
    /**
     * 订阅预下载的完成事件。使用callback异步回调。
     *
     * @param { string } url - 待注册回调的url，url字符串的最大长度为8192字节。
     * @param { Callback<void> } callback - 回调函数。
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function onDownloadSuccess(url: string, callback: Callback<void>): void;

    /**
     * 订阅预下载的错误事件。使用callback异步回调。
     *
     * @param { string } url - 待注册回调的url，URL字符串的最大长度为8192字节。
     * @param { Callback<DownloadError> } callback - 回调函数，返回预下载的错误信息。
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function onDownloadError(url: string, callback: Callback<DownloadError>): void;

    /**
     * 取消订阅预下载的完成事件。使用callback异步回调。
     *
     * @param { string } url - 待注册回调的url，url字符串的最大长度为8192字节。
     * @param { Callback<void> } [callback] - 回调函数。若不填该参数，表示url下的所有完成回调函数。
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function offDownloadSuccess(url: string, callback?: Callback<void>): void;

    /**
     * 取消订阅预下载的错误事件。使用callback异步回调。
     *
     * @param { string } url - 待注册回调的url，url字符串最大长度为8192字节。
     * @param { Callback<DownloadError> } [callback] - 回调函数，返回预下载的错误信息。若不填该参数，表示url下的所有错误回调函数。
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function offDownloadError(url: string, callback?: Callback<DownloadError>): void;

    /**
     * Sets retry options for all tasks.
     * Used when task-specific retry configuration is not configured.
     *
     * @param { RetryOptions } [options] - Task retry configurations.
     *     <br>Default value: Refer to the default value of RetryOptions.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function setGlobalRetryOptions(options?: RetryOptions): void;
   
    /**
     * Sets timeout configuration for all tasks.
     * Used when task-specific timeout configuration is not configured.
     *
     * @param { TimeoutOptions } [options] - Task timeout configuration.
     *     <br>Default value: Refer to the default value of TimeoutOptions.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function setGlobalTimeoutOptions(options?: TimeoutOptions): void;
}

export default cacheDownload;