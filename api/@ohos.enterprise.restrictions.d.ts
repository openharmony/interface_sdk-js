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

import type { AsyncCallback } from '@ohos.base';
import type Want from '@ohos.app.ability.Want';

/**
 * This **restrictions** module provides APIs for disallowing general features of devices. You can globally disable or
 * enable the features such as Bluetooth, HDC, USB, and Wi-Fi.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace restrictions {
  /**
   * Enumerates device features.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  enum FeatureForDevice {
    /**
     * Wi-Fi P2P (peer-to-peer connection), which allows devices to directly connect to each other without an access
     * point. Once this feature is disallowed, devices cannot be connected through Wi-Fi P2P, affecting application
     * functions that require direct Wi-Fi connections, such as file transfer, online gaming, and screen sharing.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI_P2P = 0,

    /**
     * Local input.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    LOCAL_INPUT = 2,

    /**
     * Sudo.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SUDO = 4,

    /**
     * Traffic redirection.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    TRAFFIC_REDIRECTION = 5,

    /**
     * Core dump.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    CORE_DUMP = 6,

    /**
     * RS232.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    RS232 = 7,

    /**
     * Disk erasure
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISK_ERASURE = 8,
  }

  /**
   * Enumerates the features that can be disabled or enabled for a specified user.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum FeatureForAccount {
    /**
     * System multi-window. Currently, this feature is available only on phones and tablets. Once disabled, the system
     * multi-window feature (split-screen, one-click split-screen, Multi-Window, and floating window) cannot be used. If
     * the feature is currently active, the current usage remains unaffected. However, it cannot be used once closed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MULTI_WINDOW = 0,

    /**
     * Distributed transmission.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISTRIBUTED_TRANSMISSION = 1,

    /**
     * SuperHub. Currently, this feature is available only on phones and tablets. Once disabled, the SuperHub feature
     * cannot be used. If SuperHub is currently active, the current usage remains unaffected. However, it cannot be used
     * once closed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SUPER_HUB = 2
  }

  /**
   * Enables or disables the printing capability of the device. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disabled - Operation to perform. The value **true** means to disable the printer; the value
   *     **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. <br>If the operation is successful
   *     , **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setPrinterDisabled(admin: Want, disabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * Enables or disables the printing capability of the device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disabled - Operation to perform. The value **true** means to disable the printer; the value
   *     **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the print capability fails
   *     to be disabled or enabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setPrinterDisabled(admin: Want, disabled: boolean): Promise<void>;

  /**
   * Queries whether the printing capability of a device is disabled. This API uses an asynchronous callback to return
   * the result.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<boolean> } callback - Callback invoked to return the result.<br>The value **true** means
   *     that the printer is disabled; the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isPrinterDisabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * Queries whether the printing capability of a device is disabled. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the printer is
   *     disabled; the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isPrinterDisabled(admin: Want): Promise<boolean>;

  /**
   * Enables or disables [HDC](docroot://../device-dev/subsystems/subsys-toolchain-hdc-guide.md). This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disabled - Operation to perform. The value **true** means to disable HDC; the value **false**
   *     means the opposite.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. <br>If the operation is successful
   *     , **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setHdcDisabled(admin: Want, disabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * Enables or disables HDC on a device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disabled - Operation to perform. The value **true** means to disable HDC; the value **false**
   *     means the opposite.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the HDC fails to be
   *     disabled or enabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setHdcDisabled(admin: Want, disabled: boolean): Promise<void>;

  /**
   * Queries whether HDC is disabled. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<boolean> } callback - Callback invoked to return the result. The value **true** means HDC is
   *     disabled; the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isHdcDisabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * Queries whether HDC is disabled. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means HDC is disabled; the
   *     value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isHdcDisabled(admin: Want): Promise<boolean>;

  /**
   * Enables or disables the microphone.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disable - Operation to perform. The value **true** means to disable the microphone; the value
   *     **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function disableMicrophone(admin: Want, disable: boolean): void;

  /**
   * Queries whether the microphone is disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { boolean } Returns **true** if the microphone is disabled; returns **false** otherwise.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isMicrophoneDisabled(admin: Want): boolean;

  /**
   * Enables or disables fingerprint authentication.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disabled - Operation to perform. The value **true** means to disable fingerprint authentication;
   *     the value **false** the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setFingerprintAuthDisabled(admin: Want, disabled: boolean): void;

  /**
   * Queries whether fingerprint authentication is disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { boolean } Returns **true** if fingerprint authentication is disabled; returns **false** otherwise.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isFingerprintAuthDisabled(admin: Want): boolean;

  /**
   * Disallows the specific feature of the device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be disallowed or allowed,
   *     the supported device features include modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint,
   *     usb and wifi.
   * @param { boolean } disallow - true if disallow the specific feature of device, otherwise false.
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
  /**
   * Disallows the specific feature of the device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be disallowed or allowed,
   *     the supported device features include modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint,
   *     usb and wifi.
   * @param { boolean } disallow - true if disallow the specific feature of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
   /**
   * Disallows the specific feature of the device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be disallowed or allowed,
   *     the supported device features are as follows:
   *     modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint, usb, wifi, tethering, inactiveUserFreeze,
   *     camera, mtpClient, mtpServer, backupAndRestore, notification, mms, sms, remoteDiagnosis, remoteDesk, nfc,
   *     privateSpace, vpn, airplaneMode, mobileData, maintenanceMode, sambaClient, sambaServer.
   * @param { boolean } disallow - true if disallow the specific feature of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  /**
   * Disallows the specific feature of the device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be disallowed or allowed,
   *     the supported device features are as follows:
   *     modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint, usb, wifi, tethering, inactiveUserFreeze,
   *     camera, mtpClient, mtpServer, backupAndRestore, notification, mms, sms, remoteDiagnosis, remoteDesk, nfc,
   *     privateSpace, vpn, airplaneMode, mobileData, maintenanceMode, sambaClient, sambaServer, appClone,
   *     externalStorageCard, randomMac.
   * @param { boolean } disallow - true if disallow the specific feature of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200013 - The enterprise management policy has been successfully set,
   *     but the function has not taken effect in real time.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  /**
   * Disallows the specific feature of the device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be disallowed or allowed,
   *     the supported device features are as follows:
   *     modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint, usb, wifi, tethering, inactiveUserFreeze,
   *     camera, mtpClient, mtpServer, backupAndRestore, notification, mms, sms, remoteDiagnosis, remoteDesk, nfc,
   *     privateSpace, vpn, airplaneMode, mobileData, maintenanceMode, sambaClient, sambaServer, appClone,
   *     externalStorageCard, randomMac, unmuteDevice, hdcRemote.
   * @param { boolean } disallow - true if disallow the specific feature of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200013 - The enterprise management policy has been successfully set,
   *     but the function has not taken effect in real time.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  /**
   * Disallows the specific feature of the device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be disallowed or allowed,
   *     the supported device features are as follows:
   *     modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint, usb, wifi, tethering, inactiveUserFreeze,
   *     camera, mtpClient, mtpServer, backupAndRestore, notification, mms, sms, remoteDiagnosis, remoteDesk, nfc,
   *     privateSpace, vpn, airplaneMode, mobileData, maintenanceMode, sambaClient, sambaServer, appClone,
   *     externalStorageCard, randomMac, unmuteDevice, hdcRemote, virtualService.
   * @param { boolean } disallow - true if disallow the specific feature of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200013 - The enterprise management policy has been successfully set,
   *     but the function has not taken effect in real time.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  /**
   * Disallows the specific feature of the device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be disallowed or allowed,
   *     the supported device features are as follows:
   *     modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint, usb, wifi, tethering, inactiveUserFreeze,
   *     camera, mtpClient, mtpServer, backupAndRestore, notification, mms, sms, remoteDiagnosis, remoteDesk, nfc,
   *     privateSpace, vpn, airplaneMode, mobileData, maintenanceMode, sambaClient, sambaServer, appClone,
   *     externalStorageCard, randomMac, unmuteDevice, hdcRemote, virtualService, usbSerial.
   * @param { boolean } disallow - true if disallow the specific feature of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200013 - The enterprise management policy has been successfully set,
   *     but the function has not taken effect in real time.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function setDisallowedPolicy(admin: Want, feature: string, disallow: boolean): void;

  /**
   * Queries whether the specific feature of the device is disallowed.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     If the admin is not empty, it must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be queried,
   *     the supported device features include modifyDateTime, bluetooth, printer, hdc, microphone,
   *     fingerprint, usb and wifi.
   * @returns { boolean } true if the specific feature of device is disallowed, otherwise false.
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
  /**
   * Queries whether the specific feature of the device is disallowed.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     If the admin is not empty, it must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be queried,
   *     the supported device features include modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint,
   *     usb and wifi.
   * @returns { boolean } true if the specific feature of device is disallowed, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
   /**
   * Queries whether the specific feature of the device is disallowed.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want | null } admin - admin indicates the enterprise admin extension ability information.
   *     If the admin is not empty, it must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be queried,
   *     the supported device features are as follows:
   *     modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint, usb, wifi, tethering, inactiveUserFreeze,
   *     camera, mtpClient, mtpServer, backupAndRestore, notification, mms, sms, remoteDiagnosis, remoteDesk, nfc,
   *     privateSpace, vpn, airplaneMode, mobileData, maintenanceMode, sambaClient, sambaServer.
   * @returns { boolean } true if the specific feature of device is disallowed, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  /**
   * Queries whether the specific feature of the device is disallowed.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want | null } admin - admin indicates the enterprise admin extension ability information.
   *     If the admin is not empty, it must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be queried,
   *     the supported device features are as follows:
   *     modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint, usb, wifi, tethering, inactiveUserFreeze,
   *     camera, mtpClient, mtpServer, backupAndRestore, notification, mms, sms, remoteDiagnosis, remoteDesk, nfc,
   *     privateSpace, vpn, airplaneMode, mobileData, maintenanceMode, sambaClient, sambaServer, appClone,
   *     externalStorageCard, randomMac.
   * @returns { boolean } true if the specific feature of device is disallowed, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  /**
   * Queries whether the specific feature of the device is disallowed.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want | null } admin - admin indicates the enterprise admin extension ability information.
   *     If the admin is not empty, it must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be queried,
   *     the supported device features are as follows:
   *     modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint, usb, wifi, tethering, inactiveUserFreeze,
   *     camera, mtpClient, mtpServer, backupAndRestore, notification, mms, sms, remoteDiagnosis, remoteDesk, nfc,
   *     privateSpace, vpn, airplaneMode, mobileData, maintenanceMode, sambaClient, sambaServer, appClone,
   *     externalStorageCard, randomMac, unmuteDevice, hdcRemote.
   * @returns { boolean } true if the specific feature of device is disallowed, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  /**
   * Queries whether the specific feature of the device is disallowed.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want | null } admin - admin indicates the enterprise admin extension ability information.
   *     If the admin is not empty, it must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be queried,
   *     the supported device features are as follows:
   *     modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint, usb, wifi, tethering, inactiveUserFreeze,
   *     camera, mtpClient, mtpServer, backupAndRestore, notification, mms, sms, remoteDiagnosis, remoteDesk, nfc,
   *     privateSpace, vpn, airplaneMode, mobileData, maintenanceMode, sambaClient, sambaServer, appClone,
   *     externalStorageCard, randomMac, unmuteDevice, hdcRemote, virtualService.
   * @returns { boolean } true if the specific feature of device is disallowed, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  /**
   * Queries whether the specific feature of the device is disallowed.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want | null } admin - admin indicates the enterprise admin extension ability information.
   *     If the admin is not empty, it must have the corresponding permission.
   * @param { string } feature - feature indicates the specific feature to be queried,
   *     the supported device features are as follows:
   *     modifyDateTime, bluetooth, printer, hdc, microphone, fingerprint, usb, wifi, tethering, inactiveUserFreeze,
   *     camera, mtpClient, mtpServer, backupAndRestore, notification, mms, sms, remoteDiagnosis, remoteDesk, nfc,
   *     privateSpace, vpn, airplaneMode, mobileData, maintenanceMode, sambaClient, sambaServer, appClone,
   *     externalStorageCard, randomMac, unmuteDevice, hdcRemote, virtualService, usbSerial.
   * @returns { boolean } true if the specific feature of device is disallowed, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function getDisallowedPolicy(admin: Want | null, feature: string): boolean;

  /**
   * Disallows the specific feature of the device for the specified account.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { string } feature - feature indicates the specific feature to be disallowed or allowed.
   * @param { boolean } disallow - true if disallow the specific feature of device, otherwise false.
   * @param { number } accountId - accountId indicates the account ID to be queried.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  /**
   * Disallows the specific feature of the device for the specified account.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { string } feature - feature indicates the specific feature to be disallowed or allowed,
   *                             the supported device features are as follows:
   *                             fingerprint, print, mtpClient, usbStorageDeviceWrite, diskRecoveryKey, sudo, distributedTransmissionOutgoing.
   * @param { boolean } disallow - true if disallow the specific feature of device, otherwise false.
   * @param { number } accountId - accountId indicates the account ID to be queried.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  /**
   * Disallows the specific feature of the device for the specified account.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { string } feature - feature indicates the specific feature to be disallowed or allowed,
   *                             the supported device features are as follows:
   *                             fingerprint, print, mtpClient, usbStorageDeviceWrite, diskRecoveryKey, sudo, distributedTransmissionOutgoing, openFileBoost.
   * @param { boolean } disallow - true if disallow the specific feature of device, otherwise false.
   * @param { number } accountId - accountId indicates the account ID to be queried.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number): void;

  /**
   * Queries whether the specific feature of the device is disallowed for the specified account.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { string } feature - feature indicates the specific feature to be queried.
   * @param { number } accountId - accountId indicates the account ID to be queried.
   * @returns { boolean } true if the specific feature of device is disallowed, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  /**
   * Queries whether the specific feature of the device is disallowed for the specified account.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want | null } admin - admin indicates the enterprise admin extension ability information.
   * @param { string } feature - feature indicates the specific feature to be queried.
   *                             the supported device features are as follows:
   *                             fingerprint, print, mtpClient, usbStorageDeviceWrite, diskRecoveryKey, sudo, distributedTransmissionOutgoing.
   * @param { number } accountId - accountId indicates the account ID to be queried.
   * @returns { boolean } true if the specific feature of device is disallowed, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  /**
   * Queries whether the specific feature of the device is disallowed for the specified account.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want | null } admin - admin indicates the enterprise admin extension ability information.
   * @param { string } feature - feature indicates the specific feature to be queried.
   *                             the supported device features are as follows:
   *                             fingerprint, print, mtpClient, usbStorageDeviceWrite, diskRecoveryKey, sudo, distributedTransmissionOutgoing, openFileBoost.
   * @param { number } accountId - accountId indicates the account ID to be queried.
   * @returns { boolean } true if the specific feature of device is disallowed, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function getDisallowedPolicyForAccount(admin: Want | null, feature: string, accountId: number): boolean;

  /**
   * Adds a list of applications that are not allowed to use a feature for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } feature - Feature to set.<br>- **snapshotSkip**: screen snapshot capability.
   * @param { Array<string> } list - List of content such as the bundle names.
   * @param { number } accountId - User ID, which must be greater than or equal to 0.<br>You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function addDisallowedListForAccount(admin: Want, feature: string, list: Array<string>, accountId: number): void;

  /**
   * Removes the list of applications that are not allowed to use a feature for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } feature - Feature to set.<br>- **snapshotSkip**: screen snapshot capability.
   * @param { Array<string> } list - List of content such as the bundle names.
   * @param { number } accountId - User ID, which must be greater than or equal to 0.<br>You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function removeDisallowedListForAccount(admin: Want, feature: string, list: Array<string>, accountId: number): void;

  /**
   * Obtains the list of applications that are not allowed to use a feature for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } feature - Feature to set.<br>- **snapshotSkip**: screen snapshot capability.
   * @param { number } accountId - User ID, which must be greater than or equal to 0.<br>You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @returns { Array<string> } List of applications that have been added by the user and for which a certain feature is
   *     disabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function getDisallowedListForAccount(admin: Want, feature: string, accountId: number): Array<string>;

  /**
   * Restricting users from changing specified settings item on the device.
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } settingsItem - settingsItem indicates the specific settings item to be disallowed.
   * the supported settingsItems are as follows:
   * setEthernetIp, setApn, powerKeyShutdown, setDeviceName,
   * setBiometricsAndScreenLock.
   * @param { boolean } restricted - true if restrict the specific settings item of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setUserRestriction(admin: Want, settingsItem: string, restricted: boolean): void;

  /**
   * Gets whether users are restricted from changing specified settings items on the device. 
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } settingsItem - settingsItem indicates the specific settings item to be disallowed.
   * @returns { boolean } true if restrict the specific settings item of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getUserRestricted(admin: Want, settingsItem: string): boolean;

  /**
   * Restricting users from changing specified settings item for account on the device.
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { string } settingsItem - settingsItem indicates the specific settings item to be disallowed.
   *     the supported settingsItems are as follows: modifyWallpaper.
   * @param { int } accountId - accountId indicates the account ID to be restricted.
   * @param { boolean } restricted - true if restrict the specific settings item of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function setUserRestrictionForAccount(admin: Want, settingsItem: string, accountId: int, restricted: boolean): void;

  /**
   * Gets whether users are restricted from changing specified settings items for account on the device.
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want | null } admin - admin indicates the administrator ability information.
   * @param { string } settingsItem - settingsItem indicates the specific settings item to be disallowed.
   *     the supported settingsItems are as follows: modifyWallpaper.
   * @param { int } accountId - accountId indicates the account ID to be restricted.
   * @returns { boolean } true if restrict the specific settings item of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function getUserRestrictedForAccount(admin: Want | null, settingsItem: string, accountId: int): boolean;


  /**
   * Enables or disables a specified device feature. Once disabled, the feature cannot be used.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { FeatureForDevice } feature - Device feature to be enabled or disabled.<br> **Note**: An application that
   *     has obtained the ohos.permission.PERSONAL_MANAGE_RESTRICTIONS permission and has been
   *     [activated as the built-in device administrator application]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}
   *     can use this API to set the [FeatureForDevice.WIFI_P2P]{@link restrictions.FeatureForDevice} feature.
   * @param { boolean } disallow - Whether to disallow the feature. The value **true** means to disallow the feature;
   *     the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200013 - The enterprise management policy has been successfully set,
   *     but the function has not taken effect in real time.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean): void;

  /**
   * Queries whether a specified device feature is disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { FeatureForDevice } feature - Device feature to be queried.
   * @returns { boolean } The value **true** indicates the device feature is disabled, and the value **false** indicates
   *     the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice): boolean;

  /**
   * Disallows a feature for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { FeatureForAccount } feature - User feature to be disabled or enabled.
   *     <br>If SuperHub has been added to the user's list of non-disableable applications through the
   *     [addUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.addUserNonStopApps} API,
   *     setting this parameter to **SUPER_HUB** will cause a policy conflict and error code 9200010 will be reported.
   *     In this case, call the
   *     [removeUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.removeUserNonStopApps} API
   *     to remove SuperHub from the user's list of non-disableable applications to resolve the conflict.
   * @param { boolean } disallow - Whether to disallow the feature. The value **true** means to disallow the feature;
   *     the value **false** means the opposite.
   * @param { number } accountId - Account ID.
   *     <br>The value must be an integer greater than or equal to 0.
   *     <br>You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.<br>When **feature** is set to **SUPER_HUB**, this parameter can only be set to the ID of
   *     the current user. Otherwise, error code 9200012 will be reported.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setDisallowedPolicyForAccount(admin: Want, feature: FeatureForAccount, disallow: boolean, accountId: number): void;

  /**
   * Obtains the status of a feature for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { FeatureForAccount } feature - User feature to be queried.
   * @param { number } accountId - Account ID.
   *     <br>The value must be an integer greater than or equal to 0.
   *     <br>You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @returns { boolean } The value **true** means the feature is disabled; the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getDisallowedPolicyForAccount(admin: Want | null, feature: FeatureForAccount, accountId: number): boolean;
}

export default restrictions;