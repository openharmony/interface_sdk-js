/*
 * Copyright (C) 2021-2022 Huawei Device Co., Ltd.
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
 * @file 蓝牙
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * 蓝牙模块提供了基础的传统蓝牙能力以及BLE的扫描、广播等功能。
 * 
 * 从API Version 9 开始，该接口不再维护，推荐使用[@ohos.bluetooth.ble (蓝牙ble模块)]{@link @ohos.bluetooth.ble:ble}等相关Profile接口。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.bluetoothManager
 */
declare namespace bluetooth {
  /**
   * 获取蓝牙开关状态。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @returns { BluetoothState } 表示蓝牙开关状态。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.getState
   */
  function getState(): BluetoothState;

  /**
   * 获取蓝牙本端的Profile连接状态，例如：任意一个支持的Profile连接状态为已连接，则此接口返回状态为已连接。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @returns { ProfileConnectionState } 表示蓝牙设备的Profile连接状态。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.getBtConnectionState
   */
  function getBtConnectionState(): ProfileConnectionState;

  /**
   * 发起蓝牙配对。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.DISCOVER_BLUETOOTH
   * @param { string } deviceId - 表示配对的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { boolean } 发起蓝牙配对，成功返回true，否则返回false。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.pairDevice
   */
  function pairDevice(deviceId: string): boolean;

  /**
   * 删除配对的远程设备。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.DISCOVER_BLUETOOTH
   * @param { string } deviceId - 表示要删除的远程设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { boolean } 启动取消配对，成功返回true，否则返回false。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.cancelPairedDevice
   */
  function cancelPairedDevice(deviceId: string): boolean;

  /**
   * 获取对端蓝牙设备的名称。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { string } deviceId - 表示远程设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { string } 以字符串格式返回设备名称。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.getRemoteDeviceName
   */
  function getRemoteDeviceName(deviceId: string): string;

  /**
   * 获取对端蓝牙设备的类别。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { string } deviceId - 表示远程设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { DeviceClass } 远程设备的类别。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.getRemoteDeviceClass
   */
  function getRemoteDeviceClass(deviceId: string): DeviceClass;

  /**
   * 开启蓝牙。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.DISCOVER_BLUETOOTH
   * @returns { boolean } 打开蓝牙，成功返回true，否则返回false。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.enableBluetooth
   */
  function enableBluetooth(): boolean;

  /**
   * 关闭蓝牙。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.DISCOVER_BLUETOOTH
   * @returns { boolean } 关闭蓝牙，成功返回true，否则返回false。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.disableBluetooth
   */
  function disableBluetooth(): boolean;

  /**
   * 获取蓝牙本地设备名称。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @returns { string } 蓝牙本地设备名称。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.getLocalName
   */
  function getLocalName(): string;

  /**
   * 获取蓝牙配对列表。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @returns { Array<string> } 已配对蓝牙设备的地址列表。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.getPairedDevices
   */
  function getPairedDevices(): Array<string>;

  /**
   * 依据ProfileId获取指定profile的连接状态。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { ProfileId } profileId - 表示profile的枚举值，例如：PROFILE_A2DP_SOURCE。
   * @returns { ProfileConnectionState } profile的连接状态。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.getProfileConnectionState
   */
  function getProfileConnState(profileId: ProfileId): ProfileConnectionState;

  /**
   * 设置设备配对请求确认。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.MANAGE_BLUETOOTH
   * @param { string } device - 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { boolean } accept - 接受配对请求设置为true，否则设置为false。
   * @returns { boolean } 设置设备配对确认，成功返回true，否则返回false。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.setDevicePairingConfirmation
   */
  function setDevicePairingConfirmation(device: string, accept: boolean): boolean;

  /**
   * 设置蓝牙本地设备名称。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.DISCOVER_BLUETOOTH
   * @param { string } name - 要设置的蓝牙名称，最大长度为248字节数。
   * @returns { boolean } 设置蓝牙本地设备名称，成功返回true，否则返回false。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.setLocalName
   */
  function setLocalName(name: string): boolean;

  /**
   * 设置蓝牙扫描模式，可以被远端设备发现。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { ScanMode } mode - 蓝牙扫描模式。
   * @param { number } duration - 设备可被发现的持续时间，单位为毫秒；设置为0则持续可发现。
   * @returns { boolean } 设置蓝牙扫描，成功返回true，否则返回false。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.setBluetoothScanMode
   */
  function setBluetoothScanMode(mode: ScanMode, duration: number): boolean;

  /**
   * 获取蓝牙扫描模式。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @returns { ScanMode } 蓝牙扫描模式。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.getBluetoothScanMode
   */
  function getBluetoothScanMode(): ScanMode;

  /**
   * 开启蓝牙扫描，可以发现远端设备。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.DISCOVER_BLUETOOTH and ohos.permission.LOCATION
   * @returns { boolean } 开启蓝牙扫描，成功返回true，否则返回false。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.startBluetoothDiscovery
   */
  function startBluetoothDiscovery(): boolean;

  /**
   * 关闭蓝牙扫描。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.DISCOVER_BLUETOOTH
   * @returns { boolean } 关闭蓝牙扫描，成功返回true，否则返回false。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.stopBluetoothDiscovery
   */
  function stopBluetoothDiscovery(): boolean;

  /**
   * 订阅蓝牙设备发现上报事件。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { 'bluetoothDeviceFind' } type - 填写"bluetoothDeviceFind"字符串，表示蓝牙设备发现事件。
   * @param { Callback<Array<string>> } callback - 表示回调函数的入参，发现的设备集合。回调函数由用户创建通过该接口注册。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.on#event:bluetoothDeviceFind
   */
  function on(type: 'bluetoothDeviceFind', callback: Callback<Array<string>>): void;

  /**
   * 取消订阅蓝牙设备发现上报事件。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { 'bluetoothDeviceFind' } type - 填写"bluetoothDeviceFind"字符串，表示蓝牙设备发现事件。
   * @param { Callback<Array<string>> } callback - 表示取消订阅蓝牙设备发现事件上报。不填该参数则取消订阅该type对应的所有回调。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.off#event:bluetoothDeviceFind
   */
  function off(type: 'bluetoothDeviceFind', callback?: Callback<Array<string>>): void;

  /**
   * 订阅蓝牙配对状态改变事件。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { 'bondStateChange' } type - 填写"bondStateChange"字符串，表示蓝牙配对状态改变事件。
   * @param { Callback<BondStateParam> } callback - 表示回调函数的入参，配对的状态。回调函数由用户创建通过该接口注册。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.on#event:bondStateChange
   */
  function on(type: 'bondStateChange', callback: Callback<BondStateParam>): void;

  /**
   * 取消订阅蓝牙配对状态改变事件。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { 'bondStateChange' } type - 填写"bondStateChange"字符串，表示蓝牙配对状态改变事件。
   * @param { Callback<BondStateParam> } callback - 表示取消订阅蓝牙配对状态改变事件上报。不填该参数则取消订阅该type对应的所有回调。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.off#event:bondStateChange
   */
  function off(type: 'bondStateChange', callback?: Callback<BondStateParam>): void;

  /**
   * 订阅远端蓝牙设备的配对请求事件。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.DISCOVER_BLUETOOTH
   * @param { 'pinRequired' } type - 填写"pinRequired"字符串，表示配对请求事件。
   * @param { Callback<PinRequiredParam> } callback - 表示回调函数的入参，配对请求。回调函数由用户创建通过该接口注册。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.on#event:pinRequired
   */
  function on(type: 'pinRequired', callback: Callback<PinRequiredParam>): void;

  /**
   * 取消订阅远端蓝牙设备的配对请求事件。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.DISCOVER_BLUETOOTH
   * @param { 'pinRequired' } type - 填写"pinRequired"字符串，表示配对请求事件。
   * @param { Callback<PinRequiredParam> } callback - 表示取消订阅蓝牙配对请求事件上报，入参为配对请求参数。不填该参数则取消订阅该type对应的所有回调。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.off#event:pinRequired
   */
  function off(type: 'pinRequired', callback?: Callback<PinRequiredParam>): void;

