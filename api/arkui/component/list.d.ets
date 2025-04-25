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
 * @arkts 1.2
 */


import { ChildrenMainSize, ItemDragInfo, RectResult, ScrollableCommonMethod, UIScrollableCommonMethod, AttributeModifier, CommonMethod, UICommonMethod } from "./common";
import { Axis } from "./enums";
import { OnScrollFrameBeginCallback, ScrollAlign, Scroller } from "./scroll";
import { Dimension, Length, LengthConstrain, ResourceColor } from "./units";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Declare scroll status
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum ScrollState {
    /**
     * Not activated.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Idle,
    /**
     * Scrolling status.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Scroll,
    /**
     * Drag status.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Fling
}
/**
 * Declare list item alignment status
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum ListItemAlign {
    /**
     * Start position in the direction of cross axis.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Start,
    /**
     * Center position in the direction of cross axis.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Center,
    /**
     * End position in the direction of cross axis
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    End
}
/**
 * Declare list item group area
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ListItemGroupArea {
    /**
     * List item group area is none
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NONE = 0,
    /**
     * List item group area is list item
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    IN_LIST_ITEM_AREA = 1,
    /**
     * List item group area is header
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    IN_HEADER_AREA = 2,
    /**
     * List item group area is footer
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    IN_FOOTER_AREA = 3
}
/**
 * Declare item group sticky style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum StickyStyle {
    /**
     * The header and footer of each item group will not be pinned.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    None = 0,
    /**
     * The header of each item group will be pinned.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Header = 1,
    /**
     * The footer of each item group will be pinned.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Footer = 2
}
/**
 * Declare edge effect of chain animation.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum ChainEdgeEffect {
    /**
     * Default edge effect. Compress the space in the drag direction
     * and stretch the space in the opposite drag direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    DEFAULT,
    /**
     * Stretch all space.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    STRETCH
}
/**
 * Declare limited position when scroll end.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ScrollSnapAlign {
    /**
     * Default no item scroll snap alignment effect. When scroll end,
     * list item will stop without limit.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NONE,
    /**
     * The first item in view will be aligned at the start of list.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    START,
    /**
     * The middle item in view will be aligned at the center of list.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CENTER,
    /**
     * The last item in view will be aligned at the end of list.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    END
}
/**
 * Defines the chain animation options.
 *
 * @interface ChainAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface ChainAnimationOptions {
    /**
     * Minimum space for chain animation.
     *
     * @type { Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    minSpace: Length;
    /**
     * Maximum space for chain animation.
     *
     * @type { Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    maxSpace: Length;
    /**
     * Conductivity of chain animation.
     *
     * @type { ?number }
     * @default 0.7
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    conductivity?: number;
    /**
     * Intensity of chain animation.
     *
     * @type { ?number }
     * @default 0.3
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    intensity?: number;
    /**
     * Edge effect of chain animation.
     *
     * @type { ?ChainEdgeEffect }
     * @default ChainEdgeEffect.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    edgeEffect?: ChainEdgeEffect;
    /**
     * Stiffness of chain spring.
     *
     * @type { ?number }
     * @default 228
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    stiffness?: number;
    /**
     * Damping of chain spring.
     *
     * @type { ?number }
     * @default 30
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    damping?: number;
}
/**
 * Defines the close swipe action options.
 *
 * @interface CloseSwipeActionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface CloseSwipeActionOptions {
    /**
     * Called after collapse animation completed.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onFinish?: () => void;
}
/**
 * Defines the visible list content info.
 *
 * @interface VisibleListContentInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface VisibleListContentInfo {
    /**
     * Index number of a child in the list.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    index: number;
    /**
     * Area of the ListItemGroup.
     *
     * @type { ?ListItemGroupArea }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    itemGroupArea?: ListItemGroupArea;
    /**
     * Index number of a ListItem in ListItemGroup.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    itemIndexInGroup?: number;
}
/**
 * Callback of scroll visible content, using in onScrollVisibleContentChange.
 *
 * @typedef {function} OnScrollVisibleContentChangeCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnScrollVisibleContentChangeCallback = (start: VisibleListContentInfo, end: VisibleListContentInfo) => void;
/**
 * @extends Scroller
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class ListScroller extends Scroller {
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
     * @atomicservice
     * @since 20
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
     * @atomicservice
     * @since 20
     */
    scrollToItemInGroup(index: number, indexInGroup: number, smooth?: boolean, align?: ScrollAlign): void;
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
     * @atomicservice
     * @since 20
     */
    closeAllSwipeActions(options?: CloseSwipeActionOptions): void;
    /**
     * Get visible list content info by position.
     *
     * @param { number } x - X coordinate relative to the upper left corner of the list's original area, in vp.
     * @param { number } y - Y coordinate relative to the upper left corner of the list's original area, in vp.
     * @returns { VisibleListContentInfo } Visible list content info of the position.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100004 - The controller not bound to component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getVisibleListContentInfo(x: number, y: number): VisibleListContentInfo;
}
/**
 * Defines List constructor options.
 *
 * @interface ListOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface ListOptions {
    /**
     * Set initialIndex.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    initialIndex?: number;
    /**
     * Set space.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    space?: number | string;
    /**
     * Set scroller.
     *
     * @type { ?Scroller }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    scroller?: Scroller;
}
/**
 * Defines List divider opotions.
 *
 * @interface ListDividerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface ListDividerOptions {
    /**
     * Set strokeWidth.
     *
     * @type { Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    strokeWidth: Length;
    /**
     * Set color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * Set startMargin.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    startMargin?: Length;
    /**
     * Set endMargin.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    endMargin?: Length;
}
export declare interface ListAttribute extends ScrollableCommonMethod {
    /**
     * Called when need to decide how much lanes the list will show.
     *
     * @param { number | LengthConstrain } value
     * @param { Dimension } gutter
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    lanes(value: number | LengthConstrain | undefined, gutter?: Dimension | undefined): this;
    /**
     * Called when need to decide how to align lanes in the direction of the cross axis.
     *
     * @param { ListItemAlign } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alignListItem(value: ListItemAlign | undefined): this;
    /**
     * Called when the arrangement direction of the list component is set.
     *
     * @param { Axis } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    listDirection(value: Axis | undefined): this;
    /**
     * Called when need to decide contentStartOffset the list will show.
     * @param { number } value - the value Of startOffset.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentStartOffset(value: number | undefined): this;
    /**
     * Called when need to decide contentEndOffset the list will show.
     * @param { number } value - the value Of endOffset.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentEndOffset(value: number | undefined): this;
    /**
     * Called when the ListItem split line style is set.
     *
     * @param { ListDividerOptions | null } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    divider(value: ListDividerOptions | null | undefined): this;
    /**
     * Called when judging whether it is multiSelectable.
     *
     * @param { boolean } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    multiSelectable(value: boolean | undefined): this;
    /**
     * Called when the minimum number of list item caches is set for long list deferred loading.
     *
     * @param { number } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    cachedCount(value: number | undefined): this;
    /**
     * Called when the minimum number of list item caches is set for long list deferred loading.
     *
     * @param { number } count - cached count.
     * @param { boolean } show - whether to show the nodes in the cache.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    cachedCount(count: number | undefined, show: boolean | undefined): this;
    /**
     * Called when setting whether to enable chain linkage dynamic effect.
     *
     * @param { boolean } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    chainAnimation(value: boolean | undefined): this;
    /**
     * Called to setting chain linkage dynamic effect options.
     *
     * @param { ChainAnimationOptions } value - options of the chain animation.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    chainAnimationOptions(value: ChainAnimationOptions | undefined): this;
    /**
     * Called when header or footer of item group will be pinned.
     *
     * @param { StickyStyle } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    sticky(value: StickyStyle | undefined): this;
    /**
     * Called to set list item scroll end alignment effect.
     *
     * @param { ScrollSnapAlign } value - options of the list alignment effect.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollSnapAlign(value: ScrollSnapAlign | undefined): this;
    /**
     * Set children main size for List.
     *
     * @param { ChildrenMainSize } value - children main size for List
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    childrenMainSize(value: ChildrenMainSize | undefined): this;
    /**
     * Set maintain visible content position List.
     *
     * @param { boolean } enabled - maintain visible content position.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maintainVisibleContentPosition(enabled: boolean | undefined): this;
    /**
     * Sets the layout of the List component from the end.
     *
     * @param { boolean } enabled - Indicates whether the List is layout from the end.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    stackFromEnd(enabled: boolean | undefined): this;
    /**
     * Called when the start and end positions of the display change.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onScrollIndex(event: ((start: number, end: number, center: number) => void) | undefined): this;
    /**
     * Called when the list visible content changes.
     *
     * @param { OnScrollVisibleContentChangeCallback } handler - Callback of Scroll Visible.
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollVisibleContentChange(handler: OnScrollVisibleContentChangeCallback | undefined): this;
    /**
     * Called when a list item is moved.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onItemMove(event: ((from: number, to: number) => boolean) | undefined): this;
    /**
     * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
     * (To be triggered, press and hold for 170 milliseconds (ms))
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onItemDragStart(event: ((event: ItemDragInfo, itemIndex: number) => ((() => Object) | undefined)) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged to the range of the component.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onItemDragEnter(event: ((event: ItemDragInfo) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the drag moves within the range of a placeable component.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onItemDragMove(event: ((event: ItemDragInfo, itemIndex: number, insertIndex: number) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged out of the component range.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onItemDragLeave(event: ((event: ItemDragInfo, itemIndex: number) => void) | undefined): this;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onItemDrop(event: ((event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void) | undefined): this;
    /**
     * Called when scrolling begin each frame.
     *
     * @param { OnScrollFrameBeginCallback } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;
    attributeModifier(modifier: AttributeModifier<ListAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIListAttribute extends UIScrollableCommonMethod {
    /**
     * Called when need to decide how much lanes the list will show.
     *
     * @param { number | LengthConstrain } value
     * @param { Dimension } gutter
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    lanes(value: number | LengthConstrain | undefined, gutter?: Dimension | undefined): this;
    /**
     * Called when need to decide how to align lanes in the direction of the cross axis.
     *
     * @param { ListItemAlign } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    alignListItem(value: ListItemAlign | undefined): this;
    /**
     * Called when the arrangement direction of the list component is set.
     *
     * @param { Axis } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    listDirection(value: Axis | undefined): this;
    /**
     * Called when need to decide contentStartOffset the list will show.
     * @param { number } value - the value Of startOffset.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    contentStartOffset(value: number | undefined): this;
    /**
     * Called when need to decide contentEndOffset the list will show.
     * @param { number } value - the value Of endOffset.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    contentEndOffset(value: number | undefined): this;
    /**
     * Called when the ListItem split line style is set.
     *
     * @param { ListDividerOptions | null } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    divider(value: ListDividerOptions | null | undefined): this;
    /**
     * Called when judging whether it is multiSelectable.
     *
     * @param { boolean } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    multiSelectable(value: boolean | undefined): this;
    /**
     * Called when the minimum number of list item caches is set for long list deferred loading.
     *
     * @param { number } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    cachedCount(value: number | undefined): this;
    /**
     * Called when the minimum number of list item caches is set for long list deferred loading.
     *
     * @param { number } count - cached count.
     * @param { boolean } show - whether to show the nodes in the cache.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    cachedCount(count: number | undefined, show: boolean | undefined): this;
    /**
     * Called when setting whether to enable chain linkage dynamic effect.
     *
     * @param { boolean } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    chainAnimation(value: boolean | undefined): this;
    /**
     * Called to setting chain linkage dynamic effect options.
     *
     * @param { ChainAnimationOptions } value - options of the chain animation.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    chainAnimationOptions(value: ChainAnimationOptions | undefined): this;
    /**
     * Called when header or footer of item group will be pinned.
     *
     * @param { StickyStyle } value
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    sticky(value: StickyStyle | undefined): this;
    /**
     * Called to set list item scroll end alignment effect.
     *
     * @param { ScrollSnapAlign } value - options of the list alignment effect.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    scrollSnapAlign(value: ScrollSnapAlign | undefined): this;
    /**
     * Set children main size for List.
     *
     * @param { ChildrenMainSize } value - children main size for List
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    childrenMainSize(value: ChildrenMainSize | undefined): this;
    /**
     * Set maintain visible content position List.
     *
     * @param { boolean } enabled - maintain visible content position.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    maintainVisibleContentPosition(enabled: boolean | undefined): this;
    /**
     * Sets the layout of the List component from the end.
     *
     * @param { boolean } enabled - Indicates whether the List is layout from the end.
     * @returns { ListAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    stackFromEnd(enabled: boolean | undefined): this;
    /**
     * Called when the start and end positions of the display change.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollIndex(event: ((start: number, end: number, center: number) => void) | undefined): this;
    /**
     * Called when the list visible content changes.
     *
     * @param { OnScrollVisibleContentChangeCallback } handler - Callback of Scroll Visible.
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollVisibleContentChange(handler: OnScrollVisibleContentChangeCallback | undefined): this;
    /**
     * Called when a list item is moved.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onItemMove(event: ((from: number, to: number) => boolean) | undefined): this;
    /**
     * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
     * (To be triggered, press and hold for 170 milliseconds (ms))
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onItemDragStart(event: ((event: ItemDragInfo, itemIndex: number) => ((() => Object) | undefined)) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged to the range of the component.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onItemDragEnter(event: ((event: ItemDragInfo) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the drag moves within the range of a placeable component.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onItemDragMove(event: ((event: ItemDragInfo, itemIndex: number, insertIndex: number) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged out of the component range.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onItemDragLeave(event: ((event: ItemDragInfo, itemIndex: number) => void) | undefined): this;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { function } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onItemDrop(event: ((event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void) | undefined): this;
    /**
     * Called when scrolling begin each frame.
     *
     * @param { OnScrollFrameBeginCallback } event
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<ListAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function List(
    options?: ListOptions, 
    @memo
    content_?: () => void,
): UIListAttribute