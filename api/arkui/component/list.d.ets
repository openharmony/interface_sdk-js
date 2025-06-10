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
import { Length, ResourceColor, VisualEffect, Filter, UniformDataType, Blender, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, ResourceStr, AccessibilityOptions, LengthConstrain, PixelMap } from './units'

import { Scroller, ScrollOptions, ScrollEdgeOptions, ScrollPageOptions, Literal_Boolean_next_Axis_direction, OffsetResult, ScrollAlign, ScrollToIndexOptions, ScrollOnWillScrollCallback, ScrollOnScrollCallback } from './scroll'
import { Edge, Axis, HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, ResponseType, FunctionKey, ModifierKey, BarState, EdgeEffect } from './enums'
import { RectResult, ScrollableCommonMethod, CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, NestedScrollOptions, ContentClipMode, EdgeEffectOptions, FadingEdgeOptions, ChildrenMainSize, ItemDragInfo } from './common'
import { ComponentContent } from './../ComponentContent'
import { LengthMetrics } from './../Graphics'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Resource } from './../../../api/global/resource'

import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
import { Callback_Number_Number_Void, Callback_ItemDragInfo_Void, Callback_ItemDragInfo_Number_Number_Void, Callback_ItemDragInfo_Number_Void, Callback_ItemDragInfo_Number_Number_Boolean_Void, Callback_Number_ScrollState_Literal_Number_offsetRemain, Literal_Number_offsetRemain } from './grid'
import { OnScrollFrameBeginCallback, OnScrollFrameBeginHandlerResult } from './scroll'

export enum ScrollState {
    IDLE = 0,
    Idle = 0,
    SCROLL = 1,
    Scroll = 1,
    FLING = 2,
    Fling = 2
}
export enum ListItemAlign {
    START = 0,
    Start = 0,
    CENTER = 1,
    Center = 1,
    END = 2,
    End = 2
}
export enum ListItemGroupArea {
    NONE = 0,
    IN_LIST_ITEM_AREA = 1,
    IN_HEADER_AREA = 2,
    IN_FOOTER_AREA = 3
}
export enum StickyStyle {
    NONE = 0,
    None = 0,
    HEADER = 1,
    Header = 1,
    FOOTER = 2,
    Footer = 2
}
export enum ChainEdgeEffect {
    DEFAULT = 0,
    STRETCH = 1
}
export enum ScrollSnapAlign {
    NONE = 0,
    START = 1,
    CENTER = 2,
    END = 3
}
export interface ChainAnimationOptions {
    minSpace: Length;
    maxSpace: Length;
    conductivity?: number;
    intensity?: number;
    edgeEffect?: ChainEdgeEffect;
    stiffness?: number;
    damping?: number;
}
export interface CloseSwipeActionOptions {
    onFinish?: (() => void);
}
export interface VisibleListContentInfo {
    index: number;
    itemGroupArea?: ListItemGroupArea;
    itemIndexInGroup?: number;
}
export type OnScrollVisibleContentChangeCallback = (start: VisibleListContentInfo, end: VisibleListContentInfo) => void;
export declare class ListScroller extends Scroller {
    getItemRectInGroup(index: number, indexInGroup: number): RectResult
    scrollToItemInGroup(index: number, indexInGroup: number, smooth?: boolean, align?: ScrollAlign): void
    closeAllSwipeActions(options?: CloseSwipeActionOptions): void
    getVisibleListContentInfo(x: number, y: number): VisibleListContentInfo
}
export interface ListOptions {
    initialIndex?: number;
    space?: number | string;
    scroller?: Scroller;
}
export type ListInterface = (options?: ListOptions) => ListAttribute;
export interface ListDividerOptions {
    strokeWidth: Length;
    color?: ResourceColor;
    startMargin?: Length;
    endMargin?: Length;
}
export type Callback_Number_Number_Number_Void = (start: number, end: number, center: number) => void;
export type Callback_Number_Boolean = (index: number) => boolean;
export type Callback_Number_Number_Boolean = (from: number, to: number) => boolean;
export interface ListAttribute extends ScrollableCommonMethod {
    @memo
    alignListItem(value: ListItemAlign): this;
    @memo
    listDirection(value: Axis): this;
    @memo
    scrollBar(value: BarState): this;
    @memo
    contentStartOffset(value: number): this;
    @memo
    contentEndOffset(value: number): this;
    @memo
    divider(value: ListDividerOptions | undefined): this;
    @memo
    editMode(value: boolean): this;
    @memo
    multiSelectable(value: boolean): this;
    @memo
    cachedCount(value: number): this;
    @memo
    chainAnimation(value: boolean): this;
    @memo
    chainAnimationOptions(value: ChainAnimationOptions): this;
    @memo
    sticky(value: StickyStyle): this;
    @memo
    scrollSnapAlign(value: ScrollSnapAlign): this;
    @memo
    nestedScroll(value: NestedScrollOptions): this;
    @memo
    enableScrollInteraction(value: boolean): this;
    @memo
    friction(value: number | Resource): this;
    @memo
    childrenMainSize(value: ChildrenMainSize): this;
    @memo
    maintainVisibleContentPosition(value: boolean): this;
    @memo
    onScroll(value: ((first: number,last: number) => void)): this;
    @memo
    onScrollIndex(value: ((start: number,end: number,center: number) => void)): this;
    @memo
    onScrollVisibleContentChange(value: OnScrollVisibleContentChangeCallback): this;
    @memo
    onReachStart(value: (() => void)): this;
    @memo
    onReachEnd(value: (() => void)): this;
    @memo
    onScrollStart(value: (() => void)): this;
    @memo
    onScrollStop(value: (() => void)): this;
    @memo
    onItemDelete(value: ((index: number) => boolean)): this;
    @memo
    onItemMove(value: ((from: number,to: number) => boolean)): this;
    @memo
    onItemDragStart(value: ((event: ItemDragInfo,itemIndex: number) => CustomBuilder)): this;
    @memo
    onItemDragEnter(value: ((event: ItemDragInfo) => void)): this;
    @memo
    onItemDragMove(value: ((event: ItemDragInfo,itemIndex: number,insertIndex: number) => void)): this;
    @memo
    onItemDragLeave(value: ((event: ItemDragInfo,itemIndex: number) => void)): this;
    @memo
    onItemDrop(value: ((event: ItemDragInfo,itemIndex: number,insertIndex: number,isSuccess: boolean) => void)): this;
    @memo
    onScrollFrameBegin(value: ((offset: number,state: ScrollState) => OnScrollFrameBeginHandlerResult)): this;
}
@memo
@ComponentBuilder
export declare function List(
    options?: ListOptions | undefined, 
    @memo
    content_?: () => void,
): ListAttribute
