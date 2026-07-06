/*
 * Copyright (c) 2024-2026 Huawei Device Co., Ltd.
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
 * AutoFillRect describes the rectangle used for auto-fill.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi [since 12 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic&static
 */
export default interface AutoFillRect {
  /**
   * Distance between the AutoFill form or page node and the left boundary of the page.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 12 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  left: double;

  /**
   * Distance between the AutoFill form or page node and the upper boundary of the page.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 12 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  top: double;

  /**
   * Width of the AutoFill form or page node.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 12 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  width: double;

  /**
   * Height of the AutoFill form or page node.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 12 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  height: double;
}