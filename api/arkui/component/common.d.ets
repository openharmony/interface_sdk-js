/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
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


import Context from '../../application/Context';
import { Resource } from '../../global/resource';
import pointer from '../../@ohos.multimodalInput.pointer';
import image from '../../@ohos.multimedia.image';
import unifiedDataChannel from '../../@ohos.data.unifiedDataChannel';
import promptAction from '../../@ohos.promptAction';
import uniformTypeDescriptor from '../../@ohos.data.uniformTypeDescriptor';
import { IntentionCode } from '../../@ohos.multimodalInput.intentionCode';
import { ImageModifier } from '../../arkui/ImageModifier';
import { SymbolGlyphModifier } from '../../arkui/SymbolGlyphModifier';
import { CircleShape, EllipseShape, PathShape, RectShape } from '../../@ohos.arkui.shape';
import uiobserver from '../../@ohos.arkui.observer';
import { UIContext } from '../../@ohos.arkui.UIContext';
import { DrawContext, LengthMetrics } from '../../arkui/Graphics';
import uiEffect from '../../@ohos.graphics.uiEffect';
import { FocusBoxStyle, FocusPriority } from "./focus";
import { ComponentContent } from '../../arkui/ComponentContent';
import { ResizableOptions } from "./image";
import { Theme } from '../../@ohos.arkui.theme';
import { ButtonType, ButtonStyleMode, ButtonRole } from "./button";
import { Area, ResourceColor, Dimension, ResourceStr, Font, Length, EdgeColors, LocalizedEdgeColors, BorderRadiuses, EdgeWidths, LocalizedEdgeWidths, SizeOptions, Bias, EdgeStyles, Position, LocalizedBorderRadiuses, Margin, ChainWeightOptions, Padding, LocalizedPadding, LocalizedMargin, BorderOptions, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, ConstraintSizeOptions, EdgeWidth, DirectionalEdgesT } from "./units";
import { BaseGestureEvent, GestureRecognizer, GestureJudgeResult, GestureType, GestureMask, GestureHandler, GesturePriority, GestureInfo } from "./gesture";
import { ScrollState } from "./list";
import { AccessibilityHoverType, Curve, PlayMode, SharedTransitionEffectType, KeySource, BorderStyle, HorizontalAlign, VerticalAlign, MouseButton, MouseAction, TransitionType, FontWeight, TouchType, FontStyle, Color, ColoringStrategy, Placement, ArrowPointPosition, ClickEffectLevel, NestedScrollMode, HitTestMode, Alignment, ImageRepeat, ImageSize, HoverEffect, Visibility, ItemAlign, Direction, Axis, GradientDirection, FunctionKey, ModifierKey, ObscuredReasons, RenderFit, LineCapStyle, LineJoinStyle, PixelRoundCalcPolicy, IlluminatedType, TextDecorationType, TextDecorationStyle, KeyType, ResponseType, BarState, EdgeEffect, ScrollSource, InteractionHand, AxisAction, AxisModel, CrownAction, FocusDrawLevel, CrownSensitivity } from "./enums";
import { TextRange } from "./textCommon";
import { StyledString } from "./styledString";
import { CircleAttribute, UICircleAttribute } from "./circle";
import { RectAttribute, UIRectAttribute } from "./rect";
import { PathAttribute, UIPathAttribute } from "./path";
import { EllipseAttribute, UIEllipseAttribute } from "./ellipse";
import { LocalStorage } from '../stateManagement/storages/localStorage';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod, UICommonMethod } from "./common";

@Retention({policy: "SOURCE"})
export declare @interface Builder {};
export declare function vp2px(arg0: number): number
export declare function px2vp(arg0: number): number
export declare function animateTo(arg0: AnimateParam, arg1: (() => void)): void

/**
 * Define the ratio of characters entered by the the percentage of InputCounterOptions.
 *
 * @interface InputCounterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface InputCounterOptions {
    /**
     * It is the numerator bit of the percentage and used as a threshold. If the number of characters input
     * reaches the maximum number of characters multiplied by this threshold, the counter is displayed.
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    thresholdPercentage?: number;
    /**
     * If the current input character count reaches the maximum character count and users want to exceed the
     * normal input, the border will turn red. If this parameter is true, the red border displayed.
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    highlightBorder?: boolean;
}
/**
 * Defines the options of decoration.
 *
 * @interface TextDecorationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextDecorationOptions {
    /**
     * The decoration type.
     *
     * @type { TextDecorationType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type: TextDecorationType;
    /**
     * Sets the color of decoration.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * The style value of decoration.
     *
     * @type { ?TextDecorationStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    style?: TextDecorationStyle;
}
/**
 * Define AnimatableArithmetic interface
 *
 * @interface AnimatableArithmetic
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface AnimatableArithmetic<T> {
    /**
     * Define plus method
     *
     * @param { AnimatableArithmetic<T> } rhs - another value
     * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;
    /**
     * Define subtract method
     *
     * @param { AnimatableArithmetic<T> } rhs - another value
     * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;
    /**
     * Define multiply method
     *
     * @param { number } scale - scale value
     * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    multiply(scale: number): AnimatableArithmetic<T>;
    /**
     * Define equals method
     *
     * @param { AnimatableArithmetic<T> } rhs - another value
     * @returns { boolean } is equals
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    equals(rhs: AnimatableArithmetic<T>): boolean;
}
/**
  * ReuseId callback type. It is used to compute reuseId.
  *
  * @typedef { function } ReuseIdCallback
  * @returns { string }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 20
  */
