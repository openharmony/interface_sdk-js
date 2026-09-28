/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * Enumerates the scrolling states.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ScrollState {

  /**
   * Idle state. Triggered when the scroll state returns to idle, and when the controller's non-animated methods are
   * used to control the scroll.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Idle,

  /**
   * Scrolling state. Triggered when the list is dragged with the finger, when the scrollbar is dragged, or when the
   * mouse scroll wheel is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Scroll,

  /**
   * Inertial scrolling state. Triggered by all animated scroll actions. This includes: Inertial scrolling that occurs
   * after a fling;
   *
   * Bounce-back scrolling when the swipe reaches the edge; Inertial scrolling after quickly dragging the built-in
   * scrollbar and releasing;
   *
   * Scrolling controlled by the animated methods provided by the scroller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Fling,
}

/**
 * Sets the alignment mode of child components in the cross-axis direction of the list.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ListItemAlign {

  /**
   * The list items are packed toward the start edge of the **List** component along the cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Start,

  /**
   * The list items are centered in the **List** component along the cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Center,

  /**
   * The list items are packed toward the end edge of the **List** component along the cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  End,
}

/**
 * Enumerates the areas of **ListItemGroup**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ListItemGroupArea {

  /**
   * Area other than the **ListItem**, header, and footer areas in **ListItemGroup**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NONE = 0,

  /**
   * **ListItem** area in **ListItemGroup**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  IN_LIST_ITEM_AREA = 1,

  /**
   * Header area in **ListItemGroup**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  IN_HEADER_AREA = 2,

  /**
   * Footer area in **ListItemGroup**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  IN_FOOTER_AREA = 3,
}

/**
 * Enumerates the sticky styles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum StickyStyle {

  /**
   * In the **ListItemGroup** component, the header is not pinned to the top, and the footer is not pinned to the
   * bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * In the **ListItemGroup** component, the header is pinned to the top, and the footer is not pinned to the bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Header = 1,

  /**
   * In the **ListItemGroup** component, the footer is pinned to the bottom, and the header is not pinned to the top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Footer = 2,

  /**
   * The header of the ListItemGroup is sticky at the top, and the footer is sticky at the bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  BOTH = 3,
}

/**
 * Sets the edge effect of the chain animation effect, which determines how the spacing between list items changes when
 * the list continues to be dragged after being scrolled to the edge.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare enum ChainEdgeEffect {

  /**
   * Default effect. When the list continues to be dragged after scrolling to the edge, the spacing between list items
   * in the drag direction decreases,
   *
   * and the spacing between list items in the opposite direction increases. This is suitable for scenarios that require
   * directional stretching and rebound feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  DEFAULT,

  /**
   * When the list continues to be dragged after scrolling to the edge, the spacing between all list items increases.
   * This is suitable for scenarios that require synchronous stretching feedback of all list items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  STRETCH,
}

/**
 * Enumerates the alignment modes of list items when scrolling ends.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ScrollSnapAlign {

  /**
   * No list item scroll-end alignment effect by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NONE = 0,

  /**
   * The first item in the view is aligned at the start of the list.
   *
   * **NOTE**
   *
   * When the list hits the end, the items at the end must be completely displayed. In this case, the items at the start
   * may not be aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START = 1,

  /**
   * The middle items in the view are aligned in the center of the list.
   *
   * **NOTE**
   *
   * The top and end items can be aligned to the center of the list. In this case, which may cause empty space to be
   * visible in the list display.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER = 2,

  /**
   * The last item in the view is aligned at the end of the list.
   *
   * **NOTE**
   *
   * When the list hits the start, the items at the start must be completely displayed. In this case, the items at the
   * end may not be aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END = 3,
}

/**
 * Defines a collection of chain animation effect attributes, used to set the maximum spacing, minimum spacing,
 * animation intensity, conduction coefficient, edge effect, stiffness, and damping of the list. When the list requires
 * fine-grained control over the chained linkage elastic effect, different animation feels can be achieved by adjusting
 * the parameters in this object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare interface ChainAnimationOptions {

  /**
   * Minimum space for chain animation.
   * <br>Unit: same as **Length**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  minSpace: Length;

  /**
   * Maximum space for chain animation.
   * <br>Unit: same as **Length**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  maxSpace: Length;

  /**
   * Conductivity of chain animation.
   *
   * @default 0.7
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  conductivity?: number;

  /**
   * Intensity of chain animation.
   *
   * @default 0.3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  intensity?: number;

  /**
   * Edge effect of chain animation.
   *
   * @default ChainEdgeEffect.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  edgeEffect?: ChainEdgeEffect;

  /**
   * Stiffness of chain spring.
   *
   * @default 228
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  stiffness?: number;

  /**
   * Damping of chain spring.
   *
   * @default 30
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  damping?: number;
}

/**
 * Represents the return value of the
 * [getEvent('List')]{@link ../../../arkui/FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'List')} method in
 * **frameNode**, which can be used to set scroll events for a **List** node.
 *
 * **UIListEvent** inherits from [UIScrollableCommonEvent]{@link UIScrollableCommonEvent}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface UIListEvent extends UIScrollableCommonEvent {

  /**
   * Sets the callback for the
   * [onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12) event.
   *
   * If the input parameter is **undefined**, the event callback is reset.
   *
   * @param { OnWillScrollCallback | undefined } callback - Callback for the **onWillScroll** event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnWillScroll(callback: OnWillScrollCallback | undefined): void;

  /**
   * Sets the callback for the
   * [onDidScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#ondidscroll12) event.
   *
   * If the input parameter is **undefined**, the event callback is reset.
   *
   * @param { OnScrollCallback | undefined } callback - Callback for the **onDidScroll** event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnDidScroll(callback: OnScrollCallback | undefined): void;

  /**
   * Sets the callback of the [onScrollIndex]{@link ListAttribute#onScrollIndex} event.
   *
   * If the input parameter is **undefined**, the event callback is reset.
   *
   * @param { OnListScrollIndexCallback | undefined } callback - Callback for the **onScrollIndex** event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollIndex(callback: OnListScrollIndexCallback | undefined): void;

  /**
   * Sets the callback of the [onScrollVisibleContentChange]{@link ListAttribute#onScrollVisibleContentChange} event.
   *
   * If the input parameter is **undefined**, the event callback is reset.
   *
   * @param { OnScrollVisibleContentChangeCallback | undefined } callback - Callback for the
   *     **onScrollVisibleContentChange** event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollVisibleContentChange(callback: OnScrollVisibleContentChangeCallback | undefined): void;
}

/**
 * Implements the callbacks and events for the [ListItem]{@link ./list_item} in the [expanded]{@link SwipeActionState}
 * state.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface CloseSwipeActionOptions {

  /**
   * Triggered after the collapse animation is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onFinish?: ()=>void;
}

/**
 * Describes the details of the child components in the visible area of a list.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface VisibleListContentInfo {

  /**
   * Index of the list item or list item group in the list display area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number

  /**
   * Position of the top or bottom edge of the viewport in the
   * list item group to which the edge is located, if applicable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  itemGroupArea?: ListItemGroupArea

  /**
   * Index of the starting or ending list item in the list
   * item group to which the top or bottom edge of the viewport is located.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  itemIndexInGroup?: number
}

/**
 * Defines the system back button behavior of the **List** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface ListBackPressBehavior {

  /**
   * Whether to close the swipe menu when back key is pressed.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  closeSwipeAction?: boolean;
}

/**
 * Triggered when a child component enters or leaves the list display area.
 *
 * Since API version 26.0.0, when **List** changes from having child components to being empty, the **index** member of
 * the reported **start** and **end** parameters is **-1**, and the **itemGroupArea** and **itemIndexInGroup** members
 * are **undefined**. Before API version 26.0.0, when **List** changes from having child components to being empty, the
 * reported **start** and **end** parameters retain the values from the last time when there were child components.
 *
 * If the values of **start** and **end** are both **0**, the **List** component contains only one child component.
 *
 * > **NOTE**
 * >
 * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 14.
 *
 * @param {VisibleListContentInfo} start - 1. Index of the first child component in the list display area.
 *     <br>2. If the first child component in the list display area is **ListItemGroup**, you can obtain the area where
 *     the first child component belongs.
 *     <br>3. If the first child component in the list display area is **ListItem** in **ListItemGroup**, you can obtain
 *     the index of **ListItem** in **ListItemGroup**.
 * @param {VisibleListContentInfo} end - 1. Index of the last child component in the list display area.
 *     <br>2. If the last child component in the list display area is **ListItemGroup**, you can obtain the area where
 *     the last child component belongs.
 *     <br>3. If the last child component in the list display area is **ListItem** in **ListItemGroup**, you can obtain
 *     the index of **ListItem** in **ListItemGroup**.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type OnScrollVisibleContentChangeCallback = (start: VisibleListContentInfo, end: VisibleListContentInfo) => void;

/**
 * Represents a callback for item changes in the visible area of the **List** component.
 *
 * @param {number} start - Index of the first child component in the list display area.
 * @param {number} end - Index of the last child component in the list display area.
 * @param {number} center - Index of the center child component in the list display area.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 19 dynamic
 */
declare type OnListScrollIndexCallback = (start: number, end: number, center: number) => void;

/**
 * Implements the scroll controller of the **List** component. A **List** component is bound to a **ListScroller** on a
 * one-to-one basis.
 *
 * > **NOTE**
 * >
 * > **ListScroller** inherits from [Scroller]{@link Scroller} and has all methods of [Scroller]{@link Scroller}.
 *
 * ###### Objects to Import
 *
 * ```ts
 * listScroller: ListScroller = new ListScroller();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare class ListScroller extends Scroller {
  /**
   * Obtains the size of a [list item]{@link ./list_item} in a [list item group]{@link ./list_item_group} and its
   * position relative to the list.
   *
   * > **NOTE**
   * >
   * > - The value of **index** must be the index of a child component visible in the display area.
   *     Otherwise, the value is considered invalid.
   * > - The child component for which **index** is set must be a list item group. Otherwise,
   *     the **index** value is considered invalid.
   * > - The value of **indexInGroup** must be the index of a list item in the list item group visible
   *     in the display area. Otherwise, the value is considered invalid.
   * > - When **index** or **indexInGroup** is set to an invalid value, the returned size and position are both **0**.
   *
   * @param { number } index - Index of the list item group in the list.
   * @param { number } indexInGroup - Index of the list item in the list item group.
   * @returns { RectResult } Size of the list item in the list item group and its position relative to the list.
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
  getItemRectInGroup(index: number, indexInGroup: number): RectResult;

  /**
   * Scrolls to the specified list item in the specified list item group.
   *
   * @param { number } index - Index of the target list item group in the current container.
   *     <br>**NOTE**
   *     <br>If the value set is a negative value or greater than the maximum index of the items in the container, the
   *     value is deemed abnormal, and no scrolling will be performed.
   * @param { number } indexInGroup - Index of the target list item in the list item group specified by **index**.
   *     <br>**NOTE**
   *     <br>If the value set is a negative value or greater than the maximum index of the items in the list item group,
   *     the value is deemed abnormal, and no scrolling will be performed.
   * @param { boolean } smooth - Whether the scroll animation is enabled. The options are **true** (enabled) and
   *     **false** (disabled).
   *     <br>Default value: **false**
   *     <br>**NOTE**
   *     <br>When **smooth** is set to **true**, all passed items are loaded and counted in layout calculation. This may
   *     result in performance issues if a large number of items are involved.
   * @param { ScrollAlign } align - How the list item to scroll to is aligned with the container.
   *     <br>Default value: **ScrollAlign.START**
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
  scrollToItemInGroup(index: number, indexInGroup:number, smooth?: boolean, align?: ScrollAlign): void;

  /**
   * Collapses the [list items]{@link ./list_item} in the [EXPANDED]{@link SwipeActionState} state and sets callback
   * events.
   *
   * @param { CloseSwipeActionOptions } options - Set of callback events for collapsing the
   *     [ListItem]{@link ./list_item} in the [EXPANDED]{@link SwipeActionState} state. If this parameter is not passed,
   *     no callback events are set.
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
  closeAllSwipeActions(options?: CloseSwipeActionOptions): void;

  /**
   * Obtains the index information of the child component at the specified coordinates.
   *
   * @param { number } x - X-coordinate, in vp.
   * @param { number } y - Y-coordinate, in vp.
   * @returns { VisibleListContentInfo } Index information of a child component at the specified coordinates.
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
  getVisibleListContentInfo(x: number, y: number): VisibleListContentInfo;
}

/**
 * Defines the options of the **List** component.
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
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface ListOptions {

  /**
   * Index of the item to be displayed at the start when the list is initially loaded.
   * Anonymous Object Rectification.
   *
   * <p><strong>NOTE</strong>
   * <br>If the set value is a negative number or is greater than the index of the last item in the list,
   * the value is invalid. In this case, the default value will be used.
   * </p>
   *
   * @default 0 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  initialIndex?: number;

  /**
   * Spacing between list items along the main axis.
   * Default value: **0**.
   * <br>If the parameter type is number, the unit is vp.
   * Anonymous Object Rectification.
   * <p><strong>NOTE</strong>
   * <br>If this parameter is set to a negative number or a value greater than or equal to the length of the list
   * content area, the default value is used.
   * <br>If this parameter is set to a value less than the width of the list divider, the width of the list divider
   * is used as the spacing.
   * <br> Child components of <em>List</em> whose <em>visibility</em> attribute is set to <em>None</em> are not
   * displayed, but the spacing above and below them still takes effect.
   * </p>
   *
   * @default 0 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  space?: number | string;

  /**
   * Spacing between list items along the main axis.
   *
   * <p><strong>NOTE</strong>
   * <br>If this parameter is set to a negative number or a value greater than or equal to the length of the list
   * content area, the default value is used.
   * <br>If this parameter is set to a value less than the width of the list divider, the width of the list divider
   * is used as the spacing.
   * <br> Child components of <em>ListItemGroup</em> whose <em>visibility</em> attribute is set to <em>None</em>
   * are not displayed, but the spacing above and below them still takes effect.
   * <br> If both spaceWidth and space are set, spaceWidth will take precedence.
   * </p>
   *
   * @type { ?Dimension }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  spaceWidth?: Dimension;

  /**
   * Scroller, which can be bound to scrollable components.
   * Anonymous Object Rectification.
   *
   * <p><strong>NOTE</strong>
   * <br>The scroller cannot be bound to other scrollable components.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scroller?: Scroller;
}

/**
 * Enumerates the speeds of the snap animation for list scrolling.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare enum ScrollSnapAnimationSpeed {

  /**
   * Default snap animation speed for the list, typically used when list items are large and scrolling moves one item
   * per swipe.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  NORMAL = 0,

  /**
   * Slower snap animation speed, typically used when list items are small and scrolling moves multiple items per swipe.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  SLOW = 1,
}

/**
 * **List** is a list container component in ArkUI that presents continuous, multi-row or multi-column data of the same
 * type, such as images and text, and supports vertical or horizontal scrolling. When used together with **LazyForEach**
 * or **Repeat**, it supports lazy loading to improve the startup speed and reduce the memory usage in long-list
 * scenarios. It also supports preloading to reduce frame loss during scrolling and improve smoothness, as well as
 * single-column/multi-column layout, grouped lists, and sticky header/footer, making it suitable for scenarios such as
 * message lists, product lists, and settings pages.
 *
 * Lazy loading of **List** loads the child components in the visible area as required. Compared with full loading, lazy
 * loading can improve the app startup speed and reduce the memory usage. When **List** is used together with
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md), the lazy loading capabilities differ
 * as follows:
 *
 * - When **List** is used together with **ForEach**, all child nodes are created at a time. The nodes within the screen
 * range are laid out and rendered when needed. When a user swipes, the nodes that are out of the screen range are not
 * removed from the tree, and the nodes that enter the screen range are laid out and rendered.
 * - When **List** is used together with **LazyForEach**, all nodes within the screen range are created, laid out, and
 * rendered at a time. When a user swipes, the nodes that are out of the screen range are removed from the tree, and the
 * nodes that enter the screen range are created, laid out, and rendered.
 * - When the **List** component is used together with **Repeat** with
 * [virtualScroll]{@link RepeatAttribute#virtualScroll}, the lazy loading behavior is the same as that of
 * **LazyForEach**. When the **List** component is used together with **Repeat** without **virtualScroll**, the lazy
 * loading behavior is the same as that of **ForEach**.
 *
 * If a scrollable component is nested in a **List** component, their scrolling directions are the same, and the main
 * axis size is not set for the **List** component, the **List** component loads all child components, causing lazy
 * loading to fail. In this scenario, you are advised to nest the [ListItemGroup]{@link ./list_item_group} component in
 * **List** to optimize performance.
 *
 * Preloading in **List** refers to loading not only the visible child components within the display area but also some
 * invisible child components outside the display area during idle time. Preloading can reduce frame drops during
 * scrolling and improve smoothness. Preloading takes effect only when combined with lazy loading. **List** supports
 * setting the number of preloaded items through [cachedCount]{@link ListAttribute#cachedCount(value: number)}. By
 * default, one screen of child components is preloaded both above and below the display area (up to 16 rows of child
 * components). When **List** is used together with
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md), the preloading capabilities differ as
 * follows:
 *
 * - When the **List** component is used together with **ForEach** and **cachedCount** is set, in addition to laying out
 * child components within the visible area, child components within the range of **cachedCount** outside the visible
 * area are pre-laid out during idle time.
 * - When the **List** component is used together with **LazyForEach** and **cachedCount** is set, in addition to
 * creating and laying out child components within the display area, child components within the range of
 * **cachedCount** outside the display area are pre-created and pre-laid out during idle time.
 * - When the **List** component is used together with **Repeat** with
 * [virtualScroll]{@link RepeatAttribute#virtualScroll}, the preloading behavior is the same as that of **LazyForEach**.
 * When the **List** component is used together with **Repeat** without **virtualScroll**, the preloading behavior is
 * the same as that of **ForEach**.
 *
 * > **NOTE**
 * >
 * > The component has been bound with gestures to implement functions such as follow-up scrolling. If you need to add
 * > custom gestures, refer to [Gesture Blocking Enhancement]{@link ./common}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ListInterface {

  /**
   * Creates a list container.
   *
   * @param { object } value [since 7 - 17]
   * @param { ListOptions } [options] - **List** component parameters. If not passed, the default configuration is
   *     used. [since 18]
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: ListOptions): ListAttribute;
}

/**
 * Defines the divider style of the list or list item group.
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
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ListDividerOptions {

  /**
   * Width of the divider.
   * <br>Unit: vp
   * Anonymous Object Rectification.
   *
   * <p><strong>NOTE</strong>
   * <br>If this parameter is set to a negative number, a percentage, or a value greater than or equal to the length
   * of the list content area, the value <strong>0</strong> will be used.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  strokeWidth: Length;

  /**
   * Color of the divider.
   * Anonymous Object Rectification.
   *
   * <p><strong>Default value</strong>: 0x08000000
   * </p>
   *
   * @default 0x08000000 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color?: ResourceColor;

  /**
   * Distance between the divider and the start edge of the list.
   * Anonymous Object Rectification.
   *
   * <p><strong>Default value</strong>: **0**<br>Unit: vp
   * <br><strong>NOTE</strong>
   * <br>If this parameter is set to a negative number or a percentage, the default value will be used.
   * <br>If <strong>endMargin</strong> and <strong>startMargin</strong> add up to a value that exceeds the column
   * width, they will be set to <strong>0</strong>.
   * </p>
   *
   * @default 0vp [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  startMargin?: Length;

  /**
   * Distance between the divider and the end edge of the list.
   * Anonymous Object Rectification.
   *
   * <p><strong>Default value</strong>: **0**<br>Unit: vp
   * <br><strong>NOTE</strong>
   * <br>If this parameter is set to a negative number or a percentage, the default value will be used.
   * <br>If <strong>endMargin</strong> and <strong>startMargin</strong> add up to a value that exceeds the column
   * width, they will be set to <strong>0</strong>.
   * </p>
   *
   * @default 0vp [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  endMargin?: Length;
}

/**
 * In addition to [universal attributes]{@link ./common} and
 * [scrollable component common attributes](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#attributes),
 * the following attributes are also supported.
 *
 * In addition to [universal events]{@link ./common} and
 * [scrollable component common events](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#events),
 * the following events are also supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class ListAttribute extends ScrollableCommonMethod<ListAttribute> {

  /**
   * Sets the number of columns or rows in the **List** component. (When the **List** is scrolled vertically, the number
   * of columns is displayed. When the **List** is scrolled horizontally, the number of rows is displayed.)
   *
   * The following example describes how to set the number of columns:
   *
   * - If **value** is a number, the number of columns is specified based on the number.
   * - If **value** is of the **LengthConstrain** type, **minLength** in **LengthConstrain** indicates the minimum
   * column width. The **List** component calculates the maximum number of columns based on its minimum column width. In
   * addition, **LengthConstrain** is passed to the child components of the **List** component as the maximum and
   * minimum layout width constraints. These constraints take effect when the child components do not have a specified
   * width.
   * - Each list item group occupies one row in multi-column mode. Its child list items are arranged based on the
   * **lanes** attribute of the list.
   * - If **value** is of the **LengthConstrain** type, the number of columns in **ListItemGroup** is calculated based
   * on the width of **ListItemGroup**. Therefore, when the width of **ListItemGroup** is different from that of the
   * **List** component, the number of columns in **ListItemGroup** may be different from that in the **List**
   * component.
   *
   * @param { number | LengthConstrain } value - Number of columns or rows in the layout of the **List** component.<br/>
   *     Default value: **1**<br/>Value range: [1, +∞). If a value less than 1 is passed, the default value is used.
   * @param { Dimension } gutter - Column spacing or row spacing.<br />Default value: **0**<br/>When the parameter type
   *     is number, the unit is vp.<br/>Value range: [0, +∞).If a negative value is passed, the default value is used.
   *     <br/>**NOTE**<br/>**gutter** specifies the column spacing or row spacing, which takes effect only when the
   *     number of columns or rows is greater than 1.<br/>
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  lanes(value: number | LengthConstrain, gutter?: Dimension): ListAttribute;

  /**
   * Sets the number of layouts and the spacing along the cross axis of the **List** component. When **List** scrolls
   * vertically, this attribute sets the number of columns and the column spacing. When **List** scrolls horizontally,
   * this attribute sets the number of rows and the row spacing. By default, the list is displayed in one column or one
   * row. In multi-column or multi-row mode, a **ListItemGroup** occupies one row exclusively when scrolling vertically
   * and one column exclusively when scrolling horizontally. The **ListItem** components in a **ListItemGroup** are laid
   * out according to the value set by the **lanes** attribute of the **List** component.
   *
   * @param { number | LengthConstrain | ItemFillPolicy } value - Number of layouts in the cross axis direction of the
   *     current **List** component. When the **List** scrolls vertically, it indicates the number of columns; when it
   *     scrolls horizontally, it indicates the number of rows.<br/>When set to the number type, the number of columns
   *     or rows is determined by the numeric value. The value range of the number type is
   *     [1, +∞). If a value less than 1 is passed, the default value is used.<br/>
   *     When set to the LengthConstrain type, the number of columns is determined by the maximum and minimum
   *     column widths when the **List** scrolls vertically, and the number of rows is determined by the maximum
   *     and minimum row heights when it scrolls horizontally.<br/>
   *     When set to the ItemFillPolicy type, the number of columns is determined by the
   *     [breakpoint type](docroot://ui/arkts-layout-development-grid-layout.md#breakpoints) corresponding to the
   *     **List** component width. This type takes effect only when the **List** scroll direction is vertical.
   * @param { Dimension } [gutter] - When the **List** scrolls vertically, it indicates the column spacing; when it
   *     scrolls horizontally, it indicates the row spacing.<br /><br/>When the parameter type is
   *     number, the unit is vp.<br/> If a negative value is passed, the default value is used.<br/>**NOTE**<br/>This
   *     takes effect only when the number of columns or rows is greater than 1.
   *     <br>The value must be greater than or equal to 0. Default value: **0**.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  lanes(value: number | LengthConstrain | ItemFillPolicy, gutter?: Dimension): ListAttribute;

  /**
   * Sets the layout mode of list items along the cross axis when the cross-axis width of the list is greater than the
   * value calculated by the following formula: cross-axis width of list items × lanes + (lanes – 1) × gutter.
   *
   * @param { ListItemAlign } value - Alignment mode of list items along the cross axis.
   *     <br>Default value: **ListItemAlign.Start**
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  alignListItem(value: ListItemAlign): ListAttribute;

  /**
   * Sets the direction in which the list items are arranged.
   *
   * @param { Axis } value - Direction in which the list items are arranged.
   *     <br>Default value: **Axis.Vertical**
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  listDirection(value: Axis): ListAttribute;

  /**
   * Sets the scrollbar state.
   *
   * @param { BarState } value - Scrollbar state.
   *     <br>In API version 9 and earlier versions, the default value is **BarState.Off**. Since API version 10, the
   *     default value is **BarState.Auto**.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBar(value: BarState): ListAttribute;

  /**
   * Sets the effect used when the scroll boundary is reached.
   *
   * > **NOTE**
   * >
   * > When the content area of the **List** component is smaller than one screen, there is no rebound effect by
   * > default. To enable the rebound effect, set the **options** parameter of the **edgeEffect** attribute to
   * > **{ alwaysEnabled: true }**.
   *
   * @param { EdgeEffect } value - Effect used when the scroll boundary is reached. The spring and shadow effects are
   *     supported.
   *     <br>Default value: **EdgeEffect.Spring**
   * @param { EdgeEffectOptions } options - Whether to enable the sliding effect when the component content is smaller
   *     than the component itself. The value **{ alwaysEnabled: true }** enables the sliding effect, and
   *     **{ alwaysEnabled: false }** disables it.<br/>Default value: **{ alwaysEnabled: false }**<br/> [since 11]
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  edgeEffect(value: EdgeEffect, options?: EdgeEffectOptions): ListAttribute;

  /**
   * Sets the offset from the start of the list content to the boundary of the list display area.
   *
   * If the sum of **contentStartOffset** and **contentEndOffset** exceeds the length of the list content area, both
   * offsets are reset to **0**.
   *
   * @param { number } value - Start offset of the content area.<br/>Default value: **0**<br/>Unit: vp<br/>**Note:**<br/
   *     >If this parameter is set to a negative value, the default value is used.<br/>Value range: [0, +∞)
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  contentStartOffset(value: number): ListAttribute;

  /**
   * Sets the offset from the start of the list content to the boundary of the list display area. Compared with
   * [contentStartOffset<sup>11+</sup>]{@link ListAttribute#contentStartOffset(value: number)}, the parameter name is
   * changed to **offset** and the Resource type is supported.
   *
   * If the sum of **contentStartOffset** and **contentEndOffset** exceeds the length of the list content area, both
   * offsets are reset to **0**.
   *
   * @param { number | Resource } offset - Start offset of the content area.<br/>Default value: **0**<br/>The unit is vp
   *     when the parameter type is number. <br/>If an invalid value such as a negative number or a non-numeric Resource
   *     is set, the default value is used.<br/>Value range when the parameter type is number: [0, +∞)
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  contentStartOffset(offset: number | Resource): ListAttribute;

  /**
   * Sets the offset from the end of the list content to the boundary of the list display area.
   *
   * If the sum of **contentStartOffset** and **contentEndOffset** exceeds the length of the list content area, both
   * offsets are reset to **0**.
   *
   * @param { number } value - Offset of the end of the content area.<br/>Default value: **0**<br/>Unit: vp<br/>**NOTE**
   *     <br/>If this parameter is set to a negative value, the default value is used.<br/>Value range: [0, +∞)
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  contentEndOffset(value: number): ListAttribute;

  /**
   * Sets the offset from the end of the list content to the boundary of the list display area. Compared with
   * [contentEndOffset<sup>11+</sup>]{@link ListAttribute#contentEndOffset(value: number)}, the parameter name is
   * changed to **offset** and the Resource type is supported.
   *
   * If the sum of **contentStartOffset** and **contentEndOffset** exceeds the length of the list content area, both
   * offsets are reset to **0**.
   *
   * @param { number | Resource } offset - Offset from the end of the content area.<br/>Default value: **0**<br/>When
   *     the parameter type is number, the unit is vp. <br/>If an invalid value such as a negative number or a non-
   *     numeric Resource is set, the default value is used.<br/>When the parameter type is number, the value range is
   *     [0, +∞)
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  contentEndOffset(offset: number | Resource): ListAttribute;

  /**
   * Sets the style of the divider for the list items. By default, there is no divider.
   *
   * The divider of **List** is drawn between two child components along the main axis, and no divider is drawn above
   * the first child component or below the last child component. The width of the divider affects the spacing between
   * child components. When the value of **space** or **spaceWidth** is smaller than the divider width, the spacing
   * between child components along the main axis takes the divider width.
   *
   * In multi-column mode, the value of **startMargin** is calculated from the start edge of the cross axis of each
   * column. In single-column mode, it is calculated from the start edge of the cross axis of the list.
   *
   * When a list item has [polymorphic styles]{@link ./common} applied, the dividers above and below the pressed child
   * component are not rendered.
   *
   * @param { object | null } value - Style of the divider for the list items.
   *     <br>Default value: **null** [since 7 - 8]
   * @param { {strokeWidth: Length;color?: ResourceColor;startMargin?: Length;endMargin?: Length;} | null }
   *     value - Style of the divider for the list items.
   *     <br>Default value: **null** [since 9 - 17]
   * @param { ListDividerOptions | null } value - Style of the divider for the list items.
   *     <br>Default value: **null** [since 18]
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  divider(
    value: ListDividerOptions | null,
  ): ListAttribute;

  /**
   * Sets whether the current **List** component is in editable mode.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. This API has been completely
   * > removed, and no substitute is provided. To switch the edit state and delete list items, you can control the
   * > display and hiding of the delete button through a custom state variable and update the data source in the click
   * > event of the delete button. For details, see
   * > [Example 3: Customizing Edit and Delete Mode]{@link ./list}.
   *
   * @param { boolean } value - Whether the current **List** component is in editable mode. The value **true** indicates
   *     that the current **List** component is in editable mode, and **false** indicates that it is not.<br/>Default
   *     value: **false**
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  editMode(value: boolean): ListAttribute;

  /**
   * Sets whether to enable multiselect.
   *
   * @param { boolean } value - Whether to enable multiselect.
   *     <br>**false** (default): Multiselect is disabled. **true**: Multiselect is enabled.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  multiSelectable(value: boolean): ListAttribute;

  /**
   * Sets the number of **ListItem** or **ListItemGroup** components to be preloaded (cached). In a lazy loading
   * scenario, only the **cachedCount** rows of **ListItem** components above and below the visible area of the **List**
   * component is preloaded. In a non-lazy loading scenario, all items are loaded at once. For both lazy and non-lazy
   * loading, only the content within the list display area plus the content equivalent to **cachedCount** outside the
   * display area is laid out. <!--Del-->For details, see
   * [Minimizing White Blocks During Swiping](docroot://performance/arkts-performance-improvement-recommendation.md#minimizing-white-blocks-during-swiping).
   * <!--DelEnd-->
   *
   * When **cachedCount** is set for the list, the system preloads and lays out the **cachedCount**-specified number of
   * rows of list items both above and below the currently visible area of the list. When calculating the number of rows
   * for list items, the system takes into account the number of rows from the list items within a list item group. If a
   * list item group does not contain any list items, then the entire list item group is counted as one row.
   *
   * When **LazyForEach** is nested under **List**, and **ListItemGroup** is nested under **LazyForEach**,
   * **LazyForEach** creates **cachedCount**-specified number of **ListItemGroup** components both above and below the
   * display area of **List**.
   *
   * @param { number } value - Number of list items or list item groups to be preloaded (cached).
   *     <br>Default value: number of nodes visible on the screen, with the maximum value of 16
   *     <br>Value range: [0, +∞).
   *     <br>Values less than 0 are treated as **1**.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  cachedCount(value: number): ListAttribute;

  /**
   * Sets the number of rows to be preloaded for the list and specifies whether to display the preloaded nodes. In the
   * lazy loading scenario, **cachedCount** rows are preloaded both above and below the display area of **List**. In the
   * non-lazy loading scenario, all child components are loaded.
   *
   * After **cachedCount** is set for the list, **cachedCount** rows are preloaded and laid out both above and below the
   * display area. When calculating the number of preloaded rows, the number of **ListItem** rows inside a
   * **ListItemGroup** is counted. If a **ListItemGroup** contains no **ListItem**, the entire **ListItemGroup** is
   * counted as one row. The preloaded nodes can be displayed together with the
   * [clip]{@link CommonMethod#clip(value: boolean)} or
   * [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14) attribute.
   *
   * > **NOTE**
   * >
   * > You are advised to set cachedCount to n/2 (n indicates the number of list items displayed on one screen). You
   * > also need to consider other factors to balance the experience and memory usage. For best practices, see
   * > [Cache List Items](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-best-practices-long-list#section11667144010222).
   *
   * @param { number } count - Number of preloaded rows in the list.<br/>Default value: determined by the number of
   *     nodes displayed on the screen, with a maximum of 16. <br/>Value range:
   *     [0, +∞). If the value is less than 0, it is processed as 1.
   * @param { boolean } show - Whether the preloaded **ListItem** or **ListItemGroup** needs to be displayed.
   *     The value **true** means to display the preloaded **ListItem** or **ListItemGroup**,
   *     and **false** means not to display the preloaded **ListItem** or **ListItemGroup**.
   *     <br/> Default value: **false**
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   */
  cachedCount(count: number, show: boolean): ListAttribute;

  /**
   * Sets the number of rows to be preloaded for the list and specifies whether to display the preloaded nodes. In the
   * lazy loading scenario, preloading is performed outside the display area of **List** based on **count** or
   * **CacheCountInfo**. In the non-lazy loading scenario, all child components are loaded.
   *
   * If the first parameter of the **cachedCount** attribute is of the **number** type, **count** rows are preloaded and
   * laid out both above and below the display area during idle frames.
   *
   * If the first parameter of the **cachedCount** attribute is of the **CacheCountInfo** type, preloading and layout
   * occur during idle frames when the number of cached rows is less than **CacheCountInfo.minCount**. When the number
   * of cached rows is greater than **CacheCountInfo.maxCount**, the nodes beyond the range are destroyed or recycled
   * for reuse. When the UI is idle (no animation or user operation), **CacheCountInfo.maxCount** rows are preloaded
   * both above and below the display area.
   *
   * When calculating the number of preloaded rows, the number of **ListItem** rows inside a **ListItemGroup** is
   * counted. If a **ListItemGroup** contains no **ListItem**, the entire **ListItemGroup** is counted as one row. The
   * preloaded nodes can be displayed together with the [clip]{@link CommonMethod#clip(value: boolean)} or
   * [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14) attribute.
   *
   * Default behavior: The **count** parameter is of the **number** type by default, with its value set based on the
   * number of nodes displayed on the screen, up to a maximum of 16. Preloaded **ListItem** components are not involved
   * in drawing by default.
   *
   * > **NOTE**
   * >
   * > You are advised to set cachedCount to n/2 (n indicates the number of list items displayed on one screen). You
   * > also need to consider other factors to balance the experience and memory usage. Starting from API version 22,
   * > setting both minimum and maximum cache counts is supported. The maximum cache count can be set to a moderately
   * > higher value, such as twice the minimum cache count, to utilize the UI thread's idle time for node creation. This
   * > reduces the need to create nodes during scrolling for preloading and enhances scrolling smoothness. For best
   * > practices, see
   * > [Cache List Items](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-best-practices-long-list#section11667144010222).
   *
   * @param { number | CacheCountInfo } count - When the parameter type is number, this parameter indicates the number
   *     of preloaded rows in the list. <br/>Value range: [0, +∞). If a value less than 0 is set, 1 is used.
   *     <br>When the parameter type is **CacheCountInfo**, this parameter indicates the maximum and minimum preloading
   *     range.
   * @param { boolean } show - Whether the preloaded ** or **ListItemGroup** needs to be displayed.
   *     <br/>**true**: The preloaded **ListItem** or **ListItemGroup** is displayed.
   *     <br/>**false**: The preloaded **ListItem** or **ListItemGroup** is not displayed.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  cachedCount(count: number | CacheCountInfo, show: boolean): ListAttribute;

  /**
   * Sets whether to enable the chain linkage effect for the current **List** component.
   *
   * > **NOTE**
   * >
   * > - The chain linkage effect refers to the interaction where, during finger swiping, the dragged **ListItem** acts
   * > as the driving object, while adjacent items are driven objects. The driving object drives the linkage of the
   * > driven objects, following a physics-based spring animation.
   * >
   * > - The driving effect of the chain linkage effect is reflected in the spacing between **ListItem**s. The spacing
   * > in the static state can be set by using the **space** parameter of the **List** component. If the **space**
   * > parameter is not set and the chain linkage effect is enabled, the spacing is 20 vp by default.
   * >
   * > - After the chain linkage effect is enabled, the divider of the **List** component is not displayed.
   * >
   * > - The chain linkage effect takes effect only when the **List** component is in single-column mode and the edge
   * > effect is of the **EdgeEffect.Spring** type.
   *
   * @param { boolean } value - Whether to enable chained animations.
   *     <br>**false** (default): Chained animations are disabled. **true**: Chained animations are enabled.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  chainAnimation(value: boolean): ListAttribute;

  /**
   * Sets the configuration parameters of the chain animation effect. After the chain animation effect is enabled for
   * the list, the spacing between list items changes in a linked manner following the spring physics animation during
   * scrolling or dragging.
   *
   * > **NOTE**
   * >
   * > The chain animation effect takes effect only when the list is in single-column mode and the edge effect is of the
   * > **EdgeEffect.Spring** type. After the chain animation effect is enabled, the divider of the list is not
   * > displayed. If the space parameter is not set and the chain animation effect is enabled, the spacing defaults to
   * > 20 vp. For details, see
   * > [chainAnimation]{@link ListAttribute#chainAnimation}.
   *
   * @param { ChainAnimationOptions } value - Configuration parameters of the chained linkage animation effect,
   *     including minimum spacing, maximum spacing, conduction coefficient, effect intensity, edge effect, stiffness,
   *     and damping, used to control the chained linkage animation effect behavior of the list.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  chainAnimationOptions(value: ChainAnimationOptions): ListAttribute;

  /**
   * Used together with the [ListItemGroup]{@link ./list_item_group} component to set whether the header of a
   * **ListItemGroup** is sticky at the top or the footer is sticky at the bottom. Since API version 20, the **sticky**
   * attribute supports the **StickyStyle.BOTH** enum value, which can be directly set to **StickyStyle.BOTH** to
   * support both sticky header and sticky footer, with the same effect as **StickyStyle.Header | StickyStyle.Footer**.
   * Before API version 20, the same effect can be achieved through **StickyStyle.Header | StickyStyle.Footer**.
   *
   * > **NOTE**
   * >
   * > Occasionally, after **sticky** is set, floating-point calculation precision may result in small gaps appearing
   * > during scrolling. To address this issue, you can apply the [pixelRound]{@link CommonMethod#pixelRound} attribute
   * > to the current component, which rounds down the pixel values and helps eliminate the gaps.
   *
   * @param { StickyStyle } value - Whether to pin the header to the top or the footer to the bottom in the list item
   *     group.
   *     <br>Default value: **StickyStyle.None**
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sticky(value: StickyStyle): ListAttribute;

  /**
   * Sets the scroll snap alignment effect for list items when scrolling ends.
   *
   * This API is available only when the heights of list items are the same. During the alignment animation, the scroll
   * operation source type reported by the
   * [onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12) event is
   * **ScrollSource.FLING**.
   *
   * @param { ScrollSnapAlign } value - Alignment mode of the scroll snap position.
   *     <br>Default value: **ScrollSnapAlign.NONE**
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scrollSnapAlign(value: ScrollSnapAlign): ListAttribute;

  /**
   * Sets the nested scrolling mode in the forward and backward directions to implement scrolling linkage with the
   * parent component.
   *
   * @param { NestedScrollOptions } value - Nested scrolling options.
   *     <br>Default value:
   *     **{ scrollForward: NestedScrollMode.SELF_ONLY, scrollBackward: NestedScrollMode.SELF_ONLY }**
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nestedScroll(value: NestedScrollOptions): ListAttribute;

  /**
   * Sets whether to support the scroll gesture.
   *
   * @param { boolean } value - Whether to support the scroll gesture. With the value **true**, scrolling via finger or
   *     mouse is enabled. With the value **false**, scrolling via finger or mouse is disabled, but this does not affect
   *     the scrolling APIs of the [Scroller]{@link Scroller}.
   *     <br>Default value: **true**
   * @returns { ListAttribute } The attribute of the list
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScrollInteraction(value: boolean): ListAttribute;

  /**
   * Sets the friction coefficient. It applies only to gestures in the scrolling area, and it affects only the inertial
   * scrolling process. A value less than or equal to 0 evaluates to the default value.
   *
   * @param { number | Resource } value - Friction coefficient.<br/>Default value: **0.6** for non-wearable devices and
   *     **0.9** for wearable devices.<br/>Since API version 11, the default value is **0.7** for non-wearable devices.<
   *     br/>Since API version 12, the default value is **0.75** for non-wearable devices.<br/>Value range: (0, +∞)
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  friction(value: number | Resource): ListAttribute;

  /**
   * Sets the size information of the child components of a **List** component along the main axis.
   *
   * > **NOTE**
   * >
   * > - This attribute provides the **List** component with the size information of all child components along the main
   * > axis, ensuring that the **List** component can maintain the accuracy of its scrolling position in scenarios such
   * > as inconsistent main axis sizes of child components, adding or deleting child components, and using
   * > [scrollToIndex]{@link Scroller#scrollToIndex}. In this way, [scrollTo]{@link Scroller#scrollTo} can accurately
   * > jump to the specified position, [currentOffset]{@link Scroller#currentOffset} can obtain the current accurate
   * > scrolling position, and the built-in scrollbar can move smoothly without jumps.
   * >
   * > - When a child component is a **ListItemGroup**, the overall size of the **ListItemGroup** along the main axis
   * > must be accurately calculated based on the number of columns of the **ListItemGroup**, the spacing between
   * > **ListItem** components along the main axis in the **ListItemGroup**, and the sizes of the header, footer, and
   * > **ListItem** components in the **ListItemGroup**, and then passed to the **List** component.
   * >
   * > - If there are **ListItemGroup** child components, the
   * > [childrenMainSize]{@link ListItemGroupAttribute#childrenMainSize} attribute must be set for each
   * > **ListItemGroup**. Both the **List** component and each **ListItemGroup** component must bind a
   * > **ChildrenMainSize** object one-to-one through the **childrenMainSize** attribute interface.
   * >
   * > - In the multi-column scenario, when **LazyForEach** is used to generate child components, ensure that
   * > **LazyForEach** generates either all **ListItemGroup** components or all **ListItem** components.
   *
   * @param { ChildrenMainSize } value - Size information of child components in the main axis direction.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  childrenMainSize(value: ChildrenMainSize): ListAttribute;

  /**
   * Sets whether to maintain the visible content's position when data is inserted or deleted outside the display area
   * of the component.
   *
   * @param { boolean } enabled - Whether to maintain the visible content's position when data is inserted or deleted
   *     outside the visible area of the component.
   *     <br>Default value: **false**
   *     <br>**false**: The visible content position will change when data is inserted or deleted. **true**: The visible
   *     content position remains unchanged when data is inserted or deleted.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maintainVisibleContentPosition(enabled: boolean): ListAttribute;

  /**
   * Whether the list's layout starts from the bottom (end) rather than the top (beginning).
   *
   * @param { boolean } enabled - Whether the list's layout starts from the bottom (end) rather than the top (beginning
   *     ).
   *     <br>**false** (default): The layout starts from the top. **true**: The layout starts from the bottom.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  stackFromEnd(enabled: boolean): ListAttribute;

  /**
   * Sets the focus wrap mode for arrow keys.
   *
   * @param { Optional<FocusWrapMode> } mode - Focus wrap mode for cross-axis arrow keys.
   *     <br>Default value: **FocusWrapMode.DEFAULT**
   *     <br>**NOTE**
   *     <br>Abnormal values are treated as the default value, meaning that cross-axis arrow keys cannot wrap.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  focusWrapMode(mode: Optional<FocusWrapMode>): ListAttribute;

  /**
   * Sets whether to synchronously load all child components in the list.
   *
   * @param { boolean } enable - Whether to synchronously load all child components in the list.
   *     <br>**true**: yes; **false**: no Default value: **true**
   *     <br>**NOTE**
   *     <br>When this parameter is set to **false**, in the first display or **scrollToIndex** jumps without animation,
   *     if the time consumed by the frame layout exceeds 50 ms, the child components that have not been laid out in the
   *     list are delayed to the next frame for layout.
   * @returns { ListAttribute } The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  syncLoad(enable: boolean): ListAttribute;

  /**
   * Sets the speed of the snap animation for list item scrolling. This parameter takes effect only when the scroll
   * alignment effect is set.
   *
   * @param { ScrollSnapAnimationSpeed } speed - Speed of the snap animation for listing scrolling.<br>Default value:
   *     **ScrollSnapAnimationSpeed.NORMAL**
   * @returns { ListAttribute } The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  scrollSnapAnimationSpeed(speed: ScrollSnapAnimationSpeed): ListAttribute;

  /**
   * Configures the behavior options of the edit mode of the **List** component, including the multi-select aggregation
   * animation switch, preview badge acquisition, and default multi-select style.
   *
   * @param { EditModeOptions } [options] - Edit mode options, used to customize the feature behavior of the **List**
   *     edit mode. This parameter is passed when custom edit mode behavior is required; otherwise, the default
   *     configuration is used.
   * @returns { ListAttribute } - The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  editModeOptions(options?: EditModeOptions): ListAttribute;

  /**
   * Sets whether to enable the edit mode for the **List** component. After the edit mode is enabled, you can swipe to
   * select multiple [ListItem]{@link ./list_item} components in the **List** component. If this API is not called, the
   * edit mode is not enabled.
   *
   * @param { boolean | undefined } enabled - Whether to enable edit mode. This parameter supports
   *     [!!](docroot://ui/state-management/arkts-new-binding.md) two-way binding variables.<br/>When set to **true**,
   *     edit mode is enabled and multiple items can be selected by swiping; when set to **false** or **undefined**,
   *     edit mode is disabled and multiple items cannot be selected by swiping.
   * @returns { ListAttribute } The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableEditMode(enabled: boolean | undefined): ListAttribute;

  /**
   * Triggered when the edit mode state changes.
   *
   * @param { Callback<boolean> | undefined } callback - Callback invoked when the edit mode state changes.
   *     <br>The value **true** indicates entering the edit mode, and **false** indicates exiting the edit mode.
   *     <br>If **undefined** is passed in, the callback is canceled.
   * @returns { ListAttribute } The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onEditModeChange(callback: Callback<boolean> | undefined): ListAttribute;

  /**
   * Defines whether the **List** component supports the generation of empty branch nodes that do not contain any child
   * components using the **if/else** rendering control syntax in **LazyForEach** or **Repeat**. If this attribute is
   * not set, empty branch nodes are not supported. This attribute cannot be updated after being set. Therefore, you
   * cannot switch between the behavior of supporting empty branches and the behavior of not supporting empty branches
   * after setting this attribute.
   *
   * @param { boolean | undefined } supported - Whether the current **List** component supports using the
   *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) rendering control syntax in
   *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) or
   *     [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) to generate an empty branch node
   *     that contains no child components.<br/>The value **true** indicates that the empty branch node is supported,
   *     and **false** indicates that it is not supported.<br/>If the value is undefined, it is processed as **false**.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  supportEmptyBranchInLazyLoading(supported: boolean | undefined): ListAttribute;

  /**
   * Sets the system back button behavior of the **List** component.
   *
   * @param { ListBackPressBehavior | undefined } behavior - System back button behavior of the **List** component.
   *     Currently, you can use the [ListBackPressBehavior]{@link ListBackPressBehavior} parameter to configure whether
   *     to collapse the expanded swipe-out component of a **ListItem** when the system back button takes effect.
   *     <br>If this parameter is set to **undefined**, the default behavior is restored. That is, when the system back
   *     button takes effect, the expanded swipe-out component of the **ListItem** is collapsed.
   * @returns { ListAttribute } The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backPressBehavior(behavior: ListBackPressBehavior | undefined): ListAttribute;

  /**
   * Triggered when the list scrolls.
   *
   * @param { function } event - Callback when scroll,
   * scrollOffset: Offset relative to the previous frame.
   * The offset is positive when the list content scrolls up and negative when the list content scrolls down.
   * <br>Unit: vp
   * scrollState: Current scroll state.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   * @useinstead common.ScrollableCommonMethod#onDidScroll
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): ListAttribute;

  /**
   * Triggered when a child component enters or leaves the list display area. During index calculation, each
   * **ListItemGroup** component is taken as a whole and assigned an index, and the indexes of the list items within are
   * not included in the calculation.
   *
   * > **NOTE**
   * >
   * > Compared with [onScrollVisibleContentChange]{@link ListAttribute#onScrollVisibleContentChange}, **onScrollIndex**
   * > counts a **ListItemGroup** as one index value as a whole, and the callback returns only the first, last, and
   * > middle index values. To obtain the detailed index information of the header, footer, or **ListItem** inside a
   * > **ListItemGroup**, use **onScrollVisibleContentChange**.
   * > When the list edge scrolling effect is the spring effect, the **onScrollIndex** event is not triggered when the
   * > user scrolls the list to the edge or releases the list to rebound.
   *
   * This event is triggered once when the list is initialized and when the index of the first child component or the
   * last child component in the list display area changes.
   *
   * Since API version 10, this event is also triggered when the child component in the center of the list display area
   * changes.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onScrollIndex(event: (start: number, end: number, center: number) => void): ListAttribute;

  /**
   * Triggered when a child component enters or leaves the list display area. During index calculation, the list item,
   * header of the list item group, and footer of the list item group each are counted as a child component.
   *
   * When the list edge scrolling effect is the spring effect, the **onScrollVisibleContentChange** event is not
   * triggered when the user scrolls the list to the edge or releases the list to rebound.
   *
   * This event is triggered once when the list is initialized and when the index of the first child component or the
   * last child component in the list display area changes.
   *
   * @param { OnScrollVisibleContentChangeCallback } handler - Callback invoked when the displayed content changes.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onScrollVisibleContentChange(handler: OnScrollVisibleContentChangeCallback): ListAttribute;

  /**
   * Triggered when the list reaches the start position.
   *
   * This event is triggered once when **initialIndex** is **0** during list initialization and once when the list
   * scrolls to the start position. When the list edge scrolling effect is the spring effect, this event is triggered
   * once when the list passes the start position and is triggered again when the list returns to the start position.
   *
   * @param { function } event - Callback triggered when the list reaches the start position.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onReachStart(event: () => void): ListAttribute;

  /**
   * Called when the list reaches the end position. This callback is triggered when the last child component appears in
   * the list view due to scrolling or content/layout changes.
   *
   * If the child component does not fill the list and can be completely displayed in the list without scrolling, this
   * event is triggered during the first loading.
   *
   * When the list edge scrolling effect is the spring effect, this event is triggered once when the list passes the end
   * position and is triggered again when the list returns to the end position.
   *
   * @param { function } event - Callback triggered when the list reaches the end position.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onReachEnd(event: () => void): ListAttribute;

  /**
   * Triggered when the list starts scrolling initiated by the user's finger dragging the list or its scrollbar. This
   * event is also triggered when the animation contained in the scrolling triggered by [Scroller]{@link Scroller}
   * starts.
   *
   * @param { function } event - Callback invoked when the list starts scrolling.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScrollStart(event: () => void): ListAttribute;

  /**
   * Triggered when the list stops scrolling after the user's finger leaves the screen. This event is also triggered
   * when the animation contained in the scrolling triggered by [Scroller]{@link Scroller} stops.
   *
   * @param { function } event - Callback triggered when the list stops sliding.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onScrollStop(event: () => void): ListAttribute;

  /**
   * Triggered when a list item is deleted.
   *
   * @param { function } event
   * @returns { ListAttribute } Whether to confirm the deletion of the current list item. The value **true** continues
   *     the deletion process, and **false** cancels the deletion process.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  onItemDelete(event: (index: number) => boolean): ListAttribute;

  /**
   * Triggered when a child component [ListItem]{@link ./list_item} of **List** moves.
   *
   * @param { function } event
   * @returns { ListAttribute } Whether the list has moved. The value **true** indicates that the list child component
   *     has moved, and **false** indicates that it has not moved.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onItemMove(event: (from: number, to: number) => boolean): ListAttribute;

  /**
   * Triggered when dragging of a child component [ListItem]{@link ./list_item} of **List** starts.
   *
   * Automatic scrolling of **List** is not supported when dragging to the edge of **List**. You can use the
   * [onMove](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-drag-sorting.md#onmove) API of
   * **ForEach**, **LazyForEach**, and **Repeat** to implement this effect. For details, see
   * [Example 12: Implementing Dragging with OnMove](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#example-12-implementing-dragging-with-onmove).
   * Note that the [onMove](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-drag-sorting.md#onmove) API
   * does not support dragging across **ListItemGroup** components.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 14.
   *
   * @param { function } event - Callback invoked when the [ListItem]{@link ./list_item} child component of the **List**
   *     starts to be dragged.
   *     <br> In API version 22 and earlier versions, the type of this parameter is
   *     **(event: ItemDragInfo, itemIndex: number) => (() => any) | void**, where the meanings of the **event** and
   *     **itemIndex** parameters are described in
   *     [OnItemDragStartCallback]{@link OnItemDragStartCallback}. [since 8 - 22]
   * @param { OnItemDragStartCallback } event - Callback invoked when the [ListItem]{@link ./list_item} child component
   *     of the **List** starts to be dragged.
   *     <br> In API version 22 and earlier versions, the type of this parameter is
   *     **(event: ItemDragInfo, itemIndex: number) => (() => any) | void**, where the meanings of the **event** and
   *     **itemIndex** parameters are described in [OnItemDragStartCallback]{@link OnItemDragStartCallback}. [since 23]
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragStart(event: OnItemDragStartCallback): ListAttribute;

  /**
   * Triggered when a dragged child component [ListItem]{@link ./list_item} of **List** enters the list range.
   *
   * @param { function } event - Information about the drag point.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): ListAttribute;

  /**
   * Triggered when a dragged child component [ListItem]{@link ./list_item} of **List** moves within the list range.
   *
   * @param { function } event - Information about the drag point.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): ListAttribute;

  /**
   * Triggered when a dragged child component [ListItem]{@link ./list_item} of **List** leaves the list range.
   *
   * @param { function } event - Information about the drag point.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): ListAttribute;

  /**
   * Triggered when the dragged item is dropped on the drop target of the list.
   *
   * During dragging across lists, **isSuccess** is set to **true** if the drop target is bound to **onItemDrop**.
   * Otherwise, **isSuccess** is set to **false**. During dragging within a list, **isSuccess** is the return value of
   * the **onItemMove** event.
   *
   * @param { function } event - Information about the drag point.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDrop(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void): ListAttribute;

  /**
   * When this API is called back, the event parameter passes the scroll offset that is about to occur. The event
   * processing function can calculate the actually required scroll offset based on the application scenario and return
   * it as the return value. The list will then scroll according to this returned actual scroll offset.
   *
   * If **listDirection** is set to **Axis.Vertical**, the return value is the amount by which the list needs to scroll
   * in the vertical direction. If **listDirection** is set to **Axis.Horizontal**, the return value is the amount by
   * which the list needs to scroll in the horizontal direction.
   *
   * This event is triggered when either of the following conditions is met:
   *
   * 1. Scrolling is initiated by user interaction (for example, finger swipe, keyboard, or mouse operation).
   * 2. The **List** component scrolls by inertia.
   * 3. Call the [fling]{@link Scroller#fling} API to trigger scrolling.
   *
   * This event is not triggered in the following scenarios:
   *
   * 1. A scroll control API other than [fling]{@link Scroller#fling} is called.
   * 2. The out-of-bounds bounce effect is active.
   * 3. The scrollbar is dragged.
   *
   * @param { function } event - Callback triggered when each frame scrolling starts. [since 9 - 19]
   * @param { OnScrollFrameBeginCallback } event - Callback triggered when each frame scrolling starts. [since 20]
   * @returns { ListAttribute } Returns the instance of the ListAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScrollFrameBegin(event: OnScrollFrameBeginCallback): ListAttribute;
}

/**
 * **List** is a list container component in ArkUI that presents continuous, multi-row or multi-column data of the same
 * type, such as images and text, and supports vertical or horizontal scrolling. When used together with **LazyForEach**
 * or **Repeat**, it supports lazy loading to improve the startup speed and reduce the memory usage in long-list
 * scenarios. It also supports preloading to reduce frame loss during scrolling and improve smoothness, as well as
 * single-column/multi-column layout, grouped lists, and sticky header/footer, making it suitable for scenarios such as
 * message lists, product lists, and settings pages.
 *
 * Lazy loading of **List** loads the child components in the visible area as required. Compared with full loading, lazy
 * loading can improve the app startup speed and reduce the memory usage. When **List** is used together with
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md), the lazy loading capabilities differ
 * as follows:
 *
 * - When **List** is used together with **ForEach**, all child nodes are created at a time. The nodes within the screen
 * range are laid out and rendered when needed. When a user swipes, the nodes that are out of the screen range are not
 * removed from the tree, and the nodes that enter the screen range are laid out and rendered.
 * - When **List** is used together with **LazyForEach**, all nodes within the screen range are created, laid out, and
 * rendered at a time. When a user swipes, the nodes that are out of the screen range are removed from the tree, and the
 * nodes that enter the screen range are created, laid out, and rendered.
 * - When the **List** component is used together with **Repeat** with
 * [virtualScroll]{@link RepeatAttribute#virtualScroll}, the lazy loading behavior is the same as that of
 * **LazyForEach**. When the **List** component is used together with **Repeat** without **virtualScroll**, the lazy
 * loading behavior is the same as that of **ForEach**.
 *
 * If a scrollable component is nested in a **List** component, their scrolling directions are the same, and the main
 * axis size is not set for the **List** component, the **List** component loads all child components, causing lazy
 * loading to fail. In this scenario, you are advised to nest the [ListItemGroup]{@link ./list_item_group} component in
 * **List** to optimize performance.
 *
 * Preloading in **List** refers to loading not only the visible child components within the display area but also some
 * invisible child components outside the display area during idle time. Preloading can reduce frame drops during
 * scrolling and improve smoothness. Preloading takes effect only when combined with lazy loading. **List** supports
 * setting the number of preloaded items through [cachedCount]{@link ListAttribute#cachedCount(value: number)}. By
 * default, one screen of child components is preloaded both above and below the display area (up to 16 rows of child
 * components). When **List** is used together with
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md), the preloading capabilities differ as
 * follows:
 *
 * - When the **List** component is used together with **ForEach** and **cachedCount** is set, in addition to laying out
 * child components within the visible area, child components within the range of **cachedCount** outside the visible
 * area are pre-laid out during idle time.
 * - When the **List** component is used together with **LazyForEach** and **cachedCount** is set, in addition to
 * creating and laying out child components within the display area, child components within the range of
 * **cachedCount** outside the display area are pre-created and pre-laid out during idle time.
 * - When the **List** component is used together with **Repeat** with
 * [virtualScroll]{@link RepeatAttribute#virtualScroll}, the preloading behavior is the same as that of **LazyForEach**.
 * When the **List** component is used together with **Repeat** without **virtualScroll**, the preloading behavior is
 * the same as that of **ForEach**.
 *
 * > **NOTE**
 * >
 * > The component has been bound with gestures to implement functions such as follow-up scrolling. If you need to add
 * > custom gestures, refer to [Gesture Blocking Enhancement]{@link ./common}.
 *
 * ###### Child Components
 *
 * Only [ListItem]{@link ./list_item}, [ListItemGroup]{@link ./list_item_group}, and custom components are supported as
 * child components. When a custom component is used under **List**, use **ListItem** or **ListItemGroup** as the top-
 * level component of the custom component. Do not directly set attributes and event methods for the custom component,
 * because **List** manages the layout and event handling of child components through **ListItem** or **ListItemGroup**.
 * Directly setting them may cause some functions to fail to take effect.
 *
 * Child components can be dynamically generated using rendering control types
 * [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md). **LazyForEach** or **Repeat** is
 * recommended to optimize performance.
 *
 * > **NOTE**
 * >
 * > If you encounter lag when processing a large number of child components, use methods such as lazy loading, caching
 * > list items, dynamic preloading, component reuse, and layout optimization.
 * >
 * > Since API version 21, the maximum width and height of a single child component of **List** is 16777216 px. In API
 * > version 20 and earlier, the maximum width and height of a single child component of **List** is 1000000 px. A child
 * > component exceeding this size may cause scrolling or display exceptions.
 * >
 * > The index value calculation rules for child components of **List** are as follows:
 * >
 * > - The index values increase sequentially in the order of the child components.
 * >
 * > - In an **if**\/**else** statement, only the child components in the branch whose condition is true participate in
 * > index value calculation. The child components in the branch whose condition is false are not counted.
 * >
 * > - In a **ForEach**\/**LazyForEach**\/**Repeat** statement, the index values of all expanded child components are
 * > calculated.
 * >
 * > - After [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and
 * > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) change, the index values of the
 * > child components are updated.
 * >
 * > - A **ListItemGroup** is counted as one index value as a whole, and the **ListItem** components inside the
 * > **ListItemGroup** are not counted.
 * >
 * > - The index value is still calculated when the **visibility** attribute of a child component of **List** is set to
 * > **Hidden** or **None**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const List: ListInterface;

/**
 * Defines List Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ListInstance: ListAttribute;