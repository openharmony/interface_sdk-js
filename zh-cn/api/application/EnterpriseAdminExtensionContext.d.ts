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
 * EnterpriseAdminExtensionContext是
 * [EnterpriseAdminExtensionAbility]{@link ./../@ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility}
 * 的上下文环境，继承自[ExtensionContext]{@link ExtensionContext:ExtensionContext}。
 * 
 * 每个EnterpriseAdminExtensionAbility组件实例化时，系统都会自动创建对应的EnterpriseAdminExtensionContext。开发者可以通过
 * EnterpriseAdminExtensionContext获取应用的沙箱路径、启动其他的组件。该上下文环境只能在当前EnterpriseAdminExtensionAbility中使用，不能传递到其他组件中使用。
 * 
 * > **说明**：
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 23
 */
declare class EnterpriseAdminExtensionContext extends ExtensionContext {

  /**
   * 在
   * [EnterpriseAdminExtensionAbility]{@link ./../@ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility}
   * 组件中直接启动另外一个组件（页面没有弹窗提醒），目前支持[UIAbility]{@link ./../@ohos.app.ability.UIAbility}，
   * [AppServiceExtensionAbility]{@link ./../@ohos.app.ability.AppServiceExtensionAbility:AppServiceExtensionAbility}。使用
   * Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 仅支持启动三方应用组件，不支持系统应用组件。
   * >
   * > 被启动的组件需要对外可见，即module.json5中的exported字段需要为true。
   * >
   * > 不支持[隐式Want启动](docroot://application-models/ability-terminology.md#隐式want启动)。
   * >
   * > 如果被启动的UIAbility有权限保护，需要额外申请对应的权限。
   *
   * @permission ohos.permission.ENTERPRISE_START_ABILITIES
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Want } want - 启动组件的必要信息，Want中必须包含被启动组件的abilityName和所在应用的bundleName。
   * @returns { Promise<void> } 无返回结果的Promise对象。当启动组件失败时，会抛出错误对象。
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
