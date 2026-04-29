/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import { HapModuleInfo } from '../bundleManager/HapModuleInfo';
import { Configuration } from '../@ohos.app.ability.Configuration';
import Context from './Context';
import { ExtensionAbilityInfo } from '../bundleManager/ExtensionAbilityInfo';

/**
 * ExtensionContext是[ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}的上下文环境，继承自
 * [Context](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#context)。
 * ExtensionContext模块提供访问特定[ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}的资源的能力。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class ExtensionContext extends Context {
  /**
   * 所属Hap包的信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  currentHapModuleInfo: HapModuleInfo;

  /**
   * 所属Module的配置信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  config: Configuration;

  /**
   * 所属[ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}的信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  extensionAbilityInfo: ExtensionAbilityInfo;
}

export default ExtensionContext;