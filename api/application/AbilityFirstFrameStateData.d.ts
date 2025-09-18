/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * The ability first frame state data.
 *
 * @typedef AbilityFirstFrameStateData
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface AbilityFirstFrameStateData {
  /**
   * The bundle name.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  bundleName: string;

  /**
   * The module name.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  moduleName: string;

  /**
   * The ability name.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  abilityName: string;

  /**
   * The index of DLP sandbox.
   *
   * @type { int }
   * @default 0
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  appIndex: int;

  /**
   * The entry ability of application is cold-start return true, others false.
   *
   * @type { boolean }
   * @default false
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isColdStart: boolean;
}