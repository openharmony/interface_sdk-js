/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @file Provide some common interface for focus.
 * @kit ArkUI
 */

/**
 * Sets the system focus box style for the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface FocusBoxStyle {

  /**
   * Distance of the focus box from the component's edge.
   *
   * A positive number indicates the outside, and a negative number indicates the inside. The value cannot be in
   * percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  margin?: LengthMetrics;

  /**
   * Stroke color of the focus box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeColor?: ColorMetrics;

  /**
   * Stroke width of the focus box.
   *
   * Negative numbers and percentages are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeWidth?: LengthMetrics;
}

/**
 * Sets the focus priority of a component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum FocusPriority {

  /**
   * Default priority, that is, the focus priority assigned by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  AUTO = 0,

  /**
   * Priority that indicates the component is prioritized in the container. This level is higher than **AUTO**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PRIOR = 2000,

  /**
   * Priority of a previously focused node in the container. This level is higher than **PRIOR**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIOUS = 3000
}

/**
 * Enumerates the modes for processing key events.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare enum KeyProcessingMode {

  /**
   * Default value. When the current component does not consume the key event, focus navigation using the **Tab** and
   * arrow keys preferentially stays within the current container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  FOCUS_NAVIGATION = 0,

  /**
   * When the current component does not consume the key event, focus navigation using the **Tab** and arrow keys is
   * bubbled up to the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  ANCESTOR_EVENT = 1
}