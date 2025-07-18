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
import { CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback } from './common'
import { VisualEffect, Filter, UniformDataType, Blender, Length, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, ResourceColor, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, ResourceStr, AccessibilityOptions, Font, PixelMap } from './units'
import { ComponentContent } from './../ComponentContent'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey } from './enums'
import { LengthMetrics } from './../Graphics'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Resource } from './../../../api/global/resource'
import { Callback_Void } from './abilityComponent'
import { FocusBoxStyle, FocusPriority } from './focus'
import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
export enum IndexerAlign {
    LEFT = 0,
    Left = 0,
    RIGHT = 1,
    Right = 1,
    START = 2,
    END = 3
}
export interface AlphabetIndexerOptions {
    arrayValue: Array<string>;
    selected: number;
}
export type AlphabetIndexerInterface = (options: AlphabetIndexerOptions) => AlphabetIndexerAttribute;
export type OnAlphabetIndexerSelectCallback = (index: number) => void;
export type OnAlphabetIndexerPopupSelectCallback = (index: number) => void;
export type OnAlphabetIndexerRequestPopupDataCallback = (index: number) => Array<string>;
export type Callback_Number_Void = (index: number) => void;
export interface AlphabetIndexerAttribute extends CommonMethod {
    @memo
    onSelected(value: ((index: number) => void)): this;
    @memo
    color(value: ResourceColor): this;
    @memo
    selectedColor(value: ResourceColor): this;
    @memo
    popupColor(value: ResourceColor): this;
    @memo
    selectedBackgroundColor(value: ResourceColor): this;
    @memo
    popupBackground(value: ResourceColor): this;
    @memo
    popupSelectedColor(value: ResourceColor): this;
    @memo
    popupUnselectedColor(value: ResourceColor): this;
    @memo
    popupItemBackgroundColor(value: ResourceColor): this;
    @memo
    usingPopup(value: boolean): this;
    @memo
    selectedFont(value: Font): this;
    @memo
    popupFont(value: Font): this;
    @memo
    popupItemFont(value: Font): this;
    @memo
    itemSize(value: string | number): this;
    @memo
    font(value: Font): this;
    @memo
    onSelect(value: OnAlphabetIndexerSelectCallback): this;
    @memo
    onRequestPopupData(value: OnAlphabetIndexerRequestPopupDataCallback): this;
    @memo
    onPopupSelect(value: OnAlphabetIndexerPopupSelectCallback): this;
    @memo
    selected(value: number): this;
    @memo
    popupPosition(value: Position): this;
    @memo
    autoCollapse(value: boolean): this;
    @memo
    popupItemBorderRadius(value: number): this;
    @memo
    itemBorderRadius(value: number): this;
    @memo
    popupBackgroundBlurStyle(value: BlurStyle): this;
    @memo
    popupTitleBackground(value: ResourceColor): this;
    @memo
    enableHapticFeedback(value: boolean): this;
}
@memo
@ComponentBuilder
export declare function AlphabetIndexer(
    options: AlphabetIndexerOptions, 
    @memo
    content_?: () => void,
): AlphabetIndexerAttribute
