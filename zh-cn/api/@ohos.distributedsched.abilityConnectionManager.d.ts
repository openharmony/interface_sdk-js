/*
 * Copyright (c) 2024-2026 Huawei Device Co., Ltd.
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
 * @kit DistributedServiceKit
 */

import { Callback } from './@ohos.base';
import image from './@ohos.multimedia.image';
import Context from './application/Context';
import colorSpaceManager from './@ohos.graphics.colorSpaceManager';

/**
 * abilityConnectionManager模块提供了应用协同接口管理能力。设备组网成功（需登录同账号、双端打开蓝牙）后，系统应用和三方应用可以跨设备拉起同应用的一个
 * [UIAbility]{@link @ohos.app.ability.UIAbility}，拉起并连接成功后可实现跨设备数据传输（文本信息）。
 *
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace abilityConnectionManager {

  /**
   * 应用协同信息。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface PeerInfo {
    /**
     * 对端设备ID。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * 对端应用的包名。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 对端应用的模块名。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * 对端应用的组件名。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * 应用设置的服务名称。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    serviceName?: string;
    }

  /**
   * 应用连接时所需的连接选项。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface ConnectOptions {
    /**
     * true代表需要传输数据，false代表不需要传输数据。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    needSendData?: boolean;

    /**
     * Send Stream Data Configuration Options. WiFi needs to be turned on.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    needSendStream?: boolean;

    /**
     * Receive Stream Data Configuration Options. WiFi needs to be turned on.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    needReceiveStream?: boolean;

    /**
     * 配置应用启动选项。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    startOptions?: StartOptionParams;

    /**
     * 配置连接所需的额外信息。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    parameters?: Record<string, string>;
    }

  /**
   * 连接的结果。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface ConnectResult {
    /**
     * true表示连接成功，false表示连接失败。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    isConnected: boolean;

    /**
     * 表示连接错误码。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    errorCode?: ConnectErrorCode;

    /**
     * 表示拒绝连接的原因。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    reason?: string;
    }

  /**
   * 连接的错误码。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ConnectErrorCode {
    /**
     * 表示应用之间存在已连接的会话。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    CONNECTED_SESSION_EXISTS = 0,

    /**
     * 表示对端应用拒绝了协作请求。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_APP_REJECTED = 1,

    /**
     * 表示本端WiFi未开启。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    LOCAL_WIFI_NOT_OPEN = 2,

    /**
     * 表示对端WiFi未开启。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_WIFI_NOT_OPEN = 3,

    /**
     * 表示未实现onCollaborate方法。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_ABILITY_NO_ONCOLLABORATE = 4,

    /**
     * 表示系统内部错误。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SYSTEM_INTERNAL_ERROR = 5
    }

  /**
   * 启动选项参数的枚举。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum StartOptionParams {
    /**
     * 表示将对端应用启动至前台。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    START_IN_FOREGROUND = 0,

    /**
     * Launching the peer application to the background.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    START_IN_BACKGROUND = 1
    }

  /**
   * 回调方法的接收信息。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface EventCallbackInfo {
    /**
     * 表示当前事件对应的协同会话ID。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    sessionId: int;

    /**
     * 表示断连原因。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    reason?: DisconnectReason;

    /**
     * 表示接收的消息。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    msg?: string;

    /**
     * 表示接收的字节流。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    data?: ArrayBuffer;

    /**
     * Received image.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    image?: image.PixelMap;
    }

  /**
   * 协同事件信息。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface CollaborateEventInfo {
    /**
     * 表示协同事件的类型。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    eventType: CollaborateEventType;

    /**
     * 表示协同事件的消息内容。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    eventMsg?: string;
    }

  /**
   * 协同事件类型的枚举。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  enum CollaborateEventType {
    /**
     * 表示任务发送失败。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SEND_FAILURE = 0,

    /**
     * 表示色彩空间转换失败。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    COLOR_SPACE_CONVERSION_FAILURE = 1
    }

  /**
   * 当前断连原因的枚举。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  enum DisconnectReason {
    /**
     * 表示对端应用主动关闭了协作。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_APP_CLOSE_COLLABORATION = 0,

    /**
     * 表示对端应用退出。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_APP_EXIT = 1,

    /**
     * 表示网络断开。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    NETWORK_DISCONNECTED = 2,
    }

  /**
   * 注册connect事件的回调监听。使用callback异步回调。
   *
   * @param { 'connect' } type - 事件回调类型，支持的事件为'connect'，完成
   *     [abilityConnectionManager.connect()]{@link abilityConnectionManager.connect(sessionId: int)}调用，触发该事件。
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 注册的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'connect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * 取消connect事件的回调监听。
   *
   * @param { 'connect' } type - 事件回调类型，支持的事件为'connect'。
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 注册的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'connect', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * Registers connect event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('connect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onConnect(sessionId: int,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters connect event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } [callback] - Used to handle ('connect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offConnect(sessionId: int,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * 注册disconnect事件的回调监听。
   *
   * @param { 'disconnect' } type - 事件回调类型，支持的事件为'disconnect'，完成
   *     [abilityConnectionManager.disconnect()]{@link abilityConnectionManager.disconnect(sessionId: int)}调用，触发该事件。
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 注册的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'disconnect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * 取消disconnect事件的回调监听。
   *
   * @param { 'disconnect' } type - 事件回调类型，支持的事件为'disconnect'。
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 注册的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'disconnect', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * Registers disconnect event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('disconnect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onDisconnect(sessionId: int,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters disconnect event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } [callback] - Used to handle ('disconnect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offDisconnect(sessionId: int,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * 注册receiveMessage事件的回调监听。
   *
   * @param { 'receiveMessage' } type - 事件回调类型，支持的事件为'receiveMessage'，完成
   *     [abilityConnectionManager.sendMessage()]{@link abilityConnectionManager.sendMessage(sessionId: int, msg: string)}调用，
   *     触发该事件。
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 注册的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'receiveMessage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * 取消receiveMessage事件的回调监听。
   *
   * @param { 'receiveMessage' } type - 事件回调类型，支持的事件为'receiveMessage'。
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 注册的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'receiveMessage', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * Registers receiveMessage event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveMessage') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onReceiveMessage(sessionId: int,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters receiveMessage event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } [callback] - Used to handle ('receiveMessage') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offReceiveMessage(sessionId: int,
        callback?: Callback<EventCallbackInfo>): void;


  /**
   * 注册receiveData事件的回调监听。
   *
   * @param { 'receiveData' } type - 事件回调类型，支持的事件为'receiveData'，完成
   *     [abilityConnectionManager.sendData()]{@link abilityConnectionManager.sendData(sessionId: int, data: ArrayBuffer)}调用，
   *     触发该事件。
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 注册的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'receiveData', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * 取消receiveData事件的回调监听。
   *
   * @param { 'receiveData' } type - 事件回调类型，支持的事件为'receiveData'，完成。
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 注册的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'receiveData', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * Registers receiveData event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveData') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onReceiveData(sessionId: int,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters receiveData event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } [callback] - Used to handle ('receiveData') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offReceiveData(sessionId: int,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * Registers receiveImage event.
   *
   * @param { 'receiveImage' } type - Registration Type, 'receiveImage'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveImage') command.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'receiveImage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters receiveImage event.
   *
   * @param { 'receiveImage' } type - Registration Type, 'receiveImage'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveImage') command.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'receiveImage', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * Registers receiveImage event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveImage') command.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function onReceiveImage(sessionId: int,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters receiveImage event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } [callback] - Used to handle ('receiveImage') command.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function offReceiveImage(sessionId: int,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * Registers collaborateEvent event.
   *
   * @param { 'collaborateEvent' } type - Registration Type, 'collaborateEvent'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<CollaborateEventInfo> } callback - Called when an error event comes.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'collaborateEvent', sessionId: number,
        callback: Callback<CollaborateEventInfo>): void;

  /**
   * Unregisters collaborateEvent event.
   *
   * @param { 'collaborateEvent' } type - Registration Type, 'collaborateEvent'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<CollaborateEventInfo> } callback - Called when an error event comes.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'collaborateEvent', sessionId: number,
        callback?: Callback<CollaborateEventInfo>): void;

  /**
   * Registers collaborateEvent event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<CollaborateEventInfo> } callback - Called when an error event comes.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function onCollaborateEvent(sessionId: int,
        callback: Callback<CollaborateEventInfo>): void;

  /**
   * Unregisters collaborateEvent event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<CollaborateEventInfo> } [callback] - Called when an error event comes.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function offCollaborateEvent(sessionId: int,
        callback?: Callback<CollaborateEventInfo>): void;

  /**
   * 创建应用间的协同会话。
   *
   * @permission ohos.permission.INTERNET and ohos.permission.GET_NETWORK_INFO and ohos.permission.SET_NETWORK_INFO and
   *     ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } serviceName - 应用设置的服务名称（两端必须一致），最大长度为256字符。
   * @param { Context } context - 表示应用上下文。
   * @param { PeerInfo } peerInfo - 对端的协同信息。
   * @param { ConnectOptions } connectOptions - 应用设置的连接选项。
   * @returns { int} 成功创建的协同会话ID。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function createAbilityConnectionSession(serviceName: string, context: Context, peerInfo: PeerInfo,
        connectOptions: ConnectOptions): int;

  /**
   * 销毁应用间的协同会话。
   *
   * @param { int } sessionId - 待销毁的协同会话ID。<br />取值范围是大于100的整数。
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function destroyAbilityConnectionSession(sessionId: int): void;

  /**
   * 获取指定会话中对端应用信息。
   *
   * @param { int } sessionId - 协同会话ID。
   * @returns { PeerInfo | undefined } 若存在对应PeerInfo，则返回接收端的协作应用信息。若sessionId未找到，则查询失败，返回undefined。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function getPeerInfoById(sessionId: int): PeerInfo | undefined;

  /**
   * Get the application information in the ability connection session
   *
   * @param { int } sessionId - Ability connection Session id.
   * @returns { PeerInfo | null } Returns the collaborative application information at the sink end.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function getPeerInfoById(sessionId: int): PeerInfo | null;

  /**
   * 创建协同会话成功并获得会话ID后，设备A上可进行UIAbility的连接。使用Promise异步回调。
   *
   * @param { int } sessionId - 已创建的协同会话ID。
   * @returns { Promise<ConnectResult> } 以Promise形式返回[连接结果]{@link abilityConnectionManager.ConnectResult}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function connect(sessionId: int): Promise<ConnectResult>;

  /**
   * 当协同业务执行完毕后，协同双端的任意一台设备，应断开UIAbility的连接，结束协同状态。
   *
   * @param { int } sessionId - 协同会话ID
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function disconnect(sessionId: int): void;

  /**
   * 设备B上的应用，在创建协同会话成功并获得会话ID后，调用acceptConnect()方法接受连接。使用Promise异步回调。
   *
   * @param { int } sessionId - 已创建的协同会话ID。
   * @param { string } token - 设备A应用传入的token值。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function acceptConnect(sessionId: int, token: string): Promise<void>;

  /**
   * 在跨端应用协同过程中，在拒绝对端的连接请求后，向对端发送拒绝原因。
   *
   * @param { string } token - 用于协作服务管理的令牌。
   * @param { string } reason - 连接被拒绝的原因。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function reject(token: string, reason: string): void;

  /**
   * 应用连接成功后，设备A或设备B可向对端设备发送文本信息。
   *
   * @param { int } sessionId - 协同会话ID。
   * @param { string } msg - 文本信息内容（内容最大限制为1KB）。
   * @returns { Promise<void> } 无返回结果的promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function sendMessage(sessionId: int, msg: string): Promise<void>;

  /**
   * 应用连接成功后，设备A或设备B可向对端设备发送[ArrayBuffer](docroot://arkts-utils/arraybuffer-object.md)字节流。
   *
   * @param { int } sessionId - 协同会话ID。
   * @param { ArrayBuffer } data - 字节流信息。
   * @returns { Promise<void> } 无返回结果的promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function sendData(sessionId: int, data: ArrayBuffer): Promise<void>;

  /**
   * Send image data.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { image.PixelMap } image - image data to be sent.
   * @param { int } [quality] - image compression quality, range 0~100, default 30.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function sendImage(sessionId: int, image: image.PixelMap, quality?: int): Promise<void>;

  /**
   * Creating a Stream.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { StreamParam } param - Transport Stream Parameters
   * @returns {Promise<int>}  The promise returned by the function, contain the ID of a transport stream.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 32300001 - Only one stream can be created for the current session.
   * @throws { BusinessError } 32300003 - Bitrate not supported.
   * @throws { BusinessError } 32300004 - Color space not supported.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function createStream(sessionId: int, param: StreamParam): Promise<int>;

  /**
   * Sets the transmission surface.
   *
   * @param { int } streamId - Indicates the ID of a transport stream.
   * @param { string } surfaceId - Surface ID.
   * @param { SurfaceParam } param - Surface Parameters
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function setSurfaceId(streamId: int, surfaceId: string, param: SurfaceParam): void;
  /**
   * Obtains the transmission surface.
   *
   * @param { int } streamId - Indicates the ID of a transport stream.
   * @param { SurfaceParam } param - Surface Parameters
   * @returns {string}  Returns the ID of a surface.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function getSurfaceId(streamId: int, param: SurfaceParam): string;

  /**
   * Update surface parameters.
   *
   * @param { int } streamId - Stream ID.
   * @param { SurfaceParam } param - Surface Parameters
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function updateSurfaceParam(streamId: int, param: SurfaceParam): void;

  /**
   * Destroy the Stream.
   *
   * @param { int } streamId - Indicates the ID of a transport stream.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function destroyStream(streamId: int): void;

  /**
   * Start Streaming
   *
   * @param { int } streamId - Indicates the ID of a transport stream.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 32300002 - The stream at the receive end is not started.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function startStream(streamId: int): void;

  /**
   * Stop Streaming
   *
   * @param { int } streamId - Indicates the ID of a transport stream.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function stopStream(streamId: int): void;

  /**
   * Streaming configuration parameters.
   *
   * @interface StreamParam
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface StreamParam {
    /**
     * Stream name, the receive end must be consistent with the transmit end.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Stream transmission role, which can be a receive stream or a transmit stream.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    role: StreamRole;

    /**
     * This value indicates video bitrate, default 80(kbps). Only valid on the sender side.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    bitrate?: int;

    /**
     * The target color space for conversion. Currently, only BT709_LIMIT is supported.
     * If the video format on the sender side is HDR and needs to be converted to SDR during transmission, this 
     * parameter should be set.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    colorSpaceConversionTarget?: colorSpaceManager.ColorSpace;
    }

  /**
   * Surface configuration parameters.
   *
   * @interface SurfaceParam
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface SurfaceParam {
    /**
     * Encoding width. Must be set before stream starts and cannot update once set.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * Encoding length. Must be set before stream starts and cannot update once set.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    height: int;

    /**
     * Video PixelFormat, this option must be configured on the sender.
     * Must be set before stream starts and cannot update once set.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    format?: VideoPixelFormat;

    /**
     * This value identifies the rotation angle of the video.
     * the range of rotation angle should be {0, 90, 180, 270}, default is 0
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    rotation?: int;

    /**
     * This value indicates whether the video is reversed.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    flip?: FlipOptions;
    }

  /**
   * Flip option.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum FlipOptions {
    /**
     * Horizontal Flip
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    HORIZONTAL = 0,

    /**
     * Vertical Flip
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    VERTICAL = 1
    }

  /**
   * Stream transmission role.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum StreamRole {
    /**
     * This status indicates the stream is a send stream.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SOURCE = 0,

    /**
     * This status indicates the stream is a receive stream.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SINK = 1
    }

  /**
   * Video pixelFormat Configuration Options.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum VideoPixelFormat {
    /**
     * Unknown.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    UNKNOWN = -1,

    /**
     * NV12. yuv 420 semiplanar.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    NV12 = 0,

    /**
     * NV21. yvu 420 semiplanar.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    NV21 = 1,
    }

  /**
   * 应用协作键值的枚举。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CollaborationKeys {
    /**
     * 表示对端设备信息的键值。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_INFO = 'ohos.collaboration.key.peerInfo',

    /**
     * 表示连接选项的键值。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    CONNECT_OPTIONS = 'ohos.collaboration.key.connectOptions',

    /**
     * 表示协作类型的键值。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    COLLABORATE_TYPE = 'ohos.collaboration.key.abilityCollaborateType',
    }

  /**
   * 应用协作键值的枚举。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CollaborationValues {
    /**
     * 表示默认的协作类型。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    ABILITY_COLLABORATION_TYPE_DEFAULT = 'ohos.collaboration.value.abilityCollab',

    /**
     * 表示连接代理的协作类型。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    ABILITY_COLLABORATION_TYPE_CONNECT_PROXY = 'ohos.collaboration.value.connectProxy'
    }

  /**
   * Registers collaborateEvent event.
   *
   * @param { 'collaborateEvent' } type - Registration Type, 'collaborateEvent'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<CollaborateEventInfo> } callback - Called when an error event comes.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @since 18 dynamic
   */
  function on(type: 'collaborateEvent', sessionId: number,
        callback: Callback<CollaborateEventInfo>): void;

  /**
   * Unregisters collaborateEvent event.
   *
   * @param { 'collaborateEvent' } type - Registration Type, 'collaborateEvent'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<CollaborateEventInfo> } callback - Called when an error event comes.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @since 18 dynamic
   */
  function off(type: 'collaborateEvent', sessionId: number,
        callback?: Callback<CollaborateEventInfo>): void;


}
export default abilityConnectionManager;