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

import { ElementName } from '../bundleManager/ElementName';
import abilityManager from '../@ohos.app.ability.abilityManager';

/**
 * AbilityRunningInfo is a struct that records the running information and state of an ability. It is obtained through
 * [getAbilityRunningInfos]{@link @ohos.app.ability.abilityManager:abilityManager.getAbilityRunningInfos()}.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 * @since 23 static
 */
export interface AbilityRunningInfo {
  /**
   * Element name of the ability.
   *
   * @default the ohos.bundleManager.ElementName object of the ability.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  ability: ElementName;

  /**
   * Process ID.
   *
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  pid: int;

  /**
   * UID of the application.
   *
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * Process name.
   *
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  processName: string;

  /**
   * Ability start time.
   *
   * @default ability start time
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  startTime: long;

  /**
   * Ability state.
   *
   * @default Enumerates state of the ability state info
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  abilityState: abilityManager.AbilityState;
}