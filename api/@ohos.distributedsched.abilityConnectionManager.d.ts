/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/**
 * Providers interfaces to create a {@link abilityConnectionManager} instances.
 * 
 * @namespace abilityConnectionManager
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @since 16
 */
declare namespace abilityConnectionManager {

    /**
     * Collaborative application information.
     * @interface PeerInfo
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    interface PeerInfo {
        /**
         * Device identifier. The actual value is udid-hash confused with appid and salt value based on sha256.
         * This id remains unchanged after application installation. If the application is uninstalled and reinstalled,
         * the obtained ID will change.
         * @type { string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        deviceId: string;

        /**
         * bundle name.
         * @type { string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        bundleName: string;

        /**
         * module name.
         * @type { string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        moduleName: string;

        /**
         * ability name.
         * @type { string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        abilityName: string;

        /**
         * Service name.
         * @type { string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        serverId: string;
    }
    
    /**
     * Connection options for ability connection sessions.
     * @interface ConnectOption
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    interface ConnectOption {
        /**
         * Send Data Configuration Options.
         * @type { boolean }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        needSendData: boolean;

        /**
         * Send Stream Data Configuration Options.
         * @type { boolean }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        needSendStream: boolean;

        /**
         * Receive Stream Data Configuration Options.
         * @type { boolean }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        needReceiveStream: boolean;

        /**
         * Startup option.
         * @type { ?Record<string, string> }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        options?: Record<string, string>;

        /**
         * Additional information about the ability connection request.
         * @type { ?Record<string, string> }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        parameters?: Record<string, string>;
    }

    /**
     * Connection result.
     * @interface ConnectResult
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    interface ConnectResult {
        /**
         * Connection is accepted or rejected.
         * @type { boolean }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */        
        isConnected: boolean;

