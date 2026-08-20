/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 星闪SSAP连接能力
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';
import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * 本模块提供了SSAP（星闪服务交互协议 SparkLink Service Access Protocol）连接功能，包括客户端创建与连接、调用服务端方法、读写描述符、订阅事件通知等。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace ssap {
  /**
   * 表示和远端设备的连接状态，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type ConnectionState = nearlinkConstant.ConnectionState;

  /**
   * 创建SSAP客户端实例。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } address - 远端服务端设备地址。地址格式参考：11:22:33:AA:BB:FF。
   * @returns { Client } SSAP客户端实例。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function createClient(address: string): Client;

  /**
   * 创建SSAP服务端实例。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { Server } SSAP服务端实例。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function createServer(): Server;

  /**
   * SSAP客户端类，提供了和服务端进行连接和数据传输等操作方法。
   *
   * 使用该类的方法前，需通过[ssap.createClient]{@link ssap.createClient}方法构造该类的实例。
   *
   * 同一应用针对同一远端设备创建一个[Client]{@link ssap.Client}实例即可，重复创建会增加不必要的资源开销。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Client {
    /**
     * 向服务端发起连接。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    connect(): Promise<void>;

    /**
     * 向服务端发起断连，断开已有连接或者终止正在建立的连接。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disconnect(): Promise<void>;

    /**
     * 关闭客户端，断开与远端服务端的连接。如仅需断开当前连接而保留实例，请使用[disconnect]{@link ssap.Client.disconnect}方法。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    close(): void;

    /**
     * 获取服务端支持的服务列表。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<Service[]> } Promise对象，返回服务端支持的服务列表。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getServices(): Promise<Service[]>;

    /**
     * 读取服务端属性。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - 服务端属性。
     * @returns { Promise<Property> } Promise对象，返回服务端属性。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID in property.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    readProperty(property: Property): Promise<Property>;

    /**
     * 写入服务端属性值。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - 服务端属性。
     * @param { PropertyWriteType } writeType - 写类型，支持服务端回复响应和不回复响应两种方式。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID in property.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    writeProperty(property: Property, writeType: PropertyWriteType): Promise<void>;

    /**
     * 读取服务端描述符。需在调用[connect]{@link ssap.Client.connect}建立连接成功后使用，使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { PropertyDescriptor } descriptor - 服务端属性描述符。需与服务发现时获取的对端Service中的descriptor对应。
     * @returns { Promise<PropertyDescriptor> } Promise对象，返回从服务端读取到的属性描述符对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID in descriptor.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    readDescriptor(descriptor: PropertyDescriptor): Promise<PropertyDescriptor>;

    /**
     * 改写服务端的描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 此接口不支持写入客户端属性配置描述符（CLIENT_PROPERTY_CONFIG），如需配置客户端属性通知或指示，请使用
     * > [setPropertyNotification]{@link ssap.Client.setPropertyNotification}或
     * > [setPropertyIndication]{@link ssap.Client.setPropertyIndication}。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { PropertyDescriptor } descriptor - 服务端属性描述符。需与服务发现时获取的对端Service中的descriptor对应。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID in descriptor.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    writeDescriptor(descriptor: PropertyDescriptor): Promise<void>;

    /**
     * 设置[Property]{@link ssap.Property}变化通知。需在调用[connect]{@link ssap.Client.connect}成功建立连接后使用。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - 服务端属性。该属性需支持NOTIFY操作（即operation包含NOTIFY，详见[Operation]{@link ssap.Operation}）。
     * @param { boolean } enable - 是否打开通知功能。true: 打开通知功能。false: 关闭通知功能。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID in property.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setPropertyNotification(property: Property, enable: boolean): Promise<void>;

    /**
     * 启用或禁用服务端属性值更改时的指示（当属性值发生变化时，服务端主动向客户端发送通知）。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { Property } property - 服务端属性。
     * @param { boolean } enable - 是否启用属性值更改指示。true：启用指示。false：禁用指示。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100030 - The connection is not established.
     * @throws { BusinessError } 36100043 - Invalid UUID in property.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setPropertyIndication(property: Property, enable: boolean): Promise<void>;

    /**
     * 发起MTU协商请求。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { int } mtu - MTU参数，取值范围[22, 1024]，单位：字节。默认值251。
     *     <br>单位为：字节。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    requestMtuSize(mtu: int): Promise<void>;

    /**
     * 调用服务端方法。例如，在设备控制场景中，客户端可调用服务端提供的配置方法来远程设置设备参数或触发特定操作。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Method } method - 服务端方法。需与服务发现时获取的对端Service中的method对应。
     * @returns { Promise<Method> } Promise对象，返回调用结果对应的Method对象，其中result字段为服务端方法执行后的返回值。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    callMethod(method: Method): Promise<Method>;

    /**
     * 订阅属性变化事件。使用callback异步回调。
     *
     * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
     *
     * @param { Callback<Property> } callback - 回调函数，返回服务的Property。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onPropertyChange(callback: Callback<Property>): void;

    /**
     * 取消订阅属性变化事件。使用callback异步回调。
     *
     * @param { Callback<Property> } [callback] - 回调函数，返回服务的Property。
     *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offPropertyChange(callback?: Callback<Property>): void;

    /**
     * 订阅事件通知事件。例如，在设备状态监控场景中，客户端通过订阅事件来实时接收服务端推送的状态变化通知（如设备告警、数据更新等）。使用callback异步回调。
     *
     * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
     *
     * @param { Callback<Event> } callback - 回调函数，返回服务的事件对象。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onEventNotify(callback: Callback<Event>): void;

    /**
     * 取消订阅事件通知事件。使用callback异步回调。
     *
     * @param { Callback<Event> } [callback] - 回调函数，返回服务的事件对象。
     *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offEventNotify(callback?: Callback<Event>): void;

    /**
     * 订阅连接状态变化事件。使用callback异步回调。
     *
     * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
     *
     * @param { Callback<ConnectionChangeState> } callback - 回调函数，返回连接状态上报参数。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onConnectionStateChange(callback: Callback<ConnectionChangeState>): void;

    /**
     * 取消订阅连接状态变化事件。使用callback异步回调。
     *
     * @param { Callback<ConnectionChangeState> } [callback] - 回调函数，返回连接状态上报参数。
     *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void;

    /**
     * 订阅MTU变化事件。使用callback异步回调。
     *
     * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
     *
     * @param { Callback<int> } callback - 回调函数，返回协商后的MTU大小。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onMtuChange(callback: Callback<int>): void;

    /**
     * 取消订阅MTU变化事件。使用callback异步回调。
     *
     * @param { Callback<int> } [callback] - 回调函数，返回协商后的MTU大小。
     *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offMtuChange(callback?: Callback<int>): void;
  }

  /**
   * SSAP服务端类，提供了和客户端进行连接和数据交互等操作方法。
   *
   * 使用该类的方法前，需通过[ssap.createServer]{@link ssap.createServer}方法构造该类的实例。
   *
   * 同一应用创建一个[Server]{@link ssap.Server}实例即可，重复创建会增加不必要的资源开销。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Server {
    /**
     * 服务端添加服务。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Service } service - 服务端提供的服务信息，支持添加多个服务，根据不同的UUID区分。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    addService(service: Service): void;

    /**
     * 服务端删除服务。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { string } serviceUuid - 星闪服务UUID，个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-00000000123
     *     4，表示一个128位标识符。 不允许使用星闪标准UUID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    removeService(serviceUuid: string): void;

    /**
     * 关闭服务端，并注销已注册的回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    close(): void;

    /**
     * 通知客户端属性值更新。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { string } address - 客户端设备地址。地址格式参考：11:22:33:AA:BB:FF。
     * @param { Property } property - 发生值变化的Property。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100041 - Invalid address.
     * @throws { BusinessError } 36100043 - Invalid UUID in property.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    notifyPropertyChanged(address: string, property: Property): Promise<void>;

    /**
     * 回复客户端读写请求。收到[ssap.onPropertyRead]{@link ssap.Server.onPropertyRead(callback: Callback<PropertyReadRequest>)}或
     * [ssap.onPropertyWrite]{@link ssap.Server.onPropertyWrite(callback: Callback<PropertyWriteRequest>)}上报的请求后，调用本接口向对
     * 应客户端回复数据。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { ServerResponse } response - 回复客户端的响应数据。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100041 - Invalid address.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    sendResponse(response: ServerResponse): void;

    /**
     * 订阅连接状态变化事件。使用callback异步回调。
     *
     * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
     *
     * @param { Callback<ConnectionChangeState> } callback - 回调函数，返回连接状态上报参数。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onConnectionStateChange(callback: Callback<ConnectionChangeState>): void;

    /**
     * 取消订阅连接状态变化事件。使用callback异步回调。
     *
     * @param { Callback<ConnectionChangeState> } [callback] - 回调函数，返回连接状态上报参数。
     *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void;

    /**
     * 订阅客户端的读属性请求事件。使用callback异步回调。
     *
     * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
     *
     * @param { Callback<PropertyReadRequest> } callback - 回调函数，返回客户端的Property读请求参数。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onPropertyRead(callback: Callback<PropertyReadRequest>): void;

    /**
     * 取消订阅客户端的读属性请求事件。使用callback异步回调。
     *
     * @param { Callback<PropertyReadRequest> } [callback] - 回调函数，返回客户端的Property读请求参数。
     *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offPropertyRead(callback?: Callback<PropertyReadRequest>): void;

    /**
     * 订阅客户端的写属性请求事件。使用callback异步回调。
     *
     * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
     *
     * @param { Callback<PropertyWriteRequest> } callback - 回调函数，返回客户端的Property写请求参数。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onPropertyWrite(callback: Callback<PropertyWriteRequest>): void;

    /**
     * 取消订阅客户端的写属性请求事件。使用callback异步回调。
     *
     * @param { Callback<PropertyWriteRequest> } [callback] - 回调函数，返回客户端的Property写请求参数。
     *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offPropertyWrite(callback?: Callback<PropertyWriteRequest>): void;

    /**
     * 订阅MTU变化事件。使用callback异步回调。
     *
     * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
     *
     * @param { Callback<int> } callback - 回调函数，返回协商后的MTU大小。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onMtuChange(callback: Callback<int>): void;

    /**
     * 取消订阅MTU变化事件。使用callback异步回调。
     *
     * @param { Callback<int> } [callback] - 回调函数，返回协商后的MTU大小。
     *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offMtuChange(callback?: Callback<int>): void;
  }

  /**
   * 表示星闪服务。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Service {
    /**
     * 星闪服务UUID，个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128位标识符。 不允许使用星闪标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * 表示服务的Property列表。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    properties: Property[];
    /**
     * 表示服务的方法列表。若未配置该字段，则服务不提供任何方法。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    methods?: Method[];
    /**
     * 表示服务的事件列表。若未配置该字段，则服务不提供任何事件。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    events?: Event[];
  }

  /**
   * 表示服务的Property。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Property {
    /**
     * 星闪服务UUID，个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128位标识符。 不允许使用星闪标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * 表示Property的UUID，数据格式同serviceUuid。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    propertyUuid: string;
    /**
     * 表示Property的数据值。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    value: ArrayBuffer;
    /**
     * 表示当前Property的描述符列表。若未配置则默认不携带该字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    descriptors?: PropertyDescriptor[];
    /**
     * 表示Property支持的操作方式，默认值为READABLE|WRITE_NO_RESPONSE，即可读并可写（以无响应方式）。如要使属性支持相应的操作，需要对该字段赋值，例如赋值为：READABLE |
     * WRITE_NO_RESPONSE | NOTIFY。取值范围[0, 15]，各比特位对应的操作方式详见[Operation]{@link ssap.Operation}。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    operation?: int;
  }

  /**
   * 表示服务的方法。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Method {
    /**
     * 星闪服务UUID，个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128位标识符。 不允许使用星闪标准UUID。
     * 长度必须为36。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * 表示方法UUID。数据格式同serviceUuid。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    methodUuid: string;
    /**
     * 表示方法的参数，数据格式由具体服务定义。若未配置则默认不携带该字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    parameter?: ArrayBuffer;
    /**
     * 表示方法的返回值，数据格式由具体服务定义。若未配置则默认不携带该字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    result?: ArrayBuffer;
  }

  /**
   * 表示服务的事件。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Event {
    /**
     * 星闪服务UUID，个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128位标识符。 不允许使用星闪标准UUID。
     * 长度必须为36。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * 表示事件UUID。数据格式同serviceUuid。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    eventUuid: string;
    /**
     * 表示事件的参数，数据格式由具体服务定义。若未配置则默认不携带该字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    parameter?: ArrayBuffer;
  }

  /**
   * 表示Property的描述符。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface PropertyDescriptor {
    /**
     * 星闪服务UUID，个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128位标识符。 不允许使用星闪标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * 表示Property的UUID，数据格式同serviceUuid。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    propertyUuid: string;
    /**
     * 表示描述符的数据值。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    value: ArrayBuffer;
    /**
     * 表示Property的描述符类型。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    descriptorType: PropertyDescriptorType;
    /**
     * 表示描述符是否是可写的。true：可写，false：不可写。默认值为true。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    isWriteable?: boolean;
  }

  /**
   * 表示客户端的Property读请求参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface PropertyReadRequest {
    /**
     * 表示客户端设备地址。地址格式参考：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 星闪服务UUID，个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128位标识符。 不允许使用星闪标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * 表示Property的UUID，数据格式同serviceUuid。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    propertyUuid: string;
    /**
     * 表示请求ID。取值范围[0, 65535]。服务端回复响应时需携带该ID，以便客户端关联请求与响应。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    requestId: int;
  }

  /**
   * 表示客户端的Property写请求参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface PropertyWriteRequest {
    /**
     * 表示客户端设备地址。地址格式参考：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 星闪服务UUID，个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128位标识符。 不允许使用星闪标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * 表示Property的UUID，数据格式同serviceUuid。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    propertyUuid: string;
    /**
     * 表示客户端写入的值。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    value: ArrayBuffer;
    /**
     * 表示客户端的写请求ID，服务端回复响应时需携带该ID。取值范围[0, 65535]。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    requestId: int;
    /**
     * 表示客户端写Property类型。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    writeType: PropertyWriteType;
  }

  /**
   * 表示回复客户端请求的响应。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ServerResponse {
    /**
     * 表示客户端设备地址。地址格式参考：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 表示请求ID。取值范围[0, 65535]。该ID必须与收到的[PropertyReadRequest]{@link ssap.PropertyReadRequest}或
     * [PropertyWriteRequest]{@link ssap.PropertyWriteRequest}中的requestId一致，用于关联请求与响应。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    requestId: int;
    /**
     * 表示回复的数据值。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    value: ArrayBuffer;
  }

  /**
   * 表示连接状态上报参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ConnectionChangeState {
    /**
     * 表示远端设备地址。地址格式参考：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 表示和远端设备的连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: ConnectionState;
  }

  /**
   * 表示Property的描述符类型，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum PropertyDescriptorType {
    /**
     * 表示Property。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PROPERTY = 1,
    /**
     * 表示客户端Property配置。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CLIENT_PROPERTY_CONFIG = 2,
    /**
     * 表示服务端Property配置。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SERVER_PROPERTY_CONFIG = 3,
    /**
     * 表示Property格式。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PROPERTY_FORMAT = 4,
    /**
     * 表示厂商自定义字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    TYPE_VENDOR = 255
  }

  /**
   * 表示Property支持的操作类型，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum Operation {
    /**
     * 表示可读。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    READABLE = 0x01,
    /**
     * 表示支持无响应的写请求。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    WRITE_NO_RESPONSE = 0x02,
    /**
     * 表示支持有响应的写请求。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    WRITE_WITH_RESPONSE = 0x04,
    /**
     * 表示支持通知。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    NOTIFY = 0x08
  }

  /**
   * 表示Property支持的写类型，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum PropertyWriteType {
    /**
     * 表示写属性请求并等待服务端响应回复。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    WRITE = 1,
    /**
     * 表示写属性请求，无需服务端响应回复。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    WRITE_NO_RESPONSE = 2
  }
}
export default ssap;