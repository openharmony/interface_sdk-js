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
 * @file 蓝牙access模块
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * 本模块提供了打开和关闭蓝牙、获取蓝牙开关状态以及其他相关方法。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @crossplatform [since 13]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace access {
  /**
   * 开启蓝牙。
   * 
   * 调用该接口时，系统弹出开启蓝牙的对话框，由用户确认是否需要开启蓝牙。如果应用想要感知用户操作对话框的行为，
   * 建议使用[access.enableBluetoothAsync]{@link access.enableBluetoothAsync}。
   * 蓝牙开关状态结果可通过
   * [access.on('stateChange')]{@link access.on(type: 'stateChange', callback: Callback<BluetoothState>)}的回调函数获取到。
   * 建议蓝牙开关状态是[STATE_OFF]{@link access.BluetoothState}时，
   * 才调用该接口开启蓝牙（可使用[access.getState]{@link access.getState}判断当前蓝牙开关状态）。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function enableBluetooth(): void;

  /**
   * 关闭蓝牙。
   * 
   * 调用该接口时，系统弹出关闭蓝牙的对话框，由用户确认是否需要关闭蓝牙。如果应用想要感知用户操作对话框的行为，
   * 建议使用[access.disableBluetoothAsync]{@link access.disableBluetoothAsync}。
   * 蓝牙开关状态结果可通过
   * [access.on('stateChange')]{@link access.on(type: 'stateChange', callback: Callback<BluetoothState>)}的回调函数获取到。
   * 建议蓝牙开关状态是[STATE_ON]{@link access.BluetoothState}时，
   * 才调用该接口关闭蓝牙（可使用[access.getState]{@link access.getState}判断当前蓝牙开关状态）。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function disableBluetooth(): void;

  /**
   * 开启蓝牙。使用Promise异步回调。
   * 
   * 调用该接口时，系统弹出开启蓝牙的对话框，由用户确认是否需要开启蓝牙。应用可以感知用户操作对话框的行为。
   * 蓝牙开关状态结果可通过
   * [access.on('stateChange')]{@link access.on(type: 'stateChange', callback: Callback<BluetoothState>)}的回调函数获取到。
   * 建议蓝牙开关状态是[STATE_OFF]{@link access.BluetoothState}时，
   * 才调用该接口开启蓝牙（可使用[access.getState]{@link access.getState}判断当前蓝牙开关状态）。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900013 - The user does not respond.
   * @throws { BusinessError } 2900014 - User refuse the action.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function enableBluetoothAsync(): Promise<void>;

  /**
   * 关闭蓝牙。使用Promise异步回调。
   * 
   * 调用该接口时，系统弹出关闭蓝牙的对话框，由用户确认是否需要关闭蓝牙。应用可以感知用户操作对话框的行为。
   * 蓝牙开关状态结果可通过[access.on('stateChange')]{@link access.on(type: 'stateChange', callback: Callback<BluetoothState>)}的回
   * 调函数获取到。
   * 建议蓝牙开关状态是[STATE_ON]{@link access.BluetoothState}时，才调用该接口关闭蓝牙（可使用[access.getState]{@link access.getState}判断当前蓝牙开关状
   * 态）。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900013 - The user does not respond.
   * @throws { BusinessError } 2900014 - User refuse the action.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function disableBluetoothAsync(): Promise<void>;

  /**
   * 将用户操作蓝牙对话框的行为通知给蓝牙服务。使用Promise异步回调。
   * 
   * 与API version 20开始支持的[access.enableBluetoothAsync]{@link access.enableBluetoothAsync}搭配使用，应用申请开启蓝牙，调用该接口会将用户操作开关蓝牙
   * 对话框的行为通知给蓝牙服务。
   * 与API version 20开始支持的[access.disableBluetoothAsync]{@link access.disableBluetoothAsync}搭配使用，应用申请关闭蓝牙，调用该接口会将用户操作开关
   * 蓝牙对话框的行为通知给蓝牙服务。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { NotifyDialogResultParams } notifyDialogResultParams - 用户操作对话框的行为。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function notifyDialogResult(notifyDialogResultParams: NotifyDialogResultParams): Promise<void>;

  /**
   * 约束当前蓝牙设备的BR/EDR能力，约束后设备的经典蓝牙功能将受限，适用于仅需使用低功耗蓝牙的场景。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function restrictBluetooth(): Promise<void>;

  /**
   * 获取蓝牙开关状态。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 12]
   * @returns { BluetoothState } 表示蓝牙开关状态。
   * @throws { BusinessError } 201 - Permission denied. [since 10 - 12]
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function getState(): BluetoothState;

  /**
   * 恢复蓝牙出厂设置。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { AsyncCallback<void> } callback - 回调函数。当恢复蓝牙出厂设置成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function factoryReset(callback: AsyncCallback<void>): void;

  /**
   * 恢复蓝牙出厂设置。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function factoryReset(): Promise<void>;

  /**
   * 获取本端设备的蓝牙地址。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.GET_BLUETOOTH_LOCAL_MAC
   * @returns { string } 本端设备的蓝牙地址。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getLocalAddress(): string;

  /**
   * 查询本机是否支持蓝牙能力。
   *
   * @returns { boolean } 查询本机是否支持蓝牙能力。true 表示本机支持蓝牙能力，false 表示本机不支持蓝牙能力。
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function isBluetoothSupported(): boolean;

  /**
   * 订阅本端蓝牙开关状态变化事件。使用Callback异步回调。从API18开始不再校验ohos.permission.ACCESS_BLUETOOTH权限。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 17]
   * @param { 'stateChange' } type - 事件回调类型，支持的事件为'stateChange'，表示蓝牙开关状态变化事件。
   *     如：当调用[access.enableBluetooth]{@link access.enableBluetooth}或
   *     [access.disableBluetooth]{@link access.disableBluetooth}时，可触发该事件。
   * @param { Callback<BluetoothState> } callback - 指定订阅的回调函数，会携带蓝牙开关状态。
   * @throws { BusinessError } 201 - Permission denied. [since 10 - 17]
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function on(type: 'stateChange', callback: Callback<BluetoothState>): void;

  /**
   * 订阅本端蓝牙开关状态变化事件。使用Callback异步回调。从API18开始不再校验ohos.permission.ACCESS_BLUETOOTH权限。
   *
   * @param { Callback<BluetoothState> } callback - 指定订阅的回调函数，会携带蓝牙开关状态。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 23 static
   */
  function onStateChange(callback: Callback<BluetoothState>): void;

  /**
   * 取消订阅本端蓝牙开关状态变化事件。从API18开始不再校验ohos.permission.ACCESS_BLUETOOTH权限。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 17]
   * @param { 'stateChange' } type - 事件回调类型，支持的事件为'stateChange'，表示蓝牙开关状态变化事件。
   * @param { Callback<BluetoothState> } callback - 指定取消订阅的回调函数通知。
   *     若传参，则需与[access.on('stateChange')]{@link access.on(type: 'stateChange', callback: Callback<BluetoothState>)}
   *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
   * @throws { BusinessError } 201 - Permission denied. [since 10 - 17]
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function off(type: 'stateChange', callback?: Callback<BluetoothState>): void;

  /**
   * 取消订阅本端蓝牙开关状态变化事件。从API18开始不再校验ohos.permission.ACCESS_BLUETOOTH权限。
   *
   * @param { Callback<BluetoothState> } [callback] - 指定取消订阅的回调函数通知。
   *     若传参，则需与[access.onStateChange]{@link access.onStateChange(callback: Callback<BluetoothState>)}
   *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 23 static
   */
  function offStateChange(callback?: Callback<BluetoothState>): void;

  /**
   * 持久化存储蓝牙设备的虚拟MAC地址。使用Promise异步回调。
   * 
   * 应用通过蓝牙相关接口，如扫描等途径获取到的设备地址（虚拟MAC地址）和实际的设备MAC地址不同。蓝牙子系统会保存一个虚拟MAC地址和实际设备MAC地址的映射关系。若应用想长期对该蓝牙设备进行操作使用，建议用此接口持久化存储该设
   * 备的虚拟MAC地址，后续可直接使用，该地址映射关系不会再改变。
   * 指定持久化存储的虚拟MAC地址需是有效的（可使用[access.isValidRandomDeviceId]{@link access.isValidRandomDeviceId}判断）。
   * 使用该接口时，开发者应确保该虚拟MAC地址对应的对端蓝牙设备实际地址是保持不变的，若对端设备实际地址发生变化，持久化存储的地址信息将失效，无法继续使用。
   * 可调用[access.deletePersistentDeviceId]{@link access.deletePersistentDeviceId}删除已持久化存储的虚拟MAC地址。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC
   * @param { string } deviceId - 对端设备的虚拟MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   *     该地址一般来源于蓝牙扫描结果，如：可通过调用
   *     [startScan]{@link @ohos.bluetooth.ble:ble.BleScanner.startScan(filters: Array<ScanFilter>, options?: ScanOptions)}
   *     或[connection.startBluetoothDiscovery]{@link @ohos.bluetooth.connection:connection.startBluetoothDiscovery}扫描得到。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of supported device addresses has reached the upper limit.
   * @throws { BusinessError } 2900099 - Add persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16 dynamic
   * @since 23 static
   */
  function addPersistentDeviceId(deviceId: string): Promise<void>;

  /**
   * 删除已持久化存储的蓝牙虚拟MAC地址。使用Promise异步回调。
   * 
   * 该虚拟MAC地址通过[access.addPersistentDeviceId]{@link access.addPersistentDeviceId}持久化存储。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC
   * @param { string } deviceId - 对端设备的虚拟MAC地址，例如："XX:XX:XX:XX:XX:XX"，
   *     该地址一般来源于蓝牙扫描结果，如：通过调用
   *     [startScan]{@link @ohos.bluetooth.ble:ble.BleScanner.startScan(filters: Array<ScanFilter>, options?: ScanOptions)}
   *     或[connection.startBluetoothDiscovery]{@link @ohos.bluetooth.connection:connection.startBluetoothDiscovery}扫描得到。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - delete persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16 dynamic
   * @since 23 static
   */
  function deletePersistentDeviceId(deviceId: string): Promise<void>;

  /**
   * 获取应用持久化存储过的蓝牙虚拟MAC地址。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC
   * @returns { string[] } 持久化存储过的蓝牙虚拟MAC地址列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Get persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16 dynamic
   * @since 23 static
   */
  function getPersistentDeviceIds(): string[];

  /**
   * 判断对端蓝牙设备的虚拟MAC地址是否有效。
   * 
   * 有效的虚拟MAC地址一般来源于蓝牙扫描结果，如：通过调用
   * [startScan]{@link @ohos.bluetooth.ble:ble.BleScanner.startScan(filters: Array<ScanFilter>, options?: ScanOptions)}或
   * [connection.startBluetoothDiscovery]{@link @ohos.bluetooth.connection:connection.startBluetoothDiscovery}扫描得到。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 对端设备的虚拟MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { boolean } 蓝牙设备的虚拟MAC地址是否是有效的。true表示有效地址，false表示无效地址。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Check persistent device address failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 16 dynamic
   * @since 23 static
   */
  function isValidRandomDeviceId(deviceId: string): boolean;

  /**
   * 将指定格式的的UUID转换为128bit的UUID。
   * 
   * 常用的UUID格式主要包括16bit、32bit和128bit三种格式。蓝牙协议定义的128bit格式的基准UUID为：00000000-0000-1000-8000-00805f9b34fb。若输入16bit或者32bit的
   * UUID，将基于蓝牙基准UUID进行转换。若输入128bit的UUID，将不做转换直接输出该UUID。
   * 
   * 若输入16bit的UUID，例如“1801”，将输出“00001801-0000-1000-8000-00805f9b34fb”。
   * 若输入32bit的UUID，例如“12341801”，将输出“12341801-0000-1000-8000-00805f9b34fb”。
   * 若输入128bit的UUID，例如“11112222-3333-4444-5555-666677778888”，将直接输出该UUID。
   * 若输入不符合以上格式的UUID或包含非16进制范围内的字符，将返回401错误码。
   *
   * @param { string } uuid - 16bit、32bit、128bit的UUID。
   * @returns { string } 转换后的128bit的UUID。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  function convertUuid(uuid: string): string;

  /**
   * 枚举，蓝牙开关状态。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum BluetoothState {
    /**
     * 表示蓝牙已关闭。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_OFF = 0,
    /**
     * 表示蓝牙正在打开。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_TURNING_ON = 1,
    /**
     * 表示蓝牙已打开。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_ON = 2,
    /**
     * 表示蓝牙正在关闭。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_TURNING_OFF = 3,
    /**
     * 表示蓝牙正在打开LE-only模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_BLE_TURNING_ON = 4,
    /**
     * 表示蓝牙正处于LE-only模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_BLE_ON = 5,
    /**
     * 表示蓝牙正在关闭LE-only模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_BLE_TURNING_OFF = 6
  }

  /**
   * 用户操作对话框的行为。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface NotifyDialogResultParams {
    /**
     * 表示对话框的类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dialogType: DialogType;
    /**
     * 表示用户操作对话框的行为。true表示用户同意该操作，false表示拒绝该操作。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dialogResult: boolean;
  }

  /**
   * 枚举，对话框类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum DialogType {
    /**
     * 蓝牙开关对话框。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    BLUETOOTH_SWITCH = 0
  }
}

export default access;