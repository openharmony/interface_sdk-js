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
import common from './@ohos.enterprise.common';

import statistics from './@ohos.net.statistics';

/**
 * The **applicationManager** module provides application management capabilities, including adding, removing, and
 * obtaining the applications that are forbidden to run.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md). The
 * > [applicationManager.isAppKioskAllowed]{@link applicationManager.isAppKioskAllowed} API is available to all
 * > applications.
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace applicationManager {
  /**
   * Defines the features of the kiosk mode.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  enum KioskFeature {
    /**
     * Allow access to the notification center (by swiping down from the upper left corner with one finger).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ALLOW_NOTIFICATION_CENTER = 1,

    /**
     * Allow access to the control panel (by swiping down from the upper right corner with one finger).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ALLOW_CONTROL_CENTER = 2,

    /**
     * Allow access to the recent task bar (by swiping up from the bottom with one finger and holding).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ALLOW_GESTURE_CONTROL = 3,

    /**
     * Allow access to the side dock (by swiping inward from the edge with one finger and holding).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ALLOW_SIDE_DOCK = 4
  }

  /**
   * Describes information about an application in the shortcut bar.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  interface DockInfo {
    /**
     * Bundle name of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    bundleName: string;

    /**
     * Ability name of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    abilityName: string;

    /**
     * Location index of the application in the shortcut bar.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    index: number;
  }

  /**
   * The type of distribute ability.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum ServiceType {
    /**
     * Collaboration service.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    COLLABORATION_SERVICE  = 0
  }

  /**
   * The bundle statistics information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  interface BundleStatsInfo {
    /**
     * The bundle name of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    bundleName: string;

    /**
     * The index of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    appIndex: number;

    /**
     * The total duration, in milliseconds.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    abilityInFgTotalTime: number;
  }

  /**
   * Window state information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  interface WindowStateInfo {
    /**
     * The ID of the window.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    windowId: number;

    /**
     * The name of the window.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    name: string;

    /**
     * The state of the window.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    state: WindowState;

    /**
     * Is the application on the dock.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    isOnDock: boolean;
  }

  /**
   * The state of the window.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum WindowState {
    /**
     * Disconnect state.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISCONNECT = 0,

    /**
     * Connect state.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    CONNECT = 1,

    /**
     * Foreground state.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    FOREGROUND = 2,

    /**
     * Active state.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    ACTIVE = 3,

    /**
     * Inactive state.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    INACTIVE = 4,

    /**
     * Background state.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    BACKGROUND = 5
  }

  /**
   * Adds the applications that are not allowed to run under the current user. This API uses an asynchronous callback to
   * return the result. From API version 21, if the allowed application list
   * [addallowedRunningBundles]{@link @ohos.enterprise.applicationManager:applicationManager.addAllowedRunningBundles}
   * is not empty, the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is
   * reported.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured. [since 21]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Adds the applications that are not allowed to run under a specified user (specified by **userId**). This API uses
   * an asynchronous callback to return the result. From API version 21, if the allowed application list
   * [addallowedRunningBundles]{@link @ohos.enterprise.applicationManager:applicationManager.addAllowedRunningBundles}
   * is not empty, the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is
   * reported.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured. [since 21]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Adds the applications that are not allowed to run by the current or specified user. This API uses a promise to
   * return the result. From API version 21, if the allowed application list
   * [addallowedRunningBundles]{@link @ohos.enterprise.applicationManager:applicationManager.addAllowedRunningBundles}
   * is not empty, the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is
   * reported.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { number } userId - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in, the
   *     applications cannot be run by the specified user.<br> - If **userId** is not passed in, the applications cannot
   *     be run by the current user.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when an application that is not
   *     allowed to run fails to be added.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured. [since 21]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Adds the applications that are not allowed to run by the current or specified user. From API version 21, if the
   * allowed application list [addallowedRunningBundles]{@link applicationManager.addAllowedRunningBundles} is not empty
   * , the prohibited application list cannot be added using this API. Otherwise, the error code 9200010 is reported.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - IDs of the applications to add.<br>**Note**: From API version 21 onwards, the
   *     [appId](docroot://quick-start/common-problem-of-application.md#what-is-appid) and
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#what-is-appidentifier) of the app can be
   *     passed. **appIdentifier** is recommended. In API version 20 and earlier versions, only **appId** can be passed.
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.<br> - If **accountId** is passed in, this API applies to the specified
   *     user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured. [since 21]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addDisallowedRunningBundlesSync(
    admin: Want,
    appIds: Array<string>,
    accountId?: number
  ): void;

  /**
   * Removes an application from the applications that are not allowed to run under the current user. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
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
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Removes an application from the applications that are not allowed to run under the current user (specified by
   * **userId**). This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
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
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Removes an application from the applications that are not allowed to run under the current or specified user. This
   * API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { number } userId - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in, the
   *     applications cannot be run by the specified user.<br> - If **userId** is not passed in, the applications cannot
   *     be run by the current user.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when an application that is not
   *     allowed to run fails to be removed.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes the applications that are not allowed to run by the current user or specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - IDs of the applications to add.<br>Note: Since API version 21, elements in the
   *     array can use **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed.
   *     **appIdentifier** or **appId** of the same app will not be removed. In API version 20 and earlier versions,
   *     only **appId** can be transferred.
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.<br> - If **accountId** is passed in, this API applies to the specified
   *     user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function removeDisallowedRunningBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Obtains applications that are not allowed to run by the current user. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<Array<string>> } callback - Callback used to obtain the applications that are not allowed to
   *     run. If the operation is successful, **err** is **null**; otherwise, **err** is an error object.<br>Note: For
   *     API version 20 and earlier versions, the return value is the **appId** list. In API version 21 and later
   *     versions, the return value is the **appId** or **appIdentifier** list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getDisallowedRunningBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains an application from the applications that are not allowed to run by the current user (specified by
   * **userId**). This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<Array<string>> } callback - Callback used to obtain the applications that are not allowed to
   *     run. If the operation is successful, **err** is **null**; otherwise, **err** is an error object.<br>Note: For
   *     API version 20 and earlier versions, the return value is the **appId** list. In API version 21 and later
   *     versions, the return value is the **appId** or **appIdentifier** list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getDisallowedRunningBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains applications that are not allowed to run by the current user or a specified user. This API uses a promise
   * to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } userId - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in, the
   *     applications cannot be run by the specified user.<br> - If **userId** is not passed in, the applications cannot
   *     be run by the current user.
   * @returns { Promise<Array<string>> } Promise used to return the applications that are not allowed to run by the
   *     current user or specified user.
   *     <br>Note: For API version 20 and earlier versions, the return value is the **appId** list. In API version 21 and
   *     later versions, the return value is the **appId** or **appIdentifier** list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getDisallowedRunningBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Obtains applications that are not allowed to run by the current user or specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.<br> - If **accountId** is passed in, this API applies to the specified
   *     user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @returns { Array<string> } Applications that are not allowed to run by the current user or specified user.
   *     <br>Note: For API version 20 and earlier versions, the return value is the **appId** list. In API version 21 and
   *     later versions, the return value is the **appId** or **appIdentifier** list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function getDisallowedRunningBundlesSync(admin: Want, accountId?: number): Array<string>;

  /**
   * Adds the applications that are allowed to run under specified users.
   *
   * > **NOTE**
   * >
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIdentifiers - Array of app unique identifiers. You can obtain
   *     **bundleInfo.signatureInfo.appIdentifier** through the
   *     [bundleManager.getinstalledbundlelist]{@link @ohos.enterprise.bundleManager:bundleManager.getInstalledBundleList(admin: Want, accountId: number)}
   *     API.<br>Value range:<br> - The total number of entries in this list for a single user must not exceed 200. For
   *     example, if 50 entries have been set for user 100 and none for user 101, user 100 can add 150 more entries,
   *     while user 101 can add up to 200 entries.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function addAllowedRunningBundles(admin: Want, appIdentifiers: Array<string>, accountId: number): void;

  /**
   * Removes the applications that are allowed to run by the specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIdentifiers - Array of unique identifiers of an app. You can obtain the
   *     **bundleInfo.signatureInfo.appIdentifier** by calling the
   *     [bundleManager.getinstalledbundlelist]{@link @ohos.enterprise.bundleManager:bundleManager.getInstalledBundleList(admin: Want, accountId: number)}
   *     API. Value range: The array length cannot exceed 200.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.
   *     <br> You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   *     of @ohos.account.osAccount to obtain the ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function removeAllowedRunningBundles(admin: Want, appIdentifiers: Array<string>, accountId: number): void;

  /**
   * Obtains the list of applications allowed to run by a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.
   *     <br> You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   *     of @ohos.account.osAccount to obtain the ID.
   * @returns { Array<string> } List of applications allowed to run by a specified user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function getAllowedRunningBundles(admin: Want, accountId: number): Array<string>;

  /**
   * Adds the auto-start applications for the current user. Applications added to the auto-start list via this API
   * cannot be manually disabled for auto-start by users on the device<!--RP4--><!--RP4End-->. However, they can be
   * removed from the auto-start list using the
   * [removeAutoStartApps]{@link applicationManager.removeAutoStartApps(admin: Want, autoStartApps: Array<Want>)} API.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<Want> } autoStartApps - Array of auto-start applications. The maximum array length is 10. For
   *     example, if there are already 5 applications in the list, a maximum of 5 more can be added via this API.
   *     **Want** must contain **bundleName** and **abilityName**. The ability can be UIAbility or
   *     ServiceExtensionAbility. If the value of **exported** in the
   *     [abilities](docroot://quick-start/module-configuration-file.md#abilities) tag is **false**, the ability cannot
   *     be started. Since API version 24, you can specify whether to hide the UI when applications automatically start
   *     upon device startup by setting **isHiddenStart** in the **parameters** attribute of Want. The value **true**
   *     indicates that yes, and the value **false** indicates no. The default value is **false**. If the **true** value
   *     is used, the applications must be <!--RP8-->integrated with the status bar<!--RP8End-->. Otherwise, the auto-
   *     start setting fails. (If only one application is set to hide the UI upon auto-start but the application is not
   *     integrated with the status bar, error 401 is reported. This API returns success as long as one application is
   *     successfully set.) After the setting is successful, the applications do not display the UI but their UI
   *     processes exist. The capability of hiding the UI is available only on PCs/2-in-1 devices and tablets in PC
   *     mode.
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
  function addAutoStartApps(admin: Want, autoStartApps: Array<Want>): void;

  /**
   * Adds a list of applications that automatically start upon device startup for a specified user, and sets whether to
   * prohibit the user from manually canceling application auto-start<!--RP4--><!--RP4End-->.
   *
   * Applications can be added to the auto-start list via this API and the
   * [addAutoStartApps]{@link applicationManager.addAutoStartApps(admin: Want, autoStartApps: Array<Want>)} API.
   * Settings from both APIs can take effect simultaneously. For a single user, the auto-start list supports a maximum
   * of 10 applications. For example, if there are already 3 applications in the current list, a maximum of 7 more can
   * be added for the user via this API.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<Want> } autoStartApps - Array of auto-start applications. The array can contain a maximum of 10
   *     applications. **Want** must contain **bundleName** and **abilityName**. The ability can be UIAbility or
   *     ServiceExtensionAbility. If the value of **exported** in the
   *     [abilities](docroot://quick-start/module-configuration-file.md#abilities) tag is **false**, the ability cannot
   *     be started. Since API version 24, you can specify whether to hide the UI when applications automatically start
   *     upon device startup by setting **isHiddenStart** in the **parameters** attribute of Want. The value **true**
   *     indicates that yes, and the value **false** indicates no. The default value is **false**. If the **true** value
   *     is used, the applications must be <!--RP8-->integrated with the status bar<!--RP8End-->. Otherwise, the auto-
   *     start setting fails. (If only one application is set to hide the UI upon auto-start but the application is not
   *     integrated with the status bar, error 401 is reported. This API returns success as long as one application is
   *     successfully set.) After the setting is successful, the applications do not display the UI but their UI
   *     processes exist. The capability of hiding the UI is available only on PCs/2-in-1 devices and tablets in PC
   *     mode.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.
   * @param { boolean } disallowModify - Whether to prohibit the user from manually disabling application auto-start.
   *     The value **true** indicates yes and the value **false** indicates no.<!--RP1--><!--RP1End-->
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addAutoStartApps(admin: Want, autoStartApps: Array<Want>, accountId: number, disallowModify: boolean): void;

  /**
   * Checks whether a specified user is prohibited from canceling application auto-start.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Want } autoStartApp - Auto-start applications to add. **Want** must contain **bundleName** and
   *     **abilityName**.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.
   * @returns { boolean } Whether the user is prohibited from canceling application auto-startup. The value **true**
   *     indicates yes and the value **false** indicates no.<!--PR1--><!--PR1End-->
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isModifyAutoStartAppsDisallowed(admin: Want, autoStartApp: Want, accountId: number): boolean;

  /**
   * Removes the auto-start applications for the current user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<Want> } autoStartApps - Array of auto-start applications. **Want** must contain **bundleName** and
   *     **abilityName**. The ability can be UIAbility or ServiceExtensionAbility. If the value of **exported** in the
   *     [abilities](docroot://quick-start/module-configuration-file.md#abilities) tag is **false**, the ability cannot
   *     be started.
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
  function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>): void;

  /**
   * Removes the specified application from the auto-start application list of a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<Want> } autoStartApps - Array of auto-start applications. **Want** must contain **bundleName** and
   *     **abilityName**.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>, accountId: number): void;

  /**
   * Checks the auto-start applications for the current user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<Want> } List of the auto-start applications obtained. Since API version 24, the setting of whether
   *     the UI is hidden can be returned.
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
  function getAutoStartApps(admin: Want): Array<Want>;

  /**
   * Checks the auto-start applications for the specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.
   * @returns { Array<Want> } List of the auto-start applications obtained. Since API version 24, the setting of whether
   *     the UI is hidden can be returned.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getAutoStartApps(admin: Want, accountId: number): Array<Want>;

  /**
   * Adds applications to the keep-alive list; once added, the application processes will be kept alive automatically.
   * After the device is powered on or the application is killed, the system will proactively restart these application
   * processes.<!--RP7--><!--RP7End-->
   *
   * For applications added to the keep-alive list via this API, users cannot manually revoke their keep-alive status on
   * the device <!--RP6--><!--RP6End-->. However, you can call the
   * [removeKeepAliveApps]{@link applicationManager.removeKeepAliveApps} API to remove them from the keep-alive list.
   *
   * If applications are disallowed to run by calling
   * [addDisallowedRunningBundlesSync]{@link applicationManager.addDisallowedRunningBundlesSync}, they cannot be kept
   * alive. Otherwise, error code 9200010 will be reported.
   *
   * To use similar functions on phones or tablets, call
   * [addUserNonStopApps]{@link applicationManager.addUserNonStopApps} or
   * [addFreezeExemptedApps]{@link applicationManager.addFreezeExemptedApps}. For details, see the relevant documents.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } bundleNames - Array of application bundle names, which specifies the applications to be
   *     kept alive. A maximum of 5 applications are supported.<!--RP5--><!--RP5End-->
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9201005 - Add keep alive applications failed.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;3.Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number): void;

  /**
   * Adds applications to the keep-alive list; once added, the application processes will be kept alive automatically.
   * You can also set whether to disable manual keep-alive cancellation. After the device is powered on or the
   * application is killed, the system will proactively restart these application processes.
   *
   * Applications can be added to the keep-alive list via this API and the
   * [addKeepAliveApps]{@link applicationManager.addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number)}
   * API. Settings from both APIs can take effect simultaneously. For a single user, the keep-alive list supports a
   * maximum of 5 applications. For example, if there are already 3 applications in the current list, a maximum of 2
   * more can be added for the user via this API.
   *
   * If applications are disallowed to run by calling
   * [addDisallowedRunningBundlesSync]{@link applicationManager.addDisallowedRunningBundlesSync}, they cannot be kept
   * alive. Otherwise, error code 9200010 will be reported.
   *
   * To use similar functions on phones or tablets, call
   * [addUserNonStopApps]{@link applicationManager.addUserNonStopApps} or
   * [addFreezeExemptedApps]{@link applicationManager.addFreezeExemptedApps}. For details, see the relevant documents.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } bundleNames - Array of application bundle names, which specifies the applications to be
   *     kept alive. A maximum of 5 applications are supported.<br>Applications must be installed under user 1 (a user
   *     who supports single-instance running of third-party applications) and have integrated
   *     [background services](docroot://application-models/app-service-extension-ability.md#implementing-a-background-service)
   *     <!--RP3--><!--RP3End-->. Otherwise, the error code 9201005 will be reported.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.
   * @param { boolean } disallowModify - Whether to restrict users from manually canceling the keep-alive status. The
   *     value **true** indicates that users are not allowed to manually cancel the keep-alive status, and the value
   *     **false** indicates the opposite.<!--RP2--><!--RP2End-->
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9201005 - Add keep alive applications failed.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number, disallowModify: boolean): void;

  /**
   * Checks whether the application is forbidden to cancel the keep-alive status.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.
   * @param { string } bundleName - Bundle name.
   * @returns { boolean } Whether to restrict users from manually canceling the keep-alive status. The value **true**
   *     indicates that users are not allowed to manually cancel the keep-alive status, and the value **false**
   *     indicates the opposite.<!--RP2--><!--RP2End-->
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isModifyKeepAliveAppsDisallowed(admin: Want, accountId: number, bundleName: string): boolean;

  /**
   * Removes a specified application from the keep-alive list.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } bundleNames - Application bundle name array, which specifies the applications to be kept
   *     alive. A maximum of five applications are supported.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;3.Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function removeKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number): void;

  /**
   * Obtains the bundle name of the keep-alive application.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.
   * @returns { Array<string> } Bundle name of the application kept alive for the specified user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;3.Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function getKeepAliveApps(admin: Want, accountId: number): Array<string>;

  /**
   * Sets applications allowed to run in kiosk mode.
   *
   * Kiosk mode is a system-level runtime mode that restricts a device to a single application or a set of applications.
   * It controls the lock screen, status bar, gestures, and key features to prevent users from launching other
   * applications or performing other operations on the device.
   *
   * @permission ohos.permission.ENTERPRISE_SET_KIOSK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIdentifiers - Array of
   *     [unique identifiers]{@link ./bundleManager/BundleInfo:SignatureInfo} of an application. You can call the
   *     [bundleManager.getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId?: int)}
   *     API to obtain the **bundleInfo.signatureInfo.appIdentifier**. In case of repeated configuration, the newly
   *     configured array will overwrite the old one, with a maximum limit of 200 entries.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setAllowedKioskApps(admin: Want, appIdentifiers: Array<string>): void;

  /**
   * Obtains the applications allowed to run in kiosk mode.
   *
   * @permission ohos.permission.ENTERPRISE_SET_KIOSK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<string> } List of [unique identifiers]{@link ./bundleManager/BundleInfo:SignatureInfo} of an
   *     application that can run in kiosk mode.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getAllowedKioskApps(admin: Want): Array<string>;

  /**
   * Checks whether an application is allowed to run in kiosk mode.
   *
   * @param { string } appIdentifier - [Unique identifiers]{@link ./bundleManager/BundleInfo:SignatureInfo} of an
   *     application. You can call the
   *     [bundleManager.getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId?: int)}
   *     API to obtain the **bundleInfo.signatureInfo.appIdentifier**.
   * @returns { boolean } The value **true** means the application can run in kiosk mode; the value **false** means the
   *     opposite.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isAppKioskAllowed(appIdentifier: string): boolean;

  /**
   * Sets the features of kiosk mode. This API is used to control whether the notification center and control panel can
   * be accessed [in kiosk mode]{@link @ohos.app.ability.kioskManager:kioskManager.enterKioskMode}.
   *
   * Since API version 24, you can set whether to allow users to swipe up from the bottom to access the recent taskbar
   * and swipe left or right to display the side dock.
   *
   * In non-kiosk mode, this API can be called normally but does not take effect. The settings will take effect after
   * kiosk mode is enabled.
   *
   * @permission ohos.permission.ENTERPRISE_SET_KIOSK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<KioskFeature> } features - Feature set of the Kiosk mode. (Since API version 24, swiping up from the
   *     bottom to access the recent taskbar and swiping left or right to display the side dock are supported.)<br> If
   *     an empty array is passed, the system will clear all previously delivered features and restore the kiosk mode to
   *     its default state. To be specific, abilities such as the notification center, control panel, recent task bar,
   *     and side dock are disabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setKioskFeatures(admin: Want, features: Array<KioskFeature>): void;

  /**
   * Clears all application data.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Bundle name of the application whose data needs to be cleared.
   * @param { number } appIndex - Index of the application clone. The value is an integer greater than or equal to 0.<br
   *     > You can call [getAppCloneIdentity]{@link @ohos.bundle.bundleManager:bundleManager.getAppCloneIdentity} of @
   *     ohos.bundle.bundleManager to obtain the index.
   * @param { number } accountId - Account ID. The value is an integer greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function clearUpApplicationData(admin: Want, bundleName: string, appIndex: number, accountId: number): void;

  /**
   * Adds applications to the non-stoppable application list for a specified user. This policy only applies to installed
   * applications. If the parameter list contains uninstalled applications, error code 9200012 will be returned. If an
   * application in the list is uninstalled after the policy is set, the uninstalled application will be removed from
   * the list. Adding an application that already exists in the list will return success, but the application will not
   * be added repeatedly to the policy list.
   *
   * On phones and tablets, non-stoppable applications cannot be closed by swiping up in the task center. After a user
   * taps the application name in **Settings** > **Apps & services** to go to the details page, the forcible stop button
   * is unavailable, and the disable button does not take effect.
   *
   * On PCs/2-in-1 devices, after a user taps the application name in **Settings** > **Apps & services** to go to the
   * details page, the forcible stop button is unavailable, and the disable button does not take effect.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<common.ApplicationInstance> } applicationInstances - Array of non-stoppable applications. A maximum
   *     of 10 applications can be added to the non-stoppable application list. This limit is not divided among users.
   *     Specifically, the total number of such applications added by all users cannot exceed 10. For example, if there
   *     are already 3 applications in the current list, a maximum of 7 more can be added for a specified user via this
   *     API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function addUserNonStopApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * Removes the non-stoppable application list for a specified user. If the parameter list includes uninstalled
   * applications, the removal will still succeed. Installed applications will be removed from the list, while
   * uninstalled ones will not impact the removal process.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<common.ApplicationInstance> } applicationInstances - Array of non-stoppable applications.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function removeUserNonStopApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * Obtains the non-stoppable application list of all users on the current device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<common.ApplicationInstance> } Array of non-stoppable applications.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function getUserNonStopApps(admin: Want): Array<common.ApplicationInstance>;

  /**
   * Adds applications to the background freeze-exempt application list for a specified user. This policy applies only
   * to installed applications and becomes invalid after the device is restarted. If the parameter list contains
   * uninstalled applications, error code 9200012 will be returned. If an application in the list is uninstalled after
   * the policy is set, the uninstalled application will be removed from the list. Adding an application that already
   * exists in the list will return success, but the application will not be added repeatedly to the policy list.
   *
   * Freezing operations include suspending the target application, and managing software resource agents, hardware
   * resource agents, and high-power consumption.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<common.ApplicationInstance> } applicationInstances - Array of the background freeze-exempt
   *     application list. A maximum of 10 applications can be added to the list. This limit is not divided among users.
   *     Specifically, the total number of such applications added by all users cannot exceed 10. For example, if there
   *     are already 3 applications in the current list, a maximum of 7 more can be added for a specified user via this
   *     API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function addFreezeExemptedApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * Removes the background freeze-exempt application list for a specified user. If the parameter list includes
   * uninstalled applications, the removal will still succeed. Installed applications will be removed from the list,
   * while uninstalled ones will not impact the removal process.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<common.ApplicationInstance> } applicationInstances - Array of the background freeze-exempt
   *     application list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function removeFreezeExemptedApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * Obtains the background freeze-exempt application list of all users on the current device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<common.ApplicationInstance> } Array of the background freeze-exempt application list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function getFreezeExemptedApps(admin: Want): Array<common.ApplicationInstance>;

  /**
   * Sets whether to disable the Ability component of a specified application (system application or third-party
   * application). Currently, only the UIAbility type is supported. After the UIAbility type is disabled, the UI of the
   * Ability component cannot be started.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - App bundle name.
   * @param { number } accountId - Account ID. The value is an integer greater than or equal to 0.
   *     <br> You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   *     of @ohos.account.osAccount to obtain the ID.
   * @param { string } abilityName - Name of the ability to be disabled or enabled. Currently, only UIAbility is
   *     supported.
   * @param { boolean } isDisabled - Whether to disable the ability. **true**: Disable the ability. **false**: Enable
   *     the ability.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function setAbilityDisabled(admin: Want, bundleName: string, accountId: number, abilityName: string, isDisabled: boolean): void;

  /**
   * Checks whether the Ability component of a specified application (system application or third-party application) is
   * disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - App bundle name.
   * @param { number } accountId - Account ID. The value is an integer greater than or equal to 0.
   *     <br> You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   *     of @ohos.account.osAccount to obtain the ID.
   * @param { string } abilityName - Name of the ability to be disabled or enabled. Currently, only UIAbility is
   *     supported.
   * @returns { boolean } Whether the ability is disabled. **true**: The ability is disabled. **false**: The ability is
   *     not disabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function isAbilityDisabled(admin: Want, bundleName: string, accountId: number, abilityName: string): boolean;

  /**
   * Adds an application to the bottom shortcut bar of a PC/2-in-1 device based on the location index. Then users can
   * tap the application icon in the shortcut bar to directly launch the application. The application icon is the
   * default icon displayed on the home screen.
   *
   * > **NOTE**
   * >
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Bundle name of the application.
   * @param { string } abilityName - Ability name of the application. Only the application entry ability is supported.
   * @param { number } [index] - Location index of the application in the shortcut bar.
   *     <br>The value must be an integer within [0,99]. Default value: 99.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200015 - The ability does not exist.
   * @throws { BusinessError } 9201013 - The number of applications in the Dock has reached the maximum.
   * @throws { BusinessError } 9201014 - The application is already in the Dock.
   * @throws { BusinessError } 9201015 - The application is not installed.
   * @throws { BusinessError } 9201018 - The application is inoperable.
   * @throws { BusinessError } 9201019 - The location is inoperable.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function addDockApp(admin: Want, bundleName: string, abilityName: string, index?: number): void;

  /**
   * Removes an application from the shortcut bar.
   *
   * > **NOTE**
   * >
   * > The following applications cannot be removed from the shortcut bar using this API: Application Center, Task
   * > Center, Files, and Recycle Bin. Otherwise, error code 9201018 will be reported.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Bundle name of the application.
   * @param { string } abilityName - Ability name of the application.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201016 - The application has not been added to the Dock.
   * @throws { BusinessError } 9201018 - The application is inoperable.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function removeDockApp(admin: Want, bundleName: string, abilityName: string): void;

  /**
   * Obtains the list of applications in the shortcut bar currently.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<DockInfo> } Array of application information in the shortcut bar.
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
  function getDockApps(admin: Want): Array<DockInfo>;

  /**
   * Adds the applications that are allowed to distribute ability connection.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { Array<string> } appIdentifiers - appIdentifiers indicates the list of application appIdentifiers.
   * @param { ServiceType } serviceType - serviceType indicates the type of distribute ability.
   * @param { number } accountId - accountId indicates the ID of OS account.
   *     <br>The value must be an integer greater than or equal to 0.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201043 - Prerequisites for the API call have not been satisfied. For example,
   *     distributed outgoing transmission is not disallowed before adding the distributed bidirectional collaboration
   *     trustlist.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function addAllowedDistributeAbilityConnBundles(admin: Want, appIdentifiers: Array<string>, serviceType: ServiceType, accountId: number): void;

  /**
   * Removes the applications that are allowed to distribute ability connection.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { Array<string> } appIdentifiers - appIdentifiers indicates the list of application appIdentifiers.
   * @param { ServiceType } serviceType - serviceType indicates the type of distribute ability.
   * @param { number } accountId - accountId indicates the ID of OS account.
   *     <br>The value must be an integer greater than or equal to 0.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeAllowedDistributeAbilityConnBundles(admin: Want, appIdentifiers: Array<string>, serviceType: ServiceType, accountId: number): void;

  /**
   * Gets the applications that are allowed to distribute ability connection.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want | null } admin - admin indicates the enterprise admin extension ability information.
   * @param { ServiceType } serviceType - serviceType indicates the type of distribute ability.
   * @param { number } accountId - accountId indicates the ID of OS account.
   *     <br>The value must be an integer greater than or equal to 0.
   * @returns { Array<string> } returns the list of application appIdentifiers.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getAllowedDistributeAbilityConnBundles(admin: Want | null, serviceType: ServiceType, accountId: number): Array<string>;

  /**
   * Adds applications that are allowed to send notifications.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { Array<string> } bundleNames - bundleNames indicates the list of bundle names of the applications.
   * @param { number } accountId - accountId indicates the ID of OS account.
   *     The value must be an integer greater than or equal to 0.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function addAllowedNotificationBundles(admin: Want, bundleNames: Array<string>, accountId: number): void;

  /**
   * Removes applications that are allowed to send notifications.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { Array<string> } bundleNames - bundleNames indicates the bundle name list of the applications.
   * @param { number } accountId - accountId indicates the ID of OS account.
   *     The value must be an integer greater than or equal to 0.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeAllowedNotificationBundles(admin: Want, bundleNames: Array<string>, accountId: number): void;

  /**
   * Gets applications that are allowed to send notifications.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want | null } admin - admin indicates the enterprise admin extension ability information.
   * @param { number } accountId - accountId indicates the ID of OS account.
   *     The value must be an integer greater than or equal to 0.
   * @returns { Array<string> } returns the list of bundle names of the applications.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getAllowedNotificationBundles(admin: Want | null, accountId: number): Array<string>;

  /**
   * Adds applications that hide launcher icons.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { Array<string> } bundleNames - bundleNames indicates the bundle name list of the applications.
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
  function addHideLauncherIcon(admin: Want, bundleNames: Array<string>): void;

  /**
   * Removes applications that hide launcher icons.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { Array<string> } bundleNames - bundleNames indicates the bundle name list of the applications.
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
  function removeHideLauncherIcon(admin: Want, bundleNames: Array<string>): void;

  /**
   * Gets applications that hide launcher icons.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want | null } admin - admin indicates the enterprise admin extension ability information.
   * @returns { Array<string> } the bundle name list of the applications.
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
  function getHideLauncherIcon(admin: Want | null): Array<string>;

  /**
   * Queries usage statistics of application traffic.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { string } bundleName - bundleName indicates the bundle name of application to be queried.
   * @param { number } appIndex - appIndex indicates the index of the bundle.
   *     <br>The value must be an integer greater than or equal to 0.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   *     <br>The value must be an integer greater than or equal to 0.
   *     <br>You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   *     of @ohos.account.osAccount to obtain the ID.
   * @param { statistics.NetworkInfo } networkInfo - networkInfo indicates the network information.
   * @returns { Promise<statistics.NetStatsInfo> } returns the detailed network statistics information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function queryTrafficStats(
    admin: Want,
    bundleName: string,
    appIndex: number,
    accountId: number,
    networkInfo: statistics.NetworkInfo
  ): Promise<statistics.NetStatsInfo>;

  /**
   * Queries bundle statistics information of applications.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { number } startTime - startTime indicates the start time of the query period.
   *     <br>Unit: milliseconds, The value must be an integer greater than or equal to 0.
   * @param { number } endTime - endTime indicates the end time of the query period.
   *     <br>Unit: milliseconds, The value must be an integer greater than or equal to 0.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   *     <br>The value must be an integer greater than or equal to 0.
   * @returns { Array<BundleStatsInfo> } returns the bundle statistics information of the applications.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function queryBundleStatsInfos(admin: Want, startTime: number, endTime: number, accountId: number): Array<BundleStatsInfo>;

  /**
   * Gets the window states of the application.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { string } bundleName - bundleName indicates the bundle name of the application.
   * @param { number } appIndex - appIndex indicates the index of bundle.
   *     <br>The value must be an integer greater than or equal to 0.
   * @returns { Array<WindowStateInfo> } Returns the window states information of application.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getApplicationWindowStates(admin: Want, bundleName: string, appIndex: number): Array<WindowStateInfo>;
}

export default applicationManager;