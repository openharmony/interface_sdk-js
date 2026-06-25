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
 * The **systemManager** module provides system management capabilities.
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
 * @since 12
 */
declare namespace systemManager {
  /**
   * Represents information about the system version to update.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface SystemUpdateInfo {
    /**
     * System version to update.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    versionName: string;

    /**
     * Time when the system update package is received for the first time.
     * Unit: Seconds, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    firstReceivedTime: number;

    /**
     * Type of the system update package to update.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    packageType: string;
  }

  /**
   * Enumerates the update policy types.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum PolicyType {
    /**
     * Default update policy, which periodically notifies the user of the update and starts the update after user
     * confirmation.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DEFAULT = 0,

    /**
     * Prohibit updates.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    PROHIBIT = 1,

    /**
     * Enforce updates. In this case, **latestUpdateTime** must be specified.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPDATE_TO_SPECIFIC_VERSION = 2,

    /**
     * Update at the specified time window. In this case, **installStartTime** and **installEndTime** must be specified.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WINDOWS = 3,

    /**
     * Postpone updates. After the time specified by **delayUpdateTime** is over, the default update policy is used.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    POSTPONE = 4
  }

  /**
   * Represents an OTA update policy.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface OtaUpdatePolicy {
    /**
     * Type of the update policy.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    policyType: PolicyType;

    /**
     * Version of the software to update.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    version: string;

    /**
     * Latest update time (timestamp).
     * Unit: Seconds, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    latestUpdateTime?: number;

    /**
     * Period for which the update is postponed.
     * Unit: Hours, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    delayUpdateTime?: number;

    /**
     * Start time (timestamp) of the installation window.
     * Unit: Seconds, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installStartTime?: number;

    /**
     * End time (timestamp) of the installation window.
     * Unit: Seconds, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installEndTime?: number;

    /**
     * Whether to disable public network upgrade. The value **true** indicates that public network upgrade is disabled,
     * and the value **false** indicates the opposite. If this field is used as an input parameter of
     * [systemManager.setOtaUpdatePolicy]{@link systemManager.setOtaUpdatePolicy}, the default value can be retained.
     * The current configuration can be obtained via the
     * [systemManager.getOtaUpdatePolicy]{@link systemManager.getOtaUpdatePolicy} API. After public network upgrade is
     * disabled, you can perform intranet upgrade.<!--RP4--><!--RP4End-->
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    disableSystemOtaUpdate?: boolean;
  }

  /**
   * Represents information about the system update packages.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface UpdatePackageInfo {
    /**
     * Version of the system update package.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    version: string;

    /**
     * Details about the system update packages.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    packages: Array<Package>;

    /**
     * Description of the system update packages.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    description?: PackageDescription;

    /**
     * Authentication information of the system update package.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    authInfo?: string;
  }

  /**
   * Represents the details about a system update package.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface Package {
    /**
     * Type of the system update package.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    type: PackageType;

    /**
     * Path of the system update package. If **fd** is specified, pass in the update package name here.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    path: string;

    /**
     * File descriptor (FD) of the system update package. Currently, you cannot pass in **path** only. The **fd**
     * parameter must also be passed in.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    fd?: number;
  }

  /**
   * Enumerates the update package types.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum PackageType {
    /**
     * Firmware.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    FIRMWARE = 1
  }

  /**
   * Represents the description of a system update package.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface PackageDescription {
    /**
     * Update notification defined by an enterprise.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    notify?: NotifyDescription;
  }

  /**
   * Represents the update notification defined by an enterprise.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface NotifyDescription {
    /**
     * Update tips provided by the enterprise.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installTips?: string;

    /**
     * Details about the update tips customized by the enterprise.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installTipsDetail?: string;
  }

  /**
   * Represents the update result information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface UpdateResult {
    /**
     * Current version of the system.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    version: string;

    /**
     * System update status.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    status: UpdateStatus;

    /**
     * Error information.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    errorInfo: ErrorInfo;
  }

  /**
   * Enumerates the system update statuses.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum UpdateStatus {
    /**
     * The system update package of the specified version does not exist.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    NO_UPDATE_PACKAGE = -4,

    /**
     * The system update package is waiting to be installed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPDATE_WAITING = -3,

    /**
     * The system update is being performed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPDATING = -2,

    /**
     * The update failed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPDATE_FAILURE = -1,

    /**
     * The update is successful.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPDATE_SUCCESS = 0
  }

  /**
   * Represents the update error information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface ErrorInfo {
    /**
     * Error code.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    code: number;

    /**
     * Error information.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    message: string;
  }

  /**
   * Enumerates NearLink protocols.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  enum NearLinkProtocol {
    /**
     * SparkLink Service Access Protocol (SSAP).<!--RP1--><!--RP1End-->
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    SSAP = 0,

    /**
     * Data transfer protocol.<!--RP2--><!--RP2End-->
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    DATA_TRANSFER = 1
  }

  /**
   * Enumerates key event handling policies. When a key event occurs, only the keys for which the key event handling
   * policy has been delivered are intercepted. For key events where no handling policy has been delivered, the system
   * executes its original response logic.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  interface KeyEventPolicy {
    /**
     * Key code.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyCode: KeyCode;

    /**
     * Key policy.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyPolicy: KeyPolicy;
  }

  /**
   * Key code. Key codes are used to map to the actual physical keys on a device in the following scenarios:
   * [adding a key event policy]{@link systemManager.addKeyEventPolicies},
   * [removing a key event policy]{@link systemManager.removeKeyEventPolicies},
   * [querying a key event policy]{@link systemManager.getKeyEventPolicies}, and
   * [invoking the key event callback API]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onKeyEvent}
   * .
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum KeyCode {
    /**
     * Power key
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    POWER = 0,

    /**
     * Volume up
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    VOLUME_UP = 1,

    /**
     * Volume down
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    VOLUME_DOWN = 2,

    /**
     * Navigation key - back
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    BACK = 3,

    /**
     * Navigation key - home
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    HOME = 4,

    /**
     * Navigation key - recently opened
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    RECENT = 5
  }

  /**
   * Enumerates key policies. This refers to the system behavior triggered after the key code delivered by the MDM app
   * matches the system key event.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum KeyPolicy {
    /**
     * Intercepts messages. After this parameter is set, only the current key event is intercepted. The system does not
     * process the event, and the key callback API does not respond to the key event. For example, after the power key
     * interception policy is delivered, pressing the power key does not respond, the device cannot be powered off or
     * locked, and only the power key event in the power-on state is affected. When the device is powered off, the power
     * key can be used to power on the device.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    INTERCEPTION = 0,

    /**
     * Intercepts and forwards messages. When this policy is configured, the system intercepts the current key event and
     * does not process the event. In addition, the
     * [EnterpriseAdminExtensionAbility.onKeyEvent]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onKeyEvent}
     * callback API is used to notify the MDM app of the key event, which does not block the processing of other events.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    CUSTOM = 1
  }

  /**
   * Enumerates key events. When the
   * [EnterpriseAdminExtensionAbility.onKeyEvent]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onKeyEvent}
   * key event callback is triggered, the current key event information is transferred.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  interface KeyEvent {
    /**
     * Key code.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyCode: KeyCode;

    /**
     * Key action.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyAction: KeyAction;

    /**
     * Time when the key action occurs. The value is a microsecond-level timestamp after the system is powered on. For
     * long-press key events, this parameter remains unchanged in subsequent key events. Apps can use this timestamp to
     * determine whether the event is a long-press event and execute the corresponding long-press event logic
     * accordingly.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    actionTime: number;

    /**
     * Information about other keys that are being pressed when the current key event occurs.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyItems: Array<KeyItem>;
  }

  /**
   * Enumerates key actions.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum KeyAction {
    /**
     * Any key action other than press and release.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    UNKNOWN = -1,

    /**
     * Key press.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    DOWN = 0,

    /**
     * Key release.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    UP = 1
  }

  /**
   * Enumerates other key information. This refers to the information of other keys that have been pressed when the
   * current [KeyCode]{@link systemManager.KeyCode} event occurs.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  interface KeyItem {
    /**
     * Key code.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    keyCode: KeyCode;

    /**
     * Key action. It indicates whether the key is pressed: **true** for pressed; **false** for released.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    pressed: boolean;

    /**
     * Time when the key action occurs. The value is a microsecond-level timestamp after the system is powered on.
     * Navigation keys do not support combination expansion, so their occurrence time is displayed as 0.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    downTime: number;
  }

  /**
   * Sets the NTP server.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } server - NTP server addresses separated by commas (,). For example,
   *     **ntpserver1.com,ntpserver2.com**. The value can contain a maximum of 96 bytes (including the end character).
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
  function setNTPServer(admin: Want, server: string): void;

  /**
   * Obtains the NTP server information.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { string } NTP server information.
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
  function getNTPServer(admin: Want): string;

  /**
   * Sets the update policy. In intranet updates, call
   * [systemManager.notifyUpdatePackages]{@link systemManager.notifyUpdatePackages} to notify the system of the update
   * packages and then call this API to set the upgrade policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { OtaUpdatePolicy } policy - OTA update policy to set.
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
  function setOtaUpdatePolicy(admin: Want, policy: OtaUpdatePolicy): void;

  /**
   * Checks the update policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { OtaUpdatePolicy } **OtaUpdatePolicy** object containing the update policy obtained.
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
  function getOtaUpdatePolicy(admin: Want): OtaUpdatePolicy;

  /**
   * Notifies the system of the update packages. In intranet updates, call this API to notify the system of the update
   * packages, and then call [systemManager.setOtaUpdatePolicy]{@link systemManager.setOtaUpdatePolicy} to set the
   * update policy.
   *
   * > **NOTE**
   * >
   * > This API is time-consuming. Subsequent calls to other synchronous APIs in the application main thread must wait
   * > for the asynchronous return of this API.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { UpdatePackageInfo } packageInfo - Information about the system update packages.<br>**Note**: The input
   *     **UpdatePackageInfo.packages.path** must be a .zip package starting with update. If a file in other formats is
   *     input, error code 9201004 will be reported.
   * @returns { Promise<void> } Promise that returns no value. An error object will be thrown if the operation fails.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201004 - The update packages do not exist or analyzing failed.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function notifyUpdatePackages(admin: Want, packageInfo: UpdatePackageInfo): Promise<void>;

  /**
   * Obtains the system update result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } version - Version of the update package.
   * @returns { Promise<UpdateResult> } Promise used to return the system update result.
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
  function getUpdateResult(admin: Want, version: string): Promise<UpdateResult>;

  /**
   * Obtains the authentication data for system update verification. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<string> } Promise used to return the authentication data.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function getUpdateAuthData(admin: Want): Promise<string>;

  /**
   * Sets automatic unlocking upon device reboot. This setting takes effect only on devices without a screen lock
   * password.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } isAllowed - The value **true** indicates that the device is automatically unlocked after reboot,
   *     and the value **false** indicates the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setAutoUnlockAfterReboot(admin: Want, isAllowed: boolean): void;

  /**
   * Checks whether the device is automatically unlocked upon reboot.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 20 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @returns { boolean } The value **true** indicates the device is automatically unlocked after reboot, and the value
   *     **false** indicates the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getAutoUnlockAfterReboot(admin: Want | null): boolean;

  /**
   * Adds a list of NearLink protocols that are not allowed to be used for a specified user. NearLink Kit provides a low
   * -power, high-speed short-range communication service that supports connection and data interaction between NearLink
   * devices. <!--RP3--><!--RP3End-->This API does not take effect for system services and system applications such as
   * the keyboard and stylus.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<NearLinkProtocol> } protocols - NearLink protocol list.
   * @param { number } accountId - User ID, which must be greater than or equal to 0.<br>You can call APIs such as
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addDisallowedNearLinkProtocols(admin: Want, protocols: Array<NearLinkProtocol>, accountId: number): void;

  /**
   * Removes the list of disallowed NearLink protocols for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<NearLinkProtocol> } protocols - NearLink protocol list.
   * @param { number } accountId - User ID, which must be greater than or equal to 0.<br>You can call APIs such as
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeDisallowedNearLinkProtocols(admin: Want, protocols: Array<NearLinkProtocol>, accountId: number): void;

  /**
   * Obtains the list of disallowed NearLink protocols for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } accountId - User ID, which must be greater than or equal to 0.<br>You can call APIs such as
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @returns { Array<NearLinkProtocol> } List of disallowed NearLink protocols for a specified user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getDisallowedNearLinkProtocols(admin: Want, accountId: number): Array<NearLinkProtocol>;

  /**
   * Sets whether local installation of enterprise applications is supported. When local installation is enabled, users
   * can install enterprise applications (signing certificate distribution type: **enterprise_normal**) by double-
   * tapping their installation packages on enterprise PCs/2-in-1 devices with the local installation capability.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } isEnable - Whether local installation of enterprise applications is supported. The value
   *     **true** indicates that the local installation of enterprise applications is supported, and the value **false**
   *     indicates the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setInstallLocalEnterpriseAppEnabled(admin: Want, isEnable: boolean): void;

  /**
   * Checks whether local installation of enterprise applications is supported.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>Before API version 24, this API can
   *     be called to check whether local installation of enterprise applications is supported. If the device has
   *     multiple MDM applications, you can pass **admin** to query the corresponding policies. Since API version 24,
   *     **admin** can be set to **null**. In this case, the policies that actually take effect on the device are
   *     returned. [since 20 - 23]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>Before API version 24, this API can
   *     be called to check whether local installation of enterprise applications is supported. If the device has
   *     multiple MDM applications, you can pass **admin** to query the corresponding policies. Since API version 24,
   *     **admin** can be set to **null**. In this case, the policies that actually take effect on the device are
   *     returned. [since 24]
   * @returns { boolean } Whether local installation of enterprise applications is supported. The value **true**
   *     indicates that local installation is supported, and the value **false** indicates the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getInstallLocalEnterpriseAppEnabled(admin: Want | null): boolean;

  /**
   * Adds a key event handling policy. When the system triggers a key event, if the event matches the delivered key
   * event policy, the MDM app will be notified via the
   * [EnterpriseAdminExtensionAbility.onKeyEvent]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onKeyEvent}
   * callback, with the key event information of the matched policy carried in the callback.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<KeyEventPolicy> } keyPolicies - Key policy. Physical keys (power key, volume up, and volume down)
   *     and navigation keys (back, home, and recently opened) are supported. Physical keys can be combined into a
   *     combination key, but navigation keys cannot. For details about the combination key event response, see
   *     [Key Event Callback]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onKeyEvent}
   *     .
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function addKeyEventPolicies(admin: Want, keyPolicies: Array<KeyEventPolicy>): void;

  /**
   * Removes a key event handling policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<KeyCode> } keyCodes - Key code. You can remove multiple key policies at a time. Removing an
   *     unsupported key will report error code 9200012.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function removeKeyEventPolicies(admin: Want, keyCodes: Array<KeyCode>): void;

  /**
   * Obtains the key event handling policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 23 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @returns { Array<KeyEventPolicy> } List of currently configured key event policies.
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
  function getKeyEventPolicies(admin: Want | null): Array<KeyEventPolicy>;

  /**
   * Enables or disables the device activation lock. After the device activation lock is disabled, the Find Device
   * function will no longer be available. This function applies only to specific devices.<!--RP5--><!--RP5End-->
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } isDisabled - Whether to disable the activation lock. The value **true** indicates yes, and the
   *     value **false** indicates no.
   * @param { string } [credential] - Credential for disabling the activation lock. To disable the activation lock, you
   *     must set this parameter to a valid credential<!--RP6--><!--RP6End-->. Leave this parameter empty when enabling
   *     the activation lock.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the activation lock fails
   *     to be enabled or disabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 9201011 - The credential of the activation lock is invalid.
   * @throws { BusinessError } 9201012 - Failed to enable or disable the activation lock.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function setActivationLockDisabled(admin: Want, isDisabled: boolean, credential?: string): Promise<void>;

  /**
   * Checks whether the device activation lock is disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<boolean> } Promise used to return whether the device activation lock is disabled. The value
   *     **true** indicates that the device activation lock is disabled and the Find Device function cannot be used. The
   *     value **false** indicates that the device activation lock is enabled and the Find Device function is available.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function isActivationLockDisabled(admin: Want): Promise<boolean>;

  /**
   * Starts to collect the [fault logs]{@link @ohos.faultLogger:FaultLogger.FaultType} that have been generated and
   * stored on the device. The fault logs, app service logs, and system run logs that are not stored on the hard disk
   * cannot be collected.
   *
   * - After the API is called, the system starts a log collection task. The API returns a response immediately after
   * the task is started. The task may fail due to system performance constraints.
   * - This API can be called by multiple MDM apps. Logs collected by different MDM apps under different users are saved
   * separately and do not affect each other. Only one MDM app can start a log collection task at a time. If this API is
   * called before the task is complete, the error code 9201009 is returned, and other MDM apps may call the API only
   * after the task finishes.
   * - Upon task completion, the MDM app is notified via the
   * [EnterpriseAdminExtensionAbility.onLogCollected]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onLogCollected}
   * callback. The system mounts the collected log files to the MDM app sandbox path, enabling the MDM app to read the
   * logs within the callback.
   * - If the log collection task takes more than 5 minutes, the
   * [EnterpriseAdminExtensionAbility.onLogCollected]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onLogCollected}
   * callback returns a task execution failure message.
   * - After the app obtains the logs, you are advised to call
   * [systemManager.finishLogCollected]{@link systemManager.finishLogCollected} to remove the collected logs.
   *
   * @permission ohos.permission.ENTERPRISE_READ_LOG
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<void> } Promise that returns no value. When a log collection task fails to be created, an error
   *     object is thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201009 - Collecting logs, please try again later.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function startCollectLog(admin: Want): Promise<void>;

  /**
   * Deletes the device logs collected by the current MDM app under the current user.
   *
   * > **NOTE**
   * >
   * > After the app calls [startCollectLog]{@link systemManager.startCollectLog} to initiate log collection and
   * > receives the
   * > [EnterpriseAdminExtensionAbility.onLogCollected]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onLogCollected}
   * > callback, you are advised to immediately copy or process the logs, and then call this API to delete the collected
   * > logs.
   * >
   * > If this API is not called, device logs will occupy the system storage space, which does not affect the next call
   * > of [startCollectLog]{@link systemManager.startCollectLog} to start a log collection task.
   *
   * @permission ohos.permission.ENTERPRISE_READ_LOG
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
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
  function finishLogCollected(admin: Want): void;

  /**
   * Sets whether local installation of enterprise applications is supported for a specified user. After the policy of
   * supporting local enterprise application installation is delivered to a PC/2-in-1 enterprise device that has the
   * local installation capability, the user can double-click an enterprise application installation package on the
   * desktop or in the Files application to install it.
   *
   * Only enterprise applications signed with the **enterprise_normal** or **enterprise_mdm** signature type are
   * supported.
   *
   * > **NOTE**
   * >
   * > A PC/2-in-1 enterprise device supports local installation of enterprise applications for the current user if any
   * > of the following conditions is met:
   * >
   *
   * <!--RP7--><!--RP7End-->
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } isEnable - Whether local installation of enterprise applications is supported. The value
   *     **true** indicates that the local installation of enterprise applications is supported, and the value **false**
   *     indicates the opposite.
   * @param { number } accountId - Account ID.
   *     <br>The value must be an integer greater than or equal to 0.
   *     <br>You can call APIs such as
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:
   *     AsyncCallback<int>)}
   *     to obtain the account ID.
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
  function setInstallLocalEnterpriseAppEnabledForAccount(admin: Want, isEnable: boolean, accountId: number): void;

  /**
   * Checks whether local installation of enterprise applications is supported for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned.
   * @param { number } accountId - Account ID.
   *     <br>The value must be an integer greater than or equal to 0.
   *     <br>You can call APIs such as [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the account ID.
   * @returns { boolean } Whether local installation of enterprise applications is supported. The value **true**
   *     indicates that local installation is supported, and the value **false** indicates the opposite. When **admin**
   *     is set to **null**, this API checks whether local installation of enterprise applications is supported.
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
  function getInstallLocalEnterpriseAppEnabledForAccount(admin: Want | null, accountId: number): boolean;

  /**
   * Sets the OTA update nonce enable.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { boolean } isEnable - true indicates enable OTA update nonce, otherwise disable.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setOtaUpdateNonceEnable(admin: Want, isEnable: boolean): void;

  /**
   * Queries whether OTA update nonce is enabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @returns { boolean } returns true indicates enabled OTA update nonce, otherwise disabled.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function isOtaUpdateNonceEnable(admin: Want): boolean;
}

export default systemManager;