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
 * Implements the controller for the **Swiper** component. Bind this object to a **Swiper** component to control page
 * turning and other functionalities.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class SwiperController {

  /**
   * A constructor used to create a **SwiperController** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor();

  /**
   * Turns to the next page. The page turning includes a transition animation, with the duration set by the
   * [duration]{@link SwiperAttribute#duration} attribute of the **Swiper** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  showNext();

  /**
   * Turns to the previous page. The page turning includes a transition animation, with the duration set by the
   * [duration]{@link SwiperAttribute#duration} attribute of the **Swiper** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  showPrevious();

  /**
   * Goes to a specified page.
   *
   * @param { number } index - Index of the target page in the **Swiper** component.<br>**NOTE**<br>If the value
   *     specified is less than 0 or greater than the maximum page index, the value **0** is used.
   * @param { boolean } useAnimation - Whether to use an animation for when the target page is reached. The value
   *     **true** means to use an animation, and **false** means the opposite.<br>Default value: **false**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  changeIndex(index: number, useAnimation?: boolean);

  /**
   * Moves to a specific page.
   *
   * > **NOTE**
   * >
   * > This API itself supports jumping without animation (set **animationMode** to **false** or
   * > **SwiperAnimationMode.NO_ANIMATION**). Avoid starting an animation with **changeIndex** and then interrupt it
   * > with **finishAnimation** to achieve animation-free jumping.
   *
   * @param { number } index - Index of the target page in the **Swiper** component.<br>**NOTE**<br>If the value
   *     specified is less than 0 or greater than the maximum page index, the value **0** is used.
   * @param { SwiperAnimationMode | boolean } [animationMode] - Animation mode for moving to the specified page.<br>
   *     Default value: **SwiperAnimationMode.NO_ANIMATION**<br> **NOTE**<br>The value **true** is equivalent to
   *     **SwiperAnimationMode.DEFAULT_ANIMATION**, which means to use the default animation. The value **false** is
   *     equivalent to **SwiperAnimationMode.NO_ANIMATION**, which means to use no animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  changeIndex(index: number, animationMode?: SwiperAnimationMode | boolean);

  /**
   * Stops an animation.
   *
   * @param { function } callback - Callback invoked when the animation stops. [since 7 - 17]
   * @param { ?VoidCallback } callback - Callback invoked when the animation stops. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  finishAnimation(callback?: VoidCallback);

  /**
   * Preloads child nodes for **Swiper**. After this API is called, all specified child nodes will be loaded at once.
   * Therefore, for performance considerations, it is recommended that you load child nodes in batches. This API uses a
   * promise to return the result.
   *
   * If the **SwiperController** object is not bound to any **Swiper** component, any attempt to call APIs on it will
   * result in a JavaScript exception, together with the error code 100004. Therefore, you are advised to use
   * **try-catch** to handle potential exceptions when calling APIs on **SwiperController**.
   *
   * When combining with [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) and custom
   * components, be aware that [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) only
   * retains custom components within the cache range. Components outside this range are removed. Therefore, make sure
   * the indexes of nodes to be preloaded via this API are within the cache range to avoid issues.
   *
   * > **NOTE**
   * >
   * > **preloadItems** of **Swiper** needs to be called after **Swiper** is created. You are advised to control the
   * > first preloading in the [onAppear]{@link CommonMethod#onAppear} lifecycle of **Swiper**.
   *
   * @param { Optional<Array<number>> } indices - Array of indexes of the child nodes to preload.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter invalid. Possible causes:
   *     <br> 1. The parameter type is not Array<number>.
   *     <br> 2. The parameter is an empty array.
   *     <br> 3. The parameter contains an invalid index.
   * @throws { BusinessError } 100004 - Controller not bound to component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  preloadItems(indices: Optional<Array<number>>): Promise<void>;

  /**
   * Enables drag simulation.
   *
   * > **NOTE**
   * >
   * > - If the **Swiper** component is dragged using real gestures or the drag simulation is enabled, the API returns
   * > **false**, indicating that the operation fails.
   * >
   * > - Simulated drag cannot trigger nested scrolling.
   *
   * @returns { boolean } Whether to enable drag simulation.
   *     <br>**true** if enabled; **false** the opposite
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  startFakeDrag(): boolean;

  /**
   * Sets the drag distance of drag simulation.
   *
   * > **NOTE**
   * >
   * > - The drag distance of drag simulation depends on the layout. You are advised to call this API before the layout,
   * > so that the drag effect can be displayed after the current frame layout. If this API is called multiple times
   * > before the layout, only the drag distance passed in the last call takes effect during the current frame layout.
   * >
   * > - In the loop scenario where [loop]{@link SwiperAttribute#loop} is set to **true**, if the drag distance of drag
   * > simulation is greater than the total layout length, the drag distance will be adjusted to the distance required
   * > to drag just far enough to display the first child node (when dragging toward the start of the layout) or the
   * > last child node (when dragging toward the end of the layout).
   * >
   * > - The [onGestureSwipe]{@link SwiperAttribute#onGestureSwipe} and
   * > [onContentWillScroll]{@link SwiperAttribute#onContentWillScroll} events are not triggered during the drag. The
   * > [customContentTransition]{@link SwiperAttribute#customContentTransition} event is triggered before the layout.
   * > Since the actual drag distance may be adjusted during the layout, if the passed drag distance is too large, the
   * > returned node display information may be inconsistent with the layout result when the event is triggered.
   *
   * @param { number } offset - The drag distance to simulate the drag. <br/> A positive number indicates that the
   *     layout is dragged to the start point. A negative number indicates dragging towards the end point of the layout.
   *     <br>Unit: vp.
   *     - Drag distance of drag simulation.<br>A positive number indicates dragging towards the
   *     start point of the layout, and a negative number indicates dragging towards the end point of the layout.
   * @returns { boolean } Whether to consume the passed drag distance.
   *     <br>**true** means to consume any passed drag distance; **false** means not to consume the passed drag distance
   *     because it is not in the drag simulation or has been dragged to the boundary.
   *     <br>If the drag distance is set to **0**, it cannot be consumed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  fakeDragBy(offset: number): boolean;

  /**
   * Disables drag simulation.
   *
   * > **NOTE**
   * >
   * > After drag simulation is enabled, it will end if a real drag gesture is received.
   *
   * @returns { boolean } Whether drag simulation is disabled.
   *     <br>**true** indicates that drag simulation is disabled successfully; **false** indicates the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  stopFakeDrag(): boolean;

  /**
   * Obtains whether drag simulation is enabled.
   *
   * @returns { boolean } Whether the drag simulation is enabled.
   *     <br>**true** indicates that drag simulation is enabled; **false** indicates the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  isFakeDragging(): boolean;
}

/**
 * Sets the distance between the navigation indicator and the **Swiper** component. Note that due to its default
 * interaction area height of 32 vp, the navigation indicator cannot be placed flush against the bottom edge. To
 * implement the function of completely attaching to the bottom, you can use the
 * [IndicatorComponent]{@link IndicatorComponentInterface} component to adjust the position more flexibly.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class Indicator<T> {

  /**
   * Sets the position of the navigation indicator relative to the left edge of the **Swiper** component.
   *
   * @param { Length } value - Position of the navigation indicator relative to the left edge of the **Swiper**
   *     component.<br>If neither **left** nor **right** is set, the navigation indicator is centered along the main
   *     axis based on its own size and the size of the **Swiper** component.<br>If the value specified is **0**, the
   *     navigation indicator is placed at the position 0.<br>Priority: higher than the **right** property<br>Value
   *     range: [0, Swiper width - Navigation indicator area width]. Values outside this range are adjusted to the
   *     nearest boundary.
   * @returns { T } Current navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  left(value: Length): T;

  /**
   * Sets the position of the navigation indicator relative to the top edge of the **Swiper** component.
   *
   * @param { Length } value - Position of the navigation indicator relative to the top edge of the **Swiper**
   *     component.<br>If neither **top** nor **bottom** is set, the navigation indicator is aligned at the bottom along
   *     the cross axis based on its own size and the size of the **Swiper** component, which is the same effect as
   *     setting **bottom=0**.<br>If the value specified is **0**, the navigation indicator is placed at the position 0.
   *     <br>Priority: higher than the **bottom** property<br>Value range:
   *     [0, Swiper height - Navigation indicator area height]. Values outside this range are adjusted to the nearest
   *     boundary.
   * @returns { T } Current navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  top(value: Length): T;

  /**
   * Sets the position of the navigation indicator relative to the right edge of the **Swiper** component.
   *
   * @param { Length } value - Position of the navigation indicator relative to the right edge of the **Swiper**
   *     component.<br>If neither **left** nor **right** is set, the navigation indicator is centered along the main
   *     axis based on its own size and the size of the **Swiper** component.<br>If the value specified is **0**, the
   *     navigation indicator is placed at the position 0.<br>Priority: lower than the **left** property.<br>Value
   *     range: [0, Swiper width - Navigation indicator area width]. Values outside this range are adjusted to the
   *     nearest boundary.
   * @returns { T } Current navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  right(value: Length): T;

  /**
   * Sets the position of the navigation indicator relative to the bottom edge of the **Swiper** component.
   *
   * @param { Length } value - Position of the navigation indicator relative to the bottom edge of the **Swiper**
   *     component.<br>If neither **top** nor **bottom** is set, the navigation indicator is aligned at the bottom along
   *     the cross axis based on its own size and the size of the **Swiper** component, which is the same effect as
   *     setting **bottom=0**.<br>If the value specified is **0**, the navigation indicator is placed at the position 0.
   *     <br>Priority: lower than the **top** property<br>Value range:
   *     [0, Swiper height - Navigation indicator area height]. Values outside this range are adjusted to the nearest
   *     boundary.
   * @returns { T } Current navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bottom(value: Length): T;

  /**
   * Sets the position of the navigation indicator relative to the bottom edge of the **Swiper** component. You can also
   * choose to ignore the size of the navigation indicator using the **ignoreSize** property.
   *
   * @param { LengthMetrics | Length } bottom - Position of the navigation indicator relative to the bottom edge of the
   *     **Swiper** component.<br>If neither **top** nor **bottom** is set, the navigation indicator is aligned at the
   *     bottom along the cross axis based on its own size and the size of the **Swiper** component, which is the same
   *     effect as setting **bottom=0**.<br>If the value specified is **0**, the navigation indicator is placed at the
   *     position 0.<br>Priority: lower than the **top** property<br>Value range:
   *     [0, Swiper height - Navigation indicator area height]. Values outside this range are adjusted to the nearest
   *     boundary.
   * @param { boolean } ignoreSize - Whether to ignore the size of the navigation indicator.<br>Default value:
   *     **false**.<br>Setting **true** positions the indicator closer to the **Swiper** component's bottom. For the
   *     usage, see
   *     [Example 9: Using the space and bottom APIs on the Navigation Indicator](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper.md#example-9-using-the-space-and-bottom-apis-on-the-navigation-indicator).
   *     <br> **NOTE**<br>The **ignoreSize** property does not apply to the digit-style navigation indicator in the
   *     following scenarios:<br> ? [vertical]{@link SwiperAttribute#vertical} is set to **false** and the value of
   *     **bottom** is greater than 0.<br>  ? When [vertical]{@link SwiperAttribute#vertical} is set to **true**:<br>1.
   *     The value of **bottom** is greater than 0.<br> 2. The value of **bottom** is **undefined**.<br> 3.
   *     **isSidebarMiddle** is set to **false**.
   * @returns { T } Current navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  bottom(bottom: LengthMetrics | Length, ignoreSize: boolean): T;

  /**
   * Sets the distance between the navigation indicator and the right edge (in [RTL]{@link LayoutDirection} scripts) or
   * the left edge (in [LTR]{@link LayoutDirection} scripts) of the **Swiper** component.
   *
   * @param { LengthMetrics } value - Right-to-left scripts: Distance between the navigation indicator and the right
   *     edge of the **Swiper** component.<br>Left-to-right scripts: Distance between the navigation indicator and the
   *     left edge of the **Swiper** component.<br>Default value: **0**<br>Unit: vp<br>Value range:
   *     [0, Swiper width - Navigation indicator area width]. Values outside this range are adjusted to the nearest
   *     boundary.
   * @returns { T } Current navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  start(value: LengthMetrics): T;

  /**
   * Sets the distance between the navigation point indicator and the left edge (in right-to-left scripts) or the right
   * edge (in left-to-right scripts) of the **Swiper** component.
   *
   * @param { LengthMetrics } value - Right-to-left scripts: Distance between the navigation indicator and the left edge
   *     of the **Swiper** component.<br>Left-to-right scripts: Distance between the navigation indicator and the right
   *     edge of the **Swiper** component.<br>Default value: **0**<br>Unit: vp<br>Value range:
   *     [0, Swiper width - Navigation indicator area width]. Values outside this range are adjusted to the nearest
   *     boundary.
   * @returns { T } Current navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  end(value: LengthMetrics): T;

  /**
   * Returns a **DotIndicator** object.
   *
   * @returns { DotIndicator } Dot-style indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static dot(): DotIndicator;

  /**
   * Returns a **DigitIndicator** object.
   *
   * @returns { DigitIndicator } Digit-style indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static digit(): DigitIndicator;
}

/**
 * A constructor used to create a **DotIndicator** object. It inherits from [Indicator]{@link Indicator}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class DotIndicator extends Indicator<DotIndicator> {

  /**
   * A constructor used to create a **DotIndicator** object.
   *
   * > **NOTE**
   * >
   * > - When pressed, the navigation indicator is zoomed in to 1.33 times. To account for this, there is a certain
   * > distance between the navigation indicator's visible boundary and its actual boundary in the non-pressed state.
   * > The distance increases with the value of **itemWidth**, **itemHeight**, **selectedItemWidth**, and
   * > **selectedItemHeight**.
   * >
   * > - If there are too many pages and dot-style indicators exceed the page, you are advised to use the
   * > **maxDisplayCount** parameter to set the number of dots to be displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor();

  /**
   * Sets the width of a dot-style navigation indicator of the **Swiper** component.
   *
   * @param { Length } value - Width of the dot-style indicator. This parameter cannot be set in percentage.<br>Default
   *     value: **6**<br>Unit: vp<br>Value range: (0, +∞)
   * @returns { DotIndicator } Current dot-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  itemWidth(value: Length): DotIndicator;

  /**
   * Sets the height of a dot-style navigation indicator of the **Swiper** component.
   *
   * @param { Length } value - Height of the dot-style indicator. This parameter cannot be set in percentage.<br>Default
   *     value: **6**<br>Unit: vp<br>Value range: (0, +∞)
   * @returns { DotIndicator } Current dot-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  itemHeight(value: Length): DotIndicator;

  /**
   * Sets the width of the selected dot-style navigation indicator.
   *
   * @param { Length } value - Width of the selected dot-style navigation indicator. This parameter cannot be set in
   *     percentage.<br>Default value: **6**<br>Unit: vp<br>Value range: (0, +∞)
   * @returns { DotIndicator } Current dot-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedItemWidth(value: Length): DotIndicator;

  /**
   * Sets the height of the selected dot-style navigation indicator.
   *
   * @param { Length } value - Height of the selected dot-style indicator. This parameter cannot be set in percentage.<
   *     br>Default value: **6**<br>Unit: vp<br>Value range: (0, +∞)
   * @returns { DotIndicator } Current dot-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedItemHeight(value: Length): DotIndicator;

  /**
   * Sets whether to enable the mask for the dot-style navigation indicator.
   *
   * @param { boolean } value - Whether to enable the mask for the dot-style navigation indicator. The value **true**
   *     means to enable the mask for the dot-style navigation indicator, and **false** means the opposite.<br>Default
   *     value: **false**.
   * @returns { DotIndicator } Current dot-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mask(value: boolean): DotIndicator;

  /**
   * Sets the color of the dot-style navigation indicator.
   *
   * @param { ResourceColor } value - Color of the dot-style navigation indicator.<br>Default value: **'#1A182431'** (
   *     light gray)
   * @returns { DotIndicator } Current dot-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color(value: ResourceColor): DotIndicator;

  /**
   * Sets the color of the selected dot-style navigation indicator.
   *
   * @param { ResourceColor } value - Color of the selected dot-style navigation indicator.<br>Default value:
   *     **'#007DFF'** (blue)
   * @returns { DotIndicator } Current dot-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedColor(value: ResourceColor): DotIndicator;

  /**
   * Sets the maximum number of navigation dots in the dot-style navigation indicator.
   *
   * @param { number } maxDisplayCount - Maximum number of navigation dots in the dot-style navigation point indicator.
   *     If the actual number of navigation dots exceeds this limit, the overflow effect is activated, as shown in
   *     [Example 5](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper.md#example-5-configuring-overflow-for-the-dot-style-indicator).
   *     <br>This parameter has no default value. If an invalid value is set, no overflow effect is applied.<br>Value
   *     range: [6, 9].<br>**NOTE**<br>In scenarios involving overflow display:<br>1. Interactive features, such as
   *     gestures and mouse operations, are not supported.<br>2. The position of the selected navigation dot
   *     corresponding to the middle page is not strictly fixed; it depends on the sequence of previous page-turning
   *     operations.<br>3. Currently, only scenarios with **displayCount** set to **1** are supported.
   * @returns { DotIndicator } Current dot-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxDisplayCount(maxDisplayCount: number): DotIndicator;

  /**
   * Sets the spacing between dot-style navigation indicators of the **Swiper** component.
   *
   * @param { LengthMetrics } space - Spacing between the dots in the dot-style navigation indicator. Percentage values
   *     are not supported.<br>Default value: **10** for PCs and 2-in-1 devices and **8** for other devices<br>Unit: vp<
   *     br>Value range: [0, +∞)
   * @returns { DotIndicator } Current dot-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  space(space: LengthMetrics): DotIndicator;

  /**
   * Set indicator icon.
   *
   * @param { Array<IndicatorIconInfo> } iconList - Indicator items whose icons need to be set.
   * @returns { DotIndicator } return the DotIndicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  indicatorIcon(iconList: Array<IndicatorIconInfo>): DotIndicator;
}

/**
 * Describes the auto-fill attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SwiperAutoFill {

  /**
   * Minimum width of the element.
   *
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  minSize: VP;
}

/**
 * A constructor used to create a **DigitIndicator** object. It inherits from [Indicator]{@link Indicator}.
 *
 * > **NOTE**
 * >
 * > When pages are turned by group, the child nodes displayed in the digit-style navigation indicator do not count
 * > placeholder nodes.
 * >
 * > The maximum value of [maxFontScale]{@link TextAttribute#maxFontScale} for the digit-style navigation indicator is
 * > **2**.
 * >
 * > The mirror display of the page number depends on the RTL status of the system.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class DigitIndicator extends Indicator<DigitIndicator> {

  /**
   * A constructor used to create a **DotIndicator** object.
   *
   * > **NOTE**
   * >
   * > - When pressed, the navigation indicator is zoomed in to 1.33 times. To account for this, there is a certain
   * > distance between the navigation indicator's visible boundary and its actual boundary in the non-pressed state.
   * > The distance increases with the value of **itemWidth**, **itemHeight**, **selectedItemWidth**, and
   * > **selectedItemHeight**.
   * >
   * > - If there are too many pages and dot-style indicators exceed the page, you are advised to use the
   * > **maxDisplayCount** parameter to set the number of dots to be displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor();

  /**
   * Sets the font color of the digit-style navigation indicator.
   *
   * @param { ResourceColor } value - Font color of the digit-style navigation indicator.<br>Default value:
   *     **'#ff182431'**
   * @returns { DigitIndicator } Current digit-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor(value: ResourceColor): DigitIndicator;

  /**
   * Sets the font color of the selected digit-style navigation indicator.
   *
   * @param { ResourceColor } value - Font color of the selected digit-style navigation indicator.<br>Default value:
   *     **'#ff182431'**
   * @returns { DigitIndicator } Current digit-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedFontColor(value: ResourceColor): DigitIndicator;

  /**
   * Sets the font style of the digit-style navigation indicator.
   *
   * @param { Font } value - Font style of the digit-style navigation indicator.<br>Only the **size** and **weight**
   *     parameters in **Font** are adjustable. Setting **family** and **style** has no effect.<br>Default value:<br>{
   *     size:?14,?weight:?FontWeight.Normal?}
   * @returns { DigitIndicator } Current digit-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  digitFont(value: Font): DigitIndicator;

  /**
   * Sets the font style of the selected digit-style navigation indicator.
   *
   * @param { Font } value - Font style of the selected digit-style navigation indicator.<br>Default value:<br>{?size:?1
   *     4,?weight:?FontWeight.Normal?}
   * @returns { DigitIndicator } Current digit-style navigation indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedDigitFont(value: Font): DigitIndicator;
}

/**
 * Describes the left and right arrow attributes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ArrowStyle {

  /**
   * Whether to show the background for the arrow. The value **true** means to show the background for the arrow, and
   * **false** means the opposite.
   *
   * Default value: **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showBackground?: boolean;

  /**
   * Whether the arrow is centered on both sides of the **Swiper** component. The value **true** means that the arrow is
   * centered on both sides of the **Swiper** component, and **false** means that the arrow is show on either side of
   * the navigation indicator.
   *
   * Default value: **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isSidebarMiddle?: boolean;

  /**
   * Size of the background.
   *
   * On both sides of the navigation indicator:
   *
   * Default value: **24vp**.
   *
   * On both sides of the component:
   *
   * Default value: **32vp**.
   *
   * Percentage values are not supported.
   *
   * @default When isSidebarMiddle is false, the default value is 24vp, Otherwise,the default value is 32vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  backgroundSize?: Length;

  /**
   * Color of the background.
   *
   * On both sides of the navigation indicator:
   *
   * Default value: **'#00000000'**.
   *
   * On both sides of the component:
   *
   * Default value: **'#19182431'**.
   *
   * @default When isSidebarMiddle is false, the default value is #00000000, Otherwise,the default value is #1918243
   *     1 [since 10 - 10]
   * @default When isSidebarMiddle is false, the default value is #00000000, Otherwise, the default value is #1918243
   *     1 [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Size of the arrow.
   *
   * On both sides of the navigation indicator:
   *
   * Default value: **18vp**.
   *
   * On both sides of the component:
   *
   * Default value: **24vp**.
   *
   * **NOTE**
   *
   * If **showBackground** is set to **true**, the value of **arrowSize** is 3/4 of the value of **backgroundSize**.
   *
   * Percentage values are not supported.
   *
   * @default When isSidebarMiddle is false, the default value is 18vp, Otherwise, the default value is 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  arrowSize?: Length;

  /**
   * Color of the arrow.
   *
   * Default value: **'#182431'**
   *
   * @default #182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  arrowColor?: ResourceColor;
}

/**
 * Enumerates the modes in which elements are displayed along the main axis.
 *
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum SwiperDisplayMode {

  /**
   * The width of each page in the **Swiper** component equals the component's
   * own width.
   *
   * Note: This API is supported since API version 7 and deprecated since API version 10. You are advised to use
   * **STRETCH** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead SwiperDisplayMode#STRETCH
   */
  Stretch = 0,

  /**
   * The width of each page in the **Swiper** component equals the maximum width
   * of child components. This enumerated value behaves the same as setting
   * [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)}
   * to **'auto'** (string type). For details, see
   * [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)}.
   *
   * Note: This API is supported since API version 7 and deprecated since API version 10. You are advised to use
   * **AUTO_LINEAR** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead SwiperDisplayMode#AUTO_LINEAR
   */
  AutoLinear = 1,

  /**
   * The width of each page in the **Swiper** component equals the component's
   * own width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  STRETCH = 2,

  /**
   * The width of each page in the **Swiper** component equals the width of the
   * leftmost child component in the viewport. This enumerated value behaves the same as setting
   * [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)}
   * to **'auto'** (string type). For details, see
   * [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)}.
   *
   * Note: This API is supported since API version 10 and deprecated since API version 12. You are advised to use
   * [Scroller.scrollTo]{@link Scroller#scrollTo} instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead Scroller#scrollTo
   */
  AUTO_LINEAR = 3
}

