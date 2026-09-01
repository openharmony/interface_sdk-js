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
 * @file SE Management
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * The **secureElement** module provides APIs for managing secure elements (SEs). SEs include the Embedded SE (eSE) and
 * SIM on a device. The SE service mentioned in this topic is an **SEService** instance. For details, see
 * [createService]{@link omapi.createService}.
 *
 * @syscap SystemCapability.Communication.SecureElement
 * @since 10 dynamic
 */
declare namespace omapi {
  /**
   * Creates an **SEService** instance for connecting to all available SEs in the system. The connection is time-
   * consuming. Therefore, this API supports only the asynchronous mode. This API uses an asynchronous callback to
   * return the result.
   *
   * The returned **SEService** instance is available only when **true** is returned by the specified callback or
   * [isConnected]{@link omapi.SEService.isConnected}.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 10 and deprecated since API version 12. Use
   * > [createService]{@link omapi.createService} instead.
   *
   * @param { 'serviceState' } type - Type of the SE service to create. It has a fixed value of **'serviceState'**.
   * @param { Callback<ServiceState> } callback - Callback used to return the SE service state.
   * @returns { SEService } **SEService** instance created.
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
   * Creates an **SEService** instance for connecting to all available SEs in the system. The connection is time-
   * consuming. Therefore, only asynchronous APIs are provided. This API uses a promise to return the result.
   *
   * The **SEService** object is available only when [isConnected]{@link omapi.SEService.isConnected} returns **true**.
   *
   * @returns { Promise<SEService> } Promise used to return the **SEService** instance created.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.SecureElement
   * @since 12 dynamic
   */
  function createService(): Promise<SEService>;

