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
import type osAccount from './@ohos.account.osAccount';

/**
 * 本模块提供设备账号管理能力，包括禁止创建本地账号等。
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
declare namespace accountManager {
  /**
   * 域账号策略。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  interface DomainAccountPolicy {
    /**
     * 表示域账号认证Token的有效期（单位：s），取值范围是[-1,2147483647]。有效期起始时间为最后一次域账号的认证时间点，如登录、锁屏后解锁等。
     *
     * 默认值为-1，表示Token永久有效。取值为0，表示Token立即失效。Token过期/失效后，用户进入系统时必须进行域账号认证，验证域账号和密码。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    authenticationValidityPeriod?: number;

    /**
     * 表示域账号密码有效期（单位：s），取值范围是[-1,2147483647]，有效期起始时间为设备侧最后一次修改密码的时间点。
     *
     * 默认值为-1，表示域账号密码永久有效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    passwordValidityPeriod?: number;

    /**
     * 表示域账号密码过期前提示时间（单位：s），取值范围是[0,2147483647]。
     *
     * 默认值为0，表示域账号密码过期不提示。
     *
     * **说明**：passwordExpirationNotification需与passwordValidityPeriod配合使用，当系统时间大于或等于（设备侧最后一次修改域账号密码时间 +
     * passwordValidityPeriod - passwordExpirationNotification）时，会发页面通知提示密码即将过期。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    passwordExpirationNotification?: number;
  }

  /**
   * 禁止设备创建本地账号。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disallow - 是否禁止创建本地账号，true表示禁止创建，false表示允许创建。
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
   * @useinstead accountManager.disallowOsAccountAddition
   */
  function disallowAddLocalAccount(admin: Want, disallow: boolean, callback: AsyncCallback<void>): void;

  /**
   * 禁止设备创建本地账号。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disallow - 是否禁止创建本地账号，true表示禁止创建，false表示允许创建。
   * @returns { Promise<void> } 无返回结果的Promise对象。当禁止创建本地账号失败时，抛出错误对象。
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
   * @useinstead accountManager.disallowOsAccountAddition
   */
  function disallowAddLocalAccount(admin: Want, disallow: boolean): Promise<void>;

  /**
   * 禁止用户添加账号。
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } userId - 用户ID，指定具体用户，取值范围：大于等于0。
   * @param { boolean } disallow - 是否禁止用户添加账号，true表示禁止添加，false表示允许添加。
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
   * @useinstead accountManager.disallowOsAccountAddition
   */
  function disallowAddOsAccountByUser(admin: Want, userId: number, disallow: boolean): void;

  /**
   * 查询是否禁止某用户添加账号。
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } userId - 用户ID，指定具体用户，取值范围：大于等于0。
   * @returns { boolean } 返回true表示该用户禁止添加账号。<br/>返回false表示该用户允许添加账号。
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
   * @useinstead accountManager.isOsAccountAdditionDisallowed
   */
  function isAddOsAccountByUserDisallowed(admin: Want, userId: number): boolean;

  /**
   * 后台添加账号。
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } name - 用户ID，指定具体用户，取值范围：大于等于0。
   * @param { osAccount.OsAccountType } type - 要添加的账号的类型。<br/>取值范围：ADMIN、NORMAL、GUEST。<br/>· ADMIN：管理员账号。<br/>· NORMAL：普
   *     通账号。<br/>· GUEST：访客账号。
   * @returns { osAccount.OsAccountInfo } Information about the account added.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201003 - Failed to add an OS account.
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
   * @useinstead accountManager.addOsAccountAsync
   */
  function addOsAccount(admin: Want, name: string, type: osAccount.OsAccountType): osAccount.OsAccountInfo;

  /**
   * 禁止用户添加账号。
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disallow - 是否禁止创建本地账号，true表示禁止创建，false表示允许创建。
   * @param { number } [accountId] - 用户ID，指定具体用户。当不传入此参数时，表示禁止所有用户添加账号；当传入此参数时，表示禁止指定用户添加账号。取值范围：大于等于0。<br/>accountId可以通
   *     过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     等接口来获取。
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
  function disallowOsAccountAddition(admin: Want, disallow: boolean, accountId?: number): void;

  /**
   * 查询是否禁止用户添加账号。
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } [accountId] - 用户ID，指定具体用户。当不传入此参数时，表示查询所有用户是否禁止添加账号；当传入此参数时，表示查询指定用户是否禁止添加账号。取值范围：大于等于0。<br/>
   *     accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     等接口来获取。
   * @returns { boolean } 返回true表示禁止添加账号。<br/>返回false表示允许添加账号。
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
  function isOsAccountAdditionDisallowed(admin: Want, accountId?: number): boolean;

  /**
   * 后台添加账号。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 该接口比较耗时，当调用此接口后，后续如果在应用主线程调用其他同步接口时需要等待该接口异步返回。
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } name - 账号名，指要添加的账号的名称。无法创建同名、名称为空的账号，创建同名账号时会报错误码9201003，创建名称为空的账号时会报错误码401。
   * @param { osAccount.OsAccountType } type - 要添加的账号的类型。<br/>取值范围：ADMIN、NORMAL、GUEST。<br/>· ADMIN：管理员账号。<br/>· NORMAL：普
   *     通账号。<br/>· GUEST：访客账号。
   * @returns { Promise<osAccount.OsAccountInfo> } Promise used to return the added account information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201003 - Failed to add an OS account.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addOsAccountAsync(admin: Want, name: string, type: osAccount.OsAccountType): Promise<osAccount.OsAccountInfo>;

  /**
   * 设置域账号策略。
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { osAccount.DomainAccountInfo } domainAccountInfo - 域账号信息。<br />若传入的domainAccountInfo内部属性均为空，则会设置为全局域账号策略。全局
   *     策略对所有的域账号生效。<br />若传入的domainAccountInfo内部属性不为空，则为指定域账号设置策略。<br />指定域账号策略的优先级高于全局策略，若指定域账号已有域账号策略，则全局策略对其不生效。<br
   *     />**说明**：若为指定域账号设置策略，DomainAccountInfo的serverConfigId字段必填。
   * @param { DomainAccountPolicy } policy - 域账号策略。<br />**说明**：设置域账号策略后须在设备侧修改域账号密码，若未修改密码，则DomainAccountPolicy中的
   *     passwordValidityPeriod、passwordExpirationNotification配置不生效。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function setDomainAccountPolicy(admin: Want, domainAccountInfo: osAccount.DomainAccountInfo, policy: DomainAccountPolicy): void;

  /**
   * 获取域账号策略。
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { osAccount.DomainAccountInfo } domainAccountInfo - 域账号信息。<br />若传入的domainAccountInfo内部属性均为空，则查询全局域账号策略。<br
   *     />若传入的domainAccountInfo内部属性不为空，则查询指定域账号策略。<br />**说明**：若查询指定域账号策略，DomainAccountInfo的serverConfigId字段必填。
   * @returns { DomainAccountPolicy } 域账号策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function getDomainAccountPolicy(admin: Want, domainAccountInfo: osAccount.DomainAccountInfo): DomainAccountPolicy;

  /**
   * 添加普通系统账号
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCAL_ACCOUNTS
   * @param { Want } admin - 企业设备管理扩展组件。
   * @param { string } name - 系统账号名称。
   * @returns { Promise<osAccount.OsAccountInfo> } Returns the information about the added OS account.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201003 - Failed to add an OS account.
   * @throws { BusinessError } 9201040 - The number of accounts reaches the upper limit.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function createNormalOsAccount(admin: Want, name: string): Promise<osAccount.OsAccountInfo>;

  /**
   * 移除系统账号
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCAL_ACCOUNTS
   * @param { Want } admin - 企业设备管理扩展组件。
   * @param { number } accountId - 系统账号ID。
   *     <br>取值应为≥101的整数。
   * @returns { Promise<void> } promise回调
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 9201041 - Restricted account.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeOsAccount(admin: Want, accountId: number): Promise<void>;

  /**
   * 激活系统账号
   *
   * @permission ohos.permission.ENTERPRISE_INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } admin - 企业设备管理扩展组件。
   * @param { number } accountId - 系统账号ID。
   *     <br>取值应为≥100的整数。
   * @returns { Promise<void> } promise回调
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 9201041 - Restricted account.
   * @throws { BusinessError } 9201046 - The number of signed-in accounts reaches the upper limit.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function activateOsAccount(admin: Want, accountId: number): Promise<void>;
}

export default accountManager;