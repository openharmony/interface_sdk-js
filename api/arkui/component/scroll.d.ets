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
 * @arkts 1.2
 */


import { BarState, Edge, Color, EdgeEffect, ScrollSource, Curve } from "./enums";
import { ICurve, RectResult, ScrollableCommonMethod, EdgeEffectOptions, NestedScrollOptions, CommonMethod, UIScrollableCommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { Dimension, Length, VoidCallback, Resource, LengthMetrics } from "./units";
import { ScrollSnapAlign, ScrollState } from "./list";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Content scroll direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ScrollDirection {
    /**
     * Vertical scrolling is supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Vertical,
    /**
     * Horizontal scrolling is supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Horizontal,
    /**
     * Non-scrollable.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    None
}
/**
 * ScrollAlign.
 *
 * @enum { number } ScrollAlign
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ScrollAlign {
    /**
     * Start position alignment.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    START,
    /**
     * Center alignment.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CENTER,
    /**
     * End position alignment.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    END,
    /**
     * Scroll the minimum distance to fully display the specified item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    AUTO
}
/**
 * OffsetResult info.
 *
 * @interface OffsetResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OffsetResult {
    /**
     * The X-axis offset.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    xOffset: number;
    /**
     * The y-axis offset.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    yOffset: number;
}
/**
 * Define scroll edge options
 *
 * @interface ScrollEdgeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ScrollEdgeOptions {
    /**
     * The fasten speed of scrolling to the edge, unit is vp/s.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    velocity?: number;
}
/**
 * Define scrollToIndex options
 *
 * @interface ScrollToIndexOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ScrollToIndexOptions {
    /**
     * The extra offset of scrolling to the index, unit is vp.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    extraOffset?: LengthMetrics;
}
/**
 * Provides custom animation parameters.
 *
 * @interface ScrollAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ScrollAnimationOptions {
    /**
     * Set the duration of the animation.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    duration?: number;
    /**
     * Set the curve of the animation.
     *
     * @type { ?(Curve | ICurve) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    curve?: Curve | ICurve;
    /**
     * Set whether the animation can over the boundary.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    canOverScroll?: boolean;
}
/**
 * OffsetOptions info.
 *
 * @interface OffsetOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OffsetOptions {
    /**
     * The X-axis offset.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    xOffset?: Dimension;
    /**
     * The y-axis offset.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    yOffset?: Dimension;
}
/**
 * Scroller
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class Scroller {
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Called when the setting slides to the specified position.
     *
     * @param { ScrollOptions } options - scroll options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollTo(options: ScrollOptions): void;
    /**
     * Called when scrolling to the edge of the container.
     *
     * @param { Edge } value - Edge type of the container.
     * @param { ScrollEdgeOptions } [options] - Options of scrolling to edge.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollEdge(value: Edge, options?: ScrollEdgeOptions): void;
    /**
     * Fling the scroll view.
     *
     * @param { number } velocity - initial velocity of fling, in vp/s.
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
    fling(velocity: number): void;
    /**
     * Called when page turning mode is set.
     *
     * @param { ScrollPageOptions } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollPage(value: ScrollPageOptions): void;
    /**
     * Called when viewing the scroll offset.
     *
     * @returns { OffsetResult } Returns the current scrolling offset. If the scroller not bound to a component, the return value is void.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    currentOffset(): OffsetResult;
    /**
     * Scroll to the specified index.
     *
     * @param { number } value - Index to jump to.
     * @param { boolean } [smooth] - If true, scroll to index item with animation. If false, scroll to index item without animation.
     * @param { ScrollAlign } [align] - Sets the alignment mode of a specified index.
     * @param { ScrollToIndexOptions } [options] - Sets the options of a specified index, such as extra offset.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollToIndex(value: number, smooth?: boolean, align?: ScrollAlign, options?: ScrollToIndexOptions): void;
    /**
     * Called when the setting slides by offset.
     *
     * @param { Length } dx
     * @param { Length } dy
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollBy(dx: Length, dy: Length): void;
    /**
     * Indicates whether the component scrolls to the end position.
     *
     * @returns { boolean } Returns whether the component scrolls to the end position.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isAtEnd(): boolean;
    /**
     * Get child item size and position.
     *
     * @param { number } index - Index of the item.
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
    getItemRect(index: number): RectResult;
    /**
     * Get item index by position.
     *
     * @param { number } x - X coordinate relative to the upper left corner of the current component's original area, in vp.
     * @param { number } y - Y coordinate relative to the upper left corner of the current component's original area, in vp.
     * @returns { number } Index of the item.
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
    getItemIndex(x: number, y: number): number;
}
/**
 * Define scroll options.
 *
 * @interface ScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ScrollOptions {
    /**
     * The X-axis offset.
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    xOffset: number | string;
    /**
     * The Y-axis offset.
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    yOffset: number | string;
    /**
     * Descriptive animation.
     *
     * @type { ?( ScrollAnimationOptions | boolean) } The ScrollAnimationOptions type provides custom animation parameters
     * and the boolean type enables default spring animation.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    animation?: ScrollAnimationOptions | boolean;
}
/**
 * Define scroll page options
 * @interface ScrollPageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface ScrollPageOptions {
    /**
     * Control whether to scroll to the next page or the previous page.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    next: boolean;
    /**
     * Set whether the scrollPage have animate.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    animation?: boolean;
}
/**
 * Define scroll snap options
 *
 * @interface ScrollSnapOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface ScrollSnapOptions {
    /**
     * Set scroll snap alignment.
     *
     * @type { ScrollSnapAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    snapAlign: ScrollSnapAlign;
    /**
     * Set snap positions. When the type of snapPositions is Dimension, Scroll content is paginated by an integer
     * multiple of snapPositions. When the type of snapPositions is Array<number>, Scroll content is paginated based
     * on the array of snapPositions.
     *
     * @type { ?(Dimension | Array<Dimension>) }
     * @default 100%
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    snapPagination?: Dimension | Array<Dimension>;
    /**
     * Set whether the beginning of the Scroll content counts an a snap.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enableSnapToStart?: boolean;
    /**
     * Set whether the end of the Scroll content counts an a snap.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enableSnapToEnd?: boolean;
}
/**
 * Defines a Scroll onScrollEdge callback.
 *
 * @typedef { function } OnScrollEdgeCallback
 * @param { Edge } side - the edge position scrolled to
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnScrollEdgeCallback = (side: Edge) => void;
/**
 * The data returned by the event handler when onScrollFrameBegin.
 *
 * @interface OnScrollFrameBeginHandlerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface OnScrollFrameBeginHandlerResult {
    /**
     * Actual sliding amount, unit vp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    offsetRemain: number;
}
/**
 * Defines a Scroll onScrollFrameBegin callback.
 *
 * @typedef { function } OnScrollFrameBeginCallback
 * @param { number } offset - The upcoming sliding amount, unit vp
 * @param { ScrollState } state - current sliding status
 * @returns { OnScrollFrameBeginHandlerResult } data - the scroll data return by handler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnScrollFrameBeginCallback = (offset: number, state: ScrollState) => OnScrollFrameBeginHandlerResult;
export declare interface ScrollAttribute extends ScrollableCommonMethod {
    /**
     * Called when the scroll method is slid.
     *
     * @param { ScrollDirection } value
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollable(value: ScrollDirection | undefined): this;
    /**
     * Called when the Scroll will scroll.
     *
     * @param { ScrollOnWillScrollCallback } handler - callback of Scroll
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillScroll(handler: ScrollOnWillScrollCallback | undefined): this;
    /**
     * Called when the Scroll did scroll.
     *
     * @param { ScrollOnScrollCallback } handler - callback of Scroll,
     * xOffset and yOffset are offsets this frame did scroll, scrollState is current scroll state.
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDidScroll(handler: ScrollOnScrollCallback | undefined): this;
    /**
     * Called when scrolling to the edge of the container.
     *
     * @param { OnScrollEdgeCallback } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollEdge(event: OnScrollEdgeCallback | undefined): this;
    /**
     * Called when scrolling start.
     *
     * @param { VoidCallback } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollStart(event: VoidCallback | undefined): this;
    /**
     * Called when scrolling has stopped.
     *
     * @param { VoidCallback } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollStop(event: VoidCallback | undefined): this;
    /**
     * Called when the status of the scroll bar is set.
     *
     * @param { BarState } barState
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollBar(barState: BarState | undefined): this;
    /**
     * Called when the color of the scroll bar is set.
     *
     * @param { Color | number | string } color
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollBarColor(color: Color | number | string | undefined): this;
    /**
     * Called when the width of the scroll bar is set.
     *
     * @param { number | string } value
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollBarWidth(value: number | string | undefined): this;
    /**
     * Called when the sliding effect is set.
     *
     * @param { EdgeEffect } edgeEffect
     * @param { EdgeEffectOptions } options
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    edgeEffect(edgeEffect: EdgeEffect | undefined, options?: EdgeEffectOptions | undefined): this;
    /**
     * Called when scrolling begin each frame.
     *
     * @param { OnScrollFrameBeginCallback } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;
    /**
     * Called to setting the nested scroll options.
     *
     * @param { NestedScrollOptions } value - options for nested scrolling.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    nestedScroll(value: NestedScrollOptions | undefined): this;
    /**
     * Called when setting whether to enable scroll by gesture or mouse.
     *
     * @param { boolean } value
     * @returns { ScrollAttribute } The attribute of the scroll
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableScrollInteraction(value: boolean | undefined): this;
    /**
     * Called to setting the friction.
     *
     * @param { number | Resource } value - options for scrolling friction.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    friction(value: number | Resource | undefined): this;
    /**
     * Called to setting the scroll snap options.
     *
     * @param { ScrollSnapOptions } value - options for scroll snap.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    scrollSnap(value: ScrollSnapOptions | undefined): this;
    /**
     * Determines whether the scroll view stops on multiples of the content size when the user scrolls.
     *
     * @param { boolean } value - A boolean value determines whether paging is enabled for scroll.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enablePaging(value: boolean | undefined): this;
    /**
     * Called to setting the initial offset
     *
     * @param { OffsetOptions } value - options for scroll initial offset.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    initialOffset(value: OffsetOptions | undefined): this;
    attributeModifier(modifier: AttributeModifier<ScrollAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * callback of Scroll, using in onDidScroll.
 *
 * @typedef { function } ScrollOnScrollCallback
 * @param { number } xOffset - horizontal offset this frame did scroll.
 * @param { number } yOffset - vertical offset this frame did scroll.
 * @param { ScrollState } scrollState - current scroll state.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type ScrollOnScrollCallback = (xOffset: number, yOffset: number, scrollState: ScrollState) => void;
/**
 * Called before scroll to allow developer to control real offset the Scroll can scroll.
 *
 * @typedef { function } ScrollOnWillScrollCallback
 * @param { number } xOffset - horizontal offset this frame will scroll, which may or may not be reached.
 * @param { number } yOffset - vertical offset this frame will scroll, which may or may not be reached.
 * @param { ScrollState } scrollState - current scroll state.
 * @param { ScrollSource } scrollSource - source of current scroll.
 * @returns { undefined | OffsetResult } the remain offset for the Scroll,
 *     same as (xOffset, yOffset) when no OffsetResult is returned.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type ScrollOnWillScrollCallback = (xOffset: number, yOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => undefined | OffsetResult;
export declare interface UIScrollAttribute extends UIScrollableCommonMethod {
    /**
     * Called when the scroll method is slid.
     *
     * @param { ScrollDirection } value
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    scrollable(value: ScrollDirection | undefined): this;
    /**
     * Called when the Scroll will scroll.
     *
     * @param { ScrollOnWillScrollCallback } handler - callback of Scroll
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onWillScroll(handler: ScrollOnWillScrollCallback | undefined): this;
    /**
     * Called when the Scroll did scroll.
     *
     * @param { ScrollOnScrollCallback } handler - callback of Scroll,
     * xOffset and yOffset are offsets this frame did scroll, scrollState is current scroll state.
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDidScroll(handler: ScrollOnScrollCallback | undefined): this;
    /**
     * Called when scrolling to the edge of the container.
     *
     * @param { OnScrollEdgeCallback } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollEdge(event: OnScrollEdgeCallback | undefined): this;
    /**
     * Called when scrolling start.
     *
     * @param { VoidCallback } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollStart(event: VoidCallback | undefined): this;
    /**
     * Called when scrolling has stopped.
     *
     * @param { VoidCallback } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollStop(event: VoidCallback | undefined): this;
    /**
     * Called when the status of the scroll bar is set.
     *
     * @param { BarState } barState
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    scrollBar(barState: BarState | undefined): this;
    /**
     * Called when the color of the scroll bar is set.
     *
     * @param { Color | number | string } color
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    scrollBarColor(color: Color | number | string | undefined): this;
    /**
     * Called when the width of the scroll bar is set.
     *
     * @param { number | string } value
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    scrollBarWidth(value: number | string | undefined): this;
    /**
     * Called when the sliding effect is set.
     *
     * @param { EdgeEffect } edgeEffect
     * @param { EdgeEffectOptions } options
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    edgeEffect(edgeEffect: EdgeEffect | undefined, options?: EdgeEffectOptions | undefined): this;
    /**
     * Called when scrolling begin each frame.
     *
     * @param { OnScrollFrameBeginCallback } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;
    /**
     * Called to setting the nested scroll options.
     *
     * @param { NestedScrollOptions } value - options for nested scrolling.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    nestedScroll(value: NestedScrollOptions | undefined): this;
    /**
     * Called when setting whether to enable scroll by gesture or mouse.
     *
     * @param { boolean } value
     * @returns { ScrollAttribute } The attribute of the scroll
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enableScrollInteraction(value: boolean | undefined): this;
    /**
     * Called to setting the friction.
     *
     * @param { number | Resource } value - options for scrolling friction.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    friction(value: number | Resource | undefined): this;
    /**
     * Called to setting the scroll snap options.
     *
     * @param { ScrollSnapOptions } value - options for scroll snap.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    scrollSnap(value: ScrollSnapOptions | undefined): this;
    /**
     * Determines whether the scroll view stops on multiples of the content size when the user scrolls.
     *
     * @param { boolean } value - A boolean value determines whether paging is enabled for scroll.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enablePaging(value: boolean | undefined): this;
    /**
     * Called to setting the initial offset
     *
     * @param { OffsetOptions } value - options for scroll initial offset.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    initialOffset(value: OffsetOptions | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<ScrollAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Scroll(
    scroller?: Scroller, 
    @memo
    content_?: () => void,
): UIScrollAttribute