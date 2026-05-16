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
 * @file OAID
 * @kit AdsKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * This module provides the capability of obtaining open anonymous device identifiers (OAIDs).
 * 
 * > **NOTE**
 * 
 * > - To use the OAID APIs, you must 
 * > [request authorization from users](docroot://security/AccessToken/request-user-authorization.md): ohos 
 * > .permission.APP_TRACKING_CONSENT.
 *
 * @syscap SystemCapability.Advertising.OAID
 * @since 10
 */
declare namespace identifier {
  /**
   * Obtains the OAID. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.APP_TRACKING_CONSENT
   * @param { AsyncCallback<string> } callback - Callback used to return the OAID.<br>1. If the application has
   *     configured the permission **ohos.permission.APP_TRACKING_CONSENT** and the permission is allowed, the OAID is
   *     returned.<br>2. If the application has configured the permission **ohos.permission.APP_TRACKING_CONSENT** and
   *     the permission is disallowed, 00000000-0000-0000-0000-000000000000 is returned.<br>3. If the application has
   *     not configured the permission **ohos.permission.APP_TRACKING_CONSENT**, 00000000-0000-0000-0000-000000000000 is
   *     returned.
   * @throws { BusinessError } 17300001 - System internal error.
   * @syscap SystemCapability.Advertising.OAID
   * @since 10
   */
  function getOAID(callback: AsyncCallback<string>): void;

  /**
   * Obtains the OAID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.APP_TRACKING_CONSENT
   * @returns { Promise<string> } Promise used to return the OAID.
   *     <br>1. If the application has configured the permission **ohos.permission.APP_TRACKING_CONSENT**
   *     and the permission is allowed, the OAID is returned.
   *     <br>2. If the application has configured the permission **ohos.permission.APP_TRACKING_CONSENT**
   *     and the permission is disallowed, 00000000-0000-0000-0000-000000000000 is returned.
   *     <br>3. If the application has not configured the permission **ohos.permission.APP_TRACKING_CONSENT**,
   *     00000000-0000-0000-0000-000000000000 is returned.
   * @throws { BusinessError } 17300001 - System internal error.
   * @syscap SystemCapability.Advertising.OAID
   * @since 10
   */
  function getOAID(): Promise<string>;

  /**
   * Resets the OAID.
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