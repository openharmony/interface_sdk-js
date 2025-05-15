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
 * Declare scroll status
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare scroll status
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Declare scroll status
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Declare scroll status
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum ScrollState {
  /**
   * Not activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Not activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Not activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Idle state. Triggered when the scroll state returns to idle, and when the controller's
   * non-animated methods are used to control the scroll.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Idle,

  /**
   * Scrolling status.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Scrolling status.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Scrolling status.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Scrolling state. Triggered when the list is dragged with the finger,
   * when the scrollbar is dragged, or when the mouse scroll wheel is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Scroll,

  /**
   * Drag status.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Drag status.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Drag status.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Inertial scrolling state. Triggered by all animated scroll actions. This includes:
   * <br>- Inertial scrolling that occurs after a fling<br>- Bounce-back scrolling when the swipe reaches the edge
   * <br>- Inertial scrolling after quickly dragging the built-in scrollbar and releasing
   * <br>- Scrolling controlled by the animated methods provided by the scroller
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Fling,
}

/**
 * Declare list item alignment status
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Declare list item alignment status
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Declare list item alignment status
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum ListItemAlign {
  /**
   * Start position in the direction of cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Start position in the direction of cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The list items are packed toward the start edge of the <em>List</em> component along the cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Start,

  /**
   * Center position in the direction of cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Center position in the direction of cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The list items are centered in the <em>List</em> component along the cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Center,

  /**
   * End position in the direction of cross axis
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * End position in the direction of cross axis
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The list items are packed toward the end edge of the <em>List</em> component along the cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  End,
}

/**
 * Declare list item group area
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum ListItemGroupArea {
  /**
   * The edge of the viewport is in the position of <em>none</em>.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  NONE = 0,

  /**
   * The edge of the viewport is in the position of a list item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  IN_LIST_ITEM_AREA = 1,

  /**
   * The edge of the viewport is in the position of a header.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  IN_HEADER_AREA = 2,

  /**
   * The edge of the viewport is in the position of a footer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  IN_FOOTER_AREA = 3,
}

/**
 * Declare item group sticky style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Declare item group sticky style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Declare item group sticky style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum StickyStyle {
  /**
   * The header and footer of each item group will not be pinned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The header and footer of each item group will not be pinned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * In the <em>ListItemGroup</em> component, the header is not pinned to the top,
   * and the footer is not pinned to the bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  None = 0,

  /**
   * The header of each item group will be pinned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The header of each item group will be pinned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * In the <em>ListItemGroup</em> component, the header is pinned to the top,
   * and the footer is not pinned to the bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Header = 1,

  /**
   * The footer of each item group will be pinned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The footer of each item group will be pinned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * In the <em>ListItemGroup</em> component, the footer is pinned to the bottom,
   * and the header is not pinned to the top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Footer = 2,
}

/**
 * Declare edge effect of chain animation.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare enum ChainEdgeEffect {
  /**
   * Default edge effect. Compress the space in the drag direction
   * and stretch the space in the opposite drag direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  DEFAULT,

  /**
   * Stretch all space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  STRETCH,
}

/**
 * Declare limited position when scroll end.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Declare limited position when scroll end.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ScrollSnapAlign {
  /**
   * Default no item scroll snap alignment effect. When scroll end,
   * list item will stop without limit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * No alignment. This is the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  NONE = 0,

  /**
   * The first item in view will be aligned at the start of list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The first item in the view is aligned at the start of the list.
   * <br><em>NOTE</em>
   * <br>When the list hits the end, the items at the end must be completely displayed.
   * In this case, the items at the start may not be aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  START = 1,

  /**
   * The middle item in view will be aligned at the center of list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The middle items in the view are aligned in the center of the list.
   * <br><em>NOTE</em>
   * <br>The top and end items can be aligned in the center of the list.
   * In this case, a blank area may result, and the first or last item is aligned to the center of the list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  CENTER = 2,

  /**
   * The last item in view will be aligned at the end of list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The last item in the view is aligned at the end of the list.
   * <br><em>NOTE</em>
   * <br>When the list hits the start, the items at the start must be completely displayed.
   * In this case, the items at the end may not be aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  END = 3,
}

/**
 * Defines the chain animation options.
 *
 * @interface ChainAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare interface ChainAnimationOptions {
  /**
   * Minimum space for chain animation.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  minSpace: Length;

  /**
   * Maximum space for chain animation.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  maxSpace: Length;

  /**
   * Conductivity of chain animation.
   *
   * @type { ?number }
   * @default 0.7
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  conductivity?: number;

  /**
   * Intensity of chain animation.
   *
   * @type { ?number }
   * @default 0.3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  intensity?: number;

  /**
   * Edge effect of chain animation.
   *
   * @type { ?ChainEdgeEffect }
   * @default ChainEdgeEffect.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  edgeEffect?: ChainEdgeEffect;

  /**
   * Stiffness of chain spring.
   *
   * @type { ?number }
   * @default 228
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  stiffness?: number;

  /**
   * Damping of chain spring.
   *
   * @type { ?number }
   * @default 30
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  damping?: number;
}

/**
 * Defines a UIListEvent which is used to set different common event to target component.
 *
 * @extends UIScrollableCommonEvent
 * @interface UIListEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare interface UIListEvent extends UIScrollableCommonEvent {
  /**
   * Set or reset the callback which is triggered when the List will scroll.
   *
   * @param { OnWillScrollCallback | undefined } callback - The callback will be triggered when the List will scroll.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  setOnWillScroll(callback: OnWillScrollCallback | undefined): void;

  /**
   * Set or reset the callback which is triggered when List view did scroll.
   *
   * @param { OnScrollCallback | undefined } callback - callback function, triggered when the List view did scroll.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  setOnDidScroll(callback: OnScrollCallback | undefined): void;

  /**
   * Set or reset the callback which is triggered when the start, end, or center positions of the display change.
   *
   * @param { OnListScrollIndexCallback | undefined } callback - callback function, triggered when the
   *     start, end, or center positions of the display change.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  setOnScrollIndex(callback: OnListScrollIndexCallback | undefined): void;

  /**
   * Set or reset the callback which is triggered when the list visible content changes.
   *
   * @param { OnScrollVisibleContentChangeCallback | undefined } callback - callback function, triggered when
   *     the list visible content changes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  setOnScrollVisibleContentChange(callback: OnScrollVisibleContentChangeCallback | undefined): void;
}

/**
 * Defines the close swipe action options.
 *
 * @interface CloseSwipeActionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the close swipe action options.
 *
 * @interface CloseSwipeActionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface CloseSwipeActionOptions {
  /**
   * Called after collapse animation completed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Triggered after the collapse animation is complete.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onFinish?: ()=>void
}

/**
 * Defines the visible list content info.
 *
 * @interface VisibleListContentInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface VisibleListContentInfo {
  /**
   * Index of the list item or list item group in the list display area.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  index: number

  /**
   * Position of the top or bottom edge of the viewport in the
   * list item group to which the edge is located, if applicable.
   *
   * @type { ?ListItemGroupArea }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  itemGroupArea?: ListItemGroupArea

  /**
   * Index of the starting or ending list item in the list
   * item group to which the top or bottom edge of the viewport is located.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  itemIndexInGroup?: number
}

/**
 * Callback of scroll visible content, using in onScrollVisibleContentChange.
 *
 * @typedef {function} OnScrollVisibleContentChangeCallback
 * @param {number} start - Information about the currently displayed first list item or list item group.
 * @param {number} end - Information about the currently displayed last list item or list item group.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type OnScrollVisibleContentChangeCallback = (start: VisibleListContentInfo, end: VisibleListContentInfo) => void;

/**
 * Defines the callback type used in onScrollIndex.
 *
 * @typedef {function} OnListScrollIndexCallback
 * @param {number} start - the first index in visible content.
 * @param {number} end - the last index in visible content.
 * @param {number} center - the center index in visible content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 19
 */
declare type OnListScrollIndexCallback = (start: number, end: number, center: number) => void;

/**
 * @extends Scroller
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * @extends Scroller
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ListScroller extends Scroller {
  /**
   * Gets the size and position of a ListItem in a ListItemGroup.
   *
   * @param { number } index - Index of the ListItemGroup in List.
   * @param { number } indexInGroup - Index of the ListItem in ListItemGroup.
   * @returns { RectResult } Returns the size and position.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Obtains the size of a list item in a list item group and its position relative to the list.
   *
   * <p><strong>NOTE</strong>:
   * <br>- The value of <em>index</em> must be the index of a child component visible in the display area.
   * Otherwise, the value is considered invalid.
   * <br>- The child component for which <em>index</em> is set must be a list item group. Otherwise,
   * the <em>index </em>value is considered invalid.
   * <br>- The value of <em>indexInGroup</em> must be the index of a list item in the list item group 
   * visible in the display area. Otherwise, the value is considered invalid.
   * <br>- When <em>index</em> or <em>indexInGroup</em> is set to an invalid value, the returned size and position are both <em>0</em>.
   * </p>
   * 
   * @param { number } index - Index of the list item group in the list.
   * @param { number } indexInGroup - Index of the list item in the list item group.
   * @returns { RectResult } - Size of the list item in the list item group and its position relative to the list.
   * <br>Unit: vp
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getItemRectInGroup(index: number, indexInGroup: number): RectResult;

  /**
   * Called when sliding to the specified index in specified ListItemGroup.
   *
   * @param { number } index - Index of the ListItemGroup in List.
   * @param { number } indexInGroup - Index of the ListItem in ListItemGroup.
   * @param { boolean } smooth - If true, scroll to index item with animation. If false, scroll to index item without animation.
   * @param { ScrollAlign } align - Sets the alignment mode of a specified index.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Scrolls to the specified list item in the specified list item group.
   *
   * @param { number } index - Index of the target list item group in the current container.
   * <br><em>NOTE</em>
   * <br>If the value set is a negative value or greater than the maximum index of the items in the container,
   * the value is deemed abnormal, and no scrolling will be performed.
   * @param { number } indexInGroup - Index of the target list item in the list item group specified by <em>index</em>.
   * <br><em>NOTE</em>
   * <br>If the value set is a negative value or greater than the maximum index of the items in the list item group,
   * the value is deemed abnormal, and no scrolling will be performed.
   * @param { boolean } smooth - Whether to enable the smooth animation for scrolling to the item with the specified index.
   * The value <em>true</em> means to enable that the smooth animation, and <em>false</em> means the opposite.
   * @default false
   * @param { ScrollAlign } align - How the list item to scroll to is aligned with the container.
   * @default ScrollAlign.START
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scrollToItemInGroup(index: number, indexInGroup:number, smooth?: boolean, align?: ScrollAlign): void;

  /**
   * Collapse all listItem.
   *
   * @param { CloseSwipeActionOptions } options - Options of close Swipe items.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Collapses the list items in the EXPANDED state and sets callback events.
   *
   * <p><strong>NOTE</strong>:
   * <br>- A <em>ListScroller</em> must be bound to the <em>List</em> component.
   * </p>
   * 
   * @param { CloseSwipeActionOptions } options - Callback events for collapsing list items in the EXPANDED state.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  closeAllSwipeActions(options?: CloseSwipeActionOptions): void;
  
  /**
   * Obtains the index information of the child component at the specified coordinates.
   *
   * <p><strong>NOTE</strong>:
   * <br>- If the provided value of <em>x</em> or <em>y</em> is invalid,
   * the returned VisibleListContentInfo object has the <em>index</em> property set to <em>-1</em>,
   * and both <em>itemGroupArea</em> and <em>itemIndexInGroup</em> are <em>undefined</em>.
   * </p>
   * 
   * @param { number } x - X-coordinate, in vp.
   * @param { number } y - Y-coordinate, in vp.
   * @returns { VisibleListContentInfo } Index information of the child component at the specified coordinates.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - The controller not bound to component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  getVisibleListContentInfo(x: number, y: number): VisibleListContentInfo;
}

/**
 * Defines the options of the <em>List</em> component.
 *
 * <p><strong>NOTE</strong>:
 * <br>- The default value of the universal attribute clip is <em>true</em> for the <em>List</em> component.
 * </p>
 * 
 * @interface ListOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
interface ListOptions {
  /**
   * Set initialIndex.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set initialIndex.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set initialIndex.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set initialIndex.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Index of the item to be displayed at the start when the list is initially loaded.
   * @default <em>0</em>
   * <br><em>NOTE</em>
   * <br>If the set value is a negative number or is greater than the index of the last item in the list,
   * the value is invalid. In this case, the default value will be used.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  initialIndex?: number;
  /**
   * Set space.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set space.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set space.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set space.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Spacing between list items along the main axis.
   * <br>If the parameter type is number, the unit is vp.
   * <br><em>NOTE</em>
   * <br>If this parameter is set to a negative number or a value greater than or equal to the length of the list content area, the default value is used.
   * <br>If this parameter is set to a value less than the width of the list divider, the width of the list divider is used as the spacing.
   * <br> Child components of <em>List</em> whose <em>visibility</em> attribute is set to <em>None</em> are not displayed, but the spacing above and below them still takes effect.
   *
   * @type { ?(number | string) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  space?: number | string;
  /**
   * Set scroller.
   *
   * @type { ?Scroller }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set scroller.
   *
   * @type { ?Scroller }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set scroller.
   *
   * @type { ?Scroller }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set scroller.
   *
   * @type { ?Scroller }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Scroller, which can be bound to scrollable components.
   * <br><em>NOTE</em>
   * <br>The scroller cannot be bound to other scrollable components.
   *
   * @type { ?Scroller }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  scroller?: Scroller;
}

/**
 * The list interface is extended.
 *
 * @interface ListInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * The list interface is extended.
 *
 * @interface ListInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * The list interface is extended.
 *
 * @interface ListInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * The list interface is extended.
 *
 * @interface ListInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface ListInterface {
  /**
   * Called when interface data is called.
   *
   * @param { object } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when interface data is called.
   *
   * @param { object } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when interface data is called.
   *
   * @param { object } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when interface data is called.
   *
   * @param { object } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Called when interface data is called.
   * Anonymous Object Rectification.
   *
   * @param { ListOptions } [options] - list options
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  (options?: ListOptions): ListAttribute;
}

/**
 * Defines the divider style of the list or list item group.
 *
 * @interface ListDividerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare interface ListDividerOptions {
  /**
   * Set strokeWidth.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set strokeWidth.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set strokeWidth.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set strokeWidth.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Width of the divider.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  strokeWidth: Length;
  /**
   * Set color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Color of the divider.
   *
   * @type { ?ResourceColor }
   * @default 0x08000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  color?: ResourceColor;
  /**
   * Set startMargin.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set startMargin.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set startMargin.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set startMargin.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Distance between the divider and the start edge of the list.
   *
   * @type { ?Length }
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  startMargin?: Length;
  /**
   * Set endMargin.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set endMargin.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set endMargin.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set endMargin.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Distance between the divider and the end edge of the list.
   *
   * @type { ?Length }
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  endMargin?: Length;
}

/**
 * @extends CommonMethod<ListAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @extends CommonMethod<ListAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @extends CommonMethod<ListAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @extends ScrollableCommonMethod<ListAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class ListAttribute extends ScrollableCommonMethod<ListAttribute> {
  /**
   * Called when need to decide how much lanes the list will show.
   *
   * @param { number | LengthConstrain } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when need to decide how much lanes the list will show.
   *
   * @param { number | LengthConstrain } value
   * @param { Dimension } gutter
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when need to decide how much lanes the list will show.
   *
   * @param { number | LengthConstrain } value - Number of columns or rows in the list.
   * @default 1
   * @param { Dimension } gutter - Gap between columns.
   * @default 0
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  lanes(value: number | LengthConstrain, gutter?: Dimension): ListAttribute;

  /**
   * Called when need to decide how to align lanes in the direction of the cross axis.
   *
   * @param { ListItemAlign } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when need to decide how to align lanes in the direction of the cross axis.
   *
   * @param { ListItemAlign } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when need to decide how to align lanes in the direction of the cross axis.
   *
   * @param { ListItemAlign } value - Alignment mode of list items along the cross axis.
   * @default ListItemAlign.Start
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  alignListItem(value: ListItemAlign): ListAttribute;

  /**
   * Called when the arrangement direction of the list component is set.
   *
   * @param { Axis } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the arrangement direction of the list component is set.
   *
   * @param { Axis } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the arrangement direction of the list component is set.
   *
   * @param { Axis } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the arrangement direction of the list component is set.
   *
   * @param { Axis } value - Direction in which the list items are arranged.
   * @default Axis.Vertical
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  listDirection(value: Axis): ListAttribute;

  /**
   * Called when the display mode of the side slider is set.
   *
   * @param { BarState } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the display mode of the side slider is set.
   *
   * @param { BarState } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the display mode of the side slider is set.
   *
   * @param { BarState } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the display mode of the side slider is set.
   *
   * @param { BarState } value - Scrollbar state.
   * <br><em>NOTE</em>
   * <br>In API version 9 and earlier versions, the default value is <em>BarState.Off</em>. 
   * Since API version 10, the default value is <em>BarState.Auto</em>.
   * @default BarState.Auto
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  scrollBar(value: BarState): ListAttribute;

  /**
   * Called when the sliding effect is set.
   *
   * @param { EdgeEffect } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the sliding effect is set.
   *
   * @param { EdgeEffect } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the sliding effect is set.
   *
   * @param { EdgeEffect } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the sliding effect is set.
   *
   * <p><strong>NOTE</strong>:
   * <br>- By default, this component can produce a bounce effect only when there is more than one screen of content.
   * To produce a bounce effect when there is less than one screen of content,
   * use the <em>options</em> parameter of the <em>edgeEffect</em> attribute.
   * </p> 
   * 
   * @param { EdgeEffect } value - Effect used when the scroll boundary is reached. The spring and shadow effects are supported.
   * @default EdgeEffect.Spring
   * @param { EdgeEffectOptions } options - Whether to enable the scroll effect when the component content is smaller than the component itself.
   * The value <em>{ alwaysEnabled: true }</em> means to enable the scroll effect, and <em>{ alwaysEnabled: false }</em> means the opposite.
   * @default { alwaysEnabled: false }
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  edgeEffect(value: EdgeEffect, options?: EdgeEffectOptions): ListAttribute;

  /**
   * Called when need to decide contentStartOffset the list will show.
   * @param { number } value - the value Of startOffset.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when need to decide contentStartOffset the list will show.
   * @param { number } value - Offset from the start of the list content to the boundary of the list display
   * @default 0vp
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  contentStartOffset(value: number): ListAttribute;

  /**
   * Called when need to decide contentEndOffset the list will show.
   * @param { number } value - the value Of endOffset.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when need to decide contentEndOffset the list will show.
   * @param { number } value - Offset from the end of the list content to the boundary of the list display area.
   * @default 0vp
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  contentEndOffset(value: number): ListAttribute;

  /**
   * Called when the ListItem split line style is set.
   *
   * @param { object | null } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the ListItem split line style is set.
   *
   * @param { {strokeWidth: Length;color?: ResourceColor;startMargin?: Length;endMargin?: Length;} | null } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the ListItem split line style is set.
   *
   * @param { {strokeWidth: Length;color?: ResourceColor;startMargin?: Length;endMargin?: Length;} | null } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the ListItem split line style is set.
   *
   * @param { {strokeWidth: Length;color?: ResourceColor;startMargin?: Length;endMargin?: Length;} | null } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the ListItem split line style is set.
   * Anonymous Object Rectification.
   *
   * @param { ListDividerOptions | null } value - Style of the divider for the list items.
   * @default null
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  divider(
    value: ListDividerOptions | null,
  ): ListAttribute;

  /**
   * Called when judging whether it is in editable mode.
   *
   * @param { boolean } value - Whether to enable edit mode.
   * @default false
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   */
  editMode(value: boolean): ListAttribute;

  /**
   * Called when judging whether it is multiSelectable.
   *
   * @param { boolean } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when judging whether it is multiSelectable.
   *
   * @param { boolean } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when judging whether it is multiSelectable.
   *
   * @param { boolean } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when judging whether it is multiSelectable.
   *
   * @param { boolean } value - Whether to enable multiselect.
   * <br><em>false</em> (default): Multiselect is disabled.
   * <br><em>true</em>: Multiselect is enabled.
   * @default false
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  multiSelectable(value: boolean): ListAttribute;

  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   *
   * @param { number } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   *
   * @param { number } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   *
   * @param { number } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   *
   * @param { number } value - Number of list items to be preloaded.
   * <br>Default value: number of nodes visible on the screen, with the maximum value of 16
   * <br>Value range: [0, +∞)
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  cachedCount(value: number): ListAttribute;

  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   *
   * @param { number } count - Number of list items to be preloaded.
   * <br>Default value: number of nodes visible on the screen, with the maximum value of 16
   * <br>Value range: [0, +∞)
   * @param { boolean } show - Whether to display the preloaded list items.
   * @default false
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   */
  cachedCount(count: number, show: boolean): ListAttribute;

  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   *
   * @param { boolean } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   *
   * @param { boolean } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   *
   * @param { boolean } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   *
   * @param { boolean } value - Whether to enable chained animations.
   * <br><em>false</em> (default): Chained animations are disabled.
   * <br><em>true</em>: Chained animations are enabled.
   * @default false
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  chainAnimation(value: boolean): ListAttribute;

  /**
   * Called to setting chain linkage dynamic effect options.
   *
   * @param { ChainAnimationOptions } value - options of the chain animation.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  chainAnimationOptions(value: ChainAnimationOptions): ListAttribute;

  /**
   * Called when header or footer of item group will be pinned.
   *
   * @param { StickyStyle } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when header or footer of item group will be pinned.
   *
   * @param { StickyStyle } value
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when header or footer of item group will be pinned.
   * 
   * <p><strong>NOTE</strong>:
   * <br>- Occasionally, after <em>sticky</em> is set, floating-point calculation precision may result in small gaps appearing during scrolling.
   * To address this issue, you can apply the pixelRound attribute to the current component, which rounds down the pixel values and help eliminate the gaps.
   * </p>
   *
   * @param { StickyStyle } value - Whether to pin the header to the top or the footer to the bottom in the list item group.
   * @default StickyStyle.None
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  sticky(value: StickyStyle): ListAttribute;

  /**
   * Called to set list item scroll end alignment effect.
   * 
   * @param { ScrollSnapAlign } value - options of the list alignment effect.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Called to set list item scroll end alignment effect.
   * 
   * @param { ScrollSnapAlign } value - Alignment mode of the scroll snap position.
   * @default ScrollSnapAlign.NONE
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  scrollSnapAlign(value: ScrollSnapAlign): ListAttribute;

  /**
   * Called to setting the nested scroll options.
   *
   * @param { NestedScrollOptions } value - options for nested scrolling.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Called to setting the nested scroll options.
   *
   * @param { NestedScrollOptions } value - Nested scrolling options.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  nestedScroll(value: NestedScrollOptions): ListAttribute;

  /**
   * Called when setting whether to enable scroll by gesture or mouse.
   *
   * @param { boolean } value
   * @returns { ListAttribute } The attribute of the list
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when setting whether to enable scroll by gesture or mouse.
   *
   * @param { boolean } value - Whether to support scroll gestures.
   * @default true
   * @returns { ListAttribute } The attribute of the list
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  enableScrollInteraction(value: boolean): ListAttribute;

  /**
   * Called to setting the friction.
   *
   * @param { number | Resource } value - options for scrolling friction.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called to setting the friction.
   *
   * @param { number | Resource } value - Friction coefficient.
   * <br>Default value: <em>0.9</em> for wearable devices and <em>0.6</em> for non-wearable devices.
   * <br>Since API version 11, the default value for non-wearable devices is <em>0.7</em>.
   * <br>Since API version 12, the default value for non-wearable devices is <em>0.75</em>.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  friction(value: number | Resource): ListAttribute;

  /**
   * Set children main size for List.
   *
   * @param { ChildrenMainSize } value - children main size for List
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  childrenMainSize(value: ChildrenMainSize): ListAttribute;

  /**
   * Set maintain visible content position List.
   * 
   * <p><strong>NOTE</strong>:
   * <br>- The visible content position will only remain unchanged when <em>LazyForEach</em> is used to insert or delete data outside the visible area.
   * If <em>ForEach</em> is used to insert or delete data, or if <em>LazyForEach</em> is used for data reloading,
   * the visible content position will change even if <em>maintainVisibleContentPosition</em> is set to <em>true</em>.
   * <br>- When <em>maintainVisibleContentPosition</em> is set to <em>true</em>, 
   * inserting or deleting data above the visible area will trigger <em>onDidScroll</em> and <em>onScrollIndex</em> events.
   * <br>- In a multi-column scenario, setting <em>maintainVisibleContentPosition</em> to <em>true</em> allows
   * you to insert or delete entire rows of data while keeping the visible content position unchanged.
   * If the insertion or deletion does not involve entire rows, however, the visible content position will still change.
   * </p>
   *
   * @param { boolean } enabled - Whether the visible content position should remain unchanged
   * when data is inserted or deleted above the visible area.
   * @default false
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  maintainVisibleContentPosition(enabled: boolean): ListAttribute;

  /**
   * Sets the layout of the List component from the end.
   * 
   * <p><strong>NOTE</strong>:
   * <br>- When <em>stackFromEnd</em> is set to <em>true</em>, the following rules apply:
   * <br>If the content of the <em>List</em> component is shorter than the component height,
   * the content will be aligned to the bottom of the component.
   * <br>- If the height of a list item in the visible area changes, or if a new list item is inserted,
   * the list items above the changed or inserted item will move upwards to accommodate the new layout.
   * <br>- The default value of <em>initialIndex</em> becomes the total number of list items minus one.
   * </p>
   *
   * @param { boolean } enabled - Whether the list's layout starts from the bottom (end) rather than the top (beginning).
   * @default false
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  stackFromEnd(enabled: boolean): ListAttribute;

  /**
   * Called when the offset and status callback of the slide are set.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the offset and status callback of the slide are set.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the offset and status callback of the slide are set.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the offset and status callback of the slide are set.
   *
   * @param { number } scrollOffset - Scroll offset of each frame.
   * The offset is positive when the list is scrolled up and negative when the list is scrolled down.
   * @param { ScrollState } - Current scroll state.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 12
   * @useinstead common.ScrollableCommonMethod#onDidScroll
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): ListAttribute;

  /**
   * Called when the start and end positions of the display change.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the start and end positions of the display change.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the start and end positions of the display change.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the start and end positions of the display change.
   *
   * @param { number } start - Index of the first child component in the list display area.
   * @param { number } end - Index of the last child component in the list display area.
   * @param { number } center - Index of the center child component in the list display area.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onScrollIndex(event: (start: number, end: number, center: number) => void): ListAttribute;

  /**
   * Called when the list visible content changes.
   *
   * @param { OnScrollVisibleContentChangeCallback } handler - Callback invoked when the displayed content changes.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollVisibleContentChange(handler: OnScrollVisibleContentChangeCallback): ListAttribute;

  /**
   * Called when the list begins to arrive.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the list begins to arrive.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the list begins to arrive.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the list begins to arrive.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onReachStart(event: () => void): ListAttribute;

  /**
   * Called when the list reaches the end.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the list reaches the end.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the list reaches the end.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the list reaches the end.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onReachEnd(event: () => void): ListAttribute;

  /**
   * Called when the slider start.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the slider start.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the slider start.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onScrollStart(event: () => void): ListAttribute;

  /**
   * Called when the slider stops.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the slider stops.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the slider stops.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the slider stops.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onScrollStop(event: () => void): ListAttribute;

  /**
   * Called when a list item is deleted.
   *
   * @param { number } index - Index of the deleted list item.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   */
  onItemDelete(event: (index: number) => boolean): ListAttribute;

  /**
   * Called when a list item is moved.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when a list item is moved.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when a list item is moved.
   *
   * @param { number } from - Index of the item before moving.
   * @param { number } to - Index of the item after moving.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onItemMove(event: (from: number, to: number) => boolean): ListAttribute;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { ItemDragInfo } event - Information about the drag point.
   * @param { number } itemIndex - Index of the dragged item.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onItemDragStart(event: (event: ItemDragInfo, itemIndex: number) => ((() => any) | void)): ListAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { ItemDragInfo } event - Information about the drag point.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): ListAttribute;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { ItemDragInfo } event - Information about the drag point.
   * @param { number } itemIndex - Initial position of the dragged item.
   * @param { number } Index - of the position to which the dragged item is dropped.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): ListAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { ItemDragInfo } event - Information about the drag point.
   * @param { number } itemIndex - Index of the dragged item.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): ListAttribute;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { ItemDragInfo } event - Information about the drag point.
   * @param { number } itemIndex - Initial position of the dragged item.
   * @param { number } insertIndex - Index of the position to which the dragged item is dropped.
   * @param { boolean } isSuccess - Whether the dragged item is successfully dropped.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onItemDrop(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void): ListAttribute;

  /**
   * Called when scrolling begin each frame.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when scrolling begin each frame.
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when scrolling begin each frame.
   *
   * @param { number } offset - Amount to scroll by, in vp.
   * @param { ScrollState } state - Current scroll state.
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onScrollFrameBegin(event: (offset: number, state: ScrollState) => { offsetRemain: number }): ListAttribute;
}

/**
 * Defines List Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines List Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines List Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines List Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Defines List Component.
 * It is recommended to use LazyForEach or Repeat to generate child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare const List: ListInterface;

/**
 * Defines List Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines List Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines List Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines List Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const ListInstance: ListAttribute;
