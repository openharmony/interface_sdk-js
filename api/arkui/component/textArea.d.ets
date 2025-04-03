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

import { TextContentControllerBase, CaretOffset, RectResult, SelectionOptions, CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, TextDecorationOptions, InputCounterOptions } from './common'
import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { ResourceStr, VisualEffect, Filter, UniformDataType, Blender, Length, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, ResourceColor, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, Font, PixelMap } from './units'
import { EnterKeyType, SubmitEvent } from './textInput'
import { PasteEvent, KeyboardOptions } from './richEditor'
import { ComponentContent } from './../ComponentContent'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, TextAlign, FontStyle, FontWeight, TextOverflow, CopyOptions, TextContentStyle, BarState, TextHeightAdaptivePolicy, WordBreak, LineBreakStrategy } from './enums'
import { LengthMetrics } from './../Graphics'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Resource } from './../../../api/global/resource'
import { Callback_Void } from './abilityComponent'
import { FocusBoxStyle, FocusPriority } from './focus'
import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
import { CaretStyle, EditableTextOnChangeCallback, InsertValue, DeleteValue, EditMenuOptions } from './textCommon'
import { Callback_Number_Number_Void } from './grid'
import { Callback_Boolean_Void } from './checkbox'
import { Callback_String_Void } from './gridRow'
import { Callback_InsertValue_Boolean, Callback_InsertValue_Void, Callback_DeleteValue_Boolean, Callback_DeleteValue_Void } from './search'
import { Callback_ResourceStr_Void } from './select'
export declare class TextAreaController extends TextContentControllerBase {
    caretPosition(value: number): void
    setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void
    stopEditing(): void
}
export interface TextAreaOptions {
    placeholder?: ResourceStr;
    text?: ResourceStr;
    controller?: TextAreaController;
}
export type TextAreaInterface = (value?: TextAreaOptions) => TextAreaAttribute;
export enum TextAreaType {
    NORMAL = 0,
    NUMBER = 2,
    PHONE_NUMBER = 3,
    EMAIL = 5,
    NUMBER_DECIMAL = 12,
    URL = 13
}
export enum ContentType {
    USER_NAME = 0,
    PASSWORD = 1,
    NEW_PASSWORD = 2,
    FULL_STREET_ADDRESS = 3,
    HOUSE_NUMBER = 4,
    DISTRICT_ADDRESS = 5,
    CITY_ADDRESS = 6,
    PROVINCE_ADDRESS = 7,
    COUNTRY_ADDRESS = 8,
    PERSON_FULL_NAME = 9,
    PERSON_LAST_NAME = 10,
    PERSON_FIRST_NAME = 11,
    PHONE_NUMBER = 12,
    PHONE_COUNTRY_CODE = 13,
    FULL_PHONE_NUMBER = 14,
    EMAIL_ADDRESS = 15,
    BANK_CARD_NUMBER = 16,
    ID_CARD_NUMBER = 17,
    NICKNAME = 23,
    DETAIL_INFO_WITHOUT_STREET = 24,
    FORMAT_ADDRESS = 25
}
export type TextAreaSubmitCallback = (enterKeyType: EnterKeyType, event?: SubmitEvent) => void;
export type Callback_EnterKeyType_Void = (enterKey: EnterKeyType) => void;
export type Callback_String_PasteEvent_Void = (value: string, event: PasteEvent) => void;
export interface TextAreaAttribute extends CommonMethod {
    @memo
    placeholderColor(value: ResourceColor): this;
    @memo
    placeholderFont(value: Font): this;
    @memo
    enterKeyType(value: EnterKeyType): this;
    @memo
    textAlign(value: TextAlign): this;
    @memo
    caretColor(value: ResourceColor): this;
    @memo
    fontColor(value: ResourceColor): this;
    @memo
    fontSize(value: Length): this;
    @memo
    fontStyle(value: FontStyle): this;
    @memo
    fontWeight(value: number | FontWeight | string): this;
    @memo
    fontFamily(value: ResourceStr): this;
    @memo
    textOverflow(value: TextOverflow): this;
    @memo
    textIndent(value: Dimension): this;
    @memo
    caretStyle(value: CaretStyle): this;
    @memo
    selectedBackgroundColor(value: ResourceColor): this;
    @memo
    onSubmit(value: ((enterKey: EnterKeyType) => void)): this;

    @memo
    onChange(value: EditableTextOnChangeCallback): this;
    @memo
    onTextSelectionChange(value: ((first: number,last: number) => void)): this;
    @memo
    onContentScroll(value: ((first: number,last: number) => void)): this;
    @memo
    onEditChange(value: ((parameter: boolean) => void)): this;
    @memo
    onCopy(value: ((breakpoints: string) => void)): this;
    @memo
    onCut(value: ((breakpoints: string) => void)): this;
    @memo
    onPaste(value: ((value: string,event: PasteEvent) => void)): this;
    @memo
    copyOption(value: CopyOptions): this;
    @memo
    enableKeyboardOnFocus(value: boolean): this;
    @memo
    maxLength(value: number): this;
    @memo
    style(value: TextContentStyle): this;
    @memo
    barState(value: BarState): this;
    @memo
    selectionMenuHidden(value: boolean): this;
    @memo
    minFontSize(value: number | string | Resource): this;
    @memo
    maxFontSize(value: number | string | Resource): this;
    @memo
    heightAdaptivePolicy(value: TextHeightAdaptivePolicy): this;
    @memo
    maxLines(value: number): this;
    @memo
    wordBreak(value: WordBreak): this;
    @memo
    lineBreakStrategy(value: LineBreakStrategy): this;
    @memo
    decoration(value: TextDecorationOptions): this;
    @memo
    letterSpacing(value: number | string | Resource): this;
    @memo
    lineSpacing(value: LengthMetrics): this;
    @memo
    lineHeight(value: number | string | Resource): this;
    @memo
    type(value: TextAreaType): this;
    @memo
    enableAutoFill(value: boolean): this;
    @memo
    contentType(value: ContentType): this;
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
export declare function TextArea(
    value?: TextAreaOptions | undefined, 
    @memo
    content_?: () => void,
): TextAreaAttribute