  /**
   * 订阅蓝牙连接状态改变事件。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { 'stateChange' } type - 填写"stateChange"字符串，表示蓝牙状态改变事件。
   * @param { Callback<BluetoothState> } callback - 表示回调函数的入参，蓝牙状态。回调函数由用户创建通过该接口注册。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.on#event:stateChange
   */
  function on(type: 'stateChange', callback: Callback<BluetoothState>): void;

  /**
   * 取消订阅蓝牙连接状态改变事件。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { 'stateChange' } type - 填写"stateChange"字符串，表示蓝牙状态改变事件。
   * @param { Callback<BluetoothState> } callback - 表示取消订阅蓝牙状态改变事件上报。不填该参数则取消订阅该type对应的所有回调。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.off#event:stateChange
   */
  function off(type: 'stateChange', callback?: Callback<BluetoothState>): void;

  /**
   * 创建一个服务端监听Socket。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { string } name - 服务的名称。
   * @param { SppOption } option - spp监听配置参数。
   * @param { AsyncCallback<number> } callback - 表示回调函数的入参，服务端Socket的id。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.sppListen
   */
  function sppListen(name: string, option: SppOption, callback: AsyncCallback<number>): void;

  /**
   * 服务端监听socket等待客户端连接。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @param { number } serverSocket - 服务端socket的id。
   * @param { AsyncCallback<number> } callback - 表示回调函数的入参，客户端socket的id。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.sppAccept
   */
  function sppAccept(serverSocket: number, callback: AsyncCallback<number>): void;

  /**
   * 客户端向远端设备发起spp连接。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.USE_BLUETOOTH
   * @param { string } device - 对端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { SppOption } option - spp客户端连接配置参数。
   * @param { AsyncCallback<number> } callback - 表示回调函数的入参，客户端socket的id。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.sppConnect
   */
  function sppConnect(device: string, option: SppOption, callback: AsyncCallback<number>): void;

  /**
   * 关闭服务端监听Socket，入参socket由sppListen接口返回。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @param { number } socket - 服务端监听socket的id。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.sppCloseServerSocket
   */
  function sppCloseServerSocket(socket: number): void;

  /**
   * 关闭客户端socket，入参socket由sppAccept或sppConnect接口获取。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @param { number } socket - 客户端socket的id。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.sppCloseClientSocket
   */
  function sppCloseClientSocket(socket: number): void;

  /**
   * 通过socket向远端发送数据，入参clientSocket由sppAccept或sppConnect接口获取 。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @param { number } clientSocket - 客户端socket的id。
   * @param { ArrayBuffer } data - 写入的数据。
   * @returns { boolean } 写数据操作，成功返回true，否则返回false。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.sppWrite
   */
  function sppWrite(clientSocket: number, data: ArrayBuffer): boolean;

