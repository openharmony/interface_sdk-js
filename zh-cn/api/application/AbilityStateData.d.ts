/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/**
 * AbilityStateData是Ability状态信息的数据结构。使用
 * [on]{@link ./../@ohos.app.ability.appManager:appManager.on(type: 'applicationState', observer: ApplicationStateObserver)}
 * 注册生命周期变化监听后，可以通过[ApplicationStateObserver]{@link ApplicationStateObserver}的onAbilityStateChanged回调的入参获取该数据结构。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 * @since 23 static
 */
declare class AbilityStateData {
  /**
   * Ability所属的模块名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  moduleName: string;

  /**
   * 应用Bundle名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * Ability名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  abilityName: string;

  /**
   * 进程ID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  pid: int;

  /**
   * 所属应用程序的UID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * Ability状态。
   * 
   * - [Stage模型](docroot://application-models/ability-terminology.md#stage模型)：
   * [UIAbility]{@link ./../@ohos.app.ability.UIAbility}的状态参见
   * [UIAbility状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#uiability状态)；
   * [ExtensionAbility]{@link ./../@ohos.app.ability.ExtensionAbility:ExtensionAbility}的状态参见
   * [ExtensionAbility状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#extensionability状态)
   * ；[UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}的状态参见
   * [UIExtensionAbility状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#uiextensionability状态)
   * 。
   * - [FA模型](docroot://application-models/ability-terminology.md#fa模型)：参见
   * [Ability状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability状态)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  state: int;

  /**
   * [Ability类型](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability类型)：
   * [UIAbility]{@link ./../@ohos.app.ability.UIAbility}或
   * [ExtensionAbility]{@link ./../@ohos.app.ability.ExtensionAbility:ExtensionAbility}等。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  abilityType: int;

  /**
   * 判断Ability所属应用是否为原子化服务。
   * 
   * true: 是原子化服务。
   * 
   * false: 不是原子化服务。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  isAtomicService: boolean;

  /**
   * 应用包的[分身](docroot://quick-start/app-clone.md)索引标识。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  appCloneIndex?: int;

  /**
   * Ability创建时的拉起方Bundle名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 dynamic&static
   */
  callerBundleName?: string;
}

export default AbilityStateData;