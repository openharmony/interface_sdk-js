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
 * @file
 * @kit UserAuthenticationKit
 */

import UserAuth from '@ohos.userIAM.userAuth';

/**
 * The **companionDeviceAuth** module provides capabilities such as companion device query, subscription, and service
 * scope management for system applications.
 *
 * A companion device is an identity authentication credential added by a user on the main device. If the conditions are
 * met, the companion device can interact with the main device to authenticate the user identity. The companion device
 * can be applied in such scenarios as a watch as a companion device to unlock a mobile phone or a headset as a
 * companion device to execute voice commands without unlocking the mobile phone.
 *
 * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 23 dynamic&static
 */
declare namespace companionDeviceAuth {
  /**
   * A service ID uniquely identifies a service scenario supported by the companion device. The supported service
   * scenarios vary with the authentication security of companion devices. For example, a smart watch as a companion
   * device can unlock the screen, unlock the application, and execute voice commands on the lock screen, while a
   * headset as a companion device can only execute voice commands on the lock screen.
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
     * Default service ID.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DEFAULT = 0,

    /**
     * Start value of the service ID defined by the vendor. The actual value must be greater than or equal to 10000
     * to avoid conflicts with the reserved values of the system.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VENDOR_BEGIN = 10000
    }

  /**
   * Enumerates device ID types.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DeviceIdType {
    /**
     * Unified device ID.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNIFIED_DEVICE_ID = 1,

    /**
     * Start value of the service ID defined by the vendor. The actual value must be greater than or equal to 10000
     * to avoid conflicts with the reserved values of the system.
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
     * Selects the companion device for adding a template.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SELECT_ADD_DEVICE = 1,

    /**
     * Selects the companion device that provides the authentication capability.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SELECT_AUTH_DEVICE = 2,

    /**
     * Start value of the service ID defined by the vendor. The actual value must be greater than or equal to 10000
     * to avoid conflicts with the reserved values of the system.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VENDOR_BEGIN = 10000
    }

  /**
   * Defines the device key.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceKey {
    /**
     * Device ID type. You can customize the extension based on
     * [DeviceIdType]{@link companionDeviceAuth.DeviceIdType}.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceIdType: int;

    /**
     * Device ID.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceId: string;

    /**
     * Device user ID.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceUserId: int;
    }

  /**
   * Defines the device status information.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceStatus {
    /**
     * Device key.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceKey: DeviceKey;

    /**
     * Device user name.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceUserName: string;

    /**
     * Device model information.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceModelInfo: string;

    /**
     * Device name.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceName: string;

    /**
     * Device online status. The options are as follows: **true**: The device is online. **false**: The device is
     * offline.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isOnline: boolean;

    /**
     * List of service IDs supported by the device.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    supportedBusinessIds: int[];
    }

  /**
   * Provides the template status maintained by the **companionDeviceAuth** module.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface TemplateStatus {
    /**
     * Template ID.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    templateId: Uint8Array;

    /**
     * Whether the data is real-time data. The options are as follows: **true**: The data is real-time data.
     * **false**: The data is cached data.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isConfirmed: boolean;

    /**
     * Whether the template is valid. The options are as follows: **true**: The template is valid. **false**: The
     * template is invalid.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isValid: boolean;

    /**
     * Local user ID.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    localUserId: int;

    /**
     * Template adding time. The value is a Unix timestamp, that is, the number of milliseconds elapsed since the
     * Unix epoch.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    addedTime: Date;

    /**
     * List of supported service IDs.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enabledBusinessIds: int[];

    /**
     * Device status information.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceStatus: DeviceStatus;
    }

  /**
   * Defines the callback used to receive the template status.
   *
   * @param { TemplateStatus[] } templateStatusList - Template status list.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type TemplateStatusCallback = (templateStatusList: TemplateStatus[]) => void;

  /**
   * Defines the callback used to receive the continuous authentication status.
   *
   * @param { boolean } isAuthPassed - Whether the authentication is successful. The options are as follows: **true**:
   *     yes; **false**: no.
   * @param { UserAuth.AuthTrustLevel } [authTrustLevel] - Authentication trust level, that is, the trust level of
   *     identity authentication required for typical operations. For details, see
   *     [Principles for Classifying Biometric Authentication Trust Levels]
   *     (docroot://security/UserAuthenticationKit/user-
   *     authentication-overview.md#principles-for-classifying-biometric-authentication-trust-levels).
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ContinuousAuthStatusCallback = (isAuthPassed: boolean, authTrustLevel?: UserAuth.AuthTrustLevel) => void;

  /**
   * Defines the callback used to receive the changes of the list of devices that can be added.
   *
   * @param { DeviceStatus[] } deviceStatusList - Device status list.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type AvailableDeviceStatusCallback = (deviceStatusList: DeviceStatus[]) => void;

  /**
   * Defines the continuous authentication parameter.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ContinuousAuthParam {
    /**
     * Template ID. If this parameter is not specified, all templates of the current user are subscribed to by
     * default.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    templateId?: Uint8Array;
    }

  /**
   * Defines the object for listening to or obtaining the template or continuous authentication status.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface StatusMonitor {
    /**
     * Obtains the status of the companion device template. This API uses a promise to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @returns { Promise<TemplateStatus[]> } Promise used to return the list of all template states.
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
     * Unsubscribes from the events for continuous authentication status of companion devices. This API uses an
     * asynchronous callback to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { ContinuousAuthStatusCallback } [callback] - Callback to unregister. If this parameter is not
     *     specified, all callbacks corresponding to the event type are unsubscribed.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offContinuousAuthChange(callback?: ContinuousAuthStatusCallback): void;
    }

  /**
   * Obtains the status listener, which is used to query and subscribe to companion template information.
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { int } localUserId - Local user ID.
   * @returns { StatusMonitor } Promise used to return the status listener.
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
   * Returns the result of companion device selection.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceSelectResult {
    /**
     * Device information list.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceKeys: DeviceKey[];

    /**
     * Device selection context, which carries extended information in JSON format.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    selectionContext?: Uint8Array;
    }

  /**
   * Defines the callback of companion device selection.
   *
   * @param { int } selectPurpose - Selection purpose. For details about the values, see
   *     [SelectPurpose]{@link companionDeviceAuth.SelectPurpose}. The value can be customized.
   * @returns { DeviceSelectResult } Device selection result.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type DeviceSelectCallback = (selectPurpose: int) => DeviceSelectResult;

  /**
   * Registers the callback for companion device selection.
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { DeviceSelectCallback } callback - Callback used to return the companion device selection result.
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
   * Unregisters the callback for companion device selection.
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
   * Updates the service scope supported by the specified companion device template. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { Uint8Array } templateId - ID of the target template.
   * @param { int[] } enabledBusinessIds - ID set of services supported by the template.
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