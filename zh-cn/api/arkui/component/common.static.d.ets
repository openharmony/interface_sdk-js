'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 */
import { ComponentBuilder } from './builder';
import OriginalContext from '../../application/Context';
import { Resource } from '../../global/resource';
import pointer from '../../@ohos.multimodalInput.pointer';
import image from '../../@ohos.multimedia.image';
import unifiedDataChannel from '../../@ohos.data.unifiedDataChannel';
import promptAction, { LevelMode } from '../../@ohos.promptAction';
import uniformTypeDescriptor from '../../@ohos.data.uniformTypeDescriptor';
import Want from '../../@ohos.app.ability.Want';
import { IntentionCode } from '../../@ohos.multimodalInput.intentionCode';
import { SymbolGlyphModifier } from '../../arkui/SymbolGlyphModifier';
import { ImageModifier } from '../../arkui/ImageModifier';
import { CircleShape, EllipseShape, PathShape, RectShape } from '../../@ohos.arkui.shape';
import uiObserver from '@ohos.arkui.observer';
import { UIContext as _UIContext } from '../../@ohos.arkui.UIContext';
import { DrawContext as _DrawContext, LengthMetrics } from '../../arkui/Graphics';
import uiEffect from '../../@ohos.graphics.uiEffect';
import { FocusBoxStyle, FocusPriority } from "./focus";
import { ComponentContent } from '../../arkui/ComponentContent';
import { ResizableOptions } from "./image";
import intl from '../../@ohos.intl';
import { ButtonType, ButtonStyleMode, ButtonRole } from "./button";
import { Area, ResourceColor, Dimension, ResourceStr, Font, Length, EdgeColors, LocalizedEdgeColors, BorderRadiuses, EdgeWidths, LocalizedEdgeWidths, SizeOptions, Bias, EdgeStyles, Position, LocalizedBorderRadiuses, Margin, ChainWeightOptions, Padding, LocalizedPadding, LocalizedMargin, BorderOptions, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, ConstraintSizeOptions, EdgeWidth, DirectionalEdgesT, VoidCallback, ColorMetrics, AccessibilityActionOptions, ScrollBarMargin, Coordinate2D, AccessibilityCustomAction, AccessibilityNextFocusParams } from "./units";
import { BaseGestureEvent, GestureRecognizer, TouchRecognizer, GestureJudgeResult, GestureType, GestureMask, GestureHandler, GesturePriority, GestureInfo } from "./gesture";
import { ScrollState } from "./list";
import { AccessibilityHoverType, GestureCollectIntervention, Curve, PlayMode, SharedTransitionEffectType, KeySource, BorderStyle, HorizontalAlign, LocalizedAlignment, RenderStrategy, VerticalAlign, MouseButton, MouseAction, FontWeight, TouchType, FontStyle, Color, ColoringStrategy, Placement, ArrowPointPosition, ClickEffectLevel, NestedScrollMode, HitTestMode, Alignment, ImageRepeat, ImageSize, HoverEffect, Visibility, ItemAlign, Direction, Axis, GradientDirection, FunctionKey, ModifierKey, ObscuredReasons, RenderFit, LineCapStyle, LineJoinStyle, PixelRoundCalcPolicy, TextDecorationType, TextDecorationStyle, KeyType, ResponseType, BarState, EdgeEffect, ScrollSource, InteractionHand, AxisAction, AxisType, AxisModel, CrownAction, FocusDrawLevel, CrownSensitivity, IlluminatedType, ResponseRegionSupportedTool, TipsAnchorType, InputEventInterceptAction, GestureShortcut, EdgeLightPosition } from "./enums";
import { TextRange } from "./textCommon";
import { StyledString } from "./styledString";
import { CustomBuilder, WrappedBuilder, CustomBuilderT } from './builder';
import { RecordData } from '../../@ohos.base';
import curves from '../../@ohos.curves';
import matrix4 from '../../@ohos.matrix4';
import { AvoidanceMode } from './select';
import uiMaterial from '../../@ohos.arkui.uiMaterial';
import { OnScrollFrameBeginCallback } from "./scroll";
import dragController from '../../@ohos.arkui.dragController';
/**
 * Define the ratio of characters entered by the the percentage of InputCounterOptions.
 *
 * @interface InputCounterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface InputCounterOptions {
    /**
     * It is the numerator bit of the percentage and used as a threshold. If the number of characters input
     * reaches the maximum number of characters multiplied by this threshold, the counter is displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>Threshold percentage for displaying the character counter.
     * <br>The character counter is displayed when the number of characters that have been entered is greater than
     * the maximum number of characters multiplied by the threshold percentage value.
     * <br>When displayed, the character counter is in the following format:
     * <br>Number of characters that have been entered/Maximum number of characters allowed.
     * <br>It is visible when the number of characters entered is greater than
     * the character limit multiplied by the threshold percentage value.
     * <br>Value range: [1, 100]
     * <br>If the value is not an integer, it is rounded down to the nearest integer.
     * <br>If the value exceeds the valid value range, the character counter is not displayed.
     * <br>If the value is <em>undefined</em>, the character counter is displayed, but this parameter has no effect.
     * </p>
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    thresholdPercentage?: double;
    /**
     * If the current input character count reaches the maximum character count and users want to exceed the
     * normal input, the border will turn red. If this parameter is true, the red border displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>Whether to highlight the text box border and character counter subscript in red.
     * <br>If options is not set, the text box border and character counter subscript turn red
     * <br>when the number of characters entered reaches the limit.
     * <br>If the character counter is displayed and thresholdPercentage is set to a valid value,
     * the text box border and character counter subscript turn red when the number of entered characters exceeds the limit.
     * <br>The value true (default) means to highlight the text box border and character counter subscript in red.
     * </p>
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    highlightBorder?: boolean;
    /**
     * It is the color of counter when textField hasn't wanted to exceed the maximum character count.
     * 
     * @type { ?ColorMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    counterTextColor?: ColorMetrics

    /**
     * It is the color of counter when textField wants to exceed the maximum character count.
     * 
     * @type { ?ColorMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    counterTextOverflowColor?: ColorMetrics
}
/**
 * Defines the options of decoration.
 *
 * @interface TextDecorationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextDecorationOptions {
    /**
     * The decoration type.
     *
     * @type { TextDecorationType | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: TextDecorationType | undefined;
    /**
     * Sets the color of decoration.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * The style value of decoration.
     *
     * @type { ?TextDecorationStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style?: TextDecorationStyle;
    /**
     * The scale value of decoration thickness.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    thicknessScale?: double;
}
/**
 * Provides an interface for the style of an divider including stroke width, color, start margin
 * and end margin
 *
 * @interface DividerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DividerStyle {
    /**
     * Define the stroke width of the divider
     *
     * @type { Length | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeWidth: Length | undefined;
    /**
     * Define the color of the divider
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * Define the start margin of the divider
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startMargin?: Length;
    /**
     * Define the end margin of the divider
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    endMargin?: Length;
}
/**
 * 该接口定义非number数据类型的动画运算规则。对非number类型的数据（如数组、结构体、颜色等）做动画，需要实现AnimatableArithmetic\<T\>接口中加法、减法、乘法和判断相等函数，使得该数据能参与动画的插值运算
 * 和识别该数据是否发生改变。即定义它们为实现了AnimatableArithmetic\<T\>接口的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AnimatableArithmetic<T> {
    /**
     * 定义数据类型的加法运算规则。
     *
     * @param { AnimatableArithmetic<T> } rhs - 加法运算的对象。
     * @returns { AnimatableArithmetic<T> } 加法运算的结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;
    /**
     * 定义该数据类型的减法运算规则。
     *
     * @param { AnimatableArithmetic<T> } rhs - 减法运算的对象。
     * @returns { AnimatableArithmetic<T> } 减法运算的结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;
    /**
     * 定义该数据类型的乘法运算规则。
     *
     * @param { double } scale - 乘法运算的系数。
     * @returns { AnimatableArithmetic<T> } 乘法运算的结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    multiply(scale: double): AnimatableArithmetic<T>;
    /**
     * 定义该数据类型的相等判断规则。
     *
     * @param { AnimatableArithmetic<T> } rhs - 和自身比较相等的另一个数据对象。
     * @returns { boolean } 是否相等。返回true表示相等，返回false表示不相等。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    equals(rhs: AnimatableArithmetic<T>): boolean;
}
/**
  * ReuseId callback type. It is used to compute reuseId.
  *
  * @typedef { function } ReuseIdCallback
  * @returns { string }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
export type ReuseIdCallback = () => string;
/**
 * Defining the reusable configuration parameters.
 *
 * @interface ReuseOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ReuseOptions {
    /**
     * Defining reuseId function. The default reuseId is the custom component name.
     *
     * @type { ?ReuseIdCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reuseId?: ReuseIdCallback;
}
/**
 * Export Context.
 *
 * @typedef { OriginalContext } Context
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Context = OriginalContext;
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Configuration {
    /**
     * Set colorMode.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly colorMode: string;
    /**
     * Set fontScale.
     *
     * @type { double }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly fontScale: double;
}
/**
 * The data type used to describe a rectangular area.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Rectangle {
    /**
     * x:Horizontal coordinate
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: Length;
    /**
     * y:Vertical axis coordinate.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: Length;
    /**
     * Sets the width of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length;
    /**
     * Sets the height of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: Length;
}
/**
 * Defines the response region interface.
 * 
 * @interface ResponseRegion
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ResponseRegion {
  /**
   *  The event tool type applicable to this response region.
   * 
   * @type { ?ResponseRegionSupportedTool }
   * @default ResponseRegionSupportedTool.ALL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  tool?: ResponseRegionSupportedTool;

  /**
   * Horizontal axis coordinate
   * 
   * @type { ?LengthMetrics }
   * @default LengthMetrics.vp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  x?: LengthMetrics;

  /**
   * Vertical axis coordinate.
   * 
   * @type { ?LengthMetrics }
   * @default LengthMetrics.vp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  y?: LengthMetrics;

  /**
   * Sets the width of the current touchRect.
   * 
   * @type { ?(LengthMetrics | string) }
   * @default LengthMetrics.percent(1)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width?: LengthMetrics | string;

  /**
   * Sets the height of the current touchRect.
   * 
   * @type { ?(LengthMetrics | string) }
   * @default LengthMetrics.percent(1)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height?: LengthMetrics | string;
}
/**
 * 设置动画期望的帧率。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ExpectedFrameRateRange {
    /**
     * 期望的最小帧率，单位为帧/秒（fps）。
     * 
     * 取值范围为[0, 设备最大帧率]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    min: int;
    /**
     * 期望的最大帧率，单位为帧/秒（fps）。
     * 
     * 取值范围为[min, 设备最大帧率]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    max: int;
    /**
     * 期望的最优帧率，单位为帧/秒（fps）。
     * 
     * 取值范围为[min, max]。设置为0时，将跟随应用的帧率。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    expected: int;
}
/**
 * global $r function
 *
 * @param { string } value
 * @param { RecordData[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function $r(value: string, ...params: RecordData[]): Resource;
/**
 * global $rawfile function
 *
 * @param { string } value name of the file in the resources/rawfile directory of the project.
 *     When referencing resources of the Resource type, make sure the data type is the same as
 *     that of the attribute method. For example, if an attribute method supports the
 *     string | Resource types, the data type of the Resource type must be string.
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function $rawfile(value: string): Resource;
/**
 * Defines the same page mode
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilitySamePageMode {
    /**
    * the first page and root page event is not send.but if application load new page whith navigation,the page event will be sent.
    * this mode is to solve skipping focus
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SEMI_SILENT = 0,
    /**
     * the all page event is not send
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FULL_SILENT = 1
}
/**
 * Enum for accessibility component type
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilityRoleType {
    /**
    * ActionSheet component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ACTION_SHEET = 0,
    /**
    * AlertDialog component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ALERT_DIALOG = 1,
    /**
    * AlphabetIndexer component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    INDEXER_COMPONENT = 2,
    /**
    * badge component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    BADGE_COMPONENT = 3,
    /**
    * blank component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    BLANK = 4,
    /**
    * button component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    BUTTON = 5,
    /**
    * button component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    BACK_BUTTON = 6,
    /**
    * sheet drag bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SHEET_DRAG_BAR = 7,
    /**
    * calendar picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CALENDAR_PICKER = 8,
    /**
    * calendar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CALENDAR = 9,
    /**
    * canvas component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CANVAS = 10,
    /**
    * canvas gradient component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CANVAS_GRADIENT = 11,
    /**
    * canvas pattern component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CANVAS_PATTERN = 12,
    /**
    * checkbox component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CHECKBOX = 13,
    /**
    * checkbox group component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CHECKBOX_GROUP = 14,
    /**
    * circle component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CIRCLE = 15,
    /**
    * column split component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    COLUMN_SPLIT = 16,
    /**
    * column component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    COLUMN = 17,
    /**
    * canvas rendering context 2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CANVAS_RENDERING_CONTEXT_2D = 18,
    /**
    * chart component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CHART = 19,
    /**
    * counter component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
     * @since 23 static
    */
    COUNTER = 20,
    /**
    * counter modal component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CONTAINER_MODAL = 21,
    /**
    * data panel component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    DATA_PANEL = 22,
    /**
    * data picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    DATE_PICKER = 23,
    /**
    * dialog component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    DIALOG = 24,
    /**
    * divider component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    DIVIDER = 25,
    /**
    * drag bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    DRAG_BAR = 26,
    /**
    * effect component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    EFFECT_COMPONENT = 27,
    /**
    * ellipse component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ELLIPSE = 28,
    /**
    * flex component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    FLEX = 29,
    /**
    * flow item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    FLOW_ITEM = 30,
    /**
    * form component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    FORM_COMPONENT = 31,
    /**
    * form link component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    FORM_LINK = 32,
    /**
    * gauge component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GAUGE = 33,
    /**
    * grid component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GRID = 34,
    /**
    * grid col component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GRID_COL = 35,
    /**
    * grid container component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GRID_CONTAINER = 36,
    /**
    * grid item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GRID_ITEM = 37,
    /**
    * grid row component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    GRID_ROW = 38,
    /**
    * hyperlink component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    HYPERLINK = 39,
    /**
    * image component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    IMAGE = 40,
    /**
    * image animator component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    IMAGE_ANIMATOR = 41,
    /**
    * image bitmap component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    IMAGE_BITMAP = 42,
    /**
    * image data component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    IMAGE_DATA = 43,
    /**
    * image span component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    IMAGE_SPAN = 44,
    /**
    * label component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LABEL = 45,
    /**
    * line component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LINE = 46,
    /**
    * list component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LIST = 47,
    /**
    * list item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LIST_ITEM = 48,
    /**
    * list item group component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LIST_ITEM_GROUP = 49,
    /**
    * loading progress component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    LOADING_PROGRESS = 50,
    /**
    * marquee component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    MARQUEE = 51,
    /**
    * matrix2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    MATRIX2D = 52,
    /**
    * menu component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    MENU = 53,
    /**
    * menu item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    MENU_ITEM = 54,
    /**
    * menu item group component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    MENU_ITEM_GROUP = 55,
    /**
    * navdestination component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAV_DESTINATION = 56,
    /**
    * navrouter component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAV_ROUTER = 57,
    /**
    * navigation component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAVIGATION = 58,
    /**
    * navigation bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAVIGATION_BAR = 59,
    /**
    * navigation menu component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAVIGATION_MENU = 60,
    /**
    * navigator component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    NAVIGATOR = 61,
    /**
    * offscreen canvas component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    OFFSCREEN_CANVAS = 62,
    /**
    * offscreen canvas rendering context2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    OFFSCREEN_CANVAS_RENDERING_CONTEXT2D = 63,
    /**
    * option component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    OPTION = 64,
    /**
    * panel component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PANEL = 65,
    /**
    * paper page component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PAPER_PAGE = 66,
    /**
    * path component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PATH = 67,
    /**
    * path 2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PATH2D = 68,
    /**
    * pattern lock component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PATTERN_LOCK = 69,
    /**
    * picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PICKER = 70,
    /**
    * picker view component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PICKER_VIEW = 71,
    /**
    * plugin component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PLUGIN_COMPONENT = 72,
    /**
    * polygon component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    POLYGON = 73,
    /**
    * polyline component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    POLYLINE = 74,
    /**
    * pop up component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    POPUP = 75,
    /**
    * progress component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PROGRESS = 76,
    /**
    * qr code component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    QRCODE = 77,
    /**
    * radio component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RADIO = 78,
    /**
    * rating component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RATING = 79,
    /**
    * rect component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RECT = 80,
    /**
    * refresh component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    REFRESH = 81,
    /**
    * relative container component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RELATIVE_CONTAINER = 82,
    /**
    * remote window component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    REMOTE_WINDOW = 83,
    /**
    * rich editor component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RICH_EDITOR = 84,
    /**
    * rich text component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    RICH_TEXT = 85,
    /**
    * rolepager component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ROLE_PAGER = 86,
    /**
    * row component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ROW = 87,
    /**
    * row split component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ROW_SPLIT = 88,
    /**
    * scroll component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SCROLL = 89,
    /**
    * scroll bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SCROLL_BAR = 90,
    /**
    * search component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SEARCH = 91,
    /**
    * search field component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SEARCH_FIELD = 92,
    /**
    * select component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SELECT = 93,
    /**
    * shape component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SHAPE = 94,
    /**
    * sidebar container component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SIDEBAR_CONTAINER = 95,
    /**
    * slider component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SLIDER = 96,
    /**
    * span component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SPAN = 97,
    /**
    * stack component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    STACK = 98,
    /**
    * stepper component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    STEPPER = 99,
    /**
    * stepper item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    STEPPER_ITEM = 100,
    /**
    * swiper component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SWIPER = 101,
    /**
    * swiper indicator component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SWIPER_INDICATOR = 102,
    /**
    * switch component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SWITCH = 103,
    /**
    * symbol glyph component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SYMBOL_GLYPH = 104,
    /**
    * tab content component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TAB_CONTENT = 105,
    /**
    * tab bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TAB_BAR = 106,
    /**
    * tabs component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TABS = 107,
    /**
    * text component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT = 108,
    /**
    * text clock component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_CLOCK = 109,
    /**
    * text entry component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_ENTRY = 110,
    /**
    * text input component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_INPUT = 111,
    /**
    * text picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_PICKER = 112,
    /**
    * text timer component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_TIMER = 113,
    /**
    * text area component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_AREA = 114,
    /**
    * text field component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TEXT_FIELD = 115,
    /**
    * time picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TIME_PICKER = 116,
    /**
    * title bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TITLE_BAR = 117,
    /**
    * toggler component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TOGGLER = 118,
    /**
    * uiextensioncomponent component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    UI_EXTENSION_COMPONENT = 119,
    /**
    * video component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    VIDEO = 120,
    /**
    * water flow component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    WATER_FLOW = 121,
    /**
    * web component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    WEB = 122,
    /**
    * xcomponent component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    XCOMPONENT = 123,
    /**
    * none component type: screen reader will not broadcast the component type.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    ROLE_NONE = 124
}
/**
 * Defines the callback type used in accessibility focus. The value of isFocus indicates whether
 * the current component is focused
 * @typedef {function} AccessibilityFocusCallback
 * @param {boolean} isFocus - if component is focused,isFocus will be true. else isFocus is false.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type AccessibilityFocusCallback = (isFocus: boolean) => void;

/**
 * Enum for accessibility action type
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilityAction {
  /**
  * undefined action type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
  UNDEFINED_ACTION = 0,
  /**
  * accessibility click action
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
  ACCESSIBILITY_CLICK = 1,
}

/**
 * Enum for the result of accessibility action intercept function
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilityActionInterceptResult {
  /**
  * intercept the accessibility action
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
  ACTION_INTERCEPT = 0,
  /**
  * the accessibility action can be continued
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
  ACTION_CONTINUE = 1,
  /**
  * the accessibility action need to bubble up for execution
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
  ACTION_RISE = 2,
}

/**
 * Defines the callback type used in accessibility action intercept.
 * The value of action indicates the accessibility action type.
 * @typedef { function } AccessibilityActionInterceptCallback
 * @param { AccessibilityAction } action - the enum of accessibility action type.
 * @returns { AccessibilityActionInterceptResult } the result of continuing to execute the action or interrupting it or bubbling up
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type AccessibilityActionInterceptCallback = (action: AccessibilityAction) => AccessibilityActionInterceptResult;

/**
 * 动画中定义onFinish回调的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FinishCallbackType {
    /**
     * 当整个动画结束并立即删除时，将触发回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    REMOVED = 0,
    /**
     * 当动画在逻辑上处于下降状态，但可能仍处于其长尾状态时，将触发回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LOGICALLY = 1
}
/**
 * Defines the touch test strategy object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TouchTestStrategy {
    /**
     * Custom dispatch has no effect; the system distributes events based on the hit status of the current node.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * The specified event is forwarded to a particular child node, and the system determines whether to
     * distribute the event to other sibling nodes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FORWARD_COMPETITION = 1,
    /**
     * The specified event is forwarded to a particular child node, and the system no longer distributes
     * the event to other sibling nodes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FORWARD = 2
}
/**
 * 动画效果相关参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AnimateParam {
    /**
     * 动画持续时间，单位为毫秒。
     * 
     * 默认值：1000
     * 
     * **说明**：1. API版本26.0.0之前，在ArkTS卡片上最大动画持续时间为1000毫秒，若超出则固定为1000毫秒。从API版本26.0.0开始，在ArkTS卡片上最大动画持续时间调整为2000毫秒。
     * 
     * 2. 可以通过在持续时间为0的动画闭包函数中改变属性，以实现停止该属性动画的效果。
     * 3. 设置小于0的值时按0处理。
     * 4. 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
     * 5. curve配置[springMotion]{@link @ohos.curves:curves.springMotion}、[responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}、[interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}曲线时，duration不生效。
     *
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    duration?: int;
    /**
     * 动画播放速度，值越大动画播放越快，值越小播放越慢，为0时无动画效果。
     * 
     * 当设置为+∞时，动画会在当帧结束，动画结束回调会立即执行。
     * 
     * 默认值：1.0
     * 
     * 取值范围：[0, +∞)
     * 
     * **说明**：当设置小于0的值时按1处理。
     *
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tempo?: double;
    /**
     * 动画曲线。
     * 
     * 推荐以Curve或ICurve形式指定。
     * 
     * 当类型为string时，为动画插值曲线，仅支持以下可选值：
     * 
     * "linear"：动画线性变化。
     * 
     * "ease"：动画开始和结束时的速度较慢，cubic-bezier(0.25, 0.1, 0.25, 1.0)。
     * 
     * "ease-in"：动画播放速度先慢后快，cubic-bezier(0.42, 0.0, 1.0, 1.0)。
     * 
     * "ease-out"：动画播放速度先快后慢，cubic-bezier(0.0, 0.0, 0.58, 1.0)。
     * 
     * "ease-in-out"：动画播放速度先加速后减速，cubic-bezier(0.42, 0.0, 0.58, 1.0)。
     * 
     * "fast-out-slow-in"：标准曲线，cubic-bezier(0.4, 0.0, 0.2, 1.0)。
     * 
     * "linear-out-slow-in"：减速曲线，cubic-bezier(0.0, 0.0, 0.2, 1.0)。
     * 
     * "fast-out-linear-in"：加速曲线，cubic-bezier(0.4, 0.0, 1.0, 1.0)。
     * 
     * "friction"：阻尼曲线，cubic-bezier(0.2, 0.0, 0.2, 1.0)。
     * 
     * "extreme-deceleration"：急缓曲线，cubic-bezier(0.0, 0.0, 0.0, 1.0)。
     * 
     * "rhythm"：节奏曲线，cubic-bezier(0.7, 0.0, 0.2, 1.0)。
     * 
     * "sharp"：锐利曲线，cubic-bezier(0.33, 0.0, 0.67, 1.0)。
     * 
     * "smooth"：平滑曲线，cubic-bezier(0.4, 0.0, 0.4, 1.0)。
     * 
     * "cubic-bezier(x1, y1, x2, y2)"：三次贝塞尔曲线，x1、x2的值必须处于0-1之间。例如"cubic-bezier(0.42, 0.0, 0.58, 1.0)"。
     * 
     * "steps(number,step-position)"：阶梯曲线，number必须设置，为正整数，step-position参数可选，支持设置start或end，默认值为end。例如"steps(3,start)"。
     * 
     * "interpolating-spring(velocity,mass,stiffness,damping)"：具体参数含义参考
     * [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}。
     * 
     * "responsive-spring-motion(response,dampingFraction,overlapDuration)"：具体参数含义参考
     * [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}。
     * 
     * "spring(velocity,mass,stiffness,damping)"：具体参数含义参考[springCurve]{@link @ohos.curves:curves.springCurve}。
     * 
     * "spring-motion(response,dampingFraction,overlapDuration)"：具体参数含义参考
     * [springMotion]{@link @ohos.curves:curves.springMotion}。
     * 
     * 默认值：Curve.EaseInOut
     *
     * @default Curve.EaseInOut
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    curve?: Curve | string | ICurve;
    /**
     * 动画延迟播放时间，单位为ms(毫秒)，默认不延时播放。
     * 
     * 默认值：0
     * 
     * 取值范围：(-∞, +∞)
     * 
     * **说明**：1.delay>=0为延迟播放，delay<0表示提前播放。对于delay<0的情况：当delay的绝对值小于实际动画时长，动画将在开始后第一帧直接运动到delay绝对值的时刻的状态；当delay的绝对值大于等于
     * 实际动画时长，动画将在开始后第一帧直接运动到终点状态。其中实际动画时长等于单次动画时长乘以动画播放次数。
     * 
     * 2. 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    delay?: int;
    /**
     * 动画播放次数。默认播放一次，设置为-1时表示无限次播放。设置为0时表示无动画效果。
     * 
     * 默认值：1 
     * 
     * 取值范围：[-1, +∞)
     * 
     * **说明**：设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    iterations?: int;
    /**
     * 动画播放模式，默认播放完成后从头开始播放。
     * 
     * 默认值：PlayMode.Normal
     * 
     * 相关使用约束请参考PlayMode说明。
     *
     * > **PlayMode说明：**
     * >
     * > - PlayMode推荐使用PlayMode.Normal和PlayMode.Alternate，此场景下动画的第一轮是正向播放的。如使用PlayMode.Reverse和PlayMode.AlternateReverse，则动画
     * > 的第一轮是逆向播放的，在动画刚开始时会跳变到终止状态，然后逆向播放动画。
     * >
     * > - 使用PlayMode.Alternate或PlayMode.AlternateReverse时，开发者应保证动画最终状态和状态变量的取值一致，即应保证动画的最后一轮是正向播放的。使用PlayMode.Alternate时，
     * > iterations应为奇数。使用PlayMode.AlternateReverse时，iterations应为偶数。
     * >
     * > - 不推荐使用PlayMode.Reverse，此场景下不仅会导致动画刚开始就跳变到终止状态，也会导致动画最终状态和状态变量的取值不同。
     *
     * @default PlayMode.Normal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    playMode?: PlayMode;
    /**
     * 动画播放完成回调。UIAbility从前台切换至后台时会立即结束仍在步进中的有限循环动画，触发播放完成回调。
     * 
     * 在设置的开发者选项中关闭过渡动画，以及tempo设置为+∞时，动画播放完成回调会立即执行。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onFinish?: () => void;
    /**
     * 在动画中定义onFinish回调的类型。
     * 
     * 默认值：FinishCallbackType.REMOVED
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    finishCallbackType?: FinishCallbackType;
    /**
     * 设置动画的期望帧率。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    expectedFrameRateRange?: ExpectedFrameRateRange;
}
/**
 * 曲线对象。
 *
 * @typedef { curves.ICurve } ICurve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ICurve = curves.ICurve;
/**
 * 矩阵对象接口。
 *
 * @typedef { matrix4.Matrix4Transit } Matrix4Transit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Matrix4Transit = matrix4.Matrix4Transit;
/**
 * 设置组件的运动路径。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MotionPathOptions {
    /**
     * 位移动画的运动路径，使用[SVG路径描述规范](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg路径描述规范)。path中支持使
     * 用start和end进行起点和终点的替代，如：'Mstart.x start.y L50 50 Lend.x end.y Z'，更多说明请参考
     * [绘制路径](docroot://ui/ui-js-components-svg-path.md)。
     * 
     * 设置为空字符串时相当于不设置路径动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    path: string;
    /**
     * 运动路径的起点。
     * 
     * 默认值：0.0
     * 
     * 取值范围：[0.0, 1.0]
     * 
     * 设置小于0.0或大于1.0的值时，按默认值0.0处理。
     *
     * @default 0.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    from?: double;
    /**
     * 运动路径的终点。
     * 
     * 默认值：1.0
     * 
     * 取值范围：[0.0, 1.0]
     * 
     * 设置小于0.0或大于1.0的值时，按默认值1.0处理，且满足to值 >= 异常值处理后的from值。
     *
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    to?: double;
    /**
     * 是否跟随路径进行旋转。true代表跟随路径进行旋转，false代表不跟随路径进行旋转。
     * 
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rotatable?: boolean;
}
/**
 * 共享元素转场动画参数。
 * 
 * > **说明：**
 * >
 * > type为SharedTransitionEffectType.Exchange时motionPath才会生效。
 * >
 * > type为SharedTransitionEffectType.Exchange时，效果为对匹配的共享元素产生位置、大小的过渡（可通过配置组件的border观察），不支持内容的过渡效果。例如，Text组件在两个页面上使用不同的
 * > fontSize属性值，即绘制内容有大小差异，在sharedTransition动画结束后的最后一帧，Text的fontSize效果会突变为跳转目标页fontSize的效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface sharedTransitionOptions {
    /**
     * 描述共享元素转场动效播放时长。
     * 
     * 默认值：1000 
     * 
     * 单位：毫秒
     * 
     * 取值范围：[0, +∞)
     *
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    duration?: int;
    /**
     * 动画曲线。
     * 
     * 推荐以Curve或ICurve形式指定。
     * 
     * 当类型为string时，为动画插值曲线，取值参考
     * [AnimateParam](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#animateparam对象说明)的curve参数。
     * 
     * 默认值：Curve.Linear
     *
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    curve?: Curve | string | ICurve;
    /**
     * 延迟播放时间。
     * 
     * 取值范围：[0, +∞)
     * 
     * 默认值：0 
     * 
     * 单位：毫秒
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    delay?: int;
    /**
     * 运动路径信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    motionPath?: MotionPathOptions;
    /**
     * 设置Z轴。
     * 
     * 取值范围：(-∞, +∞)
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    zIndex?: int;
    /**
     * 动画类型。
     * 
     * 默认值：SharedTransitionEffectType.Exchange
     *
     * @default SharedTransitionEffectType.Exchange
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: SharedTransitionEffectType;
}
/**
 * Defines the options of geometry transition.
 *
 * @interface GeometryTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GeometryTransitionOptions {
    /**
     * 仅用于if范式下标记始终在组件树上的组件是否跟随做共享动画。true代表跟随做共享动画，false代表不跟随做共享动画。
     * 
     * 默认值：false
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    follow?: boolean;

    /**
     * 决定共享元素动画过程中in/out组件在组件树上层级位置的移动策略，默认值：TransitionHierarchyStrategy.ADAPTIVE。
     * 
     * 实际影响绑定的in/out组件相对其他组件的前后重叠关系，常规情况下慎重修改。
     * 
     * 建议在发现共享元素动画过程中出现组件前后重叠关系错误时需要调整再设置此参数。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @default TransitionHierarchyStrategy.ADAPTIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    hierarchyStrategy?: TransitionHierarchyStrategy
}
/**
 * Defines the options of linear gradient.
 *
 * @interface LinearGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LinearGradientOptions {
    /**
     * Defines starting angle of linear gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(double | string) }
     * @default 180
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle?: double | string;
    /**
     * Defines the direction of linear gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?GradientDirection }
     * @default GradientDirection.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction?: GradientDirection;
    /**
     * Defines color description for gradients.
     *
     * Anonymous Object Rectification.
     * @type { Array<[ResourceColor, double]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colors: Array<[
        ResourceColor,
        double
    ]>;
    /**
     * Defines gradient colors with repeated coloring.
     *
     * Anonymous Object Rectification.
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeating?: boolean;
}

/**
 * 共享元素动画过程中in/out组件层级位置移动策略枚举。
 * 
 * | 名称   | 值 | 说明 |
 * | ------ | - | ---- |
 * | NONE  | 0 | 无层级提拉，in/out组件保持原来的层级位置，受父组件scale、position影响。 |
 * | ADAPTIVE | 1 | 有层级提拉，in/out组件中相对低层级的组件被提拉至组件树上in/out组件相对高层级的位置上。
 * 
 * 此模式还会导致被提拉的组件与父组件解绑，不受父组件scale、position影响。
 * 
 * 例如in组件层级高于out组件，开启层级提拉后会在动画过程中将out组件从自己的父组件处解耦，并提拉至in组件的层级位置处，in组件层级位置不变。|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TransitionHierarchyStrategy {

  /**
   * None mode.
   * Source and target staty in the original level in the hierarchy during geometry transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * ADAPTIVE mode.
   * Lower level one of source and target is elevated to higher level of both,
   * indicating that two elements are in same high level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  ADAPTIVE = 1,
}

/**
 * Defines the options of sweep gradient.
 *
 * @interface SweepGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SweepGradientOptions {
    /**
     * Defines center point for angle gradient.
     *
     * Anonymous Object Rectification.
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    center: [
        Length,
        Length
    ];
    /**
     * Defines the starting point of angle gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(double | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: double | string;
    /**
     * Defines end point of angle gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(double | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: double | string;
    /**
     * Defines the rotation angle of the gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(double | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rotation?: double | string;
    /**
     * Defines color description for gradients.
     *
     * Anonymous Object Rectification.
     * @type { Array<[ResourceColor, double]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colors: Array<[
        ResourceColor,
        double
    ]>;
    /**
     * Defines color description in ColorMetrics format for gradients.
     * This parameter takes precedence over colors parameter.
     *
     * @type { ?Array<[ColorMetrics, double]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    metricsColors?: Array<[
        ColorMetrics,
        double
    ]>;
    /**
     * Defines gradient colors with repeated coloring.
     *
     * Anonymous Object Rectification.
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeating?: boolean;
}
/**
 * Defines the options of radial gradient.
 *
 * @interface RadialGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RadialGradientOptions {
    /**
     * Defines center point for radial gradient.
     *
     * Anonymous Object Rectification.
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
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
     * @stagemodelonly
     * @since 23 static
     */
    radius: Length;
    /**
     * Defines color description for gradients.
     *
     * Anonymous Object Rectification.
     * @type { Array<[ResourceColor, double]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colors: Array<[
        ResourceColor,
        double
    ]>;
    /**
     * Defines gradient colors with repeated coloring.
     *
     * Anonymous Object Rectification.
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeating?: boolean;
}
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TranslateOptions {
    /**
     * x轴的平移距离。
     * 
     * 类型为number时，单位为vp，取值范围为(-∞, +∞)。
     * 
     * 默认值：0
     * 
     * 类型为string时，形式参考[Length]{@link Length}的string类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double | string;
    /**
     * y轴的平移距离。
     * 
     * 类型为number时，单位为vp，取值范围为(-∞, +∞)。
     * 
     * 默认值：0
     * 
     * 类型为string时，形式参考[Length]{@link Length}的string类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: double | string;
    /**
     * z轴的平移距离。
     * 
     * 类型为number时，单位为vp，取值范围为(-∞, +∞)。
     * 
     * 默认值：0
     * 
     * 类型为string时，形式参考[Length]{@link Length}的string类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z?: double | string;
}
/**
 * > **说明：**
 * >
 * > 当组件同时设置了[rotate]{@link CommonMethod.rotate}和[scale]{@link CommonMethod.scale}属性时，centerX和centerY的取值会发生冲突，此时centerX和
 * > centerY的值以最后设定的属性的值为准。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScaleOptions {
    /**
     * x轴的缩放倍数。x>1时以x轴方向放大，0<x<1时以x轴方向缩小，x<0时沿x轴反向并缩放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double;
    /**
     * y轴的缩放倍数。y>1时以y轴方向放大，0<y<1时以y轴方向缩小，y<0时沿y轴反向并缩放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: double;
    /**
     * z轴的缩放倍数。z>1时以z轴方向放大，0<z<1时以z轴方向缩小，z<0时沿z轴反向并缩放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z?: double;
    /**
     * 变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标。取值可为string类型，如'50'，'50%'。
     * 
     * 单位：vp
     * 
     * 默认值：'50%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerX?: double | string;
    /**
     * 变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标。取值可为string类型，如'50'，'50%'。
     * 
     * 单位：vp
     * 
     * 默认值：'50%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerY?: double | string;
}
/**
 * Defines the align rule options of relative container.
 *
 * @interface VerticalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface VerticalAlignParam {
    /**
     * Specifies the anchor component
     *
     * Anonymous Object Rectification
     * @type { string } anchor
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * Sets the vertical alignment relative to the anchor component.
     *
     * Anonymous Object Rectification
     * @type { VerticalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: VerticalAlign;
}
/**
 * Defines the horizontal align rule options of relative container.
 *
 * @interface HorizontalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface HorizontalAlignParam {

    /**
     * Specifies the anchor component
     *
     * Anonymous Object Rectification
     * @type { string } anchor
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * Sets the horizontal alignment relative to the anchor component.
     *
     * Anonymous Object Rectification
     * @type { HorizontalAlign } align
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: HorizontalAlign;
}
/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AlignRuleOption {
    /**
     * The param of left align.
     *
     * @type { ?HorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    left?: HorizontalAlignParam;
    /**
     * The param of right align.
     *
     * @type { ?HorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    right?: HorizontalAlignParam;
    /**
     * The param of middle align.
     *
     * @type { ?HorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    middle?: HorizontalAlignParam;
    /**
     * The param of top align.
     *
     * @type { ?VerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    top?: VerticalAlignParam;
    /**
     * The param of bottom align.
     *
     * @type { ?VerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bottom?: VerticalAlignParam;
    /**
     * The param of center align.
     *
     * @type { ?VerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    center?: VerticalAlignParam;
    /**
     * Defines the bias ratio in horizontal and vertical direction.
     *
     * @type { ?Bias }
     * @default {horizontal:0.5,vertical:0.5}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bias?: Bias;
}
/**
 * Defines the localized horizontal align param of relative container.
 *
 * @interface LocalizedHorizontalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedHorizontalAlignParam {
    /**
     * ID of the component that serves as the anchor.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * Horizontal alignment mode relative to the anchor component.
     *
     * @type { HorizontalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: HorizontalAlign;
}
/**
 * Defines the localized vertical align param of relative container.
 *
 * @interface LocalizedVerticalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedVerticalAlignParam {
    /**
     * ID of the component that serves as the anchor.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * Vertical alignment mode relative to the anchor component.
     *
     * @type { VerticalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: VerticalAlign;
}
/**
 * Defines the Localized align rule options of relative container.
 *
 * @interface LocalizedAlignRuleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedAlignRuleOptions {
    /**
     * Left alignment with left-to-right scripts and right alignment with right-to-left scripts in the horizontal direction.
     *
     * @type { ?LocalizedHorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: LocalizedHorizontalAlignParam;
    /**
     * Right alignment with left-to-right scripts and left alignment with right-to-left scripts in the horizontal direction.
     *
     * @type { ?LocalizedHorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: LocalizedHorizontalAlignParam;
    /**
     * Center alignment in the horizontal direction.
     *
     * @type { ?LocalizedHorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    middle?: LocalizedHorizontalAlignParam;
    /**
     * Top alignment in the vertical direction.
     *
     * @type { ?LocalizedVerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    top?: LocalizedVerticalAlignParam;
    /**
     * Bottom alignment in the vertical direction.
     *
     * @type { ?LocalizedVerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bottom?: LocalizedVerticalAlignParam;
    /**
     * Center alignment in the vertical direction.
     *
     * @type { ?LocalizedVerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    center?: LocalizedVerticalAlignParam;
    /**
     * Offset of the component under the anchor constraints.
     * <br>The value is the ratio of the distance to the left/upper anchor to the total distance between anchors.
     *
     * @type { ?Bias }
     * @default {horizontal:0.5,vertical:0.5}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bias?: Bias;
}
/**
 * Enumerates the chain styles in relative container.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ChainStyle {
    /**
     * Child components are evenly distributed among constraint anchors.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SPREAD = 0,
    /**
     * All child components except the first and last ones are evenly distributed among constraint anchors.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SPREAD_INSIDE = 1,
    /**
     * There is no gap between child components in the chain.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PACKED = 2
}
/**
 * 组件旋转参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RotateOptions {
    /**
     * 旋转轴向量x坐标。
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double;
    /**
     * 旋转轴向量y坐标。
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: double;
    /**
     * 旋转轴向量z坐标。
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z?: double;
    /**
     * 变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标。取值可为string类型，如'50'，'50%'。
     * 
     * 单位：vp
     * 
     * 默认值：'50%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerX?: double | string;
    /**
     * 变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标。取值可为string类型，如'50'，'50%'。
     * 
     * 单位：vp
     * 
     * 默认值：'50%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerY?: double | string;
    /**
     * z轴锚点，即3D旋转中心点的z轴分量。
     * 
     * 默认值：0
     * 
     * 单位：px
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerZ?: double;
    /**
     * 相机放置的z轴坐标。数值大小表示视距，即相机到z=0平面的距离。取值的正负决定了相机观察的方向。当perspective=0，系统会自动计算适合的相机z轴位置，取值为负数。
     * 
     * 默认值：0
     * 
     * 单位：px
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    perspective?: double;
    /**
     * 旋转角度。取值为正时相对于旋转轴方向顺时针转动，取值为负时相对于旋转轴方向逆时针转动。取值可为string类型，如'90deg'。
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle: double | string;
}
/**
 * 指定各轴旋转角的旋转参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RotateAngleOptions {
  /**
   * X轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。
   * 
   * 默认值：0
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  angleX?: double | string;

  /**
   * Y轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。
   * 
   * 默认值：0
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  angleY?: double | string;

  /**
   * Z轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。
   * 
   * 默认值：0
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  angleZ?: double | string;

  /**
   * 变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标。
   * 
   * 单位：vp
   * 
   * 默认值：'50%'
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default '50%'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  centerX?: double | string;

  /**
   * 变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标。
   * 
   * 单位：vp
   * 
   * 默认值：'50%'
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default '50%'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  centerY?: double | string;

  /**
   * z轴锚点，即3D旋转中心点的z轴分量。
   * 
   * 默认值：0
   * 
   * 单位：px
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  centerZ?: double;

  /**
   * 相机放置的z轴坐标。数值大小表示视距，即相机到z=0平面的距离。取值的正负决定了相机观察的方向。当perspective=0，系统会自动计算适合的相机z轴位置，取值为负数。
   * 
   * 默认值：0
   * 
   * 单位：px
   * 
   * 取值范围：(-∞, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  perspective?: double;
}
/**
 * 转场边缘类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TransitionEdge {
    /**
     * 窗口的上边缘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP = 0,
    /**
     * 窗口的下边缘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM,
    /**
     * 窗口的起始边缘，LTR时为左边缘，RTL时为右边缘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START,
    /**
     * 窗口的终止边缘，LTR时为右边缘，RTL时为左边缘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END
}
/**
 * Defines the option of asymmetric transition.
 *
 * @interface AsymmetricTransitionOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AsymmetricTransitionOption {
    /**
     * TransitionEffect used for appearing
     *
     * @type { TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    appear: TransitionEffect;
    /**
     * TransitionEffect used for disappearing
     *
     * @type { TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disappear: TransitionEffect;
}
/**
 * Defined the draw modifier of node. Provides draw callbacks for the associated Node.
 * Each DrawModifier instance can be set for only one component. Repeated setting is not allowed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DrawModifier {
    /**
     * drawBehind Method. Executed before drawing associated Node.
     *
     * @param { DrawContext } drawContext - The drawContext used to draw.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    drawBehind(drawContext: DrawContext): void;

    /**
     * drawContent Method. Executed when associated Node is drawing, the default drawContent method will be replaced
     * if this method is set.
     *
     * @param { DrawContext } drawContext - The drawContext used to draw.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    drawContent(drawContext: DrawContext): void;

    /**
     * drawFront Method. Executed after drawing associated Node and its children.
     * @param { DrawContext } drawContext - The drawContext used to draw.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    drawFront(drawContext: DrawContext): void;

    /**
     * drawForeground Method. This method is executed after drawing the associated Node and its children.
     * It allows you to perform additional drawing operations on top of the already rendered content.
     * This can be useful for adding visual elements that should appear above the main content.
     *
     * @param { DrawContext } drawContext - The drawContext used to draw.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    drawForeground(drawContext: DrawContext): void;

    /**
     * Draws content in the overlay layer after the associated Node and all its children have been drawn.
     *
     * Custom drawing consists of five layers: Behind, Content, Front, Foreground, and Overlay.
     * - The Foreground and Overlay layers are drawn after child nodes.
     * - The Overlay layer differs from Foreground in that it can draw outside the bounds of the component.
     * @param { DrawContext } drawContext - The drawContext used to draw
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    drawOverlay(drawContext: DrawContext): void;
    /**
     * Invalidate the component, which will cause a re-render of the component.
     * No overloading is allowed or needed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    invalidate(): void;
}
/**
 * 定义TransitionEffect类指定转场效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TransitionEffect {
    /**
     * 禁用转场效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static get IDENTITY(): TransitionEffect;
    /**
     * 为组件添加透明度转场效果，出现时透明度从0到1、消失时透明度从1到0，相当于TransitionEffect.opacity(0)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static get OPACITY(): TransitionEffect;
    /**
     * 相当于TransitionEffect.asymmetric(TransitionEffect.move(TransitionEdge.START), TransitionEffect.move(
     * TransitionEdge.END))。从START边滑入，END边滑出。即在LTR模式下，从左侧滑入，右侧滑出；在RTL模式下，从右侧滑入，左侧滑出。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static get SLIDE(): TransitionEffect;
    /**
     * 指定出现时从右侧先缩小再放大滑入、消失时从左侧先缩小再放大滑出的转场效果。自带动画参数，也可覆盖动画参数，自带的动画参数时长600ms，指定动画曲线cubicBezierCurve(0.24, 0.0, 0.50, 1.0)，
     * 最小缩放比例为0.8。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static get SLIDE_SWITCH(): TransitionEffect;
    /**
     * 设置组件转场时的平移效果。
     *
     * @param { TranslateOptions } options - 组件转场时的平移效果，为插入时起点和删除时终点的值。<br/>-x：横向的平移距离。<br/>-y：纵向的平移距离。<br/>-z：竖向的平移距离。
     * @returns { TransitionEffect } 当前动画平移效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static translate(options: TranslateOptions): TransitionEffect;
    /**
     * 设置组件转场时的旋转效果。
     *
     * @param { RotateOptions } options - 组件转场时的旋转效果，为插入时起点和删除时终点的值。<br/>-x：横向的旋转向量分量。<br/>-y：纵向的旋转向量分量。<br/>-z：竖向的旋转向量分
     *     量。<br/>- centerX、centerY指旋转中心点，centerX和centerY默认值是"50%"，即默认以组件的中心点为旋转中心点。<br/>- 中心点为(0, 0)代表组件的左上角。<br/>-
     *     centerZ指z轴锚点，即3D旋转中心点的z轴分量，centerZ默认值是0。<br/>-perspective指视距，不支持perspective属性做转场动画。
     * @returns { TransitionEffect } 当前动画旋转效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static rotate(options: RotateOptions): TransitionEffect;
    /**
     * 设置组件转场时的缩放效果。
     *
     * @param { ScaleOptions } options - 组件转场时的缩放效果，为插入时起点和删除时终点的值。设置的缩放值在组件当前的scale属性上进行叠加，如组件当前scale值为0.8，当转场缩放值设置为0.5
     *     时，组件入场动画的缩放值将从0.4开始执行。<br/>-x：横向放大倍数（或缩小比例）。<br/>-y：纵向放大倍数（或缩小比例）。<br/>-z：当前为二维显示，该参数无效。<br/>- centerX、
     *     centerY指缩放中心点，centerX和centerY默认值是"50%"，即默认以组件的中心点为缩放中心点。<br/>- 中心点为(0, 0)代表组件的左上角。<br>**说明：** <br>设置centerX、
     *     centerY为非法字符串时（例如，"illegalString"），默认值为"0"。
     * @returns { TransitionEffect } 当前动画缩放效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static scale(options: ScaleOptions): TransitionEffect;
    /**
     * 设置组件转场时的透明度效果。
     *
     * @param { double } alpha - 组件转场时的透明度效果，为插入时起点和删除时终点的值。<br/>取值范围：[0, 1]<br/>**说明：** <br/>设置小于0的非法值按0处理，大于1的非法值按1处理。
     * @returns { TransitionEffect } 当前动画透明度效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static opacity(alpha: double): TransitionEffect;
    /**
     * 设置组件转场时从屏幕边缘滑入和滑出的效果。
     *
     * @param { TransitionEdge } edge - 组件转场时从屏幕边缘滑入和滑出的效果，本质为平移效果，为插入时起点和删除时终点的值。
     * @returns { TransitionEffect } 当前动画从屏幕边缘滑入和滑出的效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static move(edge: TransitionEdge): TransitionEffect;
    /**
     * 设置非对称的转场效果。
     *
     * @param { TransitionEffect } appear - 指定出现的转场效果。<br/>如不通过asymmetric函数构造TransitionEffect，则表明该效果在组件出现和消失时均生效。
     * @param { TransitionEffect } disappear - 指定消失的转场效果。<br/>如不通过asymmetric函数构造TransitionEffect，则表明该效果在组件出现和消失时均生效。
     * @returns { TransitionEffect } 当前动画非对称的转场效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static asymmetric(appear: TransitionEffect, disappear: TransitionEffect): TransitionEffect;
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'identity' | 'slideSwitch' } type - 转场类型。
     * @param { undefined } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'identity' | 'slideSwitch', effect: undefined);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'opacity' } type - 转场类型。
     * @param { double } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'opacity', effect: double);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'move' } type - 转场类型。
     * @param { TransitionEdge } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'move', effect: TransitionEdge);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'translate' } type - 转场类型。
     * @param { TranslateOptions } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'translate', effect: TranslateOptions);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'rotate' } type - 转场类型。
     * @param { RotateOptions } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'rotate', effect: RotateOptions);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'scale' } type - 转场类型。
     * @param { ScaleOptions } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'scale', effect: ScaleOptions);
    /**
     * 构造TransitionEffect对象。
     *
     * @param { 'asymmetric' } type - 转场类型。
     * @param { AsymmetricTransitionOption } effect - 转场参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(type: 'asymmetric', effect: AsymmetricTransitionOption);
    /**
     * 指定该TransitionEffect的动画参数。
     *
     * @param { AnimateParam } value - 动画参数。</br>该参数只用来指定动画参数，其入参AnimateParam的onFinish回调不生效。</br>如果通过combine进行
     *     TransitionEffect的组合，前一TransitionEffect的动画参数也可用于后一TransitionEffect。
     * @returns { TransitionEffect } 当前动画效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    animation(value: AnimateParam): TransitionEffect;
    /**
     * 对TransitionEffect进行链式组合，以形成包含多种转场效果的TransitionEffect。
     *
     * @param { TransitionEffect } transitionEffect - 被组合的过渡效果。
     * @returns { TransitionEffect } 组合过渡效应。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    combine(transitionEffect: TransitionEffect): TransitionEffect;
}
/**
 * ItemDragInfo object description
 *
 * @interface ItemDragInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ItemDragInfo {
    /**
     * Obtains the X coordinate of the drag window, in vp.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * Obtains the Y coordinate of the drag window, in vp.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
}
/**
 * Enum of using the effects template mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EffectType {
    /**
     * Define use the effects template defined by the parent effectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Define use the effects template defined by the window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    WINDOW_EFFECT = 1
}
/**
 * Defines the drag status before drag action.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PreDragStatus {
    /**
     * Define the status for user prepare to start long press gesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ACTION_DETECTING_STATUS = 0,
    /**
     * Define the status for user can start drag action.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    READY_TO_TRIGGER_DRAG_ACTION = 1,
    /**
     * Define the status for dragItem lift animation started.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LIFT_STARTED = 2,
    /**
     * Define the status for dragItem lift animation finished.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LIFT_FINISHED = 3,
    /**
     * Define the status for dragItem landing animation started.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LANDING_STARTED = 4,
    /**
     * Define the status for dragItem landing animation finished.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LANDING_FINISHED = 5,
    /**
     * Define the status for user cancel drag action.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ACTION_CANCELED_BEFORE_DRAG = 6,
    /**
     * Define the status for user to sense the availability of drag in advance.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREPARING_FOR_DRAG_DETECTION = 7
}
/**
 * DragItemInfo object description
 *
 * @interface DragItemInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragItemInfo {
    /**
     * Uses the pixelMap object for drawing.
     *
     * @type { ?PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pixelMap?: PixelMap;
    /**
     * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    builder?: CustomBuilder;
    /**
     * Sets the extra info for drag event.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    extraInfo?: string;
}

/**
 * Define animation functions for immediate distribution.
 * This interface depends on the UI context and cannot be used when the UI context is unclear. It is recommended to use
 * {@link ohos.arkui.UIContext.UIContext#animateToImmediately} to explicitly specify the UI context.
 *
 * @param { AnimateParam } value - Set animation effect parameters.
 * @param { VoidCallback } processor - Specify the closure function that displays dynamic effects,
 *     and the system will automatically insert transition animations for state changes caused by the closure function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function animateToImmediately(value: AnimateParam, processor: VoidCallback): void;

/**
 * Defines the namespace of focus controller.
 *
 * @namespace focusControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare namespace focusControl {
    /**
     * Request focus to the specific component by param: 'id/key'.
     *
     * @param { string } value
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    function requestFocus(value: string): boolean;
}
/**
 * Import the PointerStyle type object for setCursor.
 *
 * @typedef { pointer.PointerStyle } PointerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PointerStyle = pointer.PointerStyle;
/**
 * CursorControl
 *
 * @namespace cursorControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare namespace cursorControl {
    /**
     * Change the mouse cursor style by param: 'PointerStyle'.
     *
     * @param { PointerStyle } value - Cursor style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    function setCursor(value: PointerStyle): void;
    /**
     * Restore the default mouse cursor style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    function restoreDefault(): void;
}
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EventTarget {
    /**
     * Area information of the target element.
     *
     * @type { Area }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    area: Area;
    /**
     * Node id of current target.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id?: string;
}
/**
 * Defines the event source type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SourceType {
    /**
     * Unknown device type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Unknown = 0,
    /**
     * The mouse type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Mouse = 1,
    /**
     * The touch screen type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TouchScreen = 2,
    /**
     * The key type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    KEY = 4,
    /**
     * The joystick type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    JOYSTICK = 5
}
/**
 * Defines the event tool type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SourceTool {
    /**
     * Unknown input source.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Unknown = 0,
    /**
     * The finger type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Finger = 1,
    /**
     * The pen type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Pen = 2,
    /**
     * The mouse type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MOUSE = 7,
    /**
     * The touchpad type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOUCHPAD = 9,
    /**
     * The joystick type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    JOYSTICK = 10
}
/**
 * Defines the Border Image Repeat Mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum RepeatMode {
    /**
     * The source image's slices are tiled. Tiles beyond the border box will be clipped.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Repeat = 0,
    /**
     * The source image's slices are stretched to fill the border box.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Stretch = 1,
    /**
     * The source image's slices are tiled to fill the border box. Tiles may be compressed when needed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Round = 2,
    /**
     * The source image's slices are tiled to fill the border box. Extra space will be distributed in between tiles.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Space = 3
}
/**
 * 模糊样式类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BlurStyle {
    /**
     * 轻薄材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Thin = 0,
    /**
     * 普通厚度材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Regular,
    /**
     * 厚材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Thick,
    /**
     * 近距景深模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BACKGROUND_THIN,
    /**
     * 中距景深模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BACKGROUND_REGULAR,
    /**
     * 远距景深模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BACKGROUND_THICK,
    /**
     * 超远距景深模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BACKGROUND_ULTRA_THICK,
    /**
     * 关闭模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE,
    /**
     * 组件超轻薄材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COMPONENT_ULTRA_THIN = 8,
    /**
     * 组件轻薄材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COMPONENT_THIN = 9,
    /**
     * 组件普通材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COMPONENT_REGULAR = 10,
    /**
     * 组件厚材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COMPONENT_THICK = 11,
    /**
     * 组件超厚材质模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COMPONENT_ULTRA_THICK = 12
}
/**
 * 定义背景模糊激活策略。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BlurStyleActivePolicy {
    /**
     * 模糊效果跟随窗口焦点状态变化，非焦点不模糊，焦点模糊。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FOLLOWS_WINDOW_ACTIVE_STATE = 0,
    /**
     * 一直有模糊效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ALWAYS_ACTIVE = 1,
    /**
     * 一直无模糊效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ALWAYS_INACTIVE = 2
}
/**
 * enum color mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ThemeColorMode {
    /**
     * Defines the mode which is follow up with system.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SYSTEM = 0,
    /**
     * Defines the light mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LIGHT = 1,
    /**
     * Defines the dark mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DARK = 2
}

/**
 * enum color mode of pointing popup

 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum AnchoredColorMode {
    /**
     * Defines the mode which is follow up with system.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
    */
    FOLLOW_SYSTEM = 0,
    /**
     * Defines the mode which is follow up with target.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
    */
    FOLLOW_TARGET = 1
}

