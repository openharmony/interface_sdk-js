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
 * @file 位置服务管理
 * @kit MDMKit
 */

import type Want from './@ohos.app.ability.Want';

/**
 * 本模块提供设备位置服务策略管理的能力，包括设置和查询位置服务开关策略等。
 *
 * **使用场景**：
 * 适用于企业设备管理场景，管理员可通过此模块统一管控设备位置服务策略。
 * 
 * > **说明：**
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
     * 默认策略，不限制位置服务开关，允许用户自行控制。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DEFAULT_LOCATION_SERVICE = 0,

    /**
     * 禁用位置服务策略。适用于涉密区域、保密会议室等需要禁止位置服务的场景。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DISALLOW_LOCATION_SERVICE = 1,

    /**
     * 强制开启位置服务策略。适用于物流追踪、外勤管理等需要确保位置服务可用的场景。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    FORCE_OPEN_LOCATION_SERVICE = 2
  }

  /**
   * 设置位置服务管理策略。可用于企业管控场景，如：在涉密区域禁用位置服务以保护信息安全，或在物流配送应用中强制开启位置服务以追踪设备位置。
   * 
   * > **说明：**
   * >
   * > - 禁用：在需要保护隐私或节省电量的场景下设置。
   * >
   * > - 强制开启：在设备安全追踪、资产管理等场景下设置。
   * >
   * > - 默认：取消策略限制，由用户自主控制。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { LocationPolicy } policy - 位置服务策略。
   *     <br>- 0：默认策略。
   *     <br>- 1：禁用位置服务。
   *     <br>- 2：强制开启位置服务。
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
   * 查询位置服务管理策略。可在企业设备管理应用中检查当前设备的位置服务策略状态，用于策略合规性验证或策略调整前的状态确认。适用于确认当前策略配置、设备管理应用启动时读取策略状态、排查位置服务问题时检查策略等场景。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { LocationPolicy } 位置服务策略枚举值。0：默认策略。1：禁用位置服务。2：强制开启位置服务。
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
   * 查询位置服务管理策略。可在企业设备管理应用中检查当前设备的位置服务策略状态，用于策略合规性验证或策略调整前的状态确认。适用于确认当前策略配置、设备管理应用启动时读取策略状态、排查位置服务问题时检查策略等场景。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCATION
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
   * @returns { LocationPolicy } 位置服务策略枚举值。0：默认策略。1：禁用位置服务。2：强制开启位置服务。
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