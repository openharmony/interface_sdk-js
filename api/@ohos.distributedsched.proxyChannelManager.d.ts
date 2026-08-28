/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * ###### Instructions
 *
 * Before calling the APIs of this module, complete the following configurations:
 *
 * 1. You have requested the **ohos.permission.ACCESS_BLUETOOTH** permission. For details about how to configure and apply for permissions, see [Declaring Permissions](docroot://security/AccessToken/declare-permissions.md) and [Requesting User Authorization](docroot://security/AccessToken/request-user-authorization.md).
 * 2. In the **module.json5** file, you have configured the **action** field **action.ohos.pull.listener** for the phone app process that needs to be started by the proxy module.
 *
 * The typical calling process is as follows:
 *
 * 1. Call **openProxyChannel** to open the proxy channel and obtain the channel ID.
 * 2. Call **sendData** to send data, and subscribe to events based on service requirements. Call **on('receiveData')** to receive data from the peer end, and call **on('channelStateChange')** to monitor channel connection state changes (such as disconnection and recovery). You can subscribe to both events at the same time. It is recommended to use them together in data transmission scenarios so that data sending can be paused promptly and disconnection recovery logic can be handled when the channel is abnormal.
 * 3. After using the event, call **off('receiveData')** or **off('channelStateChange')** to unsubscribe from the event.
 * 4. Call **closeProxyChannel** to close the proxy channel and release resources.
 *
 * @file Proxy Channel Management
 * @kit DistributedServiceKit
 */

import { Callback } from './@ohos.base';
/**
 * DSoftBus provides stable and reliable underlying channels for cross-device communication. This module is developed
 * based on DSoftBus. It supports data exchange between phones and wearables, providing users with a seamless device
 * interconnection experience. It also simplifies cross-device communication for developers, eliminating the need to
 * handle underlying communication protocols and process wakeup logic. Use scenarios: During collaboration between the
 * phone app and wearable app, if the phone app is not running in the foreground, its downlink messages are forwarded to
 * the notification server and then sent to the wearable through the proxy module. When the wearable sends data to the
 * phone, the proxy module can dynamically wake up the corresponding app process on the phone to receive and process the
 * data. The core functions of this module include proxy channel management, data route management, application state
 * awareness and wakeup, and link state monitoring.
 *
 * - Proxy channel management: Manages bidirectional data channels established between phones and wearables via the
 * Bluetooth Basic Rate (BR) protocol. This ensures reliable cross-device data communication without the need to
 * implement the underlying communication protocol. The supported data channel IDs range from 1 to 2147483647.
 * - Data route management: Accurately forwards data of wearables based on the specified service UUID. This accurately
 * routes data to the target service port, preventing data loss or incorrect data transmission. The UUID uniquely
 * identifies the service listened for the peer device. The proxy module routes data to the corresponding service port
 * based on the UUID of the peer device.
 * - Application state awareness and wakeup: After a proxy channel is enabled and data sent by the wearable is received,
 * the proxy module identifies the target app based on the **action** field (for example, **action.ohos.pull.listener**)
 * configured in the **module.json5** file, and starts the corresponding app process on the phone to process the data.
 * This allows the app to receive data without having to stay in the foreground, thereby saving system resources.
 * - Link state monitoring: Monitors the connection status changes of the proxy channel throughout its lifecycle in real
 * time through callbacks. This helps the phone app respond to connection exceptions in a timely manner and adjust
 * service policies, thereby improving data transmission reliability.
 *
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace proxyChannelManager {
  /**
   * Opens a proxy channel. This API uses a promise to return the result. Based on the link type and peer device
   * information configured in **ChannelInfo**, it negotiates with the peer device via the Bluetooth BR protocol to
   * establish a bidirectional data channel and returns a channel ID that uniquely identifies the channel. This is
   * applicable to scenarios where a phone-side app needs to establish a bidirectional data channel with a wearable
   * device-side app, such as message notification forwarding. After calling this method, you must call
   * [closeProxyChannel]{@link proxyChannelManager.closeProxyChannel} to close the channel and release resources when
   * the proxy channel is no longer needed.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { ChannelInfo } channelInfo - Link type of the proxy channel, MAC address of the peer device, and UUID of
   *     the listening service on the peer device.
   * @returns { Promise<int> } Promise used to return the result. When the proxy channel is opened successfully, the
   *     promise is resolved, and the channelId of the proxy channel is returned. The value ranges from 1 to 2147483647.
   *     The lifecycle of the channelId is the same as that of the proxy channel. If the proxy is not closed, passing
   *     the same input parameters returns the same channelId. If the operation fails, the promise is rejected with
   *     error information. For details about the error codes, see the error code table.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because bluetooth proxy function has
   *     been trimmed. [since 26.0.0]
   * @throws { BusinessError } 32390001 - BR is disabled.
   * @throws { BusinessError } 32390002 - Device not paired.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @throws { BusinessError } 32390102 - Operation failed or Connection timed out.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function openProxyChannel(channelInfo: ChannelInfo): Promise<int>;

  /**
   * Closes an opened proxy channel. This is applicable to scenarios where the phone-side app no longer needs to
   * communicate with the wearable device-side app, such as actively releasing channel resources after completing a data
   * synchronization task. This method must be used in pair with
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel}. Call this method to close the channel and release
   * resources after use. After the channel is closed, the registered **receiveData** and **channelStateChange**
   * callbacks are automatically unsubscribed, and data being transmitted is interrupted. Failure to close the proxy
   * channel in a timely manner may cause channel resource leakage.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - Channel ID obtained when opening the proxy channel. The value range is 1 to 2147483647.
   *     Using an invalid or closed channelId returns error code 32390004. If the value is out of range, error code 3239
   *     0006 is returned. The channelId takes effect only when the proxy channel is available, and becomes unavailable
   *     after the channel is closed or disconnected.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because bluetooth proxy function has
   *     been trimmed. [since 26.0.0]
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function closeProxyChannel(channelId: int): void;

  /**
   * Sends data to the peer end. This API uses a promise to return the result. This is applicable to scenarios where the
   * phone-side app sends instructions or data to the wearable device-side app through the proxy channel, such as
   * sending configuration updates or notification messages. This method can be called to send data only after
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel} successfully opens a proxy channel. When the proxy
   * channel is in an unavailable state (such as [ChannelState]{@link proxyChannelManager.ChannelState}.
   * CHANNEL_WAIT_RESUME, CHANNEL_EXCEPTION_SOFTWARE_FAILED, or CHANNEL_BR_NO_PAIRED), calling this method will fail. It
   * is recommended to subscribe to the
   * [on('channelStateChange')]{@link proxyChannelManager.on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>)}
   * event to monitor the channel state, pause data sending when the channel is unavailable, and resume sending after
   * the channel recovers. Data is transmitted to the peer device through the established proxy channel via the
   * Bluetooth BR link. The maximum data length is 4096 bytes. Exceeding this limit will return error code 32390103.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - Channel ID obtained when opening the proxy channel. The value range is 1 to 2147483647.
   *     Using an invalid or closed channelId returns error code 32390004, and exceeding the value range returns error
   *     code 32390006. The channelId takes effect only when the proxy channel is available and becomes unavailable
   *     after the channel is closed or disconnected.
   * @param { ArrayBuffer } data - Binary data to send to the peer end. The data format is defined by the app layer,
   *     with a maximum length of 4096 bytes. Exceeding the length limit returns error code 32390103.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because bluetooth proxy function has
   *     been trimmed. [since 26.0.0]
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @throws { BusinessError } 32390103 - Data too long.
   * @throws { BusinessError } 32390104 - Send failed.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function sendData(channelId: int, data: ArrayBuffer): Promise<void>;

  /**
   * Subscribes to data receive events. This API uses an asynchronous callback to return the result. This is applicable
   * to scenarios where the phone-side app needs to continuously receive data reported by the wearable device-side app,
   * such as receiving data from the wearable device-side app. The proxy module receives data from the peer end based on
   * the peer UUID configured when **openProxyChannel** is called, and passes the received wearable device-side app data
   * to the subscriber through the callback. You must call
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel} to successfully open a proxy channel before
   * subscribing to data receive events. If you need to proxy-wake the phone-side app process to receive and process
   * peer data, configure the **action** field as **action.ohos.pull.listener** in the **module.json5** file before use.
   * After subscribing, call
   * [off('receiveData')]{@link proxyChannelManager.off(type: 'receiveData', channelId: number, callback?: Callback<DataInfo>)}
   * to unsubscribe and prevent the callback from being triggered continuously.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'receiveData' } type - Event type. The value **receiveData** indicates the data receiving event.
   * @param { number } channelId - Channel ID obtained when opening a proxy channel. The value range is 1 to 2147483647.
   *     Using an invalid or closed channelId returns error code 32390004. If the value is out of range, error code 3239
   *     0006 is returned. The channelId takes effect only when the proxy channel is available, and becomes unavailable
   *     after the channel is closed or disconnected.
   * @param { Callback<DataInfo> } callback - Callback invoked to return the data received through the proxy channel.
   *     The callback parameter is a [DataInfo]{@link proxyChannelManager.DataInfo} object, which contains channelId (
   *     channel ID) and data (received byte data). Data can be received only after a proxy channel is opened by calling
   *     openProxyChannel. If registered multiple times, only the last registration takes effect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function on(type: 'receiveData', channelId: number, callback: Callback<DataInfo>): void;

  /**
   * Unsubscribes from data receive events and no longer receives data through the callback. This is applicable to
   * scenarios where the phone-side app no longer needs to receive data from the wearable device-side app, such as when
   * the user switches to another functional module. You must call
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel} to successfully open a proxy channel before
   * unsubscribing. This method must be used in pair with
   * [on('receiveData')]{@link proxyChannelManager.on(type: 'receiveData', channelId: number, callback: Callback<DataInfo>)}
   * to cancel the data receive callback previously registered through **on('receiveData')**.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'receiveData' } type - Event type. The value **receiveData** indicates the data receiving event.
   * @param { number } channelId - Channel ID obtained when opening the proxy channel, with a value range of 1 to 214748
   *     3647. Using an invalid or closed channelId returns error code 32390004, and exceeding the value range returns
   *     error code 32390006. The channelId takes effect only when the proxy channel is available, and becomes
   *     unavailable after the channel is closed or disconnected.
   * @param { Callback<DataInfo> } [callback] - Callback for the data receive event. Default behavior: when this
   *     parameter is not passed, all data receive event subscriptions are unsubscribed. The callback passed must be the
   *     last one registered via the on method to unsubscribe that callback; passing any other callback will not take
   *     effect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function off(type: 'receiveData', channelId: number, callback?: Callback<DataInfo>): void;

  /**
   * Subscribes to data receive events. This API uses an asynchronous callback to return the result. This is applicable
   * to scenarios where the phone-side app needs to continuously receive data reported by the wearable device-side app,
   * such as receiving data from the wearable device-side app. The proxy module receives data from the peer end based on
   * the peer UUID configured when **openProxyChannel** is called, and passes the received wearable device-side app data
   * to the subscriber through the callback. You must call
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel} to successfully open a proxy channel before
   * subscribing to data receive events. If you need to proxy-wake the phone-side app process to receive and process
   * peer data, configure the **action** field as **action.ohos.pull.listener** in the **module.json5** file before use.
   * After subscribing, call
   * [off('receiveData')]{@link proxyChannelManager.off(type: 'receiveData', channelId: number, callback?: Callback<DataInfo>)}
   * to unsubscribe and prevent the callback from being triggered continuously.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - Channel ID obtained when opening a proxy channel. The value range is 1 to 2147483647.
   *     Using an invalid or closed channelId returns error code 32390004. If the value is out of range, error code 3239
   *     0006 is returned. The channelId takes effect only when the proxy channel is available, and becomes unavailable
   *     after the channel is closed or disconnected.
   * @param { Callback<DataInfo> } callback - Callback invoked to return the data received through the proxy channel.
   *     The callback parameter is a [DataInfo]{@link proxyChannelManager.DataInfo} object, which contains channelId (
   *     channel ID) and data (received byte data). Data can be received only after a proxy channel is opened by calling
   *     openProxyChannel. If registered multiple times, only the last registration takes effect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onReceiveData(channelId: int, callback: Callback<DataInfo>): void;

  /**
   * Unsubscribes from data receive events and no longer receives data through the callback. This is applicable to
   * scenarios where the phone-side app no longer needs to receive data from the wearable device-side app, such as when
   * the user switches to another functional module. You must call
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel} to successfully open a proxy channel before
   * unsubscribing. This method must be used in pair with
   * [on('receiveData')]{@link proxyChannelManager.on(type: 'receiveData', channelId: number, callback: Callback<DataInfo>)}
   * to cancel the data receive callback previously registered through **on('receiveData')**.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - Channel ID obtained when opening the proxy channel, with a value range of 1 to 214748
   *     3647. Using an invalid or closed channelId returns error code 32390004, and exceeding the value range returns
   *     error code 32390006. The channelId takes effect only when the proxy channel is available, and becomes
   *     unavailable after the channel is closed or disconnected.
   * @param { Callback<DataInfo> } [callback] - Callback for the data receive event. Default behavior: when this
   *     parameter is not passed, all data receive event subscriptions are unsubscribed. The callback passed must be the
   *     last one registered via the on method to unsubscribe that callback; passing any other callback will not take
   *     effect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offReceiveData(channelId: int, callback?: Callback<DataInfo>): void;

  /**
   * Subscribes to channel state events. This API uses an asynchronous callback to return the result. This is applicable
   * to scenarios where the phone-side app needs to monitor the proxy channel connection state in real time, such as
   * pausing data sending after detecting channel disconnection and automatically retrying services after channel
   * recovery. The proxy module monitors Bluetooth BR link state changes in real time, and reports **ChannelStateInfo**
   * through the callback when events such as connection recovery, abnormal disconnection, and pairing relationship
   * deletion occur. You must call [openProxyChannel]{@link proxyChannelManager.openProxyChannel} to successfully open a
   * proxy channel before subscribing to channel state events. After subscribing, call
   * [off('channelStateChange')]{@link proxyChannelManager.off(type: 'channelStateChange', channelId: number, callback?: Callback<ChannelStateInfo>)}
   * to unsubscribe and prevent the callback from being triggered continuously. After calling
   * [closeProxyChannel]{@link proxyChannelManager.closeProxyChannel} to close the channel, the registered
   * **channelStateChange** callback is automatically unsubscribed.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'channelStateChange' } type - Event type. The value **channelStateChange** indicates the channel state
   *     change event.
   * @param { number } channelId - Channel ID obtained when opening the proxy channel. The value range is 1 to 214748364
   *     7. Using an invalid or closed channelId returns error code 32390004, and exceeding the value range returns
   *     error code 32390006. The channelId takes effect only when the proxy channel is available, and becomes
   *     unavailable after the channel is closed or disconnected.
   * @param { Callback<ChannelStateInfo> } callback - Callback invoked to return the proxy channel state change
   *     information. The callback parameter is a [ChannelStateInfo]{@link proxyChannelManager.ChannelStateInfo} object,
   *     which contains channelId (channel ID) and state (channel connection state). The proxy channel must be opened
   *     through openProxyChannel before receiving the channel state. If registered multiple times, only the last
   *     registered callback takes effect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>): void;

  /**
   * Unsubscribes from channel state events. This is applicable to scenarios where the phone-side app no longer needs to
   * listen for proxy channel connection state changes, such as when the user exits the relevant service page or
   * completes the data transmission process. You must call
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel} to successfully open a proxy channel before
   * unsubscribing. This method must be used in pair with
   * [on('channelStateChange')]{@link proxyChannelManager.on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>)}
   * to cancel the channel state callback previously registered through **on('channelStateChange')**.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'channelStateChange' } type - Sets the subscription type. The value is fixed to **'channelStateChange'**.
   * @param { number } channelId - Channel ID obtained when opening a proxy channel. Value range: 1 to 2147483647. Using
   *     an invalid or closed channelId returns error code 32390004, and exceeding the value range returns error code 32
   *     390006. The channelId takes effect only when the proxy channel is available and becomes unavailable after the
   *     channel is closed or disconnected.
   * @param { Callback<ChannelStateInfo> } [callback] - Registered callback. Default behavior: if this parameter is not
   *     passed, all channel state event subscriptions are unsubscribed. The callback passed must be the one last
   *     registered through the **on** method to unsubscribe from that callback; passing any other callback will not
   *     take effect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function off(type: 'channelStateChange', channelId: number, callback?: Callback<ChannelStateInfo>): void;

  /**
   * Subscribes to channel state events. This API uses an asynchronous callback to return the result. This is applicable
   * to scenarios where the phone-side app needs to monitor the proxy channel connection state in real time, such as
   * pausing data sending after detecting channel disconnection and automatically retrying services after channel
   * recovery. The proxy module monitors Bluetooth BR link state changes in real time, and reports **ChannelStateInfo**
   * through the callback when events such as connection recovery, abnormal disconnection, and pairing relationship
   * deletion occur. You must call [openProxyChannel]{@link proxyChannelManager.openProxyChannel} to successfully open a
   * proxy channel before subscribing to channel state events. After subscribing, call
   * [off('channelStateChange')]{@link proxyChannelManager.off(type: 'channelStateChange', channelId: number, callback?: Callback<ChannelStateInfo>)}
   * to unsubscribe and prevent the callback from being triggered continuously. After calling
   * [closeProxyChannel]{@link proxyChannelManager.closeProxyChannel} to close the channel, the registered
   * **channelStateChange** callback is automatically unsubscribed.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - Channel ID obtained when opening the proxy channel. The value range is 1 to 214748364
   *     7. Using an invalid or closed channelId returns error code 32390004, and exceeding the value range returns
   *     error code 32390006. The channelId takes effect only when the proxy channel is available, and becomes
   *     unavailable after the channel is closed or disconnected.
   * @param { Callback<ChannelStateInfo> } callback - Callback invoked to return the proxy channel state change
   *     information. The callback parameter is a [ChannelStateInfo]{@link proxyChannelManager.ChannelStateInfo} object,
   *     which contains channelId (channel ID) and state (channel connection state). The proxy channel must be opened
   *     through openProxyChannel before receiving the channel state. If registered multiple times, only the last
   *     registered callback takes effect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onChannelStateChange(channelId: int, callback: Callback<ChannelStateInfo>): void;

  /**
   * Unsubscribes from channel state events. This is applicable to scenarios where the phone-side app no longer needs to
   * listen for proxy channel connection state changes, such as when the user exits the relevant service page or
   * completes the data transmission process. You must call
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel} to successfully open a proxy channel before
   * unsubscribing. This method must be used in pair with
   * [on('channelStateChange')]{@link proxyChannelManager.on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>)}
   * to cancel the channel state callback previously registered through **on('channelStateChange')**.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - Channel ID obtained when opening a proxy channel. Value range: 1 to 2147483647. Using
   *     an invalid or closed channelId returns error code 32390004, and exceeding the value range returns error code 32
   *     390006. The channelId takes effect only when the proxy channel is available and becomes unavailable after the
   *     channel is closed or disconnected.
   * @param { Callback<ChannelStateInfo> } [callback] - Registered callback. Default behavior: if this parameter is not
   *     passed, all channel state event subscriptions are unsubscribed. The callback passed must be the one last
   *     registered through the **on** method to unsubscribe from that callback; passing any other callback will not
   *     take effect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offChannelStateChange(channelId: int, callback?: Callback<ChannelStateInfo>): void;

  /**
   * Represents the received data information, including the channel ID and data.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataInfo {
    /**
     * Channel ID of the proxy channel. The value range is 1 to 2147483647.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    channelId: int;

    /**
     * Received byte data. The maximum length is 4096 bytes.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    data: ArrayBuffer;
  }

  /**
   * Enumerates the link types.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum LinkType {
    /**
     * Bluetooth BR protocol, used for establishing a bidirectional data channel with a wearable device over a Bluetooth
     * BR link.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    LINK_BR = 0
  }

  /**
   * Input parameters of the function for opening a proxy channel, including the link type of the proxy channel, the MAC
   * address of the peer device, and the UUID of the listening service.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ChannelInfo {
    /**
     * Link type of the proxy channel. For details about the value range, see
     * [LinkType]{@link proxyChannelManager.LinkType}. Currently, only **LINK_BR** (Bluetooth BR protocol) is supported.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    linkType: LinkType;

    /**
     * MAC address of the peer device, in the format of XX:XX:XX:XX:XX:XX, where XX is a hexadecimal character (0-9, A-
     * F, or a-f). The peer device must be paired. Error code 32390002 is returned if the device is not paired. Error
     * code 32390006 is returned if the format does not meet the requirements.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    peerDevAddr: string;

    /**
     * UUID of the service listened on by the peer device, in the standard UUID string format, for example, xxxxxxxx-
     * xxxx-xxxx-xxxx-xxxxxxxxxxxx. Error code 32390006 is returned if the format does not meet the requirements.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    peerUuid: string;
  }

  /**
   * Enumerates the connection states of the proxy channel.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum ChannelState {
    /**
     * The connection is disconnected, and the channel is unavailable.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_WAIT_RESUME = 0,

    /**
     * The connection is restored, and the channel is available.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_RESUME = 1,

    /**
     * The channel is unavailable due to a software exception, for example, an internal protocol stack error or resource
     * allocation failure. Check the logs to locate the specific cause.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_EXCEPTION_SOFTWARE_FAILED = 2,

    /**
     * The Bluetooth pairing relationship is deleted, and the channel is unavailable.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_BR_NO_PAIRED = 3
  }

  /**
   * Represents the connection state information of the proxy channel.
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ChannelStateInfo {
    /**
     * Channel ID of the proxy channel. The value range is 1 to 2147483647.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    channelId: int;

    /**
     * Connection state of the channel. For the value range, see [ChannelState]{@link proxyChannelManager.ChannelState}.
     * You are advised to adjust service policies based on different state values, for example, suspending data
     * transmission when the channel is disconnected and retrying services after the channel is restored.
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    state: ChannelState;
  }
}
export default proxyChannelManager;