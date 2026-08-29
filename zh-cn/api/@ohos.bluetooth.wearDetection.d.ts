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
 * @file 蓝牙佩戴检测模块
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * 佩戴检测模块提供了获取蓝牙音频设备(如蓝牙耳机)是否支持佩戴检测、是否开启佩戴检测的方法。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 11 dynamic
 * @since 26.1.0 static
 */
declare namespace wearDetection {
  /**
   * 使能佩戴检测。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { AsyncCallback<void> } callback - 回调函数。当使能佩戴检测成功，err为undefined，否则为错误对象。
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
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function enableWearDetection(deviceId: string, callback: AsyncCallback<void>): void;

  /**
   * 使能佩戴检测。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
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
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function enableWearDetection(deviceId: string): Promise<void>;

  /**
   * 禁用佩戴检测。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { AsyncCallback<void> } callback - 回调函数。当禁用佩戴检测成功，err为undefined，否则为错误对象。
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
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function disableWearDetection(deviceId: string, callback: AsyncCallback<void>): void;

  /**
   * 禁用佩戴检测。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
   * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
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
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function disableWearDetection(deviceId: string): Promise<void>;

  /**
   * 判断设备是否支持佩戴检测能力。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { AsyncCallback<boolean> } callback - 回调函数。当接口调用成功，err为undefined，data为true表示支持佩戴检测能力，data为false表示不支持佩戴检测能力；否
   *     则为错误对象。
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
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function isWearDetectionSupported(deviceId: string, callback: AsyncCallback<boolean>): void;

  /**
   * 判断设备是否支持佩戴检测能力。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { Promise<boolean> } Promise对象。返回true表示支持佩戴检测能力；返回false表示不支持佩戴检测能力。
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
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function isWearDetectionSupported(deviceId: string): Promise<boolean>;

  /**
   * 判断设备佩戴检测能力是否开启。使用Callback异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { AsyncCallback<boolean> } callback - 回调函数。当接口调用成功，err为undefined，data为true表示佩戴检测能力已开启，data为false表示佩戴检测能力未开启；
   *     否则为错误对象。
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
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function isWearDetectionEnabled(deviceId: string, callback: AsyncCallback<boolean>): void;

  /**
   * 判断设备佩戴检测能力是否开启。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @returns { Promise<boolean> } Promise对象。返回true表示佩戴检测能力开启；返回false表示佩戴检测能力未开启。
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
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  function isWearDetectionEnabled(deviceId: string): Promise<boolean>;
}

export default wearDetection;