        /**
         * Indicates the reason for reject.
         * @type { ?string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */        
        reason?: string;
    }

    /**
     * The constant for params of the connect option.
     * 
     * @enum { string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    export enum ConnectOptionParams {
        /**
         * Launching the application to the foreground.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        VALUE_START_OPTION_FOREGROUND = 'ohos.collabrate.value.forefround',

        /**
         * Launching the application to the background.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        VALUE_START_OPTION_BACKGROUND = 'ohos.collabrate.value.background',
    }

    /**
     * Connection event callback information.
     * @interface EventCallbackInfo
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    interface EventCallbackInfo {
        /**
         * Ability connection Session id.
         * @type { number }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        sessionId: number;

        /**
         * Indicates the reason of ability disconnection.
         * @type { ?DisconnectReason }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        reason?: DisconnectReason;

        /**
         * Received message data.
         * @type { ?string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        msg?: string;

        /**
         * Received data.
         * @type { ?ArrayBuffer }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        data?: ArrayBuffer;

        /**
         * Received image.
         * @type { ?image.PixelMap }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        image?: image.PixelMap;
    }

    /**
     * DisconnectReason.
     * @enum { number }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    enum DisconnectReason {
        /**
         * Indicates that the reason is the peer application exit.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        PEER_APP_EXIT = 0,

        /**
         * Indicates that the reason is a network disconnection.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 16
         */
        NETWORK_DISCONNECTED = 1,
    }

    /**
     * Registers connect event.
     *
     * @param { 'connect' } type - Registration Type, 'connect'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('connect') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function on(type: 'connect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

    /**
     * Unregisters connect event.
     *
     * @param { 'connect' } type - Registration Type, 'connect'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('connect') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function off(type: 'connect', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

    /**
     * Registers disconnect event.
     *
     * @param { 'disconnect' } type - Registration Type, 'disconnect'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('disconnect') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function on(type: 'disconnect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

    /**
     * Unregisters disconnect event.
     *
     * @param { 'disconnect' } type - Registration Type, 'connect'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('disconnect') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function off(type: 'disconnect', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

    /**
     * Registers receiveMessage event.
     *
     * @param { 'receiveMessage' } type - Registration Type, 'receiveMessage'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveMessage') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function on(type: 'receiveMessage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

    /**
     * Unregisters receiveMessage event.
     *
     * @param { 'receiveMessage' } type - Registration Type, 'receiveMessage'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveMessage') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function off(type: 'receiveMessage', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

    /**
     * Registers receiveData event.
     *
     * @param { 'receiveData' } type - Registration Type, 'receiveData'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveData') command.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    function on(type: 'receiveData', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

    /**
     * Unregisters receiveData event.
     *
     * @param { 'receiveData' } type - Registration Type, 'receiveData'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveData') command.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    function off(type: 'receiveData', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

    /**
     * Registers receiveImage event.
     *
     * @param { 'receiveImage' } type - Registration Type, 'receiveImage'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveImage') command.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
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
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    function off(type: 'receiveImage', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

    /**
     * Create the Ability connection Session.
     *
     * @param { string } serverId - Service name, which must be consistent at both ends.
     * @param { Context } context - The context of an ability.
     * @param { PeerInfo } peerInfo - Collaborative application information at the sink end.
     * @param { ConnectOption } connectOpt - Connection options for Ability connection sessions.
     * @returns { number}  Returns the Ability connection Session id.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function createAbilityConnectionSession(serverId: string, context: Context, peerInfo: PeerInfo,
        connectOpt: ConnectOption): number;

    /**
     * Destroy the ability connection session
     *
     * @param { number } sessionId - Ability connection Session id.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function destroyAbilityConnectionSession(sessionId: number): void;

    /**
     * Get the application information in the ability connection session
     *
     * @param { number } sessionId - Ability connection Session id.
     * @returns {PeerInfo} Returns the collaborative application information at the sink end.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function getPeerInfoById(sessionId: number): PeerInfo;

    /**
     * Initiate an ability session connection.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @returns { Promise<ConnectResult> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function connect(sessionId: number): Promise<ConnectResult>;

    /**
     * Disconnect a Ability connection Session.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function disconnect(sessionId: number): void;

    /**
     * Accept connection request and prepare the connection environment.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @param { string } token - Token for collaborative service management
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function acceptConnect(sessionId: number, token: string): Promise<void>;

    /**
     * Notify the peer end of the reason why the connection is rejected.
     *
     * @param { string } token - Token for collaborative service management.
     * @param { string } reason - Reason for connection rejection.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function reject(token: string, reason: string): void;

    /**
     * Send message data.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @param { string } msg - Message data to be sent.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 16
     */
    function sendMessage(sessionId: number, msg: string): Promise<void>;

    /**
     * Send large data.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @param { ArrayBuffer } data - Large data to be sent.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */

    function sendData(sessionId: number, data: ArrayBuffer): Promise<void>;
    /**
     * Send image data.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @param { image.PixelMap } image - image data to be sent.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    function sendImage(sessionId: number, image: image.PixelMap): Promise<void>;

    /**
     * Creating a Stream.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @param { StreamParam } param - Transport Stream Parameters
     * @returns {Promise<number>}  The promise returned by the function, contain the ID of a transport stream.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 29425664 - Only one stream can be created for the current session.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    function createStream(sessionId: number, param: StreamParam): Promise<number>;

    /**
     * Sets the transmission surface.
     *
     * @param { number } streamId - Indicates the ID of a transport stream.
     * @param { string } surfaceId - Surface ID.
     * @param { SurfaceParam } param - Surface Parameters
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */

    function setSurfaceId(streamId: number, surfaceId: string, param: SurfaceParam): void;
    /**
     * Obtains the transmission surface.
     *
     * @param { number } streamId - Indicates the ID of a transport stream.
     * @param { SurfaceParam } param - Surface Parameters
     * @returns {string}  Returns the ID of a surface.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    function getSurfaceId(streamId: number, param: SurfaceParam): string;

    /**
     * Update surface parameters.
     *
     * @param { number } streamId - Stream ID.
     * @param { SurfaceParam } param - Surface Parameters
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    function updateSurfaceParam(streamId: number, param: SurfaceParam): void;

    /**
     * Destroy the Stream.
     *
     * @param { number } streamId - Indicates the ID of a transport stream.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    function destroyStream(streamId: number): void;

    /**
     * Start Streaming
     *
     * @param { number } streamId - Indicates the ID of a transport stream.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 29425665 - The stream at the receive end is not started.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    function startStream(streamId: number): void;

    /**
     * Stop Streaming
     *
     * @param { number } streamId - Indicates the ID of a transport stream.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    function stopStream(streamId: number): void;

    /**
     * Streaming configuration parameters.
     * @interface StreamParam
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    interface StreamParam {
        /**
         * Stream name, the receive end must be consistent with the transmit end.
         * @type { string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        name: string;

        /**
         * Stream transmission role, which can be a receive stream or a transmit stream.
         * @type { StreamRole }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        role: StreamRole;
    }

    /**
     * Surface configuration parameters.
     * @interface SurfaceParam
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    interface SurfaceParam {
        /**
         * Encoding width.
         * @type { number }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        width: number;

        /**
         * Encoding length.
         * @type { number }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        height: number;

        /**
         * Video PixelFormat, this option must be configured on the sender.
         * @type { ?VideoPixelFormat }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        format?: VideoPixelFormat;

        /**
         * This value identifies the rotation angle of the video.
         * the range of rotation angle should be {0, 90, 180, 270}, default is 0
         * @type { ?number }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        rotation?: number;

        /**
         * This value indicates whether the video is reversed.
         * @type { ?FlipOption }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        flip?: FlipOption;
    }

    /**
     * Flip option.
     * @enum { number }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    export enum FlipOption {
        /**
         * Horizontal Flip
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        HORIZONTAL = 0,

        /**
         * Vertical Flip
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        VERTICAL = 1,
    }

    /**
     * Stream transmission role.
     * @enum { number }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    export enum StreamRole {
        /**
         * This status indicates the stream is a send stream.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        SOURCE = 0,

        /**
         * This status indicates the stream is a receive stream.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        SINK = 1,
    }

    /**
     * Video pixelFormat Configuration Options.
     * @enum { number }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @since 16
     */
    export enum VideoPixelFormat {
        /**
         * Unknown.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        UNKNOWN = -1,

        /**
         * NV12. yuv 420 semiplanar.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        NV12 = 0,

        /**
         * NV21. yvu 420 semiplanar.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @systemapi
         * @since 16
         */
        NV21 = 1,
    }
}
export default abilityConnectionManager;