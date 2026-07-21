/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * The DSoftBus module **conversation** provides APIs for cross-device interaction of apps, including obtaining the
 * trusted device list, and sending and receiving session data. With this module, your app can obtain trusted devices
 * under the same account, register a listener to receive cross-device data, and send data to a specified device through
 * a session channel. This module is applicable to scenarios that require cross-device collaboration and multi-device
 * data transfer, simplifying the development of cross-device interaction.
 *
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs and can be used only in the stage model.
 *
 * @syscap SystemCapability.Communication.SoftBus.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace conversation {

  /**
   * Defines the device node information, including the network ID, device name, device type ID, near-field status, and
   * UDID.
   *
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface DeviceNodeInfo {
    /**
     * Network ID of the device, which uniquely identifies a device on a distributed network and is used for device
     * addressing during data sending. It is an alternative to UDID. Either of them can be used for data sending.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    networkId: string;

    /**
     * Device name.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    deviceName: string;

    /**
     * Device type ID, which indicates the device type. The value is an integer, for example, **0x0E** is the mobile
     * phone ID, **0x11** is the tablet ID, **0x9C** is the TV ID, and **0x0C** is the PC ID. The specific value is
     * subject to the system definition.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    deviceTypeId: int;

    /**
     * Whether the device is in the near field. The value **true** indicates that the device is in the near field, and
     * the value **false** indicates that the device is not in the near field.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    nearby: boolean;

    /**
     * UDID of the device, which uniquely identifies a device and is used for device addressing during data sending.
     * Different from the network ID, the UDID is a permanent and unique ID of a device and does not change with the
     * network topology. They are alternative to each other and either of them can be used for data sending.
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    udid: string;
  }

  /**
   * Defines a callback for receiving data.
   *
   * @param { string } networkId - Network ID of the source device that sends data.
   * @param { ArrayBuffer } msg - Message received, which is binary data in **ArrayBuffer** format. The data format is
   *     the same as that of the data sent and is defined by the application layer protocol.
   * @returns { void } Returns void.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  type DataCallback = (networkId: string, msg: ArrayBuffer) => void;

  /**
   * Obtains the list of historical trusted devices. Typical use scenarios include querying available target devices
   * before sending data across devices.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @returns { DeviceNodeInfo[] } Device node information.
   * @throws { BusinessError } 201 - Permission denied. The application does not have the required permission to
   *     access distributed data.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2000001 - Internal error.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getTrustedDevices(): DeviceNodeInfo[];

  /**
   * Sends session data to the target device. The target device must be a trusted device under the same account. The
   * network ID or UDID of the target device is used for device addressing. Data is sent to the app with the registered
   * listener on the target device based on the specified bundle name and ability name. Typical use scenarios include
   * sending collaboration commands across devices.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @param { string } deviceId - Network ID or UDID of the target device, which can be obtained by calling
   *     [getTrustedDevices()]{@link conversation.getTrustedDevices}. The length of both the network ID and UDID must be
   *     64 bytes. If an invalid value is passed, error code 401 is returned.
   * @param { string } bundleName - Name of the target bundle to which data is sent. The value contains 1 to 127 bytes
   *     and must be the same as the bundle name of the app registered with a listener on the target device by calling
   *     [registerConversationListener]{@link conversation.registerConversationListener}. If this requirement is not
   *     met, data cannot be sent to the target app. If an invalid or empty value is passed, error code 401 is returned.
   * @param { string } abilityName - Name of the target ability to which data is sent. The value contains 1 to 127 bytes
   *     and must be the same as the ability name of the app registered with a session listener on the target device. If
   *     this requirement is not met, data cannot be sent to the target app. If an invalid or empty value is passed,
   *     error code 401 is returned.
   * @param { ArrayBuffer } msg - Message to be sent. A maximum of 10,240 bytes can be sent at a time. The data
   *     structure is defined by the application layer protocol. If empty or invalid data is passed, error code 401 is
   *     returned.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied. The application does not have the required permission to
   *     access distributed data.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Invalid parameter. The deviceId, bundleName, abilityName or msg is invalid
   *     or empty.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2000001 - Internal error.
   * @throws { BusinessError } 2004001 - Remote not support.
   * @throws { BusinessError } 2004002 - Duplicate calls, previous call still in progress.
   * @throws { BusinessError } 2004003 - Send data failed.
   * @throws { BusinessError } 2004004 - Wait remote ack timeout.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function postConversationData(
    deviceId: string,
    bundleName: string,
    abilityName: string,
    msg: ArrayBuffer
): Promise<void>;

  /**
   * Registers a listener to receive data from trusted devices under the same account. When the remote device sends data
   * to the local device by calling [postConversationData]{@link conversation.postConversationData}, the data is
   * distributed to the registered callback based on the specified bundle name and ability name. Only one listener can
   * be registered for the same bundle name and ability name. Duplicate registration will overwrite the previously
   * registered listener.
   *
   * **API called in pairs:** This API must be used in pairs with
   * [unregisterConversationListener]{@link conversation.unregisterConversationListener}, which is called to unregister
   * the listener to release resources.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @param { string } bundleName - Name of the bundle that receives data. The value contains 1 to 127 bytes and must be
   *     the same as the bundle name of the app. If this requirement is not met, the listener cannot receive data
   *     correctly. If an invalid or empty value is passed, error code 401 is returned.
   * @param { string } abilityName - Name of the ability that receives data. The value contains 1 to 127 bytes and must
   *     be the same as the ability name of the app. If this requirement is not met, the listener cannot receive data
   *     correctly. If an invalid or empty value is passed, error code 401 is returned.
   * @param { DataCallback } dataCallback - Callback function used to receive data transferred across devices. If an
   *     invalid value is passed, error code 401 is returned.
   * @throws { BusinessError } 201 - Permission denied. The application does not have the required permission to
   *     access distributed data.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Invalid parameter. The bundleName, abilityName or dataCallback is
   *     invalid or empty.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2000001 - Internal error.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function registerConversationListener(
    bundleName: string,
    abilityName: string,
    dataCallback: DataCallback,
  ): void;

  /**
   * Unregisters the listener with the specified bundle name and ability name. This API must be used in pairs with
   * [registerConversationListener]{@link conversation.registerConversationListener} to unregister a registered
   * listener. When the listener is no longer needed, call this API to unregister the listener to release resources. If
   * the listener is not unregistered, resources will be continuously occupied. Only one listener can be registered for
   * the same bundle name and ability name. Duplicate registration will overwrite the previously registered listener.
   * After the listener is unregistered, the listener that is currently in effect will be removed. After this API is
   * called, the app will no longer receive session data of the specified bundle name and ability name. If no listener
   * has been registered for the specified bundle name and ability name, this API returns a success message.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @param { string } bundleName - Name of the bundle whose listener is to be unregistered. The value contains 1 to 127
   *     bytes and must be the same as the bundle name used during listener registration. If an invalid or empty value
   *     is passed, error code 401 is returned.
   * @param { string } abilityName - Name of the ability whose listener is to be unregistered. The value contains 1 to
   *     127 bytes and must be the same as the ability name used during listener registration. If an invalid or empty
   *     value is passed, error code 401 is returned.
   * @throws { BusinessError } 201 - Permission denied. The application does not have the required permission to
   *     access distributed data.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Invalid parameter. The bundleName or abilityName is invalid or empty.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2000001 - Internal error.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function unregisterConversationListener(bundleName: string, abilityName: string): void;
}

export default conversation;