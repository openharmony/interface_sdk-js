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
   * No sticky.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  None,

  /**
   * The list item is sticky with no special effects.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Normal,

  /**
   * The list item is sticky with opacity changes.
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7 dynamiconly
 * @deprecated since 9
 */
declare enum EditMode {

  /**
   * Unrestricted operations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  None,

  /**
   * The list item can be deleted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Deletable,

  /**
   * The list item can be moved.
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
   * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or
   * touch event, and spring back when released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Spring,

  /**
   * Sliding to the edge has no effect.
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
   * Collapsed state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COLLAPSED,

  /**
   * Expanded state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  EXPANDED,

  /**
   * Acting state.
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
 * Enumerates the swipe action menu display directions for ListItem components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
declare enum ListItemSwipeActionDirection {

  /**
   * When the List direction is vertical, it indicates the left in LTR mode and right in RTL mode.
   * When the List direction is horizontal, it indicates the top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  START = 0,

  /**
   * When the List direction is vertical, it indicates the right in LTR mode and left in RTL mode.
   * When the List direction is horizontal, it indicates the bottom.
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
   * @param { FrameNode } node - The ListItem FrameNode.
   * @param { ListItemSwipeActionDirection } direction - The direction to expand.
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
   * @param { FrameNode } node - The ListItem FrameNode.
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
 * Describes the swipe action item.
 * For a list in vertical layout, it refers to the delete option displayed on the left (or right) of the list item
 * when the list item is swiped right (or left).
 *
 * For a list in horizontal layout, it refers to the delete option displayed below (or above) the list item
 * when the list item is swiped up (or down).
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
 * The top layer of the @builder function corresponding to start and end must be a single component.
 * Otherwise, undefined behavior occurs. If the top layer of the @builder function is a statement such as
 * if/else or ForEach, ensure that these statements can generate a single component.
 *
 * The swipe gesture works only in the list item area. If a swipe causes a child component to extend beyond
 * the list item area, the portion outside the area does not respond to the swipe.
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
 * Enumerates the card styles of the List component.
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
   * Show default style.
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
 * Defines ListItem component configuration options.
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
 * The ListItem component displays specific items in the list. It must be used together with List.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. Updates will be marked with a superscript to indicate
 * > their earliest API version.
 * >
 * > - The parent of this component can only be List or ListItemGroup.
 * >
 * > - When this component is used with LazyForEach, its child components are created when it is created.
 * > When this component is used with if/else or ForEach, or when the parent component is List or ListItemGroup,
 * > its child components are created when it is laid out.
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
   * Creates a ListItem component.
   *
   * @param { ListItemOptions } value
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
   * Creates a ListItem component.
   *
   * @param { string } value
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
 * In addition to the universal attributes, the following attributes are supported.
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
   * @param { Sticky } value
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
   * @param { boolean | EditMode } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  editable(value: boolean | EditMode): ListItemAttribute;

  /**
   * Sets whether the list item is selectable for multiselect.
   * This attribute takes effect only when mouse frame selection is enabled for the parent List container.
   *
   * @param { boolean } value
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
   * Sets whether the list item is selected. This attribute supports two-way binding through $$.
   * This attribute must be used before the polymorphic style is set.
   * Otherwise, the style settings will not take effect.
   *
   * @param { boolean } value - Whether the list item is selected.
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
   * @param { SwipeActionOptions } value - Swipe action item displayed when the list item is swiped out from
   *     the screen edge.
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
 * The ListItem component displays specific items in the list. It must be used together with List.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. Updates will be marked with a superscript to indicate
 * > their earliest API version.
 * >
 * > - The parent of this component can only be List or ListItemGroup.
 * >
 * > - When this component is used with LazyForEach, its child components are created when it is created.
 * > When this component is used with if/else or ForEach, or when the parent component is List or ListItemGroup,
 * > its child components are created when it is laid out.
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