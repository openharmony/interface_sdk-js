/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit MDMKit
 */

import type Want from './@ohos.app.ability.Want';

/**
 * The **locationManager** module provides location service management capabilities for devices, including setting and
 * obtaining the location service policy.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 11
 */
declare namespace locationManager {
  /**
   * Enumerates the location service policies.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export enum LocationPolicy {
    /**
     * Default policy.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DEFAULT_LOCATION_SERVICE = 0,

    /**
     * The location service is disabled.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DISALLOW_LOCATION_SERVICE = 1,

    /**
     * The location service is forcibly enabled.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    FORCE_OPEN_LOCATION_SERVICE = 2
  }

  /**
   * Sets a location service policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { LocationPolicy } policy - Location service policy to set. The value can be any of the following:<br>-
   *     **0**: The default policy is used.<br>- **1**: The location service is disabled.<br>- **2**: The location
   *     service is forcibly enabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setLocationPolicy(admin: Want, policy: LocationPolicy): void;

  /**
   * Queries the location service policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @returns { LocationPolicy } Enumerated value of the location service policy. **0**: The default policy is used.
   *     **1**: The location service is disabled. **2**: The location service is forcibly enabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getLocationPolicy(admin: Want | null): LocationPolicy;
}

export default locationManager;