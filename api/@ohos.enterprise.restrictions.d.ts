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
 * This module provides the capability to manage restriction policy of the enterprise devices.
 *
 * @namespace restrictions
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @since 10
 */
declare namespace restrictions {
  /**
   * Disable or enable the printing function of the device
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disabled - true if the user disables the printing function.
   * @param { AsyncCallback<void> } callback - the callback of setPrinterDisabled.
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
  function setPrinterDisabled(admin: Want, disabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * Disable or enable the printing function of the device
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disabled - true if the user disables the printing function.
   * @returns { Promise<void> } the promise returned by the setPrinterDisabled.
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
  function setPrinterDisabled(admin: Want, disabled: boolean): Promise<void>;

  /**
   * Is the printing function of the device disabled
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<boolean> } callback - the callback of isPrinterDisabled.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isPrinterDisabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * Is the printing function of the device disabled
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<boolean> } the promise returned by the isPrinterDisabled.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isPrinterDisabled(admin: Want): Promise<boolean>;

  /**
   * Disable or enable the HDC function of the device
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disabled - true if the user disables the HDC function.
   * @param { AsyncCallback<void> } callback - the callback of setHdcDisabled.
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
  function setHdcDisabled(admin: Want, disabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * Disable or enable the HDC function of the device
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disabled - true if the user disables the HDC function.
   * @returns { Promise<void> } the promise returned by the setHdcDisabled.
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
  function setHdcDisabled(admin: Want, disabled: boolean): Promise<void>;

  /**
   * Is the HDC function of the device disabled
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<boolean> } callback - the callback of isHdcDisabled.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isHdcDisabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * Is the HDC function of the device disabled
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<boolean> } the promise returned by the isHdcDisabled.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isHdcDisabled(admin: Want): Promise<boolean>;
}

export default restrictions;
