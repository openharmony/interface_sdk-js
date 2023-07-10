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
 * Declare scroll status
 * @since 7
 */
/**
 * Declare scroll status
 * @form
 * @since 9
 */
/**
 * Declare scroll status
 * @form
 * @crossplatform
 * @since 10
 */
declare enum ScrollState {
  /**
   * Not activated.
   * @since 7
   */
  /**
   * Not activated.
   * @form
   * @since 9
   */
  /**
   * Not activated.
   * @form
   * @crossplatform
   * @since 10
   */
  Idle,

  /**
   * Scrolling status.
   * @since 7
   */
  /**
   * Scrolling status.
   * @form
   * @since 9
   */
  /**
   * Scrolling status.
   * @form
   * @crossplatform
   * @since 10
   */
  Scroll,

  /**
   * Drag status.
   * @since 7
   */
  /**
   * Drag status.
   * @form
   * @since 9
   */
  /**
   * Drag status.
   * @form
   * @crossplatform
   * @since 10
   */
  Fling,
}

/**
 * Declare list item alignment status
 * @form
 * @since 9
 */
/**
 * Declare list item alignment status
 * @form
 * @crossplatform
 * @since 10
 */
declare enum ListItemAlign {
  /**
   * Start position in the direction of cross axis.
   * @form
   * @since 9
   */
  /**
   * Start position in the direction of cross axis.
   * @form
   * @crossplatform
   * @since 10
   */
  Start,

  /**
   * Center position in the direction of cross axis.
   * @form
   * @since 9
   */
  /**
   * Center position in the direction of cross axis.
   * @form
   * @crossplatform
   * @since 10
   */
  Center,

  /**
   * End position in the direction of cross axis
   * @form
   * @since 9
   */
    /**
   * End position in the direction of cross axis
   * @form
   * @crossplatform
   * @since 10
   */
  End,
}

/**
 * Declare item group sticky style.
 * @form
 * @since 9
 */
/**
 * Declare item group sticky style.
 * @form
 * @crossplatform
 * @since 10
 */
declare enum StickyStyle {
  /**
   * The header and footer of each item group will not be pinned.
   * @form
   * @since 9
   */
  /**
   * The header and footer of each item group will not be pinned.
   * @form
   * @crossplatform
   * @since 10
   */
  None = 0,

  /**
   * The header of each item group will be pinned.
   * @form
   * @since 9
   */
  /**
   * The header of each item group will be pinned.
   * @form
   * @crossplatform
   * @since 10
   */
  Header = 1,

  /**
   * The footer of each item group will be pinned.
   * @form
   * @since 9
   */
  /**
   * The footer of each item group will be pinned.
   * @form
   * @crossplatform
   * @since 10
   */
  Footer = 2,
}

/**
 * Declare edge effect of chain animation.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare enum ChainEdgeEffect {
  /**
   * Default edge effect. Compress the space in the drag direction
   * and stretch the space in the opposite drag direction.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  DEFAULT,

  /**
   * Stretch all space.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  STRETCH,
}

/**
 * Declare limited position when scroll end.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare enum ScrollSnapAlign {
  /**
   * Default no item scroll snap alignment effect. When scroll end,
   * list item will stop without limit.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NONE,

  /**
   * The first item in view will be aligned at the start of list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  START,

  /**
   * The middle item in view will be aligned at the center of list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CENTER,

  /**
   * The last item in view will be aligned at the end of list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  END,
}

/**
 * Defines the chain animation options.
 * @interface ChainAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare interface ChainAnimationOptions {
  /**
   * Minimum space for chain animation.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  minSpace: Length;

  /**
   * Maximum space for chain animation.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  maxSpace: Length;

  /**
   * Conductivity of chain animation.
   * @type { number }
   * @default 0.7
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  conductivity?: number;

  /**
   * Intensity of chain animation.
   * @type { number }
   * @default 0.3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  intensity?: number;

  /**
   * Edge effect of chain animation.
   * @type { ChainEdgeEffect }
   * @default ChainEdgeEffect.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  edgeEffect?: ChainEdgeEffect;

  /**
   * Stiffness of chain spring.
   * @type { number }
   * @default 228
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  stiffness?: number;

  /**
   * Damping of chain spring.
   * @type { number }
   * @default 30
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  damping?: number;
}

/**
 * The list interface is extended.
 * @since 7
 */
