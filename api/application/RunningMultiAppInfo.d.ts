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
 * # How to Use
 * 
 * The RunningMultiAppInfo struct is obtained from 
 * [getRunningMultiAppInfo]{@link ./../@ohos.app.ability.appManager:appManager.getRunningMultiAppInfo} of 
 * **appManager**.
 */
/**
 * The RunningMultiAppInfo module defines the information of an application in multi-app mode in the running state.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 12 dynamic
 * @since 23 static
 */
export interface RunningMultiAppInfo {

  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * Multi-app mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  mode: MultiAppMode;

  /**
   * Information about a multi-instance application with the specific bundle name in the running state.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  runningMultiInstances?: Array<RunningMultiInstanceInfo>;

  /**
   * Information about application clones with the specific bundle name in the running state.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  runningAppClones?: Array<RunningAppClone>;
}