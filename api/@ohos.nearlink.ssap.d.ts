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
 * Provides methods to operate or manage service of NearLink.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace ssap {
  /**
   * Indicates the connection state.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ConnectionState = nearlinkConstant.ConnectionState;

  /**
   * Creates a SSAP client instance.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } address - Indicates the device address of a server
   *     <br>The length must be 17, The value consists of hexadecimal digits and colons (:),
   *     for example, 11:22:33:AA:BB:FF.
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
   * Creates a SSAP server instance.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { Server } Returns a SSAP server instance {@code Server}.
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
   * Manages SSAP client. Before calling a SSAP client method,
   * you must use {@link createClient} to create a ssap client instance.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Client {
    /**
     * Connects to the server.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    connect(): Promise<void>;

    /**
     * Disconnects from or stops an ongoing connection to a server.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    disconnect(): Promise<void>;

    /**
     * Closes the client.
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
     * Starts discovering all services on server.
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
     * Reads the property of a server.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - Indicates the property to read.
     * @returns { Promise<Property> } Promise used to return the property value.
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
     * Writes the property of a server.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - Indicates the property to write.
     * @param { PropertyWriteType } writeType - Indicates the write type.
     * @returns { Promise<void> } Promise used to return the result.
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
     * Reads the descriptor of a server.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { PropertyDescriptor } descriptor - Indicates the descriptor to read.
     * @returns { Promise<PropertyDescriptor> } Promise used to return the descriptor value.
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
     * Writes the descriptor of a server.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { PropertyDescriptor } descriptor - Indicates the descriptor to write.
     * @returns { Promise<void> } Promise used to return the result.
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
     * Enables or disables notification of a property when value changed.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Property } property - Indicates the property to set notification strategy.
     * @param { boolean } enable - Specifies whether to enable notification of the property.
     * @returns { Promise<void> } Returns the promise object.
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
     * Enables or disables indication of a property when value changed.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { Property } property - Indicates the property to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the property.
     * @returns { Promise<void> } Returns the promise object.
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
     * Negotiate the MTU size with server.
     * The negotiation result needs to be obtained by subscribing to MTU event.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { int } mtu - The maximum transmission unit.
     *     <br>The value must be an integer within [22,1024].
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    requestMtuSize(mtu: int): Promise<void>;

    /**
     * Calls the method of a server.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Method } method - Indicates the Method to call.
     * @returns { Promise<Method> } Promise used to return the Method result.
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
     * Subscribe property value changed event.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<Property> } callback - Callback used to listen for the property value changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onPropertyChange(callback: Callback<Property>): void;

    /**
     * Unsubscribe property value changed event.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<Property> } [callback] - Callback used to listen for the property value changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offPropertyChange(callback?: Callback<Property>): void;

    /**
     * Subscribes to event notifications.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<Event> } callback - Callback used to listen for the event notified event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onEventNotify(callback: Callback<Event>): void;

    /**
     * Unsubscribes from event notifications.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<Event> } [callback] - Callback used to listen for the event notified event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offEventNotify(callback?: Callback<Event>): void;

    /**
     * Subscribes to client connection state changed events.
     * If the user has the ohos.permission.GET_NEARLINK_PEER_MAC permission, the real device address is returned.
     * Otherwise, a random device address is returned.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<ConnectionChangeState> } callback -
     *     Callback used to listen for the SSAP connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onConnectionStateChange(callback: Callback<ConnectionChangeState>): void;

    /**
     * Unsubscribes from client connection state changed events.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<ConnectionChangeState> } [callback] -
     *     Callback used to listen for the SSAP connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void;

    /**
     * Subscribes to MTU changed events.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<int> } callback - Callback used to listen for the MTU changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onMtuChange(callback: Callback<int>): void;

    /**
     * Unsubscribes from MTU changed events.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<int> } [callback] - Callback used to listen for the MTU changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offMtuChange(callback?: Callback<int>): void;
  }

  /**
   * Manages SSAP server. Before calling a SSAP server method,
   * you must use {@link createServer} to create a SSAP server instance.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Server {
    /**
     * Adds a SSAP service.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Service } service - ssap service need to be added and registered.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100042 - Property array is empty.
     * @throws { BusinessError } 36100043 - Invalid UUID.
     * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    addService(service: Service): void;

    /**
     * Removes a specific SSAP service.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { string } serviceUuid - Specific SSAP service to be removed
     *     <br>The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-), for example,
     *     FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     *     <br>NearLink standard UUIDs are not allowed.
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
     * Closes this {@code Server} object and unregisters its callbacks.
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
     * Notifies the client that the value of a property on the server has changed.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { string } address - Indicates the device address.
     *     <br>The length must be 17, The value consists of hexadecimal digits and colons (:),
     *     for example, 11:22:33:AA:BB:FF.
     * @param { Property } property - Indicates the property to notify.
     * @returns { Promise<void> } Returns the promise object.
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
     * Responds to read or write requests from the client.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { ServerResponse } response - Indicates the response.
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
     * Subscribes to server connection state changed events.
     * If the user has the ohos.permission.GET_NEARLINK_PEER_MAC permission, the real device address is returned.
     * Otherwise, a random device address is returned.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<ConnectionChangeState> } callback -
     *     Callback used to listen for the SSAP connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onConnectionStateChange(callback: Callback<ConnectionChangeState>): void;

    /**
     * Unsubscribes from server connection state changed events.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<ConnectionChangeState> } [callback] -
     *     Callback used to listen for the SSAP connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void;

    /**
     * Subscribes to property read events from the client.
     * If the user has the ohos.permission.GET_NEARLINK_PEER_MAC permission, the real device address is returned.
     * Otherwise, a random device address is returned.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<PropertyReadRequest> } callback - Callback used to listen for the property operation event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onPropertyRead(callback: Callback<PropertyReadRequest>): void;

    /**
     * Unsubscribes from property read events from the client.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<PropertyReadRequest> } [callback] - Callback used to listen for the property operation event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offPropertyRead(callback?: Callback<PropertyReadRequest>): void;

    /**
     * Subscribes to property write events from the client.
     * If the user has the ohos.permission.GET_NEARLINK_PEER_MAC permission, the real device address is returned.
     * Otherwise, a random device address is returned.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<PropertyWriteRequest> } callback - Callback used to listen for the property operation event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onPropertyWrite(callback: Callback<PropertyWriteRequest>): void;

    /**
     * Unsubscribes from property write events from the client.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<PropertyWriteRequest> } [callback] - Callback used to listen for the property operation event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offPropertyWrite(callback?: Callback<PropertyWriteRequest>): void;

    /**
     * Subscribes to MTU changed events.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<int> } callback - Callback used to listen for the MTU changed event
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onMtuChange(callback: Callback<int>): void;

    /**
     * Unsubscribes from MTU changed events.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<int> } [callback] - Callback used to listen for the MTU changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offMtuChange(callback?: Callback<int>): void;
  }

  /**
   * Describes the SSAP service.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Service {
    /**
     * The UUID of the service.
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * The properties belong to this service.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    properties: Property[];
    /**
     * The methods belong to this service.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    methods?: Method[];
    /**
     * The events belong to this service.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    events?: Event[];
  }

  /**
   * Describes the SSAP property.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Property {
    /**
     * The UUID of the {@link Service} instance which the property belongs to.
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * The UUID of a Property instance.
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    propertyUuid: string;
    /**
     * The value of a Property instance.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value: ArrayBuffer;
    /**
     * The list of {@link propertyDescriptor} contained in the property.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    descriptors?: PropertyDescriptor[];
    /**
     * Indications specify how data values and descriptor values are accessed {@link Operation}.
     * The value is the OR operation of enumerated values.
     * The value should be an integer. Default value: 3(READABLE | WRITE_NO_RESPONSE).
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    operation?: int;
  }

  /**
   * Describes the SSAP method.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Method {
    /**
     * The UUID of the {@link Service} instance to which the method belongs
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * The UUID of a method instance.
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    methodUuid: string;
    /**
     * The parameter of a method instance.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    parameter?: ArrayBuffer;
    /**
     * The result of a method instance.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    result?: ArrayBuffer;
  }

  /**
   * Describes the SSAP event.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Event {
    /**
     * The UUID of the {@link Service} instance to which the event belongs
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * The UUID of a event instance.
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    eventUuid: string;
    /**
     * The parameter of a event instance.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    parameter?: ArrayBuffer;
  }

  /**
   * Describes the SSAP descriptor for property.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PropertyDescriptor {
    /**
     * The UUID of the {@link Service} instance which the master property of descriptor belongs to.
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * The UUID of the {@link Property} instance which the propertyDescriptor belongs to.
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    propertyUuid: string;
    /**
     * The value of the propertyDescriptor instance.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value: ArrayBuffer;
    /**
     * The type of the propertyDescriptor instance.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    descriptorType: PropertyDescriptorType;
    /**
     * Indicates whether the descriptor is writable.
     * Default value: false.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isWriteable?: boolean;
  }

  /**
   * Describes the parameters of the SSAP client's property read request.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PropertyReadRequest {
    /**
     * Indicates the device address.
     * The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * The UUID of the {@link Service} instance which the property belongs to.
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * The UUID of the Property instance which client request to read.
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    propertyUuid: string;
    /**
     * The request ID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    requestId: int;
  }

  /**
   * Describes the parameters of the SSAP client's property write request.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PropertyWriteRequest {
    /**
     * Indicates the device address.
     * The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * The UUID of the {@link Service} instance which the property belongs to.
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * The UUID of the Property instance which client request to write.
     * The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
     * for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
     * <br>NearLink standard UUIDs are not allowed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    propertyUuid: string;
    /**
     * Indicates the data to be written.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value: ArrayBuffer;
    /**
     * The request ID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    requestId: int;
    /**
     * The write type for this request.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    writeType: PropertyWriteType;
  }

  /**
   * Describes the parameters of a response send by the server to a specified read or write request.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ServerResponse {
    /**
     * Indicates the device address.
     * The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * The request ID.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    requestId: int;
    /**
     * Indicates the response data.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value: ArrayBuffer;
  }

  /**
   * Describes SSAP connection state.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ConnectionChangeState {
    /**
     * Indicates the device address.
     * The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * Connection state.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: ConnectionState;
  }

  /**
   * The enum of property descriptor type.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum PropertyDescriptorType {
    /**
     * Property description descriptor.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PROPERTY = 1,
    /**
     * Client property configuration descriptor.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CLIENT_PROPERTY_CONFIG = 2,
    /**
     * Server property configuration descriptor.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SERVER_PROPERTY_CONFIG = 3,
    /**
     * Property format descriptor.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PROPERTY_FORMAT = 4,
    /**
     * Vendor-defined.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TYPE_VENDOR = 255
  }

  /**
   * Enum of property operation indication.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum Operation {
    /**
     * When this bit is set, the property value can be read.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    READABLE = 0x01,
    /**
     * When this bit is set, the property value can be written without response after writing.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WRITE_NO_RESPONSE = 0x02,
    /**
     * When this bit is set, the property value can be written, and a response is generated for the client.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WRITE_WITH_RESPONSE = 0x04,
    /**
     * When this bit is set, the property value is delivered to the client via notification.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NOTIFY = 0x08
  }

  /**
   * The enum of property write type.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum PropertyWriteType {
    /**
     * Writes property and waits for response.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WRITE = 1,
    /**
     * Writes property without response.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WRITE_NO_RESPONSE = 2
  }
}
export default ssap;
