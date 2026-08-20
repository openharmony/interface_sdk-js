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
 * @file NearLink SSAP Connection Capability
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';
import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * This module provides the SparkLink Service Access Protocol (SSAP) connection capability, including creating and
 * connecting to a client, calling server methods, reading and writing descriptors, and subscribing to event
 * notifications.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace ssap {
  /**
   * Enumerates the connection states with a remote device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type ConnectionState = nearlinkConstant.ConnectionState;

  /**
   * Creates an SSAP client instance.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } address - Address of the remote server device. The address format is **11:22:33:AA:BB:FF**.
   * @returns { Client } SSAP client instance.
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
   * Creates an SSAP server instance.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { Server } SSAP server instance.
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
   * Represents a SSAP client class. It provides APIs for connecting to and transmitting data with the server.
   *
   * Before using the methods of this class, use the [ssap.createClient]{@link ssap.createClient} method to construct an
   * instance of this class.
   *
   * An app only needs to create one [Client]{@link ssap.Client} instance for a remote device. Repeated creation will
   * increase unnecessary resource overhead.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Client {
    /**
     * Initiates a connection to the server. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    connect(): Promise<void>;

    /**
     * Initiates a disconnection to the server, disconnecting an existing connection or terminating a connection being
     * established. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disconnect(): Promise<void>;

    /**
     * Closes the client and disconnects from the remote server. To terminate the current connection while retaining the
     * instance, use the [disconnect]{@link ssap.Client.disconnect} method.
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
     * Obtains the list of services supported by the server. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<Service[]> } Promise used to return the result. The list of services supported by the server.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getServices(): Promise<Service[]>;

    /**
     * Reads a server attribute. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - Server attribute.
     * @returns { Promise<Property> } Promise used to return the server attribute.
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
     * Writes a property to the server. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - Server attribute.
     * @param { PropertyWriteType } writeType - Write type, which supports two modes: with and without server response.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Reads a server descriptor. This API can be used only after a connection is established by calling
     * [connect]{@link ssap.Client.connect}. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { PropertyDescriptor } descriptor - Server property descriptor. The value must correspond to the
     *     descriptor in the service on a remote device obtained during service discovery.
     * @returns { Promise<PropertyDescriptor> } Promise used to return the **PropertyDescriptor** object read from the
     *     server.
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
     * Rewrites the server descriptor. This API uses a promise to return the result.
     *
     * This API does not support writing the client property configuration descriptor (**CLIENT_PROPERTY_CONFIG**). To
     * configure the client property notification or indication, use
     * [setPropertyNotification]{@link ssap.Client.setPropertyNotification} or
     * [setPropertyIndication]{@link ssap.Client.setPropertyIndication}
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { PropertyDescriptor } descriptor - Server property descriptor. The value must correspond to the
     *     descriptor in the service on a remote device obtained during service discovery.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets a [Property]{@link ssap.Property} change notification. This method can only be used after a connection is
     * successfully established by calling [connect]{@link ssap.Client.connect}.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - Property from the server. This property must support the **NOTIFY** operation.
     *     That is, **operation** contains **NOTIFY**. For details, see [Operation]{@link ssap.Operation}.
     * @param { boolean } enable - Whether to enable notification. **true**: enables notification. **false**: disables
     *     notification.
     * @returns { Promise<void> } Promise used to return the result. No return value.
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
     * Enables or disables indication for property value change. When the property value changes, the server proactively
     * sends a notification to the client. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { Property } property - Property from the server.
     * @param { boolean } enable - Whether to enable indication for property value changes. **true**: enables
     *     indication. **false**: disables indication.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Initiates an MTU negotiation request. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { int } mtu - MTU parameter.  The default value is **251**.
     *     <br>Unit: byte. Value range: [22, 1024],.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    requestMtuSize(mtu: int): Promise<void>;

    /**
     * Describes the method for calling the server. For example, in a device control scenario, the client can call the
     * configuration method provided by the server to remotely set device parameters or trigger specific operations.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Method } method - Method for calling the server. The value must correspond to the method in the service
     *     on a remote device obtained during service discovery.
     * @returns { Promise<Method> } Promise used to return the **Method** object corresponding to the calling result.
     *     The **result** field is the return value after the server method is executed.
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
     * Subscribes to the property change event. This API uses an asynchronous callback to return the result.
     *
     * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
     *
     * @param { Callback<Property> } callback - Callback used to return the Property of the service.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onPropertyChange(callback: Callback<Property>): void;

    /**
     * Unsubscribes from the property change event. This API uses an asynchronous callback to return the result.
     *
     * @param { Callback<Property> } [callback] - Callback used to return the property from the server.
     *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
     *     all callbacks corresponding to the event are unregistered.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offPropertyChange(callback?: Callback<Property>): void;

    /**
     * Subscribes to event notification events. For example, in a device status monitoring scenario, the client
     * subscribes to events to receive status change notifications (such as device alarms and data updates) pushed by
     * the server in real time. This API uses an asynchronous callback to return the result.
     *
     * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
     *
     * @param { Callback<Event> } callback - Callback used to return the **Event** object of the service.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onEventNotify(callback: Callback<Event>): void;

    /**
     * Unsubscribes from event notification events. This API uses an asynchronous callback to return the result.
     *
     * @param { Callback<Event> } [callback] - Callback used to return the **Event** object of the service.
     *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not set, all
     *     callbacks corresponding to the type are unsubscribed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offEventNotify(callback?: Callback<Event>): void;

    /**
     * Subscribes to the connection status change event. This API uses an asynchronous callback to return the result.
     *
     * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
     *
     * @param { Callback<ConnectionChangeState> } callback - Callback used to return the connection status reporting
     *     parameters.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onConnectionStateChange(callback: Callback<ConnectionChangeState>): void;

    /**
     * Unsubscribes from the connection status change event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { Callback<ConnectionChangeState> } [callback] - Callback used to return the connection status reporting
     *     parameters.
     *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
     *     all callbacks corresponding to the event are unregistered.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void;

    /**
     * Subscribes to the MTU change event. This API uses an asynchronous callback to return the result.
     *
     * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
     *
     * @param { Callback<int> } callback - Callback used to return the MTU after negotiation.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onMtuChange(callback: Callback<int>): void;

    /**
     * Unsubscribes from the MTU change event. This API uses an asynchronous callback to return the result.
     *
     * @param { Callback<int> } [callback] - Callback used to return the MTU after negotiation.
     *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
     *     all callbacks corresponding to the event are unregistered.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offMtuChange(callback?: Callback<int>): void;
  }

  /**
   * Represents a SSAP server class, which provides APIs for connecting to and exchanging data with the client.
   *
   * Before using the methods of this class, you need to call [ssap.createServer]{@link ssap.createServer} to create an
   * instance of this class.
   *
   * An app only needs to create one [Server]{@link ssap.Server} instance. Repeated creation will increase unnecessary
   * resource overhead.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Server {
    /**
     * Adds a service on the server.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Service } service - Service provided by the server. Multiple services can be added, identified by their
     *     UUIDs.
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
     * Removes a service from the server.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { string } serviceUuid - NearLink service UUID, which is a string of 36 characters. The value consists of
     *     32 hexadecimal digits and four hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which
     *     indicates a 128-bit ID. The value cannot be set to a standard NearLink UUID.
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
     * Closes the server and unregisters the callback.
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
     * Notifies the client of property value updates. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { string } address - Client device address. The address format is **11:22:33:AA:BB:FF**.
     * @param { Property } property - Property whose value changes.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Responds to read or write requests from the client. After receiving a request reported by
     * [ssap.onPropertyRead]{@link ssap.Server.onPropertyRead(callback: Callback<PropertyReadRequest>)} or
     * [ssap.onPropertyWrite]{@link ssap.Server.onPropertyWrite(callback: Callback<PropertyWriteRequest>)}, call this
     * API to send data to the corresponding client.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { ServerResponse } response - Response data for the client.
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
     * Subscribes to the connection status change event. This API uses an asynchronous callback to return the result.
     *
     * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
     *
     * @param { Callback<ConnectionChangeState> } callback - Callback used to return the connection status reporting
     *     parameters.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onConnectionStateChange(callback: Callback<ConnectionChangeState>): void;

    /**
     * Unsubscribes from the connection status change event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { Callback<ConnectionChangeState> } [callback] - Callback used to return the connection status reporting
     *     parameters.
     *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
     *     all callbacks corresponding to the event are unregistered.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void;

    /**
     * Subscribes to the client property read request event. This API uses an asynchronous callback to return the
     * result.
     *
     * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
     *
     * @param { Callback<PropertyReadRequest> } callback - Callback used to return the property read request parameters
     *     of the client.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onPropertyRead(callback: Callback<PropertyReadRequest>): void;

    /**
     * Unsubscribes from the client property read request event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { Callback<PropertyReadRequest> } [callback] - Callback used to return the property read request
     *     parameters of the client.
     *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
     *     all callbacks corresponding to the event are unregistered.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offPropertyRead(callback?: Callback<PropertyReadRequest>): void;

    /**
     * Subscribes to the client property write request event. This API uses an asynchronous callback to return the
     * result.
     *
     * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
     *
     * @param { Callback<PropertyWriteRequest> } callback - Callback used to return the property write request
     *     parameters of the client.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onPropertyWrite(callback: Callback<PropertyWriteRequest>): void;

    /**
     * Unsubscribes from the client property write request event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { Callback<PropertyWriteRequest> } [callback] - Callback used to return the property write request
     *     parameters of the client. If this parameter is specified, the current callback is unsubscribed. If this
     *     parameter is not specified, all callbacks corresponding to the event are unsubscribed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offPropertyWrite(callback?: Callback<PropertyWriteRequest>): void;

    /**
     * Subscribes to the MTU change event. This API uses an asynchronous callback to return the result.
     *
     * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
     *
     * @param { Callback<int> } callback - Callback used to return the MTU after negotiation.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onMtuChange(callback: Callback<int>): void;

    /**
     * Unsubscribes from the MTU change event. This API uses an asynchronous callback to return the result.
     *
     * @param { Callback<int> } [callback] - Callback used to return the MTU after negotiation.
     *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
     *     all callbacks corresponding to the event are unregistered.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offMtuChange(callback?: Callback<int>): void;
  }

  /**
   * Represents the NearLink service.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Service {
    /**
     * NearLink service UUID, which is a string of 36 characters. The value consists of 32 hexadecimal digits and four
     * hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates a 128-bit ID. The value
     * cannot be set to a standard NearLink UUID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * Properties of a service.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    properties: Property[];
    /**
     * Methods of a service. If this field is not specified, the service does not provide any method.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    methods?: Method[];
    /**
     * Events of a service. If this field is not specified, the service does not provide any event.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    events?: Event[];
  }

  /**
   * Represents a service Property.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Property {
    /**
     * NearLink service UUID, which is a string of 36 characters. The value consists of 32 hexadecimal digits and four
     * hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates a 128-bit identifier.
     * Standard NearLink UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * Property UUID, in the same format as **serviceUuid**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    propertyUuid: string;
    /**
     * Data value of a property.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    value: ArrayBuffer;
    /**
     * Descriptors of the current property. By default, this field is not used if not set.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    descriptors?: PropertyDescriptor[];
    /**
     * Operation modes supported by the property. The default value is **READABLE|WRITE_NO_RESPONSE**, indicating that
     * the property is readable and writable and no response is required. To enable a property to support an operation,
     * you need to assign a value to this field, for example, **READABLE | WRITE_NO_RESPONSE | NOTIFY**. The value range
     * is [0, 15]. For details about the operation corresponding to each bit, see [Operation]{@link ssap.Operation}.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    operation?: int;
  }

  /**
   * Represents a method of the service.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Method {
    /**
     * NearLink service UUID, which is a string of 36 characters. The value consists of 32 hexadecimal digits and four
     * hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates a 128-bit ID. The value
     * cannot be set to a standard NearLink UUID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * Method UUID. The data format is the same as that of **serviceUuid**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    methodUuid: string;
    /**
     * Method parameters. The data format is defined by the specific service. By default, this field is not used if not
     * set.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    parameter?: ArrayBuffer;
    /**
     * Return value of the method. The data format is defined by the specific service. By default, this field is not
     * used if not set.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    result?: ArrayBuffer;
  }

  /**
   * Represents a service event.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface Event {
    /**
     * NearLink service UUID, which is a string of 36 characters. The value consists of 32 hexadecimal digits and four
     * hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates a 128-bit ID. The value
     * cannot be set to a standard NearLink UUID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * Event UUID. The data format is the same as that of **serviceUuid**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    eventUuid: string;
    /**
     * Event parameters. The data format is defined by the specific service. By default, this field is not used if not
     * set.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    parameter?: ArrayBuffer;
  }

  /**
   * Defines the descriptor of a property.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface PropertyDescriptor {
    /**
     * NearLink service UUID, which is a string of 36 characters. The value consists of 32 hexadecimal digits and four
     * hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates a 128-bit ID. The value
     * cannot be set to a standard NearLink UUID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * Property UUID, in the same format as **serviceUuid**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    propertyUuid: string;
    /**
     * Data value of a descriptor.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    value: ArrayBuffer;
    /**
     * Descriptor type of a property.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    descriptorType: PropertyDescriptorType;
    /**
     * Whether a descriptor is writable. The value **true** indicates the descriptor is writable, and the value
     * **false** indicates the opposite. The default value is **true**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    isWriteable?: boolean;
  }

  /**
   * Represents the Property read request parameter of the client.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface PropertyReadRequest {
    /**
     * Client device address. The address format is **11:22:33:AA:BB:FF**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * NearLink service UUID, which is a string of 36 characters. The value consists of 32 hexadecimal digits and four
     * hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates a 128-bit ID. The value
     * cannot be set to a standard NearLink UUID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * Property UUID, in the same format as **serviceUuid**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    propertyUuid: string;
    /**
     * Request ID. The value range is [0, 65535]. The response sent by the server must carry this ID so that the client
     * can associate the request with the response.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    requestId: int;
  }

  /**
   * Define a client property write request.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface PropertyWriteRequest {
    /**
     * Client device address. The address format is **11:22:33:AA:BB:FF**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * NearLink service UUID, which is a string of 36 characters. The value consists of 32 hexadecimal digits and four
     * hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates a 128-bit ID. The value
     * cannot be set to a standard NearLink UUID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * Property UUID, in the same format as **serviceUuid**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    propertyUuid: string;
    /**
     * Value written by the client.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    value: ArrayBuffer;
    /**
     * Write request ID of the client. This ID must be carried in the response returned by the server. The value range
     * is [0, 65535].
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    requestId: int;
    /**
     * Property write type of the client.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    writeType: PropertyWriteType;
  }

  /**
   * Defines a response to a client request.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ServerResponse {
    /**
     * Client device address. The address format is **11:22:33:AA:BB:FF**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * Request ID. The value range is [0, 65535]. The ID must be the same as the value of **requestId** in the received
     * [PropertyReadRequest]{@link ssap.PropertyReadRequest} or [PropertyWriteRequest]{@link ssap.PropertyWriteRequest},
     * which is used to associate the request with the response.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    requestId: int;
    /**
     * Data value of the response.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    value: ArrayBuffer;
  }

  /**
   * Defines the connection status reporting parameters.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ConnectionChangeState {
    /**
     * Remote device address. The address format is **11:22:33:AA:BB:FF**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * Connection status with a remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: ConnectionState;
  }

  /**
   * Enumerates the property descriptor types.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum PropertyDescriptorType {
    /**
     * Property.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PROPERTY = 1,
    /**
     * Property configuration on the client.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CLIENT_PROPERTY_CONFIG = 2,
    /**
     * Property configuration on the server.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SERVER_PROPERTY_CONFIG = 3,
    /**
     * Property format.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PROPERTY_FORMAT = 4,
    /**
     * Vendor-defined field.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    TYPE_VENDOR = 255
  }

  /**
   * Enumerates the operation types supported by a property.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum Operation {
    /**
     * Data is readable.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    READABLE = 0x01,
    /**
     * Write requests without responses are supported.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    WRITE_NO_RESPONSE = 0x02,
    /**
     * Write requests with responses are supported.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    WRITE_WITH_RESPONSE = 0x04,
    /**
     * Notifications are supported.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    NOTIFY = 0x08
  }

  /**
   * Enumerates the write types supported by a property.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum PropertyWriteType {
    /**
     * Property write request that requires a response from the server.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    WRITE = 1,
    /**
     * Property write request that does not require a response from the server.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    WRITE_NO_RESPONSE = 2
  }
}
export default ssap;