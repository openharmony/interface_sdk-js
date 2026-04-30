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
 * 运行进程信息，可以通过appManager的
 * [getRunningProcessInformation]{@link @ohos.app.ability.appManager:appManager.getRunningProcessInformation()}来获取运行进程信息
 * 。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ProcessInformation {
  /**
   * 进程ID。
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
   * 应用程序的UID。
   *
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * 进程名称。
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
   * 进程中所有运行的Bundle名称。
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
   * 当前进程运行状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  state: appManager.ProcessState;

  /**
   * 当前进程运行的包类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  bundleType: bundleManager.BundleType;

  /**
   * 分身应用索引。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  appCloneIndex?: int;

  /**
   * 进程是否为预加载。当进程是预加载且还未被某个组件启动请求所使用时为true；反之为false。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  isPreload?: boolean;
}