/**
 * The **Swiper** component is able to display child components in a carousel-like manner.
 *
 * > **NOTE**
 *
 * > - The **Swiper** component implements the scrolling carousel effect through the built-in
 * > [PanGesture]{@link gesture} gesture. When the [disableSwipe]{@link SwiperAttribute#disableSwipe} attribute is set
 * > to **true**, the gesture listening is disabled, thereby preventing the scrolling operation.
 * >
 * > - When [NodeContainer]{@link node_container} is reused in the **Swiper** component, recursive updates of parent
 * > component state variables by child nodes are prohibited.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface SwiperInterface {

  /**
   * Creates a **Swiper** component.
   *
   * @param { SwiperController } controller - Controller to bind to the component to manage page switching and preload
   *     specific child components.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (controller?: SwiperController): SwiperAttribute;
}

/**
 * Defines the style of the navigation indicator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8 dynamiconly
 * @deprecated since 10
 * @useinstead Indicator
 */
declare interface IndicatorStyle {

  /**
   * Position of the navigation indicator relative to the left edge of the **Swiper** component.
   *
   * If neither **left** nor **right** is set, the navigation indicator is centered along the main axis based on its own
   * size and the size of the **Swiper** component.
   *
   * If the value specified is **0**, the navigation indicator is placed at the position 0.
   *
   * Priority: higher than the **right** property
   *
   * Value range: [0, Swiper width - Navigation indicator area width]. Values outside this range are adjusted to the
   * nearest boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#left
   */
  left?: Length;

