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
 * @file
 * @kit ArkUI
 */

/**
 * Represents the callback triggered when a child component enters or leaves the visible area of the **ArcList**
 * component.
 *
 * @param { number } start - Index of the first child component in the visible area of the **ArcList** component.
 * @param { number } end - Index of the last child component in the visible area of the **ArcList** component.
 * @param { number } center - Index of the center child component in the visible area of the **ArcList** component.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ArcScrollIndexHandler = (start: number, end: number, center: number) => void;

/**
 * Provides basic parameters for creating an **ArcList** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ArkListOptions {

  /**
   * Index value of the item displayed at the start position of the viewport when **ArcList** is initially loaded.
   *
   * Default value: **0**
   *
   * **Note:** If the value is set to a negative number or exceeds the index value of the last item in the current
   * **ArcList**, it is considered invalid, and the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  initialIndex?: number;

  /**
   * Controller of the scrollable component. After being bound to **ArcList**, it can be used to control the scrolling
   * of **ArcList**. If not set, no scroll controller is bound.
   *
   * **Note:** It is not allowed to bind the same scroll control object with other scrollable components, such as
   * [List]{@link ./@internal/component/ets/list},
   * [Grid]{@link ./@internal/component/ets/grid},
   * [Scroll]{@link ./@internal/component/ets/scroll}, and
   * [WaterFlow]{@link ./@internal/component/ets/water_flow}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  scroller?: Scroller;

  /**
   * Header component of **ArcList**, used to display a title or custom content at the top of the list. If not set, no
   * header component is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  header?: ComponentContent;
}

/**
 * An arc list consists of a series of list items arranged along an arc, suitable for circular screen devices. It is
 * ideal for continuously presenting multiple rows of similar data, such as images and text.
 *
 * > **NOTE**
 * >
 * > - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. In API version 22 and
 * > earlier versions, a compilation warning will be reported when this component is used on phones, PCs, 2-in-1
 * > devices, tablets, and TVs, but the component can still run properly.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface ArcListInterface {

  /**
   * Creates an **ArcList** component instance with specified configuration options.
   *
   * @param { ArkListOptions } [options] - Configuration options for the arc list, used to set the initial loading
   *     position, scroll controller, and header component.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  (options?: ArkListOptions): ArcListAttribute;
}

/**
 * The **ArcListItem** component is used to display individual child components in an
 * [ArcList]{@link @ohos.arkui.ArcList} component and must be used in conjunction with **ArcList**.
 *
 * > **NOTE**
 *
 * > - This component can be used only as a child of [ArcList]{@link @ohos.arkui.ArcList}.
 * >
 * > - When this component is used with
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are
 * > created when it is created. When this component is used with
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) or
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is
 * > [ArcList]{@link @ohos.arkui.ArcList}, its child components are created when it is laid out.
 * >
 * > - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. In API version 22 and
 * > earlier versions, a compilation warning will be reported when this component is used on phones, PCs, 2-in-1 devices
 * > , tablets, and TVs, but the component can still run properly.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export interface ArcListItemInterface {

  /**
   * Creates an item for the **ArcList** component.
   *
   * @returns { ArcListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  (): ArcListItemAttribute;
}

/**
 * In addition to the
 * [universal attributes]{@link common}, the following
 * attributes are supported (the
 * [scrollable component common attributes]{@link common:ScrollableCommonMethod}
 * are not supported):
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare class ArcListAttribute extends CommonMethod<ArcListAttribute> {

  /**
   * Sets the crown response sensitivity.
   *
   * @param { Optional<CrownSensitivity> } sensitivity - Crown response sensitivity.
   *     <br>Default value: **CrownSensitivity.MEDIUM**, which indicates a moderate response speed.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): ArcListAttribute;

  /**
   * Sets the spacing between list child items.
   *
   * @param { Optional<LengthMetrics> } space - Spacing between child components in the list.
   *     <br>Default value: **LengthMetrics.vp(0)**
   *     <br>When the
   *     [visibility]{@link common:CommonMethod#visibility}
   *     attribute of an **ArcList** child component is set to **None**, the child component is not displayed, but the
   *     **space** above and below it still takes effect.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  space(space: Optional<LengthMetrics>): ArcListAttribute;

  /**
   * Sets the state of the scrollbar.
   *
   * @param { Optional<BarState> } status - Scroll bar status.
   *     <br>Default value: **BarState.Auto**
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  scrollBar(status: Optional<BarState>): ArcListAttribute;

  /**
   * Sets the color of the scrollbar.
   *
   * @param { Optional<ColorMetrics> } color - Scrollbar color.
   *     <br>Default value: **ColorMetrics.numeric(0xA9FFFFFF)**
   *     <br>The abnormal values **undefined** and **null** are treated as invalid values, and this setting does not
   *     take effect.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  scrollBarColor(color: Optional<ColorMetrics>): ArcListAttribute;

  /**
   * Sets the width of the **ArcList** scrollbar in the pressed state. If not set, the pressed state width is
   * **LengthMetrics.vp(24)**. The non-pressed state width is fixed at **LengthMetrics.vp(4)** and is not affected by
   * this attribute.
   *
   * @param { Optional<LengthMetrics> } width - Width of the **ArcList** scrollbar in the pressed state.
   *     <br>Default value: **LengthMetrics.vp(24)**
   *     <br>Width in the unpressed state: **LengthMetrics.vp(4)**
   *     <br>If this parameter is set to an abnormal value such as a negative value or **undefined**, the width of the
   *     scrollbar in the normal state is used.
   *     <br>Unit: vp
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  scrollBarWidth(width: Optional<LengthMetrics>): ArcListAttribute;

  /**
   * Sets the number of arc list items to be preloaded (cached). In a lazy loading scenario, only the content equivalent
   * to **cachedCount** outside the visible area of the arc list is preloaded. In a non-lazy loading scenario, all items
   * are loaded at once. For both lazy and non-lazy loading, only the content within the visible area of the arc list
   * plus the content equivalent to **cachedCount** outside the visible area is laid out.
   *
   * @param { Optional<number> } count - Number of **ArcListItem** items to preload.
   *     <br>Default value: set based on the number of nodes displayed on the screen, with a maximum of 16.
   *     <br>Value range: [0, +∞)
   *     <br>If this parameter is set to a negative number, **1** is used.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  cachedCount(count: Optional<number>): ArcListAttribute;

  /**
   * Sets whether to enable chained animations, which provide a visually connected, or "chained," effect when the
   * **ArcList** component is scrolled or its top or bottom edge is dragged.
   *
   * The list items are separated with even space, and one item animation starts after the previous animation during
   * basic sliding interactions. The chained animation effect is similar with spring physics.
   *
   * @param { Optional<boolean> } enable - Whether to enable the chained linkage effect. The chained linkage effect
   *     takes effect only when the edge effect is
   *     [EdgeEffect.Spring]{@link ./@internal/component/ets/enums:EdgeEffect.Spring}.
   *     <br>Default value: **false**, the chained linkage is not enabled; **true**, the chained linkage is enabled.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  chainAnimation(enable: Optional<boolean>): ArcListAttribute;

  /**
   * Sets the size information of the child components of the **ArcList** component along the main axis.
   *
   * @param { Optional<ChildrenMainSize> } size - Provides precise size information of all child components in the main
   *     axis direction to the **ArcList** component through the
   *     [ChildrenMainSize]{@link common:ChildrenMainSize}
   *     object. This ensures that the **ArcList** component can maintain the accuracy of its scroll position in
   *     scenarios such as inconsistent child component main axis sizes, addition or removal of child components, and
   *     when using [scrollToIndex]{@link ./@internal/component/ets/scroll:Scroller#scrollToIndex}. It
   *     further guarantees that [scrollTo]{@link ./@internal/component/ets/scroll:Scroller#scrollTo} can
   *     accurately jump to the specified position,
   *     [currentOffset]{@link ./@internal/component/ets/scroll:Scroller#currentOffset} or
   *     [offset]{@link ./@internal/component/ets/scroll:Scroller#offset} accurately reflects the
   *     current scroll position, and the built-in scrollbar can move smoothly without any jumps or abrupt changes.
   *     Since API version 23, the **offset** API is added.
   *     <br> **NOTE**
   *     <br>The provided main axis size must be consistent with the actual main axis size of the child components.
   *     Otherwise, the **ArcList** component may display abnormally. When the main axis size of a child component
   *     changes or when child components are added or removed, the **ArcList** component must be notified of the
   *     changes by calling the methods of the **ChildrenMainSize** object. Otherwise, the **ArcList** component may
   *     display abnormally.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  childrenMainSize(size: Optional<ChildrenMainSize>): ArcListAttribute;

  /**
   * Sets whether to enable scroll gestures.
   *
   * @param { Optional<boolean> } enable - Whether to support the scroll gesture. When set to **true**, the list can be
   *     scrolled by finger or mouse. When set to **false**, the list cannot be scrolled by finger or mouse, but the
   *     scrolling API of the [Scroller]{@link ./@internal/component/ets/scroll:Scroller}
   *     controller is not affected.
   *     <br>Default value: **true**
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableScrollInteraction(enable: Optional<boolean>): ArcListAttribute;

  /**
   * Sets whether to enable the edge fading effect.
   *
   * @param { Optional<boolean> } enable - Whether to enable the edge fading effect.
   *     <br>When **fadingEdge** takes effect, it overrides the `.overlay()` attribute of the original component.
   *     <br>When **fadingEdge** takes effect, it is recommended not to set background-related attributes on this
   *     component, as they may affect the fading display effect.
   *     <br>When **fadingEdge** takes effect, the component is clipped to the boundary, and setting the component's
   *     [clip]{@link common:CommonMethod#clip} attribute to
   *     **false** does not take effect.
   *     <br>The value **true** enables the edge fading effect, and **false** disables it.
   *     <br>Default value: **false**
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fadingEdge(enable: Optional<boolean>): ArcListAttribute;

  /**
   * Sets the friction coefficient, which takes effect when manually swiping the scroll area and only affects the
   * inertial scrolling process. If the value is set to 0 or less, the default value is used.
   *
   * @param { Optional<number> } friction - Friction coefficient. It takes effect when manually swiping the scroll area
   *     and affects only the inertial scrolling process. If set to a value less than or equal to 0, the default value
   *     is used.
   *     <br>Default value: **0.8**
   *     <br>Value range: (0, +∞)
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  friction(friction: Optional<number>): ArcListAttribute;

  /**
   * Sets the maximum initial speed for inertial scrolling after a fling gesture. If this attribute is set to a value
   * less than or equal to 0, the default value is used.
   *
   * @param { Optional<number> } speed - Maximum initial speed when the inertial scrolling animation starts. If this
   *     parameter is set to a value less than or equal to 0, the default value is used.
   *     <br>Default value: **9000**
   *     <br>Unit: vp/s
   *     <br>Value range: (0, +∞)
   *     <br>The abnormal values **undefined** and **null** are treated as invalid values, and this setting does not
   *     take effect.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  flingSpeedLimit(speed: Optional<number>): ArcListAttribute;

  /**
   * Triggered when a child component enters or leaves the visible area of the **ArcList** component. This event is
   * triggered during initialization of the **ArcList** component and when the index of the first or last child
   * component in the visible area changes, or when the center child component changes.
   *
   * When the edge effect of **ArcList** is set to the spring effect, the **onScrollIndex** event is not triggered
   * during the process of continuing to swipe after the **ArcList** reaches the edge and during the spring-back process
   * after release.
   *
   * @param { Optional<ArcScrollIndexHandler> } handler - Callback triggered when a child component enters or leaves the
   *     visible area of the **ArcList** component.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onScrollIndex(handler: Optional<ArcScrollIndexHandler>): ArcListAttribute;

  /**
   * Triggered when the list reaches the start position.
   *
   * This event is triggered during initialization of the **ArcList** component if [initialIndex]{@link ArkListOptions}
   * is set to **0**, and whenever the list scrolls to the start position. If the edge scrolling effect is set to
   * spring, this event is triggered when scrolling past the start position and again when bouncing back to it.
   *
   * @param { Optional<VoidCallback> } handler - Callback triggered when the list reaches the start position.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onReachStart(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * Triggered when the list reaches the end position.
   *
   * When the edge effect of **ArcList** is set to the spring effect, this event is triggered once when swiping past the
   * end position, and triggered again when the list springs back to the end position.
   *
   * @param { Optional<VoidCallback> } handler - Callback triggered when the list reaches the end position.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onReachEnd(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * Triggered when the list starts scrolling initiated by the user's finger dragging the list or its scrollbar. This
   * event is also triggered when the animation contained in the scrolling triggered by
   * [Scroller]{@link ./@internal/component/ets/scroll:Scroller} starts.
   *
   * @param { Optional<VoidCallback> } handler - Callback triggered when the list starts scrolling.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onScrollStart(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * Triggered when the list stops scrolling after the user's finger leaves the screen. This event is also triggered
   * when the animation contained in the scrolling triggered by
   * [Scroller]{@link ./@internal/component/ets/scroll:Scroller} stops.
   *
   * @param { Optional<VoidCallback> } handler - Callback triggered when the list stops scrolling.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onScrollStop(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * Triggered before each frame during list scrolling. The callback returns the offset amount by which the list will
   * scroll and the current scroll state. The returned offset is a calculated value, not the actual offset.
   *
   * @param { Optional<OnWillScrollCallback> } handler - Callback triggered before each frame during list scrolling.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onWillScroll(handler: Optional<OnWillScrollCallback>): ArcListAttribute;

  /**
   * Triggered when the list scrolls. The return value is the offset amount by which the list has scrolled and the
   * current scroll state.
   *
   * @param { Optional<OnScrollCallback> } handler - Callback triggered when the list scrolls.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onDidScroll(handler: Optional<OnScrollCallback>): ArcListAttribute;
}

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are
 * supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare class ArcListItemAttribute extends CommonMethod<ArcListItemAttribute> {

  /**
   * Sets whether to enable auto-scaling for the **ArcListItem** component.
   *
   * @param { Optional<boolean> } enable - Whether to enable auto-scaling.<br>**true**: Enable auto-scaling.<br>
   *     **false**: Disable auto-scaling.<br>Default value: **true**.
   * @returns { ArcListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  autoScale(enable: Optional<boolean>): ArcListItemAttribute;

  /**
   * Sets the swipe action item displayed when the **ArcListItem** component is swiped out from the screen edge.
   *
   * @param { Optional<SwipeActionOptions> } options - Swipe action item displayed when the **ArcListItem** component is
   *     swiped out from the screen edge.
   * @returns { ArcListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  swipeAction(options: Optional<SwipeActionOptions>): ArcListItemAttribute;
}

/**
 * Defines ArcList Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare const ArcListInstance: ArcListAttribute;

/**
 * Defines ArcListItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare const ArcListItemInstance: ArcListItemAttribute;

/**
 * An arc list consists of a series of list items arranged along an arc, suitable for circular screen devices. It is
 * ideal for continuously presenting multiple rows of similar data, such as images and text.
 *
 * > **NOTE**
 * >
 * > - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. In API version 22 and
 * > earlier versions, a compilation warning will be reported when this component is used on phones, PCs, 2-in-1
 * > devices, tablets, and TVs, but the component can still run properly.
 *
 * ###### Child Components
 *
 * Only the [ArcListItem]{@link ArcListItem} component is supported.
 *
 * > **NOTE**
 * >
 * > Rules for calculating the index value of child components in **ArcList**:
 * >
 * > - The index value increments sequentially based on the order of child components.
 * >
 * > - In an [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) statement, only the child
 * > components in the branch where the condition is true participate in index value calculation. Child components in
 * > branches where the condition is false are not counted.
 * >
 * > - In a [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)/
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) statement, the index values of
 * > all expanded child components are calculated.
 * >
 * > - When [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), and
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) change, the child component
 * > index values are updated.
 * >
 * > - Child components of **ArcList** with the
 * > [visibility]{@link common:CommonMethod#visibility} attribute
 * > set to **Hidden** or **None** still have their index values calculated.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @uicomponent [since 19]
 * @since 18 dynamic
 * @noninterop
 */
export declare const ArcList: ArcListInterface;

/**
 * The **ArcListItem** component is used to display individual child components in an
 * [ArcList]{@link @ohos.arkui.ArcList} component and must be used in conjunction with **ArcList**.
 *
 * > **NOTE**
 *
 * > - This component can be used only as a child of [ArcList]{@link @ohos.arkui.ArcList}.
 * >
 * > - When this component is used with
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are
 * > created when it is created. When this component is used with
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) or
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is
 * > [ArcList]{@link @ohos.arkui.ArcList}, its child components are created when it is laid out.
 * >
 * > - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. In API version 22 and
 * > earlier versions, a compilation warning will be reported when this component is used on phones, PCs, 2-in-1 devices
 * > , tablets, and TVs, but the component can still run properly.
 *
 * ###### Child Components
 *
 * This component can contain a single child component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @uicomponent [since 19]
 * @since 18 dynamic
 * @noninterop
 */
export declare const ArcListItem: ArcListItemInterface;