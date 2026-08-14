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
 * @file 安全单元的通道管理
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * 本模块主要用于操作及管理安全单元（SecureElement，简称SE），电子设备上可能存在的安全单元有eSE（Embedded SE）和SIM卡。文档中出现的SE服务为SEService实例，参见
 * [createService]{@link omapi.createService}。
 *
 * 对于文档中出现以下类型说明：
 *
 * | 类型    | 说明                                           |
 * | ------- | ---------------------------------------------- |
 * | Reader  | 此类的实例表示该设备支持的SE，如果支持eSE、SIM和SIM2，则返回3个实例，其中SIM2从API version 22开始支持。 |
 * | Session | 此类的实例表示在某个SE Reader实例上创建连接会话。 |
 * | Channel | 此类的实例表示在某个Session实例上创建通道，可能为基础通道或逻辑通道。   |
 *
 * @syscap SystemCapability.Communication.SecureElement
 * @since 10 dynamic
 */
declare namespace omapi {
  /**
   * 建立一个可用于连接到系统中所有可用SE的新连接（服务）。连接过程较为耗时，所以此方法仅提供异步方式进行的。使用callback异步回调。
   *
   * 仅当指定的回调或者当[isConnected]{@link omapi.SEService.isConnected}方法返回true时，该返回SEService对象是可用的。
   *
   * @param { 'serviceState' } type - 固定填'serviceState' 。
   * @param { Callback<ServiceState> } callback - 返回SE服务状态的回调 。
   * @returns { SEService } SE服务实例。
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.SecureElement
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead omapi#createService
   */
  function newSEService(type: 'serviceState', callback: Callback<ServiceState>): SEService;

  /**
   * 建立一个可用于连接到系统中所有可用SE的新连接（服务）。连接过程较为耗时，所以此方法仅提供异步方式。使用Promise异步回调。
   *
   * 仅当[isConnected]{@link omapi.SEService.isConnected}方法返回true时，该返回SEService对象是可用的。
   *
   * @returns { Promise<SEService> } 以Promise形式异步返回可用的SE服务实例。
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.SecureElement
   * @since 12 dynamic
   */
  function createService(): Promise<SEService>;