  /**
   * Position of the navigation indicator relative to the top edge of the **Swiper** component.
   *
   * If neither **top** nor **bottom** is set, the navigation indicator is aligned at the bottom along the cross axis
   * based on its own size and the size of the **Swiper** component, which is the same effect as setting **bottom=0**.
   *
   * If the value specified is **0**, the navigation indicator is placed at the position 0.
   *
   * Priority: higher than the **bottom** property
   *
   * Value range: [0, Swiper height - Navigation indicator area height]. Values outside this range are adjusted to the
   * nearest boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#top
   */
  top?: Length;

  /**
   * Position of the navigation indicator relative to the right edge of the **Swiper** component.
   *
   * If neither **left** nor **right** is set, the navigation indicator is centered along the main axis based on its own
   * size and the size of the **Swiper** component.
   *
   * If the value specified is **0**, the navigation indicator is placed at the position 0.
   *
   * Priority: lower than the **left** property.
   *
   * Value range: [0, Swiper width - Navigation indicator area width]. Values outside this range are adjusted to the
   * nearest boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#right
   */
  right?: Length;

  /**
   * Position of the navigation indicator relative to the bottom edge of the **Swiper** component.
   *
   * If neither **top** nor **bottom** is set, the navigation indicator is aligned at the bottom along the cross axis
   * based on its own size and the size of the **Swiper** component, which is the same effect as setting **bottom=0**.
   *
   * If the value specified is **0**, the navigation indicator is placed at the position 0.
   *
   * Priority: lower than the **top** property
   *
   * Value range: [0, Swiper height - Navigation indicator area height]. Values outside this range are adjusted to the
   * nearest boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#bottom
   */
  bottom?: Length;

  /**
   * Diameter of the navigation indicator. Percentage values are not supported.
   *
   * Default value: **6vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator
   */
  size?: Length;