  /**
   * **SEService** indicates the connection service used to connect to all available SEs in the system. You can use
   * [createService]{@link omapi.createService} to create an **SEService** instance.
   *
   * @syscap SystemCapability.Communication.SecureElement
   * @since 10 dynamic
   */
  export interface SEService {
    /**
     * Obtains available SE readers, which include all the SEs on the device.
     *
     * @returns { Reader[] } Available readers obtained.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getReaders(): Reader[];

    /**
     * Checks whether this SE service is connected.
     *
     * @returns { boolean } **true** if the SE service is connected; **false** otherwise.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    isConnected(): boolean;

    /**
     * Releases all SE resources allocated to this SE service. After that,
     * [isConnected]{@link omapi.SEService.isConnected} returns **false**.
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    shutdown(): void;

    /**
     * Obtains the version of the Open Mobile API (OMAPI) specification used.
     *
     * @returns { string } OMAPI version obtained. For example, **3.3** indicates Open Mobile API Specification v3.3.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getVersion(): string;
  }

  /**
   * Obtains the SE supported by the device. If eSE, SIM, and SIM2 are supported, three instances will be returned. SIM2
   * is supported since API version 22. You can use [SEService.getReaders]{@link omapi.SEService.getReaders} to obtain a
   * **Reader** instance.
   *
   * @syscap SystemCapability.Communication.SecureElement
   * @since 10 dynamic
   */
  export interface Reader {
    /**
     * Obtains the name of this reader. The name is **SIM** for a SIM reader, **SIM2** for a SIM2 reader, and **eSE**
     * for an eSE.
     *
     * @returns { string } [Reader]{@link omapi.Reader} name obtained.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getName(): string;

    /**
     * Checks whether the SE corresponding to this reader is available.
     *
     * @returns { boolean } **true** if the SE is available; **false** otherwise.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    isSecureElementPresent(): boolean;

    /**
     * Opens a session to connect to an SE in this reader. Multiple sessions can be opened on a reader at the same time.
     *
     * @returns { Session } Session instance opened.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @throws { BusinessError } 3300104 - IOError, there is a communication problem to the reader or the SE.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    openSession(): Session;

    /**
     * Closes all sessions opened on this reader. All channels opened by these sessions will be closed.
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    closeSessions(): void;
  }

  /**
   * A **Session** instance indicates a session created on an SE **Reader** instance. You can use
   * [Reader.openSession]{@link omapi.Reader.openSession} to obtain a **Session** instance.
   *
   * @syscap SystemCapability.Communication.SecureElement
   * @since 10 dynamic
   */
  export interface Session {
    /**
     * Obtains the reader that provides this session.
     *
     * @returns { Reader } Reader instance obtained.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getReader(): Reader;

    /**
     * Obtains the Answer to Reset (ATR) of this SE. If the ATR of this SE is not available, an empty array will be
     * returned.
     *
     * @returns { number[] } ATR if the SE has an available ATR; an empty array otherwise.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getATR(): number[];

    /**
     * Closes the session with the SE. All channels opened by this session will be closed.
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    close(): void;

    /**
     * Check if this session is closed.
     *
     * @returns { boolean } True if the session is closed, false otherwise.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    isClosed(): boolean;

    /**
     * Closes all channels opened on this session.
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3300101 - IllegalStateError, service state exception.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    closeChannels(): void;

    /**
     * Opens a basic channel, as defined in ISO/IEC 7816-4. If the SE cannot provide the basic channel or the
     * application does not have the permission to access the SE, null is returned. This API uses a promise to return
     * the result.
     *
     * @param { number[] } aid - AID of the Applet to be selected on this channel as a byte array, or an empty array if no
     *     Applet is to be selected.
     * @returns { Promise<Channel> } Promise used to return the basic channel instance obtained.
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
     * Opens a basic channel, as defined in ISO/IEC 7816-4. If the SE cannot provide the basic channel or the
     * application does not have the permission to access the SE, null is returned. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { number[] } aid - AID of the Applet to be selected on this channel as a byte array, or an empty array if no
     *     Applet is to be selected.
     * @param { AsyncCallback<Channel> } callback - Callback used to return the basic channel instance obtained.
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
     * Opens a basic channel, as defined in ISO/IEC 7816-4. If the SE cannot provide the basic channel or the
     * application does not have the permission to access the SE, null is returned. This API uses a promise to return
     * the result.
     *
     * @param { number[] } aid - AID of the Applet to be selected on this channel as a byte array, or an empty array if no
     *     Applet is to be selected.
     * @param { number } p2 - P2 parameter of the **SELECT APDU** command executed on this channel.
     * @returns { Promise<Channel> } Promise used to return the basic channel instance obtained.
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
     * Opens a basic channel, as defined in ISO/IEC 7816-4. If the SE cannot provide the basic channel or the
     * application does not have the permission to access the SE, null is returned. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { number[] } aid - AID of the Applet to be selected on this channel as a byte array, or an empty array if no
     *     Applet is to be selected.
     * @param { number } p2 - P2 parameter of the **SELECT APDU** command executed on this channel.
     * @param { AsyncCallback<Channel> } callback - Callback used to return the basic channel instance obtained.
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
     * Opens a logical channel, as defined in ISO/IEC 7816-4. If the SE cannot provide the logical channel or the
     * application does not have the permission to access the SE, null is returned. This API uses a promise to return
     * the result.
     *
     * @param { number[] } aid - AID of the Applet to be selected on this channel as a byte array, or an empty array if no
     *     Applet is to be selected.
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
     * Opens a logical channel, as defined in ISO/IEC 7816-4. If the SE cannot provide the logical channel or the
     * application does not have the permission to access the SE, null is returned. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { number[] } aid - AID of the Applet to be selected on this channel as a byte array, or an empty array if no
     *     Applet is to be selected.
     * @param { AsyncCallback<Channel> } callback - Callback used to return the logical channel instance obtained.
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
     * Opens a logical channel, as defined in ISO/IEC 7816-4. If the SE cannot provide the logical channel or the
     * application does not have the permission to access the SE, null is returned. This API uses a promise to return
     * the result.
     *
     * @param { number[] } aid - AID of the Applet to be selected on this channel as a byte array, or an empty array if no
     *     Applet is to be selected.
     * @param { number } p2 - P2 parameter of the **SELECT APDU** command executed on this channel.
     * @returns { Promise<Channel> } Promise used to return the logical channel instance obtained.
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
     * Opens a logical channel, as defined in ISO/IEC 7816-4. If the SE cannot provide the logical channel or the
     * application does not have the permission to access the SE, null is returned. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { number[] } aid - AID of the Applet to be selected on this channel as a byte array, or an empty array if no
     *     Applet is to be selected.
     * @param { number } p2 - P2 parameter of the **SELECT APDU** command executed on this channel.
     * @param { AsyncCallback<Channel> } callback - Callback used to return the logical channel instance obtained.
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
   * A **Channel** instance indicates a channel set up by a **Session** instance. The channel can be a basic channel or
   * a logical channel. You can use [Session.openBasicChannel]{@link omapi.Session.openBasicChannel(aid: number[])} or
   * [Session.openLogicalChannel]{@link omapi.Session.openLogicalChannel(aid: number[])} to obtain a channel instance.
   *
   * @syscap SystemCapability.Communication.SecureElement
   * @since 10 dynamic
   */
  export interface Channel {
    /**
     * Obtains the session used to open this channel.
     *
     * @returns { Session } Session instance obtained.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getSession(): Session;

    /**
     * Closes this channel.
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    close(): void;

    /**
     * Checks whether this channel is a basic channel.
     *
     * @returns { boolean } **true** if the channel is a basic channel; **false** otherwise.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    isBasicChannel(): boolean;

    /**
     * Checks whether this channel is closed.
     *
     * @returns { boolean } **true** if the channel is closed; **false** otherwise.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    isClosed(): boolean;

    /**
     * Obtains the response data including the status word of **SELECT Applet**.
     *
     * @returns { number[] } Response data including the status word obtained.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    getSelectResponse(): number[];

    /**
     * Transmits APDU data (as per ISO/IEC 7816) to the SE. This API uses a promise to return the result.
     *
     * @param { number[] } command - APDU data to send.
     * @returns { Promise<number[]> } Promise used to return the response received, in a number array. If the chip captures
     *     an exception, an all zero value is returned.
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
     * Transmits APDU data (as per ISO/IEC 7816) to the SE. This API uses an asynchronous callback to return the result.
     *
     * @param { number[] } command - APDU data to send.
     * @param { AsyncCallback<number[]> } callback - Callback used to return the response received, in a number array. If
     *     the chip captures an exception, an all zero value is returned.
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
   * Enumerates the SE service states.
   *
   * @syscap SystemCapability.Communication.SecureElement
   * @since 10 dynamic
   */
  enum ServiceState {
    /**
     * The SE service is disconnected.
     *
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    DISCONNECTED = 0,

    /**
     * The SE service is connected.
     *
     * @syscap SystemCapability.Communication.SecureElement
     * @since 10 dynamic
     */
    CONNECTED = 1
  }

  /**
   * Disables listening for service status change events.
   *
   * @param { 'stateChanged' } type - Event type. It has a fixed value of **stateChanged**.
   * @param { Callback<ServiceState> } callback - Callback invoked to return the SE service status. If this parameter is
   *     left empty, all callbacks corresponding to the type will be unsubscribed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.SecureElement
   * @since 18 dynamic
   */
  function off(type: 'stateChanged', callback?: Callback<ServiceState>): void;

  /**
   * Enables listening for service status change events.
   *
   * Call this API to register a callback after you use [omapi.newSEService]{@link omapi.newSEService} or
   * [omapi.createService]{@link omapi.createService} to create a service.
   *
   * @param { 'stateChanged' } type - Event type. It has a fixed value of **stateChanged**.
   * @param { Callback<ServiceState> } callback - Callback used to return the SE service state.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.SecureElement
   * @since 18 dynamic
   */
  function on(type: 'stateChanged', callback: Callback<ServiceState>): void;
}
export default omapi;