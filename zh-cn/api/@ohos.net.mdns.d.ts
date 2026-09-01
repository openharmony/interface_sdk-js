/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @file MDNS管理
 * @kit NetworkKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

import connection from './@ohos.net.connection';

import Context from './application/Context';

/**
 * MDNS即多播DNS（Multicast DNS），提供局域网内的本地服务添加、移除、发现、解析等能力。
 *
 * @syscap SystemCapability.Communication.NetManager.MDNS
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare namespace mdns {
  /**
   * 获取网络地址。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  type NetAddress = connection.NetAddress;

  /**
   * 添加一个MDNS服务，使用callback方式作为异步方法。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { LocalServiceInfo } serviceInfo - mDNS服务的信息。
   * @param { AsyncCallback<LocalServiceInfo> } callback - Callback used to return the result. If the operation is
   *     successful, **error** is **undefined** and **data** is the mDNS服务的信息。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  function addLocalService(context: Context, serviceInfo: LocalServiceInfo,
                           callback: AsyncCallback<LocalServiceInfo>): void;

  /**
   * 添加一个MDNS服务，使用Promise方式作为异步方法。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { LocalServiceInfo } serviceInfo - MDNS服务的信息。
   * @returns { Promise<LocalServiceInfo> } 以Promise形式返回添加的MDNS服务信息。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  function addLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>;

  /**
   * 移除一个MDNS服务，使用callback方式作为异步方法。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { LocalServiceInfo } serviceInfo - MDNS服务的信息。
   * @param { AsyncCallback<LocalServiceInfo> } callback - Callback used to return the result. If the operation is
   *     successful, **error** is **undefined** and **data** is the MDNS服务的信息。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204002 - Callback not found.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  function removeLocalService(context: Context, serviceInfo: LocalServiceInfo,
                              callback: AsyncCallback<LocalServiceInfo>): void;

  /**
   * 移除一个MDNS服务，使用Promise方式作为异步方法。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { LocalServiceInfo } serviceInfo - MDNS服务的信息。
   * @returns { Promise<LocalServiceInfo> } 以Promise形式返回移除的MDNS服务信息。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204002 - Callback not found.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  function removeLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>;

  /**
   * 返回一个DiscoveryService对象，该对象用于发现指定服务类型（serviceType）的MDNS服务。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { string } serviceType - 需要发现的MDNS服务类型。
   * @returns { DiscoveryService } 基于指定服务类型（serviceType）和Context的发现服务对象。
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  function createDiscoveryService(context: Context, serviceType: string): DiscoveryService;

  /**
   * 解析一个MDNS服务，使用callback方式作为异步方法。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { LocalServiceInfo } serviceInfo - MDNS服务的信息。
   * @param { AsyncCallback<LocalServiceInfo> } callback - Callback used to return the result. If the operation is
   *     successful, **error** is **undefined** and **data** is the MDNS服务的信息。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204006 - Request timeout.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo,
                               callback: AsyncCallback<LocalServiceInfo>): void;

  /**
   * 解析一个MDNS服务，使用Promise方式作为异步方法。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { LocalServiceInfo } serviceInfo - MDNS服务的信息。
   * @returns { Promise<LocalServiceInfo> } 以Promise形式返回解析的MDNS服务信息。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204006 - Request timeout.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>;

  /**
   * 指定服务类型的发现服务对象。
   *
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  export interface DiscoveryService {
    /**
     * 订阅开启监听mDNS服务的通知。
     *
     * @param { 'discoveryStart' } type - 订阅事件，固定为'discoveryStart'。
     *     <br>discoveryStart：开始搜索局域网内的MDNS服务事件。
     * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - Callback used to return
     *     the MDNS service and error information. [since 10 - 10]
     * @param { Callback<DiscoveryEventInfo> } callback - MDNS服务的信息和事件错误信息。 [since 11]
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    on(type: 'discoveryStart', callback: Callback<DiscoveryEventInfo>): void;

    /**
     * 取消开启监听MDNS服务的通知。
     *
     * @param { 'discoveryStart' } type - 取消订阅的事件，固定为'discoveryStart'。
     *     <br>discoveryStart：开始搜索局域网内的MDNS服务事件。
     * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - Callback used to return
     *     the MDNS service and error information. You can pass the callback of the **on** function if you want to
     *     cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for
     *     all events. [since 10 - 10]
     * @param { Callback<DiscoveryEventInfo> } callback - MDNS服务的信息和事件错误信息。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订
     *     阅。 [since 11]
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    off(type: 'discoveryStart', callback?: Callback<DiscoveryEventInfo>): void;

    /**
     * 订阅停止监听MDNS服务的通知。
     *
     * @param { 'discoveryStop' } type - 订阅事件，固定为'discoveryStop'。
     *     <br>discoveryStop：停止搜索局域网内的MDNS服务事件。
     * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - Callback used to return
     *     the MDNS service and error information. [since 10 - 10]
     * @param { Callback<DiscoveryEventInfo> } callback - MDNS服务的信息和事件错误信息。 [since 11]
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    on(type: 'discoveryStop', callback: Callback<DiscoveryEventInfo>): void;

    /**
     * 取消订阅停止监听MDNS服务的通知。
     *
     * @param { 'discoveryStop' } type - 取消订阅的事件'discoveryStop'。
     *     <br>discoveryStop：停止搜索局域网内的MDNS服务事件。
     * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - Callback used to return
     *     the MDNS service and error information. You can pass the callback of the **on** function if you want to
     *     cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for
     *     all events. [since 10 - 10]
     * @param { Callback<DiscoveryEventInfo> } callback - MDNS服务的信息和事件错误信息。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订
     *     阅。 [since 11]
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    off(type: 'discoveryStop', callback?: Callback<DiscoveryEventInfo>): void;

    /**
     * 订阅发现MDNS服务的通知。
     *
     * @param { 'serviceFound' } type - 订阅事件，固定为'serviceFound'。
     *     <br>serviceFound：发现MDNS服务事件。
     * @param { Callback<LocalServiceInfo> } callback - MDNS服务的信息，需调用resolveLocalService解析这个MDNS服务信息。
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    on(type: 'serviceFound', callback: Callback<LocalServiceInfo>): void;

    /**
     * 取消订阅发现MDNS服务的通知。
     *
     * @param { 'serviceFound' } type - 取消订阅的事件，固定为'serviceFound'。
     *     <br>serviceFound：发现MDNS服务事件。
     * @param { Callback<LocalServiceInfo> } callback - MDNS服务的信息。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订
     *     阅。 [since 10 - 10]
     * @param { Callback<LocalServiceInfo> } [callback] - MDNS服务的信息。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订
     *     阅。 [since 11]
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    off(type: 'serviceFound', callback?: Callback<LocalServiceInfo>): void;

    /**
     * 订阅移除MDNS服务的通知。
     *
     * @param { 'serviceLost' } type - 订阅事件，固定为'serviceLost'。
     *     <br>serviceLost：移除MDNS服务事件。
     * @param { Callback<LocalServiceInfo> } callback - MDNS服务的信息。
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    on(type: 'serviceLost', callback: Callback<LocalServiceInfo>): void;

    /**
     * 取消订阅移除MDNS服务的通知。
     *
     * @param { 'serviceLost' } type - 取消订阅的事件，固定为'serviceLost'。
     *     <br>serviceLost：移除MDNS服务事件。
     * @param { Callback<LocalServiceInfo> } callback - MDNS服务的信息。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    off(type: 'serviceLost', callback?: Callback<LocalServiceInfo>): void;

    /**
     * 开始搜索局域网内的MDNS服务。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    startSearchingMDNS(): void;

    /**
     * 停止搜索局域网内的MDNS服务。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    stopSearchingMDNS(): void;
  }

  /**
   * MDNS服务信息。
   *
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  export interface LocalServiceInfo {
    /**
     * MDNS服务的类型。格式：_<name>.<_tcp/_udp>，name长度小于63字符并且不能包含字符'.'。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    serviceType: string;
    /**
     * MDNS服务的名字。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    serviceName: string;
    /**
     * MDNS服务的端口号。取值范围[0，65535]。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    port?: int;
    /**
     * MDNS服务设备的IP地址。采用设备的IP，添加服务和移除服务时候不生效。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    host?: NetAddress;
    /**
     * MDNS服务属性信息。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    serviceAttribute?: Array<ServiceAttribute>;
  }

  /**
   * MDNS服务属性信息。
   *
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  export interface ServiceAttribute {
    /**
     * MDNS服务属性键值，键值长度应该小于9个字符。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    key: string;

    /**
     * MDNS服务属性值。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    value: Array<int>;
  }

  /**
   * 监听到的MDNS服务事件信息。
   *
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  export interface DiscoveryEventInfo {
    /**
     * MDNS服务信息。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    serviceInfo: LocalServiceInfo;

    /**
     * MDNS错误信息。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    errorCode?: MdnsError;
  }

  /**
   * MDNS错误信息。
   *
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  export enum MdnsError {
    /**
     * 内部错误导致操作失败。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    INTERNAL_ERROR = 0,

    /**
     * 服务已经存在导致操作失败。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    ALREADY_ACTIVE = 1,

    /**
     * 请求超过最大限制导致操作失败。
     *
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    MAX_LIMIT = 2
  }
}

export default mdns;