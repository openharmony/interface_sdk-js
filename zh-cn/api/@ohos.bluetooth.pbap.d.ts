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
 * @file 蓝牙pbap模块
 * @kit ConnectivityKit
 */

import type { AsyncCallback } from './@ohos.base';
import type baseProfile from './@ohos.bluetooth.baseProfile';
import type constant from './@ohos.bluetooth.constant';

/**
 * 本模块提供基于电话簿访问协议（Phone Book Access Profile，PBAP）的蓝牙电话簿访问能力，支持创建
 * PSE服务端实例、获取设备间蓝牙电话簿服务连接状态等，适用于本端设备作为PSE对外提供电话簿访问服务的场景，可帮助开发者快速实现蓝牙电话簿的共享与连接管理功能。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 11 dynamic
 * @since 26.1.0 static
 */
declare namespace pbap {
  /**
   * 基础Profile接口定义，提供订阅和获取连接状态等公共能力。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  type BaseProfile = baseProfile.BaseProfile;

  /**
   * 枚举，蓝牙访问授权状态。表示对端蓝牙设备访问本端蓝牙Profile（如电话簿、消息等）的授权状态，用于蓝牙数据访问授权场景。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  type AccessAuthorization = constant.AccessAuthorization;

  /**
   * 枚举，共享类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  enum ShareType {
    /**
     * 共享名字和号码信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    SHARE_NAME_AND_PHONE_NUMBER = 0,
    /**
     * 共享所有信息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    SHARE_ALL = 1,
    /**
     * 不共享。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    SHARE_NOTHING = 2
  }

  /**
   * 创建蓝牙电话簿访问协议中的PSE实例。通过该实例可使用本端作为PSE设备的接口，如：获取本端和其他设备间的蓝牙电话簿服务
   * 连接状态。典型使用场景包括：车载蓝牙系统访问手机电话簿、跨设备联系人同步等需要本端作为电话簿服务端的场景。
   *
   * @returns { PbapServerProfile } 返回PSE实例。
   *     该类继承于[BaseProfile]{@link pbap.BaseProfile}，因此可以使用其父类中的方法。
   *     和该实例角色相对应的是PCE角色。
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function createPbapServerProfile(): PbapServerProfile;

  /**
   * 使用PbapServerProfile方法之前需要创建该类的实例进行操作，通过createPbapServerProfile()方法构造此实例。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  interface PbapServerProfile extends BaseProfile {
    /**
     * 断开连接设备的Pbap服务。
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
     * 设置电话簿信息的共享类型。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { ShareType } type - 表示共享类型的枚举值。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置成功，err为undefined，否则为错误对象。
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
    setShareType(deviceId: string, type: ShareType, callback: AsyncCallback<void>): void;

    /**
     * 设置电话簿信息的共享类型。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { ShareType } type - 表示共享类型的枚举值。
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
    setShareType(deviceId: string, type: ShareType): Promise<void>;

    /**
     * 获取电话簿信息的共享类型。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { AsyncCallback<ShareType> } callback - 回调函数。当获取成功，err为undefined，否则为错误对象。
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
    getShareType(deviceId: string, callback: AsyncCallback<ShareType>): void;

    /**
     * 获取电话簿信息的共享类型。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { Promise<ShareType> } 以Promise的形式返回结果。如果成功，err为undefined，否则为错误对象。
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
    getShareType(deviceId: string): Promise<ShareType>;

    /**
     * 设置电话簿信息的访问权限。使用Callback异步回调。
     * 
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { AccessAuthorization } authorization - 表示访问权限枚举值。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置成功，err为undefined，否则为错误对象。
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
    setPhoneBookAccessAuthorization(
      deviceId: string,
      authorization: AccessAuthorization,
      callback: AsyncCallback<void>
    ): void;

    /**
     * 设置电话簿信息的访问权限。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { AccessAuthorization } authorization - 表示访问权限枚举值。
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
    setPhoneBookAccessAuthorization(deviceId: string, authorization: AccessAuthorization): Promise<void>;

    /**
     * 获取电话簿信息的访问权限。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { AsyncCallback<AccessAuthorization> } callback - 回调函数。当获取成功，err为undefined，否则为错误对象。
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
    getPhoneBookAccessAuthorization(deviceId: string, callback: AsyncCallback<AccessAuthorization>): void;

    /**
     * 获取电话簿信息的访问权限。使用Promise异步回调。
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
    getPhoneBookAccessAuthorization(deviceId: string): Promise<AccessAuthorization>;
  }
}

export default pbap;