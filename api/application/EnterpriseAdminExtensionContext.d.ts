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
 * @kit MDMKit
 */

import ExtensionContext from './ExtensionContext';

import Want from '../@ohos.app.ability.Want';

/**
 * **EnterpriseAdminExtensionContext** is the context of
 * [EnterpriseAdminExtensionAbility]{@link ./../@ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility}
 * and inherits from [ExtensionContext]{@link ExtensionContext:ExtensionContext}.
 *
 * When an **EnterpriseAdminExtensionAbility** component is instantiated, the system automatically creates the
 * corresponding **EnterpriseAdminExtensionContext**. You can use this **EnterpriseAdminExtensionContext** to obtain the
 * sandbox path of the app and start other components. This context can only be used within the current
 * **EnterpriseAdminExtensionAbility** and cannot be transferred to other components.
 *
 * > **NOTE**
 * >
 * > - The APIs of this module can be used only in the stage model.
 * >
 * > - The APIs of this module can be called only by a device administrator application that is enabled. For details,
 * > see [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 23
 */
declare class EnterpriseAdminExtensionContext extends ExtensionContext {

  /**
   * Directly starts another component within the
   * [EnterpriseAdminExtensionAbility]{@link ./../@ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility}
   * component (without pop-up prompts on the page). Currently, [UIAbility]{@link ./../@ohos.app.ability.UIAbility} and
   * [AppServiceExtensionAbility]{@link ./../@ohos.app.ability.AppServiceExtensionAbility:AppServiceExtensionAbility}
   * are supported. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > - Only third-party app components are supported; system app components are not supported.
   * >
   * > - The component to start must be visible to external parties, that is, the **exported** field in the
   * > **module.json5** file must be set to **true**.
   * >
   * > - [Implicit Want launch](docroot://application-models/ability-terminology.md) is not supported.
   * >
   * > - If the **UIAbility** to start has permission protection, you need to apply for the corresponding permission.
   *
   * @permission ohos.permission.ENTERPRISE_START_ABILITIES
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of
   *     **EnterpriseAdminExtensionAbility** and the app bundle name.
   * @param { Want } want - Mandatory information for starting a component. The **Want** must contain the ability name
   *     of the component to be started and the bundle name of the app where the component is located.
   * @returns { Promise<void> } Promise that returns no value. If the component fails to be started, an error object is
   *     thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200014 - Failed to start the ability.
   * @throws { BusinessError } 9200015 - The ability does not exist.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  startAbilityByAdmin(admin: Want, want: Want): Promise<void>;
}

export default EnterpriseAdminExtensionContext;
