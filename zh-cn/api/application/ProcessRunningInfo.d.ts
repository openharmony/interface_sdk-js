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
 * 运行进程信息，可以通过appManager中
 * [getProcessRunningInfos]{@link ./../@ohos.application.appManager:appManager.getProcessRunningInfos()}方法来获取运行进程信息。
 *
 * > **说明：**
 * >
 * > - 本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > - 从API version 8开始支持，从API version 9开始废弃。建议使用ProcessInformation替代。
 * 
 * ## 导入模块
 * 
 * ```ts
 * import appManager from '@ohos.application.appManager';
 * ```
 * 
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ProcessInformation/ProcessInformation
 */
export interface ProcessRunningInfo {
  /**
   * 进程ID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ProcessInformation:ProcessInformation.pid
   */
  pid: number;

  /**
   * 应用程序的UID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ProcessInformation:ProcessInformation.uid
   */
  uid: number;

  /**
   * 进程名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ProcessInformation:ProcessInformation.processName
   */
  processName: string;

  /**
   * 进程中所有运行的Bundle名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ProcessInformation:ProcessInformation.bundleNames
   */
  bundleNames: Array<string>;
}