export type ReuseIdCallback = () => string;
/**
 * Defining the reusable configuration parameters.
 *
 * @interface ReuseOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ReuseOptions {
    /**
     * Defining reuseId function. The default reuseId is the custom component name.
     *
     * @type { ?ReuseIdCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    reuseId?: ReuseIdCallback;
}
/**
 * Post Card Action.
 *
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare function postCardAction(component: Object, action: Object): void;
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface Configuration {
    /**
     * Set colorMode.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    readonly colorMode: string;
    /**
     * Set fontScale.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    readonly fontScale: number;
}
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface Rectangle {
    /**
     * x:Horizontal coordinate
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    x?: Length;
    /**
     * y:Vertical axis coordinate.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    y?: Length;
    /**
     * Sets the width of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    width?: Length;
    /**
     * Sets the height of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    height?: Length;
}
/**
 * Interface for ExpectedFrameRateRange.
 *
 * @interface ExpectedFrameRateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ExpectedFrameRateRange {
    /**
     * The minimum animation drawing FPS.
     * The minimum value should be less than or equal to the maximum value.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    min: number;
    /**
     * The maximum animation drawing FPS.
     * The maximum value should be greater than or equal to the minimum value.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    max: number;
    /**
     * The expected frame rate of dynamical callback rate range.
     * The value should be between the minimum and maximum value.
     * Otherwise, the actual callback rate will be dynamically
     * adjusted to better align with other animation sources.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    expected: number;
}
/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare function $r(value: string, ...params: Object[]): Resource;
/**
 * global $rawfile function
 *
 * @param { string } value
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare function $rawfile(value: string): Resource;
/**
 * Defines the same page mode
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum AccessibilitySamePageMode {
    /**
    * the first page and root page event is not send.but if application load new page whith navigation,the page event will be sent. this mode is to solve skipping focus
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SEMI_SILENT = 0,
    /**
     * the all page event is not send
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    FULL_SILENT = 1
}
/**
 * Enum for accessibility component type
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum AccessibilityRoleType {
    /**
    * ActionSheet component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    ACTION_SHEET = 0,
    /**
    * AlertDialog component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    ALERT_DIALOG = 1,
    /**
    * AlphabetIndexer component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    INDEXER_COMPONENT = 2,
    /**
    * badge component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    BADGE_COMPONENT = 3,
    /**
    * blank component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    BLANK = 4,
    /**
    * button component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    BUTTON = 5,
    /**
    * button component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    BACK_BUTTON = 6,
    /**
    * sheet drag bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SHEET_DRAG_BAR = 7,
    /**
    * calendar picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    CALENDAR_PICKER = 8,
    /**
    * calendar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    CALENDAR = 9,
    /**
    * canvas component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    CANVAS = 10,
    /**
    * canvas gradient component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    CANVAS_GRADIENT = 11,
    /**
    * canvas pattern component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    CANVAS_PATTERN = 12,
    /**
    * checkbox component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    CHECKBOX = 13,
    /**
    * checkbox group component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    CHECKBOX_GROUP = 14,
    /**
    * circle component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    CIRCLE = 15,
    /**
    * column split component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    COLUMN_SPLIT = 16,
    /**
    * column component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    COLUMN = 17,
    /**
    * canvas rendering context 2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    CANVAS_RENDERING_CONTEXT_2D = 18,
    /**
    * chart component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    CHART = 19,
    /**
    * counter component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
     * @since 20
    */
    COUNTER = 20,
    /**
    * counter modal component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    CONTAINER_MODAL = 21,
    /**
    * data panel component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    DATA_PANEL = 22,
    /**
    * data picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    DATE_PICKER = 23,
    /**
    * dialog component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    DIALOG = 24,
    /**
    * divider component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    DIVIDER = 25,
    /**
    * drag bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    DRAG_BAR = 26,
    /**
    * effect component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    EFFECT_COMPONENT = 27,
    /**
    * ellipse component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    ELLIPSE = 28,
    /**
    * flex component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    FLEX = 29,
    /**
    * flow item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    FLOW_ITEM = 30,
    /**
    * form component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    FORM_COMPONENT = 31,
    /**
    * form link component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    FORM_LINK = 32,
    /**
    * gauge component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    GAUGE = 33,
    /**
    * grid component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    GRID = 34,
    /**
    * grid col component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    GRID_COL = 35,
    /**
    * grid container component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    GRID_CONTAINER = 36,
    /**
    * grid item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    GRID_ITEM = 37,
    /**
    * grid row component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    GRID_ROW = 38,
    /**
    * hyperlink component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    HYPERLINK = 39,
    /**
    * image component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    IMAGE = 40,
    /**
    * image animator component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    IMAGE_ANIMATOR = 41,
    /**
    * image bitmap component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    IMAGE_BITMAP = 42,
    /**
    * image data component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    IMAGE_DATA = 43,
    /**
    * image span component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    IMAGE_SPAN = 44,
    /**
    * label component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    LABEL = 45,
    /**
    * line component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    LINE = 46,
    /**
    * list component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    LIST = 47,
    /**
    * list item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    LIST_ITEM = 48,
    /**
    * list item group component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    LIST_ITEM_GROUP = 49,
    /**
    * loading progress component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    LOADING_PROGRESS = 50,
    /**
    * marquee component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    MARQUEE = 51,
    /**
    * matrix2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    MATRIX2D = 52,
    /**
    * menu component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    MENU = 53,
    /**
    * menu item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    MENU_ITEM = 54,
    /**
    * menu item group component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    MENU_ITEM_GROUP = 55,
    /**
    * navdestination component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    NAV_DESTINATION = 56,
    /**
    * navrouter component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    NAV_ROUTER = 57,
    /**
    * navigation component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    NAVIGATION = 58,
    /**
    * navigation bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    NAVIGATION_BAR = 59,
    /**
    * navigation menu component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    NAVIGATION_MENU = 60,
    /**
    * navigator component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    NAVIGATOR = 61,
    /**
    * offscreen canvas component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    OFFSCREEN_CANVAS = 62,
    /**
    * offscreen canvas rendering context2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    OFFSCREEN_CANVAS_RENDERING_CONTEXT2D = 63,
    /**
    * option component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    OPTION = 64,
    /**
    * panel component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    PANEL = 65,
    /**
    * paper page component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    PAPER_PAGE = 66,
    /**
    * path component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    PATH = 67,
    /**
    * path 2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    PATH2D = 68,
    /**
    * pattern lock component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    PATTERN_LOCK = 69,
    /**
    * picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    PICKER = 70,
    /**
    * picker view component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    PICKER_VIEW = 71,
    /**
    * plugin component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    PLUGIN_COMPONENT = 72,
    /**
    * polygon component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    POLYGON = 73,
    /**
    * polyline component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    POLYLINE = 74,
    /**
    * pop up component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    POPUP = 75,
    /**
    * progress component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    PROGRESS = 76,
    /**
    * qr code component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    QRCODE = 77,
    /**
    * radio component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    RADIO = 78,
    /**
    * rating component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    RATING = 79,
    /**
    * rect component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    RECT = 80,
    /**
    * refresh component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    REFRESH = 81,
    /**
    * relative container component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    RELATIVE_CONTAINER = 82,
    /**
    * remote window component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    REMOTE_WINDOW = 83,
    /**
    * rich editor component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    RICH_EDITOR = 84,
    /**
    * rich text component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    RICH_TEXT = 85,
    /**
    * rolepager component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    ROLE_PAGER = 86,
    /**
    * row component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    ROW = 87,
    /**
    * row split component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    ROW_SPLIT = 88,
    /**
    * scroll component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SCROLL = 89,
    /**
    * scroll bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SCROLL_BAR = 90,
    /**
    * search component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SEARCH = 91,
    /**
    * search field component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SEARCH_FIELD = 92,
    /**
    * select component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SELECT = 93,
    /**
    * shape component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SHAPE = 94,
    /**
    * sidebar container component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SIDEBAR_CONTAINER = 95,
    /**
    * slider component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SLIDER = 96,
    /**
    * span component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SPAN = 97,
    /**
    * stack component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    STACK = 98,
    /**
    * stepper component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    STEPPER = 99,
    /**
    * stepper item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    STEPPER_ITEM = 100,
    /**
    * swiper component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SWIPER = 101,
    /**
    * swiper indicator component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SWIPER_INDICATOR = 102,
    /**
    * switch component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SWITCH = 103,
    /**
    * symbol glyph component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    SYMBOL_GLYPH = 104,
    /**
    * tab content component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TAB_CONTENT = 105,
    /**
    * tab bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TAB_BAR = 106,
    /**
    * tabs component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TABS = 107,
    /**
    * text component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TEXT = 108,
    /**
    * text clock component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TEXT_CLOCK = 109,
    /**
    * text entry component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TEXT_ENTRY = 110,
    /**
    * text input component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TEXT_INPUT = 111,
    /**
    * text picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TEXT_PICKER = 112,
    /**
    * text timer component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TEXT_TIMER = 113,
    /**
    * text area component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TEXT_AREA = 114,
    /**
    * text field component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TEXT_FIELD = 115,
    /**
    * time picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TIME_PICKER = 116,
    /**
    * title bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TITLE_BAR = 117,
    /**
    * toggler component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    TOGGLER = 118,
    /**
    * uiextensioncomponent component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    UI_EXTENSION_COMPONENT = 119,
    /**
    * video component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    VIDEO = 120,
    /**
    * water flow component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    WATER_FLOW = 121,
    /**
    * web component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    WEB = 122,
    /**
    * xcomponent component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    XCOMPONENT = 123,
    /**
    * none component type: screen reader will not broadcast the component type.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    ROLE_NONE = 124
}
/**
 * Defines the callback type used in accessibility focus. The value of isFocus indicates whether the current component is focused
 * @typedef {function} AccessibilityFocusCallback
 * @param {boolean} isFocus - if component is focused,isFocus will be true. else isFocus is false.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type AccessibilityFocusCallback = (isFocus: boolean) => void;
/**
 * Enum for FinishCallbackType.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum FinishCallbackType {
    /**
     * When the entire animation ends and will be removed immediately, the callback is triggered.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    REMOVED = 0,
    /**
      * When the animation is logically down but may still be in its long tail, the callback is triggered.
      *
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @form
      * @atomicservice
      * @since 20
      */
    LOGICALLY = 1
}
/**
 * Defines the touch test strategy object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum TouchTestStrategy {
    /**
     * Do framework touch test.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    DEFAULT = 0,
    /**
     * Specify the component to do touch test and follow the framework touch test
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    FORWARD_COMPETITION = 1,
    /**
     * Specify the component to do touch test and not follow the framework touch test
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    FORWARD = 2
}
/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface AnimateParam {
    /**
     * Animation duration, in ms.
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    duration?: number;
    /**
     * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
     * animation playback. The value 0 means that there is no animation.
     *
     * @type { ?number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    tempo?: number;
    /**
     * Animation curve.
     *
     * @type { ?(Curve | string | ICurve) }
     * @default Curve.EaseInOut
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    curve?: Curve | string | ICurve;
    /**
     * Animation delay time, in ms.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    delay?: number;
    /**
     * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    iterations?: number;
    /**
     * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
     *
     * @type { ?PlayMode }
     * @default PlayMode.Normal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    playMode?: PlayMode;
    /**
     * Callback invoked when the animation playback is complete or the ability is about to enter the background.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onFinish?: () => void;
    /**
     * Define the type of onFinish callback in animation.
     *
     * @type { ?FinishCallbackType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    finishCallbackType?: FinishCallbackType;
    /**
     * Indicates expectedFrameRateRange including minimum、maximum and expected frame rate.
     *
     * @type { ?ExpectedFrameRateRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    expectedFrameRateRange?: ExpectedFrameRateRange;
}
/**
 * Interface for curve object.
 *
 * @interface ICurve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface ICurve {
    /**
     * Get curve value by fraction.
     *
     * @param { number } fraction - Indicates the current normalized time parameter. Value range: [0, 1].
     * Note: If the value is less than 0, it will be processed as 0. If the value is greater than 1, 1 is used.
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    interpolate(fraction: number): number;
}
/**
 * Defines the motion path options.
 *
 * @interface MotionPathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface MotionPathOptions {
    /**
     * The path info.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    path: string;
    /**
     * The origin point info in range [0,1).
     *
     * @type { ?number }
     * @default 0.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    from?: number;
    /**
     * The distance point info in range (0,1].
     *
     * @type { ?number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    to?: number;
    /**
     * The rotate info.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    rotatable?: boolean;
}
/**
 * Defines the shard transition function params.
 *
 * @interface sharedTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface sharedTransitionOptions {
    /**
     * Animation duration, in ms.
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    duration?: number;
    /**
     * Animation curve.
     *
     * @type { ?(Curve | string | ICurve) }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    curve?: Curve | string | ICurve;
    /**
     * Animation delay time, in ms.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    delay?: number;
    /**
     * The motion path info.
     *
     * @type { ?MotionPathOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    motionPath?: MotionPathOptions;
    /**
     * Z index info.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    zIndex?: number;
    /**
     * the animate type.
     *
     * @type { ?SharedTransitionEffectType }
     * @default SharedTransitionEffectType.Exchange
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type?: SharedTransitionEffectType;
}
/**
 * Defines the options of geometry transition.
 *
 * @interface GeometryTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface GeometryTransitionOptions {
    /**
     * whether follow target for the component still in the hierarchy, default: false, stay current.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    follow?: boolean;
    /**
     * Defines movement strategy of source and target in the hierarchy during geometry transition.
     *
     * @type { ?TransitionHierarchyStrategy }
     * @default TransitionHierarchyStrategy.ADAPTIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    hierarchyStrategy?: TransitionHierarchyStrategy;
}
/**
 * Defines the options of linear gradient.
 *
 * @interface LinearGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface LinearGradientOptions {
    /**
     * Defines starting angle of linear gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(number | string) }
     * @default 180
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    angle?: number | string;
    /**
     * Defines the direction of linear gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?GradientDirection }
     * @default GradientDirection.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    direction?: GradientDirection;
    /**
     * Defines color description for gradients.
     *
     * Anonymous Object Rectification.
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    colors: Array<[
        ResourceColor,
        number
    ]>;
    /**
     * Defines gradient colors with repeated coloring.
     *
     * Anonymous Object Rectification.
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    repeating?: boolean;
}
/**
 * Defines the options of radial gradient.
 *
 * @interface SweepGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface SweepGradientOptions {
    /**
     * Defines center point for angle gradient.
     *
     * Anonymous Object Rectification.
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    center: [
        Length,
        Length
    ];
    /**
     * Defines the starting point of angle gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(number | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    start?: number | string;
    /**
     * Defines end point of angle gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(number | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    end?: number | string;
    /**
     * Defines the rotation angle of the gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(number | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    rotation?: number | string;
    /**
     * Defines color description for gradients.
     *
     * Anonymous Object Rectification.
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    colors: Array<[
        ResourceColor,
        number
    ]>;
    /**
     * Defines gradient colors with repeated coloring.
     *
     * Anonymous Object Rectification.
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    repeating?: boolean;
}
/**
 * Defines the options of radial gradient.
 *
 * @interface RadialGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface RadialGradientOptions {
    /**
     * Defines center point for radial gradient.
     *
     * Anonymous Object Rectification.
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    center: [
        Length,
        Length
    ];
    /**
     * Defines radius of the radial gradient.
     *
     * Anonymous Object Rectification.
     * @type { Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    radius: Length;
    /**
     * Defines color description for gradients.
     *
     * Anonymous Object Rectification.
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    colors: Array<[
        ResourceColor,
        number
    ]>;
    /**
     * Defines gradient colors with repeated coloring.
     *
     * Anonymous Object Rectification.
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    repeating?: boolean;
}
/**
 * Source and target are two matched elements during the geometry transition.
 * The animation starts at the source and ends at the target.
 * TransitionHierarchyStrategy enumeration defines how levels of source and target elements
 * would be changed in the hierarchy during the geometry transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum TransitionHierarchyStrategy {
    /**
     * None mode.
     * Source and target staty in the original level in the hierarchy during geometry transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    NONE = 0,
    /**
     * ADAPTIVE mode.
     * Lower level one of source and target is elevated to higher level of both,
     * indicating that two elements are in same high level.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    ADAPTIVE = 1
}
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface TranslateOptions {
    /**
     * The param of x direction.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    x?: number | string;
    /**
     * The param of y direction.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    y?: number | string;
    /**
     * The param of z direction.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    z?: number | string;
}
/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface ScaleOptions {
    /**
     * The param of x direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    x?: number;
    /**
     * The param of y direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    y?: number;
    /**
     * The param of z direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    z?: number;
    /**
     * The param of center point of x.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    centerX?: number | string;
    /**
     * The param of center point of y.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    centerY?: number | string;
}
/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface AlignRuleParam<T> {
    /**
     * The param of anchor.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    anchor: string;
    /**
     * The param of align.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    align: T;
}
/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface AlignRuleOption {
    /**
     * The param of left align.
     *
     * @type { ?AlignRuleParam<HorizontalAlign> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    left?: AlignRuleParam<HorizontalAlign>;
    /**
     * The param of right align.
     *
     * @type { ?AlignRuleParam<HorizontalAlign> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    right?: AlignRuleParam<HorizontalAlign>;
    /**
     * The param of middle align.
     *
     * @type { ?AlignRuleParam<HorizontalAlign> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    middle?: AlignRuleParam<HorizontalAlign>;
    /**
     * The param of top align.
     *
     * @type { ?AlignRuleParam<VerticalAlign> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    top?: AlignRuleParam<VerticalAlign>;
    /**
     * The param of bottom align.
     *
     * @type { ?AlignRuleParam<VerticalAlign> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    bottom?: AlignRuleParam<VerticalAlign>;
    /**
     * The param of center align.
     *
     * @type { ?AlignRuleParam<VerticalAlign> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    center?: AlignRuleParam<VerticalAlign>;
    /**
     * Defines the bias ratio in horizontal and vertical direction.
     *
     * @type { ?Bias }
     * @default {horizontal:0.5,vertical:0.5}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    bias?: Bias;
}
/**
 * Defines the localized horizontal align param of relative container.
 *
 * @interface LocalizedHorizontalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface LocalizedHorizontalAlignParam {
    /**
     * The anchor of localized align param.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    anchor: string;
    /**
     * The align of localized align param.
     *
     * @type { HorizontalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    align: HorizontalAlign;
}
/**
 * Defines the localized vertical align param of relative container.
 *
 * @interface LocalizedVerticalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface LocalizedVerticalAlignParam {
    /**
     * The anchor of localized align param.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    anchor: string;
    /**
     * The align of localized align param.
     *
     * @type { VerticalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    align: VerticalAlign;
}
/**
 * Defines the Localized align rule options of relative container.
 *
 * @interface LocalizedAlignRuleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface LocalizedAlignRuleOptions {
    /**
     * The param of start align.
     *
     * @type { ?LocalizedHorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    start?: LocalizedHorizontalAlignParam;
    /**
     * The param of end align.
     *
     * @type { ?LocalizedHorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    end?: LocalizedHorizontalAlignParam;
    /**
     * The param of middle align.
     *
     * @type { ?LocalizedHorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    middle?: LocalizedHorizontalAlignParam;
    /**
     * The param of top align.
     *
     * @type { ?LocalizedVerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    top?: LocalizedVerticalAlignParam;
    /**
     * The param of bottom align.
     *
     * @type { ?LocalizedVerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bottom?: LocalizedVerticalAlignParam;
    /**
     * The param of center align.
     *
     * @type { ?LocalizedVerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    center?: LocalizedVerticalAlignParam;
    /**
     * Defines the bias ratio in horizontal and vertical direction.
     *
     * @type { ?Bias }
     * @default {horizontal:0.5,vertical:0.5}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bias?: Bias;
}
/**
 * Defines the style of the chain in relative container.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ChainStyle {
    /**
     * Elements of the chain will be spread out.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SPREAD,
    /**
     * Elements except chain's head and tail will be spread out.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SPREAD_INSIDE,
    /**
     * Elements of the chain will be packed together.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    PACKED
}
/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface RotateOptions {
    /**
     * The param of x direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    x?: number;
    /**
     * The param of y direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    y?: number;
    /**
     * The param of z direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    z?: number;
    /**
     * The param of center point of x.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    centerX?: number | string;
    /**
     * The param of center point of y.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    centerY?: number | string;
    /**
     * The param of center point of z.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    centerZ?: number;
    /**
     * The param of camera distance, value range (-∞, ∞).
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    perspective?: number;
    /**
     * The param of angle.
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    angle: number | string;
}
/**
 * Defines the Edge object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum TransitionEdge {
    /**
     * Top edge
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    TOP,
    /**
     * Bottom edge
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    BOTTOM,
    /**
     * Start edge
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    START,
    /**
     * End edge
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    END
}
/**
 * Defines asymmetricOptions.
 *
 * @interface AsymmetricOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface AsymmetricOptions {
    /**
    * appear
    *
    * @type { RotateOptions }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    appear: TransitionEffect;
    /**
    * appear
    *
    * @type { TransitionEffect }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    disappear: TransitionEffect;
}
/**
 * Defines all transition effects.
 *
 * @interface TransitionEffects
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface TransitionEffects {
    /**
    * identity
    *
    * @type { undefined }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    identity: undefined;
    /**
    * opacity
    *
    * @type { number }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    opacity: number;
    /**
    * slideSwitch
    *
    * @type { undefined }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    slideSwitch: undefined;
    /**
    * move
    *
    * @type { TransitionEdge }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    move: TransitionEdge;
    /**
    * translate
    *
    * @type { TranslateOptions }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    translate: TranslateOptions;
    /**
    * rotate
    *
    * @type { RotateOptions }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    rotate: RotateOptions;
    /**
    * scale
    *
    * @type { ScaleOptions }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    scale: ScaleOptions;
    /**
    * asymmetric
    *
    * @type { AsymmetricOptions }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    asymmetric: AsymmetricOptions;
}
/**
 * Defined the draw modifier of node. Provides draw callbacks for the associated Node.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class DrawModifier {
    /**
     * drawBehind Method. Executed before drawing associated Node.
     *
     * @param { DrawContext } drawContext - The drawContext used to draw.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    drawBehind?: (drawContext: DrawContext) => void;
    /**
     * drawContent Method. Executed when associated Node is drawing, the default drawContent method will be replaced
     * if this method is set.
     *
     * @param { DrawContext } drawContext - The drawContext used to draw.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    drawContent?: (drawContext: DrawContext) => void;
    /**
     * drawFront Method. Executed after drawing associated Node.
     *
     * @param { DrawContext } drawContext - The drawContext used to draw.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    drawFront?: (drawContext: DrawContext) => void;
    /**
     * Invalidate the component, which will cause a re-render of the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    invalidate(): void;
}
/**
 * Defines the transition effect
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare class TransitionEffect {
    /**
     * Disables the transition effect
     *
     * @type { TransitionEffect }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static readonly IDENTITY: TransitionEffect;
    /**
     * Specifies a transition effect with transparency of 0, which is equivalent to TransitionEffect.opacity(0).
     *
     * @type { TransitionEffect }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static readonly OPACITY: TransitionEffect;
    /**
     * Defines a slide transition effect
     *
     * @type { TransitionEffect }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static readonly SLIDE: TransitionEffect;
    /**
     * Specify a transition effect where the element enters by shrinking first and then expanding as it slides in from the right,
     * and exits by shrinking first and then expanding as it slides out to the left, with a minimum scale ratio of 0.8.
     * It comes with default animation parameters, which can also be overridden.
     * The default animation duration is set to 600ms, and the specified animation curve is cubicBezierCurve(0.24, 0.0, 0.50, 1.0).
     *
     * @type { TransitionEffect }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static readonly SLIDE_SWITCH: TransitionEffect;
    /**
     * Creates a translate transition effect
     *
     * @param { TranslateOptions } options - translate options
     * @returns { TransitionEffect<"translate"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static translate(options: TranslateOptions): TransitionEffect;
    /**
     * Creates a rotation transition effect
     *
     * @param { RotateOptions } options - rotate options
     * Set the rotation effect for component transitions when inserting and deleting.
     * The value represents the starting rotation point for the inserting animation and the ending rotation point for the deleting animation.
     * -x: Horizontal component of the rotational vector.
     * -y: Vertical component of the rotational vector.
     * -z: Vertical component of the rotational vector.
     * -centerX, centerY specify the rotation center point, with default values of "50%",
     * meaning that the default rotation center point is the center point of the component.
     * -The center point of (0, 0) represents the upper-left corner of the component.
     * -centerZ refers to the Z-axis anchor point. The default value of centerZ is 0.
     * -perspective indicates the visual distance. The perspective property does not support transition animation.
     * @returns { TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static rotate(options: RotateOptions): TransitionEffect;
    /**
     * Creates a scale transition effect
     *
     * @param { ScaleOptions } options - scale options
     * @returns { TransitionEffect<"scale"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static scale(options: ScaleOptions): TransitionEffect;
    /**
     * Creates an opacity transition effect with alpha value
     *
     * @param { number } alpha - opacity alpha value, value range [0, 1].
     * Illegal values less than 0 are treated as 0, and illegal values greater than 1 are treated as 1.
     * @returns { TransitionEffect<"opacity"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static opacity(alpha: number): TransitionEffect;
    /**
     * Creates a move transition effect
     *
     * @param { TransitionEdge } edge - the edge that component will move to
     * @returns { TransitionEffect<"move"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static move(edge: TransitionEdge): TransitionEffect;
    /**
     * Creates an asymmetric transition effect
     *
     * @param { TransitionEffect } appear - the transition which will be attached when the component is appear
     * @param { TransitionEffect } disappear - the transition which will be attached when the component is disappear
     * @returns { TransitionEffect<"asymmetric"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static asymmetric(appear: TransitionEffect, disappear: TransitionEffect): TransitionEffect;
    /**
     * TransitionEffect constructor
     *
     * @param { 'identity' | 'slideSwitch' } type - transition type
     * @param { undefined } effect - transition options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    constructor(type: 'identity' | 'slideSwitch', effect: undefined);
    /**
     * TransitionEffect constructor
     *
     * @param { 'opacity' } type - transition type
     * @param { number } effect - transition options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    constructor(type: 'opacity', effect: number);
    /**
     * TransitionEffect constructor
     *
     * @param { 'move' } type - transition type
     * @param { TransitionEdge } effect - transition options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    constructor(type: 'move', effect: TransitionEdge);
    /**
     * TransitionEffect constructor
     *
     * @param { 'translate' } type - transition type
     * @param { TranslateOptions } effect - transition options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    constructor(type: 'translate', effect: TranslateOptions);
    /**
     * TransitionEffect constructor
     *
     * @param { 'rotate' } type - transition type
     * @param { RotateOptions } effect - transition options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    constructor(type: 'rotate', effect: RotateOptions);
    /**
     * TransitionEffect constructor
     *
     * @param { 'scale' } type - transition type
     * @param { ScaleOptions } effect - transition options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    constructor(type: 'scale', effect: ScaleOptions);
    /**
     * TransitionEffect constructor
     *
     * @param { 'asymmetric' } type - transition type
     * @param { AsymmetricOptions } effect - transition options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    constructor(type: 'asymmetric', effect: AsymmetricOptions);
    /**
     * Set the animation of current transition effect
     *
     * @param { AnimateParam } value - animation parameters
     * @returns { TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    animation(value: AnimateParam): TransitionEffect;
    /**
     * Combines another transition effect
     *
     * @param { TransitionEffect } transitionEffect - transition effect which is be combined
     * @returns { TransitionEffect } combined transition effect
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    combine(transitionEffect: TransitionEffect): TransitionEffect;
}
/**
 * ItemDragInfo object description
 *
 * @interface ItemDragInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ItemDragInfo {
    /**
     * Obtains the X coordinate of the drag window, in vp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    x: number;
    /**
     * Obtains the Y coordinate of the drag window, in vp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    y: number;
}
/**
 * Enum of using the effects template mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare enum EffectType {
    /**
     * Define use the effects template defined by the parent effectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    DEFAULT = 0,
    /**
     * Define use the effects template defined by the window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    WINDOW_EFFECT = 1
}
/**
 * Defines the drag status before drag action.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare enum PreDragStatus {
    /**
     * Define the status for user prepare to start long press gesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    ACTION_DETECTING_STATUS = 0,
    /**
     * Define the status for user can start drag action.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    READY_TO_TRIGGER_DRAG_ACTION = 1,
    /**
     * Define the status for dragItem lift animation started.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PREVIEW_LIFT_STARTED = 2,
    /**
     * Define the status for dragItem lift animation finished.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PREVIEW_LIFT_FINISHED = 3,
    /**
     * Define the status for dragItem landing animation started.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PREVIEW_LANDING_STARTED = 4,
    /**
     * Define the status for dragItem landing animation finished.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PREVIEW_LANDING_FINISHED = 5,
    /**
     * Define the status for user cancel drag action.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    ACTION_CANCELED_BEFORE_DRAG = 6,
    /**
     * Define the status for user to sense the availability of drag in advance.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PREPARING_FOR_DRAG_DETECTION = 7
}
/**
 * DragItemInfo object description
 *
 * @interface DragItemInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface DragItemInfo {
    /**
     * Uses the pixelMap object for drawing.
     *
     * @type { ?PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    pixelMap?: image.PixelMap;
    /**
     * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    builder?: CustomBuilder;
    /**
     * Sets the extra info for drag event.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    extraInfo?: string;
}
/**
 * Define animation functions for immediate distribution.
 *
 * @param { AnimateParam } value - Set animation effect parameters.
 * @param { function } event - Specify the closure function that displays dynamic effects,
 * and the system will automatically insert transition animations for state changes caused by the closure function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare function animateToImmediately(value: AnimateParam, event: () => void): void;
/**
 * Defines the namespace of focus controller.
 *
 * @namespace focusControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare namespace focusControl {
    /**
     * Request focus to the specific component by param: 'id/key'.
     *
     * @param { string } value
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    function requestFocus(value: string): boolean;
}
/**
 * Import the PointerStyle type object for setCursor.
 *
 * @typedef { pointer.PointerStyle } PointerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export type PointerStyle = pointer.PointerStyle;
/**
 * CursorControl
 *
 * @namespace cursorControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare namespace cursorControl {
    /**
     * Change the mouse cursor style by param: 'PointerStyle'.
     *
     * @param { PointerStyle } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    function setCursor(value: PointerStyle): void;
    /**
     * Restore the default mouse cursor style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    function restoreDefault(): void;
}
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface EventTarget {
    /**
     * Area of current target.
     *
     * @type { Area }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    area: Area;
    /**
     * Node id of current target.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    id?: string;
}
/**
 * Defines the event source type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SourceType {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Unknown,
    /**
     * The mouse type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Mouse,
    /**
     * The touch screen type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    TouchScreen
}
/**
 * Defines the event tool type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SourceTool {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Unknown,
    /**
     * The finger type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Finger,
    /**
     * The pen type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Pen,
    /**
     * The mouse type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    MOUSE,
    /**
     * The touchpad type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    TOUCHPAD,
    /**
     * The joystick type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    JOYSTICK
}
/**
 * Defines the Border Image Repeat Mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum RepeatMode {
    /**
     * Repeat mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Repeat,
    /**
     * Stretch mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Stretch,
    /**
     * Round mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Round,
    /**
     * Space mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Space
}
/**
 * enum Blur style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum BlurStyle {
    /**
     * Defines the thin card material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Thin,
    /**
     * Defines the regular card material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Regular,
    /**
     * Defines the thick card material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Thick,
    /**
     * Defines the thin background material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    BACKGROUND_THIN,
    /**
     * Defines the thin regular material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    BACKGROUND_REGULAR,
    /**
     * Defines the thin thick material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    BACKGROUND_THICK,
    /**
     * Defines the thin ultra thick material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    BACKGROUND_ULTRA_THICK,
    /**
     * Defines none material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    NONE,
    /**
     * Defines the ultra thin component material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    COMPONENT_ULTRA_THIN = 8,
    /**
     * Defines the thin component material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    COMPONENT_THIN = 9,
    /**
     * Defines the regular component material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    COMPONENT_REGULAR = 10,
    /**
     * Defines the thick component material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    COMPONENT_THICK = 11,
    /**
     * Defines the ultra thick component material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    COMPONENT_ULTRA_THICK = 12
}
/**
 * Enumerates the policies for activating the blur style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum BlurStyleActivePolicy {
    /**
     * The component has the blur effect only when the window is focused.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    FOLLOWS_WINDOW_ACTIVE_STATE = 0,
    /**
     * The component always has the blur effect, regardless of whether the window is focused.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ALWAYS_ACTIVE = 1,
    /**
     * The component does not have the blur effect, regardless of whether the window is focused.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ALWAYS_INACTIVE = 2
}
/**
 * enum color mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ThemeColorMode {
    /**
     * Defines the mode which is follow up with system.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SYSTEM,
    /**
     * Defines the light mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    LIGHT,
    /**
     * Defines the dark mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DARK
}
/**
 * Defines adaptive color
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum AdaptiveColor {
    /**
     * Defines the fixed value color adaptive mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DEFAULT,
    /**
     * Defines the background average color adaptive mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    AVERAGE
}
/**
 * Defines modal transition type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ModalTransition {
    /**
     * Use default animation.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DEFAULT,
    /**
     * Use none animation.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NONE,
    /**
     * Use alpha animation.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ALPHA
}
/**
 * Defines the options of backgroundBlurStyle
 *
 * @extends BlurStyleOption
 * @interface BackgroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface BackgroundBlurStyleOptions extends BlurStyleOptions {
    /**
     * Defines the policy for activating the blur style.
     *
     * @type { ?BlurStyleActivePolicy }
     * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    policy?: BlurStyleActivePolicy;
    /**
     * Color of the background effect when the window is not focused.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    inactiveColor?: ResourceColor;
}
/**
 * Defines the options of ForegroundBlurStyle
 *
 * @extends BlurStyleOptions
 * @interface ForegroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ForegroundBlurStyleOptions extends BlurStyleOptions {
}
/**
 * Defines the options of blur
 *
 * @interface BlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface BlurOptions {
    /**
     * Fuzzy gray scale parameter.
     * @type { [number, number] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    grayscale: [
        number,
        number
    ];
}
/**
 * Defines the SystemAdaptiveOptions interface
 *
 * @interface SystemAdaptiveOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface SystemAdaptiveOptions {
    /**
     * Whether to disable system adaptive.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    disableSystemAdaptation?: boolean;
}
/**
 * Defines the options of blurStyle
 *
 * @interface BlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface BlurStyleOptions {
    /**
     * color mode
     *
     * @type { ?ThemeColorMode }
     * @default ThemeColorMode.SYSTEM
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    colorMode?: ThemeColorMode;
    /**
     * adaptive color
     *
     * @type { ?AdaptiveColor }
     * @default AdaptiveColor.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    adaptiveColor?: AdaptiveColor;
    /**
     * Define the scale of blur effect.
     * The range of value is [0, 1]. The larger the value, the more obvious the blurring effect.
     * A value of 0 indicates no blur effect and a value of 1 indicates a complete blur effect.
     *
     * @type { ?number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    scale?: number;
    /**
     * Defines the options of blur
     *
     * @type { ?BlurOptions }
     * @default { grayScale: [0,0] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    blurOptions?: BlurOptions;
}
/**
 * Defines the options of BackgroundEffect
 *
 * @interface BackgroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface BackgroundEffectOptions {
    /**
     * Define the radius size of BackgroundEffect.The range of this value is [0, ∞)
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    radius: number;
    /**
     * Define the saturation of BackgroundEffect. Value range [0, ∞)
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    saturation?: number;
    /**
     * Define the brightness of BackgroundEffect. Value range [0, ∞)
     * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    brightness?: number;
    /**
     * color the brightness of BackgroundEffect.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * Define the adaptiveColor of BackgroundEffect.
     *
     * @type { ?AdaptiveColor }
     * @default AdaptiveColor.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    adaptiveColor?: AdaptiveColor;
    /**
    * Define the blurOptions of BackgroundEffect.
    *
    * @type { ?BlurOptions }
    * @default { grayScale: [0,0] }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    blurOptions?: BlurOptions;
    /**
     * Defines the policy for activating the blur style.
     *
     * @type { ?BlurStyleActivePolicy }
     * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    policy?: BlurStyleActivePolicy;
    /**
     * Color of the background effect when the window is not focused.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    inactiveColor?: ResourceColor;
}
/**
 * Defines the options of ForegroundEffect
 *
 * @interface ForegroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ForegroundEffectOptions {
    /**
     * Define the radius size of ForegroundEffect.The range of this value is [0, ∞)
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    radius: number;
}
/**
 * Provide an interface for the text style of picker
 *
 * @interface PickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface PickerTextStyle {
    /**
     * Define the text color of picker.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * Define the text font of picker.
     * Only support size and weight.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    font?: Font;
}
/**
 * Provide an interface for the button style of picker
 *
 * @interface PickerDialogButtonStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface PickerDialogButtonStyle {
    /**
     * Describes the button style.
     *
     * @type { ?ButtonType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type?: ButtonType;
    /**
     * Describes the button style.
     *
     * @type { ?ButtonStyleMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    style?: ButtonStyleMode;
    /**
     * Describes the button role.
     *
     * @type { ?ButtonRole }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    role?: ButtonRole;
    /**
     * Describes the button text size.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontSize?: Length;
    /**
     * Describes the button text color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontColor?: ResourceColor;
    /**
     * Describes the button font weight.
     *
     * @type { ?(FontWeight | number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontWeight?: FontWeight | number | string;
    /**
     * Describes the button font style.
     *
     * @type { ?FontStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontStyle?: FontStyle;
    /**
     * Describes the button font family.
     *
     * @type { ?(Resource | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontFamily?: Resource | string;
    /**
     * Describes the button background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundColor?: ResourceColor;
    /**
     * Describes the button border radius.
     *
     * @type { ?(Length | BorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderRadius?: Length | BorderRadiuses;
    /**
     * Define whether the button default to responding to the Enter key
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    primary?: boolean;
}
/**
 * Define the type of shadow
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ShadowType {
    /**
     * Define a color type of shadow
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    COLOR,
    /**
     * Define a blur type of shadow
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    BLUR
}
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface ShadowOptions {
    /**
     * Define the radius size of shadow
     *
     * @type { number | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    radius: number | Resource;
    /**
     * Define the type of shadow
     *
     * @type { ?ShadowType }
     * @default ShadowType.COLOR
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type?: ShadowType;
    /**
     * Define the color or the color strategy of shadow
     *
     * @type { ?(Color | string | Resource| ColoringStrategy) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    color?: Color | string | Resource | ColoringStrategy;
    /**
     * Define the horizontal offset size of shadow
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    offsetX?: number | Resource;
    /**
     * Define the vertical offset size of shadow
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    offsetY?: number | Resource;
    /**
     * Define whether the shadow should fill the area
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fill?: boolean;
}
/**
 * enum Shadow style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ShadowStyle {
    /**
     * Defines the super small default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    OUTER_DEFAULT_XS,
    /**
     * Defines the small default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    OUTER_DEFAULT_SM,
    /**
     * Defines the medium default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    OUTER_DEFAULT_MD,
    /**
     * Defines the large default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    OUTER_DEFAULT_LG,
    /**
     * Defines the small floating shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    OUTER_FLOATING_SM,
    /**
     * Defines the medium floating shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    OUTER_FLOATING_MD
}
/**
 * Defines the options of Shadow.
 *
 * @interface MultiShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface MultiShadowOptions {
    /**
     * Current shadow radius.
     *
     * @type { ?(number | Resource) }
     * @default 20
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    radius?: number | Resource;
    /**
     * Current shadow offsetX.
     *
     * @type { ?(number | Resource) }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    offsetX?: number | Resource;
    /**
     * Current shadow offsetY
     *
     * @type { ?(number | Resource) }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    offsetY?: number | Resource;
}
/**
 * Enumerates the safe area types.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SafeAreaType {
    /**
     * Default area of the system, including the status bar and navigation bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SYSTEM,
    /**
     * Notch or punch hole.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CUTOUT,
    /**
     * Soft keyboard area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    KEYBOARD
}
/**
 * Enumerates the safe area edges.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SafeAreaEdge {
    /**
     * Top edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    TOP,
    /**
     * Bottom edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    BOTTOM,
    /**
     * Start edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    START,
    /**
     * End edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    END
}
/**
 * Enumerates the safe area types can be ignored.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum LayoutSafeAreaType {
    /**
     * Default area of the system, including the status bar and navigation bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SYSTEM = 0
}
/**
 * Enumerates the safe area edges can be ignored.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum LayoutSafeAreaEdge {
    /**
     * Top edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    TOP = 0,
    /**
     * Bottom edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    BOTTOM = 1
}
/**
 * Defines sheet size type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SheetSize {
    /**
     * Defines the sheet size medium height type. The height is half the screen height
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    MEDIUM,
    /**
     * Defines the sheet size large height type. The height is almost screen height.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    LARGE,
    /**
     * Defines the sheet size fit content height type. The height fit content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    FIT_CONTENT = 2
}
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface BaseEvent {
    /**
     * Defines the current target which fires this event.
     *
     * @type { EventTarget }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    target: EventTarget;
    /**
     * Event timestamp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    timestamp: number;
    /**
     * the event source info.
     *
     * @type { SourceType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    source: SourceType;
    /**
     * the Horizontal axis coordinate.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    axisHorizontal?: number;
    /**
     * the Vertical axis coordinate.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    axisVertical?: number;
    /**
     * Touch pressure.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    pressure: number;
    /**
     * The angle between pencil projection on plane-X-Y and axis-Z.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    tiltX: number;
    /**
     * The angle between pencil projection on plane-Y-Z and axis-Z.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    tiltY: number;
    /**
     * Indicates the angle at which the stylus rotates around the Z-axis.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    rollAngle?: number;
    /**
     * The event tool type info.
     *
     * @type { SourceTool }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    sourceTool: SourceTool;
    /**
     * Query the ModifierKey press state, support 'ctrl'|'alt'|'shift'|'fn'
     *
     * @param { Array<string> } keys - indicate the keys of the ModifierKey.
     * @returns { boolean }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getModifierKeyState?: (keys: Array<string>) => boolean;
    /**
     * Indicates the ID of the input device that triggers the current event.
     *
     * @type { ?number } [deviceId] The ID of the input device that triggers the current event
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    deviceId?: number;
    /**
     * Indicates the screen ID on which the event occurred.
     *
     * @type { ?number } [targetDisplayId] The screen ID on which the event occurred.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    targetDisplayId?: number;
}
/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface BorderImageOption {
    /**
     * Border image slice
     *
     * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    slice?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Border image repeat
     *
     * @type { ?RepeatMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    repeat?: RepeatMode;
    /**
     * Border image source
     *
     * @type { ?(string | Resource | LinearGradient) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    source?: string | Resource | LinearGradient;
    /**
     * Border image width
     *
     * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    width?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Border image outset
     *
     * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    outset?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Border image center fill
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fill?: boolean;
}
/**
 * Defines the policy of Layout
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare class LayoutPolicy {
    /**
     * The component fills its parent which means its size is as large as its parent.
     *
     * @type { LayoutPolicy }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static readonly matchParent: LayoutPolicy;
}
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface ClickEvent extends BaseEvent {
    /**
     * X coordinate of the click point relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    displayX: number;
    /**
     * Y coordinate of the click point relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    displayY: number;
    /**
     * X coordinate of the click point relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    windowX: number;
    /**
     * Y coordinate of the click point relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    windowY: number;
    /**
     * X coordinate of the click point relative to the left edge of the clicked element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    x: number;
    /**
     * Y coordinate of the click point relative to the left edge of the clicked element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    y: number;
    /**
     * Type of the touch hand.
     *
     * @type { InteractionHand }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hand?: InteractionHand;
    /**
     * Prevent the default function.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    preventDefault: () => void;
}
/**
 * The hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface HoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface HoverEvent extends BaseEvent {
    /**
     * X coordinate of the hover point relative to the left edge of the hover element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    x?: number;
    /**
     * Y coordinate of the hover point relative to the upper edge of the hover element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    y?: number;
    /**
     * X coordinate of the hover point relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    windowX?: number;
    /**
     * Y coordinate of the hover point relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    windowY?: number;
    /**
     * X coordinate of the hover point relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    displayX?: number;
    /**
     * Y coordinate of the hover point relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    displayY?: number;
    /**
     * The blocking hover event pops up.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    stopPropagation: () => void;
}
/**
 * The mouse click action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface MouseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface MouseEvent extends BaseEvent {
    /**
     * Mouse button of the click event.
     *
     * @type { MouseButton }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    button: MouseButton;
    /**
     * Mouse action of the click event.
     *
     * @type { MouseAction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    action: MouseAction;
    /**
     * X coordinate of the mouse point relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    displayX: number;
    /**
     * Y coordinate of the mouse point relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    displayY: number;
    /**
     * X coordinate of the mouse point relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    windowX: number;
    /**
     * Y coordinate of the mouse point relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    windowY: number;
    /**
     * X coordinate of the mouse point relative to the left edge of the mouse hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    x: number;
    /**
     * Y coordinate of the mouse point relative to the upper edge of the mouse hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    y: number;
    /**
     * The blocking event pops up.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    stopPropagation: () => void;
    /**
     * X axis offset relative to the previous reported mouse pointer position. When the mouse pointer is at
     * the edge of the screen, the value may be less than the difference of the X coordinate reported twice.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    rawDeltaX?: number;
    /**
     * Y axis offset relative to the previous reported mouse pointer position. When the mouse pointer is at
     * the edge of the screen, the value may be less than the difference of the Y coordinate reported twice.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    rawDeltaY?: number;
    /**
     * The pressed buttons of the mouse event.
     *
     * @type { ?MouseButton[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    pressedButtons?: MouseButton[];
}
/**
 * The accessibility hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @typedef AccessibilityHoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface AccessibilityHoverEvent extends BaseEvent {
    /**
     * Type of the accessibility hover event.
     *
     * @type { AccessibilityHoverType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    type: AccessibilityHoverType;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the event hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    x: number;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the event hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    y: number;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    displayX: number;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    displayY: number;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    windowX: number;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    windowY: number;
}
/**
 * Type of the touch event.
 *
 * @interface TouchObject
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TouchObject {
    /**
     * Type of the touch event.
     *
     * @type { TouchType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type: TouchType;
    /**
     * Finger unique identifier.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    id: number;
    /**
     * X coordinate of the touch point relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    displayX: number;
    /**
     * Y coordinate of the touch point relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    displayY: number;
    /**
     * X coordinate of the touch point relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    windowX: number;
    /**
     * Y coordinate of the touch point relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    windowY: number;
    /**
     * X coordinate of the touch point relative to the left edge of the touched element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    x: number;
    /**
     * Y coordinate of the touch point relative to the upper edge of the touched element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    y: number;
    /**
     * Type of the touch hand.
     *
     * @type { InteractionHand }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hand?: InteractionHand;
    /**
     * Time stamp when the touch point is pressed.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    pressedTime?: number;
    /**
   * Pressure of a specific touch point.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
    pressure?: number;
    /**
     * Width of the contact area when touch is pressed of a specific touch point.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    width?: number;
    /**
     * Height of the contact area when touch is pressed of a specific touch point.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    height?: number;
}
/**
 * TouchObject getHistoricalPoints Function Parameters
 *
 * @interface HistoricalPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface HistoricalPoint {
    /**
     * The base touchObject information of historicalPoint
     *
     * @type { TouchObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    touchObject: TouchObject;
    /**
     * Contact area between the finger pad and the screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    size: number;
    /**
     * Pressure of the touch event.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    force: number;
    /**
     * Timestamp of the touch event.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    timestamp: number;
}
/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @interface TouchEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TouchEvent extends BaseEvent {
    /**
     * Type of the touch event.
     *
     * @type { TouchType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type: TouchType;
    /**
     * All finger information.
     *
     * @type { TouchObject[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    touches: TouchObject[];
    /**
     * Indicates the current changed finger information.
     *
     * @type { TouchObject[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    changedTouches: TouchObject[];
    /**
     * The blocking event pops up.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    stopPropagation: () => void;
    /**
     * Get the historical points.
     *
     * @returns { Array<HistoricalPoint> } - return all historical points.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getHistoricalPoints(): Array<HistoricalPoint>;
    /**
     * Prevent the default function.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    preventDefault: () => void;
}
/**
 * The axis event triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface AxisEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface AxisEvent extends BaseEvent {
    /**
     * Axis action of the axis event.
     *
     * @type { AxisAction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    action: AxisAction;
    /**
     * X coordinate of the mouse cursor relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    displayX: number;
    /**
     * Y coordinate of the mouse cursor relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    displayY: number;
    /**
     * X coordinate of the mouse cursor relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    windowX: number;
    /**
     * Y coordinate of the mouse cursor relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    windowY: number;
    /**
     * X coordinate of the mouse cursor relative to the left edge of the axis event hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    x: number;
    /**
     * Y coordinate of the mouse cursor relative to the upper edge of the axis event hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    y: number;
    /**
     * Scroll step configuration which is only mouse wheel has.
     *  *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    scrollStep?: number;
    /**
     * Active event bubbling.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    propagation: Callback<void>;
    /**
     * Obtains the value of the horizontal scroll axis for this axis event.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    getHorizontalAxisValue(): number;
    /**
     * Obtains the value of the vertical scroll axis for this axis event.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    getVerticalAxisValue(): number;
}
/**
 * Defines the callback type used in onSizeChange.
 * The value of oldValue is last size of the component.
 * The value of newValue is new size of the component.
 *
 * @typedef { function } SizeChangeCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type SizeChangeCallback = (oldValue: SizeOptions, newValue: SizeOptions) => void;
/**
 * Defines the callback type used in onGestureRecognizerJudgeBegin.
 *
 * @typedef { function } GestureRecognizerJudgeBeginCallback
 * @param { BaseGestureEvent } event - the event information
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } recognizers - the gesture recognizers of the component on the response chain
 * @returns { GestureJudgeResult } the gesture judge result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer, recognizers: Array<GestureRecognizer>) => GestureJudgeResult;
/**
 * Defines the callback type used in shouldBuiltInRecognizerParallelWith.
 *
 * @typedef { function } ShouldBuiltInRecognizerParallelWithCallback
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } others - the gesture recognizers of the component on the response chain
 * @returns { GestureRecognizer } gesture recognizer of the component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;
/**
 * Defines the finish callback type used in transition.
 *
 * @typedef { function } TransitionFinishCallback
 * @param { boolean } transitionIn - a boolean value indicates whether it is the callback of transitionIn or transitionOut.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type TransitionFinishCallback = (transitionIn: boolean) => void;
/**
 * Defines the PixelMap type object for ui component.
 *
 * @typedef { image.PixelMap } PixelMap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type PixelMap = image.PixelMap;
/**
 * pixelmap object with release function.
 *
 * @interface PixelMapMock
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface PixelMapMock {
    /**
     * release function.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    release(): void;
}
/**
 * Enum for Drag Behavior.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum DragBehavior {
    /**
     * If drag use copy event, then set DragBehavior.COPY.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    COPY,
    /**
     * If drag use move event, then set DragBehavior.MOVE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    MOVE
}
/**
 * Import the UnifiedData type object for ui component.
 *
 * @typedef { unifiedDataChannel.UnifiedData } UnifiedData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type UnifiedData = unifiedDataChannel.UnifiedData;
/**
 * Import the Summary type object for ui component.
 *
 * @typedef { unifiedDataChannel.Summary } Summary
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export type Summary = unifiedDataChannel.Summary;
/**
 * Import the UniformDataType type object for ui component.
 *
 * @typedef { uniformTypeDescriptor.UniformDataType } UniformDataType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export type UniformDataType = uniformTypeDescriptor.UniformDataType;
/**
 * Enum for Drag Result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum DragResult {
    /**
     * If the drag is successful, return DragResult.DRAG_SUCCESSFUL.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DRAG_SUCCESSFUL = 0,
    /**
     * If drag fail, return DragResult.DRAG_FAILED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DRAG_FAILED = 1,
    /**
     * If drag action cancel, return DragResult.DRAG_CANCELED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    DRAG_CANCELED = 2,
    /**
     * If node allow drop in, return DragResult.DROP_ENABLED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    DROP_ENABLED = 3,
    /**
     * If node don't allow drop in, return DragResult.DROP_DISABLED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    DROP_DISABLED = 4
}
/**
 * Enum for BlendMode.
 * Blend modes for compositing current component
 * with overlapping content. Use overlapping content
 * as dst, current component as src.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum BlendMode {
    /**
     * Hybrid mode does not take effect
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    NONE = 0,
    /**
     * Clear destination color covered by the source to 0.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    CLEAR = 1,
    /**
     * r = s
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    SRC = 2,
    /**
     * r = d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    DST = 3,
    /**
     * r = s + (1 - sa) * d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    SRC_OVER = 4,
    /**
     * r = d + (1 - da) * s
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    DST_OVER = 5,
    /**
     * r = s * da
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    SRC_IN = 6,
    /**
     * r = d * sa
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    DST_IN = 7,
    /**
     * r = s * (1 - da)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    SRC_OUT = 8,
    /**
     * r = d * (1 - sa)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    DST_OUT = 9,
    /**
     * r = s * da + d * (1 - sa)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    SRC_ATOP = 10,
    /**
     * r = d * sa + s * (1 - da)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    DST_ATOP = 11,
    /**
     * r = s * (1 - da) + d * (1 - sa)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    XOR = 12,
    /**
     * r = min(s + d, 1)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    PLUS = 13,
    /**
     * r = s * d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    MODULATE = 14,
    /**
     * r = s + d - s * d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    SCREEN = 15,
    /**
     * multiply or screen, depending on destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    OVERLAY = 16,
    /**
     * rc = s + d - max(s * da, d * sa), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    DARKEN = 17,
    /**
     * rc = s + d - min(s * da, d * sa), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    LIGHTEN = 18,
    /**
     * brighten destination to reflect source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    COLOR_DODGE = 19,
    /**
     * darken destination to reflect source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    COLOR_BURN = 20,
    /**
     * multiply or screen, depending on source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    HARD_LIGHT = 21,
    /**
     * lighten or darken, depending on source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    SOFT_LIGHT = 22,
    /**
     * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    DIFFERENCE = 23,
    /**
     * rc = s + d - two(s * d), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    EXCLUSION = 24,
    /**
     * r = s * (1 - da) + d * (1 - sa) + s * d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    MULTIPLY = 25,
    /**
     * hue of source with saturation and luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    HUE = 26,
    /**
     * saturation of source with hue and luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    SATURATION = 27,
    /**
     * hue and saturation of source with luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    COLOR = 28,
    /**
     * luminosity of source with hue and saturation of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    LUMINOSITY = 29
}
/**
 * Enum for BlendApplyType.
 * Indicate how to apply specified blend mode to
 * the view's content.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum BlendApplyType {
    /**
     * Blend view's content in sequence over dst
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    FAST = 0,
    /**
     * Composite this views's contents into an
     * offscreen image and then blend over dst
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    OFFSCREEN = 1
}
/**
 * DragEvent object description
 *
 * @interface DragEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface DragEvent {
    /**
     * X coordinate of the touch point relative to the left edge of the device screen.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getDisplayX(): number;
    /**
     * Y coordinate of the touch point relative to the upper edge of the device screen.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getDisplayY(): number;
    /**
     * X coordinate of the touch point relative to the left edge of the current window.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getWindowX(): number;
    /**
     * Y coordinate of the touch point relative to the left edge of the current window.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getWindowY(): number;
    /**
    * If copy is COPY, this DragEvent is a copy event.
    * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
    * @default COPY
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    dragBehavior: DragBehavior;
    /**
     * If useCustomDropAnimation is true, System will not use drop animation.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    useCustomDropAnimation: boolean;
    /**
     * Set dragData into DragEvent.
     *
     * @param { UnifiedData } unifiedData - dragData.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setData(unifiedData: unifiedDataChannel.UnifiedData): void;
    /**
     * Get dragData from DragEvent.
     *
     * @returns { UnifiedData } - get dragData.
     * @throws { BusinessError } 190001 - Data not found.
     * @throws { BusinessError } 190002 - Data error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getData(): unifiedDataChannel.UnifiedData;
    /**
     * Get dragData summary from DragEvent.
     *
     * @returns { unifiedDataChannel.Summary } - get Summary Data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getSummary(): unifiedDataChannel.Summary;
    /**
     * Set dragEvent result to DragEvent.
     *
     * @param { DragResult } dragResult - the return of dragEvent.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setResult(dragResult: DragResult): void;
    /**
     * Get dragEvent result from DragEvent.
     *
     * @returns { DragResult } - dragResult Data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getResult(): DragResult;
    /**
     * Get the rectangle of drag window.
     *
     * @returns { Rectangle } - getPreview rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getPreviewRect(): Rectangle;
    /**
     * Get the x axis velocity of drag gesture.
     *
     * @returns { number } - get x axis velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getVelocityX(): number;
    /**
     * Get the y axis velocity of drag gesture.
     *
     * @returns { number } - get y axis velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getVelocityY(): number;
    /**
     * Get the velocity of drag gesture.
     *
     * @returns { number } - get velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getVelocity(): number;
    /**
     * Query the ModifierKey press state, support 'ctrl'|'alt'|'shift'|'fn'
     *
     * @param { Array<string> } keys - indicate the keys of the ModifierKey.
     * @returns { boolean }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getModifierKeyState?: (keys: Array<string>) => boolean;
    /**
     * Setup one drop animation execution callback, which will be triggered by system when user drops.
     * Use this way to implement the custom drop animation instead of doing it in onDrop, as the system
     * will decide when to trigger the callback during the drop handling.
     * [Note]:
     *   1. Please set useCustomDropAnimation to true as well when using this method.
     *   2. Do not implement the animation no-related logics in the callback.
     *
     * @param { Callback<void> } customDropAnimation - the custom drop animation function.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    executeDropAnimation(customDropAnimation: Callback<void>): void;
}
/**
 * The event callback function for drag and drop common interfaces.
 * @typedef { function } OnDragEventCallback
 * @param { DragEvent } event - the event object indicating current drag status.
 * @param { string } [extraParams] - extra information set by user or system.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnDragEventCallback = (event: DragEvent, extraParams?: string) => void;
/**
 * Defines the options for the drop handling.
 *
 * @interface DropOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface DropOptions {
    /**
     * Indicating to disable the UDMF data prefetch action by system or not.
     * The system will try to fetch data before calling user's onDrop for some situation,
     * it will retry to get data until the max time limit (2.4s for now) reaches,
     * this's useful for the cross device draging operation, as the system helps to eliminate
     * the communication instability, but it's redundant for startDataLoading method, as this
     * method will take care the data fetching with asynchronous mechanism, so must set this
     * field to true if using startDataLoading in onDrop to avoid the data is fetched before
     * onDrop executing unexpectedly.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    disableDataPrefetch?: boolean;
}
/**
 * KeyEvent object description:
 *
 * @interface KeyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface KeyEvent {
    /**
     * Type of a key.
     *
     * @type { KeyType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type: KeyType;
    /**
     * Key code of a key
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    keyCode: number;
    /**
     * Key value of a key.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    keyText: string;
    /**
     * Type of the input device that triggers the current key, such as the keyboard or handle.
     *
     * @type { KeySource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    keySource: KeySource;
    /**
     * Indicates the ID of the input device that triggers the current key.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    deviceId: number;
    /**
     * Indicates the status of the key when the key is pressed.
     * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    metaKey: number;
    /**
     * Timestamp when the key was pressed.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    timestamp: number;
    /**
     * Block event bubbling.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    stopPropagation: () => void;
    /**
     * Intention code of a key or modifier keys.
     *
     * @type { IntentionCode }
     * @default IntentionCode.INTENTION_UNKNOWN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    intentionCode: IntentionCode;
    /**
     * Get the modifier keys press state, support 'ctrl'|'alt'|'shift'|'fn'
     *
     * @param { Array<string> } keys - indicate the modifier keys.
     * @returns { boolean }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getModifierKeyState?: (keys: Array<string>) => boolean;
    /**
     * Unicode of a key
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    unicode?: number;
}
/**
 * Focus axis event object description.
 *
 * @extends BaseEvent
 * @interface FocusAxisEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface FocusAxisEvent extends BaseEvent {
    /**
     * The axis values of axis event.
     *
     * @type { Map<AxisModel, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    axisMap: Map<AxisModel, number>;
    /**
     * The blocking event pops up.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    stopPropagation: Callback<void>;
}
/**
 * CrownEvent object description
 *
 * @interface CrownEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface CrownEvent {
    /**
     *The timestamp of the rotating crown event.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    timestamp: number;
    /**
     * The angular velocity of a rotating crown.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    angularVelocity: number;
    /**
     * The rotation angle of the rotating crown.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    degree: number;
    /**
     * The behavior of rotating crown.
     *
     * @type { CrownAction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    action: CrownAction;
    /**
     * The blocking event pops up.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    stopPropagation: Callback<void>;
}
/**
 * Overlay module options
 *
 * @interface BindOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface BindOptions {
    /**
     * Defines the background color
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundColor?: ResourceColor;
    /**
     * Callback function when overlay interface appears
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onAppear?: () => void;
    /**
     * Callback function when overlay interface exits
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDisappear?: () => void;
    /**
     * Callback function before overlay animation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillAppear?: () => void;
    /**
     * Callback function before overlay popAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillDisappear?: () => void;
}
/**
 * Component content cover dismiss
 *
 * @interface DismissContentCoverAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface DismissContentCoverAction {
    /**
     * Defines content cover dismiss function
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    dismiss: Callback<void>;
    /**
     * Defines content cover dismiss reason
     *
     * @type { DismissReason }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    reason: DismissReason;
}
/**
 * Component content cover options
 *
 * @extends BindOptions
 * @interface ContentCoverOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ContentCoverOptions extends BindOptions {
    /**
     * Defines transition type
     *
     * @type { ?ModalTransition }
     * @default ModalTransition.Default
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    modalTransition?: ModalTransition;
    /**
     * Callback function when the content cover interactive dismiss
     *
     * @type { ?Callback<DismissContentCoverAction> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillDismiss?: Callback<DismissContentCoverAction>;
    /**
     * Defines transition effect param
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    transition?: TransitionEffect;
}
/**
 * Component sheet title options
 *
 * @interface SheetTitleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SheetTitleOptions {
    /**
     * Defines title text
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    title: ResourceStr;
    /**
     * Defines subtitle text
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    subtitle?: ResourceStr;
}
/**
 * Defines the sheet type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SheetType {
    /**
     * Defines bottom sheet type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    BOTTOM = 0,
    /**
     * Defines center sheet type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CENTER = 1,
    /**
     * Defines popup sheet type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    POPUP = 2
}
/**
 * Define the display mode of the sheet.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SheetMode {
    /**
     * Sheet displays above all page levels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    OVERLAY = 0,
    /**
     * Sheet displays within the current page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    EMBEDDED = 1
}
/**
 * Define the scroll size mode of the sheet.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ScrollSizeMode {
    /**
     * Sheet change scroll size after the slide ends.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    FOLLOW_DETENT = 0,
    /**
     * Sheet change scroll size during the sliding process.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CONTINUOUS = 1
}
/**
 * Define the mode of sheet how to avoid keyboard.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SheetKeyboardAvoidMode {
    /**
     * Sheet will not aovid keyboard.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NONE = 0,
    /**
     * Firstly sheet will avoid keyboard by changing its height.
     * And then sheet will avoid by resizing after reaching its maximum height.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    TRANSLATE_AND_RESIZE = 1,
    /**
     * Sheet will only avoid keyboard by resizing the content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    RESIZE_ONLY = 2,
    /**
     * Firstly sheet will avoid keyboard by changing its height.
     * And then sheet will avoid keyboard by scrolling after reaching its maximum height.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    TRANSLATE_AND_SCROLL = 3
}
/**
 * Component sheet dismiss
 *
 * @interface SheetDismiss
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SheetDismiss {
    /**
     * Defines sheet dismiss function
     *
     * @type { function  }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    dismiss: () => void;
}
/**
 * Component sheet dismiss
 *
 * @interface DismissSheetAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface DismissSheetAction {
    /**
     * Defines sheet dismiss function
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    dismiss: Callback<void>;
    /**
     * Dismiss reason type.
     *
     * @type { DismissReason }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    reason: DismissReason;
}
/**
 * Defines sheet spring back action
 *
 * @interface SpringBackAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SpringBackAction {
    /**
     * Defines spring back function
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    springBack: Callback<void>;
}
/**
 * Component sheet options
 *
 * @extends BindOptions
 * @interface SheetOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SheetOptions extends BindOptions {
    /**
     * Defines sheet height
     *
     * @type { ?(SheetSize | Length) }
     * @default Sheet.LARGE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    height?: SheetSize | Length;
    /**
     * Defines whether the control bar is displayed.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    dragBar?: boolean;
    /**
     * Defines sheet maskColor
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maskColor?: ResourceColor;
    /**
     * Defines sheet detents
     *
     * @type { ?[(SheetSize | Length), (SheetSize | Length)?, (SheetSize | Length)?] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    detents?: [
        (SheetSize | Length),
        SheetSize | Length | undefined,
        SheetSize | Length | undefined
    ];
    /**
     * Defines sheet background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    blurStyle?: BlurStyle;
    /**
     * Defines whether the close icon is displayed
     *
     * @type { ?(boolean | Resource) }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showClose?: boolean | Resource;
    /**
    * Defines the sheet prefer type
    *
    * @type { ?SheetType }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    preferType?: SheetType;
    /**
     * Defines the sheet title
     *
     * @type { ?(SheetTitleOptions | CustomBuilder) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    title?: SheetTitleOptions | CustomBuilder;
    /**
     * Callback function when the sheet interactive dismiss
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    shouldDismiss?: (sheetDismiss: SheetDismiss) => void;
    /**
     * Callback function when the sheet will dismiss
     *
     * @type { ?Callback<DismissSheetAction> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillDismiss?: Callback<DismissSheetAction>;
    /**
    * Sheet springs back callback when dismiss
    *
    * @type { ?Callback<SpringBackAction> }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    onWillSpringBackWhenDismiss?: Callback<SpringBackAction>;
    /**
     * Set whether interaction is allowed outside the sheet
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableOutsideInteractive?: boolean;
    /**
     * Defines the sheet's width.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    width?: Dimension;
    /**
     * Defines the sheet's border width.
     *
     * @type { ?(Dimension | EdgeWidths | LocalizedEdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Defines the sheet's border color.
     *
     * @type { ?(ResourceColor | EdgeColors | LocalizedEdgeColors) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;
    /**
     * Defines the sheet's border style.
     *
     * @type { ?(BorderStyle | EdgeStyles) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderStyle?: BorderStyle | EdgeStyles;
    /**
     * Defines the sheet's shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Called when height of the sheet is changed
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onHeightDidChange?: Callback<number>;
    /**
     * Determine the level sheet shows, whether sheet should be displayed within the page
     *
     * @type { ?SheetMode }
     * @default SheetMode.OVERLAY
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mode?: SheetMode;
    /**
     * Determine sheet scroll size mode.
     *
     * @type { ?ScrollSizeMode }
     * @default ScrollSizeMode.FELLOW_DETEND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollSizeMode?: ScrollSizeMode;
    /**
     * Called when detents of the sheet changed
     *
     * @type { ?Callback<number> }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDetentsDidChange?: Callback<number>;
    /**
     * Called when width of the sheet changed
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWidthDidChange?: Callback<number>;
    /**
     * Called when the sheet type changed
     *
     * @type { ?Callback<SheetType> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onTypeDidChange?: Callback<SheetType>;
    /**
     * The UIContext that the sheet belongs to
     *
     * @type { ?UIContext }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    uiContext?: UIContext;
    /**
     * Determine the mode of sheet how to avoid keyboard.
     *
     * @type { ?SheetKeyboardAvoidMode }
     * @default SheetKeyboardAvoidMode.TRANSLATE_AND_SCROLL
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    keyboardAvoidMode?: SheetKeyboardAvoidMode;
    /**
     * Defines whether to respond to the hover mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableHoverMode?: boolean;
    /**
     * Defines the sheet's display area in hover mode.
     *
     * @type { ?HoverModeAreaType }
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hoverModeArea?: HoverModeAreaType;
    /**
     * Sets the position offset of the bindSheet.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    offset?: Position;
    /**
     * Sets whether the sheet edge has spring effect.
     *
     * @type { ?number }
     * @default 3
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    effectEdge?: number;
    /**
     * Defines sheet radius
     *
     * @type { ?(LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    radius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
    /**
     * Select a detent from detents property
     *
     * @type { ?(SheetSize | Length) }
     * @default detents[0]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    detentSelection?: SheetSize | Length;
    /**
     * Whether to display in the sub window
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showInSubWindow?: boolean;
    /**
     * The placement of popup sheet type.
     * Supports all positions defined in Placement.
     *
     * @type { ?Placement }
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placement?: Placement;
    /**
     * placement On target node
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placementOnTarget?: boolean;
}
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface StateStyles {
    /**
     * Defines normal state styles.
     *
     * @type { ?Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    normal?: Object;
    /**
     * Defines pressed state styles.
     *
     * @type { ?Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    pressed?: Object;
    /**
     * Defines disabled state styles.
     *
     * @type { ?Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    disabled?: Object;
    /**
     * Defines focused state styles.
     *
     * @type { ?Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    focused?: Object;
    /**
     * Defines clicked state styles.
     *
     * @type { ?Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    clicked?: Object;
    /**
     * Defines selected state styles.
     *
     * @type { ?Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    selected?: Object;
}
/**
 * Defines the options of popup message.
 *
 * @interface PopupMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface PopupMessageOptions {
    /**
     * Sets the color of popup text.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textColor?: ResourceColor;
    /**
     * Sets the font of popup text.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    font?: Font;
}
/**
 * Dismiss reason type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum DismissReason {
    /**
    * Press back
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    PRESS_BACK = 0,
    /**
    * Touch component outside
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    TOUCH_OUTSIDE = 1,
    /**
    * Close button
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    CLOSE_BUTTON = 2,
    /**
    * Slide down
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    SLIDE_DOWN = 3
}
/**
 * Component popup dismiss
 *
 * @interface DismissPopupAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface DismissPopupAction {
    /**
     * Defines popup dismiss function
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    dismiss: Callback<void>;
    /**
     * Defines popup dismiss reason
     *
     * @type { DismissReason }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    reason: DismissReason;
}
/**
 * Popup state change param
 *
 * @interface PopupStateChangeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface PopupStateChangeParam {
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isVisible: boolean;
}
/**
 * Popup state change callback
 *
 * @typedef { function } PopupStateChangeCallback
 * @param { PopupStateChangeParam } event - The parameter of state change callback.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type PopupStateChangeCallback = (event: PopupStateChangeParam) => void;
/**
 * Popup mask type
 *
 * @interface PopupMaskType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface PopupMaskType {
    /**
     * Color.
     *
     * @type { ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color: ResourceColor;
}
/**
 * Popup common options
 *
 * @interface PopupCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface PopupCommonOptions {
    /**
     * placement of popup.
     *
     * @type { ?Placement }
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placement?: Placement;
    /**
     * Set the background color of the popup.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    popupColor?: ResourceColor;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableArrow?: boolean;
    /**
     * Whether hide popup when click mask
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    autoCancel?: boolean;
    /**
     * on State Change
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onStateChange?: PopupStateChangeCallback;
    /**
     * The offset of the sharp corner of popup.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowOffset?: Length;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showInSubWindow?: boolean;
    /**
     * The mask to block gesture events of popup.
     * When mask is set false, gesture events are not blocked.
     * When mask is set true, gesture events are blocked and mask color is transparent.
     *
     * @type { ?(boolean | PopupMaskType) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mask?: boolean | PopupMaskType;
    /**
     * Sets the space of between the popup and target.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    targetSpace?: Length;
    /**
     * Sets the position offset of the popup.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    offset?: Position;
    /**
     * Set the width of the popup.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    width?: Dimension;
    /**
     * The position of the sharp corner of popup.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * The width of the arrow.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowHeight?: Dimension;
    /**
     * The round corners of the popup.
     *
     * @type { ?Dimension }
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    radius?: Dimension;
    /**
     * The style of popup Shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Defines popup background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Set popup focusable
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    focusable?: boolean;
    /**
     * Defines the transition effect of popup opening and closing
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    transition?: TransitionEffect;
    /**
     * Callback function when the popup interactive dismiss.
     * Use boolean to respond all interactive dismiss event. Use Callback to customize which event should be responded.
     *
     * @type { ?(boolean | Callback<DismissPopupAction>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
     * Determine if it is compatible popup's half folded.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableHoverMode?: boolean;
    /**
     * Determine if popup can follow the target node when it has rotation or scale.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    followTransformOfTarget?: boolean;
}
/**
 * Defines the Tips options.
 *
 * @interface TipsOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TipsOptions {
    /**
     * Defines the delay time for appearing.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    appearingTime?: number;
    /**
     * Defines the delay time for disappearing.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    disappearingTime?: number;
    /**
     * Define the delay time for the appearance of continuous operations.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    appearingTimeWithContinuousOperation?: number;
    /**
     * Define the delay time for the disappearance of continuous operations.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    disappearingTimeWithContinuousOperation?: number;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableArrow?: boolean;
    /**
     * The position of the sharp corner of Tips.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * The width of the arrow.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowHeight?: Dimension;
}
/**
 * Defines the popup button options.
 *
 * @interface PopupButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface PopupButtonOptions {
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    value: string;
    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    action: () => void;
}
/**
 * Defines the popup state events.
 *
 * @interface PopupStateEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface PopupStateEvent {
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isVisible: boolean;
}
/**
 * Defines the popup mask options.
 *
 * @interface PopupMaskOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface PopupMaskOptions {
    /**
     * color
     *
     * @type { ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color: ResourceColor;
}
/**
 * Defines the popup options.
 *
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface PopupOptions {
    /**
     * Information in the pop-up window.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    message: string;
    /**
     * The placement of popup.
     * Supports all positions defined in Placement.
     *
     * @type { ?Placement }
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placement?: Placement;
    /**
     * The first button.
     *
     * @type { ?PopupButtonOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    primaryButton?: PopupButtonOptions;
    /**
     * The second button.
     *
     * @type { ?PopupButtonOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    secondaryButton?: PopupButtonOptions;
    /**
     * on State Change
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onStateChange?: (event: PopupStateEvent) => void;
    /**
     * The offset of the sharp corner of popup.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowOffset?: Length;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showInSubWindow?: boolean;
    /**
     * The mask to block gesture events of popup.
     * When mask is set false, gesture events are not blocked.
     * When mask is set true, gesture events are blocked and mask color is transparent.
     *
     * @type { ?(boolean | PopupMaskOptions) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mask?: boolean | PopupMaskOptions;
    /**
     * Sets the options of popup message.
     *
     * @type { ?PopupMessageOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    messageOptions?: PopupMessageOptions;
    /**
     * Sets the space of between the popup and target.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    targetSpace?: Length;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableArrow?: boolean;
    /**
     * Sets the position offset of the popup.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    offset?: Position;
    /**
     * Set the background color of the popup.
     *
     * @type { ?(Color | string | Resource | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    popupColor?: Color | string | Resource | number;
    /**
     * Whether hide popup when click mask
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    autoCancel?: boolean;
    /**
     * Set the width of the popup.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    width?: Dimension;
    /**
     * The position of the sharp corner of popup.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * The width of the arrow.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowHeight?: Dimension;
    /**
     * The round corners of the popup.
     *
     * @type { ?Dimension }
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    radius?: Dimension;
    /**
     * The style of popup Shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Defines popup background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Defines the transition effect of popup opening and closing
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    transition?: TransitionEffect;
    /**
     * Callback function when the popup interactive dismiss
     *
     * @type { ?(boolean | Callback<DismissPopupAction>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
     * Determine if it is compatible popup's half folded.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableHoverMode?: boolean;
    /**
     * Determine if popup can follow the target node when it has rotation or scale.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    followTransformOfTarget?: boolean;
    /**
     * Define the popup avoid keyboard mode.
     *
     * @type { ?KeyboardAvoidMode }
     * @default KeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    keyboardAvoidMode?: KeyboardAvoidMode;
}
/**
 * Defines the custom popup options.
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface CustomPopupOptions {
    /**
     * builder of popup
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    builder: CustomBuilder;
    /**
     * placement of popup
     *
     * @type { ?Placement }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placement?: Placement;
    /**
     * background color of popup
     *
     * @type { ?(Color | string | Resource | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    popupColor?: Color | string | Resource | number;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableArrow?: boolean;
    /**
     * whether hide popup when click mask
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    autoCancel?: boolean;
    /**
     * on State Change
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onStateChange?: (event: PopupStateEvent) => void;
    /**
     * The offset of the sharp corner of popup.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowOffset?: Length;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showInSubWindow?: boolean;
    /**
     * The mask to block gesture events of popup.
     * When mask is set false, gesture events are not blocked.
     * When mask is set true, gesture events are blocked and mask color is transparent.
     *
     * @type { ?(boolean | PopupMaskOptions) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mask?: boolean | PopupMaskOptions;
    /**
     * Sets the space of between the popup and target.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    targetSpace?: Length;
    /**
     * Sets the position offset of the popup.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    offset?: Position;
    /**
     * Set the width of the popup.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    width?: Dimension;
    /**
     * The position of the sharp corner of popup.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * The width of the arrow.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowHeight?: Dimension;
    /**
     * The round corners of the popup.
     *
     * @type { ?Dimension }
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    radius?: Dimension;
    /**
     * The style of popup Shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Defines popup background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Set popup focusable
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    focusable?: boolean;
    /**
     * Defines the transition effect of popup opening and closing
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    transition?: TransitionEffect;
    /**
     * Callback function when the popup interactive dismiss
     *
     * @type { ?(boolean | Callback<DismissPopupAction>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
      * Determine if it is compatible popup's half folded.
      *
      * @type { ?boolean }
      * @default false
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    enableHoverMode?: boolean;
    /**
     * Determine if popup can follow the target node when it has rotation or scale.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    followTransformOfTarget?: boolean;
    /**
     * Define the popup avoid keyboard mode.
     *
     * @type { ?KeyboardAvoidMode }
     * @default KeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    keyboardAvoidMode?: KeyboardAvoidMode;
}
/**
 * Defines the menu preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum MenuPreviewMode {
    /**
     * No preview content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NONE = 0,
    /**
     * Defines image type preview content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    IMAGE = 1
}
/**
 * Defines the animator range of start and end property.
 *
 * @typedef { [number, number] } AnimationNumberRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type AnimationNumberRange = [
    number,
    number
];
/**
 * Defines the ContextMenu's preview animator options.
 *
 * @interface ContextMenuAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ContextMenuAnimationOptions {
    /**
     * Sets the start animator scale and end animator scale.
     *
     * @type { ?AnimationNumberRange }
     * @default -
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scale?: AnimationNumberRange;
    /**
     * Defines the transition effect of menu preview opening and closing.
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    transition?: TransitionEffect;
    /**
     * Sets the scale start and end animator of the image displayed before the custom builder preview is displayed.
     *
     * @type { ?AnimationNumberRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hoverScale?: AnimationNumberRange;
}
/**
   * Defines the type of border radius.
   *
   * @typedef { Length | BorderRadiuses | LocalizedBorderRadiuses }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
export type BorderRadiusType = Length | BorderRadiuses | LocalizedBorderRadiuses;
/**
 * Defines the menu haptic feedback mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum HapticFeedbackMode {
    /**
     * No haptic feedback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DISABLED = 0,
    /**
     * Defines menu always haptic feedback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ENABLED = 1,
    /**
     * Defines menu automatically haptic feedback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    AUTO = 2
}
/**
 * Defines the context menu options.
 *
 * @interface ContextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ContextMenuOptions {
    /**
     * Sets the position offset of the context menu window.
     *
     * @type { ?Position }
     * @default -
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    offset?: Position;
    /**
     * Sets the placement of the context menu window.
     *
     * @type { ?Placement }
     * @default -
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placement?: Placement;
    /**
     * whether show arrow belong to the menu, default: false, not show arrow
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableArrow?: boolean;
    /**
     * The horizontal offset to the left of menu or vertical offset to the top of menu
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    arrowOffset?: Length;
    /**
     * The preview content of context menu.
     *
     * @type { ?(MenuPreviewMode | CustomBuilder) }
     * @default MenuPreviewMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    preview?: MenuPreviewMode | CustomBuilder;
    /**
     * Defines the border radius for preview of menu.
     *
     * @type { BorderRadiusType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    previewBorderRadius?: BorderRadiusType;
    /**
     * Defines the border radius of menu.
     *
     * @type { ?(Length | BorderRadiuses | LocalizedBorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;
    /**
     * Callback function when the context menu appears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onAppear?: () => void;
    /**
     * Callback function when the context menu disappear.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDisappear?: () => void;
    /**
     * Callback function before the context menu animation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    aboutToAppear?: () => void;
    /**
     * Callback function before the context menu popAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    aboutToDisappear?: () => void;
    /**
     * The margin of menu's layoutRegion.
     *
     * @type { ?Margin }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    layoutRegionMargin?: Margin;
    /**
     * The preview animator options.
     *
     * @type { ?ContextMenuAnimationOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    previewAnimationOptions?: ContextMenuAnimationOptions;
    /**
     * Defines the menu's background color
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundColor?: ResourceColor;
    /**
     * Defines menu background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Defines the menu's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Defines the menu's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * Defines the transition effect of menu opening and closing.
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    transition?: TransitionEffect;
    /**
      * Determine if it is compatible menu's half folded.
      *
      * @type { ?boolean }
      * @default false
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    enableHoverMode?: boolean;
    /**
      * The color of menu's outer border.
      *
      * @type { ?(ResourceColor | EdgeColors) }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    outlineColor?: ResourceColor | EdgeColors;
    /**
      * The width of menu's outer border.
      *
      * @type { ?(Dimension | EdgeOutlineWidths) }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    outlineWidth?: Dimension | EdgeOutlineWidths;
    /**
     * Defines the haptic feedback mode of menu.
     *
     * @type { ?HapticFeedbackMode }
     * @default HapticFeedbackMode.DISABLED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hapticFeedbackMode?: HapticFeedbackMode;
}
/**
 * Defines the menu options.
 *
 * @extends ContextMenuOptions
 * @interface MenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface MenuOptions extends ContextMenuOptions {
    /**
     * Sets the title of the menu window.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    title?: ResourceStr;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showInSubWindow?: boolean;
}
/**
 * Defines the ProgressMask class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class ProgressMask {
    /**
     * constructor.
     *
     * @param { number } value - indicates the current value of the progress.
     * @param { number } total - indicates the total value of the progress.
     * @param { ResourceColor } color - indicates the color of the mask.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(value: number, total: number, color: ResourceColor);
    /**
     * Update the current value of the progress.
     *
     * @param { number } value - indicates the current value of the progress.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    updateProgress(value: number): void;
    /**
     * Update the color of the mask.
     *
     * @param { ResourceColor } value - indicates the color of the mask.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    updateColor(value: ResourceColor): void;
    /**
     * Enable the breathe animation of mask.
     *
     * @param { boolean } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableBreathingAnimation(value: boolean): void;
}
/**
 * Defines TouchTestInfo class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class TouchTestInfo {
    /**
     * Get the X-coordinate relative to the window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    windowX: number;
    /**
     * Get the Y-coordinate relative to the window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    windowY: number;
    /**
     * Get the X-coordinate relative to the current component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    parentX: number;
    /**
     * Get the Y-coordinate relative to the current component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    parentY: number;
    /**
     * Get the X-coordinate relative to the sub component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    x: number;
    /**
     * Get the Y-coordinate relative to the sub component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    y: number;
    /**
     * Get the rectangle of sub component.
     *
     * @type { RectResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    rect: RectResult;
    /**
     * Get the name of sub component.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    id: string;
}
/**
 * Defines TouchResult class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class TouchResult {
    /**
     * Defines the touch test strategy.
     *
     * @type { TouchTestStrategy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    strategy: TouchTestStrategy;
    /**
     * Defines the component's name.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    id?: string;
}
/**
 * Set the edge blur effect distance of the corresponding defense line of the component
 * When the component expand out, no re-layout is triggered
 *
 * @interface PixelStretchEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface PixelStretchEffectOptions {
    /**
     * top property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    top?: Length;
    /**
     * bottom property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bottom?: Length;
    /**
     * left property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    left?: Length;
    /**
     * right property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    right?: Length;
}
/**
 * Defines the click effect.
 *
 * @interface ClickEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ClickEffect {
    /**
     * Set the click effect level.
     *
     * @type { ClickEffectLevel }
     * @default ClickEffectLevel.Light
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    level: ClickEffectLevel;
    /**
     * Set scale number.
     * This default scale is same as the scale of click effect level.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    scale?: number;
}
/**
 * Defines the fadingEdge options.
 *
 * @typedef FadingEdgeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface FadingEdgeOptions {
    /**
     * The length of FadingEdge.
     *
     * @type { LengthMetrics }
     * @default 32vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fadingEdgeLength?: LengthMetrics;
}
/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface NestedScrollOptions {
    /**
     * Set NestedScrollMode when the scrollable component scrolls forward
     *
     * @type { NestedScrollMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollForward: NestedScrollMode;
    /**
     * Set NestedScrollMode when the scrollable component scrolls backward
     *
     * @type { NestedScrollMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollBackward: NestedScrollMode;
}
/**
 * Defines the menu element.
 *
 * @interface MenuElement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface MenuElement {
    /**
     * Sets the value of the menu element.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    value: ResourceStr;
    /**
     * Sets the icon of the menu element.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    icon?: ResourceStr;
    /**
     * Sets the symbol of the menu element.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    symbolIcon?: SymbolGlyphModifier;
    /**
     * If the value is true, the menu element is available and can respond to operations such as clicking.
     * If the value is false, the menu element is not available and click operations are not responded.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enabled?: boolean;
    /**
     * Method executed by the callback.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    action: () => void;
}
/**
 * Defines the attribute modifier.
 *
 * @interface AttributeModifier<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface AttributeModifier<T> {
    /**
     * Defines the normal update attribute function.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    applyNormalAttribute?: (instance: T) => void;
    /**
     * Defines the pressed update attribute function.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    applyPressedAttribute?: (instance: T) => void;
    /**
     * Defines the focused update attribute function.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    applyFocusedAttribute?: (instance: T) => void;
    /**
     * Defines the disabled update attribute function.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    applyDisabledAttribute?: (instance: T) => void;
    /**
     * Defines the selected update attribute function.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    applySelectedAttribute?: (instance: T) => void;
}
/**
 * Defines the content modifier.
 *
 * @interface ContentModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ContentModifier<T> {
    /**
     * Defining applyContent function.
     *
     * @returns { WrappedBuilder<[T]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    applyContent(): WrappedBuilder<Array<Object>>;
}
/**
 * Defines the common configuration.
 *
 * @interface CommonConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface CommonConfiguration<T> {
    /**
     * If the value is true, the contentModifier is available and can respond to operations such as triggerChange.
     *  If it is set to false, triggerChange operations are not responded.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enabled: boolean;
    /**
     * Obtains the contentModifier instance object
     *
     * @type { ContentModifier<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentModifier: ContentModifier<T>;
}
/**
 * Outline Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum OutlineStyle {
    /**
     * Shows as a solid line.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    SOLID = 0,
    /**
     * Shows as a series of short square dashed lines.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    DASHED = 1,
    /**
     * Displays as a series of dots with a radius of half the borderWidth.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    DOTTED = 2
}
/**
 * Defines the drag preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum DragPreviewMode {
    /**
     * Default preview mode, let system process preview scale.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    AUTO = 1,
    /**
     * Disable system scale to preview panel
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DISABLE_SCALE = 2,
    /**
     * Enable the default shadow effect of preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ENABLE_DEFAULT_SHADOW = 3,
    /**
     * Enable the default radius effect of preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ENABLE_DEFAULT_RADIUS = 4,
    /**
     * Enable the default gray effect on the dragging item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    ENABLE_DRAG_ITEM_GRAY_EFFECT = 5,
    /**
     * Enable the tile effect for multi drag, each dragged graph is display in the original relative position.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    ENABLE_MULTI_TILE_EFFECT = 6,
    /**
     * Enable the touch point calculation position based on final preview rect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW = 7
}
/**
 * Define drag start animation effect from drag preview to the handle drag image
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare enum DraggingSizeChangeEffect {
    /**
     * Default effect, no transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    DEFAULT = 0,
    /**
     * Only scaled transition, this parameter take effect when PREVIEW_MODE is not DISABLE_SCALE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    SIZE_TRANSITION = 1,
    /**
     * Scaled and content transition together, this size transition take effect when PREVIEW_MODE is not DISABLE_SCALE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    SIZE_CONTENT_TRANSITION = 2
}
/**
 * Define the menu pop-up policy
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum MenuPolicy {
    /**
     * Default value. The default logic of whether to pop up a menu depends on the scene.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DEFAULT = 0,
    /**
     * Hide pop up menu.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    HIDE = 1,
    /**
     * Show pop up menu.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SHOW = 2
}
/**
 * Defines the preview options.
 *
 * @interface DragPreviewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface DragPreviewOptions {
    /**
     * Drag preview mode.
     *
     * @type { ?(DragPreviewMode | Array<DragPreviewMode>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mode?: DragPreviewMode | Array<DragPreviewMode>;
    /**
     * Drag preview modifier.
     *
     * @type { ?ImageModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    modifier?: ImageModifier;
    /**
     * The flag for number showing.
     *
     * @type { ?(boolean | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    numberBadge?: boolean | number;
    /**
    * Drag start animation effect from drag preview to the handle drag image.
    *
    * @type { ?DraggingSizeChangeEffect }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    sizeChangeEffect?: DraggingSizeChangeEffect;
}
/**
 * Defines the drag options.
 *
 * @interface DragInteractionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface DragInteractionOptions {
    /**
    * Define whether to gather selected nodes in grid or list.
    *
    * @type { ?boolean }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    isMultiSelectionEnabled?: boolean;
    /**
    * Define whether to execute animation before preview floating.
    *
    * @type { ?boolean }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    defaultAnimationBeforeLifting?: boolean;
    /**
    * Config if auto scrolling should be triggered when the drag hovered on a scrollable controller's edge.
    *
    * @type { ?boolean }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    enableEdgeAutoScroll?: boolean;
    /**
    * Define whether to enable the haptic feedback when dragging, the default value is false.
    *
    * @type { ?boolean }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    enableHapticFeedback?: boolean;
    /**
    * Define whether to lifting trigger drag by finger.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    isLiftingDisabled?: boolean;
}
/**
 * Defines the drag preview configuration.
 *
 * @interface PreviewConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface PreviewConfiguration {
    /**
    * Define whether to only use for lifting.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    onlyForLifting?: boolean;
    /**
    * Define whether to delay create builder.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    delayCreating?: boolean;
}
/**
 * Define the options of invert
 *
 * @interface InvertOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface InvertOptions {
    /**
     * Defines the low value of threshold
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    low: number;
    /**
     * Defines the high value of threshold
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    high: number;
    /**
     * Defines the threshold
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    threshold: number;
    /**
     *Defines the threshold range
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    thresholdRange: number;
}
/**
 * Defines the type that can be undefined.
 *
 * @typedef { T | undefined } Optional<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type Optional<T> = T | undefined;
/**
 * Defines the TipsMessageType property with ResourceStr and StyledString.
 *
 * @typedef { ResourceStr | StyledString } TipsMessageType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type TipsMessageType = ResourceStr | StyledString;
/**
 * Define the options for background image.
 *
 * @interface BackgroundImageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface BackgroundImageOptions {
    /**
     * Sets the synchronous or asynchronous mode for background image loading.
     * The default parameter type is bool, and the default value is false.
     *
     * @type { ?boolean }
     * @param { boolean } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    syncLoad?: boolean;
    /**
     * Set the repeat style of the background image.
     *
     * @type { ?ImageRepeat }
     * @param { ImageRepeat } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    repeat?: ImageRepeat;
}
/**
 * Define the options of background
 *
 * @interface BackgroundOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface BackgroundOptions {
    /**
     *Defines the align
     *
     * @type { ?Alignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    align?: Alignment;
}
export declare interface CommonMethod {
    /**
     * Sets the width of the current component.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    width(value: Length | undefined): this;
    /**
     * Sets the width of the current component.
     *
     * @param { Length | LayoutPolicy } widthValue
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    width(widthValue: Length | LayoutPolicy | undefined): this;
    /**
     * Sets the height of the current component.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    height(value: Length | undefined): this;
    /**
     * Sets the height of the current component.
     *
     * @param { Length | LayoutPolicy } heightValue
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    height(heightValue: Length | LayoutPolicy | undefined): this;
    /**
     * Sets the drawModifier of the current component.
     *
     * @param { DrawModifier | undefined } modifier - drawModifier used to draw, or undefined if it is not available.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    drawModifier(modifier: DrawModifier | undefined): this;
    /**
     * Sets the custom property of the current component.
     *
     * @param { string } name - the name of the custom property.
     * @param { Optional<Object> } value - the value of the custom property.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    customProperty(name: string | undefined, value: Object | undefined): this;
    /**
     * Expands the safe area.
     *
     * @param { Array<SafeAreaType> } types - Indicates the types of the safe area.
     * @param { Array<SafeAreaEdge> } edges - Indicates the edges of the safe area.
     * @returns { T } The component instance.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    expandSafeArea(types?: Array<SafeAreaType> | undefined, edges?: Array<SafeAreaEdge> | undefined): this;
    /**
     * Sets the response region of the current component.
     *
     * @param { Array<Rectangle> | Rectangle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    responseRegion(value: Array<Rectangle> | Rectangle | undefined): this;
    /**
     * Sets the mouse response region of current component
     *
     * @param { Array<Rectangle> | Rectangle } value
     * @returns { T } return the component attribute
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mouseResponseRegion(value: Array<Rectangle> | Rectangle | undefined): this;
    /**
     * The size of the current component.
     *
     * @param { SizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    size(value: SizeOptions | undefined): this;
    /**
     * constraint Size:
     * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
     *
     * @param { ConstraintSizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    constraintSize(value: ConstraintSizeOptions | undefined): this;
    /**
     * Defines the component's hit test behavior in touch events.
     *
     * @param { HitTestMode } value - the hit test mode.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hitTestBehavior(value: HitTestMode | undefined): this;
    /**
     * Defines the pre-touch test of sub component in touch events.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onChildTouchTest(event: ((value: Array<TouchTestInfo>) => TouchResult) | undefined): this;
    /**
     * Defines the weight of the component, according to which the remain part of main-axis is allocated self-adaptively
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    layoutWeight(value: number | string | undefined): this;
    /**
     * chain Weight
     *
     * @param { ChainWeightOptions } chainWeight
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    chainWeight(chainWeight: ChainWeightOptions | undefined): this;
    /**
     * Inner margin.
     *
     * @param { Padding | Length | LocalizedPadding } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    padding(value: Padding | Length | LocalizedPadding | undefined): this;
    /**
     * Inner safeArea padding.
     *
     * @param { Padding | LengthMetrics | LocalizedPadding } paddingValue - Indicates safeArea padding values
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding | undefined): this;
    /**
     * Outer Margin.
     *
     * @param { Margin | Length | LocalizedMargin } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    margin(value: Margin | Length | LocalizedMargin | undefined): this;
    /**
     * Background.
     *
     * @param { CustomBuilder } builder
     * @param { BackgroundOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    background(builder: CustomBuilder | undefined, options?: BackgroundOptions | undefined): this;
    /**
     * Background color
     *
     * @param { ResourceColor } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    backgroundColor(value: ResourceColor | undefined): this;
    /**
     * PixelRound
     *
     * @param { PixelRoundPolicy } value - indicates the pixel round policy.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    pixelRound(value: PixelRoundPolicy | undefined): this;
    /**
     * Background image
     * src: Image address url
     *
     * @param { ResourceStr | PixelMap } src
     * @param { ImageRepeat } repeat
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    backgroundImage(src: ResourceStr | PixelMap | undefined, repeat?: ImageRepeat | undefined): this;
    /**
     * Background image
     *
     * @param { ResourceStr | PixelMap } src - the background image source
     * @param { BackgroundImageOptions } options - config the options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    backgroundImage(src: ResourceStr | PixelMap | undefined, options?: BackgroundImageOptions | undefined): this;
    /**
     * Background image size
     *
     * @param { SizeOptions | ImageSize } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    backgroundImageSize(value: SizeOptions | ImageSize | undefined): this;
    /**
     * Background image position
     * x:Horizontal coordinate;y:Vertical axis coordinate.
     *
     * @param { Position | Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    backgroundImagePosition(value: Position | Alignment | undefined): this;
    /**
     * Background blur style.
     * blurStyle:Blur style type.
     *
     * @param { BlurStyle } value
     * @param { BackgroundBlurStyleOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    backgroundBlurStyle(value: BlurStyle | undefined, options?: BackgroundBlurStyleOptions | undefined): this;
    /**
     * Background blur style.
     * blurStyle:Blur style type.
     * sysOptions: system adaptive options.
     *
     * @param { Optional<BlurStyle> } style
     * @param { BackgroundBlurStyleOptions } [options]
     * @param { SystemAdaptiveOptions } [sysOptions]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    backgroundBlurStyle(style: BlurStyle | undefined, options?: BackgroundBlurStyleOptions | undefined, sysOptions?: SystemAdaptiveOptions | undefined): this;
    /**
     * options:background effect options.
     *
     * @param { BackgroundEffectOptions } options - options indicates the effect options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundEffect(options: BackgroundEffectOptions | undefined): this;
    /**
     * options:background effect options.
     * sysOptions: system adaptive options.
     *
     * @param { Optional<BackgroundEffectOptions> } options - options indicates the effect options.
     * @param { SystemAdaptiveOptions } [ sysOptions ] - system adaptive options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundEffect(options: BackgroundEffectOptions | undefined, sysOptions?: SystemAdaptiveOptions | undefined): this;
    /**
     * Background image resizable.
     * value:resizable options
     *
     * @param { ResizableOptions } value - Indicates the resizable options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundImageResizable(value: ResizableOptions | undefined): this;
    /**
     * Foreground effect.
     *
     * @param { ForegroundEffectOptions } options - options indicates the effect options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    foregroundEffect(options: ForegroundEffectOptions | undefined): this;
    /**
     * Unified visual effect interface.
     *
     * @param { VisualEffect } effect - Visual effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    visualEffect(effect: VisualEffect | undefined): this;
    /**
     * Filter applied to the background layer of the component.
     *
     * @param { Filter } filter - Filter effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundFilter(filter: Filter | undefined): this;
    /**
     * Filter applied to the foreground layer of the component.
     *
     * @param { Filter } filter - Filter effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    foregroundFilter(filter: Filter | undefined): this;
    /**
     * Filter applied to the compositing layer of the component.
     *
     * @param { Filter } filter - Filter effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    compositingFilter(filter: Filter | undefined): this;
    /**
     * Foreground blur style.
     * blurStyle:Blur style type.
     *
     * @param { BlurStyle } value
     * @param { ForegroundBlurStyleOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    foregroundBlurStyle(value: BlurStyle | undefined, options?: ForegroundBlurStyleOptions | undefined): this;
    /**
     * Foreground blur style.
     * blurStyle:Blur style type.
     * sysOptions: system adaptive options.
     *
     * @param { Optional<BlurStyle> } style
     * @param { ForegroundBlurStyleOptions } [options]
     * @param { SystemAdaptiveOptions } [sysOptions]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    foregroundBlurStyle(style: BlurStyle | undefined, options?: ForegroundBlurStyleOptions | undefined, sysOptions?: SystemAdaptiveOptions | undefined): this;
    /**
     * Opacity
     *
     * @param { number | Resource } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    opacity(value: number | Resource | undefined): this;
    /**
     * Border
     * width:Border width;color:Border color;radius:Border radius;
     *
     * @param { BorderOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    border(value: BorderOptions | undefined): this;
    /**
     * Border style
     *
     * @param { BorderStyle | EdgeStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    borderStyle(value: BorderStyle | EdgeStyles | undefined): this;
    /**
     * Border width
     *
     * @param { Length | EdgeWidths | LocalizedEdgeWidths } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths | undefined): this;
    /**
     * Border color
     *
     * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors | undefined): this;
    /**
     * Border radius
     *
     * @param { Length | BorderRadiuses | LocalizedBorderRadiuses } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses | undefined): this;
    /**
     * Border image
     *
     * @param { BorderImageOption } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    borderImage(value: BorderImageOption | undefined): this;
    /**
     * Outline
     * width:Outline width;color:Outline color;radius:Outline radius;style:Outline style;
     *
     * @param { OutlineOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    outline(value: OutlineOptions | undefined): this;
    /**
     * Outline style
     *
     * @param { OutlineStyle | EdgeOutlineStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    outlineStyle(value: OutlineStyle | EdgeOutlineStyles | undefined): this;
    /**
     * Outline width
     *
     * @param { Dimension | EdgeOutlineWidths } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    outlineWidth(value: Dimension | EdgeOutlineWidths | undefined): this;
    /**
     * Outline color
     *
     * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors | undefined): this;
    /**
     * Outline radius
     *
     * @param { Dimension | OutlineRadiuses } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    outlineRadius(value: Dimension | OutlineRadiuses | undefined): this;
    /**
     * Provides the general foreground color capability of UI components, and assigns color values
     * according to the characteristics of components.
     *
     * @param { ResourceColor | ColoringStrategy } value - indicates the color or color selection strategy
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    foregroundColor(value: ResourceColor | ColoringStrategy | undefined): this;
    /**
     * Trigger a click event when a click is clicked.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onClick(event: ((event: ClickEvent) => void) | undefined): this;
    /**
     * Trigger a click event when a click is clicked, move distance should smaller than distanceThreshold.
     *
     * @param { function } event - this function callback executed when the click action is recognized
     * @param { number } distanceThreshold - the distance threshold of finger's movement when detecting a click action
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onClick(event: Callback<ClickEvent> | undefined, distanceThreshold: number | undefined): this;
    /**
     * Trigger a hover event.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onHover(event: ((isHover: boolean, event: HoverEvent) => void) | undefined): this;
    /**
     * Trigger a hover move event.
     *
     * @param { Callback<HoverEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onHoverMove(event: Callback<HoverEvent> | undefined): this;
    /**
     * Trigger a accessibility hover event.
     *
     * @param { AccessibilityCallback } callback - A callback instance used when the component is touched after accessibility mode is enabled.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onAccessibilityHover(callback: AccessibilityCallback | undefined): this;
    /**
     * Set hover effect.
     *
     * @param { HoverEffect } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hoverEffect(value: HoverEffect | undefined): this;
    /**
     * Trigger a mouse event.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    onMouse(event: ((event: MouseEvent) => void) | undefined): this;
    /**
     * Trigger a touch event when touched.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onTouch(event: ((event: TouchEvent) => void) | undefined): this;
    /**
     * Keyboard input
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onKeyEvent(event: ((event: KeyEvent) => void) | undefined): this;
    /**
     * Keyboard input
     *
     * @param { Callback<KeyEvent, boolean> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onKeyEvent(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * Digital crown input.
     *
     * @param { Callback<CrownEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    onDigitalCrown(handler: Callback<CrownEvent> | undefined): this;
    /**
     * Handle keyboard events before input method events.
     *
     * @param { Callback<KeyEvent, boolean> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onKeyPreIme(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * Customize the handling and distribution of key events.
     *
     * @param { Callback<KeyEvent, boolean> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onKeyEventDispatch(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * Trigger a FocusAxisEvent.
     *
     * @param { Callback<FocusAxisEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    onFocusAxisEvent(event: Callback<FocusAxisEvent> | undefined): this;
    /**
     * Handle axis events.
     *
     * @param { Callback<AxisEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    onAxisEvent(event: Callback<AxisEvent> | undefined): this;
    /**
     * Set focusable.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    focusable(value: boolean | undefined): this;
    /**
     * Set nextFocus.
     *
     * @param { FocusMovement } nextStep
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    nextFocus(nextStep: FocusMovement | undefined): this;
    /**
     * Set TabStop on component focus
     *
     * @param { boolean } isTabStop
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    tabStop(isTabStop: boolean | undefined): this;
    /**
     * Trigger a event when got focus.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onFocus(event: (() => void) | undefined): this;
    /**
     * Trigger a event when lose focus.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onBlur(event: (() => void) | undefined): this;
    /**
     * Set focus index by key tab.
     *
     * @param { number } index
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    tabIndex(index: number | undefined): this;
    /**
     * Set default focused component when a page create.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    defaultFocus(value: boolean | undefined): this;
    /**
     * Set default focused component when focus on a focus group.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    groupDefaultFocus(value: boolean | undefined): this;
    /**
     * Set a component focused when the component be touched.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    focusOnTouch(value: boolean | undefined): this;
    /**
     * Set the component's focusBox style.
     *
     * @param { FocusBoxStyle } style
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    focusBox(style: FocusBoxStyle | undefined): this;
    /**
    * Set container as a focus group with a specific identifier.
    *
    * @param { string } id - focus scope identifier.
    * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    focusScopeId(id: string | undefined, isGroup?: boolean | undefined): this;
    /**
    * Set container as a focus group with a specific identifier.
    *
    * @param { string } id - focus scope identifier.
    * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false.
    * @param { boolean } [arrowStepOut] - whether the arrow keys can move focus from inside the focus group to outside,
    * only effective when isGroup is true, the default value is true.
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    focusScopeId(id: string | undefined, isGroup?: boolean | undefined, arrowStepOut?: boolean | undefined): this;
    /**
    * Set the focus priority of component in a specific focus scope.
    *
    * @param { string } scopeId
    * @param { FocusPriority } [priority] - the default value is AUTO
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    focusScopePriority(scopeId: string | undefined, priority?: FocusPriority | undefined): this;
    /**
     * animation
     *
     * @param { AnimateParam } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    animation(value: AnimateParam | undefined): this;
    /**
     * Transition parameter
     *
     * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    transition(value: TransitionEffect | undefined): this;
    /**
     * Set the transition effect of component when it appears and disappears.
     *
     * @param { TransitionEffect } effect - transition effect
     * @param { Optional<TransitionFinishCallback> } onFinish - transition finish callback.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    transition(effect: TransitionEffect | undefined, onFinish: TransitionFinishCallback | undefined): this;
    /**
     * Bind gesture recognition.
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    gesture(gesture: GestureType | undefined, mask?: GestureMask | undefined): this;
    /**
     * Binding Preferential Recognition Gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    priorityGesture(gesture: GestureType | undefined, mask?: GestureMask | undefined): this;
    /**
     * Binding gestures that can be triggered simultaneously with internal component gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    parallelGesture(gesture: GestureType | undefined, mask?: GestureMask | undefined): this;
    /**
     * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
     * The larger the blurring radius, the more blurring the content.
     * If the value is 0, the content blurring effect is not blurring.
     *
     * @param { number } value - value indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    blur(value: number | undefined, options?: BlurOptions | undefined): this;
    /**
     * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
     * The larger the blurring radius, the more blurring the content.
     * If the value is 0, the content blurring effect is not blurring.
     *
     * @param { Optional<number> } blurRadius - value indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates blur options.
     * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    blur(blurRadius: number | undefined, options?: BlurOptions | undefined, sysOptions?: SystemAdaptiveOptions | undefined): this;
    /**
     * Adds the content linear gradient blurring effect for the current component. The input parameter is the blurring radius.
     *
     * @param { number } value - the blurring radius.
     * The larger the blurring radius, the more blurring the content, and if the value is 0, the content blurring effect is not blurring.
     * @param { LinearGradientBlurOptions } options - the linear gradient blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    linearGradientBlur(value: number | undefined, options: LinearGradientBlurOptions | undefined): this;
    /**
     * Component motion blur interface.
     *
     * @param { MotionBlurOptions } value - the attributes of motion blur.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    motionBlur(value: MotionBlurOptions | undefined): this;
    /**
     * Adds a highlight effect to the current component.
     * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
     * The component is displayed as all white (percentage).
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    brightness(value: number | undefined): this;
    /**
     * Adds a contrast effect to the current component. The input parameter is the contrast value.
     * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    contrast(value: number | undefined): this;
    /**
     * Adds a grayscale effect to the current component.
     * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
     * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    grayscale(value: number | undefined): this;
    /**
     * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
     *
     * @param { Color | string | Resource } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    colorBlend(value: Color | string | Resource | undefined): this;
    /**
     * Adds a saturation effect to the current component.
     * The saturation is the ratio of the color-containing component to the achromatic component (gray).
     * The larger the color-containing component, the greater the saturation.
     * The larger the achromatic component, the smaller the saturation. (Percentage)
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    saturate(value: number | undefined): this;
    /**
     * Converts the image to sepia. Value defines the scale of the conversion.
     * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    sepia(value: number | undefined): this;
    /**
     * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
     * A value of 0% does not change the image. (Percentage)
     *
     * @param { number | InvertOptions } value - value indicates the scale of the conversion or the options of invert.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    invert(value: number | InvertOptions | undefined): this;
    /**
     * Sets system bar effect to the component.
     *
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    systemBarEffect(): this;
    /**
     * Adds the hue rotation effect to the current component.
     * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
     * If the value exceeds 360deg, the image is circled again.
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    hueRotate(value: number | string | undefined): this;
    /**
     * Add an attribute to control whether the shadows of the child nodes overlap each other.
     *
     * @param { boolean } value - true means the shadows of the child nodes overlap each other effect and drawn in batches.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    useShadowBatching(value: boolean | undefined): this;
    /**
    * Sets whether the component should apply the effects template defined by the parent effectComponent or window.
    * If multiple parent effectComponents are found, the nearest one will be used.
    * If no parent effectComponent is found, this method has no effect.
    *
    * @param { boolean } useEffect - true means the component should apply the effects template defined by the parent effectComponent or window.
    * @param { EffectType } effectType - the effect type of the effects template, defined by the parent effectComponent or window.
    * @returns { T } return the component attribute.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    useEffect(useEffect: boolean | undefined, effectType: EffectType | undefined): this;
    /**
     * Sets whether the component should apply the effects template defined by the parent effectComponent.
     * If multiple parent effectComponents are found, the nearest one will be used.
     * If no parent effectComponent is found, this method has no effect.
     *
     * @param { boolean } value - true means the component should apply the effects template.
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    useEffect(value: boolean | undefined): this;
    /**
     * Adds the background blur effect for the current component. The input parameter is the blur radius.
     * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
     *
     * @param { number } value - value indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates the backdrop blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    backdropBlur(value: number | undefined, options?: BlurOptions | undefined): this;
    /**
     * Adds the background blur effect for the current component. The input parameter is the blur radius.
     * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
     *
     * @param { Optional<number> } radius - radius indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates the backdrop blur options.
     * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    backdropBlur(radius: number | undefined, options?: BlurOptions | undefined, sysOptions?: SystemAdaptiveOptions | undefined): this;
    /**
     * Composite the contents of this view and its children into an offscreen cache before display in the screen.
     *
     * @param { boolean } value - if this view and its children need to composite into an offscreen cache.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    renderGroup(value: boolean | undefined): this;
    /**
     * Sets whether the component should remain stationary, reusing the results of the current frame's off-screen rendering.
     * If the input parameter is true, the component and subcomponent changes do not affect the display.
     *
     * @param { boolean } value - true means the component should remain stationary.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    freeze(value: boolean | undefined): this;
    /**
     * Set component translation.
     *
     * @param { TranslateOptions } value default:{x:0,y:0,z:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    translate(value: TranslateOptions | undefined): this;
    /**
     * Set component scaling.
     *
     * @param { ScaleOptions } value default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    scale(value: ScaleOptions | undefined): this;
    /**
     * Set component rotation.
     *
     * @param { RotateOptions } value default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    rotate(value: RotateOptions | undefined): this;
    /**
     * Sets the transformation matrix for the current component.
     *
     * @param { object } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    transform(value: object | undefined): this;
    /**
     * This callback is triggered when a component mounts a display.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onAppear(event: (() => void) | undefined): this;
    /**
     * This callback is triggered when component uninstallation disappears.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onDisAppear(event: (() => void) | undefined): this;
    /**
     * This callback is triggered when a component mounts to view tree.
     *
     * @param { Callback<void> } callback
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onAttach(callback: Callback<void> | undefined): this;
    /**
     * This callback is triggered when a component is detached from view tree.
     *
     * @param { Callback<void> } callback
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDetach(callback: Callback<void> | undefined): this;
    /**
     * This callback is triggered when the size or position of this component change finished.
     *
     * @param { function } event - event callback.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onAreaChange(event: ((oldValue: Area, newValue: Area) => void) | undefined): this;
    /**
     * Controls the display or hide of the current component.
     *
     * @param { Visibility } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    visibility(value: Visibility | undefined): this;
    /**
     * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    flexGrow(value: number | undefined): this;
    /**
     * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    flexShrink(value: number | undefined): this;
    /**
     * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    flexBasis(value: number | string | undefined): this;
    /**
     * Overrides the default configuration of alignItems in the Flex Layout container.
     *
     * @param { ItemAlign } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alignSelf(value: ItemAlign | undefined): this;
    /**
     * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    displayPriority(value: number | undefined): this;
    /**
     * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    zIndex(value: number | undefined): this;
    /**
     * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
     *
     * @param { string } id
     * @param { sharedTransitionOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    sharedTransition(id: string | undefined, options?: sharedTransitionOptions | undefined): this;
    /**
     * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
     *
     * @param { Direction } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    direction(value: Direction | undefined): this;
    /**
     * align
     *
     * @param { Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    align(value: Alignment | undefined): this;
    /**
     * position
     *
     * @param { Position | Edges | LocalizedEdges } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    position(value: Position | Edges | LocalizedEdges | undefined): this;
    /**
     * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
     *
     * @param { Position | LocalizedPosition} value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    markAnchor(value: Position | LocalizedPosition | undefined): this;
    /**
     * Coordinate offset relative to the layout completion position.
     * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
     *
     * @param { Position | Edges | LocalizedEdges } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    offset(value: Position | Edges | LocalizedEdges | undefined): this;
    /**
     * If the value is true, the component is available and can respond to operations such as clicking.
     *  If it is set to false, click operations are not responded.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    enabled(value: boolean | undefined): this;
    /**
     * Specifies the alignRules of relative container
     *
     * @param { AlignRuleOption } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alignRules(value: AlignRuleOption | undefined): this;
    /**
     * Specifies the localized alignRules of relative container
     *
     * @param { LocalizedAlignRuleOptions } alignRule
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alignRules(alignRule: LocalizedAlignRuleOptions | undefined): this;
    /**
     * Specifies the direction and style of chain in relative container
     *
     * @param { Axis } direction - indicates direction of the chain
     * @param { ChainStyle } style - indicates style of the chain
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    chainMode(direction: Axis | undefined, style: ChainStyle | undefined): this;
    /**
     * Specifies the aspect ratio of the current component.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    aspectRatio(value: number | undefined): this;
    /**
     * The click effect level and scale number.
     *
     * @param { ClickEffect | null } value
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    clickEffect(value: ClickEffect | null | undefined): this;
    /**
     * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
     * (To be triggered, press and hold for 170 milliseconds (ms))
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDragStart(event: ((event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged to the range of the component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDragEnter(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the drag moves within the range of a placeable component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDragMove(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged out of the component range.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDragLeave(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDrop(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { OnDragEventCallback } eventCallback - event callback.
     * @param { DropOptions } [dropOptions] - the drop handling options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDrop(eventCallback: OnDragEventCallback | undefined, dropOptions?: DropOptions | undefined): this;
    /**
     * This function is called when the drag event is end.
     *
     * @param { function } event - indicates the function to be called.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDragEnd(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * Allowed drop uniformData type for this node.
     *
     * @param { Array<UniformDataType> | null } value - the uniformData type for this node.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    allowDrop(value: Array<UniformDataType> | null | undefined): this;
    /**
     * Enable the selectable area can be dragged.
     *
     * @param { boolean } value - true means the area can be dragged, false means the area can't be dragged.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    draggable(value: boolean | undefined): this;
    /**
     * Set preview of the component for dragging process
     *
     * @param { CustomBuilder | DragItemInfo | string } value - preview of the component for dragging process
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    dragPreview(value: CustomBuilder | DragItemInfo | string | undefined): this;
    /**
     * Set preview of the component for dragging process
     *
     * @param { CustomBuilder | DragItemInfo | string } preview - preview of the component for dragging process
     * @param { PreviewConfiguration } config - drag preview configuration.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    dragPreview(preview: CustomBuilder | DragItemInfo | string | undefined, config?: PreviewConfiguration | undefined): this;
    /**
     * Set the selectable area drag preview options.
     *
     * @param { DragPreviewOptions } value - preview options value.
     * @param { DragInteractionOptions } options - drag interaction options value.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    dragPreviewOptions(value: DragPreviewOptions | undefined, options?: DragInteractionOptions | undefined): this;
    /**
     * After binding, a callback is triggered when the preDrag status change finished.
     *
     * @param { Callback<PreDragStatus> } callback callback - The callback will be triggered when the preDrag status change.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    onPreDrag(callback: Callback<PreDragStatus> | undefined): this;
    /**
     * Add mask text to the current component. The layout is the same as that of the current component.
     *
     * @param { string | CustomBuilder | ComponentContent } value
     * @param { OverlayOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    overlay(value: string | CustomBuilder | ComponentContent | undefined, options?: OverlayOptions | undefined): this;
    /**
     * Linear Gradient
     * angle: Angle of Linear Gradient. The default value is 180;
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     * colors: Color description for gradients.
     * repeating: repeating. The default value is false
     *
     * Anonymous Object Rectification.
     * @param { LinearGradientOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    linearGradient(value: LinearGradientOptions | undefined): this;
    /**
     * Angle Gradient
     * center:is the center point of the angle gradient
     * start:Start point of angle gradient. The default value is 0
     * end:End point of angle gradient. The default value is 0
     * rotating:rotating. The default value is 0
     * colors:Color description for gradients
     * repeating:repeating. The default value is false
     *
     * Anonymous Object Rectification.
     * @param { SweepGradientOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    sweepGradient(value: SweepGradientOptions | undefined): this;
    /**
     * Radial Gradient
     * center:Center point of radial gradient
     * radius:Radius of Radial Gradient. value range [0, +∞)
     * colors:Color description for gradients
     * repeating: Refill. The default value is false
     *
     * Anonymous Object Rectification.
     * @param { RadialGradientOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    radialGradient(value: RadialGradientOptions | undefined): this;
    /**
     * Set the motion path of the component
     * path:Motion path for displacement animation, using the svg path string.
     * from:Start point of the motion path. The default value is 0.0.
     * to:End point of the motion path. The default value is 1.0.
     * rotatable:Whether to follow the path for rotation.
     *
     * @param { MotionPathOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    motionPath(value: MotionPathOptions | undefined): this;
    /**
     * Add a shadow effect to the current component
     *
     * @param { ShadowOptions | ShadowStyle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    shadow(value: ShadowOptions | ShadowStyle | undefined): this;
    /**
     * Add a blendMode effect to the current component
     *
     * @param { BlendMode } value - Different hybrid modes
     * @param { BlendApplyType } [type] - Different blend apply type
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    blendMode(value: BlendMode | undefined, type?: BlendApplyType | undefined): this;
    /**
     * Add a blendMode effect to the current component.Cannot be used together with the blendMode interface.
     *
     * @param { BlendMode | Blender } effect - When the effect type is BlendMode type, define Different hybrid modes.
     * When the effect type is Blender type, Define the corresponding blending effect.
     * @param { BlendApplyType } [type] - Different blend apply type
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    advancedBlendMode(effect: BlendMode | Blender | undefined, type?: BlendApplyType | undefined): this;
    /**
     * Whether to crop the sub components beyond the current component range.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    clip(value: boolean | undefined): this;
    /**
    * The current component is cropped according to the specified shape.
    *
    * @param { CircleShape | EllipseShape | PathShape | RectShape } value - indicates the shape of the clip.
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    clipShape(value: CircleShape | EllipseShape | PathShape | RectShape | undefined): this;
    /**
     * Sets the mask of the current component.
     *
     * @param { ProgressMask } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mask(value: ProgressMask | undefined): this;
    /**
     * Applies a mask of the specified shape to the current assembly.
     *
     * @param { CircleShape | EllipseShape | PathShape | RectShape } value - indicates the shape of the mask.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    maskShape(value: CircleShape | EllipseShape | PathShape | RectShape | undefined): this;
    /**
     * Key. User can set an key to the component to identify it.
     *
     * @param { string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     * @test
     */
    key(value: string | undefined): this;
    /**
     * Id. User can set an id to the component to identify it.
     *
     * @param { string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    id(value: string | undefined): this;
    /**
     * geometryTransition
     *
     * @param { string } id
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    geometryTransition(id: string | undefined): this;
    /**
     * Shared geometry transition
     *
     * @param { string } id - geometry transition id
     * @param { GeometryTransitionOptions } options - Indicates the options of geometry transition.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    geometryTransition(id: string | undefined, options?: GeometryTransitionOptions | undefined): this;
    /**
    * Tips control
    *
    * @param { TipsMessageType } message
    * @param { TipsOptions } [options]
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    bindTips(message: TipsMessageType | undefined, options?: TipsOptions | undefined): this;
    /**
     * Popup control
     *
     * @param { boolean } show
     * @param { PopupOptions | CustomPopupOptions } popup
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bindPopup(show: boolean | undefined, popup: PopupOptions | CustomPopupOptions | undefined): this;
    /**
     * Menu control
     *
     * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
     * @param { MenuOptions } options - Indicates the options of menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bindMenu(content: Array<MenuElement> | CustomBuilder | undefined, options?: MenuOptions | undefined): this;
    /**
     * Menu control
     *
     * @param { boolean } isShow true means display menu, false means hide menu.
     * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
     * @param { MenuOptions } options - Indicates the options of menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bindMenu(isShow: boolean | undefined, content: Array<MenuElement> | CustomBuilder | undefined, options?: MenuOptions | undefined): this;
    /**
     * ContextMenu control
     *
     * @param { CustomBuilder } content - Indicates the content of context menu.
     * @param { ResponseType } responseType - Indicates response type of context menu.
     * @param { ContextMenuOptions } options - Indicates the options of context menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bindContextMenu(content: CustomBuilder | undefined, responseType: ResponseType | undefined, options?: ContextMenuOptions | undefined): this;
    /**
     * ContextMenu control
     *
     * @param { boolean } isShown - true means display content, false means hide content.
     * @param { CustomBuilder } content - Indicates the content of context menu.
     * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bindContextMenu(isShown: boolean | undefined, content: CustomBuilder | undefined, options?: ContextMenuOptions | undefined): this;
    /**
     * Bind content cover
     *
     * @param { boolean } isShow - true means display content, false means hide content.
     * @param { CustomBuilder } builder - the content to be displayed.
     * @param { ModalTransition } type - transition type.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bindContentCover(isShow: boolean | undefined, builder: CustomBuilder | undefined, type?: ModalTransition | undefined): this;
    /**
     * Bind content cover
     *
     * @param { boolean } isShow - true means display content, false means hide content.
     * @param { CustomBuilder } builder - the content to be displayed.
     * @param { ContentCoverOptions } options - options of content cover.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bindContentCover(isShow: boolean | undefined, builder: CustomBuilder | undefined, options?: ContentCoverOptions | undefined): this;
    /**
     * Bind sheet
     *
     * @param { boolean } isShow - true means display sheet, false means hide sheet.
     * @param { CustomBuilder } builder - the sheet to be displayed.
     * @param { SheetOptions } options - options of sheet.
     * @returns { T } - template type
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bindSheet(isShow: boolean | undefined, builder: CustomBuilder | undefined, options?: SheetOptions | undefined): this;
    /**
     * Sets styles for component state.
     *
     * @param { StateStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    stateStyles(value: StateStyles | undefined): this;
    /**
     * id for distribute identification.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    restoreId(value: number | undefined): this;
    /**
     * Trigger a visible area change event.
     *
     * @param { Array<number> } ratios
     * @param { VisibleAreaChangeCallback } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onVisibleAreaChange(ratios: Array<number> | undefined, event: VisibleAreaChangeCallback | undefined): this;
    /**
     * Set or reset the callback which is triggered when the visibleArea of component changed.
     * The interval between two visible area change callbacks will not be less than the expected update interval.
     *
     * @param { VisibleAreaEventOptions } options - The options for the visibility event.
     * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
     * If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onVisibleAreaApproximateChange(options: VisibleAreaEventOptions | undefined, event: VisibleAreaChangeCallback | undefined): this;
    /**
     * Set the spherical effect of the component.
     *
     * @param { number } value - set the degree of spherical effect, value range [0, 1].
     * If the value is 0, the component keep same, else the value is 1, component are fully spherical.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    sphericalEffect(value: number | undefined): this;
    /**
     * Set the light up effect of the component
     *
     * @param { number } value - set the degree to which the component lights up, value range [0, 1].
     * The color brightness in the component rendering content area is greater than the value and can be displayed, otherwise it will not be displayed.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lightUpEffect(value: number | undefined): this;
    /**
     * Set the edge pixel stretch effect of the Component.
     *
     * @param { PixelStretchEffectOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    pixelStretchEffect(options: PixelStretchEffectOptions | undefined): this;
    /**
     * Sets hot keys
     *
     * @param { string | FunctionKey } value - Character of the combination key.
     * @param { Array<ModifierKey> } keys - The modifier keys modify the action of key when the key are pressed at the same time.
     * @param { function } [action] - Callback function, triggered when the shortcut keyboard is pressed.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    keyboardShortcut(value: string | FunctionKey | undefined, keys: Array<ModifierKey> | undefined, action?: (() => void) | undefined): this;
    /**
     * Sets accessibilityGroup
     *
     * @param { boolean } value - set group with accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityGroup(value: boolean | undefined): this;
    /**
     * Sets accessibilityGroup
     *
     * @param { boolean } isGroup - set group with accessibility
     * @param { AccessibilityOptions } accessibilityOptions - accessibilityOptions for accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityGroup(isGroup: boolean | undefined, accessibilityOptions: AccessibilityOptions | undefined): this;
    /**
     * Sets accessibilityText
     *
     * @param { string } value - set accessibility text
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityText(value: string | undefined): this;
    /**
     * Sets accessibility next focus id
     * @param { string } nextId - set component next accessibility focus id
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityNextFocusId(nextId: string | undefined): this;
    /**
     * Sets the accessibility default foucs flag
     * @param { boolean } focus - if the component is accessibility default focus,focus set true
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityDefaultFocus(focus: boolean | undefined): this;
    /**
     * Sets accessibility same page mode
     * @param { AccessibilitySamePageMode } pageMode - accessibility same page mode
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityUseSamePage(pageMode: AccessibilitySamePageMode | undefined): this;
    /**
     * Sets accessibilityScrollTriggerable
     * @param { boolean } isTriggerable - set property of supporting scroll in accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityScrollTriggerable(isTriggerable: boolean | undefined): this;
    /**
     * Sets accessibilityText
     *
     * @param { Resource } text - set accessibility text
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityText(text: Resource | undefined): this;
    /**
     * Sets accessibility role,role indicates the custom type of the component
     * @param { AccessibilityRoleType } role - set accessibility component type
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityRole(role: AccessibilityRoleType | undefined): this;
    /**
     * Register accessibility focus callback,when the component is focused or out of focus,the callback will be executed
     * @param { AccessibilityFocusCallback } callback - accessibility focus callback function
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onAccessibilityFocus(callback: AccessibilityFocusCallback | undefined): this;
    /**
     * Sets accessibilityTextHint
     *
     * @param { string } value - set accessibility text hint
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityTextHint(value: string | undefined): this;
    /**
     * Sets accessibilityDescription
     *
     * @param { string } value - set description of accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityDescription(value: string | undefined): this;
    /**
     * Sets accessibilityDescription
     *
     * @param { Resource } description - set description of accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityDescription(description: Resource | undefined): this;
    /**
     * Sets accessibilityLevel
     *
     * @param { string } value - set accessibility level
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityLevel(value: string | undefined): this;
    /**
     * Sets accessibilityVirtualNode
     *
     * @param { CustomBuilder } builder - set virtual node of accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityVirtualNode(builder: CustomBuilder | undefined): this;
    /**
     * Sets accessibilityChecked
     *
     * @param { boolean } isCheck - set accessibility checked status
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityChecked(isCheck: boolean | undefined): this;
    /**
     * Sets accessibilitySelected
     *
     * @param { boolean } isSelect - set accessibility selected status
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilitySelected(isSelect: boolean | undefined): this;
    /**
     * Sets obscured
     *
     * @param { Array<ObscuredReasons> } reasons - reasons of obscuration
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    obscured(reasons: Array<ObscuredReasons> | undefined): this;
    /**
     * Reuse id is used for identify the reuse type for each custom node.
     *
     * @param { string } id - The id for reusable custom node.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    reuseId(id: string | undefined): this;
    /**
    * Reuse id is used for identify the reuse type of each @ComponentV2 custom component, which can give user control of sub-component recycle and reuse.
    *
    * @param { ReuseOptions } options - The configuration parameter for reusable custom component.
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    reuse(options: ReuseOptions | undefined): this;
    /**
     * Sets how content is drawn within nodes duration animation
     *
     * @param { RenderFit } fitMode - The render fit mode of content.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    renderFit(fitMode: RenderFit | undefined): this;
    /**
     * Sets the gesture modifier.
     *
     * @param { GestureModifier } modifier
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    gestureModifier(modifier: GestureModifier | undefined): this;
    /**
     * Adds a background dynamic light up effect to the current component.
     *
     * @param { BackgroundBrightnessOptions } params - params indicates BackgroundBrightnessOptions
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    backgroundBrightness(params: BackgroundBrightnessOptions | undefined): this;
    /**
     * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
     *
     * @param { function } callback - A callback instance used when a gesture bound to this component will be accepted.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onGestureJudgeBegin(callback: ((gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult) | undefined): this;
    /**
     * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
     *
     * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback | undefined): this;
    /**
     * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
     *
     * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
     * @param { boolean } exposeInnerGesture - This parameter is a flag. This flag determines whether to expose internal gestures.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback | undefined, exposeInnerGesture: boolean | undefined): this;
    /**
     * In the touch test phase, the recognizer is selected to form a parallel relationship with other recognizers on the response chain.
     *
     * @param { ShouldBuiltInRecognizerParallelWithCallback } callback - A callback instance used when a component is doing touch test.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback | undefined): this;
    /**
     * Events are monopolized by components.
     *
     * @param { boolean } monopolize - indicate the monopoly of events
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    monopolizeEvents(monopolize: boolean | undefined): this;
    /**
     * When the component does a touch test, a user-defined callback is triggered.
     *
     * @param { Callback<TouchEvent, HitTestMode> } callback - A callback instance used when the component does a touch test.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onTouchIntercept(callback: Callback<TouchEvent, HitTestMode> | undefined): this;
    /**
     * This callback is triggered when the size of this component change finished.
     *
     * @param { SizeChangeCallback } event - event callback.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onSizeChange(event: SizeChangeCallback | undefined): this;
    /**
     * Accessibility focus draw level, and the default value is FocusDrawLevel.SELF.
     *
     * @param { FocusDrawLevel } drawLevel - indicates accessibility focus draw level.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel | undefined): this;
}
/**
 * CommonAttribute for ide.
 *
 * @typedef  { CommonMethod } CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type CommonAttribute = CommonMethod;
/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => Object | undefined) | undefined } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type CustomBuilder = (() => Object | undefined) | undefined;
/**
 * Defines the OverlayOptions interface.
 *
 * @typedef OverlayOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface OverlayOptions {
    /**
     * Defines align type.
     *
     * @type { ?Alignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    align?: Alignment;
    /**
     * Defines offset type.
     *
     * @type { ?OverlayOffset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    offset?: OverlayOffset;
}
/**
 * Defines the OverlayOffset.
 *
 * @typedef OverlayOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface OverlayOffset {
    /**
     * Defines x.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    x?: number;
    /**
     * Defines y.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    y?: number;
}
/**
 * Defines the segment of blur.
 * The first element in the tuple means fraction.
 * The range of this value is [0,1]. A value of 1 means opaque and 0 means completely transparent.
 * The second element means the stop position.
 * The range of this value is [0,1]. A value of 1 means region ending position and 0 means region starting position.
 *
 * @typedef { [ number, number ] } FractionStop
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export type FractionStop = [
    number,
    number
];
export declare interface CommonShapeMethod extends CommonMethod {
    /**
     * border Color
     *
     * @param { ResourceColor } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    stroke(value: ResourceColor | undefined): this;
    /**
     * Fill color.
     *
     * @param { ResourceColor } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fill(value: ResourceColor | undefined): this;
    /**
     * Offset from the start point of the border drawing.
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    strokeDashOffset(value: number | string | undefined): this;
    /**
     * Path endpoint drawing style.
     *
     * @param { LineCapStyle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    strokeLineCap(value: LineCapStyle | undefined): this;
    /**
     * Border corner drawing style.
     *
     * @param { LineJoinStyle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    strokeLineJoin(value: LineJoinStyle | undefined): this;
    /**
     * Limits for drawing acute angles as bevels
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    strokeMiterLimit(value: number | string | undefined): this;
    /**
     * Sets the opacity of the border.
     *
     * @param { number | string | Resource } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    strokeOpacity(value: number | string | Resource | undefined): this;
    /**
     * fill Opacity
     *
     * @param { number | string | Resource } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fillOpacity(value: number | string | Resource | undefined): this;
    /**
     * Sets the width of the dividing line.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    strokeWidth(value: Length | undefined): this;
    /**
     * Indicates whether to enable anti-aliasing
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    antiAlias(value: boolean | undefined): this;
    /**
     * Sets the gap for the border.
     *
     * @param { Array<Object> } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    strokeDashArray(value: Array<Object> | undefined): this;
}
/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface LinearGradient {
    /**
     * Linear Gradient Angle
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    angle?: number | string;
    /**
     * Linear Gradient Direction
     *
     * @type { ?GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    direction?: GradientDirection;
    /**
     * Linear Gradient Colors
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    colors: Array<[
        ResourceColor,
        number
    ]>;
    /**
     * Linear Gradient Repeating
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    repeating?: boolean;
}
/**
 * Defines the pixel round property.
 *
 * @interface PixelRoundPolicy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface PixelRoundPolicy {
    /**
     * start property.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    start?: PixelRoundCalcPolicy;
    /**
     * top property.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    top?: PixelRoundCalcPolicy;
    /**
     * end property.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    end?: PixelRoundCalcPolicy;
    /**
     * bottom property.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    bottom?: PixelRoundCalcPolicy;
}
/**
 * Linear Gradient Blur Interface
 *
 * @interface LinearGradientBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface LinearGradientBlurOptions {
    /**
     * Percentage of blurring effect.
     *
     * @type { FractionStop[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    fractionStops: FractionStop[];
    /**
     * Direction of linear gradient blur.
     *
     * @type { GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    direction: GradientDirection;
}
/**
 * Define motion blur anchor coordinates.
 *
 * @interface MotionBlurAnchor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface MotionBlurAnchor {
    /**
     * Define anchor coordinate x-value.Value range [0.0, 1.0].
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    x: number;
    /**
     * Define anchor coordinate y-value.Value range [0.0, 1.0].
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    y: number;
}
/**
 * Define motion blur options.
 *
 * @interface MotionBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface MotionBlurOptions {
    /**
     * Define the size of motion blur radius.The range of this value is  [0.0, ∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    radius: number;
    /**
     * Define motion blur anchor coordinates.
     *
     * @type { MotionBlurAnchor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    anchor: MotionBlurAnchor;
}
/**
 * Sub component layout info.
 *
 * @extends SizeResult
 * @interface GeometryInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface GeometryInfo extends SizeResult {
    /**
     * Sub component borderWidth info.
     *
     * @type { EdgeWidth }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderWidth: EdgeWidth;
    /**
     * Sub component margin info.
     *
     * @type { Margin }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    margin: Margin;
    /**
     * Sub component padding info.
     *
     * @type { Padding }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    padding: Padding;
}
/**
 * Sub component info passed from framework when layout happens.
 *
 * @interface Layoutable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface Layoutable {
    /**
     * Measurement result of the child component.
     *
     * @type { MeasureResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    measureResult: MeasureResult;
    /**
     * Unique ID of the child component.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    uniqueId?: number;
    /**
     * Call this layout method in onLayout callback to assign layout info to sub component.
     *
     * @param { Position } position
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    layout(position: Position): void;
    /**
     * Call this method to get the margin of sub component.
     *
     * @returns { DirectionalEdgesT<number> } the margin of sub component, unit is vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getMargin(): DirectionalEdgesT<number>;
    /**
     * Call this method to get the padding of sub component.
     *
     * @returns { DirectionalEdgesT<number> } the padding of sub component, unit is vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getPadding(): DirectionalEdgesT<number>;
    /**
     * Call this method to get the borderWidth of sub component.
     *
     * @returns { DirectionalEdgesT<number> } the borderWidth of sub component, unit is vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getBorderWidth(): DirectionalEdgesT<number>;
}
/**
 * Sub component info passed from framework when measure happens.
 *
 * @interface Measurable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface Measurable {
    /**
     * Unique ID of the child component.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    uniqueId?: number;
    /**
     * Call this measure method in onMeasure callback to supply sub component size.
     *
     * @param { ConstraintSizeOptions } constraint
     * @returns { MeasureResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    measure(constraint: ConstraintSizeOptions): MeasureResult;
    /**
     * Call this method to get the margin of sub component.
     *
     * @returns { DirectionalEdgesT<number> } the margin of sub component, unit is vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getMargin(): DirectionalEdgesT<number>;
    /**
     * Call this method to get the padding of sub component.
     *
     * @returns { DirectionalEdgesT<number> } the padding of sub component, unit is vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getPadding(): DirectionalEdgesT<number>;
    /**
     * Call this method to get the borderWidth of sub component.
     *
     * @returns { DirectionalEdgesT<number> } the borderWidth of sub component, unit is vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getBorderWidth(): DirectionalEdgesT<number>;
}
/**
 * Sub component SizeResult info.
 *
 * @interface SizeResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SizeResult {
    /**
     * Width obtained from the measurement result.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    width: number;
    /**
     * Height obtained from the measurement result.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    height: number;
}
/**
 * Sub component MeasureResult info.
 *
 * @extends SizeResult
 * @interface MeasureResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface MeasureResult extends SizeResult {
}
/**
 * The navigation destination information.
 *
 * @typedef {uiobserver.NavDestinationInfo} NavDestinationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type NavDestinationInfo = uiobserver.NavDestinationInfo;
/**
 * The navigation information.
 *
 * @typedef {  uiobserver.NavigationInfo } NavigationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type NavigationInfo = uiobserver.NavigationInfo;
/**
 * The router page information.
 *
 * @typedef {uiobserver.RouterPageInfo} RouterPageInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type RouterPageInfo = uiobserver.RouterPageInfo;
/**
 * VisualEffect
 *
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.VisualEffect } VisualEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type VisualEffect = uiEffect.VisualEffect;
/**
 * Filter
 *
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.Filter } Filter
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type Filter = uiEffect.Filter;
/**
 * Blender
 *
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.Blender } Blender
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export type Blender = uiEffect.Blender;
/**
 * Import the DialogController type from promptAction.
 *
 * @typedef { promptAction.DialogController } PromptActionDialogController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export type PromptActionDialogController = promptAction.DialogController;
/**
 * Rect info.
 *
 * @interface RectResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface RectResult {
    /**
     * x:Horizontal coordinate relative to the component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    x: number;
    /**
     * y:Vertical axis coordinate relative to the component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    y: number;
    /**
     * Get the width of the current textRect.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    width: number;
    /**
     * Get the height of the current textRect.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    height: number;
}
/**
 * CaretOffset info.
 *
 * @interface CaretOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface CaretOffset {
    /**
     * Get the index of the CaretOffset
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    index: number;
    /**
     * Get the x of the relative position.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    x: number;
    /**
     * Get the y of the relative position.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    y: number;
}
/**
 * Defines the span options of TextContentController.
 *
 * @interface TextContentControllerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextContentControllerOptions {
    /**
     * the offset that add a text at.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    offset?: number;
}
/**
 * TextContentControllerBase
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare abstract class TextContentControllerBase {
    /**
     * Get the index and relative position of the CaretOffset.
     *
     * @returns { CaretOffset } index and relative position of the CaretOffset.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getCaretOffset(): CaretOffset;
    /**
     * Get the start and end positions of the text content.
     *
     * @returns { RectResult } Text content rect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getTextContentRect(): RectResult;
    /**
     * Get the lines number of the text content.
     *
     * @returns { number } Text content line count
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getTextContentLineCount(): number;
    /**
     * Add a text.
     *
     * @param { string } text - text value.
     * @param { TextContentControllerOptions } [textOperationOptions] - operation info.
     * @returns { number } caret index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    addText(text: string, textOperationOptions?: TextContentControllerOptions): number;
    /**
     * Delete text in TextRange.
     *
     * @param { TextRange } [range] - range for deleting.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    deleteText(range?: TextRange): void;
    /**
     * Gets the selected range of text content.
     *
     * @returns { TextRange } range for selecting.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getSelection(): TextRange;
    /**
     * Clear the content of preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    clearPreviewText(): void;
    /**
     * Gets the text content of the selected range.
     *
     * @param { TextRange } [range] - selected range.
     * @returns { string } text content of the selected range.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    getText(range?: TextRange): string;
}
/**
 * Enum of scrollable containers' content clip mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ContentClipMode {
    /**
     * Clip to content rect inside margin & padding.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CONTENT_ONLY = 0,
    /**
     * Clip to scrollable's outer rect, including padding but inside margin.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    BOUNDARY = 1,
    /**
     * Clip to the safeArea of scrollable container.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SAFE_AREA = 2
}
export declare interface ScrollableCommonMethod extends CommonMethod {
    /**
     * Scrollbar status.
     *
     * @param { BarState } barState - Scrollbar status.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollBar(barState: BarState | undefined): this;
    /**
     * Color of the scrollbar.
     *
     * @param { Color | number | string } color - Color of the scrollbar.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollBarColor(color: Color | number | string | undefined): this;
    /**
     * Width of the scrollbar.
     *
     * @param { number | string } value  - Width of the scrollbar.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollBarWidth(value: number | string | undefined): this;
    /**
     * Edge scrolling effect.
     *
     * @param { EdgeEffect } edgeEffect - edge scrolling effect.
     * @param { EdgeEffectOptions } options - edge scrolling effect options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    edgeEffect(edgeEffect: EdgeEffect | undefined, options?: EdgeEffectOptions | undefined): this;
    /**
     * Called when setting whether to enable fading Edge effect.
     *
     * @param { Optional<boolean> } enabled - Whether to turn on the edge fade effect
     * @param { FadingEdgeOptions } [options] - The options of fadingEdge.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fadingEdge(enabled: boolean | undefined, options?: FadingEdgeOptions | undefined): this;
    /**
     * Nested scrolling options.
     *
     * @param { NestedScrollOptions } value - options for nested scrolling.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    nestedScroll(value: NestedScrollOptions | undefined): this;
    /**
     * Whether to support scroll gestures by finger or mouse.
     *
     * @param { boolean } value - Whether to support scroll gestures by finger or mouse.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableScrollInteraction(value: boolean | undefined): this;
    /**
     * Friction coefficient.
     *
     * @param { number | Resource } value - friction coefficient.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    friction(value: number | Resource | undefined): this;
    /**
     * Called when the scrollable will scroll.
     *
     * @param { Optional<OnWillScrollCallback> } handler - callback of scrollable.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillScroll(handler: OnWillScrollCallback | undefined): this;
    /**
     * Called when the scrollable did scroll.
     *
     * @param { OnScrollCallback } handler - callback of scrollable,
     * scrollOffset is offset this frame did scroll, scrollState is current scroll state.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onDidScroll(handler: OnScrollCallback | undefined): this;
    /**
     * Called when the scrollable reaches the start position.
     *
     * @param { function } event - Callback function, triggered when the scrollable reaches the start position.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onReachStart(event: (() => void) | undefined): this;
    /**
     * Called when the scrollable reaches the end position.
     *
     * @param { function } event - Callback function, triggered when the scrollable reaches the end position.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onReachEnd(event: (() => void) | undefined): this;
    /**
     * Called when the scrollable starts scrolling.
     *
     * @param { function } event - Callback function, triggered when the scrollable starts scrolling.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollStart(event: (() => void) | undefined): this;
    /**
     * Called when the scrollable stops scrolling.
     *
     * @param { function } event - Callback function, triggered when the scrollable stops scrolling.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollStop(event: (() => void) | undefined): this;
    /**
     * Limit the max speed when fling.
     *
     * @param { number } speedLimit - Max fling speed, the minimum value is 0, the maximum value is not limited.
     *                                The unit is vp/s.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    flingSpeedLimit(speedLimit: number | undefined): this;
    /**
     * Clip the content of the scrollable container, excluding background.
     *
     * @param { ContentClipMode | RectShape } clip - A value from enum ContentClipMode or a customized clip rect.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    clipContent(clip: ContentClipMode | RectShape | undefined): this;
    /**
     * Set the sensitivity of rotating crown.
     *
     * @param { Optional<CrownSensitivity> } sensitivity - The sensitivity of rotating crown, default value is { MEDIUM }.
     * @returns { T } The component instance.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * Controls whether the scrollable scrolls back to top when status bar is clicked.
     *
     * @param { boolean } backToTop - whether the scrollable scrolls back to top when status bar is clicked.
     * The default value is false.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backToTop(backToTop: boolean | undefined): this;
}
/**
 * The actual offset by which the scrollable scrolls.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class ScrollResult {
    /**
     * Actual offset by which the scrollable scrolls in vp.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    offsetRemain: number;
}
/**
 * Called before scroll to allow developer to control real offset the Scrollable can scroll.
 *
 * @typedef { function } OnWillScrollCallback
 * @param { number } scrollOffset - offset this frame will scroll, which may or may not be reached.
 * @param { ScrollState } scrollState - current scroll state.
 * @param { ScrollSource } scrollSource - source of current scroll.
 * @returns { void | ScrollResult } the remain offset for the scrollable,
 *     same as scrollOffset when no ScrollResult is returned.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnWillScrollCallback = (scrollOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => undefined | ScrollResult;
/**
  * On scroll callback using in scrollable onDidScroll.
  *
  * @typedef { function } OnScrollCallback
  * @param { number } scrollOffset - offset this frame did scroll.
  * @param { ScrollState } scrollState - current scroll state.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 20
  */
