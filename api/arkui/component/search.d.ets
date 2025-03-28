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

import { TextContentControllerBase, CaretOffset, RectResult, SelectionOptions, CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, TextDecorationOptions } from './common'
import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { ResourceStr, Length, ResourceColor, VisualEffect, Filter, UniformDataType, Blender, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, Font, PixelMap } from './units'
import { SymbolGlyphModifier } from './../../../api/arkui/SymbolGlyphModifier'
import { SubmitEvent, EnterKeyType, OnTextSelectionChangeCallback, OnContentScrollCallback, OnPasteCallback } from './textInput'
import { InsertValue, DeleteValue, CaretStyle, EditableTextOnChangeCallback, EditMenuOptions } from './textCommon'
import { ComponentContent } from './../ComponentContent'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, CopyOptions, TextAlign } from './enums'
import { LengthMetrics } from './../Graphics'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Resource } from './../../../api/global/resource'
import { Callback_Void } from './abilityComponent'
import { FocusBoxStyle, FocusPriority } from './focus'
import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
import { Callback_Boolean_Void } from './checkbox'
import { Callback_String_Void } from './gridRow'
import { KeyboardOptions } from './richEditor'
export interface SearchController extends TextContentControllerBase {
    caretPosition(value: number): void
    stopEditing(): void
    setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void
}
export enum CancelButtonStyle {
    CONSTANT = 0,
    INVISIBLE = 1,
    INPUT = 2
}
export enum SearchType {
    NORMAL = 0,
    NUMBER = 2,
    PHONE_NUMBER = 3,
    EMAIL = 5,
    NUMBER_DECIMAL = 12,
    URL = 13
}
export interface SearchOptions {
    value?: string;
    placeholder?: ResourceStr;
    icon?: string;
    controller?: SearchController;
}
export type SearchInterface = (options?: SearchOptions) => SearchAttribute;
export interface IconOptions {
    size?: Length;
    color?: ResourceColor;
    src?: ResourceStr;
}
export interface SearchButtonOptions {
    fontSize?: Length;
    fontColor?: ResourceColor;
    autoDisable?: boolean;
}
export interface CancelButtonOptions {
    style?: CancelButtonStyle;
    icon?: IconOptions;
}
export interface CancelButtonSymbolOptions {
    style?: CancelButtonStyle;
    icon?: SymbolGlyphModifier;
}
export type SearchSubmitCallback = (searchContent: string, event?: SubmitEvent) => void;
export type Callback_InsertValue_Boolean = (parameter: InsertValue) => boolean;
export type Callback_InsertValue_Void = (parameter: InsertValue) => void;
export type Callback_DeleteValue_Boolean = (parameter: DeleteValue) => boolean;
export type Callback_DeleteValue_Void = (parameter: DeleteValue) => void;
export interface SearchAttribute extends CommonMethod {
    @memo
    fontColor(value: ResourceColor): this;
    @memo
    searchIcon(value: IconOptions | SymbolGlyphModifier): this;
    @memo
    cancelButton(value: CancelButtonOptions | CancelButtonSymbolOptions): this;
    @memo
    textIndent(value: Dimension): this;
    @memo
    onEditChange(value: ((parameter: boolean) => void)): this;
    @memo
    selectedBackgroundColor(value: ResourceColor): this;
    @memo
    caretStyle(value: CaretStyle): this;
    @memo
    placeholderColor(value: ResourceColor): this;
    @memo
    placeholderFont(value: Font): this;
    @memo
    textFont(value: Font): this;
    @memo
    enterKeyType(value: EnterKeyType): this;
    @memo
    onSubmit(value: ((breakpoints: string) => void)): this;

    @memo
    onChange(value: EditableTextOnChangeCallback): this;
    @memo
    onTextSelectionChange(value: OnTextSelectionChangeCallback): this;
    @memo
    onContentScroll(value: OnContentScrollCallback): this;
    @memo
    onCopy(value: ((breakpoints: string) => void)): this;
    @memo
    onCut(value: ((breakpoints: string) => void)): this;
    @memo
    onPaste(value: OnPasteCallback): this;
    @memo
    copyOption(value: CopyOptions): this;
    @memo
    maxLength(value: number): this;
    @memo
    textAlign(value: TextAlign): this;
    @memo
    enableKeyboardOnFocus(value: boolean): this;
    @memo
    selectionMenuHidden(value: boolean): this;
    @memo
    minFontSize(value: number | string | Resource): this;
    @memo
    maxFontSize(value: number | string | Resource): this;
    @memo
    decoration(value: TextDecorationOptions): this;
    @memo
    letterSpacing(value: number | string | Resource): this;
    @memo
    lineHeight(value: number | string | Resource): this;
    @memo
    type(value: SearchType): this;
    @memo
    fontFeature(value: string): this;
    @memo
    onWillInsert(value: ((parameter: InsertValue) => boolean)): this;
    @memo
    onDidInsert(value: ((parameter: InsertValue) => void)): this;
    @memo
    onWillDelete(value: ((parameter: DeleteValue) => boolean)): this;
    @memo
    onDidDelete(value: ((parameter: DeleteValue) => void)): this;
    @memo
    editMenuOptions(value: EditMenuOptions): this;
    @memo
    enablePreviewText(value: boolean): this;
    @memo
    enableHapticFeedback(value: boolean): this;
}
@memo
@ComponentBuilder
export declare function Search(
    options?: SearchOptions | undefined, 
    @memo
    content_?: () => void,
): SearchAttribute
