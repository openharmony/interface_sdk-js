/*
 * Copyright (c) 2020-2024 Huawei Device Co., Ltd.
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
 * @kit DistributedServiceKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * The APIs of this module are deprecated. You are advised to use
 * [@ohos.distributedDeviceManager]{@link @ohos.distributedDeviceManager:distributedDeviceManager}.
 * The **deviceManager** module provides APIs for distributed device management.
 * System applications can call the APIs to do the following:
 *
 * - Subscribe to or unsubscribe from device state changes.
 * - Discover devices nearby.
 * - Authenticate or deauthenticate a device.
 * - Query the trusted device list.
 * - Query local device information, including the device name, type, and ID.
 * - Publishes device information for discovery purposes.
 *
 * @syscap SystemCapability.DistributedHardware.DeviceManager
 * @since 7 dynamiconly
 * @deprecated since 11
 * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager
 */
declare namespace deviceManager {
  /**
   * Defines device information.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo
   */
  interface DeviceInfo {
    /**
     * Unique identifier of the device.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo.deviceId
     */
    deviceId: string;

    /**
     * Device name.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo.deviceName
     */
    deviceName: string;

    /**
     * Device type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo.deviceType
     */
    deviceType: DeviceType;

    /**
     * Network ID of the device.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo.networkId
     */
    networkId: string;

    /**
     * Distance between the discovered device and the device that initiates device discovery.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    range: number;

    /**
     * Authentication type of the device.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    authForm: AuthForm;
  }

  /**
   * Enumerates the device authentication types.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 10 dynamiconly
   * @deprecated since 11
   */
  enum AuthForm {
    /**
     * No authentication.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    INVALID_TYPE = -1,

    /**
     * Point-to-point authentication for devices without accounts.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    PEER_TO_PEER = 0,

    /**
     * Authentication for devices using the same account.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    IDENTICAL_ACCOUNT = 1,

    /**
     * Authentication for devices using different accounts.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    ACROSS_ACCOUNT = 2
  }

  /**
   * Enumerates the device types.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  enum DeviceType {
    /**
     * Unknown device type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    UNKNOWN_TYPE = 0,

    /**
     * Smart speaker.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    SPEAKER = 0x0A,

    /**
     * Phone.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    PHONE = 0x0E,

    /**
     * Tablet
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    TABLET = 0x11,

    /**
     * Wearable
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    WEARABLE = 0x6D,

    /**
     * Car.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    CAR = 0x83,

    /**
     * Smart TV
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    TV = 0x9C
  }

  /**
   * Enumerates the device states.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceStateChange
   */
  enum DeviceStateChangeAction {
    /**
     * The device is physically online.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceStateChange.UNKNOWN
     */
    ONLINE = 0,

    /**
     * The information between devices has been synchronized in the Distributed Data Service (DDS) module, and the
     * device is ready for running distributed services.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceStateChange.AVAILABLE
     */
    READY = 1,

    /**
     * The device is physically offline.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceStateChange.UNAVAILABLE
     */
    OFFLINE = 2,

