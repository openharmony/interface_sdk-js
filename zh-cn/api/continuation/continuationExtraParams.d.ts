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

import continuationManager from '../@ohos.continuation.continuationManager';


/**
 * 流转管理入口中设备选择模块所需的过滤参数，可以作为
 * [startContinuationDeviceManager]{@link @ohos.continuation.continuationManager:continuationManager.startContinuationDeviceManager(token: number, callback: AsyncCallback<void>)}
 * 的入参。
 *
 * @syscap SystemCapability.Ability.DistributedAbilityManager
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 */
export interface ContinuationExtraParams {
  /**
   * 表示设备类型。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  deviceType?: Array<string>;

  /**
   * 表示目标Bundle名称。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  targetBundle?: string;

  /**
   * 表示设备过滤的描述。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  description?: string;

  /**
   * 表示设备过滤的参数。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  filter?: any;

  /**
   * 表示协同的模式。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  continuationMode?: continuationManager.ContinuationMode;

  /**
   * 表示认证的信息。
   *
   * @type { ?object } [since 8 - 10]
   * @type { ?Record<string, Object> } [since 11]
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  authInfo?: Record<string, Object>;
}