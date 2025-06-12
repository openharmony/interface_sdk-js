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
import { TextDecorationType, TextDecorationStyle, Curve, PlayMode, SharedTransitionEffectType, HorizontalAlign, VerticalAlign, TransitionType, FontWeight, FontStyle, Color, ColoringStrategy, MouseButton, MouseAction, AccessibilityHoverType, TouchType, KeyType, KeySource, BorderStyle, Placement, ArrowPointPosition, ClickEffectLevel, NestedScrollMode, GradientDirection, HitTestMode, Alignment, ImageSize, HoverEffect, Visibility, ItemAlign, Direction, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, LineCapStyle, LineJoinStyle, PixelRoundCalcPolicy, BarState, EdgeEffect, IlluminatedType } from './enums'
import { ResourceColor, Context, Length, Bias, PixelMap, PointerStyle, Area, Font, BorderRadiuses, EdgeWidths, LocalizedEdgeWidths, SizeOptions, Summary, UniformDataType, UnifiedData, ResourceStr, Dimension, EdgeColors, LocalizedEdgeColors, EdgeStyles, Position, LocalizedBorderRadiuses, Margin, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, LocalizedMargin, BorderOptions, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, VisualEffect, Filter, Blender, EdgeWidth, DirectionalEdgesT, NavDestinationInfo, NavigationInfo, RouterPageInfo } from './units'
import { Resource } from './../../../api/global/resource'

import { DrawContext, LengthMetrics } from './../Graphics'
import { ButtonType, ButtonStyleMode, ButtonRole } from './button'
import { BaseGestureEvent, GestureRecognizer, GestureJudgeResult, GestureInfo, GestureType, GestureMask, GestureHandler, GesturePriority, Gesture, GestureGroup } from './gesture'
import { IntentionCode } from './../../../api/@ohos.multimodalInput.intentionCode'
import { UIContext } from './../../../api/@ohos.arkui.UIContext'
import { SymbolGlyphModifier } from './../../../api/arkui/SymbolGlyphModifier'
import { ImageModifier } from './../../../api/arkui/ImageModifier'
import { ComponentContent } from './../ComponentContent'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'

import { Theme } from './../../../api/@ohos.arkui.theme'
import { Callback_Number_Number_Void } from './grid'
import { ScrollOnWillScrollCallback, ScrollOnScrollCallback } from './scroll'
import { ScrollState } from './list'

