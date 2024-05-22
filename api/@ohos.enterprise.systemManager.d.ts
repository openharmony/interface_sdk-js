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
 * This module provides the capability to manage the system of the enterprise devices.
 *
 * @namespace systemManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 12
 */
declare namespace systemManager {
  /**
   * The device system update info.
   *
   * @typedef SystemUpdateInfo
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface SystemUpdateInfo {
    /**
     * The name of version need to update.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    versionName: string;

    /**
     * The time when the version first received.
     *
     * @type { number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    firstReceivedTime: number;

    /**
     * The type of version package.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    packageType: string;
  }

  /**
   * System update policy type.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum PolicyType {
    /**
     * Default update policy
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DEFAULT = 0,

    /**
     * Prohibit update policy
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    PROHIBIT = 1,

    /**
     * Update to specific software version policy
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPDATE_TO_SPECIFIC_VERSION = 2,

    /**
     * Update within a specified time window
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WINDOWS = 3,

    /**
     * Delay the update for a period of time
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    POSTPONE = 4
  }

  /**
   * OTA update policy.
   *
   * @typedef OtaUpdatePolicy
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface OtaUpdatePolicy {
    /**
     * Software update type.
     *
     * @type { PolicyType }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    policyType: PolicyType;

    /**
     * Software version.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    version: string;

    /**
     * The latest time of update.
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    latestUpdateTime?: number;

    /**
     * The time of delay update.
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    delayUpdateTime?: number;

    /**
     * The start time of installation window.
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installStartTime?: number;

    /**
     * The end time of installation window.
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installEndTime?: number;
  }

  /**
   * Sets NTP server.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } server - the address of NTP server.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setNTPServer(admin: Want, server: string): void;

  /**
   * Gets NTP server.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @returns { string } the address of NTP server.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getNTPServer(admin: Want): string;

  /**
   * Sets device OTA update policy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { OtaUpdatePolicy } policy - OTA update policy.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setOtaUpdatePolicy(admin: Want, policy: OtaUpdatePolicy): void;

  /**
   * Gets device OTA update policy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @returns { OtaUpdatePolicy } OTA update policy.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getOtaUpdatePolicy(admin: Want): OtaUpdatePolicy;
}

export default systemManager;