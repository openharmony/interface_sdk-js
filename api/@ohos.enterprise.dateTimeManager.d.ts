/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * The **dateTimeManager** module provides APIs for system time management.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a
 * > [device administrator application](docroot://mdm/mdm-kit-term.md#mdm-application-device-administrator-application)
 * > that is
 * > [enabled]{@link @ohos.enterprise.adminManager:adminManager.enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, userId?: number)}
 * > .
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @since 9
 */
declare namespace dateTimeManager {
  /**
   * Sets the system time. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } time - Timestamp to set, in ms.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
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
   * @since 9
   * @deprecated since 26.0.0
   * @useinstead @ohos.enterprise.deviceSettings:deviceSettings.setValue
   */
  function setDateTime(admin: Want, time: number, callback: AsyncCallback<void>): void;

  /**
   * Sets the system time. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } time - Timestamp to set, in ms.
   * @returns { Promise<void> } Promise that returns no value.
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
   * @since 9
   * @deprecated since 26.0.0
   * @useinstead @ohos.enterprise.deviceSettings:deviceSettings.setValue
   */
  function setDateTime(admin: Want, time: number): Promise<void>;

  /**
   * Disallows the device to modify the system time. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disallow - Whether to disallow modification of the system time. The value **true** means to
   *     disallow modification of the system time, and **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
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
   * @useinstead @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function disallowModifyDateTime(admin: Want, disallow: boolean, callback: AsyncCallback<void>): void;

  /**
   * Disallows the device to modify the system time. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disallow - Whether to disallow modification of the system time. The value **true** means to
   *     disallow modification of the system time, and **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the device fails to modify
   *     the system time.
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
   * @useinstead @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function disallowModifyDateTime(admin: Want, disallow: boolean): Promise<void>;

  /**
   * Queries whether the system time of a device can be modified. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<boolean> } callback - Callback invoked to return the result. The value **true** means the
   *     system time modification is disallowed, and **false** means the opposite.
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
   * @useinstead @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isModifyDateTimeDisallowed(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * Queries whether the system time of a device can be modified. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the system time
   *     modification is disallowed, and **false** means the opposite.
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
   * @useinstead @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isModifyDateTimeDisallowed(admin: Want): Promise<boolean>;
}

export default dateTimeManager;