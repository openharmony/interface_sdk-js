/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * This module provides the capability to manage the accounts of the enterprise devices.
 *
 * @namespace accountManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @since 10
 */
declare namespace accountManager {
  /**
   * Disallow the user of device add local account.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disallow - true if the user is not allowed to add local account.
   * @param { AsyncCallback<void> } callback - the callback of disallowAddLocalAccount.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function disallowAddLocalAccount(admin: Want, disallow: boolean, callback: AsyncCallback<void>): void;

  /**
   * Disallow the user of device add local account.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disallow - true if the user is not allowed to add local account.
   * @returns { Promise<void> } the promise returned by the disallowAddLocalAccount.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function disallowAddLocalAccount(admin: Want, disallow: boolean): Promise<void>;
}

export default accountManager;
