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
 * Ability类是应用生命周期调度的基本单元，是[UIAbility]{@link @ohos.app.ability.UIAbility}和
 * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}的基类，提供系统配置更新回调和系统内存级别变化回调能力。该基类不支持开发者直接继
 * 承，开发者应根据具体的业务场景选择使用[UIAbility]{@link @ohos.app.ability.UIAbility}或
 * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}，相关指南参见
 * [Ability Kit简介](docroot://application-models/abilitykit-overview.md)。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class Ability {
  /**
   * 当系统环境变量发生变化时，系统会触发该回调。开发者可以重写该回调实现对系统环境变量变化时的响应，例如当系统语言类型发生变化时，应用可以在回调中进行定制化的处理等。
   * 
   * > **说明：**
   * >
   * > 该回调方法在实际触发时存在一定限制。例如如果开发者通过[setLanguage]{@link ./application/ApplicationContext:ApplicationContext.setLanguage}接口设置
   * > 应用的语言，即便系统语言发生变化，系统也不再触发onConfigurationUpdate回调。详见
   * > [使用场景](docroot://application-models/subscribe-system-environment-variable-changes.md#使用场景)。
   *
   * @param { Configuration } newConfig - 表示更新后的配置信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onConfigurationUpdate(newConfig: Configuration): void;

  /**
   * 当整机可用内存变化到指定程度时，系统会触发该回调。开发者可以重写该回调实现对内存级别变化的响应，例如释放缓存数据等。
   * 
   * > **说明：**
   * >
   * > onMemoryLevel回调运行在当前进程的主线程中，如果在该回调中做耗时的UI组件释放，会阻塞主线程任务，因此不建议在该回调中释放UI组件。
   *
   * @param { AbilityConstant.MemoryLevel } level - 整机可用内存级别，对应的触发场景详见
   *     [AbilityConstant.MemoryLevel]{@link @ohos.app.ability.AbilityConstant:AbilityConstant.MemoryLevel}。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onMemoryLevel(level: AbilityConstant.MemoryLevel): void;
}

export default Ability;