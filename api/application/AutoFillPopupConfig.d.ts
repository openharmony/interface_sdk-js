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
 * The module describes the size and position information of an auto-fill pop-up.
 *
 * @file
 * @kit AbilityKit
 */

/**
 * The module describes the size and position information of an auto-fill pop-up.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export default interface AutoFillPopupConfig {
  /**
   * Width and height of the auto-fill pop-up. If this parameter is not set, the width and height are not updated.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  popupSize?: PopupSize;

  /**
   * Position of the auto-fill pop-up. If this parameter is not set, the position is not updated.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  placement?: PopupPlacement;
}

/**
 * Describes the width and height of the auto-fill pop-up.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export interface PopupSize {
  /**
   * Width of the auto-fill pop-up.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  width: double;

  /**
   * Height of the auto-fill pop-up.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  height: double;
}

/**
 * Enumerates the positions of an auto-fill pop-up.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export declare enum PopupPlacement {
  /**
   * The popup is on the left of the component and aligned with the left center of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  LEFT = 0,

  /**
   * The popup is on the right of the component and aligned with the right center of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  RIGHT = 1,

  /**
   * The popup is at the top of the component and aligned with the top center of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  TOP = 2,

  /**
   * The popup is at the bottom of the component and aligned with the bottom center of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  BOTTOM = 3,

  /**
   * The popup is at the top of the component and aligned with the left edge of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  TOP_LEFT = 4,

  /**
   * The popup is at the top of the component and aligned with the right edge of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  TOP_RIGHT = 5,

  /**
   * The popup is at the bottom of the component and aligned with the left edge of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  BOTTOM_LEFT = 6,

  /**
   * The popup is at the bottom of the component and aligned with the right edge of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  BOTTOM_RIGHT = 7,

  /**
   * The popup is on the left of the component and aligned with the top edge of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  LEFT_TOP = 8,

  /**
   * The popup is on the left of the component and aligned with the bottom edge of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  LEFT_BOTTOM = 9,

  /**
   * The popup is on the right of the component and aligned with the top edge of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  RIGHT_TOP = 10,

  /**
   * The popup is on the right of the component and aligned with the bottom edge of the component.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  RIGHT_BOTTOM = 11,

  /**
   * The position is unspecified.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  NONE = 12
}