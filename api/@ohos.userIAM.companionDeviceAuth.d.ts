/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file Companion Device Authentication
 * @kit UserAuthenticationKit
 */

import UserAuth from '@ohos.userIAM.userAuth';

/**
 * The **companionDeviceAuth** module is an important part of the OpenHarmony user identity and access management (
 * UserIAM) system. It is dedicated to companion device authentication management. This module provides the system
 * application with capabilities such as querying and subscribing to companion devices, and managing the service scope.
 *
 * This module applies to the following scenarios:
 *
 * - Managing the authentication relationship between a companion device and the primary device.
 * - Querying and subscribing to the status changes of a companion device.
 * - Managing the service scope supported by a companion device.
 * - Implementing continuous authentication.
 * - Processing device selection and registration.
 *
 * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 23 dynamic&static
 */
declare namespace companionDeviceAuth {
  /**
   * Enumerates service IDs. A service ID uniquely identifies a service scenario supported by the companion device.
   * The service scenarios supported by different companion devices vary according to the authentication security. For
   * example, executing voice commands without screen unlocking.
   *
   * The companion device relationships of different service IDs are independent of each other and do not interfere
   * with each other. They can be added, deleted, and authenticated independently.
   *
   * Currently, the services of the companion device module include the default services of OpenHarmony, screen
   * unlocking, application unlocking, and identity authentication before voice commands are executed on the lock
   * screen.
   *
   * Adding services has requirements on the scenarios supported by the server device. For example, the multi-screen
   * collaboration service requires that the server device support the agency authentication scenario.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum BusinessId {
    /**
     * Default service ID. It is system-defined and used for basic authentication scenarios.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DEFAULT = 0,

    /**
     * Start value of the vendor-defined service ID. The vendor can extend service IDs based on this value. The
     * actual value must be greater than or equal to 10000 to avoid conflicts with the reserved system values
     * [0-9999].
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VENDOR_BEGIN = 10000
    }

  /**
   * Enumerates device ID types. They are used to define the device service identifier type. System-defined types and
   * vendor-defined types are supported.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DeviceIdType {
    /**
     * Unified device ID. It is a system-defined device service ID type, used for unified device identification
     * across devices.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNIFIED_DEVICE_ID = 1,

    /**
     * Start value of the vendor-defined device ID type. The vendor can extend device ID types based on this value.
     * The actual value must be greater than or equal to 10000 to avoid conflicts with the reserved system values
     * [1-9999].
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VENDOR_BEGIN = 10000
    }

  /**
   * Selects the purpose of the companion device.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum SelectPurpose {
    /**
     * Selects a companion device to which the template is to be added. Specifically, the purpose of the current
     * operation is to select a device for adding a new authentication template. The system returns a list of
     * devices suitable for adding a template.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SELECT_ADD_DEVICE = 1,

    /**
     * Selects the companion device that provides the authentication capability. Specifically, the purpose of the
     * current operation is to select a device that has a registered template for authentication. The system returns
     * a list of devices that have the authentication capability.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SELECT_AUTH_DEVICE = 2,

    /**
     * Start value of the vendor-defined selection purpose. The vendor can extend the selection purpose based on
     * this value. The actual value must be greater than or equal to 10000 to avoid conflicts with the reserved
     * system values [0-9999].
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VENDOR_BEGIN = 10000
    }

  /**
   * Defines the device service ID. It uniquely identifies a device and its user, including the device ID type, device
   * ID, and user ID.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceKey {
    /**
     * Enumerates device ID types. They are used to specify the type of the device service ID and can be extended
     * based on [DeviceIdType]{@link companionDeviceAuth.DeviceIdType}. For example, you can use
     * **UNIFIED_DEVICE_ID(1)** to indicate the unified device ID or use the vendor-defined value (≥ 10000).
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceIdType: int;

    /**
     * Device ID. It is a string that uniquely identifies a device. The format is determined by the value of
     * **deviceIdType**.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceId: string;

    /**
     * Device user ID. It is an integer greater than or equal to 0 and is used to distinguish different users on the
     * device.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceUserId: int;
    }

  /**
   * Defines the device status information. It describes the current status of the companion device, including the
   * device service ID, user name, model information, device name, online status, and list of supported service IDs.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceStatus {
    /**
     * Key device information. It uniquely identifies a device, including the device ID type, device ID, and device
     * user ID.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceKey: DeviceKey;

    /**
     * Device user name. It is the display name of the current user on the device, and is displayed on the device
     * selection screen.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceUserName: string;

    /**
     * Device model information. It identifies the device model, such as the product model and device type.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceModelInfo: string;

    /**
     * Device name. It is the name or alias of a device, and is displayed to the user in the device list.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceName: string;

    /**
     * Device online status. The value **true** indicates that the device is online and can communicate with the
     * primary device. The value **false** indicates that the device is offline and cannot perform authentication
     * interaction.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isOnline: boolean;

    /**
     * List of service IDs supported by the device. It indicates the service scenarios supported by the device, such
     * as unlocking the screen lock and unlocking the application lock. The service scenarios supported by a device
     * vary depending on the authentication security.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    supportedBusinessIds: int[];
    }

  /**
   * Describes the complete status information about a registered companion device authentication template, including
   * the template ID, data confirmation status, validity, user ID, time when the template is added, supported
   * services, and associated device status.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface TemplateStatus {
    /**
     * Template ID. Unique ID of a companion device authentication template, which is used to specify the target
     * template when the service scope is updated or the authentication status is subscribed to.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    templateId: Uint8Array;

    /**
     * Data confirmation status. The value **true** indicates that the data is real-time data and has been confirmed
     * and synchronized with the device. The value **false** indicates that the data is cached data, which may be
     * different from the actual device status.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isConfirmed: boolean;

    /**
     * Template validity. The value **true** indicates that the template is valid and can be used for
     * authentication. The value **false** indicates that the template is invalid, may have been deleted or expired,
     * and cannot be used for authentication.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isValid: boolean;

    /**
     * Local user ID. It specifies the user ID associated with the template on the primary device. The value is a
     * positive integer greater than or equal to 0.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    localUserId: int;

    /**
     * Template adding time. Timestamp when the template is created. The value is a Unix timestamp, that is, the
     * number of milliseconds elapsed since 00:00:00 on January 1, 1970.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    addedTime: Date;

    /**
     * List of supported service IDs. It specifies the service scenarios where the template is enabled. You can
     * update the service scenarios by calling the
     * [updateEnabledBusinessIds]{@link companionDeviceAuth.updateEnabledBusinessIds} API.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enabledBusinessIds: int[];

    /**
     * Device status information. It specifies the current status of the companion device associated with the
     * template, including the online status and device name.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceStatus: DeviceStatus;
    }

  /**
   * Defines the callback triggered for receiving notifications of template status changes. When the template status
   * changes (for example, the template is added, deleted, or its validity changes), the system notifies the
   * application through this callback.
   *
   * @param { TemplateStatus[] } templateStatusList - Template status list. The list contains the status information
   *     of all registered templates of the current user. The application can determine whether a template is valid
   *     based on the **isValid** field and whether the data is real-time data based on the **isConfirmed** field.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type TemplateStatusCallback = (templateStatusList: TemplateStatus[]) => void;

  /**
   * Defines the callback triggered for receiving notifications of continuous authentication status changes. When the
   * authentication status of a companion device changes, the system applies the current authentication result and
   * authentication reliability level through this callback notification.
   *
   * @param { boolean } isAuthPassed - Whether the authentication is successful. The value **true** indicates that the
   *     companion device is successfully authenticated and the user identity is confirmed. The value **false**
   *     indicates that the authentication fails, the user identity is not confirmed, or the authentication has
   *     expired.
   * @param { UserAuth.AuthTrustLevel } [authTrustLevel] - Highest authentication trust level that the companion
   *     device can currently achieve. The value can be **ATL1 (10000)**, **ATL2 (20000)**, **ATL3 (30000)**, or
   *     **ATL4 (40000)**. A higher level indicates stronger authentication security.
   *     <br>Note:
   *     <br>This parameter is provided only when **isAuthPassed** is **true**.
   *     <br>that is, the trust level of identity authentication required for typical operations. For details, see
   *     [Principles for Classifying Biometric Authentication Trust Levels](docroot://security/UserAuthenticationKit/user-authentication-overview.md#principles-for-classifying-biometric-authentication-trust-levels).
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ContinuousAuthStatusCallback = (isAuthPassed: boolean, authTrustLevel?: UserAuth.AuthTrustLevel) => void;

  /**
   * Defines the callback triggered for receiving notifications of available device status changes. When the list of
   * available devices changes (for example, a new device goes online or a device goes offline), the system notifies
   * the application through this callback.
   *
   * @param { DeviceStatus[] } deviceStatusList - Device status list. It contains the status information about all
   *     devices that can be added as companion devices. The application can filter online devices based on the
   *     **isOnline** field and determine the service scope supported by the device based on the
   *     **supportedBusinessIds** field.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type AvailableDeviceStatusCallback = (deviceStatusList: DeviceStatus[]) => void;

  /**
   * Defines continuous authentication parameters. They are used to configure parameters related to the subscription
   * to the continuous authentication status, for example, specifying the target template to be subscribed to.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ContinuousAuthParam {
    /**
     * Template ID. It is used to specify the target template to be subscribed to. If this parameter is not
     * specified, the continuous authentication status of all templates of the current user is subscribed to by
     * default. If a specific template ID is specified, only the authentication status change of the template is
     * subscribed to.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    templateId?: Uint8Array;
    }

  /**
   * Status monitor object. It is used to listen for or obtain information such as the template status, continuous
   * authentication status, and available device status. This object can be obtained by calling
   * [getStatusMonitor]{@link companionDeviceAuth.getStatusMonitor}.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface StatusMonitor {
    /**
     * Obtains the status of the companion device template. This API is used to query the status of all registered
     * companion device authentication templates of the current user, including the template validity, supported
     * services, and associated device status. This API uses a promise to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @returns { Promise<TemplateStatus[]> } Promise used to return the status list of all templates of the current
     *     user. The status of each template contains the template ID, validity, and device information. If the
     *     operation fails, an error code is returned.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getTemplateStatus(): Promise<TemplateStatus[]>;

    /**
     * Subscribes to template status change events. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { TemplateStatusCallback } callback - Callback used to receive the template status.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onTemplateChange(callback: TemplateStatusCallback): void;

    /**
     * Unsubscribes from template status change events. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { TemplateStatusCallback } [callback] - Callback to unregister. If this parameter is not specified,
     *     all callbacks corresponding to the event type are unsubscribed.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offTemplateChange(callback?: TemplateStatusCallback): void;

    /**
     * Subscribes to the events for status changes of companion devices that can be added. This API uses an
     * asynchronous callback to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AvailableDeviceStatusCallback } callback - Callback used to return the available device status.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onAvailableDeviceChange(callback: AvailableDeviceStatusCallback): void;

    /**
     * Unsubscribes from the events for status changes of companion devices that can be added. This API uses an
     * asynchronous callback to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AvailableDeviceStatusCallback } [callback] - Callback to unregister. If this parameter is not
     *     specified, all callbacks corresponding to the event type are unsubscribed.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offAvailableDeviceChange(callback?: AvailableDeviceStatusCallback): void;

    /**
     * Subscribes to the events for continuous authentication status of companion devices. This API uses an
     * asynchronous callback to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { ContinuousAuthParam } param - Device for which the events are subscribed to.
     * @param { ContinuousAuthStatusCallback } callback - Called when the continuous authentication status of the
     *     device changes.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @throws { BusinessError } 32600002 - The template is not found.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onContinuousAuthChange(param: ContinuousAuthParam, callback: ContinuousAuthStatusCallback): void;

    /**
     * Unsubscribes from the continuous authentication status change event of the companion device. After the
     * unsubscription, the application will no longer receive notifications of continuous authentication status
     * changes. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { ContinuousAuthStatusCallback } [callback] - Callback to unregister. If this parameter is passed,
     *     only the specified callback is unregistered. If this parameter is not passed, all callbacks registered
     *     with **onContinuousAuthChange** are unregistered.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offContinuousAuthChange(callback?: ContinuousAuthStatusCallback): void;
    }

  /**
   * Obtains the status monitor. This API is used to obtain the status monitor object of a specified user. The object
   * can be used to query and subscribe to the template status, continuous authentication status, and available device
   * status of the companion device.
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { int } localUserId - Local user ID. User ID on the primary device, which is a positive integer greater
   *     than or equal to 0. It is used to obtain the status monitor of the companion device corresponding to the
   *     user.
   * @returns { StatusMonitor } Status monitor object. It can be used to query the template status (
   *     [getTemplateStatus]{@link companionDeviceAuth.StatusMonitor.getTemplateStatus}), subscribe to template
   *     changes (
   *     [onTemplateChange]{@link companionDeviceAuth.StatusMonitor.onTemplateChange(callback: TemplateStatusCallback)}
   *     ), subscribe to available device status changes (
   *     [onAvailableDeviceChange]{@link companionDeviceAuth.StatusMonitor.onAvailableDeviceChange(callback: AvailableDeviceStatusCallback)}
   *     ), and subscribe to continuous authentication status changes (
   *     [onContinuousAuthChange]{@link companionDeviceAuth.StatusMonitor.onContinuousAuthChange(param: ContinuousAuthParam, callback: ContinuousAuthStatusCallback)}
   *     ).
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @throws { BusinessError } 32600002 - The local user is not found.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getStatusMonitor(localUserId: int): StatusMonitor;

  /**
   * Returns the result of companion device selection. It is used to return the device information and extended
   * context selected by the user in the device selection callback.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceSelectResult {
    /**
     * Device information list. It contains the device service identifier information selected by the user. Each
     * **DeviceKey** contains the device ID type, device ID, and device user ID. The system will perform subsequent
     * operations such as adding a template or performing authentication based on this information.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceKeys: DeviceKey[];

    /**
     * Device selection context. It carries extension information in JSON format and can be used to pass additional
     * parameters in the device selection process, such as authentication configuration and service scenario
     * identifier.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    selectionContext?: Uint8Array;
    }

  /**
   * Defines the callback triggered for the companion device selection. When the system requires the user to select a
   * companion device (for example, when adding a template or performing authentication), this callback is triggered.
   * The application needs to return the information about the selected device.
   *
   * @param { int } selectPurpose - Selection purpose. It identifies the purpose of the current device selection. For
   *     details about the value, see [SelectPurpose]{@link companionDeviceAuth.SelectPurpose}.
   *     **SELECT_ADD_DEVICE(1)** means to select the device for adding a template, and **SELECT_AUTH_DEVICE(2)**
   *     means to select the device for authentication. Vendors can customize the extended value (greater than or
   *     equal to 10000). The application should return the corresponding device list based on the selection purpose.
   * @returns { DeviceSelectResult } Device selection result. It contains the device information list (**deviceKeys**)
   *     selected by the user and the optional extended context (**selectionContext**).
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type DeviceSelectCallback = (selectPurpose: int) => DeviceSelectResult;

  /**
   * Registers a callback for companion device selection. When the system requires the user to select a companion
   * device, this callback is triggered. The application needs to return the information about the selected device in
   * the callback. Through this callback, the application can implement custom device selection logic, for example,
   * displaying a device selection screen for the user to select a device.
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { DeviceSelectCallback } callback - Callback for the companion device selection. When this callback is
   *     invoked, **selectPurpose** is passed in. The application needs to return the corresponding
   *     **DeviceSelectResult**, including the information about the selected device.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function registerDeviceSelectCallback(callback: DeviceSelectCallback): void;

  /**
   * Unregisters a callback for companion device selection. After the callback is unregistered, the system will no
   * longer invoke the device selection callback registered by the application, and the device selection will fall
   * back to the default system behavior.
   *
   * @permission ohos.permission.USE_USER_IDM
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function unregisterDeviceSelectCallback(): void;

  /**
   * Updates the service scope supported by the specified companion device template. This API is used to modify the
   * list of service IDs enabled for a registered template, thereby controlling the service scenarios in which the
   * template can be used. This API uses a promise to return the result.
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { Uint8Array } templateId - ID of the target template. Unique ID of the template whose service scope is to
   *     be updated, which can be obtained through
   *     [getTemplateStatus]{@link companionDeviceAuth.StatusMonitor.getTemplateStatus}.
   * @param { int[] } enabledBusinessIds - ID set of services supported by the template. It indicates the list of
   *     service scenarios to be enabled, such as [DEFAULT] and [Service ID for unlocking the screen]. Different
   *     service IDs correspond to different authentication scenarios. You can configure the service IDs based on
   *     service requirements.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @throws { BusinessError } 32600002 - The template is not found.
   * @throws { BusinessError } 32600003 - The business ID is invalid.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function updateEnabledBusinessIds(templateId: Uint8Array, enabledBusinessIds: int[]): Promise<void>;
}

export default companionDeviceAuth;