/**
 * The list interface is extended.
 * @form
 * @since 9
 */
/**
 * The list interface is extended.
 * @form
 * @crossplatform
 * @since 10
 */
interface ListInterface {
  /**
   * Called when interface data is called.
   * @since 7
   */
  /**
   * Called when interface data is called.
   * @form
   * @since 9
   */
  /**
   * Called when interface data is called.
   * @form
   * @crossplatform
   * @since 10
   */
  (value?: { initialIndex?: number; space?: number | string; scroller?: Scroller }): ListAttribute;
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
declare class ListAttribute extends CommonMethod<ListAttribute> {
  /**
   * Called when need to decide how much lanes the list will show.
   * @form
   * @since 9
   */
  /**
   * Called when need to decide how much lanes the list will show.
   * @form
   * @crossplatform
   * @since 10
   */
  lanes(value: number | LengthConstrain, gutter?: Dimension): ListAttribute;

  /**
   * Called when need to decide how to align lanes in the direction of the cross axis.
   * @form
   * @since 9
   */
  /**
   * Called when need to decide how to align lanes in the direction of the cross axis.
   * @form
   * @crossplatform
   * @since 10
   */
  alignListItem(value: ListItemAlign): ListAttribute;

  /**
   * Called when the arrangement direction of the list component is set.
   * @since 7
   */
  /**
   * Called when the arrangement direction of the list component is set.
   * @form
   * @since 9
   */
  /**
   * Called when the arrangement direction of the list component is set.
   * @form
   * @crossplatform
   * @since 10
   */
  listDirection(value: Axis): ListAttribute;

  /**
   * Called when the display mode of the side slider is set.
   * @since 7
   */
  /**
   * Called when the display mode of the side slider is set.
   * @form
   * @since 9
   */
  /**
   * Called when the display mode of the side slider is set.
   * @form
   * @crossplatform
   * @since 10
   */
  scrollBar(value: BarState): ListAttribute;

  /**
   * Called when the sliding effect is set.
   * @since 7
   */
  /**
   * Called when the sliding effect is set.
   * @form
   * @since 9
   */
  /**
   * Called when the sliding effect is set.
   * @form
   * @crossplatform
   * @since 10
   */
  edgeEffect(value: EdgeEffect): ListAttribute;

  /**
   * Called when the ListItem split line style is set.
   * @since 7
   */
  /**
   * Called when the ListItem split line style is set.
   * @form
   * @since 9
   */
  /**
   * Called when the ListItem split line style is set.
   * @form
   * @crossplatform
   * @since 10
   */
  divider(
    value: {
      strokeWidth: Length;
      color?: ResourceColor;
      startMargin?: Length;
      endMargin?: Length;
    } | null,
  ): ListAttribute;

  /**
   * Called when judging whether it is in editable mode.
   * @since 7
   * @deprecated since 9
   */
  editMode(value: boolean): ListAttribute;

  /**
   * Called when judging whether it is multiSelectable.
   * @since 8
   */
  /**
   * Called when judging whether it is multiSelectable.
   * @form
   * @since 9
   */
  /**
   * Called when judging whether it is multiSelectable.
   * @form
   * @crossplatform
   * @since 10
   */
  multiSelectable(value: boolean): ListAttribute;

  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   * @since 7
   */
  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   * @form
   * @since 9
   */
  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   * @form
   * @crossplatform
   * @since 10
   */
  cachedCount(value: number): ListAttribute;

  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   * @since 7
   */
  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   * @form
   * @since 9
   */
  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   * @form
   * @crossplatform
   * @since 10
   */
  chainAnimation(value: boolean): ListAttribute;

  /**
   * Called to setting chain linkage dynamic effect options.
   * @param { ChainAnimationOptions } value - options of the chain animation.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  chainAnimationOptions(value: ChainAnimationOptions): ListAttribute;

  /**
   * Called when header or footer of item group will be pinned.
   * @form
   * @since 9
   */
  /**
   * Called when header or footer of item group will be pinned.
   * @form
   * @crossplatform
   * @since 10
   */
  sticky(value: StickyStyle): ListAttribute;

