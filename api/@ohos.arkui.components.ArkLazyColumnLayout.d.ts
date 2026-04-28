/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * Defines the lazy column layout component.
 *
 * @interface LazyColumnLayoutInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface LazyColumnLayoutInterface {
  /**
   * Construct the lazy column layout attribute.
   *
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (): LazyColumnLayoutAttribute;
}

/**
 * Defines the lazy column layout attribute.
 *
 * @extends CommonMethod<LazyColumnLayoutAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class LazyColumnLayoutAttribute extends CommonMethod<LazyColumnLayoutAttribute> {
  /**
   * The spacing between child components in the vertical direction.
   *
   * @param { LengthMetrics | undefined } value - The spacing between child components in the vertical direction.
   *     <br>Default value: LengthMetrics.vp(0)
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  space(value: LengthMetrics | undefined): LazyColumnLayoutAttribute;

  /**
   * Sets the alignment mode of child components in the horizontal direction when the width of the LazyColumnLayout
   * is greater than the width of the child components.
   *
   * @param { ListItemAlign } value - Alignment mode of child components in the horizontal direction.<br>Default value: <em>ListItemAlign.Start</em>
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  alignListItem(value: ListItemAlign): LazyColumnLayoutAttribute;

  /**
   * Set or reset the callback which is triggered when the start and end positions of the display change.
   *
   * @param { OnScrollIndexCallback | undefined } callback - callback function, triggered when the start or
   *     end positions of the display change.
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onScrollIndex(callback: OnScrollIndexCallback | undefined): LazyColumnLayoutAttribute;
}

/**
 * Defines the callback type used in onScrollIndex.
 *
 * @typedef {function} OnScrollIndexCallback
 * @param {number} start - the first index in visible content.
 * @param {number} end - the last index in visible content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnScrollIndexCallback = (start: number, end: number) => void;

/**
 * Defines LazyColumnLayout Component.
 *
 * @type { LazyColumnLayoutInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const LazyColumnLayout: LazyColumnLayoutInterface;

/**
 * Defines LazyColumnLayout Component instance.
 *
 * @type { LazyColumnLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const LazyColumnLayoutInstance: LazyColumnLayoutAttribute;
