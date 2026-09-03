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

/**
 * 定义多实例应用在运行态的结构信息，包含实例标识、应用UID和进程ID。通过appManager的
 * [getRunningMultiAppInfo]{@link ./../@ohos.app.ability.appManager:appManager.getRunningMultiAppInfo}来获取，用于监控和管理多实例应用的运行状态。
 * 应用多实例相关开发指南请参见[创建应用多实例](docroot://quick-start/multiInstance.md)。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 14 dynamic
 * @since 23 static
 */
export interface RunningMultiInstanceInfo {
  /**
   * 多实例应用的唯一实例标识。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  instanceKey: string;

  /**
   * 表示应用程序的UID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * 应用的进程ID集合。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  pids: Array<int>;
  }