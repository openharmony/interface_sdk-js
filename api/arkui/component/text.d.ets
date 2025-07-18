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

import { TextOverflow, HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, FontStyle, FontWeight, TextAlign, TextCase, CopyOptions, TextHeightAdaptivePolicy, WordBreak, LineBreakStrategy, EllipsisMode, TextSelectableMode } from './enums'
import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { Resource } from './../../../api/global/resource'
import { CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback } from './common'
import { VisualEffect, Filter, UniformDataType, Blender, Length, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, ResourceColor, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, ResourceStr, AccessibilityOptions, Font, PixelMap } from './units'
import { ComponentContent } from './../ComponentContent'
import { LengthMetrics } from './../Graphics'

export interface TextOverflowOptions {
    overflow: TextOverflow;
}
export type TextInterface = (content?: string | Resource, value?: TextOptions) => TextAttribute;
export interface TextAttribute extends CommonMethod {
    @memo
    font(value: Font): this;
    @memo
    fontColor(value: ResourceColor): this;
    @memo
    fontSize(value: number | string | Resource): this;
    @memo
    minFontSize(value: number | string | Resource): this;
    @memo
    maxFontSize(value: number | string | Resource): this;
    @memo
    minFontScale(value: number | Resource): this;
    @memo
    maxFontScale(value: number | Resource): this;
    @memo
    fontStyle(value: FontStyle): this;
    @memo
    fontWeight(value: number | FontWeight | string): this;
    @memo
    lineSpacing(value: LengthMetrics): this;
    @memo
    textAlign(value: TextAlign): this;
    @memo
    lineHeight(value: number | string | Resource): this;
    @memo
    textOverflow(value: TextOverflowOptions): this;
    @memo
    fontFamily(value: string | Resource): this;
    @memo
    maxLines(value: number): this;
    @memo
    letterSpacing(value: number | string): this;
    @memo
    textCase(value: TextCase): this;
    @memo
    baselineOffset(value: number | string): this;
    @memo
    copyOption(value: CopyOptions): this;
    @memo
    draggable(value: boolean): this;
    @memo
    textShadow(value: ShadowOptions | Array<ShadowOptions>): this;
    @memo
    heightAdaptivePolicy(value: TextHeightAdaptivePolicy): this;
    @memo
    textIndent(value: Length): this;
    @memo
    wordBreak(value: WordBreak): this;
    @memo
    lineBreakStrategy(value: LineBreakStrategy): this;
    @memo
    onCopy(value: ((breakpoints: string) => void)): this;
    @memo
    caretColor(value: ResourceColor): this;
    @memo
    selectedBackgroundColor(value: ResourceColor): this;
    @memo
    ellipsisMode(value: EllipsisMode): this;
    @memo
    enableDataDetector(value: boolean): this;
    @memo
    onTextSelectionChange(value: ((first: number,last: number) => void)): this;
    @memo
    fontFeature(value: string): this;
    @memo
    privacySensitive(value: boolean): this;
    @memo
    textSelectable(value: TextSelectableMode): this;
    @memo
    halfLeading(value: boolean): this;
    @memo
    enableHapticFeedback(value: boolean): this;
}
export enum TextSpanType {
    TEXT = 0,
    IMAGE = 1,
    MIXED = 2
}
export enum TextResponseType {
    RIGHT_CLICK = 0,
    LONG_PRESS = 1,
    SELECT = 2
}
export interface TextOptions {
    controller: TextController;
}
export declare class TextController {
    closeSelectionMenu(): void
}
@memo
@ComponentBuilder
export declare function Text(
    content?: string | Resource | undefined, 
    value?: TextOptions | undefined, 
    @memo
    content_?: () => void,
): TextAttribute
