/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * The class of auto startup info.
 *
 * @typedef AutoStartupInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 */
export interface AutoStartupInfo {
  /**
   * Bundle name
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  bundleName: string;

  /**
   * Module name
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  moduleName?: string;

  /**
   * Ability Name
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  abilityName: string;

  /**
   * Ability Type Name
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  abilityTypeName?: string;

  /**
   * The app clone index of ability instance.
   * @type { ?number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  appCloneIndex?: number;

  /**
   * The user id of application.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 22 static
   */
  readonly userId?: number;

  /**
   * The user id of setter.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 22 static
   */
  readonly setterUserId?: number;

  /**
   * Whether to allow user to modify autostartup status.
   *
   * @type { ?boolean }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 22 static
   */
  readonly canUserModify?: boolean;
}

export default AutoStartupInfo;
