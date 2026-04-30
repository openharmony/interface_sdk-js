'use static'
/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import AbilityConstant from './@ohos.app.ability.AbilityConstant';
import { Configuration } from './@ohos.app.ability.Configuration';

/**
 * The EnvironmentCallback module provides capabilities to listen for system environment changes.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 23 static
 */
declare interface EnvironmentCallback {
  /**
   * Called when the system configuration changes, after
   * [a listener has been registered for such events]{@link ./application/ApplicationContext:ApplicationContext#on(type:
   *  'environment', callback: EnvironmentCallback)}
   * .
   *
   * @param { Configuration } config - Configuration object after the change.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onConfigurationUpdated(config: Configuration): void;

  /**
   * Called when the system memory level changes, after
   * [a listener has been registered for such events]{@link ./application/ApplicationContext:ApplicationContext#on(type:
   *  'environment', callback: EnvironmentCallback)}
   * .
   *
   * @param { AbilityConstant.MemoryLevel } level - Memory level, indicating the available memory of the entire device.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onMemoryLevel(level: AbilityConstant.MemoryLevel): void;
}

export default EnvironmentCallback;