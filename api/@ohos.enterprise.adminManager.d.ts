/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
import common from '@ohos.app.ability.common';
import type Want from './@ohos.app.ability.Want';

/**
 * The **adminManager** module provides administrator permission management capabilities for enterprise MDM applications
 * , including enabling or disabling administrator permissions, subscribing to events, delegating applications, and
 * granting permissions.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be called only by a device administrator application. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace adminManager {
  /**
   * Defines the policy type for the trustlist or blocklist.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  export enum Policy {
    /**
     * Blocklist.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    BLOCK_LIST = 0,

    /**
     * Trustlist.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    TRUST_LIST = 1
  }

  /**
   * Represents the enterprise information of a device administrator application.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EnterpriseInfo {
    /**
     * Name of the enterprise.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Description of the enterprise.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    description: string;
  }

  /**
   * Enumerates the types of device administrator applications.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @since 15
   */
  export enum AdminType {
    /**
     * Common device administrator application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9
     */
    ADMIN_TYPE_NORMAL = 0x00,

    /**
     * Super device administrator application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9
     */
    ADMIN_TYPE_SUPER = 0x01,

    /**
     * BYOD device administrator application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 15
     */
    ADMIN_TYPE_BYOD = 0x02
  }

  /**
   * Enumerates the system management events that can be subscribed to.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @since 12
   */
  export enum ManagedEvent {
    /**
     * An application is installed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_BUNDLE_ADDED = 0,

    /**
     * An application is uninstalled.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_BUNDLE_REMOVED = 1,

    /**
     * An application is started.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_APP_START = 2,

    /**
     * An application is stopped.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_APP_STOP = 3,

    /**
     * The system is updated.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_SYSTEM_UPDATE = 4,

    /**
     * An account is created.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 18
     */
    MANAGED_EVENT_ACCOUNT_ADDED = 5,

    /**
     * An account is switched.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 18
     */
    MANAGED_EVENT_ACCOUNT_SWITCHED = 6,

    /**
     * An account is removed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 18
     */
    MANAGED_EVENT_ACCOUNT_REMOVED = 7,

    /**
     * The startup wizard is complete.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MANAGED_EVENT_STARTUP_GUIDE_COMPLETED = 8,

    /**
     * Device startup is complete.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MANAGED_EVENT_BOOT_COMPLETED = 9,

    /**
     * Application update events.
     * **Since**: 26.0.0
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MANAGED_EVENT_BUNDLE_UPDATED = 10,

    /**
     * Event indicating that enterprise device management policies changed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MANAGED_EVENT_POLICIES_CHANGED = 11
  }

  /**
   * Represents the running mode of a device administrator application.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 19
   */
  export enum RunningMode {
    /**
     * Default user running mode, indicating that the application runs under the default user (user after the first
     * device powered-on).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 19
     */
    DEFAULT = 0,

    /**
     * Multi-user running mode, indicating that the application runs under multiple users at the same time.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 19
     */
    MULTI_USER = 1
  }

  /**
   * Enables a device administrator application. The super device administrator application can be activated only by the
   * administrator. After the application is enabled, it cannot be uninstalled. The
   * [EnterpriseAdminExtensionAbility](docroot://mdm/mdm-kit-term.md#enterpriseadminextensionability) component of the
   * application will automatically start upon device startup and user switching. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { EnterpriseInfo } enterpriseInfo - Enterprise information of the device administrator application.
   * @param { AdminType } type - Type of the device administrator application to enable.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, callback: AsyncCallback<void>): void;

  /**
   * Enables a device administrator application for the specified user. The super device administrator application can
   * be activated only by the administrator. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { EnterpriseInfo } enterpriseInfo - Enterprise information of the device administrator application.
   * @param { AdminType } type - Type of the device administrator application to enable.
   * @param { number } userId - User ID, which must be greater than or equal to 0.<br>The default value is the user ID
   *     of the caller.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Enables a device administrator application for the current or specified user. The super device administrator
   * application can be activated only by the administrator. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { EnterpriseInfo } enterpriseInfo - Enterprise information of the device administrator application.
   * @param { AdminType } type - Type of the device administrator application to enable.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, userId?: number): Promise<void>;

  /**
   * Disables a common device administrator application for the current user. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableAdmin(admin: Want, callback: AsyncCallback<void>): void;

  /**
   * Disables a common device administrator application for the user specified by **userId**. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } userId - User ID, which must be greater than or equal to 0.<br>The default value is the user ID
   *     of the caller.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableAdmin(admin: Want, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Disables a device administrator application for the specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN [since 12 - 19]
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN or
   *     ohos.permission.START_PROVISIONING_MESSAGE [since 20 - 22]
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN or ohos.permission.START_PROVISIONING_MESSAGE
   *     or ohos.permission.ENTERPRISE_DEACTIVATE_DEVICE_ADMIN [since 23]
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. When deactivating the BYOD device
   *     administrator application, you can pass only the **EnterpriseAdminExtensionAbility** component of the current
   *     application.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function disableAdmin(admin: Want, userId?: number): Promise<void>;

  /**
   * Disables a super device administrator application based on **bundleName**. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { String } bundleName - Bundle name of the super device administrator application to disable.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableSuperAdmin(bundleName: String, callback: AsyncCallback<void>): void;

  /**
   * Disables a super device administrator application based on **bundleName**. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { String } bundleName - Bundle name of the super device administrator application to disable.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableSuperAdmin(bundleName: String): Promise<void>;

  /**
   * Checks whether a device administrator application of the current user is enabled. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<boolean> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null** and **data** is a Boolean value (**true** means that the device administrator application
   *     is enabled; and **false** means the opposite). If the operation fails, **err** is an error object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a device administrator application of the specified user is enabled. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } userId - User ID, which must be greater than or equal to 0.<br> The default value is the user ID
   *     of the caller.
   * @param { AsyncCallback<boolean> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null** and **data** is a Boolean value (**true** means that the device administrator application
   *     is enabled; and **false** means the opposite). If the operation fails, **err** is an error object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, userId: number, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a device administrator application of the current or specified user is enabled. This API uses a
   * promise to return the result.
   *
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the device administrator
   *     application is enabled; the value **false** means the opposite.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, userId?: number): Promise<boolean>;

  /**
   * Checks whether the current application is activated as a BYOD device administrator application based on the
   * **EnterpriseAdminExtensionAbility** component.
   *
   * @permission ohos.permission.START_PROVISIONING_MESSAGE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. Only the
   *     **EnterpriseAdminExtensionAbility** component of the current application can be passed.
   * @returns { boolean } The value **true** indicates the application is activated as a BYOD device administrator
   *     application, and the value **false** indicates the opposite.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isByodAdmin(admin: Want): boolean;

  /**
   * Obtains the enterprise information of the device administrator application. This API uses an asynchronous callback
   * to return the result.
   *
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<EnterpriseInfo> } callback - Callback invoked to return the result. If the operation is
   *     successful, **err** is **null** and **data** is the enterprise information of the device administrator
   *     application obtained. If the operation fails, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function getEnterpriseInfo(admin: Want, callback: AsyncCallback<EnterpriseInfo>): void;

  /**
   * Obtains the enterprise information of the device administrator application. This API uses a promise to return the
   * result.
   *
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<EnterpriseInfo> } Promise used to return the enterprise information of the device administrator
   *     application.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function getEnterpriseInfo(admin: Want): Promise<EnterpriseInfo>;

  /**
   * Sets the enterprise information of the device administrator application. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.SET_ENTERPRISE_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { EnterpriseInfo } enterpriseInfo - Enterprise information of the device administrator application.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setEnterpriseInfo(admin: Want, enterpriseInfo: EnterpriseInfo, callback: AsyncCallback<void>): void;

  /**
   * Sets the enterprise information of the device administrator application. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.SET_ENTERPRISE_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { EnterpriseInfo } enterpriseInfo - Enterprise information of the device administrator application.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setEnterpriseInfo(admin: Want, enterpriseInfo: EnterpriseInfo): Promise<void>;

  /**
   * Checks whether a super device administrator application is enabled based on **bundleName**. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { String } bundleName - Super device administrator application.
   * @param { AsyncCallback<boolean> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null** and **data** is a Boolean value (**true** means that the device administrator application
   *     is enabled; and **false** means the opposite). If the operation fails, **err** is an error object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isSuperAdmin(bundleName: String, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a super device administrator application is enabled based on **bundleName**. This API uses a promise
   * to return the result.
   *
   * @param { String } bundleName - Super device administrator application.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the super device
   *     administrator application is enabled; the value **false** means the opposite.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isSuperAdmin(bundleName: String): Promise<boolean>;

  /**
   * Subscribes to system management events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<ManagedEvent> } managedEvents - Array of events to subscribe to.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>, callback: AsyncCallback<void>): void;

  /**
   * Subscribes to system management events. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<ManagedEvent> } managedEvents - Array of events to subscribe to.
   * @returns { Promise<void> } Promise that returns no value. When a system event fails to be subscribed to, an error
   *     object is thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>): Promise<void>;

  /**
   * Unsubscribes from system management events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<ManagedEvent> } managedEvents - Array of events to unsubscribe from.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function unsubscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>, callback: AsyncCallback<void>): void;

  /**
   * Unsubscribes from system management events. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<ManagedEvent> } managedEvents - Array of events to unsubscribe from.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the unsubscription of
   *     system management events fails.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function unsubscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>): Promise<void>;

  /**
   * Authorizes the administrator permission to a specified application. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Bundle name of the application to be authorized with the administrator rights.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
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
  function authorizeAdmin(admin: Want, bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Authorizes the administrator permission to a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Bundle name of the application to be authorized with the administrator rights.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the permissions of a
   *     specified application administrator fail to be granted.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
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
  function authorizeAdmin(admin: Want, bundleName: string): Promise<void>;

  /**
   * Obtains the super device administrator application of this administrator. This API uses a promise to return the
   * result.
   *
   * @returns { Promise<Want> } Promise used to return the super device administrator application obtained. If no super
   *     device administrator application is activated on the device, **bundleName** and **abilityName** in **Want**
   *     returned are empty strings.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function getSuperAdmin(): Promise<Want>;

  /**
   * Subscribes to system management events.
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<ManagedEvent> } managedEvents - Array of events to subscribe to.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the
   *     device. [since 26.0.0]
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function subscribeManagedEventSync(admin: Want, managedEvents: Array<ManagedEvent>): void;

  /**
   * Unsubscribes from system management events.
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<ManagedEvent> } managedEvents - Array of events to unsubscribe from.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function unsubscribeManagedEventSync(admin: Want, managedEvents: Array<ManagedEvent>): void;

  /**
   * Replaces a specified application with a super device administrator application.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } oldAdmin - Old EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the old
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Want } newAdmin - New EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the new
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } isKeepPolicy - A Boolean value indicates whether to retain the policy of the old
   *     **EnterpriseAdminExtensionAbility**. The value **true** means that the policy is retained, and the value
   *     **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200011 - Failed to replace the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  function replaceSuperAdmin(oldAdmin: Want, newAdmin: Want, isKeepPolicy: boolean): void;

  /**
   * Delegates other applications to set device management policies. The applications must request the permissions
   * required.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Bundle name of the delegated application. The distribution type of the delegated
   *     application must be **enterprise_normal** or **enterprise_mdm**. You can call the
   *     [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
   *     API to query the [BundleInfo]{@link ./bundleManager/BundleInfo} of the application, where
   *     **BundleInfo.appInfo.appDistributionType** indicates the distribution type.
   * @param { Array<string> } policies -
   *     [Delegation Policy List](docroot://reference/apis-mdm-kit/js-apis-enterprise-adminManager.md#delegation-policy-list)
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function setDelegatedPolicies(admin: Want, bundleName: string, policies: Array<string>): void;

  /**
   * Delegates other applications to set device management policies. The applications must request the permissions
   * required.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { string } bundleName - Bundle name of the app to be delegated. The distribution type of the delegated app
   *     must be **enterprise_normal** or **enterprise_mdm**. You can call the
   *     [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
   *     API to query the app **BundleInfo**. **BundleInfo.appInfo.appDistributionType** indicates the app distribution
   *     type.
   * @param { number } accountId - User ID, which must be greater than or equal to 0. You can use
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     to obtain the user ID.
   * @param { Array<string> } policies -
   *     [Delegation policy list](docroot://reference/apis-mdm-kit/js-apis-enterprise-adminManager.md#delegation-policy-list)
   *     .
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  function setDelegatedPolicies(bundleName: string, accountId: number, policies: Array<string>): void;

  /**
   * Queries the list of policies that can be accessed by the delegated application.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Bundle name of the delegated application. The distribution type of the delegated
   *     application must be **enterprise_normal** or **enterprise_mdm**. You can call the
   *     [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
   *     API to query the [BundleInfo]{@link ./bundleManager/BundleInfo} of the application, where
   *     **BundleInfo.appInfo.appDistributionType** indicates the distribution type.
   * @returns { Array<string> } Delegation policy list.
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
  function getDelegatedPolicies(admin: Want, bundleName: string): Array<string>;

  /**
   * Queries the delegated applications that can access a delegation policy and output the list of delegated
   * applications.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } policy - Delegation policy.
   * @returns { Array<string> } List of delegated applications.
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
  function getDelegatedBundleNames(admin: Want, policy: string): Array<string>;

  /**
   * Enables the device administrator application to open a page for the BYOD administrator to perform activation.
   *
   * @permission ohos.permission.START_PROVISIONING_MESSAGE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AdminType } type - Type of the activated device administrator application. Only the **ADMIN_TYPE_BYOD**
   *     type is supported.
   * @param { common.Context } context - Context information of the administrator application.
   * @param { Record<string, string> } parameters - Custom parameters. The key value must contain **activateId** and may
   *     optionally include **customizedInfo** and **localDeactivationPolicy**.<br>- **activateId**: project activation
   *     ID.<br>- **customizedInfo**: enterprise-defined information.<br>- **localDeactivationPolicy**: local
   *     deactivation delay (unit: hour). This parameter is supported since API version 22<!--RP1--><!--RP1End-->.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function startAdminProvision(admin: Want, type: AdminType, context: common.Context, parameters: Record<string, string>): void;

  /**
   * Queries all device administrator applications of the current user. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<Want>> } Promise that contains all activated device administrator applications.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 15
   */
  function getAdmins(): Promise<Array<Want>>;

  /**
   * Sets the running mode of the device management application.
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { RunningMode } mode - Running mode. <br>The value **DEFAULT** means the application runs under the default
   *     user (user after the first device power-on). The value **MULTI_USER** means the application runs under multiple
   *     users at the same time.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 19
   */
  function setAdminRunningMode(admin: Want, mode: RunningMode): void;

  /**
   * Allows a [super device administrator application](docroot://mdm/mdm-kit-term.md#sda) to enable other
   * [device administrator applications](docroot://mdm/mdm-kit-term.md#da). This API uses a promise to return the
   * result. This API can be called only by super device administrator applications.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function enableDeviceAdmin(admin: Want): Promise<void>;

  /**
   * Allows a [super device administrator application](docroot://mdm/mdm-kit-term.md#sda) to disable other
   * [device administrator applications](docroot://mdm/mdm-kit-term.md#da). This API uses a promise to return the
   * result. This API can be called only by super device administrator applications.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function disableDeviceAdmin(admin: Want): Promise<void>;

  /**
   * Gets enterprise message tips.
   *
   * @returns { Promise<string> } returns the enterprise message tips.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getEnterpriseManagedTips(): Promise<string>;

  /**
   * Enables self as a device administrator.
   *
   * @permission ohos.permission.ENTERPRISE_ACTIVATE_DEVICE_ADMIN
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } credential - credential indicates the credential for activating self as an administrator.
   * @returns { Promise<void> } the promise returned by the enableSelfDeviceAdmin.
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200017 - The self-activation credential of the enterprise device administrator
   *     is invalid.
   * @throws { BusinessError } 9200018 - This device is not an enterprise device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function enableSelfDeviceAdmin(admin: Want, credential: string): Promise<void>;
}

export default adminManager;