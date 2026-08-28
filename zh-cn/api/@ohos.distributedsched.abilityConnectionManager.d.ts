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
 * abilityConnectionManager模块提供了应用协同接口管理能力。设备组网成功（需登录同账号、双端打开蓝牙）后，
 * 系统应用和三方应用可以跨设备拉起同应用的一个[UIAbility]{@link @ohos.app.ability.UIAbility}，
 * 拉起并连接成功后可实现跨设备数据传输（文本信息）。
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
     * 对端设备的网络ID，用于标识要连接的远程设备。
     * 可通过分布式设备管理接口getAvailableDeviceListSync获取。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * 对端应用的包名，用于唯一标识要连接的应用。需与对端应用的bundleName保持一致。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 对端应用的模块名，用于标识要连接的应用模块。通常为'entry'或其他自定义模块名。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * 对端应用的组件名，用于标识要连接的UIAbility组件。需与对端应用的abilityName保持一致。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * 应用设置的服务名称。若设置此值，需与createAbilityConnectionSession接口的serviceName参数保持一致。
     * 不设置此值时，使用默认服务名称。
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
     * 是否需要传输数据。传入true表示需要传输数据（可调用sendMessage和sendData方法），
     * 传入false表示不需要传输数据。不传入时默认为false。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    needSendData?: boolean;

    /**
     * true表示需要发送流（当本端需要向对端发送视频流时选择），
     * false表示不需要发送流（当本端只接收不发送时选择）。默认值为false。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    needSendStream?: boolean;

    /**
     * true表示需要接收流（当本端需要从对端接收视频流时选择），
     * false表示不需要接收流（当本端只发送不接收时选择）。默认值为false。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    needReceiveStream?: boolean;

    /**
     * 应用启动选项。START_IN_FOREGROUND（值为0）表示将对端应用启动至前台，
     * 适合需要用户交互的场景。不传入时使用系统默认启动配置。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    startOptions?: StartOptionParams;

    /**
     * 配置连接所需的额外信息。当需要传递自定义参数到对端设备时传入此参数，
     * 例如身份标识、业务标识等。不传入时不传递额外信息。
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
     * true表示连接成功；false表示连接失败，具体原因请查看errorCode字段或reason字段。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    isConnected: boolean;

    /**
     * 表示连接错误码。连接失败时存在，用于标识具体的错误原因。连接成功时不存在。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    errorCode?: ConnectErrorCode;

    /**
     * 表示拒绝连接的原因，仅在连接被拒绝时返回。该值为对端应用调用reject接口时传入的reason参数，
     * 用于告知本端拒绝的具体原因。连接成功或未被拒绝时无此字段。
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
     * 将对端应用启动至后台。
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
     * 表示断连原因。触发disconnect事件时存在，用于标识具体的断连原因。其他事件类型下不存在。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    reason?: DisconnectReason;

    /**
     * 表示接收的消息。触发receiveMessage事件时存在，包含接收到的文本消息内容。其他事件类型下不存在。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    msg?: string;

    /**
     * 表示接收的字节流。触发receiveData事件时存在，包含接收到的二进制数据。其他事件类型下不存在。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    data?: ArrayBuffer;

    /**
     * 接收的图片。
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
     * 表示协同事件的类型。（0表示SEND_FAILURE，1表示COLOR_SPACE_CONVERSION_FAILURE）。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    eventType: CollaborateEventType;

    /**
     * 表示协同事件的消息内容。eventType为SEND_FAILURE或COLOR_SPACE_CONVERSION_FAILURE时存在，
     * 包含事件相关的详细消息信息。
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
     * 表示任务发送失败。在跨设备协同过程中，当发送协作任务（如协作事件）失败时产生此事件，
     * 常见原因包括网络异常、对端设备不可达等。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SEND_FAILURE = 0,

    /**
     * 表示色彩空间转换失败。在跨设备图像协同场景下，当需要将图像数据从源设备色彩空间转换为
     *     目标设备色彩空间格式失败时产生此事件，常见原因包括色彩格式不支持或转换参数
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
    NETWORK_DISCONNECTED = 2
  }

  /**
   * 注册connect事件的回调监听。当connect接口调用成功后会触发该事件。使用callback异步回调。
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
   * @param { 'connect' } type - 事件回调类型，支持的事件为'connect'，
   *     需通过abilityConnectionManager.on('connect')注册后才能取消。
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 回调函数，不传则取消所有该事件的回调监听。
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
   * @param { 'disconnect' } type - 事件回调类型，支持的事件为'disconnect'，
   *     需通过abilityConnectionManager.on('disconnect')注册后才能取消。
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 要取消的回调函数，不传则取消所有该事件的回调监听。
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
   * @param { 'receiveMessage' } type - 事件回调类型，支持的事件为'receiveMessage'，
   *     需通过abilityConnectionManager.on('receiveMessage')注册后才能取消。
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 要取消的回调函数，不传则取消所有该事件的回调监听。
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
   * @param { 'receiveData' } type - 事件回调类型，支持的事件为'receiveData'，
   *     需通过abilityConnectionManager.on('receiveData')注册后才能取消。 
   * @param { number } sessionId - 创建的协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 要取消的回调函数，不传则取消所有该事件的回调监听。
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
   * 注册receiveImage事件的回调监听。
   *
   * @param { 'receiveImage' } type - 事件注册类型，'receiveImage'。
   * @param { number } sessionId - 协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 用于处理('receiveImage')事件的回调函数。
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
   * 取消receiveImage事件的回调监听。
   *
   * @param { 'receiveImage' } type - 事件注册类型，'receiveImage'。
   * @param { number } sessionId - 协同会话ID。
   * @param { Callback<EventCallbackInfo> } callback - 用于处理('receiveImage')事件的回调函数。
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
   * 注册collaborateEvent事件的回调监听。
   *
   * @param { 'collaborateEvent' } type - 事件注册类型，'collaborateEvent'。
   * @param { number } sessionId - 协同会话ID。
   * @param { Callback<CollaborateEventInfo> } callback - 错误事件回调函数。
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
   * 取消collaborateEvent事件的回调监听。
   *
   * @param { 'collaborateEvent' } type - 事件注册类型，'collaborateEvent'。
   * @param { number } sessionId - 协同会话ID。
   * @param { Callback<CollaborateEventInfo> } callback - 错误事件回调函数。
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
   * 创建应用间的协同会话。协同会话用于管理跨设备通信的连接状态，
   * 需要先在两端设备分别创建会话，然后通过connect建立连接。
   *
   * @permission ohos.permission.INTERNET and ohos.permission.GET_NETWORK_INFO and ohos.permission.SET_NETWORK_INFO and
   *     ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } serviceName - 应用设置的服务名称（两端必须一致），最大长度为256字符。
   * @param { Context } context - 表示应用上下文。
   * @param { PeerInfo } peerInfo - 对端的协同信息。
   * @param { ConnectOptions } connectOptions - 应用设置的连接选项。
   * @returns { int} 成功创建的协同会话ID，用于后续的connect、acceptConnect、sendMessage、sendData、disconnect等接口调用。
   *     取值范围是大于100的整数。
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
   * 销毁应用间的协同会话，与createAbilityConnectionSession配对使用用于释放会话资源。
   * 此接口需在成功创建协同会话后调用。销毁会话会释放相关资源，建议先调用disconnect断开连接后再销毁会话。
   * 不调用此方法会导致资源泄漏。
   *
   * @param { int } sessionId - 待销毁的协同会话ID。<br />取值范围是不小于100的整数。
   *     传入小于100的值或不存在的协同会话ID时返回错误码401。
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function destroyAbilityConnectionSession(sessionId: int): void;

  /**
   * 获取指定会话中对端应用信息。此接口需在成功创建协同会话后调用。
   *
   * @param { int } sessionId - 协同会话ID。由createAbilityConnectionSession接口返回。
   * @returns { PeerInfo | undefined } 若存在对应PeerInfo，则返回接收端的协作应用信息。
   *     若sessionId未找到，则查询失败，返回undefined。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function getPeerInfoById(sessionId: int): PeerInfo | undefined;

  /**
   * 创建协同会话成功并获得会话ID后，设备A上可进行UIAbility的连接。调用此接口前，
   *     需先在两端设备分别创建协同会话。connect接口通过底层分布式通信服务建立连接，
   *     必须与设备B的acceptConnect配合使用才能建立成功连接，调用connect会拉起设备B应用。
   *     连接过程会触发'connect'事件通知状态变化。使用Promise异步回调。
   *     连接失败时，返回的ConnectResult对象中的errorCode字段包含具体的错误信息，
   *     可参考ConnectErrorCode枚举了解错误原因。
   *
   * @param { int } sessionId - 已创建的协同会话ID，由createAbilityConnectionSession接口返回。
   * @returns { Promise<ConnectResult> } Promise对象，成功时resolve返回ConnectResult（包含isConnected和errorCode字段），
   *     失败时reject返回错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function connect(sessionId: int): Promise<ConnectResult>;

  /**
   * 创建协同会话成功、应用连接成功、协同业务执行完毕后，协同双端的任意一台设备，应断开UIAbility的连接，
   * 结束协同状态。需在connect()建立连接后调用。
   *
   * @param { int } sessionId - 协同会话ID
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function disconnect(sessionId: int): void;

  /**
   * 设备B上的应用，在创建协同会话成功并获得会话ID后，调用acceptConnect()方法接受连接。
   * 调用此接口前，需先在两端设备分别创建协同会话。必须与设备A的connect方法配合使用：
   * 设备A调用connect会拉起设备B应用，设备B在onCollaborate生命周期中创建会话后调用acceptConnect。
   * 使用Promise异步回调。
   *
   * @param { int } sessionId - 已创建的协同会话ID。
   * @param { string } token - 设备A应用传入的token值，该值通过wantParam参数中'ohos.dms.collabToken'键获取
   *     （在应用被拉起后的onCollaborate生命周期方法的wantParam参数中获取）。
   *     当设备A调用connect方法时，系统会自动生成collabToken并通过want参数传递给设备B，
   *     设备B在onCollaborate生命周期回调中可以从wantParam参数获取此token。
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
   * @param { string } token - 用于协作服务管理的令牌。该值通过wantParam参数中'ohos.dms.collabToken'键获取
   *     （在应用被拉起后的onCollaborate生命周期方法的wantParam参数中获取）。
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
   * 创建协同会话成功并获得会话ID、调用connect接口建立连接成功后，设备A或设备B可向对端设备发送文本信息。
   * 使用Promise异步回调。
   *
   * @param { int } sessionId - 协同会话ID。
   * @param { string } msg - 文本信息内容（内容最大限制为1KB）。超出长度限制时返回错误码401。
   * @returns { Promise<void> } 无返回结果的promise对象。消息发送成功时resolve，发送失败时reject。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function sendMessage(sessionId: int, msg: string): Promise<void>;

  /**
   * 创建协同会话成功并获得会话ID、应用连接成功后，设备A或设备B可向对端设备发送
   *     [ArrayBuffer](../../arkts-utils/arraybuffer-object.md)字节流。使用Promise异步回调。
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
   * 应用连接成功并创建传输流后，设备A或设备B可向对端设备发送图片。
   *     图片会根据指定的压缩质量进行编码后，通过传输流通道发送至对端设备。
   *     发送成功后，对端设备可通过注册的回调接收图片，使用Promise异步回调。
   *     业务结束后应及时销毁传输流，否则会增加系统功耗，使用场景包括跨设备视频通话中发送视频帧、
   *     远程协作时发送截图、跨设备图片共享等需要向对端发送图片数据的场景。
   *
   * @param { int } sessionId - 表示协同会话ID，需先创建协同会话后获取。
   * @param { image.PixelMap } image - 表示图片信息。
   * @param { int } [quality] - 表示图像压缩质量，取值范围为0到100，默认值为30。
   * @returns { Promise<void> } 无返回值的Promise对象。
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
   * 应用连接成功后，设备A或设备B可创建传输流，发送图片和视频流，使用Promise异步回调。
   *
   * @param { int } sessionId - 表示协同会话ID，需先创建协同会话后获取。
   * @param { StreamParam } param - 表示传输流的配置信息。
   * @returns {Promise<int>}  返回传输流ID的Promise对象。后续操作传输流的接口（如setSurfaceId、getSurfaceId、
   *     startStream、stopStream、destroyStream等）需要使用此ID。
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
   * 设置传输流与Surface的绑定关系。Surface用于承载音视频数据的显示或采集，
   * 绑定后传输流的音视频数据将直接渲染到Surface上或从Surface采集数据。
   *
   * @param { int } streamId - 表示传输流ID，需通过createStream接口创建传输流后获取。
   * @param { string } surfaceId - 表示Surface的唯一标识符，需通过getSurfaceId接口获取。
   * @param { SurfaceParam } param - 表示Surface的配置参数，包括编码宽度、高度、像素格式等。
   *     配置后Surface将按照指定参数进行视频帧的编码和渲染。需在流启动前完成绑定。
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
   * 获取指定传输流绑定的Surface的唯一标识符。Surface ID可用于将Surface与组件关联，实现音视频数据的显示。
   *
   * @param { int } streamId - 表示传输流ID，需通过createStream接口创建传输流后获取。
   * @param { SurfaceParam } param - 表示Surface的配置参数。需在流启动前完成Surface绑定。
   * @returns {string}  Surface的唯一标识符，可用于后续setSurfaceId等操作。
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
   * 更新与传输流绑定的Surface的配置信息，使新的配置参数生效。
   *
   * @param { int } streamId - 表示传输流ID，需通过createStream接口创建传输流后获取。
   * @param { SurfaceParam } param - 表示Surface的配置参数。
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
   * 发送图片和视频流等业务结束后，创建传输流的应用应及时销毁传输流，否则会增加系统功耗。
   * 需与createStream()方法配对使用，在业务结束后必须调用此方法销毁传输流以释放资源。
   *
   * @param { int } streamId - 表示传输流ID，需通过createStream接口创建传输流后获取。
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
   * 启动指定传输流，使传输流开始发送或接收视频数据。启动前需确保传输流已完成Surface绑定，
   *     否则无法正常启动。需与stopStream()方法配对使用，使用完毕后应调用stopStream()停止传输流，
   *     最后调用destroyStream()销毁传输流以释放资源。

   *
   * @param { int } streamId - 表示传输流ID，需通过createStream接口创建传输流后获取。
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
   * 停止指定传输流，使传输流停止发送或接收视频数据。需与startStream()方法配对使用，
   * 在不需要传输数据时应调用此方法停止传输流，最后调用destroyStream()销毁传输流以释放资源。
   * 使用场景包括视频通话暂停、用户关闭摄像头、切换前后摄像头等需要临时停止视频传输时调用。
   *
   * @param { int } streamId - 表示传输流ID，需通过createStream接口创建传输流后获取。
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
   * 流传输配置的参数。用于配置传输流的传输方式和参数。其中role参数区分发送流（SOURCE）和接收流（SINK），
   * 发送流需要配置bitrate和colorSpaceConversionTarget等参数。
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
     * 流名称，接收端必须与发送端保持一致。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 流传输角色，可以是接收流或发送流。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    role: StreamRole;

    /**
     * 视频码率，默认80(kbps)。仅在发送端有效。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    bitrate?: int;

    /**
     * 表示转换的目标色彩空间。设置该参数后，视频流的色彩空间将转换为目标色彩空间，
     * 用于适配不同设备的色彩显示需求。不传此参数时不进行色彩空间转换。
     * 
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
   * Surface配置参数。
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
     * 表示编码宽度。必须在流启动前设置，流启动后到停止前均无法更新。如需更新需要将流停止后重新配置。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * 表示编码高度。必须在流启动前设置，流启动后到停止前均无法更新。如需更新需要将流停止后重新配置。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    height: int;

    /**
     * 视频像素格式，此选项必须在发送端配置。
     * 必须在流启动前设置，设置后不可更新。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    format?: VideoPixelFormat;

    /**
     * 表示视频的旋转角度（取值范围为{0, 90, 180, 270}，默认值为0）。
     *     0表示不旋转，90表示向右旋转90度（适合竖屏视频），180表示旋转180度，270表示向左旋转90度。
     *     不传入时默认为0。
     * 
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    rotation?: int;

    /**
     * 视频是否翻转。
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
   * 翻转选项。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum FlipOptions {
    /**
     * 水平翻转。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    HORIZONTAL = 0,

    /**
     * 垂直翻转。
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
   * 流传输角色。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum StreamRole {
    /**
     * 发送流。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SOURCE = 0,

    /**
     * 接收流。
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
   * 视频像素格式配置选项。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum VideoPixelFormat {
    /**
     * 未知格式。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    UNKNOWN = -1,

    /**
     * 表示NV12，YUV420半平面格式。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    NV12 = 0,

    /**
     * 表示NV21，YUV420半平面格式。
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

}
export default abilityConnectionManager;
