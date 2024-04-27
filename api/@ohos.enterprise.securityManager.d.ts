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
 * This module provides the capability to manage the security of the enterprise devices.
 *
 * @namespace securityManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 11
 */
declare namespace securityManager {
  /**
   * The device encryption status.
   *
   * @typedef DeviceEncryptionStatus
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface DeviceEncryptionStatus {
    /**
     * True indicates device is encrypted.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    isEncrypted: boolean;
  }

  /**
   * User certificate data.
   *
   * @typedef CertBlob
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface CertBlob {
    /**
     * The certificate content
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    inData: Uint8Array;

    /**
     * The certificate alias
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    alias: string;
  }

  /**
   * Gets device security patch tag.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { string } the security patch tag of the device.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function getSecurityPatchTag(admin: Want): string;

  /**
   * Gets device encryption status.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { DeviceEncryptionStatus } device encryption status.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function getDeviceEncryptionStatus(admin: Want): DeviceEncryptionStatus;

  /**
   * Gets device security policy of the specific type.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } item - item indicates the specified security policy that needs to be obtained, including patch and encryption.
   *                          patch means the device security patch tag, and encryption means the device encryption status.
   * @returns { string } security policy of the specific type.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getSecurityStatus(admin: Want, item: string): string;

  /**
   * Install user certificate.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { CertBlob } certificate - certificate file content and alias.
   * @returns { Promise<string> } the promise carries the uri of the certificate used to uninstall
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - manage certificate failed
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function installUserCertificate(admin: Want, certificate: CertBlob): Promise<string>;

  /**
   * Uninstall user certificate.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } certUri - uri of the certificate.
   * @returns { Promise<void> } the promise returned by the uninstallUserCertificate.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - manage certificate failed
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function uninstallUserCertificate(admin: Want, certUri: string): Promise<void>;

  /**
   * Sets the password policy of the device.
   * 
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { PasswordPolicy } policy - password policy to be set.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setPasswordPolicy(admin: Want, policy: PasswordPolicy): void;

  /**
   * Gets the password policy of the device.
   * 
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { PasswordPolicy } policy - the password policy of the device.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getPasswordPolicy(admin: Want): PasswordPolicy;

  /**
   * Password policy.
   * 
   * @typedef PasswordPolicy
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface PasswordPolicy {
    /**
     * The regex of complexity
     * 
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    complexityRegex?: string;

    /**
     * Period of validity
     * 
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    validityPeriod?: number;

    /**
     * Other supplementary description
     * 
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    additionalDescription?: string;
  }
}

export default securityManager;