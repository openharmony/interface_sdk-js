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
import { Tuple_Number_Number, ShadowOptions, Callback_ClickEvent_Void, ClickEvent, SelectionOptions, CustomBuilder, CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback } from './common'
import { ResourceColor, Length, ResourceStr, PixelMap, Dimension, Margin, BorderRadiuses, Font, VisualEffect, Filter, UniformDataType, Blender, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, LocalizedMargin, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions } from './units'
import { FontStyle, FontWeight, TextAlign, WordBreak, LineBreakStrategy, ImageSpanAlignment, ImageFit, HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, CopyOptions, BarState } from './enums'
import { DecorationStyleInterface, StyledString, MutableStyledString } from './styledString'
import { Resource } from './../../../api/global/resource'
import { Tuple_Dimension_Dimension } from './navigation'
import { Callback_Void } from './abilityComponent'
import { SymbolEffectStrategy, SymbolRenderingStrategy } from './symbolglyph'
import { DecorationStyleResult, TextRange, MenuType, TextEditControllerEx, TextBaseController, LayoutManager, PreviewText, StyledStringController, StyledStringChangedListener, TextDataDetectorConfig, OnDidChangeCallback, EditMenuOptions } from './textCommon'
import { Callback_GestureEvent_Void, GestureEvent, GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
import { ComponentContent } from './../ComponentContent'
import { LengthMetrics } from './../Graphics'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { FocusBoxStyle, FocusPriority } from './focus'
import { Callback_Boolean_Void } from './checkbox'
import { EnterKeyType, SubmitEvent } from './textInput'
export enum RichEditorDeleteDirection {
    BACKWARD = 0,
    FORWARD = 1
}
export enum RichEditorSpanType {
    TEXT = 0,
    IMAGE = 1,
    MIXED = 2,
    BUILDER = 3
}
export enum RichEditorResponseType {
    RIGHT_CLICK = 0,
    LONG_PRESS = 1,
    SELECT = 2
}
export interface RichEditorSpanPosition {
    spanIndex: number;
    spanRange: [ number, number ];
}
export interface RichEditorTextStyle {
    fontColor?: ResourceColor;
    fontSize?: Length | number;
    fontStyle?: FontStyle;
    fontWeight?: number | FontWeight | string;
    fontFamily?: ResourceStr;
    decoration?: DecorationStyleInterface;
    textShadow?: ShadowOptions | Array<ShadowOptions>;
    letterSpacing?: number | string;
    lineHeight?: number | string | Resource;
    fontFeature?: string;
}
export interface LeadingMarginPlaceholder {
    pixelMap: PixelMap;
    size: [ Dimension, Dimension ];
}
export interface RichEditorParagraphStyle {
    textAlign?: TextAlign;
    leadingMargin?: Dimension | LeadingMarginPlaceholder;
    wordBreak?: WordBreak;
    lineBreakStrategy?: LineBreakStrategy;
}
export interface PasteEvent {
    preventDefault?: (() => void);
}
export interface RichEditorTextSpan {
    spanPosition: RichEditorSpanPosition;
    value: string;
    textStyle?: RichEditorTextStyle;
}
export interface RichEditorLayoutStyle {
    margin?: Dimension | Margin;
    borderRadius?: Dimension | BorderRadiuses;
}
export interface RichEditorImageSpanStyle {
    size?: [ Dimension, Dimension ];
    verticalAlign?: ImageSpanAlignment;
    objectFit?: ImageFit;
    layoutStyle?: RichEditorLayoutStyle;
}
export interface RichEditorSymbolSpanStyle {
    fontSize?: number | string | Resource;
    fontColor?: Array<ResourceColor>;
    fontWeight?: number | FontWeight | string;
    effectStrategy?: SymbolEffectStrategy;
    renderingStrategy?: SymbolRenderingStrategy;
}
export interface RichEditorTextStyleResult {
    fontColor: ResourceColor;
    fontSize: number;
    fontStyle: FontStyle;
    fontWeight: number;
    fontFamily: string;
    decoration: DecorationStyleResult;
    textShadow?: Array<ShadowOptions>;
    letterSpacing?: number;
    lineHeight?: number;
    fontFeature?: string;
}
export interface RichEditorParagraphResult {
    style: RichEditorParagraphStyle;
    range: [ number, number ];
}
export interface RichEditorSymbolSpanStyleResult {
    fontSize: number | string | Resource;
    fontColor: Array<ResourceColor>;
    fontWeight: number | FontWeight | string;
    effectStrategy: SymbolEffectStrategy;
    renderingStrategy: SymbolRenderingStrategy;
}
export interface RichEditorTextSpanResult {
    spanPosition: RichEditorSpanPosition;
    value: string;
    textStyle: RichEditorTextStyleResult;
    offsetInSpan: [ number, number ];
    symbolSpanStyle?: RichEditorSymbolSpanStyle;
    valueResource?: Resource;
    paragraphStyle?: RichEditorParagraphStyle;
    previewText?: string;
}
export interface RichEditorImageSpanStyleResult {
    size: [ number, number ];
    verticalAlign: ImageSpanAlignment;
    objectFit: ImageFit;
    layoutStyle?: RichEditorLayoutStyle;
}
export interface RichEditorImageSpanResult {
    spanPosition: RichEditorSpanPosition;
    valuePixelMap?: PixelMap;
    valueResourceStr?: ResourceStr;
    imageStyle: RichEditorImageSpanStyleResult;
    offsetInSpan: [ number, number ];
}
export interface RichEditorImageSpan {
    spanPosition: RichEditorSpanPosition;
    value: PixelMap | ResourceStr;
    imageStyle?: RichEditorImageSpanStyle;
}
export interface RichEditorRange {
    start?: number;
    end?: number;
}
export interface RichEditorGesture {
    onClick?: ((event: ClickEvent) => void);
    onLongPress?: ((event: GestureEvent) => void);
}
export interface RichEditorTextSpanOptions {
    offset?: number;
    style?: RichEditorTextStyle;
    paragraphStyle?: RichEditorParagraphStyle;
    gesture?: RichEditorGesture;
}
export interface KeyboardOptions {
    supportAvoidance?: boolean;
}
export interface RichEditorImageSpanOptions {
    offset?: number;
    imageStyle?: RichEditorImageSpanStyle;
    gesture?: RichEditorGesture;
}
export interface RichEditorBuilderSpanOptions {
    offset?: number;
}
export interface PlaceholderStyle {
    font?: Font;
    fontColor?: ResourceColor;
}
export interface RichEditorSpanStyleOptions extends RichEditorRange {
}
export interface RichEditorParagraphStyleOptions extends RichEditorRange {
    style: RichEditorParagraphStyle;
}
export interface RichEditorUpdateTextSpanStyleOptions extends RichEditorSpanStyleOptions {
    textStyle: RichEditorTextStyle;
}
export interface RichEditorUpdateImageSpanStyleOptions extends RichEditorSpanStyleOptions {
    imageStyle: RichEditorImageSpanStyle;
}
export interface RichEditorUpdateSymbolSpanStyleOptions extends RichEditorSpanStyleOptions {
    symbolStyle: RichEditorSymbolSpanStyle;
}
export interface RichEditorSymbolSpanOptions {
    offset?: number;
    style?: RichEditorSymbolSpanStyle;
}
export interface RichEditorSelection {
    selection: [ number, number ];
    spans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}
export interface RichEditorInsertValue {
    insertOffset: number;
    insertValue: string;
    previewText?: string;
}
export interface RichEditorDeleteValue {
    offset: number;
    direction: RichEditorDeleteDirection;
    length: number;
    richEditorDeleteSpans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}
export interface RichEditorChangeValue {
    rangeBefore: TextRange;
    replacedSpans: Array<RichEditorTextSpanResult>;
    replacedImageSpans: Array<RichEditorImageSpanResult>;
    replacedSymbolSpans: Array<RichEditorTextSpanResult>;
}
export interface RichEditorOptions {
    controller: RichEditorController;
}
export interface RichEditorStyledStringOptions {
    controller: RichEditorStyledStringController;
}
export interface SelectionMenuOptions {
    onAppear?: MenuOnAppearCallback;
    onDisappear?: (() => void);
    menuType?: MenuType;
}
export interface RichEditorBaseController {
    getCaretOffset(): number
    setCaretOffset(offset: number): boolean
    closeSelectionMenu(): void
    getTypingStyle(): RichEditorTextStyle
    setTypingStyle(value: RichEditorTextStyle): void
    setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void
    isEditing(): boolean
    stopEditing(): void
    getLayoutManager(): LayoutManager
    getPreviewText(): PreviewText
}
export interface RichEditorController extends RichEditorBaseController {
    addTextSpan(value: string, options?: RichEditorTextSpanOptions): number
    addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number
    addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): number
    addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions): number
    updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions | RichEditorUpdateSymbolSpanStyleOptions): void
    updateParagraphStyle(value: RichEditorParagraphStyleOptions): void
    deleteSpans(value?: RichEditorRange): void
    getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>
    getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult>
    getSelection(): RichEditorSelection
    fromStyledString(value: StyledString): Array<RichEditorSpan>
    toStyledString(value: RichEditorRange): StyledString
}
export type RichEditorSpan = RichEditorImageSpanResult | RichEditorTextSpanResult;
export interface RichEditorStyledStringController extends RichEditorBaseController {
    setStyledString(styledString: StyledString): void
    getStyledString(): MutableStyledString
    getSelection(): RichEditorRange
    onContentChanged(listener: StyledStringChangedListener): void
}
export type Callback_RichEditorSelection_Void = (parameter: RichEditorSelection) => void;
export type Callback_RichEditorRange_Void = (parameter: RichEditorRange) => void;
export type Callback_RichEditorInsertValue_Boolean = (parameter: RichEditorInsertValue) => boolean;
export type Callback_RichEditorTextSpanResult_Void = (parameter: RichEditorTextSpanResult) => void;
export type Callback_TextRange_Void = (parameter: TextRange) => void;
export type Callback_RichEditorDeleteValue_Boolean = (parameter: RichEditorDeleteValue) => boolean;
export type Callback_RichEditorChangeValue_Boolean = (parameter: RichEditorChangeValue) => boolean;
export type Callback_CutEvent_Void = (parameter: CutEvent) => void;
export type Callback_CopyEvent_Void = (parameter: CopyEvent) => void;
export interface RichEditorAttribute extends CommonMethod {
    @memo
    onReady(value: (() => void)): this;
    @memo
    onSelect(value: ((parameter: RichEditorSelection) => void)): this;
    @memo
    onSelectionChange(value: ((parameter: RichEditorRange) => void)): this;
    @memo
    aboutToIMEInput(value: ((parameter: RichEditorInsertValue) => boolean)): this;
    @memo
    onIMEInputComplete(value: ((parameter: RichEditorTextSpanResult) => void)): this;
    @memo
    onDidIMEInput(value: ((parameter: TextRange) => void)): this;
    @memo
    aboutToDelete(value: ((parameter: RichEditorDeleteValue) => boolean)): this;
    @memo
    onDeleteComplete(value: (() => void)): this;
    @memo
    copyOptions(value: CopyOptions): this;
    @memo
    onPaste(value: PasteEventCallback): this;
    @memo
    enableDataDetector(value: boolean): this;
    @memo
    enablePreviewText(value: boolean): this;
    @memo
    dataDetectorConfig(value: TextDataDetectorConfig): this;
    @memo
    caretColor(value: ResourceColor): this;
    @memo
    selectedBackgroundColor(value: ResourceColor): this;
    @memo
    onEditingChange(value: ((parameter: boolean) => void)): this;
    @memo
    enterKeyType(value: EnterKeyType): this;
    @memo
    onSubmit(value: SubmitCallback): this;
    @memo
    onWillChange(value: ((parameter: RichEditorChangeValue) => boolean)): this;
    @memo
    onDidChange(value: OnDidChangeCallback): this;
    @memo
    onCut(value: ((parameter: CutEvent) => void)): this;
    @memo
    onCopy(value: ((parameter: CopyEvent) => void)): this;
    @memo
    editMenuOptions(value: EditMenuOptions): this;
    @memo
    enableKeyboardOnFocus(value: boolean): this;
    @memo
    enableHapticFeedback(value: boolean): this;
    @memo
    barState(value: BarState): this;
}
export interface CutEvent {
    preventDefault?: (() => void);
}
export interface CopyEvent {
    preventDefault?: (() => void);
}
export type SubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;
export type MenuOnAppearCallback = (start: number, end: number) => void;
export type PasteEventCallback = (event?: PasteEvent) => void;
export interface RichEditorInterface {
    invoke(value: RichEditorOptions): RichEditorAttribute;

}
@memo
@ComponentBuilder
export declare function RichEditor(
    value: RichEditorOptions | RichEditorStyledStringOptions, 
    @memo
    content_?: () => void,
): RichEditorAttribute