    /**
     * The device information is changed.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    CHANGE = 3
  }

  /**
   * Defines subscription information.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  interface SubscribeInfo {
    /**
     * Subscription ID, used to identify a device discovery period. The value ranges from 1 to 65535.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    subscribeId: number;

    /**
     * Device discovery mode.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    mode: DiscoverMode;

    /**
     * Medium used for device discovery.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    medium: ExchangeMedium;

    /**
     * Frequency of device discovery.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    freq: ExchangeFreq;

    /**
     * Whether the account is the same as the current account. The value **true** indicates the same account and the
     * value **false** indicates a different account.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    isSameAccount: boolean;

    /**
     * Whether to wake up the device. The value **true** means to wake up the device and the value **false** means the
     * opposite.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    isWakeRemote: boolean;

    /**
     * Discovery capability.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    capability: SubscribeCap;
  }

  /**
   * Defines published device information.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 9 dynamiconly
   * @deprecated since 11
   */
  interface PublishInfo {
    /**
     * ID used to identify a publication period.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    publishId: number;

    /**
     * Device discovery mode.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    mode: DiscoverMode;

    /**
     * Frequency of device discovery.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    freq: ExchangeFreq;

    /**
     * Whether the device supports ranging. The value **true** indicates that the device supports ranging and the value
     * **false** indicates the opposite.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    ranging: boolean;
  }

  /**
   * Enumerates the device discovery modes.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  enum DiscoverMode {
    /**
     * Passive discovery.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    DISCOVER_MODE_PASSIVE = 0x55,

    /**
     * Active discovery.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    DISCOVER_MODE_ACTIVE = 0xAA
  }

  /**
   * Enumerates the media used for device discovery.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  enum ExchangeMedium {
    /**
     * Automatic.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    AUTO = 0,

    /**
     * Bluetooth.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    BLE = 1,

    /**
     * Wi-Fi.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    COAP = 2,

    /**
     * USB.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    USB = 3
  }

  /**
   * Enumerates the device discovery frequencies.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  enum ExchangeFreq {
    /**
     * Low frequency.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    LOW = 0,

    /**
     * Medium frequency.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    MID = 1,

    /**
     * High frequency.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    HIGH = 2,

    /**
     * Ultra-high frequency.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    SUPER_HIGH = 3
  }

  /**
   * Enumerates the discovery capabilities.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  enum SubscribeCap {
    /**
     * DDMP capability. This will be deprecated later.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    SUBSCRIBE_CAPABILITY_DDMP = 0,

    /**
     * OSD capability.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    SUBSCRIBE_CAPABILITY_OSD = 1
  }

  /**
   * Defines the authentication parameters.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  interface AuthParam {
    /**
     * Authentication type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    authType: number;

    /**
     * Extended field. Optional. The default value is **undefined**.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    extraInfo: { [key: string]: any };
  }

  /**
   * Defines authentication information.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications
   * @since 7 dynamiconly
   * @deprecated since 11
   */
  interface AuthInfo {
    /**
     * Authentication type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    authType: number;

    /**
     * Authentication token.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    token: number;

    /**
     * Extended field. Optional. The default value is **undefined**.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    extraInfo: { [key: string]: any };
  }

  /**
   * Creates a **DeviceManager** instance.
   *
   * @param { string } bundleName - Bundle name of the application. The value is a string of 1 to 255 characters.
   * @param { AsyncCallback<DeviceManager> } callback - Callback used to return the **DeviceManager** instance created.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.createDeviceManager
   */
  function createDeviceManager(bundleName: string, callback: AsyncCallback<DeviceManager>): void;

  /**
   * Provides APIs to obtain information about trusted devices and local devices. Before calling any API in
   * **DeviceManager**, you must use **createDeviceManager** to create a **DeviceManager** instance, for example,
   * **dmInstance**.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager
   */
  interface DeviceManager {
    /**
     * Releases this **DeviceManager** instance when it is no longer used.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.releaseDeviceManager
     */
    release(): void;

    /**
     * Obtains all trusted devices synchronously.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @returns { Array<DeviceInfo> } List of trusted devices obtained.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync
     */
    getTrustedDeviceListSync(): Array<DeviceInfo>;

    /**
     * Enables the DSoftBus heartbeat mode to quickly bring offline trusted devices online and updates the list of
     * online trusted devices.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { boolean } isRefresh - Whether to enable the heartbeat mode and update the list of online trusted
     *     devices. The value **true** means to enable the heartbeat mode and update the list of online trusted devices
     *     and the value **false** means the opposite.
     * @returns { Array<DeviceInfo> } List of trusted devices obtained.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    getTrustedDeviceListSync(isRefresh: boolean): Array<DeviceInfo>;

    /**
     * Obtains all trusted devices. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { AsyncCallback<Array<DeviceInfo>> } callback - Callback used to return the list of trusted devices.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceList(callback: AsyncCallback<Array<DeviceBasicInfo>>)
     */
    getTrustedDeviceList(callback: AsyncCallback<Array<DeviceInfo>>): void;

    /**
     * Obtains all trusted devices. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @returns { Promise<Array<DeviceInfo>> } Promise used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceList()
     */
    getTrustedDeviceList(): Promise<Array<DeviceInfo>>;

    /**
     * Obtains local device information synchronously.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @returns { DeviceInfo } List of local devices obtained.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getLocalDeviceNetworkId
     */
    getLocalDeviceInfoSync(): DeviceInfo;

    /**
     * Obtains local device information. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { AsyncCallback<DeviceInfo> } callback - Callback used to return the local device information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getLocalDeviceNetworkId
     */
    getLocalDeviceInfo(callback: AsyncCallback<DeviceInfo>): void;

    /**
     * Obtains local device information. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @returns { Promise<DeviceInfo> } Promise used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getLocalDeviceNetworkId
     */
    getLocalDeviceInfo(): Promise<DeviceInfo>;

    /**
     * Obtains the information about a specific device based on the network ID. This API uses an asynchronous callback
     * to return the result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } networkId - Network ID of the device. The value is a string of 1 to 255 characters.
     * @param { AsyncCallback<DeviceInfo> } callback - Callback used to return the information about the specified
     *     device.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified networkId is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getDeviceName
     */
    getDeviceInfo(networkId: string, callback: AsyncCallback<DeviceInfo>): void;

