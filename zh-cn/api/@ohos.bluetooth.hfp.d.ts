/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @file 蓝牙hfp模块
 * @kit ConnectivityKit
 */

import type baseProfile from './@ohos.bluetooth.baseProfile';

/**
 * 本模块提供基于免提协议（Hands-Free Profile， HFP）的蓝牙通话音频能力，支持创建HFP AG和HF实例、
 * 获取连接状态等。适用于需要在应用中实现蓝牙通话音频连接管理、监听通话音频连接状态等场景。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace hfp {
  /**
   * 基础Profile接口定义，提供订阅和获取连接状态等公共能力。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type BaseProfile = baseProfile.BaseProfile;

  /**
   * 创建蓝牙通话音频中的HFP AG实例。通过该实例可使用本端作为HFP AG设备的接口，如：获取和其他设备间的蓝牙通
   * 话音频连接状态。典型应用场景包括车载信息娱乐系统的蓝牙通话功能、平板电脑蓝牙通话等，本端设备作为音频网关（AG）角色管理通话音频路由。
   *
   * @returns { HandsFreeAudioGatewayProfile } 返回HFP AG实例，可用于获取和其他设备间的蓝牙通话音频连接状态等操作。
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function createHfpAgProfile(): HandsFreeAudioGatewayProfile;

  /**
   * 创建蓝牙通话音频中的HF实例。通过该实例可使用本端作为HF设备的接口，如：获取和其他设备间的蓝牙通话音频连接状态。典型应用
   * 场景包括蓝牙耳机的免提通话功能、车载免提系统等，本端设备作为免提（HF）角色接收和处理通话音频。
   *
   * @returns { HandsFreeHfProfile } 返回HF实例，可用于获取和其他设备间的蓝牙通话音频连接状态等操作。
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function createHfpHfProfile(): HandsFreeHfProfile;

  /**
   * 该实例表示蓝牙通话音频中的HFP AG角色‌。
   * 
   * - 该类继承于[BaseProfile]{@link hfp.BaseProfile}，因此可以使用其父类中的方法。
   * - 使用该类的接口前，需通过[createHfpAgProfile]{@link hfp.createHfpAgProfile}接口构造该类的实例。
   * - 和该实例角色相对应的是HF角色。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 23 static
   */
  interface HandsFreeAudioGatewayProfile extends BaseProfile {
    /**
     * 连接设备的HFP服务。例如，在车载通话、蓝牙耳机等免提通话场景中，可通过此接口主动建立与远端设备的HFP连接。
     * 
     * 需要通过
     * [on('connectionStateChange')]{@link @ohos.bluetooth.baseProfile:BaseProfile.on(type: 'connectionStateChange', callback: Callback<StateChangeParam>)}
     * 接口注册回调，来感知设备的HFP Profile的连接状态变化。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备的MAC地址，例如："XX:XX:XX:XX:XX:XX"。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    connect(deviceId: string): void;

    /**
     * 断开连接设备的HFP服务。例如，在用户主动断开蓝牙耳机或车载设备的免提通话连接时使用。
     * 
     * 需要通过
     * [on('connectionStateChange')]{@link @ohos.bluetooth.baseProfile:BaseProfile.on(type: 'connectionStateChange', callback: Callback<StateChangeParam>)}
     * 接口注册回调，来感知设备的HFP Profile的连接状态变化。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备的MAC地址，例如："XX:XX:XX:XX:XX:XX"。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    disconnect(deviceId: string): void;
  }

  /**
   * 该实例表示蓝牙通话音频中的HF角色‌。
   * 
   * - 该类继承于[BaseProfile]{@link hfp.BaseProfile}，因此可以使用其父类中的方法。
   * - 使用该类的接口前，需通过[createHfpHfProfile]{@link hfp.createHfpHfProfile}接口构造该类的实例。
   * - 和该实例角色相对应的是HFP AG角色。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface HandsFreeHfProfile extends BaseProfile {
    /**
     * 连接设备的HFP服务。例如，在蓝牙耳机或车载设备需要主动连接手机以进行免提通话时使用。
     * 
     * 需要通过
     * [on('connectionStateChange')]{@link @ohos.bluetooth.baseProfile:BaseProfile.on(type: 'connectionStateChange', callback: Callback<StateChangeParam>)}
     * 接口注册回调，感知设备的HFP Profile的连接状态变化。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备的MAC地址，例如："XX:XX:XX:XX:XX:XX"。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Internal system error. For example, IPC error.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    connect(deviceId: string): void;

    /**
     * 断开连接设备的HFP服务。
     * 
     * 需要通过
     * [on('connectionStateChange')]{@link @ohos.bluetooth.baseProfile:BaseProfile.on(type: 'connectionStateChange', callback: Callback<StateChangeParam>)}
     * 接口注册回调，感知设备的HFP Profile的连接状态变化。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备的MAC地址，例如："XX:XX:XX:XX:XX:XX"。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Internal system error. For example, IPC error.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    disconnect(deviceId: string): void;
  }
}

export default hfp;