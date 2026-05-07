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
 * 本模块用于监听当前应用进程的状态变化。为了便于表述，下文中将“应用进程”简称为“进程”。
 * 开发者可调用
 * [ApplicationContext.on('applicationStateChange')]{@link ./application/ApplicationContext:ApplicationContext.on(type: 'applicationStateChange', callback: ApplicationStateChangeCallback)}
 * 方法传入自定义ApplicationStateChangeCallback来监听当前进程的前后台状态变化，从而根据进程前后台状态变化来执行某些操作。例如，统计进程前后台时长、或者当进程退到后台时清理内存缓存。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export default class ApplicationStateChangeCallback {
  /**
   * 当前进程从后台切换到前台时触发回调。当该回调触发时，并不表示进程已完全处于前台状态，而是即将进入前台状态，此时无法执行需要依赖前台状态的操作（例如启动其他UIAbility）。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onApplicationForeground(): void;

  /**
   * 当前进程从前台切换到后台时触发回调。当该回调触发时，表示进程已完全处于后台状态，可以执行适合在后台状态下完成的操作（例如清理内存缓存）。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onApplicationBackground(): void;
}