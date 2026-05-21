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
 * EnvironmentCallback模块提供对系统环境变化监听回调的能力。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
export default class EnvironmentCallback {

  /**
   * [注册系统环境变化的监听]{@link ./application/ApplicationContext:ApplicationContext.on(type: 'environment', callback: EnvironmentCallback)}
   * 后，在系统环境变化时触发回调。
   *
   * @param { Configuration } config - 变化后的Configuration对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onConfigurationUpdated(config: Configuration): void;

  /**
   * [注册系统环境变化的监听]{@link ./application/ApplicationContext:ApplicationContext.on(type: 'environment', callback: EnvironmentCallback)}
   * 后，在系统内存变化时触发回调。
   *
   * @param { AbilityConstant.MemoryLevel } level - 整机可用内存级别，对应的触发场景详见
   *     [AbilityConstant.MemoryLevel]{@link ./@ohos.app.ability.AbilityConstant:AbilityConstant.MemoryLevel}。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onMemoryLevel(level: AbilityConstant.MemoryLevel): void;
}