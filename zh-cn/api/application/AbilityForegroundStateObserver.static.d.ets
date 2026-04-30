'use static'
/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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

import AbilityStateData from './AbilityStateData';

/**
 * 定义应用前后台状态监听。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 23 static
 */
declare interface AbilityForegroundStateObserver {

  /**
   * 当Ability前后台状态发生变化时，系统会触发该回调。
   *
   * @param { AbilityStateData } abilityStateData - Ability状态信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  onAbilityStateChanged(abilityStateData: AbilityStateData): void;
}

export default AbilityForegroundStateObserver;