@Retention({policy: "SOURCE"})
export declare @interface Builder {};
@Retention({policy: "SOURCE"})
export declare @interface BuilderParam {};
export interface ComponentOptions {
    freezeWhenInactive: boolean;
}
export interface InputCounterOptions {
    thresholdPercentage?: number;
    highlightBorder?: boolean;
}
export interface TextDecorationOptions {
    type: TextDecorationType;
    color?: ResourceColor;
    style?: TextDecorationStyle;
}
export interface ProvideOptions {
    allowOverride?: string;
}
export interface AnimatableArithmetic<T> {
    plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>
    subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>
    multiply(scale: number): AnimatableArithmetic<T>
    equals(rhs: AnimatableArithmetic<T>): boolean
}
export declare function getContext(arg0: Object): Context
export declare function postCardAction(arg0: Object, arg1: Object): void
export interface Configuration {
    colorMode: string;
    fontScale: number;
}
export interface Rectangle {
    x?: Length;
    y?: Length;
    width?: Length;
    height?: Length;
}
export interface ExpectedFrameRateRange {
    min: number;
    max: number;
    expected: number;
}
declare function dollar_r(arg0: string, arg1: Array<object>): Resource
declare function dollar_rawfile(arg0: string): Resource
export enum FinishCallbackType {
    REMOVED = 0,
    LOGICALLY = 1
}
export enum TouchTestStrategy {
    DEFAULT = 0,
    FORWARD_COMPETITION = 1,
    FORWARD = 2
}
export interface AnimateParam {
    duration?: number;
    tempo?: number;
    curve?: Curve | string | ICurve;
    delay?: number;
    iterations?: number;
    playMode?: PlayMode;
    onFinish?: (() => void);
    finishCallbackType?: FinishCallbackType;
    expectedFrameRateRange?: ExpectedFrameRateRange;
}
export interface ICurve {
    interpolate(fraction: number): number
}
export interface MotionPathOptions {
    path: string;
    from?: number;
    to?: number;
    rotatable?: boolean;
}
export interface sharedTransitionOptions {
    duration?: number;
    curve?: Curve | string | ICurve;
    delay?: number;
    motionPath?: MotionPathOptions;
    zIndex?: number;
    type?: SharedTransitionEffectType;
}
export interface GeometryTransitionOptions {
    follow?: boolean;
    hierarchyStrategy?: TransitionHierarchyStrategy;
}
export enum TransitionHierarchyStrategy {
    NONE = 0,
    ADAPTIVE = 1
}
export interface TranslateOptions {
    x?: number | string;
    y?: number | string;
    z?: number | string;
}
export interface ScaleOptions {
    x?: number;
    y?: number;
    z?: number;
    centerX?: number | string;
    centerY?: number | string;
}
export interface Literal_String_anchor_HorizontalAlign_align {
    anchor: string;
    align: HorizontalAlign;
}
export interface Literal_String_anchor_VerticalAlign_align {
    anchor: string;
    align: VerticalAlign;
}
export interface AlignRuleOption {
    left?: Literal_String_anchor_HorizontalAlign_align;
    right?: Literal_String_anchor_HorizontalAlign_align;
    middle?: Literal_String_anchor_HorizontalAlign_align;
    top?: Literal_String_anchor_VerticalAlign_align;
    bottom?: Literal_String_anchor_VerticalAlign_align;
    center?: Literal_String_anchor_VerticalAlign_align;
    bias?: Bias;
}
export interface LocalizedHorizontalAlignParam {
    anchor: string;
    align: HorizontalAlign;
}
export interface LocalizedVerticalAlignParam {
    anchor: string;
    align: VerticalAlign;
}
export interface LocalizedAlignRuleOptions {
    start?: LocalizedHorizontalAlignParam;
    end?: LocalizedHorizontalAlignParam;
    middle?: LocalizedHorizontalAlignParam;
    top?: LocalizedVerticalAlignParam;
    bottom?: LocalizedVerticalAlignParam;
    center?: LocalizedVerticalAlignParam;
    bias?: Bias;
}
export enum ChainStyle {
    SPREAD = 0,
    SPREAD_INSIDE = 1,
    PACKED = 2
}
export interface RotateOptions {
    x?: number;
    y?: number;
    z?: number;
    centerX?: number | string;
    centerY?: number | string;
    centerZ?: number;
    perspective?: number;
    angle: number | string;
}
export interface TransitionOptions {
    type?: TransitionType;
    opacity?: number;
    translate?: TranslateOptions;
    scale?: ScaleOptions;
    rotate?: RotateOptions;
}
export enum TransitionEdge {
    TOP = 0,
    BOTTOM = 1,
    START = 2,
    END = 3
}
export interface Literal_TransitionEffect_appear_disappear {
    appear: TransitionEffect;
    disappear: TransitionEffect;
}
export interface TransitionEffects {
    identity: undefined;
    opacity: number;
    slideSwitch: undefined;
    move: TransitionEdge;
    translate: TranslateOptions;
    rotate: RotateOptions;
    scale: ScaleOptions;
    asymmetric: Literal_TransitionEffect_appear_disappear;
}
export interface DrawModifier {
    drawBehind(drawContext: DrawContext): void
    drawContent(drawContext: DrawContext): void
    drawFront(drawContext: DrawContext): void
    invalidate(): void
}
export declare class TransitionEffect {
    static readonly IDENTITY: TransitionEffect;
    static readonly OPACITY: TransitionEffect;
    static readonly SLIDE: TransitionEffect;
    static readonly SLIDE_SWITCH: TransitionEffect;
    static translate(options: TranslateOptions): TransitionEffect;
    static rotate(options: RotateOptions): TransitionEffect;
    static scale(options: ScaleOptions): TransitionEffect;
    static opacity(alpha: number): TransitionEffect;
    static move(edge: TransitionEdge): TransitionEffect;
    static asymmetric(appear: TransitionEffect, disappear: TransitionEffect): TransitionEffect;
    animation(value: AnimateParam): TransitionEffect;
    combine(transitionEffect: TransitionEffect): TransitionEffect;
}
export interface PreviewParams {
    title?: string;
    width?: number;
    height?: number;
    locale?: string;
    colorMode?: string;
    deviceType?: string;
    dpi?: number;
    orientation?: string;
    roundScreen?: boolean;
}
export interface ItemDragInfo {
    x: number;
    y: number;
}
export enum EffectType {
    DEFAULT = 0,
    WINDOW_EFFECT = 1
}
export enum PreDragStatus {
    ACTION_DETECTING_STATUS = 0,
    READY_TO_TRIGGER_DRAG_ACTION = 1,
    PREVIEW_LIFT_STARTED = 2,
    PREVIEW_LIFT_FINISHED = 3,
    PREVIEW_LANDING_STARTED = 4,
    PREVIEW_LANDING_FINISHED = 5,
    ACTION_CANCELED_BEFORE_DRAG = 6
}
export interface DragItemInfo {
    pixelMap?: PixelMap;
    builder?: CustomBuilder;
    extraInfo?: string;
}
export declare function animateTo(arg0: AnimateParam, arg1: (() => void)): void
export declare function animateToImmediately(arg0: AnimateParam, arg1: (() => void)): void
export declare function vp2px(arg0: number): number
export declare function px2vp(arg0: number): number
export declare function fp2px(arg0: number): number
export declare function px2fp(arg0: number): number
export declare function lpx2px(arg0: number): number
export declare function px2lpx(arg0: number): number
export declare namespace focusControl {
    function requestFocus(arg0: string): boolean
}
export declare namespace cursorControl {
    function setCursor(arg0: PointerStyle): void
}
export declare namespace cursorControl {
    function restoreDefault(): void
}
export interface EventTarget {
    area: Area;
}
export enum SourceType {
    UNKNOWN = 0,
    Unknown = 0,
    MOUSE = 1,
    Mouse = 1,
    TOUCH_SCREEN = 2,
    TouchScreen = 2
}
export enum SourceTool {
    UNKNOWN = 0,
    Unknown = 0,
    FINGER = 1,
    Finger = 1,
    PEN = 2,
    Pen = 2,
    MOUSE = 3,
    TOUCHPAD = 4,
    JOYSTICK = 5
}
export enum RepeatMode {
    REPEAT = 0,
    Repeat = 0,
    STRETCH = 1,
    Stretch = 1,
    ROUND = 2,
    Round = 2,
    SPACE = 3,
    Space = 3
}
export enum BlurStyle {
    THIN = 0,
    Thin = 0,
    REGULAR = 1,
    Regular = 1,
    THICK = 2,
    Thick = 2,
    BACKGROUND_THIN = 3,
    BACKGROUND_REGULAR = 4,
    BACKGROUND_THICK = 5,
    BACKGROUND_ULTRA_THICK = 6,
    NONE = 7,
    COMPONENT_ULTRA_THIN = 8,
    COMPONENT_THIN = 9,
    COMPONENT_REGULAR = 10,
    COMPONENT_THICK = 11,
    COMPONENT_ULTRA_THICK = 12
}
export enum BlurStyleActivePolicy {
    FOLLOWS_WINDOW_ACTIVE_STATE = 0,
    ALWAYS_ACTIVE = 1,
    ALWAYS_INACTIVE = 2
}
export enum ThemeColorMode {
    SYSTEM = 0,
    LIGHT = 1,
    DARK = 2
}
export enum AdaptiveColor {
    DEFAULT = 0,
    AVERAGE = 1
}
export enum ModalTransition {
    DEFAULT = 0,
    NONE = 1,
    ALPHA = 2
}
export interface BackgroundBlurStyleOptions extends BlurStyleOptions {
    policy?: BlurStyleActivePolicy;
    inactiveColor?: ResourceColor;
}
export interface ForegroundBlurStyleOptions extends BlurStyleOptions {
}
export type Tuple_Number_Number = [
    number,
    number
]
export interface BlurOptions {
    grayscale: [ number, number ];
}
export interface BlurStyleOptions {
    colorMode?: ThemeColorMode;
    adaptiveColor?: AdaptiveColor;
    scale?: number;
    blurOptions?: BlurOptions;
}
export interface BackgroundEffectOptions {
    radius: number;
    saturation?: number;
    brightness?: number;
    color?: ResourceColor;
    adaptiveColor?: AdaptiveColor;
    blurOptions?: BlurOptions;
    policy?: BlurStyleActivePolicy;
    inactiveColor?: ResourceColor;
}
export interface ForegroundEffectOptions {
    radius: number;
}
export interface PickerTextStyle {
    color?: ResourceColor;
    font?: Font;
}
export interface PickerDialogButtonStyle {
    type?: ButtonType;
    style?: ButtonStyleMode;
    role?: ButtonRole;
    fontSize?: Length;
    fontColor?: ResourceColor;
    fontWeight?: FontWeight | number | string;
    fontStyle?: FontStyle;
    fontFamily?: Resource | string;
    backgroundColor?: ResourceColor;
    borderRadius?: Length | BorderRadiuses;
    primary?: boolean;
}
export enum ShadowType {
    COLOR = 0,
    BLUR = 1
}
export interface ShadowOptions {
    radius: number | Resource;
    type?: ShadowType;
    color?: Color | string | Resource | ColoringStrategy;
    offsetX?: number | Resource;
    offsetY?: number | Resource;
    fill?: boolean;
}
export enum ShadowStyle {
    OUTER_DEFAULT_XS = 0,
    OUTER_DEFAULT_SM = 1,
    OUTER_DEFAULT_MD = 2,
    OUTER_DEFAULT_LG = 3,
    OUTER_FLOATING_SM = 4,
    OUTER_FLOATING_MD = 5
}
export interface MultiShadowOptions {
    radius?: number | Resource;
    offsetX?: number | Resource;
    offsetY?: number | Resource;
}
export enum SafeAreaType {
    SYSTEM = 0,
    CUTOUT = 1,
    KEYBOARD = 2
}
export enum SafeAreaEdge {
    TOP = 0,
    BOTTOM = 1,
    START = 2,
    END = 3
}
export enum LayoutSafeAreaType {
    SYSTEM = 0
}
export enum LayoutSafeAreaEdge {
    TOP = 0,
    BOTTOM = 1
}
export enum SheetSize {
    MEDIUM = 0,
    LARGE = 1,
    FIT_CONTENT = 2
}
export interface BaseEvent {
    target: EventTarget;
    timestamp: number;
    source: SourceType;
    axisHorizontal?: number;
    axisVertical?: number;
    pressure: number;
    tiltX: number;
    tiltY: number;
    sourceTool: SourceTool;
    deviceId?: number;
    getModifierKeyState(keys: Array<string>): boolean
}
export interface BorderImageOption {
    slice?: Length | EdgeWidths | LocalizedEdgeWidths;
    repeat?: RepeatMode;
    source?: string | Resource | LinearGradient_common;
    width?: Length | EdgeWidths | LocalizedEdgeWidths;
    outset?: Length | EdgeWidths | LocalizedEdgeWidths;
    fill?: boolean;
}
export interface ClickEvent extends BaseEvent {
    displayX: number;
    displayY: number;
    windowX: number;
    windowY: number;
    screenX: number;
    screenY: number;
    x: number;
    y: number;
    preventDefault: (() => void);
}
export interface HoverEvent extends BaseEvent {
    stopPropagation: (() => void);
}
export interface MouseEvent extends BaseEvent {
    button: MouseButton;
    action: MouseAction;
    displayX: number;
    displayY: number;
    windowX: number;
    windowY: number;
    screenX: number;
    screenY: number;
    x: number;
    y: number;
    stopPropagation: (() => void);
}
export interface AccessibilityHoverEvent extends BaseEvent {
    type: AccessibilityHoverType;
    x: number;
    y: number;
    displayX: number;
    displayY: number;
    windowX: number;
    windowY: number;
}
export interface TouchObject {
    type: TouchType;
    id: number;
    displayX: number;
    displayY: number;
    windowX: number;
    windowY: number;
    screenX: number;
    screenY: number;
    x: number;
    y: number;
}
export interface HistoricalPoint {
    touchObject: TouchObject;
    size: number;
    force: number;
    timestamp: number;
}
export interface TouchEvent extends BaseEvent {
    type: TouchType;
    touches: Array<TouchObject>;
    changedTouches: Array<TouchObject>;
    stopPropagation: (() => void);
    preventDefault: (() => void);
    getHistoricalPoints(): Array<HistoricalPoint>
}
export type SizeChangeCallback = (oldValue: SizeOptions, newValue: SizeOptions) => void;
export type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer,
    recognizers: Array<GestureRecognizer>) => GestureJudgeResult;
