/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

/**
 * linkEnhance模块提供高效的蓝牙连接和数据传输功能，增强设备间连接的稳定性。使用多通道合并算法，增加设备间连接数，提升跨设备数据传输能力，改善用户使用体验。
 *
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace linkEnhance {

  /**
   * 客户端调用connect()后，返回的连接结果。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ConnectResult {
    /**
     * 对端设备ID，成功返回对端设备的deviceId，失败返回空字符串。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * 连接结果，true表示连接成功，false表示连接失败。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    success: boolean;

    /**
     * 连接成功返回0，连接失败返回错误码：
     * 
     * - 32390200：表示客户端连接超时。
     * - 32390201：表示服务端服务未启动。
     * - 32390300：表示内部错误。
     * 
     * 更多关于错误码的详细介绍请参考[增强连接错误码](docroot://reference/apis-distributedservice-kit/errorcode-link-enhance.md)。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    reason: int
  }

  /**
   * 服务对象，提供启动服务、停止服务、关闭服务、注册/取消注册服务端回调等方法。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface Server {
    /**
     * 创建服务成功后，需要调用start()开启该服务，方可被客户端连接，最大服务个数为10。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390202 - The number of servers exceeds the limit.
     * @throws { BusinessError } 32390300 - Internal error.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    start(): void;

    /**
     * 使用完服务时，调用`stop`停止服务，停止后可以调用`start`重新开启服务。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    stop(): void;

    /**
     * 当业务执行完毕，服务端清理资源时，调用close()方法，销毁Server对象，释放相关资源。之后如果再次与对端设备交互，需要重新创建Server对象。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * 创建服务成功后，注册connectionAccepted事件的回调监听，等待对端连接。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectionAccepted' } type - 事件回调类型，支持的事件为'connectionAccepted'，收到对端连接，触发该事件。
     * @param { Callback<Connection> } callback - 注册的回调函数。[Connection]{@link linkEnhance.Connection}返回的连接对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'connectionAccepted', callback: Callback<Connection>): void;

    /**
     * 取消注册connectionAccepted事件的回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectionAccepted' } type - 事件回调类型，支持的事件为'connectionAccepted'，收到对端连接，触发该事件。
     * @param { Callback<Connection> } [callback] - 注册的回调函数。[Connection]{@link linkEnhance.Connection}返回的连接对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'connectionAccepted', callback?: Callback<Connection>): void;

    /**
     * 创建服务成功后，注册connectionAccepted事件的回调监听，等待对端连接。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<Connection> } callback - 注册的回调函数。[Connection]{@link linkEnhance.Connection}返回的连接对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onConnectionAccepted(callback: Callback<Connection>): void;

    /**
     * 取消注册connectionAccepted事件的回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<Connection> } [callback] - 注册的回调函数。[Connection]{@link linkEnhance.Connection}返回的连接对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offConnectionAccepted(callback?: Callback<Connection>): void;

    /**
     * 在创建服务成功后，注册serverStopped回调，监听服务异常停止。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serverStopped' } type - 事件回调类型，支持的事件为'serverStopped'，底层服务异常时，触发该事件。
     * @param { Callback<number> } callback - 注册的回调函数，number为返回的错误码。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'serverStopped', callback: Callback<number>): void;

    /**
     * 取消注册serverStopped事件的回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serverStopped' } type - 事件回调类型，支持的事件为'serverStopped'，底层服务异常时触发。
     * @param { Callback<number> } [callback] - 注册的回调函数，number为返回的错误码。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'serverStopped', callback?: Callback<number>): void;

    /**
     * 在创建服务成功后，注册serverStopped回调，监听服务异常停止。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } callback - 注册的回调函数，int为返回的错误码。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onServerStopped(callback: Callback<int>): void;

    /**
     * 取消注册serverStopped事件的回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } [callback] - 注册的回调函数，int为返回的错误码。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offServerStopped(callback?: Callback<int>): void;

  }

  /**
   * 在服务端设备上，应用创建服务。通过start()开启后，该设备可作为服务端被其他设备连接。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } name - 自定义的非空字符串，标识应用的服务名，最大长度255字节。
   * @returns { Server } 创建成功的服务对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported
   *     because the linkEnhance function has been trimmed. [since 26.0.0]
   * @throws { BusinessError } 32390206 - Invalid parameter.
   * @throws { BusinessError } 32390203 - Duplicate server name.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function createServer(name: string): Server;

  /**
   * 连接对象，提供连接、断连、获取对端设备ID、发送数据、注册/取消注册回调等方法。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface Connection {
    /**
     * 在客户端执行，向服务端设备发起连接，最大连接个数限制为10。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390204 - The number of connection exceeds the limit.
     * @throws { BusinessError } 32390300 - Internal error.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    connect(): void;

    /**
     * 业务执行完毕后，双端任意设备可调用该接口断开连接。创建的connection对象仍有效，需要时可调用connect()重新连接。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    disconnect(): void;

    /**
     * 业务执行完毕后，任意设备可调用该接口销毁connection对象，释放资源。若需再次与对端设备交互，必须重新创建connection对象并调用`connect()`发起连接。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * 获取对端设备的deviceId，作为对端设备的标识符，连接成功后或者被连接成功后调用。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } 对端设备的deviceId，即对端设备的BLE MAC地址。如果获取失败返回空字符串。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    getPeerDeviceId(): string;

    /**
     * 客户端连接成功后，可以向服务端发送数据。服务端接收到连接回调时，也可以向客户端发送数据。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { ArrayBuffer } data - 需要发送的数据，最大发送长度为1024字节。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @throws { BusinessError } 32390205 - Connection is not ready.
     * @throws { BusinessError } 32390300 - Internal error.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    sendData(data: ArrayBuffer): void;

    /**
     * 注册connect事件的回调监听，通过回调函数获取连接结果。使用callback进行异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectResult' } type - 事件回调类型，支持的事件为'connectResult'，完成`connect()`调用，触发该事件。
     * @param { Callback<ConnectResult> } callback - 注册的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'connectResult', callback: Callback<ConnectResult>): void;

    /**
     * 取消connect事件的回调监听，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectResult' } type - 事件回调类型，支持的事件为'connectResult'，完成`connect()`调用，触发该事件。
     * @param { Callback<ConnectResult> } [callback] - 注册的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'connectResult', callback?: Callback<ConnectResult>): void;

    /**
     * 注册connect事件的回调监听，通过回调函数获取连接结果。使用callback进行异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ConnectResult> } callback - 注册的回调函数。
     * @throws { BusinessError } 201 - Permission denied. 
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onConnectResult(callback: Callback<ConnectResult>): void;

    /**
     * 取消connect事件的回调监听，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ConnectResult> } [callback] - 注册的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offConnectResult(callback?: Callback<ConnectResult>): void;

    /**
     * 注册disconnected事件的回调监听，连接被动断开或者底层异常断开时触发该事件。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'disconnected' } type - 事件回调类型，支持的事件为'disconnected'，连接被动断开或底层异常断开时，触发该事件。
     * @param { Callback<number> } callback - 注册的回调函数，number为返回的错误码。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'disconnected', callback: Callback<number>): void;

    /**
     * 取消注册disconnected事件的回调监听。连接被动断开或底层异常断开时触发该事件，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'disconnected' } type - 事件回调类型，支持的事件为'disconnected'，连接被动断开或底层异常断开时，触发该事件。
     * @param { Callback<number> } [callback] - 注册的回调函数，number为返回的错误码。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'disconnected', callback?: Callback<number>): void;

    /**
     * 注册disconnected事件的回调监听，连接被动断开或者底层异常断开时触发该事件。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } callback - 注册的回调函数，int为返回的错误码。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onDisconnected(callback: Callback<int>): void;

    /**
     * 取消注册disconnected事件的回调监听。连接被动断开或底层异常断开时触发该事件，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } [callback] - 注册的回调函数，int为返回的错误码。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offDisconnected(callback?: Callback<int>): void;

    /**
     * 注册dataReceived事件的回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'dataReceived' } type - 事件回调类型，支持的事件为'dataReceived'，收到数据时，触发该事件。
     * @param { Callback<ArrayBuffer> } callback - 注册的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'dataReceived', callback: Callback<ArrayBuffer>): void;

    /**
     * 取消dataReceived事件的回调监听，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'dataReceived' } type - 事件回调类型，支持的事件为'dataReceived'，收到数据时，触发该事件。
     * @param { Callback<ArrayBuffer> } [callback] - 注册的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'dataReceived', callback?: Callback<ArrayBuffer>): void;

    /**
     * 注册dataReceived事件的回调监听。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ArrayBuffer> } callback - 注册的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onDataReceived(callback: Callback<ArrayBuffer>): void;

    /**
     * 取消dataReceived事件的回调监听，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ArrayBuffer> } [callback] - 注册的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offDataReceived(callback?: Callback<ArrayBuffer>): void;
  }

  /**
   * 作为客户端的设备创建连接对象，以便后续向服务端设备发起连接。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } deviceId - 连接的目标设备的deviceId，即对端设备的BLE MAC地址。BLE MAC的获取方法，请参考
   *     [查找设备](docroot://connectivity/bluetooth/ble-development-guide.md)。
   * @param { string } name - 连接的目标设备的服务名，非空字符串，最大长度255字节。
   * @returns { Connection } 创建成功的连接对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported
   *     because the linkEnhance function has been trimmed [since 26.0.0]
   * @throws { BusinessError } 32390206 - Invalid parameter.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function createConnection(deviceId: string, name: string): Connection;
}

export default linkEnhance;