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
 * @file 蓝牙ble模块
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type constant from './@ohos.bluetooth.constant';
import type common from './@ohos.bluetooth.common';
import type connection from './@ohos.bluetooth.connection';

/**
 * 本模块提供了基于低功耗蓝牙（Bluetooth Low Energy，BLE）技术的蓝牙能力，支持发起BLE扫描、发送BLE
 * 广播报文、以及基于通用属性协议（Generic Attribute Profile，GATT）的连接和传输数据。适用于智能
 * 穿戴设备、健康监测、物联网设备互联等低功耗短距离无线通信场景，有助于降低设备功耗、延长续航时间。
 * 
 * 接口中涉及的UUID服务，可以通过工具函数
 * [util.generateRandomUUID]{@link @ohos.util:util.generateRandomUUID}生成。
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
   * 蓝牙设备的Profile协议连接状态。
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
   * 描述蓝牙设备地址信息的参数结构，包括地址与地址类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  type BluetoothAddress = common.BluetoothAddress;

  /**
   * 表示远端设备的传输类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  type BluetoothTransport = connection.BluetoothTransport;

  /**
   * 创建[GattServer]{@link ble.GattServer}实例，表示GATT连接中的server端。
   * 
   * 通过该实例可以操作server端的行为，如添加服务[addService]{@link ble.GattServer.addService}、通知特征值变化
   * [notifyCharacteristicChanged]{@link ble.GattServer.notifyCharacteristicChanged
   * ( deviceId: string, notifyCharacteristic: NotifyCharacteristic, callback: AsyncCallback<void> )}
   * 等。
   *
   * @returns { GattServer } 返回一个Gatt服务的实例。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createGattServer(): GattServer;

  /**
   * 创建[GattClientDevice]{@link ble.GattClientDevice}实例，表示GATT连接中的client端。
   * 
   * 该接口仅支持BLE传输类型，若需自定义传输类型[BluetoothTransport]{@link @ohos.bluetooth.connection:connection.BluetoothTransport}，可使用
   * [createGattClientDevice]{@link ble.createGattClientDevice}。
   * 通过该实例可以操作client端行为，如调用[connect]{@link ble.GattServer.connect}向对端设备发起连接，调用
   * [getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}获取对端设备支持的所有服务能力。
   * 创建该实例所需要的设备地址表示server端设备。可以通过[ble.startBLEScan]{@link ble.startBLEScan}或[BleScanner]{@link ble.BleScanner}的
   * [startScan]{@link ble.BleScanner.startScan(filters: Array<ScanFilter>, options?: ScanOptions)}接口获取server端设备地址，且需保证
   * server端设备的BLE广播是可连接的。
   *
   * @param { string } deviceId - 对端设备地址， 例如："XX:XX:XX:XX:XX:XX"。
   * @returns { GattClientDevice } client端类，使用client端方法之前需要创建该类的实例进行操作。
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
   * 创建[GattClientDevice]{@link ble.GattClientDevice}实例，表示GATT连接中的client端，可通过[GattSetting]{@link ble.GattSetting}设置GATT连
   * 接参数。
   * 
   * 通过该实例可以操作client端行为，如调用[connect]{@link ble.GattServer.connect}向对端设备发起连接，调用
   * [getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}获取对端设备支持的所有服务能力。
   * 创建该实例所需要的设备地址表示server端设备。可以通过[ble.startBLEScan]{@link ble.startBLEScan}或[BleScanner]{@link ble.BleScanner}的
   * [startScan]{@link ble.BleScanner.startScan(filters: Array<ScanFilter>, options?: ScanOptions)}接口获取server端设备地址，且需保证
   * server端设备的BLE广播是可连接的。
   * 通过[GattSetting]{@link ble.GattSetting}设置连接的传输类型transport时，若不清楚设备的传输类型
   * [BluetoothTransport]{@link @ohos.bluetooth.connection:connection.BluetoothTransport}，默认为
   * [TRANSPORT_LE]{@link @ohos.bluetooth.connection:connection.BluetoothTransport}，但不能设置为
   * [TRANSPORT_UNKNOWN]{@link @ohos.bluetooth.connection:connection.BluetoothTransport}（未知的设备传输方式），否则无法成功创建
   * [GattClientDevice]{@link ble.GattClientDevice}实例。
   *
   * @param { string } deviceId - 对端设备的MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { GattSetting } setting - GATT连接设置。
   * @returns { GattClientDevice } client端类，使用client端方法之前需要创建该类的实例进行操作。
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API because the short-range chip is not inserted on the 2in1 device.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function createGattClientDevice(deviceId: string, setting: GattSetting): GattClientDevice;

  /**
   * 创建一个[BleScanner]{@link ble.BleScanner}实例对象，可用于发起或停止BLE扫描等流程。
   *
   * @returns { BleScanner } 返回一个BleScanner的实例。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function createBleScanner(): BleScanner;

  /**
   * 获取和本机设备已连接GATT的BLE设备集合。
   * 
   * 建议给server端使用，client端使用返回的设备地址集合为空。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @returns { Array<string> } 返回和本机设备已建立GATT连接的BLE设备地址集合。
   *     基于信息安全考虑，此处获取的设备地址为虚拟MAC地址。
   *     若和该设备地址配对成功后，该地址不会变更。
   *     若该设备重启蓝牙开关，重新获取到的虚拟地址会立即变更。
   *     若取消配对，蓝牙子系统会根据该地址的实际使用情况，决策后续变更时机；若其他应用正在使用该地址，则不会立刻变更。
   *     若要持久化保存该地址，可使用[access.addPersistentDeviceId]{@link @ohos.bluetooth.access:access.addPersistentDeviceId}方
   *     法。
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
   * 根据指定的本机设备Profile协议类型，获取和本机设备已连接GATT的BLE设备集合。
   * 
   * 若指定本机设备作为client端，则返回与本机设备连接的所有server端设备地址集合。
   * 若指定本机设备作为server端，则返回与本机设备连接的所有client端设备地址集合。
   * 若指定本机设备同时作为client端和server端，则返回与本机设备连接的所有client端和server端设备地址集合。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 21 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { BleProfile } profile - 当前设备的Profile协议类型，表明该设备在GATT链路中的通信角色。
   *     GATT_CLIENT表示指定本机设备为client端角色，与其建立GATT连接的所有对端设备为server端角色。
   * @returns { Array<string> } 返回和本机设备已建立GATT连接的BLE设备地址集合。
   *     基于信息安全考虑，此处获取的设备地址为虚拟MAC地址。
   *     若和该设备地址配对成功后，该地址不会变更。
   *     取消配对该设备或蓝牙关闭后，若重新获取，该虚拟地址会变更。蓝牙子系统会根据该地址的实际使用情况决策后续变更时机；若其他应用正在使用该地址，则不会立刻变更。
   *     若要持久化保存该地址，可使用[access.addPersistentDeviceId]{@link @ohos.bluetooth.access:access.addPersistentDeviceId}方法
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 21 dynamic
   * @since 26.1.0 static
   */
  function getConnectedBLEDevices(profile: BleProfile): Array<string>;

  /**
   * 发起BLE扫描流程。
   * 
   * 扫描结果会通过[ble.on('BLEDeviceFind')]{@link ble.on(type: 'BLEDeviceFind', callback: Callback<Array<ScanResult>>)}的回调函数
   * 获取到。只能扫描BLE设备，调用[ble.stopBLEScan]{@link ble.stopBLEScan}可以停止该方法开启的扫描流程。
   * 该接口只支持单路扫描，即应用同时只能调用一次，下一次调用前，需要先调用[ble.stopBLEScan]{@link ble.stopBLEScan}停止上一次的扫描流程。
   * 若需要使用多路扫描，可使用[BleScanner]{@link ble.BleScanner}。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Array<ScanFilter> } filters - 表示扫描结果过滤策略集合，符合过滤条件的设备会被保留。
   *     若该参数设置为null，将扫描所有可发现的周边BLE设备，但是不建议使用此方式，可能扫描到非预期设备，并增加功耗。
   * @param { ScanOptions } options - 表示扫描的参数配置。不填写时使用默认配置。
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
   * 发起BLE扫描流程。
   * 
   * 扫描结果会通过[ble.on('BLEDeviceFind')]{@link ble.on(type: 'BLEDeviceFind', callback: Callback<Array<ScanResult>>)}的回调函数
   * 获取到。只能扫描BLE设备，调用[ble.stopBLEScan]{@link ble.stopBLEScan}可以停止该方法开启的扫描流程。
   * 该接口只支持单路扫描，即应用同时只能调用一次，下一次调用前，需要先调用[ble.stopBLEScan]{@link ble.stopBLEScan}停止上一次的扫描流程。
   * 若需要使用多路扫描，可使用[BleScanner]{@link ble.BleScanner}。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Array<ScanFilter> | null } filters - 表示扫描结果过滤策略集合，符合过滤条件的设备会被保留。
   *     若该参数设置为null，将扫描所有可发现的周边BLE设备，但是不建议使用此方式，可能扫描到非预期设备，并增加功耗。
   * @param { ScanOptions } [options] - 表示扫描的参数配置。不填写时使用默认配置。
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
   * 停止BLE扫描流程。
   * 
   * 停止的BLE扫描由[ble.startBLEScan]{@link ble.startBLEScan}触发。
   * 当应用不再需要扫描BLE设备时，需主动调用该方法停止扫描。
   * 调用此接口后将不再收到扫描结果上报，重新开启BLE扫描即可再次扫到BLE设备。
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
   * 开始发送BLE广播报文。
   * 
   * 当应用不再需要发送BLE广播报文时，需主动调用[ble.stopAdvertising]{@link ble.stopAdvertising}停止发送。
   * 同步接口，不要和API version 11的[ble.stopAdvertising]{@link ble.stopAdvertising}搭配使用。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 22]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME) [since 23]
   * @param { AdvertiseSetting } setting - BLE广播的相关参数。
   * @param { AdvertiseData } advData - BLE广播报文内容。
   * @param { AdvertiseData } advResponse - BLE扫描回复广播报文。若不填写，则不携带扫描回复广播报文。
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
   * 停止发送BLE广播报文。
   * 
   * 停止的BLE广播是由[ble.startAdvertising]{@link ble.startAdvertising}触发的。
   * 不可以和API version 11的[ble.startAdvertising]{@link ble.startAdvertising}搭配使用。
   * 当应用不再需要发送BLE广播报文时，需主动调用该方法停止发送。
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
   * 首次启动发送BLE广播报文。使用Callback异步回调。
   * 
   * 启动成功后，蓝牙子系统会分配相关资源，并使用Callback异步返回该广播的标识。
   * 若携带了发送广播持续时间，则达到该持续时间后，广播会停止发送，但分配的广播资源还存在，可以通过[ble.enableAdvertising]{@link ble.enableAdvertising}重新启动发送该广播。
   * 从API version 15开始，应用可多次调用，支持发起多路广播，每一路广播通过不同的ID标识管理。
   * 当应用不再需要该广播时，需调用API version 11开始支持的[ble.stopAdvertising]{@link ble.stopAdvertising}完全停止该广播，不要与API version 10开始支持的
   * [ble.stopAdvertising]{@link ble.stopAdvertising}混用。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 11 - 22]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME) [since 23]
   * @param { AdvertisingParams } advertisingParams - 启动BLE广播的相关参数。
   * @param { AsyncCallback<int> } callback - 回调函数。当广播启动成功，err为undefined，data为分配的广播ID标识；否则为错误对象。
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
   * 首次启动发送BLE广播报文。使用Promise异步回调。
   * 
   * 启动成功后，蓝牙子系统会分配相关资源，并使用Promise异步返回该广播的标识。
   * 若携带了发送广播持续时间，则达到该持续时间后，广播会停止发送，但分配的广播资源还存在，可以通过[ble.enableAdvertising]{@link ble.enableAdvertising}重新启动发送该广播。
   * 从API version 15开始，应用可多次调用，支持发起多路广播，每一路广播通过不同的ID标识管理。
   * 当应用不再需要该广播时，需调用API version 11开始支持的[ble.stopAdvertising]{@link ble.stopAdvertising}完全停止该广播，不要与API version 10开始支持的
   * [ble.stopAdvertising]{@link ble.stopAdvertising}混用。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 11 - 22]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME) [since 23]
   * @param { AdvertisingParams } advertisingParams - 启动BLE广播的相关参数。
   * @returns { Promise<int> } 广播ID标识，通过promise形式获取。
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
   * 重新启动指定标识的BLE广播。使用Callback异步回调。
   * 
   * [AdvertisingEnableParams]{@link ble.AdvertisingEnableParams}中advertisingId对应的广播资源已在
   * [ble.startAdvertising]{@link ble.startAdvertising}首次启动广播时分配。
   * 若[ble.startAdvertising]{@link ble.startAdvertising}首次启动广播时指定了广播持续时间，超时后广播自动停止，调用此接口可重新启动同一路BLE广播。
   * 通过[ble.disableAdvertising]{@link ble.disableAdvertising}停止的广播，调用此接口可重新启动同一路BLE广播。
   * 通过
   * [ble.on('advertisingStateChange')]{@link ble.on(type: 'advertisingStateChange', callback: Callback<AdvertisingStateChangeInfo>)}
   * 回调获取重新启动广播结果。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingEnableParams } advertisingEnableParams - 临时启动BLE广播的相关参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当重新启动广播成功，err为undefined，否则为错误对象。
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
   * 重新启动指定标识的BLE广播。使用Promise异步回调。
   * 
   * [AdvertisingEnableParams]{@link ble.AdvertisingEnableParams}中advertisingId对应的广播资源已在
   * [ble.startAdvertising]{@link ble.startAdvertising}首次启动广播时分配。
   * 若[ble.startAdvertising]{@link ble.startAdvertising}首次启动广播时指定了广播持续时间，超时后广播自动停止，调用此接口可重新启动同一路BLE广播。
   * 通过[ble.disableAdvertising]{@link ble.disableAdvertising}停止的广播，调用此接口可重新启动同一路BLE广播。
   * 通过
   * [ble.on('advertisingStateChange')]{@link ble.on(type: 'advertisingStateChange', callback: Callback<AdvertisingStateChangeInfo>)}
   * 回调获取启动广播结果。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingEnableParams } advertisingEnableParams - 临时启动BLE广播的相关参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 停止指定标识的BLE广播。使用Callback异步回调。
   * 
   * 停止BLE广播，但不释放已申请的广播资源，调用[ble.enableAdvertising]{@link ble.enableAdvertising}可重新启动此方法停止的广播。
   * [AdvertisingDisableParams]{@link ble.AdvertisingDisableParams}中advertisingId对应的广播资源已在
   * [ble.startAdvertising]{@link ble.startAdvertising}首次启动广播时分配。
   * 通过
   * [ble.on('advertisingStateChange')]{@link ble.on(type: 'advertisingStateChange', callback: Callback<AdvertisingStateChangeInfo>)}
   * 回调获取停止广播结果。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingDisableParams } advertisingDisableParams - 临时关闭BLE广播的相关参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当停止广播成功，err为undefined，否则为错误对象。
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
   * 停止指定标识的BLE广播。使用Promise异步回调。
   * 
   * 停止BLE广播，但不释放已申请的广播资源，调用[ble.enableAdvertising]{@link ble.enableAdvertising}可重新启动此方法停止的广播。
   * [AdvertisingDisableParams]{@link ble.AdvertisingDisableParams}中advertisingId对应的广播资源已在
   * [ble.startAdvertising]{@link ble.startAdvertising}首次启动广播时分配。
   * 通过
   * [ble.on('advertisingStateChange')]{@link ble.on(type: 'advertisingStateChange', callback: Callback<AdvertisingStateChangeInfo>)}
   * 回调获取停止广播结果。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingDisableParams } advertisingDisableParams - 临时关闭BLE广播的相关参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 完全停止发送BLE广播。使用Callback异步回调。
   * 
   * 与API version 11开始支持的[ble.startAdvertising]{@link ble.startAdvertising}搭配使用，会释放已经申请的广播资源。
   * [ble.startAdvertising]{@link ble.startAdvertising}首次启动广播时分配的广播标识也将失效。
   * 不可以和API version 10开始支持的[ble.startAdvertising]{@link ble.startAdvertising}接口搭配使用。
   * 通过
   * [ble.on('advertisingStateChange')]{@link ble.on(type: 'advertisingStateChange', callback: Callback<AdvertisingStateChangeInfo>)}
   * 回调获取完全停止广播结果。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } advertisingId - 需要停止的广播ID标识。
   * @param { AsyncCallback<void> } callback - 回调函数。当完全停止广播成功，err为undefined，否则为错误对象。
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
   * @since 26.1.0 static
   */
  function stopAdvertising(advertisingId: int, callback: AsyncCallback<void>): void;

  /**
   * 完全停止发送BLE广播。使用Promise异步回调。
   * 
   * 与API version 11开始支持的[ble.startAdvertising]{@link ble.startAdvertising}搭配使用，会释放已经申请的广播资源。
   * [ble.startAdvertising]{@link ble.startAdvertising}首次启动广播时分配的广播标识也将失效。
   * 不可以和API version 10开始支持的[ble.startAdvertising]{@link ble.startAdvertising}接口搭配使用。
   * 通过
   * [ble.on('advertisingStateChange')]{@link ble.on(type: 'advertisingStateChange', callback: Callback<AdvertisingStateChangeInfo>)}
   * 回调获取完全停止广播结果。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } advertisingId - 需要停止的广播ID标识。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * @since 26.1.0 static
   */
  function stopAdvertising(advertisingId: int): Promise<void>;

  /**
   * 订阅BLE广播状态。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'advertisingStateChange' } type - 事件回调类型，支持的事件为'advertisingStateChange'，表示广播状态事件。
   *     当调用[ble.startAdvertising]{@link ble.startAdvertising}、[ble.stopAdvertising]{@link ble.stopAdvertising}、
   *     [ble.enableAdvertising]{@link ble.enableAdvertising}、[ble.disableAdvertising]{@link ble.disableAdvertising}，广播状
   *     态改变时，均会触发该事件。
   * @param { Callback<AdvertisingStateChangeInfo> } callback - 指定订阅的回调函数，会携带广播状态信息。
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
   * 订阅BLE广播状态。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<AdvertisingStateChangeInfo> } callback - 指定订阅的回调函数，会携带广播状态信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 static
   */
  function onAdvertisingStateChange(callback: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * 取消订阅BLE广播状态。广播停止或启动将不再收到通知。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'advertisingStateChange' } type - 事件回调类型，支持的事件为'advertisingStateChange'，表示广播状态事件。
   * @param { Callback<AdvertisingStateChangeInfo> } callback - 指定取消订阅的回调函数通知。
   *     若传参，则需与
   *     [ble.on('advertisingStateChange')]{@link ble.on(type: 'advertisingStateChange', callback: Callback<AdvertisingStateChangeInfo>)}
   *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
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
   * 取消订阅BLE广播状态。广播停止或启动将不再收到通知。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<AdvertisingStateChangeInfo> } [callback] - 指定取消订阅的回调函数通知。
   *     若传参，则需与
   *     [ble.onAdvertisingStateChange]{@link ble.onAdvertisingStateChange(callback: Callback<AdvertisingStateChangeInfo>)}
   *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 static
   */
  function offAdvertisingStateChange(callback?: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * 订阅BLE设备扫描结果上报事件。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { 'BLEDeviceFind' } type - 事件回调类型，支持的事件为'BLEDeviceFind'，表示BLE设备扫描结果上报事件。
   *     当调用[ble.startBLEScan]{@link ble.startBLEScan} 后，开始BLE扫描，若扫描到BLE设备，触发该事件。
   * @param { Callback<Array<ScanResult>> } callback - 指定订阅的回调函数，会携带扫描结果的集合。
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
   * 订阅BLE设备扫描结果上报事件。使用Callback异步回调。
   * 如果应用使用 ohos.permission.GET_BLUETOOTH_PEERS_MAC 权限，则对端设备地址的类型为真实类型。
   * 否则，对端设备地址的类型为虚拟类型。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
   * @param { Callback<Array<ScanResult>> } callback - 指定订阅的回调函数，会携带扫描结果的集合。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 static
   */
  function onBLEDeviceFind(callback: Callback<Array<ScanResult>>): void;

  /**
   * 取消订阅BLE设备扫描结果上报事件。
   * 
   *  若不再需要扫描BLE设备，调用[ble.stopBLEScan]{@link ble.stopBLEScan}方法后，需要调用此方法取消订阅。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'BLEDeviceFind' } type - 事件回调类型，支持的事件为'BLEDeviceFind'，表示BLE设备扫描结果上报事件。
   * @param { Callback<Array<ScanResult>> } callback - 指定取消订阅的回调函数通知。
   *     若传参，则需与
   *     [ble.on('BLEDeviceFind')]{@link ble.on(type: 'BLEDeviceFind', callback: Callback<Array<ScanResult>>)}中的回调函数一致；若
   *     无传参，则取消订阅该type对应的所有回调函数通知。
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
   * 取消订阅BLE设备扫描结果上报事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<Array<ScanResult>> } [callback] - 指定取消订阅的回调函数通知。
   *     若传参，则需与
   *     [ble.onBLEDeviceFind]{@link ble.onBLEDeviceFind(callback: Callback<Array<ScanResult>>)}中的回调函数一致；若
   *     无传参，则取消订阅该type对应的所有回调函数通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 static
   */
  function offBLEDeviceFind(callback?: Callback<Array<ScanResult>>): void;

  /**
   * GATT通信中的服务端类。
   * 
   * 通过[ble.createGattServer]{@link ble.createGattServer}方法可以构造server实例。
   * 通过该实例可以操作server端的行为，如添加服务[addService]{@link ble.GattServer.addService}、通知特征值变化
   * [notifyCharacteristicChanged]{@link ble.GattServer.notifyCharacteristicChanged
   * ( deviceId: string, notifyCharacteristic: NotifyCharacteristic, callback: AsyncCallback<void> )}
   * 等。
   * 可通过订阅
   * [on('connectionStateChange')]{@link ble.GattServer.on(type: 'connectionStateChange', callback: Callback<BLEConnectionChangeState>)}
   * 事件来感知连接状态，以及发起连接的client端设备地址。
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
     * server端添加服务。该操作会在蓝牙子系统中注册该服务，表示server端支持的能力。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { GattService } service - server端的service数据。表示支持的特定功能。
     *     例如：00001800-0000-1000-8000-00805f9b34fb表示通用访问服务；00001801-0000-1000-8000-00805f9b34fb表示通用属性服务等。
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
     * 删除server端已添加的服务。
     * 
     * 该服务曾通过[addService]{@link ble.GattServer.addService}添加。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } serviceUuid - 即将删除的服务的UUID。例如：00001810-0000-1000-8000-00805F9B34FB。
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
     * 删除server端所有服务。
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
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    removeAllServices(): void;

    /**
     * 获取指定的server端服务能力。
     * 
     * 该服务已经通过[addService]{@link ble.GattServer.addService}方法添加后才能返回有效值。
     * 一个应用可以通过[ble.createGattServer]{@link ble.createGattServer}方法创建多个[GattServer]{@link ble.GattServer}实例。本方法仅支持获取当前
     * 实例添加过的服务，无法获取当前应用创建的其他实例或由其他应用创建的实例添加过的服务。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } serviceUuid - 需要获取的服务的UUID。例如：00001810-0000-1000-8000-00805F9B34FB。
     * @returns { GattService } 指定的GATT服务。
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
     * @since 26.1.0 static
     */
    getService(serviceUuid: string): GattService;

    /**
     * server端获取本端已添加的服务能力。
     * 
     * 一个应用可以通过[ble.createGattServer]{@link ble.createGattServer}方法创建多个[GattServer]{@link ble.GattServer}实例。本方法仅支持获取当前
     * 实例添加过的服务，无法获取当前应用创建的其他实例或由其他应用创建的实例添加过的服务。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { GattService[] } server端已添加的服务能力。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    getServices(): GattService[];

    /**
     * 销毁server端实例。销毁后，通过[ble.createGattServer]{@link ble.createGattServer}创建的实例将不可用。
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
     * 调用方充当GATT客户端，发起和远端BLE设备连接，通过参数autoConnect设置是否直接连接到远端设备或者在远端设备可用时自动重连。
     * 
     * 若要实现在远端设备可用时自动重连（即[autoConnect]{@link ble.GattSetting}为true），需保证client端
     * [createGattClientDevice]{@link ble.createGattClientDevice}发起连接，并设置[autoConnect]{@link ble.GattSetting}为true。
     * server端可通过订阅
     * [on('BLEConnectionStateChange')]{@link ble.GattClientDevice.on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectionChangeState>)}
     * 事件感知连接状态。
     * 当server端想要断开连接时，可主动调用[disconnect]{@link ble.GattServer.disconnect}。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 对端设备的MAC地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { boolean } [autoConnect] - 是否直接连接到远端设备或者在远端设备可用时自动连接。true表示在远端设备可用时自动连接，false表示直接连接到远端设备。默认值为false。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API because the short-range chip is not inserted on the 2in1 device.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    connect(deviceId: string, autoConnect?: boolean): void;

    /**
     * 调用方充当GATT客户端，主动发起与远端设备断连，或停止正在进行的连接。
     * 
     * 可通过订阅
     * [on('BLEConnectionStateChange')]{@link ble.GattClientDevice.on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectionChangeState>)}
     * 事件来感知连接状态。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 对端设备的MAC地址，例如："XX:XX:XX:XX:XX:XX"。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API because the short-range chip is not inserted on the 2in1 device.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    disconnect(deviceId: string): void;

    /**
     * server端发送特征值变化通知或者指示给client端。使用Callback异步回调。
     * 
     * 建议该特征值的Client Characteristic Configuration描述符（UUID：00002902-0000-1000-8000-00805f9b34fb）notification（通知）或
     * indication（指示）能力已被使能。
     * 蓝牙标准协议规定Client Characteristic Configuration描述符的数据内容长度为2字节，bit0和bit1分别表示notification（通知）和indication（指示）能力是否使能，例如
     * bit0 = 1表示notification enabled。
     * 该特征值数据内容变化时调用。
     * [notifyCharacteristic]{@link ble.NotifyCharacteristic}入参的characteristicValue数据长度默认限制为（MTU-3）字节，MTU大小可从订阅的回调
     * [on('BLEMtuChange')]{@link ble.GattServer.on(type: 'BLEMtuChange', callback: Callback<int>)}获取。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 接收通知的client设备地址。例如：“XX:XX:XX:XX:XX:XX”。
     * @param { NotifyCharacteristic } notifyCharacteristic - 通知给client的特征值数据对象。
     * @param { AsyncCallback<void> } callback - 回调函数。当通知成功，err为undefined，否则为错误对象。
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
     * server端发送特征值变化通知或者指示给client端。使用Promise异步回调。
     * 
     * 建议该特征值的Client Characteristic Configuration描述符notification（通知）或indication（指示）能力已被使能。
     * 蓝牙标准协议规定Client Characteristic Configuration描述符的数据内容长度为2字节，bit0和bit1分别表示notification（通知）和indication（指示）能力是否使能，例如
     * bit0 = 1表示notification enabled。
     * 该特征值数据内容变化时调用。
     * [notifyCharacteristic]{@link ble.NotifyCharacteristic}入参的characteristicValue数据长度默认限制为（MTU-3）字节，MTU大小可从订阅的回调
     * [on('BLEMtuChange')]{@link ble.GattServer.on(type: 'BLEMtuChange', callback: Callback<int>)}获取。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 接收通知的client设备地址。例如：“XX:XX:XX:XX:XX:XX”。
     * @param { NotifyCharacteristic } notifyCharacteristic - 通知给client的特征值数据对象。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * server端收到client的请求操作后，需要调用此接口回复client，否则可能导致链路异常，超时后断连。
     * 
     * client请求是指通过下述接口订阅回调收到的请求消息：
     *  
     * [on('characteristicRead')]{@link ble.GattServer.on(type: 'characteristicRead', callback: Callback<CharacteristicReadRequest>)}
     * 
     * [on('characteristicWrite')]{@link ble.GattServer.on(type: 'characteristicWrite', callback: Callback<CharacteristicWriteRequest>)}
     * ，需根据[CharacteristicWriteRequest]{@link ble.CharacteristicWriteRequest}中的needRsp决定是否需要回复。
     * 
     * [on('descriptorRead')]{@link ble.GattServer.on(type: 'descriptorRead', callback: Callback<DescriptorReadRequest>)}
     * 
     * [on('descriptorWrite')]{@link ble.GattServer.on(type: 'descriptorWrite', callback: Callback<DescriptorWriteRequest>)}
     * ，需根据[DescriptorWriteRequest]{@link ble.DescriptorWriteRequest}中的needRsp决定是否需要回复。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ServerResponse } serverResponse - server端回复client的响应数据。
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
     * 获取当前与client端设备的连接状态。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 要查询连接状态的对端蓝牙设备地址。例如："XX:XX:XX:XX:XX:XX"。
     * @returns { ProfileConnectionState } 蓝牙设备的profile连接状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    getConnectedState(deviceId: string): ProfileConnectionState;

    /**
     * 获取server端和指定设备连接链路的物理通道类型。使用Promise异步回调。
     * 
     * 需先由client端发起连接，并等待连接成功后，再调用该方法。
     * deviceId为对端client的蓝牙设备地址，可从server端订阅的
     * [on('connectionStateChange')]{@link ble.GattServer.on(type: 'connectionStateChange', callback: Callback<BLEConnectionChangeState>)}
     * 回调中获取。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 需要读取物理通道类型的client端蓝牙设备地址。例如："XX:XX:XX:XX:XX:XX"。
     * @returns { Promise<PhyValue> } Promise对象，返回server端和指定设备连接链路的物理通道类型。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    readPhy(deviceId: string): Promise<PhyValue>;

    /**
     * server端设置和指定设备连接链路的物理通道类型。使用Promise异步回调。
     * 
     * 需先由client端发起连接，并等待连接成功后，再调用该方法。
     * 本端server调用setPhy设置和指定设备连接链路的物理通道类型后，底层会根据对端设备能力，协商出本端和对端设备均支持的物理通道类型作为最终结果。例如本端支持并设置
     * [BLE_PHY_2M]{@link ble.BlePhy}，但对端设备仅支持[BLE_PHY_1M]{@link ble.BlePhy}，则最终设置的结果仍为[BLE_PHY_1M]{@link ble.BlePhy}。
     * 协商后的最终物理通道类型可通过订阅[onBlePhyUpdate]{@link ble.GattServer.onBlePhyUpdate(callback: Callback<PhyValue>)}事件获取。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 需要设置物理通道类型的client端蓝牙设备地址。例如："XX:XX:XX:XX:XX:XX"。
     * @param { PhyValue } phyValue - 连接链路的物理通道类型配置参数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    setPhy(deviceId: string, phyValue: PhyValue): Promise<void>;

    /**
     * server端订阅client的特征值读请求事件，server端收到该事件后需要调用[sendResponse]{@link ble.GattServer.sendResponse}接口回复client。使用Callback异
     * 步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'characteristicRead' } type - 事件回调类型，支持的事件为'characteristicRead'，表示特征值读请求事件。
     *     当收到client端设备的读取特征值请求时，触发该事件。
     * @param { Callback<CharacteristicReadRequest> } callback - 指定订阅的回调函数，会携带client端发送的读请求数据。
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
     * server端订阅client的特征值读请求事件，server端收到该事件后需要调用[sendResponse]{@link ble.GattServer.sendResponse}接口回复client。使用Callback异
     * 步回调。
     * 如果应用使用 ohos.permission.GET_BLUETOOTH_PEERS_MAC 权限，则对端设备地址的类型为真实类型。
     * 否则，对端设备地址的类型为虚拟类型。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<CharacteristicReadRequest> } callback - 指定订阅的回调函数，会携带client端发送的读请求数据。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.1.0 static
     */
    onCharacteristicRead(callback: Callback<CharacteristicReadRequest>): void;

    /**
     * server端取消订阅client的特征值读请求事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicRead' } type - 事件回调类型，支持的事件为'characteristicRead'，表示特征值读请求事件。
     * @param { Callback<CharacteristicReadRequest> } callback - 指定取消订阅的回调函数通知。
     *     若传参，则需与
     *     [on('characteristicRead')]{@link ble.GattServer.on(type: 'characteristicRead', callback: Callback<CharacteristicReadRequest>)}
     *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
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
     * server端取消订阅client的特征值读请求事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<CharacteristicReadRequest> } [callback] - 指定取消订阅的回调函数通知。
     *     若传参，则需与
     *     [onCharacteristicRead]{@link ble.GattServer.onCharacteristicRead(callback: Callback<CharacteristicReadRequest>)}
     *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.1.0 static
     */
    offCharacteristicRead(callback?: Callback<CharacteristicReadRequest>): void;

    /**
     * server端订阅client的特征值写请求事件，server端收到该事件后需要根据[CharacteristicWriteRequest]{@link ble.CharacteristicWriteRequest}中的
     * needRsp决定是否调用[sendResponse]{@link ble.GattServer.sendResponse}接口回复client。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'characteristicWrite' } type - 事件回调类型，支持的事件为'characteristicWrite'，表示特征值写请求事件。
     *     当收到client端设备的写特征值请求时，触发该事件。
     * @param { Callback<CharacteristicWriteRequest> } callback - 指定订阅的回调函数，会携带client端发送的写请求数据。
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
     * server端订阅client的特征值写请求事件，server端收到该事件后需要根据[CharacteristicWriteRequest]{@link ble.CharacteristicWriteRequest}中的
     * needRsp决定是否调用[sendResponse]{@link ble.GattServer.sendResponse}接口回复client。
     * 
     * 如果应用使用 ohos.permission.GET_BLUETOOTH_PEERS_MAC 权限，则对端设备地址的类型为真实类型。
     * 否则，对端设备地址的类型为虚拟类型。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<CharacteristicWriteRequest> } callback - 指定订阅的回调函数，会携带client端发送的写请求数据。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.1.0 static
     */
    onCharacteristicWrite(callback: Callback<CharacteristicWriteRequest>): void;

    /**
     * server端取消订阅client的特征值写请求事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicWrite' } type - 事件回调类型，支持的事件为'characteristicWrite'，表示特征值写请求事件。
     * @param { Callback<CharacteristicWriteRequest> } callback - 指定取消订阅的回调函数通知。
     *     若传参，则需与
     *     [on('characteristicWrite')]{@link ble.GattServer.on(type: 'characteristicWrite', callback: Callback<CharacteristicWriteRequest>)}
     *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
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
     * server端取消订阅client的特征值写请求事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<CharacteristicWriteRequest> } [callback] 指定取消订阅的回调函数通知。
     *     若传参，则需与
     *     [onCharacteristicWrite]{@link ble.GattServer.onCharacteristicWrite(callback: Callback<CharacteristicWriteRequest>)}
     *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.1.0 static
     */
    offCharacteristicWrite(callback?: Callback<CharacteristicWriteRequest>): void;

    /**
     * server端订阅client的描述符读请求事件，server端收到该事件后需要调用[sendResponse]{@link ble.GattServer.sendResponse}接口回复client。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'descriptorRead' } type - 事件回调类型，支持的事件为'descriptorRead'，表示描述符读请求事件。
     *     当收到client端设备的读取描述符请求时，触发该事件。
     * @param { Callback<DescriptorReadRequest> } callback - 指定订阅的回调函数，会携带client端发送的读请求数据。
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
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.1.0 static
     */
    onDescriptorRead(callback: Callback<DescriptorReadRequest>): void;

    /**
     * server端取消订阅client的描述符读请求事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorRead' } type - 事件回调类型，支持的事件为'descriptorRead'，表示描述符读请求事件。
     * @param { Callback<DescriptorReadRequest> } callback - 指定取消订阅的回调函数通知。
     *     若传参，则需与
     *     [on('descriptorRead')]{@link ble.GattServer.on(type: 'descriptorRead', callback: Callback<DescriptorReadRequest>)}
     *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
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
     * @since 26.1.0 static
     */
    offDescriptorRead(callback?: Callback<DescriptorReadRequest>): void;

    /**
     * server端订阅client的描述符写请求事件，server端收到该事件后需要根据[DescriptorWriteRequest]{@link ble.DescriptorWriteRequest}里的needRsp决定是否
     * 调用[sendResponse]{@link ble.GattServer.sendResponse}接口回复client。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'descriptorWrite' } type - 事件回调类型，支持的事件为'descriptorWrite'，表示描述符写请求事件。
     *     当收到client端设备的写描述符请求时，触发该事件。
     * @param { Callback<DescriptorWriteRequest> } callback - 指定订阅的回调函数，会携带client端发送的写请求数据。
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
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.1.0 static
     */
    onDescriptorWrite(callback: Callback<DescriptorWriteRequest>): void;

    /**
     * server端取消订阅client的描述符写请求事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorWrite' } type - 事件回调类型，支持的事件为'descriptorWrite'，表示描述符写请求事件。
     * @param { Callback<DescriptorWriteRequest> } callback - 指定取消订阅的回调函数通知。
     *     若传参，则需与
     *     [on('descriptorWrite')]{@link ble.GattServer.on(type: 'descriptorWrite', callback: Callback<DescriptorWriteRequest>)}
     *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
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
     * @since 26.1.0 static
     */
    offDescriptorWrite(callback?: Callback<DescriptorWriteRequest>): void;

    /**
     * server端订阅GATT profile协议的连接状态变化事件。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'connectionStateChange' } type - 事件回调类型，支持的事件为'connectionStateChange'，表示GATT profile连接状态发生变化的事件。
     *     当client和server端之间的连接状态发生变化时，触发该事件。
     *     例如：收到连接请求或者断连请求时，可能引起连接状态发生变化。
     * @param { Callback<BLEConnectionChangeState> } callback -
     指定订阅的回调函数，会携带连接状态。
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
     * @since 26.1.0 static
     */
    onConnectionStateChange(callback: Callback<BLEConnectionChangeState>): void;

    /**
     * server端取消订阅GATT profile协议的连接状态变化事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'connectionStateChange' } type - 事件回调类型，支持的事件为'connectionStateChange'，表示GATT profile连接状态发生变化的事件。
     * @param { Callback<BLEConnectionChangeState> } callback - 指定取消订阅的回调函数通知。
     *     若传参，则需与
     *     [on('connectionStateChange')]{@link ble.GattServer.on(type: 'connectionStateChange', callback: Callback<BLEConnectionChangeState>)}
     *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
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
     * @since 26.1.0 static
     */
    offConnectionStateChange(callback?: Callback<BLEConnectionChangeState>): void;

    /**
     * server端订阅MTU（最大传输单元）大小变更事件。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - 事件回调类型，支持的事件为'BLEMtuChange'，表示MTU状态变化事件。
     *     当收到client端发起的MTU协商请求时，触发该事件。
     * @param { Callback<int> } callback - 指定订阅的回调函数，会携带协商后的MTU大小。单位：Byte。
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
     * @since 26.1.0 static
     */
    onBLEMtuChange(callback: Callback<int>): void;

    /**
     * server端取消订阅MTU（最大传输单元）大小变更事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - 事件回调类型，支持的事件为"BLEMtuChange"，表示MTU状态变化事件。
     * @param { Callback<int> } callback - 指定取消订阅的回调函数通知。
     *     若传参，则需与[on('BLEMtuChange')]{@link ble.GattServer.on(type: 'BLEMtuChange', callback: Callback<int>)}中的回调函数
     *     一致；若无传参，则取消订阅该type对应的所有回调函数通知。
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
     * @since 26.1.0 static
     */
    offBLEMtuChange(callback?: Callback<int>): void;

    /**
     * 订阅物理通道类型变更事件。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } callback - 指定订阅的回调函数，会携带变更后最新的物理通道类型。
     *     当本端server调用[setPhy]{@link ble.GattServer.setPhy}或对端变更当前物理通道类型后，如订阅此事件，均会收到携带最新物理通道类型的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    onBlePhyUpdate(callback: Callback<PhyValue>): void;

    /**
     * 取消订阅物理通道类型变更事件。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } [callback] - 指定取消订阅的回调函数。若传参，则需与
     *     [onBlePhyUpdate]{@link ble.GattServer.onBlePhyUpdate(callback: Callback<PhyValue>)}中的回调函数一致，
     *     若无传参，则取消订阅所有物理通道类型变更的回调函数通知。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    offBlePhyUpdate(callback?: Callback<PhyValue>): void;
  }

  /**
   * GATT客户端类，提供了和服务端进行连接和数据传输等操作方法。
   * 
   *  使用该类的方法前，需通过[createGattClientDevice]{@link ble.createGattClientDevice}方法构造该类的实例。
   *  通过创建不同的该类实例，可以管理多路GATT连接。
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
     * client端主动发起和server蓝牙设备的GATT协议连接。
     * 
     *  远端设备地址已通过[createGattClientDevice]{@link ble.createGattClientDevice}方法中的deviceId参数指定。
     *  client可通过订阅
     * [on('BLEConnectionStateChange')]{@link ble.GattClientDevice.on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectionChangeState>)}
     * 事件来感知连接是否成功。
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
     * client断开与远端蓝牙低功耗设备的连接。
     * 
     *  client可通过订阅
     * [on('BLEConnectionStateChange')]{@link ble.GattClientDevice.on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectionChangeState>)}
     * 事件来感知断连是否成功。
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
     * 销毁client端实例。销毁后，通过[GattClientDevice]{@link ble.GattClientDevice}创建的实例将不可用。
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
     * client获取server端设备名称。使用Callback异步回调。
     * 
     *  需先调用[connect]{@link ble.GattServer.connect}方法，等GATT profile连接成功后才能使用。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<string> } callback - 回调函数。当读取成功，err为undefined，data为server端设备名称。
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
     * client获取server端设备名称。使用Promise异步回调。
     * 
     *  需先调用[connect]{@link ble.GattServer.connect}方法，等GATT profile连接成功后才能使用。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<string> } Promise对象，携带server端设备名称。
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
     * client获取server端支持的所有服务能力，即服务发现流程。使用Callback异步回调。
     * 
     *  需先调用[connect]{@link ble.GattServer.connect}方法，等GATT profile连接成功后才能使用。
     *  应用调用该方法后，才能调用其他读写特征值、描述符等其他方法，且需确保server支持的服务能力中包含需要操作的特征值或描述符。包含接口如下所示：
     *  
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     *  
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     *  
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     *  
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     *  
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     *  
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<Array<GattService>> } callback - 回调函数。当读取成功，err为undefined，data为server端的服务列表。
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
     * @since 26.1.0 static
     */
    getServices(callback: AsyncCallback<Array<GattService>>): void;

    /**
     * client端获取server端支持的所有服务能力，即服务发现流程。使用Promise异步回调。
     * 
     *  需先调用[connect]{@link ble.GattServer.connect}方法，等GATT profile连接成功后才能使用。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<Array<GattService>> } Promise对象，返回获取到的server端服务列表。
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
     * @since 26.1.0 static
     */
    getServices(): Promise<Array<GattService>>;

    /**
     * client端从指定的server端特征值读取数据。使用Callback异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且包含指定的入参特征值UUID；否则会读取失败。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *  读取特征值过程中，需确保[BLECharacteristic]{@link ble.BLECharacteristic}入参特征值的serviceUuid、characteristicUuid准确。
     * characteristicValue表示的数据内容长度可由用户任意指定，不会影响实际读取到的特征值数据内容。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 需要读取的特征值。
     * @param { AsyncCallback<BLECharacteristic> } callback - 回调函数。当读取成功，err为undefined，data为获取到的特征值对象，包含读取到的数据内容；否则为错误对
     *     象。
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
     * @since 26.1.0 static
     */
    readCharacteristicValue(characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>): void;

    /**
     * client端从指定的server端特征值读取数据。使用Promise异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且包含指定的入参特征值UUID；否则会读取失败。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *  读取特征值过程中，需确保[BLECharacteristic]{@link ble.BLECharacteristic}入参特征值的serviceUuid、characteristicUuid准确。
     * characteristicValue表示的数据内容长度可由用户任意指定，不会影响实际读取到的特征值数据内容。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 需要读取的特征值。
     * @returns { Promise<BLECharacteristic> } - Promise对象，返回获取到的特征值对象，包含读取到的数据内容。
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
     * client端从指定的server端描述符读取数据。使用Callback异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且包含指定的入参描述符UUID；否则会读取失败。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *  读取描述符过程中，需确保[BLEDescriptor]{@link ble.BLEDescriptor}入参描述符的serviceUuid、characteristicUuid、descriptorUuid准确。
     * descriptorValue表示的数据内容长度可由用户任意指定，不会影响实际读取到的描述符数据内容。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - 需要读取的描述符。
     * @param { AsyncCallback<BLEDescriptor> } callback - 回调函数。当读取成功，err为undefined，data为获取到的描述符对象，包含读取到的数据内容；否则为错误对象。
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
     * client端从指定的server端描述符读取数据。使用Promise异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且包含指定的入参描述符UUID；否则会读取失败。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *  读取描述符过程中，需确保[BLEDescriptor]{@link ble.BLEDescriptor}入参描述符的serviceUuid、characteristicUuid、descriptorUuid准确。
     * descriptorValue表示的数据内容长度可由用户任意指定，不会影响实际读取到的描述符数据内容。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - 需要读取的描述符。
     * @returns { Promise<BLEDescriptor> } - Promise对象，返回获取到的描述符对象，包含读取到的数据内容。
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
     * client端向指定的server端特征值写入数据。使用Callback异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且包含指定的入参特征值UUID；否则会写入失败。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *  应用单次可写入的特征值数据长度限制为（MTU-3）字节。调用方可根据实际需要通过[setBLEMtuSize]{@link ble.GattClientDevice.setBLEMtuSize}接口指定MTU大小，进而修改
     * 单次可写入的特征值数据长度。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 需要写入的特征值，包含写入的数据内容。
     * @param { GattWriteType } writeType - 写入特征值的方式。
     * @param { AsyncCallback<void> } callback - 回调函数。当写入成功，err为undefined，否则为错误对象。
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
     * @since 26.1.0 static
     */
    writeCharacteristicValue(
      characteristic: BLECharacteristic,
      writeType: GattWriteType,
      callback: AsyncCallback<void>
    ): void;

    /**
     * client端向指定的server端特征值写入数据。使用Promise异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且包含指定的入参特征值UUID；否则会写入失败。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *  应用单次可写入的特征值数据长度限制为（MTU-3）字节。调用方可根据实际需要通过[setBLEMtuSize]{@link ble.GattClientDevice.setBLEMtuSize}接口指定MTU大小，进而修改
     * 单次可写入的特征值数据长度。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 需要写入的特征值，包含写入的数据内容。
     * @param { GattWriteType } writeType - 写入特征值的方式。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * @since 26.1.0 static
     */
    writeCharacteristicValue(characteristic: BLECharacteristic, writeType: GattWriteType): Promise<void>;

    /**
     * client端向指定的server端特征值写入数据，适用于需要获取server端写入响应信息的应用场景（如设备配置指令下发、健康数据同步等）。使用Promise异步回调。
     * 
     *  与
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 接口不同，此接口新增了返回server端响应信息的功能。在完成特征值写入操作后，调用方可以获取本端接收到server端回复消息的时间戳等信息。
     *  为获取server端的响应信息，此接口仅支持writeType为[WRITE]{@link ble.GattWriteType}的写入模式。
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且这些能力中需包含指定的入参特征值UUID；否则会写入失败。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *  应用单次可写入的特征值数据长度限制为（MTU-3）字节。调用方可根据实际需要通过[setBLEMtuSize]{@link ble.GattClientDevice.setBLEMtuSize}接口指定MTU大小，进而修改
     * 单次可写入的特征值数据长度。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 需要写入的特征值，包含写入的数据内容。单次可写入的数据长度限制为（MTU-3）字节，可通过setBLEMtuSize接口调整。
     * @param { GattWriteType } writeType - 写入特征值的方式，当前仅支持WRITE类型。
     * @returns { Promise<GattRspContext> } Promise对象，返回GattRspContext对象。
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
     * @since 26.1.0 static
     */
    writeCharacteristicValueWithContext(
      characteristic: BLECharacteristic, writeType: GattWriteType): Promise<GattRspContext>;

    /**
     * client端向指定的server端描述符写入数据。使用Callback异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且包含指定的入参描述符UUID；否则会写入失败。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *  应用单次可写入的描述符数据长度限制为（MTU-3）字节。调用方可根据实际需要通过[setBLEMtuSize]{@link ble.GattClientDevice.setBLEMtuSize}接口指定MTU大小，进而修改
     * 单次可写入的描述符数据长度。
     *  Client Characteristic Configuration描述符（UUID：00002902-0000-1000-8000-00805f9b34fb）和 Server Characteristic 
     * Configuration描述符（UUID：00002903-0000-1000-8000-00805f9b34fb）较为特殊，蓝牙标准协议规定内容长度为2字节，写入内容长度应设置为2字节。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - 需要写入的描述符，包含写入的数据内容。
     * @param { AsyncCallback<void> } callback - 回调函数。当写入成功，err为undefined，否则为错误对象。
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
     * @since 26.1.0 static
     */
    writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>): void;

    /**
     * client端向指定的server端描述符写入数据。使用Promise异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且包含指定的入参描述符UUID；否则会写入失败。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *  应用单次可写入的描述符数据长度限制为（MTU-3）字节。调用方可根据实际需要通过[setBLEMtuSize]{@link ble.GattClientDevice.setBLEMtuSize}接口指定MTU大小，进而修改
     * 单次可写入的描述符数据长度。
     *  Client Characteristic Configuration描述符（UUID：00002902-0000-1000-8000-00805f9b34fb）和 Server Characteristic 
     * Configuration描述符（UUID：00002903-0000-1000-8000-00805f9b34fb）较为特殊，蓝牙标准协议规定内容长度为2字节，写入内容长度应设置为2字节。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - 需要写入的描述符，包含写入的数据内容。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * @since 26.1.0 static
     */
    writeDescriptorValue(descriptor: BLEDescriptor): Promise<void>;

    /**
     * client端获取GATT连接链路信号强度 (Received Signal Strength Indication, RSSI)。使用Callback异步回调。
     * 
     *  需先调用[connect]{@link ble.GattServer.connect}方法，等GATT profile连接成功后才能使用。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<int> } callback - 回调函数。获取链路信号强度成功，err为undefined，data为获取到的信号强度值，单位：dBm；否则为错误对象。
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
     * @since 26.1.0 static
     */
    getRssiValue(callback: AsyncCallback<int>): void;

    /**
     * client端获取GATT连接链路信号强度 (Received Signal Strength Indication, RSSI)。使用Promise异步回调。
     * 
     *  需先调用[connect]{@link ble.GattServer.connect}方法，等GATT profile连接成功后才能使用。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<int> } Promise对象。返回链路的信号强度，单位：dBm。
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
     * @since 26.1.0 static
     */
    getRssiValue(): Promise<int>;

    /**
     * client端同server端协商MTU（最大传输单元）大小。
     * 
     *  需先调用[connect]{@link ble.GattServer.connect}方法，等GATT profile连接成功后才能使用。
     *  通过[on('BLEMtuChange')]{@link ble.GattServer.on(type: 'BLEMtuChange', callback: Callback<int>)}，订阅MTU协商结果。
     *  如果未协商，MTU大小默认为23字节。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { int } mtu - 需要协商的mtu大小，取值范围：[23, 517]，单位：Byte。
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
     * client端同server端协商MTU（最大传输单元）大小。与
     * [setBLEMtuSize]{@link ble.GattClientDevice.setBLEMtuSize}相比，本接口直接通过Promise返回实际协商成功的MTU结果，无需额外订阅
     * [on('BLEMtuChange')]{@link ble.GattServer.on(type: 'BLEMtuChange', callback: Callback<int>)}事件获取协商结果。
     * 
     *  需先调用[connect]{@link ble.GattServer.connect}方法，等GATT profile连接成功后才能使用。
     *  需保证入参符合取值范围，不在取值范围内会直接返回异常。
     *  如果未协商，MTU大小默认为23字节。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { int } mtu - 需要协商的mtu大小，取值范围：[23, 517]，单位：Byte。
     * @returns { Promise<int> } Promise对象，返回实际协商成功的Mtu结果，单位：Byte。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    setBLEMtu(mtu: int): Promise<int>;

    /**
     * client端启用或者禁用接收server端特征值内容变更通知的能力。使用Callback异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且需包含指定的入参特征值UUID。
     *  server端对应的特征值需包含标准协议定义的Client Characteristic Configuration描述符UUID（00002902-0000-1000-8000-00805f9b34fb），server端
     * 才能支持发送变更通知。
     *  若启用该能力，系统蓝牙服务会自动往server端写Client Characteristic Configuration描述符，启用server端的通知能力。
     *  若禁用该能力，系统蓝牙服务会自动往server端写Client Characteristic Configuration描述符，禁用server端的通知能力。
     *  通过
     * [on('BLECharacteristicChange')]{@link ble.GattClientDevice.on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>)}
     * 接收server端特征值内容变更通知。
     *  若client端收到server端特征值内容变更通知后，无需回复确认。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 需要管理的server端特征值。
     * @param { boolean } enable - 是否启用接收server端特征值通知的能力。
     *     true表示启用，false表示禁用。
     * @param { AsyncCallback<void> } callback - 回调函数。当调用成功，err为undefined，否则为错误对象。
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
     * @since 26.1.0 static
     */
    setCharacteristicChangeNotification(
      characteristic: BLECharacteristic,
      enable: boolean,
      callback: AsyncCallback<void>
    ): void;

    /**
     * client端启用或者禁用接收server端特征值内容变更通知的能力。使用Promise异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且需包含指定的入参特征值UUID。
     *  server端对应的特征值需包含标准协议定义的Client Characteristic Configuration描述符UUID（00002902-0000-1000-8000-00805f9b34fb），server端
     * 才能支持发送变更通知。
     *  若启用该能力，系统蓝牙服务会自动往server端写Client Characteristic Configuration描述符，启用server端的通知能力。
     *  若禁用该能力，系统蓝牙服务会自动往server端写Client Characteristic Configuration描述符，禁用server端的通知能力。
     *  通过
     * [on('BLECharacteristicChange')]{@link ble.GattClientDevice.on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>)}
     * 接收server端特征值内容变更通知。
     *  若client端收到server端特征值内容变更通知后，无需回复确认。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 需要管理的server端特征值。
     * @param { boolean } enable - 是否启用接收server端特征值通知的能力。
     *     true表示启用，false表示禁用。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * @since 26.1.0 static
     */
    setCharacteristicChangeNotification(characteristic: BLECharacteristic, enable: boolean): Promise<void>;

    /**
     * client端启用或者禁用接收server端特征值内容变更指示的能力。使用Callback异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且需包含指定的入参特征值UUID。
     *  server端对应的特征值需包含标准协议定义的Client Characteristic Configuration描述符UUID（00002902-0000-1000-8000-00805f9b34fb），server端
     * 才能支持发送变更指示。
     *  若启用该能力，系统蓝牙服务会自动往server端写Client Characteristic Configuration描述符，启用server端的指示能力。
     *  若禁用该能力，系统蓝牙服务会自动往server端写Client Characteristic Configuration描述符，禁用server端的指示能力。
     *  通过
     * [on('BLECharacteristicChange')]{@link ble.GattClientDevice.on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>)}
     * 接收server端特征值内容变更指示。
     *  若client端收到server端特征值内容变更指示后，系统蓝牙服务会主动回复确认，应用无需关注。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 需要管理的server端特征值。
     * @param { boolean } enable - 是否启用接收server端特征值指示的能力。
     *     true表示启用，false表示禁用。
     * @param { AsyncCallback<void> } callback - 回调函数。当调用成功，err为undefined，否则为错误对象。
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
     * client端启用或者禁用接收server端特征值内容变更指示的能力。使用Promise异步回调。
     * 
     *  需要先调用[getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}，获取到
     * server端所有支持的能力，且需包含指定的入参特征值UUID。
     *  server端对应的特征值需包含标准协议定义的Client Characteristic Configuration描述符UUID（00002902-0000-1000-8000-00805f9b34fb），server端
     * 才能支持发送变更指示。
     *  若启用该能力，系统蓝牙服务会自动往server端写Client Characteristic Configuration描述符，启用server端的指示能力。
     *  若禁用该能力，系统蓝牙服务会自动往server端写Client Characteristic Configuration描述符，禁用server端的指示能力。
     *  通过
     * [on('BLECharacteristicChange')]{@link ble.GattClientDevice.on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>)}
     * 接收server端特征值内容变更指示。
     *  若client端收到server端特征值内容变更指示后，系统蓝牙服务会主动回复确认，应用无需关注。
     *  异步回调结果返回后，才能调用下一次读取或者写入操作，如
     * [readCharacteristicValue]{@link ble.GattClientDevice.readCharacteristicValue
     * (characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>)}
     * 、
     * [readDescriptorValue]{@link ble.GattClientDevice.readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>)}
     * 、
     * [writeCharacteristicValue]{@link ble.GattClientDevice.writeCharacteristicValue
     * ( characteristic: BLECharacteristic, writeType: GattWriteType, callback: AsyncCallback<void> )}
     * 、
     * [writeDescriptorValue]{@link ble.GattClientDevice.writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>)}
     * 、
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 和
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 需要管理的server端特征值。
     * @param { boolean } enable - 是否启用接收server端特征值指示的能力。
     *     true表示启用，false表示禁用。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 获取当前与server端设备的连接状态。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { ProfileConnectionState } 蓝牙设备的profile连接状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    getConnectedState(): ProfileConnectionState;

    /**
     * 向对端设备发起连接参数更新请求，调用成功后可以切换与对端数据传输速度。使用Promise异步回调。
     * 
     *  需先调用[connect]{@link ble.GattServer.connect}方法，等GATT profile连接成功后才能使用。
     *  不调用该接口时，默认连接参数类型为[ble.ConnectionParam.BALANCED]{@link ble.ConnectionParam}。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ConnectionParam } param - 连接参数类型。
     * @returns { Promise<void> } Promise对象。无返回结果。
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
     * @since 26.1.0 static
     */
    updateConnectionParam(param: ConnectionParam): Promise<void>;

    /**
     * 获取client端连接链路的物理通道类型。使用Promise异步回调。
     * 
     *  需先调用[connect]{@link ble.GattServer.connect}方法发起连接，并等待连接成功后，再调用该方法。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<PhyValue> } Promise对象，返回client端连接链路的物理通道类型。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    readPhy(): Promise<PhyValue>;

    /**
     * client端设置连接链路的物理通道类型。使用Promise异步回调。
     * 
     *  需先调用[connect]{@link ble.GattServer.connect}方法发起连接，并等待连接成功后，再调用该方法。
     *  本端client调用setPhy设置物理通道类型后，底层会根据对端设备能力，协商出本端和对端设备均支持的物理通道类型作为最终结果。例如本端支持并设置[BLE_PHY_2M]{@link ble.BlePhy}，但对端设备仅
     * 支持[BLE_PHY_1M]{@link ble.BlePhy}，则最终设置的结果仍为[BLE_PHY_1M]{@link ble.BlePhy}。
     *  协商后的最终物理通道类型可通过订阅[onBlePhyUpdate]{@link ble.GattServer.onBlePhyUpdate(callback: Callback<PhyValue>)}事件获取。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { PhyValue } phyValue - 连接链路的物理通道类型配置参数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    setPhy(phyValue: PhyValue): Promise<void>;

    /**
     * client端订阅server端特征值变化事件。使用Callback异步回调。
     * 
     *   需调用
     * [setCharacteristicChangeNotification]{@link ble.GattClientDevice.setCharacteristicChangeNotification
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * 或者
     * [setCharacteristicChangeIndication]{@link ble.GattClientDevice.setCharacteristicChangeIndication
     * ( characteristic: BLECharacteristic, enable: boolean, callback: AsyncCallback<void> )}
     * ，且启用通知或者指示能力后，才能接收到server端的特征值内容变更通知或者指示。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLECharacteristicChange' } type - 事件回调类型，支持的事件为'BLECharacteristicChange'，表示server端特征值变化事件。
     *     当client端收到server端特征值内容变更的通知或者指示时，触发该事件。
     * @param { Callback<BLECharacteristic> } callback - 指定订阅的回调函数，会携带server端变化后的特征值内容。
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
     * @since 26.1.0 static
     */
    onBLECharacteristicChange(callback: Callback<BLECharacteristic>): void;

    /**
     * client端取消订阅server端特征值变化事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLECharacteristicChange' } type - 事件回调类型，支持的事件为'BLECharacteristicChange'，表示server端特征值变化事件。
     * @param { Callback<BLECharacteristic> } callback - 指定取消订阅的回调函数通知。
     *     若传参，则需与
     *     [on('BLECharacteristicChange')]{@link ble.GattClientDevice.on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>)}
     *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
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
     * @since 26.1.0 static
     */
    offBLECharacteristicChange(callback?: Callback<BLECharacteristic>): void;

    /**
     * client端订阅GATT profile协议的连接状态变化事件。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - 事件回调类型，支持的事件为'BLEConnectionStateChange'，表示连接状态变化事件。
     *     client和server端之间的连接状态发生变化时，触发该事件。
     *     当client端调用[connect]{@link ble.GattServer.connect}或[disconnect]{@link ble.GattServer.disconnect}时，可能引起连接状态
     *     发生变化。
     * @param { Callback<BLEConnectionChangeState> } callback - 指定订阅的回调函数，会携带连接状态信息。
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
     * @since 26.1.0 static
     */
    onBLEConnectionStateChange(callback: Callback<BLEConnectionChangeState>): void;

    /**
     * client端取消订阅GATT profile协议的连接状态变化事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - 事件回调类型，支持的事件为'BLEConnectionStateChange'，表示连接状态变化事件。
     * @param { Callback<BLEConnectionChangeState> } callback - 指定取消订阅的回调函数通知。
     *     若传参，则需与
     *     [on('BLEConnectionStateChange')]{@link ble.GattClientDevice.on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectionChangeState>)}
     *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
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
     * @since 26.1.0 static
     */
    offBLEConnectionStateChange(callback?: Callback<BLEConnectionChangeState>): void;

    /**
     * client端订阅MTU（最大传输单元）大小变更事件。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - 事件回调类型，支持的事件为'BLEMtuChange'，表示MTU大小变更事件。
     *     当调用[setBLEMtuSize]{@link ble.GattClientDevice.setBLEMtuSize}方法，client端发起MTU大小协商后，会触发该事件。
     * @param { Callback<int> } callback - 指定订阅的回调函数，会携带协商后的MTU大小。单位：Byte。
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
     * @since 26.1.0 static
     */
    onBLEMtuChange(callback: Callback<int>): void;

    /**
     * client端取消订阅MTU（最大传输单元）大小变更事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - 事件回调类型，支持的事件为'BLEMtuChange'，表示MTU大小变更事件。
     * @param { Callback<int> } callback - 指定取消订阅的回调函数通知。若传参，则需与
     *     [on('BLEMtuChange')]{@link ble.GattServer.on(type: 'BLEMtuChange', callback: Callback<int>)}中的回调函数一致；若无传参，则取消
     *     订阅该type对应的所有回调函数通知。
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
     * @since 26.1.0 static
     */
    offBLEMtuChange(callback?: Callback<int>): void;

    /**
     * client端设备订阅server端设备服务变化的通知事件，使用Callback异步回调。
     * 
     *  如client端已订阅该事件，当server端添加或删除服务时，client端均会收到服务变化通知。
     *  client端收到服务变化通知时，建议重新调用
     * [getServices]{@link ble.GattClientDevice.getServices(callback: AsyncCallback<Array<GattService>>)}获取server端设备支持的最
     * 新服务能力。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'serviceChange' } type - 事件回调类型，支持的事件为'serviceChange'，表示服务变化通知事件。
     *     当server端添加或删除服务时，会触发该事件通知client端。
     * @param { Callback<void> } callback - 通知client端设备，server端服务已发生变更。
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
     * @since 26.1.0 static
     */
    onServiceChange(callback: Callback<void>): void;

    /**
     * client端设备取消订阅server端设备服务变化的通知事件。
     * 
     *  取消订阅后，server端设备服务变化，client端将不再收到事件通知。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'serviceChange' } type - 事件回调类型，支持的事件为'serviceChange'，表示服务变化通知事件。
     *     当server端添加或删除服务时，会触发该事件通知client端。
     * @param { Callback<void> } [callback] - 指定取消订阅服务变化的回调函数通知。若传参，则需与
     *     [on('serviceChange')]{@link ble.GattClientDevice.on(type: 'serviceChange', callback: Callback<void>)}中传入的回调函数
     *     一致；若无传参，则取消订阅该type对应的所有回调函数通知。
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
     * @since 26.1.0 static
     */
    offServiceChange(callback?: Callback<void>): void;

    /**
     * 订阅物理通道类型变更事件。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } callback - 指定订阅的回调函数，会携带变更后最新的物理通道类型。
     *     当本端server调用[setPhy]{@link ble.GattServer.setPhy}或对端变更当前物理通道类型后，如订阅此事件，均会收到携带最新物理通道类型的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    onBlePhyUpdate(callback: Callback<PhyValue>): void;

    /**
     * 取消订阅物理通道类型变更事件。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } [callback] - 指定取消订阅的回调函数。若传参，则需与
     *     [onBlePhyUpdate]{@link ble.GattServer.onBlePhyUpdate(callback: Callback<PhyValue>)}中的回调函数一致，
     *     若无传参，则取消订阅所有物理通道类型变更的回调函数通知。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    offBlePhyUpdate(callback?: Callback<PhyValue>): void;
  }

  /**
   * BLE扫描类，提供了扫描相关的操作方法。
   * 
   *  使用该类的方法前，需通过[createBleScanner]{@link ble.createBleScanner}方法构造该类的实例。
   *  通过创建不同的该类实例，可以管理多路不同的扫描流程。
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
     * 发起BLE扫描流程。使用Promise异步回调。
     * 
     *  该接口只能扫描BLE设备。
     *  扫描结果会通过[on('BLEDeviceFind')]{@link ble.BleScanner.on(type: 'BLEDeviceFind', callback: Callback<ScanReport>)}的回调
     * 函数获取到。
     *  调用[stopScan]{@link ble.BleScanner.stopScan}可以停止该方法开启的扫描流程。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Array<ScanFilter> } filters - 扫描BLE广播的过滤条件集合，符合过滤条件的设备会被上报。
     *     - 若该参数设置为null，将扫描所有可发现的周边BLE设备，但是不建议使用此方式，可能扫描到非预期设备，并增加功耗。
     *     - 围栏模式下（[ScanReportMode]{@link ble.ScanReportMode}设置为FENCE_SENSITIVITY_LOW或FENCE_SENSITIVITY_HIGH时），该参数不可
     *     设置为null，需传入非空过滤器。
     *     - 过滤器资源为所有应用共享，建议单个应用使用过滤器数量不超过3个，否则过滤器资源占满将导致开启扫描失败，返回2900009错误码。
     * @param { ScanOptions } options - 扫描的配置参数。不填写时使用默认配置。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 停止正在进行的BLE扫描。使用Promise异步回调。
     * 
     *  停止的扫描是由[startScan]{@link ble.BleScanner.startScan(filters: Array<ScanFilter>, options?: ScanOptions)}触发的。
     *  当应用不再需要扫描BLE设备时，需主动调用该方法停止扫描。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 订阅BLE设备扫描结果上报事件。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 15 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'BLEDeviceFind' } type - 事件回调类型，支持的事件为'BLEDeviceFind'，表示BLE设备扫描结果上报事件。
     *     当调用[startScan]{@link ble.BleScanner.startScan(filters: Array<ScanFilter>, options?: ScanOptions)} 后，开始BLE
     *     扫描，若扫描到BLE设备，触发该事件。
     * @param { Callback<ScanReport> } callback - 指定订阅的回调函数，会携带扫描结果的集合。
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
     * @since 26.1.0 static
     */
    onBLEDeviceFind(callback: Callback<ScanReport>): void;
    /**
     * 取消订阅BLE设备扫描结果上报事件。
     * 
     *  若不再需要扫描BLE设备，调用[stopScan]{@link ble.BleScanner.stopScan}方法后，需要调用此方法取消订阅。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - 事件回调类型，支持的事件为'BLEDeviceFind'，表示BLE设备扫描结果上报事件。
     * @param { Callback<ScanReport> } callback - 指定取消订阅的回调函数通知。
     *     若传参，则需与
     *     [on('BLEDeviceFind')]{@link ble.BleScanner.on(type: 'BLEDeviceFind', callback: Callback<ScanReport>)}中的回调函数一
     *     致；若无传参，则取消订阅该type对应的所有回调函数通知。
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
     * @since 26.1.0 static
     */
    offBLEDeviceFind(callback?: Callback<ScanReport>): void;
  }

  /**
   * GATT服务结构定义，可包含多个特征值[BLECharacteristic]{@link ble.BLECharacteristic}和依赖的其他服务。
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
     * 服务UUID，标识一个GATT服务。例如：00001888-0000-1000-8000-00805f9b34fb。
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
     * 是否是主服务。true表示是主服务，false表示是次要服务。
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
     * 当前服务包含的特征值列表。
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
     * 当前服务依赖的其它服务。若不设置此参数，则默认不依赖其它服务。
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
   * GATT特征值结构定义，是服务[GattService]{@link ble.GattService}的核心数据单元。
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
     * 特征值所属的服务UUID。例如：00001888-0000-1000-8000-00805f9b34fb。
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
     * 特征值UUID。例如：00002a11-0000-1000-8000-00805f9b34fb。
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
     * 特征值的数据内容。
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
     * 特征值包含的描述符列表。
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
     * 特征值支持的属性。若不设置此参数，则使用默认属性值。
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
     * 特征值读写操作需要的权限。若不设置此参数，则使用默认权限值。
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
     * 特征值的唯一标识句柄。当server端BLE蓝牙设备提供了多个相同UUID特征值时，可以通过此句柄区分不同的特征值。若不设置此参数，则内容为undefined。
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
   * GATT描述符结构定义，是特征值[BLECharacteristic]{@link ble.BLECharacteristic}的数据单元，用于描述特征值的附加信息和属性。
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
     * 特征值所属的服务UUID。例如：00001888-0000-1000-8000-00805f9b34fb。
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
     * 描述符所属的特征值UUID。例如：00002a11-0000-1000-8000-00805f9b34fb。
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
     * 描述符UUID。例如：00002902-0000-1000-8000-00805f9b34fb。
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
     * 描述符的数据内容。
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
     * 描述符的唯一标识句柄。当server端BLE蓝牙设备提供了多个相同UUID描述符时，可以通过此句柄区分不同的描述符。若不设置此参数，则内容为undefined。
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
     * 描述符读写操作需要的权限。若不设置此参数，则使用默认权限值。
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
   * 描述server端特征值发生变化时，server端发送特征值通知的参数结构。
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
     * 特征值所属的服务UUID。例如：00001888-0000-1000-8000-00805f9b34fb。
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
     * 内容发生变化的特征值UUID。例如：00002a11-0000-1000-8000-00805f9b34fb。
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
     * 特征值对应的数据内容。
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
     * true表示发送的是指示，需要client端回复确认。false表示发送的是通知，不需要client端回复确认。
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
   * 描述server端订阅client端读特征值请求事件后，接收到的事件参数结构。
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
     * client端蓝牙设备地址。例如："XX:XX:XX:XX:XX:XX"。
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
     * client端读请求的标识符，server端回复时需填写相同的transId。
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
     * client端读数据的偏移值。例如：k表示从第k个字节开始读。
     * 
     * server端回复响应时需填写相同的offset。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * client端需要读取的特征值UUID。例如：00002a11-0000-1000-8000-00805f9b34fb。
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
     * 特征值所属的服务UUID。例如：00001888-0000-1000-8000-00805f9b34fb。
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
   * 描述server端订阅client端写特征值请求事件后，接收到的事件参数结构。
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
     * client端蓝牙设备地址。例如："XX:XX:XX:XX:XX:XX"。
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
     * client端写请求的标识符，server端回复时需填写相同的transId。
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
     * client端写数据的偏移值。例如：k表示从第k个字节开始写。
     * 
     * server端回复时需填写相同的offset。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * 收到client端写请求后，是否立即回复。
     * 
     * true表示稍后回复，false表示立即回复。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isPrepared: boolean;
    /**
     * 是否需要回复client端。
     * 
     * true表示需要回复，false表示不需要回复。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    needRsp: boolean;
    /**
     * client端需要给特征值写入的数据。
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
     * client端需要写入的特征值UUID。例如：00002a11-0000-1000-8000-00805f9b34fb。
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
     * 特征值所属的服务UUID。例如：00001888-0000-1000-8000-00805f9b34fb。
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
   * 描述server端订阅client端读描述符请求事件后，接收到的事件参数结构。
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
     * client端蓝牙设备地址。例如："XX:XX:XX:XX:XX:XX"。
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
     * client端读请求的标识符，server端回复时需填写相同的transId。
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
     * client端读数据的偏移值。例如：k表示从第k个字节开始读。
     * 
     * server端回复响应时需填写相同的offset。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * client端需要读取的描述符UUID。例如：00002902-0000-1000-8000-00805f9b34fb。
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
     * 描述符所属的特征值UUID。例如：00002a11-0000-1000-8000-00805f9b34fb。
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
     * 特征值所属的服务UUID。例如：00001888-0000-1000-8000-00805f9b34fb。
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
   * 描述server端订阅client端写描述符请求事件后，接收到的事件参数结构。
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
     * client端蓝牙设备地址。例如："XX:XX:XX:XX:XX:XX"。
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
     * client端写请求的标识符，server端回复时需填写相同的transId。
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
     * client端写数据的偏移值。例如：k表示从第k个字节开始写。
     * 
     * server端回复时需填写相同的offset。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * 收到client端写请求后，是否立即回复。
     * 
     * true表示稍后回复，false表示立即回复。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isPrepared: boolean;
    /**
     * 是否需要回复client端。
     * 
     * true表示需要回复，false表示不需要回复。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    needRsp: boolean;
    /**
     * client端需要给特征值写入的数据。
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
     * client端需要写入的描述符UUID。例如：00002902-0000-1000-8000-00805f9b34fb。
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
     * 描述符所属的特征值UUID。例如：00002a11-0000-1000-8000-00805f9b34fb。
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
     * 特征值所属的服务UUID。例如：00001888-0000-1000-8000-00805f9b34fb。
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
   * 描述server端回复client端读或者写请求的响应参数结构。
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
     * client端蓝牙设备地址。例如："XX:XX:XX:XX:XX:XX"。
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
     * client端写请求的标识符，server端回复时需填写相同的transId。
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
     * 响应的状态，设置为0即可，表示正常。
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
     * client端读或者写请求的数据偏移值，与订阅client端读或者写请求事件携带的offset保持一致。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * 回复的数据。
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
   * 描述GATT profile协议连接状态。
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
     * 对端蓝牙设备地址。例如："XX:XX:XX:XX:XX:XX"。
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
     * GATT profile连接状态。
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
     * GATT链路断连原因，仅在连接状态为 [STATE_DISCONNECTED]{@link @ohos.bluetooth.constant:constant.ProfileConnectionState} 时提供，其他连接状
     * 态下断连原因默认为undefined。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    reason?: GattDisconnectReason;
    /**
     * GATT链路断连原因，仅在连接状态为 [STATE_DISCONNECTED]{@link @ohos.bluetooth.constant:constant.ProfileConnectionState} 时提供，其他连接状
     * 态下断连原因默认为undefined。例如：本端主动断开连接时，返回：0X16_LOCAL_HOST。 **起始版本**：26.0.0
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    reasonMessage?: string;
  }

  /**
   * 枚举，指定GATT链路断开的原因。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  enum GattDisconnectReason {
    /**
     * 连接超时。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    CONN_TIMEOUT = 1,
    /**
     * 对端设备主动断开连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    CONN_TERMINATE_PEER_USER = 2,
    /**
     * 本端设备主动断开连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    CONN_TERMINATE_LOCAL_HOST = 3,
    /**
     * 未知断连原因。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    CONN_UNKNOWN = 4
  }

  /**
   * 扫描到符合过滤条件的广播报文后，上报的扫描数据。
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
     * 扫描到的蓝牙设备地址。例如："XX:XX:XX:XX:XX:XX"。
     * 
     * 基于信息安全考虑，若应用开启扫描时没有在[ScanFilter]{@link ble.ScanFilter}中配置
     * [实际MAC地址]{@link @ohos.bluetooth.common:common.BluetoothAddressType}，则此处获取的设备地址为
     * [虚拟MAC地址]{@link @ohos.bluetooth.common:common.BluetoothAddressType}。
     * 
     *  若和该设备地址配对成功后，该地址不会变更。
     *  若该设备重启蓝牙开关，重新获取到的虚拟地址会立即变更。
     *  若取消配对，蓝牙子系统会根据该地址的实际使用情况，决策后续变更时机；若其他应用正在使用该地址，则不会立刻变更。
     *  若要持久化保存该地址，可使用[access.addPersistentDeviceId]{@link @ohos.bluetooth.access:access.addPersistentDeviceId}方法。
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
     * 扫描到的蓝牙设备地址信息，包括地址与地址类型。若不设置此参数，则内容为undefined。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    address?: BluetoothAddress;
    /**
     * 扫描到的设备信号强度，单位：dBm。
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
     * 扫描到的设备发送的原始未解析的广播报文内容。
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
     * 扫描到的设备名称，从原始数据data字段中解析而来，在蓝牙协议中广播数据类型为0x09。
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
     * 扫描到的设备是否可连接。true表示可连接，false表示不可连接。
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
     * 扫描到的设备广播标记位，从原始数据data字段中解析而来，在蓝牙协议中广播数据类型为0x01。若广播报文中携带标记位，则该字段有值，否则内容为undefined。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    advertiseFlags?: int;

    /**
     * 扫描到的设备制造商数据集合，从原始数据data字段中解析而来，在蓝牙协议中广播数据类型为0xFF。若广播报文中携带设备制造商数据，则该字段有值，否则内容为undefined。
     * 
     *  Map的key表示制造商ID，value表示对应制造商数据的具体内容。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    manufacturerDataMap?: Map<int, Uint8Array>;

    /**
     * 扫描到的设备服务数据集合，从原始数据data字段中解析而来，在蓝牙协议中广播数据类型为0x16。若广播报文中携带设备服务数据，则该字段有值，否则内容为undefined。
     * 
     *  Map的key表示服务UUID，value表示对应UUID服务的具体内容。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    serviceDataMap?: Map<string, Uint8Array>;

    /**
     * 扫描到的设备服务UUID集合，从原始数据data字段中解析而来，在蓝牙协议中，16-bit UUID的广播数据类型为0x03，32-bit UUID类型为0x05，128-bit UUID类型为0x07。若广播报文中携带设备服
     * 务UUID，则该字段有值，否则内容为undefined。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    serviceUuids?: string[];

    /**
     * 扫描到的设备广播发送功率，单位：dBm，从原始数据data字段中解析而来，在蓝牙协议中广播数据类型为0x0A。若广播报文中携带设备广播发送功率，则该字段有值，否则内容为undefined。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    txPowerLevel?: int;

    /**
     * 扫描到的设备广播数据集，从原始数据data字段中解析而来。
     * 
     *  Map的key表示广播数据类型，value表示对应数据类型的具体内容，如advertisingDataMap字段中key为0x0A的对应value含义为txPowerLevel值。
     *  若广播报文中携带任意广播数据内容，则该字段有值，否则内容为undefined。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    advertisingDataMap?: Map<int, Uint8Array>;
  }

  /**
   * 上报的扫描数据。
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
     * 扫描结果上报类型。
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
     * 扫描到符合过滤条件的BLE广播报文后，上报的扫描数据。
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
   * 描述BLE广播的发送参数。
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
     * 广播发送间隔。
     * 
     * 取值范围：[32, 16777215]，单位：slot（时间槽），一个slot代表0.625毫秒，默认值为1600。
     * 
     * 其中传统广播的最大值是16384。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    interval?: int;
    /**
     * 广播发送功率。取值范围：[-127, 1]，单位：dBm，默认值为-7。
     * 
     * 考虑到发送广播的性能和功耗，建议高档取值为1，中档取为-7，低档取值为-15。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    txPower?: int;
    /**
     * 是否是可连接广播。true表示发送可连接广播，false表示发送不可连接广播，默认值为true。
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
     * 是否使用扩展广播。false表示使用传统广播，报文最大长度为31个字节；true表示使用扩展广播，报文最大长度由蓝牙芯片能力决定。默认值为false。
     * 
     * **起始版本**：26.0.0
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    isExtended?: boolean;
  }

  /**
   * 描述BLE广播报文数据内容，也可以用作回复扫描请求的广播报文数据内容。支持传统广播和扩展广播，传统广播报文最大长度为31个字节，扩展广播报文最大长度由蓝牙芯片能力决定。若超出最大长度限制，会导致启动广播失败。
   * 
   *  传统广播模式下，若携带了所有参数，尤其是携带了广播名称（通过includeDeviceName或advertiseName进行设置），需要注意广播报文长度。
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
     * 要携带的服务UUID。
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
     * 要携带的制造商数据内容。
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
     * 要携带的服务数据内容。
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
     * 是否携带本机的设备名称作为广播名称。
     * 
     * true表示携带，false表示不携带，默认值为false。
     * 
     * 若应用需要自定义广播名称，可通过advertiseName进行设置。本参数不可与advertiseName同时使用。
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
     * 是否携带广播发送功率。
     * 
     * true表示携带广播发送功率，false表示不携带广播发送功率，默认值为false。
     * 
     * 携带该值后，广播报文长度将多占用3个字节。
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
     * 要携带的自定义广播名称。若不设置此参数，则默认不携带自定义广播名称。
     * 
     * 不可与includeDeviceName同时使用。
     * 
     * [ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME](docroot://security/AccessToken/restricted-permissions.md#ohospermissionmanage_bluetooth_advertiser_name)
     *
     * @permission ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    advertiseName?: string;
  }

  /**
   * 首次启动BLE广播时设置的参数。
   * 
   * 蓝牙协议规定，在扩展广播模式下（即广播发送参数[isExtended]{@link ble.AdvertiseSetting}为true时），广播发送参数
   * [connectable]{@link ble.AdvertiseSetting}和扫描回复广播报文[advResponse]{@link ble.startAdvertising}不能共存（即
   * [connectable]{@link ble.AdvertiseSetting}为true，[advResponse]{@link ble.startAdvertising}需为空；
   * [connectable]{@link ble.AdvertiseSetting}为false，[advResponse]{@link ble.startAdvertising}不能为空）。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AdvertisingParams {
    /**
     * 广播的发送参数。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingSettings: AdvertiseSetting;
    /**
     * 需要发送的广播报文数据内容。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingData: AdvertiseData;
    /**
     * 回复扫描请求的广播报文数据内容。若不填写，则不携带扫描回复广播报文。在扩展广播模式下（isExtended为true时），与connectable不能共存：connectable为true时本参数需为空，connectable
     * 为false时本参数不能为空。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingResponse?: AdvertiseData;
    /**
     * 发送广播的持续时间。取值范围：[1, 65535]，单位：10ms。
     * 
     * 如果未指定此参数或者将其设置为0，则会持续发送广播。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    duration?: int;
  }

  /**
   * 启动指定标识的BLE广播时设置的参数。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface AdvertisingEnableParams {
    /**
     * 需要启动的广播标识。该值由[ble.startAdvertising]{@link ble.startAdvertising}首次启动广播时分配。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingId: int;
    /**
     * 发送广播的持续时间。取值范围：[1, 65535]，单位：10ms。
     * 
     * 如果未指定此参数或者将其设置为0，则会持续发送广播。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    duration?: int;
  }

  /**
   * 停止指定标识的BLE广播时设置的参数。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface AdvertisingDisableParams {
    /**
     * 需要停止的广播标识。该值由[ble.startAdvertising]{@link ble.startAdvertising}首次启动广播时分配。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingId: int;
  }

  /**
   * 描述BLE广播启动、停止的状态信息。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AdvertisingStateChangeInfo {
    /**
     * 首次启动广播时会分配该值，后续用于标识当前操作的广播。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingId: int;
    /**
     * 操作广播后，收到的BLE广播状态。
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
   * 描述BLE广播报文中制造商数据内容。
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
     * 制造商的标识，由蓝牙技术联盟分配。
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
     * 制造商特定的数据。
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
   * 描述BLE广播报文中的服务数据内容。
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
     * 服务UUID。
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
     * 服务数据。
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
   * 扫描BLE广播的过滤条件，只有符合该条件的广播报文才会上报。
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
     * 过滤该BLE设备地址的广播报文。例如："XX:XX:XX:XX:XX:XX"。若同时设置了address参数，
     * 则以address参数为准，deviceId不生效。
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
     * 过滤该BLE设备地址和地址类型的广播报文。
     * 
     * 与deviceId相比，本参数支持同时指定BLE设备地址和地址类型来对BLE广播报文进行过滤。
     * 
     * 若deviceId与本参数同时指定，本参数生效，deviceId不生效。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    address?: BluetoothAddress;
    /**
     * 通过蓝牙设备地址解析密钥（Identity Resolving Key, IRK）过滤携带
     * [可解析私有地址]{@link @ohos.bluetooth.common:common.BluetoothRawAddressType}的BLE广播报文。默认值为空，表示不按IRK过滤广播报文。
     * 
     * 蓝牙设备的可解析私有地址会随时间变化，若已知该设备的IRK和Public类型地址或者Static Random类型的地址，即可过滤同一个蓝牙设备在不同时间发出的BLE广播报文。
     * 
     * 使用本参数时，必须同时通过[ScanFilter]{@link ble.ScanFilter}中的address参数指定地址和地址类型等信息。其中，地址必须为有效的Public类型地址或Static Random类型地址，
     * [addressType]{@link @ohos.bluetooth.common:common.BluetoothAddressType}必须设置为REAL，
     * [rawAddressType]{@link @ohos.bluetooth.common:common.BluetoothRawAddressType}必须根据address的实际情况进行设置，否则将无法正确过滤携带可解析私
     * 有地址的BLE广播报文。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    irk?: Uint8Array;

    /**
     * 过滤该BLE设备名称的广播报文。
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
     * 过滤包含该服务UUID的广播报文，serviceUuid通常在外围设备的广播报文中携带，表示外围设备支持的服务UUID。例如：00001888-0000-1000-8000-00805f9b34fb。
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
     * 搭配serviceUuid过滤器使用，可设置过滤部分服务UUID。例如：FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF。
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
     * 过滤包含该服务请求UUID的广播报文，serviceSolicitationUuid通常在中心设备的广播报文中携带，表示中心设备希望搜索到的服务UUID。例如：00001888-0000-1000-8000-00805F9B3
     * 4FB。
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
     * 搭配serviceSolicitationUuid过滤器使用，可设置过滤部分服务请求UUID。例如：FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF。
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
     * 过滤包含该服务数据的广播报文。例如：[0x90,0x00,0xF1,0xF2]。
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
     * 搭配serviceData过滤器使用，可设置过滤部分服务数据。例如：[0xFF,0xFF,0xFF,0xFF]。
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
     * 过滤包含该制造商标识符的广播报文。例如：0x0006。
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
     * 搭配manufactureId过滤器使用，过滤包含该制造商数据的广播报文。例如：[0x1F,0x2F,0x3F]。
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
     * 搭配manufactureData过滤器使用，可设置过滤部分制造商数据。例如：[0xFF,0xFF,0xFF]。
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
     * 过滤信号强度大于或等于该信号强度门限值的广播报文，蓝牙协议上规定可设置范围为[-128, 127]，单位：dBm，建议设置[-90, 127]范围内的门限值。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    rssiThreshold?: int;
  }

  /**
   * BLE扫描的配置参数。
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
     * 扫描结果上报的延迟时间，单位：ms，默认值为0。搭配[ScanReportMode]{@link ble.ScanReportMode}使用。
     * 
     *  在常规或围栏扫描上报模式下，该值不生效，扫描到符合过滤条件的广播报文后立即上报。
     *  在批量扫描上报模式下，该值生效，扫描到符合过滤条件的广播报文后，会存入缓存队列，延迟上报。若不设置该值或设置在
     * [0, 5000)范围内，蓝牙子系统会默认设置延迟时间为5000ms。延迟时间内，若符合过滤条件的广播报文数量超过硬件缓存能力，蓝牙子系统会提前上报扫描结果。
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
     * 扫描模式，默认值为SCAN_MODE_LOW_POWER。
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
     * 硬件的过滤匹配模式，默认值为MATCH_MODE_AGGRESSIVE。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    matchMode?: MatchMode;
    /**
     * 扫描中使用的物理通道类型，默认值为PHY_LE_1M。
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
     * 扫描结果数据上报模式，默认值为NORMAL。
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
     * 是否使用扩展扫描。false表示使用传统扫描；true表示使用扩展扫描。默认值为false。
     * 
     * **起始版本**：26.0.0
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    isExtended?: boolean;
    /**
     * 配置扫描增强模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    scanEnhanceMode?: ScanEnhanceMode;
  }

  /**
   * 描述GATT特征值支持的属性。决定了特征值内容和描述符如何被使用和访问。
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
     * 该特征值是否支持写入操作。
     * 
     * true表示支持，且被写入时需要回复对端设备，false表示不支持。默认值为true。
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
     * 该特征值是否支持写入操作。
     * 
     * true表示支持，且被写入时无需回复对端设备，false表示不支持。默认值为true。
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
     * 该特征值是否支持读取操作。
     * 
     * true表示支持，false表示不支持。默认值为true。
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
     * 该特征值是否支持主动向对端设备通知特征值内容。
     * 
     * true表示支持，且对端设备不需要回复确认，false表示不支持。默认值为false。
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
     * 该特征值是否支持向对端设备指示特征值内容。
     * 
     * true表示支持，对端设备需要回复确认，false表示不支持。默认值为false。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    indicate?: boolean;

    /**
     * 该特征值是否支持作为广播内容由server端发送。
     * 
     * true表示支持，server端可将特征值内容以[ServiceData]{@link ble.ServiceData}类型在广播报文中携带，false表示不支持。默认值为false。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    broadcast?: boolean;

    /**
     * 该特征值是否支持签名写入操作，通过对写入内容进行签名校验替代加密流程。
     * 
     * true表示支持，且该特征值权限[GattPermissions]{@link ble.GattPermissions}中的writeSigned或writeSignedMitm需设置为true，否则该属性不生效，false表
     * 示不支持。默认值为false。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    authenticatedSignedWrite?: boolean;

    /**
     * 该特征值是否存在扩展属性。
     * 
     * true表示存在扩展属性，即该特征值关联了特征值扩展属性描述符（UUID：00002900-0000-1000-8000-00805f9b34fb），用于定义附加的特征值属性（如可靠写入等）；false表示不存在扩展属性。默认
     * 值为false。
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
   * 描述读写GATT特征值或描述符需具备的权限。
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
     * 是否允许读取该特征值或描述符内容。
     * 
     * true表示允许，false表示不允许。默认值为true。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    read?: boolean;

    /**
     * 读取该特征值或描述符内容是否需要加密。
     * 
     * true表示需要加密后，方可读取内容，false表示不需要普通方式加密。默认值为false。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readEncrypted?: boolean;

    /**
     * 读取该特征值或描述符内容是否需要防中间人攻击的加密。
     * 
     * 防中间人攻击表示操作需要经过认证，防止数据被第三方篡改。true表示需要防中间人攻击的加密后才能读取内容，false表示不需要防中间人攻击的加密。默认值为false。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readEncryptedMitm?: boolean;

    /**
     * 是否允许写入该特征值或描述符内容。
     * 
     * true表示允许，false表示不允许。默认值为true。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    write?: boolean;

    /**
     * 写入该特征值或描述符内容是否需要加密。
     * 
     * true表示需要加密后，方可写入内容，false表示不需要普通方式加密。默认值为false。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    writeEncrypted?: boolean;

    /**
     * 写入该特征值或描述符内容是否需要防中间人攻击的加密。
     * 
     * true表示需要防中间人攻击的加密后才能写入内容，false表示不需要防中间人攻击的加密。默认值为false。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    writeEncryptedMitm?: boolean;

    /**
     * 写入该特征值或描述符内容是否需要经过签名处理。
     * 
     * true表示内容需要签名处理后方可写入，false表示不需要签名处理。默认值为false。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    writeSigned?: boolean;

    /**
     * 写入该特征值或描述符内容是否需要经过防中间人攻击方式的签名处理。
     * 
     * true表示需要防中间人攻击方式的签名处理后方可写入，false表示不需要以防中间人攻击方式签名处理。默认值为false。
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
   * client端调用[writeCharacteristicValueWithContext]{@link ble.GattClientDevice.writeCharacteristicValueWithContext}等接口并接
   * 收到server端的回复消息后，蓝牙子系统上报给应用的信息。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface GattRspContext {
    /**
     * 本端接收到对端GATT回复消息的时间点，格式为微秒级的UNIX时间戳。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    timestamp: long;
  }

  /**
   * 连接链路的物理通道类型配置参数。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface PhyValue {
    /**
     * 发送端物理通道类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    txPhy: BlePhy;
    /**
     * 接收端物理通道类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    rxPhy: BlePhy;
    /**
     * 用于指定物理通道类型为[BLE_PHY_CODED]{@link ble.BlePhy}的编码方式。
     * 
     * 默认值为0，表示不指定明确的编码方式，由蓝牙子系统决定。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    phyMode?: CodedPhyMode;
  }

  /**
   * 描述GATT连接的参数。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface GattSetting {
    /**
     * 是否直接连接到远端设备或者在远端设备可用时自动连接。true表示在远端设备可用时自动连接，false表示直接连接到远端设备。默认值为false。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    autoConnect?: boolean;
    /**
     * 连接的传输类型，默认值为TRANSPORT_LE。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    transport?: BluetoothTransport;
  }

  /**
   * The enum of gatt characteristic write type
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface ScanEnhanceMode {
    /**
     * 扫描增强的模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    enhanceMode: EnhanceMode;
    /**
     * 扫描增强的持续时间。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    timeout: int;
  }

  /**
   * 枚举，写入特征值的方式（不同的取值，对端蓝牙设备的表现不一样）。
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
     * 写入特征值后，对端蓝牙设备需要回复确认。
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
     * 写入特征值后，对端蓝牙设备不需要回复。
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
   * 枚举，扫描模式，表示不同的扫描性能和功耗情况。
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
     * 低功耗模式，扫描性能较低，功耗也较低。
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
     * 均衡模式，平衡扫描性能和功耗。
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
     * 低延迟模式，扫描性能较高，但功耗也较高。
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
   * 枚举，硬件过滤匹配模式。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum MatchMode {
    /**
     * 当广播报文信号强度较低或者短时间内广播报文的发送次数较少时，可以更快地上报。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    MATCH_MODE_AGGRESSIVE = 1,
    /**
     * 广播报文信号强度较高或者短时间内广播报文的发送次数较多时，才会上报。
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
   * 枚举，不同操作对应的BLE广播状态。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   * @since 23 static
   */
  enum AdvertisingState {
    /**
     * 调用[startAdvertising]{@link ble.startAdvertising}方法后，广播首次启动成功，且会分配相关资源。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 11 dynamic
     * @since 23 static
     */
    STARTED = 1,
    /**
     * 调用[enableAdvertising]{@link ble.enableAdvertising}方法后，广播启动成功。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    ENABLED = 2,
    /**
     * 调用[disableAdvertising]{@link ble.disableAdvertising}方法后，广播停止成功。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    DISABLED = 3,
    /**
     * 调用[stopAdvertising]{@link ble.stopAdvertising}方法后，广播停止成功，且会释放首次启动广播时分配的相关资源。
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
   * 枚举，指定扫描过程中接收BLE广播报文的物理通道。
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
     * 使用1M PHY类型扫描。
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
     * 使用所有支持的PHY类型扫描。
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
   * 枚举，扫描结果上报模式。
   * 
   * <!--Table: 20%; 10%; 70%-->
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
     * 常规扫描上报模式，扫描到符合过滤条件的BLE广播报文后就会立刻上报。
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
     * 批量扫描上报模式。
     * 
     *  该模式需要使用[BleScanner]{@link ble.BleScanner}类下的接口发起扫描。
     *  该模式可通过降低蓝牙芯片上报扫描结果频率，使系统更长时间地保持在休眠状态，从而降低整机功耗。
     *  该模式下，扫描到符合过滤条件的BLE广播报文后不会立刻上报，需要缓存一段时间（[ScanOptions]{@link ble.ScanOptions}中的interval字段）后上报。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    BATCH = 2,
    /**
     * 低灵敏度围栏上报模式。
     * 
     *  围栏模式表示只在广播进入或离开围栏时上报。
     *  扫描到的广播信号强度高且广播数量多时，可进入低灵敏度围栏。
     *  首次扫描到广播即进入围栏，触发一次上报。
     *  一段时间内扫描不到广播即离开围栏，触发一次上报。
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
     * 高灵敏度围栏上报模式。
     * 
     *  围栏模式表示只在广播进入或离开围栏时上报。
     *  扫描到的广播信号强度低且广播数量少时，可进入高灵敏度围栏。
     *  首次扫描到广播即进入围栏，触发一次上报。
     *  一段时间内扫描不到广播即离开围栏，触发一次上报。
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
   * 枚举，扫描结果上报类型。
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
     * 扫描到符合过滤条件的BLE广播报文时，触发上报，可搭配常规和围栏上报模式使用。
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
     * 当不再扫描到符合过滤条件的BLE广播报文时，触发上报，只搭配围栏上报模式使用。 
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
     * 扫描到符合过滤条件的BLE广播报文时，以[ScanOptions]{@link ble.ScanOptions}中的interval字段为周期触发上报，只搭配批量上报模式（
     * [BATCH]{@link ble.ScanReportMode}）使用。 
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    ON_BATCH = 3
  }

  /**
   * 枚举，指定当前设备的Profile协议类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 21 dynamic
   * @since 26.1.0 static
   */
  enum BleProfile {
    /**
     * 当前设备在GATT链路中同时作为client端和server端。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 21 dynamic
     * @since 26.1.0 static
     */
    GATT = 1,
    /**
     * 当前设备在GATT链路中作为client端。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 21 dynamic
     * @since 26.1.0 static
     */
    GATT_CLIENT = 2,
    /**
     * 当前设备在GATT链路中作为server端。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 21 dynamic
     * @since 26.1.0 static
     */
    GATT_SERVER = 3
  }

  /**
   * 枚举，连接参数类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 22 dynamic
   * @since 26.1.0 static
   */
  enum ConnectionParam {
    /**
     * 低功耗模式，传输数据速度慢，但功耗少。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    LOW_POWER = 1,
    /**
     * 均衡模式，平衡延迟和功耗，如果没有请求连接参数更新，这是默认值。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    BALANCED = 2,
    /**
     * 高速率模式，传输数据速度快，但功耗多。
     * 
     *  当需要快速传输大量数据时应采用该连接参数，传输完成后，应请求BALANCED连接参数，以减少功耗。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    HIGH = 3
  }

  /**
   * 枚举，连接与广播的物理通道类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  enum BlePhy {
    /**
     * 1M物理通道类型，理论数据速率为1Mbit/s。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    BLE_PHY_1M = 1,
    /**
     * 2M物理通道类型，理论数据速率为2Mbit/s。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    BLE_PHY_2M = 2,
    /**
     * CODED物理通道类型，适用于低速但覆盖范围广的场景。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    BLE_PHY_CODED = 3
  }
  /**
   * 枚举，BLE_PHY_CODED类型下的编码方式。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  enum CodedPhyMode {
    /**
     * 每发送1位有效数据，会添加1位冗余信息。传输速度较快，抗干扰较强，适合中等距离（10 - 100m），理论数据速率为500Kbit/s。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    BLE_PHY_CODED_S2 = 1,
    /**
     * 每发送1位有效数据，会添加7位冗余信息。传输速度较慢，抗干扰更强，适合远距离（100 - 300m），理论数据速率为125Kbit/s。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    BLE_PHY_CODED_S8 = 2
  }

  /**
   * 枚举，高性能扫描模式配置。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  enum EnhanceMode {
    /**
     * 平衡扫描性能和蓝牙其他业务性能。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    BLE_SCAN_ENHANCE_MODE_BALANCED = 0,
    /**
     * 尽量保障扫描性能，对蓝牙其他业务性能有一定影响。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    BLE_SCAN_ENHANCE_MODE_MEDIUM = 1,
    /**
     * 优先保障扫描速度，对蓝牙其他业务有一定影响。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    BLE_SCAN_ENHANCE_MODE_FAST = 2,
    /**
     * 全力保障扫描速度，对蓝牙其他业务有较大影响。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    BLE_SCAN_ENHANCE_MODE_ULTRA_FAST = 3
  }
}

export default ble;