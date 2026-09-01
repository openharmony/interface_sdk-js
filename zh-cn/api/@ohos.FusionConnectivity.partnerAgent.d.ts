/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 系统接口
 * @kit ConnectivityKit
 */

import type common from './@ohos.bluetooth.common';
/**
 * 本模块基于蓝牙通信技术，为应用提供设备发现与设备下线的通知功能，主要功能特性包括：
 * 
 *  动态监听并发现应用预先注册的蓝牙设备。
 *  采用进程启动机制，当目标设备出现时自动启动应用的[PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}
 * 进程。
 *  采用进程销毁机制，当所有设备下线时自动销毁应用的[PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}
 * 进程。
 *  通过[PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}的接口通知应用发现已注册设备。
 *
 * @syscap SystemCapability.Communication.FusionConnectivity.Core
 * @stagemodelonly
 * @since 23 dynamic
 * @since 26.1.0 static
 */
declare namespace partnerAgent {
  /**
   * 判断本机设备是否支持外设互通功能，若该接口返回值是false，该文件内的其他接口均无法使用。
   *
   * @returns { boolean } 是否支持外设互通功能。true表示支持外设互通功能，false表示不支持外设互通功能。
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function isPartnerAgentSupported(): boolean;

  /**
   * 应用注册设备，使用Promise异步回调。
   * 
   *  建议先使用[isPartnerAgentSupported]{@link partnerAgent.isPartnerAgentSupported}判断本机是否支持外设互通功能。仅支持情况下才能使用融合短距外设互通模块功能。
   *  可以通过接口[isDeviceBound]{@link partnerAgent.isDeviceBound}判断设备是否已注册。若已注册，无需重复调用。
   *  应用需要先实现[PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}。
   *  应用注册该设备后，如果外设互通子系统检测到该设备，且BusinessCapability中至少一项为true时，会激活应用的
   * [PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}进程。应用可以在新进程中执行业务操作。每当已注册
   * 设备被发现或者已断连时，该进程将被激活并保持运行3分钟（时间随着新的通知刷新）。
   *  在应用注册前，需先调用[connection.pairDevice]{@link @ohos.bluetooth.connection:connection.pairDevice}与该设备完成蓝牙配对。如果该设备已注册，且用户
   * 在注册后取消了与该设备的配对，该设备的发现和下线通知功能将自动关闭，但注册信息会保留30天。若在这30天内重新与该设备进行蓝牙配对，外设互通子系统可以恢复设备的发现和下线通知功能。否则，注册信息会被清除。
   *  可以通过接口[getBoundDevices]{@link partnerAgent.getBoundDevices}获取所有已注册过的设备。
   *  应用在使用该接口前，建议提示用户并获取应用注册该设备的授权。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { PartnerDeviceAddress } deviceAddress - 应用注册的设备地址信息。
   *     应用需配置PartnerDeviceAddress类型的bluetoothAddress选项。
   * @param { DeviceCapability } deviceCapability - 注册设备支持的能力。
   *     配置supportBR选项后，外设互通子系统将监听与该设备的[ACL](docroot://connectivity/bluetooth/terminology.md#acl)连接状态，一旦建立ACL连接，即
   *     视为成功发现该设备；
   *     配置supportBleAdvertiser选项后，系统将启动该设备的[BLE](docroot://connectivity/bluetooth/terminology.md#ble)扫描，扫描到该设备后，
   *     同样视为成功发现该设备。
   *     注意：
   *     为了减少系统功耗，BLE扫描到该设备后，若应用在3分钟内未与该设备建立ACL连接，外设互通子系统将自动终止应用的PartnerAgentExtensionAbility进程。
   * @param { BusinessCapability } businessCapability - 应用注册设备的业务功能，包括媒体控制、通话控制。
   *     注意：
   *     supportMediaControl和supportTelephonyControl均选择false时，设备发现时不会拉起
   *     [PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}进程。
   * @param { string } partnerAgentExtensionAbilityName - 该参数需与应用模块级配置文件
   *     [module.json5](docroot://quick-start/module-configuration-file.md) 中的
   *     [extensionabilities](docroot://quick-start/module-configuration-file.md#extensionabilities标签) name属性值相同。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 34900003 - The device is not paired.
   * @throws { BusinessError } 34900004 - The device has already been bound to the PartnerAgentExtensionAbility.
   * @throws { BusinessError } 34900005 - Bluetooth disabled.
   * @throws { BusinessError } 34900099 - Internal error.
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function bindDevice(deviceAddress: PartnerDeviceAddress, deviceCapability: DeviceCapability,
    businessCapability: BusinessCapability, partnerAgentExtensionAbilityName: string): Promise<void>;

  /**
   * 应用解注册设备，使用Promise异步回调。使用前建议先调用[isPartnerAgentSupported]{@link partnerAgent.isPartnerAgentSupported}判断本机是否支持外设互通功能，若
   * 不支持则本接口不可用。
   * 
   *  调用本接口进行解注册后，应用的[PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}进程将不再接收
   * 此设备的发现和下线状态通知。
   *  应用解注册的设备需是已通过[bindDevice]{@link partnerAgent.bindDevice}接口注册过的设备，建议与bindDevice接口成对使用。
   *  建议使用前通过接口[isDeviceBound]{@link partnerAgent.isDeviceBound}判断设备是否已注册。若已注册，可调用该接口。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { PartnerDeviceAddress } deviceAddress - 应用注册的设备地址信息。
   *     应用必须配置PartnerDeviceAddress类型的bluetoothAddress选项。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 34900001 - The device is not bound.
   * @throws { BusinessError } 34900099 - Internal error.
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function unbindDevice(deviceAddress: PartnerDeviceAddress): Promise<void>;

  /**
   * 判断当前应用是否已注册过该设备。使用前建议先调用[isPartnerAgentSupported]{@link partnerAgent.isPartnerAgentSupported}判断本机是否支持外设互通功能，若不支持则本接
   * 口不可用。
   * 
   *  通过调用[bindDevice]{@link partnerAgent.bindDevice}接口进行注册。
   *  通过调用[unbindDevice]{@link partnerAgent.unbindDevice}接口进行解注册。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { PartnerDeviceAddress } deviceAddress - 应用注册的设备地址信息。
   *     应用需配置PartnerDeviceAddress类型的bluetoothAddress选项。
   * @returns { boolean } 应用是否注册过该设备。 true表示已注册设备，false表示未注册设备。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 34900099 - Internal error.
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function isDeviceBound(deviceAddress: PartnerDeviceAddress): boolean;

  /**
   * 获取应用当前注册过的所有设备。使用前建议先调用[isPartnerAgentSupported]{@link partnerAgent.isPartnerAgentSupported}判断本机是否支持外设互通功能，
   * 若不支持则本接口不可用。
   * 
   *  可通过调用[bindDevice]{@link partnerAgent.bindDevice}接口注册设备。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { PartnerDeviceAddress[] } 应用注册过的所有设备。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 34900099 - Internal error.
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function getBoundDevices(): PartnerDeviceAddress[];

  /**
   * 开启外设互通功能，使用Promise异步回调。适用于应用需要为已绑定蓝牙设备提供外设互通能力的场景。
   * 
   *  该接口仅对应用调用[BindDevice]{@link partnerAgent.bindDevice}注册过的设备生效，调用后给应用提供设备互通能力[partnerAgent]{@link partnerAgent}。
   *  可以通过[isDeviceControlEnabled]{@link partnerAgent.isDeviceControlEnabled}判断设备的外设互通是否已开启，若已开启，重复调用不生效。
   *  可以通过[disableDeviceControl]{@link partnerAgent.disableDeviceControl}关闭外设互通功能。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { PartnerDeviceAddress } deviceAddress - 应用注册的设备地址信息。
   *     应用需配置PartnerDeviceAddress类型的bluetoothAddress选项。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 34900001 - The device is not bound.
   * @throws { BusinessError } 34900099 - Internal error.
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function enableDeviceControl(deviceAddress: PartnerDeviceAddress): Promise<void>;

  /**
   * 关闭外设互通功能，使用Promise异步回调。适用于应用不再需要外设互通能力的场景。
   * 
   *  该接口仅对应用调用[BindDevice]{@link partnerAgent.bindDevice}注册过的设备生效，调用后关闭给应用提供的设备互通能力[partnerAgent]{@link partnerAgent}。
   *  可以通过[isDeviceControlEnabled]{@link partnerAgent.isDeviceControlEnabled}判断设备的外设互通是否已开启，若已关闭，重复调用不生效。
   *  关闭后，当其他应用调用[BindDevice]{@link partnerAgent.bindDevice}注册过的设备被发现时，不会启动应用注册的
   * [PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}进程。可通过调用
   * [enableDeviceControl]{@link partnerAgent.enableDeviceControl}重新开启外设互通功能。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { PartnerDeviceAddress } deviceAddress - 应用注册的设备地址信息。
   *     应用需配置PartnerDeviceAddress类型的bluetoothAddress选项。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 34900001 - The device is not bound.
   * @throws { BusinessError } 34900099 - Internal error.
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function disableDeviceControl(deviceAddress: PartnerDeviceAddress): Promise<void>;

  /**
   * 判断当前设备的互通功能是否已经打开。使用前建议先调用[isPartnerAgentSupported]{@link partnerAgent.isPartnerAgentSupported}判断本机是否支持外设互通功能，若不支持则
   * 本接口不可用。
   * 
   *  调用[bindDevice]{@link partnerAgent.bindDevice}接口注册设备后，设备的互通功能将默认开启，且可在系统设置应用设备详情页显示该功能已开启。
   *  如果该功能已关闭，可通过系统设置应用设备详情页中的信息互通功能开关开启该功能。
   *  如果系统设置应用设备详情页未显示此功能开关，请先调用[bindDevice]{@link partnerAgent.bindDevice}接口注册设备，之后此功能开关按钮会出现。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { PartnerDeviceAddress } deviceAddress - 应用注册的设备地址信息。
   *     应用需在PartnerDeviceAddress中设置bluetoothAddress字段值。
   * @returns { boolean } 表示当前设备是否已经打开互通功能。true表示已打开，false表示未打开。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 34900099 - Internal error.
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function isDeviceControlEnabled(deviceAddress: PartnerDeviceAddress): boolean;

  /**
   * 描述设备支持的被发现能力。
   *
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface DeviceCapability {
    /**
     * 该设备是否支持通过ACL连接的方式发现，建立ACL连接后会认为成功发现了该设备。发现设备后，
     * 在BusinessCapability中至少一项为true的情况下，会拉起
     * [PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}进程，并调用进程中
     * [onDeviceDiscovered]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility:PartnerAgentExtensionAbility#onDeviceDiscovered}
     * 方法。true表示支持通过连接的方式发现，false表示不支持通过连接的方式发现。未指定默认为false。
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    supportBR?: boolean;

    /**
     * 该设备是否支持通过BLE扫描的方式发现，扫描到该设备后会认为成功发现了该设备。发现设备后，在BusinessCapability中至少一项为true的情况下，
     * 会拉起PartnerAgentExtensionAbility进程，并调用进程中onDeviceDiscovered方法。true表示支持通过BLE扫描的方式发现，
     * false表示不支持通过BLE扫描的方式发现。未指定默认为false。
     * 
     * 注意：
     * 
     * 选择[DeviceCapability]{@link partnerAgent.DeviceCapability}中的supportBleAdvertiser选项，若扫描到该设备，3分钟内无ACL连接，会调用
     * [onDestroyWithReason]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility:PartnerAgentExtensionAbility#onDestroyWithReason}
     * 并销毁已拉起的PartnerAgentExtensionAbility进程。
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    supportBleAdvertiser?: boolean;
  }

  /**
   * 描述设备支持的业务功能。
   *
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface BusinessCapability {  
    /**
     * 该设备是否支持媒体控制功能，例如控制媒体播放、音量调节、上一首和下一首等功能。true表示支持，false表示不支持。未指定默认为false。
     * 
     * 注意：
     * 
     * supportMediaControl和supportTelephonyControl均选择false时，设备发现时不会拉起
     * [PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}进程。
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    supportMediaControl?: boolean;
    /**
     * 该设备是否支持通话控制功能，如接听和挂断电话。 true表示支持，false表示不支持。未指定默认为false。 
     * 
     * 注意：
     * 
     * supportMediaControl和supportTelephonyControl均选择false时，设备发现时不会拉起
     * [PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}进程。
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    supportTelephonyControl?: boolean;
  }
  /**
   * 描述设备地址信息。
   *
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  export interface PartnerDeviceAddress {  
    /**
     * 该设备的蓝牙地址信息。
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    bluetoothAddress?: common.BluetoothAddress;
  }

  /**
   * 枚举，PartnerAgentExtensionAbility被销毁的原因。
   *
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  export enum PartnerAgentExtensionAbilityDestroyReason {  

    /**
     * 系统内部导致的未知原因，建议重试该操作。
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    UNKNOWN_REASON = 0,
    /**
     * 用户在系统设置应用中关闭了该设备的信息互通功能，建议在系统设置应用中开启该设备的信息互通功能。
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    USER_CLOSED_ABILITY = 1,
    /**
     * 用户取消了该设备的蓝牙配对关系，建议重新进行蓝牙配对流程。
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    DEVICE_UNPAIRED = 2,
    /**
     * 该设备已断开连接或未被发现，可能原因包括距离过长、设备关机、设备电量耗尽等，建议确认设备状态
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    DEVICE_LOST = 3,
    /**
     * 蓝牙被关闭，建议打开蓝牙
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    BLUETOOTH_DISABLED = 4
  }
}
export default partnerAgent;