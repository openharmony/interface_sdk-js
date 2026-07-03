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

import { MultiAppMode } from './MultiAppMode';
import { RunningAppClone } from './RunningAppClone';
import { RunningMultiInstanceInfo } from './RunningMultiInstanceInfo';

/**
 * # 使用说明
 * 
 * 通过appManager的[getRunningMultiAppInfo]{@link ./../@ohos.app.ability.appManager:appManager.getRunningMultiAppInfo}来获取。
 */
/**
 * 定义应用多开在运行态的结构信息。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 12 dynamic
 * @since 23 static
 */
export interface RunningMultiAppInfo {

  /**
   * 应用的包名。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * 应用多开模式。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  mode: MultiAppMode;

  /**
   * 特定包名在运行态的多实例应用信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  runningMultiInstances?: Array<RunningMultiInstanceInfo>;

  /**
   * 特定包名在运行态的分身应用信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  runningAppClones?: Array<RunningAppClone>;
}