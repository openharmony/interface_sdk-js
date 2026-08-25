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
 * @file 蓝牙map模块
 * @kit ConnectivityKit
 */

import type baseProfile from './@ohos.bluetooth.baseProfile';
import type constant from './@ohos.bluetooth.constant';

/**
 * 本模块提供基于消息访问协议（Message Access Profile，MAP）的蓝牙消息访问能力，支持创建MSE实例、获
 * 取和订阅设备间蓝牙消息服务连接状态等，适用于需要通过蓝牙协议进行消息访问与连接管理的场景。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 11 dynamic
 * @since 26.1.0 static
 */
declare namespace map {
  /**
   * 基础Profile接口定义，提供订阅和获取连接状态等公共能力。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  type BaseProfile = baseProfile.BaseProfile;

  /**
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  type AccessAuthorization = constant.AccessAuthorization;

  /**
   * 创建蓝牙消息访问协议中的MSE实例。通过该实例可使用本端作为MSE设备时提供的接口，如：获取和其他设备间的蓝牙消息服务连
   * 接状态。适用于蓝牙消息同步、车载蓝牙消息查看等场景。
   *
   * @returns { MapMseProfile } 返回MapMseProfile实例，该实例可用于本端作为MSE设备进行蓝牙消息访问相关操作。
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function createMapMseProfile(): MapMseProfile;

  /**
   * 该实例表示蓝牙消息访问协议中的MSE角色。
   * 
   * - 该类继承于[BaseProfile]{@link map.BaseProfile}，因此可以使用其父类中的方法。
   * - 使用该类的接口前，需通过[createMapMseProfile]{@link map.createMapMseProfile}接口构造该类的实例。
   * - 和该实例角色相对应的是MCE角色。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  interface MapMseProfile extends BaseProfile {
    /**
     * 断开连接设备的map服务。适用于设备切换、连接异常恢复或用户主动断开蓝牙信息同步等场景。
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
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    disconnect(deviceId: string): void;

    /**
     * 设置信息的访问权限。使用Promise异步回调。适用于蓝牙消息同步前进行权限授予或撤销的场景，如用户在车载、可穿戴设备上管理蓝牙消息读取权限。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { AccessAuthorization } authorization - 表示对信息访问的授权状态，例如允许访问（ACCESS_ALLOWED）、拒绝访问（ACCESS_DENIED）等。具体枚举值及含义详
     *     见[AccessAuthorization]{@link @ohos.bluetooth.constant:constant.AccessAuthorization}。
     * @returns { Promise<void> } 以Promise的形式返回结果。如果成功，err为undefined，否则为错误对象。
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
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    setMessageAccessAuthorization(deviceId: string, authorization: AccessAuthorization): Promise<void>;

    /**
     * 获取信息的访问权限。使用Promise异步回调。适用于在蓝牙消息同步前查询当前设备是否已获得信息读取授权的场景。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { Promise<AccessAuthorization> } 以Promise的形式返回结果。如果成功，err为undefined，否则为错误对象。
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
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    getMessageAccessAuthorization(deviceId: string): Promise<AccessAuthorization>;
  }
}

export default map;