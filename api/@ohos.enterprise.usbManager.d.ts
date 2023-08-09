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
 * This module provides the capability to manage the usb of the enterprise devices.
 *
 * @namespace usbManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @since 10
 */
declare namespace usbManager {
  /**
   * Usb policy
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  export enum UsbPolicy {
    /**
     * Policy read write
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    READ_WRITE = 0,

    /**
     * Policy read only
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    READ_ONLY = 1
  }

  /**
   * Set usb policy by {@link UsbPolicy}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { UsbPolicy } usbPolicy - usb policy code.
   * @param { AsyncCallback<void> } callback - the callback of setUsbPolicy.
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
  function setUsbPolicy(admin: Want, usbPolicy: UsbPolicy, callback: AsyncCallback<void>): void;

  /**
   * Set usb policy by {@link UsbPolicy}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { UsbPolicy } usbPolicy - usb policy code.
   * @returns { Promise<void> } the promise returned setUsbPolicy.
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
  function setUsbPolicy(admin: Want, usbPolicy: UsbPolicy): Promise<void>;
}

export default usbManager;
