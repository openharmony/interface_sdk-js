/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS;
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Intention Code
 * @kit InputKit
 */

/**
 * The **intentionCode** module maps the original events of the keyboard to intention codes for normalized interaction.
 * For example, if the mapped event of the space bar on the keyboard is **INTENTION_SELECT**, the intent is to select an
 * item.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice [since 12]
 * @since 10 dynamic
 * @since 23 static
 */
export declare enum IntentionCode {

  /**
   * Unknown intent
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_UNKNOWN = -1,

  /**
   * Up
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_UP = 1,

  /**
   * Down
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_DOWN = 2,

  /**
   * Left
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_LEFT = 3,

  /**
   * Right
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_RIGHT = 4,

  /**
   * Select
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_SELECT = 5,

  /**
   * Escape
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_ESCAPE = 6,

  /**
   * Back
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_BACK = 7,

  /**
   * Forward
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_FORWARD = 8,

  /**
   * Menu
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_MENU = 9,

  /**
   * Page up
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_PAGE_UP = 11,

  /**
   * Page down
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_PAGE_DOWN = 12,

  /**
   * Zoom out
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_ZOOM_OUT = 13,

  /**
   * Zoom in
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  INTENTION_ZOOM_IN = 14
}