export type OnScrollCallback = (scrollOffset: number, scrollState: ScrollState) => void;
/**
 * Defines the onMove callback.
 *
 * @typedef { function } OnMoveHandler
 * @param { number } from - Index number for moving elements.
 * @param { number } to - Target index number for moving elements.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnMoveHandler = (from: number, to: number) => void;
/**
 * Define item drag event handler.
 *
 * @interface ItemDragEventHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ItemDragEventHandler {
    /**
     * This callback is triggered when the item is long pressed.
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onLongPress?: Callback<number>;
    /**
     * This callback is triggered when the item is dragged.
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDragStart?: Callback<number>;
    /**
     * This callback is triggered when an item is moved through other items.
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onMoveThrough?: OnMoveHandler;
    /**
     * This callback is triggered when the item is dropped.
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDrop?: Callback<number>;
}
/**
 * Define DynamicNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface DynamicNode {
    /**
     * Set the move action.
     *
     * @param { Optional<OnMoveHandler> } handler
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onMove(handler: Optional<OnMoveHandler>): this;
    /**
     * Set the move action.
     *
     * @param { Optional<OnMoveHandler> } handler
     * @param { ItemDragEventHandler } eventHandler
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onMove(handler: Optional<OnMoveHandler>, eventHandler: ItemDragEventHandler): this;
}
/**
 * Define EdgeEffect Options.
 *
 * @interface EdgeEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface EdgeEffectOptions {
    /**
     * Enable Sliding effect when component does not full screen.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    alwaysEnabled: boolean;
    /**
     * Set the effective edge of the edge effect.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    effectEdge?: number;
}
/**
 * Enumerates the effective edge of the edge effect.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum EffectEdge {
    /**
     * Effective only for the starting edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    START = 1,
    /**
     * Effective only for the end edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    END = 2
}
/**
 * Indicates children main size.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class ChildrenMainSize {
    /**
     * Creates an instance of ChildrenMainSize.
     *
     * @param { number } childDefaultSize - default main size, in vp. If the main axis is vertical, it indicates height.
     * If the main axis is horizontal, it indicates width.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(childDefaultSize: number);
    /**
     * Set default size.
     *
     * @param { number } value - default main size, in vp. If the main axis is vertical, it indicates height.
     * If the main axis is horizontal, it indicates width.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    set childDefaultSize(value: number);
    /**
     * Get default size
     *
     * @returns { number } - default main size, in vp. If the main axis is vertical, it indicates height.
     * If the main axis is horizontal, it indicates width.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    get childDefaultSize(): number;
    /**
     * Changes children main size by removing or replacing existing elements and/or adding new elements in place.
     *
     * @param { number } start - Zero-based index at which to start changing the children main size.
     * @param { number } [deleteCount] - Indicating the number of children main size to remove from start.
     * @param { Array<number> } [childrenSize] - Add the new children main size, beginning from start.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     * @example splice(1, 0, [100]), Insert a child after first child, the child's main size is 100vp.
     * splice(1, 1), Delete the second child.
     * splice(1, 2, [100, 100]), Change the main size of the second and third children to 100vp.
     */
    splice(start: number, deleteCount?: number, childrenSize?: Array<number>): void;
    /**
     * Updates main size for specified child.
     *
     * @param { number } index - index of child to be updated.
     * @param { number } childSize - new section options.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    update(index: number, childSize: number): void;
}
/**
 * Define BackgroundBrightness Options.
 *
 * @interface BackgroundBrightnessOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface BackgroundBrightnessOptions {
    /**
     * Rate represents the rate at which lightUpDegree
     * decreases with increasing pixel brightness.
     *
     * @type { number } -The default value is 0.0, value range: (0.0, +∞).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    rate: number;
    /**
     * LightUpDegree represents the degree of brightness
     * of the rgb value changes when its brightness
     * is 0.
     *
     * @type { number }  -The default value is 0.0, value range: [-1.0, 1.0].
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    lightUpDegree: number;
}
/**
 * PointLightStyle info
 *
 * @interface PointLightStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface PointLightStyle {
    /**
     * Defines the PointLight light intensity and position.
     *
     * @type { ?LightSource }
     * @default undefined
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    lightSource?: LightSource;
    /**
     * Defines the PointLight illuminated type.
     *
     * @type { ?IlluminatedType }
     * @default IlluminatedType.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    illuminated?: IlluminatedType;
    /**
     * Defines the PointLight bloom.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    bloom?: number;
}
/**
 * LightSource info
 *
 * @interface LightSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface LightSource {
    /**
     * Defines the PointLight light positionX.
     *
     * @type { Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    positionX: Dimension;
    /**
     * Defines the PointLight light positionX.
     *
     * @type { Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    positionY: Dimension;
    /**
     * Defines the PointLight light positionX.
     *
     * @type { Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    positionZ: Dimension;
    /**
     * Defines the PointLight light intensity.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    intensity: number;
    /**
     * Defines the PointLight light color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    color?: ResourceColor;
}
/**
 * Defining wrapBuilder function.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare function wrapBuilder<Args extends Array<Object>>(builder: (args: Args) => void): WrappedBuilder<Args>;
/**
 * Defines the WrappedBuilder class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class WrappedBuilder<Args extends Array<Object>> {
    /**
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    builder: (args: Args) => void;
    /**
     * @param { function } builder
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(builder: (args: Args) => void);
}
/**
 * Defines the overall animation parameters of the keyframe animation.
 *
 * @interface KeyframeAnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface KeyframeAnimateParam {
    /**
     * Animation delay time, in ms.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    delay?: number;
    /**
     * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    iterations?: number;
    /**
     * Callback invoked when the whole keyframe animation is complete or the ability is about to enter the background.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onFinish?: () => void;
    /**
     * Indicates expectedFrameRateRange of keyframe animation.
     *
     * @type { ?ExpectedFrameRateRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    expectedFrameRateRange?: ExpectedFrameRateRange;
}
/**
 * Defines a keyframe state.
 *
 * @interface KeyframeState
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface KeyframeState {
    /**
     * Animation duration of this keyframe, in ms.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    duration: number;
    /**
     * Animation curve of this keyframe.
     *
     * @type { ?(Curve | string | ICurve) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    curve?: Curve | string | ICurve;
    /**
     * The closure function to specify the terminating state of this keyframe.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    event: () => void;
}
/**
 * Defines the callback
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type Callback<T, V = void> = (data: T) => V;
/**
 * Defines the callback type used in hover events.
 * The value of isHover indicates whether the mouse is hovering over the component.
 * The value of event contains information about HoverEvent.
 *
 * @typedef { function } HoverCallback
 * @param { boolean } isHover
 * @param { HoverEvent} event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type HoverCallback = (isHover: boolean, event: HoverEvent) => void;
/**
 * Defines the callback type used in accessibility hover events.
 * The value of isHover indicates whether the touch is hovering over the component.
 * The value of event contains information about AccessibilityHoverEvent.
 *
 * @typedef { function } AccessibilityCallback
 * @param { boolean } isHover
 * @param { AccessibilityHoverEvent } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type AccessibilityCallback = (isHover: boolean, event: AccessibilityHoverEvent) => void;
/**
 * Defines the options about VisibleAreaEvent.
 *
 * @interface VisibleAreaEventOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface VisibleAreaEventOptions {
    /**
     * Each number in ratios indicates the value of visibility ratio. Each number in the Array value range in [0, 1].
     *
     * @type { Array<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ratios: Array<number>;
    /**
     * The value of expectedUpdateInterval indicates desired update period(ms).
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    expectedUpdateInterval?: number;
}
/**
 * Defines the callback type used in VisibleAreaChange events.
 *
 * @typedef { function } VisibleAreaChangeCallback
 * @param { boolean } isExpanding - Indicates the ratio of the visible area to its own area compared to the last change.
 * It is true as the ratio increases and false as the ratio decreases.
 * @param { number } currentRatio - The value of currentRatio indicates the visibility ratio of the current component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type VisibleAreaChangeCallback = (isExpanding: boolean, currentRatio: number) => void;
/**
 * Defines a UICommonEvent which is used to set different common event to target component.
 *
 * @interface UICommonEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface UICommonEvent {
    /**
     * Set or reset the callback which will be triggered a click event when clicked.
     *
     * @param { Callback<ClickEvent> | undefined } callback - The callback about the click event. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setOnClick(callback: Callback<ClickEvent> | undefined): void;
    /**
     * Set or reset the callback which will be triggered a touch event when touched.
     *
     * @param { Callback<TouchEvent> | undefined } callback - The callback about the touch event. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setOnTouch(callback: Callback<TouchEvent> | undefined): void;
    /**
     * Set or reset the callback is triggered when a component mounts a display.
     *
     * @param { Callback<void> | undefined } callback - The callback will be triggered when a component mounts a display. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setOnAppear(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback is triggered when component uninstallation disappears.
     *
     * @param { Callback<void> | undefined } callback - The callback will be triggered when component uninstallation disappears. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setOnDisappear(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback is triggered when component has keyboard input.
     *
     * @param { Callback<KeyEvent> | undefined } callback - The callback will be triggered when has keyboard input. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void;
    /**
     * Set or reset the callback which is triggered when component get focus.
     *
     * @param { Callback<void> | undefined } callback - The callback will be triggered when a component get focus. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setOnFocus(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback which is triggered when lose focus.
     *
     * @param { Callback<void> | undefined } callback - The callback will be triggered when a component lose focus. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setOnBlur(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback which is triggered when has a hover event.
     *
     * @param { HoverCallback | undefined } callback - The callback will be triggered when has a hover event. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setOnHover(callback: HoverCallback | undefined): void;
    /**
    * Set or reset the callback which is triggered when has a mouse event.
    *
    * @param { Callback<MouseEvent> | undefined } callback - The callback will be triggered when has mouse input. If set undefined will reset the target callback.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    setOnMouse(callback: Callback<MouseEvent> | undefined): void;
    /**
    * Set or reset the callback which is triggered when the size of component changed.
    *
    * @param { SizeChangeCallback | undefined } callback - The callback will be triggered when the size of component changed. If set undefined will reset the target callback.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    setOnSizeChange(callback: SizeChangeCallback | undefined): void;
    /**
     * Set or reset the callback which is triggered when the visibleArea of component changed.
     *
     * @param { VisibleAreaEventOptions } options - The options for the visibility event.
     * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
     * If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;
}
/**
 * Defines a UIGestureEvent which is used to set different gestures to target component.
 *
 * @interface UIGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface UIGestureEvent {
    /**
     * Add a gesture bound to the component.
     *
     * @param { GestureHandler<T> } gesture - gesture indicates the gesture bound to a component.
     * @param { GesturePriority } priority - priority indicates the gesture's priority.
     * @param { GestureMask } mask - mask indicates the gesture's GestureMask value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    addGesture(gesture: GestureHandler, priority?: GesturePriority, mask?: GestureMask): void;
    /**
     * Add a parallel gesture bound to the component.
     *
     * @param { GestureHandler<T> } gesture - gesture indicates the gesture bound to a component.
     * @param { GestureMask } mask - mask indicates the gesture's GestureMask value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    addParallelGesture(gesture: GestureHandler, mask?: GestureMask): void;
    /**
     * Remove the gesture that is bound to the component and marked as tag.
     *
     * @param { string } tag - tag indicates the gesture's tag.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    removeGestureByTag(tag: string): void;
    /**
     * Clear gestures bound to the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    clearGestures(): void;
}
/**
 * Defines the gesture modifier.
 *
 * @interface GestureModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface GestureModifier {
    /**
     * Defines the gesture update function.
     *
     * @param { UIGestureEvent } event
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    applyGesture(event: UIGestureEvent): void;
}
/**
 * Defines the selection options.
 *
 * @interface SelectionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SelectionOptions {
    /**
     * Menu pop-up policy.
     *
     * @type { ?MenuPolicy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    menuPolicy?: MenuPolicy;
}
/**
 * Defines the next focus item.
 *
 * @interface FocusMovement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface FocusMovement {
    /**
     * Next focus item's component identifier of forward.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    forward?: string;
    /**
     * Next focus item's component identifier of backward.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backward?: string;
    /**
     * Next focus item's component identifier of up.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    up?: string;
    /**
     * Next focus item's component identifier of down.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    down?: string;
    /**
     * Next focus item's component identifier of left.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    left?: string;
    /**
     * Next focus item's component identifier of right.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    right?: string;
}
/**
 * enum keyboard avoid mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum KeyboardAvoidMode {
    /**
     * Defines avoid keyboard when keyboard shows.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DEFAULT = 0,
    /**
     * Defines not avoid keyboard when keyboard shows.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NONE = 1
}
/**
 * Enumerates the type of area in hover mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum HoverModeAreaType {
    /**
     * Layout top half screen when the phone in hover mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    TOP_SCREEN = 0,
    /**
     * Layout bottom half screen when the phone in hover mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    BOTTOM_SCREEN = 1
}
/**
 * Defines a range of dates.
 *
 * @interface DateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface DateRange {
    /**
     * Defines the start date of the date range.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    start?: Date;
    /**
     * Defines the end date of the date range.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    end?: Date;
}
export declare interface UICommonMethod {
    /**
     * Sets the width of the current component.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    width(value: Length | undefined): this;
    /**
     * Sets the width of the current component.
     *
     * @param { Length | LayoutPolicy } widthValue
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    width(widthValue: Length | LayoutPolicy | undefined): this;
    /**
     * Sets the height of the current component.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    height(value: Length | undefined): this;
    /**
     * Sets the height of the current component.
     *
     * @param { Length | LayoutPolicy } heightValue
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    height(heightValue: Length | LayoutPolicy | undefined): this;
    /**
     * Sets the drawModifier of the current component.
     *
     * @param { DrawModifier | undefined } modifier - drawModifier used to draw, or undefined if it is not available.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    drawModifier(modifier: DrawModifier | undefined): this;
    /**
     * Sets the custom property of the current component.
     *
     * @param { string } name - the name of the custom property.
     * @param { Optional<Object> } value - the value of the custom property.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    customProperty(name: string | undefined, value: Object | undefined): this;
    /**
     * Expands the safe area.
     *
     * @param { Array<SafeAreaType> } types - Indicates the types of the safe area.
     * @param { Array<SafeAreaEdge> } edges - Indicates the edges of the safe area.
     * @returns { T } The component instance.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    expandSafeArea(types?: Array<SafeAreaType> | undefined, edges?: Array<SafeAreaEdge> | undefined): this;
    /**
     * Sets the response region of the current component.
     *
     * @param { Array<Rectangle> | Rectangle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    responseRegion(value: Array<Rectangle> | Rectangle | undefined): this;
    /**
     * Sets the mouse response region of current component
     *
     * @param { Array<Rectangle> | Rectangle } value
     * @returns { T } return the component attribute
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    mouseResponseRegion(value: Array<Rectangle> | Rectangle | undefined): this;
    /**
     * The size of the current component.
     *
     * @param { SizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    size(value: SizeOptions | undefined): this;
    /**
     * constraint Size:
     * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
     *
     * @param { ConstraintSizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    constraintSize(value: ConstraintSizeOptions | undefined): this;
    /**
     * Defines the component's hit test behavior in touch events.
     *
     * @param { HitTestMode } value - the hit test mode.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    hitTestBehavior(value: HitTestMode | undefined): this;
    /**
     * Defines the pre-touch test of sub component in touch events.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onChildTouchTest(event: ((value: Array<TouchTestInfo>) => TouchResult) | undefined): this;
    /**
     * Defines the weight of the component, according to which the remain part of main-axis is allocated self-adaptively
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    layoutWeight(value: number | string | undefined): this;
    /**
     * chain Weight
     *
     * @param { ChainWeightOptions } chainWeight
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    chainWeight(chainWeight: ChainWeightOptions | undefined): this;
    /**
     * Inner margin.
     *
     * @param { Padding | Length | LocalizedPadding } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    padding(value: Padding | Length | LocalizedPadding | undefined): this;
    /**
     * Inner safeArea padding.
     *
     * @param { Padding | LengthMetrics | LocalizedPadding } paddingValue - Indicates safeArea padding values
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding | undefined): this;
    /**
     * Outer Margin.
     *
     * @param { Margin | Length | LocalizedMargin } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    margin(value: Margin | Length | LocalizedMargin | undefined): this;
    /**
     * Background.
     *
     * @param { CustomBuilder } builder
     * @param { BackgroundOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    background(builder: CustomBuilder | undefined, options?: BackgroundOptions | undefined): this;
    /**
     * Background color
     *
     * @param { ResourceColor } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundColor(value: ResourceColor | undefined): this;
    /**
     * PixelRound
     *
     * @param { PixelRoundPolicy } value - indicates the pixel round policy.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    pixelRound(value: PixelRoundPolicy | undefined): this;
    /**
     * Background image
     * src: Image address url
     *
     * @param { ResourceStr | PixelMap } src
     * @param { ImageRepeat } repeat
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundImage(src: ResourceStr | PixelMap | undefined, repeat?: ImageRepeat | undefined): this;
    /**
     * Background image
     *
     * @param { ResourceStr | PixelMap } src - the background image source
     * @param { BackgroundImageOptions } options - config the options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundImage(src: ResourceStr | PixelMap | undefined, options?: BackgroundImageOptions | undefined): this;
    /**
     * Background image size
     *
     * @param { SizeOptions | ImageSize } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundImageSize(value: SizeOptions | ImageSize | undefined): this;
    /**
     * Background image position
     * x:Horizontal coordinate;y:Vertical axis coordinate.
     *
     * @param { Position | Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundImagePosition(value: Position | Alignment | undefined): this;
    /**
     * Background blur style.
     * blurStyle:Blur style type.
     *
     * @param { BlurStyle } value
     * @param { BackgroundBlurStyleOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundBlurStyle(value: BlurStyle | undefined, options?: BackgroundBlurStyleOptions | undefined): this;
    /**
     * Background blur style.
     * blurStyle:Blur style type.
     * sysOptions: system adaptive options.
     *
     * @param { Optional<BlurStyle> } style
     * @param { BackgroundBlurStyleOptions } [options]
     * @param { SystemAdaptiveOptions } [sysOptions]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundBlurStyle(style: BlurStyle | undefined, options?: BackgroundBlurStyleOptions | undefined, sysOptions?: SystemAdaptiveOptions | undefined): this;
    /**
     * options:background effect options.
     *
     * @param { BackgroundEffectOptions } options - options indicates the effect options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundEffect(options: BackgroundEffectOptions | undefined): this;
    /**
     * options:background effect options.
     * sysOptions: system adaptive options.
     *
     * @param { Optional<BackgroundEffectOptions> } options - options indicates the effect options.
     * @param { SystemAdaptiveOptions } [ sysOptions ] - system adaptive options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundEffect(options: BackgroundEffectOptions | undefined, sysOptions?: SystemAdaptiveOptions | undefined): this;
    /**
     * Background image resizable.
     * value:resizable options
     *
     * @param { ResizableOptions } value - Indicates the resizable options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundImageResizable(value: ResizableOptions | undefined): this;
    /**
     * Foreground effect.
     *
     * @param { ForegroundEffectOptions } options - options indicates the effect options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    foregroundEffect(options: ForegroundEffectOptions | undefined): this;
    /**
     * Unified visual effect interface.
     *
     * @param { VisualEffect } effect - Visual effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    visualEffect(effect: VisualEffect | undefined): this;
    /**
     * Filter applied to the background layer of the component.
     *
     * @param { Filter } filter - Filter effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundFilter(filter: Filter | undefined): this;
    /**
     * Filter applied to the foreground layer of the component.
     *
     * @param { Filter } filter - Filter effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    foregroundFilter(filter: Filter | undefined): this;
    /**
     * Filter applied to the compositing layer of the component.
     *
     * @param { Filter } filter - Filter effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    compositingFilter(filter: Filter | undefined): this;
    /**
     * Foreground blur style.
     * blurStyle:Blur style type.
     *
     * @param { BlurStyle } value
     * @param { ForegroundBlurStyleOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    foregroundBlurStyle(value: BlurStyle | undefined, options?: ForegroundBlurStyleOptions | undefined): this;
    /**
     * Foreground blur style.
     * blurStyle:Blur style type.
     * sysOptions: system adaptive options.
     *
     * @param { Optional<BlurStyle> } style
     * @param { ForegroundBlurStyleOptions } [options]
     * @param { SystemAdaptiveOptions } [sysOptions]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    foregroundBlurStyle(style: BlurStyle | undefined, options?: ForegroundBlurStyleOptions | undefined, sysOptions?: SystemAdaptiveOptions | undefined): this;
    /**
     * Opacity
     *
     * @param { number | Resource } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    opacity(value: number | Resource | undefined): this;
    /**
     * Border
     * width:Border width;color:Border color;radius:Border radius;
     *
     * @param { BorderOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    border(value: BorderOptions | undefined): this;
    /**
     * Border style
     *
     * @param { BorderStyle | EdgeStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    borderStyle(value: BorderStyle | EdgeStyles | undefined): this;
    /**
     * Border width
     *
     * @param { Length | EdgeWidths | LocalizedEdgeWidths } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths | undefined): this;
    /**
     * Border color
     *
     * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors | undefined): this;
    /**
     * Border radius
     *
     * @param { Length | BorderRadiuses | LocalizedBorderRadiuses } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses | undefined): this;
    /**
     * Border image
     *
     * @param { BorderImageOption } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    borderImage(value: BorderImageOption | undefined): this;
    /**
     * Outline
     * width:Outline width;color:Outline color;radius:Outline radius;style:Outline style;
     *
     * @param { OutlineOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    outline(value: OutlineOptions | undefined): this;
    /**
     * Outline style
     *
     * @param { OutlineStyle | EdgeOutlineStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    outlineStyle(value: OutlineStyle | EdgeOutlineStyles | undefined): this;
    /**
     * Outline width
     *
     * @param { Dimension | EdgeOutlineWidths } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    outlineWidth(value: Dimension | EdgeOutlineWidths | undefined): this;
    /**
     * Outline color
     *
     * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors | undefined): this;
    /**
     * Outline radius
     *
     * @param { Dimension | OutlineRadiuses } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    outlineRadius(value: Dimension | OutlineRadiuses | undefined): this;
    /**
     * Provides the general foreground color capability of UI components, and assigns color values
     * according to the characteristics of components.
     *
     * @param { ResourceColor | ColoringStrategy } value - indicates the color or color selection strategy
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    foregroundColor(value: ResourceColor | ColoringStrategy | undefined): this;
    /**
     * Trigger a click event when a click is clicked.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onClick(event: ((event: ClickEvent) => void) | undefined): this;
    /**
     * Trigger a click event when a click is clicked, move distance should smaller than distanceThreshold.
     *
     * @param { function } event - this function callback executed when the click action is recognized
     * @param { number } distanceThreshold - the distance threshold of finger's movement when detecting a click action
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onClick(event: Callback<ClickEvent> | undefined, distanceThreshold: number | undefined): this;
    /**
     * Trigger a hover event.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onHover(event: ((isHover: boolean, event: HoverEvent) => void) | undefined): this;
    /**
     * Trigger a hover move event.
     *
     * @param { Callback<HoverEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onHoverMove(event: Callback<HoverEvent> | undefined): this;
    /**
     * Trigger a accessibility hover event.
     *
     * @param { AccessibilityCallback } callback - A callback instance used when the component is touched after accessibility mode is enabled.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onAccessibilityHover(callback: AccessibilityCallback | undefined): this;
    /**
     * Set hover effect.
     *
     * @param { HoverEffect } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    hoverEffect(value: HoverEffect | undefined): this;
    /**
     * Trigger a mouse event.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    onMouse(event: ((event: MouseEvent) => void) | undefined): this;
    /**
     * Trigger a touch event when touched.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onTouch(event: ((event: TouchEvent) => void) | undefined): this;
    /**
     * Keyboard input
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onKeyEvent(event: ((event: KeyEvent) => void) | undefined): this;
    /**
     * Keyboard input
     *
     * @param { Callback<KeyEvent, boolean> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onKeyEvent(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * Digital crown input.
     *
     * @param { Callback<CrownEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    onDigitalCrown(handler: Callback<CrownEvent> | undefined): this;
    /**
     * Handle keyboard events before input method events.
     *
     * @param { Callback<KeyEvent, boolean> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onKeyPreIme(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * Customize the handling and distribution of key events.
     *
     * @param { Callback<KeyEvent, boolean> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onKeyEventDispatch(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * Trigger a FocusAxisEvent.
     *
     * @param { Callback<FocusAxisEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    onFocusAxisEvent(event: Callback<FocusAxisEvent> | undefined): this;
    /**
     * Handle axis events.
     *
     * @param { Callback<AxisEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    onAxisEvent(event: Callback<AxisEvent> | undefined): this;
    /**
     * Set focusable.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    focusable(value: boolean | undefined): this;
    /**
     * Set nextFocus.
     *
     * @param { FocusMovement } nextStep
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    nextFocus(nextStep: FocusMovement | undefined): this;
    /**
     * Set TabStop on component focus
     *
     * @param { boolean } isTabStop
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    tabStop(isTabStop: boolean | undefined): this;
    /**
     * Trigger a event when got focus.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onFocus(event: (() => void) | undefined): this;
    /**
     * Trigger a event when lose focus.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onBlur(event: (() => void) | undefined): this;
    /**
     * Set focus index by key tab.
     *
     * @param { number } index
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    tabIndex(index: number | undefined): this;
    /**
     * Set default focused component when a page create.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    defaultFocus(value: boolean | undefined): this;
    /**
     * Set default focused component when focus on a focus group.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    groupDefaultFocus(value: boolean | undefined): this;
    /**
     * Set a component focused when the component be touched.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    focusOnTouch(value: boolean | undefined): this;
    /**
     * Set the component's focusBox style.
     *
     * @param { FocusBoxStyle } style
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    focusBox(style: FocusBoxStyle | undefined): this;
    /**
    * Set container as a focus group with a specific identifier.
    *
    * @param { string } id - focus scope identifier.
    * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    @memo
    focusScopeId(id: string | undefined, isGroup?: boolean | undefined): this;
    /**
    * Set container as a focus group with a specific identifier.
    *
    * @param { string } id - focus scope identifier.
    * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false.
    * @param { boolean } [arrowStepOut] - whether the arrow keys can move focus from inside the focus group to outside,
    * only effective when isGroup is true, the default value is true.
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    @memo
    focusScopeId(id: string | undefined, isGroup?: boolean | undefined, arrowStepOut?: boolean | undefined): this;
    /**
    * Set the focus priority of component in a specific focus scope.
    *
    * @param { string } scopeId
    * @param { FocusPriority } [priority] - the default value is AUTO
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    @memo
    focusScopePriority(scopeId: string | undefined, priority?: FocusPriority | undefined): this;
    /**
     * animation
     *
     * @param { AnimateParam } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    animation(value: AnimateParam | undefined): this;
    /**
     * Transition parameter
     *
     * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    transition(value: TransitionEffect | undefined): this;
    /**
     * Set the transition effect of component when it appears and disappears.
     *
     * @param { TransitionEffect } effect - transition effect
     * @param { Optional<TransitionFinishCallback> } onFinish - transition finish callback.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    transition(effect: TransitionEffect | undefined, onFinish: TransitionFinishCallback | undefined): this;
    /**
     * Bind gesture recognition.
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    gesture(gesture: GestureType | undefined, mask?: GestureMask | undefined): this;
    /**
     * Binding Preferential Recognition Gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    priorityGesture(gesture: GestureType | undefined, mask?: GestureMask | undefined): this;
    /**
     * Binding gestures that can be triggered simultaneously with internal component gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    parallelGesture(gesture: GestureType | undefined, mask?: GestureMask | undefined): this;
    /**
     * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
     * The larger the blurring radius, the more blurring the content.
     * If the value is 0, the content blurring effect is not blurring.
     *
     * @param { number } value - value indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    blur(value: number | undefined, options?: BlurOptions | undefined): this;
    /**
     * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
     * The larger the blurring radius, the more blurring the content.
     * If the value is 0, the content blurring effect is not blurring.
     *
     * @param { Optional<number> } blurRadius - value indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates blur options.
     * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    blur(blurRadius: number | undefined, options?: BlurOptions | undefined, sysOptions?: SystemAdaptiveOptions | undefined): this;
    /**
     * Adds the content linear gradient blurring effect for the current component. The input parameter is the blurring radius.
     *
     * @param { number } value - the blurring radius.
     * The larger the blurring radius, the more blurring the content, and if the value is 0, the content blurring effect is not blurring.
     * @param { LinearGradientBlurOptions } options - the linear gradient blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    linearGradientBlur(value: number | undefined, options: LinearGradientBlurOptions | undefined): this;
    /**
     * Component motion blur interface.
     *
     * @param { MotionBlurOptions } value - the attributes of motion blur.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    motionBlur(value: MotionBlurOptions | undefined): this;
    /**
     * Adds a highlight effect to the current component.
     * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
     * The component is displayed as all white (percentage).
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    brightness(value: number | undefined): this;
    /**
     * Adds a contrast effect to the current component. The input parameter is the contrast value.
     * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    contrast(value: number | undefined): this;
    /**
     * Adds a grayscale effect to the current component.
     * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
     * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    grayscale(value: number | undefined): this;
    /**
     * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
     *
     * @param { Color | string | Resource } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    colorBlend(value: Color | string | Resource | undefined): this;
    /**
     * Adds a saturation effect to the current component.
     * The saturation is the ratio of the color-containing component to the achromatic component (gray).
     * The larger the color-containing component, the greater the saturation.
     * The larger the achromatic component, the smaller the saturation. (Percentage)
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    saturate(value: number | undefined): this;
    /**
     * Converts the image to sepia. Value defines the scale of the conversion.
     * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    sepia(value: number | undefined): this;
    /**
     * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
     * A value of 0% does not change the image. (Percentage)
     *
     * @param { number | InvertOptions } value - value indicates the scale of the conversion or the options of invert.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    invert(value: number | InvertOptions | undefined): this;
    /**
     * Sets system bar effect to the component.
     *
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    systemBarEffect(): this;
    /**
     * Adds the hue rotation effect to the current component.
     * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
     * If the value exceeds 360deg, the image is circled again.
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    hueRotate(value: number | string | undefined): this;
    /**
     * Add an attribute to control whether the shadows of the child nodes overlap each other.
     *
     * @param { boolean } value - true means the shadows of the child nodes overlap each other effect and drawn in batches.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    useShadowBatching(value: boolean | undefined): this;
    /**
    * Sets whether the component should apply the effects template defined by the parent effectComponent or window.
    * If multiple parent effectComponents are found, the nearest one will be used.
    * If no parent effectComponent is found, this method has no effect.
    *
    * @param { boolean } useEffect - true means the component should apply the effects template defined by the parent effectComponent or window.
    * @param { EffectType } effectType - the effect type of the effects template, defined by the parent effectComponent or window.
    * @returns { T } return the component attribute.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    @memo
    useEffect(useEffect: boolean | undefined, effectType: EffectType | undefined): this;
    /**
     * Sets whether the component should apply the effects template defined by the parent effectComponent.
     * If multiple parent effectComponents are found, the nearest one will be used.
     * If no parent effectComponent is found, this method has no effect.
     *
     * @param { boolean } value - true means the component should apply the effects template.
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    useEffect(value: boolean | undefined): this;
    /**
     * Adds the background blur effect for the current component. The input parameter is the blur radius.
     * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
     *
     * @param { number } value - value indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates the backdrop blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    backdropBlur(value: number | undefined, options?: BlurOptions | undefined): this;
    /**
     * Adds the background blur effect for the current component. The input parameter is the blur radius.
     * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
     *
     * @param { Optional<number> } radius - radius indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates the backdrop blur options.
     * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    backdropBlur(radius: number | undefined, options?: BlurOptions | undefined, sysOptions?: SystemAdaptiveOptions | undefined): this;
    /**
     * Composite the contents of this view and its children into an offscreen cache before display in the screen.
     *
     * @param { boolean } value - if this view and its children need to composite into an offscreen cache.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    renderGroup(value: boolean | undefined): this;
    /**
     * Sets whether the component should remain stationary, reusing the results of the current frame's off-screen rendering.
     * If the input parameter is true, the component and subcomponent changes do not affect the display.
     *
     * @param { boolean } value - true means the component should remain stationary.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    freeze(value: boolean | undefined): this;
    /**
     * Set component translation.
     *
     * @param { TranslateOptions } value default:{x:0,y:0,z:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    translate(value: TranslateOptions | undefined): this;
    /**
     * Set component scaling.
     *
     * @param { ScaleOptions } value default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    scale(value: ScaleOptions | undefined): this;
    /**
     * Set component rotation.
     *
     * @param { RotateOptions } value default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    rotate(value: RotateOptions | undefined): this;
    /**
     * Sets the transformation matrix for the current component.
     *
     * @param { object } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    transform(value: object | undefined): this;
    /**
     * This callback is triggered when a component mounts a display.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onAppear(event: (() => void) | undefined): this;
    /**
     * This callback is triggered when component uninstallation disappears.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onDisAppear(event: (() => void) | undefined): this;
    /**
     * This callback is triggered when a component mounts to view tree.
     *
     * @param { Callback<void> } callback
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onAttach(callback: Callback<void> | undefined): this;
    /**
     * This callback is triggered when a component is detached from view tree.
     *
     * @param { Callback<void> } callback
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDetach(callback: Callback<void> | undefined): this;
    /**
     * This callback is triggered when the size or position of this component change finished.
     *
     * @param { function } event - event callback.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onAreaChange(event: ((oldValue: Area, newValue: Area) => void) | undefined): this;
    /**
     * Controls the display or hide of the current component.
     *
     * @param { Visibility } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    visibility(value: Visibility | undefined): this;
    /**
     * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    flexGrow(value: number | undefined): this;
    /**
     * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    flexShrink(value: number | undefined): this;
    /**
     * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    flexBasis(value: number | string | undefined): this;
    /**
     * Overrides the default configuration of alignItems in the Flex Layout container.
     *
     * @param { ItemAlign } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    alignSelf(value: ItemAlign | undefined): this;
    /**
     * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    displayPriority(value: number | undefined): this;
    /**
     * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    zIndex(value: number | undefined): this;
    /**
     * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
     *
     * @param { string } id
     * @param { sharedTransitionOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    sharedTransition(id: string | undefined, options?: sharedTransitionOptions | undefined): this;
    /**
     * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
     *
     * @param { Direction } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    direction(value: Direction | undefined): this;
    /**
     * align
     *
     * @param { Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    align(value: Alignment | undefined): this;
    /**
     * position
     *
     * @param { Position | Edges | LocalizedEdges } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    position(value: Position | Edges | LocalizedEdges | undefined): this;
    /**
     * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
     *
     * @param { Position | LocalizedPosition} value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    markAnchor(value: Position | LocalizedPosition | undefined): this;
    /**
     * Coordinate offset relative to the layout completion position.
     * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
     *
     * @param { Position | Edges | LocalizedEdges } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    offset(value: Position | Edges | LocalizedEdges | undefined): this;
    /**
     * If the value is true, the component is available and can respond to operations such as clicking.
     *  If it is set to false, click operations are not responded.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    enabled(value: boolean | undefined): this;
    /**
     * Specifies the alignRules of relative container
     *
     * @param { AlignRuleOption } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    alignRules(value: AlignRuleOption | undefined): this;
    /**
     * Specifies the localized alignRules of relative container
     *
     * @param { LocalizedAlignRuleOptions } alignRule
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    alignRules(alignRule: LocalizedAlignRuleOptions | undefined): this;
    /**
     * Specifies the direction and style of chain in relative container
     *
     * @param { Axis } direction - indicates direction of the chain
     * @param { ChainStyle } style - indicates style of the chain
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    chainMode(direction: Axis | undefined, style: ChainStyle | undefined): this;
    /**
     * Specifies the aspect ratio of the current component.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    aspectRatio(value: number | undefined): this;
    /**
     * The click effect level and scale number.
     *
     * @param { ClickEffect | null } value
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    clickEffect(value: ClickEffect | null | undefined): this;
    /**
     * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
     * (To be triggered, press and hold for 170 milliseconds (ms))
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDragStart(event: ((event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged to the range of the component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDragEnter(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the drag moves within the range of a placeable component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDragMove(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged out of the component range.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDragLeave(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDrop(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { OnDragEventCallback } eventCallback - event callback.
     * @param { DropOptions } [dropOptions] - the drop handling options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDrop(eventCallback: OnDragEventCallback | undefined, dropOptions?: DropOptions | undefined): this;
    /**
     * This function is called when the drag event is end.
     *
     * @param { function } event - indicates the function to be called.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDragEnd(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * Allowed drop uniformData type for this node.
     *
     * @param { Array<UniformDataType> | null } value - the uniformData type for this node.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    allowDrop(value: Array<UniformDataType> | null | undefined): this;
    /**
     * Enable the selectable area can be dragged.
     *
     * @param { boolean } value - true means the area can be dragged, false means the area can't be dragged.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    draggable(value: boolean | undefined): this;
    /**
     * Set preview of the component for dragging process
     *
     * @param { CustomBuilder | DragItemInfo | string } value - preview of the component for dragging process
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    dragPreview(value: CustomBuilder | DragItemInfo | string | undefined): this;
    /**
     * Set preview of the component for dragging process
     *
     * @param { CustomBuilder | DragItemInfo | string } preview - preview of the component for dragging process
     * @param { PreviewConfiguration } config - drag preview configuration.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    dragPreview(preview: CustomBuilder | DragItemInfo | string | undefined, config?: PreviewConfiguration | undefined): this;
    /**
     * Set the selectable area drag preview options.
     *
     * @param { DragPreviewOptions } value - preview options value.
     * @param { DragInteractionOptions } options - drag interaction options value.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    dragPreviewOptions(value: DragPreviewOptions | undefined, options?: DragInteractionOptions | undefined): this;
    /**
     * After binding, a callback is triggered when the preDrag status change finished.
     *
     * @param { Callback<PreDragStatus> } callback callback - The callback will be triggered when the preDrag status change.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    onPreDrag(callback: Callback<PreDragStatus> | undefined): this;
    /**
     * Add mask text to the current component. The layout is the same as that of the current component.
     *
     * @param { string | CustomBuilder | ComponentContent } value
     * @param { OverlayOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    overlay(value: string | CustomBuilder | ComponentContent | undefined, options?: OverlayOptions | undefined): this;
    /**
     * Linear Gradient
     * angle: Angle of Linear Gradient. The default value is 180;
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     * colors: Color description for gradients.
     * repeating: repeating. The default value is false
     *
     * Anonymous Object Rectification.
     * @param { LinearGradientOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    linearGradient(value: LinearGradientOptions | undefined): this;
    /**
     * Angle Gradient
     * center:is the center point of the angle gradient
     * start:Start point of angle gradient. The default value is 0
     * end:End point of angle gradient. The default value is 0
     * rotating:rotating. The default value is 0
     * colors:Color description for gradients
     * repeating:repeating. The default value is false
     *
     * Anonymous Object Rectification.
     * @param { SweepGradientOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    sweepGradient(value: SweepGradientOptions | undefined): this;
    /**
     * Radial Gradient
     * center:Center point of radial gradient
     * radius:Radius of Radial Gradient. value range [0, +∞)
     * colors:Color description for gradients
     * repeating: Refill. The default value is false
     *
     * Anonymous Object Rectification.
     * @param { RadialGradientOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    radialGradient(value: RadialGradientOptions | undefined): this;
    /**
     * Set the motion path of the component
     * path:Motion path for displacement animation, using the svg path string.
     * from:Start point of the motion path. The default value is 0.0.
     * to:End point of the motion path. The default value is 1.0.
     * rotatable:Whether to follow the path for rotation.
     *
     * @param { MotionPathOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    motionPath(value: MotionPathOptions | undefined): this;
    /**
     * Add a shadow effect to the current component
     *
     * @param { ShadowOptions | ShadowStyle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    shadow(value: ShadowOptions | ShadowStyle | undefined): this;
    /**
     * Add a blendMode effect to the current component
     *
     * @param { BlendMode } value - Different hybrid modes
     * @param { BlendApplyType } [type] - Different blend apply type
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    blendMode(value: BlendMode | undefined, type?: BlendApplyType | undefined): this;
    /**
     * Add a blendMode effect to the current component.Cannot be used together with the blendMode interface.
     *
     * @param { BlendMode | Blender } effect - When the effect type is BlendMode type, define Different hybrid modes.
     * When the effect type is Blender type, Define the corresponding blending effect.
     * @param { BlendApplyType } [type] - Different blend apply type
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    advancedBlendMode(effect: BlendMode | Blender | undefined, type?: BlendApplyType | undefined): this;
    /**
     * Whether to crop the sub components beyond the current component range.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    clip(value: boolean | undefined): this;
    /**
    * The current component is cropped according to the specified shape.
    *
    * @param { CircleShape | EllipseShape | PathShape | RectShape } value - indicates the shape of the clip.
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    @memo
    clipShape(value: CircleShape | EllipseShape | PathShape | RectShape | undefined): this;
    /**
     * Sets the mask of the current component.
     *
     * @param { ProgressMask } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    mask(value: ProgressMask | undefined): this;
    /**
     * Applies a mask of the specified shape to the current assembly.
     *
     * @param { CircleShape | EllipseShape | PathShape | RectShape } value - indicates the shape of the mask.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    maskShape(value: CircleShape | EllipseShape | PathShape | RectShape | undefined): this;
    /**
     * Key. User can set an key to the component to identify it.
     *
     * @param { string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     * @test
     */
    @memo
    key(value: string | undefined): this;
    /**
     * Id. User can set an id to the component to identify it.
     *
     * @param { string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    id(value: string | undefined): this;
    /**
     * geometryTransition
     *
     * @param { string } id
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    geometryTransition(id: string | undefined): this;
    /**
     * Shared geometry transition
     *
     * @param { string } id - geometry transition id
     * @param { GeometryTransitionOptions } options - Indicates the options of geometry transition.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    geometryTransition(id: string | undefined, options?: GeometryTransitionOptions | undefined): this;
    /**
    * Tips control
    *
    * @param { TipsMessageType } message
    * @param { TipsOptions } [options]
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    @memo
    bindTips(message: TipsMessageType | undefined, options?: TipsOptions | undefined): this;
    /**
     * Popup control
     *
     * @param { boolean } show
     * @param { PopupOptions | CustomPopupOptions } popup
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    bindPopup(show: boolean | undefined, popup: PopupOptions | CustomPopupOptions | undefined): this;
    /**
     * Menu control
     *
     * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
     * @param { MenuOptions } options - Indicates the options of menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    bindMenu(content: Array<MenuElement> | CustomBuilder | undefined, options?: MenuOptions | undefined): this;
    /**
     * Menu control
     *
     * @param { boolean } isShow true means display menu, false means hide menu.
     * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
     * @param { MenuOptions } options - Indicates the options of menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    bindMenu(isShow: boolean | undefined, content: Array<MenuElement> | CustomBuilder | undefined, options?: MenuOptions | undefined): this;
    /**
     * ContextMenu control
     *
     * @param { CustomBuilder } content - Indicates the content of context menu.
     * @param { ResponseType } responseType - Indicates response type of context menu.
     * @param { ContextMenuOptions } options - Indicates the options of context menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    bindContextMenu(content: CustomBuilder | undefined, responseType: ResponseType | undefined, options?: ContextMenuOptions | undefined): this;
    /**
     * ContextMenu control
     *
     * @param { boolean } isShown - true means display content, false means hide content.
     * @param { CustomBuilder } content - Indicates the content of context menu.
     * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    bindContextMenu(isShown: boolean | undefined, content: CustomBuilder | undefined, options?: ContextMenuOptions | undefined): this;
    /**
     * Bind content cover
     *
     * @param { boolean } isShow - true means display content, false means hide content.
     * @param { CustomBuilder } builder - the content to be displayed.
     * @param { ModalTransition } type - transition type.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    bindContentCover(isShow: boolean | undefined, builder: CustomBuilder | undefined, type?: ModalTransition | undefined): this;
    /**
     * Bind content cover
     *
     * @param { boolean } isShow - true means display content, false means hide content.
     * @param { CustomBuilder } builder - the content to be displayed.
     * @param { ContentCoverOptions } options - options of content cover.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    bindContentCover(isShow: boolean | undefined, builder: CustomBuilder | undefined, options?: ContentCoverOptions | undefined): this;
    /**
     * Bind sheet
     *
     * @param { boolean } isShow - true means display sheet, false means hide sheet.
     * @param { CustomBuilder } builder - the sheet to be displayed.
     * @param { SheetOptions } options - options of sheet.
     * @returns { T } - template type
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    bindSheet(isShow: boolean | undefined, builder: CustomBuilder | undefined, options?: SheetOptions | undefined): this;
    /**
     * Sets styles for component state.
     *
     * @param { StateStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    stateStyles(value: StateStyles | undefined): this;
    /**
     * id for distribute identification.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    restoreId(value: number | undefined): this;
    /**
     * Trigger a visible area change event.
     *
     * @param { Array<number> } ratios
     * @param { VisibleAreaChangeCallback } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onVisibleAreaChange(ratios: Array<number> | undefined, event: VisibleAreaChangeCallback | undefined): this;
    /**
     * Set or reset the callback which is triggered when the visibleArea of component changed.
     * The interval between two visible area change callbacks will not be less than the expected update interval.
     *
     * @param { VisibleAreaEventOptions } options - The options for the visibility event.
     * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
     * If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onVisibleAreaApproximateChange(options: VisibleAreaEventOptions | undefined, event: VisibleAreaChangeCallback | undefined): this;
    /**
     * Set the spherical effect of the component.
     *
     * @param { number } value - set the degree of spherical effect, value range [0, 1].
     * If the value is 0, the component keep same, else the value is 1, component are fully spherical.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    sphericalEffect(value: number | undefined): this;
    /**
     * Set the light up effect of the component
     *
     * @param { number } value - set the degree to which the component lights up, value range [0, 1].
     * The color brightness in the component rendering content area is greater than the value and can be displayed, otherwise it will not be displayed.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    lightUpEffect(value: number | undefined): this;
    /**
     * Set the edge pixel stretch effect of the Component.
     *
     * @param { PixelStretchEffectOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    pixelStretchEffect(options: PixelStretchEffectOptions | undefined): this;
    /**
     * Sets hot keys
     *
     * @param { string | FunctionKey } value - Character of the combination key.
     * @param { Array<ModifierKey> } keys - The modifier keys modify the action of key when the key are pressed at the same time.
     * @param { function } [action] - Callback function, triggered when the shortcut keyboard is pressed.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    keyboardShortcut(value: string | FunctionKey | undefined, keys: Array<ModifierKey> | undefined, action?: (() => void) | undefined): this;
    /**
     * Sets accessibilityGroup
     *
     * @param { boolean } value - set group with accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityGroup(value: boolean | undefined): this;
    /**
     * Sets accessibilityGroup
     *
     * @param { boolean } isGroup - set group with accessibility
     * @param { AccessibilityOptions } accessibilityOptions - accessibilityOptions for accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityGroup(isGroup: boolean | undefined, accessibilityOptions: AccessibilityOptions | undefined): this;
    /**
     * Sets accessibilityText
     *
     * @param { string } value - set accessibility text
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityText(value: string | undefined): this;
    /**
     * Sets accessibility next focus id
     * @param { string } nextId - set component next accessibility focus id
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityNextFocusId(nextId: string | undefined): this;
    /**
     * Sets the accessibility default foucs flag
     * @param { boolean } focus - if the component is accessibility default focus,focus set true
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityDefaultFocus(focus: boolean | undefined): this;
    /**
     * Sets accessibility same page mode
     * @param { AccessibilitySamePageMode } pageMode - accessibility same page mode
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityUseSamePage(pageMode: AccessibilitySamePageMode | undefined): this;
    /**
     * Sets accessibilityScrollTriggerable
     * @param { boolean } isTriggerable - set property of supporting scroll in accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityScrollTriggerable(isTriggerable: boolean | undefined): this;
    /**
     * Sets accessibilityText
     *
     * @param { Resource } text - set accessibility text
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityText(text: Resource | undefined): this;
    /**
     * Sets accessibility role,role indicates the custom type of the component
     * @param { AccessibilityRoleType } role - set accessibility component type
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityRole(role: AccessibilityRoleType | undefined): this;
    /**
     * Register accessibility focus callback,when the component is focused or out of focus,the callback will be executed
     * @param { AccessibilityFocusCallback } callback - accessibility focus callback function
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onAccessibilityFocus(callback: AccessibilityFocusCallback | undefined): this;
    /**
     * Sets accessibilityTextHint
     *
     * @param { string } value - set accessibility text hint
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityTextHint(value: string | undefined): this;
    /**
     * Sets accessibilityDescription
     *
     * @param { string } value - set description of accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityDescription(value: string | undefined): this;
    /**
     * Sets accessibilityDescription
     *
     * @param { Resource } description - set description of accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityDescription(description: Resource | undefined): this;
    /**
     * Sets accessibilityLevel
     *
     * @param { string } value - set accessibility level
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityLevel(value: string | undefined): this;
    /**
     * Sets accessibilityVirtualNode
     *
     * @param { CustomBuilder } builder - set virtual node of accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityVirtualNode(builder: CustomBuilder | undefined): this;
    /**
     * Sets accessibilityChecked
     *
     * @param { boolean } isCheck - set accessibility checked status
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityChecked(isCheck: boolean | undefined): this;
    /**
     * Sets accessibilitySelected
     *
     * @param { boolean } isSelect - set accessibility selected status
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilitySelected(isSelect: boolean | undefined): this;
    /**
     * Sets obscured
     *
     * @param { Array<ObscuredReasons> } reasons - reasons of obscuration
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    obscured(reasons: Array<ObscuredReasons> | undefined): this;
    /**
     * Reuse id is used for identify the reuse type for each custom node.
     *
     * @param { string } id - The id for reusable custom node.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    reuseId(id: string | undefined): this;
    /**
    * Reuse id is used for identify the reuse type of each @ComponentV2 custom component, which can give user control of sub-component recycle and reuse.
    *
    * @param { ReuseOptions } options - The configuration parameter for reusable custom component.
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    @memo
    reuse(options: ReuseOptions | undefined): this;
    /**
     * Sets how content is drawn within nodes duration animation
     *
     * @param { RenderFit } fitMode - The render fit mode of content.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    renderFit(fitMode: RenderFit | undefined): this;
    /**
     * Sets the gesture modifier.
     *
     * @param { GestureModifier } modifier
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    gestureModifier(modifier: GestureModifier | undefined): this;
    /**
     * Adds a background dynamic light up effect to the current component.
     *
     * @param { BackgroundBrightnessOptions } params - params indicates BackgroundBrightnessOptions
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundBrightness(params: BackgroundBrightnessOptions | undefined): this;
    /**
     * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
     *
     * @param { function } callback - A callback instance used when a gesture bound to this component will be accepted.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onGestureJudgeBegin(callback: ((gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult) | undefined): this;
    /**
     * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
     *
     * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback | undefined): this;
    /**
     * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
     *
     * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
     * @param { boolean } exposeInnerGesture - This parameter is a flag. This flag determines whether to expose internal gestures.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback | undefined, exposeInnerGesture: boolean | undefined): this;
    /**
     * In the touch test phase, the recognizer is selected to form a parallel relationship with other recognizers on the response chain.
     *
     * @param { ShouldBuiltInRecognizerParallelWithCallback } callback - A callback instance used when a component is doing touch test.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback | undefined): this;
    /**
     * Events are monopolized by components.
     *
     * @param { boolean } monopolize - indicate the monopoly of events
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    monopolizeEvents(monopolize: boolean | undefined): this;
    /**
     * When the component does a touch test, a user-defined callback is triggered.
     *
     * @param { Callback<TouchEvent, HitTestMode> } callback - A callback instance used when the component does a touch test.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onTouchIntercept(callback: Callback<TouchEvent, HitTestMode> | undefined): this;
    /**
     * This callback is triggered when the size of this component change finished.
     *
     * @param { SizeChangeCallback } event - event callback.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onSizeChange(event: SizeChangeCallback | undefined): this;
    /**
     * Accessibility focus draw level, and the default value is FocusDrawLevel.SELF.
     *
     * @param { FocusDrawLevel } drawLevel - indicates accessibility focus draw level.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel | undefined): this;
}
export declare interface UICommonShapeMethod extends UICommonMethod {
    /**
     * border Color
     *
     * @param { ResourceColor } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    stroke(value: ResourceColor | undefined): this;
    /**
     * Fill color.
     *
     * @param { ResourceColor } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fill(value: ResourceColor | undefined): this;
    /**
     * Offset from the start point of the border drawing.
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    strokeDashOffset(value: number | string | undefined): this;
    /**
     * Path endpoint drawing style.
     *
     * @param { LineCapStyle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    strokeLineCap(value: LineCapStyle | undefined): this;
    /**
     * Border corner drawing style.
     *
     * @param { LineJoinStyle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    strokeLineJoin(value: LineJoinStyle | undefined): this;
    /**
     * Limits for drawing acute angles as bevels
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    strokeMiterLimit(value: number | string | undefined): this;
    /**
     * Sets the opacity of the border.
     *
     * @param { number | string | Resource } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    strokeOpacity(value: number | string | Resource | undefined): this;
    /**
     * fill Opacity
     *
     * @param { number | string | Resource } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fillOpacity(value: number | string | Resource | undefined): this;
    /**
     * Sets the width of the dividing line.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    strokeWidth(value: Length | undefined): this;
    /**
     * Indicates whether to enable anti-aliasing
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    antiAlias(value: boolean | undefined): this;
    /**
     * Sets the gap for the border.
     *
     * @param { Array<Object> } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    strokeDashArray(value: Array<Object> | undefined): this;
}
export declare interface UIScrollableCommonMethod extends UICommonMethod {
    /**
     * Scrollbar status.
     *
     * @param { BarState } barState - Scrollbar status.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    scrollBar(barState: BarState | undefined): this;
    /**
     * Color of the scrollbar.
     *
     * @param { Color | number | string } color - Color of the scrollbar.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    scrollBarColor(color: Color | number | string | undefined): this;
    /**
     * Width of the scrollbar.
     *
     * @param { number | string } value  - Width of the scrollbar.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    scrollBarWidth(value: number | string | undefined): this;
    /**
     * Edge scrolling effect.
     *
     * @param { EdgeEffect } edgeEffect - edge scrolling effect.
     * @param { EdgeEffectOptions } options - edge scrolling effect options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    edgeEffect(edgeEffect: EdgeEffect | undefined, options?: EdgeEffectOptions | undefined): this;
    /**
     * Called when setting whether to enable fading Edge effect.
     *
     * @param { Optional<boolean> } enabled - Whether to turn on the edge fade effect
     * @param { FadingEdgeOptions } [options] - The options of fadingEdge.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    fadingEdge(enabled: boolean | undefined, options?: FadingEdgeOptions | undefined): this;
    /**
     * Nested scrolling options.
     *
     * @param { NestedScrollOptions } value - options for nested scrolling.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    nestedScroll(value: NestedScrollOptions | undefined): this;
    /**
     * Whether to support scroll gestures by finger or mouse.
     *
     * @param { boolean } value - Whether to support scroll gestures by finger or mouse.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enableScrollInteraction(value: boolean | undefined): this;
    /**
     * Friction coefficient.
     *
     * @param { number | Resource } value - friction coefficient.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    friction(value: number | Resource | undefined): this;
    /**
     * Called when the scrollable will scroll.
     *
     * @param { Optional<OnWillScrollCallback> } handler - callback of scrollable.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onWillScroll(handler: OnWillScrollCallback | undefined): this;
    /**
     * Called when the scrollable did scroll.
     *
     * @param { OnScrollCallback } handler - callback of scrollable,
     * scrollOffset is offset this frame did scroll, scrollState is current scroll state.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onDidScroll(handler: OnScrollCallback | undefined): this;
    /**
     * Called when the scrollable reaches the start position.
     *
     * @param { function } event - Callback function, triggered when the scrollable reaches the start position.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onReachStart(event: (() => void) | undefined): this;
    /**
     * Called when the scrollable reaches the end position.
     *
     * @param { function } event - Callback function, triggered when the scrollable reaches the end position.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onReachEnd(event: (() => void) | undefined): this;
    /**
     * Called when the scrollable starts scrolling.
     *
     * @param { function } event - Callback function, triggered when the scrollable starts scrolling.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollStart(event: (() => void) | undefined): this;
    /**
     * Called when the scrollable stops scrolling.
     *
     * @param { function } event - Callback function, triggered when the scrollable stops scrolling.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollStop(event: (() => void) | undefined): this;
    /**
     * Limit the max speed when fling.
     *
     * @param { number } speedLimit - Max fling speed, the minimum value is 0, the maximum value is not limited.
     *                                The unit is vp/s.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    flingSpeedLimit(speedLimit: number | undefined): this;
    /**
     * Clip the content of the scrollable container, excluding background.
     *
     * @param { ContentClipMode | RectShape } clip - A value from enum ContentClipMode or a customized clip rect.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    clipContent(clip: ContentClipMode | RectShape | undefined): this;
    /**
     * Set the sensitivity of rotating crown.
     *
     * @param { Optional<CrownSensitivity> } sensitivity - The sensitivity of rotating crown, default value is { MEDIUM }.
     * @returns { T } The component instance.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * Controls whether the scrollable scrolls back to top when status bar is clicked.
     *
     * @param { boolean } backToTop - whether the scrollable scrolls back to top when status bar is clicked.
     * The default value is false.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    backToTop(backToTop: boolean | undefined): this;
}