    /**
     * Obtains the information about a specific device based on the network ID. This API uses a promise to return the
     * result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } networkId - Network ID of the device. The value is a string of 1 to 255 characters.
     * @returns { Promise<DeviceInfo> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified networkId is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getDeviceName
     */
    getDeviceInfo(networkId: string): Promise<DeviceInfo>;

    /**
     * Starts to discover peripheral devices. The discovery process lasts 2 minutes. A maximum of 99 devices can be
     * discovered.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { SubscribeInfo } subscribeInfo - Subscription information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified param is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600104 - Discovery unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam: { [key: string]: Object; }, filterOptions?: { [key: string]: Object; })
     */
    startDeviceDiscovery(subscribeInfo: SubscribeInfo): void;

    /**
     * Starts to discover peripheral devices. The discovery process lasts 2 minutes. A maximum of 99 devices can be
     * discovered.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { SubscribeInfo } subscribeInfo - Subscription information.
     * @param { string } filterOptions - Options for filtering discovered devices. Optional. The default value is
     *     **undefined**, indicating that discovery of offline devices. The value is a string of 1 to 255 characters.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified param is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600104 - Discovery unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam: { [key: string]: Object; }, filterOptions?: { [key: string]: Object; })
     */
    startDeviceDiscovery(subscribeInfo: SubscribeInfo, filterOptions?: string): void;

    /**
     * Stops device discovery.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { number } subscribeId - Subscription ID. The value ranges from 1 to 65535.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified param is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.stopDiscovering
     */
    stopDeviceDiscovery(subscribeId: number): void;

    /**
     * Publishes device information for discovery purposes. The publish process lasts 2 minutes.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { PublishInfo } publishInfo - Device information to publish.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600105 - Publish unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    publishDeviceDiscovery(publishInfo: PublishInfo): void;

    /**
     * Stops publishing device information.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { number } publishId - Publish ID. The value ranges from 1 to 2147483647.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    unPublishDeviceDiscovery(publishId: number): void;

    /**
     * Authenticates a device.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { DeviceInfo } deviceInfo - Device information.
     * @param { AuthParam } authParam - Authentication parameter.
     * @param { AsyncCallback<{ deviceId: string, pinToken?: number }> } callback - Callback used to return the
     *     authentication result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.bindTarget(deviceId: string, bindParam: { [key: string]: Object; }, callback: AsyncCallback<{deviceId: string;}>)
     */
    authenticateDevice(
      deviceInfo: DeviceInfo,
      authParam: AuthParam,
      callback: AsyncCallback<{ deviceId: string, pinToken?: number }>
    ): void;

    /**
     * Deauthenticates a device.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { DeviceInfo } deviceInfo - Device information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.unbindTarget
     */
    unAuthenticateDevice(deviceInfo: DeviceInfo): void;

    /**
     * Verifies authentication information.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { AuthInfo } authInfo - Authentication information.
     * @param { AsyncCallback<{ deviceId: string, level: number }> } callback - Callback used to return the verification
     *     result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    verifyAuthInfo(authInfo: AuthInfo, callback: AsyncCallback<{ deviceId: string, level: number }>): void;

    /**
     * Sets a user operation.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { number } operateAction - User operation. The value ranges from 0 to 5.
     * @param { string } params - Input parameters of the user. The value is a string of 1 to 255 characters.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified params is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.replyUiAction
     */
    setUserOperation(operateAction: number, params: string): void;

    /**
     * Obtains the registration information of the credential.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } requestInfo - Request credential information. The value contains a maximum of 255 characters.
     * @param { AsyncCallback<{ registerInfo: string }> } callback - Callback used to return the credential registration
     *     information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified requestInfo is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    requestCredentialRegisterInfo(requestInfo: string, callback: AsyncCallback<{ registerInfo: string }>): void;

    /**
     * Imports credential information.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } credentialInfo - Credential information to import. The value is a string of 1 to 64000
     *     characters.
     * @param { AsyncCallback<{ resultInfo: string }> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified credentialInfo is greater than 5999.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    importCredential(credentialInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void;

    /**
     * Deletes credential information.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } queryInfo - Credential information to delete. The value is a string of 1 to 64000 characters.
     * @param { AsyncCallback<{ resultInfo: string }> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified queryInfo is greater than 5999.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    deleteCredential(queryInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void;

    /**
     * Subscribes to UI status changes.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'uiStateChange' } type - Event type, which has a fixed value of **uiStateChange**.
     * @param { Callback<{ param: string }> } callback - Callback used to return the UI status.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'replyResult', callback: Callback<{ param: string; }>)
     */
    on(type: 'uiStateChange', callback: Callback<{ param: string }>): void;

