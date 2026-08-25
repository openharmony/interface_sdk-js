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
 * @file 蓝牙connection模块
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type constant from './@ohos.bluetooth.constant';
import type common from './@ohos.bluetooth.common';

/**
 * connection模块提供了蓝牙设备的配对、连接、状态查询、设备扫描发现、扫描模式设置、电量信息获取及事件订阅等能力，适用于需要在应用中实现蓝牙设备发现、配对、连接和信息查询的场景。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @stagemodelonly
 * @crossplatform [since 13]
 * @atomicservice [since 12]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace connection {
  /**
   * 蓝牙设备的Profile协议连接状态。Profile协议包括A2DP（Advanced Audio Distribution Profile）、HFP（Hands-Free Profile）和HID（Human Interface
   * Device）等。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  type ProfileConnectionState = constant.ProfileConnectionState;

  /**
   * 枚举，蓝牙Profile协议。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  type ProfileId = constant.ProfileId;

  /**
   * 蓝牙Profile协议的UUID。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi [since 10 - 11]
   * @publicapi [since 12]
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  type ProfileUuids = constant.ProfileUuids;

  /**
   * 蓝牙设备的主要类型。蓝牙标准协议字段。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  type MajorClass = constant.MajorClass;

  /**
   * 蓝牙设备的子类型，在[MajorClass]{@link @ohos.bluetooth.constant:constant.MajorClass}基础上进一步细分的类型。蓝牙标准协议字段。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  type MajorMinorClass = constant.MajorMinorClass;

  /**
   * 描述蓝牙设备地址信息的参数结构，包括地址与地址类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 21 dynamic
   * @since 26.1.0 static
   */
  type BluetoothAddress = common.BluetoothAddress;

  /**
   * 获取蓝牙Profile协议的连接状态，其中ProfileId为可选参数。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { ProfileId } [profileId] - 表示Profile协议的枚举值。如果携带ProfileId，则返回指定Profile协议的连接状态。如果未携带ProfileId，则检查所有支持的Profile
   *     连接状态，按如下优先级顺序检查并返回：
   *     存在已连接的Profile协议，则返回[STATE_CONNECTED]{@link @ohos.bluetooth.constant:constant.ProfileConnectionState}。
   *     存在正在连接的Profile协议，则返回[STATE_CONNECTING]{@link @ohos.bluetooth.constant:constant.ProfileConnectionState}。
   *     存在正在断连的Profile协议，则返回[STATE_DISCONNECTING]{@link @ohos.bluetooth.constant:constant.ProfileConnectionState}。
   *     以上条件均不满足，则返回[STATE_DISCONNECTED]{@link @ohos.bluetooth.constant:constant.ProfileConnectionState}。
   * @returns { ProfileConnectionState } Profile协议的连接状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900004 - Profile not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  function getProfileConnectionState(profileId?: ProfileId): ProfileConnectionState;

  /**
   * 主动发起与对端蓝牙设备的配对流程。使用Callback异步回调。
   * 
   * 若开发者不知道目标设备的[地址类型]{@link @ohos.bluetooth.common:common.BluetoothAddressType}，建议调用此接口发起配对。
   * 蓝牙配对状态通过[on('bondStateChange')]{@link connection.on(type: 'bondStateChange', callback: Callback<BondStateParam>)}
   * 的回调结果获取。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 需要配对的对端蓝牙设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { AsyncCallback<void> } callback - 回调函数。当配对成功，err为undefined，否则为错误对象。
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
  function pairDevice(deviceId: string, callback: AsyncCallback<void>): void;

  /**
   * 主动发起与对端蓝牙设备的配对流程。使用Promise异步回调。
   * 
   * 若开发者不知道目标设备的[地址类型]{@link @ohos.bluetooth.common:common.BluetoothAddressType}，建议调用此接口发起配对。
   * 蓝牙配对状态通过[on('bondStateChange')]{@link connection.on(type: 'bondStateChange', callback: Callback<BondStateParam>)}
   * 的回调结果获取。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 需要配对的对端蓝牙设备地址，例如："XX:XX:XX:XX:XX:XX"。
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
  function pairDevice(deviceId: string): Promise<void>;

  /**
   * 主动发起与对端蓝牙设备的配对流程。使用Promise异步回调。
   * 
   * 若开发者已知目标设备的MAC地址及[地址类型]{@link @ohos.bluetooth.common:common.BluetoothAddressType}，建议调用此接口发起配对。
   * 蓝牙配对状态通过[on('bondStateChange')]{@link connection.on(type: 'bondStateChange', callback: Callback<BondStateParam>)}
   * 的回调结果获取。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { BluetoothAddress } deviceId - 需要配对的对端蓝牙设备地址信息，包括地址与地址类型。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 21 dynamic
   * @since 26.1.0 static
   */
  function pairDevice(deviceId: BluetoothAddress): Promise<void>;

  /**
   * 向可信的远端设备发起蓝牙配对。通过非蓝牙扫描的方式（例如NFC等）获取到外设的地址，可以通过该接口发起配对。使用Callback异步回调。蓝牙配对状态通过on('bondStateChange')的回调结果获取。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { string } deviceId - 表示配对的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { BluetoothTransport } transport - 表示在配对远端设备时使用的传输方式。
   *     若明确使用传统蓝牙（BR/EDR）或者低功耗蓝牙（BLE）方式，则传入TRANSPORT_BR_EDR或TRANSPORT_LE。
   *     若不确定使用哪种传输方式，则传入TRANSPORT_DUAL<sup>20+</sup>或TRANSPORT_UNKNOWN<sup>20+</sup>，蓝牙子系统会决策传输方式。
   * @param { AsyncCallback<void> } callback - 回调函数。当发起配对成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function pairCredibleDevice(deviceId: string, transport: BluetoothTransport, callback: AsyncCallback<void>): void;

  /**
   * 向可信的远端设备发起蓝牙配对。通过非蓝牙扫描的方式（例如NFC等）获取到外设的地址，可以通过该接口发起配对。使用Promise异步回调。蓝牙配对状态通过on('bondStateChange')的回调结果获取。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { string } deviceId - 表示配对的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { BluetoothTransport } transport - 表示在配对远端设备时使用的传输方式。
   *     若明确使用传统蓝牙（BR/EDR）或者低功耗蓝牙（BLE）方式，则传入TRANSPORT_BR_EDR或TRANSPORT_LE。
   *     若不确定使用哪种传输方式，则传入TRANSPORT_DUAL<sup>20+</sup>或TRANSPORT_UNKNOWN<sup>20+</sup>，蓝牙子系统会决策传输方式。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function pairCredibleDevice(deviceId: string, transport: BluetoothTransport): Promise<void>;

  /**
   * 通过带外（Out of Band, OOB）通信机制发起与对端蓝牙设备的配对流程。本接口所需的OobData可通过
   * [generateLocalOobData]{@link connection.generateLocalOobData}生成本机OOB数据并经带外通道传输至本端后使用。使用Promise异步回调。
   * 
   * 蓝牙配对状态通过[on('bondStateChange')]{@link connection.on(type: 'bondStateChange', callback: Callback<BondStateParam>)}
   * 的回调结果获取。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { BluetoothTransport } transport  - 表示在配对对端设备时使用的传输方式。
   *     若使用传统蓝牙（BR/EDR），则传入TRANSPORT_BR_EDR。若使用低功耗蓝牙（BLE），则传入TRANSPORT_LE。不支持其他
   *     [BluetoothTransport]{@link connection.BluetoothTransport}类型。
   * @param { OobData | null } p192Data  - 配对过程中使用的OOB数据。P-192指一种椭圆曲线算法，其密钥长度为192位，在蓝牙4.1及以前的传统配对方案中广泛使用。
   *     若不使用该值，需传入null。
   *     p192Data与p256Data需至少传入一个有效值，若两者同时传入，则p256Data生效，p192Data不生效。
   * @param { OobData | null } p256Data  - 配对过程中使用的OOB数据。P-256指一种椭圆曲线算法，其密钥长度为256位，自蓝牙4.2开始成为安全连接的核心基础。基于P-256的OOB数据相比基于P
   *     -192的OOB数据具有更强的抗攻击能力与保密性。若非必须兼容蓝牙4.1或更早版本的旧设备，推荐使用p256Data。
   *     若不使用该值，需传入null。
   *     p192Data与p256Data需至少传入一个有效值，若两者同时传入，则p256Data生效，p192Data不生效。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function pairDeviceOutOfBand(transport: BluetoothTransport, p192Data: OobData | null,
    p256Data: OobData | null): Promise<void>;

  /**
   * 使用带外机制开始与特定的远程蓝牙设备配对。
   * 该函数为异步函数，通过监听bondStateChange事件获取配对状态。
   * 如果没有使用p192Data和p256Data，函数调用将失败。
   * 如果同时使用p192Data和p256Data，则以p256Data生效。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 设备ID。例如，“11:22:33:AA:BB:FF”。
   * @param { BluetoothTransport } transport - 指示远程蓝牙设备的传输。
   * @param { OobData } [p192Data] - 带外数据(P192)。
   * @param { OobData } [p256Data] - 带外数据(P256)。
   * @returns { Promise<void> } 不会返回任何值的Promise。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function startPairOutOfBand(deviceId: string, transport: BluetoothTransport, p192Data?: OobData,
    p256Data?: OobData): Promise<void>;

  /**
   * 删除配对的远程设备。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示要删除的远程设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { AsyncCallback<void> } callback - 回调函数。当删除远程配对设备成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function cancelPairedDevice(deviceId: string, callback: AsyncCallback<void>): void;

  /**
   * 删除配对的远程设备。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示要删除的远程设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function cancelPairedDevice(deviceId: string): Promise<void>;

  /**
   * 删除正在配对中的远程设备。与cancelPairedDevice（用于删除已配对的设备）不同，本接口用于取消正在进行中的配对流程。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示要删除的远程设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { AsyncCallback<void> } callback - 回调函数。当删除远程配对设备成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function cancelPairingDevice(deviceId: string, callback: AsyncCallback<void>): void;

  /**
   * 删除正在配对中的远程设备。与cancelPairedDevice（用于删除已配对的设备）不同，本接口用于取消正在进行中的配对流程。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示要删除的远程设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function cancelPairingDevice(deviceId: string): Promise<void>;

  /**
   * 获取对端蓝牙设备的名称。
   * 
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址获取设备名称。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示对端设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { string } 以字符串格式返回设备名称。
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
  function getRemoteDeviceName(deviceId: string): string;

  /**
   * 获取对端蓝牙设备的名称，其中alias为可选参数。
   * 
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址获取设备名称。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示对端设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { boolean } [alias] - 表示是否获取对端蓝牙设备别名。
   *     如果携带alias，则根据alias判断是否获取对端蓝牙设备别名：true表示获取对端蓝牙设备别名，false表示获取对端蓝牙设备原始名称。
   *     如果未携带alias，则默认值为true，返回对端蓝牙设备别名。
   * @returns { string } 以字符串格式返回设备名称。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Failed to obtain the name or alias of the peer Bluetooth device.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @atomicservice
   * @since 16 dynamic
   * @since 23 static
   */
  function getRemoteDeviceName(deviceId: string, alias?: boolean): string;

  /**
   * 获取对端蓝牙设备的类别。
   * 
   * 从API version 18开始，此接口不再校验ohos.permission.ACCESS_BLUETOOTH权限。
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址获取设备类别信息。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 17]
   * @param { string } deviceId - 表示对端设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { DeviceClass } 对端设备的类别。
   * @throws { BusinessError } 201 - Permission denied. [since 10 - 17]
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
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
  function getRemoteDeviceClass(deviceId: string): DeviceClass;

  /**
   * 获取对端蓝牙设备的传输类型。
   * 
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址获取设备的传输类型。
   *
   * @param { string } deviceId - 表示对端设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { BluetoothTransport } 对端设备的传输类型。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Get transport failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function getRemoteDeviceTransport(deviceId: string): BluetoothTransport;

  /**
   * 获取本机蓝牙设备的名称。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { string } 本机蓝牙设备名称。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  function getLocalName(): string;

  /**
   * 获取已配对蓝牙设备的地址集合。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @returns { Array<string> } 已配对蓝牙设备的地址集合。
   *     基于信息安全考虑，此处获取的设备地址为虚拟MAC地址。
   *     已配对的地址不会变更。
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
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getPairedDevices(): Array<string>;

  /**
   * 获取对端蓝牙设备的配对状态信息。
   * 
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址获取配对状态信息。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示对端设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { BondState } 表示设备的蓝牙配对状态。
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
   * @since 11 dynamic
   * @since 23 static
   */
  function getPairState(deviceId: string): BondState;

  /**
   * 收到对端蓝牙设备的配对请求事件后，确认请求结果。
   * 
   * 对端蓝牙的配对请求通过[on('pinRequired')]{@link connection.on(type: 'pinRequired', callback: Callback<PinRequiredParam>)}的回调
   * 结果获取。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { string } deviceId - 表示对端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { boolean } accept - 是否接受对端设备的配对请求。true表示接受，false表示不接受。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function setDevicePairingConfirmation(deviceId: string, accept: boolean): void;

  /**
   * 蓝牙配对时，弹框提示用户输入个人身份识别码（Personal identification number，PIN），调用此接口设置PIN码，完成蓝牙配对。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示对端设备MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { string } code - 用户输入的PIN码，该字符串的字符个数范围为(0, 16]，例如："12345"。
   * @param { AsyncCallback<void> } callback - 回调函数，当设置PinCode成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function setDevicePinCode(deviceId: string, code: string, callback: AsyncCallback<void>): void;

  /**
   * 蓝牙配对时，弹框提示用户输入PIN码，调用此接口设置PIN码，完成蓝牙配对。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示对端设备MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { string } code - 用户输入的PIN码，该字符串的字符个数范围为(0, 16]，例如："12345"。
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
   * @since 10 dynamic
   * @since 23 static
   */
  function setDevicePinCode(deviceId: string, code: string): Promise<void>;

  /**
   * 设置本机蓝牙设备名称，不能设置为空字符串。如果设为空字符串会失败。
   * 
   * 从API version 10开始支持，从API version 12开始废弃，不再提供替代接口。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } name - 需要设置的蓝牙名称，名称长度范围：(0, 248]，单位：Byte。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 26.1.0 static
   * @deprecated since 12
   */
  function setLocalName(name: string): void;

  /**
   * 设置蓝牙扫描模式，决定本机设备是否可被连接，或者可被发现。搭配[onScanModeChange]{@link connection.onScanModeChange(callback: Callback<ScanMode>)}接
   * 口使用，可实时监听蓝牙扫描模式变更事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { ScanMode } mode - 蓝牙扫描模式。当扫描模式为SCAN_MODE_GENERAL_DISCOVERABLE时，超出duration持续时间（不为0），扫描模式会重新设置为
   *     SCAN_MODE_CONNECTABLE。
   * @param { int } duration - 设备可被发现的持续时间，取值范围：[0, +∞)，单位：ms。设置为0则表示持续可发现。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function setBluetoothScanMode(mode: ScanMode, duration: int): void;

  /**
   * 获取蓝牙扫描模式。搭配[onScanModeChange]{@link connection.onScanModeChange(callback: Callback<ScanMode>)}接口使用，可实时监听蓝牙扫描模式变更事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { ScanMode } 蓝牙扫描模式。
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
  function getBluetoothScanMode(): ScanMode;

  /**
   * 开启蓝牙扫描，发现对端蓝牙设备。
   * 
   * 该接口支持发现传统蓝牙设备和低功耗蓝牙设备，整个蓝牙扫描过程大约持续12s。
   * 扫描结果可通过API version 10开始支持的
   * [connection.on('bluetoothDeviceFind')]{@link connection.on(type: 'bluetoothDeviceFind', callback: Callback<Array<string>>)}
   * 或者API version 18开始支持的
   * [connection.on('discoveryResult')]{@link connection.on(type: 'discoveryResult', callback: Callback<Array<DiscoveryResult>>)}
   * 的回调函数获取到。推荐使用
   * [connection.on('discoveryResult')]{@link connection.on(type: 'discoveryResult', callback: Callback<Array<DiscoveryResult>>)}
   * ，该方式可以获取到更多设备信息。
   * 若在扫描过程中，请勿重复调用该方法（可使用[connection.isBluetoothDiscovering]{@link connection.isBluetoothDiscovering}判断蓝牙当前是否处于扫描过程中）
   * 。
   * 调用[connection.stopBluetoothDiscovery]{@link connection.stopBluetoothDiscovery}可以停止该方法开启的扫描流程，扫描停止后，才能开启下一次蓝牙扫描。
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
  function startBluetoothDiscovery(): void;

  /**
   * 关闭蓝牙扫描。
   * 
   * 关闭的扫描是由[connection.startBluetoothDiscovery]{@link connection.startBluetoothDiscovery}触发的。
   * 当应用不再需要扫描设备时，需主动调用该方法关闭扫描。
   * 若不在扫描过程中，请勿重复调用该方法（可使用[connection.isBluetoothDiscovering]{@link connection.isBluetoothDiscovering}判断蓝牙当前是否处于扫描过程中
   * ）。
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
  function stopBluetoothDiscovery(): void;

  /**
   * 判断本机蓝牙设备是否处于设备扫描状态。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { boolean } 是否开启蓝牙发现。true表示正在发起设备扫描，false表示未发起设备扫描。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 11 dynamic
   * @since 23 static
   */
  function isBluetoothDiscovering(): boolean;

  /**
   * 获取本地设备的profile UUID。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AsyncCallback<Array<ProfileUuids>> } callback - 回调函数。当获取UUID成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function getLocalProfileUuids(callback: AsyncCallback<Array<ProfileUuids>>): void;

  /**
   * 获取本地设备的profile UUID。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { Promise<Array<ProfileUuids>> } Promise对象，返回本地设备的ProfileUuids数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function getLocalProfileUuids(): Promise<Array<ProfileUuids>>;

  /**
   * 获取对端蓝牙设备的Profile协议能力，通过UUID区分。使用Callback异步回调。
   * 
   * 建议仅对已配对的设备调用该方法。
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址获取Profile协议能力。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示对端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { AsyncCallback<Array<ProfileUuids>> } callback - 回调函数。当获取UUID成功，err为undefined，获取到的是Profile协议能力集合；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs. [since 10 - 11]
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi [since 10 - 11]
   * @publicapi [since 12]
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  function getRemoteProfileUuids(deviceId: string, callback: AsyncCallback<Array<ProfileUuids>>): void;

  /**
   * 获取对端蓝牙设备的Profile协议能力，通过UUID区分。使用Promise异步回调。
   * 
   * 建议仅对已配对的设备调用该方法。
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址获取Profile协议能力。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示对端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { Promise<Array<ProfileUuids>> } Promise对象，返回支持的Profile协议能力集合。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs. [since 10 - 11]
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi [since 10 - 11]
   * @publicapi [since 12]
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  function getRemoteProfileUuids(deviceId: string): Promise<Array<ProfileUuids>>;

  /**
   * 连接对端设备支持的Profile（只包括A2DP、HFP和HID）。使用Callback异步回调。
   * 
   * API版本26.0.0之前，需先调用[connection.pairDevice]{@link connection.pairDevice}发起配对，且仅允许在每次发起配对后30秒内调用此接口一次。
   * 从API版本26.0.0开始，针对A2DP和HFP，调用接口无时间限制，可以在调用[connection.pairDevice]{@link connection.pairDevice}发起配对后任意时间内进行调用。针对
   * HID，仍需在每次发起配对后30秒内调用此接口。
   * 当配对成功后，建议先调用[getRemoteProfileUuids]{@link connection.getRemoteProfileUuids}主动查询目标设备支持的Profile能力。若存在应用需要的能力，才调用此接
   * 口。
   * 需要与接口[connection.disconnectAllowedProfiles]{@link connection.disconnectAllowedProfiles}配合使用。
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址进行Profile连接。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH [since 11 - 15]
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 16]
   * @param { string } deviceId - 表示需要连接的对端设备MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { AsyncCallback<void> } callback - 回调函数。当发起连接成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs. [since 11 - 15]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi [since 11 - 15]
   * @publicapi [since 16]
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function connectAllowedProfiles(deviceId: string, callback: AsyncCallback<void>): void;

  /**
   * 连接对端设备支持的Profile（只包括A2DP、HFP和HID）。使用Promise异步回调。
   * 
   * API版本26.0.0之前，需先调用[connection.pairDevice]{@link connection.pairDevice}发起配对，且仅允许在每次发起配对后30秒内调用此接口一次。
   * 从API版本26.0.0开始，针对A2DP和HFP，调用接口无时间限制，可以在调用[connection.pairDevice]{@link connection.pairDevice}发起配对后任意时间内进行调用。针对
   * HID，仍需在每次发起配对后30秒内调用此接口。
   * 当配对成功后，建议先调用[getRemoteProfileUuids]{@link connection.getRemoteProfileUuids}主动查询目标设备支持的Profile能力。若存在应用需要的能力，才调用此接
   * 口。
   * 需要与接口[connection.disconnectAllowedProfiles]{@link connection.disconnectAllowedProfiles}配合使用。
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址进行Profile连接。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH [since 11 - 15]
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 16]
   * @param { string } deviceId - 表示需要连接的对端设备MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { Promise<void> } Promise对象。无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs. [since 11 - 15]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi [since 11 - 15]
   * @publicapi [since 16]
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function connectAllowedProfiles(deviceId: string): Promise<void>;

  /**
   * 断开远端设备所有连接的profiles。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { string } deviceId - 表示断开的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { AsyncCallback<void> } callback - 回调函数。当发起断开成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function disconnectAllowedProfiles(deviceId: string, callback: AsyncCallback<void>): void;

  /**
   * 获取对端蓝牙设备的电量信息。使用Promise异步回调。
   * 
   * 对端蓝牙设备的电量信息变更通过[on('batteryChange')]{@link connection.on(type: 'batteryChange', callback: Callback<BatteryInfo>)}
   * 的回调结果获取。
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址获取电量信息。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示对端蓝牙设备的MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { Promise<BatteryInfo> } Promise对象，返回电量信息对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function getRemoteDeviceBatteryInfo(deviceId: string): Promise<BatteryInfo>;

  /**
   * 获取对端蓝牙设备的Product ID。从API version 16开始不再校验ohos.permission.ACCESS_BLUETOOTH 和 ohos.permission.MANAGE_BLUETOOTH权限。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH [since 11 - 15]
   * @param { string } deviceId - 表示远程设备的地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { string } 以字符串格式返回设备Product ID。
   * @throws { BusinessError } 201 - Permission denied. [since 11 - 15]
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function getRemoteProductId(deviceId: string): string;

  /**
   * 断开对端设备支持的Profile（只包括A2DP和HFP）。
   * 
   * 需要与接口[connection.connectAllowedProfiles]{@link connection.connectAllowedProfiles}配合使用。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH [since 11 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 26.0.0]
   * @param { string } deviceId - 表示需要断开连接的对端设备MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { Promise<void> } Promise对象。无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs. [since 11 - 24]
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed. [since 11 - 24]
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function disconnectAllowedProfiles(deviceId: string): Promise<void>;

  /**
   * 设置对端蓝牙设备的名称，不能设置为空字符串。如果设为空字符串会失败。使用Promise异步回调。
   * 
   * 建议仅对已配对的设备调用该方法。
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址进行名称设置。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示对端设备MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { string } name - 修改对端设备名称，名称长度范围：(0, 64]，单位：Byte。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function setRemoteDeviceName(deviceId: string, name: string): Promise<void>;

  /**
   * 设置蓝牙远端设备自定义类型，适用于蓝牙设置或设备管理应用中按设备类型（如汽车、耳机、助听器等）进行分类展示或差异化处理的场景。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 表示远端设备MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { DeviceType } type - 表示设备类型。
   * @returns { Promise<void> } 以Promise形式返回设置蓝牙远端设备类型的结果，设置失败时返回错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function setRemoteDeviceType(deviceId: string, type: DeviceType): Promise<void>;

  /**
   * 获取通过setRemoteDeviceType设置的蓝牙远端设备自定义类型。使用Promise异步回调。从API version 18开始不再校验ohos.permission.ACCESS_BLUETOOTH权限。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 12 - 17]
   * @param { string } deviceId - 表示远端设备MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { Promise<DeviceType> } 以Promise形式返回获取蓝牙远端设备类型的结果，返回值为设备类型。
   * @throws { BusinessError } 201 - Permission denied. [since 12 - 17]
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs. [since 18]
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function getRemoteDeviceType(deviceId: string): Promise<DeviceType>;

  /**
   * 查找蓝牙耳机设备时，向耳机发送控制命令。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { ControlDeviceActionParams } controlDeviceActionParams - 控制蓝牙外设的相关信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  function controlDeviceAction(controlDeviceActionParams: ControlDeviceActionParams): Promise<void>;

  /**
   * 获取对端蓝牙设备最近一次连接的时间点。使用Promise异步回调。
   * 
   * 从API version 21开始，此接口支持使用对端设备的实际MAC地址获取最近一次连接时间。
   *
   * @param { string } deviceId - 表示对端设备MAC地址。例如："XX:XX:XX:XX:XX:XX"。
   * @returns { Promise<long> } Promise对象，返回对端蓝牙设备最近一次连接的时间点，格式为秒级的UNIX时间戳。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  function getLastConnectionTime(deviceId: string): Promise<long>;

  /**
   * 更新云设备到蓝牙设置，适用于换机恢复或跨设备同步场景下，将云端已配对设备信息同步到本地蓝牙设置中。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { TrustedPairedDevices } trustedPairedDevices - 表示云设备列表。
   * @returns { Promise<void> } 以Promise形式返回设置云设备的结果。设置失败时返回错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  function updateCloudBluetoothDevice(trustedPairedDevices: TrustedPairedDevices): Promise<void>;

  /**
   * 获取本机的带外（Out of Band, OOB）通信数据。生成的OOB数据经带外通道传输至对端设备后，对端设备可通过
   * [pairDeviceOutOfBand]{@link connection.pairDeviceOutOfBand}使用该数据发起配对流程。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { BluetoothTransport } transport - 表示在配对对端设备时使用的传输方式。
   *     若使用传统蓝牙（BR/EDR），则传入TRANSPORT_BR_EDR。若使用低功耗蓝牙（BLE），则传入TRANSPORT_LE。不支持其他
   *     [BluetoothTransport]{@link connection.BluetoothTransport}类型。
   * @returns { Promise<OobData> } Promise对象，返回本机的OOB数据。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function generateLocalOobData(transport: BluetoothTransport): Promise<OobData>;

  /**
   * 根据已配对设备实际MAC地址的哈希值获取对应的虚拟MAC地址。
   * 
   * 当[HashAlgorithmType]{@link connection.HashAlgorithmType}为HASH_ALGORITHM_SHA256时，应使用大写实际MAC地址通过SHA256算法生成对应的哈希值（十六进制
   * 64位），取后32位作为输入，哈希值字母不区分大小写。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { HashAlgorithmType } algorithmType - 哈希算法类型。
   * @param { string } hashValue - 哈希值，例如："c10b57deb2e1aafd255596e0d4fd6789"。
   * @returns { string } 返回与哈希值相对应的设备虚拟MAC地址，例如："XX:XX:XX:XX:XX:XX"，返回地址为大写。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900015 - Parameter format mismatch with specification.
   * @throws { BusinessError } 2900016 - Device unpaired.
   * @throws { BusinessError } 2900099 - Internal system error. For example, IPC error.
   *     Detailed error messages can be used to assist in locating the problem.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  function getVirtualAddressByHash(algorithmType: HashAlgorithmType, hashValue: string): string;

  /**
   * 把车钥匙执行开卡、删卡操作的事件通知蓝牙，以便蓝牙模块记录相应的维测（DFX）数据用于后续问题定位。
   *
   * @param { string } deviceId - 表示远端设备MAC地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { CarKeyActionType } action - 表示车钥匙执行的操作，例如开卡、删卡。
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function setCarKeyDfxData(deviceId: string, action: CarKeyActionType): void;

  /**
   * 获取车钥匙维测数据，例如蓝牙车钥匙连接、配对等维测数据。
   *
   * @returns { string } 以字符串格式返回车钥匙维测数据。
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API when the short-range chip is not inserted on the 2in1 device.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function getCarKeyDfxData(): string;

  /**
   * 订阅蓝牙设备扫描结果上报事件。使用Callback异步回调。
   * 
   * 可扫描到的设备类型包括传统蓝牙设备和低功耗蓝牙设备。
   * 该上报方式只支持获取设备地址信息。
   * 推荐使用API version 18开始支持的
   * [connection.on('discoveryResult')]{@link connection.on(type: 'discoveryResult', callback: Callback<Array<DiscoveryResult>>)}
   * 扫描上报方式，可获取到更多设备信息，包括设备地址、设备信号强度、设备名称和设备类型。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { 'bluetoothDeviceFind' } type - 事件回调类型，支持的事件为'bluetoothDeviceFind'，表示蓝牙设备扫描结果上报事件。当调用
   *     [connection.startBluetoothDiscovery]{@link connection.startBluetoothDiscovery}后，开始设备扫描，若扫描到设备，触发该事件。
   * @param { Callback<Array<string>> } callback - 指定订阅的回调函数，会携带扫描到的设备地址集合。
   *     基于信息安全考虑，此处获取的设备地址为虚拟MAC地址。
   *     已配对的地址不会变更。
   *     若该设备重启蓝牙开关，重新获取到的虚拟地址会立即变更。
   *     若取消配对，蓝牙子系统会根据该地址的实际使用情况，决策后续变更时机；若其他应用正在使用该地址，则不会立刻变更。
   *     若要持久化保存该地址，可使用[access.addPersistentDeviceId]{@link @ohos.bluetooth.access:access.addPersistentDeviceId}方
   *     法。
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
  function on(type: 'bluetoothDeviceFind', callback: Callback<Array<string>>): void;

  /**
   * 订阅发现远程蓝牙设备时上报的事件。
   * 如果应用有ohos.permission.GET_BLUETOOTH_PEERS_MAC，则对端设备地址类型为真实地址。
   * 否则，对端设备地址类型为virtual。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 23 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { Callback<Array<string>> } callback - 用于监听发现事件的回调
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  function onBluetoothDeviceFind(callback: Callback<Array<string>>): void;

  /**
   * 取消订阅蓝牙设备扫描结果上报事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'bluetoothDeviceFind' } type - 事件回调类型，支持的事件为'bluetoothDeviceFind'，表示蓝牙设备扫描结果上报事件。
   * @param { Callback<Array<string>> } callback - 指定取消订阅的回调函数通知。
   *     若传参，则需与
   *     [connection.on('bluetoothDeviceFind')]{@link connection.on(type: 'bluetoothDeviceFind', callback: Callback<Array<string>>)}
   *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function off(type: 'bluetoothDeviceFind', callback?: Callback<Array<string>>): void;

  /**
   * Unsubscribe the event reported when a remote Bluetooth device is discovered.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<Array<string>> } [callback] - Callback used to listen for the discovering event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 23 static
   */
  function offBluetoothDeviceFind(callback?: Callback<Array<string>>): void;

  /**
   * 订阅蓝牙设备扫描结果上报事件。使用Callback异步回调。
   * 
   * 可扫描到的设备类型包括传统蓝牙设备和低功耗蓝牙设备。
   * 该上报方式支持获取设备地址、设备信号强度、设备名称和设备类型。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.GET_BLUETOOTH_PEERS_MAC [since 12 - 17]
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 18 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { 'discoveryResult' } type - 事件回调类型，支持的事件为'discoveryResult'，表示蓝牙设备扫描结果上报事件。当调用
   *     [connection.startBluetoothDiscovery]{@link connection.startBluetoothDiscovery}后，开始设备扫描，若扫描到设备，触发该事件。
   * @param { Callback<Array<DiscoveryResult>> } callback - 指定订阅的回调函数，会携带扫描结果的集合。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed. [since 12 - 24]
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi [since 12 - 17]
   * @publicapi [since 18]
   * @stagemodelonly
   * @since 12 dynamic
   */
  function on(type: 'discoveryResult', callback: Callback<Array<DiscoveryResult>>): void;

  /**
   * Subscribe the event reported when a remote Bluetooth device is discovered.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 23 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { Callback<Array<DiscoveryResult>> } callback - Callback used to listen for the discovering event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 static
   */
  function onDiscoveryResult(callback: Callback<Array<DiscoveryResult>>): void;

  /**
   * 取消订阅蓝牙设备扫描结果上报事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.GET_BLUETOOTH_PEERS_MAC [since 12 - 17]
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 18]
   * @param { 'discoveryResult' } type - 事件回调类型，支持的事件为'discoveryResult'，表示蓝牙设备扫描结果上报事件。
   * @param { Callback<Array<DiscoveryResult>> } callback - 指定取消订阅的回调函数通知。
   *     若传参，则需与
   *     [connection.on('discoveryResult')]{@link connection.on(type: 'discoveryResult', callback: Callback<Array<DiscoveryResult>>)}
   *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi [since 12 - 17]
   * @publicapi [since 18]
   * @stagemodelonly
   * @since 12 dynamic
   */
  function off(type: 'discoveryResult', callback?: Callback<Array<DiscoveryResult>>): void;

  /**
   * Unsubscribe the event reported when a remote Bluetooth device is discovered.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<Array<DiscoveryResult>> } [callback] - Callback used to listen for the discovering event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 static
   */
  function offDiscoveryResult(callback?: Callback<Array<DiscoveryResult>>): void;

  /**
   * 订阅蓝牙配对状态变化事件。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { 'bondStateChange' } type - 事件回调类型，支持的事件为'bondStateChange'，表示蓝牙配对状态变化事件。
   *     当调用[connection.pairDevice]{@link connection.pairDevice}发起主动配对，或者本机设备收到其他设备的配对请求时，触发该事件。
   * @param { Callback<BondStateParam> } callback - 指定订阅的回调函数，会携带配对状态结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed. [since 10 - 24]
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   */
  function on(type: 'bondStateChange', callback: Callback<BondStateParam>): void;

  /**
   * 订阅绑定远端蓝牙设备上报的事件。
   * 如果应用有ohos.permission.GET_BLUETOOTH_PEERS_MAC，则对端设备地址类型为真实地址。
   * 否则，对端设备地址类型为virtual。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 23 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { Callback<BondStateParam> } callback - 用于监听绑定状态事件的回调
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  function onBondStateChange(callback: Callback<BondStateParam>): void;

  /**
   * 取消订阅蓝牙配对状态变化事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'bondStateChange' } type - 事件回调类型，支持的事件为'bondStateChange'，表示蓝牙配对状态变化事件。
   * @param { Callback<BondStateParam> } callback - 指定取消订阅的回调函数通知。
   *     若传参，则需与
   *     [connection.on('bondStateChange')]{@link connection.on(type: 'bondStateChange', callback: Callback<BondStateParam>)}
   *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   */
  function off(type: 'bondStateChange', callback?: Callback<BondStateParam>): void;

  /**
   * Unsubscribe the event reported when a remote Bluetooth device is bonded.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<BondStateParam> } [callback] - Callback used to listen for the bond state event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  function offBondStateChange(callback?: Callback<BondStateParam>): void;

  /**
   * 订阅配对请求事件。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { 'pinRequired' } type - 事件回调类型，支持的事件为'pinRequired'，表示配对请求事件。当调用
   *     [connection.pairDevice]{@link connection.pairDevice}发起主动配对，或者本机设备收到其他设备的配对请求时，触发该事件。收到配对请求后，可调用
   *     [connection.setDevicePairingConfirmation]{@link connection.setDevicePairingConfirmation}确认或拒绝配对请求。
   * @param { Callback<PinRequiredParam> } callback - 指定订阅的回调函数，会携带配对请求。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed. [since 10 - 24]
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   */
  function on(type: 'pinRequired', callback: Callback<PinRequiredParam>): void;

  /**
   * Subscribe the event of a pairing request from a remote Bluetooth device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH [since 23 - 24]
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
   * @param { Callback<PinRequiredParam> } callback - Callback used to listen for the pairing request event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 static
   */
  function onPinRequired(callback: Callback<PinRequiredParam>): void;

  /**
   * 取消订阅配对请求事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'pinRequired' } type - 事件回调类型，支持的事件为'pinRequired'，表示配对请求事件。
   * @param { Callback<PinRequiredParam> } callback - 指定取消订阅的回调函数通知。
   *     若传参，则需与
   *     [connection.on('pinRequired')]{@link connection.on(type: 'pinRequired', callback: Callback<PinRequiredParam>)}中
   *     的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   */
  function off(type: 'pinRequired', callback?: Callback<PinRequiredParam>): void;

  /**
   * Unsubscribe the event of a pairing request from a remote Bluetooth device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<PinRequiredParam> } [callback] - Callback used to listen for the pairing request event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 static
   */
  function offPinRequired(callback?: Callback<PinRequiredParam>): void;

  /**
   * 订阅对端设备的电量信息变化事件。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'batteryChange' } type - 事件回调类型，支持的事件为'batteryChange'，表示对端设备的电量信息变化事件。当该设备通知电量变化时，会触发该事件。
   * @param { Callback<BatteryInfo> } callback - 指定订阅的回调函数，返回电量信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 12 dynamic
   */
  function on(type: 'batteryChange', callback: Callback<BatteryInfo>): void;

  /**
   * Subscribe the event of battery state changed from a remote device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<BatteryInfo> } callback - Callback used to listen.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 static
   */
  function onBatteryChange(callback: Callback<BatteryInfo>): void;

  /**
   * 取消订阅对端设备的电量信息变化事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'batteryChange' } type - 事件回调类型，支持的事件为'batteryChange'，表示对端设备的电量信息变化事件。
   * @param { Callback<BatteryInfo> } callback - 指定取消订阅的回调函数通知。
   *     若传参，则需与
   *     [connection.on('batteryChange')]{@link connection.on(type: 'batteryChange', callback: Callback<BatteryInfo>)}中的
   *     回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 12 dynamic
   */
  function off(type: 'batteryChange', callback?: Callback<BatteryInfo>): void;

  /**
   * Unsubscribe the event of battery state changed from a remote device.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<BatteryInfo> } [callback] - Callback used to listen.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 static
   */
  function offBatteryChange(callback?: Callback<BatteryInfo>): void;

  /**
   * 订阅蓝牙扫描模式变更事件。使用Callback异步回调。当调用[setBluetoothScanMode]{@link connection.setBluetoothScanMode}更改当前蓝牙扫描模式后，如订阅此事件，则会收到
   * 携带最新扫描模式的回调函数。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<ScanMode> } callback - 指定订阅的回调函数，会携带变更后最新的蓝牙扫描模式。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function onScanModeChange(callback: Callback<ScanMode>): void;

  /**
   * 取消订阅蓝牙扫描模式变更事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Callback<ScanMode> } [callback] - 指定取消订阅的回调函数通知。
   *     若传参，则需与[connection.onScanModeChange]{@link connection.onScanModeChange(callback: Callback<ScanMode>)}中的回调函数
   *     一致；若无传参，则取消订阅所有蓝牙扫描模式变更的回调函数通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function offScanModeChange(callback?: Callback<ScanMode>): void;

  /**
   * 订阅蓝牙ACL链路连接状态变化事件。当触发蓝牙ACL链路连接或断开时，如订阅此事件，则会收到携带对应设备的地址与连接状态的回调函数。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
   * @param { Callback<AclStateResult> } callback - 回调函数，返回蓝牙ACL链路连接状态
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
   * @throws { BusinessError } 2900099 - Internal system error. For example, IPC error.
   *     Detailed error messages can be used to assist in locating the problem.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function onAclStateChange(callback: Callback<AclStateResult>): void;

  /**
   * 取消订阅蓝牙ACL链路连接状态变化事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.GET_BLUETOOTH_PEERS_MAC)
   * @param { Callback<AclStateResult> } [callback] - 指定取消订阅的回调函数通知。
   *     若传参，则需与[connection.onAclStateChange]{@link connection.onAclStateChange(callback: Callback<AclStateResult>)}
   *     中的回调函数一致；若无传参，则取消订阅所有蓝牙ACL连接状态变更的回调函数通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
   * @throws { BusinessError } 2900099 - Internal system error. For example, IPC error.
   *     Detailed error messages can be used to assist in locating the problem.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function offAclStateChange(callback?: Callback<AclStateResult>): void;

  /**
   * 描述配对状态结果的参数结构。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  interface BondStateParam {
    /**
     * 配对中的对端设备地址。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * 配对状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    state: BondState;
    /**
     * 配对失败的原因。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 12 dynamic
     * @since 23 static
     */
    cause: UnbondCause;
    /**
     * 配对失败的具体原因，例如：本端业务主动删除配对时，返回：USER_REMOVED。
     * 
     * **起始版本**：26.0.0
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    causeMessage?: string;
  }

  /**
   * 描述配对请求的参数结构。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface PinRequiredParam {
    /**
     * 要配对的对端设备地址。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * 配对过程中的密钥。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    pinCode: string;
    /**
     * 表示要配对的设备类型。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    pinType: PinType;
  }

  /**
   * 描述蓝牙设备的类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  interface DeviceClass {
    /**
     * 主要类型。是蓝牙标准协议中定义的类型字段。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    majorClass: MajorClass;
    /**
     * 子类型，是在主要类型基础上进一步细分的类型。是蓝牙标准协议中定义的类型字段。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    majorMinorClass: MajorMinorClass;
    /**
     * 设备类型。是蓝牙标准协议中定义的类型字段，包含了[MajorClass]{@link @ohos.bluetooth.constant:constant.MajorClass}、
     * [MajorMinorClass]{@link @ohos.bluetooth.constant:constant.MajorMinorClass}和支持的主要服务这三种设备信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    classOfDevice: int;
  }

  /**
   * 枚举，表示设备传输类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  enum BluetoothTransport {
    /**
     * 传统蓝牙（Basic Rate/Enhanced Data Rate，BR/EDR）设备传输方式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    TRANSPORT_BR_EDR = 0,
    /**
     * 低功耗蓝牙（Bluetooth Low Energy，BLE）设备传输方式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    TRANSPORT_LE = 1,
    /**
     * 同时支持传统蓝牙（BR/EDR）和低功耗蓝牙（BLE）的双模设备传输方式。设备可以根据需要选择使用传统蓝牙（BR/EDR）或低功耗蓝牙（BLE）进行通信。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    TRANSPORT_DUAL = 2,
    /**
     * 未知的设备传输方式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    TRANSPORT_UNKNOWN = 3
  }

  /**
   * 枚举，表示扫描模式。该模式决定设备是否可被发现或可被连接。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ScanMode {
    /**
     * 不可发现、不可连接模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    SCAN_MODE_NONE = 0,
    /**
     * 可连接模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    SCAN_MODE_CONNECTABLE = 1,
    /**
     * 通用可发现模式，可被长时间发现。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    SCAN_MODE_GENERAL_DISCOVERABLE = 2,
    /**
     * 有限可发现模式，持续一定时间。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    SCAN_MODE_LIMITED_DISCOVERABLE = 3,
    /**
     * 可连接及通用可发现模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE = 4,
    /**
     * 可连接及有限可发现模式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    SCAN_MODE_CONNECTABLE_LIMITED_DISCOVERABLE = 5
  }

  /**
   * 枚举，配对状态。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum BondState {
    /**
     * 未配对状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    BOND_STATE_INVALID = 0,
    /**
     * 配对中的状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    BOND_STATE_BONDING = 1,
    /**
     * 已配对状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    BOND_STATE_BONDED = 2
  }

  /**
   * 枚举，蓝牙配对类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  enum PinType {
    /**
     * 用户需要输入对端设备上显示的PIN码。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    PIN_TYPE_ENTER_PIN_CODE = 0,
    /**
     * 用户需要输入对端设备上显示的PASSKEY。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    PIN_TYPE_ENTER_PASSKEY = 1,
    /**
     * 用户需要确认本地设备上显示的PASSKEY。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    PIN_TYPE_CONFIRM_PASSKEY = 2,
    /**
     * 无PASSKEY，用户需要接受或拒绝配对请求。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    PIN_TYPE_NO_PASSKEY_CONSENT = 3,
    /**
     * 本地设备显示PASSKEY，用户需要在对端设备上输入该PASSKEY。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    PIN_TYPE_NOTIFY_PASSKEY = 4,
    /**
     * bluetooth 2.0设备，用户需要输入对端设备上显示的PIN码。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    PIN_TYPE_DISPLAY_PIN_CODE = 5,
    /**
     * 用户需要接受或拒绝OOB配对请求。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    PIN_TYPE_OOB_CONSENT = 6,
    /**
     * 用户需要输入对端设备上显示的16位PIN码。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    PIN_TYPE_PIN_16_DIGITS = 7
  }

  /**
   * 扫描到设备后，上报的扫描结果。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi [since 12 - 17]
   * @publicapi [since 18]
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface DiscoveryResult {
    /**
     * 扫描到的设备地址。
     * 
     * 基于信息安全考虑，此处获取的设备地址为虚拟MAC地址。
     * 
     * 已配对的地址不会变更。
     * 若该设备重启蓝牙开关，重新获取到的虚拟地址会立即变更。
     * 若取消配对，蓝牙子系统会根据该地址的实际使用情况，决策后续变更时机；若其他应用正在使用该地址，则不会立刻变更。
     * 若要持久化保存该地址，可使用[access.addPersistentDeviceId]{@link @ohos.bluetooth.access:access.addPersistentDeviceId}方法。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * 扫描到的设备信号强度，单位：dBm。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    rssi: int;
    /**
     * 扫描到的设备名称。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    deviceName: string;
    /**
     * 扫描到的设备类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    deviceClass: DeviceClass;
  }

  /**
   * 描述设备的电量信息。
   * 
   * 只有支持特定电量信息AT（Attention）命令（包括：+XEVENT和IPHONEACCEV）的设备才支持上报有效的电量信息。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface BatteryInfo {
    /**
     * 表示远端设备的MAC地址。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * 表示设备的电量值，单位：%。取值范围：0-100，表示电量百分比；如果该值为-1，表示没有电量信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    batteryLevel: int;
    /**
     * 若是蓝牙耳机设备类型，表示左侧耳机的电量值，单位：%。取值范围：0-100，表示电量百分比；如果该值为-1，表示没有电量信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    leftEarBatteryLevel: int;
    /**
     * 若是蓝牙耳机设备类型，表示左侧耳机的充电状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    leftEarChargeState: DeviceChargeState;
    /**
     * 若是蓝牙耳机设备类型，表示右侧耳机的电量值，单位：%。取值范围：0-100，表示电量百分比；如果该值为-1，表示没有电量信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    rightEarBatteryLevel: int;
    /**
     * 若是蓝牙耳机设备类型，表示右侧耳机的充电状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    rightEarChargeState: DeviceChargeState;
    /**
     * 若是蓝牙耳机设备类型，表示耳机仓的电量值，单位：%。取值范围：0-100，表示电量百分比；如果该值为-1，表示没有电量信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    boxBatteryLevel: int;
    /**
     * 若是蓝牙耳机设备类型，表示耳机仓的充电状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    boxChargeState: DeviceChargeState;
  }

  /**
   * 枚举，表示设备当前的充电状态。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  enum DeviceChargeState {
    /**
     * 不支持超级快充能力的设备当前处于未充电状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_NORMAL_CHARGE_NOT_CHARGED = 0,
    /**
     * 不支持超级快充能力的设备当前处于充电状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_NORMAL_CHARGE_IN_CHARGING = 1,
    /**
     * 支持超级快充能力的设备当前处于未充电状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_SUPER_CHARGE_NOT_CHARGED = 2,
    /**
     * 支持超级快充能力的设备当前处于充电状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_SUPER_CHARGE_IN_CHARGING = 3
  }

  /**
   * 枚举，蓝牙远程设备的自定义类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  enum DeviceType {
    /**
     * 默认设备类型，与原类型一致。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_DEFAULT = 0,
    /**
     * 汽车。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_CAR = 1,
    /**
     * 耳机。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_HEADSET = 2,
    /**
     * 助听器<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_HEARING = 3,
    /**
     * 眼镜。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_GLASSES = 4,
    /**
     * 手表。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_WATCH = 5,
    /**
     * 音响。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_SPEAKER = 6,
    /**
     * 其他设备。<br/
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_OTHERS = 7
  }

  /**
   * 枚举，配对失败原因。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 12 dynamic
   * @since 23 static
   */
  enum UnbondCause {
    /**
     * 用户主动移除设备。若配对状态[BondState]{@link connection.BondState}是已配对，也表示配对成功。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 12 dynamic
     * @since 23 static
     */
    USER_REMOVED = 0,
    /**
     * 对端设备不在线。例如：对端设备蓝牙是关闭的。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    REMOTE_DEVICE_DOWN = 1,
    /**
     * 鉴权失败。例如：两端设备密钥不匹配。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    AUTH_FAILURE = 2,
    /**
     * 鉴权被拒绝。例如：对端设备拒绝了配对请求。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    AUTH_REJECTED = 3,
    /**
     * 内部错误。例如：设备不支持配对、配对过程超时等异常。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    INTERNAL_ERROR = 4
  }
  /**
   * 控制命令的配置参数。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  interface ControlDeviceActionParams {
    /**
     * 表示要控制的设备地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * 表示控制类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    type: ControlType;
    /**
     * 表示控制动作。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    typeValue: ControlTypeValue;
    /**
     * 表示控制对象。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    controlObject: ControlObject;
  }

  /**
   * 枚举，控制类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  enum ControlType {
    /**
     * 表示控制类型为播放。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    PLAY = 0,
    /**
     * 表示控制类型为振动。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    VIBRATE = 1,
    /**
     * 表示控制类型为闪光。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    FLASH = 2,
    /**
     * 表示控制类型为锁定。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    LOCK = 3,
    /**
     * 表示控制类型为擦除。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    ERASE = 4
  }

  /**
   * 枚举，控制动作。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  enum ControlTypeValue {
    /**
     * 表示禁用。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    DISABLE = 0,
    /**
     * 表示使能。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    ENABLE = 1,
    /**
     * 表示查询。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    QUERY = 2
  }

  /**
   * 枚举，控制对象。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  enum ControlObject {
    /**
     * 表示控制对象是左耳。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    LEFT_EAR = 0,
    /**
     * 表示控制对象是右耳。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    RIGHT_EAR = 1,
    /**
     * 表示控制对象是双耳。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    LEFT_RIGHT_EAR = 2
  }

  /**
   * 云设备列表。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  interface TrustedPairedDevices {
    /**
     * 表示云设备列表。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    trustedPairedDevices: Array<TrustedPairedDevice>;
  }

  /**
   * 云设备信息。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  interface TrustedPairedDevice {
    /**
     * 表示设备的序列号。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    sn: string;
    /**
     * 表示设备类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    deviceType: string;
    /**
     * 表示左侧耳机的充电状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    modelId: string;
    /**
     * 表示制造商信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    manufactory: string;
    /**
     * 表示设备产品信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    productId: string;
    /**
     * 表示hilink版本信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    hiLinkVersion: string;
    /**
     * 表示设备MAC地址。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    macAddress: string;
    /**
     * 表示设备服务类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    serviceType: string;
    /**
     * 表示设备ID。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    serviceId: string;
    /**
     * 表示设备名字。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    deviceName: string;
    /**
     * 表示设备的UUID。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    uuids: string;
    /**
     * 表示远端设备类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    bluetoothClass: int;
    /**
     * 表示设备的token信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    token: ArrayBuffer;
    /**
     * 表示设备名字的修改时间。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    deviceNameTime: long;
    /**
     * 表示设备广播信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    secureAdvertisingInfo: ArrayBuffer;
    /**
     * 表示设备配对状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    pairState: int;
  }

  /**
   * 用于OOB配对的数据对象。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface OobData {
    /**
     * 蓝牙设备的地址信息。
     * 
     * 在使用OobData时，[BluetoothAddress]{@link @ohos.bluetooth.common:common.BluetoothAddress}中的address、addressType和
     * rawAddressType均为必选参数，且addressType必须设置为REAL。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    deviceId: BluetoothAddress;
    /**
     * 确认哈希值，长度为16个Byte。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    confirmationHash: Uint8Array;
    /**
     * 随机哈希值，长度为16个Byte。若不设置该值，则默认值为全0。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    randomizerHash?: Uint8Array;
    /**
     * 蓝牙设备的名称。若不设置该值，则默认值为空字符串。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    deviceName?: string;
    /**
     * 蓝牙设备在连接过程中的角色。若不设置该值，则默认值为DEVICE_ROLE_PERIPHERAL_ONLY。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    deviceRole?: DeviceRole;
  }
  /**
   * 枚举，蓝牙设备在连接过程中的角色。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  enum DeviceRole {
    /**
     * 表示该蓝牙设备仅支持作为外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    DEVICE_ROLE_PERIPHERAL_ONLY = 0,
    /**
     * 表示该蓝牙设备仅支持作为中心设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    DEVICE_ROLE_CENTRAL_ONLY = 1,
    /**
     * 表示该蓝牙设备既可以作为中心设备，也可以作为外围设备，但优先作为外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    DEVICE_ROLE_BOTH_PREFER_PERIPHERAL = 2,
    /**
     * 表示该蓝牙设备既可以作为中心设备，也可以作为外围设备，但优先作为中心设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    DEVICE_ROLE_BOTH_PREFER_CENTRAL = 3
  }

  /**
   * 枚举，车钥匙执行的操作。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  enum CarKeyActionType {
    /**
     * 表示车钥匙执行开卡操作。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    CAR_KEY_ACTION_ADD = 0,
    /**
     * 表示车钥匙执行删卡操作。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    CAR_KEY_ACTION_DELETE = 1
  }

  /**
   * 枚举，表示哈希算法类型。
   * 
   * 哈希算法是一种数学函数，通过对输入数据进行复杂计算，生成一个唯一且固定长度的字符串（即哈希值）。常用于数据完整性校验、数字签名等场景。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  enum HashAlgorithmType {
    /**
     * SHA256哈希算法。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    HASH_ALGORITHM_SHA256 = 0
  }

  /**
   * 描述ACL连接状态的参数结构。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface AclStateResult {
    /**
     * 表示对端设备的地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    deviceId: string;
    /**
     * 连接状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    state: AclState;
  }

  /**
   * 枚举，表示ACL连接状态。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export enum AclState {
    /**
     * ACL链路已连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    STATE_CONNECTED = 0,
    /**
     * ACL链路已断开连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    STATE_DISCONNECTED = 1
  }
}
export default connection;