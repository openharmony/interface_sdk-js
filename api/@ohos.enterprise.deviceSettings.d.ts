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

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * The **deviceSettings** module provides APIs for setting enterprise devices, including setting and obtaining the
 * screen-off time of a device.
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
declare namespace deviceSettings {
  /**
   * Represents the power policy.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface PowerPolicy {
    /**
     * Action to apply the power policy.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    powerPolicyAction: PowerPolicyAction;

    /**
     * Delay, in ms.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    delayTime: number;
  }

  /**
   * Enumerates the actions that can be performed to apply the power policy.
   *
   * <!--no_check-->
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 11
   */
  enum PowerPolicyAction {
    /**
     * No action is performed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    NONE = 0,

    /**
     * Automatically enter the sleep mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    AUTO_SUSPEND = 1,

    /**
     * Forcibly enter the sleep mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    FORCE_SUSPEND = 2,

    /**
     * Enter the sleep mode. This policy does not take effect currently.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    HIBERNATE = 3,

    /**
     * Shut down the system.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    SHUTDOWN = 4
  }

  /**
   * Defines the scenario to which the power policy applies.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 11
   */
  enum PowerScene {
    /**
     * Timeout scenario.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    TIME_OUT = 0
  }

  /**
   * Represents the certificate information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  export interface CertBlob {
    /**
     * Binary content of the certificate.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    inData: Uint8Array;

    /**
     * Certificate alias. The value length must be less than 40 characters.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    alias: string;
  }

  /**
   * Policy type.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  enum SettingsItem {
    /**
     * Device name.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DEVICE_NAME = 0,

    /**
     * Three-key navigation.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    FLOATING_NAVIGATION = 1
  }

  /**
   * Describes the setting item list.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  enum SettingsMenu {
    /**
     * Account.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ACCOUNT_ID = 0,

    /**
     * Wi-Fi.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI = 1,

    /**
     * WLAN proxy.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI_PROXY_SETTINGS = 2,

    /**
     * WLAN IP.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI_IP_SETTINGS = 3,

    /**
     * Bluetooth/NearLink & Bluetooth.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BLUETOOTH = 4,

    /**
     * Network.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    NETWORK = 5,

    /**
     * Mobile network.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MOBILE_NETWORK = 6,

    /**
     * More connectivity options - Super Device.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SUPER_DEVICE = 7,

    /**
     * More connectivity options.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MORE_CONNECTIVITY_OPTIONS = 8,

    /**
     * Home screen & style.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    HOME_SCREEN_STYLE = 9,

    /**
     * Display & brightness.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DISPLAY_BRIGHTNESS = 10,

    /**
     * Sounds & vibration.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SOUND_VIBRATION = 11,

    /**
     * Notifications & status bar.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    NOTIFICATIONS = 12,

    /**
     * Biometrics & screen lock.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BIOMETRICS_PASSWORD = 13,

    /**
     * Apps & services.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    APPS_AND_SERVICES = 14,

    /**
     * Battery.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BATTERY = 15,

    /**
     * Storage.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    STORAGE = 16,

    /**
     * Privacy & security.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    PRIVACY_AND_SECURITY = 17,

    /**
     * Digital Balance.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DIGITAL_BALANCE = 18,

    /**
     * Smart assistant.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SMART_ASSISTANT = 19,

    /**
     * Accessibility.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ACCESSIBILITY = 20,

    /**
     * System.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SYSTEM = 21,

    /**
     * About.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ABOUT_DEVICE = 22,

    /**
     * System - system navigation.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SYSTEM_NAVIGATION = 23,

    /**
     * System - Language & region.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    LANGUAGE_REGION = 24,

    /**
     * System - Input method.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    INPUT_METHODS = 25,

    /**
     * System - Date & time.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DATE_TIME = 26,

    /**
     * System - Data Clone.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DATA_CLONE = 27,

    /**
     * System - Backup & Restore.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    BACKUP_SETTINGS = 28,

    /**
     * System - Reset.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    RESET = 29,

    /**
     * System - SuperHub.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SUPERHUB = 30,

    /**
     * System - User Experience Improvement Program.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    USER_EXPERIENCE = 31,

    /**
     * More connectivity options - ScreenCast.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SCREEN_CAST = 32,

    /**
     * Printers & scanners.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    PRINTERS_SCANNERS = 33,

    /**
     * Mobile network - Mobile data.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MOBILE_DATA = 34,

    /**
     * Mobile network - Personal hotspot.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    PERSONAL_HOTSPOT = 35,

    /**
     * Mobile network - SIM management.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SIM_MANAGEMENT = 36,

    /**
     * Mobile network - Airplane mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    AIRPLANE_MODE = 37,

    /**
     * Mobile network - Management data usage.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MANAGE_DATA_USAGE = 38,

    /**
     * Mobile network - VPN.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    VPN_SETTINGS = 39,

    /**
     * Display & brightness - Text & display size.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    TEXT_DISPLAY_SIZE = 40,

    /**
     * System - App duplicator.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    APP_DUPLICATOR = 41,

    /**
     * Search.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    SEARCH = 42
  }

  /**
   * Enumerates switch names.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum SwitchKey {
    /**
     * NearLink.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NEARLINK = 0,

    /**
     * Bluetooth.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    BLUETOOTH = 1,

    /**
     * Wi-Fi.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    WIFI = 2,

    /**
     * NFC.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NFC = 3
  }

  /**
   * Enumerates switch states.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum SwitchStatus {
    /**
     * On.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    ON = 0,

    /**
     * Off.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    OFF = 1,

    /**
     * Force on.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    FORCE_ON = 2
  }

  /**
   * Sets the device screen-off time.
   *
   * @permission ohos.permission.ENTERPRISE_SET_SCREENOFF_TIME
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } time - Screen-off time to set, in milliseconds. You are advised to set this parameter to the
   *     device's optional screen-off time.
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
   */
  function setScreenOffTime(admin: Want, time: number): void;

