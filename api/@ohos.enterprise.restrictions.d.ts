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
     * X key.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    X_KEY = 1,

    /**
     * Local input.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    LOCAL_INPUT = 2,

    /**
     * Network packet filtering.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    PACKET_FILTERING = 3,

    /**
     * Super user do.
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
     * Disk erasure.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISK_ERASURE = 8,

    /**
     * Device Bluetooth capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    BLUETOOTH = 9,

    /**
     * Device capability to modify system time.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MODIFY_DATE_TIME = 10,

    /**
     * Device printing capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    PRINTER = 11,

    /**
     * Capability for other devices to connect to and debug this device via HDC.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    HDC = 12,

    /**
     * Device microphone capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MICROPHONE = 13,

    /**
     * Device fingerprint authentication capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    FINGERPRINT = 14,

    /**
     * Device USB capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    USB = 15,

    /**
     * Device Wi-Fi capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    WIFI = 16,

    /**
     * Network tethering capability. The ability to share the device's internet connection with other devices,
     * that is, hotspot sharing.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    TETHERING = 17,

    /**
     * Capability of freezing inactive users.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    INACTIVE_USER_FREEZE = 18,

    /**
     * Device camera capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    CAMERA = 19,

    /**
     * Media Transfer Protocol (MTP) client capability, including read and write capabilities.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MTP_CLIENT = 20,

    /**
     * MTP server capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MTP_SERVER = 21,

    /**
     * Samba client capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SAMBA_CLIENT = 22,

    /**
     * Samba server capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SAMBA_SERVER = 23,

    /**
     * Backup and restore capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    BACKUP_AND_RESTORE = 24,

    /**
     * Device maintenance mode capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MAINTENANCE_MODE = 25,

    /**
     * Multimedia Messaging Service (MMS) capability to receive and send multimedia messages.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MMS = 26,

    /**
     * Short Messaging Service (SMS) capability to receive and send SMS messages.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SMS = 27,

    /**
     * Cellular data capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MOBILE_DATA = 28,

    /**
     * Airplane mode capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    AIRPLANE_MODE = 29,

    /**
     * Virtual Private Network (VPN) capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    VPN = 30,

    /**
     * Device notification capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NOTIFICATION = 31,

    /**
     * Near Field Communication (NFC) capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NFC = 32,

    /**
     * Privacy space creation capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    PRIVATE_SPACE = 33,

    /**
     * Call capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    TELEPHONE_CALL = 34,

    /**
     * Application clone capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    APP_CLONE = 35,

    /**
     * External storage capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    EXTERNAL_STORAGE_CARD = 36,

    /**
     * Random MAC address capability for Wi-Fi connections.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    RANDOM_MAC = 37,

    /**
     * Device audio playback capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    UNMUTE_DEVICE = 38,

    /**
     * Capability of the device to debug other devices through HDC.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    HDC_REMOTE = 39,

    /**
     * Device virtualization service capability, which refers to the system capability of running other operating system
     * platforms (such as Linux and Windows) through virtualization technology by leveraging the redundancy of the
     * device's hardware resources.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    VIRTUAL_SERVICE = 40,

    /**
     * Device USB-to-serial port capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    USB_SERIAL = 41,

    /**
     * Device screen capture capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SCREEN_SHOT = 42,

    /**
     * Device screen recording capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SCREEN_RECORD = 43,

    /**
     * Recovery key export capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISK_RECOVERY_KEY = 44,

    /**
     * Device NearLink capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NEAR_LINK = 45,

    /**
     * Developer mode, which takes effect after the device is restarted.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DEVELOPER_MODE = 46,

    /**
     * Factory reset capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    RESET_FACTORY = 47,

    /**
     * Remote desktop capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    REMOTE_DESK = 48,

    /**
     * Remote diagnosis capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    REMOTE_DIAGNOSIS = 49,

    /**
     * System upgrade capability on public networks.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    OTA_UPDATE = 50
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
    SUPER_HUB = 2,

    /**
     * Device fingerprint authentication capability
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    FINGERPRINT = 3,

    /**
     * Device printing capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    PRINT = 4,

    /**
     * Media Transfer Protocol (MTP) client capability (write only).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MTP_CLIENT = 5,

    /**
     * USB storage device write capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    USB_STORAGE_DEVICE_WRITE = 6,

    /**
     * Recovery key export capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISK_RECOVERY_KEY = 7,

    /**
     * Superuser do (execution with superuser privileges).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SUDO = 8,

    /**
     * One-way data transmission between devices (only data transmission to other devices is supported).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISTRIBUTED_TRANSMISSION_OUTGOING = 9,

    /**
     * File opening acceleration capability.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    OPEN_FILE_BOOST = 10
  }

  /**
   * The settings item for device.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum SettingsForDevice {
    /**
     * APN configuration.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SET_APN = 0,

    /**
     * Capability to open the power menu bu long-pressing the power button.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    POWER_LONG_PRESS = 1,

    /**
     * Ethernet IP address configuration.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SET_ETHERNET_IP = 2,

    /**
     * Device name configuration.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SET_DEVICE_NAME = 3,

    /**
     * Screen lock password configuration.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SET_BIOMETRICS_AND_SCREEN_LOCK = 4
  }

  /**
   * The settings item for account.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum SettingsForAccount {
    /**
     * Modify wallpaper.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MODIFY_WALLPAPER = 0
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
   * Disallows a feature.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS [since 12 - 14]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS [since 15 - 19]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK [since 20]
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } feature - For features that can be set, see Table 1.<br> **Note**: Since API version 15,
   *     applications granted with the ohos.permission.PERSONAL_MANAGE_RESTRICTIONS permission and
   *     [activated as device administrator applications]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}
   *     can use this API to set the following features: **bluetooth**, **hdc**, **microphone**, **usb**, **wifi**,
   *     **tethering**, and **camera**<!--RP3--><!--RP3End-->. Since API version 26.0.0, this API can be used to set the
   *     **mtpServer** feature.
   * @param { boolean } disallow - Whether to disallow the feature. The value **true** means to disallow the feature;
   *     the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200013 - The enterprise management policy has been successfully set,
   *     but the function has not taken effect in real time. [since 21]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setDisallowedPolicy(admin: Want, feature: string, disallow: boolean): void;

  /**
   * Queries whether a feature is disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS [since 12 - 14]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS [since 15 - 19]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK [since 20]
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 19]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 20]
   * @param { string } feature - For features that can be queried, see Table 2.<br> **Note**: Since API version 15,
   *     applications granted with the ohos.permission.PERSONAL_MANAGE_RESTRICTIONS permission and
   *     [activated as device administrator applications]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}
   *     can use this API to obtain the status of following features: **bluetooth**, **hdc**, **microphone**, **usb**,
   *     **wifi**, **tethering**, and **camera**<!--RP4--><!--RP4End-->. Since API version 26.0.0, this API can be used
   *     to obtain the status of the **mtpServer** feature.
   * @returns { boolean } The value **true** means the feature is disallowed; the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function getDisallowedPolicy(admin: Want | null, feature: string): boolean;

  /**
   * Disallows a feature for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } feature - Feature to set.<br>- **fingerprint**: device fingerprint authentication capability.
   *     Currently, this feature is supported only on PCs/2-in-1 devices. The rules for using this parameter are as
   *     follows:<br>1. If this capability has been disabled through the
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   *     API, using **setDisallowedPolicyForAccount** will throw a policy conflict.<br>2. When
   *     **setDisallowedPolicyForAccount** is used to disable or enable the device fingerprint authentication capability
   *     for a specified user, any subsequent action via the
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   *     API will override the previous setting. If
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   *     enables the capability, all users gain access to the device fingerprint authentication.<br>- **print**<sup>20+<
   *     /sup>: device printing capability, which is supported only on PCs/2-in-1 devices for API versions earlier than
   *     23, and on PCs/2-in-1 devices, smartphones, and tablets for API version 23 and later versions. If printing is
   *     disabled via this API, it remains disabled for specific users even if the
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   *     API is used to enable it for those users.<br>- **mtpClient**<sup>20+</sup>: Media Transfer Protocol (MTP)
   *     client capability (write only). Currently, this feature is supported only on PCs/2-in-1 devices. MTP allows
   *     users to linearly access media files on mobile devices. A policy conflict error will occur if this API is used
   *     to disable MTP client capability after MTP client write access has been disabled for specific users via the
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   *     API.<br>- **usbStorageDeviceWrite**<sup>20+</sup>: USB storage device write capability. Currently, this feature
   *     is supported only on enterprise PCs/2-in-1 devices.<!--RP5--><!--RP5End--><br>  If the USB storage device write
   *     permission of a user is disabled via this API in any of the following situations, a policy conflict will be
   *     reported:<br>  1. The device USB capability has been disabled via the
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   *     API.<br>  2. USB storage device access policy has been set to read-only or disabled via the
   *     [setUsbStorageDeviceAccessPolicy]{@link @ohos.enterprise.usbManager:usbManager.setUsbStorageDeviceAccessPolicy}
   *     API.<br>  3. Storage USB devices have been disabled via the
   *     [addDisallowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.addDisallowedUsbDevices} API.<br>-
   *     **diskRecoveryKey**<sup>20+</sup>: recovery
   *     [key export](docroot://security/UniversalKeystoreKit/huks-export-key-arkts.md) capability. Currently, this
   *     feature is supported only on PCs/2-in-1 devices.<br>- **sudo**<sup>20+</sup>: superuser do (execution with
   *     superuser privileges). Currently, this feature is supported only on PCs/2-in-1 devices. If this feature is
   *     disabled, neither enterprise spaces nor personal spaces can perform operations with superuser privileges.<br>-
   *     **distributedTransmissionOutgoing**<sup>20+</sup>: one-way data transmission between devices (only data
   *     transmission to other devices is supported).<br>- **openFileBoost**<sup>23+</sup>: <!--RP6-->file opening
   *     acceleration capability<!--RP6End-->, which provides the file opening acceleration status awareness capability
   *     for apps. By integrating the corresponding APIs, apps can detect the acceleration status of files, and further
   *     implement features such as displaying unique UI identifiers for accelerated files, thereby optimizing the user
   *     experience of file opening. Currently, this feature is supported only on PCs/2-in-1 devices.
   * @param { boolean } disallow - Whether to disallow the feature. The value **true** means to disallow the feature;
   *     the value **false** means the opposite.
   * @param { number } accountId - User ID, which must be greater than or equal to 0.<br>You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicyForAccount(admin: Want, feature: FeatureForAccount, disallow: boolean, accountId: number)
   */
  function setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number): void;

  /**
   * Obtains the status of a feature for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 14 - 19]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 20]
   * @param { string } feature - Feature to set.<br>- **fingerprint**: device fingerprint authentication capability.
   *     Currently, this feature is supported only on PCs/2-in-1 devices. Note that when
   *     [setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}
   *     is used to disable or enable the device fingerprint authentication capability for a specified user, any
   *     subsequent action via the
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   *     API will override the previous setting. The value **false** will be returned.<br>- **mtpClient**<sup>20+</sup>:
   *     Media Transfer Protocol (MTP) client capability (write only). Currently, this feature is supported only on PCs/
   *     2-in-1 devices. MTP allows users to linearly access media files on mobile devices.<br>-
   *     **usbStorageDeviceWrite**<sup>20+</sup>: USB storage device write capability. Currently, this feature is
   *     supported only on enterprise PCs/2-in-1 devices.<br>- **diskRecoveryKey**<sup>20+</sup>: recovery
   *     [key export](docroot://security/UniversalKeystoreKit/huks-export-key-arkts.md) capability. Currently, this
   *     feature is supported only on PCs/2-in-1 devices.<br>- **sudo**<sup>20+</sup>: superuser do (execution with
   *     superuser privileges). Currently, this feature is supported only on PCs/2-in-1 devices. If this feature is
   *     disabled, neither enterprise spaces nor personal spaces can perform operations with superuser privileges.<br>-
   *     **distributedTransmissionOutgoing**<sup>20+</sup>: one-way data transmission between devices (only data
   *     transmission to other devices is supported).<br>- **print**<sup>20+</sup>: device printing capability, which is
   *     supported only on PCs/2-in-1 devices for API versions earlier than 23, and on PCs/2-in-1 devices, smartphones,
   *     and tablets for API version 23 and later versions. If printing is disabled via the
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   *     API, it remains disabled even if the
   *     [setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}
   *     API is used to enable it for specific users.<br>- **openFileBoost**<sup>23+</sup>: <!--RP6-->file opening
   *     acceleration capability<!--RP6End-->, which provides the file opening acceleration status awareness capability
   *     for apps. By integrating the corresponding APIs, apps can detect the acceleration status of files, and further
   *     implement features such as displaying unique UI identifiers for accelerated files, thereby optimizing the user
   *     experience of file opening. Currently, this feature is supported only on PCs/2-in-1 devices.
   * @param { number } accountId - User ID, which must be greater than or equal to 0.<br>You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @returns { boolean } The value **true** means the feature is disabled; the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicyForAccount(admin: Want | null, feature: FeatureForAccount, accountId: number)
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
   * Sets restrictions on user behaviors.
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } settingsItem - User behavior.<br>- **setApn**: APN configuration, currently supported only on
   *     smartphones and tablets.<br>- **powerLongPress**: capability to open the power menu by long-pressing the power
   *     button. Currently, only smartphones and tablets are supported.<br>- **setEthernetIp**: Ethernet IP address
   *     configuration, currently supported only on PCs/2-in-1 devices.<br>- **setDeviceName**: device name
   *     configuration, currently supported only on PCs/2-in-1 devices, smartphones, and tablets. When it is disabled,
   *     the device name cannot be modified in the following settings: **About**, **Bluetooth**, and
   *     **More connectivity options** > **NearLink** on PCs/2-in-1 devices, and **About**, **Bluetooth**, and
   *     **Personal hotspot** on smartphones and tablets.<br>- **setBiometricsAndScreenLock**: screen lock password
   *     configuration, currently supported only on PCs/2-in-1 devices, smartphones, and tablets.
   * @param { boolean } restricted - Whether to disable the action. The value **true** means to disable the action, and
   *     **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   * @deprecated since 26.0.0
   * @useinstead restrictions.setUserRestriction(admin: Want, settingsItem: SettingsForDevice, restricted: boolean)
   */
  function setUserRestriction(admin: Want, settingsItem: string, restricted: boolean): void;

  /**
   * Obtains the disabled status of a setting item.
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } settingsItem - Setting item.<br>- **setEthernetIp**: Ethernet IP address configuration, currently
   *     supported only on PCs/2-in-1 devices.<br>- **setDeviceName**: device name configuration, currently supported
   *     only on PCs/2-in-1 devices, smartphones, and tablets. When it is disabled, the device name cannot be modified
   *     in the following settings: **About**, **Bluetooth**, and **More connectivity options** > **NearLink** on PCs/2-
   *     in-1 devices, and **About**, **Bluetooth**, and **Personal hotspot** on smartphones and tablets.<br>-
   *     **setBiometricsAndScreenLock**: screen lock password configuration, currently supported only on PCs/2-in-1
   *     devices, smartphones, and tablets.
   * @returns { boolean } Disabled status of the specified setting item. The value **true** means the item is disabled;
   *     the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   * @deprecated since 26.0.0
   * @useinstead restrictions.getUserRestricted(admin: Want, settingsItem: SettingsForDevice)
   */
  function getUserRestricted(admin: Want, settingsItem: string): boolean;

  /**
   * Sets restrictions on specified user behaviors.
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } settingsItem - User behavior.
   *     <br>- **modifyWallpaper**: Modify the wallpaper, including the lock screen wallpaper and home screen wallpaper.
   * @param { int } accountId - Account ID.
   *     <br>The value must be an integer greater than or equal to 0.
   *     <br>You can call [getOsAccountLocalId]{@linkv @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @param { boolean } restricted - Whether to disable the action. The value **true** means to disable the action, and
   *     **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   * @deprecated since 26.0.0
   * @useinstead restrictions.setUserRestrictionForAccount(admin: Want, settingsItem: SettingsForAccount, accountId: int, restricted: boolean)
   */
  function setUserRestrictionForAccount(admin: Want, settingsItem: string, accountId: int, restricted: boolean): void;

  /**
   * Obtains the disabled status of a setting item for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } settingsItem - Setting item.
   *     <br>- **modifyWallpaper**: Modify the wallpaper, including the lock screen wallpaper and home screen wallpaper.
   * @param { int } accountId - Account ID.
   *     <br>The value must be an integer greater than or equal to 0.
   *     <br>You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @returns { boolean } Disabled status of the specified setting item. The value **true** means the item is disabled;
   *     the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   * @deprecated since 26.0.0
   * @useinstead restrictions.getUserRestrictedForAccount(admin: Want | null, settingsItem: SettingsForAccount, accountId: int)
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

  /**
   * Restricting users from changing specified settings item for account on the device.
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { SettingsForAccount } settingsItem - settingsItem indicates the specific settings item to be restricted.
   * @param { int } accountId - accountId indicates the account ID to be restricted.
   *     <br>Value range:[0, +∞).
   * @param { boolean } restricted - true if restrict the specific settings item of the device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setUserRestrictionForAccount(admin: Want, settingsItem: SettingsForAccount, accountId: int, restricted: boolean): void;

  /**
   * Gets whether users are restricted from changing specified settings items for account on the device.
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want | null } admin - admin indicates the administrator ability information.
   * @param { SettingsForAccount } settingsItem - settingsItem indicates the specific settings item to be disallowed.
   * @param { int } accountId - accountId indicates the account ID to be restricted.
   *     <br>Value range:[0, +∞).
   * @returns { boolean } true if restrict the specific settings item of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getUserRestrictedForAccount(admin: Want | null, settingsItem: SettingsForAccount, accountId: int): boolean;

  /**
   * Restricting users from changing specified settings item on the device.
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { SettingsForDevice } settingsItem - settingsItem indicates the specific settings item to be disallowed.
   * @param { boolean } restricted - true if restrict the specific settings item of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setUserRestriction(admin: Want, settingsItem: SettingsForDevice, restricted: boolean): void;

  /**
   * Gets whether users are restricted from changing specified settings items on the device.
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { SettingsForDevice } settingsItem - settingsItem indicates the specific settings item to be disallowed.
   * @returns { boolean } true if restrict the specific settings item of device, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
 	function getUserRestricted(admin: Want, settingsItem: SettingsForDevice): boolean;
}

export default restrictions;