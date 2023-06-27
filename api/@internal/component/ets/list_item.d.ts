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
 * Declare item ceiling attribute.
 * @since 7
 * @deprecated since 9
 * @useinstead list/StickyStyle
 */
declare enum Sticky {
  /**
   * No sticky.
   * @since 7
   */
  None,

  /**
   * Normal mode
   * @since 7
   */
  Normal,

  /**
   * Set opacity.
   * @since 7
   */
  Opacity,
}

/**
 * Declare whether the ListItem element is editable.
 * @since 7
 * @deprecated since 9
 */
declare enum EditMode {
  /**
   * Unrestricted operations.
   * @since 7
   */
  None,

  /**
   * Deletable.
   * @since 7
   */
  Deletable,

  /**
   * Movable.
   * @since 7
   */
  Movable,
}

/**
 * Sliding effect
 * @since 9
 */
/**
 * Sliding effect
 * @crossplatform
 * @since 10
 */
declare enum SwipeEdgeEffect {
  /**
   * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or touch event, and spring back when released.
   * @since 9
   */
  /**
   * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or touch event, and spring back when released.
   * @crossplatform
   * @since 10
   */
  Spring,

  /**
   * Sliding to the edge has no effect.
   * @since 9
   */
  /**
   * Sliding to the edge has no effect.
   * @crossplatform
   * @since 10
   */
  None,
}

/**
 * Defines the swipe action item for SwipeActionOptions.
 * @interface SwipeActionItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface SwipeActionItem {
  /**
   * An action item that appears when a list item slides right (when list direction is Vertical) or
   * slides down (when list direction Horizontal).
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  builder?: CustomBuilder;

  /**
   * Defines distance for the delete area.
   * @type { Length }
   * @default 56vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  deleteAreaDistance?: Length;

  /**
   * Set whether to use default delete animation.
   * @type { boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  useDefaultDeleteAnimation?: boolean;

  /**
   * Called when ListItem need to be deleted.
   * @type { () => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onDelete?: () => void;

  /**
   * Called when swipe entry delete area.
   * @type { () => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onEnterDeleteArea?: () => void;

  /**
   * Called when swipe exit delete area.
   * @type { () => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onExitDeleteArea?: () => void;
}

/**
 * Defines the SwipeActionOption of swipeAction attribute method.
 * @since 9
 */
/**
 * Defines the SwipeActionOption of swipeAction attribute method.
 * @crossplatform
 * @since 10
 */
declare interface SwipeActionOptions {
  /**
   * An action item that appears when a list item slides right (when list direction is Vertical) or
   * slides down (when list direction Horizontal).
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * An action item that appears when a list item slides right (when list direction is Vertical) or
   * slides down (when list direction Horizontal).
   * @crossplatform
   * @type { CustomBuilder | SwipeActionItem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  start?: CustomBuilder | SwipeActionItem;

  /**
   * An action item that appears when a list item slides left (when list direction is Vertical) or
   * slides up (when list direction Horizontal).
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * An action item that appears when a list item slides left (when list direction is Vertical) or
   * slides up (when list direction Horizontal).
   * @crossplatform
   * @type { CustomBuilder | SwipeActionItem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  end?: CustomBuilder | SwipeActionItem;

  /**
   * Sets whether sliding to a boundary has a spring effect.
   * @since 9
   */
  /**
   * Sets whether sliding to a boundary has a spring effect.
   * @crossplatform
   * @since 10
   */
  edgeEffect?: SwipeEdgeEffect;
}

/**
 * Defines the list item style.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum ListItemStyle {
  /**
   * Show custom style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NONE = 0,

  /**
   * Show default style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CARD = 1,
}

/**
 * Defines the list item options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ListItemOptions {
  /**
   * Describes the ListItem style.
   * @type { ?ListItemStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  style?: ListItemStyle;
}

/**
 * @since 7
 */
/**
 * @form
 * @since 9
 */
/**
 * @form
 * @crossplatform
 * @since 10
 */
/**
 * Values in the list
 * @since 7
 */
/**
 * Values in the list
 * @form
 * @since 9
 */
/**
 * Values in the list
 * @form
 * @crossplatform
 * @since 10
 */
interface ListItemInterface {
  /**
   * Called when an interface is used.
   * @param { ListItemOptions } value the list item options.
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  (value?: ListItemOptions): ListItemAttribute;

  /**
   * Called when an interface is used.
   * @since 7
   */
  /**
   * Called when an interface is used.
   * @form
   * @since 9
   * @deprecated since 10
   * @useinstead listItem/ListItemInterface
   */
  (value?: string): ListItemAttribute;
}

/**
 * @since 7
 */
/**
 * @form
 * @since 9
 */
/**
 * @form
 * @crossplatform
 * @since 10
 */
declare class ListItemAttribute extends CommonMethod<ListItemAttribute> {
  /**
   * Called when setting whether item is ceiling effect.
   * @since 7
   * @deprecated since 9
   * @useinstead list/List#sticky
   */
  sticky(value: Sticky): ListItemAttribute;

  /**
   * Called when judging whether it is editable.
   * @since 7
   * @deprecated since 9
   */
  editable(value: boolean | EditMode): ListItemAttribute;

  /**
   * Called when judging whether it is selectable.
   * @since 8
   */
  /**
   * Called when judging whether it is selectable.
   * @form
   * @since 9
   */
  /**
   * Called when judging whether it is selectable.
   * @form
   * @crossplatform
   * @since 10
   */
  selectable(value: boolean): ListItemAttribute;

  /**
   * Sets the action item that appears when the list item slides in the cross axis direction of the list.
   * @param value items defines in the SwipeActionOption.
   * @since 9
   */
  /**
   * Sets the action item that appears when the list item slides in the cross axis direction of the list.
   * @param value items defines in the SwipeActionOption.
   * @crossplatform
   * @since 10
   */
  swipeAction(value: SwipeActionOptions): ListItemAttribute;

  /**
   * Called when the listItem is selected.
   * @since 8
   */
  /**
   * Called when the listItem is selected.
   * @form
   * @since 9
   */
  /**
   * Called when the listItem is selected.
   * @form
   * @crossplatform
   * @since 10
   */
  onSelect(event: (isSelected: boolean) => void): ListItemAttribute;
}

/**
 * Defines ListItem Component instance.
 * @since 7
 */
/**
 * Defines ListItem Component instance.
 * @form
 * @since 9
 */
/**
 * Defines ListItem Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const ListItemInstance: ListItemAttribute;

/**
 * Defines ListItem Component.
 * @since 7
 */
/**
 * Defines ListItem Component.
 * @form
 * @since 9
 */
/**
 * Defines ListItem Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const ListItem: ListItemInterface;
