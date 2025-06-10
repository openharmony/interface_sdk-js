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
import { Length, PX, VP, LPX, ResourceColor, Font, VisualEffect, Filter, UniformDataType, Blender, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, ResourceStr, AccessibilityOptions, PixelMap } from './units'
import { Resource } from './../../../api/global/resource'
import { CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, ContentModifier, CommonConfiguration } from './common'

export interface ProgressOptions {
    value: number;
    total?: number;
    style?: ProgressStyle;
    type?: ProgressType;
}
export enum ProgressType {
    LINEAR = 0,
    Linear = 0,
    RING = 1,
    Ring = 1,
    ECLIPSE = 2,
    Eclipse = 2,
    SCALE_RING = 3,
    ScaleRing = 3,
    CAPSULE = 4,
    Capsule = 4
}
export enum ProgressStatus {
    LOADING = 0,
    PROGRESSING = 1
}
export interface ProgressStyleOptions extends CommonProgressStyleOptions {
    strokeWidth?: Length;
    scaleCount?: number;
    scaleWidth?: Length;
}
export interface CommonProgressStyleOptions {
    enableSmoothEffect?: boolean;
}
export interface ScanEffectOptions {
    enableScanEffect?: boolean;
}
export interface EclipseStyleOptions extends CommonProgressStyleOptions {
}
export interface ScaleRingStyleOptions extends CommonProgressStyleOptions {
    strokeWidth?: Length;
    scaleWidth?: Length;
    scaleCount?: number;
}
export interface RingStyleOptions extends ScanEffectOptions {
    strokeWidth?: Length;
    shadow?: boolean;
    status?: ProgressStatus;
}
export interface LinearStyleOptions extends ScanEffectOptions {
    strokeWidth?: Length;
    strokeRadius?: PX | VP | LPX | Resource;
}
export interface CapsuleStyleOptions extends ScanEffectOptions {
    borderColor?: ResourceColor;
    borderWidth?: Length;
    content?: string;
    font?: Font;
    fontColor?: ResourceColor;
    showDefaultPercentage?: boolean;
}
export enum ProgressStyle {
    LINEAR = 0,
    Linear = 0,
    RING = 1,
    Ring = 1,
    ECLIPSE = 2,
    Eclipse = 2,
    SCALE_RING = 3,
    ScaleRing = 3,
    CAPSULE = 4,
    Capsule = 4
}
export interface ProgressStyleMap {
}
export type ProgressInterface = (options: ProgressOptions) => ProgressAttribute;
export interface ProgressAttribute extends CommonMethod {
    @memo
    value(value: number): this;
    @memo
    color(value: ResourceColor): this;
    @memo
    style(value: LinearStyleOptions | RingStyleOptions | CapsuleStyleOptions | ProgressStyleOptions): this;
    @memo
    privacySensitive(value: boolean | undefined): this;
    @memo
    contentModifier(value: ContentModifier<ProgressConfiguration>): this;
}
export interface ProgressConfiguration extends CommonConfiguration<ProgressConfiguration> {
    value: number;
    total: number;
}
@memo
@ComponentBuilder
export declare function Progress(
    options: ProgressOptions, 
    @memo
    content_?: () => void,
): ProgressAttribute