/**
 * Defines adaptive color
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AdaptiveColor {
    /**
     * Adaptive color mode is not used.
     * The default color is used as the mask color. Using a mode other than **DEFAULT** can be more time-consuming.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Adaptive color mode is used. The average color value of the color picking area is used as the mask color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AVERAGE = 1
}
/**
 * 全屏模态转场方式枚举类型，用于设置全屏模态转场类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ModalTransition {
    /**
     * 全屏模态上下切换动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 全屏模态无转场动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE,
    /**
     * 全屏模态透明度渐变动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ALPHA
}
/**
 * 继承自[BlurStyleOptions]{@link BlurStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BackgroundBlurStyleOptions extends BlurStyleOptions {
    /**
     * 模糊激活策略。
     * 
     * 默认值：BlurStyleActivePolicy.ALWAYS_ACTIVE
     *
     * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    policy?: BlurStyleActivePolicy;
    /**
     * 模糊不生效时使用的背景色。该参数需配合policy参数使用。当policy使模糊失效时，控件模糊效果会被移除，如果设置了inactiveColor会使用inactiveColor作为控件背景色。
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    inactiveColor?: ResourceColor;
}
/**
 * Defines the options of ForegroundBlurStyle
 *
 * @extends BlurStyleOptions
 * @interface ForegroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ForegroundBlurStyleOptions extends BlurStyleOptions {
}
/**
 * Defines the options of blur
 *
 * @interface BlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BlurOptions {
    /**
     * Fuzzy gray scale parameter. Undefined value means no grayscale.
     * @type { [double, double] | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    grayscale: [
        double,
        double
    ] | undefined;
}
/**
 * 系统自适应调节参数，系统会默认开启根据芯片算力进行自适应效果调节的能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SystemAdaptiveOptions {
    /**
     * 系统自适应调节参数，推荐不携带该参数。该参数只影响低算力设备，低算力设备的定义由设备厂商决定。在低芯片算力的设备上，会根据算力和负载等条件，自动决策是否使用低算力的近似效果替代原有效果，比如模糊效果会结合接口中携带的模糊相关参
     * 数值及其他低算力处理逻辑，进行自适应效果降级处理。如果想关闭该功能，可以将该标志置为true。
     * 
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disableSystemAdaptation?: boolean;
}
/**
 * Defines the options of blurStyle
 *
 * @interface BlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BlurStyleOptions {
    /**
     * Color mode used for the foreground blur.
     * <br>Default value: **ThemeColorMode.SYSTEM**.
     *
     * @type { ?ThemeColorMode }
     * @default ThemeColorMode.SYSTEM
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colorMode?: ThemeColorMode;
    /**
     * Adaptive color mode.
     * <br>Default value: **AdaptiveColor.DEFAULT**.
     *
     * @type { ?AdaptiveColor }
     * @default AdaptiveColor.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    adaptiveColor?: AdaptiveColor;
    /**
     * Foreground blur scale.
     * <br>Default value: **1.0**.
     * <br>Value range: [0.0, 1.0].
     *
     * @type { ?double }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale?: double;
    /**
     * Defines the options of blur
     *
     * @type { ?BlurOptions }
     * @default { grayScale: [0,0] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    blurOptions?: BlurOptions;
}
/**
 * 背景效果参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BackgroundEffectOptions {
    /**
     * 模糊半径，取值范围：[0, +∞)，默认为0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius: double | undefined;
    /**
     * 饱和度，取值范围：[0, +∞)，默认为1。推荐取值范围：[0, 50]。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    saturation?: double;
    /**
     * 亮度，取值范围：[0, +∞)，默认为1。推荐取值范围：[0, 2]。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    brightness?: double;
    /**
     * 颜色，默认透明色。
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * 背景模糊效果使用的取色模式，默认为DEFAULT。使用AVERAGE时color必须带有透明度，取色模式才生效。
     *
     * @default AdaptiveColor.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    adaptiveColor?: AdaptiveColor;
    /**
     * 灰阶模糊参数，默认为[0,0]。
     *
     * @default { grayScale: [0,0] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    blurOptions?: BlurOptions;
    /**
     * 模糊激活策略。
     * 
     * 默认值：BlurStyleActivePolicy.ALWAYS_ACTIVE
     *
     * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    policy?: BlurStyleActivePolicy;
    /**
     * 模糊不生效时使用的背景色。该参数需配合policy参数使用。当policy使模糊失效时，控件模糊效果会被移除，如果设置了inactiveColor会使用inactiveColor作为控件背景色。
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    inactiveColor?: ResourceColor;
}
/**
 * Defines the options of ForegroundEffect
 *
 * @interface ForegroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ForegroundEffectOptions {
    /**
     * Define the radius size of ForegroundEffect.The range of this value is [0, ∞). Undefined means 0.
     *
     * @type { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius: double | undefined;
}
/**
 * Provide an interface for the text style of picker
 *
 * @interface PickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PickerTextStyle {
    /**
     * Font color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * Text style.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    font?: Font;
}
/**
 * Provide an interface for the button style of picker
 *
 * @interface PickerDialogButtonStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PickerDialogButtonStyle {
    /**
     * Describes the button style.
     *
     * @type { ?ButtonType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: ButtonType;
    /**
     * Describes the button style.
     *
     * @type { ?ButtonStyleMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style?: ButtonStyleMode;
    /**
     * Describes the button role.
     *
     * @type { ?ButtonRole }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    role?: ButtonRole;
    /**
     * Describes the button text size.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontSize?: Length;
    /**
     * Describes the button text color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontColor?: ResourceColor;
    /**
     * Describes the button font weight.
     *
     * @type { ?(FontWeight | int | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontWeight?: FontWeight | int | string;
    /**
     * Describes the button font style.
     *
     * @type { ?FontStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontStyle?: FontStyle;
    /**
     * Describes the button font family.
     *
     * @type { ?(Resource | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontFamily?: Resource | string;
    /**
     * Describes the button background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * Describes the button border radius.
     *
     * @type { ?(Length | BorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderRadius?: Length | BorderRadiuses;
    /**
     * Define whether the button default to responding to the Enter key
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    primary?: boolean;
}
/**
 * Define the type of shadow
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ShadowType {
    /**
     * Define a color type of shadow
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COLOR = 0,
    /**
     * Blur.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BLUR = 1
}
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ShadowOptions {
    /**
     * Blur radius of the shadow.
     * Default value: 0px.
     *
     * @type { double | Resource | undefined }
     *     undefined means setting to default value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius: double | Resource | undefined;
    /**
     * Shadow type.
     * <br>Default value: **COLOR**.
     *
     * @type { ?ShadowType }
     * @default ShadowType.COLOR
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: ShadowType;
    /**
     * Color of the shadow. Default value: **Black**
     *
     * @type { ?(Color | string | Resource| ColoringStrategy) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: Color | string | Resource | ColoringStrategy;
    /**
     * Offset of the shadow along the x-axis. Unit is px. Default value is 0.
     *
     * @type { ?(double | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetX?: double | Resource;
    /**
     * Offset of the shadow along the y-axis. Unit is px. Default value is 0.
     *
     * @type { ?(double | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetY?: double | Resource;
    /**
     * Whether to fill the inside of the component with shadow. **true**: Fill
     * the inside of the component with shadow.
     * <br>**false**: Do not fill the inside of the component with shadow.
     * <br>The default value is **false**.
     * <br>**NOTE**<br>This attribute does not take effect in textShadow.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fill?: boolean;
}
/**
 * enum Shadow style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ShadowStyle {
    /**
     * Defines the super small default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_DEFAULT_XS = 0,
    /**
     * Defines the small default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_DEFAULT_SM = 1,
    /**
     * Defines the medium default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_DEFAULT_MD = 2,
    /**
     * Defines the large default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_DEFAULT_LG = 3,
    /**
     * Defines the small floating shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_FLOATING_SM = 4,
    /**
     * Defines the medium floating shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OUTER_FLOATING_MD = 5
}
/**
 * Defines the options of Shadow.
 *
 * @interface MultiShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MultiShadowOptions {
    /**
     * Shadow blur radius.
     * Unit: vp.
     * <p>**NOTE**:
     * <br>A value less than or equal to 0 is handled as the default value.
     * </p>
     *
     * @type { ?(double | Resource) }
     * @default 20
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: double | Resource;
    /**
     * Offset on the x-axis.
     * Unit: vp.
     *
     * @type { ?(double | Resource) }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetX?: double | Resource;
    /**
     * Offset on the y-axis.
     * Unit: vp.
     *
     * @type { ?(double | Resource) }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetY?: double | Resource;
}
/**
 * The types of expanded safe areas.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SafeAreaType {
    /**
     * Default non-safe area of the system, including the status bar and navigation bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SYSTEM = 0,
    /**
     * Non-safe area of the device like Notch or punch hole.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CUTOUT = 1,
    /**
     * Soft keyboard area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    KEYBOARD = 2
}
/**
 * Enumerates the safe area edges.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SafeAreaEdge {
    /**
     * Top edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP = 0,
    /**
     * Bottom edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM = 1,
    /**
     * Start edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START = 2,
    /**
     * End edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END = 3
}
/**
 * Describe the types for expanding the safe area in layout.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LayoutSafeAreaType {
    /**
     * Default non-safe area of the system, including the status bar and navigation bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SYSTEM = 0
}
/**
 *  Define the edges for expanding the safe area in layout.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LayoutSafeAreaEdge {
    /**
     * Top edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP = 0,
    /**
     * Bottom edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM = 1,
    /**
     * Start edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START = 2,
    /**
     * End edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END = 3,
    /**
     * Vertical edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    VERTICAL = 4,
    /**
     * Horizontal edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    HORIZONTAL = 5,
    /**
     * All edges of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ALL = 6
}
/**
 * 指定半模态的高度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SheetSize {
    /**
     * 指定半模态高度为半模态所在窗口的60%。
     * 
     * 在TV设备上半模态高度为半模态所在窗口的50%。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MEDIUM = 0,
    /**
     * 指定半模态高度几乎为半模态所在窗口的高度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LARGE,
    /**
     * 指定半模态高度为适应内容的高度。
     * 
     * **说明：**
     * 
     * 1. FIT_CONTENT是半模态容器高度去适应孩子builder根节点的布局。此场景下builder根节点的高度不能使用百分比，两者不能相互依赖彼此的布局。
     * 2. 如果半模态使用SheetSize.FIT_CONTENT自适应模式，且类型设置为居中弹窗或跟手弹窗，API version 22及之前版本，高度大于最大高度，则显示最大高度，高度小于最小高度，则显示最小高度。
     * 
     * API version 23开始，高度大于最大高度，则显示最大高度，高度小于最小高度，按照实际自适应高度生效。
     * 
     * 其中居中弹窗和跟手弹窗最小高度为320vp，最大高度为窗口短边的90%。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FIT_CONTENT = 2
}
/**
 * The modifier key state query function block.
 *
 * @typedef { function } ModifierKeyStateGetter
 * @param { Array<string> } keys - Indicate the modifier keys to query.
 * @returns { boolean } - the query result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ModifierKeyStateGetter = (keys: Array<string>) => boolean;
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BaseEvent {
     /**
     * Display area of the element that triggers the gesture event.
     *
     * @type { EventTarget }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    target: EventTarget;
    /**
     * Timestamp of the event.
     *
     * @type { long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
    /**
     * Event input device.
     *
     * @type { SourceType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    source: SourceType;
    /**
     * the Horizontal axis coordinate.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisHorizontal?: double;
    /**
     * the Vertical axis coordinate.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisVertical?: double;
    /**
     * Press pressure.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressure: double;
    /**
     * Angle between the projection of the stylus on the device plane and the x-axis.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tiltX: double;
    /**
     * Angle between the projection of the stylus on the device plane and the y-axis.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tiltY: double;
    /**
     * Indicates the angle at which the stylus rotates around the Z-axis.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rollAngle?: double;
    /**
     * Event input source.
     *
     * @type { SourceTool }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    sourceTool: SourceTool;
    /**
     * Query the modifier key press state, support 'ctrl'|'alt'|'shift'
     *
     * @type { ?ModifierKeyStateGetter }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getModifierKeyState?: ModifierKeyStateGetter;
    /**
     * Indicates the ID of the input device that triggers the current event.
     *
     * @type { ?int } [deviceId] The ID of the input device that triggers the current event
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deviceId?: int;
    /**
     * Indicates the screen ID on which the event occurred.
     *
     * @type { ?int } [targetDisplayId] The screen ID on which the event occurred.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetDisplayId?: int;
    /**
     * Indicates the Pinch axis coordinate.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisPinch?: double;
}
/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BorderImageOption {
    /**
     * Slice width of the upper left corner, upper right corner, lower left corner,
     * and lower right corner of the border image.
     *
     * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    slice?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Repeat mode of the source image's slices on the border.
     *
     * @type { ?RepeatMode }
     * @default RepeatMode.Stretch
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeat?: RepeatMode;
    /**
     * Border image source
     *
     * @type { ?(string | Resource | LinearGradientOptions) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    source?: string | Resource | LinearGradientOptions;
    /**
     * Width of the border image.
     *
     * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Amount by which the border image is extended beyond the border box.
     *
     * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outset?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Whether to fill the center of the border image.
     * true: Fill the center of the border image.
     * false: Do not fill the center of the border image.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fill?: boolean;
}
/**
 * Defines the policy of Layout
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LayoutPolicy {
    /**
     * The component fills its parent which means its size is as large as its parent.
     *
     * @type { LayoutPolicy }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly matchParent: LayoutPolicy;

    /**
     * The component fills its content which means its size is as large as its children but it is constained by its
     *     parent.
     *
     * @type { LayoutPolicy }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly wrapContent: LayoutPolicy;

    /**
     * The component fills its content which means its size is as large as its children.
     *
     * @type { LayoutPolicy }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly fixAtIdealSize: LayoutPolicy;
}
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ClickEvent extends BaseEvent {
    /**
     * X coordinate of the click relative to the upper left corner of the application screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * Y coordinate of the click relative to the upper left corner of the application screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * X coordinate of the click relative to the upper left corner of the application window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * Y coordinate of the click relative to the upper left corner of the application window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * X coordinate of the click point relative to the left edge of the clicked element.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * Y coordinate of the click point relative to the left edge of the clicked element.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * Whether the event is triggered by a left-hand or right-hand tap.
     *
     * @type { InteractionHand }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hand?: InteractionHand;
    /**
     * Prevent the default function.
     *
     * @throws { BusinessError } 100017 - Component does not support prevent function.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preventDefault(): void;
    /**
     * X coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;
    /**
     * Y coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;

 	/**
 	 * Gets the coordinates of the top-left corner of the current component based on its real-time position.
 	 *
 	 * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
 	 * real-time position.
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	default getCurrentLocalPosition(): Coordinate2D;
}
/**
 * The hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface HoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface HoverEvent extends BaseEvent {
    /**
     * X coordinate of the hover point relative to the left edge of the hover element.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double;
    /**
     * Y coordinate of the hover point relative to the upper edge of the hover element.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: double;
    /**
     * X coordinate of the hover point relative to the left edge of the current window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX?: double;
    /**
     * Y coordinate of the hover point relative to the upper edge of the current window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY?: double;
    /**
     * X coordinate of the hover point relative to the left edge of the device screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX?: double;
    /**
     * Y coordinate of the hover point relative to the upper edge of the device screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY?: double;
    /**
     * The blocking hover event pops up.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
    /**
     * X coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;
    /**
     * Y coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
}
/**
 * The mouse click action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface MouseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MouseEvent extends BaseEvent {
    /**
     * Mouse button of the click event.
     *
     * @type { MouseButton }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    button: MouseButton;
    /**
     * Mouse action of the click event.
     *
     * @type { MouseAction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: MouseAction;
    /**
     * X coordinate of the mouse pointer relative to the upper left corner of the application screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * Y coordinate of the mouse pointer relative to the upper left corner of the application screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * X coordinate of the mouse pointer relative to the upper left corner of the application window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * Y coordinate of the mouse pointer relative to the upper left corner of the application window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * X coordinate of the mouse pointer relative to the upper left corner of the component being clicked.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * Y coordinate of the mouse pointer relative to the upper left corner of the component being clicked.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * Stops the event from bubbling upwards or downwards.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
    /**
     * X axis offset relative to the previous reported mouse pointer position. When the mouse pointer is at
     * the edge of the screen, the value may be less than the difference of the X coordinate reported twice.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rawDeltaX?: double;
    /**
     * Y axis offset relative to the previous reported mouse pointer position. When the mouse pointer is at
     * the edge of the screen, the value may be less than the difference of the Y coordinate reported twice.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rawDeltaY?: double;
    /**
     * Array of all mouse buttons that are currently pressed.
     *
     * @type { ?MouseButton[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressedButtons?: MouseButton[];
    /**
     * X coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * Y coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
    /**
     * The unique handle for the event processing session. This handle must be used for any further operations on the
     * event. The system ensures that for a given finger, only one event with this handle can be active at a time.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    eventHandleId?: int;
    /**
     * Gets the coordinates of the top-left corner of the current component based on its real-time position.
     *
     * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
     * real-time position.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default getCurrentLocalPosition(): Coordinate2D;
    /**
     * Obtains all historical points of the current frame.
     *
     * @returns { MouseHistoricalPoint[] | undefined } - return all historical points. Undefined will be returned
     *     if the internal runtime environment is broken.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default getHistoricalPoints(): MouseHistoricalPoint[] | undefined;
}
/**
 * Defines the historical point information for mouse event.
 *
 * @interface MouseHistoricalPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface MouseHistoricalPoint {
  /**
   * X coordinate of the mouse pointer relative to the upper left corner of the component being clicked.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  x: double;
  
  /**
   * Y coordinate of the mouse pointer relative to the upper left corner of the component being clicked.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  y: double;
  
  /**
   * X coordinate of the mouse pointer relative to the upper left corner of the application screen.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayX: double;
  
  /**
   * Y coordinate of the mouse pointer relative to the upper left corner of the application screen.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayY: double;
  
  /**
   * X coordinate of the mouse pointer relative to the upper left corner of the application window.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  windowX: double;
  
  /**
   * Y coordinate of the mouse pointer relative to the upper left corner of the application window.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  windowY: double;
 
  /**
   * X coordinate of the point relative to the global display.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  globalDisplayX: double;
 
  /**
   * Y coordinate of the point relative to the global display.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  globalDisplayY: double;
  
  /**
   * Timestamp of the mouse event.
   *
   * @type { long }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  timestamp: long;
}
/**
 * The accessibility hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @typedef AccessibilityHoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AccessibilityHoverEvent extends BaseEvent {
    /**
     * Type of the accessibility hover event.
     *
     * @type { AccessibilityHoverType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: AccessibilityHoverType;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the event hit element.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the event hit element.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the device screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the device screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the current window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the current window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * X coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * Y coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
}
/**
 * Type of the touch event.
 *
 * @interface TouchObject
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TouchObject {
    /**
     * Type of the touch event.
     *
     * @type { TouchType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: TouchType;
    /**
     * Unique identifier of a finger.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: int;
    /**
     * X coordinate of the touch point relative to the upper left corner of the application screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * Y coordinate of the touch point relative to the upper left corner of the application screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * X coordinate of the touch point relative to the upper left corner of the application window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * Y coordinate of the touch point relative to the upper left corner of the application window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * X coordinate of the touch point relative to the upper left corner of the event responding component.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * Y coordinate of the touch point relative to the upper left corner of the event responding component.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * Whether the event is triggered by a left-hand or right-hand tap.
     *
     * @type { InteractionHand }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hand?: InteractionHand;
    /**
     * Time when the finger is pressed.
     *
     * @type { ?long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressedTime?: long;
    /**
   * Pressure value of the finger press.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
    pressure?: double;
    /**
     * Width of the area pressed by the finger.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: double;
    /**
     * Height of the area pressed by the finger.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: double;
    /**
     * X coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * Y coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;

 	/**
 	 * Gets the coordinates of the top-left corner of the current component based on its real-time position.
 	 *
 	 * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
 	 * real-time position.
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	default getCurrentLocalPosition(): Coordinate2D;
}
/**
 * TouchObject getHistoricalPoints Function Parameters
 *
 * @interface HistoricalPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface HistoricalPoint {
    /**
     * The base touchObject information of historicalPoint
     *
     * @type { TouchObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    touchObject: TouchObject;
    /**
     * Contact area between the finger pad and the screen.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size: int;
    /**
     * Pressure of the touch event.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    force: double;
    /**
     * Timestamp of the touch event.
     *
     * @type { long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
}
/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @interface TouchEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TouchEvent extends BaseEvent {
    /**
     * Type of the touch event.
     *
     * @type { TouchType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: TouchType;
    /**
     * All finger information.
     *
     * @type { TouchObject[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    touches: TouchObject[];
    /**
     * Finger information changed.
     *
     * @type { TouchObject[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    changedTouches: TouchObject[];
    /**
     * Stops the event from bubbling upwards or downwards.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
    /**
     * Obtains all historical points of the current frame.
     *
     * @returns { Array<HistoricalPoint> | undefined } - return all historical points. Undefined will be returned
     *     if the internal runtime environment is broken.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getHistoricalPoints(): Array<HistoricalPoint> | undefined;
    /**
     * Blocks the default event.
     *
     * @throws { BusinessError } 100017 - Component does not support prevent function.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preventDefault(): void;
    /**
     * The unique handle for the event processing session. This handle must be used for any further operations on the
     * event. The system ensures that for a given finger, only one event with this handle can be active at a time.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    eventHandleId?: int;
}
/**
 * The axis event triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface AxisEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AxisEvent extends BaseEvent {
    /**
     * Axis action of the axis event.
     *
     * @type { AxisAction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: AxisAction;
    /**
     * X coordinate of the mouse cursor relative to the left edge of the device screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * Y coordinate of the mouse cursor relative to the upper edge of the device screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * X coordinate of the mouse cursor relative to the left edge of the current window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * Y coordinate of the mouse cursor relative to the upper edge of the current window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * X coordinate of the mouse cursor relative to the left edge of the axis event hit element.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * Y coordinate of the mouse cursor relative to the upper edge of the axis event hit element.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * Scroll step configuration which is only mouse wheel has.
     *  *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollStep?: int;
    /**
     * The unique handle for the event processing session. This handle must be used for any further operations on the
     * event. The system ensures that for a given finger, only one event with this handle can be active at a time.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    eventHandleId?: int;
    /**
     * Active event bubbling.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    propagation(): void;
    /**
     * Obtains the value of the horizontal scroll axis for this axis event.
     *
     * @returns { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getHorizontalAxisValue(): double;
    /**
     * Obtains the value of the vertical scroll axis for this axis event.
     *
     * @returns { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVerticalAxisValue(): double;
    /**
     * Obtains the value of the pinch axis for this axis event.
     *
     * @returns { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPinchAxisScaleValue(): double;
    /**
     * Checks whether this event contains a specified axis type.
     *
     * @param { AxisType } axisType - Indicates the axis type.
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hasAxis(axisType: AxisType): boolean;
    /**
     * X coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * Y coordinate of the point relative to the global display.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;

 	/**
 	 * Gets the coordinates of the top-left corner of the current component based on its real-time position.
 	 *
 	 * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
 	 * real-time position.
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	default getCurrentLocalPosition(): Coordinate2D;
}
/**
 * Defines the callback type used in onSizeChange.
 *
 * @typedef { function } SizeChangeCallback
 * @param { SizeOptions } oldValue - the width and height of the component before the change.
 * @param { SizeOptions } newValue - the width and height of the component after the change.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SizeChangeCallback = (oldValue: SizeOptions, newValue: SizeOptions) => void;
/**
 * Defines the callback type used in onGestureRecognizerJudgeBegin.
 *
 * @typedef { function } GestureRecognizerJudgeBeginCallback
 * @param { BaseGestureEvent } event - the event information
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } recognizers - the gesture recognizers of the component on the response chain
 * @param { Array<TouchRecognizer> } [touchRecognizers] - the touch recognizers of the component on the response chain
 * @returns { GestureJudgeResult } the gesture judge result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer, recognizers: Array<GestureRecognizer>, touchRecognizers?: Array<TouchRecognizer>) => GestureJudgeResult;
/**
 * Defines the callback type used in shouldBuiltInRecognizerParallelWith.
 *
 * @typedef { function } ShouldBuiltInRecognizerParallelWithCallback
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } others - the gesture recognizers of the component on the response chain
 * @returns { GestureRecognizer } gesture recognizer of the component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;
/**
 * Defines the callback type used in shouldRecognizerParallelWith.
 *
 * @typedef { function } ShouldRecognizerParallelWithCallback
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } others - the gesture recognizers of the component on the response chain
 * @returns { GestureRecognizer } gesture recognizer of the component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ShouldRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;
/**
 * 组件转场动画的结束回调类型。
 *
 * @param { boolean } transitionIn - 该入参表示转场动画的结束回调类型。<br/>该参数为true表示该转场回调是出现动画的结束回调，该参数为false表示该转场回调是消失动画的结束回调。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TransitionFinishCallback = (transitionIn: boolean) => void;
/**
 * Defines the callback type used in onTouchTestDone.
 * When the user touch down, the system performs hit test process to collect all gesture recognizers
 * based on the press location, when the collection is completed, and before gesture begin to be recognizing,
 * the callback is triggered, you can get all recognizer's information from this callback.
 *
 * @typedef { function } TouchTestDoneCallback
 * @param { BaseGestureEvent } event - the event information, basicly is the touch down information
 * @param { Array<GestureRecognizer> } recognizers - the gesture recognizers of the component on the response chain
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TouchTestDoneCallback = (event: BaseGestureEvent, recognizers: Array<GestureRecognizer>) => void;
/**
 * Defines the callback type used in onGestureCollectIntercept.
 *
 * @typedef { function } GestureCollectInterceptCallback
 * @param { Array<GestureRecognizer> } recognizers - the gesture recognizers of the component on the response chain.
 * @param { Array<TouchRecognizer> } [touchRecognizers] - the touch recognizers of the component on the response chain.
 * @returns { GestureCollectIntervention } the gesture intervention.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type GestureCollectInterceptCallback = (recognizers: Array<GestureRecognizer>,
    touchRecognizers?: Array<TouchRecognizer>) => GestureCollectIntervention;
/**
 * Defines the callback type used in onNeedSoftkeyboard.
 * Called when component is focused, the return value indicates whether keyboard is needed.
 *
 * @typedef { function } OnNeedSoftkeyboardCallback
 * @returns { boolean } True means keyboard is needed, false means keyboard is not needed.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export type OnNeedSoftkeyboardCallback = () => boolean;
/**
 * Defines the PixelMap type object for ui component.
 *
 * @typedef { image.PixelMap } PixelMap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PixelMap = image.PixelMap;


/**
 * pixelmap object with release function.
 *
 * @interface PixelMapMock
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
declare interface PixelMapMock {
  /**
   * release function.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  release(): void;
}

/**
 * Enum for Drag Behavior.
 *
 * <strong>NOTE</strong>:<br>
 * DragBehavior serves to inform you about the intended method of data handling,
 * whether it's a copy or a move, but it does not actually dictate the real processing of the data.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DragBehavior {
    /**
     * If drag use copy event, then set DragBehavior.COPY.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COPY = 0,
    /**
     * If drag use move event, then set DragBehavior.MOVE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MOVE = 1
}
/**
 * Enum for Drag Animation Type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DragAnimationType {
    /**
     * Use the default animation during dragging.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    DEFAULT = 0,
    /**
     * Use the follow-hand morph animation during dragging.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_HAND_MORPH = 1
}
/**
 * Import the UnifiedData type object for ui component.
 *
 * @typedef { unifiedDataChannel.UnifiedData } UnifiedData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type UnifiedData = unifiedDataChannel.UnifiedData;
/**
 * Import the Summary type object for ui component.
 *
 * @typedef { unifiedDataChannel.Summary } Summary
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Summary = unifiedDataChannel.Summary;
/**
 * Import the UniformDataType type object for ui component.
 *
 * @typedef { uniformTypeDescriptor.UniformDataType } UniformDataType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type UniformDataType = uniformTypeDescriptor.UniformDataType;
/**
 * Import the GetDataParams type object for ui component.
 *
 * @typedef { unifiedDataChannel.GetDataParams } GetDataParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DataSyncOptions = unifiedDataChannel.GetDataParams;
/**
 * Import the DataLoadParams type object for ui component.
 *
 * @typedef { unifiedDataChannel.DataLoadParams } DataLoadParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type DataLoadParams = unifiedDataChannel.DataLoadParams;
/**
 * The type for SpringLoadingContext, see the detailed description in dragController.
 *
 * @typedef { dragController.SpringLoadingContext } SpringLoadingContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type SpringLoadingContext = dragController.SpringLoadingContext;
/**
 * The type for DragSpringLoadingConfiguration, see the detailed description in dragController.
 *
 * @typedef { dragController.DragSpringLoadingConfiguration } DragSpringLoadingConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type DragSpringLoadingConfiguration = dragController.DragSpringLoadingConfiguration;
/**
 * Enum for Drag Result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DragResult {
    /**
     * If the drag is not finished and the result is not set by receiver, return DragResult.UNKNOWN.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    UNKNOWN = -1,
    /**
     * If the drag is successful, return DragResult.DRAG_SUCCESSFUL.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DRAG_SUCCESSFUL = 0,
    /**
     * If drag fail, return DragResult.DRAG_FAILED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DRAG_FAILED = 1,
    /**
     * If drag action cancel, return DragResult.DRAG_CANCELED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DRAG_CANCELED = 2,
    /**
     * If node allow drop in, return DragResult.DROP_ENABLED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DROP_ENABLED = 3,
    /**
     * If node don't allow drop in, return DragResult.DROP_DISABLED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
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
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BlendMode {
    /**
     * The top image is superimposed on the bottom image without any blending.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,
    /**
     * The target pixels covered by the source pixels are erased by being turned to completely transparent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CLEAR = 1,
    /**
     * r = s: Only the source pixels are displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SRC = 2,
    /**
     * r = d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DST = 3,
    /**
     * r = s + (1 - sa) * d: The source pixels are blended based on opacity and cover the target pixels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SRC_OVER = 4,
    /**
     * r = d + (1 - da) * s: The target pixels are blended based on opacity and cover on the source pixels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DST_OVER = 5,
    /**
     * r = s * da: Only the part of the source pixels that overlap with the target pixels is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SRC_IN = 6,
    /**
     * r = d * sa: Only the part of the target pixels that overlap with the source pixels is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DST_IN = 7,
    /**
     * r = s * (1 - da)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SRC_OUT = 8,
    /**
     * r = d * (1 - sa), retains the parts of the destination pixels that do not overlap with the source.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DST_OUT = 9,
    /**
     * r = s * da + d * (1 - sa): The part of the source pixels that overlap with the target pixels is displayed
     * and the part of the target pixels that do not overlap with the source pixels are displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SRC_ATOP = 10,
    /**
     * r = d * sa + s * (1 - da): The part of the target pixels that overlap with the source pixels
     * and the part of the source pixels that do not overlap with the target pixels are displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DST_ATOP = 11,
    /**
     * r = s * (1 - da) + d * (1 - sa)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    XOR = 12,
    /**
     * r = min(s + d, 1):
     * New pixels resulting from adding the source pixels to the target pixels are displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PLUS = 13,
    /**
     * r = s * d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MODULATE = 14,
    /**
     * r = s + d - s * d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SCREEN = 15,
    /**
     * multiply or screen, depending on destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OVERLAY = 16,
    /**
     * rc = s + d - max(s * da, d * sa), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DARKEN = 17,
    /**
     * rc = s + d - min(s * da, d * sa), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LIGHTEN = 18,
    /**
     * brighten destination to reflect source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COLOR_DODGE = 19,
    /**
     * darken destination to reflect source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COLOR_BURN = 20,
    /**
     * multiply or screen, depending on source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    HARD_LIGHT = 21,
    /**
     * The LIGHTEN or DARKEN mode is used, depending on the source pixels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SOFT_LIGHT = 22,
    /**
     * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver: The final pixel is the result of subtracting
     * the darker of the two pixels (source and target) from the lighter one.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DIFFERENCE = 23,
    /**
     * rc = s + d - two(s * d), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    EXCLUSION = 24,
    /**
     * r = s * (1 - da) + d * (1 - sa) + s * d:
     * The final pixel is the result of multiplying the source pixel by the target pixel.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MULTIPLY = 25,
    /**
     * hue of source with saturation and luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    HUE = 26,
    /**
     * saturation of source with hue and luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SATURATION = 27,
    /**
     * hue and saturation of source with luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COLOR = 28,
    /**
     * luminosity of source with hue and saturation of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
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
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BlendApplyType {
    /**
     * The content of the view is blended in sequence on the target image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FAST = 0,
    /**
     * The content of the component and its child components are drawn on the
     * offscreen canvas, and then blended with the existing content on the canvas.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OFFSCREEN = 1,
    /**
    * The content of the component and its child components are drawn on the
    * offscreen canvas, and then blended with the existing content on the canvas.
    * The offscreen canvas will copy background to initialize itself when created.
    * 
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @systemapi
    * @stagemodelonly
    * @since 23 static
    */
    OFFSCREEN_WITH_BACKGROUND = 2
}
/**
 * DragEvent object description
 *
 * @interface DragEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragEvent {
    /**
     * X coordinate of the touch point relative to the left edge of the device screen.
     *
     * @returns { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDisplayX(): double;
    /**
     * Y coordinate of the touch point relative to the upper edge of the device screen.
     *
     * @returns { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDisplayY(): double;
    /**
     * X coordinate of the touch point relative to the left edge of the current window.
     *
     * @returns { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getWindowX(): double;
    /**
     * Y coordinate of the touch point relative to the left edge of the current window.
     *
     * @returns { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getWindowY(): double;
    /**
    * If copy is COPY, this DragEvent is a copy event.
    * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
    * @default COPY
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    dragBehavior: DragBehavior;
    /**
     * If useCustomDropAnimation is true, System will not use drop animation.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    useCustomDropAnimation: boolean;
    /**
     * Set the uniqueId or uniqueId array of components that need to be automatically hidden during dragging.
     * This property takes effect only in onDragStart. After the drag starts successfully, the system hides the
     * target components before the drag preview window is shown. Developers need to restore component visibility
     * in onDragEnd or onDrop based on service requirements.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    autoHideComponentUniqueIds?: int | int[];
    /**
     * Sets the drag animation type.
     * This property can only be set during onDragStart, but can be retrieved in any onDragXXX callback.
     *
     * @default DragAnimationType.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    dragAnimationType?: DragAnimationType;
    /**
     * Set dragData into DragEvent.
     *
     * @param { UnifiedData } unifiedData - dragData.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setData(unifiedData: UnifiedData): void;
    /**
     * Get dragData from DragEvent.
     *
     * @returns { UnifiedData | undefined } - get dragData, undefined will be returned if the internal runtime environment is broken.
     * @throws { BusinessError } 190001 - Data not found.
     * @throws { BusinessError } 190002 - Data error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getData(): UnifiedData | undefined;
    /**
     * Get dragData summary from DragEvent.
     *
     * @returns { Summary | undefined } - get Summary Data, undefined will be returned if the internal runtime environment is broken.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getSummary(): Summary | undefined;
    /**
     * Set dragEvent result to DragEvent.
     *
     * @param { DragResult } dragResult - the return of dragEvent.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setResult(dragResult: DragResult): void;
    /**
     * Get dragEvent result from DragEvent.
     *
     * @returns { DragResult } - dragResult Data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getResult(): DragResult;
    /**
     * Get the rectangle of drag window.
     *
     * @returns { Rectangle } - getPreview rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPreviewRect(): Rectangle;
    /**
     * Get the x axis velocity of drag gesture.
     *
     * @returns { double } - get x axis velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVelocityX(): double;
    /**
     * Get the y axis velocity of drag gesture.
     *
     * @returns { double } - get y axis velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVelocityY(): double;
    /**
     * Get the velocity of drag gesture.
     *
     * @returns { double } - get velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVelocity(): double;
    /**
     * Query the modifier key press state, support 'ctrl'|'alt'|'shift'
     *
     * @type { ?ModifierKeyStateGetter }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getModifierKeyState?: ModifierKeyStateGetter;
    /**
     * Setup one drop animation execution callback, which will be triggered by system when user drops.
     * Use this way to implement the custom drop animation instead of doing it in onDrop, as the system
     * will decide when to trigger the callback during the drop handling.
     * [Note]:
     *   1. Please set useCustomDropAnimation to true as well when using this method.
     *   2. Do not implement the animation no-related logics in the callback.
     *
     * @param { VoidCallback } customDropAnimation - the custom drop animation function.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    executeDropAnimation(customDropAnimation: VoidCallback): void;
    /**
     * Setup one follow-hand morph drop animation execution callback, which will be triggered by system
     * after the drag framework animation ends.
     * [Note]:
     *   1. This method is effective only when dragAnimationType is FOLLOW_HAND_MORPH.
     *   2. Do not implement animation no-related logic in the callback.
     *
     * @param { VoidCallback } onAnimationFinished - the callback triggered after framework animation ends.
     * @param { string } [animationOption] - optional animation option payload that will be forwarded by framework.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    executeFollowHandMorphDropAnimation(onAnimationFinished: VoidCallback, animationOption?: string): void;
    /**
     * Request the drag data to be synchronized to caller, can be notified with the synchronization progress.
     * Only can be used in onDrop event processing.
     *
     * @param { DataSyncOptions } options - the data sync options.
     * @returns { string | undefined } The data key returned by system, which can be used as the identify of the request.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 190003 - Operation not allowed for current phase.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startDataLoading(options: DataSyncOptions): string | undefined;
    /**
     * Get the id of display which the drag event is occuring on.
     *
     * @returns { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDisplayId(): int;
     /**
     * Retrieve the bundle information of the drag source application.
     *
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getDragSource(): string;
    /**
     * Call this method to determine whether the current drag operation is a cross-device drag.
     *
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isRemote(): boolean;
    /**
     * Use this method to provide a data representation to the system instead of directly providing a complete data
     * object. When the user releases the drag over the target application, the system will use this data
     * representation to request the actual data from drag source. This approach significantly improves the
     * efficiency of initiating drag operations for large volumes of data and enhances the effectiveness of data
     * reception. It is recommended to use this method instead of the setData method.
     *
     * @param { DataLoadParams } dataLoadParams The data backend representation.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    setDataLoadParams(dataLoadParams: DataLoadParams): void;
    /**
     * Enable the internal drop animation, which is only avaiable for system applications.
     *
     * The animations' configuration need to be provided through the input paramerter, and it is a string in json format.
     *
     * This method can only be called in onDrop, and please do not use custom drop animation after this method,
     * as it will reset the calling result, and use custom drop animation insteadly.
     *
     * @param { string } configuration - the internal drop animation's configuration.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 190003 - Operation not allowed for current phase.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    enableInternalDropAnimation(configuration: string): void;
    /**
     * X coordinate of the point relative to the global display.
     *
     * @returns { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getGlobalDisplayX(): double;

    /**
     * Y coordinate of the point relative to the global display.
     *
     * @returns { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getGlobalDisplayY(): double;
}
/**
 * The event callback function for drag and drop common interfaces.
 * @typedef { function } OnDragEventCallback
 * @param { DragEvent } event - the event object indicating current drag status.
 * @param { string } [extraParams] - extra information set by user or system.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnDragEventCallback = (event: DragEvent, extraParams?: string) => void;
/**
 * Defines the options for the drop handling.
 *
 * @interface DropOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
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
     * @stagemodelonly
     * @since 23 static
     */
    disableDataPrefetch?: boolean;
}
/**
 * KeyEvent object description:
 *
 * @interface KeyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface KeyEvent {
    /**
     * Type of a key.
     *
     * @type { KeyType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: KeyType;
    /**
     * Key code of a key
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyCode: int;
    /**
     * Key value of a key.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyText: string;
    /**
     * Type of the input device that triggers the current key, such as the keyboard or handle.
     *
     * @type { KeySource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keySource: KeySource;
    /**
     * Indicates the ID of the input device that triggers the current key.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deviceId: int;
    /**
     * Indicates the status of the key when the key is pressed.
     * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    metaKey: int;
    /**
     * Timestamp when the key was pressed.
     *
     * @type { long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
    /**
     * Block event bubbling.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
    /**
     * Intention code of a key or modifier keys.
     *
     * @type { IntentionCode }
     * @default IntentionCode.INTENTION_UNKNOWN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    intentionCode: IntentionCode;
    /**
     * Query the modifier key press state, support 'ctrl'|'alt'|'shift'
     *
     * @type { ?ModifierKeyStateGetter }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getModifierKeyState?: ModifierKeyStateGetter;
    /**
     * Unicode of a key
     *
     * @type { ?long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    unicode?: long;
    /**
     * Whether Num Lock is on
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isNumLockOn?: boolean;
    /**
     * Whether Caps Lock is on
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isCapsLockOn?: boolean;
    /**
     * Whether Scroll Lock is on
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isScrollLockOn?: boolean;
}
/**
 * Focus axis event object description.
 *
 * @extends BaseEvent
 * @interface FocusAxisEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FocusAxisEvent extends BaseEvent {
    /**
     * The axis values of axis event.
     *
     * @type { Map<AxisModel, double> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisMap: Map<AxisModel, double>;
    /**
     * The blocking event pops up.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
}
/**
 * CrownEvent object description
 *
 * @interface CrownEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CrownEvent {
    /**
     *The timestamp of the rotating crown event.
     *
     * @type { long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
    /**
     * The angular velocity of a rotating crown.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angularVelocity: double;
    /**
     * The rotation angle of the rotating crown.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    degree: double;
    /**
     * The behavior of rotating crown.
     *
     * @type { CrownAction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: CrownAction;
    /**
     * The blocking event pops up.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
}
/**
 * 半模态、全模态的公共配置接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BindOptions {
    /**
     * 半模态页面的背板颜色。
     * 
     * 默认值：Color.White。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * 半模态页面显示（动画结束后）回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAppear?: VoidCallback;
    /**
     * 半模态页面回退（动画结束后）回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDisappear?: VoidCallback;
    /**
     * 半模态页面显示（动画开始前）回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillAppear?: VoidCallback;
    /**
     * 半模态页面回退（动画开始前）回调函数。
     * 
     * **说明：**
     * 
     * 不允许在onWillDisappear函数中修改状态变量，可能会导致组件行为不稳定。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDisappear?: VoidCallback;
}
/**
 * Component content cover dismiss
 *
 * @interface DismissContentCoverAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DismissContentCoverAction {
    /**
     * 全屏模态页面关闭回调函数。开发者需要退出页面时调用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dismiss(): void;
    /**
     * 返回本次拦截全屏模态页面退出的事件原因。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reason: DismissReason;
}
/**
 * 继承自[BindOptions]{@link BindOptions}。
 * 
 * 全屏模态页面内容选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ContentCoverOptions extends BindOptions {
    /**
     * 全屏模态页面的系统转场方式。
     * 
     * 默认值：ModalTransition.DEFAULT。
     * 
     * **说明：**
     * 
     * 同transition同时设置时，此属性不生效。
     *
     * @default ModalTransition.Default
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    modalTransition?: ModalTransition;
    /**
     * 全屏模态页面交互式关闭回调函数。
     * 
     * **说明：**
     * 
     * 当用户执行back事件关闭交互操作时，如果注册该回调函数，则不会立刻关闭。在回调函数中可以通过reason得到阻拦关闭页面的操作类型，从而根据原因选择是否关闭全屏模态页面。在onWillDismiss回调中，不能再做
     * onWillDismiss拦截。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: Callback<DismissContentCoverAction>;
    /**
     * 全屏模态页面的自定义转场方式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * 全屏模态是否适配安全区域，true表示全屏模态适配安全区域，将内容限制在安全区内，避让导航条和状态栏，false表示不做处理，和之前的样式保持一致。默认值为false。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableSafeArea?: boolean;
}
/**
 * 半模态面板的标题。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SheetTitleOptions {
    /**
     * 半模态面板的主标题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    title: ResourceStr;
    /**
     * 半模态面板的副标题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    subtitle?: ResourceStr;
}
/**
 * 半模态弹窗的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SheetType {
    /**
     * 底部弹窗。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM = 0,
    /**
     * 居中弹窗。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CENTER = 1,
    /**
     * 跟手弹窗。跟手弹窗面板不支持跟手滑动，下滑面板不关闭。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    POPUP = 2,
    /**
     * 侧边弹窗。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SIDE = 3,
    /**
     * 全屏弹窗。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CONTENT_COVER = 4
}
/**
 * 半模态的显示层级模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SheetMode {
    /**
     * 设置半模态面板在当前UIContext内顶层显示，在所有页面之上。和弹窗类组件显示在一个层级。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OVERLAY = 0,
    /**
     * 设置半模态面板在当前页面内的顶层显示。 
     * 
     * **说明：**
     * 
     * 目前只支持挂载在Page或者NavDestination节点上，若有NavDestination优先挂载在NavDestination上。只支持在这两种页面内顶层显示。
     * 
     * 该模式下新起的页面可以覆盖在半模态弹窗上，页面返回后该半模态依旧存在，半模态面板内容不丢失。 
     * 
     * 该模式下需确保目标页面节点如Page节点已挂载上树，再拉起半模态，否则半模态将无法挂载到对应的页面节点内。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    EMBEDDED = 1
}
/**
 * 半模态面板上下滑动时的内容更新方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ScrollSizeMode {
    /**
     * 设置半模态面板跟手滑动结束后更新内容显示区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FOLLOW_DETENT = 0,
    /**
     * 设置半模态面板在滑动过程中持续更新内容显示区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CONTINUOUS = 1
}
/**
 * 半模态激活输入法时对软键盘的避让方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SheetKeyboardAvoidMode {
    /**
     * 设置半模态不避让软键盘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,
    /**
     * 设置半模态先上抬面板避让软键盘；
     * 
     * 当上抬至最大高度仍不足以避让软键盘时，则通过压缩整体内容完成避让。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TRANSLATE_AND_RESIZE = 1,
    /**
     * 设置半模态通过压缩整体内容避让软键盘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RESIZE_ONLY = 2,
    /**
     * 设置半模态先上抬面板避让软键盘；
     * 
     * 当上抬至最大高度仍不足以避让软键盘时，则通过滚动内容完成避让。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TRANSLATE_AND_SCROLL = 3,
    /**
     * 设置半模态popup样式弹窗避让软键盘。
     * 
     * 1. 避让软键盘时，在popup样式弹窗当前显示位置无法容纳弹窗尺寸的前提下，遵循先垂直翻转避让，后尝试90°水平旋转避让的规则调整显示位置，以预设方向为下方为例，调整避让顺序依次为：下、上、右、左。
     * 2. 如果设置的对齐方式导致组件布局超出窗口范围，将根据该对齐方式在水平或垂直方向上进行位移，直至组件完全显示在窗口内。
     * 3. 避让软键盘时，如果在四个方向上均无法容纳当前的popup样式弹窗，处理方式遵循开发者设置的placementOnTarget属性：
     * 
     * （1）若属性值为true，将依据设定的placement，向其镜像方向平移，直至弹窗能够完全显示。
     * 
     * （2）若属性值为false，则在四个方向中，选择能够完全展示弹窗宽度且剩余高度最大的方向，通过调整半模态高度以适应当前方向，确保弹窗能够放下，同时保持预设placement对应的对齐方式不变。
     * 
     * 4. 若此时半模态不是跟手样式，则不具备避让软键盘能力。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    POPUP_SHEET = 4
}
/**
 * 控制半模态的关闭。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SheetDismiss {
    /**
     * 半模态面板关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dismiss(): void;
}
/**
 * 控制半模态的关闭。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DismissSheetAction {
    /**
     * 半模态面板关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dismiss(): void;
    /**
     * 返回本次半模态页面退出的操作类型。
     * 
     * **说明：**
     * 
     * DismissReason.SLIDE只生效半模态侧边弹窗形态，表示右滑退出。若镜像场景则表示左滑退出。
     * 
     * DismissReason.SLIDE_DOWN生效半模态底部弹窗形态和居中弹窗形态，表示下滑退出。
     * 
     * 半模态气泡弹窗形态无滑动退出能力。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reason: DismissReason;
}
/**
 * 控制半模态关闭前的回弹。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SpringBackAction {
    /**
     * 半模态页面关闭前控制回弹函数，开发者需要半模态回弹时调用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    springBack(): void;
}
/**
 * 定义了单个高度的挡位。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SingleLengthDetent = [
    SheetSize | Length
];
/**
 * 定义了两个高度的挡位。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DoubleLengthDetents = [
    (SheetSize | Length),
    SheetSize | Length | undefined
];
/**
 * 定义了三个高度的挡位。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TripleLengthDetents = [
    (SheetSize | Length),
    SheetSize | Length | undefined,
    SheetSize | Length | undefined
];
/**
 * 继承自[BindOptions]{@link BindOptions}。
 * 
 * 半模态页面内容选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SheetOptions extends BindOptions {
    /**
     * 半模态高度，默认是LARGE。
     * 
     * **说明：**
     * 
     * 1. API version 14开始，底部弹窗横屏时，无状态栏则最大高度为距离屏幕顶部8vp，有状态栏则最大高度为距离状态栏8vp。
     * 2. 底部弹窗时，当设置detents时，该属性设置无效。
     * 3. 底部弹窗竖屏时，最大高度为距离状态栏8vp。
     * 4. 居中弹窗和跟手弹窗设置类型为SheetSize.LARGE和SheetSize.MEDIUM无效，显示默认高度560vp。
     * 5. 居中弹窗和跟手弹窗最小高度为320vp，最大高度为窗口短边的90%。
     * 6. 居中弹窗和跟手弹窗当使用Length设置的高度时，高度大于最大高度，则显示最大高度，小于最小高度，则显示最小高度。
     * 7. 如果半模态使用SheetSize.FIT_CONTENT自适应模式，且类型设置为居中弹窗或跟手弹窗，API version 22及之前版本，高度大于最大高度时显示最大高度，高度小于最小高度时显示最小高度。从API version 23开始，高度大于最大高度时显示最大高度，高度小于最小高度时按照实际自适应高度生效。
     *
     * @default Sheet.LARGE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: SheetSize | Length;
    /**
     * 是否显示控制条。
     * 
     * 默认值：true 
     * 
     * true：显示控制条。
     * 
     * false：不显示控制条。
     * 
     * **说明：**
     * 
     * 半模态面板的detents属性设置多个不同高度并且设置生效时，默认显示控制条。否则不显示控制条。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dragBar?: boolean;
    /**
     * 半模态页面的背景蒙层颜色。
     * 
     * 默认值：$r('sys.color.ohos_id_color_mask_thin')。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    maskColor?: ResourceColor;
    /**
     * 半模态页面的切换高度挡位。
     * 
     * **说明：**
     * 
     * 从API version 12开始，底部弹窗横屏时该属性设置生效。
     * 
     * 底部弹窗竖屏生效，元组中第一个高度为初始高度。
     * 
     * 面板可跟手滑动切换挡位，松手后是否滑动至目标挡位有两个判断条件：速度和距离。速度超过阈值，则执行滑动至与手速方向一致的目标挡位；速度小于阈值，则引入距离判断条件，当位移距离>当前位置与目标位置的1/2，滑动至与手速方向一致的目
     * 标挡位，位移距离当前位置与目标位置的1/2，返回至当前挡位。速度阈值：1000，距离阈值：50%。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    detents?: SingleLengthDetent | DoubleLengthDetents | TripleLengthDetents;
    /**
     * 半模态面板的模糊背景。默认无模糊背景。
     *
     * @default BlurStyle.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    blurStyle?: BlurStyle;
    /**
     * 是否显示关闭图标。
     * 
     * 2in1设备默认无按钮底板。
     * 
     * 默认值：true。
     * 
     * true：显示关闭图标。
     * 
     * false：不显示关闭图标。
     * 
     * **说明：**
     * 
     * Resource需要为boolean类型。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showClose?: boolean | Resource;
    /**
     * 半模态页面的样式。
     * 
     * **说明：**
     * 
     * 半模态在不同窗口所支持的显示类型：
     * 
     * 1. 宽度 < 600vp：底部、全屏。默认底部样式。
     * 2. 600vp <= 宽度 < 840vp：底部、居中、跟手、侧边、全屏。默认居中样式。
     * 3. 宽度 >= 840vp：底部、居中、跟手、侧边、全屏。默认跟手样式。
     * 4. API version 20开始，窗口宽度大于600vp时，preferType支持设置为SheetType.SIDE。
     * 5. API version 20开始，preferType支持设置为SheetType.CONTENT_COVER，支持设置为全屏模态样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preferType?: SheetType;
    /**
     * 半模态面板的标题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    title?: SheetTitleOptions | CustomBuilder;
    /**
     * 半模态页面交互式关闭回调函数。
     * 
     * **说明：**
     * 
     * 当用户执行下拉关闭、侧拉关闭、点击遮罩层关闭、点击关闭按钮的交互操作时，如果已注册回调函数，模态窗口将不会立即关闭。要关闭半模态，需在回调函数中调用shouldDismiss.dismiss()方法来实现。
     * 
     * 如果不注册该回调函数，则用户执行下拉关闭、侧拉关闭、点击遮罩层关闭、点击关闭按钮的交互操作时，正常关闭半模态，无其他行为。
     * 
     * 侧拉关闭又包含侧滑（左滑/右滑）、三键back、键盘ESC关闭。
     * 
     * 建议在[二次确认](docroot://ui/arkts-sheet-page.md#二次确认能力)场景使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shouldDismiss?: (sheetDismiss: SheetDismiss) => void;
    /**
     * 半模态页面的交互式关闭回调函数。允许开发者注册，以获取关闭操作的类型，并决定是否关闭半模态状态。
     * 
     * **说明：**
     * 
     * 当用户执行下拉关闭、侧拉关闭、点击遮罩层关闭、点击关闭按钮的交互操作时，若已注册回调函数，则不会立即关闭页面，而是由开发者通过回调函数[DismissSheetAction]{@link DismissSheetAction}
     * 中的reason参数判断关闭操作的类型，进而根据具体原因自主选择是否关闭半模态页面。
     * 
     * 如果不注册该回调函数，则用户执行关闭操作时，正常关闭半模态，无其他行为。
     * 
     * 侧拉关闭又包含侧滑（左滑/右滑）、三键back、键盘ESC关闭。
     * 
     * 在onWillDismiss回调中，不能再做onWillDismiss拦截。
     * 
     * 建议在[二次确认](docroot://ui/arkts-sheet-page.md#二次确认能力)场景使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: Callback<DismissSheetAction>;
    /**
     * 半模态页面交互式关闭前控制回弹函数。允许开发者注册，以控制半模态页面交互式关闭时的回弹效果。
     * 
     * **说明：**
     * 
     * 当用户触发执行下拉关闭操作并同时注册该回调函数与shouldDismiss或onWillDismiss时，由开发者控制下滑关闭时是否回弹。在回调函数中可以通过调用springBack来实现回弹效果。也可以通过不调用
     * springBack来取消回弹效果。
     * 
     * 若不注册该回调函数，但注册shouldDismiss或onWillDismiss时，则默认在下拉关闭时，会触发回弹效果，回弹后再根据shouldDismiss或onWillDismiss内的回调行为决定半模态是否关闭。
     * 
     * 如果不注册该回调函数，且未注册shouldDismiss或onWillDismiss时，默认在下滑关闭时，触发半模态关闭。
     * 
     * 侧边弹窗样式则是在侧拉关闭场景生效springBack。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillSpringBackWhenDismiss?: Callback<SpringBackAction>;
    /**
     * 半模态页面显示时，其下层页面是否允许交互。
     * 
     * **说明：**
     * 
     * 设置为true时允许交互，不显示蒙层；设置为false时不允许交互，显示蒙层；若不进行设置，默认底部弹窗与居中弹窗不允许交互，跟手弹窗允许交互。当设置为true时，maskColor设置无效。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableOutsideInteractive?: boolean;
    /**
     * 设置半模态页面的宽度。
     * 
     * 百分比参数方式：以父元素宽的百分比来设置半模态页面的宽度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * 设置半模态页面的边框宽度。
     * 
     * 可分别设置4个边框宽度。
     * 
     * 默认值：0
     * 
     * 百分比参数方式：以父元素半模态页面宽的百分比来设置半模态页面的边框宽度。
     * 
     * 当半模态页面左边框和右边框大于半模态页面宽度，半模态页面上边框和下边框大于半模态页面高度，显示可能不符合预期。
     * 
     * **说明：**
     * 
     * 底部弹窗时，底部边框宽度设置无效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;
    /**
     * 设置半模态页面的边框颜色。
     * 
     * 默认值：Color.Black
     * 
     * 如果使用borderColor属性，需要和borderWidth属性一起使用。 
     * 
     * **说明：**
     * 
     * 底部弹窗时，底部边框颜色设置无效。
     *
     * @default Color.Black
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;
    /**
     * 设置半模态页面的边框样式。
     * 
     * 默认值：BorderStyle.Solid
     * 
     * 如果使用borderStyle属性，需要和borderWidth属性一起使用。 
     * 
     * **说明：**
     * 
     * 底部弹窗时，底部边框样式设置无效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderStyle?: BorderStyle | EdgeStyles;
    /**
     * 设置半模态页面的阴影。
     * 
     * 2in1设备默认值：ShadowStyle.OUTER_FLOATING_SM。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * 半模态页面高度变化回调函数。
     * 
     * **说明：**
     * 
     * 底部弹窗时，只有挡位变化和拖拽跟手才返回每一帧高度，拉起半模态和避让软键盘只返回最后的高度，其他弹窗只在半模态拉起返回最后高度。
     * 
     * 返回值为px。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onHeightDidChange?: Callback<int>;
    /**
     * 设置半模态页面的显示层级。
     * 
     * 默认值：SheetMode.OVERLAY
     * 
     * **说明：**
     * 
     * 1. 半模态显示期间mode属性不支持动态切换，两种模式的显示层级完全不同，无法做到显示期间同一个半模态从一个层级变换到另一个层级。建议在使用时明确诉求固定mode值。 
     *  2. 设置SheetMode.EMBEDDED时不支持设置UIContext属性，两者对应的半模态显示层级效果互相冲突。
     * 3. 使用[openBindSheet](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#openbindsheet12)启动半模态页面，若未传入有效的targetId，则不支持设置为SheetMode.EMBEDDED，默认为SheetMode.OVERLAY。
     *
     * @default SheetMode.OVERLAY
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mode?: SheetMode;
    /**
     * 设置半模态面板滑动时，内容区域刷新时机。
     * 
     * 默认值：ScrollSizeMode.FOLLOW_DETENT
     *
     * @default ScrollSizeMode.FELLOW_DETEND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollSizeMode?: ScrollSizeMode;
    /**
     * 半模态页面挡位变化回调函数。
     * 
     * **说明：**
     * 
     * 底部弹窗时，挡位变化返回最后的高度。
     * 
     * 返回值为px。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDetentsDidChange?: Callback<int>;
    /**
     * 半模态页面宽度变化回调函数。
     * 
     * **说明：**
     * 
     * 宽度变化时返回最后的宽度。
     * 
     * 返回值为px。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWidthDidChange?: Callback<int>;
    /**
     * 半模态页面形态变化回调函数。
     * 
     * **说明：**
     * 
     * 形态变化时返回最后的形态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onTypeDidChange?: Callback<SheetType>;
    /**
     * 在UIContext实例对应的窗口中显示半模态。
     * 
     * **说明：**
     * 
     * 使用[openBindSheet](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#openbindsheet12)启动的半模态页面，不支持设置
     * 、更新该属性。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    uiContext?: UIContext;
    /**
     * 设置半模态激活输入法时对软键盘的避让方式。
     * 
     * **默认值：** TRANSLATE_AND_SCROLL
     *
     * @default SheetKeyboardAvoidMode.TRANSLATE_AND_SCROLL
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyboardAvoidMode?: SheetKeyboardAvoidMode;
    /**
     * 是否响应悬停态。
     * 
     * 默认值：false，默认不响应。
     * 
     * 2in1设备默认值：true 
     * 
     * true：响应悬停态。
     * 
     * false：不响应悬停态。
     * 
     * **说明：**
     * 
     * 底部弹窗样式和跟手弹窗样式不响应悬停态。子窗模式不支持悬停态。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * 悬停态下弹窗默认展示区域。
     * 
     * 默认值：HoverModeAreaType.BOTTOM_SCREEN 
     * 
     * 2in1设备默认值：HoverModeAreaType.TOP_SCREEN
     *
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hoverModeArea?: HoverModeAreaType;

    /**
     * 设置半模态弹窗偏移量。当半模态为底部弹窗时，支持设置底部间距。不支持设置半模态的[SheetOptions]{@link SheetOptions}中的detents属性。y轴设置为负数的时候不生效。
     * 
     * 默认值：x轴为0vp，y轴坐标为0vp。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * 设置半模态面板内容区边缘回弹效果，支持单边生效。
     * 
     * **默认值**：默认双边生效，即[EffectEdge]{@link EffectEdge}.START | [EffectEdge]{@link EffectEdge}.END（即数值3）。
     * 
     * **说明：**
     * 
     * 1. 仅上边缘生效：[EffectEdge]{@link EffectEdge}.START。
     * 2. 仅下边缘生效：[EffectEdge]{@link EffectEdge}.END。
     * 3. 双边生效：[EffectEdge]{@link EffectEdge}.START | [EffectEdge]{@link EffectEdge}.END（即数值3）。
     * 4. 双边不生效：[EffectEdge]{@link EffectEdge}.START & [EffectEdge]{@link EffectEdge}.END（即数值0）。
     *
     * @default 3
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    effectEdge?: int;
    /**
     * 设置半模态页面圆角半径。
     * 
     * 不建议设置4个圆角大小不相等，圆角大小相等时面板视觉体验最佳。
     * 
     * **默认值**：32vp
     * 
     * **说明：**
     * 
     * 1. 根据设置的圆角半径值显示，如果未设置，则使用默认值。底部样式不显示半模态底部2个圆角，即使设置了底部2个圆角也不生效。
     * 2. 分别设置4个方向的圆角半径后，如果某个方向的值异常，异常方向的圆角值重置为默认值，非异常方向的圆角值为已设置的值。统一设置4个方向的圆角时，如果设置的值异常，4个方向的圆角都重置为默认值。
     * 3. 半径设置为百分比时，以半模态页面的宽度为基准。
     * 4. 当圆角的半径大于半模态页面宽度一半时，圆角的半径取值为半模态页面宽度的一半。
     * 5. 当半模态页面高度过小且圆角半径设置过大时，可能导致显示异常。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
    /**
     * 支持非手势切换挡位。
     * 
     * **默认值：** detents[0]。
     * 
     * **说明：**
     * 
     * 1. 该接口取值范围为detents数组范围，若设值非detents范围，该接口无效。
     * 2. 当设置SheetSize.FIT_CONTENT时，该接口无效。
     * 3. 不建议手势切换挡位与该接口切换挡位同时生效使用。
     *
     * @default detents[0]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    detentSelection?: SheetSize | Length;
    /**
     * 半模态是否在独立子窗中显示。
     * 
     * 默认值：false
     * 
     * **说明：** 
     * 
     * 1. 若属性值为true，半模态可以在独立子窗口中展示，并且可以超过应用窗口范围。
     * 2. 若属性值为false，半模态只能在应用窗口范围内展示。
     * 3. 不建议在showInSubWindow为true的弹窗嵌套显示另一个showInSubWindow为true的弹窗，半模态可能会影响其他组件行为。
     * 4. 不建议在showInSubWindow为true的弹窗中使用CalendarPicker、CalendarPickerDialog、DatePickerDialog、TextPickerDialog、TimePickerDialog等picker组件，半模态会影响上述组件行为。
     * 5. 半模态显示期间该属性不支持动态切换。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * 设置半模态popup样式弹窗相对于目标的显示位置。
     * 
     * 默认值：Placement.Bottom
     * 
     * **说明：** 
     * 
     * 1. popup样式弹窗在确保指定位置能容纳弹窗尺寸的前提下，优先依据设定的placement展示弹窗。若不可行，则遵循先垂直翻转，后尝试90°水平旋转的规则调整显示位置，以预设方向为下方为例，调整顺序依次为：下、上、右、左。
     * 2. 如果设置的对齐方式导致组件布局超出窗口范围，将根据该对齐方式在水平或垂直方向上进行位移，直至组件完全显示在窗口内。
     * 3. 如果在四个方向上均无法容纳当前的popup样式弹窗，处理方式遵循开发者设置的placementOnTarget属性：
     * 
     * 1）若属性值为true，将依据设定的placement，向其镜像方向平移，直至弹窗能够完全显示。
     * 
     * 2）若属性值为false，则在四个方向中，选择能够完全展示弹窗宽度且剩余高度最大的方向，通过调整半模态高度以适应当前方向，确保弹窗能够放下，同时保持预设placement对应的对齐方式不变。
     *
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * 半模态popup样式弹窗在当前窗口下，四个方向均无法容纳该弹窗大小时，设置是否允许其覆盖在目标节点上。
     * 
     * 默认值：true 
     * 
     * true：允许其覆盖在目标节点上。
     * 
     * false：不允许其覆盖在目标节点上。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placementOnTarget?: boolean;
    /**
     * 控制条是否悬浮显示，true为悬浮显示，false为不悬浮显示。
     * 
     * 默认值：false 
     * 
     * **说明：** 
     * 
     * 悬浮效果只在控制条显示的场景生效，且控制条不占位。
     * 
     * title传入[CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)时enableFloatingDragBar始
     * 终为false。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableFloatingDragBar?: boolean;
    /**
     * bindSheet全屏模态样式的系统转场方式。
     * 
     * 默认值：ModalTransition.DEFAULT
     *
     * @default ModalTransition.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    modalTransition?: ModalTransition;
    /**
     * 设置组件绘制圆角的模式。
     * 
     * 默认值：RenderStrategy.FAST 
     * 
     * **说明**: 当半模态设置模糊时，可通过设置为OFFSCREEN离屏模式解决半模态顶部或顶部圆角区域内显示效果异常问题。popup样式不支持设置组件绘制圆角模式。
     *
     * @default RenderStrategy.FAST
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radiusRenderStrategy?: RenderStrategy;
    /**
     * 设置组件的系统材质。
     * 
     * 默认值：undefined，会清除由该接口设置的材质效果。 
     * 
     * **说明**: 不同系统材质对应不同的属性影响效果，该接口影响背景色
     * [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、
     * 边框颜色[borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
     * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}，不建议与上述接口一起使用。使用示例请参考
     * [示例10（半模态设置系统材质）](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sheet-transition_static.md#示例10半模态设置系统材质)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * 设置半模态弹窗边缘光效动画模式。
     * 
     * 默认值：EdgeLightMode.EDGELIGHT_DISABLED
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @default EdgeLightMode.EDGELIGHT_DISABLED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    edgeLightMode?: EdgeLightMode;
}
/**
 * The custom styles function block.
 *
 * @typedef { function } CustomStyles
 * @param { CommonMethod } instance - The component instance which can be used to set common attributes.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CustomStyles = (instance: CommonMethod) => void;
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StateStyles {
    /**
     * Defines normal state styles.
     *
     * @type { ?CustomStyles }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    normal?: CustomStyles;
    /**
     * Defines pressed state styles.
     *
     * @type { ?CustomStyles }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressed?: CustomStyles;
    /**
     * Defines disabled state styles.
     *
     * @type { ?CustomStyles }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disabled?: CustomStyles;
    /**
     * Defines focused state styles.
     *
     * @type { ?CustomStyles }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    focused?: CustomStyles;
    /**
     * Defines clicked state styles.
     *
     * @type { ?CustomStyles }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    clicked?: CustomStyles;
    /**
     * Defines selected state styles.
     *
     * @type { ?CustomStyles }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    selected?: CustomStyles;

    /**
     * Defines hovered state styles.
     *
     * @type { ?CustomStyles }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    hovered?: CustomStyles;
}
/**
 * Defines the options of popup message.
 *
 * @interface PopupMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupMessageOptions {
    /**
     * Sets the color of popup text.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textColor?: ResourceColor;
    /**
     * Sets the font of popup text.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    font?: Font;
}
/**
 * Dismiss reason type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DismissReason {
    /**
    * Touching the Back button, swiping left or right on the screen, or pressing the Esc key.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    PRESS_BACK = 0,
    /**
    * Touching the mask.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    TOUCH_OUTSIDE = 1,
    /**
    * Touching the Close button.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    CLOSE_BUTTON = 2,
    /**
    * Slide down
    * <p><strong>NOTE</strong>:
    * <br>This API is effective only in sheet transition.
    * </p>
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    SLIDE_DOWN = 3,
    /**
     * Slide, not slide down.
     * Default means slide right, after mirroring it means slide left.
     * Choosing to slide left or slide right is not supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SLIDE = 4
}
/**
 * Component popup dismiss
 *
 * @interface DismissPopupAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DismissPopupAction {
    /**
     * Defines popup dismiss function
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dismiss(): void;
    /**
     * Defines popup dismiss reason
     *
     * @type { DismissReason }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reason: DismissReason;
}
/**
 * Popup state change param
 *
 * @interface PopupStateChangeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupStateChangeParam {
    /**
     * is Visible.
     * Anonymous Object Rectification.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isVisible: boolean;
}
/**
 * Popup state change callback
 *
 * @typedef { function } PopupStateChangeCallback
 * @param { PopupStateChangeParam } event - The parameter of state change callback.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PopupStateChangeCallback = (event: PopupStateChangeParam) => void;
/**
 * Popup mask type
 *
 * @interface PopupMaskType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupMaskType {
    /**
     * Color.
     * Anonymous Object Rectification.
     *
     * @type { ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color: ResourceColor;
}
/**
 * Popup border LinearGradient
 *
 * @interface PopupBorderLinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupBorderLinearGradient {
    /**
     * direction: Direction of Linear Gradient.
     *
     * @type { ?GradientDirection }
     * @default GradientDirection.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction?: GradientDirection;
    /**
     * Sets the colors and positions of the gradient.
     *
     * When the color setting is undefined, use the default value Color.Black.
     * The position setting ranges from 0 to 1.
     *
     * @type { Array<[ResourceColor | undefined, double]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colors: Array<[ResourceColor | undefined, double]>;
}
/**
 * Popup common options
 *
 * @interface PopupCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupCommonOptions {
    /**
     * placement of popup.
     *
     * @type { ?Placement }
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * Set the background color of the popup.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    popupColor?: ResourceColor;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * Whether hide popup when click mask
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    autoCancel?: boolean;
    /**
     * on State Change
     *
     * @type { ?PopupStateChangeCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onStateChange?: PopupStateChangeCallback;
    /**
     * The offset of the sharp corner of popup.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * The mask to block gesture events of popup.
     * When mask is set false, gesture events are not blocked.
     * When mask is set true, gesture events are blocked and mask color is transparent.
     *
     * @type { ?(boolean | PopupMaskType) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | PopupMaskType;
    /**
     * Sets the space of between the popup and target.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetSpace?: Length;
    /**
     * Sets the position offset of the popup.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * Set the width of the popup.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * The position of the sharp corner of popup.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * The width of the arrow.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * The round corners of the popup.
     *
     * @type { ?Dimension }
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: Dimension;
    /**
     * The style of popup Shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Defines popup background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Set popup focusable
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    focusable?: boolean;
    /**
     * Defines the transition effect of popup opening and closing
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * Callback function when the popup interactive dismiss.
     * Use boolean to respond all interactive dismiss event. Use Callback to customize which event should be responded.
     *
     * @type { ?(boolean | Callback<DismissPopupAction>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
     * Determine if it is compatible popup's half folded.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * Determine if popup can follow the target node when it has rotation or scale.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    followTransformOfTarget?: boolean;
    /**
     * Determine if popup can avoid the target when the display space is insufficient.
     *
     * @type { ?AvoidanceMode }
     * @default AvoidanceMode.COVER_TARGET
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    avoidTarget?: AvoidanceMode;
    /**
     * The width of popup's outline.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension;
    /**
     * The width of popup's border.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension;
    /**
     * The LinearGradient of popup's outline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * The LinearGradient of popup's innerline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderLinearGradient?: PopupBorderLinearGradient;
    /**
 	 * Define the popup theme color mode.
 	 * 
 	 * @type { ?AnchoredColorMode }
 	 * @default AnchoredColorMode.FOLLOW_TARGET
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	colorMode?: AnchoredColorMode;
    /**
     * Set system-styled materials for popup. Different materials have different effects, which can influence
     * the backgroundColor, border, shadow, and other visual attributes of popup.
     *
     * @type { ?SystemUiMaterial }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * Defines the popup's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Defines the popup's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundEffect?: BackgroundEffectOptions;

    /**
     * Defines the display level of the popup.
     *
     * @type { ?LevelMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    levelMode?: LevelMode;

  /**
   * Callback function when the popup disappears.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;

  /**
   * Callback function before the popup closeAnimation starts.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
   * Callback function before the popup openAnimation starts.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillAppear?: VoidCallback;

  /**
   * Callback function when the popup appears.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidAppear?: VoidCallback;
}
/**
 * Defines the Tips options.
 *
 * @interface TipsOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TipsOptions {
    /**
     * Defines the delay time for appearing.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    appearingTime?: int;
    /**
     * Defines the delay time for disappearing.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disappearingTime?: int;
    /**
     * Define the delay time for the appearance of continuous operations.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    appearingTimeWithContinuousOperation?: int;
    /**
     * Define the delay time for the disappearance of continuous operations.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disappearingTimeWithContinuousOperation?: int;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * The position of the sharp corner of Tips.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * The width of the arrow.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * Set the display location mode for tips. Tips can be shown around the component or follow the mouse cursor.
     *
     * @type { ?TipsAnchorType }
     * @default TipsAnchorType.TARGET
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showAtAnchor?: TipsAnchorType;
    /**
     * Set system-styled materials for tips. Different materials have different effects, which can influence
     * backgroundColor, border, shadow, and other visual attributes of tips.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
}
/**
 * Defines the popup button.
 *
 * @interface PopupButton
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupButton {
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: string;
    /**
     * action
     *
     * @type { VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: VoidCallback;
}
/**
 * Defines the popup options.
 *
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupOptions {
    /**
     * Content of the popup message.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    message: string;
    /**
     * The placement of popup.
     * Supports all positions defined in Placement.
     *
     * @type { ?Placement }
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * The first button.
     *
     * @type { ?PopupButton }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    primaryButton?: PopupButton;
    /**
     * The second button.
     *
     * @type { ?PopupButton }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    secondaryButton?: PopupButton;
    /**
     * on State Change
     *
     * @type { ?PopupStateChangeCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onStateChange?: PopupStateChangeCallback;
    /**
     * The offset of the sharp corner of popup.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * The mask to block gesture events of popup.
     * When mask is set false, gesture events are not blocked.
     * When mask is set true, gesture events are blocked and mask color is transparent.
     *
     * @type { ?(boolean | PopupMaskType) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | PopupMaskType;
    /**
     * Parameters of the popup message.
     *
     * @type { ?PopupMessageOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    messageOptions?: PopupMessageOptions;
    /**
     * Sets the space of between the popup and target.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetSpace?: Length;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * Sets the position offset of the popup.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * Set the background color of the popup.
     *
     * @type { ?(Color | string | Resource | long) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    popupColor?: Color | string | Resource | long;
    /**
     * Whether hide popup when click mask
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    autoCancel?: boolean;
    /**
     * Set the width of the popup.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * The position of the sharp corner of popup.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * The width of the arrow.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * The round corners of the popup.
     *
     * @type { ?Dimension }
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: Dimension;
    /**
     * The style of popup Shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Defines popup background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Defines the transition effect of popup opening and closing
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * Callback function when the popup interactive dismiss
     *
     * @type { ?(boolean | Callback<DismissPopupAction>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
     * Determine if it is compatible popup's half folded.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * Determine if popup can follow the target node when it has rotation or scale.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    followTransformOfTarget?: boolean;
    /**
     * Define the popup avoid keyboard mode.
     *
     * @type { ?KeyboardAvoidMode }
     * @default KeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyboardAvoidMode?: KeyboardAvoidMode;
    /**
     * Determine if popup can avoid the target when the display space is insufficient.
     *
     * @type { ?AvoidanceMode }
     * @default AvoidanceMode.COVER_TARGET
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    avoidTarget?: AvoidanceMode;
    /**
     * The width of popup's outline.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension;
    /**
     * The width of popup's border.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension;
    /**
     * The LinearGradient of popup's outline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * The LinearGradient of popup's innerline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderLinearGradient?: PopupBorderLinearGradient;
    /**
 	 * Define the popup theme color mode.
 	 * 
 	 * @type { ?AnchoredColorMode }
 	 * @default AnchoredColorMode.FOLLOW_TARGET
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	colorMode?: AnchoredColorMode;
    /**
     * Set system-styled materials for popup. Different materials have different effects, which can influence
     * the backgroundColor, border, shadow, and other visual attributes of popup.
     *
     * @type { ?SystemUiMaterial }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * Defines the popup's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Defines the popup's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundEffect?: BackgroundEffectOptions;

    /**
     * Defines the display level of the popup.
     *
     * @type { ?LevelMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    levelMode?: LevelMode;

  /**
   * Callback function before the popup closeAnimation starts.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
   * Callback function when the popup appears.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidAppear?: VoidCallback;

  /**
   * Callback function before the popup openAnimation starts.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillAppear?: VoidCallback;

  /**
   * Callback function when the popup disappears.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;
}
/**
 * Defines the custom popup options.
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CustomPopupOptions {
    /**
     * Popup builder.
     * <p><strong>NOTE</strong>:
     * <br>The popup attribute is a universal attribute. A custom popup does not support display of another popup.
     * <br>The position attribute cannot be used for the first-layer container in the builder.
     * <br>If the position attribute is used, the popup will not be displayed.
     * <br>If a custom component is used in the builder, the aboutToAppear and aboutToDisappear lifecycle callbacks
     * of the custom component are irrelevant to the visibility of the popup. As such, the lifecycle of the
     * custom component cannot be used to determine whether the popup is displayed or not.
     * </p>
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    builder: CustomBuilder;
    /**
     * Preferred position of the popup. If the set position is insufficient for holding the popup,
     * it will be automatically adjusted.
     *
     * @type { ?Placement }
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * Color of the popup. To remove the background blur, set backgroundBlurStyle to BlurStyle.NONE.
     *
     * @type { ?(Color | string | Resource | long) }
     * @default TRANSPARENT plus COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    popupColor?: Color | string | Resource | long;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * Whether to automatically dismiss the popup when an operation is performed on the page.
     * <p><strong>NOTE</strong>:
     * <br>To enable the popup to disappear upon a click on it, place a layout component in the builder place the
     * <Popup> component in the layout component, and modify the value of the bindPopup variable (show: boolean)
     * in the onClick event of the layout component.
     * </p>
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    autoCancel?: boolean;
    /**
     * on State Change
     *
     * @type { ?PopupStateChangeCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onStateChange?: PopupStateChangeCallback;
    /**
     * The offset of the sharp corner of popup.
     *
     * Offset of the popup arrow relative to the popup. When the arrow is at the top or bottom of the popup:
     * <br>The value 0 indicates that the arrow is located on the leftmost, and any other value indicates the distance
     * from the arrow to the leftmost; the arrow is centered by default. When the arrow is on the left or right
     * side of the popup: The value indicates the distance from the arrow to the top; the arrow is centered by
     * default. When the popup is displayed on either edge of the screen, it will automatically deviate leftward
     * or rightward to stay within the safe area. When the value is 0, the arrow always points to the bound component.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * The mask to block gesture events of popup.
     * When mask is set false, gesture events are not blocked.
     * When mask is set true, gesture events are blocked and mask color is transparent.
     *
     * @type { ?(boolean | PopupMaskType) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | PopupMaskType;
    /**
     * Sets the space of between the popup and target.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetSpace?: Length;
    /**
     * Sets the position offset of the popup.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * Width of the popup.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * Position of the popup arrow relative to its parent component. Available positions are Start, Center, and End,
     * in both vertical and horizontal directions. All these positions are within the parent component area.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * Arrow thickness. If the arrow thickness exceeds the length of the edge minus twice the size of the popup
     * rounded corner, the arrow is not drawn.
     * <p><strong>NOTE</strong>:
     * <br>This parameter cannot be set in percentage.
     * </p>
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     * <p><strong>NOTE</strong>:
     * <br>This parameter cannot be set in percentage.
     * </p>
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * Rounded corner radius of the popup.
     *
     * @type { ?Dimension }
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: Dimension;
    /**
     * Popup shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Background blur style of the popup.
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Set popup focusable
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    focusable?: boolean;
    /**
     * Defines the transition effect of popup opening and closing
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * Whether to perform dismissal event interception and interception callback.
     * 1. If this parameter is set to false, the system does not respond to the dismissal event initiated by
     * touching the Back button, swiping left or right on the screen, or pressing the Esc key; and the system
     * dismisses the popup only when show is set to false. If this parameter is set to true, the system responds
     * to the dismissal event as expected.
     * 2. If this parameter is set to a function, the dismissal event is intercepted and the callback function
     * is executed.
     * <p><strong>NOTE</strong>:
     * <br>No more onWillDismiss callback is allowed in an onWillDismiss callback.
     * </p>
     *
     * @type { ?(boolean | Callback<DismissPopupAction>) }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
      * Determine if it is compatible popup's half folded.
      *
      * @type { ?boolean }
      * @default false
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @since 23 static
      */
    enableHoverMode?: boolean;
    /**
     * Determine if popup can follow the target node when it has rotation or scale.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    followTransformOfTarget?: boolean;
    /**
     * Define the popup avoid keyboard mode.
     *
     * @type { ?KeyboardAvoidMode }
     * @default KeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyboardAvoidMode?: KeyboardAvoidMode;
    /**
     * Determine if popup can avoid the target when the display space is insufficient.
     *
     * @type { ?AvoidanceMode }
     * @default AvoidanceMode.COVER_TARGET
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    avoidTarget?: AvoidanceMode;
    /**
     * The width of popup's outline.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension;
    /**
     * The width of popup's border.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension;
    /**
     * The LinearGradient of popup's outline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * The LinearGradient of popup's innerline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderLinearGradient?: PopupBorderLinearGradient;
    /**
 	 * Define the popup theme color mode.
 	 * 
 	 * @type { ?AnchoredColorMode }
 	 * @default AnchoredColorMode.FOLLOW_TARGET
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	colorMode?: AnchoredColorMode;
    /**
     * Set system-styled materials for popup. Different materials have different effects, which can influence
     * the backgroundColor, border, shadow, and other visual attributes of popup.
     *
     * @type { ?SystemUiMaterial }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * Defines the popup's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Defines the popup's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundEffect?: BackgroundEffectOptions;

    /**
     * Defines the display level of the popup.
     *
     * @type { ?LevelMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    levelMode?: LevelMode;

  /**
   * Callback function when the popup appears.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidAppear?: VoidCallback;

  /**
   * Callback function before the popup closeAnimation starts.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
   * Callback function when the popup disappears.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;

  /**
   * Callback function before the popup openAnimation starts.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillAppear?: VoidCallback;
}

/**
 * Defines the menu preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MenuPreviewMode {
    /**
     * No preview content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,
    /**
     * The preview is a screenshot of the component on which a long-press triggers the context menu.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IMAGE = 1
}
/**
 * Defines the animator range of start and end property.
 *
 * @typedef { [double, double] } AnimationNumberRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type AnimationNumberRange = [
    double,
    double
];
/**
 * Defines the ContextMenu's preview animator options.
 *
 * @interface ContextMenuAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ContextMenuAnimationOptions {
    /**
     * Sets the start animator scale and end animator scale.
     *
     * @type { ?AnimationNumberRange }
     * @default -
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale?: AnimationNumberRange;
    /**
     * Defines the transition effect of menu preview opening and closing.
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * Sets the scale start and end animator of the image displayed before the custom builder preview is displayed.
     *
     * @type { ?AnimationNumberRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hoverScale?: AnimationNumberRange;
    /**
     * Sets whether support to interrupt the process of hover scale.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hoverScaleInterruption?: boolean;
}
/**
 * Defines the scaling mode for custom preview of contextMenu.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PreviewScaleMode {
    /**
     * Automatically resize preview based on the layout area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 0,
    /**
     * Maintain original size of preview content without scaling.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CONSTANT = 1,
    /**
     * Maintain aspect ratio to scale preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MAINTAIN = 2
}
/**
 * Defines the content transition effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ContentTransitionEffect {
  /**
   * When the content changes,there is no animation effect.
   *
   * @type {ContentTransitionEffect}
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static get IDENTITY(): ContentTransitionEffect;

  /**
   * When the content changes,there is a smooth fade-in and fade-out effect.
   *
   * @type {ContentTransitionEffect}
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static get OPACITY(): ContentTransitionEffect;
}
/**
 * Defines the type of border radius.
 *
 * @typedef { Length | BorderRadiuses | LocalizedBorderRadiuses }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type BorderRadiusType = Length | BorderRadiuses | LocalizedBorderRadiuses;
/**
 * Defines the menu haptic feedback mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum HapticFeedbackMode {
    /**
     * No haptic feedback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DISABLED = 0,
    /**
     * Defines menu always haptic feedback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLED = 1,
    /**
     * Defines menu automatically haptic feedback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 2
}

/**
 * Define the mode of menu how to avoid keyboard.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MenuKeyboardAvoidMode {
  /**
   * Menu will not avoid keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * First menu will avoid keyboard by changing its placement.
   * And then menu will avoid by resizing height when new placement is still not high enough.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TRANSLATE_AND_RESIZE = 1
}

/**
 * Defines menu grid position.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum MenuGridPosition {
   /**
    * The grid is located at the top of the menu.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   TOP = 0,
   /**
    * The grid is located at the bottom of the menu.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   BOTTOM = 1
}
 
/**
 * Defines grid style of menu.
 *
 * @interface MenuGridStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface MenuGridStyleOptions {
   /**
    * The count of items in grid.
    *
    * @type { ?int }
    * @default 3
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   count?: int;
   /**
    * The horizontal size of items in grid.
    *
    * @type { ?int }
    * @default 3
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   horizontalSize?: int;
   /**
    * The position of grid.
    *
    * @type { ?MenuGridPosition }
    * @default MenuGridPosition.TOP
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   position?: MenuGridPosition;
}

/**
 * Defines the context menu options.
 *
 * @interface ContextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ContextMenuOptions {
    /**
     * Offset for showing the context menu, which should not cause the menu to extend beyond the screen.
     * <p><strong>NOTE</strong>:
     * <br>When the menu is displayed relative to the parent component area, the width or height of the area is
     * automatically counted into the offset based on the placement attribute of the menu. When the menu is
     * displayed above the parent component (that is, placement is set to Placement.TopLeft, Placement.Top, or
     * Placement.TopRight), a positive value of x indicates rightward movement relative to the parent component,
     * and a positive value of y indicates upward movement. When the menu is displayed below the parent component
     * (that is, placement is set to Placement.BottomLeft, Placement.Bottom, or Placement.BottomRight), a positive
     * value of x indicates rightward movement relative to the parent component, and a positive value of y indicates
     * downward movement. When the menu is displayed on the left of the parent component (that is, placement is set
     * to Placement.LeftTop, Placement.Left, or Placement.LeftBottom), a positive value of x indicates leftward
     * movement relative to the parent component, and a positive value of y indicates downward movement. When the
     * menu is displayed on the right of the parent component (that is, placement is set to Placement.RightTop,
     * Placement.Right, or Placement.RightBottom), a positive value of x indicates rightward movement relative to
     * the parent component, and a positive value of y indicates downward movement. If the display position of the
     * menu is adjusted (different from the main direction of the initial placement value), the offset value is invalid.
     * </p>
     *
     * @type { ?Position }
     * @default {x:0,y:0} - Percentage values are not supported.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * Preferred position of the context menu. If the set position is insufficient for holding the component, it will be
     * automatically adjusted.
     * <p><strong>NOTE</strong>:
     * <br>If a menu is displayed by pressing and holding or right-clicking, the menu is displayed at the clicked
     * position.
     * </p>
     *
     * @type { ?Placement }
     * @default Placement.BottomLeft
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * whether show arrow belong to the menu.
     * <p><strong>NOTE</strong>:
     * <br>When enableArrow is true, an arrow is displayed in the position specified by placement.
     * <br>If placement is not set or its value is invalid, the arrow is displayed above the target.
     * <br>If the position is insufficient for holding the arrow, it is automatically adjusted.
     * <br>When enableArrow is undefined, no arrow is displayed.
     * <br>This API is supported in bindContextMenu since API version 10 and bindMenu since API version 12.
     * </p>
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * Offset of the arrow relative to the context menu. The offset settings take effect only when the value is valid,
     * can be converted to a number greater than 0, and does not cause the arrow to extend beyond the safe area of
     * the context menu.
     * <p><strong>NOTE</strong>:
     * <br>The safe distance of the arrow from the four sides of the menu is the sum of the menu's corner radius and
     * half the width of the arrow. The value of placement determines whether the offset is horizontal or vertical.
     * When the arrow is in the horizontal direction of the menu, the offset is the distance from the arrow to the
     * leftmost arrow's safe distance. When the arrow is in the vertical direction of the menu, the offset is the
     * distance from the arrow to the topmost arrow's safe distance. The default position where the arrow is
     * displayed varies with the value of placement: Without any avoidance by the menu, when placement is set to
     * Placement.Top or Placement.Bottom, the arrow is displayed horizontally and is centered by default; when
     * placement is set to Placement.Left or Placement.Right, the arrow is displayed vertically and is centered by
     * default; when placement is set to Placement.TopLeft or Placement.BottomLeft, the arrow is displayed
     * horizontally by default, and the distance from the arrow to the left edge of the menu is the arrow's safe
     * distance; when placement is set to Placement.TopRight or Placement.BottomRight, the arrow is displayed
     * horizontally by default, and the distance from the arrow to the right edge of the menu is the arrow's safe
     * distance; when placement is set to Placement.LeftTop or Placement.RightTop, the arrow is displayed vertically
     * by default, and the distance from the arrow to the top edge of the menu is the arrow's safe distance; when
     * placement is set to Placement.LeftBottom or Placement.RightBottom, the arrow is displayed vertically by
     * default, and the distance from the arrow to the bottom edge of the menu is the arrow's safe distance.
     * <br>This API is supported in bindContextMenu since API version 10 and bindMenu since API version 12.
     * </p>
     *
     * @type { ?Length }
     * @default 0vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * Preview displayed when the context menu is triggered by a long-press or use the isShown variable of
     * bindContextMenu to display the preview content style of the menu.
     * <p><strong>NOTE</strong>:
     * <br>This parameter has no effect when responseType is set to ResponseType.RightClick.
     * <br>If preview is set to MenuPreviewMode.NONE or is not set, the enableArrow parameter is effective.
     * <br>If preview is set to MenuPreviewMode.IMAGE or CustomBuilder, no arrow will be displayed even when
     * enableArrow is true.
     * </p>
     *
     * @type { ?(MenuPreviewMode | CustomBuilder) }
     * @default MenuPreviewMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preview?: MenuPreviewMode | CustomBuilder;
    /**
     * Defines the border radius for preview of menu.
     *
     * @type { BorderRadiusType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewBorderRadius?: BorderRadiusType;
    /**
     * Border radius of the menu.
     * <p><strong>NOTE</strong>:
     * <br>The value can be in percentage.
     * <br>If the sum of the two maximum corner radii in the horizontal direction exceeds the menu's width, or if the sum
     * of the two maximum corner radii in the vertical direction exceeds the menu's height, the default corner radius of
     * the menu will be used.
     * </p>
     *
     * @type { ?(Length | BorderRadiuses | LocalizedBorderRadiuses) }
     * @default 8vp for 2-in-1 devices and 20vp for other devices
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;
    /**
     * Callback triggered when the menu is displayed.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAppear?: () => void;
    /**
     * Callback function when the context menu disappear.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDisappear?: () => void;
    /**
     * Callback triggered when the menu is about to appear.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    aboutToAppear?: () => void;
    /**
     * Callback triggered when the menu is about to disappear.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    aboutToDisappear?: () => void;
    /**
     * The margin of menu's layoutRegion.
     *
     * @type { ?Margin }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    layoutRegionMargin?: Margin;
    /**
     * The preview animator options.
     *
     * @type { ?ContextMenuAnimationOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewAnimationOptions?: ContextMenuAnimationOptions;
    /**
     * Background color of the menu.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * Background blur style of the menu.
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Defines the menu's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Defines the menu's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * Defines the transition effect of menu opening and closing.
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
      * Determine if it is compatible menu's half folded.
      *
      * @type { ?boolean }
      * @default false
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @since 23 static
      */
    enableHoverMode?: boolean;
    /**
     * Defines the haptic feedback mode of menu.
     *
     * @type { ?HapticFeedbackMode }
     * @default HapticFeedbackMode.DISABLED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hapticFeedbackMode?: HapticFeedbackMode;
    /**
     * The color of menu's outer border.
     *
     * @type { ?(ResourceColor | EdgeColors) }
     * @default '#19ffffff'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineColor?: ResourceColor | EdgeColors;
    /**
     * The width of menu's outer border.
     * If outline effects are required, outlineWidth is required.
     *
     * @type { ?(Dimension | EdgeOutlineWidths) }
     * @default 0vp - Percentage values are not supported.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension | EdgeOutlineWidths;
    /**
     * Whether it is a menu without mask.
     *
     * @type { ?(boolean | MenuMaskType) }
     * @default true when preview is enabled, or is false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | MenuMaskType;
    /**
     * Defines modal mode of menu.
     *
     * @type { ?ModalMode }
     * @default ModalMode.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    modalMode?: ModalMode;
    /**
     * Callback function when the menu appears.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidAppear?: VoidCallback;
    /**
     * Callback function when the menu disappears.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidDisappear?: VoidCallback;
    /**
     * Callback function before the menu openAnimation starts.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillAppear?: VoidCallback;
    /**
     * Callback function before the menu closeAnimation starts.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDisappear?: VoidCallback;
    /**
     * Defines the scaling mode for custom preview of contextMenu.
     *
     * @type { ?PreviewScaleMode }
     * @default PreviewScaleMode.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewScaleMode?: PreviewScaleMode;
    /**
     * Defines the available layout area of preview.
     *
     * @type { ?AvailableLayoutArea }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    availableLayoutArea?: AvailableLayoutArea;
    /**
     * Defines the menu position.
     *
     * @type { ?Position }
     * @default { x: 0, y: 0 }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchorPosition?: Position;
    /**
 	 * Define the menu theme color mode.
 	 * 
 	 * @type { ?AnchoredColorMode }
 	 * @default AnchoredColorMode.FOLLOW_TARGET
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	colorMode?: AnchoredColorMode;
    /**
     * Determine the mode of menu how to avoid keyboard.
     *
     * No avoiding by default
     *
     * @type { ?MenuKeyboardAvoidMode }
     * @default MenuKeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyboardAvoidMode?: MenuKeyboardAvoidMode;

    /**
     * Defines the minimum distance between menu and keyboard.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    minKeyboardAvoidDistance?: LengthMetrics;
    /**
 	 * Sets the space between the menu and target.
 	 * When both targetSpace and offset are set, they take effect additively. It is recommended to use targetSpace
 	 * to set the space between the menu and target, and use offset for additional offset.
 	 *
 	 * @type { ?LengthMetrics }
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	targetSpace?: LengthMetrics;
    /**
     * Set system-styled materials for menu. Different materials have different effects, which can influence
     * the backgroundColor, border, shadow, and other visual attributes of menu.
     *
     * Device Behavior Differences:The effect of the same material may vary across different devices depending on
     * their computing power.
     *
     * @type { ?SystemUiMaterial }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    /**
     * Set system-styled materials for menu. The material effect behaves differently on devices with different
     * level of computing powers. On devices with lower computing power, it affects attributes such as the
     * backgroundColor, borderWidth, borderColor, shadow. On devices with higher computing power, it adds a filter effect
     * at the system material layer, which can produce an effect similar to glass.
     *
     * @type { ?SystemUiMaterial }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * Defines the max height of menu.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    maxHeight?: LengthMetrics;
    /**
     * Defines the scroll bar state of menu.
     *
     * @type { ?BarState }
     * @default BarState.Auto
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    scrollBar?: BarState;
    /**
     * Sets the distortion animation Mode of the menu.
     *
     * @default DistortionMode.DISTORTION_AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    distortionMode?: DistortionMode;
    /**
     * Sets the edgeLight animation Mode of the menu.
     *
     * @default DistortionMode.EDGELIGHT_DISABLED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    edgeLightMode?: EdgeLightMode;
    /**
     * Define grid style of menu. Only fixed-style menus are effective.
     * For example, using MenuElement in bindMenu/bindContextMenu or using MenuItemOptions in MenuItem.
     *
     * @type { ?MenuGridStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    gridStyle?: MenuGridStyleOptions;
}
/**
 * Defines the menu options.
 *
 * @extends ContextMenuOptions
 * @interface MenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuOptions extends ContextMenuOptions {
    /**
     * Sets the title of the menu window.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    title?: ResourceStr;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @default true for 2-in-1 devices and false for other devices
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
}
/**
 * Implements a ProgressMask object to set the progress, maximum value, and color of the mask.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ProgressMask {
    /**
     * constructor.
     *
     * @param { double } value - Current value of the progress mask. Value range: [0.0, +∞).
     * @param { double } total - Maximum value of the progress mask. Value range: [0.0, +∞).
     * @param { ResourceColor } color - Color of the progress mask.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(value: double, total: double, color: ResourceColor);
    /**
     * Updates the progress value of the progress mask.
     *
     * @param { double } value - Current value of the progress mask.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    updateProgress(value: double): void;
    /**
     * Update the color of the mask.
     *
     * @param { ResourceColor } value - Color of the progress mask.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    updateColor(value: ResourceColor): void;
    /**
     * Enable the breathe animation of mask.
     *
     * @param { boolean } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableBreathingAnimation(value: boolean): void;
}
/**
 * Defines TouchTestInfo class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TouchTestInfo {
   /**
     * Get the X-coordinate relative to the window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * Get the Y-coordinate relative to the window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * Get the X-coordinate relative to the current component.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    parentX: double;
    /**
     * Get the Y-coordinate relative to the current component.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    parentY: double;
    /**
     * Get the X-coordinate relative to the sub component.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * Get the Y-coordinate relative to the sub component.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * Get the rectangle of sub component.
     *
     * @type { RectResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rect: RectResult;
    /**
     * Get the name of sub component.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: string;
}
/**
 * Defines TouchResult class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TouchResult {
    /**
     * Defines the touch test strategy.
     *
     * @type { TouchTestStrategy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strategy: TouchTestStrategy;
    /**
     * Defines the component's name.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id?: string;
}

/**
 * 3D vector in depth space.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthVector3 {
  /**
   * X component.
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  x: double;

  /**
   * Y component.
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  y: double;

  /**
   * Z component.
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  z: double;
}

/**
 * 4D vector in depth space.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthVector4 {
  /**
   * X component.
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  x: double;

  /**
   * Y component.
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  y: double;

  /**
   * Z component.
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  z: double;

  /**
   * W component.
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  w: double;
}

/**
 * RGB color in depth space.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthColorRGB {
  /**
   * Red component (0-255).
   *
   * @default 255
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  red: int;

  /**
   * Green component (0-255).
   *
   * @default 255
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  green: int;

  /**
   * Blue component (0-255).
   *
   * @default 255
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  blue: int;
}

/**
 * Spatial corner positions in 3D space.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SpatialPosition {
  /**
   * Left-top corner position in 3D space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  leftTop: DepthVector3;

  /**
   * Right-top corner position in 3D space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  rightTop: DepthVector3;

  /**
   * Left-bottom corner position in 3D space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  leftBottom: DepthVector3;

  /**
   * Right-bottom corner position in 3D space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  rightBottom: DepthVector3;
}

/**
 * Spatial effect params.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SpatialEffectParams {
  /**
   * Spatial position defined by corner points.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  position: SpatialPosition | double;

  /**
   * Occlusion weight for spatial effect.
   * Value range:[0, 1]Default value: 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  occlusionWeight?: double;
}

/**
 * Set the edge blur effect distance of the corresponding defense line of the component
 * When the component expand out, no re-layout is triggered
 *
 * @interface PixelStretchEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PixelStretchEffectOptions {
    /**
     * top property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    top?: Length;
    /**
     * bottom property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bottom?: Length;
    /**
     * left property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    left?: Length;
    /**
     * right property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    right?: Length;
}
/**
 * 定义点击效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ClickEffect {
    /**
     * 设置当前组件的点击回弹效果。
     * 
     * 默认值：ClickEffectLevel.LIGHT
     * 
     * **说明：**
     * 
     * 当level为undefined或者null时， ClickEffect采用ClickEffectLevel.LIGHT对应的回弹效果，缩放比参照scale说明。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    level: ClickEffectLevel;
    /**
     * 回弹缩放比例，支持在设置ClickEffectLevel的基础上微调。
     * 
     * **说明：**
     * 
     * 当level为ClickEffectLevel.LIGHT时，默认值：0.90 
     * 
     * 当level为ClickEffectLevel.MIDDLE或者ClickEffectLevel.HEAVY时，默认值：0.95 
     * 
     * 当level为undefined或者null时，level为ClickEffectLevel.LIGHT，默认值：0.90 
     * 
     * 当scale为undefined或者null时，使用当前level对应的默认缩放比例。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale?: double;
}
/**
 * Defines the fadingEdge options.
 *
 * @typedef FadingEdgeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FadingEdgeOptions {
    /**
     * The length of FadingEdge.
     *
     * @type { LengthMetrics }
     * @default 32vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fadingEdgeLength?: LengthMetrics;
}
/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NestedScrollOptions {
    /**
     * Set NestedScrollMode when the scrollable component scrolls forward
     *
     * @type { NestedScrollMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollForward: NestedScrollMode;
    /**
     * Set NestedScrollMode when the scrollable component scrolls backward
     *
     * @type { NestedScrollMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollBackward: NestedScrollMode;
}
/**
 * Defines the menu element.
 *
 * @interface MenuElement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuElement {
    /**
     * Sets the value of the menu element.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: ResourceStr;
    /**
     * Sets the icon of the menu element.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * Sets the symbol of the menu element.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolIcon?: SymbolGlyphModifier;
    /**
     * If the value is true, the menu element is available and can respond to operations such as clicking.
     * If the value is false, the menu element is not available and click operations are not responded.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enabled?: boolean;
    /**
     * Method executed by the callback.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: () => void;
}

/**
 * Defines the attribute modifier.
 *
 * @interface AttributeModifier<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AttributeModifier<T> {
  /**
   * Defines the normal update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default applyNormalAttribute(instance: T) : void;

  /**
   * Defines the pressed update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default applyPressedAttribute(instance: T) : void;

  /**
   * Defines the focused update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default applyFocusedAttribute(instance: T) : void;

  /**
   * Defines the disabled update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default applyDisabledAttribute(instance: T) : void;

  /**
   * Defines the selected update attribute function.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default applySelectedAttribute(instance: T) : void;

  /**
   * Defines the function that updates the hovered attribute.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default applyHoveredAttribute(instance: T) : void;

  /**
   * Specifies the states to be monitored.
   * Override this method to specify which states (Normal, Pressed, Focused, Disabled, Selected) should be
   * monitoredby returning a bitmask of ModifierState enum values.
   *
   * @returns { int } - Bitmask combination of states to be monitored
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 23 staticonly
   */
  default monitoredStates(): int;
}
/**
 * Defines the content modifier.
 *
 * @interface ContentModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ContentModifier<T> {
    /**
     * Defining applyContent function.
     *
     * @returns { WrappedBuilder<CustomBuilderT<T>> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    applyContent(): WrappedBuilder<CustomBuilderT<T>>;
}
/**
 * Defines the common configuration.
 *
 * @interface CommonConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CommonConfiguration<T> {
    /**
     * If the value is true, the contentModifier is available and can respond to operations such as triggerChange.
     *  If it is set to false, triggerChange operations are not responded.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enabled: boolean;
    /**
     * Obtains the contentModifier instance object
     *
     * @type { ContentModifier<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    contentModifier: ContentModifier<T>;
}
/**
 * Outline Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum OutlineStyle {
    /**
     * Solid border.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SOLID = 0,
    /**
     * Dashed border.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DASHED = 1,
    /**
     * Dotted border. The radius of a dot is half of **outlineWidth**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DOTTED = 2
}
/**
 * Defines the drag preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DragPreviewMode {
    /**
     * Default preview mode, let system process preview scale.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 1,
    /**
     * Disable system scale to preview panel
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DISABLE_SCALE = 2,
    /**
     * Enable the default shadow effect of preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_DEFAULT_SHADOW = 3,
    /**
     * Enable the default radius effect of preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_DEFAULT_RADIUS = 4,
    /**
     * Enable the default gray effect on the dragging item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_DRAG_ITEM_GRAY_EFFECT = 5,
    /**
     * Enable the tile effect for multi drag, each dragged graph is display in the original relative position.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_MULTI_TILE_EFFECT = 6,
    /**
     * Enable the touch point calculation position based on final preview rect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW = 7
}
/**
 * Define drag start animation effect from drag preview to the handle drag image
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DraggingSizeChangeEffect {
    /**
     * Default effect, no transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Only scaled transition, this parameter take effect when PREVIEW_MODE is not DISABLE_SCALE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SIZE_TRANSITION = 1,
    /**
     * Scaled and content transition together, this size transition take effect when PREVIEW_MODE is not DISABLE_SCALE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SIZE_CONTENT_TRANSITION = 2
}
/**
 * Define the menu pop-up policy
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MenuPolicy {
    /**
     * Default value. The default logic of whether to pop up a menu depends on the scene.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * The menu is always hidden.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    HIDE = 1,
    /**
     * The menu is always displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SHOW = 2
}
/**
 * Defines the preview options.
 *
 * @interface DragPreviewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragPreviewOptions {
    /**
     * Drag preview mode.
     *
     * @type { ?(DragPreviewMode | Array<DragPreviewMode>) }
     * @default DragPreviewMode.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mode?: DragPreviewMode | Array<DragPreviewMode>;
    /**
     * Drag preview modifier.
     *
     * @type { ?ImageModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    modifier?: ImageModifier;
    /**
     * The flag for number showing.
     *
     * @type { ?(boolean | long) }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    numberBadge?: boolean | long;
    /**
    * Drag start animation effect from drag preview to the handle drag image.
    *
    * @type { ?DraggingSizeChangeEffect }
    * @default DraggingSizeChangeEffect.DEFAULT
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    sizeChangeEffect?: DraggingSizeChangeEffect;
}
/**
 * Defines the drag options.
 *
 * @interface DragInteractionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragInteractionOptions {
    /**
    * Define whether to gather selected nodes in grid or list.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    isMultiSelectionEnabled?: boolean;
    /**
    * Define whether to execute animation before preview floating.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    defaultAnimationBeforeLifting?: boolean;
    /**
    * Config if auto scrolling should be triggered when the drag hovered on a scrollable controller's edge.
    *
    * @type { ?boolean }
    * @default true
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    enableEdgeAutoScroll?: boolean;
    /**
    * Define whether to enable the haptic feedback when dragging, the default value is false.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    enableHapticFeedback?: boolean;
    /**
    * Define whether to lifting trigger drag by finger.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    isLiftingDisabled?: boolean;
}
/**
 * Defines the drag preview configuration.
 *
 * @interface PreviewConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PreviewConfiguration {
    /**
    * Define whether to only use for lifting.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    onlyForLifting?: boolean;
    /**
    * Define whether to delay create builder.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    delayCreating?: boolean;
}
/**
 * Define the options of invert
 *
 * @interface InvertOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface InvertOptions {
    /**
     * Defines the low value of threshold
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    low: double;
    /**
     * Defines the high value of threshold
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    high: double;
    /**
     * Defines the threshold
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    threshold: double;
    /**
     *Defines the threshold range
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    thresholdRange: double;
}
/**
 * Defines the type that can be undefined.
 *
 * @typedef { T | undefined } Optional<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Optional<T> = T | undefined;
/**
 * Defines the TipsMessageType property with ResourceStr and StyledString.
 *
 * @typedef { ResourceStr | StyledString } TipsMessageType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TipsMessageType = ResourceStr | StyledString;
/**
 * Define the modal mode of menu.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ModalMode {
    /**
     * Modal modal automatically.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 0,
    /**
     * Operation takes effect around menu.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 1,
    /**
     * Operation takes no effect around menu in target window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TARGET_WINDOW = 2
}
/**
 * Menu mask type
 *
 * @interface MenuMaskType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuMaskType {
    /**
     * Mask color of menu.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * Set menu mask background blur Style.
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
}
/**
 * Defines the available layout area.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AvailableLayoutArea {
    /**
     * Size of safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SAFE_AREA = 0
}
/**
 * Define the options for background image.
 *
 * @interface BackgroundImageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface BackgroundImageOptions {
    /**
     * Sets the synchronous or asynchronous mode for background image loading.
     * The default parameter type is bool, and the default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    syncLoad?: boolean;
    /**
     * Set the repeat style of the background image.
     *
     * @type { ?ImageRepeat }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeat?: ImageRepeat;
}
/**
 * Defines background options.
 *
 * @interface BackgroundOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BackgroundOptions {
    /**
     * Set the alignment of the custom background and component.
     *
     * Anonymous Object Rectification.
     * @type { ?Alignment }
     * @default Alignment.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align?: Alignment;
    /**
     * The set of edges for which to ignore layout safe area. To respect safe area insets on all edges,
     * explicitly pass empty edge set.
     *
     * @type { ?Array<LayoutSafeAreaEdge> }
     * @default The default value is LayoutSafeAreaEdge.ALL when background is ResourceColor, otherwise
     *     it is an empty array [].
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
    */
    ignoresLayoutSafeAreaEdges?: Array<LayoutSafeAreaEdge>;
}
/**
 * Defines the value of the custom property..
 *
 * @typedef { undefined | null | Object | Record<string, CustomProperty> | Array<CustomProperty> } CustomProperty
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type CustomProperty = undefined | null | Object | Record<string, CustomProperty> | Array<CustomProperty>;

/**
 * CommonMethod
 *
 * @interface CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CommonMethod {
    /**
     * Sets the width of the component or its horizontal layout policy. By default, the
     * component uses the width required for its content. If the width of the component is
     * greater than that of the parent container, the component will be drawn beyond the
     * parent container scope.
     *
     * @param { Length | LayoutPolicy | undefined } widthValue
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default width(widthValue: Length | LayoutPolicy | undefined): this;
    /**
     * Sets the height of the component or its vertical layout policy. By default, the
     * component uses the height required for its content. If the height of the component
     * is greater than that of the parent container, the component will be drawn beyond
     * the parent container scope.
     *
     * @param { Length | LayoutPolicy | undefined } heightValue
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default height(heightValue: Length | LayoutPolicy | undefined): this;
    /**
     * Sets the drawModifier of the current component.
     *
     * @param { DrawModifier | undefined } modifier - drawModifier used to draw, or undefined if it is not available.
     * Default value: undefined
     * A custom modifier applies only to the FrameNode of the currently bound component, not to its subnodes.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default drawModifier(modifier: DrawModifier | undefined): this;
    /**
     * Sets the custom property of the current component.
     * This API does not work for custom components.
     *
     * @param { string } name - the name of the custom property.
     * @param { CustomProperty } value - the value of the custom property.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default customProperty(name: string, value: CustomProperty): this;
    /**
     * Sets the safe area to be expanded to.
     * <br>default:{types: [SafeAreaType.SYSTEM, SafeAreaType.CUTOUT, SafeAreaType.KEYBOARD],
     * edges: [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM, SafeAreaEdge.START, SafeAreaEdge.END]}
     *
     * @param { Array<SafeAreaType> } [types] - Indicates the types of the safe area.
     * @param { Array<SafeAreaEdge> } [edges] - Indicates the edges of the safe area.
     * @returns { this } The component instance.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): this;
    /**
     * Expands the layout safe area of a component.
     *
     * @param { Array<LayoutSafeAreaType> | undefined } [types] - The region type to expand the component's layout safe area into.
     *     The default value is LayoutSafeAreaType.SYSTEM.
     * @param { Array<LayoutSafeAreaEdge> | undefined } [edges] - The set of edges for which to ignore layout safe area.
     *     The default value is LayoutSafeAreaEdge.ALL.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType> | undefined, edges?: Array<LayoutSafeAreaEdge> | undefined): this;
    /**
     * Sets the response region of the current component.
     *
     * @param { Array<Rectangle> | Rectangle | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default responseRegion(value: Array<Rectangle> | Rectangle | undefined): this;
    /**
     * Sets the mouse response region of current component
     *
     * @param { Array<Rectangle> | Rectangle | undefined } value
     * @returns { this } return the component attribute
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default mouseResponseRegion(value: Array<Rectangle> | Rectangle | undefined): this;
    /**
    * Sets the response region list of the current component.
    * 
    * @param { Array<ResponseRegion> | undefined } regions
    * @returns { this } return the component attribute
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default responseRegionList(regions: Array<ResponseRegion> | undefined): this;
    /**
     * Sets the size of the component.
     *
     * @param { SizeOptions | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default size(value: SizeOptions | undefined): this;
    /**
     * Sets the constraint size of the component, which is used to limit the size range during component layout.
     * Default value: **{minWidth: 0, maxWidth: Infinity, minHeight: 0, maxHeight: Infinity}**.
     *
     * @param { ConstraintSizeOptions | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default constraintSize(value: ConstraintSizeOptions | undefined): this;
    /**
     * Sets how the component behaves during hit testing.
     *
     * @param { HitTestMode | undefined } value - the hit test mode.
     * @default HitTestMode.default - Both the node and its child nodes respond to the hit test of a touch event,
     *     but its sibling nodes are blocked from the hit test. The hit test for ancestor nodes is not affected.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default hitTestBehavior(value: HitTestMode | undefined): this;
    /**
     * Called to specify how to perform the touch test on the children of this component.
     *
     * @param { ((value: Array<TouchTestInfo>) => TouchResult) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onChildTouchTest(event: ((value: Array<TouchTestInfo>) => TouchResult) | undefined): this;
    /**
     * Sets the weight of the component during layout. A component with this attribute is allocated space
     * along the main axis of its parent container (Row, Column, or Flex) based on its specified weight.
     * Default value: **0**.
     *
     * @param { double | string | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default layoutWeight(value: double | string | undefined): this;
    /**
     * Sets the weight of the component in a chain, which is used to re-lay out components that form the chain.
     * <br>This API has effect only when the parent container is RelativeContainer.
     *
     * @param { ChainWeightOptions | undefined } chainWeight
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default chainWeight(chainWeight: ChainWeightOptions | undefined): this;
    /**
     * Sets the padding of the component.
     * Default value: **0**.
     *
     * @param { Padding | Length | LocalizedPadding | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default padding(value: Padding | Length | LocalizedPadding | undefined): this;
    /**
     * Sets the safe area padding. It enables a container to add a component-level
     * safe area for child components to expand into.
     * Default value: **LengthMetrics.vp(0)**
     *
     * @param { Padding | LengthMetrics | LocalizedPadding | undefined } paddingValue - Indicates safeArea padding values
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding | undefined): this;
    /**
     * Sets the margin of the component.
     * Default value: **0**.
     *
     * @param { Margin | Length | LocalizedMargin | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default margin(value: Margin | Length | LocalizedMargin | undefined): this;
    /**
     * Set the background to a given CustomBuilder, or set it to a specific ResourceColor.
     *
     * @param { CustomBuilder | ResourceColor | undefined } content
     * @param { BackgroundOptions } [options]
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default background(content: CustomBuilder | ResourceColor | undefined, options?: BackgroundOptions): this;
    /**
     * Background color
     *
     * @param { ResourceColor | ColorMetrics | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundColor(value: ResourceColor | ColorMetrics | undefined): this;
    /**
     * Sets the pixel rounding policy for the current component in the specified direction.
     * <br>If a direction is not set, the pixels are rounded to the nearest whole number in that direction.
     *
     * @param { PixelRoundPolicy | undefined } value - indicates the rounding policy for the bounds of the component.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default pixelRound(value: PixelRoundPolicy | undefined): this;
    /**
     * Background image
     *
     * @param { ResourceStr | PixelMap | undefined } src - the background image source
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImage(src: ResourceStr | PixelMap | undefined): this;
    /**
     * Background image
     *
     * @param { ResourceStr | PixelMap | undefined } src - the background image source
     * @param { BackgroundImageOptions } options - config the options
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImage(src: ResourceStr | PixelMap | undefined, options: BackgroundImageOptions): this;
    /**
     * Background image
     * src:Image address url
     *
     * @param { ResourceStr | PixelMap | undefined } src
     * @param { ImageRepeat } repeat
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImage(src: ResourceStr | PixelMap | undefined, repeat: ImageRepeat): this;
    /**
     * Background image size
     *
     * @param { SizeOptions | ImageSize | undefined } value - The width and height of the background image.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImageSize(value: SizeOptions | ImageSize | undefined): this;
    /**
     * Background image position
     * x:Horizontal coordinate;y:Vertical axis coordinate.
     *
     * @param { Position | Alignment | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImagePosition(value: Position | Alignment | undefined): this;
    /**
     * 为当前组件提供一种背景材质模糊能力，通过枚举值的方式封装了不同的模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度。
     *
     * @param { BlurStyle | undefined } style - 背景模糊样式。模糊样式中封装了模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度五个参数。<br/>当style的值为undefined时，恢复为默认
     *     关闭模糊的背景。
     * @param { BackgroundBlurStyleOptions } [options] - 背景模糊选项。<br/>该参数在ArkTS卡片中，暂不支持使用。
     * @param { SystemAdaptiveOptions } [sysOptions] - 系统自适应调节参数。<br/>默认值：{ disableSystemAdaptation: false }
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundBlurStyle(style: BlurStyle | undefined, options?: BackgroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): this;
    /**
     * 设置组件背景属性，包括背景模糊半径、亮度、饱和度和颜色等参数。
     * 
     * > **说明：**
     * >
     * > backgroundEffect接口为实时接口，每帧对模糊等效果执行实时渲染，性能负载较大。当组件背景模糊效果无需变动时，推荐采用静态模糊接口
     * > [blur]{@link @ohos.effectKit:effectKit.Filter.blur(radius: double)}实现模糊效果。最佳实践请参考：
     * > [图像模糊动效优化-使用场景](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-fuzzy-scene-performance-optimization#section4945532519)。
     *
     * @param { BackgroundEffectOptions | undefined } options - 设置组件背景属性包括：饱和度，亮度，颜色。<br/>当options的值为undefined时，恢复为无效果的背
     *     景。
     * @param { SystemAdaptiveOptions } [ sysOptions ] - 系统自适应调节参数。<br/>默认值：{ disableSystemAdaptation: false }
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundEffect(options: BackgroundEffectOptions | undefined, sysOptions?: SystemAdaptiveOptions): this;
    /**
     * Background image resizable.
     * value:resizable options
     *
     * @param { ResizableOptions | undefined } value - Indicates the resizable options.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundImageResizable(value: ResizableOptions | undefined): this;
    /**
     * Foreground effect.
     *
     * @param { ForegroundEffectOptions | undefined } options - options indicates the effect options.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default foregroundEffect(options: ForegroundEffectOptions | undefined): this;
    /**
     * 设置非滤镜视觉效果。
     *
     * @param { VisualEffect | undefined } effect - 非滤镜视觉效果。<br/>当effect的值为undefined时，无非滤镜视觉效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default visualEffect(effect: VisualEffect | undefined): this;
    /**
     * 设置背景滤镜视觉效果。
     *
     * @param { Filter | undefined } filter - 背景滤镜视觉效果。<br/>当filter的值为undefined时，无背景滤镜视觉效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundFilter(filter: Filter | undefined): this;
    /**
     * 设置前景滤镜（内容）视觉效果。
     *
     * @param { Filter | undefined } filter - 前景滤镜（内容）视觉效果。<br/>当filter的值为undefined时，无前景滤镜（内容）视觉效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default foregroundFilter(filter: Filter | undefined): this;
    /**
     * 设置合成滤镜视觉效果。
     *
     * @param { Filter | undefined } filter - 合成滤镜视觉效果。<br/>当filter的值为undefined时，无合成滤镜视觉效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default compositingFilter(filter: Filter | undefined): this;
    /**
     * 设置系统材质滤镜效果，系统材质滤镜的绘制早于[backgroundFilter]{@link CommonMethod.backgroundFilter}绘制，即位于backgroundFilter的更底层。
     *
     * @param { Filter | undefined } filter - 系统材质滤镜视觉效果。设置为undefined时恢复为无系统材质滤镜效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default materialFilter(filter: Filter | undefined): this;
    /**
     * Applies a foreground blur style to the component.
     *
     * @param { BlurStyle | undefined } style - Settings of the foreground blur style.
     * @param { ForegroundBlurStyleOptions } [options]
     * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default foregroundBlurStyle(style: BlurStyle | undefined, options?: ForegroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): this;
    /**
     * 设置组件的不透明度。
     *
     * @param { double | Resource | undefined } value - 元素的不透明度，取值范围为0到1，若设置的值小于0时，则取值为0，若设置的值大于1时，则取值为1，1表示不透明，0表示完全透明，
     *     达到隐藏组件效果，但是在布局中占位。 <br> 默认值：1 <br/>**说明：** <br/> 子组件会继承父组件的透明度，并与自身的透明度属性叠加。如：父组件透明度为0.1，子组件设置透明度为0.8，则子组件实际透
     *     明度为0.1*0.8=0.08。<br/>当opacity的值为undefined时，恢复为默认不透明度为1的状态。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default opacity(value: double | Resource | undefined): this;
    /**
     * Sets the border.
     *
     * @param { BorderOptions | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default border(value: BorderOptions | undefined): this;
    /**
     * Sets the border style.
     * Default value: **BorderStyle.Solid**.
     *
     * @param { BorderStyle | EdgeStyles | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default borderStyle(value: BorderStyle | EdgeStyles | undefined): this;
    /**
     * Sets the border width.
     * Percentage values are not supported.
     *
     * @param { Length | EdgeWidths | LocalizedEdgeWidths | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths | undefined): this;
    /**
     * Sets the border color.
     * Default value: **Color.Black**.
     * @param { ResourceColor | EdgeColors | LocalizedEdgeColors | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors | undefined): this;
    /**
     * Sets the radius of the border rounded corners.
     *     The radius is restricted by the component size. The maximum value is half of the component width or height.
     * NOTE
     *    1. **RenderStrategy.FAST**: The current component and its child components will be drawn directly
     *        onto the canvas with rounded corners applied.
     *    2. **RenderStrategy.OFFSCREEN**: The current component and its child components will first be rendered onto
     *        an off-screen canvas, then undergo a rounded corner clipping, and finally be drawn onto the main canvas.
     * @param { Length | BorderRadiuses | LocalizedBorderRadiuses | undefined } value
     * @param { RenderStrategy | undefined } [type] - Application types for drawing rounded corners.
     *     Default value: **RenderStrategy.FAST**.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses | undefined, type?: RenderStrategy | undefined): this;
    /**
     * Sets the border image of the component.
     *
     * @param { BorderImageOption | undefined } value - Border image or border gradient.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default borderImage(value: BorderImageOption | undefined): this;
    /**
     * Sets the outline attributes in one declaration.
     *
     * @param { OutlineOptions | undefined } value - Outline attributes.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default outline(value: OutlineOptions | undefined): this;
    /**
     * Sets the style of the outline.
     *
     * @param { OutlineStyle | EdgeOutlineStyles | undefined } value - Outline style.
     *     <br>Default value: **OutlineStyle.SOLID**.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default outlineStyle(value: OutlineStyle | EdgeOutlineStyles | undefined): this;
    /**
     * Sets the thickness of the outline.
     *
     * @param { Dimension | EdgeOutlineWidths | undefined } value - Outline thickness. Percentage values are not supported.
     *     <br>Default value: **0**Outline thickness. Percentage values are not supported.
     *     <br>Default value: **0**.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default outlineWidth(value: Dimension | EdgeOutlineWidths | undefined): this;
    /**
     * Sets the color of the outline.
     *
     * @param { ResourceColor | EdgeColors | LocalizedEdgeColors | undefined } value - Outline color.
     *     <br>Default value: **Color.Black**.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors | undefined): this;
    /**
     * Sets the radius of the outline corners.
     *
     * @param { Dimension | OutlineRadiuses | undefined } value - adius of the outline corners. Percentage
     *     values are not supported.
     *     <br>Default value: **0**.
     *     <br>Maximum effective value: Component width/2 + outlineWidth or component height/2 + outlineWidth.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default outlineRadius(value: Dimension | OutlineRadiuses | undefined): this;
    /**
     * 设置组件的前景色。当组件未设置前景色，默认继承父组件。
     *
     * @param { ResourceColor | ColoringStrategy | undefined } value - 设置组件的前景颜色或者根据智能取色策略设置前景颜色。不支持属性动画。<br/>当value的值为
     *     undefined时，维持之前取值或组件默认取值，具体行为不同组件可能会有差异，建议开发者使用确定颜色或[ColoringStrategy]{@link ColoringStrategy}。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default foregroundColor(value: ResourceColor | ColoringStrategy | undefined): this;
    /**
     * Called when a click event occurs.
     *
     * <p><strong>NOTE</strong>:
     * <br> Since API version 9, the following constraints apply when this API is used in service widgets:
     * <br> Click events cannot be triggered if the finger is pressed for more than 800 ms.
     * <br> Click events cannot be triggered if the finger moves more than 20 px after pressing down.
     * </p>
     * @param { ((event: ClickEvent) => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onClick(event: ((event: ClickEvent) => void) | undefined): this;
    /**
     * Trigger a click event when a click is clicked, move distance should smaller than distanceThreshold.
     *
     * <p><strong>NOTE</strong>:
     * <br> If the distanceThreshold value specified is less than or equal to 0 vp, it will be converted
     * to the default value. Since API version 9, the following constraints apply when this API is used
     * in service widgets:
     * <br> Click events cannot be triggered if the finger is pressed for more than 800 ms.
     * <br> Click events cannot be triggered if the finger moves more than 20 px after pressing down.
     * </p>
     * @param { Callback<ClickEvent> | undefined } event - this function callback executed when the click
     *     action is recognized
     * @param { double | undefined } distanceThreshold - the distance threshold of finger's movement when
     *     detecting a click action
     * @default (2^31-1)vp
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onClick(event: Callback<ClickEvent> | undefined, distanceThreshold: double | undefined): this;
    /**
     * Trigger a hover event.
     *
     * @param { ((isHover: boolean, event: HoverEvent) => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onHover(event: ((isHover: boolean, event: HoverEvent) => void) | undefined): this;
    /**
     * Trigger a hover move event.
     *
     * @param { Callback<HoverEvent> | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onHoverMove(event: Callback<HoverEvent> | undefined): this;
    /**
     * Trigger a accessibility hover event.
     *
     * @param { AccessibilityCallback | undefined } callback - A callback instance used when the component is touched after accessibility mode is enabled.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAccessibilityHover(callback: AccessibilityCallback | undefined): this;

    /**
     * prompt for current component and descendants unable to handle accessibility hover event
     *
     * @param { AccessibilityTransparentCallback | undefined } callback - A callback instance used when current component and 
     * descendants not handled accessibility hover event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAccessibilityHoverTransparent(callback: AccessibilityTransparentCallback | undefined): this;
    /**
     * Set hover effect.
     *
     * @param { HoverEffect | undefined } value - Hover effect of the component in hover state.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default hoverEffect(value: HoverEffect | undefined): this;
    /**
     * Triggered when the component is clicked by a mouse button or the mouse pointer moves on the component.
     *
     * @param { ((event: MouseEvent) => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onMouse(event: ((event: MouseEvent) => void) | undefined): this;
    /**
     * Invoked when a touch event is triggered.
     *
     * @param { ((event: TouchEvent) => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onTouch(event: ((event: TouchEvent) => void) | undefined): this;
    /**
     * Keyboard input
     *
     * @param { Callback<KeyEvent, boolean> | undefined } event - Callback for handling the key event.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onKeyEvent(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * Digital crown input.
     *
     * @param { Callback<CrownEvent> | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDigitalCrown(handler: Callback<CrownEvent> | undefined): this;
    /**
     * Handle keyboard events before input method events.
     *
     * @param { Callback<KeyEvent, boolean> | undefined } event - Callback for handling the key event.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onKeyPreIme(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * Customize the handling and distribution of key events.
     *
     * @param { Callback<KeyEvent, boolean> | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onKeyEventDispatch(event: Callback<KeyEvent, boolean> | undefined): this;
    /**
     * Trigger a FocusAxisEvent.
     *
     * @param { Callback<FocusAxisEvent> | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onFocusAxisEvent(event: Callback<FocusAxisEvent> | undefined): this;
    /**
     * Handle axis events.
     *
     * @param { Callback<AxisEvent> | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAxisEvent(event: Callback<AxisEvent> | undefined): this;
    /**
     * Set focusable.
     * Components that have default interaction logic, such as Button and TextInput, are focusable by default. Other
     * components, such as Text and Image, are not focusable by default. Only focusable components can trigger a focus
     * event.
     *
     * @param { boolean | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default focusable(value: boolean | undefined): this;
    /**
     * Set nextFocus.
     *
     * @param { FocusMovement | undefined } nextStep
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default nextFocus(nextStep: FocusMovement | undefined): this;
    /**
     * Set TabStop on component focus
     *
     * @param { boolean | undefined } isTabStop
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default tabStop(isTabStop: boolean | undefined): this;
    /**
     * Trigger a event when got focus.
     *
     * @param { (() => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onFocus(event: (() => void) | undefined): this;
    /**
     * Triggered when the current component loses focus.
     *
     * @param { (() => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onBlur(event: (() => void) | undefined): this;
    /**
     * Set focus index by key tab.
     * The tabIndex and focusScopeId cannot be used together.
     * @param { int | undefined } index
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default tabIndex(index: int | undefined): this;
    /**
     * Set default focused component when a page create.
     *
     * @param { boolean | undefined } value - True means to set the component as the default focus,
     *     and the value false has no effect.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default defaultFocus(value: boolean | undefined): this;
    /**
     * Set default focused component when focus on a focus group.
     *
     * @param { boolean | undefined } value - True means the component is the default focus of the parent container, and
     *     false means the component is not the default focus of the parent container.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default groupDefaultFocus(value: boolean | undefined): this;
    /**
     * Set a component focused when the component be touched.
     *
     * @param { boolean | undefined } value - True means the component is focusable on touch, false means
     *     the component is not focusable on touch.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default focusOnTouch(value: boolean | undefined): this;
    /**
     * Set the component's focusBox style.
     *
     * @param { FocusBoxStyle | undefined } style - Component's focusBox style.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default focusBox(style: FocusBoxStyle | undefined): this;
    /**
    * Set container as a focus group with a specific identifier.
    *
    * @param { string | undefined } id - focus scope identifier.
    * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false.
    * @param { boolean } [arrowStepOut] - whether the arrow keys can move focus from inside the focus group to outside,
    * only effective when isGroup is true, the default value is true.
    * @returns { this }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default focusScopeId(id: string | undefined, isGroup?: boolean, arrowStepOut?: boolean): this;
    /**
    * Set the focus priority of component in a specific focus scope.
    *
    * @param { string | undefined } scopeId
    * @param { FocusPriority } [priority] - the default value is AUTO
    * @returns { this }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default focusScopePriority(scopeId: string | undefined, priority?: FocusPriority): this;
    /**
     * animation
     *
     * @param { AnimateParam | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default animation(value: AnimateParam | undefined): this;
    /**
     * 设置组件插入时显示和删除时隐藏的过渡效果。
     *
     * @param { TransitionEffect | undefined } value - 设置组件插入时显示和删除时隐藏的过渡效果。<br/>**说明：** <br/>详细描述
     *     [TransitionEffect]{@link TransitionEffect}对象说明。<br/>当value的值为undefined时，无过渡效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default transition(value: TransitionEffect | undefined): this;
    /**
     * 设置组件插入时显示和删除时隐藏的过渡效果。
     *
     * @param { TransitionEffect | undefined } effect - 设置组件插入时显示和删除时隐藏的过渡效果。<br/>**说明：** <br/>详细描述
     *     [TransitionEffect]{@link TransitionEffect}对象说明。<br/>当value的值为undefined时，无过渡效果。
     * @param { TransitionFinishCallback | undefined } onFinish - 转场动画结束回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default transition(effect: TransitionEffect | undefined, onFinish: TransitionFinishCallback | undefined): this;
    /**
     * Bind gesture recognition.
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } [mask]
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default gesture(gesture: GestureType, mask?: GestureMask): this;
    /**
     * Binding Preferential Recognition Gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } [mask]
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default priorityGesture(gesture: GestureType, mask?: GestureMask): this;
    /**
     * Binding gestures that can be triggered simultaneously with internal component gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } [mask]
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default parallelGesture(gesture: GestureType, mask?: GestureMask): this;
    /**
     * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
     * The larger the blurring radius, the more blurring the content.
     * If the value is 0, the content blurring effect is not blurring.
     *
     * @param { double | undefined } blurRadius - value indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates blur options.
     * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default blur(blurRadius: double | undefined, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): this;
    /**
     * Applies a linear gradient foreground blur effect to the component.
     *
     * @param { double | undefined } value - the blurring radius. The larger the blurring radius, the more
     *     blurring the content, and if the value is 0, the content blurring effect is not blurring.
     * @param { LinearGradientBlurOptions | undefined } options - the linear gradient blur options.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default linearGradientBlur(value: double | undefined, options: LinearGradientBlurOptions | undefined): this;
    /**
     * Apply a motion blur effect to the component being scaled or moved.
     * 1.Do not use this API in intra-component transitions, shared element transitions,
     * implicit element transitions, or particle animations. Doing so may cause unexpected results.
     * 2.The **radius** parameter of **motionBlur** must be set to **0** for the initial state.
     * Otherwise, there may be unexpected results during a cold start.
     * 3.This API must be used together with the **onFinish** parameter of **AnimateParam**.
     * Its **radius** parameter must be set to **0** when the animation ends; otherwise, there may be unexpected results.
     * 4.When using this API, do not frequently change the blur radius of the same component;
     * otherwise, there may be unexpected results.
     * For example, if you frequently click the image in the example, the blur effect may not work sometimes.
     * 5.To avoid unexpected results, make sure the coordinates of
     * the motion blur anchor point are the same as those of the animation scaling anchor point.
     * 6.To avoid unexpected results, set the blur radius to a value less than 1.
     *
     * @param { MotionBlurOptions | undefined } value - Motion blur options.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default motionBlur(value: MotionBlurOptions | undefined): this;
    /**
     * Applies a brightness effect to the component.
     *
     * @param { double | undefined } value - Brightness of the component. The value **1** indicates no effects.
     *     The value **0** indicates the complete darkness. If the value is less than **1**, the brightness
     *     decreases. If the value is greater than **1**, the brightness increases. A larger value indicates
     *     a higher brightness. A brightness of 2 turns the component completely white.
     *     <br>Default value: **1.0**<br>Recommended value range: [0, 2].
     *     <br>**NOTE**
     *     <br>A value less than 0 evaluates to the value **0**.
     *     <br>**Widget capability**: This API can be used in ArkTS widgets since API version 9.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default brightness(value: double | undefined): this;
    /**
     * Applies a contrast effect to the component.
     *
     * @param { double | undefined } value - Contrast of the component. The input parameter is a
     *     contrast value. If the value is **1**, the source image is displayed. If the
     *     value is greater than 1, a larger value indicates a higher contrast and a clearer
     *     image. If the value is less than 1, a smaller value indicates a lower contrast is.
     *     If the value is **0**, the image becomes all gray. The unit is percentage.
     *     <br>Default value: **1.0**.
     *     <br>Recommended value range: [0, 10).
     *     <br>**NOTE**
     *     <br>A value less than 0 evaluates to the value **0**.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contrast(value: double | undefined): this;
    /**
     * Applies a grayscale effect to the component.
     *
     * @param { double | undefined } value - Grayscale conversion ratio of the component.
     *     <br>If the value is **1.0**, the component is completely converted to grayscale.
     *     <br>If the value is **0.0**, the component remains unchanged. Between **0** and **1**,
     *     <br>the value applies a linear multiplier on the grayscale effect. The unit is percentage.
     *     <br>Default value: **0.0**.
     *     <br>Value range: [0.0, 1.0].
     *     <p>**NOTE**:
     *     <br>A value less than **0.0** evaluates to the value **0.0**.
     *     <br>A value greater than **1.0** evaluates to the value **1.0**.
     *     </p>
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default grayscale(value: double | undefined): this;
    /**
     * Applies a color blend effect to the component.
     *
     * @param { Color | string | Resource | undefined } value - Color to blend with the component.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default colorBlend(value: Color | string | Resource | undefined): this;
    /**
     * Applies a saturation effect to the component.
     *
     * @param { double | undefined } value - Saturation of the component. The saturation is the ratio of the
     *     chromatic component to the achromatic component (gray) in a color. If the value is **1**,
     *     the original image is displayed. If the value is greater than **1**, a higher percentage of
     *     the chromatic component indicates a higher saturation. If the value is less than **1**, a higher
     *     percentage of the achromatic component indicates a lower saturation. The unit is percentage.
     *     <br>Default value: **1.0**.
     *     <br>Recommended value range: [0, 50).
     *     <br>**NOTE**
     *     <br>A value less than 0 evaluates to the value **0**.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default saturate(value: double | undefined): this;
    /**
     * Sepia conversion ratio of the component.
     *
     * @param { double | undefined } value - Sepia conversion ratio of the component. If the value is **1**, the image
     *     is completely sepia. If the value is **0**, the component remains unchanged. The unit is percentage.
     *     <br> Value range: [0, +∞).
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default sepia(value: double | undefined): this;
    /**
     * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
     * A value of 0% does not change the image. (Percentage)
     *
     * @param { double | InvertOptions | undefined } value - value indicates the scale of the conversion or the options of invert.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default invert(value: double | InvertOptions | undefined): this;
    /**
     * Applies a system bar effect to the component, which means to invert colors based on the background and add a blur.
     *
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default systemBarEffect(): this;
    /**
     * Rotates the hue of the component.
     *
     * @param { double | string | undefined } value - Hue rotation angle of the component.
     *     <br>A rotation of 360 degrees leaves the color unchanged.
     *     <br>A rotation of 180 degrees and then -180 degrees also leaves the color unchanged.
     *     <br>When the data type is number, the value **90** is equivalent to **'90deg'**.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default hueRotate(value: double | string | undefined): this;
    /**
     * Sets whether to draw shadows of child nodes in the component at the same layer,
     * so that the shadows of elements at the same layer overlap.
     *
     * @param { boolean | undefined } value - Whether to draw shadows of child nodes in the component
     *     at the same layer, so that the shadows of elements at the same layer overlap.
     *     <br>Default value: **false**.
     *     <br>**NOTE**
     *     <br>1. When this feature is disabled (default), if the shadow radius of a child node
     *     is large, the shadows of the child nodes may overlap. This overlap issue does not occur
     *     when the feature is enabled.
     *     <br>2. Avoid nesting **useShadowBatching**. When used in nested mode, **useShadowBatching**
     *     takes effect for the current child node only and cannot be recursively used.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default useShadowBatching(value: boolean | undefined): this;
    /**
    * Specifies whether to apply the effect defined by <!--Del-->the parent
    * [EffectComponent](ts-container-effectcomponent-sys.md) or <!--DelEnd-->the window.
    *
    * @param { boolean | undefined } useEffect - Whether to apply the effect defined by <!--Del-->the parent
    *     **EffectComponent** or <!--DelEnd-->the window.
    *     <br>The value **true** means to apply the effect defined by <!--Del-->the parent **EffectComponent**
    *     or <!--DelEnd-->the window.
    *     <br>Default value: **false**.
    * @param { EffectType | undefined } effectType - Type of effect to apply to the component, which is defined by
    *     <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.
    *     <br>Default value: **EffectType.DEFAULT**.
    * @returns { this } return the component attribute.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default useEffect(useEffect: boolean | undefined, effectType: EffectType | undefined): this;
    /**
     * Specifies whether to combine the drawing of special effects, such as background blur.
     *
     * @param { boolean | undefined } value - Whether the component inherits the special effect settings of the
     *     **EffectComponent** component.<br>The value **true** means that the component inherits the
     *     special effect settings of the **EffectComponent** component, and **false** means the opposite.
     *     <br>Default value: **false**.
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default useEffect(value: boolean | undefined): this;
    /**
     * Specify whether the current component participates in the fusion effect of the ancestor component
     * UnionEffectContainer
     *
     * @param { boolean | undefined } value - Whether the component participates in the fusion effect of
     *     the ancestor component **UnionEffectContainer**.<br>The value **true** means that the component participates
     *     in the fusion effect of the ancestor component **UnionEffectContainer**, and **false** means the opposite.
     *     <br>Default value: **false**. Undefined means to default value.
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default useUnionEffect(value: boolean | undefined): this;
    /**
     * Specify whether the current component participates in the fusion effect of the ancestor component UnionEffectContainer
     *
     * @param { boolean | undefined } value - Whether the component participates in the fusion effect of
     *     the ancestor component **UnionEffectContainer**.<br>The value **true** means that the component participates
     *     in the fusion effect of the ancestor component **UnionEffectContainer**, and **false** means the opposite.
     *     <br>Default value: **false**. Undefined means to default value.
     * @param { GravityCenterOptions } [options] - Gravitational center parameter.
     *     This parameter must be used together with UnionMode.GRAVITY_UNION.
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default useUnionEffect(value: boolean | undefined, options?: GravityCenterOptions): this;
    /**
     * 为组件添加背景模糊效果，支持自定义设置模糊半径和灰阶参数。
     *
     * @param { double | undefined } radius - 为当前组件添加背景模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。<br/>当radius的值为undefined时，恢复为默认无模糊的
     *     背景。
     * @param { BlurOptions } [options] - 灰阶模糊参数。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。<br/>默认值：grayscale: [0,0]
     * @param { SystemAdaptiveOptions } [sysOptions] - 系统自适应调节参数。<br/>默认值：{ disableSystemAdaptation: false }
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backdropBlur(radius: double | undefined, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): this;
    /**
     * Sets whether the component and its child components are rendered off
     * the screen as a whole before being blended with its parent.
     *
     * @param { boolean | undefined } value - Whether the component and its child components are rendered
     *     off the screen as a whole before being blended with its parent. If the opacity of the
     *     component is not 1, the drawing effect may vary depending on the value.
     *     <br>Default value: **false**.
     *     <br> The value **true** means the component and its child components are rendered off
     *     the screen as a whole, and **false** means the opposite.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default renderGroup(value: boolean | undefined): this;
    /**
     * Set the component and its child components not to render off the screen following the parent component.
     * Must be used in conjunction with renderGroup.
     *
     * @param { boolean | undefined } exclude - Whether the component and its child components are not
     *     rendered off the screen following the parent component.
     *     True means to not follow the parent component.
     *     Default value: false.
     *     Undefined means to default value.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    default excludeFromRenderGroup(exclude: boolean | undefined): this;
    /**
     * Sets whether to freeze the component. When frozen, the component and its children are cached for
     * repeated drawing after offscreen rendering, without updating internal attributes.
     *
     * @param { boolean | undefined } value - Whether to freeze the component. When frozen, the component and its children
     *     are cached for repeated drawing after offscreen rendering, without updating internal attributes. If the
     *     opacity of the component is not 1, the drawing effect may vary depending on the value.
     *     <br>Default value: **false**.
     *     <br> **true**: Freeze the component.
     *     <br>**false**: Do not freeze the component.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default freeze(value: boolean | undefined): this;
    /**
     * 设置组件平移。
     *
     * @param { TranslateOptions | undefined } value - 可使组件在以组件左上角为坐标原点的坐标系中进行移动。其中，x，y，z的值分别表示在对应轴移动的距离，值为正时表示向对应轴的正向移
     *     动，值为负时表示向对应轴的反向移动。<br/>默认值：{<br/>x: 0,<br/>y: 0,<br/>z: 0<br/>}<br/>当value的值为undefined时，恢复为无平移效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default translate(value: TranslateOptions | undefined): this;
    /**
     * 设置组件缩放。
     *
     * @param { ScaleOptions | undefined } value - 可以分别设置X轴、Y轴、Z轴的缩放比例，默认值为1，同时可以通过centerX和centerY设置缩放的中心点。<br/>默认值：{<br
     *     />x: 1,<br/>y: 1,<br/>z: 1,<br/>centerX:'50%',<br/>centerY:'50%'<br/>}<br/>当value的值为undefined时，恢复为无缩放效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default scale(value: ScaleOptions | undefined): this;
    /**
     * 设置组件旋转。
     *
     * @param { RotateOptions | RotateAngleOptions | undefined } value - 可使组件在以组件左上角为坐标原点的坐标系中进行旋转。其中，(x, y, z）指定一个矢量，作为
     *     旋转轴；或使用(angleX, angleY, angleZ）指定三个轴方向上的旋转角。<br/>默认值：{<br/>centerX: '50%',<br/>centerY: '50%',<br/>centerZ: 0
     *     ,<br/>perspective: 0<br/>}<br/>当value的值为undefined时，恢复为无旋转效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default rotate(value: RotateOptions | RotateAngleOptions | undefined): this;
    /**
     * 可用于显示二维变换时的矩阵变换。包含三维变换时应使用[transform3D]{@link CommonMethod.transform3D}接口。
     *
     * @param { Matrix4Transit | undefined } value - 设置当前组件的变换矩阵。<br/>当value的值为undefined时，恢复为单位矩阵的效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default transform(value: Matrix4Transit | undefined): this;
    /**
     * 设置组件的三维变换矩阵。当涉及包含透视效果的三维变换时，transform接口显示效果可能有误，推荐使用transform3D接口。
     *
     * @param { Matrix4Transit | undefined } transform - 三维变换矩阵。<br/>当transform的值为undefined时，恢复为单位矩阵的效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default transform3D(transform: Matrix4Transit | undefined): this;
    /**
     * This callback is triggered when a component mounts a display.
     *
     * @param { (() => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAppear(event: (() => void) | undefined): this;
    /**
     * This callback is triggered when component uninstallation disappears.
     *
     * @param { (() => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDisAppear(event: (() => void) | undefined): this;
    /**
     * This callback is triggered when a component mounts to view tree.
     *
     * @param { VoidCallback | undefined } callback
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAttach(callback: VoidCallback | undefined): this;
    /**
     * This callback is triggered when a component is detached from view tree.
     *
     * @param { VoidCallback | undefined } callback
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDetach(callback: VoidCallback | undefined): this;
    /**
     * This callback is triggered when the size or position of this component change finished.
     *
     * @param { ((oldValue: Area, newValue: Area) => void) | undefined } event - event callback.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAreaChange(event: ((oldValue: Area, newValue: Area) => void) | undefined): this;
    /**
     * This callback is triggered when the size or position of this component has finished changing.
     * The interval between two area change callbacks will not be less than the expected update interval.
     *
     * @param { AreaChangeCallback } event - Callback invoked when the area of the component changes.
     * @param { AreaChangeOptions } [options] - The options for the area change event.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onAreaChange (event: AreaChangeCallback, options?: AreaChangeOptions): this;
    /**
     * Controls the display or hide of the current component.
     *
     * @param { Visibility | undefined } value - Whether the component is visible.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default visibility(value: Visibility | undefined): this;
    /**
     * Sets the percentage of the parent container's remaining space that is allocated to the component.
     * Default value: **0**.
     *
     * @param { double | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default flexGrow(value: double | undefined): this;
    /**
     * Sets the percentage of the parent container's shrink size that is allocated to the component.
     * Default value: 0 when the parent container is Column or Row, 1 when the parent container is Flex..
     *
     * @param { double | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default flexShrink(value: double | undefined): this;
    /**
     * Sets the base size of the component in the main axis of the parent container.
     * Default value: **'auto'**.
     *
     * @param { double | string | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default flexBasis(value: double | string | undefined): this;
    /**
     * Sets the alignment mode of the child components along the cross axis of the parent container.
     * Default value: **ItemAlign.Auto**.
     *
     * @param { ItemAlign | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default alignSelf(value: ItemAlign | undefined): this;
    /**
     * Defines the align rules of child component in Stack container.
     *
     * @param { LocalizedAlignment | undefined } alignment
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default layoutGravity(alignment: LocalizedAlignment | undefined): this;
    /**
     * Sets the display priority for the component in the layout container.
     * <br>This parameter is only effective in Row, Column, and Flex (single-line) container components.
     *
     * @param { double | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default displayPriority(value: double | undefined): this;
    /**
     * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
     *
     * @param { int | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default zIndex(value: int | undefined): this;
    /**
     * 设置共享元素转场动效。
     *
     * @param { string | undefined } id - 两个页面中id值相同且不为空字符串的组件即为共享元素，在页面转场时可显示共享元素转场动效。当id的值为undefined时，共享元素转场不生效。
     * @param { sharedTransitionOptions } [options] - 共享元素转场动画参数。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default sharedTransition(id: string | undefined, options?: sharedTransitionOptions): this;
    /**
     * Sets how elements are laid out along the main axis of the container.
     * Default value: **Direction.Auto**.
     *
     * @param { Direction | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default direction(value: Direction | undefined): this;
    /**
     * Sets the alignment mode of the component content in the drawing area.
     * Default value: **Alignment.Center**.
     *
     * @param { Alignment | LocalizedAlignment | undefined } alignment
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default align(alignment: Alignment | LocalizedAlignment | undefined): this;
    /**
     * Sets the absolute position of the component relative to the position of the parent component.
     * <br>The attribute is not available for a layout container whose width and height are zero.
     *
     * @param { Position | Edges | LocalizedEdges | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default position(value: Position | Edges | LocalizedEdges | undefined): this;
    /**
     * Sets the anchor for locating the component, which is used to move the component
     * further away from the position specified by position or offset.
     *
     * @param { Position | LocalizedPosition | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default markAnchor(value: Position | LocalizedPosition | undefined): this;
    /**
     * Sets the offset of the component relative to its original position.
     * <br>The offset attribute does not affect the layout of the parent container.
     * It adjusts the component position only during drawing.
     *
     * @param { Position | Edges | LocalizedEdges | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default offset(value: Position | Edges | LocalizedEdges | undefined): this;
    /**
     * If the value is true, the component is available and can respond to operations such as clicking.
     * If it is set to false, click operations are not responded.
     *
     * @param { boolean | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enabled(value: boolean | undefined): this;
    /**
     * Sets the alignment rules in the relative container.
     * <br>This API is valid only when the container is RelativeContainer.
     * <br>LocalizedAlignRuleOptions takes the right-to-left scripts into account, using start and end instead of
     *     left and right for alignment in the horizontal direction. Prioritize this API in aligning
     *     child components in the relative container.
     *
     * @param { AlignRuleOption | LocalizedAlignRuleOptions | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default alignRules(value: AlignRuleOption | LocalizedAlignRuleOptions | undefined): this;
    /**
     * Sets the parameters of the chain in which the component is the head.
     * <br>This parameter has effect only when the parent container is RelativeContainer.
     * <br>The chain head is the first component in the chain that satisfies the chain formation rules.
     * In a horizontal layout, it starts from the left (or from the right in a mirrored language
     * layout). In a vertical layout, it starts from the top.
     *
     * @param { Axis | undefined } direction - indicates direction of the chain
     * @param { ChainStyle | undefined } style - indicates style of the chain
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default chainMode(direction: Axis | undefined, style: ChainStyle | undefined): this;
    /**
     * Sets the aspect ratio of the component, which can be obtained using the following formula: width/height.
     * <br>If only width and aspectRatio are set, the height is calculated using the following formula: width/aspectRatio.
     * <br>If only height and aspectRatio are set, the width is calculated using the following formula: height x aspectRatio.
     * <br>If width, height, and aspectRatio are all set, the explicitly set height is ignored, and the effective height is
     * calculated using the following formula: width/aspectRatio.
     * <br>This parameter takes effect only when a valid value greater than 0 is specified.
     *
     * @param { double | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default aspectRatio(value: double | undefined): this;
    /**
     * 设置当前组件的点击回弹效果。
     *
     * @param { ClickEffect | null | undefined } value - 设置当前组件点击回弹效果。<br/>**说明：**<br/>可通过undefined或者null取消点击回弹效果。<br/>不
     *     建议在组件大小动态变化的场景中使用该功能。<br/>当组件无法触发通用事件时，不支持该属性。<br/>回弹触发缩放后可能造成触摸点不在控件上，控件上无法响应手势事件。
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default clickEffect(value: ClickEffect | null | undefined): this;
    /**
     * Set whether this component should have sound effects enabled for clicking.
     *
     * Sound effects playback is affected by the audio-related settings in the device system settings.
     * When the user sets the device to silent mode, sound effects cannot be played.
     *
     * @param { boolean | undefined } enabled - indicates whether this component should have sound effects
     *     enabled for clicking.
     *     <br>Pass in undefined to reset the default value, default value is true, but
     *     even it's true, the sound effect is only supported in some specific devices.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default enableClickSoundEffect(enabled: boolean | undefined): this
    /**
     * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
     * (To be triggered, press and hold for 170 milliseconds (ms))
     *
     * <strong>NOTE</strong>:<br>
     * The global builder is not supported.
     *
     * @param { ((event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDragStart(event: ((event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged to the range of the component.
     *
     * @param { ((event: DragEvent, extraParams?: string) => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDragEnter(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the drag moves within the range of a placeable component.
     *
     * @param { ((event: DragEvent, extraParams?: string) => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDragMove(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged out of the component range.
     *
     * @param { ((event: DragEvent, extraParams?: string) => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDragLeave(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { ((event: DragEvent, extraParams?: string) => void) | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDrop(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { OnDragEventCallback | undefined } eventCallback - event callback.
     * @param { DropOptions } dropOptions - the drop handling options.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDrop(eventCallback: OnDragEventCallback | undefined, dropOptions: DropOptions): this;
    /**
     * Enables the component as a drag-and-drop target with spring loading functionality.
     *
     * When a dragged object hovers over the target, it triggers a callback notification. Spring Loading is an enhanced
     * feature for drag-and-drop operations, allowing users to automatically trigger view transitions during dragging
     * by hovering (hover) without needing to use another hand.
     * This feature is primarily designed to enhance the smoothness and efficiency of drag-and-drop operations. Below are
     * some common scenarios suitable for supporting this feature:
     *  - In a file manager, when dragging a file and hovering over a folder, the folder is automatically opened.
     *  - On a desktop launcher, when dragging a file and hovering over an application icon, the application is
     *  automatically opened.
     *
     * @param { Callback<SpringLoadingContext> | null | undefined } callback Registers the callback for spring loading response, or
     *    sets it to null to disable the support for spring loading.
     * @param { DragSpringLoadingConfiguration } [configuration] The initialized spring loading configuration which is
     *    only used when the entire spring detecting.
     * @returns { this } - return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onDragSpringLoading(callback: Callback<SpringLoadingContext> | null | undefined, configuration?: DragSpringLoadingConfiguration): this;
    /**
     * This function is called when the drag event is end.
     *
     * @param { ((event: DragEvent, extraParams?: string) => void) | undefined } event - indicates the function to be called.
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDragEnd(event: ((event: DragEvent, extraParams?: string) => void) | undefined): this;
    /**
     * Allowed drop uniformData type for this node.
     *
     * @param { Array<UniformDataType> | null | Array<string> | undefined } value - the uniformData type for this node.
     * @returns { this } - return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default allowDrop(value: Array<UniformDataType> | null | Array<string> | undefined): this;
    /**
     * Enable the selectable area can be dragged.
     *
     * @param { boolean | undefined } value - true means the area can be dragged, false means the area can't be dragged.
     *     The default value is false.
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default draggable(value: boolean | undefined): this;
    /**
     * Set preview of the component for dragging process
     *
     * @param { CustomBuilder | DragItemInfo | string | undefined } preview - preview of the component for dragging process
     * @param { PreviewConfiguration } [config] - drag preview configuration.
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default dragPreview(preview: CustomBuilder | DragItemInfo | string | undefined, config?: PreviewConfiguration): this;
    /**
     * Set the selectable area drag preview options.
     *
     * @param { DragPreviewOptions | undefined } value - preview options value.
     * @param { DragInteractionOptions } [options] - drag interaction options value.
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default dragPreviewOptions(value: DragPreviewOptions | undefined, options?: DragInteractionOptions): this;
    /**
     * After binding, a callback is triggered when the preDrag status change finished.
     *
     * @param { Callback<PreDragStatus> | undefined } callback callback - The callback will be triggered when the preDrag status change.
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onPreDrag(callback: Callback<PreDragStatus> | undefined): this;
    /**
     * Add mask text to the current component. The layout is the same as that of the current component.
     *
     * @param { string | CustomBuilder | ComponentContent<T> | undefined } value
     * @param { OverlayOptions } [options]
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    /**
     * Add mask text to the current component. The layout is the same as that of the current component.
     *
     * @param { string | CustomBuilder | ComponentContent<Object> | undefined } value
     * @param { OverlayOptions } [options]
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default overlay(value: string | CustomBuilder | ComponentContent<Object> | undefined, options?: OverlayOptions): this;
    /**
     * Config toolbar for current component.
     *
     * @param { CustomBuilder | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default toolbar(value: CustomBuilder | undefined): this;
    /**
     * Linear Gradient
     * angle: Angle of Linear Gradient. The default value is 180;
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     * colors: Color description for gradients.
     * repeating: repeating. The default value is false
     *
     * @param { LinearGradientOptions | undefined } value - Linear gradient.
     *     <br>If **options** is **undefined**, the linear gradient is disabled.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default linearGradient(value: LinearGradientOptions | undefined): this;
    /**
     * Creates a sweep gradient.
     *
     * @param { SweepGradientOptions | undefined } value - Sweep gradient, which can sweep around the specified
     *     center point in the 0–360 degree range. If the rotation angle exceeds the range, a monochrome
     *     color instead of a gradient will be drawn.<br>- **center**: center of the sweep gradient, that
     *     is, the coordinates relative to the upper left corner of the current component.
     *     <br>- **start**: start angle of the sweep gradient.
     *     <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     *     and turn types are supported.<br>- **end**: end angle of the sweep gradient.
     *     <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     *     and turn types are supported.<br>- **rotation**: rotation angle of the sweep gradient.
     *     <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     *     and turn types are supported.<br>- colors: array of color stops,
     *     each of which consists of a color and its stop position. Invalid colors are automatically skipped.
     *     <br>- **repeating**: whether the colors are repeated.
     *     <br>  Default value: **false**.
     *     <br>**NOTE**
     *     <br>A value less than 0 is treated as **0**. A value greater than 360 is treated as **360**.
     *     <br>When **start**, **end**, or **rotation** is specified with a string, the string must be a number
     *     or a number followed by one of the following units: deg, rad, grad, and turn. Valid value examples
     *     are "90", "90deg", and "1.57rad".
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default sweepGradient(value: SweepGradientOptions | undefined): this;
    /**
     * Creates a radial gradient.
     *
     * Anonymous Object Rectification.
     * @param { RadialGradientOptions | undefined } value - Radial gradient.
     *     <br>- **center**: center of the radial gradient, that is, the coordinates relative
     *     to the upper left corner of the current component.
     *     <br>- **radius**: radius of the radial gradient.
     *     <br> Value range: [0, +∞).
     *     <br>**NOTE**
     *     <br>A value less than 0 is treated as **0**.
     *     <br>- colors: array of color stops, each of which consists
     *     of a color and its stop position. Invalid colors are automatically skipped.
     *     <br>- **repeating**: whether the colors are repeated.
     *     <br>  Default value: **false**.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default radialGradient(value: RadialGradientOptions | undefined): this;
    /**
     * 设置组件的路径动画。
     *
     * @param { MotionPathOptions | undefined } value - 设置组件的运动路径。<br/>当value的值为undefined时，使用默认值{ MotionPathOptions: {
     *     path: " ", from: 0, to: 1, rotatable: false } }。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default motionPath(value: MotionPathOptions | undefined): this;
    /**
     * Applies a shadow effect to the component.
     *
     * @param { ShadowOptions | ShadowStyle | undefined } value - Shadow of the component.
     *     <br>When the value type is **ShadowOptions**, the blur radius, shadow color,
     *     and offset along the x-axis and y-axis can be specified.
     *     <br>When the value type is **ShadowStyle**, the shadow style can be specified.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default shadow(value: ShadowOptions | ShadowStyle | undefined): this;
    /**
     * Sets the edge light effect for the component.
     *
     * <p><strong>NOTE</strong>:
     * <br>The edge light effect creates a glowing light effect along the component's edges,
     * starting from the specified position and extending along the edge.
     * <br>This effect can enhance the visual appeal and highlight important components.
     * </p>
     *
     * @param { EdgeLightParams | undefined } params - Edge light effect parameters.
     *     Defines the position, length, intensity, color, and thickness of the light effect.
     *     If params is undefined, the edge light effect is removed.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default edgeLight(params: EdgeLightParams | undefined): this;
    /**
     * Defines how the component's content (including the content of it child components)
     * is blended with the existing content on the canvas (possibly offscreen canvas) below.
     *
     * @param { BlendMode | undefined } value - Blend mode.
     *     <br>Default value: **BlendMode.NONE**.
     *     <br>**NOTE**
     *     <br>When **BlendMode.NONE** is used, the blend effect is **BlendMode.SRC_OVER**
     *     by default, and **BlendApplyType** does not take effect.
     * @param { BlendApplyType } [type] - Whether the blend mode is implemented offscreen.
     *     <br>Default value: **BlendApplyType.FAST**.
     *     <br>**NOTE**
     *     <br>1. **BlendApplyType.FAST**: The blend mode is not implemented offscreen.
     *     <br>2. **BlendApplyType.OFFSCREEN**: An offscreen canvas of the size of the current component
     *     is created. The content of the current component (including child components) is then drawn
     *     onto the offscreen canvas, and blended with the existing content on the canvas below using
     *     the specified blend mode. This approach may cause issues with screen capture for APIs such
     *     as linearGradientBlur<sup>12+</sup>, backgroundEffect, and brightness.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default blendMode(value: BlendMode | undefined, type?: BlendApplyType): this;


    /**
     * Add a blendMode effect to the current component.Cannot be used together with the blendMode interface.
     *
     * @param { BlendMode | Blender | undefined } effect - When the effect type is BlendMode type, define Different hybrid modes.
     * @param { BlendApplyType } [type] - Different blend apply type
     *     Default value: BlendApplyType.FAST.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default advancedBlendMode(effect: BlendMode | Blender | undefined, type?: BlendApplyType): this;
    /**
     * 是否对子组件超出当前组件范围外的区域进行裁剪。
     *
     * @param { boolean | undefined } value - 参数为boolean类型，设置是否按照父容器边缘轮廓进行裁剪。<br/>默认值：false <br/>true表示按照父容器边缘轮廓进行裁剪，
     *     false表示不对子组件进行裁剪。 <br/>**说明：** 设置为true后，子组件超出当前组件范围外的区域将不响应绑定的手势事件。<br/>当value的值为undefined时，恢复为不对子组件超出当前组件范围外
     *     的区域进行裁剪。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default clip(value: boolean | undefined): this;
    /**
     * 按指定的形状（形状中可包含位置信息）对当前组件进行裁剪。
     * 
     * > **说明：**  
     * >
     * > 不同的形状支持的属性范围不同，路径是一种形状，除此之外还有椭圆、矩形等形状。
     * >
     * > 路径的形状不支持设置宽度和高度。具体形状支持的属性参考具体形状的文档。
     * >
     * > 形状中的[fill]{@link @ohos.arkui.shape:CommonShapeMethod#fill}属性对clipShape接口不生效。
     *
     * @param { CircleShape | EllipseShape | PathShape | RectShape | undefined } value - 参数为相应类型的组件，按指定的形状（形状中可包含位置信息）对当
     *     前组件进行裁剪。<br/>**说明：** 裁剪不会导致被裁剪区域无法响应绑定的手势事件。<br/>当value的值为undefined时，会重置为当前值。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default clipShape(value: CircleShape | EllipseShape | PathShape | RectShape | undefined): this;
    /**
     * 为组件上添加可调节进度的遮罩。
     *
     * @param { ProgressMask | undefined } value - 在当前组件上加上可动态设置进度、最大值和颜色的遮罩。<br/>当value的值为undefined时，恢复为无进度遮罩效果。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default mask(value: ProgressMask | undefined): this;
    /**
     * 为组件上添加指定形状的遮罩。
     *
     * @param { CircleShape | EllipseShape | PathShape | RectShape | undefined } value - 在当前组件上加上指定形状的遮罩。<br/>当value的值为
     *     undefined时，会重置为当前值。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default maskShape(value: CircleShape | EllipseShape | PathShape | RectShape | undefined): this;
    /**
     * Key. User can set an key to the component to identify it.
     *
     * @param { string | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     * @test
     */
    default key(value: string | undefined): this;
    /**
     * Id. User can set an id to the component to identify it.
     *
     * @param { string | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default id(value: string | undefined): this;
    /**
     * 组件内隐式共享元素转场。
     *
     * @param { string | undefined } id - geometry transition id
     * @param { GeometryTransitionOptions } [options] - 组件内共享元素转场动画参数。<br>默认值为 { follow: false }。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default geometryTransition(id: string | undefined, options?: GeometryTransitionOptions): this;
    /**
    * Tips control
    *
    * @param { TipsMessageType | undefined } message
    * @param { TipsOptions } [options]
    * @returns { this }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default bindTips(message: TipsMessageType | undefined, options?: TipsOptions): this;
    /**
     * Popup control
     * <p><strong>NOTE</strong>:
     * <br>The popup can be displayed only after the entire page is fully constructed. Therefore, to avoid incorrect
     * display positions and shapes, do not set this parameter to true while the page is still being constructed.
     * </p>
     *
     * @param { boolean | undefined } show - Whether to show the popup, default is false.
     * @param { PopupOptions | CustomPopupOptions | undefined } popup
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindPopup(show: boolean | undefined, popup: PopupOptions | CustomPopupOptions | undefined): this;
    /**
     * Menu control
     *
     * @param { Array<MenuElement> | CustomBuilder | undefined } content - Indicates the content of menu.
     * @param { MenuOptions } [options] - Indicates the options of menu.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindMenu(content: Array<MenuElement> | CustomBuilder | undefined, options?: MenuOptions): this;
    /**
     * Menu control
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - Menu display switch,
     *     supports incoming two-way binding parameters.
     *     true means display menu, false means hide menu, default is false.
     * @param { Array<MenuElement> | CustomBuilder | undefined } content - Indicates the content of menu.
     * @param { MenuOptions } [options] - Indicates the options of menu.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindMenu(isShow: boolean | Bindable<boolean> | undefined, content: Array<MenuElement> | CustomBuilder | undefined, options?: MenuOptions): this;
    /**
     * Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the
     * component. Only custom menu items are supported.
     *
     * @param { CustomBuilder | undefined } content - Indicates the content of context menu.
     * @param { ResponseType | undefined } responseType - Indicates response type of context menu, Long
     *     pressing with a mouse device is not supported.
     * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContextMenu(content: CustomBuilder | undefined, responseType: ResponseType | undefined, options?: ContextMenuOptions): this;
    /**
     * Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the
     * component. Only custom menu items are supported.
     *
     * @param { CustomBuilder | Array<MenuElement> | undefined } content - Indicates the content of context menu.
     * @param { ResponseType | undefined } responseType - Indicates response type of context menu. Long pressing with
     *     a mouse device is not supported.
     * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default bindContextMenuByResponseType(content: CustomBuilder | Array<MenuElement> | undefined,
        responseType: ResponseType | undefined, options?: ContextMenuOptions): this;
    /**
     * Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the
     * component. Only custom menu items are supported. Long pressing with a mouse device is not supported.
     *
     * @param { CustomBuilderT<ResponseType> | undefined } content - Indicates the content of context menu. Undefined
     *     means unbinding.
     * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions): this;
    /**
     * Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the
     * component. Only custom menu items are supported. Long pressing with a mouse device is not supported.
     *
     * @param { CustomBuilderT<ResponseType> | Array<MenuElement> | undefined } content - Indicates the content of
     *     context menu. Undefined means unbinding.
     * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | Array<MenuElement> | undefined,
        options?: ContextMenuOptions): this;
    /**
     * Binds a context menu to the component, whose visibility is subject to the isShow settings.
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - Menu display switch,
     *     supports incoming twoway binding parameters.
     *     true means display content, false means hide content, default is false.
     *     <p><strong>NOTE</strong>:
     *     <br>The menu can be displayed properly only when the related page has been constructed. If this parameter is set
     *     to true before the construction is complete, display issues, such as misplacement, distortion, or failure to pop
     *     up, may occur. To trigger dragging by long presses is not supported.
     *     </p>
     * @param { CustomBuilder | undefined } content - Indicates the content of context menu.
     * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContextMenu(isShow: boolean | Bindable<boolean> | undefined, content: CustomBuilder | undefined, options?: ContextMenuOptions): this;
    /**
     * Binds a context menu to the component, whose visibility is subject to the isShow settings.
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - Menu display switch,
     *     supports incoming two-way binding parameters.
     *     true means display content, false means hide content, default is false.
     *     <p><strong>NOTE</strong>:
     *     <br>The menu can be displayed properly only when the related page has been constructed. If this parameter is set
     *     to true before the construction is complete, display issues, such as misplacement, distortion, or failure to pop
     *     up, may occur. Dragging via long press is not supported.
     *     </p>
     * @param { CustomBuilder | Array<MenuElement> | undefined } content - Indicates the content of context menu.
     * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default bindContextMenuByIsShow(isShow: boolean | Bindable<boolean> | undefined,
        content: CustomBuilder | Array<MenuElement> | undefined, options?: ContextMenuOptions): this;
    /**
     * 给组件绑定全屏模态页面，点击后显示模态页面。模态页面内容自定义，显示方式可设置无动画过渡，上下切换过渡以及透明渐变过渡。
     * 
     * > **说明：**
     * >
     * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - 是否显示全屏模态页面。<br/>-true：显示全屏模态页面。<br/>-false：隐藏全屏模态页面。
     * @param { CustomBuilder | undefined } builder - 配置全屏模态页面内容。
     * @param { ModalTransition } [type] - 全屏模态页面的系统转场方式。<br/> 默认值：ModalTransition.DEFAULT。<br/>**说明：**<br /> 同
     *     transition同时设置时，此属性不生效。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContentCover(isShow: boolean | Bindable<boolean> | undefined, builder: CustomBuilder | undefined, type?: ModalTransition): this;
    /**
     * 给组件绑定全屏模态页面，点击后显示模态页面。模态页面内容自定义，可自定义设置转场方式。
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - 是否显示全屏模态页面。<br/>-true：显示全屏模态页面。<br/>-false：隐藏全屏模态页面。
     * @param { CustomBuilder | undefined } builder - 配置全屏模态页面内容。
     * @param { ContentCoverOptions } [options] - 配置全屏模态页面的可选属性。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContentCover(isShow: boolean | Bindable<boolean> | undefined, builder: CustomBuilder | undefined, options?: ContentCoverOptions): this;
    /**
     * 给组件绑定半模态页面，点击后显示模态页面。
     * 
     * > **说明：**
     * >
     * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - 是否显示半模态页面。<br/>true：显示半模态页面。<br/>false：隐藏半模态页面。
     * @param { CustomBuilder | undefined } builder - 配置半模态页面内容。
     * @param { SheetOptions } [options] - 配置半模态页面的可选属性。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindSheet(isShow: boolean | Bindable<boolean> | undefined, builder: CustomBuilder | undefined, options?: SheetOptions): this;
    /**
     * Sets styles for component state.
     *
     * @param { StateStyles | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default stateStyles(value: StateStyles | undefined): this;
    /**
     * id for distribute identification.
     *
     * @param { int | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default restoreId(value: int | undefined): this;
    /**
     * Trigger a visible area change event.
     *
     * @param { Array<double> | undefined } ratios - Threshold array. Each threshold represents a ratio of the
     *     component's visible area to the component's total area. The value range of the threshold is [0.0, 1.0].
     * @param { VisibleAreaChangeCallback | undefined } event - Callback for visible area changes of the component.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onVisibleAreaChange(ratios: Array<double> | undefined, event: VisibleAreaChangeCallback | undefined): this;

    /**
     * Trigger a visible area change event.
     *
     * @param { Array<double> | undefined } ratios - Threshold array. Each threshold represents a ratio of the
     *     component's visible area to the component's total area. The value range of the threshold is [0.0, 1.0].
     * @param { VisibleAreaChangeCallback | undefined } event - Callback for visible area changes of the component.
     * @param { boolean | undefined } measureFromViewport - When this parameter is set to true, the parts of the
     *     component that exceed the parent component's area will also be included in the visible area calculation.
     *     However, this only applies if the parent component does not explicitly set the clip property to true.
     *     If the parent component sets clip to true, regardless of the value of this parameter, the parts that exceed
     *     the parent component's area will still be treated as invisible in the visible area calculation.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onVisibleAreaChange(ratios: Array<double> | undefined, event: VisibleAreaChangeCallback | undefined, measureFromViewport: boolean | undefined): this;

    /**
     * Set or reset the callback which is triggered when the visibleArea of component changed.
     * The interval between two visible area change callbacks will not be less than the expected update interval.
     *
     * @param { VisibleAreaEventOptions | undefined } options - The options for the visibility event.
     * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
     *     If set undefined will reset the target callback.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onVisibleAreaApproximateChange(options: VisibleAreaEventOptions | undefined, event: VisibleAreaChangeCallback | undefined): this;
    /**
     * Applies a spherical effect to the component.
     *
     * @param { double | undefined } value - Spherical degree of the component.
     *     <br>The value ranges from 0 to 1.
     *     <p>**NOTE**:
     *     <br>1. If the value is **0**, the component remains unchanged. If the value is 1, the component is completely
     *     spherical. Between **0** and **1**, a larger value indicates a higher spherical degree. A value less than 0 is
     *     handled as the value **0**. A value greater than 1 is handled as the value **1**.
     *     <br>2. The component's shadow and outer stroke do not support spherical effects.
     *     <br>3. If the value is greater than 0, the component is frozen and not updated, and its content is drawn to the
     *     transparent offscreen buffer. To update the component attributes, set the value to **0**.
     *     </p>
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default sphericalEffect(value: double | undefined): this;
    /**
     * Applies a light up effect to the component.
     *
     * @param { double | undefined } value - Light up degree of the component.
     *     <br>The value ranges from 0 to 1.
     *     <br>If the value is **0**, the component is dark. If the value is **1**, the component is fully illuminated.
     *     <br>Between **0** and **1**, a larger value indicates higher luminance.
     *     <br>A value less than 0 is handled as the value **0**.
     *     <br>A value greater than 1 is handled as the value **1**.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default lightUpEffect(value: double | undefined): this;

    /**
     * Applies a spatial effect to component.
     *
     * @param { SpatialEffectParams | undefined } params - Spatial effect parameters.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default spatialEffect(params: SpatialEffectParams | undefined): this;

    /**
     * Applies a pixel stretch effect to the component.
     *
     * @param { PixelStretchEffectOptions | undefined } options - Pixel stretch effect options.
     *     <br>The value includes the length by which a pixel is stretched toward the four edges.
     *     <p>**NOTE**:
     *     <br>1. If the length is a positive value, the original image is stretched, and the image size increases. The edge
     *     pixels grow by the set length toward the top, bottom, left, and right edges.
     *     <br>2. If the length is a negative value, the original image shrinks as follows, but the image size remains
     *     unchanged:
     *     <br>Shrinking mode:
     *     <br>(1) The image shrinks from the four edges by the absolute value of length set through **options**.
     *     <br>(2) The image is stretched back to the original size with edge pixels.
     *     <br>3. Constraints on **options**:
     *     <br>(1) The length values for the four edges must be all positive or all negative. That is, the four edges are
     *     stretched or shrink at the same time in the same direction.
     *     <br>(2) The length values must all be a percentage or a specific value. Combined use of the percentage and
     *     specific value is not allowed.
     *     <br>(3) If the input value is invalid, the image is displayed as {0, 0, 0, 0}, that is, the image is the same as
     *     the original image.
     *     </p>
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default pixelStretchEffect(options: PixelStretchEffectOptions | undefined): this;
    /**
     * Sets hot keys
     *
     * @param { string | FunctionKey | undefined } value - Character of the combination key.
     * @param { Array<ModifierKey> | undefined } keys - The modifier keys modify the action of key when the key are pressed at the same time.
     * @param { function } [action] - Callback function, triggered when the shortcut keyboard is pressed.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default keyboardShortcut(value: string | FunctionKey | undefined, keys: Array<ModifierKey> | undefined, action?: () => void): this;
    /**
     * Sets whether to enable accessibility grouping.
     *
     * <p><strong>NOTE</strong>
     * <br>Whether to enable accessibility grouping. When accessibility grouping is enabled,
     * <br>the component and all its children are treated as a single selectable unit, and the accessibility
     * <br>service will no longer focus on the individual child components.
     *
     * <br>If accessibility grouping is enabled and the component does not contain a universal text attribute
     * <br>or an accessibility text attribute, the system will concatenate the universal text attributes of
     * <br>its child components to form a merged text for the component. If a child component lacks a universal
     * <br>text attribute, it will be ignored in the concatenation process.
     *
     * <br>When accessibilityPreferred is set to true, the system will prioritize concatenating the accessibility
     * <br>text attributes of the child components to form the merged text. If a child component lacks an
     * <br>accessibility text attribute, the system will continue to concatenate its universal text attribute.
     * <br>If a child component lacks both, it will be ignored.</p>
     *
     * @param { boolean | undefined } isGroup - set group with accessibility, default value is false.
     * @param { ?AccessibilityOptions } [accessibilityOptions] - options for accessibility, default value is false.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityGroup(isGroup: boolean | undefined, accessibilityOptions?: AccessibilityOptions): this;
    /**
     * Sets accessibility next focus id
     * @param { string | undefined } nextId - set component next accessibility focus id
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityNextFocusId(nextId: string | undefined): this;
    /**
     * Sets the accessibility default foucs flag
     * @param { boolean | undefined } focus - if the component is accessibility default focus,focus set true
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityDefaultFocus(focus: boolean | undefined): this;
    /**
     * Sets accessibility same page mode
     * @param { AccessibilitySamePageMode | undefined } pageMode - accessibility same page mode
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityUseSamePage(pageMode: AccessibilitySamePageMode | undefined): this;
    /**
     * Sets accessibilityScrollTriggerable
     * @param { boolean | undefined } isTriggerable - set property of supporting scroll in accessibility
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityScrollTriggerable(isTriggerable: boolean | undefined): this;
    /**
     * Sets the accessibility text.
     * <p><strong>NOTE</strong>
     * <br>When a component does not contain a text attribute, you can use this API to set an accessibility
     * <br>text attribute, so that accessibility services can announce the specified content for the component.
     * <br>If a component has both text content and accessibility text, only the accessibility text is announced.
     * <br>If a component is grouped for accessibility purposes but lacks both text content and accessibility
     * <br>text, the screen reader will concatenate text from its child components (depth-first traversal).
     * <br>To prioritize accessibility text concatenation, set accessibilityPreferred in accessibilityGroup.
     * </p>
     * @param { Resource | string | undefined } text - set accessibility text, default value is "".
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityText(text: Resource | string | undefined): this;
    /**
     * Sets accessibility role,role indicates the custom type of the component
     * @param { AccessibilityRoleType | undefined } role - set accessibility component type
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityRole(role: AccessibilityRoleType | undefined): this;
    /**
     * Register accessibility focus callback,when the component is focused or out of focus,the callback will be executed
     * @param { AccessibilityFocusCallback | undefined } callback - accessibility focus callback function
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAccessibilityFocus(callback: AccessibilityFocusCallback | undefined): this;
    /**
     * Register accessibility action intercept callback,
     * when accessibility action is to be executed,the callback will be executed
     * @param { AccessibilityActionInterceptCallback | undefined } callback - accessibility action intercept callback function
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAccessibilityActionIntercept(callback: AccessibilityActionInterceptCallback | undefined): this;
    /**
     * Sets accessibilityTextHint
     *
     * @param { string | undefined } value - set accessibility text hint
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityTextHint(value: string | undefined): this;
    /**
     * Sets accessibilityDescription
     *
     * with support for resource references using Resource.
     * This property provides additional context or explanation for the component,
     * helping users understand the action or function it performs.
     * <p><strong>NOTE</strong>:
     * <br>Reference resource of the accessibility description. You can specify further explanation
     * <br>of the current component, for example, possible operation consequences, especially those that
     * <br>cannot be learned from component attributes and accessibility text. If a component contains
     * <br>both text information and the accessibility description, the text is read first and then the
     * <br>accessibility description, when the component is selected.</p>
     * @param { Resource | string | undefined } description - set description of accessibility, default value is "".
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityDescription(description: Resource | string | undefined): this;
    /**
     * Sets the accessibility level.
     * This property determines whether the component can be recognized by accessibility services.
     * <p>
     * Accessibility level, which is used to decide whether a component can be identified by the accessibility service.
     * <br>The options are as follows:
     * <br>"auto": The component's recognizability is determined by the accessibility grouping service and ArkUI.
     * <br>"yes": The component can be recognized by accessibility services.
     * <br>"no": The component cannot be recognized by accessibility services.
     * <br>"no-hide-descendants": Neither the component nor its child components can be recognized by accessibility services.
     * <strong>NOTE</strong>
     * <br>When accessibilityLevel is set to "auto", the component's recognizability depends on the following factors:
     * <br>1. The accessibility service internally determines whether the component can be recognized.
     * <br>2. If the parent component's accessibilityGroup property has isGroup set to true, the accessibility service will
     * <br>not focus on its child components, making them unrecognizable.
     * <br>3. If the parent component's accessibilityLevel is set to "no-hide-descendants", the component will not be
     * <br>recognized by accessibility services.</p>
     * @param { string | undefined } value - set accessibility level, default value is auto.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityLevel(value: string | undefined): this;
    /**
     * Sets accessibilityVirtualNode
     *
     * @param { CustomBuilder | undefined } builder - set virtual node of accessibility
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
   default accessibilityVirtualNode(builder: CustomBuilder | undefined): this;
    /**
     * Sets accessibilityChecked
     *
     * @param { boolean | undefined } isCheck - set accessibility checked status
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityChecked(isCheck: boolean | undefined): this;
    /**
     * Sets accessibilitySelected
     *
     * @param { boolean | undefined } isSelect - set accessibility selected status
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilitySelected(isSelect: boolean | undefined): this;
    /**
     * Sets obscured
     *
     * @param { Array<ObscuredReasons> | undefined } reasons - reasons of obscuration
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default obscured(reasons: Array<ObscuredReasons> | undefined): this;
    /**
     * Reuse id is used for identify the reuse type for each custom node.
     *
     * @param { string | undefined } id - The id for reusable custom node.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default reuseId(id: string | undefined): this;
    /**
    * Reuse id is used for identify the reuse type of each @ComponentV2 custom component, which can give user control of sub-component recycle and reuse.
    *
    * @param { ReuseOptions | undefined } options - The configuration parameter for reusable custom component.
    * @returns { this }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default reuse(options: ReuseOptions | undefined): this;
    /**
     * 设置宽高动画过程中的组件内容填充方式。
     *
     * @param { RenderFit | undefined } fitMode - 设置宽高动画过程中的组件内容填充方式。<br/>当fitMode的值为undefined时，取默认值。恢复为内容填充方式为
     *     RenderFit.TOP_LEFT的效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default renderFit(fitMode: RenderFit | undefined): this;
    /**
     * Sets the gesture modifier.
     *
     * @param { GestureModifier | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default gestureModifier(modifier: GestureModifier | undefined): this;
    /**
     * 设置组件背景提亮效果。
     *
     * @param { BackgroundBrightnessOptions | undefined } params - 设置组件背景提亮效果，包括：亮度变化速率，提亮程度。<br/>当params的值为undefined时，恢
     *     复为无提亮效果的背景。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundBrightness(params: BackgroundBrightnessOptions | undefined): this;
    /**
     * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
     *
     * @param { ((gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult) | undefined } callback - A callback
     *     instance used when a gesture bound to this component will be accepted.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onGestureJudgeBegin(callback: ((gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult) | undefined): this;
    /**
     * Binds a custom gesture recognizer judgment callback to the component.
     *
     * @param { GestureRecognizerJudgeBeginCallback | undefined } callback - A callback instance used when
     *     a gesture bound to this component will be accepted.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback | undefined): this;
    /**
     * Binds a custom gesture recognizer judgment callback to the component.
     *
     * <p><strong>NOTE</strong>:
     * <br> For a composite component, setting exposeInnerGesture to true exposes the internal gesture recognizer of the
     * <br> composite component in the current parameter callback. Currently, only the Tabs component is supported.
     *
     * <br> Do not set exposeInnerGesture for other components. When exposeInnerGesture is set to false, this API
     * provides the same functionality
     * <br> as the onGestureRecognizerJudgeBegin API.
     * </p>
     *
     * @param { GestureRecognizerJudgeBeginCallback | undefined } callback - A callback instance used when a gesture
     *     bound to this component will be accepted.
     * @param { boolean | undefined } exposeInnerGesture - This parameter is a flag. This flag determines whether to
     *     expose internal gestures. The default value is false.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback | undefined, exposeInnerGesture: boolean | undefined): this;
    /**
     * Provides a callback to set the parallel relationship between built-in gestures and gestures of other components in the response chain.
     *
     * @param { ShouldBuiltInRecognizerParallelWithCallback | undefined } callback - A callback instance used when
     *     a component is doing touch test.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback | undefined): this;
    /**
     * Provides a callback to set the parallel relationship between gestures of current component and gestures of other
     * components in the response chain.
     *
     * @param { ShouldRecognizerParallelWithCallback | undefined } callback - A callback instance used when a component is
     *     doing touch test.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default shouldRecognizerParallelWith(callback: ShouldRecognizerParallelWithCallback | undefined): this;
    /**
     * Sets whether the component exclusively handles events.
     * true: The component exclusively handles events. false: The component does not exclusively handle events.
     *
     * @param { boolean | undefined } monopolize - indicate the monopoly of events
     * @default false
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default monopolizeEvents(monopolize: boolean | undefined): this;
    /**
     * When the component does a touch test, a user-defined callback is triggered.
     *
     * @param { Callback<TouchEvent, HitTestMode> | undefined } callback - A callback instance used when the component does a touch test.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onTouchIntercept(callback: Callback<TouchEvent, HitTestMode> | undefined): this;
    /**
     * This callback is triggered when the component size changes due to layout updates.
     * This event is not triggered for render attribute changes caused by re-rendering.
     *
     * @param { SizeChangeCallback | undefined } event - event callback.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onSizeChange(event: SizeChangeCallback | undefined): this;
    /**
     * Accessibility focus draw level, and the default value is FocusDrawLevel.SELF.
     *
     * @param { FocusDrawLevel | undefined } drawLevel - indicates accessibility focus draw level.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel | undefined): this;
    /**
     * Register one callback which will be executed when all gesture recognizers are collected done, this happens
     * when user touchs down, the system do hit test process and collect gesture recognizers base on the touch
     * position, after this, before handling any move events, the component can use this interface to know which
     * gesture recognizers will participate in the recognition and competing with each other.
     *
     * @param { TouchTestDoneCallback | undefined } callback - A callback instance used when all gesture recognizers
     *     are collected.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onTouchTestDone(callback: TouchTestDoneCallback | undefined): this;
    /**
     * When the events and gestures on this node and higher-priority nodes have been collected, the callback is executed.
     * This callback is used to intervene in the event and gesture collection results.
     *
     * @param { GestureCollectInterceptCallback } callback - A callback instance used when the component does a touch test.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onGestureCollectIntercept(callback: GestureCollectInterceptCallback): this;
    /**
     * Set system-styled materials for the component. Different materials have different effects, which can influence
     * the backgroundColor, border, shadow, and other visual attributes of the component.
     *
     * Device Behavior Differences:The effect of the same material may vary across different devices depending on
     * their computing power.
     *
     * @param { SystemUiMaterial | undefined } material - System-styled material. Undefined indicates reverting to
     *     the effect of no system material.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    /**
     * Set system-styled materials for the component. The material effect behaves differently on devices with different
     * level of computing powers. On devices with lower computing power, it affects attributes such as the
     * backgroundColor, borderWidth, borderColor, shadow. On devices with higher computing power, it adds a filter effect
     * at the system material layer, which can produce an effect similar to glass.
     *
     * @param { SystemUiMaterial | undefined } material - System-styled material. Undefined indicates reverting to
     *     the effect of no system material.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default systemMaterial(material: SystemUiMaterial | undefined): this;
    /**
     * Called when component is focused, the return value indicates whether keyboard is needed.
     *
     * @param { OnNeedSoftkeyboardCallback | undefined } onNeedSoftkeyboardCallback
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default onNeedSoftkeyboard(onNeedSoftkeyboardCallback: OnNeedSoftkeyboardCallback | undefined): this;
    /**
     * Sets the state anouncement text of the component under accessibility.
     *
     * @param { string | Resource | undefined } description the state anouncement text of the component under accessibility.
     *     if incoming is undefined, it will be processed as empty string.
     * @returns { this } return component instance who call the method.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityStateDescription(description: string | Resource | undefined): this;
    /**
     * Sets AccessibilityActionOptions that can affect operation under accessibility.
     *
     * @param { AccessibilityActionOptions | undefined } option - set accessibility specific operation options.
     * @returns { this } return component instance who call the method.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityActionOptions(option: AccessibilityActionOptions | undefined): this;
    /**
     * Sets AccessibilityCustomActions that can be processed in custom action processing under accessibility.
     *
     * @param { Array<AccessibilityCustomAction> | undefined } actions - set accessibility custom action.
     * @returns { this } return component instance who call method.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default accessibilityCustomActions(actions: Array<AccessibilityCustomAction> | undefined): this;
    /**
     * Set the component's source code redirection information. 
     * @param { string } sourceLine - the source code line.
     * @param { string } [moduleName] - module to which the component belongs.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default debugLine(sourceLine: string, moduleName?: string): this;
    /**
     * Enable or disable specific smart gesture shortcuts, and set response priorities for them.
     *
     * @param { SmartGestureShortcutOptions } [options] - Options for configuring smart gesture shortcuts.
     * @returns { this } return component instance who call the method.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default smartGestureShortcut(options?: SmartGestureShortcutOptions): this;
    /**
     * Set the component's inspector label which only display on DevEco Studio.
     * @param { string | undefined } label - the inspector label.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default inspectorLabel(label: string | undefined): this;
    /**
     * Sets the next accessibility focus ID for the component, with optional detailed parameters.
     * The detailed parameters can provide additional behavior for the accessibility focus transition.
     *
     * @param { string } nextId - set component next accessibility focus id.
     * @param { AccessibilityNextFocusParams | undefined } nextFocusParams - the detailed parameters for
     *     accessibility next focus processing.
     *     Undefined indicates reverting to the default of the detailed parameters.
     * @returns { this } return component instance who call the method.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default accessibilityNextFocusId(nextId: string, nextFocusParams: AccessibilityNextFocusParams | undefined): this;
    /**
     * Sets whether to component is double-sided.
     *
     * @param { boolean | undefined } value - Whether to component is double-sided.
     *     **true**: Both front and back sides are visible (default).
     *     **false**: Only to front side is visible, to back side is hidden when rotated.
     *     When **value** is **undefined**, the component reverts to default double-sided setting (**true**).
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default doubleSided(value: boolean | undefined): this;
}
/**
 * CommonAttribute for ide.
 *
 * @typedef  { CommonMethod } CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CommonAttribute = CommonMethod;
/**
 * Defines the OverlayOptions interface.
 *
 * <strong>NOTE</strong>:<br>
 * When both align and offset are set, the effects are combined.
 * The overlay is first aligned relative to the component and then offset from its current upper left corner.
 *
 * @typedef OverlayOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface OverlayOptions {
    /**
     * Defines align type.
     *
     * @type { ?Alignment }
     * @default TopStart
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align?: Alignment;
    /**
     * Defines offset type.
     *
     * @type { ?OverlayOffset }
     * @default - the overlay is in the upper left corner of the component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: OverlayOffset;
}
/**
 * Defines the OverlayOffset.
 *
 * @typedef OverlayOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface OverlayOffset {
    /**
     * Defines x.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double;
    /**
     * Defines y.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: double;
}
/**
 * Defines the segment of blur.
 * The first element in the tuple means fraction.
 * The range of this value is [0,1]. A value of 1 means opaque and 0 means completely transparent.
 * The second element means the stop position.
 * The range of this value is [0,1]. A value of 1 means region ending position and 0 means region starting position.
 *
 * @typedef { [ double, double ] } FractionStop
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type FractionStop = [
    double,
    double
];

/**
 * CommonShapeMethod
 *
 * @extends CommonMethod
 * @interface CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface CommonShapeMethod extends CommonMethod {
    /**
     * Sets the stroke color.
     * If this attribute is not set, the component does not have any stroke.
     * If the value is invalid, no stroke will be drawn.
     *
     * @param { ResourceColor | undefined } value - Stroke color.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default stroke(value: ResourceColor | undefined): this;
    /**
     * Sets the color of the fill area.
     * An invalid value is handled as the default value.
     * If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.
     *
     * @param { ResourceColor | undefined } value - Color of the fill area. Default value: Color.Black.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fill(value: ResourceColor | undefined): this;
    /**
     * Sets the offset of the start point for drawing the stroke.
     * An invalid value is handled as the default value.
     *
     * @param { double | string | undefined } value - Offset of the start point for drawing the stroke.
     *     Default value: 0
     *     Default unit: vp
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeDashOffset(value: double | string | undefined): this;
    /**
     * Sets the cap style of the stroke.
     *
     * @param { LineCapStyle | undefined } value - Cap style of the stroke. Default value: LineCapStyle.Butt
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeLineCap(value: LineCapStyle | undefined): this;
    /**
     * Sets the join style of the stroke.
     * This attribute does not work for the Circle component, which does not have corners.
     *
     * @param { LineJoinStyle | undefined } value - Join style of the stroke. Default value: LineJoinStyle.Miter
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeLineJoin(value: LineJoinStyle | undefined): this;
    /**
     * Limits for drawing acute angles as bevels
     *
     * @param { double | string | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeMiterLimit(value: double | string | undefined): this;
    /**
     * Sets the stroke opacity.
     * The value range is [0.0, 1.0].
     * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
     * Any other value evaluates to the value 1.0.
     *
     * @param { double | string | Resource | undefined } value - Stroke opacity. Default value: 1
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeOpacity(value: double | string | Resource | undefined): this;
    /**
     * Sets the opacity of the fill area.
     * The value range is [0.0, 1.0].
     * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
     * Any other value evaluates to the value 1.0.
     *
     * @param { double | string | Resource | undefined } value - Opacity of the fill area. Default value: 1
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fillOpacity(value: double | string | Resource | undefined): this;
    /**
     * Sets the stroke width.
     * If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.
     *
     * @param { Length | undefined } value - Stroke width.
     *     The value must be greater than or equal to 0.
     *     Default value: 1.
     *     Default unit: vp.
     *     An invalid value is handled as the default value.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeWidth(value: Length | undefined): this;
    /**
     * Specifies whether anti-aliasing is enabled.
     *
     * @param { boolean | undefined } value - Whether anti-aliasing is enabled.
     *     true: Anti-aliasing is enabled.
     *     false: Anti-aliasing is disabled.
     *     Default value: true
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default antiAlias(value: boolean | undefined): this;
    /**
     * Sets the gap for the border.
     *
     * @param { Array<Length> | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeDashArray(value: Array<Length> | undefined): this;
    /**
    * Set whether the component enables the ability to invert colors.
    * This interface needs to be set as the first attribute of the component.
    *
    * @param { boolean } value - value indicates whether the component enables the ability to invert colors.
    *     <br>If set to true, the component will use the inverse color capability.
    *     If set to false, the component and its child components will not use the inverse color capability
    *     and will not be affected by the settings of the parent or ancestor components. The default value is true.
    * @returns { this }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default allowForceDark(value: boolean): this;
}
/**
 * Defines the direction of pixel rounding at the component level.
 *
 * @interface PixelRoundPolicy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PixelRoundPolicy {
    /**
     * Rounding for alignment with the start edge.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: PixelRoundCalcPolicy;
    /**
     * Rounding for alignment with the top edge.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    top?: PixelRoundCalcPolicy;
    /**
     * Rounding for alignment with the end edge.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: PixelRoundCalcPolicy;
    /**
     * Rounding for alignment with the bottom edge.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bottom?: PixelRoundCalcPolicy;
}
/**
 * Linear Gradient Blur Interface
 *
 * @interface LinearGradientBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LinearGradientBlurOptions {
    /**
     * Percentage of blurring effect. Undefined value means no fractionStops.
     *
     * @type { FractionStop[] | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fractionStops: FractionStop[] | undefined;
    /**
     * Direction of linear gradient blur. Undefined value means GradientDirection.Left.
     *
     * @type { GradientDirection | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction: GradientDirection | undefined;
}
/**
 * Define motion blur anchor coordinates.
 *
 * @interface MotionBlurAnchor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MotionBlurAnchor {
    /**
     * Define anchor coordinate x-value.Value range [0.0, 1.0]. Undefined value means 0.0.
     *
     * @type { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double | undefined;
    /**
     * Define anchor coordinate y-value.Value range [0.0, 1.0]. Undefined value means 0.0.
     *
     * @type { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double | undefined;
}
/**
 * Define motion blur options.
 *
 * @interface MotionBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MotionBlurOptions {
    /**
     * Define the size of motion blur radius.The range of this value is  [0.0, ∞). Undefined value means 0.0.
     *
     * @type { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius: double | undefined;
    /**
     * Define motion blur anchor coordinates. Undefined value means default MotionBlurAnchor.
     *
     * @type { MotionBlurAnchor | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: MotionBlurAnchor | undefined;
}
/**
 * Sub component layout info.
 *
 * @extends SizeResult
 * @interface GeometryInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GeometryInfo extends SizeResult {
    /**
     * Sub component borderWidth info.
     *
     * @type { EdgeWidth }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth: EdgeWidth;
    /**
     * Sub component margin info.
     *
     * @type { Margin }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    margin: Margin;
    /**
     * Sub component padding info.
     *
     * @type { Padding }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    padding: Padding;
}
/**
 * Provides the child component layout information.
 *
 * @interface Layoutable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Layoutable {
    /**
     * Measurement result of the child component.
     *
     * @type { MeasureResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    measureResult: MeasureResult;
    /**
     * Unique ID of the child component.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    uniqueId?: int;
    /**
     * Applies the specified position information to the child component.
     *
     * @param { Position | undefined } position
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    layout(position: Position | undefined): void;
    /**
     * Obtains the margin of the child component.
     *
     * @returns { DirectionalEdgesT<double> | undefined } the margin of sub component, unit is vp. If some errors
     * occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getMargin(): DirectionalEdgesT<double> | undefined;
    /**
     * Call this method to get the padding of sub component.
     *
     * @returns { DirectionalEdgesT<double> | undefined } Padding of the child component, unit is vp. If some errors
     * occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPadding(): DirectionalEdgesT<double> | undefined;
    /**
     * Obtains the border width of the child component.
     *
     * @returns { DirectionalEdgesT<double> | undefined } the borderWidth of sub component, unit is vp. If some errors
     * occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getBorderWidth(): DirectionalEdgesT<double> | undefined;
}
/**
 * Sub component info passed from framework when measure happens.
 *
 * @interface Measurable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Measurable {
    /**
     * Unique ID that the system assigns to the child component.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    uniqueId?: int;
    /**
     * Applies the size constraint to the child component.
     *
     * @param { ConstraintSizeOptions | undefined } constraint
     * @returns { MeasureResult | undefined } Provides the measurement result of the component. If some errors
     *     occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    measure(constraint: ConstraintSizeOptions | undefined): MeasureResult | undefined;
    /**
     * Obtains the margin of the child component.
     *
     * @returns { DirectionalEdgesT<double> | undefined } Margin of the child component, unit is vp. If some errors
     * occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getMargin(): DirectionalEdgesT<double> | undefined;
    /**
     * Obtains the padding of the child component.
     *
     * @returns { DirectionalEdgesT<double> | undefined } the padding of sub component, unit is vp. If some errors
     * occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPadding(): DirectionalEdgesT<double> | undefined;
    /**
     * Obtains the border width of the child component.
     *
     * @returns { DirectionalEdgesT<double> | undefined } Border width of the child component, unit is vp. If some errors
     * occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getBorderWidth(): DirectionalEdgesT<double> | undefined;
}
/**
 * Provides the component size information.
 *
 * @interface SizeResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SizeResult {
    /**
     * Width obtained from the measurement result. Unit: vp.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width: double;
    /**
     * Height obtained from the measurement result. Unit: vp.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height: double;
}
/**
 * Provides the measurement result of the component.
 *
 * @extends SizeResult
 * @interface MeasureResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MeasureResult extends SizeResult {
}
/**
 * The navigation destination information.
 *
 * @typedef {uiObserver.NavDestinationInfo} NavDestinationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NavDestinationInfo = uiObserver.NavDestinationInfo;
/**
 * The navigation information.
 *
 * @typedef {  uiObserver.NavigationInfo } NavigationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NavigationInfo = uiObserver.NavigationInfo;
/**
 * The router page information.
 *
 * @typedef {uiObserver.RouterPageInfo} RouterPageInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type RouterPageInfo = uiObserver.RouterPageInfo;
/**
 * UIContext.
 *
 * @typedef { _UIContext } UIContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type UIContext = _UIContext;
/**
 * DrawContext.
 *
 * @typedef { _DrawContext } DrawContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DrawContext = _DrawContext;
/**
 * 导入VisualEffect类型对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type VisualEffect = uiEffect.VisualEffect;
/**
 * 导入Filter类型对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Filter = uiEffect.Filter;
/**
 * SystemUiMaterial
 *
 * @typedef { uiMaterial.Material } SystemUiMaterial
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
/**
 * SystemUiMaterial
 *
 * @typedef { uiMaterial.Material } SystemUiMaterial
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type SystemUiMaterial = uiMaterial.Material;

/**
 * Blender
 *
 * @typedef { uiEffect.Blender } Blender
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type Blender = uiEffect.Blender;
/**
 * Import the DialogController type from promptAction.
 *
 * @typedef { promptAction.DialogController } PromptActionDialogController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PromptActionDialogController = promptAction.DialogController;
/**
 * Describe the position, width, and height of a component.
 *
 * @interface RectResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RectResult {
    /**
     * Horizontal coordinate.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * Vertical coordinate.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * Content width.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width: double;
    /**
     * Content height.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height: double;
}
/**
 * Defines the options about AreaChangeEvent.
 *
 * @typedef AreaChangeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface AreaChangeOptions {
    /**
     * The value of expectedUpdateInterval indicates the desired update interval (ms).
     *
     * @type { ?int }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    expectedUpdateInterval?: int;
}
/**
 * Defines the options for the AreaChangeEvent.
 *
 * @typedef { function } AreaChangeCallback
 * @param { Area } oldValue - Component area information before the change.
 * @param { Area } newValue - Component area information after the change.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type AreaChangeCallback = (oldValue: Area, newValue: Area) => void;
/**
 * CaretOffset info.
 *
 * @interface CaretOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CaretOffset {
    /**
     * Get the index of the CaretOffset
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int;
    /**
     * Get the x of the relative position.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: int;
    /**
     * Get the y of the relative position.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: int;
}
/**
 * Defines the span options of TextContentController.
 *
 * @interface TextContentControllerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextContentControllerOptions {
    /**
     * the offset that add a text at.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: int;
}
/**
 * TextContentControllerBase
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class TextContentControllerBase {
    /**
     * Get the index and relative position of the CaretOffset.
     *
     * <p><strong>NOTE</strong>:
     * <br>If this API is called when the caret position is updated in the current frame, it will not take effect.
     * <br>For the Search component, the returned position information is the offset of the first character
     * relative to the search icon in the component.
     * <br>If no text is entered in the Search component,
     * the return value contains the position information relative to the component.
     * <br>The location information in the return value is the location of the caret relative to the editable component.
     * </p>
     *
     * @returns { CaretOffset | undefined } index and relative position of the CaretOffset.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getCaretOffset(): CaretOffset | undefined;
    /**
     * Get the start and end positions of the text content.
     *
     * <p><strong>NOTE</strong>:
     * <br>If no text is entered, the return value contains the position information, but the size is 0.
     * <br>The position information is the offset of the first character relative to the editable area.
     * <br>For the Search component, the returned position information is the offset of the first character
     * relative to the search icon in the component.
     * <br>If there is input, the width in the return value is the fixed width of the editable area.
     * </p>
     *
     * @returns { RectResult | undefined } Text content rect.The unit of the return value is pixel.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getTextContentRect(): RectResult | undefined;
    /**
     * Get the lines number of the text content.
     * The getTextContentLineCount type is used to obtain the number of lines of the edited text.
     *
     * @returns { int | undefined } Text content line count
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getTextContentLineCount(): int | undefined;
    /**
     * Add a text.
     *
     * @param { string } text - text value.
     * @param { TextContentControllerOptions } [textOperationOptions] - operation info.
     * @returns { int | undefined } caret index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addText(text: string, textOperationOptions?: TextContentControllerOptions): int | undefined;
    /**
     * Set the styled placeholder.
     *
     * @param { StyledString } styledString - The styledString for placeholder.
     *     If the parameter is invalid, this method will have no effect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setStyledPlaceholder(styledString: StyledString): void;
    /**
     * Delete text in TextRange.
     *
     * @param { TextRange } [range] - range for deleting.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deleteText(range?: TextRange): void;
    /**
     * Gets the selected range of text content.
     *
     * @returns { TextRange | undefined } range for selecting.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getSelection(): TextRange | undefined;
    /**
     * Clear the content of preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    clearPreviewText(): void;
    /**
     * Gets the text content of the selected range.
     *
     * @param { TextRange } [range] - selected range.
     * @returns { string | undefined } text content of the selected range.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    getText(range?: TextRange): string | undefined;

    /**
     * Delete the last character of the input field component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deleteBackward(): void;

    /**
     * Scroll the input field component to make the specified content visible.
     * @param { TextRange } [range] - The visible range.
     *     If the parameter is invalid, this method will have no effect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollToVisible(range?: TextRange): void
}
/**
 * Enum of scrollable containers' content clip mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ContentClipMode {
    /**
     * Clip to content rect inside margin & padding.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CONTENT_ONLY = 0,
    /**
     * Clip to scrollable's outer rect, including padding but inside margin.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOUNDARY = 1,
    /**
     * Clip to the safeArea of scrollable container.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SAFE_AREA = 2
}

/**
 * CommonScrollableMethod
 *
 * @extends CommonMethod
 * @interface ScrollableCommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ScrollableCommonMethod extends CommonMethod {
    /**
     * Sets the scrollbar state.
     *
     * @param { BarState | undefined } barState - Scrollbar state.<br>Default value: <em>BarState.Auto</em>
     *     for the <em>List</em>, <em>Grid</em>, and <em>Scroll</em> components and <em>BarState.Off</em>
     *     for the <em>WaterFlow</em> component
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default scrollBar(barState: BarState | undefined): this;
    /**
     * Sets the scrollbar color.
     *
     * @param { Color | int | string | Resource | undefined } color - Scrollbar color.
     *     <br>Default value: <em>'\#182431'</em> (40% opacity)
     *     <br>A number value indicates a HEX color in RGB or ARGB format, for example, <em>0xffffff</em>.
     *     A string value indicates a color in RGB or ARGB format, for example, <em>'#ffffff'</em>.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default scrollBarColor(color: Color | int | string | Resource | undefined): this;
    /**
     * Sets the scrollbar width.
     *
     * @param { double | string | undefined } value - Scrollbar width.<br>Default value: <em>4</em>
     *     <br>Unit: vp
     *     <br>If this parameter is set to a value less than or equal to 0, the default value is used.
     *     The value <em>0</em> means not to show the scrollbar.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default scrollBarWidth(value: double | string | undefined): this;
    /**
     * Sets the scrollbar width.
     *
     * @param { Resource | undefined } value  - Scrollbar width.
     *     <br>Unit: vp
     *     <br>Default value: <em>4</em>
     *     <br>If this parameter is set to a value less than or equal to 0, the default value is used.
     *     The value <em>0</em> means not to show the scrollbar.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default scrollBarWidth(value: Resource | undefined): this;
    /**
     * Margin of the scrollbar.
     *
     * @param { ScrollBarMargin | undefined } margin - Margin of the scrollbar.
     *     <br>Passing undefined will restore the default value.Default value: {start: LengthMetrics.vp(0), end: 
     *     LengthMetrics.vp(0)}.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default scrollBarMargin(margin: ScrollBarMargin | undefined): this;
    /**
     * Set the scroll bar auto adjust the margin to avoid the padding, safeAreaPadding, and
     * contentStartOffset/contentEndOffset of the component.
     *
     * @param { boolean | undefined } enable - Whether to enable automatic adjustment of scroll bar margin.
     *     <br>Default value: false.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default autoAdjustScrollBarMargin(enable: boolean | undefined): this;
    /**
     * Sets the effect used when the scroll boundary is reached.
     *
     * @param { EdgeEffect | undefined } edgeEffect - Effect used when the scroll boundary is
     *     reached. The spring and shadow effects are supported. Default value:
     *     <em>EdgeEffect.None</em> for the <em>Grid</em>, <em>Scroll</em>, and <em>WaterFlow</em>
     *     components and <em>EdgeEffect.Spring</em> for the <em>List</em> component
     * @param { EdgeEffectOptions } [options] - Whether to enable the scroll effect when the
     *     component content is smaller than the component itself. The value
     *     <em>{ alwaysEnabled: true }</em> means to enable the scroll effect, and
     *     <em>{ alwaysEnabled: false }</em> means the opposite. Default value:
     *     <em>{ alwaysEnabled: false }</em> for the <em>List</em>, <em>Grid</em>,
     *     and <em>WaterFlow</em> components, and <em>{ alwaysEnabled: true }</em>
     *     for the <em>Scroll</em> component
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default edgeEffect(edgeEffect: EdgeEffect | undefined, options?: EdgeEffectOptions): this;
    /**
     * Called when setting whether to enable fading Edge effect.
     *
     * @param { boolean | undefined } enabled - Whether to turn on the edge fade effect
     * @param { FadingEdgeOptions } [options] - The options of fadingEdge.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fadingEdge(enabled: boolean | undefined, options?: FadingEdgeOptions): this;
    /**
     * Sets the nested scrolling options.
     *
     * @param { NestedScrollOptions | undefined } value - Nested scrolling options.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default nestedScroll(value: NestedScrollOptions | undefined): this;
    /**
     * Sets whether to support scroll gestures.
     *
     * @param { boolean | undefined } value - Whether to support scroll gestures.<br>Default value: <em>true</em>
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableScrollInteraction(value: boolean | undefined): this;
    /**
     * Sets the friction coefficient.
     *
     * @param { double | Resource | undefined } value - Friction coefficient.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default friction(value: double | Resource | undefined): this;
    /**
     * Sets the offset from the start of the content to the boundary of the scrollable display area.
     *
     * @param { double | Resource | undefined } offset - Offset from the start of the content to the boundary of
     *     the scrollable display area.
     *     <br>Unit: vp, <br>Passing undefined will restore the default value. Default value: <em>0</em>.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default contentStartOffset(offset: double | Resource | undefined): this;
    /**
     * Sets the offset from the end of the content to the boundary of the scrollable display area.
     *
     * @param { double | Resource | undefined } offset - Offset from the end of the content to the boundary of
     *     the scrollable display area.
     *     <br>Unit: vp, <br>Passing undefined will restore the default value.Default value: <em>0</em>. 
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default contentEndOffset(offset: double | Resource | undefined): this;
    /**
     * Called when the scrollable will start dragging.
     *
     * @param { VoidCallback | undefined } handler - callback of start dragging.
     *     <br>Passing undefined will unregister the callback.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onWillStartDragging(handler: VoidCallback | undefined): this;
    /**
     * Called when the scrollable will end dragging.
     *
     * @param { OnWillStopDraggingCallback | undefined } handler - callback of end dragging.
     *     <br>Passing undefined will unregister the callback.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onWillStopDragging(handler: OnWillStopDraggingCallback | undefined): this;
    /**
     * Called when the scrollable did end dragging.
     *
     * @param { OnDidStopDraggingCallback | undefined } handler - callback of end dragging.
     *     <br>Passing undefined will unregister the callback.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onDidStopDragging(handler: OnDidStopDraggingCallback | undefined): this;
    /**
     * Called when the scrollable will start fling.
     *
     * @param { VoidCallback | undefined } handler - callback of start fling.
     *     <br>Passing undefined will unregister the callback.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onWillStartFling(handler: VoidCallback | undefined): this;
    /**
     * Called when the scrollable did stop fling.
     *
     * @param { VoidCallback | undefined } handler - callback of stop fling.
     *     <br>Passing undefined will unregister the callback.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onDidStopFling(handler: VoidCallback | undefined): this;
    /**
     * Enable left mouse button press-and-drag scrolling.
     *
     * @param { boolean | undefined } enabled - Enable left mouse button press-and-drag scrolling.
     *    <br>Default value: false.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default enableScrollWithMouse(enabled: boolean | undefined): this;
    /**
     * Triggered when the scrollable component reaches the start position.
     *
     * @param { function | undefined } event - Callback function, triggered when the scrollable reaches
     *     the start position.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onReachStart(event: (() => void) | undefined): this;
    /**
     * Triggered when the scrollable component reaches the end position.
     *
     * @param { function | undefined } event - Callback function, triggered when the scrollable reaches the end position.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onReachEnd(event: (() => void) | undefined): this;
    /**
     * Triggered when the scrollable component starts scrolling initiated by the user's finger dragging the
     * component or its scrollbar.
     *
     * @param { function | undefined } event - Callback function, triggered when the scrollable starts scrolling.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onScrollStart(event: (() => void) | undefined): this;
    /**
     * Triggered when scrolling stops after the user's finger leaves the screen.
     *
     * @param { function | undefined } event - Callback function, triggered when the scrollable stops scrolling.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onScrollStop(event: (() => void) | undefined): this;
    /**
     * Sets the maximum initial velocity at the start of the fling animation that occurs after gesture-driven scrolling ends.
     *
     * @param { double | undefined } speedLimit - Maximum initial velocity at the start of the fling animation.
     *     <br>Default value: <em>9000</em>
     *     <br>Unit: vp/s
     *     <br>Value range: (0, +∞). If this parameter is set to a value less than or equal to 0, the default value is used.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default flingSpeedLimit(speedLimit: double | undefined): this;
    /**
     * Sets the content clipping area for this scrollable component.
     *
     * @param { ContentClipMode | RectShape | undefined } clip - A value from enum ContentClipMode or a customized clip rect.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default clipContent(clip: ContentClipMode | RectShape | undefined): this;
    /**
     * Set the sensitivity of rotating crown.
     *
     * @param { CrownSensitivity | undefined } sensitivity - The sensitivity of rotating crown, default value is { MEDIUM }.
     * @returns { this } The component instance.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * Sets whether to enable the back-to-top feature for a scrollable component when the status bar is touched.
     *
     * @param { boolean | undefined } backToTop - Whether to enable the backtotop feature for a scrollable
     *     component when the status bar is touched. <br>Default value: <em>false</em>
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backToTop(backToTop: boolean | undefined): this;
    /**
     * Sets the scrollbar track height.
     *
     * @param { LengthMetrics | undefined } height - Scrollbar track height.
     *     <br>The value must be greater than or equal to 0, If set to undefined or a value less than 0, the default
     *     value is used, If set to 0, the scrollbar is not displayed.
     *     <br>Default value: adaptive to the height of the scrollable component.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default scrollBarHeight(height: LengthMetrics | undefined): this;
}
/**
 * The actual offset by which the scrollable scrolls.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ScrollResult {
    /**
     * Get the actual offset by which the scrollable scrolls in vp.
     * @returns { double } actual offset by which the scrollable scrolls in vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    get offsetRemain(): double;

    /**
     * Set the actual offset by which the scrollable scrolls in vp.
     * @param { double } offsetRemain - actual offset by which the scrollable scrolls in vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    set offsetRemain(offsetRemain: double);
}
/**
 * Called before scroll to allow developer to control real offset the Scrollable can scroll.
 *
 * @typedef { function } OnWillScrollCallback
 * @param { double } scrollOffset - offset this frame will scroll, which may or may not be reached.
 * @param { ScrollState } scrollState - current scroll state.
 * @param { ScrollSource } scrollSource - source of current scroll.
 * @returns { undefined | ScrollResult } the remain offset for the scrollable,
 *     same as scrollOffset when no ScrollResult is returned.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnWillScrollCallback = (scrollOffset: double, scrollState: ScrollState, scrollSource: ScrollSource) => (undefined | ScrollResult);
/**
  * On scroll callback using in scrollable onDidScroll.
  *
  * @typedef { function } OnScrollCallback
  * @param { double } scrollOffset - offset this frame did scroll.
  * @param { ScrollState } scrollState - current scroll state.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
export type OnScrollCallback = (scrollOffset: double, scrollState: ScrollState) => void;
/**
 * On scroll callback using in scrollable onWillStopDragging.
 *
 * @typedef { function }
 * @param { double } velocity - The veolicity of the scroll view at the moment the touch was released.
 *     <br>Unit: vp/s.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnWillStopDraggingCallback = (velocity: double) => void;
/**
 * On scroll callback using in scrollable onDidStopDragging.
 *
 * @typedef { function } OnDidStopDraggingCallback
 * @param { boolean } willFling - whether start fling animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnDidStopDraggingCallback = (willFling: boolean) => void;
/**
  * Defines the callback type used in onItemDragStart.
  *
  * @typedef { function } OnItemDragStartCallback
  * @param { ItemDragInfo } event - Information about the dragged item.
  * @param { int } itemIndex - The index number of the dragged item.
  * @returns {CustomBuilder | undefined}
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
export type OnItemDragStartCallback = (event: ItemDragInfo, itemIndex: int) => (CustomBuilder | undefined);
/**
  * Defines the callback type used in onGetPreviewBadge of EditModeOptions.
  *
  * @typedef { function } OnGetPreviewBadgeCallback
  * @returns { boolean | int }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 23 static
  */