    /**
     * Unsubscribes from UI status changes.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'uiStateChange' } type - Event type, which has a fixed value of **uiStateChange**.
     * @param { Callback<{ param: string }> } callback - Callback used to return the UI status.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'replyResult', callback: Callback<{ param: string; }>)
     */
    off(type: 'uiStateChange', callback?: Callback<{ param: string }>): void;

    /**
     * Subscribes to changes in the device state.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'deviceStateChange' } type - Event type. The value is **deviceStateChange**, which indicates a device
     *     state change event.
     * @param { Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }> } callback - Callback used to return
     *     the device information and state.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
     */
    on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }>): void;

    /**
     * Unsubscribes from changes in the device state.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'deviceStateChange' } type - Event type, which has a fixed value of **deviceStateChange**.
     * @param { Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }> } callback - Callback used to return
     *     the device information and state.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
     */
    off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }>): void;

    /**
     * Subscribes to device discovery events.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'deviceFound' } type - Event type, which has a fixed value of **deviceFound**.
     * @param { Callback<{ subscribeId: number, device: DeviceInfo }> } callback - Callback used for device discovery.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'discoverSuccess', callback: Callback<{ device: DeviceBasicInfo; }>)
     */
    on(type: 'deviceFound', callback: Callback<{ subscribeId: number, device: DeviceInfo }>): void;

    /**
     * Unsubscribes from device discovery events.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'deviceFound' } type - Event type, which has a fixed value of **deviceFound**.
     * @param { Callback<{ subscribeId: number, device: DeviceInfo }> } callback - Callback used to return the device
     *     information and state.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'discoverSuccess', callback: Callback<{ device: DeviceBasicInfo; }>)
     */
    off(type: 'deviceFound', callback?: Callback<{ subscribeId: number, device: DeviceInfo }>): void;

    /**
     * Subscribes to device discovery failures.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'discoverFail' } type - Event type, which has a fixed value of **discoverFail**.
     * @param { Callback<{ subscribeId: number, reason: number }> } callback - Callback used for the device discovery
     *     failure.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'discoverFailure', callback: Callback<{ reason: int; }>)
     */
    on(type: 'discoverFail', callback: Callback<{ subscribeId: number, reason: number }>): void;

    /**
     * Unsubscribes from device discovery failures.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'discoverFail' } type - Event type, which has a fixed value of **discoverFail**.
     * @param { Callback<{ subscribeId: number, reason: number }> } callback - Callback used for the device discovery
     *     failure.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'discoverFailure', callback: Callback<{ reason: int; }>)
     */
    off(type: 'discoverFail', callback?: Callback<{ subscribeId: number, reason: number }>): void;

    /**
     * Subscribes to device information publication success events.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'publishSuccess' } type - Event type, which has a fixed value of **publishSuccess**.
     * @param { Callback<{ publishId: number }> } callback - Callback used to return the publish ID.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    on(type: 'publishSuccess', callback: Callback<{ publishId: number }>): void;

    /**
     * Unsubscribes from device information publication success events.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'publishSuccess' } type - Event type, which has a fixed value of **publishSuccess**.
     * @param { Callback<{ publishId: number }> } callback - Callback used to return the publish ID.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    off(type: 'publishSuccess', callback?: Callback<{ publishId: number }>): void;

    /**
     * Subscribes to device information publication failures.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'publishFail' } type - Event type, which has a fixed value of **publishFail**.
     * @param { Callback<{ publishId: number, reason: number }> } callback - Callback used for the publication failure.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    on(type: 'publishFail', callback: Callback<{ publishId: number, reason: number }>): void;

    /**
     * Unsubscribes from device information publication failures.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'publishFail' } type - Event type, which has a fixed value of **publishFail**.
     * @param { Callback<{ publishId: number, reason: number }> } callback - Callback used for the device discovery
     *     failure.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    off(type: 'publishFail', callback?: Callback<{ publishId: number, reason: number }>): void;

    /**
     * Subscribes to dead events of the **DeviceManager** service.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'serviceDie' } type - Event type, which has a fixed value of **serviceDie**.
     * @param { function } callback - Callback invoked when a dead event of the **DeviceManager** service occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'serviceDie', callback?: Callback<{}>)
     */
    on(type: 'serviceDie', callback: () => void): void;

    /**
     * Unsubscribes from dead events of the **DeviceManager** service.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'serviceDie' } type - Event type, which has a fixed value of **serviceDie**.
     * @param { function } callback - Callback used to return the dead event of the **DeviceManager** service.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified eventType is greater than 255.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'serviceDie', callback?: Callback<{}>)
     */
    off(type: 'serviceDie', callback?: () => void): void;
  }
}

export default deviceManager;