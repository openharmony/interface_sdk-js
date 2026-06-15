/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Sets the type of page transition.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum RouteType {
  /**
   * The page is not redirected. The animation specified by **PageTransitionEnter** takes effect for page entrance, and 
   * the animation specified by **PageTransitionExit** takes effect for page exit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None = 0,

  /**
   * Redirects to the next page. To redirect the user from page A to page B, set **RouteType** of **PageTransitionExit**
   * to **None** or **Push** for page A and set **RouteType** of **PageTransitionEnter** to **None** or **Push** for 
   * page B.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Push = 1,

  /**
   * Redirects to a specified page. To redirect the user from page B back to page A, set **RouteType** of 
   * **PageTransitionExit** to **None** or **Pop** for page B and set **RouteType** of **PageTransitionEnter** to 
   * **None** or **Pop** for page A.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Pop = 2
}

/**
 * Slide-in and slide-out effects for page transitions.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum SlideEffect {
  /**
   * When set to Enter, slides in from the left. When set to Exit, slides out to the left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Left,

  /**
   * When set to Enter, slides in from the right. When set to Exit, slides out to the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Right,

  /**
   * When set to Enter, slides in from the top. When set to Exit, slides out to the top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Top,

  /**
   * When set to Enter, slides in from the bottom. When set to Exit, slides out to the bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bottom,

  /**
   * Left-to-right scripts: When set to Enter, slides in from the left; when set to Exit, slides out to the left. Right-
   * to-left scripts: When set to Enter, slides in from the right; when set to Exit, slides out to the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  START = 5,

  /**
   * Left-to-right scripts: When set to Enter, slides in from the right; when set to Exit, slides out to the right. 
   * Right-to-left scripts: When set to Enter, slides in from the left; when set to Exit, slides out to the left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  END = 6,
}

/**
 * Defines a common transition animation for page transitions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class CommonTransition<T> {
  /**
   * A constructor used to create a common transition animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor();

  /**
   * Sets the slide-in and slide-out effects for page transitions.
   *
   * @param { SlideEffect } value - Slide-in and slide-out effects for page transitions.
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  slide(value: SlideEffect): T;

  /**
   * Sets the translation effect for page transitions.
   *
   * @param { object } value - Translation effect for page transitions, specifying the start value for entrance and the
   *     end value for exit. When this parameter is set together with **slide**, the latter takes effect by default.<br>
   *     - **x**: translation distance along the x-axis.<br>- **y**: translation distance along the y-axis.<br>- **z**:
   *     translation distance along the y-axis. [since 7 - 17]
   * @param { TranslateOptions } value - Translation effect for page transitions, specifying the start value for
   *     entrance and the end value for exit. When this parameter is set together with **slide**, the latter takes
   *     effect by default.<br>- **x**: translation distance along the x-axis.<br>- **y**: translation distance along
   *     the y-axis.<br>- **z**: translation distance along the y-axis. [since 18]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  translate(value: TranslateOptions): T;

  /**
   * Sets the scaling effect for page transitions.
   *
   * @param { object } value - Scaling effect for page transitions, specifying the start value for entrance and the end
   *     value for exit.<br>- **x**: scale factor along the x-axis.<br>- **y**: scale factor along the y-axis.<br>-
   *     **z**: scale factor along the z-axis.<br>- **centerX** and **centerY**: scaling center. The default values are
   *     both **"50%"**, meaning the center of the page is used as the scaling center by default.<br>- If the center
   *     point is (0, 0), it refers to the upper left corner of the component. [since 7 - 17]
   * @param { ScaleOptions } value - Scaling effect for page transitions, specifying the start value for entrance and
   *     the end value for exit.<br>- **x**: scale factor along the x-axis.<br>- **y**: scale factor along the y-axis.<
   *     br>- **z**: scale factor along the z-axis.<br>- **centerX** and **centerY**: scaling center. The default values
   *     are both **"50%"**, meaning the center of the page is used as the scaling center by default.<br>- If the center
   *     point is (0, 0), it refers to the upper left corner of the component. [since 18]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scale(value: ScaleOptions): T;

  /**
   * Sets the starting opacity value for entrance or the ending opacity value for exit.
   *
   * @param { number } value - Starting opacity value for entrance or the ending opacity value for exit.<br>Value range:
   *     [0, 1]
   * @returns { T } Current component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  opacity(value: number): T;
}

/**
 * Parameters of the exit or entrance animation.
 *
 * @interface PageTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface PageTransitionOptions {
  /**
   * Route type for the page transition effect to take effect.
   * 
   * Default value: **RouteType.None**
   *
   * @type { ?RouteType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type?: RouteType;
  /**
   * Animation duration.
   * 
   * Unit: ms
   * 
   * Default value: **1000**
   * 
   * Value range: [0, +∞)
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  duration?: number;
  /**
   * Animation curve.
   * 
   * You are advised to specify the curve using the **Curve** or **ICurve** type.
   * 
   * For the string type, this parameter indicates an animation interpolation curve. For available values, see the 
   * **curve** parameter in [AnimateParam]{@link AnimateParam}.
   * 
   * Default value: **Curve.Linear**
   *
   * @type { ?(Curve | string) } [since 7 - 9]
   * @type { ?(Curve | string | ICurve) } [since 10]
   * @default Curve.Linear
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  curve?: Curve | string | ICurve;
  /**
   * Animation delay.
   * 
   * Unit: ms
   * 
   * Default value: **0**
   * 
   * **NOTE**
   * 
   * If no match is found, the default page transition effect is used (which may vary according to the device). To 
   * disable the default page transition effect, set **duration** to **0**.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  delay?: number;
}

/**
 * Represents the callback for page transition events.
 *
 * @typedef { function } PageTransitionCallback
 * @param { RouteType } type - transition route type
 * @param { number } progress - transition progess
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type PageTransitionCallback = (type: RouteType, progress: number) => void;

/**
 * Provides an interface to set transition style when a page enters.
 *
 * @extends CommonTransition<PageTransitionEnterInterface>
 * @interface PageTransitionEnterInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface PageTransitionEnterInterface extends CommonTransition<PageTransitionEnterInterface> {
  /**
   * Sets the page entrance animation.
   *
   * @param { PageTransitionOptions } value - pageTransition options
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: PageTransitionOptions): PageTransitionEnterInterface;

  /**
   * Invoked on a per-frame basis until the entrance animation is complete, with the **progress** parameter changing 
   * from 0 to 1.
   *
   * @param { function } event - Callback invoked on a per-frame basis until the entrance animation is complete, with
   *     the **progress** parameter changing from 0 to 1. [since 7 - 17]
   * @param { PageTransitionCallback } event - Callback invoked on a per-frame basis until the entrance animation is
   *     complete, with the **progress** parameter changing from 0 to 1. [since 18]
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onEnter(event: PageTransitionCallback): PageTransitionEnterInterface;
}

/**
 * Provide an interface to set transition style when a page exits.
 *
 * @extends CommonTransition<PageTransitionExitInterface>
 * @interface PageTransitionExitInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface PageTransitionExitInterface extends CommonTransition<PageTransitionExitInterface> {
  /**
   * Sets the page exit animation.
   *
   * @param { PageTransitionOptions } value - pageTransition options
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: PageTransitionOptions): PageTransitionExitInterface;

  /**
   * Invoked on a per-frame basis until the exit animation is complete, with the **progress** parameter changing from 0 
   * to 1.
   *
   * @param { function } event - Callback invoked on a per-frame basis until the exit animation is complete, with the
   *     **progress** parameter changing from 0 to 1. [since 7 - 17]
   * @param { PageTransitionCallback } event - Callback invoked on a per-frame basis until the exit animation is
   *     complete, with the **progress** parameter changing from 0 to 1. [since 18]
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onExit(event: PageTransitionCallback): PageTransitionExitInterface;
}

/**
 * Defines PageTransitionEnter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const PageTransitionEnter: PageTransitionEnterInterface;

/**
 * Defines PageTransitionExit Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const PageTransitionExit: PageTransitionExitInterface;