export type OnGetPreviewBadgeCallback = () => (boolean | int);
/**
 * Defines the callback type used in OnVisibleIndexesChange.
 *
 * @typedef { function } OnVisibleIndexesChangeCallback
 * @param { int } start - the first index in visible content.
 * @param { int } end - the last index in visible content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnVisibleIndexesChangeCallback = (start: int, end: int) => void;
/**
 * Defines the onMove callback.
 *
 * @typedef { function } OnMoveHandler
 * @param { int } from - Index number for moving elements.
 * @param { int } to - Target index number for moving elements.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnMoveHandler = (from: int, to: int) => void;
/**
 * Define item drag event handler.
 *
 * @interface ItemDragEventHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ItemDragEventHandler {
    /**
     * This callback is triggered when the item is long pressed.
     *
     * @type { ?Callback<int> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onLongPress?: Callback<int>;
    /**
     * This callback is triggered when the item is dragged.
     *
     * @type { ?Callback<int> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDragStart?: Callback<int>;
    /**
     * This callback is triggered when an item is moved through other items.
     *
     * @type { ?Callback<int> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onMoveThrough?: OnMoveHandler;
    /**
     * This callback is triggered when the item is dropped.
     *
     * @type { ?Callback<int> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDrop?: Callback<int>;
}
/**
 * Define DynamicNode.
 *
 * @typedef DynamicNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DynamicNode {
    /**
     * Set the move action.
     *
     * @param { OnMoveHandler | undefined } handler
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onMove(handler: OnMoveHandler | undefined): this;
    /**
     * Set the move action.
     *
     * @param { OnMoveHandler | undefined } handler
     * @param { ItemDragEventHandler } eventHandler
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onMove(handler: OnMoveHandler | undefined, eventHandler: ItemDragEventHandler): this;
}
/**
 * Define EdgeEffect Options.
 *
 * @interface EdgeEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EdgeEffectOptions {
    /**
     * Enable Sliding effect when component does not full screen.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    alwaysEnabled: boolean;
    /**
     * Set the effective edge of the edge effect.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    effectEdge?: int;
}
/**
 * Enumerates the effective edge of the edge effect.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EffectEdge {
    /**
     * Effective only for the starting edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START = 1,
    /**
     * Effective only for the end edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END = 2
}
/**
 * Indicates children main size.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ChildrenMainSize {
    /**
     * Creates an instance of ChildrenMainSize.
     *
     * @param { double } childDefaultSize - default main size, in vp. If the main axis is vertical, it indicates height.
     * If the main axis is horizontal, it indicates width.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(childDefaultSize: double);
    /**
     * Set default size.
     *
     * @param { double } value - default main size, in vp. If the main axis is vertical, it indicates height.
     * If the main axis is horizontal, it indicates width.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    set childDefaultSize(value: double);
    /**
     * Get default size
     *
     * @returns { double } - default main size, in vp. If the main axis is vertical, it indicates height.
     * If the main axis is horizontal, it indicates width.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    get childDefaultSize(): double;
    /**
     * Changes children main size by removing or replacing existing elements and/or adding new elements in place.
     *
     * @param { int } start - Zero-based index at which to start changing the children main size.
     * @param { int } [deleteCount] - Indicating the number of children main size to remove from start.
     * @param { Array<double> } [childrenSize] - Add the new children main size, beginning from start.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     * @example splice(1, 0, [100]), Insert a child after first child, the child's main size is 100vp.
     * splice(1, 1), Delete the second child.
     * splice(1, 2, [100, 100]), Change the main size of the second and third children to 100vp.
     */
    splice(start: int, deleteCount?: int, childrenSize?: Array<double>): void;
    /**
     * Updates main size for specified child.
     *
     * @param { int } index - index of child to be updated.
     * @param { double } childSize - new section options.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    update(index: int, childSize: double): void;
}

/**
 * Define edit mode options.
 *
 * @interface EditModeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EditModeOptions {
    /**
     * Define whether to gather selected items in grid or list when item is long pressed for context menu.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableGatherSelectedItemsAnimation?: boolean;

    /**
     * Called to return whether to display the number badge or the number displayed on the badge
     * for the context menu preview. If not set, the number of selected items within the display range will be used.
     * Returning false means not displaying the badge.
     * Returning true means using the number of selected items within the display range.
     * Returning a number to include selected items outside the display range.
     *
     * @type { ?OnGetPreviewBadgeCallback } onGetPreviewBadge
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onGetPreviewBadge?: OnGetPreviewBadgeCallback;

    /**
     * Use default multi-select style.
     * {@code true} indicates that the check box is displayed for GridItem or ListItem after entering the
     * multi-select state.
     * {@code false} indicates that there is no default style after entering the multi-select state.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    useDefaultMultiSelectStyle?: boolean;

    /**
     * Enable two-finger swipe multi-selection.
     * {@code true} indicates that two-finger swiping can enter edit mode and perform multi-selection.
     * {@code false} indicates that two-finger swiping cannot perform multi-selection.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    enableTwoFingerMultiSelect?: boolean;
}

/**
 * 背景亮度选项。
 * 
 * > **说明：**
 * >
 * > 对于组件背景内容，每个像素自身的亮度（灰阶值）的计算公式为：
 * > >  `Y = （0.299R + 0.587G + 0.114B）/ 255.0`（R、G、B分别表示像素红色、绿色和蓝色通道的值，Y表示灰阶值），通过上述公式将像素点的灰阶值归一化至0~1的范围。
 * > >  每个像素的亮度提升计算公式为：`ΔY = -rate*Y + lightUpDegree`。例如，当rate=0.5，lightUpDegree=0.5时，对于灰阶值为0.2的像素点，亮度增加值为
 * > `-0.5*0.2 + 0.5 = 0.4`，对于灰阶值为1的像素点，亮度增加值为`-0.5*1 + 0.5 = 0`。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BackgroundBrightnessOptions {
    /**
     * 亮度变化速率。亮度变化速率越大，提亮程度下降速度越快。若rate为0，则lightUpDegree将不生效，即不会产生任何提亮效果。
     * 
     * 默认值：0.0 
     * 
     * 取值范围：(0.0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rate: double;
    /**
     * 提亮程度。提亮程度越大，亮度提升程度越大。
     * 
     * 默认值：0.0 
     * 
     * 取值范围：[-1.0, 1.0]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lightUpDegree: double;
}

/**
 * PointLightStyle info
 *
 * @interface PointLightStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PointLightStyle {
  /**
   * Defines the PointLight light intensity and position.
   *
   * @type { ?LightSource }
   * @default undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  lightSource?: LightSource;
  /**
   * Defines the PointLight illuminated type.
   *
   * @type { ?IlluminatedType }
   * @default IlluminatedType.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  illuminated?: IlluminatedType;
  /**
   * Defines the PointLight bloom.
   *
   * @type { ?double }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  bloom?: double;
}

/**
 * LightSource info
 *
 * @interface LightSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
declare interface LightSource {
  /**
   * Defines the PointLight light positionX.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  positionX: Dimension;
  /**
   * Defines the PointLight light positionX.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  positionY: Dimension;
  /**
   * Defines the PointLight light positionX.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  positionZ: Dimension;
  /**
   * Defines the PointLight light intensity.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  intensity: double;
  /**
   * Defines the PointLight light color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;
}

/**
 * 动画选项设置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface KeyframeAnimateParam {
    /**
     * 动画的整体延时时间，单位为ms（毫秒），默认不延时播放。
     * 
     * 默认值：0
     * 
     * **说明：** 
     * 
     *  delay>=0为延迟播放，delay<0表示提前播放。对于delay<0的情况：当delay的绝对值小于实际动画时长，动画将在开始后第一帧直接运动到delay绝对值的时刻的状态；当delay的绝对值大于等于实际动画时长，动
     * 画将在开始后第一帧直接运动到终点状态。其中实际动画时长等于单次动画时长乘以动画播放次数。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    delay?: int;
    /**
     * 动画播放次数。默认播放一次，设置为-1时表示无限次播放。设置为0时表示无动画效果。
     * 
     * 默认值：1
     * 
     * **取值范围：**[-1, +∞)
     * 
     * **说明：**
     * 
     * - 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    iterations?: int;
    /**
     * 动画播放完成回调。当keyframe动画所有次数播放完成后调用。在设置的开发者选项中关闭过渡动画，或UIAbility从前台切换至后台时会立即结束仍在播放中的有限循环keyframe动画，触发播放完成回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onFinish?: () => void;
    /**
     * 设置动画的期望帧率。
     * 
     * **默认值：**{min:0, max:0, expected:0}，即跟随应用帧率。
     * 
     * **说明：** 
     * 
     * 开发者通过设置有效的期望帧率后，系统会收集设置的请求帧率，进行决策和分发，在渲染管线上进行分频，尽量能够满足开发者的期望帧率。开发者设置的期望帧率值不能代表最终实际效果，会受限于系统能力和屏幕刷新率。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    expectedFrameRateRange?: ExpectedFrameRateRange;
}
/**
 * 设置关键帧选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface KeyframeState {
    /**
     * 该段关键帧动画的持续时间，单位为毫秒。
     * 
     * 取值范围：[0, +∞)
     * 
     * **说明：**
     * 
     * - 设置小于0的值时按0处理。
     * 
     * - 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    duration: int;
    /**
     * 该关键帧使用的动画曲线。
     * 
     * 推荐以Curve或ICurve形式指定。
     * 
     * 当类型为string时，为动画插值曲线，取值参考
     * [AnimateParam](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#animateparam对象说明)的curve参数。
     * 
     * 默认值：Curve.EaseInOut
     * 
     * **说明：**
     * 
     * 由于[springMotion]{@link @ohos.curves:curves.springMotion}、
     * [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}、
     * [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}曲线时长不生效，故不支持这三种曲线。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    curve?: Curve | string | ICurve;
    /**
     * 指定在该关键帧时刻状态的闭包函数，即在该关键帧时刻要达到的状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    event: () => void;
}
/**
 * Defines the callback
 *
 * @typedef { function } Callback<T, V = void>
 * @param { T } data
 * @returns { V }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
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
 * @stagemodelonly
 * @since 23 static
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
 * @stagemodelonly
 * @since 23 static
 */
