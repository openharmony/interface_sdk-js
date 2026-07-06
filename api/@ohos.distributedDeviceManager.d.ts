/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * The **distributedDeviceManager** module provides APIs for distributed device management.
 * Applications can call the APIs to:
 *
 * - Subscribe to or unsubscribe from device state changes.
 * - Discover devices nearby.
 * - Authenticate or deauthenticate a device.
 * - Query the trusted device list.
 * - Query local device information, including the device name, type, and ID.
 *
 * @syscap SystemCapability.DistributedHardware.DeviceManager
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace distributedDeviceManager {

  /**
   * Represents the basic information about a distributed device.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  interface DeviceBasicInfo {
    /**
     * Device ID. The value is the result of obfuscating the udid-hash (hash value of the UDID), **appid**, and salt
     * using the SHA-256 algorithm.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Device name.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * [Device type]{@link distributedDeviceManager.DeviceManager.getDeviceType}.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    deviceType: string;

    /**
     * Network ID of the device.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    networkId?: string;
  }

  /**
   * Enumerates the device states.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  enum DeviceStateChange {
    /**
     * The device state is unknown after the device goes online. Before the device state changes to available,
     * distributed services cannot be used.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * The information between devices has been synchronized in the Distributed Data Service (DDS) module, and the
     * device is ready for running distributed services.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    AVAILABLE = 1,

    /**
     * The device goes offline, and the device state is unknown.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    UNAVAILABLE = 2
  }

  /**
   * Device status change result.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DeviceStateChangeResult {
    /**
     * The state of the nearby devices.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    action: DeviceStateChange;
    /**
     * Basic description information of a distributed device.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    device: DeviceBasicInfo;
  }

  /**
   * Device name change result.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DeviceNameChangeResult {
    /**
     * Device name.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    deviceName: string;
  }

  /**
   * Discovery failure result.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DiscoveryFailureResult {
    /**
     * Discovery failure cause code.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    reason: int;
  }

  /**
   * Discovery successful result.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DiscoverySuccessResult {
    /**
     * Basic description information of a distributed device.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    device: DeviceBasicInfo;
  }

  /**
   * Reply result.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 23 static
   */
  interface ReplyResult {
    /**
     * Param of ui state changes.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 23 static
     */
    param: string;
  }

  /**
   * ServiceDie data.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface ServiceDieData {  }

  /**
   * Bind target result.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface BindTargetResult {
    /**
     * Device identifier. The actual value is udid-hash confused with appid and salt value based on sha256.
     * This id remains unchanged after application installation. If the application is uninstalled and reinstalled,
     * the obtained ID will change.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    deviceId: string;
  }

  /**
   * Defines device profile information filter options.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface DeviceProfileInfoFilterOptions {
    /**
     * Whether to request data from the cloud.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    isCloud : boolean,
    /**
     * Device ID list.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceIdList?: Array<string>;
  }

  /**
   * Defines the service profile information. It is populated based on the data returned from the cloud.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface ServiceProfileInfo {
    /**
     * Device ID.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Service ID.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    serviceId: string;

    /**
     * Service type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    serviceType: string;

    /**
     * Service data. The value is a string of up to 1000 characters. This parameter is left unspecified by default.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    data?: string;
  }

  /**
   * Defines the device profile information.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface DeviceProfileInfo {
    /**
     * Device ID.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Device SN.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceSn: string;

    /**
     * MAC address.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    mac: string;

    /**
     * Device model.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    model: string;

    /**
     * Device type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceType: string;

    /**
     * Manufacturer.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    manufacturer: string;

    /**
     * Device name.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * Product ID.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    productId: string;

    /**
     * Sub-product ID. This parameter is left unspecified by default.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    subProductId?: string;

    /**
     * SDK version.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    sdkVersion: string;

    /**
     * Bluetooth BLE MAC address.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    bleMac: string;

    /**
     * Bluetooth BR MAC address.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    brMac: string;

    /**
     * Starflash MAC address.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    sleMac: string;

    /**
     * Firmware version.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    firmwareVersion: string;

    /**
     * Hardware version.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    hardwareVersion: string;

    /**
     * Software version.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    softwareVersion: string;

    /**
     * Protocol type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    protocolType: int;

    /**
     * Device type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    setupType: int;

    /**
     * Registered device ID.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    wiseDeviceId: string;

    /**
     * Registered user ID.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    wiseUserId: string;

    /**
     * Registration time.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    registerTime: string;

    /**
     * Modification time.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    modifyTime: string;

    /**
     * Share time.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    shareTime: string;

    /**
     * Whether the device is a local device.
     *
     * - **false**: non-local device.
     * - **true**: local device.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    isLocalDevice: boolean;

    /**
     * Service list. This parameter is left unspecified by default.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    services?: Array<ServiceProfileInfo>;

    /**
     * Product name. This parameter is left unspecified by default.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    productName?: string;

    /**
     * Internal product model. This parameter is left unspecified by default.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    internalModel?: string;
  }

  /**
   * Defines the device icon information filter options.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface DeviceIconInfoFilterOptions {
    /**
     * Product ID.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    productId: string;

    /**
     * Sub-product ID. This parameter is left unspecified by default.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    subProductId?: string;

    /**
     * Image type. This parameter has a fixed value of **ID**, indicating the product's physical image.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    imageType: string;

    /**
     * Image specification name. Value:
     *
     * - **lg**: large image (size: 1016064 pixels)
     * - **sm**: small image (size: 65536 pixels)
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    specName: string;

    /**
     * Internal product model. This parameter is left unspecified by default.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    internalModel?: string;
  }

  /**
   * Defines the device icon information.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface DeviceIconInfo {
    /**
     * Product ID.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    productId: string;

    /**
     * Sub-product ID. This parameter is left unspecified by default.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    subProductId?: string;

    /**
     * Image type. This parameter has a fixed value of **ID**, indicating the product's physical image.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    imageType: string;

    /**
     * Image specification name. Value:
     *
     * - **lg**: large image (size: 1016064 pixels)
     * - **sm**: small image (size: 65536 pixels)
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    specName: string;

    /**
     * URL.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    url: string;

    /**
     * Icon.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    icon: ArrayBuffer;

    /**
     * Internal product model. This parameter is left unspecified by default.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    internalModel?: string;
  }

  /**
   * Defines the heartbeat broadcast policy.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  enum StrategyForHeartbeat {
    /**
     * Stops the heartbeat broadcast temporarily, and resumes it upon timeout expiration.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    TEMP_STOP_HEARTBEAT = 100,
    /**
     * Starts heartbeat broadcast.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    START_HEARTBEAT = 101
  }

  /**
   * Defines the network ID filter options.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface NetworkIdQueryFilter {
    /**
     * Registered device ID.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    wiseDeviceId : string;

    /**
     * Device online status.
     *
     * - **0**: The device is offline.
     * - **1**: The device is online.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    onlineStatus : int,
  }

  /**
   * Struct for distributed device identification.
   *
   * @interface DeviceIdentification
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface DeviceIdentification {
    /**
     * Anonymized device ID for application.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    deviceId: string;

    /**
     * Unique device ID (UDID).
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.ACCESS_SERVICE_DM and
     *     ohos.permission.sec.ACCESS_UDID
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    udid: string;
  }

  /**
   * Creates a **DeviceManager** instance. The **DeviceManager** instance is the entry for invoking the APIs for
   * distributed device management. It can be used to obtain information about trusted devices and local devices.
   *
   * @param { string } bundleName - Bundle name of the application. The value is a string of 1 to 255 characters.
   * @returns { DeviceManager } **DeviceManager** instance created.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter type;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  function createDeviceManager(bundleName: string): DeviceManager;

  /**
   * Releases a **DeviceManager** instance that is no longer used.
   *
   * @param { DeviceManager } deviceManager - **DeviceManager** instance to release.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 11600101 - Failed to execute the function.
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  function releaseDeviceManager(deviceManager: DeviceManager): void;

  /**
   * Provides APIs to obtain information about trusted devices and local devices. Before calling any API in
   * **DeviceManager**, you must use **createDeviceManager** to create a **DeviceManager** instance, for example,
   * **dmInstance**.
   *
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  interface DeviceManager {

    /**
     * Obtains all trusted devices synchronously.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { Array<DeviceBasicInfo> } List of trusted devices obtained.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getAvailableDeviceListSync(): Array<DeviceBasicInfo>;

    /**
     * Obtains all trusted devices. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { AsyncCallback<Array<DeviceBasicInfo>> } callback - Callback used to return the list of trusted devices.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getAvailableDeviceList(callback: AsyncCallback<Array<DeviceBasicInfo>>): void;

    /**
     * Obtains all trusted devices. This API uses a promise to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { Promise<Array<DeviceBasicInfo>> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getAvailableDeviceList(): Promise<Array<DeviceBasicInfo>>;

    /**
     * Obtains the network ID of the local device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } Network ID of the local device obtained.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceNetworkId(): string;

    /**
     * Obtains the local device name.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } Name of the local device obtained.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceName(): string;

    /**
     * Obtains the local device type.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { int } <!--RP1-->Local device type obtained.<!--RP1End-->
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceType(): int;

    /**
     * Obtains the local device ID. The value is the result of obfuscating the udid-hash (hash value of the UDID),
     * **appid**, and salt using the SHA-256 algorithm.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } Local device ID obtained.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceId(): string;

    /**
     * Obtains the device name based on the network ID of the specified device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } networkId - Network ID of the device. The value is a string of 1 to 255 characters.
     * @returns { string } Device name obtained.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified networkId is greater than 255.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getDeviceName(networkId: string): string;

    /**
     * Obtains the device type based on the network ID of the specified device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } networkId - Network ID of the device. The value is a string of 1 to 255 characters.
     * @returns { int } <!--RP2-->Device type obtained.<!--RP2End-->
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified networkId is greater than 255.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getDeviceType(networkId: string): int;

    /**
     * Starts to discover devices nearby. The discovery process takes 2 minutes. A maximum of 99 devices can be
     * discovered. In Wi-Fi scenarios, only the devices in the same LAN can be discovered.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { object } discoverParam - Identifier of the device to discover. It specifies the type of the target to
     *     discover.
     *     <br>**discoverTargetType**: The default discovery target is device. The value is **1**.
     * @param { object } filterOptions - Options for filtering the devices to discover. The default value is
     *     **undefined**, which means to discover offline devices. The options include the following:
     *     <br>- **availableStatus(0-1)**: status of the device to discover.
     *     The value **0** means the device is untrusted.
     *     <br>- **0**: The device is offline. The client needs to call **bindTarget** to bind the device.
     *     <br>- **1**: The device is online and can be connected.
     *     <br>**discoverDistance(0-100)**: distance of the device to discover, in cm.
     *     This parameter is not used in Wi-Fi scenarios.
     *     <br>**authenticationStatus(0-1)**: authentication status of the device to discover.
     *     <br>- **0**: The device is not authenticated.
     *     <br>The value **1** means the device has been authenticated.
     *     <br>- **authorizationType(0-2)**: authorization type of the device to discover.
     *     <br>- **0**: The device is authenticated by a temporarily agreed session key.
     *     <br>- **1**: The device is authenticated by a key of the same account.
     *     <br>- **2**: The device is authenticated by a credential key of different accounts.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600104 - Discovery unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    startDiscovering(discoverParam: { [key: string]: Object; }, filterOptions?: { [key: string]: Object; }): void;

    /**
     * Starts to discover devices nearby. The discovery process takes 2 minutes. A maximum of 99 devices can be
     * discovered. In Wi-Fi scenarios, only the devices in the same LAN can be discovered.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Record<string, int | string> } discoverParam - Identifier of the device to discover.
     *     It specifies the type of the target to discover.
     *     <br>**discoverTargetType**: The default discovery target is device. The value is **1**.
     * @param { Record<string, int | string> } [filterOptions] - Options for filtering the devices to discover.
     *     The default value is **undefined**, which means to discover offline devices.
     *     The options include the following:
     *     <br>- **availableStatus(0-1)**: status of the device to discover.
     *     The value **0** means the device is untrusted.
     *     <br>- **0**: The device is offline. The client needs to call **bindTarget** to bind the device.
     *     <br>- **1**: The device is online and can be connected.
     *     <br>**discoverDistance(0-100)**: distance of the device to discover, in cm.
     *     This parameter is not used in Wi-Fi scenarios.
     *     <br>**authenticationStatus(0-1)**: authentication status of the device to discover.
     *     <br>- **0**: The device is not authenticated.
     *     <br>The value **1** means the device has been authenticated.
     *     <br>- **authorizationType(0-2)**: authorization type of the device to discover.
     *     <br>- **0**: The device is authenticated by a temporarily agreed session key.
     *     <br>- **1**: The device is authenticated by a key of the same account.
     *     <br>- **2**: The device is authenticated by a credential key of different accounts.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600104 - Discovery unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    startDiscovering(discoverParam: Record<string, int | string>, filterOptions?: Record<string, int | string>): void;

    /**
     * Stops device discovery.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    stopDiscovering(): void;

    /**
     * Binds a device. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } deviceId - Device ID. The value is a string of 1 to 255 characters.
     * @param { object } bindParam - Authentication parameters.
     *     You can determine the key-value pair to be passed in. By default, the following keys are carried:
     *     <br>**bindType**: binding type, which is mandatory.
     *     <br>The value **1** means PIN authentication.
     *     <br>**targetPkgName**: bundle name of the target to bind.
     *     <br>**appName**: application that attempts to bind the target.
     *     <br>**appOperation**: reason for the application to bind the target.
     *     <br>**customDescription**: detailed description of the operation.
     * @param { AsyncCallback<{deviceId: string;}> } callback - Callback used to return the authentication result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified deviceId is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @throws { BusinessError } 11600103 - Authentication unavailable.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    bindTarget(deviceId: string, bindParam: { [key: string]: Object; }, callback: AsyncCallback<{deviceId: string;}>): void;

    /**
     * Binds a device. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } deviceId - Device ID. The value is a string of 1 to 255 characters.
     * @param { Record<string, int | string> } bindParam - Authentication parameters.
     *     You can determine the key-value pair to be passed in. By default, the following keys are carried:
     *     <br>**bindType**: binding type, which is mandatory.
     *     <br>The value **1** means PIN authentication.
     *     <br>**targetPkgName**: bundle name of the target to bind.
     *     <br>**appName**: application that attempts to bind the target.
     *     <br>**appOperation**: reason for the application to bind the target.
     *     <br>**customDescription**: detailed description of the operation.
     * @param { AsyncCallback<BindTargetResult> } callback - Callback used to return the authentication result.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @throws { BusinessError } 11600103 - Authentication unavailable.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    bindTarget(deviceId: string, bindParam: Record<string, int | string>, callback: AsyncCallback<BindTargetResult>): void;

    /**
     * Unbinds a device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } deviceId - Device ID. The value is a string of 1 to 255 characters.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified deviceId is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    unbindTarget(deviceId: string): void;

    /**
     * Replies to the user's UI operation. This API can be used only by the PIN HAP of the **deviceManager**.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { int } action - User operation.
     *     <br>- **0**: Grant the permission.
     *     <br>- **1**. Remove the permission.
     *     <br>-**2**: Time out the user operation in the permission request dialog.
     *     <br>- **3**: Cancel the display of the PIN box.
     *     <br>- **4**: Cancel the display of the PIN input box.
     *     <br>- **5**: Confirm the input in the PIN input box.
     * @param { string } actionResult - User operation result. The value is a string of 1 to 255 characters.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified actionResult is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamic
     * @since 23 static
     */
    replyUiAction(action: int, actionResult: string): void;

    /**
     * Subscribes to the device state changes. The application (identified by the bundle name) will be notified when the
     * device state changes. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceStateChange' } type - Event type. The value **'deviceStateChange'** indicates device state
     *     changes.
     * @param { Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }> } callback - Callback used to return
     *     the device information and state.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>): void;

    /**
     * Register a device state callback so that the application can be notified upon device state changes based on
     * the application bundle name.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceStateChangeResult> } callback
     *     Indicates the device state callback to register.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDeviceStateChange(callback: Callback<DeviceStateChangeResult>): void;

    /**
     * Unsubscribes from the device state changes. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceStateChange' } type - Event type. The value **'deviceStateChange'** indicates device state
     *     changes.
     * @param { Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }> } callback - Callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>): void;

    /**
     * UnRegister device state callback based on the application bundle name.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceStateChangeResult> } [callback]
     *     Indicates the device state callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDeviceStateChange(callback?: Callback<DeviceStateChangeResult>): void;

    /**
     * Subscribes to the **'discoverSuccess'** event. The application will be notified when a device is successfully
     * discovered. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverSuccess' } type - Event type, which has a fixed value of **'discoverSuccess'**.
     * @param { Callback<{ device: DeviceBasicInfo; }> } callback - Callback invoked when a device is successfully
     *     discovered.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'discoverSuccess', callback: Callback<{ device: DeviceBasicInfo; }>): void;

    /**
     * Register a device discovery result callback so that the application can be notified when discovery success.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoverySuccessResult> } callback - Indicates the device discovery callback to register.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDiscoverSuccess(callback: Callback<DiscoverySuccessResult>): void;

    /**
     * Unsubscribes from the **'discoverSuccess'** event. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverSuccess' } type - Event type, which has a fixed value of **'discoverSuccess'**.
     * @param { Callback<{ device: DeviceBasicInfo; }> } callback - Callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'discoverSuccess', callback?: Callback<{ device: DeviceBasicInfo; }>): void;

    /**
     * UnRegister the device discovery result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoverySuccessResult> } [callback] - Indicates the device discovery callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDiscoverSuccess(callback?: Callback<DiscoverySuccessResult>): void;

    /**
     * Subscribes to device name changes. The application will be notified when the name of a device is changed. This
     * API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceNameChange' } type - Event type, which has a fixed value of **deviceNameChange**.
     * @param { Callback<{ deviceName: string; }> } callback - Callback used to return the device name change.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'deviceNameChange', callback: Callback<{ deviceName: string; }>): void;

    /**
     * Register a device name change callback so that the application can be notified when discovery success.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceNameChangeResult> } callback - Indicates the device name change callback to register.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDeviceNameChange(callback: Callback<DeviceNameChangeResult>): void;

    /**
     * Unsubscribes from the device name changes. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceNameChange' } type - Event type, which has a fixed value of **deviceNameChange**.
     * @param { Callback<{ deviceName: string; }> } callback - Callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'deviceNameChange', callback?: Callback<{ deviceName: string; }>): void;

    /**
     * UnRegister the device name change result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceNameChangeResult> } [callback] - Indicates the device name change callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDeviceNameChange(callback?: Callback<DeviceNameChangeResult>): void;

    /**
     * Subscribes to the **'discoverFailure'** event. The application will be notified when a device fails to be
     * discovered. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverFailure' } type - Event type, which has a fixed value of **'discoverFailure'**.
     * @param { Callback<{ reason: int; }> } callback - Callback invoked when a device fails to be discovered.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'discoverFailure', callback: Callback<{ reason: int; }>): void;

    /**
     * Register a device discovery result callback so that the application can be notified when discover failed.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoveryFailureResult> } callback
     *     Indicates the device found result callback to register.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDiscoverFailure(callback: Callback<DiscoveryFailureResult>): void;

    /**
     * Unsubscribes from the **'discoverFailure'** event. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverFailure' } type - Event type, which has a fixed value of **'discoverFailure'**.
     * @param { Callback<{ reason: int; }> } callback - Callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'discoverFailure', callback?: Callback<{ reason: int; }>): void;

    /**
     * UnRegister the device discovery result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoveryFailureResult> } [callback]
     *     Indicates the device found result callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDiscoverFailure(callback?: Callback<DiscoveryFailureResult>): void;

    /**
     * Subscribes to the dead events of the **DeviceManager** service. The application will be notified when the
     * **DeviceManager** service is terminated unexpectedly. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serviceDie' } type - Event type, which has a fixed value of **'serviceDie'**.
     * @param { Callback<{}> } callback - Callback invoked when the **DeviceManager** service is terminated
     *     unexpectedly.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'serviceDie', callback?: Callback<{}>): void;

    /**
     * Register a serviceError callback so that the application can be notified when devicemanager service died
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ServiceDieData> } callback - Indicates the service error callback to register.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onServiceDie(callback: Callback<ServiceDieData>): void;

    /**
     * Unsubscribes from the dead events of the **DeviceManager** service. This API uses an asynchronous callback to
     * return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serviceDie' } type - Event type, which has a fixed value of **'serviceDie'**.
     * @param { Callback<{}> } callback - Callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'serviceDie', callback?: Callback<{}>): void;

    /**
     * UnRegister the service error callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ServiceDieData> } [callback] - Indicates the service error callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offServiceDie(callback?: Callback<ServiceDieData>): void;

    /**
     * Subscribes to the reply to the UI operation result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'replyResult' } type - Event type, which has a fixed value of **replyResult**.
     * @param { Callback<{ param: string; }> } callback - Callback invoked to return the UI status change.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamic
     */
    on(type: 'replyResult', callback: Callback<{ param: string; }>): void;

    /**
     * Register a callback from deviceManager service so that the devicemanager ui can be notified when uiStateChanges.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { Callback<ReplyResult> } callback - Indicates the devicemanager ui state to register.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 23 static
     */
    onReplyResult(callback: Callback<ReplyResult>): void;

    /**
     * Unsubscribes from the reply to the UI operation result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'replyResult' } type - Event type, which has a fixed value of **replyResult**.
     * @param { Callback<{ param: string; }> } callback - Callback to unregister.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamic
     */
    off(type: 'replyResult', callback?: Callback<{ param: string; }>): void;

    /**
     * Unregister uiStateChange, this interface can only be used by devicemanager ui.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { Callback<ReplyResult> } [callback] - Indicates the devicemanager ui state to unregister.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 23 static
     */
    offReplyResult(callback?: Callback<ReplyResult>): void;

    /**
     * Obtains the list of devices under the same account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { DeviceProfileInfoFilterOptions } filterOptions - Filter options.
     * @returns { Promise<Array<DeviceProfileInfo>> } Promise used to return the device list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 500.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Get data from cloud fail.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    getDeviceProfileInfoList(filterOptions: DeviceProfileInfoFilterOptions): Promise<Array<DeviceProfileInfo>>;

    /**
     * Updates the device list. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { Array<DeviceProfileInfo> } deviceProfileInfoList - Device list.
     * @returns { Promise<int> } Operation result. The value **0** indicates that the operation is successful.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     *     4. The size of specified type is greater than 500.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    putDeviceProfileInfoList(deviceProfileInfoList: Array<DeviceProfileInfo>): Promise<int>;

    /**
     * Obtains the device icon. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { DeviceIconInfoFilterOptions } filterOptions - Filter options.
     * @returns { Promise<DeviceIconInfo> } Promise used to return the device icon information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Get data from cloud fail.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getDeviceIconInfo(filterOptions: DeviceIconInfoFilterOptions): Promise<DeviceIconInfo>;

    /**
     * Obtains the local device's display name with the specified length. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { int } maxNameLength - Length of the local device's display name, in bytes. The value range is [18, 100].
     *     If the value is **0**, the length is not limited.
     * @returns { Promise<string> } Maximum number of bytes in the local device's display name.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getLocalDisplayDeviceName(maxNameLength: int): Promise<string>;

    /**
     * Sets the local device name. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } deviceName - Device name to set. The value is a string of 1 to 255 characters.
     * @returns { Promise<int> } Operation result. The value **0** indicates that the operation is successful.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Failed to get data from the cloud.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @throws { BusinessError } 11600108 - The device name contains non-compliant content.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setLocalDeviceName(deviceName: string): Promise<int>;

    /**
     * Sets the remote device name. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } deviceId - UDID of the  remote device. If the device does not have a UDID, the MAC address or
     *     SN of the device is used as the device ID. The SN is used preferentially.
     * @param { string } deviceName - Device name to set. The value is a string of 1 to 255 characters.
     * @returns { Promise<int> } Operation result. The value **0** indicates that the operation is successful.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter type;
     *     3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Failed to get data from the cloud.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @throws { BusinessError } 11600108 - The device name contains non-compliant content.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setRemoteDeviceName(deviceId: string, deviceName: string): Promise<int>;

    /**
     * Sets the heartbeat broadcast policy.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { StrategyForHeartbeat } policy - Heartbeat broadcast policy.
     * @param { int } delayTime - Duration for temporarily disabling heartbeat broadcast. The value ranges from 1000 to
     *     15000, in milliseconds.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    setHeartbeatPolicy(policy: StrategyForHeartbeat, delayTime: int): void;

    /**
     * Restores the local device name by resetting the network settings.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain the service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     * @deprecated since 24
     * @useinstead distributedDeviceManager.DeviceManager.restoreLocalDeviceName
     */
    restoreLocalDeivceName(): void;

    /**
     * Obtains the list of network devices according to the specified filter options.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { NetworkIdQueryFilter } filterOptions - Filter options.
     * @returns { Promise<Array<string>> } Promise used to return the device list.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Parameter verification failed;
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getDeviceNetworkIdList(filterOptions: NetworkIdQueryFilter): Promise<Array<string>>;

    /**
     * Query device identification by device IDs.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.ACCESS_SERVICE_DM and
     *     ohos.permission.sec.ACCESS_UDID
     * @param { Array<string> } deviceIds - A list of device IDs that could be obtained by the application,
     *                                      with a maximum list size of 50.
     * @returns { Array<DeviceIdentification> } - Returns a list of DeviceIdentification.
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getIdentificationByDeviceIds(deviceIds: Array<string>): Array<DeviceIdentification>;

    /**
     * Restores the local device name.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain the service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    restoreLocalDeviceName(): void;
  }
}

export default distributedDeviceManager;