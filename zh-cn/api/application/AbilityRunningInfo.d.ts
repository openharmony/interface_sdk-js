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
 * AbilityRunningInfo是记录Ability运行信息和状态的数据结构，通过
 * [getAbilityRunningInfos]{@link @ohos.app.ability.abilityManager:abilityManager.getAbilityRunningInfos()}方法获取。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 * @since 23 static
 */
export interface AbilityRunningInfo {
  /**
   * Ability的ElementName信息。
   *
   * @default the ohos.bundleManager.ElementName object of the ability.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  ability: ElementName;

  /**
   * 进程ID。
   *
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  pid: int;

  /**
   * 所属应用程序的UID。
   *
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * 进程的名称。
   *
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  processName: string;

  /**
   * Ability的启动时间。
   *
   * @default ability start time
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  startTime: long;

  /**
   * Ability的状态。
   *
   * @default Enumerates state of the ability state info
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  abilityState: abilityManager.AbilityState;
}