export type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer,
    others: Array<GestureRecognizer>) => GestureRecognizer;
export type TransitionFinishCallback = (transitionIn: boolean) => void;
export interface PixelMapMock {
    release(): void
}
export enum DragBehavior {
    COPY = 0,
    MOVE = 1
}
export enum DragResult {
    DRAG_SUCCESSFUL = 0,
    DRAG_FAILED = 1,
    DRAG_CANCELED = 2,
    DROP_ENABLED = 3,
    DROP_DISABLED = 4
}
export enum BlendMode {
    NONE = 0,
    CLEAR = 1,
    SRC = 2,
    DST = 3,
    SRC_OVER = 4,
    DST_OVER = 5,
    SRC_IN = 6,
    DST_IN = 7,
    SRC_OUT = 8,
    DST_OUT = 9,
    SRC_ATOP = 10,
    DST_ATOP = 11,
    XOR = 12,
    PLUS = 13,
    MODULATE = 14,
    SCREEN = 15,
    OVERLAY = 16,
    DARKEN = 17,
    LIGHTEN = 18,
    COLOR_DODGE = 19,
    COLOR_BURN = 20,
    HARD_LIGHT = 21,
    SOFT_LIGHT = 22,
    DIFFERENCE = 23,
    EXCLUSION = 24,
    MULTIPLY = 25,
    HUE = 26,
    SATURATION = 27,
    COLOR = 28,
    LUMINOSITY = 29
}
export enum BlendApplyType {
    FAST = 0,
    OFFSCREEN = 1
}
export interface DragEvent {
    dragBehavior: DragBehavior;
    useCustomDropAnimation: boolean;
    getDisplayX(): number
    getDisplayY(): number
    getWindowX(): number
    getWindowY(): number
    getX(): number
    getY(): number
    setData(unifiedData: UnifiedData): void
    getData(): UnifiedData
    getSummary(): Summary
    setResult(dragResult: DragResult): void
    getResult(): DragResult
    getPreviewRect(): Rectangle
    getVelocityX(): number
    getVelocityY(): number
    getVelocity(): number
    getModifierKeyState(keys: Array<string>): boolean
}
export interface KeyEvent {
    type: KeyType;
    keyCode: number;
    keyText: string;
    keySource: KeySource;
    deviceId: number;
    metaKey: number;
    timestamp: number;
    stopPropagation: (() => void);
    intentionCode: IntentionCode;
    unicode?: number;
    getModifierKeyState(keys: Array<string>): boolean
}
export interface BindOptions {
    backgroundColor?: ResourceColor;
    onAppear?: (() => void);
    onDisappear?: (() => void);
    onWillAppear?: (() => void);
    onWillDisappear?: (() => void);
}
export interface DismissContentCoverAction {
    dismiss: (() => void);
    reason: DismissReason;
}
export type Callback_DismissContentCoverAction_Void = (parameter: DismissContentCoverAction) => void;
export interface ContentCoverOptions extends BindOptions {
    modalTransition?: ModalTransition;
    onWillDismiss?: ((parameter: DismissContentCoverAction) => void);
    transition?: TransitionEffect;
}
export interface SheetTitleOptions {
    title: ResourceStr;
    subtitle?: ResourceStr;
}
export enum SheetType {
    BOTTOM = 0,
    CENTER = 1,
    POPUP = 2
}
export enum SheetMode {
    OVERLAY = 0,
    EMBEDDED = 1
}
export enum ScrollSizeMode {
    FOLLOW_DETENT = 0,
    CONTINUOUS = 1
}
export enum SheetKeyboardAvoidMode {
    NONE = 0,
    TRANSLATE_AND_RESIZE = 1,
    RESIZE_ONLY = 2,
    TRANSLATE_AND_SCROLL = 3
}
export interface SheetDismiss {
    dismiss: (() => void);
}
export interface DismissSheetAction {
    dismiss: (() => void);
    reason: DismissReason;
}
export interface SpringBackAction {
    springBack: (() => void);
}
export type Type_SheetOptions_detents = [
    SheetSize | Length,
    SheetSize | Length | undefined,
    SheetSize | Length | undefined
]
export type Callback_SheetDismiss_Void = (sheetDismiss: SheetDismiss) => void;
export type Callback_DismissSheetAction_Void = (parameter: DismissSheetAction) => void;
export type Callback_SpringBackAction_Void = (parameter: SpringBackAction) => void;
export type Callback_SheetType_Void = (parameter: SheetType) => void;
export interface SheetOptions extends BindOptions {
    height?: SheetSize | Length;
    dragBar?: boolean;
    maskColor?: ResourceColor;
    detents?: [ SheetSize | Length, SheetSize | Length | undefined, SheetSize | Length | undefined ];
    blurStyle?: BlurStyle;
    showClose?: boolean | Resource;
    preferType?: SheetType;
    title?: SheetTitleOptions | CustomBuilder;
    shouldDismiss?: ((sheetDismiss: SheetDismiss) => void);
    onWillDismiss?: ((parameter: DismissSheetAction) => void);
    onWillSpringBackWhenDismiss?: ((parameter: SpringBackAction) => void);
    enableOutsideInteractive?: boolean;
    width?: Dimension;
    borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;
    borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;
    borderStyle?: BorderStyle | EdgeStyles;
    shadow?: ShadowOptions | ShadowStyle;
    onHeightDidChange?: ((index: number) => void);
    mode?: SheetMode;
    scrollSizeMode?: ScrollSizeMode;
    onDetentsDidChange?: ((index: number) => void);
    onWidthDidChange?: ((index: number) => void);
    onTypeDidChange?: ((parameter: SheetType) => void);
    uiContext?: UIContext;
    keyboardAvoidMode?: SheetKeyboardAvoidMode;
}
export interface StateStyles {
    normal?: object;
    pressed?: object;
    disabled?: object;
    focused?: object;
    clicked?: object;
    selected?: Object;
}
export interface PopupMessageOptions {
    textColor?: ResourceColor;
    font?: Font;
}
export enum DismissReason {
    PRESS_BACK = 0,
    TOUCH_OUTSIDE = 1,
    CLOSE_BUTTON = 2,
    SLIDE_DOWN = 3
}
export interface DismissPopupAction {
    dismiss: (() => void);
    reason: DismissReason;
}
export interface Literal_String_value_Callback_Void_action {
    value: string;
    action: (() => void);
}
export interface Literal_Boolean_isVisible {
    isVisible: boolean;
}
export type Callback_Literal_Boolean_isVisible_Void = (event: Literal_Boolean_isVisible) => void;
export interface Literal_ResourceColor_color {
    color: ResourceColor;
}
export type Callback_DismissPopupAction_Void = (parameter: DismissPopupAction) => void;
export interface PopupOptions {
    message: string;
    placementOnTop?: boolean;
    placement?: Placement;
    primaryButton?: Literal_String_value_Callback_Void_action;
    secondaryButton?: Literal_String_value_Callback_Void_action;
    onStateChange?: ((event: Literal_Boolean_isVisible) => void);
    arrowOffset?: Length;
    showInSubWindow?: boolean;
    mask?: boolean | Literal_ResourceColor_color;
    messageOptions?: PopupMessageOptions;
    targetSpace?: Length;
    enableArrow?: boolean;
    offset?: Position;
    popupColor?: Color | string | Resource | number;
    autoCancel?: boolean;
    width?: Dimension;
    arrowPointPosition?: ArrowPointPosition;
    arrowWidth?: Dimension;
    arrowHeight?: Dimension;
    radius?: Dimension;
    shadow?: ShadowOptions | ShadowStyle;
    backgroundBlurStyle?: BlurStyle;
    transition?: TransitionEffect;
    onWillDismiss?: boolean | ((parameter: DismissPopupAction) => void);
    enableHoverMode?: boolean;
    followTransformOfTarget?: boolean;
}
export interface CustomPopupOptions {
    builder: CustomBuilder;
    placement?: Placement;
    maskColor?: Color | string | Resource | number;
    popupColor?: Color | string | Resource | number;
    enableArrow?: boolean;
    autoCancel?: boolean;
    onStateChange?: ((event: Literal_Boolean_isVisible) => void);
    arrowOffset?: Length;
    showInSubWindow?: boolean;
    mask?: boolean | Literal_ResourceColor_color;
    targetSpace?: Length;
    offset?: Position;
    width?: Dimension;
    arrowPointPosition?: ArrowPointPosition;
    arrowWidth?: Dimension;
    arrowHeight?: Dimension;
    radius?: Dimension;
    shadow?: ShadowOptions | ShadowStyle;
    backgroundBlurStyle?: BlurStyle;
    focusable?: boolean;
    transition?: TransitionEffect;
    onWillDismiss?: boolean | ((parameter: DismissPopupAction) => void);
    enableHoverMode?: boolean;
    followTransformOfTarget?: boolean;
}
export enum MenuPreviewMode {
    NONE = 0,
    IMAGE = 1
}
export type AnimationRange<T> = [
    T,
    T
]
export interface ContextMenuAnimationOptions {
    scale?: [ number, number ];
    transition?: TransitionEffect;
    hoverScale?: [ number, number ];
}
export interface ContextMenuOptions {
    offset?: Position;
    placement?: Placement;
    enableArrow?: boolean;
    arrowOffset?: Length;
    preview?: MenuPreviewMode | CustomBuilder;
    borderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;
    onAppear?: (() => void);
    onDisappear?: (() => void);
    aboutToAppear?: (() => void);
    aboutToDisappear?: (() => void);
    layoutRegionMargin?: Margin;
    previewAnimationOptions?: ContextMenuAnimationOptions;
    backgroundColor?: ResourceColor;
    backgroundBlurStyle?: BlurStyle;
    transition?: TransitionEffect;
    enableHoverMode?: boolean;
}
export interface MenuOptions extends ContextMenuOptions {
    title?: ResourceStr;
    showInSubWindow?: boolean;
}
export interface ProgressMask {
    updateProgress(value: number): void
    updateColor(value: ResourceColor): void
    enableBreathingAnimation(value: boolean): void
}
export interface TouchTestInfo {
    windowX: number;
    windowY: number;
    parentX: number;
    parentY: number;
    x: number;
    y: number;
    rect: RectResult;
    id: string;
}
export interface TouchResult {
    strategy: TouchTestStrategy;
    id?: string;
}
export interface PixelStretchEffectOptions {
    top?: Length;
    bottom?: Length;
    left?: Length;
    right?: Length;
}
export interface ClickEffect {
    level: ClickEffectLevel;
    scale?: number;
}
export interface FadingEdgeOptions {
    fadingEdgeLength?: LengthMetrics;
}
export interface NestedScrollOptions {
    scrollForward: NestedScrollMode;
    scrollBackward: NestedScrollMode;
}
export interface MenuElement {
    value: ResourceStr;
    icon?: ResourceStr;
    symbolIcon?: SymbolGlyphModifier;
    enabled?: boolean;
    action: (() => void);
}
export interface AttributeModifier<T> {
    // applyNormalAttribute(instance: T): void
    // applyPressedAttribute(instance: T): void
    // applyFocusedAttribute(instance: T): void
    // applyDisabledAttribute(instance: T): void
    // applySelectedAttribute(instance: T): void

