/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * The module defines the running information of a process. The information can be obtained through 
 * [getProcessRunningInfos]{@link @ohos.application.appManager:appManager.getProcessRunningInfos()} of appManager.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ProcessInformation/ProcessInformation
 */

export interface ProcessRunningInfo {
  /**
   *
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ProcessInformation:ProcessInformation.pid
   */
  pid: number;

  /**
   *
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ProcessInformation:ProcessInformation.uid
   */
  uid: number;

  /**
   *
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ProcessInformation:ProcessInformation.processName
   */
  processName: string;

  /**
   *
   * @default an array of the bundleNames running in the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ProcessInformation:ProcessInformation.bundleNames
   */
  bundleNames: Array<string>;
}