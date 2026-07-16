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
 * The **browser** module provides browser management, including setting, canceling, and obtaining browser policies.
 *
 * Browser policies are a collection of rules and settings that govern how a browser behaves, ensuring security,
 * compliance, performance optimization, and a consistent user experience.
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
declare namespace browser {
  /**
   * Sets the browsing policy for a specified browser. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BROWSER_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } appId - Application ID, which is used to specify the browser.
   * @param { string } policies - Policies to set. If this parameter is set to an empty string, the policies of the
   *     specified browser are canceled.
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
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead browser.setPolicySync
   */
  function setPolicies(admin: Want, appId: string, policies: string, callback: AsyncCallback<void>): void;

  /**
   * Sets the browsing policy for a specified browser. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BROWSER_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } appId - Application ID, which is used to specify the browser.
   * @param { string } policies - Policies to set. If this parameter is set to an empty string, the policies of the
   *     specified browser are canceled.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the browser policy fails
   *     to be set.
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
   * @deprecated since 26.0.0
   * @useinstead browser.setPolicySync
   */
  function setPolicies(admin: Want, appId: string, policies: string): Promise<void>;

  /**
   * Obtains the policy of the specified browser. This API uses an asynchronous callback to return the result.
   *
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } appId - Application ID, which is used to specify the browser.
   * @param { AsyncCallback<string> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead browser.getPoliciesSync
   */
  function getPolicies(admin: Want, appId: string, callback: AsyncCallback<string>): void;

  /**
   * Obtains the policy of the specified browser. This API uses a promise to return the result.
   *
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } appId - Application ID, which is used to specify the browser.
   * @returns { Promise<string> } Promise used to return the browser policies obtained.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead browser.getPoliciesSync
   */
  function getPolicies(admin: Want, appId: string): Promise<string>;

  /**
   * Sets the sub-policy for a specified browser.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BROWSER_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } appId - Application ID, which is used to specify the browser.
   * @param { string } policyName - Name of the browser policy to set. If the value is an empty string, the browser
   *     policy corresponding to the application ID is set.
   * @param { string } policyValue - Browser policy to set. If the value is an empty string, the policy corresponding to
   *     the policy name is removed.
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
  function setPolicySync(admin: Want, appId: string, policyName: string, policyValue: string): void;

  /**
   * Obtains the browser policy by app ID.
   *
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @param { string } appId - Application ID, which is used to specify the browser.
   * @returns { string } Browser policy obtained.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getPoliciesSync(admin: Want | null, appId: string): string;

  /**
   * Sets the browser policy. After the setting is successful, the system common event
   * [COMMON_EVENT_MANAGED_BROWSER_POLICY_CHANGED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_managed_browser_policy_changed)
   * is released.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BROWSER_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Application bundle name, which is used to specify the browser.
   * @param { string } policyName - Browser policy name.
   * @param { string } policyValue - Browser policy value. If the value is an empty string, the policy corresponding to
   *     the policy name is removed.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function setManagedBrowserPolicy(admin: Want, bundleName: string, policyName: string, policyValue: string): void;

  /**
   * Obtains the browser policy by application bundle name.
   *
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Application bundle name, which is used to specify the browser.
   * @returns { ArrayBuffer } Browser policy obtained.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function getManagedBrowserPolicy(admin: Want, bundleName: string): ArrayBuffer;

  /**
   * Obtains the policy version of a specified browser.
   *
   * @returns { string } Browser policy version.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function getSelfManagedBrowserPolicyVersion(): string;

  /**
   * Obtains the browser policy of the current device.
   *
   * @returns { ArrayBuffer } Browser policy obtained.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function getSelfManagedBrowserPolicy(): ArrayBuffer;
}

export default browser;