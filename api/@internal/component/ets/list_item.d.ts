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
 * Enumerates the sticky effects for list items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead list/StickyStyle
 */
declare enum Sticky {

  /**
   * No sticky effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  None,

  /**
   * The current item sticks to the top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Normal,

  /**
   * The current item sticks to the top with an opacity change effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Opacity,
}

/**
 * Enumerates the edit modes of list items.
 *
 * > **NOTE**
 * >
 * > This API is supported since API version 7 and deprecated since API version 9. There is no substitute API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7 dynamiconly
 * @deprecated since 9
 */
declare enum EditMode {

  /**
   * No restriction on the edit operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  None,

  /**
   * Deletable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Deletable,

  /**
   * Movable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Movable,
}

/**
 * Enumerates the edge effects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum SwipeEdgeEffect {

  /**
   * The **ListItem** can continue to be swiped after the swipe distance exceeds the size of the swipe-out component.
   *
   * If a delete area is set, the **ListItem** can continue to be swiped after the swipe distance exceeds the delete
   * threshold,
   *
   * and it rebounds along the spring damping curve after being released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Spring,

  /**
   * The swipe distance of the **ListItem** cannot exceed the size of the swipe-out component.
   *
   * If a delete area is set, the swipe distance of the **ListItem** cannot exceed the delete threshold,
   *
   * and when a delete callback is set, releasing the **ListItem** after the delete threshold is reached triggers the
   * delete callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None,
}

/**
 * Enumerates swipe states of list items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum SwipeActionState {

  /**
   * Collapsed state, in which the action items are hidden.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COLLAPSED,

  /**
   * Expanded state, in which the action items are displayed.
   *
   * **NOTE**
   *
   * The swipe action items must be set for the list item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  EXPANDED,

  /**
   * Long-distance state, in which the list item is deleted after it enters the long-distance deletion area.
   *
   * **NOTE**
   *
   * This state can be entered only when the final value of **actionAreaDistance** is greater than 0 and less than the
   * size of the list item in the swipe direction minus the size of the swipe-out component in the swipe direction, and
   * the position where the finger is released after swiping is greater than or equal to this value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  ACTIONING,
}

/**
 * Enumerates the swipe action menu display directions for **ListItem** components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
declare enum ListItemSwipeActionDirection {

  /**
   * For vertical lists: left side in LTR mode, right side in RTL mode. For horizontal lists: top side.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  START = 0,

  /**
   * For vertical lists: right side in LTR mode, left side in RTL mode. For horizontal lists: bottom side.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  END = 1,
}

/**
 * Implements the swipe action menu manager for list items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
declare class ListItemSwipeActionManager {

  /**
   * Expands the swipe action menu for the specified list item.
   *
   * > **NOTE**
   * >
   * > - If the **show** parameter of the **cachedCount** attribute of the **List** component is set to **true**,
   * > **ListItems** that have been preloaded outside the display area of the **List** support expansion. Otherwise,
   * > nodes outside the display area of the **List** do not support expansion.
   *
   * @param { FrameNode } node - **ListItem** node object.
   * @param { ListItemSwipeActionDirection } direction - Swipe action menu display direction for the **ListItem**
   *     component.
   * @throws { BusinessError } 100023 - The component type of the node is incorrect.
   * @throws { BusinessError } 106203 - The node not mounted to component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  static expand(node: FrameNode, direction: ListItemSwipeActionDirection): void;

  /**
   * Collapses the swipe action menu for the specified list item.
   *
   * @param { FrameNode } node - **ListItem** node object.
   * @throws { BusinessError } 100023 - The component type of the node is incorrect.
   * @throws { BusinessError } 106203 - The node not mounted to component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  static collapse(node: FrameNode): void;
}

/**
 * Used to configure the **start** or **end** swipe-out item in [SwipeActionOptions]{@link SwipeActionOptions},
 * including the action item displayed when swiping out, the distance threshold of the long-distance action area, and
 * the callbacks for entering and exiting the long-distance action area, triggering the action when the finger is
 * lifted, and state changes.
 *
 * When used as a **start** swipe-out item, it is displayed on the left of the **ListItem** when the **List** is in
 * vertical layout, and above the **ListItem** when the **List** is in horizontal layout. When used as an end swipe-out
 * item, it is displayed on the right of the **ListItem** when the **List** is in vertical layout, and below the
 * **ListItem** when the **List** is in horizontal layout.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SwipeActionItem {

  /**
   * Swipe action item displayed when the list item is swiped left or right (in vertical list layout)
   * or up or down (in horizontal list layout).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  builder?: CustomBuilder;

  /**
   * Swipe action item displayed when the list item is swiped left or right (in vertical list layout)
   * or up or down (in horizontal list layout).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  builderComponent?: ComponentContent;

  /**
   * Swipe distance threshold for deleting the list item. This threshold applies after the swipe action component
   * is fully swiped into view and triggers the deletion action.
   *
   * @default 56vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  actionAreaDistance?: Length;

  /**
   * Callback invoked when the list item is released while in the delete area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onAction?: () => void;

  /**
   * Callback invoked each time the list item enters the delete area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onEnterActionArea?: () => void;

  /**
   * Callback invoked each time the list item exits the delete area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onExitActionArea?: () => void;

  /**
   * Callback invoked when the swipe state of the list item changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onStateChange?: (state: SwipeActionState) => void;
}

/**
 * In the **@builder** functions corresponding to **start** and **end**, the top-level component must be a single
 * component. If the top level is a rendering control statement such as **if**\/**else** or **ForEach**, ensure that it
 * can generate only a single component. Otherwise, undefined behavior may occur.
 *
 * The swipe gesture works only in the list item area. If a child component is swiped out of the list item area, the
 * portion outside the list item does not respond to the swipe gesture. Therefore, in multi-column mode, you are advised
 * not to set the swipe-out component too wide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface SwipeActionOptions {

  /**
   * Swipe action item displayed on the left of the list item when the item is swiped right
   * (in vertical list layout) or above the list item when the item is swiped down (in horizontal list layout).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  start?: CustomBuilder | SwipeActionItem;

  /**
   * Swipe action item displayed on the right of the list item when the item is swiped left
   * (in vertical list layout) or below the list item when the item is swiped up (in horizontal list layout).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  end?: CustomBuilder | SwipeActionItem;

  /**
   * Scroll effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  edgeEffect?: SwipeEdgeEffect;

  /**
   * Callback invoked when the location of the list item changes, in vp, when it is swiped left or right
   * (in vertical list layout) or up or down (in horizontal list layout).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onOffsetChange?: (offset: number) => void;
}

/**
 * Enumerates the card styles of the **ListItem** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ListItemStyle {

  /**
   * No style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NONE = 0,

  /**
   * Default card style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CARD = 1,
}

/**
 * Defines **ListItem** component configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ListItemOptions {

  /**
   * Style of the list item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  style?: ListItemStyle;
}

/**
 * **ListItem** is used to display a specific list item in a list. It supports capabilities such as swipe-out menus,
 * selected states, mouse frame selection, and card styles. It must be used with the **List** component. It is
 * applicable to scenarios where content needs to be displayed in a list and interactive operations (such as swipe-to-
 * delete and selection marking) need to be performed on individual list items.
 *
 * > **NOTE**
 * >
 * > - The parent of this component can only be [List]{@link ./list} or
 * > [ListItemGroup]{@link ./list_item_group}.
 * >
 * > - When this component is used with
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are
 * > created when it is created. When this component is used with
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) or
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is
 * > **List** or **ListItemGroup**, its child components are created when it is laid out.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ListItemInterface {

  /**
   * Creates a **ListItem** component.
   *
   * @param { ListItemOptions } value - Provides optional parameters for the **ListItem**. This object contains the
   *     **style** parameter of the [ListItemStyle]{@link ListItemStyle} enum type. Pass this parameter when the card
   *     style (**ListItemStyle.CARD**) needs to be set. If it is not passed, the default configuration (no style) is
   *     used.<br/>Default value: **{ style: ListItemStyle.NONE }**
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (value?: ListItemOptions): ListItemAttribute;

  /**
   * Creates a **ListItem** component.
   *
   * @param { string } value - This parameter is deprecated and does not take effect in the current version. You are
   *     advised to use
   *     [ListItem<sup>10+</sup>]{@link ListItem} instead.
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form [since 9]
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead listItem/ListItemInterface
   */
  (value?: string): ListItemAttribute;
}

/**
 * In addition to the
 * [universal attributes]{@link common}, the following
 * attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class ListItemAttribute extends CommonMethod<ListItemAttribute> {

  /**
   * Sets the sticky effect of the list item.
   *
   * @param { Sticky } value - Sticky effect of the list item.
   *     <br>Default value: **Sticky.None**
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead list/List#sticky
   */
  sticky(value: Sticky): ListItemAttribute;

