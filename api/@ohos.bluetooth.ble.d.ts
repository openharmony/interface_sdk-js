/*
 * Copyright (C) 2023-2024 Huawei Device Co., Ltd.
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

import type { AsyncCallback, Callback } from './@ohos.base';
import type constant from './@ohos.bluetooth.constant';
import type common from './@ohos.bluetooth.common';
import type connection from './@ohos.bluetooth.connection';

/**
 * Provides methods to operate or manage Bluetooth.
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @stagemodelonly
 * @crossplatform [since 13]
 * @atomicservice [since 12]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace ble {
  /**
   * Indicate the profile connection state.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  type ProfileConnectionState = constant.ProfileConnectionState;

  /**
   * Bluetooth device address.
   *
   * @typedef { common.BluetoothAddress } BluetoothAddress
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  type BluetoothAddress = common.BluetoothAddress;

  /**
   * Indicate the transport of a remote device.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  type BluetoothTransport = connection.BluetoothTransport;

  /**
   * create a Gatt server instance.
   *
   * @returns { GattServer } Returns a Gatt server instance {@code GattServer}.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createGattServer(): GattServer;

  /**
   * create a Gatt client device instance.
   *
   * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
   * @returns { GattClientDevice } Returns a Gatt client device instance {@code GattClientDevice}.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createGattClientDevice(deviceId: string): GattClientDevice;

  /**
   * create a Gatt client device instance with custom setting.
   *
   * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
   * @param { GattSetting } setting - Indicates Gatt setting for connection.
   * @returns { GattClientDevice } Returns a Gatt client device instance {@code GattClientDevice}.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API because the short-range chip is not inserted on the 2in1 device.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function createGattClientDevice(deviceId: string, setting: GattSetting): GattClientDevice;

  /**
   * Create a ble scanner instance. Each ble scanner instance can be independently started or stopped.
   *
   * @returns { BleScanner } Returns the promise object.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function createBleScanner(): BleScanner;

  /**
   * Obtains the list of devices in the connected status.
   * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
   * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @returns { Array<string> } Returns the list of device address.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  function getConnectedBLEDevices(): Array<string>;

  /**
   * Obtains the list of devices in the connected status.
   * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
   * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 21 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { BleProfile } profile - The profile in the BLE protocol.
   *     It is used to obtain the connected devices corresponding to the profile.
   * @returns { Array<string> } Returns the list of device address.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  function getConnectedBLEDevices(profile: BleProfile): Array<string>;

  /**
   * Starts scanning for specified BLE devices with filters.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Array<ScanFilter> } filters - Indicates the list of filters used to filter out specified devices.
   *     If you do not want to use filter, set this parameter to {@code null}.
   * @param { ScanOptions } options - Indicates the parameters for scanning and if the user does not assign a value, the
   *     default value will be used.
   *     {@link ScanOptions#interval} set to 0, {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
   *     and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
   *     and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function startBLEScan(filters: Array<ScanFilter>, options?: ScanOptions): void;

  /**
   * Starts scanning for specified BLE devices with filters.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Array<ScanFilter> | null } filters - Indicates the list of filters used to filter out specified devices.
   *     If you do not want to use filter, set this parameter to {@code null}.
   * @param { ScanOptions } [options] - Indicates the parameters for scanning and if the user does not assign a value,
   *     the default value will be used. {@link ScanOptions#interval} set to 0,
   *     {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
   *     and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
   *     and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  function startBLEScan(filters: Array<ScanFilter> | null, options?: ScanOptions): void;

  /**
   * Stops BLE scanning.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function stopBLEScan(): void;

  /**
   * Starts BLE advertising.
   *
   * - If only {@link AdvertiseData#includeDeviceName} is set to true,
   * the local name will be carried in the broadcast packet.
   * - If only {@link AdvertiseData#advertiseName} is set,
   * its value will be used as a custom name and carried in the broadcast packet.
   * - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified,
   * the {@link AdvertiseData#advertiseName} property will take effect.
   * - To set {@link AdvertiseData#advertiseName},
   * ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 22]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME) [since 23]
   * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
   * @param { AdvertiseData } advData - Indicates the advertising data.
   * @param { AdvertiseData } advResponse - Indicates the scan response associated with the advertising data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit. [since 20]
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit. [since 20]
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void;

  /**
   * Stops BLE advertising.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function stopAdvertising(): void;

  /**
   * Starts BLE advertising.
   * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
   * using the API {@link enableAdvertising} or {@link disableAdvertising}.
   * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
   *
   * - If only {@link AdvertiseData#includeDeviceName} is set to true,
   * the local name will be carried in the broadcast packet.
   * - If only {@link AdvertiseData#advertiseName} is set,
   * its value will be used as a custom name and carried in the broadcast packet.
   * - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified,
   * the {@link AdvertiseData#advertiseName} property will take effect.
   * - To set {@link AdvertiseData#advertiseName},
   * ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 11 - 22]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME) [since 23]
   * @param { AdvertisingParams } advertisingParams - Indicates the params for BLE advertising.
   * @param { AsyncCallback<int> } callback - the callback of advertise ID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit. [since 20]
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit. [since 20]
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   * @since 23 static
   */
  function startAdvertising(advertisingParams: AdvertisingParams, callback: AsyncCallback<int>): void;

  /**
   * Starts BLE advertising.
   * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
   * using the API {@link enableAdvertising} or {@link disableAdvertising}.
   * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
   *
   * - If only {@link AdvertiseData#includeDeviceName} is set to true,
   * the local name will be carried in the broadcast packet.
   * - If only {@link AdvertiseData#advertiseName} is set,
   * its value will be used as a custom name and carried in the broadcast packet.
   * - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified,
   * the {@link AdvertiseData#advertiseName} property will take effect.
   * - To set {@link AdvertiseData#advertiseName},
   * ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 11 - 22]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME) [since 23]
   * @param { AdvertisingParams } advertisingParams - Indicates the param for BLE advertising.
   * @returns { Promise<int> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit. [since 20]
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit. [since 20]
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   * @since 23 static
   */
  function startAdvertising(advertisingParams: AdvertisingParams): Promise<int>;

  /**
   * Enable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingEnableParams } advertisingEnableParams - Indicates the params for enable advertising.
   * @param { AsyncCallback<void> } callback - the callback result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id. [since 20]
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function enableAdvertising(advertisingEnableParams: AdvertisingEnableParams, callback: AsyncCallback<void>): void;

  /**
   * Enable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingEnableParams } advertisingEnableParams - Indicates the params for enable advertising.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id. [since 20]
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function enableAdvertising(advertisingEnableParams: AdvertisingEnableParams): Promise<void>;

  /**
   * Disable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingDisableParams } advertisingDisableParams - Indicates the params for disable advertising.
   * @param { AsyncCallback<void> } callback - the callback result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id. [since 20]
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function disableAdvertising(advertisingDisableParams: AdvertisingDisableParams, callback: AsyncCallback<void>): void;

  /**
   * Disable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingDisableParams } advertisingDisableParams - Indicates the params for disable advertising.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id. [since 20]
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function disableAdvertising(advertisingDisableParams: AdvertisingDisableParams): Promise<void>;

  /**
   * Stops BLE advertising.
   * Completely stop the advertising corresponding to the ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } advertisingId - Indicates the ID for this BLE advertising.
   * @param { AsyncCallback<void> } callback - the callback result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id. [since 20]
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   * @since 26.0.0 static
   */
  function stopAdvertising(advertisingId: int, callback: AsyncCallback<void>): void;

  /**
   * Stops BLE advertising.
   * Completely stop the advertising corresponding to the ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } advertisingId - Indicates the ID for this BLE advertising.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id. [since 20]
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   * @since 26.0.0 static
   */
  function stopAdvertising(advertisingId: int): Promise<void>;

  /**
   * Subscribing to advertising state change event.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'advertisingStateChange' } type - Type of the advertising state to listen for.
   * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to listen for the advertising state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   */
  function on(type: 'advertisingStateChange', callback: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * Subscribing to advertising state change event.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to listen for the advertising state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 static
   */
  function onAdvertisingStateChange(callback: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * Unsubscribe from advertising state change event.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'advertisingStateChange' } type - Type of the advertising state to listen for.
   * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to listen for the advertising state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   */
  function off(type: 'advertisingStateChange', callback?: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * Unsubscribe from advertising state change event.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<AdvertisingStateChangeInfo> } [callback] - Callback used to listen for the advertising state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 static
   */
  function offAdvertisingStateChange(callback?: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * Subscribe BLE scan result.
   * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
   * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
   * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed. [since 10 - 24]
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function on(type: 'BLEDeviceFind', callback: Callback<Array<ScanResult>>): void;

  /**
   * Subscribe BLE scan result.
   * If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real.
   * Otherwise, the type of the peer device address is virtual.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
   * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 static
   */
  function onBLEDeviceFind(callback: Callback<Array<ScanResult>>): void;

  /**
   * Unsubscribe BLE scan result.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
   * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function off(type: 'BLEDeviceFind', callback?: Callback<Array<ScanResult>>): void;

  /**
   * Unsubscribe BLE scan result.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<Array<ScanResult>> } [callback] - Callback used to listen for the scan result event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 static
   */
  function offBLEDeviceFind(callback?: Callback<Array<ScanResult>>): void;

  /**
   * Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an
   * GattServer instance.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface GattServer {
    /**
     * Adds a specified service to be hosted.
     *
     * The added service and its characteristics are provided by the local device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { GattService } service - Indicates the service to add.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    addService(service: GattService): void;

    /**
     * Removes a specified service from the list of GATT services provided by this device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } serviceUuid - Indicates the UUID of the service to remove.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    removeService(serviceUuid: string): void;

    /**
     * Removes all services from the list of GATT services offered by this device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API because the short-range chip is not inserted on the 2in1 device.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    removeAllServices(): void;

    /**
     * Obtain a specific GATT service by using a UUID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } serviceUuid - Indicates the UUID of the service.
     * @returns { GattService } The GATT service has been obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901008 - Gatt service is not found.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    getService(serviceUuid: string): GattService;

    /**
     * Obtain the list of GATT services registered by the application.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { GattService[] } The list of GATT service has been obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    getServices(): GattService[];

    /**
     * Closes this {@code GattServer} object and unregisters its callbacks.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * Connects to a BLE central device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { boolean } [autoConnect] - Indicates whether to automatically connect to the remote device.
     *     If {@code true}, it will automatically connect when the remote device is available, default is {@code false}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API because the short-range chip is not inserted on the 2in1 device.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    connect(deviceId: string, autoConnect?: boolean): void;

    /**
     * Disconnects from or stops an ongoing connection to a BLE central device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API because the short-range chip is not inserted on the 2in1 device.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    disconnect(deviceId: string): void;

    /**
     * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
     *
     * This method should be called for every BLE peripheral device that has requested notifications.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    notifyCharacteristicChanged(
      deviceId: string,
      notifyCharacteristic: NotifyCharacteristic,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
     *
     * This method should be called for every BLE peripheral device that has requested notifications.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic): Promise<void>;

    /**
     * Sends a response to a specified read or write request to a given BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ServerResponse } serverResponse - Indicates the response parameters {@link ServerResponse}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sendResponse(serverResponse: ServerResponse): void;

    /**
     * Get the connection state of a specific device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @returns { ProfileConnectionState } Connection state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    getConnectedState(deviceId: string): ProfileConnectionState;

    /**
     * Read the phy associated with the connection.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @returns { Promise<PhyValue> } Promise used to return the phy value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    readPhy(deviceId: string): Promise<PhyValue>;

    /**
     * Set the preferred phy associated with the connection.
     * Whether the phy value will be changed depends on the strategy of the Bluetooth chip.
     * A successful call to this interface does not guarantee that the chip's phy value has been successfully set.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { PhyValue } phyValue - Indicates the phy to set.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    setPhy(deviceId: string, phyValue: PhyValue): Promise<void>;

    /**
     * Subscribe characteristic read event.
     * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
     * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
     * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read
     *     event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed. [since 10 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'characteristicRead', callback: Callback<CharacteristicReadRequest>): void;

    /**
     * Subscribe characteristic read event.
     * If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real.
     * Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read
     *     event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    onCharacteristicRead(callback: Callback<CharacteristicReadRequest>): void;

    /**
     * Unsubscribe characteristic read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
     * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read
     *     event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'characteristicRead', callback?: Callback<CharacteristicReadRequest>): void;

    /**
     * Unsubscribe characteristic read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<CharacteristicReadRequest> } [callback] -
     *     Callback used to listen for the characteristic read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    offCharacteristicRead(callback?: Callback<CharacteristicReadRequest>): void;

    /**
     * Subscribe characteristic write event.
     * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
     * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
     * @param { Callback<CharacteristicWriteRequest> } callback -
     *     Callback used to listen for the characteristic write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed. [since 10 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'characteristicWrite', callback: Callback<CharacteristicWriteRequest>): void;

    /**
     * Subscribe characteristic write event.
     * If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real.
     * Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write
     *     event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    onCharacteristicWrite(callback: Callback<CharacteristicWriteRequest>): void;

    /**
     * Unsubscribe characteristic write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
     * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write
     *     event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'characteristicWrite', callback?: Callback<CharacteristicWriteRequest>): void;

    /**
     * Unsubscribe characteristic write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<CharacteristicWriteRequest> } [callback]
     *     - Callback used to listen for the characteristic write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    offCharacteristicWrite(callback?: Callback<CharacteristicWriteRequest>): void;

    /**
     * Subscribe descriptor read event.
     * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
     * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
     * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed. [since 10 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'descriptorRead', callback: Callback<DescriptorReadRequest>): void;

    /**
     * Subscribe descriptor read event.
     * If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real.
     * Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    onDescriptorRead(callback: Callback<DescriptorReadRequest>): void;

    /**
     * Unsubscribe descriptor read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
     * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'descriptorRead', callback?: Callback<DescriptorReadRequest>): void;

    /**
     * Unsubscribe descriptor read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<DescriptorReadRequest> } [callback] - Callback used to listen for the descriptor read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    offDescriptorRead(callback?: Callback<DescriptorReadRequest>): void;

    /**
     * Subscribe descriptor write event.
     * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
     * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
     * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed. [since 10 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'descriptorWrite', callback: Callback<DescriptorWriteRequest>): void;

    /**
     * Subscribe descriptor write event.
     * If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real.
     * Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    onDescriptorWrite(callback: Callback<DescriptorWriteRequest>): void;

    /**
     * Unsubscribe descriptor write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
     * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'descriptorWrite', callback?: Callback<DescriptorWriteRequest>): void;

    /**
     * Unsubscribe descriptor write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<DescriptorWriteRequest> } [callback] - Callback used to listen for the descriptor write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    offDescriptorWrite(callback?: Callback<DescriptorWriteRequest>): void;

    /**
     * Subscribe server connection state changed event.
     * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
     * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback -
     *     Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed. [since 10 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'connectionStateChange', callback: Callback<BLEConnectionChangeState>): void;

    /**
     * Subscribe server connection state changed event.
     * If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real.
     * Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<BLEConnectionChangeState> } callback -
     *     Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    onConnectionStateChange(callback: Callback<BLEConnectionChangeState>): void;

    /**
     * Unsubscribe server connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed
     *     event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'connectionStateChange', callback?: Callback<BLEConnectionChangeState>): void;

    /**
     * Unsubscribe server connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<BLEConnectionChangeState> } [callback]
     *     - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    offConnectionStateChange(callback?: Callback<BLEConnectionChangeState>): void;

    /**
     * Subscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<int> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     */
    on(type: 'BLEMtuChange', callback: Callback<int>): void;

    /**
     * Subscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<int> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    onBLEMtuChange(callback: Callback<int>): void;

    /**
     * Unsubscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<int> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     */
    off(type: 'BLEMtuChange', callback?: Callback<int>): void;

    /**
     * Unsubscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<int> } [callback] - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    offBLEMtuChange(callback?: Callback<int>): void;

    /**
     * Subscribe phy updated event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } callback - Callback used to listen for the phy updated event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    onBlePhyUpdate(callback: Callback<PhyValue>): void;

    /**
     * Unsubscribe phy updated event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } [callback] - Callback used to listen for the phy updated event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    offBlePhyUpdate(callback?: Callback<PhyValue>): void;
  }

  /**
   * Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an
   * GattClientDevice instance.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface GattClientDevice {
    /**
     * Connects to a BLE peripheral device.
     *
     * The 'BLEConnectionStateChange' event is subscribed to return the connection state.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    connect(): void;

    /**
     * Disconnects from or stops an ongoing connection to a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    disconnect(): void;

    /**
     * Disables a BLE peripheral device.
     *
     * This method unregisters the device and clears the registered callbacks and handles.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * Obtains the name of BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<string> } callback - Callback used to obtain the device name.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getDeviceName(callback: AsyncCallback<string>): void;

    /**
     * Obtains the name of BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<string> } Returns a string representation of the name if obtained;
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter.Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getDeviceName(): Promise<string>;

    /**
     * Starts discovering services.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<Array<GattService>> } callback - Callback used to catch the services.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    getServices(callback: AsyncCallback<Array<GattService>>): void;

    /**
     * Starts discovering services.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<Array<GattService>> } Returns the list of services {@link GattService} of the BLE peripheral
     *     device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    getServices(): Promise<Array<GattService>>;

    /**
     * Reads the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
     * @param { AsyncCallback<BLECharacteristic> } callback - Callback invoked to return the characteristic value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @throws { BusinessError } 2901004 - The connection is congested. [since 20]
     * @throws { BusinessError } 2901005 - The connection is not encrypted. [since 20]
     * @throws { BusinessError } 2901006 - The connection is not authenticated. [since 20]
     * @throws { BusinessError } 2901007 - The connection is not authorized. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    readCharacteristicValue(characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>): void;

    /**
     * Reads the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
     * @returns { Promise<BLECharacteristic> } - Promise used to return the characteristic value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @throws { BusinessError } 2901004 - The connection is congested. [since 20]
     * @throws { BusinessError } 2901005 - The connection is not encrypted. [since 20]
     * @throws { BusinessError } 2901006 - The connection is not authenticated. [since 20]
     * @throws { BusinessError } 2901007 - The connection is not authorized. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readCharacteristicValue(characteristic: BLECharacteristic): Promise<BLECharacteristic>;

    /**
     * Reads the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
     * @param { AsyncCallback<BLEDescriptor> } callback - Callback invoked to return the descriptor read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @throws { BusinessError } 2901004 - The connection is congested. [since 20]
     * @throws { BusinessError } 2901005 - The connection is not encrypted. [since 20]
     * @throws { BusinessError } 2901006 - The connection is not authenticated. [since 20]
     * @throws { BusinessError } 2901007 - The connection is not authorized. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>): void;

    /**
     * Reads the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
     * @returns { Promise<BLEDescriptor> } - Promise used to return the descriptor read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @throws { BusinessError } 2901004 - The connection is congested. [since 20]
     * @throws { BusinessError } 2901005 - The connection is not encrypted. [since 20]
     * @throws { BusinessError } 2901006 - The connection is not authenticated. [since 20]
     * @throws { BusinessError } 2901007 - The connection is not authorized. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readDescriptorValue(descriptor: BLEDescriptor): Promise<BLEDescriptor>;

    /**
     * Writes the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @throws { BusinessError } 2901004 - The connection is congested. [since 20]
     * @throws { BusinessError } 2901005 - The connection is not encrypted. [since 20]
     * @throws { BusinessError } 2901006 - The connection is not authenticated. [since 20]
     * @throws { BusinessError } 2901007 - The connection is not authorized. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    writeCharacteristicValue(
      characteristic: BLECharacteristic,
      writeType: GattWriteType,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Writes the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @throws { BusinessError } 2901004 - The connection is congested. [since 20]
     * @throws { BusinessError } 2901005 - The connection is not encrypted. [since 20]
     * @throws { BusinessError } 2901006 - The connection is not authenticated. [since 20]
     * @throws { BusinessError } 2901007 - The connection is not authorized. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    writeCharacteristicValue(characteristic: BLECharacteristic, writeType: GattWriteType): Promise<void>;

    /**
     * Writes the characteristic of a BLE peripheral device with context.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     *     The interface currently only supports {@link GattWriteType#WRITE} mode.
     * @returns { Promise<GattRspContext> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @throws { BusinessError } 2901004 - The connection is congested.
     * @throws { BusinessError } 2901005 - The connection is not encrypted.
     * @throws { BusinessError } 2901006 - The connection is not authenticated.
     * @throws { BusinessError } 2901007 - The connection is not authorized.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    writeCharacteristicValueWithContext(
      characteristic: BLECharacteristic, writeType: GattWriteType): Promise<GattRspContext>;

    /**
     * Writes the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @throws { BusinessError } 2901004 - The connection is congested. [since 20]
     * @throws { BusinessError } 2901005 - The connection is not encrypted. [since 20]
     * @throws { BusinessError } 2901006 - The connection is not authenticated. [since 20]
     * @throws { BusinessError } 2901007 - The connection is not authorized. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>): void;

    /**
     * Writes the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @throws { BusinessError } 2901004 - The connection is congested. [since 20]
     * @throws { BusinessError } 2901005 - The connection is not encrypted. [since 20]
     * @throws { BusinessError } 2901006 - The connection is not authenticated. [since 20]
     * @throws { BusinessError } 2901007 - The connection is not authorized. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    writeDescriptorValue(descriptor: BLEDescriptor): Promise<void>;

    /**
     * Get the RSSI value of this BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<int> } callback - Callback invoked to return the RSSI, in dBm.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20 - 21]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    getRssiValue(callback: AsyncCallback<int>): void;

    /**
     * Get the RSSI value of this BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<int> } Returns the RSSI value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20 - 21]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    getRssiValue(): Promise<int>;

    /**
     * Set the mtu size of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { int } mtu - The maximum transmission unit.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setBLEMtuSize(mtu: int): void;

    /**
     * Asynchronous interface for setting the mtu size of a BLE peripheral device.
     * The API returns the mtu size that takes effect.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { int } mtu - The maximum transmission unit.
     * @returns { Promise<int> } Promise used to return the mtu size that takes effect.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setBLEMtu(mtu: int): Promise<int>;

    /**
     * Enables or disables notification of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic.
     *     The value {@code true} indicates that notification is enabled,
     *     and the value {@code false} indicates that indication is disabled.
     * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeNotification.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    setCharacteristicChangeNotification(
      characteristic: BLECharacteristic,
      enable: boolean,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic.
     *     The value {@code true} indicates that indication is enabled,
     *     and the value {@code false} indicates that indication is disabled.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    setCharacteristicChangeNotification(characteristic: BLECharacteristic, enable: boolean): Promise<void>;

    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic.
     *     The value {@code true} indicates that indication is enabled,
     *     and the value {@code false} indicates that indication is disabled.
     * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeIndication.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setCharacteristicChangeIndication(
      characteristic: BLECharacteristic,
      enable: boolean,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic.
     *     The value {@code true} indicates that indication is enabled,
     *     and the value {@code false} indicates that indication is disabled.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete. [since 20]
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established. [since 20]
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setCharacteristicChangeIndication(characteristic: BLECharacteristic, enable: boolean): Promise<void>;

    /**
     * Get the connection status of a specific device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { ProfileConnectionState } Connection state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    getConnectedState(): ProfileConnectionState;

    /**
     * Update the connection parameters of the current GATT link to save power or improve transmission performance.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ConnectionParam } param - GATT connection parameters.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    updateConnectionParam(param: ConnectionParam): Promise<void>;

    /**
     * Read the phy associated with the connection.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<PhyValue> } Promise used to return the phy value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    readPhy(): Promise<PhyValue>;

    /**
     * Set the preferred phy associated with the connection.
     * Whether the phy value will be changed depends on the strategy of the Bluetooth chip.
     * A successful call to this interface does not guarantee that the chip's phy value has been successfully set.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { PhyValue } phyValue - Indicates the phy to set.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    setPhy(phyValue: PhyValue): Promise<void>;

    /**
     * Subscribe characteristic value changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
     * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed
     *     event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>): void;

    /**
     * Subscribe characteristic value changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<BLECharacteristic> } callback
     *     - Callback used to listen for the characteristic value changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 26.0.0 static
     */
    onBLECharacteristicChange(callback: Callback<BLECharacteristic>): void;

    /**
     * Unsubscribe characteristic value changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
     * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed
     *     event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'BLECharacteristicChange', callback?: Callback<BLECharacteristic>): void;

    /**
     * Unsubscribe characteristic value changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<BLECharacteristic> } [callback]
     *     - Callback used to listen for the characteristic value changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    offBLECharacteristicChange(callback?: Callback<BLECharacteristic>): void;

    /**
     * Subscribe client connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed
     *     event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectionChangeState>): void;

    /**
     * Subscribe client connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<BLEConnectionChangeState> } callback
     *     - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    onBLEConnectionStateChange(callback: Callback<BLEConnectionChangeState>): void;

    /**
     * Unsubscribe client connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed
     *     event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'BLEConnectionStateChange', callback?: Callback<BLEConnectionChangeState>): void;

    /**
     * Unsubscribe client connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<BLEConnectionChangeState> } [callback]
     *     - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 26.0.0 static
     */
    offBLEConnectionStateChange(callback?: Callback<BLEConnectionChangeState>): void;

    /**
     * Subscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<int> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'BLEMtuChange', callback: Callback<int>): void;

    /**
     * Subscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<int> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 26.0.0 static
     */
    onBLEMtuChange(callback: Callback<int>): void;

    /**
     * Unsubscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<int> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'BLEMtuChange', callback?: Callback<int>): void;

    /**
     * Unsubscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<int> } [callback] - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    offBLEMtuChange(callback?: Callback<int>): void;

    /**
     * Subscribe to GATT service changed event. Receiving this event indicates that
     * the peer GATT database has been refreshed, and it is necessary to re-fetch the GATT service list.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'serviceChange' } type - Type of the service changed event to listen for.
     * @param { Callback<void> } callback - Callback used to listen for the service changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     */
    on(type: 'serviceChange', callback: Callback<void>): void;

    /**
     * Subscribe to GATT service changed event. Receiving this event indicates that
     * the peer GATT database has been refreshed, and it is necessary to re-fetch the GATT service list.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<void> } callback - Callback used to listen for the service changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onServiceChange(callback: Callback<void>): void;

    /**
     * Unsubscribe to GATT service changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'serviceChange' } type - Type of the service changed event to listen for.
     * @param { Callback<void> } [callback] - Callback used to listen for the service changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     */
    off(type: 'serviceChange', callback?: Callback<void>): void;

    /**
     * Unsubscribe to GATT service changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<void> } [callback] - Callback used to listen for the service changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    offServiceChange(callback?: Callback<void>): void;

    /**
     * Subscribe phy updated event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } callback - Callback used to listen for the phy updated event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    onBlePhyUpdate(callback: Callback<PhyValue>): void;

    /**
     * Unsubscribe phy updated event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } [callback] - Callback used to listen for the phy updated event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    offBlePhyUpdate(callback?: Callback<PhyValue>): void;
  }

  /**
   * Manages the ble scanner.
   * Before calling a ble scanner method, you must use {@link createBleScanner} to create an BleScanner instance.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface BleScanner {
    /**
     * Starts scanning for specified BLE devices with filters.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Array<ScanFilter> } filters - Indicates the list of filters used to filter out specified devices.
     *     If you do not want to use filter, set this parameter to {@code null}.
     * @param { ScanOptions } options - Indicates the parameters for scanning and if the user does not assign a value,
     *     the default value will be used. {@link ScanOptions#interval} set to 0,
     *     and {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
     *     and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
     *     and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
     *     and {@link ScanOptions#reportMode} set to {@link ScanReportMode#NORMAL}.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900009 - Fails to start scan as it is out of hardware resources.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902050 - Failed to start scan as Ble scan is already started by the app.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    startScan(filters: Array<ScanFilter>, options?: ScanOptions): Promise<void>;

    /**
     * Starts scanning for specified BLE devices with filters.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Array<ScanFilter> | null } filters - Indicates the list of filters used to filter out specified devices.
     *     If you do not want to use filter, set this parameter to {@code null}.
     * @param { ScanOptions } [options] - Indicates the parameters for scanning and if the user does not assign a value,
     *     the default value will be used. {@link ScanOptions#interval} set to 0,
     *     and {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
     *     and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
     *     and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
     *     and {@link ScanOptions#reportMode} set to {@link ScanReportMode#NORMAL}.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900009 - Fails to start scan as it is out of hardware resources.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902050 - Failed to start scan as Ble scan is already started by the app.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    startScan(filters: Array<ScanFilter> | null, options?: ScanOptions): Promise<void>;
    /**
     * Stops BLE scanning.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    stopScan(): Promise<void>;
    /**
     * Subscribe BLE scan result.
     * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
     * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 15 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
     * @param { Callback<ScanReport> } callback - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed. [since 15 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'BLEDeviceFind', callback: Callback<ScanReport>): void;

    /**
     * Subscribe BLE scan result.
     * If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real.
     * Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<ScanReport> } callback - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    onBLEDeviceFind(callback: Callback<ScanReport>): void;
    /**
     * Unsubscribe BLE scan result.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
     * @param { Callback<ScanReport> } callback - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'BLEDeviceFind', callback?: Callback<ScanReport>): void;

    /**
     * Unsubscribe BLE scan result.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<ScanReport> } [callback] - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 static
     */
    offBLEDeviceFind(callback?: Callback<ScanReport>): void;
  }

  /**
   * Describes the Gatt service.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface GattService {
    /**
     * The UUID of a GattService instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuid: string;
    /**
     * Indicates whether the GattService instance is primary or secondary.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isPrimary: boolean;
    /**
     * The {@link BLECharacteristic} list belongs to this GattService instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    characteristics: Array<BLECharacteristic>;
    /**
     * The list of GATT services contained in the service
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    includeServices?: Array<GattService>;
  }

  /**
   * Describes the Gatt characteristic.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface BLECharacteristic {
    /**
     * The UUID of the {@link GattService} instance to which the characteristic belongs
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuid: string;
    /**
     * The UUID of a BLECharacteristic instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The value of a BLECharacteristic instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    characteristicValue: ArrayBuffer;
    /**
     * The list of {@link BLEDescriptor} contained in the characteristic
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    descriptors: Array<BLEDescriptor>;
    /**
     * The properties of a BLECharacteristic instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    properties?: GattProperties;
    /**
     * The permissions of a BLECharacteristic instance. The default value is Readable and Writable.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    permissions?: GattPermissions;
    /**
     * The characteristic value handle of a BLECharacteristic instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    characteristicValueHandle?: int;
  }

  /**
   * Describes the Gatt descriptor.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface BLEDescriptor {
    /**
     * The UUID of the {@link GattService} instance to which the descriptor belongs
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuid: string;
    /**
     * The UUID of the {@link BLECharacteristic} instance to which the descriptor belongs
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The UUID of the BLEDescriptor instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    descriptorUuid: string;
    /**
     * The value of the BLEDescriptor instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    descriptorValue: ArrayBuffer;
    /**
     * The descriptor handle of the BLEDescriptor instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    descriptorHandle?: int;
    /**
     * The permissions of a BLEDescriptor instance. The default value is Readable and Writable.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    permissions?: GattPermissions;
  }

  /**
   * Describes the value of the indication or notification sent by the Gatt server.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface NotifyCharacteristic {
    /**
     * The UUID of the {@link GattService} instance to which the characteristic belongs
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuid: string;
    /**
     * The UUID of a NotifyCharacteristic instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The value of a NotifyCharacteristic instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    characteristicValue: ArrayBuffer;
    /**
     * Specifies whether to request confirmation from the BLE peripheral device (indication) or
     * send a notification. Value {@code true} indicates the former and {@code false} indicates the latter.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    confirm: boolean;
  }

  /**
   * Describes the parameters of the Gatt client's characteristic read request.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CharacteristicReadRequest {
    /**
     * Indicates the address of the client that initiates the read request
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The Id of the read request
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    transId: int;
    /**
     * Indicates the byte offset of the start position for reading characteristic value
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * The UUID of a CharacteristicReadRequest instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The UUID of the service to which the characteristic belongs
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuid: string;
  }

  /**
   * Describes the parameters of the of the Gatt client's characteristic write request.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CharacteristicWriteRequest {
    /**
     * Indicates the address of the client that initiates the write request
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The Id of the write request
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    transId: int;
    /**
     * Indicates the byte offset of the start position for writing characteristic value
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * Whether this request should be pending for later operation
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isPrepared: boolean;
    /**
     * Whether the remote client need a response
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    needRsp: boolean;
    /**
     * Indicates the value to be written
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    value: ArrayBuffer;
    /**
     * The UUID of a CharacteristicWriteRequest instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The UUID of the service to which the characteristic belongs
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuid: string;
  }

  /**
   * Describes the parameters of the Gatt client's descriptor read request.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface DescriptorReadRequest {
    /**
     * Indicates the address of the client that initiates the read request
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The Id of the read request
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    transId: int;
    /**
     * Indicates the byte offset of the start position for reading characteristic value
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * The UUID of a DescriptorReadRequest instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    descriptorUuid: string;
    /**
     * The UUID of the characteristic to which the descriptor belongs
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The UUID of the service to which the descriptor belongs
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuid: string;
  }

  /**
   * Describes the parameters of the Gatt client's characteristic write request.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface DescriptorWriteRequest {
    /**
     * Indicates the address of the client that initiates the write request
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The Id of the write request
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    transId: int;
    /**
     * Indicates the byte offset of the start position for writing characteristic value
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * Whether this request should be pending for later operation
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isPrepared: boolean;
    /**
     * Whether the remote client need a response
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    needRsp: boolean;
    /**
     * Indicates the value to be written
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    value: ArrayBuffer;
    /**
     * The UUID of a DescriptorWriteRequest instance
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    descriptorUuid: string;
    /**
     * The UUID of the characteristic to which the descriptor belongs
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The UUID of the service to which the descriptor belongs
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuid: string;
  }

  /**
   * Describes the parameters of a response send by the server to a specified read or write request.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ServerResponse {
    /**
     * Indicates the address of the client to which to send the response
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The Id of the write request
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    transId: int;
    /**
     * Indicates the status of the read or write request, set this parameter to '0' in normal cases
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    status: int;
    /**
     * Indicates the byte offset of the start position for reading or writing operation
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * Indicates the value to be sent
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    value: ArrayBuffer;
  }

  /**
   * Describes the Gatt profile connection state.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface BLEConnectionChangeState {
    /**
     * Indicates the peer device address
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * Connection state of the Gatt profile
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    state: ProfileConnectionState;
    /**
     * Reason of the disconnection of the gatt connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    reason?: GattDisconnectReason;
    /**
     * Reason message of the disconnection of the gatt connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    reasonMessage?: string;
  }

  /**
   * Describes the contents of the scan results.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ScanResult {
    /**
     * Address of the scanned device
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The address object of a BLE peripheral device, including the address type.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    address?: BluetoothAddress;
    /**
     * RSSI of the remote device
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    rssi: int;
    /**
     * The raw data of broadcast packet
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    data: ArrayBuffer;
    /**
     * The local name of the BLE device
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceName: string;
    /**
     * Connectable of the remote device
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    connectable: boolean;

    /**
     * This field is used to identify the discovery mode and supported capabilities of the peer device.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    advertiseFlags?: int;

    /**
     * Map of manufacturer data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    manufacturerDataMap?: Map<int, Uint8Array>;

    /**
     * Map of service data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    serviceDataMap?: Map<string, Uint8Array>;

    /**
     * The list of service uuid.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    serviceUuids?: string[];

    /**
     * The tx power level of the packet in dBm.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    txPowerLevel?: int;

    /**
     * Map of advertising data fields.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    advertisingDataMap?: Map<int, Uint8Array>;
  }

  /**
   * Describes the contents of the scan report.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface ScanReport {
    /**
     * The type of scan report
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    reportType: ScanReportType;
    /**
     * Describes the contents of the scan results.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    scanResult: Array<ScanResult>;
  }

  /**
   * Describes the settings for BLE advertising.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AdvertiseSetting {
    /**
     * Minimum slot value for the advertising interval, which is {@code 32} (20 ms)
     * Maximum slot value for the advertising interval, which is {@code 16777215} (10485.759375s)
     * Default slot value for the advertising interval, which is {@code 1600} (1s)
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    interval?: int;
    /**
     * Minimum transmission power level for advertising, which is {@code -127}
     * Maximum transmission power level for advertising, which is {@code 1}
     * Default transmission power level for advertising, which is {@code -7}
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    txPower?: int;
    /**
     * Indicates whether the BLE is connectable, default is {@code true}
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    connectable?: boolean;
    /**
     * Indicates whether the advertisement is extended, default is {@code false}
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isExtended?: boolean;
  }

  /**
   * Describes the advertising data.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AdvertiseData {
    /**
     * The specified service UUID list to this advertisement
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuids: Array<string>;
    /**
     * The specified manufacturer data list to this advertisement
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    manufactureData: Array<ManufactureData>;
    /**
     * The specified service data list to this advertisement
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceData: Array<ServiceData>;
    /**
     * Indicates whether the device name will be included in the advertisement packet.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    includeDeviceName?: boolean;
    /**
     * Indicates whether the tx power will be included in the advertisement packet.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    includeTxPower?: boolean;
    /**
     * Indicates the local name data type in the advertisement packet. If both the property and
     * {@link AdvertiseData#includeDeviceName} property are used together,
     * the {@link AdvertiseData#advertiseName} property will ultimately take effect.
     *
     * @permission ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    advertiseName?: string;
  }

  /**
   * Describes the advertising parameters.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AdvertisingParams {
    /**
     * Indicates the advertising settings.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingSettings: AdvertiseSetting;
    /**
     * Indicates the advertising data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingData: AdvertiseData;
    /**
     * Indicates the advertising response.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingResponse?: AdvertiseData;
    /**
     * Indicates the duration for advertising continuously.
     * The duration, in 10ms unit. Valid range is from 1 (10ms) to 65535 (655,350 ms).
     * If this parameter is not specified or is set to 0, advertisement is continuously sent.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    duration?: int;
  }

  /**
   * Parameter for dynamically enable advertising.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface AdvertisingEnableParams {
    /**
     * Indicates the ID of current advertising.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingId: int;
    /**
     * Indicates the duration for advertising continuously.
     * The duration, in 10ms unit. Valid range is from 1 (10ms) to 65535 (655,350 ms).
     * If this parameter is not specified or is set to 0, advertise is continuously sent.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    duration?: int;
  }

  /**
   * Parameter for dynamically disable advertising.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface AdvertisingDisableParams {
    /**
     * Indicates the ID of current advertising.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingId: int;
  }

  /**
   * Advertising state change information.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AdvertisingStateChangeInfo {
    /**
     * Indicates the ID of current advertising.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingId: int;
    /**
     * Indicates the advertising state.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    state: AdvertisingState;
  }

  /**
   * Describes the manufacturer data.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ManufactureData {
    /**
     * Indicates the manufacturer ID assigned by Bluetooth SIG
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    manufactureId: int;
    /**
     * Indicates the manufacturer data to add
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    manufactureValue: ArrayBuffer;
  }

  /**
   * Describes the service data.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ServiceData {
    /**
     * Indicates the UUID of the service data to add
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuid: string;
    /**
     * Indicates the service data to add
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceValue: ArrayBuffer;
  }

  /**
   * Describes the criteria for filtering scanning results can be set.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ScanFilter {
    /**
     * The address of a BLE peripheral device
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId?: string;
    /**
     * The address object of a BLE peripheral device, including the address type.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    address?: BluetoothAddress;
    /**
     * Identity Resolving Key of BLE peripheral device.
     * {@link ScanFilter#irk} needs to be used with {@link ScanFilter#address}.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    irk?: Uint8Array;

    /**
     * The name of a BLE peripheral device
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    name?: string;

    /**
     * The service UUID of a BLE peripheral device
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuid?: string;

    /**
     * Service UUID mask.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceUuidMask?: string;

    /**
     * Service solicitation UUID.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceSolicitationUuid?: string;

    /**
     * Service solicitation UUID mask.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceSolicitationUuidMask?: string;

    /**
     * Service data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceData?: ArrayBuffer;

    /**
     * Service data mask.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    serviceDataMask?: ArrayBuffer;

    /**
     * Manufacture id.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    manufactureId?: int;

    /**
     * Manufacture data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    manufactureData?: ArrayBuffer;

    /**
     * Manufacture data mask.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    manufactureDataMask?: ArrayBuffer;

    /**
     * RSSI threshold for filtering advertising that pass through.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    rssiThreshold?: int;
  }

  /**
   * Describes the parameters for scan.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ScanOptions {
    /**
     * Time of delay for reporting the scan result
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    interval?: int;
    /**
     * Bluetooth LE scan mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    dutyMode?: ScanDuty;
    /**
     * Match mode for Bluetooth LE scan filters hardware match
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    matchMode?: MatchMode;
    /**
     * Physical Layer used during scan.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    phyType?: PhyType;
    /**
     * Report mode used during scan.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    reportMode?: ScanReportMode;
    /**
     * Indicates whether the scan is extended, default is {@code false}
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isExtended?: boolean;
    /**
     * Configuration of scan enhance mode.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    scanEnhanceMode?: ScanEnhanceMode;
  }

  /**
   * Describes the properties of a gatt characteristic.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface GattProperties {
    /**
     * Support write property of the characteristic.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    write?: boolean;
    /**
     * Support write no response property of the characteristic.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    writeNoResponse?: boolean;
    /**
     * Support read property of the characteristic.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    read?: boolean;
    /**
     * Support notify property of the characteristic.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    notify?: boolean;
    /**
     * Support indicate property of the characteristic.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    indicate?: boolean;

    /**
     * Support broadcast property of the characteristic.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    broadcast?: boolean;

    /**
     * Support authenticated signed write property of the characteristic.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    authenticatedSignedWrite?: boolean;

    /**
     * Support extended properties property of the characteristic.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    extendedProperties?: boolean;
  }

  /**
   * Describes the setting for Gatt Connection.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface GattSetting {
    /**
     * Indicates whether to automatically connect to the remote device, default is {@code false}
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    autoConnect?: boolean;
    /**
     * Transport of the connection, default is {@code TRANSPORT_LE}
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    transport?: BluetoothTransport;
  }

  /**
   * Describes the configuration of scan enhance mode.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ScanEnhanceMode {
    /**
     * The mode of scan enhance.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enhanceMode: EnhanceMode;
    /**
     * The duration of scan enhance.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    timeout: int;
  }

  /**
   * The enum of gatt characteristic write type
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum GattWriteType {
    /**
     * Write characteristic with response.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    WRITE = 1,
    /**
     * Write characteristic without response.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    WRITE_NO_RESPONSE = 2
  }

  /**
   * The enum of scan duty.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ScanDuty {
    /**
     * low power mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    SCAN_MODE_LOW_POWER = 0,
    /**
     * balanced power mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    SCAN_MODE_BALANCED = 1,
    /**
     * Scan using highest duty cycle
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    SCAN_MODE_LOW_LATENCY = 2
  }

  /**
   * The enum of BLE match mode.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum MatchMode {
    /**
     * aggressive mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    MATCH_MODE_AGGRESSIVE = 1,
    /**
     * sticky mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    MATCH_MODE_STICKY = 2
  }

  /**
   * The enum of BLE advertising state.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   * @since 23 static
   */
  enum AdvertisingState {
    /**
     * advertising started.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    STARTED = 1,
    /**
     * advertising temporarily enabled.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    ENABLED = 2,
    /**
     * advertising temporarily disabled.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    DISABLED = 3,
    /**
     * advertising stopped.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    STOPPED = 4
  }

  /**
   * Phy type used during scan.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum PhyType {
    /**
     * Use 1M phy for scanning.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PHY_LE_1M = 1,
    /**
     * Use all supported Phys for scanning.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PHY_LE_ALL_SUPPORTED = 255
  }

  /**
   * Report mode used during scan.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ScanReportMode {
    /**
     * In normal mode, the advertisement packet is reported immediately after being scanned.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    NORMAL = 1,
    /**
     * Enables delayed sending of advertising packets in batch mode by the interval specified by
     * {@link ScanOptions#interval}.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    BATCH = 2,
    /**
     * In low sensitivity fence mode, the advertisement packets are reported only when they are received for
     * the first time and lost for the last time. The reception sensitivity is low.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    FENCE_SENSITIVITY_LOW = 10,
    /**
     * In high sensitivity fence mode, the advertisement packets are reported only when they are received for
     * the first time and lost for the last time. The reception sensitivity is high.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    FENCE_SENSITIVITY_HIGH = 11
  }

  /**
   * Scan report type used during scan.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ScanReportType {
    /**
     * The found of advertisement packet.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    ON_FOUND = 1,
    /**
     * The lost of advertisement packet.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    ON_LOST = 2,
    /**
     * The type of advertisement packet reported in batch mode.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    ON_BATCH = 3
  }

  /**
   * The Profile of the BLE protocol.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 21 dynamic
   * @since 26.0.0 static
   */
  enum BleProfile {
    /**
     * Indicates the profile type of the gatt, including gatt client and gatt server.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    GATT = 1,
    /**
     * Indicates the profile type of the gatt client.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    GATT_CLIENT = 2,
    /**
     * Indicates the profile type of the gatt server.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    GATT_SERVER = 3
  }

  /**
   * GATT connection parameters.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  enum ConnectionParam {
    /**
     * low power mode.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    LOW_POWER = 1,
    /**
     * balanced power mode.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    BALANCED = 2,
    /**
     * Use the highest connection parameters.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HIGH = 3
  }

  /**
   * The enum of gatt disconnection reasons.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  enum GattDisconnectReason {
    /**
     * Disconnection due to timeout.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    CONN_TIMEOUT = 1,
    /**
     * The connection is disconnected due to the peer.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    CONN_TERMINATE_PEER_USER = 2,
    /**
     * The connection is disconnected due to the local host.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    CONN_TERMINATE_LOCAL_HOST = 3,
    /**
     * Disconnection due to unknown reason.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    CONN_UNKNOWN = 4
  }

  /**
   * Phy type for advertising or connection.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  enum BlePhy {
    /**
     * Use 1M phy for advertising or connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    BLE_PHY_1M = 1,
    /**
     * Use 2M phy for advertising or connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    BLE_PHY_2M = 2,
    /**
     * Use coded phy for advertising or connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    BLE_PHY_CODED = 3,
  }
  /**
   * Coded phy mode for advertising or connection.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  enum CodedPhyMode {
    /**
     * Use coded S2 phy for advertising or connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    BLE_PHY_CODED_S2 = 1,
    /**
     * Use coded S8 phy for advertising or connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    BLE_PHY_CODED_S8 = 2
  }

  /**
   * Describes the permission of a att attribute item.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface GattPermissions {
    /**
     * The attribute field has the read permission.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    read?: boolean;

    /**
     * The attribute field has the encrypted read permission.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readEncrypted?: boolean;

    /**
     * The attribute field has the read permission for encryption authentication.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readEncryptedMitm?: boolean;

    /**
     * The attribute field has the write permission.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    write?: boolean;

    /**
     * The attribute field has the encrypted write permission.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    writeEncrypted?: boolean;

    /**
     * The attribute field has the write permission for encryption authentication.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    writeEncryptedMitm?: boolean;

    /**
     * The attribute field has the signed write permission.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    writeSigned?: boolean;

    /**
     * The attribute field has the write permission for signature authentication.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    writeSignedMitm?: boolean;
  }

  /**
   * Describe the context of GATT responses.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  interface GattRspContext {
    /**
     * Timestamp of when Bluetooth received the response command.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    timestamp: long;
  }

  /**
   * Describes the parameters of the Ble phy.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  interface PhyValue {
    /**
     * Transmitter phy.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    txPhy: BlePhy;
    /**
     * Receiver phy.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    rxPhy: BlePhy;
    /**
     * Preferred coded phy mode.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    phyMode?: CodedPhyMode;
  }

  /**
   * Scan enhance mode.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum EnhanceMode {
    /**
     * Balanced scan performance and other bluetooth service performance.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BLE_SCAN_ENHANCE_MODE_BALANCED = 0,
    /**
     * The scan performance is improved, and the performance of other bluetooth services is mildly affected.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BLE_SCAN_ENHANCE_MODE_MEDIUM = 1,
    /**
     * The scan performance is ensured as much as possible, and the performance of other bluetooth services is affected.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BLE_SCAN_ENHANCE_MODE_FAST = 2,
    /**
     * The scan performance is fully ensured, and the performance of other bluetooth services is aggressively affected.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BLE_SCAN_ENHANCE_MODE_ULTRA_FAST = 3
  }
}

export default ble;