    applyNormalAttribute: undefined | ((instance: T) => void);
    applyPressedAttribute: undefined | ((instance: T) => void);
    applyFocusedAttribute: undefined | ((instance: T) => void);
    applyDisabledAttribute: undefined | ((instance: T) => void);
    applySelectedAttribute: undefined | ((instance: T) => void);
}
export interface ContentModifier<T> {
    stub: string;
}
export interface CommonConfiguration<T> {
    enabled: boolean;
    contentModifier: ContentModifier<T>;
}
export enum OutlineStyle {
    SOLID = 0,
    DASHED = 1,
    DOTTED = 2
}
export enum DragPreviewMode {
    AUTO = 1,
    DISABLE_SCALE = 2,
    ENABLE_DEFAULT_SHADOW = 3,
    ENABLE_DEFAULT_RADIUS = 4
}
export enum MenuPolicy {
    DEFAULT = 0,
    HIDE = 1,
    SHOW = 2
}
export interface DragPreviewOptions {
    mode?: DragPreviewMode | Array<DragPreviewMode>;
    modifier?: ImageModifier;
    numberBadge?: boolean | number;
}
export interface DragInteractionOptions {
    isMultiSelectionEnabled?: boolean;
    defaultAnimationBeforeLifting?: boolean;
}
export interface InvertOptions {
    low: number;
    high: number;
    threshold: number;
    thresholdRange: number;
}
export type Optional<T> = T | undefined;
export type Callback_Array_TouchTestInfo_TouchResult = (value: Array<TouchTestInfo>) => TouchResult;
export type Callback_ClickEvent_Void = (event: ClickEvent) => void;
export type Callback_Boolean_HoverEvent_Void = (isHover: boolean, event: HoverEvent) => void;
export type Callback_MouseEvent_Void = (event: MouseEvent) => void;
export type Callback_TouchEvent_Void = (event: TouchEvent) => void;
export type Callback_KeyEvent_Void = (event: KeyEvent) => void;
export type Callback_KeyEvent_Boolean = (parameter: KeyEvent) => boolean;
export type Callback_Area_Area_Void = (oldValue: Area, newValue: Area) => void;
export interface Literal_Number_offset_span {
    span: number;
    offset: number;
}
export interface Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs {
    xs?: number | Literal_Number_offset_span;
    sm?: number | Literal_Number_offset_span;
    md?: number | Literal_Number_offset_span;
    lg?: number | Literal_Number_offset_span;
}
export type Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo = (event: DragEvent,
    extraParams?: string) => CustomBuilder | DragItemInfo;
