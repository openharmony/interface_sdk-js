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
 * 本模块用于监听当前应用进程的状态变化。为了便于表述，下文中将“应用进程”简称为“进程”。
 * 
 * 开发者可调用ApplicationContext.on('applicationStateChange')方法传入自定义ApplicationStateChangeCallback来监听当前进程的前后台状态变化，
 * 并执行相应操作。例如，统计进程前后台时长、或者当进程退到后台时清理内存缓存。
 * 
 * > **说明：**
 * >
 * > 本模块首批接口从API version 10 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * 
 * ## 约束限制
 * 
 * 该模块仅支持监听当前进程的前后台状态变化。如果需要监听整个应用的前后台状态变化，可使用ApplicationStateObserver.onForegroundApplicationChanged。
 * 
 * >**说明**
 * >
 * > 进程的前后台状态不同于应用的前后台状态，两者的差别如下：
 * >- 进程的前后台状态：如果进程中存在任何前台状态的UIAbility/UIExtensionAbility或可见窗口，则认为进程状态为前台，反之为后台。
 * >- 应用的前后台状态：如果应用下有任何一个进程状态为前台，则认为应用状态为前台，反之为后台。
 * 
 * @file
 * @kit AbilityKit
 */

/**
 *  * 本模块用于监听当前应用进程的状态变化。为了便于表述，下文中将“应用进程”简称为“进程”。
 * 
 * 开发者可调用ApplicationContext.on('applicationStateChange')方法传入自定义ApplicationStateChangeCallback来监听当前进程的前后台状态变化，
 * 并执行相应操作。例如，统计进程前后台时长、或者当进程退到后台时清理内存缓存。
 * 
 * > **说明：**
 * >
 * > 本模块首批接口从API version 10 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * 
 * ## 约束限制
 * 
 * 该模块仅支持监听当前进程的前后台状态变化。如果需要监听整个应用的前后台状态变化，可使用ApplicationStateObserver.onForegroundApplicationChanged。
 * 
 * >**说明**
 * >
 * > 进程的前后台状态不同于应用的前后台状态，两者的差别如下：
 * >- 进程的前后台状态：如果进程中存在任何前台状态的UIAbility/UIExtensionAbility或可见窗口，则认为进程状态为前台，反之为后台。
 * >- 应用的前后台状态：如果应用下有任何一个进程状态为前台，则认为应用状态为前台，反之为后台。
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