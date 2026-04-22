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
 * ExtensionContext provides the context environment for an 
 * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}. It inherits from 
 * [Context](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#context).
 * This module provides APIs for accessing resources of a specific 
 * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class ExtensionContext extends Context {
  /**
   * Indicates configuration information about an module.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  currentHapModuleInfo: HapModuleInfo;

  /**
   * Indicates configuration information.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  config: Configuration;

  /**
   * Extension information.
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