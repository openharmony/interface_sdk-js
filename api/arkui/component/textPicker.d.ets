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

import { Resource } from './../../../api/global/resource'
import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { Dimension, ResourceColor, VisualEffect, Filter, UniformDataType, Blender, Length, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, ResourceStr, AccessibilityOptions, PixelMap, Offset } from './units'
import { CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, PickerTextStyle, PickerDialogButtonStyle, HoverModeAreaType } from './common'
import { ComponentContent } from './../ComponentContent'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey } from './enums'
import { LengthMetrics } from './../Graphics'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Callback_Void } from './abilityComponent'
import { FocusBoxStyle, FocusPriority } from './focus'
import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
import { DialogAlignment } from './alertDialog'
export interface TextPickerRangeContent {
    icon: string | Resource;
    text?: string | Resource;
}
export interface TextCascadePickerRangeContent {
    text: string | Resource;
    children?: Array<TextCascadePickerRangeContent>;
}
export interface TextPickerOptions {
    range: Array<string> | Array<Array<string>> | Resource | Array<TextPickerRangeContent> | Array<TextCascadePickerRangeContent>;
    value?: string | Array<string>;
    selected?: number | Array<number>;
}
export type TextPickerInterface = (options?: TextPickerOptions) => TextPickerAttribute;
export interface DividerOptions {
    strokeWidth?: Dimension;
    color?: ResourceColor;
    startMargin?: Dimension;
    endMargin?: Dimension;
}
export type Callback_String_Number_Void = (value: string, index: number) => void;
export type Type_TextPickerAttribute_onChange_callback = (value: string | Array<string>,
    index: number | Array<number>) => void;
export type Callback_Union_Number_Array_Number_Void = (selected: number | Array<number>) => void;
export type Callback_Union_String_Array_String_Void = (value: string | Array<string>) => void;
export interface TextPickerAttribute extends CommonMethod {
    @memo
    defaultPickerItemHeight(value: number | string): this;
    @memo
    canLoop(value: boolean): this;
    @memo
    disappearTextStyle(value: PickerTextStyle): this;
    @memo
    textStyle(value: PickerTextStyle): this;
    @memo
    selectedTextStyle(value: PickerTextStyle): this;
    @memo
    onAccept(value: ((value: string,index: number) => void)): this;
    @memo
    onCancel(value: (() => void)): this;
    @memo
    onChange(value: ((value: string | Array<string>,index: number | Array<number>) => void)): this;
    @memo
    selectedIndex(value: number | Array<number>): this;
    @memo
    divider(value: DividerOptions | undefined): this;
    @memo
    gradientHeight(value: Dimension): this;
}
export interface TextPickerResult {
    value: string | Array<string>;
    index: number | Array<number>;
}
export type Callback_TextPickerResult_Void = (value: TextPickerResult) => void;
export interface TextPickerDialogOptions extends TextPickerOptions {
    defaultPickerItemHeight?: number | string;
    canLoop?: boolean;
    disappearTextStyle?: PickerTextStyle;
    textStyle?: PickerTextStyle;
    acceptButtonStyle?: PickerDialogButtonStyle;
    cancelButtonStyle?: PickerDialogButtonStyle;
    selectedTextStyle?: PickerTextStyle;
    onAccept?: ((value: TextPickerResult) => void);
    onCancel?: (() => void);
    onChange?: ((value: TextPickerResult) => void);
    maskRect?: Rectangle;
    alignment?: DialogAlignment;
    offset?: Offset;
    backgroundColor?: ResourceColor;
    backgroundBlurStyle?: BlurStyle;
    onDidAppear?: (() => void);
    onDidDisappear?: (() => void);
    onWillAppear?: (() => void);
    onWillDisappear?: (() => void);
    shadow?: ShadowOptions | ShadowStyle;
    enableHoverMode?: boolean;
    hoverModeArea?: HoverModeAreaType;
}
export interface TextPickerDialog {
    show(options?: TextPickerDialogOptions): undefined
}
@memo
@ComponentBuilder
export declare function TextPicker(
    options?: TextPickerOptions | undefined, 
    @memo
    content_?: () => void,
): TextPickerAttribute
