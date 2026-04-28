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

import StartupConfig from './@ohos.app.appstartup.StartupConfig';
import Want from './@ohos.app.ability.Want';

/**
 * 本模块提供[应用启动框架](docroot://application-models/app-startup.md)配置的能力。
 *
 * @syscap SystemCapability.Ability.AppStartup
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
declare class StartupConfigEntry {
  /**
   * 在回调[AbilityStage.onCreate]{@link @ohos.app.ability.AbilityStage:AbilityStage.onCreate}前，若该AbilityStage对应的HAP中启动框架配置
   * 文件中[定义了启动框架配置](docroot://application-models/app-startup.md#定义启动参数配置)，则会触发该回调。
   * 
   * 开发者可以在该回调中设置启动框架配置信息，详细使用方法可参考[设置启动参数](docroot://application-models/app-startup.md#设置启动参数)章节。
   *
   * @returns { StartupConfig } 启动框架配置信息。
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   */
  onConfig?(): StartupConfig;

  /**
   * 在回调[AbilityStage.onCreate]{@link @ohos.app.ability.AbilityStage:AbilityStage.onCreate}前，若该AbilityStage对应的HAP中启动框架配置
   * 文件中[定义了启动框架配置](docroot://application-models/app-startup.md#定义启动参数配置)，则会触发该回调。
   *
   * @returns { StartupConfig } 启动框架配置信息。
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 23 static
   */
  onConfig(): StartupConfig;

  /**
   * 在回调[AbilityStage.onCreate]{@link @ohos.app.ability.AbilityStage:AbilityStage.onCreate}前，若该AbilityStage对应的HAP中启动框架配置
   * 文件中[定义了启动框架配置](docroot://application-models/app-startup.md#定义启动参数配置)，则会在
   * [StartupConfigEntry.onConfig]{@link StartupConfigEntry#onConfig?()}后触发该回调。
   * 
   * 开发者可以在该回调中，可以根据调用方传入启动UIAbility的Want中的不同参数来返回不同的自定义匹配规则。启动框架会将其与启动任务配置的matchRules中customization字段进行匹配。若匹配成功，任务将在自动模
   * 式执行。详细匹配规则请参考[添加任务匹配规则](docroot://application-models/app-startup.md#添加任务匹配规则)章节。
   * 
   * 该接口通常用于无法直接通过uri、action或意图名称规则来匹配启动任务的场景，可以使用本接口对匹配规则进一步细化。
   *
   * @param { Want } want - 启动UIAbility的Want信息。
   * @returns { string } 返回自定义匹配规则值，用于匹配启动任务是否自动执行。
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onRequestCustomMatchRule(want: Want): string;
}

export default StartupConfigEntry;