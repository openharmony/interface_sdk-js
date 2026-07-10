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
 * @file
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';
import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * 提供操作或管理星闪服务的方法。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace ssap {
  /**
   * 连接状态。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ConnectionState = nearlinkConstant.ConnectionState;

  /**
   * 创建SSAP客户端实例。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } address - 服务端的设备地址。例如，“11:22:33:AA:BB:FF”
   *     <br>长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
   * @returns { Client } Returns a SSAP client instance {@code Client}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createClient(address: string): Client;

  /**
   * 创建SSAP服务端实例。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { Server } 返回一个SSAP服务端实例{@code Server}。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createServer(): Server;

  /**
   * 管理SSAP客户端。在调用ssap客户端方法之前，必须使用{@link createClient}创建ssap客户端实例。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Client {
    /**
     * 连接服务端。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } 返回promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    connect(): Promise<void>;

    /**
     * 断开或停止与服务端的连接。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } 返回promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    disconnect(): Promise<void>;

    /**
     * 关闭客户端。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    close(): void;

    /**
     * 开始发现服务端的所有服务。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<Service[]> } Returns the service list of the server.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getServices(): Promise<Service[]>;

    /**
     * 读取服务端的属性。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - 指示要读取的属性
     * @returns { Promise<Property> } 返回属性值Promise。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID in property.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readProperty(property: Property): Promise<Property>;

    /**
     * 写入服务端的属性。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - 指示要写入的属性
     * @param { PropertyWriteType } writeType - 写类型
     * @returns { Promise<void> } Promise用于返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID in property.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    writeProperty(property: Property, writeType: PropertyWriteType): Promise<void>;

    /**
     * 读取服务器的描述符。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { PropertyDescriptor } descriptor - 指示要读取的描述符
     * @returns { Promise<PropertyDescriptor> } Promise用于返回描述符值。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID in descriptor.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readDescriptor(descriptor: PropertyDescriptor): Promise<PropertyDescriptor>;

    /**
     * 写入服务端的描述符。
     *
     * 此方法不支持写入客户端属性配置描述符。要写入客户端属性配置描述符，请改为调用[setPropertyNotification]{@link
     * setPropertyNotification}或[setPropertyIndication]{@link setPropertyIndication}。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { PropertyDescriptor } descriptor - 指示要写入的描述符。
     *     <br>描述符类型不应为CLIENT_PROPERTY_CONFIG。
     * @returns { Promise<void> } Promise用于返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID in descriptor.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    writeDescriptor(descriptor: PropertyDescriptor): Promise<void>;

    /**
     * 启用或禁用属性值变更通知。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - 要通知的属性
     * @param { boolean } enable - 指定是否启用属性的通知
     * @returns { Promise<void> } 返回promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID in property.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setPropertyNotification(property: Property, enable: boolean): Promise<void>;

    /**
     * 启用或禁用属性值变更指示。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { Property } property - 要指示的属性。
     * @param { boolean } enable - 指定是否启用属性的指示
     * @returns { Promise<void> } 返回promise对象。
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
     * @since 26.0.0 dynamic&static
     */
    setPropertyIndication(property: Property, enable: boolean): Promise<void>;

    /**
     * 与服务端协商MTU大小。
     * 协商结果需要通过订阅MTU事件获取。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { int } mtu - 最大传输单元。
     *     <br>单位为：字节。取值限定为整数。取值约束：建议范围[22,1024]。
     * @returns { Promise<void> } 返回promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    requestMtuSize(mtu: int): Promise<void>;

    /**
     * 调用服务端的方法。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Method } method - 指示要调用的方法
     * @returns { Promise<Method> } Promise用于返回方法结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    callMethod(method: Method): Promise<Method>;

    /**
     * 订阅属性值变更事件。
     *
     * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
     *
     * @param { Callback<Property> } callback - 用于监听属性值更改事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onPropertyChange(callback: Callback<Property>): void;

    /**
     * 取消订阅属性值更改事件。
     *
     * @param { Callback<Property> } [callback] - 用于监听属性值变更事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offPropertyChange(callback?: Callback<Property>): void;

    /**
     * 订阅事件通知。
     *
     * 只有授予了ohos.permission.NEARLINK_ACCESS权限的系统应用程序才能访问此事件。
     *
     * @param { Callback<Event> } callback - 用于监听事件通知事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onEventNotify(callback: Callback<Event>): void;

    /**
     * 取消订阅事件通知。
     *
     * @param { Callback<Event> } [callback] - 用于监听事件通知事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offEventNotify(callback?: Callback<Event>): void;

    /**
     * 订阅客户端连接状态更改事件。
     *
     * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
     * 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。
     * 回调返回真实设备地址，否则返回随机设备地址。
     *
     * @param { Callback<ConnectionChangeState> } callback -
     用于监听连接状态改变事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onConnectionStateChange(callback: Callback<ConnectionChangeState>): void;

    /**
     * 取消订阅客户端连接状态更改事件。
     *
     * @param { Callback<ConnectionChangeState> } [callback] -
     用于监听连接状态改变事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void;

    /**
     * 订阅MTU变化事件。
     *
     * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
     *
     * @param { Callback<int> } callback - 用于监听mtu变化事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onMtuChange(callback: Callback<int>): void;

    /**
     * 取消订阅MTU更改事件。
     *
     * @param { Callback<int> } [callback] - 用于监听mtu变化事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offMtuChange(callback?: Callback<int>): void;
  }

  /**
   * 管理SSAP服务端。在调用SSAP服务端方法之前，必须使用{@link createServer}创建SSAP服务端实例。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Server {
    /**
     * 添加SSAP服务。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Service } service - 需要添加并注册ssap服务
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    addService(service: Service): void;

    /**
     * 删除指定的SSAP服务。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { string } serviceUuid - 要删除的特定SSAP服务
     *     <br>长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     *     <br>禁止使用星闪标准服务UUID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100043 - Invalid UUID.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    removeService(serviceUuid: string): void;

    /**
     * 关闭此{@code Server}对象并注销其回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    close(): void;

    /**
     * 通知客户端此服务端的属性值发生了变化。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { string } address - 设备地址。
     *     <br>长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     * @param { Property } property - 指示要通知的属性
     * @returns { Promise<void> } 返回promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100041 - Invalid address.
     * @throws { BusinessError } 36100043 - Invalid UUID in property.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    notifyPropertyChanged(address: string, property: Property): Promise<void>;

    /**
     * 响应客户端的读或写请求。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { ServerResponse } response - 表示响应。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100041 - Invalid address.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sendResponse(response: ServerResponse): void;

    /**
     * 订阅服务器连接状态更改事件。
     *
     * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
     * 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。
     * 回调返回真实设备地址，否则返回随机设备地址。
     *
     * @param { Callback<ConnectionChangeState> } callback -
     用于监听连接状态改变事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onConnectionStateChange(callback: Callback<ConnectionChangeState>): void;

    /**
     * 取消订阅服务器连接状态更改事件。
     *
     * @param { Callback<ConnectionChangeState> } [callback] -
     用于监听连接状态改变事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void;

    /**
     * 从客户端订阅属性读取事件。
     *
     * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
     * 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。
     * 回调返回真实设备地址，否则返回随机设备地址。
     *
     * @param { Callback<PropertyReadRequest> } callback - 用于监听属性操作事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onPropertyRead(callback: Callback<PropertyReadRequest>): void;

    /**
     * 取消订阅来自客户端的属性读取事件。
     *
     * @param { Callback<PropertyReadRequest> } [callback] - 用于监听属性操作事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offPropertyRead(callback?: Callback<PropertyReadRequest>): void;

    /**
     * 从客户端订阅属性写入事件。
     *
     * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
     * 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。
     * 回调返回真实设备地址，否则返回随机设备地址。
     *
     * @param { Callback<PropertyWriteRequest> } callback - 用于监听属性操作事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onPropertyWrite(callback: Callback<PropertyWriteRequest>): void;

    /**
     * 取消订阅来自客户端的属性写入事件。
     *
     * @param { Callback<PropertyWriteRequest> } [callback] - 用于监听属性操作事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offPropertyWrite(callback?: Callback<PropertyWriteRequest>): void;

    /**
     * 订阅MTU变化事件。
     *
     * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
     *
     * @param { Callback<int> } callback - 用于监听mtu变化事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onMtuChange(callback: Callback<int>): void;

    /**
     * 取消订阅MTU更改事件。
     *
     * @param { Callback<int> } [callback] - 用于监听mtu变化事件的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offMtuChange(callback?: Callback<int>): void;
  }

  /**
   * SSAP服务。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Service {
    /**
     * 服务的UUID。
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>禁止使用星闪标准服务UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * 属于此服务的属性。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    properties: Property[];
    /**
     * 属于此服务的方法。
     * <br>[addService]{@link ssap.Server.addService}方法中不支持此字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    methods?: Method[];
    /**
     * 属于此服务的事件。
     * <br>[addService]{@link ssap.Server.addService}方法中不支持该字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    events?: Event[];
  }

  /**
   * SSAP属性。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Property {
    /**
     * 属性所属的{@link Service}实例的UUID
     * 长度必须为32，禁止使用星闪标准服务UUID。
     * <br>不允许使用NearLink标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * Property实例的UUID
     * 长度必须为32，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>不允许使用NearLink标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    propertyUuid: string;
    /**
     * Property实例的值。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value: ArrayBuffer;
    /**
     * 属性中包含的描述符列表。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    descriptors?: PropertyDescriptor[];
    /**
     * 指示如何访问数据值和描述符值。
     * 取值为枚举值的或运算。
     * 取值范围为全体整数。 默认值： 默认值：READABLE | WRITE_NO_RESPONSE。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    operation?: int;
  }

  /**
   * SSAP方法。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Method {
    /**
     * 方法所属的{@link Service}实例的UUID
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>不允许使用NearLink标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * 方法实例的UUID
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>不允许使用NearLink标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    methodUuid: string;
    /**
     * 方法实例的参数
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    parameter?: ArrayBuffer;
    /**
     * 方法实例的结果
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    result?: ArrayBuffer;
  }

  /**
   * SSAP事件。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Event {
    /**
     * 事件所属服务实例的UUID
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>禁止使用星闪标准服务UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * 事件实例的UUID。
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>不允许使用NearLink标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    eventUuid: string;
    /**
     * 事件实例的参数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    parameter?: ArrayBuffer;
  }

  /**
   * 属性的SSAP描述符。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PropertyDescriptor {
    /**
     * 描述符所属属性所属的服务实例的UUID。
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>不允许使用NearLink标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * 描述符所属的属性实例的UUID。
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>禁止使用星闪标准服务UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    propertyUuid: string;
    /**
     * 属性描述符实例的值。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value: ArrayBuffer;
    /**
     * 属性描述符实例的类型。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    descriptorType: PropertyDescriptorType;
    /**
     * 描述符是否可写。
     * 默认值： 默认值：false。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isWriteable?: boolean;
  }

  /**
   * SSAP客户端属性读请求参数说明。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PropertyReadRequest {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 属性所属的{@link Service}实例的UUID
     * 长度必须为32，禁止使用星闪标准服务UUID。
     * <br>不允许使用NearLink标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * 客户端请求读取的属性实例的UUID。
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>禁止使用星闪标准服务UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    propertyUuid: string;
    /**
     * 请求ID。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    requestId: int;
  }

  /**
   * SSAP客户端属性写请求参数说明。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PropertyWriteRequest {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 属性所属的{@link Service}实例的UUID
     * 长度必须为32，禁止使用星闪标准服务UUID。
     * <br>不允许使用NearLink标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * 客户端请求写入的属性实例的UUID。
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>禁止使用星闪标准服务UUID。禁止使用星闪标准服务UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    propertyUuid: string;
    /**
     * 需要写入的数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value: ArrayBuffer;
    /**
     * 请求ID。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    requestId: int;
    /**
     * 此请求的写入类型。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    writeType: PropertyWriteType;
  }

  /**
   * 服务端对指定读或写请求的响应的参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ServerResponse {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 请求ID。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    requestId: int;
    /**
     * 响应数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value: ArrayBuffer;
  }

  /**
   * 描述SSAP连接状态。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ConnectionChangeState {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: ConnectionState;
  }

  /**
   * 属性描述符类型的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum PropertyDescriptorType {
    /**
     * 属性说明描述符。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PROPERTY = 1,
    /**
     * 客户端属性配置描述符。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CLIENT_PROPERTY_CONFIG = 2,
    /**
     * 服务端属性配置描述符。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SERVER_PROPERTY_CONFIG = 3,
    /**
     * 属性格式描述符。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PROPERTY_FORMAT = 4,
    /**
     * 厂商自定义。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TYPE_VENDOR = 255
  }

  /**
   * 属性操作指示的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum Operation {
    /**
     * 当该比特置位后，属性值可被读取。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    READABLE = 0x01,
    /**
     * 当该比特置位后，属性值可被写入，写入后无反馈。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WRITE_NO_RESPONSE = 0x02,
    /**
     * 当该比特置位后，属性值可被写入，写入后产生反
     * 馈给客户端。
     * 写操作完成后，会反馈给客户端。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WRITE_WITH_RESPONSE = 0x04,
    /**
     * 当该比特置位后，属性值通过通知方式传递给客户
     * 端。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NOTIFY = 0x08
  }

  /**
   * 属性写入类型的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum PropertyWriteType {
    /**
     * 写入属性并等待响应。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WRITE = 1,
    /**
     * 写入属性且没有响应。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WRITE_NO_RESPONSE = 2
  }
}
export default ssap;