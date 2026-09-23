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
 * Enumerates the scrolling directions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ScrollDirection {

  /**
   * Only vertical scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Vertical,

  /**
   * Only horizontal scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Horizontal,

  /**
   * Vertical or horizontal scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ScrollDirection#FREE
   */
  Free,

  /**
   * Scrolling is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None,

  /**
   * Free scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  FREE = 4,
}

/**
 * Enumerates alignment modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ScrollAlign {

  /**
   * Start alignment. Aligns the start of the specified item with the start of the scrollable container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START,

  /**
   * Center alignment. Centers the specified item along the main axis within the scrollable container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER,

  /**
   * End alignment. Aligns the end of the specified item with the end of the scrollable container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END,

  /**
   * Automatic alignment.
   *
   * If the specified item is entirely within the visible area, no adjustment is made. Otherwise, following the shortest
   * -scroll-distance principle, either the start or the end of the item is aligned with the scrollable container to
   * make the item fully visible.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  AUTO,
}

/**
 * Represents the offset values resulting from a scroll operation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface OffsetResult {

  /**
   * Horizontal scroll offset.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  xOffset: number;

  /**
   * Vertical scroll offset.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  yOffset: number;
}

/**
 * Provides parameters for scrolling to the edge of a scrollable container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ScrollEdgeOptions {

  /**
   * Fixed velocity for scrolling to the edge of the container.
   * If the value specified is less than or equal to 0, the parameter will not take effect.
   *
   * @default 0vp/s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  velocity?: number;
}

/**
 * Provides parameters for scrolling to a specific index.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ScrollToIndexOptions {

  /**
   * Extra offset for scrolling to a specified index.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  extraOffset?: LengthMetrics;
}

/**
 * Provides parameters for customizing scroll animations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ScrollAnimationOptions {

  /**
   * Scrolling duration.
   *
   * <p><strong>NOTE</strong>
   * <br>Scrolling duration.<br>Default value: **1000**<br>Unit: ms
   * <br>**NOTE**<br>A value less than 0 evaluates to the default value.
   * </p>
   *
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  duration?: number;

  /**
   * Scrolling curve.
   *
   * @default Curve.Ease
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  curve?: Curve | ICurve;

  /**
   * Whether to enable overscroll.
   *
   * <p><strong>NOTE</strong>
   * <br> Scrolling can exceed the boundary and initiate a bounce animation when this parameter is set to <em>true</em>,
   * and the component's <em>edgeEffect</em> attribute is set to EdgeEffect.Spring.
   * </p>
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  canOverScroll?: boolean;
}

/**
 * Provides parameters for setting the initial scrolling offset.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OffsetOptions {

  /**
   * Horizontal scrolling offset.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  xOffset?: Dimension;

  /**
   * Vertical scrolling offset.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  yOffset?: Dimension;
}

/**
 * Represents the return value of the
 * [getEvent('Scroll')]{@link ../../../arkui/FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'Scroll')} method in
 * **frameNode**, which can be used to set scroll events for a **Scroll** node.
 *
 * **UIScrollEvent** inherits from [UIScrollableCommonEvent]{@link UIScrollableCommonEvent}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface UIScrollEvent extends UIScrollableCommonEvent {

  /**
   * Triggered for the [onWillScroll]{@link ScrollAttribute#onWillScroll} event.
   *
   * Passing **undefined** as the input parameter resets the event callback.
   *
   * @param { ScrollOnWillScrollCallback | undefined } callback - Callback for the **onWillScroll** event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnWillScroll(callback: ScrollOnWillScrollCallback | undefined): void;

  /**
   * Triggered for the [onDidScroll]{@link ScrollAttribute#onDidScroll} event.
   *
   * Passing **undefined** as the input parameter resets the event callback.
   *
   * @param { ScrollOnScrollCallback | undefined } callback - Callback for the **onDidScroll** event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnDidScroll(callback: ScrollOnScrollCallback | undefined): void;
}

/**
 * Defines a controller for scrollable container components. It can be bound to a container component to control its
 * scrolling behavior. A single **Scroller** instance cannot control multiple container components simultaneously.
 * Currently, it can be bound to the following components: **ArcList**, **ArcScrollBar**, **List**, **Scroll**,
 * **ScrollBar**, **Grid**, and **WaterFlow**.
 *
 * > **NOTE**
 * >
 * > 1. The binding between the **Scroller** controller and the scroll container component occurs during component
 * > creation.
 *
 * > 2. The **Scroller** methods can be called normally only after the **Scroller** controller is bound to the scroll
 * > container component. Otherwise, depending on the API called, the call may not take effect or may throw an
 * > exception.
 *
 * > 3. Take [aboutToAppear]{@link BaseCustomComponent#aboutToAppear} as
 * > an example. **aboutToAppear** is executed after a new instance of the custom component is created and before its
 * > **build()** method is executed. Therefore, if the scroll component is inside the **build()** of a custom component,
 * > the internal scroll component has not been created yet when **aboutToAppear** of the custom component is executed,
 * > and the **Scroller** methods cannot be called normally.
 *
 * > 4. Take [onAppear]{@link CommonMethod#onAppear} as an example. This callback is triggered after the component is
 * > mounted and displayed. Therefore, when the **onAppear** callback of the scroll component is executed, the scroll
 * > component has been created and successfully bound to the **Scroller**, and the **Scroller** methods can be called
 * > normally.
 *
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class Scroller {

  /**
   * A constructor used to create a **Scroller** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor();

  /**
   * Scrolls to a specified position. This API can be used for scenarios such as directory navigation, returning to the
   * top, and locating search results.
   *
   * > **NOTE**
   * >
   * > - If the scrolling speed of the **scrollTo** animation exceeds 200 vp/s, the components within the scrollable
   * > area will not respond to click events.
   * >
   * > - Component behavior varies:
   * >
   * > - The [ArcList]{@link @ohos.arkui.ArcList} and [List]{@link ./list} components load and lay out all items that
   * > are passed through.
   * >
   * > - The **Grid** components and the [WaterFlow]{@link ./water_flow} components in
   * > [SLIDING_WINDOW]{@link WaterFlowLayoutMode} mode directly estimate the items to be displayed when the jump
   * > distance is large (greater than twice the component main axis height). A jump refers to a one-frame scroll.
   * >
   * > - The **WaterFlow** components in [ALWAYS_TOP_DOWN]{@link WaterFlowLayoutMode} mode load and lay out all items
   * > passed through when jumping backward (when **dx** or **dy** is positive), and jump directly to the corresponding
   * > position when jumping forward (when **dx** or **dy** is negative). A jump refers to a one-frame scroll.
   *
   * @param { object } value [since 7 - 17]
   * @param { ScrollOptions } options - Parameters for scrolling to a specified position, including fields such as
   *     **xOffset**, **yOffset**, **animation**, and **canOverScroll**, used to specify the scroll target position and
   *     scroll behavior. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollTo(options: ScrollOptions);

  /**
   * Scrolls to the edge of the container, regardless of the scroll axis direction. **Edge.Top** and **Edge.Start**
   * behave the same, and **Edge.Bottom** and **Edge.End** behave the same. This API can be used for scenarios such as
   * returning to the top and jumping to the end of the content.
   *
   * By default, the **Scroll** component comes with an animation, while the **Grid**, **List**, and **WaterFlow**
   * components do not.
   *
   * @param { Edge } value - Edge position to scroll to.
   * @param { ScrollEdgeOptions } [options] - Mode of scrolling to the edge position.
   *     <br><em>Atomic service API</em>: This API can be used in atomic services since API version 12. [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollEdge(value: Edge, options?: ScrollEdgeOptions);

  /**
   * The scroll component performs inertial scrolling based on the initial velocity passed in. This API can be used to
   * simulate a fling effect.
   *
   * @param { number } velocity - Initial velocity of the inertial scroll. Unit: vp/s<br/>**Note:**<br/>If **velocity**
   *     is set to **0**, the current scroll does not take effect and no scroll animation is generated. If the value is
   *     positive, the component scrolls toward the top; if the value is negative, the component scrolls toward the
   *     bottom.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fling(velocity: number): void;

  /**
   * Scrolls to the next or previous page.
   *
   * @param { object } value - Paging mode. It contains the **next** (whether to page down) and **animation** (whether
   *     to enable the paging animation) fields, which are used to specify the paging behavior. [since 9 - 13]
   * @param { ScrollPageOptions } value - Paging mode. It contains the **next** (whether to page down) and **animation**
   *     (whether to enable the paging animation) fields, which are used to specify the paging behavior. [since 14]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  scrollPage(value: ScrollPageOptions);

  /**
   * Scrolls to the next or previous page.
   *
   * @param { object } value - next: Whether to turn to the next page.
   *     The value <em>true</em> means to scroll to the next page, and <em>false</em> means to scroll to the previous
   *     page.
   *     direction: Scrolling direction: horizontal or vertical.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead Scroller#scrollPage
   */
  scrollPage(value: { next: boolean; direction?: Axis });

  /**
   * Obtains the current scroll offset.
   *
   * > **NOTE**
   * >
   * > 1. When the **Scroller** is not bound to a component, this API returns **undefined**, which is not declared in
   * > the API. It is recommended to use the [offset]{@link Scroller#offset} function, whose return type explicitly
   * > includes **undefined**.
   * >
   * > 2. The **Grid**, **List**, and **WaterFlow** components have a lazy loading mechanism. When the component content
   * > has not been loaded and laid out, the total content offset is obtained through estimation, and the estimation
   * > result may contain errors. For the **List** component, the
   * > [childrenMainSize]{@link ListAttribute#childrenMainSize} attribute can be used to resolve the inaccurate
   * > estimation. For **Grid** and **WaterFlow**, there is currently no solution for the inaccurate estimation.
   *
   * @returns { OffsetResult } Current total scroll offset. **xOffset** indicates the total horizontal scroll offset,
   *     and **yOffset** indicates the total vertical scroll offset.<br/> [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  currentOffset() : OffsetResult;

  /**
   * Obtains the current scroll offset. Except for **undefined** in the API declaration, other information is the same
   * as that of the [currentOffset]{@link Scroller#currentOffset} API.
   *
   * @returns { OffsetResult | undefined } Current total scroll offset. **xOffset** indicates the total horizontal
   *     scroll offset, and **yOffset** indicates the total vertical scroll offset. If the **Scroller** is not bound to
   *     a component, this API returns **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  offset() : OffsetResult | undefined;

  /**
   * Scrolls to a specified index, with support for setting an extra offset for the scroll.
   *
   * When the smooth animation is enabled, all items passed through are loaded and laid out. Loading a large number of
   * items may cause performance issues. To optimize performance, you should first call **scrollToIndex** without
   * animation to jump to a position near the target, and then call **scrollToIndex** with animation to scroll to the
   * target position.
   *
   * > **NOTE**
   * >
   * > 1. This API is supported only by the **ArcList**, **Grid**, **List**, and **WaterFlow** components.
   * >
   * > 2. When refreshing the data source in [LazyForEach]{@link ./lazy_for_each}, [ForEach]{@link ./for_each}, or
   * > [Repeat]{@link ./repeat}, ensure that this API is called after the data refresh is complete.
   * >
   * > 3. Since API version 11, [contentStartOffset]{@link ListAttribute#contentStartOffset(value: number)} and
   * > [contentEndOffset]{@link ListAttribute#contentEndOffset(value: number)} are supported in **List**. Since API
   * > version 22,
   * > [contentStartOffset]{@link ScrollAttribute#contentStartOffset(offset: number | Resource)}
   * > and
   * > [contentEndOffset]{@link ScrollAttribute#contentEndOffset(offset: number | Resource)}
   * > can be set in the **Grid** and **WaterFlow** components.
   * >
   * > - When **contentStartOffset** is set for the scroll container component and **ScrollAlign** is set to **START**,
   * > the head of the specified item is aligned with the **contentStartOffset** position of the scroll container
   * > component when scrolling ends.
   * >
   * > - When **contentEndOffset** is set for the scroll container component and **ScrollAlign** is set to **END**, the
   * > tail of the specified item is aligned with the **contentEndOffset** position of the scroll container component
   * > when scrolling ends.
   * >
   * > - When **contentStartOffset** or **contentEndOffset** is set for the scroll container component and
   * > **ScrollAlign** is set to **AUTO**, no adjustment is made if the specified item is completely within the display
   * > area. Otherwise, based on the principle of the shortest scrolling distance, the head of the specified item is
   * > aligned with the **contentStartOffset** position of the scroll component, or the tail of the specified item is
   * > aligned with the **contentEndOffset** position of the scroll component, so that the specified item is fully
   * > displayed.
   *
   * @param { number } value - Index of the item to be scrolled to in the container.
   *     <br>**NOTE**
   *     <br>If the value set is a negative value or greater than the maximum index of the items in the container, the
   *     value is deemed abnormal, and no scrolling will be performed.
   * @param { boolean } smooth - Whether to animate scrolling to the index of a list item. The value **true** indicates
   *     that animation is used, and **false** indicates that no animation is used. When not passed, no animation is
   *     used by default.<br/>Default value: **false**. [since 7 - 11]
   * @param { ScrollAlign } align - Alignment between the element to scroll to and the current container. You can select
   *     the corresponding alignment based on whether the item is expected to be displayed at the start, end, or center.
   *     <br/>Default value: **ScrollAlign.START** for **List**, **ScrollAlign.AUTO** for **Grid**, and
   *     **ScrollAlign.START** for **WaterFlow**.<br/>**NOTE**<br/>This parameter is supported only by the **List**,
   *     **Grid**, and **WaterFlow** components. [since 7 - 11]
   * @param { boolean } [smooth] - Whether to animate scrolling to the index of a list item. The value **true**
   *     indicates that animation is used, and **false** indicates that no animation is used. When not passed, no
   *     animation is used by default.<br/>Default value: **false**. [since 12]
   * @param { ScrollAlign } [align] - Alignment between the element to scroll to and the current container. You can
   *     select the corresponding alignment based on whether the item is expected to be displayed at the start, end, or
   *     center.<br/>Default value: **ScrollAlign.START** for **List**, **ScrollAlign.AUTO** for **Grid**, and
   *     **ScrollAlign.START** for **WaterFlow**.<br/>**NOTE**<br/>This parameter is supported only by the **List**,
   *     **Grid**, and **WaterFlow** components. [since 12]
   * @param { ScrollToIndexOptions } [options] - Options for scrolling to the specified index, including the
   *     **extraOffset** field, which specifies the extra offset after scrolling.<br/>When not passed, there is no extra
   *     offset.<br/> [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollToIndex(value: number, smooth?: boolean, align?: ScrollAlign, options?: ScrollToIndexOptions);

  /**
   * Scrolls by the specified amount.
   *
   * > **NOTE**
   * >
   * > - This API is available for the **ArcList**, **Scroll**, **List**, **Grid**, and **WaterFlow** components.
   * >
   * > - Component behavior varies:
   * >
   * > - The [ArcList]{@link @ohos.arkui.ArcList} and [List]{@link ./list} components load and lay out all items that
   * > are passed through.
   * >
   * > - The **Grid** components and the **WaterFlow** components in [SLIDING_WINDOW]{@link WaterFlowLayoutMode} mode
   * > directly estimate the items to be displayed when the jump distance is large (greater than twice the component
   * > main axis height). A jump refers to a one-frame scroll.
   * >
   * > - The **WaterFlow** components in [ALWAYS_TOP_DOWN]{@link WaterFlowLayoutMode} mode load and lay out all items
   * > passed through when jumping backward (when **dx** or **dy** is positive), and jump directly to the corresponding
   * > position when jumping forward (when **dx** or **dy** is negative). A jump refers to a one-frame scroll.
   *
   * @param { Length } dx - Amount to scroll by in the horizontal direction. The percentage format is not supported.
   *     <br>Value range: (-∞, +∞).
   * @param { Length } dy - Amount to scroll by in the vertical direction. The percentage format is not supported.
   *     <br>Value range: (-∞, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  scrollBy(dx: Length, dy: Length);

  /**
   * Checks whether the component has scrolled to the bottom.
   *
   * > **NOTE**
   * >
   * > This API is available for the **ArcList**, **Scroll**, **List**, **Grid**, and **WaterFlow** components.
   *
   * @returns { boolean } The value **true** means that the component has scrolled to the bottom, and **false** means
   *     the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isAtEnd(): boolean;

  /**
   * Obtains the size and position of a child component relative to its container.
   *
   * > **NOTE**
   * >
   * > This API is available for the **ArcList**, **Scroll**, **List**, **Grid**, and **WaterFlow** components.
   *
   * @param { number } index - Index of the target child component.
   * @returns { RectResult } Size and position of the child component relative to the component.
   *     <br>Unit: vp
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getItemRect(index: number): RectResult;

  /**
   * Obtains the index of a child component based on coordinates.
   *
   * > **NOTE**
   * >
   * > This API is available for the **List**, **Grid**, and **WaterFlow** components.
   *
   * @param { number } x - X-coordinate, in vp.
   * @param { number } y - Y-coordinate, in vp.
   * @returns { number } Index of the child component hit by the coordinates. If the coordinates do not hit any child
   *     component, **-1** is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getItemIndex(x: number, y: number): number;

  /**
   * Obtains the content size.
   *
   * @returns { SizeResult } Total size of the scrollable component's content, including the content width and height.
   *     <br>Unit: vp
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  contentSize(): SizeResult;

  /**
   * Obtains the FrameNode corresponding to this scroller.
   *
   * @returns { FrameNode | undefined } Returns the FrameNode bound to this scroller.
   *     If the scroller is not bound to a component, the return value is undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getFrameNode(): FrameNode | undefined;
}

/**
 * Provides parameters for scrolling to a specific position in a scrollable container.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ScrollOptions {

  /**
   * Horizontal scrolling offset.
   * Anonymous Object Rectification.
   *
   * <p><strong>NOTE</strong>
   * <br>This parameter cannot be set in percentage.
   * <br>This parameter takes effect only when the scroll axis is the x-axis.
   * <br>Value range: Values less than 0 are treated as 0, and scrolling occurs without animation.
   * Animated scrolling stops at the starting position by default.
   * By setting the **animation** parameter, you can enable a bounce effect when the scrolling
   * goes beyond the boundary.
   * <br>If the parameter type is number, the unit is vp.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  xOffset: number | string;

  /**
   * Vertical scrolling offset.
   * Anonymous Object Rectification.
   *
   * <p><strong>NOTE</strong>
   * <br>This parameter cannot be set in percentage.
   * <br>This parameter takes effect only when the scroll axis is the y-axis.
   * <br>Value range: Values less than 0 are treated as 0, and scrolling occurs without animation.
   * Animated scrolling stops at the starting position by default.
   * By setting the **animation** parameter, you can enable a bounce effect when the scrolling
   * goes beyond the boundary.<br>If the parameter type is number, the unit is vp.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  yOffset: number | string;

  /**
   * Animation configuration
   * Anonymous Object Rectification.
   *
   * <p><strong>NOTE</strong>
   * <br>Currently, the <em>List</em>, <em>Scroll</em>, <em>Grid</em>, and <em>WaterFlow</em>
   * support the <em>Boolean</em> type and <em>ICurve</em>.
   * </p>
   *
   *     parameters
   *     and the boolean type enables default spring animation. [since 10 - 11]
   *     and the boolean type enables default spring animation. [since 12]
   * @default ScrollAnimationOptions: { duration: 1000, curve: Curve.Ease, canOverScroll: false } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  animation?: ScrollAnimationOptions | boolean;

  /**
   * Set whether the scroll target position can over the boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  canOverScroll?: boolean;
}

/**
 * Provides parameters for page scrolling behavior.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface ScrollPageOptions {

  /**
   * Whether to turn to the next page.The value true means to scroll to the next page,
   * and false means to scroll to the previous page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  next: boolean;

  /**
   * Whether to enable the page-turning animation.The value true means to enable the page-turning animation,
   * and false means the opposite.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  animation?: boolean;
}

/**
 * Defines a scroll snapping mode object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ScrollSnapOptions {

  /**
   * Alignment mode for the scroll snap position.
   *
   * @default ScrollSnapAlign.NONE [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  snapAlign: ScrollSnapAlign;

  /**
   * Pagination points for scroll snapping.
   *
   * <p><strong>NOTE</strong>
   * <br>1. If the value is of the Dimension type, it indicates the size of each page,
   * and the system will paginate based on this size.
   * <br>2. If the value is of the Array\<Dimension\> type, each <em>Dimension</em> represents a pagination point,
   * and the system will paginate accordingly.
   * Each <em>Dimension</em> value must be within the [0, scrollable distance] range.
   * <br>3. If this parameter is not set or <em>Dimension</em> is set to a value less than or equal to 0,
   * the value is regarded as an invalid value.
   * In this case, there is no scroll snapping. When the value is of the Array\<Dimension\> type,
   * the items in the array must be monotonically increasing.
   * <br>4. When the value is a percentage,
   * the actual size is the product of the viewport of the <em>Scroll</em> component and the percentage value.
   * </p>
   *
   * @default 100%
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  snapPagination?: Dimension | Array<Dimension>;

  /**
   * Whether to enable the snap to start feature. When scroll snapping is defined for the <em>Scroll</em> component,
   * setting this parameter to <em>false</em> enables the component to scroll between the start and the first page.
   *
   * <p><strong>NOTE</strong>
   * <br>1. Default value: <em>true</em>
   * <br>2. This attribute takes effect only when <em>snapPagination</em>
   * is set to a value of the <em>Array\<Dimension\></em> type;
   * it does not work with values of the <em>Dimension</em> type.
   * </p>
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableSnapToStart?: boolean;

  /**
   * Whether to enable the snap to end feature. When scroll snapping is defined for the <em>Scroll</em> component,
   * setting this parameter to <em>false</em> enables the component to scroll between the end and the last page.
   *
   * <p><strong>NOTE</strong>
   * <br>1. Default value: <em>true</em>
   * <br>2. This attribute takes effect only when <em>snapPagination</em>
   * is set to a value of the <em>Array\<Dimension\></em> type;
   * it does not work with values of the <em>Dimension</em> type.
   * </p>
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableSnapToEnd?: boolean;
}

/**
 * A scrollable container component. When the layout size of a child component exceeds the size of its parent component,
 * the content can be scrolled. It supports setting the scroll direction, scroll bar, edge effect, nested scroll, and
 * free scroll zoom, and is suitable for scenarios where the content exceeds the display area or complex scroll
 * interactions are required.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ScrollInterface {

  /**
   * Creates a **Scroll** component.
   *
   * @param { Scroller } scroller - Controller of the scrollable component. It is used to bind to the scrollable
   *     component and control scrolling through the controller APIs. When not passed, the Scroll component cannot be
   *     controlled through the controller APIs.<br/>**NOTE**<br/>It is not allowed to bind the same scroll control
   *     object to other scrollable components, such as [ArcList]{@link @ohos.arkui.ArcList}, [List]{@link ./list},
   *     [Grid]{@link ./grid}, [Scroll]{@link ./scroll}, and [WaterFlow]{@link ./water_flow}.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (scroller?: Scroller): ScrollAttribute;
}

/**
 * Represents the callback triggered when scrolling reaches an edge.
 *
 * @param { Edge } side - Edge position to scroll to. In vertical scroll, **Edge.Top** and **Edge.Start** indicate the
 *     start edge, and **Edge.Bottom** and **Edge.End** indicate the end edge. In horizontal scroll, **Edge.Center**
 *     indicates the start position in the horizontal direction, and **Edge.Baseline** indicates the end position in the
 *     horizontal direction.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnScrollEdgeCallback = (side: Edge) => void;

/**
 * Represents the actual scroll offset relative to the previous frame returned by
 * [OnScrollFrameBeginCallback]{@link OnScrollFrameBeginCallback}.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface OnScrollFrameBeginHandlerResult {

  /**
   * Actual scroll offset relative to the previous frame.<br>Unit: vp
   * Anonymous Object Rectification.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  offsetRemain: number;
}

/**
 * Represents the callback triggered before each frame scrolling starts.
 *
 * @param { number } offset - Amount to scroll by, in vp.
 * @param { ScrollState } state - Current scroll state. Idle indicates the idle state, Scroll indicates the scroll
 *     state, and Fling indicates the inertial scroll state.
 * @returns { OnScrollFrameBeginHandlerResult } Actual scroll amount. The **Scroll** component will scroll based on the
 *     **offsetRemain** in the return value.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnScrollFrameBeginCallback = (offset: number, state: ScrollState) => OnScrollFrameBeginHandlerResult;

/**
 * In addition to [universal attributes]{@link ./common} and
 * [scrollable component common attributes]{@link ScrollableCommonMethod},
 * the following attributes are also supported.
 *
 * In addition to [universal events]{@link ./common} and
 * [scrollable component common events]{@link ScrollableCommonMethod},
 * the following events are also supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class ScrollAttribute extends ScrollableCommonMethod<ScrollAttribute> {

  /**
   * Sets the scroll direction. After this value is modified, the scroll offset is reset. You can select vertical
   * scroll, horizontal scroll, or free scroll based on the layout.
   *
   * @param { ScrollDirection } value - Scrolling direction.
   *     <br>Default value: **ScrollDirection.Vertical**
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollable(value: ScrollDirection): ScrollAttribute;

  /**
   * Sets the maximum gesture-based zoom scale for the **Scroll** component's content.
   *
   * @param { number } scale - Maximum gesture-based zoom scale for the **Scroll** component's content.
   *     <br>Default value: **1**.
   *     <br>Value range: (0, +∞). If the value is less than or equal to 0, the default value 1 is used.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  maxZoomScale(scale: number): ScrollAttribute;

  /**
   * Sets the minimum gesture-based zoom scale for the **Scroll** component's content.
   *
   * @param { number } scale - Minimum gesture-based zoom scale for the **Scroll** component's content.
   *     <br>Default value: **1**.
   *     <br>Value range: (0, maxZoomScale]. If the value is less than or equal to 0, the default value **1** is used.
   *     If the value is greater than **maxZoomScale**, **maxZoomScale** is used.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  minZoomScale(scale: number): ScrollAttribute;

  /**
   * Sets the zoom scale of the **Scroll** component's content.
   *
   * @param { number } scale - Zoom scale of the **Scroll** component's content. This parameter supports two-way binding
   *     through [!!](docroot://ui/state-management/arkts-new-binding.md).
   *     <br>Default value: **1**.
   *     <br>Value range: (0, +∞). If the value is less than or equal to 0, the default value 1 is used.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  zoomScale(scale: number): ScrollAttribute;

  /**
   * Sets whether to enable the zoom bounce effect.
   *
   * @param { boolean } enable - Whether to enable the zoom bounce effect. When the user zooms beyond the maximum or
   *     minimum zoom ratio, the content bounces back to the maximum or minimum zoom ratio after the gesture is
   *     released. The value **true** means to enable the effect, and **false** means to disable it.
   *     <br>Default value: **true**
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableBouncesZoom(enable: boolean): ScrollAttribute;

  /**
   * Triggered to return the horizontal and vertical offsets, in vp, during scrolling when the specified scroll event
   * occurs.
   *
   * Trigger conditions:
   *
   * 1. Triggered when the scroll component triggers scrolling. It supports keyboard and mouse operations and other
   * input settings that trigger scrolling.
   * 2. The scroll controller API is called.
   * 3. The out-of-bounds bounce effect is active.
   *
   * @param { function } event - callback when scroll,
   *     xOffset: Actual scroll offset relative to the previous frame.
   *     <br>Unit: vp
   *     yOffset: Vertical offset relative to the previous frame.
   *     A positive offset indicates scrolling upward, and a negative offset indicates scrolling downward.
   *     <br>Unit: vp
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   * @useinstead scroll/Scroll#onWillScroll
   */
  onScroll(event: (xOffset: number, yOffset: number) => void): ScrollAttribute;

  /**
   * Triggered before scrolling.
   *
   * The callback provides the amount of offset that is about to be scrolled in the current frame, along with the
   * current scroll status and the source of the scrolling operation. The offset provided in the callback is the
   * calculated intended scrolling offset, not the final actual scrolling offset. You can specify the intended scrolling
   * offset for the **Scroll** through the return value of this callback.
   *
   * Trigger conditions:
   *
   * 1. Triggered when the scroll component triggers scrolling. It supports keyboard and mouse operations and other
   * input settings that trigger scrolling.
   * 2. The scroll controller API is called.
   * 3. The out-of-bounds bounce effect is active.
   *
   * > **NOTE**
   * >
   * > The scrolling event callback is triggered frequently during scrolling. To avoid frame freezing or dropped frames,
   * > do not perform time-consuming operations in this callback. For best practices, see
   * > [High-Frequency Callback Scenarios]
   * > (https://developer.huawei.com/consumer/en/doc/best-practices/bpta-time-optimization-of-the-main-thread
   * > #section10112623611).
   *
   * @param { ScrollOnWillScrollCallback } handler - Callback triggered before scrolling.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillScroll(handler: ScrollOnWillScrollCallback): ScrollAttribute;

  /**
   * Triggered when the **Scroll** component scrolls.
   *
   * The return value is the scrolling offset amount in the current frame, along with the current scroll state.
   *
   * Trigger conditions:
   *
   * 1. Triggered when the scroll component triggers scrolling. It supports keyboard and mouse operations and other
   * input settings that trigger scrolling.
   * 2. The scroll controller API is called.
   * 3. The out-of-bounds bounce effect is active.
   *
   * @param { ScrollOnScrollCallback } handler - Represents the callback triggered when the **Scroll** component
   *     scrolls.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidScroll(handler: ScrollOnScrollCallback): ScrollAttribute;

  /**
   * Triggered when scrolling reaches the edge.
   *
   * Trigger conditions:
   *
   * 1. Triggered when the scroll component scrolls to the edge. It supports keyboard and mouse operations and other
   * input settings that trigger scrolling.
   * 2. The scroll controller API is called.
   * 3. The out-of-bounds bounce effect is active.
   *
   * @param { function } event - Edge position to scroll to.
   *     <br>For horizontal scrolling, [Edge.Center]{@link Edge} represents the start position, and
   *     [Edge.Baseline]{@link Edge} represents the end position. Note: The enum values [Edge.Center]{@link Edge} and
   *     [Edge.Baseline]{@link Edge} are deprecated. You are advised to use the
   *     [onReachStart]{@link ScrollAttribute#onReachStart(event: () => void)} and
   *     [onReachEnd]{@link ScrollAttribute#onReachEnd(event: () => void)} to detect
   *     when the component reaches its boundary. [since 7 - 17]
   * @param { OnScrollEdgeCallback } event - Edge position to scroll to.
   *     <br>For horizontal scrolling, [Edge.Center]{@link Edge} represents the start position, and
   *     [Edge.Baseline]{@link Edge} represents the end position. Note: The enum values [Edge.Center]{@link Edge} and
   *     [Edge.Baseline]{@link Edge} are deprecated. You are advised to use the
   *     [onReachStart]{@link ScrollAttribute#onReachStart(event: () => void)} and
   *     [onReachEnd]{@link ScrollAttribute#onReachEnd(event: () => void)} to detect
   *     when the component reaches its boundary. [since 18]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onScrollEdge(event: OnScrollEdgeCallback): ScrollAttribute;

  /**
   * Triggered when scrolling starts and is initiated by the user's finger dragging the **Scroll** component or its
   * scrollbar. This event is also triggered when the animation contained in the scrolling triggered by
   * [Scroller]{@link Scroller} starts.
   *
   * Trigger conditions:
   *
   * 1. Triggered when the scroll component starts scrolling. It supports keyboard and mouse operations and other input
   * settings that trigger scrolling.
   * 2. The scroll controller API is called and then starts, with a transition animation.
   *
   * @param { function } event - Callback triggered when scrolling starts. [since 9 - 17]
   * @param { VoidCallback } event - Callback triggered when scrolling starts. [since 18]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScrollStart(event: VoidCallback): ScrollAttribute;

  /**
   * Triggered when scrolling stops.
   *
   * Trigger conditions:
   *
   * 1. Triggered when the scroll component stops after scrolling is triggered. It supports keyboard and mouse
   * operations and other input settings that trigger scrolling.
   * 2. The scroll controller API is called and then stops, with a transition animation.
   *
   * @param { function } event - Callback triggered when scrolling stops.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead scroll/Scroll#onScrollStop
   */
  onScrollEnd(event: () => void): ScrollAttribute;

  /**
   * Triggered when scrolling stops after the user's finger leaves the screen. This event is also triggered when the
   * animation contained in the scrolling triggered by [Scroller]{@link Scroller} stops.
   *
   * Trigger conditions:
   *
   * 1. Triggered when the scroll component stops after scrolling is triggered. It supports keyboard and mouse
   * operations and other input settings that trigger scrolling.
   * 2. The scroll controller API is called and then starts, with a transition animation.
   *
   * @param { function } event - Callback triggered when scrolling stops. [since 9 - 17]
   * @param { VoidCallback } event - Callback triggered when scrolling stops. [since 18]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScrollStop(event: VoidCallback): ScrollAttribute;

  /**
   * Triggered when the zoom operation of each frame is completed.
   *
   * @param { ScrollOnDidZoomCallback } event - Callback triggered when the zoom operation of each frame is completed.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDidZoom(event: ScrollOnDidZoomCallback): ScrollAttribute;

  /**
   * Triggered when a zoom gesture starts.
   *
   * @param { VoidCallback } event - Callback triggered when the zoom gesture starts.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onZoomStart(event: VoidCallback): ScrollAttribute;

  /**
   * Triggered when a zoom gesture stops.
   *
   * @param { VoidCallback } event - Callback triggered when the zoom gesture stops.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onZoomStop(event: VoidCallback): ScrollAttribute;

  /**
   * Sets the scroll bar state. If the container component cannot scroll, the scroll bar is not displayed. If the size
   * of the child component of the container component is infinite, the scroll bar does not support dragging and
   * accompanying scrolling. This attribute can be used to control whether the scroll bar is always displayed,
   * automatically displayed, or hidden.
   *
   * Since API version 10, when the scrollable component has rounded corners, to prevent the scrollbar from being cut
   * off by the corners, the scrollbar will automatically calculate the clearance distance from the top and bottom.
   *
   * @param { BarState } barState - Scrollbar state.
   *     <br>Default value: **BarState.Auto**
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBar(barState: BarState): ScrollAttribute;

  /**
   * Sets the scrollbar color.
   *
   * @param { Color | number | string } color - Scrollbar color.
   *     <br>Default value: **'#66182431'**
   *     <br>A number value indicates a HEX color in RGB or ARGB format, value range: [0x0, 0xFFFFFFFF], for example,
   *     **0xffffff**.
   *     <br>A string value indicates a color in RGB or ARGB format, for example, **'#ffffff'**.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBarColor(color: Color | number | string): ScrollAttribute;

  /**
   * Sets the scrollbar color. Compared with
   * [scrollBarColor]{@link ScrollAttribute#scrollBarColor(color: Color | number | string)}, this API supports the
   * Resource type for the **color** parameter.
   *
   * @param { Color | number | string | Resource } color - Scrollbar color.<br/>Default value: **'#66182431'**<br/>A
   *     number value indicates a HEX color in RGB or ARGB format, with a value range of [0x0, 0xFFFFFFFF], for example,
   *     **0xffffff**. A string value indicates a color in RGB or ARGB format, for example, **'#ffffff'**.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  scrollBarColor(color: Color | number | string | Resource): ScrollAttribute;

  /**
   * Sets the width of the scroll bar. Percentage values are not supported. After the width is set, the scroll bar width
   * in both the normal state and the pressed state is the set value. If the scroll bar width exceeds the visible size
   * of the **Scroll** component along the main axis, the default value of 4 vp is used.
   *
   * @param { number | string } value - Width of the scrollbar.<br/>Default value: **4**<br/>Unit: vp <br/>Value range:
   *     If the value is less than 0, the default value 4 vp is used. If the value is 0, the scrollbar is not displayed.
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBarWidth(value: number | string): ScrollAttribute;

  /**
   * Sets the width of the scrollbar. Percentage values are not supported. After the width is set, the scrollbar width
   * in both the normal state and the pressed state is the set value. If the scrollbar width exceeds the visible size of
   * the **Scroll** component along the main axis, the scrollbar width changes to the default value of 4 vp. Resource
   * type is supported.
   *
   * If this attribute is not set, the scrollbar width is 4 vp.
   *
   * @param { number | string | Resource } value - Scrollbar width.<br/>Default value: **4**<br/>Unit: vp <br/>The value
   *     range is
   *     [0, +∞). If this parameter is set to a value less than 0, the default value **4vp** is used. The value **0**
   *     means not to show the scrollbar.
   * @returns { ScrollAttribute  }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollBarWidth(value: number | string | Resource): ScrollAttribute;

  /**
   * Sets the effect used when the scroll boundary is reached.
   *
   * @param { EdgeEffect } edgeEffect - Effect used when the scroll boundary is reached. The spring and shadow effects
   *     are supported.
   *     <br>Default value: **EdgeEffect.None**
   * @param { EdgeEffectOptions } options - Whether to enable the effect when the component content is smaller than the
   *     component itself. The value **{ alwaysEnabled: true }** enables the sliding effect, and
   *     **{ alwaysEnabled: false }** disables it. When not passed, the default value is used.<br/>Default value:
   *     **{ alwaysEnabled: true }**<br/> [since 11]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions): ScrollAttribute;

  /**
   * Triggered at the beginning of each scroll frame. The event parameter provides the pending scroll offset. The event
   * handler can calculate the actual scroll amount based on the use case and return this value as its result. The
   * **Scroll** component then scrolls according to the returned actual scroll amount.
   *
   * The value of [offsetRemain]{@link OnScrollFrameBeginHandlerResult} can be negative.
   *
   * If the **onScrollFrameBegin** event and [scrollBy]{@link Scroller#scrollBy} method are used to implement nested
   * scrolling, set the [EdgeEffect]{@link ScrollAttribute#edgeEffect} attribute of the scrollable child component to
   * **None**. For example, if a **List** component is nested in the **Scroll** container,
   * [edgeEffect]{@link ListAttribute#edgeEffect} of the **List** component must be set to **EdgeEffect.None**.
   * Otherwise, swiping the **List** triggers its edge bounce animation, which results in failed nested scrolling.
   *
   * This event is triggered when any of the following conditions is met:
   *
   * 1. Scrolling is initiated by user interaction (for example, finger swipe, keyboard, or mouse operation).
   * 2. The **Scroll** component scrolls by inertia.
   * 3. Scrolling is triggered by calling the [fling]{@link Scroller#fling} API.
   *
   * This event is not triggered when any of the following conditions is met:
   *
   * 1. A scroll control API other than [fling]{@link Scroller#fling} is called.
   * 2. The out-of-bounds bounce effect is active.
   * 3. The scrollbar is dragged.
   *
   * @param { function } event - Callback triggered when each frame scrolling starts. [since 9 - 17]
   * @param { OnScrollFrameBeginCallback } event - Callback triggered when each frame scrolling starts. [since 18]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScrollFrameBegin(event: OnScrollFrameBeginCallback): ScrollAttribute;

  /**
   * Sets the nested scroll mode in both forward and backward directions to implement scroll linkage with the parent
   * component. It is applicable to nested scroll scenarios such as linkage between a list in a page and an outer scroll
   * area.
   *
   * @param { NestedScrollOptions } value - Nested scroll options, used to configure the nested scroll modes in the
   *     forward and backward directions, including the **scrollForward** (forward scroll mode) and **scrollBackward** (
   *     backward scroll mode) fields. **NestedScrollMode.SELF_ONLY** indicates that only the component itself scrolls,
   *     **NestedScrollMode.SELF_FIRST** indicates that the component itself scrolls first,
   *     **NestedScrollMode.PARENT_FIRST** indicates that the parent component scrolls first, and
   *     **NestedScrollMode.PARALLEL** indicates that the component itself and the parent component scroll
   *     simultaneously.<br/>Default value:
   *     **{ scrollForward: NestedScrollMode.SELF_ONLY, scrollBackward: NestedScrollMode.SELF_ONLY }**<br/>When
   *     **Scroll** sets [enablePaging]{@link ScrollAttribute#enablePaging} or
   *     [scrollSnap]{@link ScrollAttribute#scrollSnap} and also sets parent-first nested scroll, the nested scroll does
   *     not take effect.
   * @returns { ScrollAttribute } the attribute of the scroll.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nestedScroll(value: NestedScrollOptions): ScrollAttribute;

  /**
   * Sets whether to support scroll gestures. It can be used to temporarily disable user gesture scrolling of the scroll
   * component in scenarios where services such as custom dragging and custom scrolling need to take over the swipe
   * gesture.
   *
   * @param { boolean } value - Whether to enable scroll gestures. With the value **true**, scrolling via finger or
   *     mouse is enabled. With the value **false**, scrolling via finger or mouse is disabled, but this does not affect
   *     the scrolling APIs of the [Scroller]{@link Scroller}.
   *     <br>Default value: **true**
   * @returns { ScrollAttribute } The attribute of the scroll
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScrollInteraction(value: boolean): ScrollAttribute;

  /**
   * Sets the friction coefficient. It takes effect when the scroll area is swiped, and affects only the inertial
   * scrolling process. It has an indirect impact on the chained effect during inertial scrolling.
   *
   * @param { number | Resource } value - Friction coefficient.
   *     <br>Default value: **0.9** for wearable devices and **0.6** for non-wearable devices
   *     <br>Since API version 11, the default value for non-wearable devices is **0.7**.
   *     <br>Since API version 12, the default value for non-wearable devices is **0.75**.
   *     <br>Value range: (0, +∞). If the value is less than or equal to 0, the default value is used.
   * @returns { ScrollAttribute } the attribute of the scroll.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  friction(value: number | Resource): ScrollAttribute;

  /**
   * Sets the scroll snap mode of the **Scroll** component, which is used to implement scenarios such as paging scroll
   * and card alignment that require positioning to a specified position after scrolling ends.
   *
   * During the snap animation, the scroll operation source type reported by the
   * [onWillScroll]{@link ScrollAttribute#onWillScroll} event is **ScrollSource.FLING**.
   *
   * @param { ScrollSnapOptions } value - Scroll snap mode of the **Scroll** component. This object contains attributes
   *     such as **snapAlign** (alignment), **snapPagination** (pagination), **enableSnapToStart** (whether to snap to
   *     the start), and **enableSnapToEnd** (whether to snap to the end).
   * @returns { ScrollAttribute } the attribute of the scroll.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scrollSnap(value: ScrollSnapOptions): ScrollAttribute;

  /**
   * Sets whether to enable swipe paging. If both swipe paging (**enablePaging**) and **scrollSnap** are set,
   * **scrollSnap** takes effect first and **enablePaging** does not take effect. This attribute can be used in
   * scenarios such as book page turning and card paging browsing.
   *
   * @param { boolean } value - Whether to support swipe paging. The value **true** means that swipe paging is
   *     supported, and **false** means the opposite. <br/>Default value: **false**
   * @returns { ScrollAttribute } the attribute of the scroll.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enablePaging(value: boolean): ScrollAttribute;

  /**
   * Sets the initial scroll offset. It takes effect only during the first layout, and subsequent dynamic changes to
   * this attribute value do not take effect. It can be used to locate a specified scroll position when the page is
   * displayed for the first time.
   *
   * @param { OffsetOptions } value - Initial scrolling offset. When the value specified is a percentage, the initial
   *     scrolling offset is calculated as the product of the **Scroll** component's size in the main axis direction and
   *     the percentage value.
   * @returns { ScrollAttribute } the attribute of the scroll.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  initialOffset(value: OffsetOptions): ScrollAttribute;
}

/**
 * Represents the callback triggered when the **Scroll** component scrolls.
 *
 * @param { number } xOffset - Horizontal offset relative to the previous frame. A positive offset indicates scrolling
 *     to the left, and a negative offset indicates scrolling to the right.
 *     <br>Unit: vp
 * @param { number } yOffset - Vertical offset relative to the previous frame. A positive offset indicates scrolling
 *     upward, and a negative offset indicates scrolling downward.
 *     <br>Unit: vp
 * @param { ScrollState } scrollState - Current scroll state. Idle indicates the idle state, Scroll indicates the
 *     scrolling state, and Fling indicates the inertial scroll state.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ScrollOnScrollCallback = (xOffset: number, yOffset: number, scrollState: ScrollState) => void;

/**
 * Callback triggered before scrolling.
 *
 * @param { number } xOffset - Horizontal offset relative to the previous frame. A positive offset indicates scrolling
 *     to the left, and a negative offset indicates scrolling to the right.
 *     <br>Unit: vp
 * @param { number } yOffset - Vertical offset relative to the previous frame. A positive offset indicates scrolling
 *     upward, and a negative offset indicates scrolling downward.
 *     <br>Unit: vp
 * @param { ScrollState } scrollState - Current scroll state. **Idle** indicates the idle state, **Scroll** indicates
 *     the scroll state, and **Fling** indicates the inertial scroll state.
 * @param { ScrollSource } scrollSource - Source of the current scroll operation. **DRAG** indicates that the scroll is
 *     triggered by dragging, **FLING** indicates that the scroll is triggered by inertial sliding, **SCROLLER**
 *     indicates that the scroll is triggered by a Scroller method without animation, and **SCROLLER_ANIMATION**
 *     indicates that the scroll is triggered by a Scroller method with animation.
 * @returns { void | OffsetResult } If **OffsetResult** is returned, the scrolling will be performed with the offsets
 *     specified. Otherwise, the scrolling will be performed with the offsets determined by **(xOffset, yOffset)**.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ScrollOnWillScrollCallback =
 (xOffset: number, yOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | OffsetResult;

/**
 * Defines the callback triggered when the scroll scaling of each frame is complete.
 *
 * @param { number } scale - Current scale factor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type ScrollOnDidZoomCallback = (scale: number) => void;

/**
 * A scrollable container component. When the layout size of a child component exceeds the size of its parent component,
 * the content can be scrolled. It supports setting the scroll direction, scroll bar, edge effect, nested scroll, and
 * free scroll zoom, and is suitable for scenarios where the content exceeds the display area or complex scroll
 * interactions are required.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Scroll: ScrollInterface;

/**
 * Defines Scroll Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ScrollInstance: ScrollAttribute;
