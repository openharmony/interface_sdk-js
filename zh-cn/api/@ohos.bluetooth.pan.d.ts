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
 * @file 蓝牙pan模块
 * @kit ConnectivityKit
 */

import type baseProfile from './@ohos.bluetooth.baseProfile';

/**
 * 本模块提供基于蓝牙个人局域网协议（Personal Area Networking，PAN）的蓝牙共享网络能力，支持本端作为
 * NAP设备和PANU设备查询PAN支持状态、网络共享状态及获取连接状态等，适用于需要通过蓝牙实现个人局域网共享网络的场景。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @stagemodelonly
 * @since 10 dynamic
 * @since 26.1.0 static
 */
declare namespace pan {
  /**
   * 基础Profile接口定义，提供订阅和获取连接状态等公共能力。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  type BaseProfile = baseProfile.BaseProfile;

  /**
   * 创建蓝牙PAN实例。通过该实例可使用本端作为NAP设备和PANU设备的接口，如：获取和其他设备间的蓝牙个人局域网服务连接状态。
   *
   * @returns { PanProfile } 返回PAN实例。该类继承于[BaseProfile]{@link pan.BaseProfile}，因此可以使用其父类中的方法。
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  function createPanProfile(): PanProfile;

  /**
   * 表示蓝牙PAN通信的实例，提供查询本端PAN支持状态、网络共享状态等能力，适用于蓝牙个人局域网共享网络场景。
   * 
   * 使用PanProfile方法之前需要创建该类的实例进行操作，通过[createPanProfile]{@link pan.createPanProfile}方法构造此实例。
   * 该类继承于[BaseProfile]{@link pan.BaseProfile}，因此可以使用其父类中的方法。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  interface PanProfile extends BaseProfile {
    /**
     * 本端作为PANU（个人区域网用户）角色时使用，向指定设备发起PAN服务连接请求。需确保对端设备已启用网络共享（NAP）能力才能成功连接。适用于本端需要通过蓝牙PAN连接到远端NAP设备以获取网络访问的场景，例如设备间通过蓝牙共
     * 享网络连接。
     * 
     * 可通过订阅
     * [on('connectionStateChange')]{@link @ohos.bluetooth.baseProfile:BaseProfile.on(type: 'connectionStateChange', callback: Callback<StateChangeParam>)}
     * 事件来感知连接是否成功。
     * 当不需要连接时需调用[disconnect]{@link pan.PanProfile.disconnect}断开连接。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 表示远端设备MAC地址。例如："XX:XX:XX:XX:XX:XX"。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Only can be called on phone, tablet, and 2in1 devices.
     *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Remote Device profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    connect(deviceId: string): void;

    /**
     * 本端作为PANU（个人区域网用户）角色时使用，断开与当前连接设备的PAN服务，并释放相关的资源。适用于不再需要通过蓝牙PAN获取网络服务时主动断开连接的场景。
     * 
     * 可通过订阅
     * [on('connectionStateChange')]{@link @ohos.bluetooth.baseProfile:BaseProfile.on(type: 'connectionStateChange', callback: Callback<StateChangeParam>)}
     * 事件来感知断开是否成功。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
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
     * @stagemodelonly
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    disconnect(deviceId: string): void;

    /**
     * 本端作为NAP（网络接入点）角色时使用，用于设置网络共享状态。
     * 
     * 当本端未启用网络共享能力时，作为PANU角色的对端设备无法连接本端的PAN服务。
     * 调用该接口前，建议先调用[isTetheringOn]{@link pan.PanProfile.isTetheringOn}判断当前的网络共享状态。
     * 开启网络共享状态后，可以通过订阅
     * [on('connectionStateChange')]{@link @ohos.bluetooth.baseProfile:BaseProfile.on(type: 'connectionStateChange', callback: Callback<StateChangeParam>)}
     * 事件来感知作为PANU角色的对端设备的连接。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { boolean } enable - 是否启用网络共享。true表示启用网络共享，false表示不启用网络共享。
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
     * @stagemodelonly
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    setTethering(enable: boolean): void;

    /**
     * 本端作为NAP时使用，获取本端网络共享状态。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { boolean } 网络共享开启返回true，网络共享关闭返回false。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs. [since 10 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     *     Only can be called on phone, tablet, and 2in1 devices.
     *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    isTetheringOn(): boolean;

    /**
     * 本端作为NAP角色时使用，查询本端设备是否支持PAN能力。
     *
     * @returns { boolean } 当前设备支持PAN时返回true，不支持时返回false。
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    isPanSupported(): boolean;
  }
}

export default pan;