  /**
   * Obtains the device screen-off time. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<number> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null** and **data** is the screen-off time in ms. If the operation fails, **err** is an error
   *     object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getScreenOffTime(admin: Want, callback: AsyncCallback<number>): void;

  /**
   * Obtains the device screen-off time. This API uses an asynchronous promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<number> } Promise used to return the screen-off time, in ms.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getScreenOffTime(admin: Want): Promise<number>;

  /**
   * Installs a user certificate. This API uses a callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { CertBlob } certificate - Certificate information. The certificate file must be stored in the path that the
   *     app has the permission to access, such as the app sandbox path. For details about the mapping between the app
   *     sandbox path and the actual physical path, see
   *     [Mappings Between App Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths)
   *     .
   * @param { AsyncCallback<string> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function installUserCertificate(admin: Want, certificate: CertBlob, callback: AsyncCallback<string>): void;

  /**
   * Installs a user certificate. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { CertBlob } certificate - Certificate information. The certificate file must be stored in the path that the
   *     app has the permission to access, such as the app sandbox path. For details about the mapping between the app
   *     sandbox path and the actual physical path, see
   *     [Mappings Between App Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths)
   *     .
   * @returns { Promise<string> } Promise used to return the URI of the installed certificate. This URI can be used to
   *     uninstall the certificate.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function installUserCertificate(admin: Want, certificate: CertBlob): Promise<string>;

  /**
   * Uninstalls a user certificate. This API uses a callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } certUri - Certificate URI, which is set and returned by the
   *     [installUserCertificate]{@link deviceSettings.installUserCertificate(admin: Want, certificate: CertBlob, callback: AsyncCallback<string>)}
   *     API for installing a user certificate.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function uninstallUserCertificate(admin: Want, certUri: string, callback: AsyncCallback<void>): void;

  /**
   * Uninstalls a user certificate. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } certUri - Certificate URI, which is set and returned by the
   *     [installUserCertificate]{@link deviceSettings.installUserCertificate(admin: Want, certificate: CertBlob)} API
   *     for installing a user certificate.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when a user certificate fails
   *     to be uninstalled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function uninstallUserCertificate(admin: Want, certUri: string): Promise<void>;

  /**
   * Sets the power policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { PowerScene } powerScene - Scenario to which the power policy applies. Currently, only the timeout scenario
   *     is supported.
   * @param { PowerPolicy } powerPolicy - Power policy.
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
   */
  function setPowerPolicy(admin: Want, powerScene: PowerScene, powerPolicy: PowerPolicy): void;

  /**
   * Obtains the power policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { PowerScene } powerScene - Scenario to which the power policy applies. Currently, only the timeout scenario
   *     is supported.
   * @returns { PowerPolicy } Power policy.
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
   */
  function getPowerPolicy(admin: Want, powerScene: PowerScene): PowerPolicy;

