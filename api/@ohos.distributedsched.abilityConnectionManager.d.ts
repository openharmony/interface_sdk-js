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
 * The **abilityConnectionManager** module provides APIs for cross-device connection management. After successful
 * networking between devices (login with the same account and enabling of Bluetooth on the devices), a system
 * application and a third-party application can start a [UIAbility]{@link @ohos.app.ability.UIAbility} of the same
 * application across these devices to establish a Bluetooth connection. This way, data (specifically, text) can be
 * transmitted across the devices over the connection.
 *
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace abilityConnectionManager {

  /**
   * Defines the application collaboration information.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface PeerInfo {
    /**
     * Peer device ID.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Bundle name of the application.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Module name of the peer application.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * Ability name of the peer application.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Service name for the application.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    serviceName?: string;
    }

  /**
   * Connection options for the application.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface ConnectOptions {
    /**
     * Whether to send data. The value **true** indicates that data needs to be sent, and the value **false** indicates
     * the opposite.
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
     * Application startup options.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    startOptions?: StartOptionParams;

    /**
     * Additional configuration for the connection.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    parameters?: Record<string, string>;
    }

  /**
   * Defines the connection result.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface ConnectResult {
    /**
     * Whether the connection is successful. The value **true** indicates that the connection is successful, and the
     * value **false** indicates the opposite.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    isConnected: boolean;

    /**
     * Connection error code.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    errorCode?: ConnectErrorCode;

    /**
     * Connection rejection reason.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    reason?: string;
    }

  /**
   * Enumerates connection error codes.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ConnectErrorCode {
    /**
     * A session already exists between applications.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    CONNECTED_SESSION_EXISTS = 0,

    /**
     * The peer application rejects the collaboration request.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_APP_REJECTED = 1,

    /**
     * Wi-Fi is disabled at the local end.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    LOCAL_WIFI_NOT_OPEN = 2,

    /**
     * Wi-Fi is disabled at the peer end.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_WIFI_NOT_OPEN = 3,

    /**
     * The **onCollaborate** callback is not implemented.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_ABILITY_NO_ONCOLLABORATE = 4,

    /**
     * An internal system error occurs.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SYSTEM_INTERNAL_ERROR = 5
    }

  /**
   * Enumerates application start options.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum StartOptionParams {
    /**
     * Start of the peer application in the foreground.
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
   * Defines the event callback information.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface EventCallbackInfo {
    /**
     * Collaboration session ID.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    sessionId: int;

    /**
     * Disconnection reason.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    reason?: DisconnectReason;

    /**
     * Received message.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    msg?: string;

    /**
     * Received byte stream.
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
   * Collaboration event information.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface CollaborateEventInfo {
    /**
     * Collaboration event type.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    eventType: CollaborateEventType;

    /**
     * Content of a collaboration event.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    eventMsg?: string;
    }

  /**
   * Enumerates collaboration event types.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  enum CollaborateEventType {
    /**
     * Task sending failure.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SEND_FAILURE = 0,

    /**
     * Color space conversion failure.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    COLOR_SPACE_CONVERSION_FAILURE = 1
    }

  /**
   * Enumerates the disconnection reasons.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  enum DisconnectReason {
    /**
     * The peer application proactively disables collaboration.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_APP_CLOSE_COLLABORATION = 0,

    /**
     * The peer application exits.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_APP_EXIT = 1,

    /**
     * The network is disconnected.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    NETWORK_DISCONNECTED = 2,
    }

  /**
   * Enables listening for **connect** events. This API uses an asynchronous callback to return the result.
   *
   * @param { 'connect' } type - Event type. This field has a fixed value of **connect**. This event is triggered when
   *     [abilityConnectionManager.connect()]{@link abilityConnectionManager.connect(sessionId: int)} is called.
   * @param { number } sessionId - ID of the collaboration session.
   * @param { Callback<EventCallbackInfo> } callback - Registered callback function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'connect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Disables listening for **connect** events.
   *
   * @param { 'connect' } type - Event type. This field has a fixed value of **connect**.
   * @param { number } sessionId - ID of the collaboration session.
   * @param { Callback<EventCallbackInfo> } callback - Registered callback function.
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
   * Enables listening for **disconnect** events.
   *
   * @param { 'disconnect' } type - Event type. This field has a fixed value of **disconnect**. This event is triggered when
   *     [abilityConnectionManager.disconnect()]{@link abilityConnectionManager.disconnect(sessionId: int)} is called.
   * @param { number } sessionId - ID of the collaboration session.
   * @param { Callback<EventCallbackInfo> } callback - Registered callback function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'disconnect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Disables listening for **disconnect** events.
   *
   * @param { 'disconnect' } type - Event type. This field has a fixed value of **disconnect**.
   * @param { number } sessionId - ID of the collaboration session.
   * @param { Callback<EventCallbackInfo> } callback - Registered callback function.
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
   * Enables listening for **receiveMessage** events.
   *
   * @param { 'receiveMessage' } type - Event type. This field has a fixed value of **receiveMessage**. This event is
   *     triggered when
   *     [abilityConnectionManager.sendMessage()]{@link abilityConnectionManager.sendMessage(sessionId: int, msg: string)} is
   *     called.
   * @param { number } sessionId - ID of the collaboration session.
   * @param { Callback<EventCallbackInfo> } callback - Registered callback function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'receiveMessage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Disables listening for **receiveMessage** events.
   *
   * @param { 'receiveMessage' } type - Event type. This field has a fixed value of **receiveMessage**.
   * @param { number } sessionId - ID of the collaboration session.
   * @param { Callback<EventCallbackInfo> } callback - Registered callback function.
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
   * Enables listening for **receiveData** events.
   *
   * @param { 'receiveData' } type - Event type. This field has a fixed value of **receiveData**. This event is triggered
   *     when
   *     [abilityConnectionManager.sendData()]{@link abilityConnectionManager.sendData(sessionId: int, data: ArrayBuffer)} is
   *     called.
   * @param { number } sessionId - ID of the collaboration session.
   * @param { Callback<EventCallbackInfo> } callback - Registered callback function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'receiveData', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Disables listening for **receiveData** events.
   *
   * @param { 'receiveData' } type - Event type. This field has a fixed value of **receiveData**.
   * @param { number } sessionId - ID of the collaboration session.
   * @param { Callback<EventCallbackInfo> } callback - Registered callback function.
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
   * Creates a collaboration session between applications.
   *
   * @permission ohos.permission.INTERNET and ohos.permission.GET_NETWORK_INFO and ohos.permission.SET_NETWORK_INFO and
   *     ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } serviceName - Service name for the application. The service name must be the same on the local end and
   *     peer end. The value contains a maximum of 256 characters.
   * @param { Context } context - Application context.
   * @param { PeerInfo } peerInfo - Collaboration information of the peer end.
   * @param { ConnectOptions } connectOptions - Connection options for the application.
   * @returns { int} ID of the collaboration session.
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
   * Destroys a collaboration session between applications.
   *
   * @param { int } sessionId - Collaboration session ID.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function destroyAbilityConnectionSession(sessionId: int): void;

  /**
   * Obtains information about the peer application in the specified session.
   *
   * @param { int } sessionId - ID of the collaboration session.
   * @returns { PeerInfo | undefined } Information about the peer application if the corresponding **peerInfo** exists;
   *     **undefined** if the session ID is not found.
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
   * @returns { PeerInfo | undefined } Returns the collaborative application information at the sink end.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function getPeerInfoById(sessionId: int): PeerInfo | null;

  /**
   * Sets up a UIAbility connection after a collaboration session is created and the session ID is obtained. This API
   * uses a promise to return the result.
   *
   * @param { int } sessionId - ID of the collaboration session.
   * @returns { Promise<ConnectResult> } Promise used to return the
   *     [connection result]{@link abilityConnectionManager.ConnectResult}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function connect(sessionId: int): Promise<ConnectResult>;

  /**
   * Disconnects the UIAbility connection to end the collaboration session.
   *
   * @param { int } sessionId - ID of the collaboration session.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function disconnect(sessionId: int): void;

  /**
   * Accepts the UIAbility connection after a collaboration session is set up and the session ID is obtained.
   *
   * @param { int } sessionId - ID of the collaboration session.
   * @param { string } token - Token value passed by the application on device A.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function acceptConnect(sessionId: int, token: string): Promise<void>;

  /**
   * Rejects a connection request in a cross-device collaboration session. After a connection request sent from the peer
   *  application is rejected, a rejection reason is returned.
   *
   * @param { string } token - Token used for application collaboration management.
   * @param { string } reason - Reason why the connection is rejected.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function reject(token: string, reason: string): void;

  /**
   * Sends text messages after a collaboration session is set up.
   *
   * @param { int } sessionId - ID of the collaboration session.
   * @param { string } msg - Text content. The maximum size of the text content is 1 KB.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function sendMessage(sessionId: int, msg: string): Promise<void>;

  /**
   * Sends [ArrayBuffer](docroot://arkts-utils/arraybuffer-object.md) byte streams from one device to another after a
   * connection is successfully established.
   *
   * @param { int } sessionId - ID of the collaboration session.
   * @param { ArrayBuffer } data - Byte stream information.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Enumerates application collaboration key values.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CollaborationKeys {
    /**
     * Key value of the peer device information.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_INFO = 'ohos.collaboration.key.peerInfo',

    /**
     * Key value of the connection option.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    CONNECT_OPTIONS = 'ohos.collaboration.key.connectOptions',

    /**
     * Key value of the collaboration type.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    COLLABORATE_TYPE = 'ohos.collaboration.key.abilityCollaborateType',
    }

  /**
   * Enumerates application collaboration key values.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CollaborationValues {
    /**
     * Default collaboration.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    ABILITY_COLLABORATION_TYPE_DEFAULT = 'ohos.collaboration.value.abilityCollab',

    /**
     * Collaboration via connection proxy.
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