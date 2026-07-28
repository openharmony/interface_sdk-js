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
 * 本模块提供设备位置服务策略管理的能力，包括设置和查询位置服务开关策略等。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi [since 11 - 11]
 * @publicapi [since 12]
 * @stagemodelonly
 * @since 11
 */
declare namespace locationManager {
  /**
   * 位置服务策略值。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export enum LocationPolicy {
    /**
     * 默认策略。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DEFAULT_LOCATION_SERVICE = 0,

    /**
     * 禁用位置服务策略。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DISALLOW_LOCATION_SERVICE = 1,

    /**
     * 强制开启位置服务策略。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    FORCE_OPEN_LOCATION_SERVICE = 2
  }

  /**
   * 设置位置服务管理策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { LocationPolicy } policy - 位置服务策略。<br>- 0：默认策略。<br>- 1：禁用。<br>- 2：强制启用。
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
   * 查询位置服务管理策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { LocationPolicy } 位置服务策略枚举值。0：默认策略。1：禁用。2：强制启用。
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
  function getLocationPolicy(admin: Want): LocationPolicy;

  /**
   * 查询位置服务管理策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCATION
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the.
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned.
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
   * @since 26.0.0
   */
  function getLocationPolicy(admin: Want | null): LocationPolicy;
}

export default locationManager;