  /**
   * Sets whether to enable edit mode, where the list item can be deleted or moved.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. No substitute is provided.
   *
   * @param { boolean | EditMode } value - Whether the **ListItem** element is editable. When set to **true**, the list
   *     item enters the edit mode and can be deleted or moved. When set to **false**, the list item is not editable.
   *     When set to an **EditMode** enum value, **None** indicates that the edit operation is not restricted,
   *     **Deletable** indicates that the list item can be deleted, and **Movable** indicates that the list item can be
   *     moved.<br/>Default value: **false**
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  editable(value: boolean | EditMode): ListItemAttribute;

  /**
   * Sets whether the current **ListItem** element can be selected by mouse frame selection. This takes effect only when
   * the parent [List]{@link ./list} component has
   * [multiSelectable]{@link ./list:ListAttribute#multiSelectable} set to **true** to
   * enable mouse frame selection.
   *
   * @param { boolean } value - Whether the **ListItem** element can be selected by mouse frame selection. When set to
   *     **true**, it can be selected by mouse frame selection; when set to **false**, it cannot.<br/>Default value:
   *     **true**<br/>**Note:** This takes effect only when the outer
   *     [List]{@link ./list} component sets
   *     [multiSelectable]{@link ./list:ListAttribute#multiSelectable} to **true** to
   *     enable mouse frame selection.
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectable(value: boolean): ListItemAttribute;

  /**
   * Sets whether the list item is selected. This attribute supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md). This attribute must be used before the
   * [polymorphic style]{@link common} is set.
   * Otherwise, the style settings will not take effect.
   *
   * @param { boolean } value - Whether the **ListItem** is selected. The value **true** means the selected state, and
   *     **false** means the default state.<br/>Default value: **false**<br/>**Note:** This attribute must be set before
   *     the polymorphic style is set for the selected state style to take effect.
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selected(value: boolean): ListItemAttribute;

  /**
   * Sets the swipe action item displayed when the list item is swiped out from the screen edge.
   *
   * @param { SwipeActionOptions } value - Configuration of the swipe-out component of the **ListItem**, used to set the
   *     component displayed when swiped out, the swipe effect, and the swipe state callback.
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  swipeAction(value: SwipeActionOptions): ListItemAttribute;

  /**
   * Triggered when the selected state of the list item for multiselect changes.
   *
   * This callback is triggered when the outer [List]{@link ./list}
   * component has [multiSelectable]{@link ./list:ListAttribute#multiSelectable} set
   * to **true** to enable mouse box selection, and the [selectable]{@link ListItemAttribute#selectable} attribute of
   * the current ListItem is set to **true**.
   *
   * @param { function } event
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSelect(event: (isSelected: boolean) => void): ListItemAttribute;
}

/**
 * Defines ListItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ListItemInstance: ListItemAttribute;

/**
 * **ListItem** is used to display a specific list item in a list. It supports capabilities such as swipe-out menus,
 * selected states, mouse frame selection, and card styles. It must be used with the **List** component. It is
 * applicable to scenarios where content needs to be displayed in a list and interactive operations (such as swipe-to-
 * delete and selection marking) need to be performed on individual list items.
 *
 * > **NOTE**
 * >
 * > - The parent of this component can only be [List]{@link ./list} or
 * > [ListItemGroup]{@link ./list_item_group}.
 * >
 * > - When this component is used with
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are
 * > created when it is created. When this component is used with
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) or
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is
 * > **List** or **ListItemGroup**, its child components are created when it is laid out.
 *
 * ###### Child Components
 *
 * This component can contain a single child component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ListItem: ListItemInterface;