  /**
   * Sets the device policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } item - Type of the policy to set.<br>- **screenOff**: device screen-off policy. For PCs/2-in-1
   *     devices, the screen-off policies for the battery and power supply modes can be set.<br>- **dateTime**: system
   *     time settings.<br>- **powerPolicy**: device power policy. For PCs/2-in-1 devices, only the power policy for the
   *     battery mode can be set.<br>- **eyeComfort**: eye comfort mode. This parameter is supported since API version 2
   *     3. This mode can only be enabled all day or disabled.<br>- **defaultInputMethod**: default input method. This
   *     parameter is supported since API version 23.
   * @param { string } value - Policy type value.<br>If **item** is **screenOff**, **value** is the screen-off time, in
   *     ms.<br>If **item** is **dateTime**, **value** is the system time to set, in ms.<br>If **item** is
   *     **powerPolicy**, **value** is a JSON string in {"powerScene":xx,"powerPolicy":{"powerPolicyAction":xx,"
   *     delayTime":xx}} format. **powerScene** indicates the power policy scenario, **delayTime** indicates the delay
   *     time (in milliseconds), and **powerPolicyAction** indicates the sleep policy.<br>The value of **powerScene**
   *     can be:<br>- **0**: timeout.<br>The value of **powerPolicyAction** can be:<br>- **0**: No action is performed.<
   *     br>- **1**: enter sleep mode automatically.<br>- **2**: forcibly enter sleep mode.<br>- **3**: enter sleep
   *     mode. This policy does not take effect currently.<br>- **4**: power off.<br>If **item** is **eyeComfort**,
   *     **value** is a string indicating the status of the eye comfort mode.<br>- **on**: The eye comfort mode is
   *     enabled all day.<br>- **off**: The eye comfort mode is disabled.<br>If **item** is **defaultInputMethod**,
   *     **value** is a string indicating the name of the input method application bundle.<br>- You can use
   *     [getCurrentInputMethod]{@link @ohos.inputMethod:inputMethod.getCurrentInputMethod()} to obtain the current
   *     input method application bundle name.
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
  function setValue(admin: Want, item: string, value: string): void;

  /**
   * Obtains a device setting policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } item - Type of the policy to set.<br>- **screenOff**: device screen-off policy. For PCs/2-in-1
   *     devices, the screen-off policies for the battery and power supply modes can be obtained.<br>- **powerPolicy**:
   *     device power policy. For PCs/2-in-1 devices, only the power policy for the battery mode can be obtained.<br>-
   *     **eyeComfort**: eye comfort mode. This parameter is supported since API version 23.
   * @returns { string } Policy type value.
   *     <br>If **item** is **screenOff**, the device screen-off time (in ms) is returned. For PCs/2-in-1 devices,
   *     the device screen-off time (in ms) in battery mode is returned.
   *     <br>If **item** is **powerPolicy**, the power policy is returned. For PCs/2-in-1 devices, the power policy in
   *     battery mode is returned. The power policy a JSON string in {"powerScene":xx,"powerPolicy":{"powerPolicyAction"
   *     :xx,"delayTime":xx}} format. **powerScene** indicates the power policy scenario, **delayTime** indicates the
   *     delay time (in milliseconds), and **powerPolicyAction** indicates the sleep policy.
   *     <br>The value of **powerScene** can be:
   *     <br>- **0**: timeout.
   *     <br>The value of **powerPolicyAction** can be:
   *     <br>- **0**: No action is performed.
   *     <br>- **1**: enter sleep mode automatically.
   *     <br>- **2**: forcibly enter sleep mode.
   *     <br>- **3**: enter sleep mode. This policy does not take effect currently.
   *     <br>- **4**: power off.
   *     <br>If **item** is **eyeComfort**, **value** is a string indicating the status of the eye comfort mode.
   *     <br>- **on**: The eye comfort mode is enabled all day.
   *     <br>- **off**: The eye comfort mode is disabled.
   *     <br>- **unknown**: other modes.
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
  function getValue(admin: Want, item: string): string;

  /**
   * Sets the home screen wallpaper. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_WALLPAPER
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } fd - File descriptor of the image to be set as the home screen wallpaper. The file descriptor of
   *     an image in the application's sandbox directory can be obtained via the file.fs.
   *     [openSync](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioopensync) API. The size of the
   *     wallpaper image must not exceed 100 MB.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the home screen wallpaper
   *     fails to be set.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setHomeWallpaper(admin: Want, fd: number):  Promise<void>;

  /**
   * Sets the lock screen wallpaper. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_WALLPAPER
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } fd - File descriptor of the image to be set as the lock screen wallpaper. The file descriptor of
   *     an image in the application's sandbox directory can be obtained via the file.fs.
   *     [openSync](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioopensync) API. The size of the
   *     wallpaper image must not exceed 100 MB.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the lock screen wallpaper
   *     fails to be set.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setUnlockWallpaper(admin: Want, fd: number):  Promise<void>;

  /**
   * Adds a setting item to the hidden setting item list of the current user. Then the setting item is hidden in the
   * current user's settings menu and cannot be found in settings search. Even if the setting item is located through
   * some means, it cannot be opened when tapped. The settings take effect immediately after the API is called. The
   * Settings application does not need to be restarted.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<SettingsMenu> } menusToHidden - Hidden setting item list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function addHiddenSettingsMenu(admin: Want, menusToHidden: Array<SettingsMenu>): void;

  /**
   * Removes a setting item from the hidden setting item list of the current user. Setting items in the hidden setting
   * item list are hidden in the current user's settings menu and cannot be found in settings search. Even if a setting
   * item is located through some means, it cannot be opened when tapped. If the remaining hidden setting item list is
   * empty after the removal, all setting items are displayed. The settings take effect immediately after the API is
   * called. The Settings application does not need to be restarted.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<SettingsMenu> } menusToHidden - Hidden setting item list
   *     <br>The maximum length is 43 and cannot be empty.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured. [since 26.0.0]
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function removeHiddenSettingsMenu(admin: Want, menusToHidden: Array<SettingsMenu>): void;

  /**
   * Obtains the hidden setting item list of the current user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<SettingsMenu> } Hidden setting item list.
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
  function getHiddenSettingsMenu(admin: Want): Array<SettingsMenu>;

  /**
   * Sets the device policy for a specified user. This API allows you to set a specific parameter for a given user, such
   * as setting the device name for user 100.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { SettingsItem } item - Type of the policy to set.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.
   *     <br>You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the account ID.
   * @param { string } value - Policy type value.
   *     <br>When **item** is set to
   *     [SettingsItem.DEVICE_NAME]{@link deviceSettings.SettingsItem}, **value** indicates the device name, which is a
   *     character string. The string length ranges from 1 to 100. Only the device name of the current user can be set.
   *     If the device name of another user is set, error code 9200012 is returned.<br>When **item** is set to
   *     [SettingsItem.FLOATING_NAVIGATION]{@link deviceSettings.SettingsItem}, **value** indicates the state of the
   *     three-key navigation switch. Its **0** indicates that the three-key navigation switch is enabled. (In
   *     [Kiosk mode]{@link @ohos.app.ability.kioskManager:kioskManager.enterKioskMode}, the display of three-button
   *     navigation also requires the bottom gesture being enabled. Specifically, three-button navigation is displayed
   *     only when both the three-button navigation switch and the bottom gesture switch are enabled. The bottom gesture
   *     can be enabled or disabled through the
   *     [applicationManager.setKioskFeatures]{@link @ohos.enterprise.applicationManager:applicationManager.setKioskFeatures}
   *     API.) The value **1** indicates that three-key navigation is disabled.<br>When **item** is set to
   *     [SettingsItem.FLOATING_NAVIGATION]{@link deviceSettings.SettingsItem}, this API can be called properly on
   *     phones and tablets but returns error code 801 on other devices.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function setValueForAccount(admin: Want, item: SettingsItem, accountId: number, value: string): void;

  /**
   * Obtains the device policy of a specified user. This API allows you to obtain a specific parameter of a given user,
   * such as obtaining the device name of user 100.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { SettingsItem } item - Type of the policy to set.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.
   *     <br>You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the account ID.
   * @returns { string } Policy type value.
   *     <br>When **item** is set to [SettingsItem.DEVICE_NAME]{@link deviceSettings.SettingsItem}, this API returns the
   *     device name of the current user. If the device name of another user is queried, error code 9200012 is returned.
   *     <br>When **item** is set to [SettingsItem.FLOATING_NAVIGATION]{@link deviceSettings.SettingsItem},
   *     this API returns the three-key navigation switch state for the specified user.
   *     <br>When **item** is set to [SettingsItem.FLOATING_NAVIGATION]{@link deviceSettings.SettingsItem},
   *     this API can be called properly on phones and tablets but returns error code 801 on other devices.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function getValueForAccount(admin: Want, item: SettingsItem, accountId: number): string;

  /**
   * Sets the state of a switch. This API can enable or disable NearLink, Bluetooth, and Wi-Fi. After the setting is
   * applied, users can manually enable or disable them. If a switch has been disabled through the
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * API, error code 203 will be thrown when you attempt to set the state of the switch through this API. In this case,
   * you need to use the
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * API to enable the switch.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SETTINGS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { SwitchKey } key - Switch name. An application that has obtained the
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS permission and has been
   *     [activated as the built-in device administrator application]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}
   *     can use this API to set the following switches: NearLink, Bluetooth, and Wi-Fi.
   * @param { SwitchStatus } status - Switch state. An application that has obtained the
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS permission and has been
   *     [activated as the built-in device administrator application]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}
   *     can use this API to set the switch state to ON or OFF.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201042 - Failed to toggle the switch state.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setSwitchStatus(admin: Want, key: SwitchKey, status: SwitchStatus): void;
}

export default deviceSettings;