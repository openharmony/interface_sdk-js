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


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { Dimension, Margin, VisualEffect, Filter, UniformDataType, Blender, Length, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, LocalizedMargin, ResourceColor, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, ResourceStr, AccessibilityOptions, PixelMap } from './units'
import { CustomBuilder, ScrollableCommonMethod, CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, NestedScrollOptions, ContentClipMode, EdgeEffectOptions, FadingEdgeOptions } from './common'
import { Scroller, ScrollOnWillScrollCallback, ScrollOnScrollCallback } from './scroll'
import { ComponentContent } from './../ComponentContent'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, BarState, EdgeEffect, FlexDirection } from './enums'
import { LengthMetrics } from './../Graphics'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Resource } from './../../../api/global/resource'
import { Callback_Void } from './abilityComponent'
import { FocusBoxStyle, FocusPriority } from './focus'
import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
import { Callback_Number_Number_Void, Callback_Number_ScrollState_Literal_Number_offsetRemain, Literal_Number_offsetRemain } from './grid'
import { ScrollState } from './list'
export type GetItemMainSizeByIndex = (index: number) => number;
export interface SectionOptions {
    itemsCount: number;
    crossCount?: number;
    onGetItemMainSizeByIndex?: GetItemMainSizeByIndex;
    columnsGap?: Dimension;
    rowsGap?: Dimension;
    margin?: Margin | Dimension;
}
export interface WaterFlowSections {
    splice(start: number, deleteCount?: number, sections?: Array<SectionOptions>): boolean
    push(section: SectionOptions): boolean
    update(sectionIndex: number, section: SectionOptions): boolean
    values(): Array<SectionOptions>
    length(): number
}
export enum WaterFlowLayoutMode {
    ALWAYS_TOP_DOWN = 0,
    SLIDING_WINDOW = 1
}
export interface WaterFlowOptions {
    footer?: CustomBuilder;
    scroller?: Scroller;
    sections?: WaterFlowSections;
    layoutMode?: WaterFlowLayoutMode;
}
export type WaterFlowInterface = (options?: WaterFlowOptions) => WaterFlowAttribute;
export interface WaterFlowAttribute extends ScrollableCommonMethod {
    @memo
    columnsTemplate(value: string): this;
    @memo
    itemConstraintSize(value: ConstraintSizeOptions): this;
    @memo
    rowsTemplate(value: string): this;
    @memo
    columnsGap(value: Length): this;
    @memo
    rowsGap(value: Length): this;
    @memo
    layoutDirection(value: FlexDirection): this;
    @memo
    nestedScroll(value: NestedScrollOptions): this;
    @memo
    enableScrollInteraction(value: boolean): this;
    @memo
    friction(value: number | Resource): this;
    @memo
    cachedCount(value: number): this;
    @memo
    onReachStart(value: (() => void)): this;
    @memo
    onReachEnd(value: (() => void)): this;
    @memo
    onScrollFrameBegin(value: ((offset: number,state: ScrollState) => Literal_Number_offsetRemain)): this;
    @memo
    onScrollIndex(value: ((first: number,last: number) => void)): this;
}
@memo
@ComponentBuilder
export declare function WaterFlow(
    options?: WaterFlowOptions | undefined, 
    @memo
    content_?: () => void,
): WaterFlowAttribute
