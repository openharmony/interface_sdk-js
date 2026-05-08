/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
   * The spacing between rows.
   *
   * @param { LengthMetrics | undefined } space - the spacing between rows.
   *     <br>Default value: 0. <br>Range: [0, +∞).
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  space(space: LengthMetrics | undefined): LazyColumnLayoutAttribute;

  /**
   * Sets the horizontal alignment of the row content.
   *
   * @param { HorizontalAlign | undefined } value - the horizontal alignment of the row content.
   *     <br>Default value HorizontalAlign.Center.
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  alignItems(value: HorizontalAlign | undefined): LazyColumnLayoutAttribute;

  /**
   * Triggered when the index of child components in the visible area changes.
   *
   * @param { onVisibleIndexesChangeCallback | undefined } callback - callback function, triggered
   *     when the index of child components in the visible area changes.
   *     <br>Passing undefined will unregister the callback.
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onVisibleIndexesChange(callback: onVisibleIndexesChangeCallback | undefined): LazyColumnLayoutAttribute;
}

/**
 * Defines the lazy column layout component.
 *
 * @type { LazyColumnLayoutInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const LazyColumnLayout: LazyColumnLayoutInterface;

/**
 * Defines the lazy column layout component instance.
 *
 * @type { LazyColumnLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const LazyColumnLayoutInstance: LazyColumnLayoutAttribute;