  /**
   * Whether to enable the mask for the navigation indicator.
   *
   * **true**: yes; **false**: no
   *
   * Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#mask
   */
  mask?: boolean;

  /**
   * Color of the navigation indicator.
   *
   * Default value: **'#1A182431'** (light gray)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#color
   */
  color?: ResourceColor;

  /**
   * Color of the selected navigation indicator.
   *
   * Default value: **'#007DFF'** (blue)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#selectColor
   */
  selectedColor?: ResourceColor;
}

/**
 * Describes the animation information of the **Swiper** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SwiperAnimationEvent {

  /**
   * Offset of the currently displayed element relative to the start position of the **Swiper** along the main axis.
   * Unit: vp
   *
   * Default value: **0**
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  currentOffset: number;

  /**
   * Offset of the target element relative to the start position of the **Swiper** along the main axis. Unit: vp
   *
   * Default value: **0**
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  targetOffset: number;

  /**
   * Hands-off velocity at the beginning of the animation. Unit: VP/S
   *
   * Default value: **0**
   *
   * @default 0.0 vp/s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  velocity: number;
}

/**
 * Defines the properties for controlling the automatic playback behavior.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface AutoPlayOptions {

  /**
   * Whether the automatic playback stops immediately when the component is touched.
   *
   * The value **true** means that the automatic playback stops immediately when the component is touched, and **false**
   * means the opposite.
   *
   * Default value: **true**.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  stopWhenTouched: boolean;
}

/**
 * Set the indicator item's icon for a specified index.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface IndicatorIconInfo {

  /**
   * The specified index.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  index: int;

  /**
   * Icon that needs to be set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon: ResourceStr | SymbolGlyphModifier;
}

/**
 * Describes the configuration options for child components to be preloaded.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
declare interface CachedCountOptions {

  /**
   * Whether to draw nodes within the preloading range.
   *
   * **true**: yes.
   *
   * **false**: no.
   *
   * Default value: **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 24 dynamic
   */
  isShown?: boolean;

  /**
   * Whether to calculate [cachedCount]{@link SwiperAttribute#cachedCount(count: number, options: CachedCountOptions)}
   * by group.
   *
   * **true**: **cachedCount** is calculated based on the actual number of child components, not by group.
   *
   * **false**: If **displayCount.swipeByGroup=true**, **cachedCount** is calculated by group. Otherwise, it is
   * calculated based on the actual number of child components.
   *
   * Default value: **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 24 dynamic
   */
  independent?: boolean;
}

