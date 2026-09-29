/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
   * The page is not redirected. For example, when **RouteType** is **None** as described in **Push** and **Pop**, the 
   * transition effect of **PageTransitionEnter** takes effect when the page enters, and the transition effect of 
   * **PageTransitionExit** takes effect when the page exits.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None = 0,

  /**
   * Jumps to the next page, for example, from PageA to PageB. For PageA, the component style of **PageTransitionExit** 
   * with **RouteType** set to **None** or **Push** takes effect; for PageB, the component style of 
   * **PageTransitionEnter** with **RouteType** set to **None** or **Push** takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Push = 1,

  /**
   * Returns to the previous page, for example, from PageB to PageA. For PageB, the component style of 
   * **PageTransitionExit** with **RouteType** set to **None** or **Pop** takes effect; for PageA, the component style 
   * of **PageTransitionEnter** with **RouteType** set to **None** or **Pop** takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Pop = 2
}

/**
 * Defines the slide-in and slide-out effects for page transitions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum SlideEffect {
  /**
   * When set for entrance, it indicates sliding in from the left; when set for exit, it indicates sliding out to the 
   * left.
   * 
   * **Atomic service API:** Since API version 11, this interface is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Left,

  /**
   * When set for entrance, it indicates sliding in from the right; when set for exit, it indicates sliding out to the 
   * right.
   * 
   * **Atomic service API:** Since API version 11, this interface is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Right,

  /**
   * When set for entrance, it indicates sliding in from the top; when set for exit, it indicates sliding out to the 
   * top.
   * 
   * **Atomic service API:** Since API version 11, this interface is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Top,

  /**
   * When set for entrance, it indicates sliding in from the bottom; when set for exit, it indicates sliding out to the 
   * bottom.
   * 
   * **Atomic service API:** Since API version 11, this interface is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bottom,

  /**
   * When set for LTR entrance, it indicates sliding in from the left; for exit, it indicates sliding out to the left. 
   * When set for RTL entrance, it indicates sliding in from the right; for exit, it indicates sliding out to the right.
   * 
   * **Atomic service API:** Since API version 12, this interface is supported in atomic services.
   * 
   * **Model constraint:** This interface can be used only under the Stage model.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  START = 5,

  /**
   * When set for LTR entrance, it indicates sliding in from the right; for exit, it indicates sliding out to the right.
   * When set for RTL entrance, it indicates sliding in from the left; for exit, it indicates sliding out to the left.
   * 
   * **Atomic service API:** Since API version 12, this interface is supported in atomic services.
   * 
   * **Model constraint:** This interface can be used only under the Stage model.
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
 * Defines the common transition animation for page transitions, which is inherited and used by 
 * [PageTransitionEnter](docroot://reference/apis-arkui/arkui-ts/ts-page-transition-animation.md#pagetransitionenter) 
 * and [PageTransitionExit](docroot://reference/apis-arkui/arkui-ts/ts-page-transition-animation.md#pagetransitionexit).
 * It must be configured in the **pageTransition()** function. Both **slide** and **translate** involve position 
 * movement: **slide** is suitable for scenarios that require sliding in and out along a preset direction (left/right/up
 * /down/**START**\/**END)** and is simple to use; **translate** is suitable for scenarios that require a custom 
 * translation distance and offers higher flexibility. When **slide** and **translate** are set simultaneously, 
 * **slide** takes effect by default. **scale** and **opacity** set the scale and opacity effects respectively, and can 
 * be combined with the effects above.
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
   * Sets the slide-in and slide-out effect during page transition. When set simultaneously with **translate**, 
   * **slide** takes effect by default.
   *
   * @param { SlideEffect } value - Slide-in and slide-out effects for page transitions.
   * @returns { T } Current component, used for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  slide(value: SlideEffect): T;

  /**
   * Sets the translation effect for page transitions.
   *
   * @param { object } value - Translation effect during page transition, which is the value at the start point when
   *     entering and at the end point when exiting. When set simultaneously with **slide**, **slide** takes effect by
   *     default.
   *     <br>- **x**: horizontal translation distance.
   *     <br>- **y**: vertical translation distance.
   *     <br>- **z**: z-axis translation distance. [since 7 - 17]
   * @param { TranslateOptions } value - Translation effect during page transition, which is the value at the start
   *     point when entering and at the end point when exiting. When set simultaneously with **slide**, **slide** takes
   *     effect by default.
   *     <br>- **x**: horizontal translation distance.
   *     <br>- **y**: vertical translation distance.
   *     <br>- **z**: z-axis translation distance. [since 18]
   * @returns { T } Current component, used for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  translate(value: TranslateOptions): T;

  /**
   * Sets the scaling effect for page transitions.
   *
   * @param { object } value - Scale effect during page transition, which is the value at the start point when entering
   *     and at the end point when exiting.
   *     <br>- **x**: horizontal scale multiple (or scale ratio).
   *     <br>- **y**: vertical scale multiple (or scale ratio).
   *     <br>- **z**: depth scale multiple (or scale ratio).
   *     <br>- **centerX** and **centerY**: scale center point. The default values of **centerX** and **centerY** are
   *     **"50%"**, that is, the center point of the page is used as the scale center point by default.
   *     <br>- A center point of (0, 0) represents the upper left corner of the page. [since 7 - 17]
   * @param { ScaleOptions } value - Scale effect during page transition, which is the value at the start point when
   *     entering and at the end point when exiting.
   *     <br>- **x**: horizontal scale multiple (or scale ratio).
   *     <br>- **y**: vertical scale multiple (or scale ratio).
   *     <br>- **z**: depth scale multiple (or scale ratio).
   *     <br>- **centerX** and **centerY**: scale center point. The default values of **centerX** and **centerY** are
   *     **"50%"**, that is, the center point of the page is used as the scale center point by default.
   *     <br>- A center point of (0, 0) represents the upper left corner of the page. [since 18]
   * @returns { T } Current component, used for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scale(value: ScaleOptions): T;

  /**
   * Sets the starting opacity value for entrance or the ending opacity value for exit.
   *
   * @param { number } value - Start opacity value of the entrance animation or the end opacity value of the exit
   *     animation.
   *     <br>Value range: [0, 1]
   * @returns { T } Current component, used for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  opacity(value: number): T;
}

/**
 * Defines the parameters of the exit/entrance animation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface PageTransitionOptions {
  /**
   * Route type for which the page transition effect takes effect.
   * 
   * Default value: **RouteType.None**.
   * 
   * **Note:**
   * 
   * When multiple 
   * [PageTransitionEnter](docroot://reference/apis-arkui/arkui-ts/ts-page-transition-animation.md#pagetransitionenter) 
   * or [PageTransitionExit](docroot://reference/apis-arkui/arkui-ts/ts-page-transition-animation.md#pagetransitionexit)
   * components are configured in the **pageTransition** function, they take effect according to the **RouteType** 
   * matching rule: the system selects the last matching component from all configured **PageTransitionEnter**\/
   * **PageTransitionExit** components based on the current route operation type (**Push** or **Pop**); if no component 
   * matches, the system default page transition effect is used (which may vary by device). If multiple 
   * **PageTransitionEnter** components match the same **RouteType**, the last configured one takes effect; if multiple 
   * **PageTransitionExit** components match the same **RouteType**, the last configured one takes effect. 
   * **RouteType.None** matches all route types.
   * 
   * Value selection principle: **None** indicates that it takes effect for all route types; **Push** takes effect only 
   * for push routes; **Pop** takes effect only for pop routes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type?: RouteType;
  /**
   * Duration of the animation.
   * 
   * Unit: ms
   * 
   * Default value: **1000**
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  duration?: number;
  /**
   * Animation curve.
   * 
   * It is recommended to specify it in the form of **Curve** or **ICurve**.
   * 
   * When the type is string, it is the animation interpolation curve. For details about the value, see the **curve** 
   * parameter of [AnimateParam]{@link AnimateParam}.
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
 * @param { RouteType } type - Route type for which the page transition effect takes effect.
 * @param { number } progress - Transition progress, ranging from 0 to 1.
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