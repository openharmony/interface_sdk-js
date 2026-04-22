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
import { ElementName } from '../bundleManager/ElementName';
import Context from './Context';

/**
 * The AbilityStageContext module implements the context of an ability stage. It inherits from 
 * [Context]{@link ./../app/context}.
 * This module provides APIs for accessing a specific ability stage. You can use the APIs to obtain the ModuleInfo 
 * object and environment configuration of an ability stage.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class AbilityStageContext extends Context {
  /**
   * ModuleInfo object corresponding to the ability stage.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  currentHapModuleInfo: HapModuleInfo;

  /**
   * Environment variables.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  config: Configuration;

  /**
   * Indicates launch ElementName object of the abilityStage.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  launchElement?: ElementName;
}

export default AbilityStageContext;