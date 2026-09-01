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
 * @file Enhanced Connection
 * @kit DistributedServiceKit
 */

import { Callback } from './@ohos.base';

/**
 * The **linkEnhance** module delivers highly efficient Bluetooth connectivity and data transmission capabilities, 
 * significantly enhancing the cross-device connection stability. By employing a multi-channel merging algorithm, it 
 * addresses issues such as unstable connections and limited number of connections of classic Bluetooth. This enhances 
 * cross-device data transmission capabilities and improves user experience.
 *
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace linkEnhance {

  /**
   * Represents the connection result, which is returned after the client calls **connect()**.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ConnectResult {
    /**
     * ID of the peer device. If the connection is successful, the device ID of the peer device is returned. If the 
     * connection fails, an empty string is returned.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Connection result. The value **true** indicates that the connection is successful, and the value **false** 
     * indicates the opposite.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    success: boolean;

    /**
     * Number indicating the result code. If the connection is successful, **0** is returned. If the connection fails, 
     * an error code is returned:
     * 
     * - 32390200: The client connection times out.
     * - 32390201: The server service is not started.
     * - 32390300: Internal error.
     * 
     * For details about the error codes, see 
     * [Link Enhancement Error Codes](docroot://reference/apis-distributedservice-kit/errorcode-link-enhance.md).
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    reason: int
  }

  /**
   * Represents a **Server** object, which provides methods for starting, stopping, and closing the server, and 
   * registering or unregistering event callbacks.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface Server {
    /**
     * Starts a server so that it can be connected by the client. A maximum of 10 servers are supported. After a server 
     * is started, you can stop it by calling **stop()** and restart it by calling **start()**. After using the server, 
     * call **close()** to destroy the **Server** object to release resources.
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
     * Stops the server. After the server is stopped, you can call `start` to start it again.
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
     * Destroys the **Server** object to release related resources. To interact with the peer device again, create a new
     * **Server** object. **close()** is called to destroy the **Server** object and release resources. If the call is 
     * successful, the **Server** object needs to be re-created when it is needed again. **stop()** is called to stop 
     * the server. If the call is successful, the **Server** object can still be restarted. If the server needs to be 
     * restarted, use **stop()**. If the server is no longer needed, use **close()**.
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
     * Registers a callback listener for **connectionAccepted** events. This API uses an asynchronous callback to return
     * the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectionAccepted' } type - Event type, which is **connectionAccepted**. This event is triggered when
     *     a connection from the peer end is received.
     * @param { Callback<Connection> } callback - Callback used to receive server connection events. The callback
     *     parameter **connection** is the connection object used to establish the connection. The type is
     *     [Connection]{@link linkEnhance.Connection}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'connectionAccepted', callback: Callback<Connection>): void;

    /**
     * Unregisters the callback listener for **connectionAccepted** event. This API must be called after the server is 
     * successfully created. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectionAccepted' } type - Event type, which is **connectionAccepted**. This event is triggered when
     *     a connection from the peer end is received.
     * @param { Callback<Connection> } [callback] - Registered callback. The parameter is
     *     [Connection]{@link linkEnhance.Connection}. The callback last registered using **on** needs to be passed to
     *     unregister the callback. The default effect is the same as the passing behavior.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'connectionAccepted', callback?: Callback<Connection>): void;

    /**
     * Registers a callback listener for **connectionAccepted** events. This API uses an asynchronous callback to return
     * the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<Connection> } callback - Callback used to listen for the server is connected event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onConnectionAccepted(callback: Callback<Connection>): void;

    /**
     * Unregisters the callback listener for **connectionAccepted** events. This API uses an asynchronous callback to
     * return the result.
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<Connection> } [callback] - Registered callback, which is used to return the
     *     [Connection]{@link linkEnhance.Connection} object.
     * 
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offConnectionAccepted(callback?: Callback<Connection>): void;

    /**
     * Registers a callback listener for **serverStopped** events. This API uses an asynchronous callback to return the 
     * result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serverStopped' } type - Event type, which is **serverStopped**. This event is triggered when the server
     *     is stopped abnormally.
     * @param { Callback<number> } callback - Registered callback, where **number** indicates the returned error code.
     *     This event is triggered when the server is stopped abnormally.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'serverStopped', callback: Callback<number>): void;

    /**
     * Unregisters the callback listener for **serverStopped** event. This API must be called after the server is 
     * created successfully. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serverStopped' } type - Event type, which is **serverStopped**. This event is triggered when the server
     *     is stopped abnormally.
     * @param { Callback<number> } [callback] - Registered callback, where **number** indicates the returned error code.
     *     This event is triggered when the server is stopped abnormally. The callback last registered using **on**
     *     needs to be passed to unregister the callback. The default effect is the same as the passing behavior.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'serverStopped', callback?: Callback<number>): void;

    /**
     * Registers a callback listener for **serverStopped** events. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } callback - Registered callback, where **int** indicates the returned error code.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onServerStopped(callback: Callback<int>): void;

    /**
     * Unregisters the callback listener for **serverStopped** events. This API uses an asynchronous callback to return
     * the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } [callback] - Registered callback, where **int** indicates the returned error code.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offServerStopped(callback?: Callback<int>): void;

  }

  /**
   * Creates a **Server** object. After **start()** is called, the device can be connected to other devices as a server.
   * After using the object, call **close()** to destroy the **Server** object to release resources. To use the object 
   * again, you need to create another **Server** object.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } name - **Server** object name. The value is a string of up to 255 bytes. It cannot be empty. If
   *     the length exceeds the upper limit or an empty string is passed, error code 32390206 is returned.
   * @returns { Server } **Server** object created.
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
   * Represents a **Connection** object, which provides methods for connecting to and disconnecting from a peer device, 
   * obtaining the device's ID, sending data, and registering or unregistering event callbacks.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface Connection {
    /**
     * Connects to the server on the client after the **Connection** object is successfully created. A maximum number of
     * 10 connections are supported. You are advised to register a callback listener using **on('connectResult')** and 
     * then call this method to obtain the connection result. After the connection is successful, you can call 
     * **sendData()** to send data. When the connection is no longer needed, call **disconnect()** to disconnect from 
     * the server.
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
     * Disconnects from the peer device. The created **Connection** object remains valid after this API is called. You 
     * can call **connect()** to reconnect to the peer device if necessary.
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
     * Destroys the **Connection** object to release resources. If the device needs to interact with the peer device 
     * again, create a **Connection** object again and call **connect()** to initiate a connection. **close()** is 
     * called to destroy the **Connection** object and release resources. If the call is successful, the **Connection** 
     * object needs to be re-created when it is needed again. **disconnect()** is called for disconnection. If the call 
     * is successful, the **Connection** object can still be connected. If the connection needs to be re-established, 
     * call **disconnect()**. If the service is no longer needed, call **close()**.
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
     * Obtains the device ID of the peer device. This API is called when the connection is established successfully 
     * either by initiating a connection or accepting an incoming connection.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } Device ID of the peer device, that is, the BLE MAC address of the peer device. An empty
     *     string is returned if no device ID is obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    getPeerDeviceId(): string;

    /**
     * Sends data to the server after a connection is established successfully. When the server receives the connection 
     * callback, it can also send data to the client.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { ArrayBuffer } data - Data to send. The maximum length is 1024 bytes. If the length exceeds the upper
     *     limit, error code 32390206 is returned.
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
     * Registers a listener for **connectResult** events. This API uses an asynchronous callback to return the result. 
     * You must register this listener before calling **connect()**. Otherwise, the connection result cannot be 
     * obtained. When the listener is no longer needed, you are advised to call **off('connectResult')** to unregister 
     * the listener to prevent memory leak.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectResult' } type - Event type, which is **connectResult**. This event is triggered when
     *     `connect()` is called.
     * @param { Callback<ConnectResult> } callback - Registered callback.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'connectResult', callback: Callback<ConnectResult>): void;

    /**
     * Unregisters the listener for **connectResult** events.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectResult' } type - Event type, which is **connectResult**. This event is triggered when
     *     `connect()` is called.
     * @param { Callback<ConnectResult> } [callback] - Registered callback. The callback last registered using **on**
     *     needs to be passed to unregister the callback. The default effect is the same as the passing behavior.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'connectResult', callback?: Callback<ConnectResult>): void;

    /**
     * Registers a listener for **connectResult** events. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ConnectResult> } callback - Registered callback.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onConnectResult(callback: Callback<ConnectResult>): void;

    /**
     * Unregisters the listener for **connectResult** events.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ConnectResult> } [callback] - Registered callback.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offConnectResult(callback?: Callback<ConnectResult>): void;

    /**
     * Registers a listener for **disconnected** events. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'disconnected' } type - Event type, which is **disconnected**. This event is triggered when the
     *     connection is passively terminated or an exception occurs.
     * @param { Callback<number> } callback - Registered callback, where **number** indicates the returned error code.
     *     This event is triggered when the connection is passively terminated or an exception occurs.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'disconnected', callback: Callback<number>): void;

    /**
     * Unregisters the listener for **disconnected** events. This API uses an asynchronous callback to return the 
     * result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'disconnected' } type - Event type, which is **disconnected**. This event is triggered when the
     *     connection is passively terminated or an exception occurs.
     * @param { Callback<number> } [callback] - Registered callback, where **number** indicates the returned error code.
     *     This event is triggered when the connection is passively terminated or an exception occurs. The callback last
     *     registered using **on** needs to be passed to unregister the callback. The default effect is the same as the
     *     passing behavior.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'disconnected', callback?: Callback<number>): void;

    /**
     * Registers a listener for **disconnected** events. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } callback - Registered callback, where **int** indicates the returned error code.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onDisconnected(callback: Callback<int>): void;

    /**
     * Unregisters the listener for **disconnected** events. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } [callback] - Registered callback, where **int** indicates the returned error code.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offDisconnected(callback?: Callback<int>): void;

    /**
     * Registers a listener for the **dataReceived** events. This API uses an asynchronous callback to return the 
     * result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'dataReceived' } type - Event type, which is **dataReceived**. This event is triggered when data is
     *     received.
     * @param { Callback<ArrayBuffer> } callback - Callback used to receive data from the peer device. The callback
     *     parameter **data** is the received data, which is of the **ArrayBuffer** type.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'dataReceived', callback: Callback<ArrayBuffer>): void;

    /**
     * Unregisters the listener for **dataReceived** events.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'dataReceived' } type - Event type, which is **dataReceived**. This event is triggered when data is
     *     received.
     * @param { Callback<ArrayBuffer> } [callback] - Callback used to receive data from the peer device. The callback
     *     parameter **data** is the received data, which is of the ArrayBuffer type. The callback last registered using
     *     **on** needs to be passed to unregister the callback. The default effect is the same as the passing behavior.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'dataReceived', callback?: Callback<ArrayBuffer>): void;

    /**
     * Registers a listener for the **dataReceived** events. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ArrayBuffer> } callback - Registered callback.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onDataReceived(callback: Callback<ArrayBuffer>): void;

    /**
     * Unregisters the listener for **dataReceived** events.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ArrayBuffer> } [callback] - Registered callback.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offDataReceived(callback?: Callback<ArrayBuffer>): void;
  }

  /**
   * Creates a **Connection** object on the device that functions as the client. After the **Connection** object is 
   * created, subscribe to **on('connectResult')** and call **connect()** to initiate a connection request to the 
   * server. After the connection is successful, call **sendData()** to send data. If the connection is not required, 
   * call **close()** to destroy the **Connection** object to release resources.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } deviceId - Device ID of the peer device, that is, the BLE MAC address of the peer device. For
   *     details about how to obtain the BLE MAC address, see
   *     [BLE Scanning and Advertising](docroot://connectivity/bluetooth/ble-development-guide.md).
   * @param { string } name - Server name of the device to be connected. The value is a string of up to 255 bytes. It
   *     cannot be empty. If the length exceeds the upper limit or an empty string is passed, error code 32390206 is
   *     returned.
   * @returns { Connection } **Connection** object created.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported
   *     because the linkEnhance function has been trimmed. [since 26.0.0]
   * @throws { BusinessError } 32390206 - Invalid parameter.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function createConnection(deviceId: string, name: string): Connection;
}

export default linkEnhance;