  /**
   * Called to set list item scroll end alignment effect.
   * @param { ScrollSnapAlign } value - options of the list alignment effect.
   * @returns { ListAttribute } the attribute of the list.
   * @default ScrollSnapAlign.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  scrollSnapAlign(value: ScrollSnapAlign): ListAttribute;
  
  /**
   * Called to setting the nested scroll options.
   * @param { NestedScrollOptions } value - options for nested scrolling.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  nestedScroll(value: NestedScrollOptions): ListAttribute;

  /**
   * Called when setting whether to enable scroll by gesture or mouse.
   * @param { boolean }
   * @default true
   * @returns { ListAttribute } The attribute of the list
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  enableScrollInteraction(value: boolean): ListAttribute;

  /**
   * Called to setting the friction.
   * @param { number | Resource } value - options for scrolling friction.
   * @default not wearable-product is 0.6, wearable-product is 0.9; (the value should be more than 0. if abnormal value, default value will be set)
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  friction(value: number | Resource): ListAttribute;

  /**
   * Called when the offset and status callback of the slide are set.
   * @since 7
   */
  /**
   * Called when the offset and status callback of the slide are set.
   * @form
   * @since 9
   */
  /**
   * Called when the offset and status callback of the slide are set.
   * @form
   * @crossplatform
   * @since 10
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): ListAttribute;

  /**
   * Called when the start and end positions of the display change.
   * @param {(start: number, end: number) => void} event
   * @since 7
   */
  /**
   * Called when the start and end positions of the display change.
   * @param {(start: number, end: number) => void} event
   * @form
   * @since 9
   */
  /**
   * Called when the start end and center positions of the display change.
   * @param {(start: number, end: number, center: number) => void} event
   * @form
   * @crossplatform
   * @since 10
   */
  onScrollIndex(event: (start: number, end: number, center: number) => void): ListAttribute;

  /**
   * Called when the list begins to arrive.
   * @since 7
   */
  /**
   * Called when the list begins to arrive.
   * @form
   * @since 9
   */
  /**
   * Called when the list begins to arrive.
   * @form
   * @crossplatform
   * @since 10
   */
  onReachStart(event: () => void): ListAttribute;

  /**
   * Called when the list reaches the end.
   * @since 7
   */
  /**
   * Called when the list reaches the end.
   * @form
   * @since 9
   */
  /**
   * Called when the list reaches the end.
   * @form
   * @crossplatform
   * @since 10
   */
  onReachEnd(event: () => void): ListAttribute;

  /**
   * Called when the slider start.
   * @form
   * @since 9
   */
  /**
   * Called when the slider start.
   * @form
   * @crossplatform
   * @since 10
   */
  onScrollStart(event: () => void): ListAttribute;

  /**
   * Called when the slider stops.
   * @since 7
   */
  /**
   * Called when the slider stops.
   * @form
   * @since 9
   */
  /**
   * Called when the slider stops.
   * @form
   * @crossplatform
   * @since 10
   */
  onScrollStop(event: () => void): ListAttribute;

  /**
   * Called when a list item is deleted.
   * @since 7
   * @deprecated since 9
   */
  onItemDelete(event: (index: number) => boolean): ListAttribute;

  /**
   * Called when a list item is moved.
   * @since 7
   */
  /**
   * Called when a list item is moved.
   * @crossplatform
   * @since 10
   */
  onItemMove(event: (from: number, to: number) => boolean): ListAttribute;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @since 8
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @crossplatform
   * @since 10
   */
  onItemDragStart(event: (event: ItemDragInfo, itemIndex: number) => ((() => any) | void)): ListAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @crossplatform
   * @since 10
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): ListAttribute;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @crossplatform
   * @since 10
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): ListAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @crossplatform
   * @since 10
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): ListAttribute;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @since 8
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @crossplatform
   * @since 10
   */
  onItemDrop(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void): ListAttribute;

  /**
   * Called when scrolling begin each frame.
   * @form
   * @since 9
   */
  /**
   * Called when scrolling begin each frame.
   * @form
   * @crossplatform
   * @since 10
   */
  onScrollFrameBegin(event: (offset: number, state: ScrollState) => { offsetRemain: number }): ListAttribute;
}

/**
 * Defines List Component.
 * @since 7
 */
/**
 * Defines List Component.
 * @form
 * @since 9
 */
/**
 * Defines List Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const List: ListInterface;

/**
 * Defines List Component instance.
 * @since 7
 */
/**
 * Defines List Component instance.
 * @form
 * @since 9
 */
/**
 * Defines List Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const ListInstance: ListAttribute;
