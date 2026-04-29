/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

/*** if arkts dynamic */
import type appManager from '../@ohos.app.ability.appManager';
/*** endif */
/*** if arkts static */
import appManager from '../@ohos.app.ability.appManager';
/*** endif */
import bundleManager from '../@ohos.bundle.bundleManager';

/**
 * The module defines the process information. The information can be obtained through
 * [getRunningProcessInformation]{@link @ohos.app.ability.appManager:appManager.getRunningProcessInformation()} of
 * appManager.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ProcessInformation {
  /**
   * Process ID.
   *
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  pid: int;

  /**
   * UID of the application.
   *
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * Process name.
   *
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  processName: string;

  /**
   * Names of all running bundles in the process.
   *
   * @default an array of the bundleNames running in the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  bundleNames: Array<string>;

  /**
   * Running status of the process.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  state: appManager.ProcessState;

  /**
   * Type of the bundle running in the process.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  bundleType: bundleManager.BundleType;

  /**
   * Index of an application clone.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  appCloneIndex?: int;

  /**
   * Indicates whether the process is in the preload state.
   *
   * - `true`: The process is currently in the preload state.
   * - `false`: The process is either not a preload process, or its preload state has been consumed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  isPreload?: boolean;
}