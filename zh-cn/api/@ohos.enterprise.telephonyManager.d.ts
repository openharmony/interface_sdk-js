/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import adminManager from './@ohos.enterprise.adminManager';

/**
 * 本模块提供通话管理能力。
 *
 * > **说明**：
 * >
 * > 本模块接口仅适用于Stage模型。
 * >
 * > 本模块接口仅对设备管理应用开放，调用接口前需激活该应用，详情请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 * >
 * > 全局通用限制类策略由restrictions提供，若要全局禁用通话，请参考
 * > [@ohos.enterprise.restrictions （限制类策略）]{@link @ohos.enterprise.restrictions:restrictions}。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 20
 */
declare namespace telephonyManager {

  /**
   * 禁用指定卡槽的SIM卡。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } slotId - 卡槽ID，目前仅支持单卡槽设备和双卡槽设备，取值范围为0或1，其中0表示卡槽1，1表示卡槽2。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setSimDisabled(admin: Want, slotId: number): void;

  /**
   * 解除指定卡槽的SIM卡禁用。使用setSimDisabled禁用SIM卡后，再用setSimEnabled启用SIM卡，需要到设置-移动网络-SIM卡管理界面手动打开SIM卡开关。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } slotId - 卡槽ID，目前仅支持单卡槽设备和双卡槽设备，取值范围为0或1，其中0表示卡槽1，1表示卡槽2。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setSimEnabled(admin: Want, slotId: number): void;

  /**
   * 查询指定卡槽是否禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } slotId - 卡槽ID，目前仅支持单卡槽设备和双卡槽设备，取值范围为0或1，其中0表示卡槽1，1表示卡槽2。
   * @returns { boolean } 指定卡槽的禁用状态。true表示已被禁用，false表示未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isSimDisabled(admin: Want, slotId: number): boolean;

  /**
   * 添加通话呼出的允许或禁用名单，如果不添加名单，任意号码都可以呼出，添加后只有名单内的号码允许或禁止呼出。
   *
   * 以下情况下，通过本接口添加通话呼出的允许或禁用名单，会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备通话能力，再通过本接口添加通话呼出的禁用或允许名单，返回203错误码。通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口解除禁用设备通话能力后，可解除冲突。
   * 2. 已经通过本接口设置了通话呼出的禁用名单，再通过本接口添加通话呼出允许名单，返回9200010错误码。通过[removeOutgoingCallPolicyNumbers]{@link telephonyManager.removeOutgoingCallPolicyNumbers}接口将之前设置的通话呼出禁用名单移除后，可解除冲突。
   * 3. 已经通过本接口设置了通话呼出的允许名单，再通过本接口添加通话呼出禁用名单，返回9200010错误码。通过[removeOutgoingCallPolicyNumbers]{@link telephonyManager.removeOutgoingCallPolicyNumbers}接口将之前设置的通话呼出允许名单移除后，可解除冲突。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { adminManager.Policy } policy - 允许或禁用名单策略。BLOCK_LIST为禁用名单，TRUST_LIST为允许名单。
   * @param { Array<string> } numbers - 通话号码列表，当前仅支持全号码匹配。数组总长度不能超过1000。例如，若当前允许名单数组中已有100个号码，则最多支持通过该接口再添加900个。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addOutgoingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * 移除通话呼出的允许或禁用名单，若在该名单尚未设置时进行移除，则会移除失败。
   *
   * 以下情况下，通过本接口移除通话呼出的允许或禁用名单，会报策略冲突：
   *
   * 已经通过
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * 接口禁用了设备通话能力，再通过本接口移除通话呼出的禁用或允许名单，返回203错误码。通过
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * 接口解除禁用设备通话能力后，可解除冲突。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { adminManager.Policy } policy - 允许或禁用名单策略。BLOCK_LIST为禁用名单，TRUST_LIST为允许名单。
   * @param { Array<string> } numbers - 待移除的通话号码数组。数组总长度不能超过1000。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeOutgoingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * 获取通话呼出的允许或禁用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { adminManager.Policy } policy - 允许或禁用名单策略。 BLOCK_LIST为禁用名单，TRUST_LIST为允许名单。
   * @returns { Array<string> } 通话呼出禁用或允许名单的号码数组。
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
  function getOutgoingCallPolicyNumbers(admin: Want, policy: adminManager.Policy): Array<string>;

  /**
   * 添加通话呼入的允许或禁用名单，如果不添加名单，则任意号码都可以呼入，添加后仅名单内的号码允许或禁止呼入。
   *
   * 以下情况下，通过本接口添加通话呼入的允许或禁用名单，会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备通话能力，再通过本接口添加通话呼入的禁用或允许名单，返回203错误码。通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口解除禁用设备通话能力后，可解除冲突。
   * 2. 已经通过本接口设置了通话呼入的禁用名单，再通过本接口添加通话呼入允许名单，返回9200010错误码。通过[removeIncomingCallPolicyNumbers]{@link telephonyManager.removeIncomingCallPolicyNumbers}接口将之前设置的通话呼入禁用名单移除后，可解除冲突。
   * 3. 已经通过本接口设置了通话呼入的允许名单，再通过本接口添加通话呼入禁用名单，返回9200010错误码。通过[removeIncomingCallPolicyNumbers]{@link telephonyManager.removeIncomingCallPolicyNumbers}接口将之前设置的通话呼入允许名单移除后，可解除冲突。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { adminManager.Policy } policy - 允许或禁用名单策略。BLOCK_LIST为禁用名单，TRUST_LIST为允许名单。
   * @param { Array<string> } numbers - 通话号码列表，当前仅支持全号码匹配。数组总长度不能超过1000。例如，若当前允许名单数组中已有100个号码，则最多支持通过该接口再添加900个。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addIncomingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * 移除通话呼入的允许或禁用名单，若在该名单尚未设置时进行移除，则会移除失败。
   *
   * 以下情况下，通过本接口移除通话呼入的允许或禁用名单，会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备通话能力，再通过本接口移除通话呼入的禁用或允许名单，返回203错误码。通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口解除禁用设备通话能力后，可解除冲突。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { adminManager.Policy } policy - 允许或禁用名单策略。BLOCK_LIST为禁用名单，TRUST_LIST为允许名单。
   * @param { Array<string> } numbers - 待移除的通话号码数组。数组总长度不能超过1000。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeIncomingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * 获取通话呼入的允许或禁用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { adminManager.Policy } policy - 允许或禁用名单策略。BLOCK_LIST为禁用名单，TRUST_LIST为允许名单。
   * @returns { Array<string> } 通话呼入禁用或允许名单的号码数组。
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
  function getIncomingCallPolicyNumbers(admin: Want, policy: adminManager.Policy): Array<string>;

  /**
   * 挂断当前通话。仅支持运营商通话，不包括畅联等。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
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
  function hangupCalling(admin: Want): void;

  /**
   * 启用指定卡槽的SIM卡。设备已经插入SIM卡但是并未启用的场景，可以通过该接口启用SIM卡，无需用户手动启用。SIM卡启用后可以使用该SIM卡进行通信。该接口需要插入SIM卡并关闭飞行模式才能成功调用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } slotId - 卡槽ID，目前仅支持单卡槽设备和双卡槽设备，取值范围为0或1，其中0表示卡槽1，1表示卡槽2。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201017 - SIM card activation or deactivation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function activeSim(admin: Want, slotId: number): void;

  /**
   * 停用指定卡槽SIM卡。停用该SIM卡，无法使用该卡槽的SIM卡接打电话，收发短信，上网。该接口需要插入SIM卡并关闭飞行模式才能成功调用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } slotId - 卡槽ID，目前仅支持单卡槽设备和双卡槽设备，取值范围为0或1，其中0表示卡槽1，1表示卡槽2。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201017 - SIM card activation or deactivation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function deactiveSim(admin: Want, slotId: number): void;

  /**
   * 添加发送短信的允许或禁用名单
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { adminManager.Policy } policy - 允许或禁用名单策略。
   * @param { Array<string> } numbers - 通话号码列表，当前仅支持全号码匹配。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function addSendSmsPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * 移除发送短信允许或禁用名单
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { adminManager.Policy } policy - 允许或禁用策略
   * @param { Array<string> } numbers - 通话号码列表，当前仅支持全号码匹配。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeSendSmsPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * 查询发送短信的允许或禁用名单
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want | null } admin - 企业设备管理扩展组件
   * @param { adminManager.Policy } policy - 允许或禁用名单策略。
   * @returns { Array<string> } phone numbers in the trust/block list.
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
  function getSendSmsPolicyNumbers(admin: Want | null, policy: adminManager.Policy): Array<string>;

  /**
   * 添加接收短信的允许或禁用名单
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { adminManager.Policy } policy - 允许或禁用名单策略。
   * @param { Array<string> } numbers - 接收短信号码列表，当前仅支持全号码匹配。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function addReceiveSmsPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * 移除接收短信的允许或禁用名单
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { adminManager.Policy } policy - 允许或禁用名单策略。
   * @param { Array<string> } numbers - 通话号码列表，当前仅支持全号码匹配。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeReceiveSmsPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void;

  /**
   * 查询接收短信允许或禁用名单
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want | null } admin - 企业设备管理扩展组件
   * @param { adminManager.Policy } policy - 允许或禁用名单策略。
   * @returns { Array<string> } phone numbers in the trust/block list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getReceiveSmsPolicyNumbers(admin: Want | null, policy: adminManager.Policy): Array<string>;

  /**
   * 设置指定卡槽的SIM卡为默认数据流量卡，设备将使用指定卡槽的SIM卡流量上网。该接口需要插入SIM卡并关闭飞行模式才能成功调用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } slotId - 卡槽ID，目前仅支持单卡槽设备和双卡槽设备，取值范围为0或1，其中0表示卡槽1，1表示卡槽2。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201020 - Failed to set the default data SIM card.
   *     The airplane mode is enabled or no SIM card is inserted.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setDefaultData(admin: Want, slotId: number): void;

  /**
   * 获取设备当前默认使用的数据流量卡卡槽ID。未插卡或者飞行模式下会获取上一次使用的数据流量卡卡槽ID、设备从未设置过默认数据流量卡场景下，该接口返回默认卡槽1，值为0。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { number } 卡槽ID，目前仅支持单卡槽设备和双卡槽设备，取值范围为0或1，其中0表示卡槽1，1表示卡槽2。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getDefaultData(admin: Want): number;
}

export default telephonyManager;