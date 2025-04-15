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
import { ResourceColor, ResourceStr, VisualEffect, Filter, UniformDataType, Blender, Length, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, Font, PixelMap } from './units'
import { TextContentControllerBase, CaretOffset, RectResult, SelectionOptions, CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, TextDecorationOptions, InputCounterOptions } from './common'
import { Resource } from './../../../api/global/resource'
import { PasteEvent, KeyboardOptions } from './richEditor'
import { ComponentContent } from './../ComponentContent'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, TextOverflow, FontStyle, FontWeight, CopyOptions, TextAlign, TextContentStyle, BarState, WordBreak, LineBreakStrategy, TextHeightAdaptivePolicy } from './enums'
import { LengthMetrics } from './../Graphics'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Callback_Void } from './abilityComponent'
import { FocusBoxStyle, FocusPriority } from './focus'
import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
import { ContentType } from './textArea'
import { Callback_Boolean_Void } from './checkbox'
import { EditableTextOnChangeCallback, CaretStyle, InsertValue, DeleteValue, EditMenuOptions } from './textCommon'
import { Callback_String_Void } from './gridRow'
import { CancelButtonOptions, CancelButtonSymbolOptions, Callback_InsertValue_Boolean, Callback_InsertValue_Void, Callback_DeleteValue_Boolean, Callback_DeleteValue_Void } from './search'
import { Callback_ResourceStr_Void } from './select'
export enum InputType {
    NORMAL = 0,
    Normal = 0,
    NUMBER = 1,
    Number = 1,
    PHONE_NUMBER = 2,
    PhoneNumber = 2,
    EMAIL = 3,
    Email = 3,
    PASSWORD = 4,
    Password = 4,
    NUMBER_PASSWORD = 8,
    SCREEN_LOCK_PASSWORD = 9,
    USER_NAME = 10,
    NEW_PASSWORD = 11,
    NUMBER_DECIMAL = 12,
    URL = 13
}
export enum EnterKeyType {
    GO = 2,
    Go = 2,
    SEARCH = 3,
    Search = 3,
    SEND = 4,
    Send = 4,
    NEXT = 5,
    Next = 5,
    DONE = 6,
    Done = 6,
    PREVIOUS = 7,
    NEW_LINE = 8
}
export interface UnderlineColor {
    typing?: ResourceColor | undefined;
    normal?: ResourceColor | undefined;
    error?: ResourceColor | undefined;
    disable?: ResourceColor | undefined;
}
export interface SubmitEvent {
    text: string;
    keepEditableState(): void
}
export declare class TextInputController extends TextContentControllerBase {
    caretPosition(value: number): void
    setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void
    stopEditing(): void
}
export interface TextInputOptions {
    placeholder?: ResourceStr;
    text?: ResourceStr;
    controller?: TextInputController;
}
export enum TextInputStyle {
    DEFAULT = 0,
    Default = 0,
    INLINE = 1,
    Inline = 1
}
export type TextInputInterface = (value?: TextInputOptions) => TextInputAttribute;
export interface PasswordIcon {
    onIconSrc?: string | Resource;
    offIconSrc?: string | Resource;
}
export type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;
export type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void;
export type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void;
export type OnPasteCallback = (content: string, event: PasteEvent) => void;
export interface TextInputAttribute extends CommonMethod {
    @memo
    type(value: InputType): this;
    @memo
    contentType(value: ContentType): this;
    @memo
    placeholderColor(value: ResourceColor): this;
    @memo
    textOverflow(value: TextOverflow): this;
    @memo
    textIndent(value: Dimension): this;
    @memo
    placeholderFont(value: Font): this;
    @memo
    enterKeyType(value: EnterKeyType): this;
    @memo
    caretColor(value: ResourceColor): this;
    @memo
    onEditChanged(value: ((parameter: boolean) => void)): this;
    @memo
    onEditChange(value: ((parameter: boolean) => void)): this;
    @memo
    onSubmit(value: OnSubmitCallback): this;
    @memo
    onChange(value: EditableTextOnChangeCallback): this;
    @memo
    onTextSelectionChange(value: OnTextSelectionChangeCallback): this;
    @memo
    onContentScroll(value: OnContentScrollCallback): this;
    @memo
    maxLength(value: number): this;
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
    onCopy(value: ((breakpoints: string) => void)): this;
    @memo
    onCut(value: ((breakpoints: string) => void)): this;
    @memo
    onPaste(value: OnPasteCallback): this;
    @memo
    copyOption(value: CopyOptions): this;
    @memo
    showPasswordIcon(value: boolean): this;
    @memo
    textAlign(value: TextAlign): this;
    @memo
    style(value: TextInputStyle | TextContentStyle): this;
    @memo
    caretStyle(value: CaretStyle): this;
    @memo
    selectedBackgroundColor(value: ResourceColor): this;
    @memo
    caretPosition(value: number): this;
    @memo
    enableKeyboardOnFocus(value: boolean): this;
    @memo
    passwordIcon(value: PasswordIcon): this;
    @memo
    showError(value: ResourceStr | undefined): this;
    @memo
    showUnit(value: CustomBuilder): this;
    @memo
    showUnderline(value: boolean): this;
    @memo
    underlineColor(value: ResourceColor | UnderlineColor | undefined): this;
    @memo
    selectionMenuHidden(value: boolean): this;
    @memo
    barState(value: BarState): this;
    @memo
    maxLines(value: number): this;
    @memo
    wordBreak(value: WordBreak): this;
    @memo
    lineBreakStrategy(value: LineBreakStrategy): this;
    @memo
    cancelButton(value: CancelButtonOptions): this;

    @memo
    selectAll(value: boolean): this;
    @memo
    minFontSize(value: number | string | Resource): this;
    @memo
    maxFontSize(value: number | string | Resource): this;
    @memo
    heightAdaptivePolicy(value: TextHeightAdaptivePolicy): this;
    @memo
    enableAutoFill(value: boolean): this;
    @memo
    decoration(value: TextDecorationOptions): this;
    @memo
    letterSpacing(value: number | string | Resource): this;
    @memo
    lineHeight(value: number | string | Resource): this;
    @memo
    passwordRules(value: string): this;
    @memo
    fontFeature(value: string): this;
    @memo
    showPassword(value: boolean): this;
    @memo
    onSecurityStateChange(value: ((parameter: boolean) => void)): this;
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
export declare function TextInput(
    value?: TextInputOptions | undefined, 
    @memo
    content_?: () => void,
): TextInputAttribute
