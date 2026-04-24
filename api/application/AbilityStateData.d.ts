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
 * The AbilityStateData module defines a struct for ability state information. Once a lifecycle change listener is 
 * registered using 
 * [on]{@link ./../@ohos.app.ability.appManager:appManager.on(type: 'applicationState', observer: ApplicationStateObserver)}
 * , you can obtain an instance of this struct from the input parameter of the **onAbilityStateChanged** callback of 
 * [ApplicationStateObserver]{@link ApplicationStateObserver}.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 * @since 23 static
 */
declare class AbilityStateData {
  /**
   * Module name to which the ability belongs.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  moduleName: string;

  /**
   * Bundle name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * Ability name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  abilityName: string;

  /**
   * Process ID.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  pid: int;

  /**
   * UID of the application.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * Ability state.
   * 
   * - [Stage model](docroot://application-models/ability-terminology.md#stage-model): For the 
   * [UIAbility]{@link ./../@ohos.app.ability.UIAbility}, see 
   * [UIAbility States](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#uiability-states)
   * . For the [ExtensionAbility]{@link ./../@ohos.app.ability.ExtensionAbility:ExtensionAbility}, see 
   * [ExtensionAbility States](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#extensionability-states)
   * . For the [UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}, see 
   * [UIExtensionAbility States](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#uiextensionability-states)
   * .
   * - [FA model](docroot://application-models/ability-terminology.md#fa-model): For the ability, see 
   * [Ability States](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability-states)
   * .
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  state: int;

  /**
   * [Ability type](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability-types), 
   * which can be [UIAbility]{@link ./../@ohos.app.ability.UIAbility} or 
   * [ExtensionAbility]{@link ./../@ohos.app.ability.ExtensionAbility:ExtensionAbility}.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  abilityType: int;

  /**
   * Whether the ability belongs to an atomic service.
   * 
   * **true**: The ability belongs to an atomic service.
   * 
   * **false**: The ability does not belong to an atomic service.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  isAtomicService: boolean;

  /**
   * Index of an [application clone](docroot://quick-start/app-clone.md).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  appCloneIndex?: int;

  /**
   * Bundle name of the application that triggers the creation of the ability.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 dynamic&static
   */
  callerBundleName?: string;
}

export default AbilityStateData;