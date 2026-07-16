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
 * The **conversation** module leverages softbus capabilities to provide agents with multi-device interaction
 * capabilities. It offers fundamental agent interconnection tools, including retrieving the device list,
 * waking up the device and sending messages. By utilizing this module, applications can obtain trusted devices
 * on the same account, register listeners to receive cross-device messages and send messages to specific devices
 * through a well-defined conversation channel.
 * 
 * @syscap SystemCapability.Communication.SoftBus.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace conversation {

  /**
   * Represents the device node information, including the networkId, device name, device type, nearby status
   * and udid.
   * 
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface DeviceNodeInfo {
    /**
     * NetworkId of the device. This ID uniquely identifies a device within the distributed network and is used
     * for device addressing when sending messages.
     * 
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    networkId: string;

    /**
     * Name of the device.
     * 
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    deviceName: string;

    /**
     * Device type identifier. This numeric value represents the category of the device (e.g., phone, tablet, TV,
     * wearable, etc.).
     * 
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    deviceTypeId: int;

    /**
     * Indicates whether the device is nearby.
     * 
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    nearby: boolean;

    /**
     * UDID of the device. This ID uniquely identifies a device and is used for device addressing when sending
     * messages.
     * 
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    udid: string;
  }

  /**
   * Callback function invoked when a message is received.
   * 
   * @param { string } networkId - NetworkId of the source device that sent the message.
   * @param { ArrayBuffer } msg - Message content received as a string.
   * @returns { void } Returns void.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  type DataCallback = (networkId: string, msg: ArrayBuffer) => void;

  /**
   * Obtains device information about all trusted devices. Trusted devices are devices that have been previously
   * authenticated. This API returns a list of all such devices currently visible on the network.
   * 
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @returns { DeviceNodeInfo[] } list of the obtained device information in
   *     [DeviceNodeInfo]{@link conversation.DeviceNodeInfo}.
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
   * Posts conversation data to a specified device. This API sends a message to the target device identified by its
   * networkId or udid. The message will be delivered to the specified bundle and ability on the remote device.
   * 
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @param { string } deviceId - This parameter accepts networkId or udid of the target device. This ID
   * can be obtained by calling [getTrustedDevices()]{@link conversation.getTrustedDevices}.
   * @param { string } bundleName - Name of the bundle to which the message will be delivered. This must match
   *     the bundle name of an application installed on the target device that has registered a conversation listener.
   * @param { string } abilityName - Name of the ability within the bundle that will receive the message. This must
   *     match an ability that has registered a conversation listener with the corresponding bundle name.
   * @param { ArrayBuffer } msg - Message content to be sent.
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
   * Registers a conversation listener to receive messages from any trusted device. Once registered, the specified
   * callback function will be invoked whenever a message is received by the specified bundle and ability combination.
   * Only one listener can be registered for a given bundle/ability pair at a time; registering a new listener will
   * replace any previously registered listener for the same bundle and ability.
   * 
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @param { string } bundleName -  Name of the bundle for which messages will be received. This must match the
   *     bundle name of the local application.
   * @param { string } abilityName - Name of the ability within the bundle that will receive the messages. This must
   *     match an ability name in the local application.
   * @param { DataCallback } dataCallback - Callback function called when a message is received.
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
   * Unregisters the conversation listener for the specified bundle and ability. After calling this API, the
   * application will no longer receive messages. If no listener was previously registered for the given bundle
   * and ability, this API returns success without any effect.
   * 
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @param { string } bundleName - Name of the bundle whose listener will be unregistered.
   * @param { string } abilityName - Name of the ability within the bundle whose listener will be unregistered.
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