export type Callback_DragEvent_String_Void = (event: DragEvent, extraParams?: string) => void;
export type Callback_PreDragStatus_Void = (parameter: PreDragStatus) => void;
export type Tuple_ResourceColor_Number = [
    ResourceColor,
    number
]
export interface Type_CommonMethod_linearGradient_value {
    angle?: number | string;
    direction?: GradientDirection;
    colors: Array<[ ResourceColor, number ]>;
    repeating?: boolean;
}
export type Tuple_Length_Length = [
    Length,
    Length
]
export interface Type_CommonMethod_sweepGradient_value {
    center: [ Length, Length ];
    start?: number | string;
    end?: number | string;
    rotation?: number | string;
    colors: Array<[ ResourceColor, number ]>;
    repeating?: boolean;
}
export interface Type_CommonMethod_radialGradient_value {
    center: [ Length, Length ];
    radius: number | string;
    colors: Array<[ ResourceColor, number ]>;
    repeating?: boolean;
}
export type Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult = (gestureInfo: GestureInfo,
    event: BaseGestureEvent) => GestureJudgeResult;
export type Callback_TouchEvent_HitTestMode = (parameter: TouchEvent) => HitTestMode;
export interface Literal_Alignment_align {
    align?: Alignment;
}
export interface CommonMethod {
    @memo
    width(value: Length): this;
    @memo
    height(value: Length): this;
    @memo
    drawModifier(value: DrawModifier | undefined): this;
    @memo
    responseRegion(value: Array<Rectangle> | Rectangle): this;
    @memo
    expandSafeArea(type?: Array<SafeAreaType>, edge?: Array<SafeAreaEdge>): this;
    @memo
    mouseResponseRegion(value: Array<Rectangle> | Rectangle): this;
    @memo
    size(value: SizeOptions): this;
    @memo
    constraintSize(value: ConstraintSizeOptions): this;
    @memo
    touchable(value: boolean): this;
    @memo
    hitTestBehavior(value: HitTestMode): this;
    @memo
    onChildTouchTest(value: ((value: Array<TouchTestInfo>) => TouchResult)): this;
    @memo
    layoutWeight(value: number | string): this;
    @memo
    chainWeight(value: ChainWeightOptions): this;
    @memo
    padding(value: Padding | Length | LocalizedPadding): this;
    @memo
    safeAreaPadding(value: Padding | LengthMetrics | LocalizedPadding): this;
    @memo
    margin(value: Margin | Length | LocalizedMargin): this;
    @memo
    backgroundColor(value: ResourceColor): this;
    @memo
    backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions): this;
    @memo
    pixelRound(value: PixelRoundPolicy): this;
    @memo
    backgroundImageSize(value: SizeOptions | ImageSize): this;
    @memo
    backgroundImagePosition(value: Position | Alignment): this;
    @memo
    backgroundEffect(value: BackgroundEffectOptions): this;
    @memo
    backgroundImageResizable(value: ResizableOptions): this;
    @memo
    foregroundEffect(value: ForegroundEffectOptions): this;
    @memo
    visualEffect(value: VisualEffect): this;
    @memo
    backgroundFilter(value: Filter): this;
    @memo
    foregroundFilter(value: Filter): this;
    @memo
    compositingFilter(value: Filter): this;
    @memo
    opacity(value: number | Resource): this;
    @memo
    border(value: BorderOptions): this;
    @memo
    borderStyle(value: BorderStyle | EdgeStyles): this;
    @memo
    borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths): this;
    @memo
    borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): this;
    @memo
    borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses): this;
    @memo
    borderImage(value: BorderImageOption): this;
    @memo
    outline(value: OutlineOptions): this;
    @memo
    outlineStyle(value: OutlineStyle | EdgeOutlineStyles): this;
    @memo
    outlineWidth(value: Dimension | EdgeOutlineWidths): this;
    @memo
    outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): this;
    @memo
    outlineRadius(value: Dimension | OutlineRadiuses): this;
    @memo
    foregroundColor(value: ResourceColor | ColoringStrategy): this;
    @memo
    onClick(value: ((event: ClickEvent) => void), distanceThreshold?: number): this;
    @memo
    onHover(value: ((isHover: boolean,event: HoverEvent) => void)): this;
    @memo
    onAccessibilityHover(value: AccessibilityCallback): this;
    @memo
    hoverEffect(value: HoverEffect): this;
    @memo
    onMouse(value: ((event: MouseEvent) => void)): this;
    @memo
    onTouch(value: ((event: TouchEvent) => void)): this;
    @memo
    onKeyEvent(value: ((event: KeyEvent) => void)): this;
    @memo
    onKeyPreIme(value: ((parameter: KeyEvent) => boolean)): this;
    @memo
    focusable(value: boolean): this;
    @memo
    onFocus(value: (() => void)): this;
    @memo
    onBlur(value: (() => void)): this;
    @memo
    tabIndex(value: number): this;
    @memo
    defaultFocus(value: boolean): this;
    @memo
    groupDefaultFocus(value: boolean): this;
    @memo
    focusOnTouch(value: boolean): this;
    @memo
    animation(value: AnimateParam): this;
    @memo
    transition(value: TransitionOptions | TransitionEffect): this;
    @memo
    motionBlur(value: MotionBlurOptions): this;
    @memo
    brightness(value: number): this;
    @memo
    contrast(value: number): this;
    @memo
    grayscale(value: number): this;
    @memo
    colorBlend(value: Color | string | Resource): this;
    @memo
    saturate(value: number): this;
    @memo
    sepia(value: number): this;
    @memo
    invert(value: number | InvertOptions): this;
    @memo
    hueRotate(value: number | string): this;
    @memo
    useShadowBatching(value: boolean): this;
    @memo
    useEffect(value: boolean): this;
    @memo
    renderGroup(value: boolean): this;
    @memo
    freeze(value: boolean): this;
    @memo
    translate(value: TranslateOptions): this;
    @memo
    scale(value: ScaleOptions): this;
    @memo
    gridSpan(value: number): this;
    @memo
    gridOffset(value: number): this;
    @memo
    rotate(value: RotateOptions): this;
    @memo
    transform(value: Object): this;
    @memo
    onAppear(value: (() => void)): this;
    @memo
    onDisAppear(value: (() => void)): this;
    @memo
    onAttach(value: (() => void)): this;
    @memo
    onDetach(value: (() => void)): this;
    @memo
    onAreaChange(value: ((oldValue: Area,newValue: Area) => void)): this;
    @memo
    visibility(value: Visibility): this;
    @memo
    flexGrow(value: number): this;
    @memo
    flexShrink(value: number): this;
    @memo
    flexBasis(value: number | string): this;
    @memo
    alignSelf(value: ItemAlign): this;
    @memo
    displayPriority(value: number): this;
    @memo
    zIndex(value: number): this;
    @memo
    direction(value: Direction): this;
    @memo
    align(value: Alignment): this;
    @memo
    position(value: Position | Edges | LocalizedEdges): this;
    @memo
    markAnchor(value: Position | LocalizedPosition): this;
    @memo
    offset(value: Position | Edges | LocalizedEdges): this;
    @memo
    enabled(value: boolean): this;
    @memo
    useSizeType(value: Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs): this;
    @memo
    alignRules(value: AlignRuleOption): this;

    @memo
    aspectRatio(value: number): this;
    @memo
    clickEffect(value: ClickEffect | undefined): this;
    @memo
    onDragStart(value: ((event: DragEvent,extraParams?: string) => CustomBuilder | DragItemInfo)): this;
    @memo
    onDragEnter(value: ((event: DragEvent,extraParams?: string) => void)): this;
    @memo
    onDragMove(value: ((event: DragEvent,extraParams?: string) => void)): this;
    @memo
    onDragLeave(value: ((event: DragEvent,extraParams?: string) => void)): this;
    @memo
    onDrop(value: ((event: DragEvent,extraParams?: string) => void)): this;
    @memo
    onDragEnd(value: ((event: DragEvent,extraParams?: string) => void)): this;
    @memo
    allowDrop(value: Array<UniformDataType> | undefined): this;
    @memo
    draggable(value: boolean): this;
    @memo
    dragPreview(value: CustomBuilder | DragItemInfo | string): this;
    @memo
    onPreDrag(value: ((parameter: PreDragStatus) => void)): this;
    @memo
    linearGradient(value: Type_CommonMethod_linearGradient_value): this;
    @memo
    sweepGradient(value: Type_CommonMethod_sweepGradient_value): this;
    @memo
    radialGradient(value: Type_CommonMethod_radialGradient_value): this;
    @memo
    motionPath(value: MotionPathOptions): this;
    @memo
    shadow(value: ShadowOptions | ShadowStyle): this;
    @memo
    clip(value: boolean | undefined): this;

    @memo
    clipShape(value: CircleShape | EllipseShape | PathShape | RectShape): this;
    @memo
    mask(value: ProgressMask | undefined): this;

    @memo
    maskShape(value: CircleShape | EllipseShape | PathShape | RectShape): this;
    @memo
    key(value: string): this;
    @memo
    id(value: string): this;
    @memo
    geometryTransition(value: string): this;
    @memo
    stateStyles(value: StateStyles): this;
    @memo
    restoreId(value: number): this;
    @memo
    sphericalEffect(value: number): this;
    @memo
    lightUpEffect(value: number): this;
    @memo
    pixelStretchEffect(value: PixelStretchEffectOptions): this;
    @memo
    accessibilityGroup(value: boolean, AccessibilityOptions?: AccessibilityOptions): this;
    @memo
    accessibilityText(value: string | Resource): this;

    @memo
    accessibilityTextHint(value: string): this;
    @memo
    accessibilityDescription(value: string | Resource): this;

    @memo
    accessibilityLevel(value: string): this;
    @memo
    accessibilityVirtualNode(value: CustomBuilder): this;
    @memo
    accessibilityChecked(value: boolean): this;
    @memo
    accessibilitySelected(value: boolean): this;
    @memo
    obscured(value: Array<ObscuredReasons>): this;
    @memo
    reuseId(value: string): this;
    @memo
    renderFit(value: RenderFit): this;
    @memo
    attributeModifier<T>(value: AttributeModifier<T>): this;
    @memo
    gestureModifier(value: GestureModifier): this;
    @memo
    backgroundBrightness(value: BackgroundBrightnessOptions): this;
    @memo
    onGestureJudgeBegin(value: ((gestureInfo: GestureInfo,event: BaseGestureEvent) => GestureJudgeResult)): this;
    @memo
    onGestureRecognizerJudgeBegin(value: GestureRecognizerJudgeBeginCallback): this;
    @memo
    shouldBuiltInRecognizerParallelWith(value: ShouldBuiltInRecognizerParallelWithCallback): this;
    @memo
    monopolizeEvents(value: boolean): this;
    @memo
    onTouchIntercept(value: ((parameter: TouchEvent) => HitTestMode)): this;
    @memo
    onSizeChange(value: SizeChangeCallback): this;
    @memo
    gesture(gesture: GestureType, mask?: GestureMask): this;
    @memo
    parallelGesture(gesture: GestureType, mask?: GestureMask): this;
    @memo
    priorityGesture(gesture: GestureType, mask?: GestureMask): this;
    @memo
    bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): this;
    @memo
    bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions): this;
    @memo
    bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): this;
    @memo
    bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): this;
    @memo
    bindPopup(show: boolean, popup: PopupOptions | CustomPopupOptions): this;
}
export interface CommonAttribute extends CommonMethod {
}
export type CommonInterface = () => CommonAttribute;
export type CustomBuilder = 
/** @memo */
() => void;
export interface OverlayOptions {
    align?: Alignment;
    offset?: OverlayOffset;
}
export interface OverlayOffset {
    x?: number;
    y?: number;
}
export type FractionStop = [
    number,
    number
]
export interface CommonShapeMethod extends CommonMethod {
    @memo
    stroke(value: ResourceColor): this;
    @memo
    fill(value: ResourceColor): this;
    @memo
    strokeDashOffset(value: number | string): this;
    @memo
    strokeLineCap(value: LineCapStyle): this;
    @memo
    strokeLineJoin(value: LineJoinStyle): this;
    @memo
    strokeMiterLimit(value: number | string): this;
    @memo
    strokeOpacity(value: number | string | Resource): this;
    @memo
    fillOpacity(value: number | string | Resource): this;
    @memo
    strokeWidth(value: Length): this;
    @memo
    antiAlias(value: boolean): this;
    @memo
    strokeDashArray(value: Array<Length>): this;
}
export interface LinearGradient_common {
    angle?: number | string;
    direction?: GradientDirection;
    colors: Array<[ ResourceColor, number ]>;
    repeating?: boolean;
}
export interface PixelRoundPolicy {
    start?: PixelRoundCalcPolicy;
    top?: PixelRoundCalcPolicy;
    end?: PixelRoundCalcPolicy;
    bottom?: PixelRoundCalcPolicy;
}
export interface LinearGradientBlurOptions {
    fractionStops: Array<FractionStop>;
    direction: GradientDirection;
}
export interface MotionBlurAnchor {
    x: number;
    y: number;
}
export interface MotionBlurOptions {
    radius: number;
    anchor: MotionBlurAnchor;
}
export interface LayoutBorderInfo {
    borderWidth: EdgeWidths;
    margin: Margin;
    padding: Padding;
}
export interface LayoutInfo {
    position: Position;
    constraint: ConstraintSizeOptions;
}
export interface LayoutChild {
    stub: string;
}
export interface GeometryInfo extends SizeResult {
    borderWidth: EdgeWidth;
    margin: Margin;
    padding: Padding;
}
export interface Layoutable {
    stub: string;
}
export interface Measurable {
    measure(constraint: ConstraintSizeOptions): MeasureResult
    getMargin(): DirectionalEdgesT
    getPadding(): DirectionalEdgesT
    getBorderWidth(): DirectionalEdgesT
}
export interface SizeResult {
    width: number;
    height: number;
}
export interface MeasureResult extends SizeResult {
}
export interface Literal_Empty {
    indexSignature(key: string): object
}
export interface View {
    create(value: object): object
}
export interface RectResult {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface CaretOffset {
    index: number;
    x: number;
    y: number;
}
export declare class TextContentControllerBase {
    getCaretOffset(): CaretOffset
    getTextContentRect(): RectResult
    getTextContentLineCount(): number
}
export enum ContentClipMode {
    CONTENT_ONLY = 0,
    BOUNDARY = 1,
    SAFE_AREA = 2
}
export interface ScrollableCommonMethod extends CommonMethod {
    @memo
    scrollBar(value: BarState): this;
    @memo
    scrollBarColor(value: Color | number | string): this;
    @memo
    scrollBarWidth(value: number | string): this;
    @memo
    nestedScroll(value: NestedScrollOptions): this;
    @memo
    enableScrollInteraction(value: boolean): this;
    @memo
    friction(value: number | Resource): this;
    @memo
    onScroll(value: ((first: number,last: number) => void)): this;
    @memo
    onWillScroll(value: ScrollOnWillScrollCallback | undefined): this;
    @memo
    onDidScroll(value: ScrollOnScrollCallback): this;
    @memo
    onReachStart(value: (() => void)): this;
    @memo
    onReachEnd(value: (() => void)): this;
    @memo
    onScrollStart(value: (() => void)): this;
    @memo
    onScrollStop(value: (() => void)): this;
    @memo
    flingSpeedLimit(value: number): this;
    @memo
    clipContent(value: ContentClipMode | RectShape): this;
}
export interface ScrollResult {
    offsetRemain: number;
}
export interface OnWillScrollCallback {
    stub: string;
}
export type OnScrollCallback = (scrollOffset: number, scrollState: ScrollState) => void;
export type OnMoveHandler = (from: number, to: number) => void;
export interface DynamicNode {
    @memo
    onMove(handler: OnMoveHandler | undefined): this
}
export interface EdgeEffectOptions {
    alwaysEnabled: boolean;
}
export declare class ChildrenMainSize {
    constructor(size: number)
    childDefaultSize: number;
    splice(start: number, deleteCount?: number, childrenSize?: Array<number>): void
    update(index: number, childSize: number): void
}
export interface BackgroundBrightnessOptions {
    rate: number;
    lightUpDegree: number;
}
export interface PointLightStyle {
    lightSource?: LightSource;
    illuminated?: IlluminatedType;
    bloom?: number;
}
export interface LightSource {
    positionX: Dimension;
    positionY: Dimension;
    positionZ: Dimension;
    intensity: number;
    color?: ResourceColor;
}
export interface KeyframeAnimateParam {
    delay?: number;
    iterations?: number;
    onFinish?: (() => void);
}
export interface KeyframeState {
    duration: number;
    curve?: Curve | string | ICurve;
    event: (() => void);
}
export type Callback<T,V = void> = (data: T) => V;
export type HoverCallback = (isHover: boolean, event: HoverEvent) => void;
export type AccessibilityCallback = (isHover: boolean, event: AccessibilityHoverEvent) => void;
export interface VisibleAreaEventOptions {
    ratios: Array<number>;
    expectedUpdateInterval?: number;
}
export type VisibleAreaChangeCallback = (isExpanding: boolean, currentRatio: number) => void;
export interface UICommonEvent {
    setOnClick(callback_: ((event: ClickEvent) => void) | undefined): void
    setOnTouch(callback_: ((event: TouchEvent) => void) | undefined): void
    setOnAppear(callback_: (() => void) | undefined): void
    setOnDisappear(callback_: (() => void) | undefined): void
    setOnKeyEvent(callback_: ((event: KeyEvent) => void) | undefined): void
    setOnFocus(callback_: (() => void) | undefined): void
    setOnBlur(callback_: (() => void) | undefined): void
    setOnHover(callback_: HoverCallback | undefined): void
    setOnMouse(callback_: ((event: MouseEvent) => void) | undefined): void
    setOnSizeChange(callback_: SizeChangeCallback | undefined): void
        setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions,
        event: VisibleAreaChangeCallback | undefined): void
}
export interface UIGestureEvent {
    addGesture<T>(gesture: GestureHandler<T>, priority?: GesturePriority, mask?: GestureMask): void
    addParallelGesture<T>(gesture: GestureHandler<T>, mask?: GestureMask): void
    removeGestureByTag(tag: string): void
    clearGestures(): void
}
export interface GestureModifier {
    applyGesture(event: UIGestureEvent): void
}
export interface SelectionOptions {
    menuPolicy?: MenuPolicy;
}
export enum KeyboardAvoidMode {
    DEFAULT = 0,
    NONE = 1
}
export enum HoverModeAreaType {
    TOP_SCREEN = 0,
    BOTTOM_SCREEN = 1
}

/**
 * Defining wrapBuilder function.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defining wrapBuilder function.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare function wrapBuilder<Args extends Array<Object>>(builder: (args: Args) => void): WrappedBuilder<Args>;

/**
 * Defines the WrappedBuilder class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the WrappedBuilder class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare class WrappedBuilder<Args extends Array<Object>> {
  /**
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  builder: (args: Args) => void;

  /**
   * @param { function } builder
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * @param { function } builder
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(builder: (args: Args) => void);
}

export declare function $r(value: string, ...params: Object[]): Resource;
export declare function $rawfile(value: string): Resource;