export type AccessibilityCallback = (isHover: boolean, event: AccessibilityHoverEvent) => void;

/**
 * Defines the callback type used in accessibility hover transparent event.
 *
 * @typedef { function } AccessibilityTransparentCallback
 * @param { TouchEvent } event - The value of event contains information about original accessibility hover event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type AccessibilityTransparentCallback = (event: TouchEvent) => void

/**
 * Defines the options about VisibleAreaEvent.
 *
 * @interface VisibleAreaEventOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface VisibleAreaEventOptions {
    /**
     * Each number in ratios indicates the value of visibility ratio. Each number in the Array value range in [0, 1].
     *
     * @type { Array<double> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ratios: Array<double>;
    /**
     * The value of expectedUpdateInterval indicates desired update period(ms).
     *
     * @type { ?int }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    expectedUpdateInterval?: int;
    /**
     * When this parameter is set to true, the parts of the component that exceed the parent component's area will also
     * be included in the visible area calculation. However, this only applies if the parent component does not
     * explicitly set the clip property to true. If the parent component sets clip to true, regardless of the value
     * of this parameter, the parts that exceed the parent component's area will still be treated as invisible in the
     * visible area calculation.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    measureFromViewport?: boolean;
}
/**
 * Defines the callback type used in VisibleAreaChange events.
 *
 * @typedef { function } VisibleAreaChangeCallback
 * @param { boolean } isExpanding - Indicates the ratio of the visible area to its own area compared to the last change.
 * It is true as the ratio increases and false as the ratio decreases.
 * @param { double } currentRatio - The value of currentRatio indicates the visibility ratio of the current component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type VisibleAreaChangeCallback = (isExpanding: boolean, currentRatio: double) => void;
/**
 * Defines a UICommonEvent which is used to set different common event to target component.
 *
 * @interface UICommonEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UICommonEvent {
    /**
     * Set or reset the callback which will be triggered a click event when clicked.
     *
     * @param { Callback<ClickEvent> | undefined } callback - The callback about the click event. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnClick(callback: Callback<ClickEvent> | undefined): void;
    /**
     * Set or reset the callback which will be triggered a touch event when touched.
     *
     * @param { Callback<TouchEvent> | undefined } callback - The callback about the touch event. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnTouch(callback: Callback<TouchEvent> | undefined): void;
    /**
     * Set or reset the callback is triggered when a component mounts a display.
     *
     * @param { VoidCallback | undefined } callback - The callback will be triggered when a component mounts a display. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnAppear(callback: VoidCallback | undefined): void;
    /**
     * Set or reset the callback is triggered when component uninstallation disappears.
     *
     * @param { VoidCallback | undefined } callback - The callback will be triggered when component uninstallation disappears. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnDisappear(callback: VoidCallback | undefined): void;
    /**
     * Set or reset the callback is triggered when component has keyboard input.
     *
     * @param { Callback<KeyEvent> | undefined } callback - The callback will be triggered when has keyboard input. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void;
    /**
     * Set or reset the callback which is triggered when component get focus.
     *
     * @param { VoidCallback | undefined } callback - The callback will be triggered when a component get focus. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnFocus(callback: VoidCallback | undefined): void;
    /**
     * Set or reset the callback which is triggered when lose focus.
     *
     * @param { VoidCallback | undefined } callback - The callback will be triggered when a component lose focus. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnBlur(callback: VoidCallback | undefined): void;
    /**
     * Set or reset the callback which is triggered when has a hover event.
     *
     * @param { HoverCallback | undefined } callback - The callback will be triggered when has a hover event. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnHover(callback: HoverCallback | undefined): void;
    /**
    * Set or reset the callback which is triggered when has a mouse event.
    *
    * @param { Callback<MouseEvent> | undefined } callback - The callback will be triggered when has mouse input. If set undefined will reset the target callback.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    setOnMouse(callback: Callback<MouseEvent> | undefined): void;
    /**
    * Sets the callback for the onSizeChange event.
    *
    * @param { SizeChangeCallback | undefined } callback - The callback will be triggered when the size of component changed. If set undefined will reset the target callback.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    setOnSizeChange(callback: SizeChangeCallback | undefined): void;
    /**
     * Sets the onVisibleAreaChange callback that limits the callback interval.
     *
     * @param { VisibleAreaEventOptions } options - The options for the visibility event.
     * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
     * If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;
}
/**
 * Defines a UIScrollableCommonEvent which is used to set event to target component.
 *
 * @extends UICommonEvent
 * @interface UIScrollableCommonEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface UIScrollableCommonEvent extends UICommonEvent {
  /**
   * Set or reset the callback which is triggered when the scrolling reaches the start position.
   *
   * @param { VoidCallback | undefined } callback - callback function, triggered when the scrolling reaches
   *     the start position.
   *     <br>Passing undefined will unregister the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnReachStart(callback: VoidCallback | undefined): void;
  /**
   * Set or reset the callback which is triggered when the scrolling reaches the end position.
   *
   * @param { VoidCallback | undefined } callback - callback function, triggered when the
   *     scrolling reaches the end position.
   *     <br>Passing undefined will unregister the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnReachEnd(callback: VoidCallback | undefined): void;
  /**
   * Set or reset the callback which is triggered when the scrolling started.
   *
   * @param { VoidCallback | undefined } callback - callback function, triggered when the scrolling started.
   *     <br>Passing undefined will unregister the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnScrollStart(callback: VoidCallback | undefined): void;
  /**
   * Set or reset the callback which is triggered when the scrolling stopped.
   *
   * @param { VoidCallback | undefined } callback - callback function, triggered when the scrolling stopped.
   *     <br>Passing undefined will unregister the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnScrollStop(callback: VoidCallback | undefined): void;
  /**
   * Set or reset the callback which is triggered when scrolling begin each frame.
   *
   * @param { OnScrollFrameBeginCallback | undefined } callback - callback function, triggered when the
   *     scrolling begin each frame.
   *     <br>Passing undefined will unregister the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnScrollFrameBegin(callback: OnScrollFrameBeginCallback | undefined): void;
}
/**
 * Defines a UIGestureEvent which is used to set different gestures to target component.
 *
 * @interface UIGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UIGestureEvent {
    /**
     * Add a gesture bound to the component.
     *
     * @param { GestureHandler } gesture - gesture indicates the gesture bound to a component.
     * @param { GesturePriority } [priority] - priority indicates the gesture's priority.
     * @param { GestureMask } [mask] - mask indicates the gesture's GestureMask value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addGesture(gesture: GestureHandler, priority?: GesturePriority, mask?: GestureMask): void;
    /**
     * Add a parallel gesture bound to the component.
     *
     * @param { GestureHandler } gesture - gesture indicates the gesture bound to a component.
     * @param { GestureMask } [mask] - mask indicates the gesture's GestureMask value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addParallelGesture(gesture: GestureHandler, mask?: GestureMask): void;
    /**
     * Remove a gesture from a component that has been bound with a specific tag through a modifier.
     *
     * @param { string } tag - tag indicates the gesture's tag.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    removeGestureByTag(tag: string): void;
    /**
     * Clear gestures bound to the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    clearGestures(): void;
}
/**
 * Defines the gesture modifier.
 *
 * @interface GestureModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GestureModifier {
    /**
     * Defines the gesture update function.
     *
     * @param { UIGestureEvent } event
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    applyGesture(event: UIGestureEvent): void;
}
/**
 * Defines the selection options.
 *
 * @interface SelectionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SelectionOptions {
    /**
     * Menu pop-up policy.
     *
     * @type { ?MenuPolicy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    menuPolicy?: MenuPolicy;
}
/**
 * Defines the next focus item.
 *
 * @interface FocusMovement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FocusMovement {
    /**
     * Next focus item's component identifier of forward.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    forward?: string;
    /**
     * Next focus item's component identifier of backward.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backward?: string;
    /**
     * Next focus item's component identifier of up.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    up?: string;
    /**
     * Next focus item's component identifier of down.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    down?: string;
    /**
     * Next focus item's component identifier of left.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    left?: string;
    /**
     * Next focus item's component identifier of right.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    right?: string;
}
/**
 * enum keyboard avoid mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum KeyboardAvoidMode {
    /**
     * Automatically avoids the soft keyboard and compresses the height when reaching the maximum limit.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Does not avoid the soft keyboard.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 1
}
/**
 * 悬停态显示区域类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum HoverModeAreaType {
    /**
     * 上半屏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP_SCREEN = 0,
    /**
     * 下半屏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BOTTOM_SCREEN = 1
}
/**
 * Defines a range of dates.
 *
 * @interface DateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DateRange {
    /**
     * Defines the start date of the date range.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: Date;
    /**
     * Defines the end date of the date range.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: Date;
}
/**
 * Indicates the information when the provider of the embedded UI is terminated.
 *
 * @interface TerminationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TerminationInfo {
    /**
     * Defines the termination code.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    code: int;
    /**
     * Defines the additional termination information.
     *
     * @type { ?Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    want?: Want;
}
/**
 * Defines the format for displaying dates and times.
 *
 * @typedef { intl.DateTimeOptions } DateTimeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DateTimeOptions = intl.DateTimeOptions;

/**
 * Defines a bindable property
 * @interface Bindable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Bindable<T> {
    /**
     * Defines value of the bindable property.
     * @type { T }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly value: T;
    /**
     * Defines the callback of the bindable property which will be invoked when the property is changed.
     * @type { Callback<T> }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly onChange: Callback<T>;
}

/**
 * Options for configuring smart gesture shortcuts.
 *
 * @interface SmartGestureShortcutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SmartGestureShortcutOptions {
    /**
     * Set the response priority.
     *
     * @type { ?GestureShortcut }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    action?: GestureShortcut;

    /**
     * Whether to enable the specific smart gesture shortcuts.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    enabled?: boolean;

    /**
     * Whether to enable the selection state effect of the component's smart gesture.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    selectable?: boolean;
}

/**
 * Create a bindable property instance.
 *
 * @param { T } value - indicates the value of a state property.
 * @param { Callback<T> } onChange - indicates the invoked callback when the property is changed.
 * @returns { Bindable<T> } bindable property instance.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function makeBindable<T>(value: T, onChange: Callback<T>): Bindable<T>;

/**
 * Defines the Two-way binding type of ResourceStr.
 *
 * @typedef { ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type BindableResourceStr = ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string>;

/**
 * Defines the Two-way binding type of ResourceStr[].
 *
 * @typedef { ResourceStr[] | Bindable<ResourceStr[]> | Bindable<Resource[]> | Bindable<string[]> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type BindableResourceStrArray = ResourceStr[] | Bindable<ResourceStr[]> | Bindable<Resource[]> | Bindable<string[]>;

/**
 * Convert to a bindable property.
 *
 * @param { T } value - indicate the value of a state property.
 * @returns { Bindable<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function $$<T>(value: T): Bindable<T>;
/**
 * Apply style function on this CommonMethod.
 *
 * @param { T } this
 * @param { CustomStyles } customStyles
 * @returns { T }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function applyStyles<T extends CommonMethod>(this: T, customStyles: CustomStyles): T;

/**
 * Defines the input event intercept result.
 *
 * @interface InputEventInterceptResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface InputEventInterceptResult {
  /**
   * Event intercept decision.
   * - CONTINUE: Allows the event to continue to be delivered to the UI framework.
   * - BLOCK: Blocks the event from being delivered, the event will not enter the UI framework.
   *
   * @type { InputEventInterceptAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  action: InputEventInterceptAction;
}

/**
 * Defines the input event monitor identifier.
 *
 * Important Notes:
 * - This object is created and returned by the system as a unique identifier for the listener.
 * - The object is an empty object with no accessible members.
 * - Developers cannot actively construct this object, it can only be obtained through the registration interface.
 * - Used for subsequent unregistration to verify identity.
 *
 * @interface InputEventMonitor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface InputEventMonitor {
  // Empty interface, no members
  // Used only as an identifier
}

/**
 * Defines the raw input event wrapper.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare abstract class RawInputEventWrapper {
  /**
   * Checks whether the event is a mouse event.
   *
   * @returns { boolean } - Returns true if the event is a mouse event, otherwise returns false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isMouseEvent(): boolean;

  /**
   * Checks whether the event is a touch event.
   *
   * @returns { boolean } - Returns true if the event is a touch event, otherwise returns false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isTouchEvent(): boolean;

  /**
   * Checks whether the event is a keyboard event.
   *
   * @returns { boolean } - Returns true if the event is a keyboard event, otherwise returns false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isKeyEvent(): boolean;

  /**
   * Attempts to get the mouse event.
   *
   * Returns the event object if it is a mouse event, otherwise returns null.
   *
   * @returns { MouseEvent | null } - The mouse event object or null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  asMouseEvent(): MouseEvent | null;

  /**
   * Attempts to get the touch event.
   *
   * Returns the event object if it is a touch event, otherwise returns null.
   *
   * @returns { TouchEvent | null } - The touch event object or null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  asTouchEvent(): TouchEvent | null;

  /**
   * Attempts to get the keyboard event.
   *
   * Returns the event object if it is a keyboard event, otherwise returns null.
   *
   * @returns { KeyEvent | null } - The keyboard event object or null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  asKeyEvent(): KeyEvent | null;
}

/**
 * Defines the input event listener callback function type.
 *
 * Performance Warning: Do not perform time-consuming operations in the callback, otherwise it may cause
 * the application to freeze.
 *
 * The listener executes synchronously in the UI thread and will directly block the event processing flow.
 * It is recommended to only perform simple judgments and calculations, avoiding:
 * - Synchronous I/O operations
 * - Complex data processing
 * - Network requests
 * - Massive log output
 *
 * @typedef { function }
 * @param { RawInputEventWrapper } event - Input event wrapper
 * @returns { InputEventInterceptResult } - Event intercept result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type InputEventListener = (
  event: RawInputEventWrapper
) => InputEventInterceptResult;

/**
 * 边缘光效动画模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum EdgeLightMode {
  /**
   * 自适应边缘光效动画。
   * 
   * 根据设备运算能力，在低算力设备上关闭，在中高算力设备上开启。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  EDGELIGHT_AUTO = 0,
  /**
   * 开启边缘光效动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  EDGELIGHT_ENABLED = 1,
  /**
   * 关闭边缘光效动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  EDGELIGHT_DISABLED = 2
}

/**
 * Enum for distortion animation mode.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DistortionMode {

  /**
   * Adaptive implementation of edgeLight animation
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISTORTION_AUTO = 0,

  /**
   * Distortion animation is enabled.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISTORTION_ENABLED = 1,

  /**
   * Distortion animation is disabled.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISTORTION_DISABLED = 2,
}
/**
 * Defines the parameters of the edge light effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface EdgeLightParams {
  /**
   * The location of the edge light effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  position: EdgeLightPosition;
 
  /**
   * Projection length of the edge streamer along the flow direction.
   * <br>Negative values are treated as 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  length: Length;
 
  /**
   * The luminous intensity of the Edge Streamer effect.
   * <br>Valid range: [0.0, 1.0].Default value is 1.
   * <br>Value 0.0 means the light effect is completely invisible.
   * <br>Value 1.0 means the light effect is at maximum brightness.
   * <br>Values exceeding 1.0 will be clamped to 1.0.
   * <br>Negative values are treated as 0.0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intensity?: double;
 
  /**
   * The color of the light effect.
   * <br>If not specified, the default color is white (#FFFFFF).
   *
   * @default #FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  color?: ResourceColor;
 
  /**
   * The thickness (width) of the light effect line.
   * <br>Negative values are treated as 0.
   * <br>If not specified, the default value is 0vp.
   *
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  thickness?: Length;
}
 
/**
 * Defines the parameters of the center of gravity.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface GravityCenterOptions {
  /**
   * Specifies whether the current component is the center of gravity.
   * <br>Default value:false.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  gravityCenter?: boolean;
 
  /**
   * Defines the gravitational strength of the attraction/repulsion force at the gravitational center.
   * <br>Default value:0.
   * <br>Negative numbers are repulsion, positive numbers are attractionn.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  gravityIntensity?: double;
}