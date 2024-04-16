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

/**
 * @file
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * This module provides the capability to manage the device settings of the enterprise devices.
 *
 * @namespace deviceSettings
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace deviceSettings {
  /**
   * Device power policy.
   *
   * @typedef PowerPolicy
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface PowerPolicy {
    /**
     * An action that needs to be performed after a certain delay
     *
     * @type { PowerPolicyAction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    powerPolicyAction: PowerPolicyAction;

    /**
     * Delay time fo execute power policy action
     *
     * @type { number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    delayTime: number;
  }

  /**
   * Actions of power policy.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 11
   */
  enum PowerPolicyAction {
    /**
     * Performs no action after a certain delay
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    NONE = 0,

    /**
     * Performs auto suspend action after a certain delay
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    AUTO_SUSPEND,

    /**
     * Performs force suspend action after a certain delay
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    FORCE_SUSPEND,

    /**
     * Performs hibernate action after a certain delay
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    HIBERNATE,

    /**
     * Performs shutdown action after a certain delay
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    SHUTDOWN
  }

  /**
   * The scene to execute power policy.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 11
   */
  enum PowerScene {
    /**
     * Time out scene
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    TIME_OUT = 0
  }

  /**
   * User certificate data.
   *
   * @typedef CertBlob
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  export interface CertBlob {
    /**
     * The certificate content
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    inData: Uint8Array;

    /**
     * The certificate alias
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    alias: string;
  }

  /**
   * Sets the screen off time.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_SCREENOFF_TIME
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } time - screen off time.
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
  function setScreenOffTime(admin: Want, time: number): void;

  /**
   * Gets the device screen off time.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_SETTINGS
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<number> } callback - the callback of getScreenOffTime.
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
  function getScreenOffTime(admin: Want, callback: AsyncCallback<number>): void;

  /**
   * Gets the device screen off time.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_SETTINGS
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<number> } the promise returned by the getScreenOffTime.
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
  function getScreenOffTime(admin: Want): Promise<number>;

  /**
   * Install user certificate.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { CertBlob } certificate - certificate file content and alias.
   * @param { AsyncCallback<string> } callback - The callback carries the uri of the certificate used to uninstall
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - manage certificate failed
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function installUserCertificate(admin: Want, certificate: CertBlob, callback: AsyncCallback<string>): void;

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
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function installUserCertificate(admin: Want, certificate: CertBlob): Promise<string>;

  /**
   * Uninstall user certificate.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } certUri - uri of the certificate.
   * @param { AsyncCallback<void> } callback - the callback of uninstallUserCertificate.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - manage certificate failed
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function uninstallUserCertificate(admin: Want, certUri: string, callback: AsyncCallback<void>): void;

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
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function uninstallUserCertificate(admin: Want, certUri: string): Promise<void>;

  /**
   * Sets the power policy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { PowerScene } powerScene - the scene to execute power policy.
   * @param { PowerPolicy } powerPolicy - device power policy.
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
  function setPowerPolicy(admin: Want, powerScene: PowerScene, powerPolicy: PowerPolicy): void;

  /**
   * Gets the power policy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { PowerScene } powerScene - the scene to execute power policy.
   * @returns { PowerPolicy } device power policy.
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
  function getPowerPolicy(admin: Want, powerScene: PowerScene): PowerPolicy;

  /**
   * Sets the device settings value.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } item - the scene to execute power policy.
   * @param { string } value - device power policy.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setValue(admin: Want, item: string, value: string): void

  /**
   * Gets the device settings value.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } item - the scene to execute power policy.
   * @returns { string } device power policy.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getValue(admin: Want, item: string): string
}

export default deviceSettings;