/**
 * Enumerates the nested scrolling modes of the **Swiper** component and its parent container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum SwiperNestedScrollMode {

  /**
   * The scrolling is contained within the **Swiper** component, and no scroll chaining occurs, that is,
   *     the parent container does not scroll when the component scrolling reaches the boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  SELF_ONLY = 0,

  /**
   * The **Swiper** component scrolls first, and when it hits the boundary, the parent container scrolls.
   *    When the parent container hits the boundary, its edge effect is displayed.
   *    If no edge effect is specified for the parent container,
   *    the edge effect of the **Swiper** component is displayed instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  SELF_FIRST = 1
}

/**
 * Enumerates the animation mode for moving to a specific page in the **Swiper** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare enum SwiperAnimationMode {

  /**
   * Move to the specified page without any animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  NO_ANIMATION = 0,

  /**
   * Move to the specified page with the default animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  DEFAULT_ANIMATION = 1,

  /**
   * Move to a page near the specified page without animation, and then navigate to the specified page with the default
   * animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  FAST_ANIMATION = 2
}

/**
 * Defines the callback triggered when the page transition animation starts.
 *
 * @param { number } index - Index of the currently displayed element. If there are multiple columns, **index**
 *     indicates the index of the leftmost component.
 * @param { number } targetIndex - Index of the target element to switch to.
 * @param { SwiperAnimationEvent } extraInfo - Extra information of the animation, including the offset of the currently
 *     displayed element and target element relative to the start position of the **Swiper** along the main axis, and
 *     the hands-off velocity.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSwiperAnimationStartCallback = (index: number, targetIndex: number, extraInfo: SwiperAnimationEvent) => void;

/**
 * Defines the callback triggered when the page transition animation ends.
 *
 * @param { number } index - Index of the currently displayed element. If there are multiple columns, **index**
 *     indicates the index of the leftmost component.
 * @param { SwiperAnimationEvent } extraInfo - Extra information of the animation, which is the offset of the currently
 *     displayed element relative to the start position of the **Swiper** along the main axis.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSwiperAnimationEndCallback = (index: number, extraInfo: SwiperAnimationEvent) => void;

/**
 * Defines the callback triggered on a frame-by-frame basis when the page is turned by a swipe.
 *
 * @param { number } index - Index of the currently displayed element. If there are multiple columns, **index**
 *     indicates the index of the leftmost component.
 * @param { SwiperAnimationEvent } extraInfo - Extra information of the animation, which is the offset of the currently
 *     displayed element relative to the start position of the **Swiper** along the main axis.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSwiperGestureSwipeCallback = (index: number, extraInfo: SwiperAnimationEvent) => void;

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class SwiperAttribute extends CommonMethod<SwiperAttribute> {

  /**
   * Sets the index of the child component currently displayed in the container.
   *
   * Since API version 10, this attribute supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * @param { number } value - Index of the child component currently displayed in the container.<br>Default value:
   *     **0**<br>**NOTE**<br>If the value specified is less than 0 or greater than the maximum page index, the value
   *     **0** is used.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  index(value: number): SwiperAttribute;

  /**
   * Sets whether to enable automatic playback for child components, with the direction from the smallest to largest
   * index.
   *
   * If [loop]{@link SwiperAttribute#loop} is set to **false**, the automatic playback stops at the last page and
   * resumes after navigated away from the last page using gestures. If the **Swiper** component becomes invisible, the
   * playback stops.
   *
   * @param { boolean } value - Whether to enable automatic playback for child components.<br>**true**: yes; **false**:
   *     no<br>If an invalid value is passed, the value **false** is used.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  autoPlay(value: boolean): SwiperAttribute;

  /**
   * Sets whether to enable automatic playback for child components, with **options** controlling whether child
   * components stop automatic playback when the screen is pressed by fingers, a mouse device, or other input devices.
   *
   * If [loop]{@link SwiperAttribute#loop} is set to **false**, automatic playback stops at the last page and resumes
   * after navigated away from the last page using gestures. Automatic playback also stops when the **Swiper** component
   * is not visible.
   *
   * @param { boolean } autoPlay - Whether to enable automatic playback for child components.<br>**true**: yes;
   *     **false**: no<br>If an invalid value is passed, the value **false** is used.
   * @param { AutoPlayOptions } options - Whether child components stop automatic playback when the screen is pressed by
   *     fingers, a mouse device, or other input devices. If **stopWhenTouched** is set to **true**, automatic playback
   *     resumes after any finger lifts in multi-touch scenarios.<br>Default value: **{ stopWhenTouched: true }**.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  autoPlay(autoPlay: boolean, options: AutoPlayOptions): SwiperAttribute;

  /**
   * Sets the interval for automatic playback.
   *
   * @param { number } value - Interval for automatic playback. If the value is smaller than the value of
   *     [duration]{@link SwiperAttribute#duration}, the next carousel starts immediately after page switching
   *     completes.<br>Default value: **3000**.<br>Unit: ms<br>Value range:
   *     [0, +∞). If a value less than 0 is set, the default value is used.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interval(value: number): SwiperAttribute;

  /**
   * Sets the style of the navigation indicator.
   *
   * @param { boolean } value - Style of the navigation indicator.<br> - **DotIndicator**: dot-style indicator.<br> -
   *     **DigitIndicator**: digit-style indicator.<br> - **boolean**: whether to enable the navigation indicator.
   *     **true** to enable, **false** otherwise.<br>  Default value: **true**<br>  Default style:
   *     **DotIndicator** [since 7 - 9]
   * @param { DotIndicator | DigitIndicator | boolean } value - Style of the navigation indicator.<br> -
   *     **DotIndicator**: dot-style indicator.<br> - **DigitIndicator**: digit-style indicator.<br> - **boolean**:
   *     whether to enable the navigation indicator. **true** to enable, **false** otherwise.<br>  Default value:
   *     **true**<br>  Default style: **DotIndicator** [since 10]
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  indicator(value: DotIndicator | DigitIndicator | boolean): SwiperAttribute;

  /**
   * Sets the navigation indicator for the component.
   *
   * > **NOTE**
   * >
   * > An externally bound navigation indicator component can be used together if it is set. The display position and
   * > size can be customized for the external navigation indicator. For details, see
   * > [Indicator]{@link indicatorcomponent}.
   *
   * @param { IndicatorComponentController | DotIndicator | DigitIndicator | boolean } indicator - Style of the
   *     navigation indicator.<br>- **IndicatorComponentController**: separate navigation indicator controller. This
   *     controller can be bound to an external navigation indicator, but the external and internal indicators cannot
   *     coexist.<br> - **DotIndicator**: dot-style indicator.<br> - **DigitIndicator**: digit-style indicator.<br> -
   *     **boolean**: whether to enable the navigation indicator. **true** to enable, **false** otherwise.<br>  Default
   *     value: **true**<br>  Default style: **DotIndicator**
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  indicator(indicator: IndicatorComponentController | DotIndicator | DigitIndicator | boolean): SwiperAttribute;

  /**
   * Sets the arrow style of the navigation indicator.
   *
   * > **NOTE**
   * >
   * > When all child nodes fit within the viewport, resulting in only one screen's worth of content being visible, the
   * > **Swiper** component displays only that screen without any left or right page-turning arrows.
   *
   * @param { ArrowStyle | boolean } value - Arrow and background to set. In cases of exceptions, the default values in
   *     the **ArrowStyle** object are used. The value **true** means to show the arrow and background in the default
   *     styles, and **false** means to hide the arrow and background.<br>Default value: **false**.
   * @param { boolean } isHoverShow - Whether to show the arrow on mouse hover.<br>Default value: **false**.<br>**NOTE**
   *     <br>1. **false**: The arrow is always displayed.<br>2. **true**: The arrow is displayed.<br>With navigation
   *     indicators, the arrow is displayed when the mouse pointer hovers over the indicators or arrow areas.<br>Without
   *     navigation indicators, the arrow is displayed when the mouse pointer hovers over the **Swiper** display area.<
   *     br>3. When the arrow is displayed, clicking the arrow turns pages.
   * @returns { SwiperAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayArrow(value: ArrowStyle | boolean, isHoverShow?: boolean): SwiperAttribute;

  /**
   * Sets whether to enable loop playback. In **LazyForEach** mode, it is recommended that the number of loaded
   * components be greater than 5.
   *
   * @param { boolean } value - Whether to enable loop playback.<br>**true**: yes; **false**: no<br>If the input
   *     parameter is invalid, the value **true** is used.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  loop(value: boolean): SwiperAttribute;

  /**
   * Sets the duration of the animation for child component switching.
   *
   * **duration** must be used in conjunction with [curve]{@link SwiperAttribute#curve}.
   *
   * The default curve for the animation is [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}. When
   * this curve is applied, the duration of the animation is determined solely by the parameters of the curve itself and
   * is no longer governed by the **duration** setting. For curves that are not governed by the **duration** setting,
   * see [Interpolation Calculation]{@link @ohos.curves:curves}. Among others,
   * [springMotion]{@link @ohos.curves:curves.springMotion},
   * [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}, and interpolatingSpring do not respect
   * the **duration** setting. To have the animation duration managed by **duration**, you should select a different
   * curve for the **curve** attribute.
   *
   * @param { number } value - Duration of the autoplay for child component switching.<br>Default value: **400**<br>
   *     Unit: ms<br>Value range: [0, +∞). If a value less than 0 is set, the default value is used.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  duration(value: number): SwiperAttribute;

  /**
   * Sets whether vertical swiping is used.
   *
   * @param { boolean } value - Whether vertical swiping is used. The value **true** means vertical swiping, and
   *     **false** means horizontal swiping.<br>Default value: **false**.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  vertical(value: boolean): SwiperAttribute;

  /**
   * Sets the space between child components. Percentage values are not supported.
   *
   * If the type is number, the default unit is vp. If the type is string, the pixel unit must be explicitly specified,
   * for example, **'10px'**; if the unit is not specified, for example, **'10'**, the default unit vp is used.
   *
   * @param { number | string } value - Space between child components.<br>Default value: **0**<br>Value range:
   *     [0, +∞). Values less than 0 or exceeding the **Swiper** component width are treated as the default value.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  itemSpace(value: number | string): SwiperAttribute;

  /**
   * Sets the mode in which elements are displayed along the main axis. This API takes effect only when
   * [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)}
   * is not set.
   *
   * @param { SwiperDisplayMode } value - Mode in which elements are displayed along the main axis.<br>Default value:
   *     **SwiperDisplayMode.STRETCH**
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  displayMode(value: SwiperDisplayMode): SwiperAttribute;

  /**
   * Sets the number of child components to be preloaded (cached), which are needed for the specific number of pages
   * immediately before and after the current page. If a preceding item is deleted, the succeeding items will shift
   * forward. For example, if **cachedCount** is set to **1**, the child components on the previous page and the next
   * page are cached. If **swipeByGroup** in **displayCount** is set to **true**, child components are cached by group.
   * For example, if **cachedCount** is set to **1** and **swipeByGroup** is set to **true**, the child components in
   * the previous and next groups are cached.
   *
   * > **NOTE**
   * >
   * > - In continuous scrolling scenarios where one **Swiper** child component is displayed per screen, setting
   * > **cachedCount** to **1** or **2** is typically sufficient. For best practices, see
   * > [Optimizing Frame Loss During Swiper Component Loading �C Caching Data Items](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-swiper_high_performance_development_guide#section143504547145).
   * >
   * >
   * > - This parameter takes effect only when used with
   * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) or the
   * > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) component that has virtualScroll
   * > enabled. Child components outside the visible area and cache range will be released after this parameter takes
   * > effect.
   *
   * @param { number } value - Number of child components to be preloaded (cached).<br>Default value: **1**<br>Value
   *     range: [0, +∞). If a value less than 0 is set, the default value is used.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  cachedCount(value: number): SwiperAttribute;

  /**
   * Sets the number of child components to be cached.
   *
   * > **NOTE**
   * >
   * > - When the value of **isShown** is **true** and the value of **count** is too large, if there are insufficient
   * > loadable nodes within the preload range, the same loadable node will only be laid out on one side in loop
   * > scenarios.
   *
   * @param { number } count - Number of child components to be preloaded (cached).<br>Default value: **1**<br>Value
   *     range: [0, +∞). If a value less than 0 is set, the default value is used.
   * @param { boolean } isShown - Whether the cached nodes within the range rendered without being added to the render
   *     tree.<br>**true**: yes; **false**: no<br>If an invalid value is passed, the value **false** is used.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  cachedCount(count: number, isShown: boolean): SwiperAttribute;

  /**
   * Sets the number of child components to be prloaded and configuration options.
   *
   * > **NOTE**
   * >
   * > - When **independent** in options is set to **true**, the number of preloaded child components is calculated
   * > based on the value of **count**, which is decoupled from the **swipeByGroup** calculation of
   * > [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill | ItemFillPolicy, swipeByGroup?: boolean)}.
   * > For example, if the value of **count** in **cachedCount** is **1**, the previous and next child components of the
   * > current child node are preloaded.
   * >
   * > - If **swipeByGroup** of **displayCount** is set to **true** and **independent** of **options** is set to
   * > **false** (default value), the number of child components to be preloaded is calculated by group. For example, if
   * > **count** of **cachedCount** is **1**, **value** of **displayCount** is **2**, and **swipeByGroup** of
   * > **displayCount** is **true**, two child components of the previous group and two child components of the next
   * > group of the current group are preloaded.
   * >
   * > - This parameter takes effect only when used with
   * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) or the
   * > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) component that has virtualScroll
   * > enabled. Child components outside the cache range will be released after this parameter takes effect.
   *
   * @param { number } count - - Number of child components to be preloaded (cached).<br>The value range is
   *     [0, +∞). If the value is less than 0, the value **1** is used.
   * @param { CachedCountOptions } options - Configuration options for child components to be preloaded.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 24 dynamic
   */
  cachedCount(count: number, options: CachedCountOptions): SwiperAttribute;

  /**
   * Sets the number of elements to display per page.
   *
   * **number** type: Child elements' main-axis width adapts to the **Swiper** component's main-axis width. The child
   * elements are stretched or shrunk to equally divide the **Swiper** component's width (minus **displayCount-1** times
   * **itemSpace**). Values less than or equal to 0 are treated as the default value **1**.
   *
   * **string** type: Only **'auto'** is supported. Child elements are laid out linearly based on their main-axis width
   * without adapting to the **Swiper** component's width.
   * [customContentTransition]{@link SwiperAttribute#customContentTransition} and
   * [onContentDidScroll]{@link SwiperAttribute#onContentDidScroll} events are disabled.
   *
   * **SwiperAutoFill** type: Child elements' main-axis width adapts to the **Swiper** component's main-axis width. The
   * system automatically works out the number of elements per page based on the width and **minSize** settings of the
   * **Swiper** component. If **minSize** is left empty or set to a value less than or equal to 0, the **Swiper**
   * component displays one column.
   *
   * > **NOTE**
   * >
   * > - When turning pages by group is used, the drag distance threshold for turning pages is half of the width of the
   * > **Swiper** component (50% of the child elements width if turning pages by child element is used). If the number
   * > of child elements in the last group is less than the value of **displayCount**, placeholders are used, but they
   * > show the **Swiper** background style directly and do not display any content.
   * >
   * > - When **displayCount** is set to **'auto'** and **loop** is set to **false**, the position of the selected
   * > navigation indicator aligns with the first page in the viewport. If the first page is only partially displayed in
   * > the viewport after switching, the selected navigation indicator remains aligned with the page's position, between
   * > two unselected indicators. In this case, you are advised to hide the navigation indicators.
   * >
   * > - If the navigation indicator is in dot style, the number of displayed navigation dots equals the number of child
   * > elements when the number of child elements displayed in the viewport is 1 (single-page scenario) or
   * > **displayCount** is set to **'auto'**.
   * >
   * > - If **displayCount** is set to **'auto'** and **swipeByGroup** is set to **true**, each child element will be
   * > treated as a group for page switching, allowing only one page to be switched at a time. In this case, you are
   * > advised not to set **swipeByGroup** or set **swipeByGroup** to **false**.
   * >
   * > - This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * When the navigation indicator is set to dot style and the number of child elements displayed in the viewport is
   * greater than 1 (multi-page scenario)<!--RP1--><!--RP1End-->, the number of displayed navigation dots follows the
   * rules below.
   *
   * | Total Children Count > Visible Children Count|Swiping by Group Enabled|Loop Status|Number of Navigation
   *     Dots Displayed| Description|
   * | ------------------------------------------ | ------------ | --------------- | -------------------------
   *     ----------------------------------- | ---------------------------------------- |
   * | Yes | Yes | **loop** set to **true** | Equals the number of groups
   *     (calculated by dividing the total number of child elements by the number of visible child elements,
   *     with rounding up if there is a remainder).| Not effective when **displayCount** is set to **'auto'**.|
   * | Yes | Yes | **loop** set to **false**| Equals the number of groups (calculated by dividing the total number
   *     of child elements by the number of visible child elements, with rounding up if there is a remainder).|
   *     Not effective when **displayCount** is set to **'auto'**.|
   * | Yes  | No | **loop** set to **true** | Equals the actual number of page turns available
   *     (that is, the total number of child elements).| ���� |
   * | Yes | No | **loop** set to **false**| Equals the actual number of page turns available
   *     (calculated as total number of child elements minus the number of visible child elements, plus 1).|
   *     Not effective when **displayCount** is set to **'auto'**.|
   * | No (while the total number of child elements is greater than 0)| ���� | ���� | 1 |
   *     Not effective when **displayCount** is set to **'auto'**.|
   * | No (while the total number of child elements is 0)| ���� | ���� | 0| ���� |
   *
   * @param { number | string } value - Number of elements to display per page.<br> Default value: **1**<br>Value range:
   *     (0, +∞). If this parameter is set to a value less than or equal to 0, the default value is used. [since 8 - 9]
   * @param { number | string | SwiperAutoFill } value - Number of elements to display per page.<br> Default value:
   *     **1**<br>Value range: (0, +∞). If this parameter is set to a value less than or equal to 0, the default value
   *     is used. [since 10]
   * @param { boolean } [swipeByGroup] - Whether to turn pages by group. The value **true** means to turn pages by
   *     group, and **false** means to turn pages by child element. When turning pages by group is used, the number of
   *     child elements per group is the value of **displayCount**.<br> Default value: **false**. [since 11]
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean): SwiperAttribute;

  /**
   * Sets the number of elements to display per page.
   *
   * **number** type: Child elements' main-axis width adapts to the **Swiper** component's main-axis width. The child
   * elements are stretched or shrunk to equally divide the **Swiper** component's width (minus **displayCount-1** times
   * **itemSpace**). Values less than or equal to 0 are treated as the default value **1**.
   *
   * **string** type: Only **'auto'** is supported. Child elements are laid out linearly based on their main-axis width
   * without adapting to the **Swiper** component's width.
   * [customContentTransition]{@link SwiperAttribute#customContentTransition} and
   * [onContentDidScroll]{@link SwiperAttribute#onContentDidScroll} events are disabled.
   *
   * **SwiperAutoFill** type: Child elements' main-axis width adapts to the **Swiper** component's main-axis width. The
   * system automatically works out the number of elements per page based on the width and **minSize** settings of the
   * **Swiper** component. If **minSize** is left empty or set to a value less than or equal to 0, the **Swiper**
   * component displays one column.
   *
   * **ItemFillPolicy** type: Child elements' main-axis width adapts to the **Swiper** component's main-axis width. The
   * number of displayed elements is determined based on the breakpoint type corresponding to the **Swiper** component's
   * width. For example, if the breakpoint type is set to **ItemFillPolicy.BREAKPOINT_DEFAULT**, one column is displayed
   * when the component width falls within the sm or smaller breakpoint range, two columns are displayed for the md
   * breakpoint range, and three columns are displayed for the lg or a larger breakpoint range.
   *
   * For details about the parameter, see
   * [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)}.
   *
   * @param { number | string | SwiperAutoFill | ItemFillPolicy } value - Number of elements to display per page.<br>
   *     The value range is (0, +∞). If the value is less than or equal to 0, the value **1** is used.
   * @param { boolean } [swipeByGroup] - Whether to turn pages by group. The value **true** means to turn pages by
   *     group, and **false** means to turn pages by child element. When turning pages by group is used, the number of
   *     child elements per group is the value of **displayCount**.<br> Default value: **false**.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  displayCount(value: number | string | SwiperAutoFill | ItemFillPolicy, swipeByGroup?: boolean): SwiperAttribute;

  /**
   * Edge sliding effect. This parameter takes effect only when [loop]{@link SwiperAttribute#loop} is set to **false**
   * or all child nodes are displayed on one screen in the **Swiper** viewport. When the
   * [SwiperController.changeIndex()]{@link SwiperController#changeIndex(index: number, useAnimation?: boolean)},
   * [SwiperController.showNext()]{@link SwiperController#showNext}, or
   * [SwiperController.showPrevious()]{@link SwiperController#showPrevious} API is called to go to the first or last
   * page, the rebound effect does not take effect.
   *
   * @param { EdgeEffect } value - Effect used when the component is at one of the edges.<br>Default value:
   *     **EdgeEffect.Spring**
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  effectMode(value: EdgeEffect): SwiperAttribute;

  /**
   * Sets whether to disable the swipe feature.
   *
   * @param { boolean } value - Whether to disable the swipe feature. The value **true** means to disable the feature,
   *     and **false** means the opposite.<br>Default value: **false**.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  disableSwipe(value: boolean): SwiperAttribute;

  /**
   * Sets the animation curve. The interpolating spring curve is used by default. For details about common curves, see
   * [Curve]{@link Curve}. You can also create custom curves (interpolation curve objects) by using the API provided by
   * the [interpolation calculation]{@link @ohos.curves:curves} module.
   *
   * @param { Curve | string } value - Animation curve.<br>The **string** type is deprecated since API version 9 (see
   *     [curves.init]{@link @ohos.curves:curves.init}, [curves.steps]{@link @ohos.curves:curves.steps},
   *     [curves.cubicBezier]{@link @ohos.curves:curves.cubicBezier}, and
   *     [curves.spring]{@link @ohos.curves:curves.spring}). Use **Curve** or **ICurve** instead.<br>Default value:
   *     **[interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}(-1, 1, 328, 34)**. [since 8 - 9]
   * @param { Curve | string | ICurve } value - Animation curve.<br>The **string** type is deprecated since API version
   *     9 (see [curves.init]{@link @ohos.curves:curves.init}, [curves.steps]{@link @ohos.curves:curves.steps},
   *     [curves.cubicBezier]{@link @ohos.curves:curves.cubicBezier}, and
   *     [curves.spring]{@link @ohos.curves:curves.spring}). Use **Curve** or **ICurve** instead.<br>Default value:
   *     **[interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}(-1, 1, 328, 34)**. [since 10]
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  curve(value: Curve | string | ICurve): SwiperAttribute;

  /**
   * Triggered when the index of the currently displayed element changes. The return value is the index of the currently
   * displayed element.
   *
   * When the **Swiper** component is used together with **LazyForEach**, the subpage UI update cannot be triggered in
   * the **onChange** event.
   *
   * > **NOTE**
   * >
   * > If the index change is caused by an animation, this callback is triggered when the animation ends.
   *
   * @param { function } event - Index of the currently displayed element. [since 7 - 17]
   * @param { Callback<number> } event - Index of the currently displayed element. [since 18]
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(event: Callback<number>): SwiperAttribute;

  /**
   * Triggered when the selected element changes. The index of the currently selected element is returned.
   *
   * @param { Callback<number> } event - Index of the currently selected element.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  onSelected(event: Callback<number>): SwiperAttribute;

  /**
   * Sets the style of the navigation indicator.
   *
   * @param { IndicatorStyle } value - Style of the navigation indicator.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead SwiperAttribute#indicator(value: DotIndicator | DigitIndicator | boolean)
   */
  indicatorStyle(value?: IndicatorStyle): SwiperAttribute;

  /**
   * Sets the leading margin to reveal a portion of the previous item. For the implementation example, see
   * [Example 1: Setting the Navigation Indicator Interaction and Page Turning Effect](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper.md#example-1-setting-the-navigation-indicator-interaction-and-page-turning-effect).
   * This attribute is effective only when the layout mode of the child components in **Swiper** is set to stretch,
   * which mainly includes two scenarios: 1. **displayMode** is set to **SwiperDisplayMode.STRETCH**; 2.
   * **displayCount** is assigned a numeric value.
   *
   * When the main axis runs horizontally and either **nextMargin** or **prevMargin** is greater than the measured width
   * of the child component, both margins are hidden.
   *
   * When the main axis runs vertically and either **nextMargin** or **prevMargin** is greater than the measured height
   * of the child component, both margins are hidden.
   *
   * When using the **nextMargin** or **prevMargin** API, avoid applying
   * [size constraints]{@link CommonMethod#constraintSize} to child components. Otherwise, the main axis of the child
   * nodes will not be stretched to the expected length, causing the margins to lose their effect.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Length } value - Leading margin. Percentage values are not supported.<br>Default value: **0**
   * @param { boolean } [ignoreBlank] - Whether to hide the leading margin for the first page in non-loop scenarios.<br>
   *     **true**: Hide the leading margin, in which case, the left edge of the first page is aligned with that of the
   *     **Swiper** component's viewable area.<br>**false**: Show the leading margin, in which case, the first page has
   *     a **prevMargin**-specified gap from the **Swiper** component's left edge.<br>Default value: **false**.<br>
   *     **NOTE**<br>On the first page, the values of **prevMargin** and **nextMargin** are added to create a right
   *     margin that allows the next page to be displayed partially. [since 12]
   * @returns { SwiperAttribute } The attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  prevMargin(value: Length, ignoreBlank?: boolean): SwiperAttribute;

  /**
   * Sets the trailing margin to reveal a portion of the next item. For the implementation example, see
   * [Example 1: Setting the Navigation Indicator Interaction and Page Turning Effect](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper.md#example-1-setting-the-navigation-indicator-interaction-and-page-turning-effect).
   * This attribute is effective only when the layout mode of the child components in **Swiper** is set to stretch,
   * which mainly includes two scenarios: 1. **displayMode** is set to **SwiperDisplayMode.STRETCH**; 2.
   * **displayCount** is assigned a numeric value.
   *
   * When the main axis runs horizontally and either **nextMargin** or **prevMargin** is greater than the measured width
   * of the child component, both margins are hidden.
   *
   * When the main axis runs vertically and either **nextMargin** or **prevMargin** is greater than the measured height
   * of the child component, both margins are hidden.
   *
   * When using the **nextMargin** or **prevMargin** API, avoid applying
   * [size constraints]{@link CommonMethod#constraintSize} to child components. Otherwise, the main axis of the child
   * nodes will not be stretched to the expected length, causing the margins to lose their effect.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Length } value - Trailing margin. Percentage values are not supported.<br>Default value: **0**
   * @param { boolean } [ignoreBlank] - Whether to hide the trailing margin for the last page in non-loop scenarios.<br>
   *     **true**: Hide the trailing margin, in which case, the right edge of the last page is aligned with that of the
   *     **Swiper** component's viewable area.<br>**false**: Show the trailing margin, in which case, the last page has
   *     a **nextMargin**-specified gap from the **Swiper** component's right edge.<br>Default value: **false**.<br>
   *     **NOTE**<br>On the last page, the values of **prevMargin** and **nextMargin** are added to create a left margin
   *     that allows the previous page to be displayed partially. [since 12]
   * @returns { SwiperAttribute } The attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nextMargin(value: Length, ignoreBlank?: boolean): SwiperAttribute;

  /**
   * Triggered when the selected element changes. The index of the element that is about to be hidden is returned.
   *
   * @param { Callback<number> } event - Index of the element that is about to be hidden.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  onUnselected(event: Callback<number>): SwiperAttribute;

  /**
   * Defines the callback of the swipe state change event for the **Swiper** component. This callback is triggered when
   * the swipe state changes across the followings: scrolling with the touch, animating after release, and stopped.
   *
   * @param { Callback<ScrollState> } event - Callback triggered when the sliding status changes.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  onScrollStateChanged(event: Callback<ScrollState>): SwiperAttribute;

  /**
   * Triggered when the page transition animation starts.
   *
   * > **NOTE**
   * >
   * > - When this callback is invoked, the page transition animation logic is executed in the rendering thread,
   * > allowing the idle main thread to load resources required by child components. This reduces preloading time for
   * > nodes within the **cachedCount** range. For best practices, see
   * > [Optimizing Frame Loss During Swiper Component Loading �C Preloading Data](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-swiper_high_performance_development_guide#section8783121513246).
   * >
   * >
   * > - When the duration of the page transition animation is set to **0**, this callback is triggered only in the
   * > following scenarios: swiping to turn pages, automatic playback, calling **SwiperController.showNext()** or
   * > **SwiperController.showPrevious()**, and touching navigation indicators to navigate.
   *
   * @param { function } event - Callback triggered when the page transition animation starts. [since 9 - 17]
   * @param { OnSwiperAnimationStartCallback } event - Callback triggered when the page transition animation
   *     starts. [since 18]
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onAnimationStart(event: OnSwiperAnimationStartCallback): SwiperAttribute;

  /**
   * Triggered when the page transition animation ends.
   *
   * This event is triggered when the switching animation of the **Swiper** component ends, whether it is caused by
   * gesture interruption or by calling **finishAnimation** through **SwiperController**.
   *
   * @param { function } event - Callback triggered when the page transition animation ends. [since 9 - 17]
   * @param { OnSwiperAnimationEndCallback } event - Callback triggered when the page transition animation
   *     ends. [since 18]
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onAnimationEnd(event: OnSwiperAnimationEndCallback): SwiperAttribute;

  /**
   * Triggered on a frame-by-frame basis when the page is turned by a swipe.
   *
   * @param { function } event - Callback triggered on a frame-by-frame basis when the page is turned by a swipe.
   *     **onGestureSwipe** is called after **onTouch**. For post-release operations, consider using
   *     [onAnimationStart]{@link SwiperAttribute#onAnimationStart}. [since 10 - 17]
   * @param { OnSwiperGestureSwipeCallback } event - Callback triggered on a frame-by-frame basis when the page is
   *     turned by a swipe. **onGestureSwipe** is called after **onTouch**. For post-release operations, consider using
   *     [onAnimationStart]{@link SwiperAttribute#onAnimationStart}. [since 18]
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onGestureSwipe(event: OnSwiperGestureSwipeCallback): SwiperAttribute;

  /**
   * Sets the nested scrolling mode of the **Swiper** component and its parent container. When
   * [loop]{@link SwiperAttribute#loop} is set to **true**, the **Swiper** component has no edge effect and does not
   * trigger nested scrolling of its parent container.
   *
   * > **NOTE**
   * >
   * > The **Swiper** component's flick animation logic differs from other scrollable components, as **Swiper** can only
   * > slide one page at a time and performs a page-flip animation during a flick. When a **Swiper** component is nested
   * > with other scrollable components, it will not accept the scroll offset values transmitted by its child nodes
   * > after its page-turning animation has already started. At this point, the page-turning animation of the **Swiper**
   * > and the edge effect animation of the child node will be executed simultaneously.
   *
   * @param { SwiperNestedScrollMode } value - Nested scrolling mode of the **Swiper** component and its parent
   *     container.<br>If an invalid value is passed, the value **SwiperNestedScrollMode.SELF_ONLY** is used.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  nestedScroll(value: SwiperNestedScrollMode): SwiperAttribute;

  /**
   * Defines a custom page transition animation. During finger-following swipes and post-release transition animations,
   * this triggers a frame-by-frame callback for all pages in the viewport, allowing you to customize animations by
   * modifying properties like opacity, scale, and translation.
   *
   * Instructions:
   *
   * 1. This API does not work when **prevMargin** and **nextMargin** are set in such a way that the **Swiper**
   *    frontend and backend display the same page during loop playback.
   * 2. During finger-following swipes and post-release transition animations,
   *    the [SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy} callback is invoked for all pages
   *    in the viewport on a frame-by-frame basis. For example, when there are two pages whose subscripts are 0 and 1
   *    in the viewport, two callbacks whose indexes are 0 and 1 are invoked in each frame.
   * 3. When the **swipeByGroup** parameter of the **displayCount** attribute is set to **true**,
   *    the callback is invoked for all pages in a group if any page in the group is within the viewport;
   *    and all pages in a group are removed from the render tree if none of them are within the viewport.
   * 4. During finger-following swipes and post-release transition animations, the default animation (page scrolling)
   *    is still effective. If you do not want the page to scroll, you can set the **translate** property
   *    on the main axis to offset the page scrolling. For example, if the value of **displayCount** is **2** and
   *    there are two pages whose subscripts are 0 and 1 within the viewport, you can set the **translate** property
   *    on the main axis to the following on a frame-by-frame basis:
   *    **translate** for page 0 = **-position** x **mainAxisLength**; **translate** for page 1
   *    = **-(position - 1)** x **mainAxisLength**
   *
   * @param { SwiperContentAnimatedTransition } transition - Information about the custom page transition animation.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  customContentTransition(transition: SwiperContentAnimatedTransition): SwiperAttribute;

  /**
   * Triggered when content in the **Swiper** component scrolls.
   *
   * Instructions:
   *
   * 1. This API does not work when **prevMargin** and **nextMargin** are set in such a way that the **Swiper**
   *    frontend and backend display the same page during loop playback.
   * 2. During page scrolling, the [ContentDidScrollCallback]{@link ContentDidScrollCallback} callback is invoked for
   *   all pages in the viewport on a frame-by-frame basis. For example, when there are two pages whose subscripts
   *   are 0 and 1 in the viewport, two callbacks whose indexes are 0 and 1 are invoked in each frame.
   * 3. When the **swipeByGroup** parameter of the **displayCount** attribute is set to **true**,
   *    the callback is invoked for all pages in a group if any page in the group is within the viewport.
   *
   * @param { ContentDidScrollCallback } handler - Callback triggered when content in the **Swiper** component scrolls.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onContentDidScroll(handler: ContentDidScrollCallback): SwiperAttribute;

  /**
   * Sets whether the navigation indicator is interactive.
   *
   * @param { boolean } value - Whether the navigation indicator is interactive.<br>The value **true** means that the
   *     navigation indicator is interactive, and **false** means the opposite.<br>If the input parameter is invalid,
   *     the value **true** is used.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  indicatorInteractive(value: boolean): SwiperAttribute;

  /**
   * Sets the mode for flipping pages using the mouse wheel. If this API is not used, the continuous page flipping mode
   * (specified by value **PageFlipMode.CONTINUOUS**) is used by default.
   *
   * @param { Optional<PageFlipMode> } mode - Mode for flipping pages using the mouse wheel.<br>If the value is
   *     **undefined**, the value **PageFlipMode.CONTINUOUS** is used.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  pageFlipMode(mode: Optional<PageFlipMode>): SwiperAttribute;

  /**
   * Triggered when the **Swiper** component is about to scroll. This event allows you to intercept and control the
   * scrolling behavior of the component. The component determines whether to allow the scroll action based on the
   * return value. If **true** is returned, the scroll action is allowed, and the pages in the **Swiper** component will
   * follow the scrolling. If **false** is returned, the scroll action is disallowed, and the pages will remain
   * stationary.
   *
   * 1. This event is only triggered by gesture operations, including finger swipes,
   *    scrolling the mouse wheel, and moving focus using keyboard arrow keys.
   *
   * 2. During finger swipes, the event is triggered for each frame.
   *     The system uses the return value of the event to determine whether to respond to the swipe for each frame.
   *
   * 3. For scrolling the mouse wheel and moving focus using keyboard arrow keys,
   *     the event is triggered once per page turning.
   *     The system uses the return value to decide whether to allow the page turning.
   *
   * @param { ContentWillScrollCallback } handler - Callback triggered when content in the **Swiper** component scrolls.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  onContentWillScroll(handler: ContentWillScrollCallback): SwiperAttribute;

  /**
   * Sets whether to maintain the visible content position when data is inserted or deleted above or ahead of the
   * viewport. This applies to **Swiper** components using a single
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) as the child node, where the
   * data source is modified using **LazyForEach** API such as [onDataAdd]{@link DataChangeListener.onDataAdd} or
   * [onDataDelete]{@link DataChangeListener.onDataDelete}. In other scenarios, the position of the visible content
   * changes when data is inserted or deleted above or before the display area.
   *
   * When **swipeByGroup** in
   * [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)}
   * is set to **true**, the visible content position remains unchanged only if the amount of data inserted or deleted
   * above or before the display area is a multiple of the group size. Otherwise, the visible content position may
   * change during group recalculation.
   *
   * @param { boolean } enabled - Whether to maintain the visible content position when data is inserted or deleted
   *     above or ahead of the viewport.<br>Default value: **false**.<br>**false**: The visible content position will
   *     change when data is inserted or deleted. **true**: The visible content position remains unchanged when data is
   *     inserted or deleted. Animations stop if the data source is modified during an animation due to target index
   *     changes.
   * @returns { SwiperAttribute } the attribute of swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  maintainVisibleContentPosition(enabled: boolean): SwiperAttribute;
}

/**
 * Provides the information about the custom page transition animation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 26.0.0]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SwiperContentAnimatedTransition {

  /**
   * Timeout for the page transition animation. The timeout timer starts when the default animation (page scrolling)
   * reaches the point where the first frame is moved out of the viewport. If you do not call the **finishTransition**
   * API of [SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy} before the timer expires, the component
   * considers that the custom animation of the page ends and immediately removes the page node from the render tree.
   * The unit is ms. The default value is **0**.
   *
   * @default 0 ms
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  timeout?: number;

  /**
   * Content of the custom page transition animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  transition: Callback<SwiperContentTransitionProxy>;
}

/**
 * Implements the proxy object returned during the execution of the custom page transition animation of the **Swiper**
 * component. You can use this object to obtain the page information in the custom animation viewport. You can also call
 * the **finishTransition** API of this object to notify the **Swiper** component that the custom animation has finished
 * playing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 26.0.0]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SwiperContentTransitionProxy {

  /**
   * Index of the currently selected page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  selectedIndex: number;

  /**
   * Index of a page in the viewport.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * Position of the page specified by **index** relative to the start position of the **Swiper** main axis (start
   * position of the page corresponding to **selectedIndex**).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  position: number;

  /**
   * Length of the page specified by **index** along the main axis, in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  mainAxisLength: number;

  /**
   * Notifies the **Swiper** component that the custom animation has finished playing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  finishTransition(): void;
}

/**
 * Provides information related to the upcoming scroll action, including the index of the current page, the index of the
 * page that will be displayed in the scroll direction, and the displacement of the scroll action.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare interface SwiperContentWillScrollResult {

  /**
   * Index of the current page. During a finger swipe, this value remains constant as long as the finger is on the
   * screen, even if the page has completely moved out of view.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  currentIndex: number;

  /**
   * Index of the page that will be displayed in the scroll direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  comingIndex: number;

  /**
   * Displacement of the scroll action, which is signed to indicate different swipe directions. A positive value
   * indicates a swipe from index=1 to index=0, while a negative value indicates a swipe from index=0 to index=1.
   *
   * This value represents the offset for each frame during a finger swipe and the distance for page turning when the
   * mouse wheel or keyboard navigation is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  offset: number;
}

/**
 * Triggered during the swipe action of the **Swiper** component. For details about the parameters, see
 * [SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy}.
 *
 * @param { number } selectedIndex - Index of the currently selected page.
 * @param { number } index - Index of a page in the viewport.
 * @param { number } position - Position of the page specified by **index** relative to the start position of the
 *     **Swiper** main axis (start position of the page corresponding to **selectedIndex**).
 * @param { number } mainAxisLength - Length of the page specified by **index** along the main axis, in vp.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ContentDidScrollCallback = (selectedIndex: number, index: number, position: number, mainAxisLength: number) => void;

/**
 * Defines the callback triggered when the **Swiper** component is about to scroll. The return value indicates whether
 * the scroll action is allowed.
 *
 * @param { SwiperContentWillScrollResult } result - Information related to the upcoming scroll action, including the
 *     index of the current page, the index of the page that will be displayed in the scroll direction, and the
 *     displacement of the scroll action.
 * @returns { boolean } Whether the scroll action is allowed. The value **true** means the scroll action is allowed, and
 *     **false** means the opposite.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare type ContentWillScrollCallback = (result: SwiperContentWillScrollResult) => boolean;

/**
 * The **Swiper** component is able to display child components in a carousel-like manner.
 *
 * > **NOTE**
 *
 * > - The **Swiper** component implements the scrolling carousel effect through the built-in
 * > [PanGesture]{@link gesture} gesture. When the [disableSwipe]{@link SwiperAttribute#disableSwipe} attribute is set
 * > to **true**, the gesture listening is disabled, thereby preventing the scrolling operation.
 * >
 * > - When [NodeContainer]{@link node_container} is reused in the **Swiper** component, recursive updates of parent
 * > component state variables by child nodes are prohibited.
 *
 * ###### Child Components
 *
 * Supported
 *
 * > **NOTE**
 * >
 * > - Allowed child component types: built-in and custom components, including rendering control types (
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and
 * > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)). To maximize the benefits of lazy
 * > loading, avoid mixing lazy loading components (including **LazyForEach** and **Repeat**) and non-lazy loading
 * > components, and exercise caution when using multiple lazy loading components. Avoid modifying the data source while
 * > an animation is in progress, as doing so can lead to layout issues.
 * >
 * > - If a child component has its
 * > [visibility](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-visibility.md#visibility) attribute
 * > set to **Visibility.None** and the **Swiper** component has its **displayCount** attribute set to **'auto'**, the
 * > child component does not take up space in the viewport, but does not affect the number of navigation points. If a
 * > child component has its **visibility** attribute set to **Visibility.None** or **Visibility.Hidden**, it takes up
 * > space in the viewport, but is not displayed.
 * >
 * > - Child components of the **Swiper** component are drawn based on their level if they have the
 * > [offset]{@link CommonMethod#offset} attribute set. A child component with a higher level overwrites one with a
 * > lower level. For example, if the **Swiper** contains three child components and **offset({ x: 100 })** is set for
 * > the third child component, the third child component overwrites the first child component during horizontal loop
 * > playback. To prevent the first child component from being overwritten, set its [zIndex]{@link CommonMethod#zIndex}
 * > attribute to a value greater than that of the third child component.
 * >
 * > - When focus is moved to a custom child node, navigation indicators and arrows may be obscured by
 * > [focus styles](docroot://ui/arkts-common-events-focus-event.md#focus-style) modifications that change **zIndex**.
 * >
 * > - For a **Swiper** component with many child components, you can optimize the performance and reduce memory
 * > consumption by using lazy loading, data caching, preloading, and component reuse techniques. For best practices,
 * > see
 * > [Optimizing Frame Loss During Swiper Component Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-swiper_high_performance_development_guide).
 * >
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Swiper: SwiperInterface;

/**
 * Defines Swiper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const SwiperInstance: SwiperAttribute;