  /**
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   * 订阅spp读请求事件，入参clientSocket由sppAccept或sppConnect接口获取。
   *
   * @param { 'sppRead' } type - 填写"sppRead"字符串，表示spp读请求事件。
   * @param { number } clientSocket - 客户端socket的id。
   * @param { Callback<ArrayBuffer> } callback - 表示回调函数的入参，读取到的数据。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.on#event:sppRead
   */
  function on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>): void;

  /**
   * 取消订阅spp读请求事件，入参clientSocket由sppAccept或sppConnect接口获取。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @param { 'sppRead' } type - 填写"sppRead"字符串，表示spp读请求事件。
   * @param { number } clientSocket - 客户端Socket的id。
   * @param { Callback<ArrayBuffer> } callback - 表示取消订阅spp读请求事件上报。不填该参数则取消订阅该type对应的所有回调。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.off#event:sppRead
   */
  function off(type: 'sppRead', clientSocket: number, callback?: Callback<ArrayBuffer>): void;

  /**
   * 通过ProfileId，获取profile的对象实例。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @param { ProfileId } profileId - 表示profile的枚举值，例如：PROFILE_A2DP_SOURCE。
   * @returns { A2dpSourceProfile | HandsFreeAudioGatewayProfile } 对应的profile的对象实例，当前支持A2dpSourceProfile，
   *     HandsFreeAudioGatewayProfile。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.getProfileInstance
   */
  function getProfile(profileId: ProfileId): A2dpSourceProfile | HandsFreeAudioGatewayProfile;

  /**
   * profile基类。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.BaseProfile
   */
  interface BaseProfile {
    /**
     * 获取已连接设备列表。
     * 
     * 从API version 8开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { Array<string> } 返回已连接设备的地址列表。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BaseProfile#getConnectionDevices
     */
    getConnectionDevices(): Array<string>;

    /**
     * 获取设备profile的连接状态。
     * 
     * 从API version 8开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { string } device - 远端设备地址。
     * @returns { ProfileConnectionState } 返回profile的连接状态。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BaseProfile#getDeviceState
     */
    getDeviceState(device: string): ProfileConnectionState;
  }

  /**
   * 使用A2dpSourceProfile方法之前需要创建该类的实例进行操作，通过getProfile()方法构造此实例。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile
   */
  interface A2dpSourceProfile extends BaseProfile {
    /**
     * 发起设备的A2dp服务连接请求。
     * 
     * 从API version 8开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @param { string } device - 远端设备地址。
     * @returns { boolean } 成功返回true，失败返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile#connect
     */
    connect(device: string): boolean;

    /**
     * 断开设备的a2dp服务连接。
     * 
     * 从API version 8开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @param { string } device - 远端设备地址。
     * @returns { boolean } 成功返回true，失败返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile#disconnect
     */
    disconnect(device: string): boolean;

    /**
     * 订阅a2dp连接状态变化事件。
     * 
     * 从API version 8开始支持，从API version 9开始废弃。
     *
     * @param { 'connectionStateChange' } type - 填写"connectionStateChange"字符串，表示连接状态变化事件。
     * @param { Callback<StateChangeParam> } callback - 表示回调函数的入参。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile.on#event:connectionStateChange
     */
    on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void;

    /**
     * 取消订阅a2dp连接状态变化事件。
     * 
     * 从API version 8开始支持，从API version 9开始废弃。
     *
     * @param { 'connectionStateChange' } type - 填写"connectionStateChange"字符串，表示连接状态变化事件。
     * @param { Callback<StateChangeParam> } callback - 表示回调函数的入参。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile.off#event:connectionStateChange
     */
    off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void;

    /**
     * 获取设备的播放状态。
     * 
     * 从API version 8开始支持，从API version 9开始废弃。
     *
     * @param { string } device - 远端设备地址。
     * @returns { PlayingState } 远端设备的播放状态。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile#getPlayingState
     */
    getPlayingState(device: string): PlayingState;
  }

  /**
   * 使用HandsFreeAudioGatewayProfile方法之前需要创建该类的实例进行操作，通过getProfile()方法构造此实例。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.HandsFreeAudioGatewayProfile
   */
  interface HandsFreeAudioGatewayProfile extends BaseProfile {
    /**
     * 连接设备的HFP服务。
     * 
     * 从API version 8开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @param { string } device - 远端设备地址。
     * @returns { boolean } 成功返回true，失败返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.HandsFreeAudioGatewayProfile#connect
     */
    connect(device: string): boolean;

    /**
     * 断开连接设备的HFP服务。
     * 
     * 从API version 8开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @param { string } device - 远端设备地址。
     * @returns { boolean } 成功返回true，失败返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.HandsFreeAudioGatewayProfile#disconnect
     */
    disconnect(device: string): boolean;

    /**
     * 订阅HFP连接状态变化事件。
     * 
     * 从API version 8开始支持，从API version 9开始废弃。
     *
     * @param { 'connectionStateChange' } type - 填写"connectionStateChange"字符串，表示连接状态变化事件。
     * @param { Callback<StateChangeParam> } callback - 表示回调函数的入参。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.HandsFreeAudioGatewayProfile.on#event:connectionStateChange
     */
    on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void;

    /**
     * 取消订阅HFP连接状态变化事件。
     * 
     * 从API version 8开始支持，从API version 9开始废弃。
     *
     * @param { 'connectionStateChange' } type - 填写"connectionStateChange"字符串，表示连接状态变化事件。
     * @param { Callback<StateChangeParam> } callback - 表示回调函数的入参。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.HandsFreeAudioGatewayProfile.off#event:connectionStateChange
     */
    off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void;
  }

  /**
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.BLE
   */
  namespace BLE {
    /**
     * 创建一个可使用的GattServer实例。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @returns { GattServer } server端类，使用server端方法之前需要创建该类的实例进行操作。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLE.createGattServer
     */
    function createGattServer(): GattServer;

    /**
     * 创建一个可使用的GattClientDevice实例。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @param { string } deviceId - 对端设备地址， 例如："XX:XX:XX:XX:XX:XX"。
     * @returns { GattClientDevice } client端类，使用client端方法之前需要创建该类的实例进行操作。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLE.createGattClientDevice
     */
    function createGattClientDevice(deviceId: string): GattClientDevice;

    /**
     * 获取和当前设备连接的BLE设备。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { Array<string> } 返回当前设备作为Server端时连接BLE设备地址集合。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLE.getConnectedBLEDevices
     */
    function getConnectedBLEDevices(): Array<string>;

    /**
     * 发起BLE扫描流程。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH and ohos.permission.LOCATION
     * @param { Array<ScanFilter> } filters - 表示扫描结果过滤策略集合，如果不使用过滤的方式，该参数设置为null。
     * @param { ScanOptions } options - 表示扫描的参数配置，可选参数。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLE.startBLEScan
     */
    function startBLEScan(filters: Array<ScanFilter>, options?: ScanOptions): void;

    /**
     * 停止BLE扫描流程。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLE.stopBLEScan
     */
    function stopBLEScan(): void;

    /**
     * 订阅BLE设备发现上报事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - 填写"BLEDeviceFind"字符串，表示BLE设备发现事件。
     * @param { Callback<Array<ScanResult>> } callback - 表示回调函数的入参，发现的设备集合。回调函数由用户创建通过该接口注册。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLE.on#event:BLEDeviceFind
     */
    function on(type: 'BLEDeviceFind', callback: Callback<Array<ScanResult>>): void;

    /**
     * 取消订阅BLE设备发现上报事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - 填写"BLEDeviceFind"字符串，表示BLE设备发现事件。
     * @param { Callback<Array<ScanResult>> } callback - 表示取消订阅BLE设备发现事件上报。不填该参数则取消订阅该type对应的所有回调。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLE.off#event:BLEDeviceFind
     */
    function off(type: 'BLEDeviceFind', callback?: Callback<Array<ScanResult>>): void;
  }

  /**
   * server端类，使用server端方法之前需要创建该类的实例进行操作，通过createGattServer()方法构造此实例。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer
   */
  interface GattServer {
    /**
     * 开始发送BLE广播。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @param { AdvertiseSetting } setting - BLE广播的相关参数。
     * @param { AdvertiseData } advData - BLE广播包内容。
     * @param { AdvertiseData } advResponse - BLE回复扫描请求回复响应。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer#startAdvertising
     */
    startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void;

    /**
     * 停止发送BLE广播。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer#stopAdvertising
     */
    stopAdvertising(): void;

    /**
     * server端添加服务。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { GattService } service - 服务端的service数据。BLE广播的相关参数
     * @returns { boolean } 添加服务操作，成功返回true，否则返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer#addService
     */
    addService(service: GattService): boolean;

    /**
     * 删除已添加的服务。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { string } serviceUuid - service的UUID，例如“00001810-0000-1000-8000-00805F9B34FB”。
     * @returns { boolean } 删除服务操作，成功返回true，否则返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer#removeService
     */
    removeService(serviceUuid: string): boolean;

    /**
     * 关闭服务端功能，注销server在协议栈的注册，调用该接口后[GattServer]{@link bluetooth.GattServer}实例将不能再使用。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer#close
     */
    close(): void;

    /**
     * server端特征值发生变化时，主动通知已连接的client设备。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { string } deviceId - 接收通知的client端设备地址，例如“XX:XX:XX:XX:XX:XX”。
     * @param { NotifyCharacteristic } notifyCharacteristic - 通知的特征值数据。
     * @returns { boolean } 通知操作，成功返回true，否则返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer#notifyCharacteristicChanged
     */
    notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic): boolean;

    /**
     * server端回复client端的读写请求。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { ServerResponse } serverResponse - server端回复的响应数据。
     * @returns { boolean } 回复响应操作，成功返回true，否则返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer#sendResponse
     */
    sendResponse(serverResponse: ServerResponse): boolean;

    /**
     * server端订阅特征值读请求事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'characteristicRead' } type - 填写"characteristicRead"字符串，表示特征值读请求事件。
     * @param { Callback<CharacteristicReadReq> } callback - 表示回调函数的入参，client端发送的读请求数据。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer.on#event:characteristicRead
     */
    on(type: 'characteristicRead', callback: Callback<CharacteristicReadReq>): void;

    /**
     * server端取消订阅特征值读请求事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'characteristicRead' } type - 填写"characteristicRead"字符串，表示特征值读请求事件。
     * @param { Callback<CharacteristicReadReq> } callback - 表示取消订阅特征值读请求事件上报。不填该参数则取消订阅该type对应的所有回调。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer.off#event:characteristicRead
     */
    off(type: 'characteristicRead', callback?: Callback<CharacteristicReadReq>): void;

    /**
     * server端订阅特征值写请求事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'characteristicWrite' } type - 填写"characteristicWrite"字符串，表示特征值写请求事件。
     * @param { Callback<CharacteristicWriteReq> } callback - 表示回调函数的入参，client端发送的写请求数据。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer.on#event:characteristicWrite
     */
    on(type: 'characteristicWrite', callback: Callback<CharacteristicWriteReq>): void;

    /**
     * server端取消订阅特征值写请求事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'characteristicWrite' } type - 填写"characteristicWrite"字符串，表示特征值写请求事件。
     * @param { Callback<CharacteristicWriteReq> } callback - 表示取消订阅特征值写请求事件上报。不填该参数则取消订阅该type对应的所有回调。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer.off#event:characteristicWrite
     */
    off(type: 'characteristicWrite', callback?: Callback<CharacteristicWriteReq>): void;

    /**
     * server端订阅描述符读请求事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'descriptorRead' } type - 填写"descriptorRead"字符串，表示描述符读请求事件。
     * @param { Callback<DescriptorReadReq> } callback - 表示回调函数的入参，client端发送的读请求数据。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer.on#event:descriptorRead
     */
    on(type: 'descriptorRead', callback: Callback<DescriptorReadReq>): void;

    /**
     * server端取消订阅描述符读请求事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'descriptorRead' } type - 填写"descriptorRead"字符串，表示描述符读请求事件。
     * @param { Callback<DescriptorReadReq> } callback - 表示取消订阅描述符读请求事件上报。不填该参数则取消订阅该type对应的所有回调。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer.off#event:descriptorRead
     */
    off(type: 'descriptorRead', callback?: Callback<DescriptorReadReq>): void;

    /**
     * server端订阅描述符写请求事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'descriptorWrite' } type - 填写"descriptorWrite"字符串，表示描述符写请求事件。
     * @param { Callback<DescriptorWriteReq> } callback - 表示回调函数的入参，client端发送的写请求数据。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer.on#event:descriptorWrite
     */
    on(type: 'descriptorWrite', callback: Callback<DescriptorWriteReq>): void;

    /**
     * server端取消订阅描述符写请求事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'descriptorWrite' } type - 填写"descriptorWrite"字符串，表示描述符写请求事件。
     * @param { Callback<DescriptorWriteReq> } callback - 表示取消订阅描述符写请求事件上报。不填该参数则取消订阅该type对应的所有回调。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer.off#event:descriptorWrite
     */
    off(type: 'descriptorWrite', callback?: Callback<DescriptorWriteReq>): void;

    /**
     * server端订阅BLE连接状态变化事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'connectStateChange' } type - 填写"connectStateChange"字符串，表示BLE连接状态变化事件。
     * @param { Callback<BLEConnectChangedState> } callback - 表示回调函数的入参，连接状态。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer.on#event:connectStateChange
     */
    on(type: 'connectStateChange', callback: Callback<BLEConnectChangedState>): void;

    /**
     * server端取消订阅BLE连接状态变化事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'connectStateChange' } type - 填写"connectStateChange"字符串，表示BLE连接状态变化事件。
     * @param { Callback<BLEConnectChangedState> } callback - 表示取消订阅BLE连接状态变化事件。不填该参数则取消订阅该type对应的所有回调。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattServer.off#event:connectStateChange
     */
    off(type: 'connectStateChange', callback?: Callback<BLEConnectChangedState>): void;
  }

  /**
   * client端类，使用client端方法之前需要创建该类的实例进行操作，通过createGattClientDevice(deviceId: string)方法构造此实例。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice
   */
  interface GattClientDevice {
    /**
     * client端发起连接远端蓝牙低功耗设备。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { boolean } 连接操作成功返回true，操作失败返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#connect
     */
    connect(): boolean;

    /**
     * client端断开与远端蓝牙低功耗设备的连接。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { boolean } 断开连接操作，成功返回true，操作失败返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#disconnect
     */
    disconnect(): boolean;

    /**
     * 关闭客户端功能，注销client在协议栈的注册，调用该接口后[GattClientDevice]{@link bluetooth.GattClientDevice}实例将不能再使用。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { boolean } 关闭操作，成功返回true，操作失败返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#close
     */
    close(): boolean;

    /**
     * client获取远端蓝牙低功耗设备名。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { AsyncCallback<string> } callback - client获取对端server设备名，通过注册回调函数获取。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#getDeviceName
     */
    getDeviceName(callback: AsyncCallback<string>): void;

    /**
     * client获取远端蓝牙低功耗设备名。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { Promise<string> } client获取对端server设备名，通过promise形式获取。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#getDeviceName
     */
    getDeviceName(): Promise<string>;

    /**
     * client端获取蓝牙低功耗设备的所有服务，即服务发现 。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { AsyncCallback<Array<GattService>> } callback - client进行服务发现，通过注册回调函数获取。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#getServices
     */
    getServices(callback: AsyncCallback<Array<GattService>>): void;

    /**
     * client端获取蓝牙低功耗设备的所有服务，即服务发现。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { Promise<Array<GattService>> } client进行服务发现，通过promise形式获取。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#getServices
     */
    getServices(): Promise<Array<GattService>>;

    /**
     * client端读取蓝牙低功耗设备特定服务的特征值。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 待读取的特征值。
     * @param { AsyncCallback<BLECharacteristic> } callback - client读取特征值，通过注册回调函数获取。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#readCharacteristicValue
     */
    readCharacteristicValue(characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>): void;

    /**
     * client端读取蓝牙低功耗设备特定服务的特征值。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 待读取的特征值。
     * @returns { Promise<BLECharacteristic> } - client读取特征值，通过promise形式获取。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#readCharacteristicValue
     */
    readCharacteristicValue(characteristic: BLECharacteristic): Promise<BLECharacteristic>;

    /**
     * client端读取蓝牙低功耗设备特定的特征包含的描述符。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { BLEDescriptor } descriptor - 待读取的描述符。
     * @param { AsyncCallback<BLEDescriptor> } callback - client读取描述符，通过注册回调函数获取。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#readDescriptorValue
     */
    readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>): void;

    /**
     * client端读取蓝牙低功耗设备特定的特征包含的描述符。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { BLEDescriptor } descriptor - 待读取的描述符。
     * @returns { Promise<BLEDescriptor> } - client读取描述符，通过promise形式获取。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#readDescriptorValue
     */
    readDescriptorValue(descriptor: BLEDescriptor): Promise<BLEDescriptor>;

    /**
     * client端向低功耗蓝牙设备写入特定的特征值。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 蓝牙设备特征对应的二进制值及其它参数。
     * @returns { boolean } 写特征值操作成功返回true，操作失败返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#writeCharacteristicValue
     */
    writeCharacteristicValue(characteristic: BLECharacteristic): boolean;

    /**
     * client端向低功耗蓝牙设备特定的描述符写入二进制数据。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { BLEDescriptor } descriptor - 蓝牙设备描述符的二进制值及其它参数。
     * @returns { boolean } 写描述符操作成功返回true，操作失败返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#writeDescriptorValue
     */
    writeDescriptorValue(descriptor: BLEDescriptor): boolean;

    /**
     * client获取远端蓝牙低功耗设备的信号强度 (Received Signal Strength Indication, RSSI)，调用
     * [connect]{@link bluetooth.A2dpSourceProfile.connect}接口连接成功后才能使用。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { AsyncCallback<number> } callback - 返回信号强度，单位 dBm，通过注册回调函数获取。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#getRssiValue
     */
    getRssiValue(callback: AsyncCallback<number>): void;

    /**
     * client获取远端蓝牙低功耗设备的信号强度 (Received Signal Strength Indication, RSSI)，调用
     * [connect]{@link bluetooth.A2dpSourceProfile.connect}接口连接成功后才能使用。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @returns { Promise<number> } 返回信号强度，单位 dBm，通过promise形式获取。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#getRssiValue
     */
    getRssiValue(): Promise<number>;

    /**
     * client协商远端蓝牙低功耗设备的最大传输单元（Maximum Transmission Unit, MTU），调用[connect]{@link bluetooth.A2dpSourceProfile.connect}接口
     * 连接成功后才能使用。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { number } mtu - 设置范围为22~512字节。
     * @returns { boolean } MTU协商操作成功返回true，操作失败返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#setBLEMtuSize
     */
    setBLEMtuSize(mtu: number): boolean;

    /**
     * 向服务端发送设置通知此特征值请求。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { BLECharacteristic } characteristic - 蓝牙低功耗特征。
     * @param { boolean } enable - 启用接收notify设置为true，否则设置为false。
     * @returns { boolean } 设置操作成功返回true，操作失败返回false。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice#setNotifyCharacteristicChanged
     */
    setNotifyCharacteristicChanged(characteristic: BLECharacteristic, enable: boolean): boolean;

    /**
     * 订阅蓝牙低功耗设备的特征值变化事件。需要先调用setNotifyCharacteristicChanged接口才能接收server端的通知。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'BLECharacteristicChange' } type - 填写"BLECharacteristicChange"字符串，表示特征值变化事件。
     * @param { Callback<BLECharacteristic> } callback - 表示蓝牙低功耗设备的特征值变化事件的回调函数。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice.on#event:BLECharacteristicChange
     */
    on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>): void;

    /**
     * 取消订阅蓝牙低功耗设备的特征值变化事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'BLECharacteristicChange' } type - 填写"BLECharacteristicChange"字符串，表示特征值变化事件。
     * @param { Callback<BLECharacteristic> } callback - 表示取消订阅蓝牙低功耗设备的特征值变化事件。不填该参数则取消订阅该type对应的所有回调。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice.off#event:BLECharacteristicChange
     */
    off(type: 'BLECharacteristicChange', callback?: Callback<BLECharacteristic>): void;

    /**
     * client端订阅蓝牙低功耗设备的连接状态变化事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - 填写"BLEConnectionStateChange"字符串，表示连接状态变化事件。
     * @param { Callback<BLEConnectChangedState> } callback - 表示连接状态，已连接或断开。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice.on#event:BLEConnectionStateChange
     */
    on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectChangedState>): void;

    /**
     * 取消订阅蓝牙低功耗设备的连接状态变化事件。
     * 
     * 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.USE_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - 填写"BLEConnectionStateChange"字符串，表示连接状态变化事件。
     * @param { Callback<BLEConnectChangedState> } callback - 表示取消订阅蓝牙低功耗设备的连接状态变化事件。不填该参数则取消订阅该type对应的所有回调。
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattClientDevice.off#event:BLEConnectionStateChange
     */
    off(type: 'BLEConnectionStateChange', callback?: Callback<BLEConnectChangedState>): void;
  }

  /**
   * 描述service的接口参数定义。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.GattService
   */
  interface GattService {
    /**
     * 特定服务（service）的UUID，例如：00001888-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattService.serviceUuid
     */
    serviceUuid: string;
    /**
     * 如果是主服务设置为true，否则设置为false。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattService.isPrimary
     */
    isPrimary: boolean;
    /**
     * 当前服务包含的特征列表。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattService.characteristics
     */
    characteristics: Array<BLECharacteristic>;
    /**
     * 当前服务依赖的其它服务。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.GattService.includeServices
     */
    includeServices?: Array<GattService>;
  }

  /**
   * 描述characteristic的接口参数定义 。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.BLECharacteristic
   */
  interface BLECharacteristic {
    /**
     * 特定服务（service）的UUID，例如：00001888-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLECharacteristic.serviceUuid
     */
    serviceUuid: string;
    /**
     * 特定特征（characteristic）的UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLECharacteristic.characteristicUuid
     */
    characteristicUuid: string;
    /**
     * 特征对应的二进制值。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLECharacteristic.characteristicValue
     */
    characteristicValue: ArrayBuffer;
    /**
     * 特定特征的描述符列表。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLECharacteristic.descriptors
     */
    descriptors: Array<BLEDescriptor>;
  }

  /**
   * 描述descriptor的接口参数定义 。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.BLEDescriptor
   */
  interface BLEDescriptor {
    /**
     * 特定服务（service）的UUID，例如：00001888-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLEDescriptor.serviceUuid
     */
    serviceUuid: string;
    /**
     * 特定特征（characteristic）的UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLEDescriptor.characteristicUuid
     */
    characteristicUuid: string;
    /**
     * 描述符（descriptor）的UUID，例如：00002902-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLEDescriptor.descriptorUuid
     */
    descriptorUuid: string;
    /**
     * 描述符对应的二进制值。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLEDescriptor.descriptorValue
     */
    descriptorValue: ArrayBuffer;
  }

  /**
   * 描述server端特征值变化时发送的特征通知参数定义。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic
   */
  interface NotifyCharacteristic {
    /**
     * 特定服务（service）的UUID，例如：00001888-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.serviceUuid
     */
    serviceUuid: string;
    /**
     * 特定特征（characteristic）的UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.characteristicUuid
     */
    characteristicUuid: string;
    /**
     * 特征对应的二进制值。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.characteristicValue
     */
    characteristicValue: ArrayBuffer;
    /**
     * 如果是notification则对端回复确认设置为true，如果是indication则对端不需要回复确认设置为false。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.confirm
     */
    confirm: boolean;
  }

  /**
   * 描述server端订阅后收到的特征值读请求事件参数结构。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicReadRequest
   */
  interface CharacteristicReadReq {
    /**
     * 表示发送特征值读请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicReadRequest.deviceId
     */
    deviceId: string;
    /**
     * 表示读请求的传输ID，server端回复响应时需填写相同的传输ID。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicReadRequest.transId
     */
    transId: number;
    /**
     * 表示读特征值数据的起始位置。例如：k表示从第k个字节开始读，server端回复响应时需填写相同的offset。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicReadRequest.offset
     */
    offset: number;
    /**
     * 特定特征（characteristic）的UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicReadRequest.characteristicUuid
     */
    characteristicUuid: string;
    /**
     * 特定服务（service）的UUID，例如：00001888-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicReadRequest.serviceUuid
     */
    serviceUuid: string;
  }

  /**
   * 描述server端订阅后收到的特征值写请求事件参数结构。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicWriteRequest
   */
  interface CharacteristicWriteReq {
    /**
     * 表示发送特征值写请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicWriteRequest.deviceId
     */
    deviceId: string;
    /**
     * 表示写请求的传输ID，server端回复响应时需填写相同的传输ID。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicWriteRequest.transId
     */
    transId: number;
    /**
     * 表示写特征值数据的起始位置。例如：k表示从第k个字节开始写，server端回复响应时需填写相同的offset。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicWriteRequest.offset
     */
    offset: number;
    /**
     * 表示写请求是否立即执行。true表示立即执行。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicWriteRequest.isPrep
     */
    isPrep: boolean;
    /**
     * 表示是否要给client端回复响应。true表示需要回复。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicWriteRequest.needRsp
     */
    needRsp: boolean;
    /**
     * 表示写入的描述符二进制数据。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicWriteRequest.value
     */
    value: ArrayBuffer;
    /**
     * 特定特征（characteristic）的UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicWriteRequest.characteristicUuid
     */
    characteristicUuid: string;
    /**
     * 特定服务（service）的UUID，例如：00001888-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.CharacteristicWriteRequest.serviceUuid
     */
    serviceUuid: string;
  }

  /**
   * 描述server端订阅后收到的描述符读请求事件参数结构。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest
   */
  interface DescriptorReadReq {
    /**
     * 表示发送描述符读请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.deviceId
     */
    deviceId: string;
    /**
     * 表示读请求的传输ID，server端回复响应时需填写相同的传输ID。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.transId
     */
    transId: number;
    /**
     * 表示读描述符数据的起始位置。例如：k表示从第k个字节开始读，server端回复响应时需填写相同的offset。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.offset
     */
    offset: number;
    /**
     * 表示描述符（descriptor）的UUID，例如：00002902-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.descriptorUuid
     */
    descriptorUuid: string;
    /**
     * 特定特征（characteristic）的UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.characteristicUuid
     */
    characteristicUuid: string;
    /**
     * 特定服务（service）的UUID，例如：00001888-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.serviceUuid
     */
    serviceUuid: string;
  }

  /**
   * 描述server端订阅后收到的描述符写请求事件参数结构。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorWriteRequest
   */
  interface DescriptorWriteReq {
    /**
     * 表示发送描述符写请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorWriteRequest.deviceId
     */
    deviceId: string;
    /**
     * 表示写请求的传输ID，server端回复响应时需填写相同的传输ID。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorWriteRequest.transId
     */
    transId: number;
    /**
     * 表示写描述符数据的起始位置。例如：k表示从第k个字节开始写，server端回复响应时需填写相同的offset。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorWriteRequest.offset
     */
    offset: number;
    /**
     * 表示写请求是否立即执行。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorWriteRequest.isPrep
     */
    isPrep: boolean;
    /**
     * 表示是否要给client端回复响应。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorWriteRequest.needRsp
     */
    needRsp: boolean;
    /**
     * 表示写入的描述符二进制数据。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorWriteRequest.value
     */
    value: ArrayBuffer;
    /**
     * 表示描述符（descriptor）的UUID，例如：00002902-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorWriteRequest.descriptorUuid
     */
    descriptorUuid: string;
    /**
     * 特定特征（characteristic）的UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorWriteRequest.characteristicUuid
     */
    characteristicUuid: string;
    /**
     * 特定服务（service）的UUID，例如：00001888-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DescriptorWriteRequest.serviceUuid
     */
    serviceUuid: string;
  }

  /**
   * 描述server端回复client端读/写请求的响应参数结构。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.ServerResponse
   */
  interface ServerResponse {
    /**
     * 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ServerResponse.deviceId
     */
    deviceId: string;
    /**
     * 表示请求的传输ID，与订阅的读/写请求事件携带的ID保持一致。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ServerResponse.transId
     */
    transId: number;
    /**
     * 表示响应的状态，设置为0即可，表示正常。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ServerResponse.status
     */
    status: number;
    /**
     * 表示请求的读/写起始位置，与订阅的读/写请求事件携带的offset保持一致。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ServerResponse.offset
     */
    offset: number;
    /**
     * 表示回复响应的二进制数据。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ServerResponse.value
     */
    value: ArrayBuffer;
  }

  /**
   * 描述Gatt profile连接状态 。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.BLEConnectChangedState
   */
  interface BLEConnectChangedState {
    /**
     * 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLEConnectChangedState.deviceId
     */
    deviceId: string;
    /**
     * 表示BLE连接状态的枚举。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BLEConnectChangedState.state
     */
    state: ProfileConnectionState;
  }

  /**
   * 扫描结果上报数据。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.ScanResult
   */
  interface ScanResult {
    /**
     * 表示扫描到的设备地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanResult.deviceId
     */
    deviceId: string;
    /**
     * 表示扫描到的设备的rssi值。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanResult.rssi
     */
    rssi: number;
    /**
     * 表示扫描到的设备发送的广播包。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanResult.data
     */
    data: ArrayBuffer;
  }

  /**
   * 描述蓝牙低功耗设备发送广播的参数。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.AdvertiseSetting
   */
  interface AdvertiseSetting {
    /**
     * 表示广播间隔，最小值设置32个slot表示20ms，最大值设置16384个slot，默认值设置为1600个slot表示1s。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.AdvertiseSetting.interval
     */
    interval?: number;
    /**
     * 表示发送功率，最小值设置-127，最大值设置1，默认值设置-7，单位dBm。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.AdvertiseSetting.txPower
     */
    txPower?: number;
    /**
     * 表示是否是可连接广播，默认值设置为true。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.AdvertiseSetting.connectable
     */
    connectable?: boolean;
  }

  /**
   * 描述BLE广播数据包的内容。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.AdvertiseData
   */
  interface AdvertiseData {
    /**
     * 表示要广播的服务 UUID 列表。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.AdvertiseData.serviceUuids
     */
    serviceUuids: Array<string>;
    /**
     * 表示要广播的广播的制造商信息列表。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.AdvertiseData.manufactureData
     */
    manufactureData: Array<ManufactureData>;
    /**
     * 表示要广播的服务数据列表。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.AdvertiseData.serviceData
     */
    serviceData: Array<ServiceData>;
  }

  /**
   * 描述BLE广播数据包的内容。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.ManufactureData
   */
  interface ManufactureData {
    /**
     * 表示制造商的ID，由蓝牙SIG分配。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ManufactureData.manufactureId
     */
    manufactureId: number;
    /**
     * 表示制造商发送的制造商数据。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ManufactureData.manufactureValue
     */
    manufactureValue: ArrayBuffer;
  }

  /**
   * 描述广播包中服务数据内容。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.ServiceData
   */
  interface ServiceData {
    /**
     * 表示服务的UUID。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ServiceData.serviceUuid
     */
    serviceUuid: string;
    /**
     * 表示服务数据。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ServiceData.serviceValue
     */
    serviceValue: ArrayBuffer;
  }

  /**
   * 扫描过滤参数。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.ScanFilter
   */
  interface ScanFilter {
    /**
     * 表示过滤的BLE设备地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanFilter.deviceId
     */
    deviceId?: string;
    /**
     * 表示过滤的BLE设备名。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanFilter.name
     */
    name?: string;
    /**
     * 表示过滤包含该UUID服务的设备，例如：00001888-0000-1000-8000-00805f9b34fb。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanFilter.serviceUuid
     */
    serviceUuid?: string;
  }

  /**
   * 扫描的配置参数。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.ScanOptions
   */
  interface ScanOptions {
    /**
     * 表示扫描结果上报延迟时间，默认值为0。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanOptions.interval
     */
    interval?: number;
    /**
     * 表示扫描模式，默认值为SCAN_MODE_LOW_POWER。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanOptions.dutyMode
     */
    dutyMode?: ScanDuty;
    /**
     * 表示硬件的过滤匹配模式，默认值为MATCH_MODE_AGGRESSIVE。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanOptions.matchMode
     */
    matchMode?: MatchMode;
  }

  /**
   * 描述spp的配置参数。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.SppOption
   */
  interface SppOption {
    /**
     * 套接字链路类型的服务UUID。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.SppOption.uuid
     */
    uuid: string;
    /**
     * 是否是安全通道。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.SppOption.secure
     */
    secure: boolean;
    /**
     * Spp链路类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.SppOption.type
     */
    type: SppType;
  }

  /**
   * 描述配对请求参数。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.PinRequiredParam
   */
  interface PinRequiredParam {
    /**
     * 表示要配对的设备ID。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.PinRequiredParam.deviceId
     */
    deviceId: string;
    /**
     * 表示要配对的密钥。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.PinRequiredParam.pinCode
     */
    pinCode: string;
  }

  /**
   * 描述蓝牙设备的类别。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.DeviceClass
   */
  interface DeviceClass {
    /**
     * 表示蓝牙设备主要类别的枚举。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DeviceClass.majorClass
     */
    majorClass: MajorClass;
    /**
     * 表示主要次要蓝牙设备类别的枚举。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DeviceClass.majorMinorClass
     */
    majorMinorClass: MajorMinorClass;
    /**
     * 表示设备类别。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.DeviceClass.classOfDevice
     */
    classOfDevice: number;
  }

  /**
   * 描述配对状态参数。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.BondStateParam
   */
  interface BondStateParam {
    /**
     * 表示要配对的设备ID。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BondStateParam.deviceId
     */
    deviceId: string;
    /**
     * 表示配对设备的状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BondStateParam.state
     */
    state: BondState;
  }

  /**
   * 枚举，扫描模式。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.ScanDuty
   */
  enum ScanDuty {
    /**
     * 表示低功耗模式，默认值。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanDuty.SCAN_MODE_LOW_POWER
     */
    SCAN_MODE_LOW_POWER = 0,
    /**
     * 表示均衡模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanDuty.SCAN_MODE_BALANCED
     */
    SCAN_MODE_BALANCED = 1,
    /**
     * 表示低延迟模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanDuty.SCAN_MODE_LOW_LATENCY
     */
    SCAN_MODE_LOW_LATENCY = 2
  }

  /**
   * 枚举，硬件过滤匹配模式。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.MatchMode
   */
  enum MatchMode {
    /**
     * 表示硬件上报扫描结果门限较低，比如扫描到的功率较低或者一段时间扫描到的次数较少也触发上报，默认值。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MatchMode.MATCH_MODE_AGGRESSIVE
     */
    MATCH_MODE_AGGRESSIVE = 1,
    /**
     * 表示硬件上报扫描结果门限较高，更高的功率门限以及扫描到多次才会上报。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MatchMode.MATCH_MODE_STICKY
     */
    MATCH_MODE_STICKY = 2
  }

  /**
   * 枚举，蓝牙设备的profile连接状态。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.ProfileConnectionState
   */
  enum ProfileConnectionState {
    /**
     * 表示profile已断连。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ProfileConnectionState.STATE_DISCONNECTED
     */
    STATE_DISCONNECTED = 0,
    /**
     * 表示profile正在连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ProfileConnectionState.STATE_CONNECTING
     */
    STATE_CONNECTING = 1,
    /**
     * 表示profile已连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ProfileConnectionState.STATE_CONNECTED
     */
    STATE_CONNECTED = 2,
    /**
     * 表示profile正在断连。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ProfileConnectionState.STATE_DISCONNECTING
     */
    STATE_DISCONNECTING = 3
  }

  /**
   * 枚举，蓝牙开关状态。
   * 
   * 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.BluetoothState
   */
  enum BluetoothState {
    /**
     * 表示蓝牙已关闭。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BluetoothState.STATE_OFF
     */
    STATE_OFF = 0,
    /**
     * 表示蓝牙正在打开。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BluetoothState.STATE_TURNING_ON
     */
    STATE_TURNING_ON = 1,
    /**
     * 表示蓝牙已打开。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BluetoothState.STATE_ON
     */
    STATE_ON = 2,
    /**
     * 表示蓝牙正在关闭。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BluetoothState.STATE_TURNING_OFF
     */
    STATE_TURNING_OFF = 3,
    /**
     * 表示蓝牙正在打开LE-only模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BluetoothState.STATE_BLE_TURNING_ON
     */
    STATE_BLE_TURNING_ON = 4,
    /**
     * 表示蓝牙正处于LE-only模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BluetoothState.STATE_BLE_ON
     */
    STATE_BLE_ON = 5,
    /**
     * 表示蓝牙正在关闭LE-only模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BluetoothState.STATE_BLE_TURNING_OFF
     */
    STATE_BLE_TURNING_OFF = 6
  }

  /**
   * 枚举，Spp链路类型。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.SppType
   */
  enum SppType {
    /**
     * 表示rfcomm链路类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.SppType.SPP_RFCOMM
     */
    SPP_RFCOMM = 0
  }

  /**
   * 枚举，扫描模式。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.ScanMode
   */
  enum ScanMode {
    /**
     * 没有扫描模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanMode.SCAN_MODE_NONE
     */
    SCAN_MODE_NONE = 0,
    /**
     * 可连接扫描模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanMode.SCAN_MODE_CONNECTABLE
     */
    SCAN_MODE_CONNECTABLE = 1,
    /**
     * general发现模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanMode.SCAN_MODE_GENERAL_DISCOVERABLE
     */
    SCAN_MODE_GENERAL_DISCOVERABLE = 2,
    /**
     * limited发现模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanMode.SCAN_MODE_LIMITED_DISCOVERABLE
     */
    SCAN_MODE_LIMITED_DISCOVERABLE = 3,
    /**
     * 可连接general发现模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanMode.SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE
     */
    SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE = 4,
    /**
     * 可连接limited发现模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ScanMode.SCAN_MODE_CONNECTABLE_LIMITED_DISCOVERABLE
     */
    SCAN_MODE_CONNECTABLE_LIMITED_DISCOVERABLE = 5
  }

  /**
   * 枚举，配对状态。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.BondState
   */
  enum BondState {
    /**
     * 无效的配对。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BondState.BOND_STATE_INVALID
     */
    BOND_STATE_INVALID = 0,
    /**
     * 正在配对。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BondState.BOND_STATE_BONDING
     */
    BOND_STATE_BONDING = 1,
    /**
     * 已配对。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.BondState.BOND_STATE_BONDED
     */
    BOND_STATE_BONDED = 2
  }

  /**
   * 枚举，蓝牙设备主要类别。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass
   */
  enum MajorClass {
    /**
     * 表示杂项设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass.MAJOR_MISC
     */
    MAJOR_MISC = 0x0000,
    /**
     * 表示计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass.MAJOR_COMPUTER
     */
    MAJOR_COMPUTER = 0x0100,
    /**
     * 表示手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass.MAJOR_PHONE
     */
    MAJOR_PHONE = 0x0200,
    /**
     * 表示网络设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass.MAJOR_NETWORKING
     */
    MAJOR_NETWORKING = 0x0300,
    /**
     * 表示音频和视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass.MAJOR_AUDIO_VIDEO
     */
    MAJOR_AUDIO_VIDEO = 0x0400,
    /**
     * 表示外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass.MAJOR_PERIPHERAL
     */
    MAJOR_PERIPHERAL = 0x0500,
    /**
     * 表示成像设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass.MAJOR_IMAGING
     */
    MAJOR_IMAGING = 0x0600,
    /**
     * 表示可穿戴设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass.MAJOR_WEARABLE
     */
    MAJOR_WEARABLE = 0x0700,
    /**
     * 表示玩具设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass.MAJOR_TOY
     */
    MAJOR_TOY = 0x0800,
    /**
     * 表示健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass.MAJOR_HEALTH
     */
    MAJOR_HEALTH = 0x0900,
    /**
     * 表示未分类设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorClass.MAJOR_UNCATEGORIZED
     */
    MAJOR_UNCATEGORIZED = 0x1F00
  }

  /**
   * 枚举，主要次要蓝牙设备类别。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass
   */
  enum MajorMinorClass {
    /**
     * 表示未分类计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.COMPUTER_UNCATEGORIZED
     */
    COMPUTER_UNCATEGORIZED = 0x0100,
    /**
     * 表示台式计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.COMPUTER_DESKTOP
     */
    COMPUTER_DESKTOP = 0x0104,
    /**
     * 表示服务器设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.COMPUTER_SERVER
     */
    COMPUTER_SERVER = 0x0108,
    /**
     * 表示便携式计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.COMPUTER_LAPTOP
     */
    COMPUTER_LAPTOP = 0x010C,
    /**
     * 表示手持式计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.COMPUTER_HANDHELD_PC_PDA
     */
    COMPUTER_HANDHELD_PC_PDA = 0x0110,
    /**
     * 表示掌上电脑设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.COMPUTER_PALM_SIZE_PC_PDA
     */
    COMPUTER_PALM_SIZE_PC_PDA = 0x0114,
    /**
     * 表示可穿戴计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.COMPUTER_WEARABLE
     */
    COMPUTER_WEARABLE = 0x0118,
    /**
     * 表示平板电脑设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.COMPUTER_TABLET
     */
    COMPUTER_TABLET = 0x011C,

    /**
     * 表示未分类手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PHONE_UNCATEGORIZED
     */
    PHONE_UNCATEGORIZED = 0x0200,
    /**
     * 表示便携式手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PHONE_CELLULAR
     */
    PHONE_CELLULAR = 0x0204,
    /**
     * 表示无线电话设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PHONE_CORDLESS
     */
    PHONE_CORDLESS = 0x0208,
    /**
     * 表示智能手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PHONE_SMART
     */
    PHONE_SMART = 0x020C,
    /**
     * 表示调制解调器或网关手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PHONE_MODEM_OR_GATEWAY
     */
    PHONE_MODEM_OR_GATEWAY = 0x0210,
    /**
     * 表示ISDN手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PHONE_ISDN
     */
    PHONE_ISDN = 0x0214,

    /**
     * 表示网络完全可用设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.NETWORK_FULLY_AVAILABLE
     */
    NETWORK_FULLY_AVAILABLE = 0x0300,
    /**
     * 表示使用网络1到17设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.NETWORK_1_TO_17_UTILIZED
     */
    NETWORK_1_TO_17_UTILIZED = 0x0320,
    /**
     * 表示使用网络17到33设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.NETWORK_17_TO_33_UTILIZED
     */
    NETWORK_17_TO_33_UTILIZED = 0x0340,
    /**
     * 表示使用网络33到50设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.NETWORK_33_TO_50_UTILIZED
     */
    NETWORK_33_TO_50_UTILIZED = 0x0360,
    /**
     * 表示使用网络60到67设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.NETWORK_60_TO_67_UTILIZED
     */
    NETWORK_60_TO_67_UTILIZED = 0x0380,
    /**
     * 表示使用网络67到83设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.NETWORK_67_TO_83_UTILIZED
     */
    NETWORK_67_TO_83_UTILIZED = 0x03A0,
    /**
     * 表示使用网络83到99设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.NETWORK_83_TO_99_UTILIZED
     */
    NETWORK_83_TO_99_UTILIZED = 0x03C0,
    /**
     * 表示网络无服务设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.NETWORK_NO_SERVICE
     */
    NETWORK_NO_SERVICE = 0x03E0,

    /**
     * 表示未分类音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_UNCATEGORIZED
     */
    AUDIO_VIDEO_UNCATEGORIZED = 0x0400,
    /**
     * 表示可穿戴式音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_WEARABLE_HEADSET
     */
    AUDIO_VIDEO_WEARABLE_HEADSET = 0x0404,
    /**
     * 表示免提音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_HANDSFREE
     */
    AUDIO_VIDEO_HANDSFREE = 0x0408,
    /**
     * 表示麦克风音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_MICROPHONE
     */
    AUDIO_VIDEO_MICROPHONE = 0x0410,
    /**
     * 表示扬声器音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_LOUDSPEAKER
     */
    AUDIO_VIDEO_LOUDSPEAKER = 0x0414,
    /**
     * 表示头戴式音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_HEADPHONES
     */
    AUDIO_VIDEO_HEADPHONES = 0x0418,
    /**
     * 表示便携式音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_PORTABLE_AUDIO
     */
    AUDIO_VIDEO_PORTABLE_AUDIO = 0x041C,
    /**
     * 表示汽车音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_CAR_AUDIO
     */
    AUDIO_VIDEO_CAR_AUDIO = 0x0420,
    /**
     * 表示机顶盒音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_SET_TOP_BOX
     */
    AUDIO_VIDEO_SET_TOP_BOX = 0x0424,
    /**
     * 表示高保真音响设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_HIFI_AUDIO
     */
    AUDIO_VIDEO_HIFI_AUDIO = 0x0428,
    /**
     * 表示录像机音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_VCR
     */
    AUDIO_VIDEO_VCR = 0x042C,
    /**
     * 表示照相机音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_VIDEO_CAMERA
     */
    AUDIO_VIDEO_VIDEO_CAMERA = 0x0430,
    /**
     * 表示摄像机音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_CAMCORDER
     */
    AUDIO_VIDEO_CAMCORDER = 0x0434,
    /**
     * 表示监视器音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_VIDEO_MONITOR
     */
    AUDIO_VIDEO_VIDEO_MONITOR = 0x0438,
    /**
     * 表示视频显示器和扬声器设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_VIDEO_DISPLAY_AND_LOUDSPEAKER
     */
    AUDIO_VIDEO_VIDEO_DISPLAY_AND_LOUDSPEAKER = 0x043C,
    /**
     * 表示音频视频会议设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_VIDEO_CONFERENCING
     */
    AUDIO_VIDEO_VIDEO_CONFERENCING = 0x0440,
    /**
     * 表示游戏玩具音频视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.AUDIO_VIDEO_VIDEO_GAMING_TOY
     */
    AUDIO_VIDEO_VIDEO_GAMING_TOY = 0x0448,

    /**
     * 表示非键盘非指向外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_NON_KEYBOARD_NON_POINTING
     */
    PERIPHERAL_NON_KEYBOARD_NON_POINTING = 0x0500,
    /**
     * 表示外设键盘设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_KEYBOARD
     */
    PERIPHERAL_KEYBOARD = 0x0540,
    /**
     * 表示定点装置外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_POINTING_DEVICE
     */
    PERIPHERAL_POINTING_DEVICE = 0x0580,
    /**
     * 表示键盘指向外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_KEYBOARD_POINTING
     */
    PERIPHERAL_KEYBOARD_POINTING = 0x05C0,
    /**
     * 表示未分类外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_UNCATEGORIZED
     */
    PERIPHERAL_UNCATEGORIZED = 0x0500,
    /**
     * 表示周边操纵杆设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_JOYSTICK
     */
    PERIPHERAL_JOYSTICK = 0x0504,
    /**
     * 表示周边游戏板设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_GAMEPAD
     */
    PERIPHERAL_GAMEPAD = 0x0508,
    /**
     * 表示远程控制外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_REMOTE_CONTROL
     */
    PERIPHERAL_REMOTE_CONTROL = 0x05C0,
    /**
     * 表示外围传感设备设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_SENSING_DEVICE
     */
    PERIPHERAL_SENSING_DEVICE = 0x0510,
    /**
     * 表示外围数字化仪平板电脑设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_DIGITIZER_TABLET
     */
    PERIPHERAL_DIGITIZER_TABLET = 0x0514,
    /**
     * 表示外围读卡器设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_CARD_READER
     */
    PERIPHERAL_CARD_READER = 0x0518,
    /**
     * 表示外设数码笔设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_DIGITAL_PEN
     */
    PERIPHERAL_DIGITAL_PEN = 0x051C,
    /**
     * 表示射频识别扫描仪外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_SCANNER_RFID
     */
    PERIPHERAL_SCANNER_RFID = 0x0520,
    /**
     * 表示手势输入外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.PERIPHERAL_GESTURAL_INPUT
     */
    PERIPHERAL_GESTURAL_INPUT = 0x0522,

    /**
     * 表示未分类的图像设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.IMAGING_UNCATEGORIZED
     */
    IMAGING_UNCATEGORIZED = 0x0600,
    /**
     * 表示图像显示设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.IMAGING_DISPLAY
     */
    IMAGING_DISPLAY = 0x0610,
    /**
     * 表示成像照相机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.IMAGING_CAMERA
     */
    IMAGING_CAMERA = 0x0620,
    /**
     * 表示成像扫描仪设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.IMAGING_SCANNER
     */
    IMAGING_SCANNER = 0x0640,
    /**
     * 表示成像打印机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.IMAGING_PRINTER
     */
    IMAGING_PRINTER = 0x0680,

    /**
     * 表示未分类的可穿戴设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.WEARABLE_UNCATEGORIZED
     */
    WEARABLE_UNCATEGORIZED = 0x0700,
    /**
     * 表示可穿戴腕表设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.WEARABLE_WRIST_WATCH
     */
    WEARABLE_WRIST_WATCH = 0x0704,
    /**
     * 表示可穿戴寻呼机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.WEARABLE_PAGER
     */
    WEARABLE_PAGER = 0x0708,
    /**
     * 表示夹克可穿戴设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.WEARABLE_JACKET
     */
    WEARABLE_JACKET = 0x070C,
    /**
     * 表示可穿戴头盔设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.WEARABLE_HELMET
     */
    WEARABLE_HELMET = 0x0710,
    /**
     * 表示可穿戴眼镜设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.WEARABLE_GLASSES
     */
    WEARABLE_GLASSES = 0x0714,

    /**
     * 表示未分类的玩具设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.TOY_UNCATEGORIZED
     */
    TOY_UNCATEGORIZED = 0x0800,
    /**
     * 表示玩具机器人设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.TOY_ROBOT
     */
    TOY_ROBOT = 0x0804,
    /**
     * 表示玩具车设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.TOY_VEHICLE
     */
    TOY_VEHICLE = 0x0808,
    /**
     * 表示人形娃娃玩具设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.TOY_DOLL_ACTION_FIGURE
     */
    TOY_DOLL_ACTION_FIGURE = 0x080C,
    /**
     * 表示玩具控制器设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.TOY_CONTROLLER
     */
    TOY_CONTROLLER = 0x0810,
    /**
     * 表示玩具游戏设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.TOY_GAME
     */
    TOY_GAME = 0x0814,

    /**
     * 表示未分类健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_UNCATEGORIZED
     */
    HEALTH_UNCATEGORIZED = 0x0900,
    /**
     * 表示血压健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_BLOOD_PRESSURE
     */
    HEALTH_BLOOD_PRESSURE = 0x0904,
    /**
     * 表示温度计健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_THERMOMETER
     */
    HEALTH_THERMOMETER = 0x0908,
    /**
     * 表示体重健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_WEIGHING
     */
    HEALTH_WEIGHING = 0x090C,
    /**
     * 表示葡萄糖健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_GLUCOSE
     */
    HEALTH_GLUCOSE = 0x0910,
    /**
     * 表示脉搏血氧仪健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_PULSE_OXIMETER
     */
    HEALTH_PULSE_OXIMETER = 0x0914,
    /**
     * 表示脉搏率健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_PULSE_RATE
     */
    HEALTH_PULSE_RATE = 0x0918,
    /**
     * 表示数据显示健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_DATA_DISPLAY
     */
    HEALTH_DATA_DISPLAY = 0x091C,
    /**
     * 表示计步器健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_STEP_COUNTER
     */
    HEALTH_STEP_COUNTER = 0x0920,
    /**
     * 表示身体成分分析仪健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_BODY_COMPOSITION_ANALYZER
     */
    HEALTH_BODY_COMPOSITION_ANALYZER = 0x0924,
    /**
     * 表示峰值流量计健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_PEAK_FLOW_MOITOR
     */
    HEALTH_PEAK_FLOW_MOITOR = 0x0928,
    /**
     * 表示药物监视仪健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_MEDICATION_MONITOR
     */
    HEALTH_MEDICATION_MONITOR = 0x092C,
    /**
     * 表示膝盖假肢健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_KNEE_PROSTHESIS
     */
    HEALTH_KNEE_PROSTHESIS = 0x0930,
    /**
     * 表示脚踝假肢健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_ANKLE_PROSTHESIS
     */
    HEALTH_ANKLE_PROSTHESIS = 0x0934,
    /**
     * 表示通用健康管理设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_GENERIC_HEALTH_MANAGER
     */
    HEALTH_GENERIC_HEALTH_MANAGER = 0x0938,
    /**
     * 表示个人移动健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.MajorMinorClass.HEALTH_PERSONAL_MOBILITY_DEVICE
     */
    HEALTH_PERSONAL_MOBILITY_DEVICE = 0x093C
  }

  /**
   * 描述profile状态改变参数。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.StateChangeParam
   */
  interface StateChangeParam {
    /**
     * 表示蓝牙设备地址。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.StateChangeParam.deviceId
     */
    deviceId: string;

    /**
     * 表示蓝牙设备的profile连接状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.StateChangeParam.state
     */
    state: ProfileConnectionState;
  }

  /**
   * 枚举，蓝牙A2DP 播放状态。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.PlayingState
   */
  enum PlayingState {
    /**
     * 表示未播放。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.PlayingState.STATE_NOT_PLAYING
     */
    STATE_NOT_PLAYING = 0,
    /**
     * 表示正在播放。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.PlayingState.STATE_PLAYING
     */
    STATE_PLAYING = 1
  }

  /**
   * 蓝牙profile枚举，API9新增PROFILE_HID_HOST，PROFILE_PAN_NETWORK。
   * 
   * 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bluetoothManager/bluetoothManager.ProfileId
   */
  enum ProfileId {
    /**
     * 表示A2DP profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ProfileId.PROFILE_A2DP_SOURCE
     */
    PROFILE_A2DP_SOURCE = 1,

    /**
     * 表示HFP profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bluetoothManager/bluetoothManager.ProfileId.PROFILE_HANDS_FREE_AUDIO_GATEWAY
     */
    PROFILE_HANDS_FREE_AUDIO_GATEWAY = 4
  }
}

export default bluetooth;