  /**
   * SEService表示可用于连接到系统中所有可用SE的连接（服务），通过[createService]{@link omapi.createService}获取SEService实例。
   *
   * @syscap SystemCapability.Communication.SecureElement
   * @since 10 dynamic
   */
  export interface SEService {
    /**
     * 返回可用SE Reader的数组，包含该设备上支持的所有的安全单元。
     *
     * @returns { Reader[] } 返回可用Reader对象数组。
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getReaders(): Reader[];

    /**
     * 检查SE服务是否已连接。
     *
     * @returns { boolean } true: SE服务状态已连接，false: SE服务状态已断开。
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    isConnected(): boolean;

    /**
     * 释放该Service分配的所有SE资源。此后[isConnected]{@link omapi.SEService.isConnected}将返回false。
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    shutdown(): void;

    /**
     * 返回此实现所基于的Open Mobile API规范的版本号。
     *
     * @returns { string } OMA版本号（例如，“3.3”表示Open Mobile API规范版本3.3）
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getVersion(): string;
  }

  /**
   * Reader的实例表示该设备支持的SE，如果支持eSE、SIM和SIM2，则返回3个实例，其中SIM2从API version 22开始支持。通过
   * [SEService.getReaders]{@link omapi.SEService.getReaders}获取Reader实例。
   *
   * @syscap SystemCapability.Communication.SecureElement
   * @since 10 dynamic
   */
  export interface Reader {
    /**
     * 返回此Reader的名称。如果此读卡器是SIM Reader，则其名称必须为“SIM”。如果此读卡器是SIM2 Reader，则其名称必须为“SIM2”。如果读卡器是eSE，则其名称须为“eSE”。
     *
     * @returns { string } [Reader]{@link omapi.Reader}名称。
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getName(): string;

    /**
     * 检查当前Reader所对应的安全单元是否可用。
     *
     * @returns { boolean } true: 安全单元可用， false: 安全单元不可用。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    isSecureElementPresent(): boolean;

    /**
     * 在SE Reader实例上创建连接会话，返回Session实例。在一个Reader上可能同时打开多个会话。
     *
     * @returns { Session } 连接会话Session实例。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    openSession(): Session;

    /**
     * 关闭在此Reader上打开的所有Session。所有这些Session打开的所有Channel都将关闭。
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    closeSessions(): void;
  }

  /**
   * Session的实例表示在某个SE Reader实例上创建连接会话。通过[Reader.openSession]{@link omapi.Reader.openSession}获取Session实例。
   *
   * @syscap SystemCapability.Communication.SecureElement
   * @since 10 dynamic
   */
  export interface Session {
    /**
     * 获取提供此Session的Reader实例。
     *
     * @returns { Reader } 返回此Session的Reader实例。
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getReader(): Reader;

    /**
     * 获取该SE的ATR。如果该SE的ATR不可用，则应返回空数组。
     *
     * @returns { number[] } 返回SE的ATR，SE的ATR不可用时，返回空的数组。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getATR(): number[];

    /**
     * 关闭与SE的当前会话连接。这将关闭此Session打开的所有Channel。
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    close(): void;

    /**
     *
     * @returns { boolean } True if the session is closed, false otherwise.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    isClosed(): boolean;

    /**
     * 关闭此Session上打开的所有Channel。
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    closeChannels(): void;

    /**
     * 打开基础通道，参考[ISO 7816-4]协议，返回基础Channel实例对象。SE不能提供基础Channel或应用程序没有访问SE的权限时，返回null。使用Promise异步回调。
     *
     * @param { number[] } aid - 在此Channel上选择的Applet的AID或如果没有Applet被选择时空的数组。
     * @returns { Promise<Channel> } 以Promise形式异步返回可用的基础Channel对象实例。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, an attempt is made to use an SE session that has been
     *     closed.
     * @throws { BusinessError } 3300102 - NoSuchElementError, the AID on the SE is not available or cannot be selected.
     * @throws { BusinessError } 3300103 - SecurityError, the calling application cannot be granted access to this AID
     *     or the default applet on this session.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    openBasicChannel(aid: number[]): Promise<Channel>;

    /**
     * 打开基础通道，参考[ISO 7816-4]协议，返回基础Channel实例对象。SE不能提供基础Channel或应用程序没有访问SE的权限时，返回null。使用callback异步回调。
     *
     * @param { number[] } aid - 在此Channel上选择的Applet的AID或如果没有Applet被选择时空的数组。
     * @param { AsyncCallback<Channel> } callback - 以callback形式异步返回可用的基础Channel对象实例。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, an attempt is made to use an SE session that has been
     *     closed.
     * @throws { BusinessError } 3300102 - NoSuchElementError, the AID on the SE is not available or cannot be selected.
     * @throws { BusinessError } 3300103 - SecurityError, the calling application cannot be granted access to this AID
     *     or the default applet on this session.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    openBasicChannel(aid: number[], callback: AsyncCallback<Channel>): void;

    /**
     * 打开基础通道，参考[ISO 7816-4]协议，返回基础Channel实例对象。SE不能提供基础Channel或应用程序没有访问SE的权限时，返回null。使用Promise异步回调。
     *
     * @param { number[] } aid - 在此Channel上选择的Applet的AID或如果没有Applet被选择时空的数组。
     * @param { number } p2 - 在该Channel上执行的SELECT APDU的P2参数。
     * @returns { Promise<Channel> } 以Promise形式异步返回可用的基础Channel对象实例。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, an attempt is made to use an SE session that has been
     *     closed.
     * @throws { BusinessError } 3300102 - NoSuchElementError, the AID on the SE is not available or cannot be selected.
     * @throws { BusinessError } 3300103 - SecurityError, the calling application cannot be granted access to this AID
     *     or the default applet on this session.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    openBasicChannel(aid: number[], p2: number): Promise<Channel>;

    /**
     * 打开基础通道，参考[ISO 7816-4]协议，返回基础Channel实例对象。SE不能提供基础Channel或应用程序没有访问SE的权限时，返回null。使用callback异步回调。
     *
     * @param { number[] } aid - 在此Channel上选择的Applet的AID或如果没有Applet被选择时空的数组。
     * @param { number } p2 - 此Channel上执行SELECT APDU命令的P2参数。
     * @param { AsyncCallback<Channel> } callback - 以callback形式异步返回可用的基础Channel对象实例。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, an attempt is made to use an SE session that has been
     *     closed.
     * @throws { BusinessError } 3300102 - NoSuchElementError, the AID on the SE is not available or cannot be selected.
     * @throws { BusinessError } 3300103 - SecurityError, the calling application cannot be granted access to this AID
     *     or the default applet on this session.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    openBasicChannel(aid: number[], p2: number, callback: AsyncCallback<Channel>): void;

    /**
     * 打开逻辑通道，参考[ISO 7816-4]协议，返回逻辑Channel实例对象。SE不能提供逻辑Channel或应用程序没有访问SE的权限时，返回null。使用Promise异步回调。
     *
     * @param { number[] } aid - 在此Channel上选择的Applet的AID或如果没有Applet被选择时空的数组。
     * @returns {  Promise<Channel> } Promise used to return the logical channel instance obtained.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, an attempt is made to use an SE session that has been
     *     closed.
     * @throws { BusinessError } 3300102 - NoSuchElementError, the AID on the SE is not available or cannot be selected
     *     or
     *     a logical channel is already open to a non-multi-selectable applet.
     * @throws { BusinessError } 3300103 - SecurityError, the calling application cannot be granted access to this AID
     *     or the default applet on this session.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    openLogicalChannel(aid: number[]): Promise<Channel>;

    /**
     * 打开逻辑通道，参考[ISO 7816-4]协议，返回逻辑Channel实例对象。SE不能提供逻辑Channel或应用程序没有访问SE的权限时，返回null。使用callback异步回调。
     *
     * @param { number[] } aid - 在此Channel上选择的Applet的AID或如果没有Applet被选择时空的数组。
     * @param { AsyncCallback<Channel> } callback - 以callback形式异步返回可用的逻辑Channel对象实例。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, an attempt is made to use an SE session that has been
     *     closed.
     * @throws { BusinessError } 3300102 - NoSuchElementError, the AID on the SE is not available or cannot be selected
     *     or
     *     a logical channel is already open to a non-multi-selectable applet.
     * @throws { BusinessError } 3300103 - SecurityError, the calling application cannot be granted access to this AID
     *     or the default applet on this session.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    openLogicalChannel(aid: number[], callback: AsyncCallback<Channel>): void;

    /**
     * 打开逻辑通道，参考[ISO 7816-4]协议，返回逻辑Channel实例对象。SE不能提供逻辑Channel或应用程序没有访问SE的权限时，返回null。使用Promise异步回调。
     *
     * @param { number[] } aid - 在此Channel上选择的Applet的AID或如果没有Applet被选择时空的数组。
     * @param { number } p2 - 此Channel上执行SELECT APDU命令的P2参数。
     * @returns { Promise<Channel> } 以Promise形式异步返回可用的逻辑Channel实例对象。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, an attempt is made to use an SE session that has been
     *     closed.
     * @throws { BusinessError } 3300102 - NoSuchElementError, the AID on the SE is not available or cannot be selected
     *     or
     *     a logical channel is already open to a non-multi-selectable applet.
     * @throws { BusinessError } 3300103 - SecurityError, the calling application cannot be granted access to this AID
     *     or the default applet on this session.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    openLogicalChannel(aid: number[], p2: number): Promise<Channel>;

    /**
     * 打开逻辑通道，参考[ISO 7816-4]协议，返回Channel实例对象。SE不能提供逻辑Channel或应用程序没有访问SE的权限时，返回null。使用callback异步回调。
     *
     * @param { number[] } aid - 在此Channel上选择的Applet的AID或如果没有Applet被选择时空的数组。
     * @param { number } p2 - 此Channel上执行SELECT APDU命令的P2参数。
     * @param { AsyncCallback<Channel> } callback - 以callback形式异步返回可用的逻辑Channel对象实例。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, an attempt is made to use an SE session that has been
     *     closed.
     * @throws { BusinessError } 3300102 - NoSuchElementError, the AID on the SE is not available or cannot be selected
     *     or
     *     a logical channel is already open to a non-multi-selectable applet.
     * @throws { BusinessError } 3300103 - SecurityError, the calling application cannot be granted access to this AID
     *     or the default applet on this session.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    openLogicalChannel(aid: number[], p2: number, callback: AsyncCallback<Channel>): void;
  }

  /**
   * Channel的实例表示在某个Session实例上创建通道，可能为基础通道或逻辑通道。通过
   * [Session.openBasicChannel]{@link omapi.Session.openBasicChannel(aid: number[])}或
   * [Session.openLogicalChannel]{@link omapi.Session.openLogicalChannel(aid: number[])}获取Channel实例。
   *
   * @syscap SystemCapability.Communication.SecureElement
   * @since 10 dynamic
   */
  export interface Channel {
    /**
     * 获取打开该Channel的Session对象。
     *
     * @returns { Session } 该Channel绑定的Session 对象。
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getSession(): Session;

    /**
     * 关闭Channel。
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    close(): void;

    /**
     * 检查该Channel是否为基础Channel。
     *
     * @returns { boolean } true: 该Channel是基础Channel, false：该Channel逻辑Channel 。
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    isBasicChannel(): boolean;

    /**
     * 检查该Channel是否已被关闭。
     *
     * @returns { boolean } true: Channel是关闭的，false: 不是关闭的。
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    isClosed(): boolean;

    /**
     * 获取SELECT Applet时的响应数据，包含状态字。
     *
     * @returns { number[] } SELECT Applet时的响应数据，包含状态字。
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getSelectResponse(): number[];

    /**
     * 向SE发送APDU数据，数据符合ISO/IEC 7816规范。使用Promise异步回调。
     *
     * @param { number[] } command - 需要发送到SE的APDU数据。
     * @returns { Promise<number[]> } 以Promise形式异步返回接收到的响应APDU数据，number数组。若芯片捕获异常则返回全0。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, an attempt is made to use an SE session or channel that
     *     has been closed.
     * @throws { BusinessError } 3300103 - SecurityError, the command is filtered by the security policy.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    transmit(command: number[]): Promise<number[]>;

    /**
     * 向SE发送APDU数据，数据符合ISO/IEC 7816规范。使用callback异步回调。
     *
     * @param { number[] } command - 需要发送到SE的APDU数据。
     * @param { AsyncCallback<number[]> } callback - 返回接收到的响应APDU数据，number数组。若芯片捕获异常则返回全0。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, an attempt is made to use an SE session or channel that
     *     has been closed.
     * @throws { BusinessError } 3300103 - SecurityError, the command is filtered by the security policy.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    transmit(command: number[], callback: AsyncCallback<number[]>): void;
  }

  /**
   * 定义不同的SE服务状态值。
   *
   * @syscap SystemCapability.Communication.SecureElement
   * @since 10 dynamic
   */
  enum ServiceState {
    /**
     * SE服务状态已断开。
     *
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    DISCONNECTED = 0,

    /**
     * SE服务状态已连接。
     *
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    CONNECTED = 1
  }

  /**
   * 取消订阅服务状态更改事件。
   *
   * @param { 'stateChanged' } type - 取消订阅监听的事件类型，固定填'stateChanged' 。
   * @param { Callback<ServiceState> } callback - 返回SE服务状态的回调。不填则取消订阅该type对应的所有回调。
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.SecureElement
   * @since 18 dynamic
   */
  function off(type: 'stateChanged', callback?: Callback<ServiceState>): void;

  /**
   * 注册监听服务状态变化事件。
   *
   * 调用[omapi.newSEService]{@link omapi.newSEService}或[omapi.createService]{@link omapi.createService}创建服务成功后再用on接口注册回调。
   *
   * @param { 'stateChanged' } type - 订阅监听的事件类型，固定填'stateChanged' 。
   * @param { Callback<ServiceState> } callback - 返回SE服务状态的回调 。
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.SecureElement
   * @since 18 dynamic
   */
  function on(type: 'stateChanged', callback: Callback<ServiceState>): void;
}
export default omapi;