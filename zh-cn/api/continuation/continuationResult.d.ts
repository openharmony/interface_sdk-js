/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
 * 流转管理入口返回的设备信息。
 * 
 *
 * @syscap SystemCapability.Ability.DistributedAbilityManager
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager
 */
export interface ContinuationResult {
  /**
   * 表示设备标识。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  id: string;

  /**
   * 表示设备类型。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  type: string;

  /**
   * 表示设备名称。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  name: string;
}