/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { LengthMetrics } from './../Graphics'
import { Curve, Axis, Edge, HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, ResponseType, FunctionKey, ModifierKey, BarState, EdgeEffect, ScrollSource } from './enums'
import { ICurve, RectResult, ScrollableCommonMethod, CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, NestedScrollOptions, ContentClipMode, EdgeEffectOptions, FadingEdgeOptions } from './common'
import { Dimension, Length, VisualEffect, Filter, UniformDataType, Blender, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, ResourceColor, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, ResourceStr, AccessibilityOptions, VoidCallback, PixelMap } from './units'
import { ScrollSnapAlign, ScrollState } from './list'
import { ComponentContent } from './../ComponentContent'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Resource } from './../../../api/global/resource'


import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
import { Callback_Number_Number_Void } from './grid'
export enum ScrollDirection {
    VERTICAL = 0,
    Vertical = 0,
    HORIZONTAL = 1,
    Horizontal = 1,
    FREE = 2,
    Free = 2,
    NONE = 3,
    None = 3
}
export enum ScrollAlign {
    START = 0,
    CENTER = 1,
    END = 2,
    AUTO = 3
}
export interface OffsetResult {
    xOffset: number;
    yOffset: number;
}
export interface ScrollEdgeOptions {
    velocity?: number;
}
export interface ScrollToIndexOptions {
    extraOffset?: LengthMetrics;
}
export interface ScrollAnimationOptions {
    duration?: number;
    curve?: Curve | ICurve;
    canOverScroll?: boolean;
}
export interface OffsetOptions {
    xOffset?: Dimension;
    yOffset?: Dimension;
}
export interface Literal_Boolean_next_Axis_direction {
    next: boolean;
    direction?: Axis;
}
export declare class Scroller {
    scrollTo(options: ScrollOptions): undefined
    scrollEdge(value: Edge, options?: ScrollEdgeOptions): undefined
    fling(velocity: number): void
    scrollPage(value: ScrollPageOptions): undefined

    currentOffset(): OffsetResult
    scrollToIndex(value: number, smooth?: boolean, align?: ScrollAlign, options?: ScrollToIndexOptions): undefined
    scrollBy(dx: Length, dy: Length): undefined
    isAtEnd(): boolean
    getItemRect(index: number): RectResult
    getItemIndex(x: number, y: number): number
}
export interface ScrollOptions {
    xOffset: number | string;
    yOffset: number | string;
    animation?: ScrollAnimationOptions | boolean;
}
export interface ScrollPageOptions {
    next: boolean;
    animation?: boolean;
}
export interface ScrollSnapOptions {
    snapAlign: ScrollSnapAlign;
    snapPagination?: Dimension | Array<Dimension>;
    enableSnapToStart?: boolean;
    enableSnapToEnd?: boolean;
}
export type ScrollInterface = (scroller?: Scroller) => ScrollAttribute;
export type OnScrollEdgeCallback = (side: Edge) => void;
export interface OnScrollFrameBeginHandlerResult {
    offsetRemain: number;
}
export type OnScrollFrameBeginCallback = (offset: number, state: ScrollState) => OnScrollFrameBeginHandlerResult;
export interface ScrollAttribute extends ScrollableCommonMethod {
    @memo
    scrollable(value: ScrollDirection): this;
    @memo
    onScroll(value: ((first: number,last: number) => void)): this;
    @memo
    onWillScroll(value: ScrollOnWillScrollCallback | undefined): this;
    @memo
    onDidScroll(value: ScrollOnScrollCallback): this;
    @memo
    onScrollEdge(value: OnScrollEdgeCallback): this;
    @memo
    onScrollStart(value: VoidCallback): this;
    @memo
    onScrollEnd(value: (() => void)): this;
    @memo
    onScrollStop(value: VoidCallback): this;
    @memo
    scrollBar(value: BarState): this;
    @memo
    scrollBarColor(value: Color | number | string): this;
    @memo
    scrollBarWidth(value: number | string): this;
    @memo
    onScrollFrameBegin(value: OnScrollFrameBeginCallback): this;
    @memo
    nestedScroll(value: NestedScrollOptions): this;
    @memo
    enableScrollInteraction(value: boolean): this;
    @memo
    friction(value: number | Resource): this;
    @memo
    scrollSnap(value: ScrollSnapOptions): this;
    @memo
    enablePaging(value: boolean): this;
    @memo
    initialOffset(value: OffsetOptions): this;
}
export type ScrollOnScrollCallback = (scrollOffset: number, scrollState: ScrollState) => void;
export type ScrollOnWillScrollCallback = (xOffset: number, yOffset: number, scrollState: ScrollState,
    scrollSource: ScrollSource) => OffsetResult;
@memo
@ComponentBuilder
export declare function Scroll(
    scroller?: Scroller | undefined, 
    @memo
    content_?: () => void,
): ScrollAttribute
