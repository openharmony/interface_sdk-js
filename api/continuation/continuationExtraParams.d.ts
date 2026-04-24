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
 * The ContinuationExtraParams module provides the filter parameters required by the device selection module in the
 * continuation management entry. These filter parameters can be used as an input parameter of
 * [startContinuationDeviceManager]{@link @ohos.continuation.continuationManager:continuationManager.startContinuationDeviceManager(token: number, callback: AsyncCallback<void>)}
 * .
 *
 *
 * @syscap SystemCapability.Ability.DistributedAbilityManager
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 */
export interface ContinuationExtraParams {
  /**
   * Device type.
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  deviceType?: Array<string>;

  /**
   * Name of the target bundle.
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  targetBundle?: string;

  /**
   * Device filtering description.
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  description?: string;

  /**
   * Device filtering parameter.
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  filter?: any;

  /**
   * Continuation mode.
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  continuationMode?: continuationManager.ContinuationMode;

  /**
   * Authentication information.
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