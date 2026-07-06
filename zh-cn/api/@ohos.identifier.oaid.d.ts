/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @file 开放匿名设备标识服务
 * @kit AdsKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 本模块提供开放匿名设备标识符（Open Anonymous Device Identifier, OAID）的获取和重置能力。
 * 
 * > **说明：**
 * >
 * > 使用获取开放匿名设备标识符接口，需[向用户申请授权](docroot://security/AccessToken/request-user-authorization.md)
 * >（默认开启权限）：ohos.permission.APP_TRACKING_CONSENT。
 *
 * @syscap SystemCapability.Advertising.OAID
 * @since 10
 */
declare namespace identifier {
  /**
   * 获取开放匿名设备标识符（OAID）。使用callback异步回调。
   *
   * @permission ohos.permission.APP_TRACKING_CONSENT
   * @param { AsyncCallback<string> } callback - 回调函数，返回开放匿名设备标识符（OAID）。
   *     1.如应用已配置ohos.permission.APP_TRACKING_CONSENT权限，且“跨应用关联访问权限”为“允许”，则返回OAID。
   *     2.如应用已配置ohos.permission.APP_TRACKING_CONSENT权限，且“跨应用关联访问权限”为“禁止”，则返回   
   *     00000000-0000-0000-0000-000000000000。
   *     3.如应用未配置ohos.permission.APP_TRACKING_CONSENT权限，则返回00000000-0000-0000-0000-000000000000。
   * @throws { BusinessError } 17300001 - System internal error.
   * @syscap SystemCapability.Advertising.OAID
   * @since 10
   */
  function getOAID(callback: AsyncCallback<string>): void;

  /**
   * 获取开放匿名设备标识符（OAID）。使用Promise异步回调。
   *
   * @permission ohos.permission.APP_TRACKING_CONSENT
   * @returns { Promise<string> } Promise对象，返回开放匿名设备标识符（OAID）。
   *     1.如应用已配置ohos.permission.APP_TRACKING_CONSENT权限，且跨应用关联访问权限为“允许”，则返回OAID。
   *     2.如应用已配置ohos.permission.APP_TRACKING_CONSENT权限，且跨应用关联访问权限为“禁止”，则返回
   *     00000000-0000-0000-0000-000000000000。
   *     3.如应用未配置ohos.permission.APP_TRACKING_CONSENT权限，则返回00000000-0000-0000-0000-000000000000。
   * @throws { BusinessError } 17300001 - System internal error.
   * @syscap SystemCapability.Advertising.OAID
   * @since 10
   */
  function getOAID(): Promise<string>;

  /**
   * 重置开放匿名设备标识符（OAID）。
   *
   * @throws { BusinessError } 17300001 - System internal error.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 17300002 - Not in the trust list. [since 12]
   * @syscap SystemCapability.Advertising.OAID
   * @systemapi
   * @since 10
   */
  function resetOAID(): void;
}

export default identifier;