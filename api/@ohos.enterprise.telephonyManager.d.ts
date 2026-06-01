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
 * The **telephonyManager** module provides the telephony management capability.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 * >
 * > The global restriction policy is provided by **restrictions**. To disable telephony globally, see
 * > [@ohos.enterprise.restrictions (Restrictions)]{@link @ohos.enterprise.restrictions:restrictions}.
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 20
 */
declare namespace telephonyManager {

  /**
   * Disables the SIM card in a specified slot.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } slotId - Slot ID. Currently, only single-slot and dual-slot devices are supported. The value can
   *     be **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2.
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
   * Enables the SIM card in a specified slot. After it has been disabled with **setSimDisabled**, the card must be
   * turned back on manually in **Settings** > **Mobile network** > **SIM management**, as this **setSimEnabled** API
   * cannot re-enable it directly.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } slotId - Slot ID. Currently, only single-slot and dual-slot devices are supported. The value can
   *     be **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2.
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
   * Checks whether the SIM card in a specified slot is disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } slotId - Slot ID. Currently, only single-slot and dual-slot devices are supported. The value can
   *     be **0** or **1**, where **0** indicates slot 1 and **1** indicates slot 2.
   * @returns { boolean } A Boolean value indicating the SIM card status in the specified slot. The value **true** means
   *     the SIM card in the specified slot is disabled; the value **false** means the opposite.
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
   * Adds the trustlist or blocklist for outgoing calls. If no list is set, all numbers can make outgoing calls. Once a
   * list is added, only numbers on the list are allowed (or blocked) from making outgoing calls.
   *
   * A policy conflict is reported when this API is called in the following scenarios:
   *
   * 1. If the device's call capability has been disabled via the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * API, using this API to add an outgoing call trustlist or blocklist will return error code 203. To resolve the
   * conflict, disable the call restriction via the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * API.
   * 2. If an outgoing call blocklist has been set via this API, using this API again to add an outgoing call trustlist
   * will return error code 9200010. To resolve the conflict, remove the previously set blocklist via the [removeOutgoingCallPolicyNumbers]{@link telephonyManager.removeOutgoingCallPolicyNumbers}
   * API.
   * 3. If an outgoing call trustlist has been set via this API, using this API again to add an outgoing call blocklist
   * will return error code 9200010. To resolve the conflict, remove the previously set trustlist via the [removeOutgoingCallPolicyNumbers]{@link telephonyManager.removeOutgoingCallPolicyNumbers}
   * API.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @param { Array<string> } numbers - List of phone numbers. Currently, only full number matching is supported. The
   *     total length of the array must not exceed 1,000. For example, if there are already 100 numbers in the current
   *     trustlist array, this API supports adding up to 900 more numbers.
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
   * Removes the trustlist or blocklist for outgoing calls. If the list is not set, the removal fails.
   *
   * A policy conflict is reported when this API is called in the following scenario:
   *
   * If the device's call capability has been disabled via the
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * API, using this API to remove an outgoing call trustlist or blocklist will return error code 203. To resolve the
   * conflict, disable the call restriction via the
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * API.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @param { Array<string> } numbers - List of call numbers to remove. The total length of the array must not exceed 1,
   *     000.
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
   * Obtains the trustlist or blocklist for outgoing calls.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @returns { Array<string> } An array of numbers in the outgoing call blocklist or trustlist.
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
   * Adds the trustlist or blocklist for incoming calls. If no list is set, all numbers can make incoming calls. Once a
   * list is added, only numbers on the list are allowed (or blocked) from making incoming calls.
   *
   * A policy conflict is reported when this API is called in the following scenarios:
   *
   * 1. If the device's call capability has been disabled via the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * API, using this API to add an incoming call trustlist or blocklist will return error code 203.
   * To resolve the conflict, disable the call restriction via the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * API.
   * 2. If an incoming call blocklist has been set via this API, using this API again to add an incoming call trustlist
   * will return error code 9200010. To resolve the conflict, remove the previously set blocklist via the
   * [removeIncomingCallPolicyNumbers]{@link telephonyManager.removeIncomingCallPolicyNumbers} API.
   * 3. If an incoming call trustlist has been set via this API, using this API again to add an incoming call blocklist
   * will return error code 9200010. To resolve the conflict, remove the previously set trustlist via the
   * [removeIncomingCallPolicyNumbers]{@link telephonyManager.removeIncomingCallPolicyNumbers} API.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @param { Array<string> } numbers - List of phone numbers. Currently, only full number matching is supported. The
   *     total length of the array must not exceed 1,000. For example, if there are already 100 numbers in the current
   *     trustlist array, this API supports adding up to 900 more numbers.
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
   * Removes the trustlist or blocklist for incoming calls. If the list is not set, the removal fails.
   *
   * A policy conflict is reported when this API is called in the following scenario:
   *
   * 1. If the device's call capability has been disabled via the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * API, using this API to remove an incoming call trustlist or blocklist will return error code 203. To resolve the
   * conflict, disable the call restriction via the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * API.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @param { Array<string> } numbers - List of call numbers to remove. The total length of the array must not exceed 1,
   *     000.
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
   * Obtains the trustlist or blocklist for incoming calls.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { adminManager.Policy } policy - Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,
   *     and **TRUST_LIST** indicates a trustlist.
   * @returns { Array<string> } An array of numbers in the incoming call blocklist or trustlist.
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
   * Ends the current call. Only carrier calls are supported, excluding MeeTime calls.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
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
  function hangupCalling(admin: Want): void;

  /**
   * Activates the sim card.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { number } slotId - Indicates the card slot index number,
   *     ranging from {@code 0} to the maximum card slot index number supported by the device.
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
   * Deactivates the sim card.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { number } slotId - Indicates the card slot index number,
   *     ranging from {@code 0} to the maximum card slot index number supported by the device.
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
   * Sets the default data traffic card.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { number } slotId - Indicates the card slot index number.
   *     Ranges from {@code 0} to the maximum card slot index number supported by the device.
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
   * Gets the default data traffic card.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_TELEPHONY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @returns { number } Returns the slot ID of the SIM card.
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