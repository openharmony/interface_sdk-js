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
 * 本模块提供浏览器管理能力，包括设置/取消浏览器策略、获取浏览器策略等。
 * 
 * 浏览器策略指通过配置或管理浏览器行为的一系列规则和设置，以确保安全性、合规性、性能优化和用户体验的一致性。
 * 
 * > **说明：**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace browser {
  /**
   * 为指定的浏览器设置浏览策略，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BROWSER_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } appId - 应用ID，用于指定浏览器。
   * @param { string } policies - 浏览器策略，当参数policies为空字符串时，表示取消指定浏览器的策略。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
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
   * 为指定的浏览器设置浏览策略，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BROWSER_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } appId - 应用ID，用于指定浏览器。
   * @param { string } policies - 浏览器策略，当参数policies为空字符串时，表示取消指定浏览器的策略。
   * @returns { Promise<void> } 无返回结果的Promise对象。当设置浏览器策略失败时，会抛出错误对象。
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
   * 获取指定浏览器的策略，使用callback异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } appId - 应用ID，用于指定浏览器。
   * @param { AsyncCallback<string> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead browser.getPolicySync
   */
  function getPolicies(admin: Want, appId: string, callback: AsyncCallback<string>): void;

  /**
   * 获取指定浏览器的策略，使用Promise异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } appId - 应用ID，用于指定浏览器。
   * @returns { Promise<string> } Promise对象，返回浏览器策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead browser.getPolicySync
   */
  function getPolicies(admin: Want, appId: string): Promise<string>;

  /**
   * 为指定的浏览器设置浏览器子策略。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BROWSER_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } appId - 应用appId，用于指定浏览器，表示应用的唯一标识，详情信息可参考
   *     [什么是appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { string } policyName - 浏览器子策略名，由接口调用方和指定浏览器约定。当此值为空字符串时，表示设置应用appId对应的浏览器策略。
   * @param { string } policyValue - 浏览器子策略值，由接口调用方和指定浏览器约定。当此值为空字符串时，表示取消浏览器策略名对应浏览器子策略。
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
   * 通过appid获取指定浏览器设置的策略。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } appId - 应用ID，用于指定浏览器。
   * @returns { string } 浏览器策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getPoliciesSync(admin: Want, appId: string): string;

  /**
   * 为指定的浏览器设置浏览器策略，成功后会发布系统公共事件
   * [COMMON_EVENT_MANAGED_BROWSER_POLICY_CHANGED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_managed_browser_policy_changed)
   * 。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BROWSER_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 应用包名，用于指定浏览器。
   * @param { string } policyName - 浏览器策略名。
   * @param { string } policyValue - 浏览器策略值。当此值为空字符串时，表示取消浏览器策略名对应浏览器子策略。
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
   * 通过应用包名获取指定浏览器的浏览器策略。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 应用包名，用于指定浏览器。
   * @returns { ArrayBuffer } 浏览器策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function getManagedBrowserPolicy(admin: Want, bundleName: string): ArrayBuffer;

  /**
   * 获取指定浏览器的浏览器策略版本。
   *
   * @returns { string } 浏览器策略版本。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function getSelfManagedBrowserPolicyVersion(): string;

  /**
   * 获取当前设备浏览器策略。
   *
   * @returns { ArrayBuffer } 浏览器策略。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function getSelfManagedBrowserPolicy(): ArrayBuffer;
}

export default browser;