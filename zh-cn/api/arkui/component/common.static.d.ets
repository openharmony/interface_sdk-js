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
import { Area, ResourceColor, Dimension, ResourceStr, Font, Length, EdgeColors, LocalizedEdgeColors, BorderRadiuses, EdgeWidths, LocalizedEdgeWidths, SizeOptions, Bias, EdgeStyles, Position, LocalizedBorderRadiuses, Margin, ChainWeightOptions, Padding, LocalizedPadding, LocalizedMargin, BorderOptions, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, ConstraintSizeOptions, EdgeWidth, DirectionalEdgesT, VoidCallback, ColorMetrics, AccessibilityActionOptions, ScrollBarMargin, Coordinate2D, AccessibilityCustomAction } from "./units";
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
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    highlightBorder?: boolean;
    /**
     * It is the color of counter when textField hasn't wanted to exceed the maximum character count.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    counterTextColor?: ColorMetrics

    /**
     * It is the color of counter when textField wants to exceed the maximum character count.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    counterTextOverflowColor?: ColorMetrics
}
/**
 * Defines the options of decoration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextDecorationOptions {
    /**
     * The decoration type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: TextDecorationType | undefined;
    /**
     * Sets the color of decoration.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * The style value of decoration.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style?: TextDecorationStyle;
    /**
     * The scale value of decoration thickness.
     *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DividerStyle {
    /**
     * Define the stroke width of the divider
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeWidth: Length | undefined;
    /**
     * Define the color of the divider
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * Define the start margin of the divider
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startMargin?: Length;
    /**
     * Define the end margin of the divider
     *
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
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ReuseIdCallback = () => string;
/**
 * Defining the reusable configuration parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ReuseOptions {
    /**
     * Defining reuseId function. The default reuseId is the custom component name.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reuseId?: ReuseIdCallback;
}
/**
 * Export Context.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Context = OriginalContext;
/**
 * Defines the data type of the interface restriction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Configuration {
    /**
     * Set colorMode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly colorMode: string;
    /**
     * Set fontScale.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly fontScale: double;
}
/**
 * 矩形区域类型。
 *
 * > **说明：**
 * >
 * > - x和y可以设置正负值百分比。当x设置为'100%'时表示热区往右偏移组件本身宽度大小，当x设置为'-100%'时表示热区往左偏移组件本身宽度大小。当y设置为'100%'时表示热区往下偏移组件本身高度大小，当y设置为'-100%
 * > '时表示热区往上偏移组件本身高度大小。
 * >
 * > - width和height设置百分比时，只能设置正值百分比。width：'100%'表示热区宽度设置为该组件本身的宽度。比如组件本身宽度是100vp，那么'100%'表示热区宽度也为100vp。height：'100%'表示热区
 * > 高度设置为该组件本身的高度。
 * >
 * > - 百分比相对于组件自身宽高进行计算。
 * >
 * > - 当父组件设置[clip]{@link CommonMethod.clip}(true)时，子组件的响应会受到父组件触摸热区的影响，不在父组件触摸热区内的子组件无法响应手势和事件。
 * >
 * > - width和height不支持calc()的动态计算。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Rectangle {
    /**
     * 触摸点相对于组件左上角的x轴坐标。
     *
     * 默认值：0vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: Length;
    /**
     * 触摸点相对于组件左上角的y轴坐标。
     *
     * 默认值：0vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: Length;
    /**
     * 触摸热区的宽度。
     * 
     * 默认值：'100%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length;
    /**
     * 触摸热区的高度。
     * 
     * 默认值：'100%'
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: Length;
}
/**
 * 由输入工具类型、触摸位置和大小组成的触摸热区。
 * 
 * > **说明：**
 * >
 * > - 当父组件设置[clip]{@link CommonMethod.clip}为true时，子组件的响应会受到父组件触摸热区的影响，不在父组件触摸热区内的子组件无法响应手势和事件。
 * >
 * > - 如果触摸热区未配置输入工具类型，触摸位置和大小均采用默认值。
 * >
 * > - x和y的计算结果为正值时，分别代表向右偏移和向下偏移；当计算结果为负值时，分别代表向左偏移和向上偏移。
 * >
 * > - width和height采用string类型时，string需采用小写字符否则不生效，支持calc()的动态计算。指定calc()的入参字符串格式为'宽高缩放比例 ± 宽高增量'，宽高缩放比例为百分比，宽高增量单位为px或
 * > vp。例如'calc(80% + 10vp)'中，80%为宽高缩放比例、10vp为宽高增量。width和height采用LengthMetrics类型且单位为percent时，相对于组件自身宽高进行计算，percent(1)代表1
 * > 00%。当计算结果为负值时，采用默认值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ResponseRegion {
  /**
   * 触摸热区适用的输入工具类型。
   *
   * 默认值：ResponseRegionSupportedTool.ALL
   *
   * @default ResponseRegionSupportedTool.ALL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  tool?: ResponseRegionSupportedTool;
  /**
   * 触摸点相对于组件左上角的x轴坐标。
   *
   * 默认值：LengthMetrics.vp(0)
   *
   * @default LengthMetrics.vp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  x?: LengthMetrics;

  /**
   * 触摸点相对于组件左上角的y轴坐标。
   *
   * 默认值：LengthMetrics.vp(0)
   *
   * @default LengthMetrics.vp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  y?: LengthMetrics;

  /**
   * 触摸热区的宽度。
   *
   * 默认值：LengthMetrics.percent(1)
   *
   * @default LengthMetrics.percent(1)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width?: LengthMetrics | string;

  /**
   * 触摸热区的高度。
   *
   * 默认值：LengthMetrics.percent(1)
   *
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
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilitySamePageMode {
    /**
     * the first page and root page event is not send.but if application load new page whith navigation,the page event 
     * will be sent.
     * this mode is to solve skipping focus
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SEMI_SILENT = 0,
    /**
     * the all page event is not send
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FULL_SILENT = 1
}
/**
 * Enum for accessibility component type
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilityRoleType {
    /**
     * ActionSheet component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ACTION_SHEET = 0,
    /**
     * AlertDialog component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ALERT_DIALOG = 1,
    /**
     * AlphabetIndexer component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    INDEXER_COMPONENT = 2,
    /**
     * badge component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BADGE_COMPONENT = 3,
    /**
     * blank component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BLANK = 4,
    /**
     * button component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BUTTON = 5,
    /**
     * button component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BACK_BUTTON = 6,
    /**
     * sheet drag bar component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SHEET_DRAG_BAR = 7,
    /**
     * calendar picker component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CALENDAR_PICKER = 8,
    /**
     * calendar component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CALENDAR = 9,
    /**
     * canvas component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CANVAS = 10,
    /**
     * canvas gradient component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CANVAS_GRADIENT = 11,
    /**
     * canvas pattern component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CANVAS_PATTERN = 12,
    /**
     * checkbox component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CHECKBOX = 13,
    /**
     * checkbox group component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CHECKBOX_GROUP = 14,
    /**
     * circle component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CIRCLE = 15,
    /**
     * column split component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COLUMN_SPLIT = 16,
    /**
     * column component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COLUMN = 17,
    /**
     * canvas rendering context 2d component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CANVAS_RENDERING_CONTEXT_2D = 18,
    /**
     * chart component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CHART = 19,
    /**
     * counter component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COUNTER = 20,
    /**
     * counter modal component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CONTAINER_MODAL = 21,
    /**
     * data panel component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DATA_PANEL = 22,
    /**
     * data picker component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DATE_PICKER = 23,
    /**
     * dialog component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DIALOG = 24,
    /**
     * divider component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DIVIDER = 25,
    /**
     * drag bar component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DRAG_BAR = 26,
    /**
     * effect component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    EFFECT_COMPONENT = 27,
    /**
     * ellipse component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ELLIPSE = 28,
    /**
     * flex component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FLEX = 29,
    /**
     * flow item component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FLOW_ITEM = 30,
    /**
     * form component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FORM_COMPONENT = 31,
    /**
     * form link component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FORM_LINK = 32,
    /**
     * gauge component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    GAUGE = 33,
    /**
     * grid component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    GRID = 34,
    /**
     * grid col component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    GRID_COL = 35,
    /**
     * grid container component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    GRID_CONTAINER = 36,
    /**
     * grid item component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    GRID_ITEM = 37,
    /**
     * grid row component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    GRID_ROW = 38,
    /**
     * hyperlink component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    HYPERLINK = 39,
    /**
     * image component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IMAGE = 40,
    /**
     * image animator component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IMAGE_ANIMATOR = 41,
    /**
     * image bitmap component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IMAGE_BITMAP = 42,
    /**
     * image data component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IMAGE_DATA = 43,
    /**
     * image span component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IMAGE_SPAN = 44,
    /**
     * label component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LABEL = 45,
    /**
     * line component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LINE = 46,
    /**
     * list component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LIST = 47,
    /**
     * list item component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LIST_ITEM = 48,
    /**
     * list item group component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LIST_ITEM_GROUP = 49,
    /**
     * loading progress component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LOADING_PROGRESS = 50,
    /**
     * marquee component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MARQUEE = 51,
    /**
     * matrix2d component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MATRIX2D = 52,
    /**
     * menu component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MENU = 53,
    /**
     * menu item component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MENU_ITEM = 54,
    /**
     * menu item group component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MENU_ITEM_GROUP = 55,
    /**
     * navdestination component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NAV_DESTINATION = 56,
    /**
     * navrouter component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NAV_ROUTER = 57,
    /**
     * navigation component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NAVIGATION = 58,
    /**
     * navigation bar component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NAVIGATION_BAR = 59,
    /**
     * navigation menu component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NAVIGATION_MENU = 60,
    /**
     * navigator component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NAVIGATOR = 61,
    /**
     * offscreen canvas component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OFFSCREEN_CANVAS = 62,
    /**
     * offscreen canvas rendering context2d component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OFFSCREEN_CANVAS_RENDERING_CONTEXT2D = 63,
    /**
     * option component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OPTION = 64,
    /**
     * panel component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PANEL = 65,
    /**
     * paper page component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PAPER_PAGE = 66,
    /**
     * path component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PATH = 67,
    /**
     * path 2d component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PATH2D = 68,
    /**
     * pattern lock component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PATTERN_LOCK = 69,
    /**
     * picker component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PICKER = 70,
    /**
     * picker view component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PICKER_VIEW = 71,
    /**
     * plugin component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PLUGIN_COMPONENT = 72,
    /**
     * polygon component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    POLYGON = 73,
    /**
     * polyline component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    POLYLINE = 74,
    /**
     * pop up component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    POPUP = 75,
    /**
     * progress component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PROGRESS = 76,
    /**
     * qr code component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    QRCODE = 77,
    /**
     * radio component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RADIO = 78,
    /**
     * rating component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RATING = 79,
    /**
     * rect component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RECT = 80,
    /**
     * refresh component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    REFRESH = 81,
    /**
     * relative container component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RELATIVE_CONTAINER = 82,
    /**
     * remote window component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    REMOTE_WINDOW = 83,
    /**
     * rich editor component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RICH_EDITOR = 84,
    /**
     * rich text component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RICH_TEXT = 85,
    /**
     * rolepager component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ROLE_PAGER = 86,
    /**
     * row component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ROW = 87,
    /**
     * row split component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ROW_SPLIT = 88,
    /**
     * scroll component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SCROLL = 89,
    /**
     * scroll bar component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SCROLL_BAR = 90,
    /**
     * search component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SEARCH = 91,
    /**
     * search field component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SEARCH_FIELD = 92,
    /**
     * select component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SELECT = 93,
    /**
     * shape component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SHAPE = 94,
    /**
     * sidebar container component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SIDEBAR_CONTAINER = 95,
    /**
     * slider component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SLIDER = 96,
    /**
     * span component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SPAN = 97,
    /**
     * stack component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    STACK = 98,
    /**
     * stepper component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    STEPPER = 99,
    /**
     * stepper item component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    STEPPER_ITEM = 100,
    /**
     * swiper component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SWIPER = 101,
    /**
     * swiper indicator component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SWIPER_INDICATOR = 102,
    /**
     * switch component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SWITCH = 103,
    /**
     * symbol glyph component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SYMBOL_GLYPH = 104,
    /**
     * tab content component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TAB_CONTENT = 105,
    /**
     * tab bar component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TAB_BAR = 106,
    /**
     * tabs component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TABS = 107,
    /**
     * text component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TEXT = 108,
    /**
     * text clock component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TEXT_CLOCK = 109,
    /**
     * text entry component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TEXT_ENTRY = 110,
    /**
     * text input component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TEXT_INPUT = 111,
    /**
     * text picker component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TEXT_PICKER = 112,
    /**
     * text timer component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TEXT_TIMER = 113,
    /**
     * text area component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TEXT_AREA = 114,
    /**
     * text field component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TEXT_FIELD = 115,
    /**
     * time picker component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TIME_PICKER = 116,
    /**
     * title bar component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TITLE_BAR = 117,
    /**
     * toggler component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOGGLER = 118,
    /**
     * uiextensioncomponent component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    UI_EXTENSION_COMPONENT = 119,
    /**
     * video component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    VIDEO = 120,
    /**
     * water flow component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    WATER_FLOW = 121,
    /**
     * web component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    WEB = 122,
    /**
     * xcomponent component type
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    XCOMPONENT = 123,
    /**
     * none component type: screen reader will not broadcast the component type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ROLE_NONE = 124
}
/**
 * Defines the callback type used in accessibility focus. The value of isFocus indicates whether
 * the current component is focused
 *
 * @param {boolean} isFocus - if component is focused,isFocus will be true. else isFocus is false.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type AccessibilityFocusCallback = (isFocus: boolean) => void;

/**
 * Enum for accessibility action type
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilityAction {
  /**
   * undefined action type
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UNDEFINED_ACTION = 0,
  /**
   * accessibility click action
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ACCESSIBILITY_CLICK = 1,
}

/**
 * Enum for the result of accessibility action intercept function
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilityActionInterceptResult {
  /**
   * intercept the accessibility action
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ACTION_INTERCEPT = 0,
  /**
   * the accessibility action can be continued
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ACTION_CONTINUE = 1,
  /**
   * the accessibility action need to bubble up for execution
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ACTION_RISE = 2,
}

/**
 * Defines the callback type used in accessibility action intercept.
 * The value of action indicates the accessibility action type.
 *
 * @param { AccessibilityAction } action - the enum of accessibility action type.
 * @returns { AccessibilityActionInterceptResult } the result of continuing to execute the action or interrupting it or
 *     bubbling up
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
 * 事件派发策略。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TouchTestStrategy {
    /**
     * 自定义分发不产生影响，系统按当前节点命中状态分发事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 应用指定分发事件到某个子节点，其他兄弟节点是否分发事件交由系统决定。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FORWARD_COMPETITION = 1,
    /**
     * 应用指定分发事件到某个子节点，系统不再分发事件到其他兄弟节点。
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RadialGradientOptions {
    /**
     * Defines center point for radial gradient.
     *
     * Anonymous Object Rectification.
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius: Length;
    /**
     * Defines color description for gradients.
     *
     * Anonymous Object Rectification.
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface VerticalAlignParam {
    /**
     * Specifies the anchor component
     *
     * Anonymous Object Rectification
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * Sets the vertical alignment relative to the anchor component.
     *
     * Anonymous Object Rectification
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: VerticalAlign;
}
/**
 * Defines the horizontal align rule options of relative container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface HorizontalAlignParam {

    /**
     * Specifies the anchor component
     *
     * Anonymous Object Rectification
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * Sets the horizontal alignment relative to the anchor component.
     *
     * Anonymous Object Rectification
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: HorizontalAlign;
}
/**
 * Defines the align rule options of relative container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AlignRuleOption {
    /**
     * The param of left align.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    left?: HorizontalAlignParam;
    /**
     * The param of right align.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    right?: HorizontalAlignParam;
    /**
     * The param of middle align.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    middle?: HorizontalAlignParam;
    /**
     * The param of top align.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    top?: VerticalAlignParam;
    /**
     * The param of bottom align.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bottom?: VerticalAlignParam;
    /**
     * The param of center align.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    center?: VerticalAlignParam;
    /**
     * Defines the bias ratio in horizontal and vertical direction.
     *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedHorizontalAlignParam {
    /**
     * ID of the component that serves as the anchor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * Horizontal alignment mode relative to the anchor component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: HorizontalAlign;
}
/**
 * Defines the localized vertical align param of relative container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedVerticalAlignParam {
    /**
     * ID of the component that serves as the anchor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchor: string;
    /**
     * Vertical alignment mode relative to the anchor component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align: VerticalAlign;
}
/**
 * Defines the Localized align rule options of relative container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedAlignRuleOptions {
    /**
     * Left alignment with left-to-right scripts and right alignment with right-to-left scripts in the horizontal
     * direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: LocalizedHorizontalAlignParam;
    /**
     * Right alignment with left-to-right scripts and left alignment with right-to-left scripts in the horizontal
     * direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: LocalizedHorizontalAlignParam;
    /**
     * Center alignment in the horizontal direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    middle?: LocalizedHorizontalAlignParam;
    /**
     * Top alignment in the vertical direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    top?: LocalizedVerticalAlignParam;
    /**
     * Bottom alignment in the vertical direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    bottom?: LocalizedVerticalAlignParam;
    /**
     * Center alignment in the vertical direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    center?: LocalizedVerticalAlignParam;
    /**
     * Offset of the component under the anchor constraints.
     * <br>The value is the ratio of the distance to the left/upper anchor to the total distance between anchors.
     *
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
    BOTTOM = 1,
    /**
     * 窗口的起始边缘，LTR时为左边缘，RTL时为右边缘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START = 2,
    /**
     * 窗口的终止边缘，LTR时为右边缘，RTL时为左边缘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END = 3
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
      *
      * @param { DrawContext } drawContext - The drawContext used to draw.
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @since 23 static
      */
     drawFront(drawContext: DrawContext): void;

    /**
     * Draws content in the overlay layer after the associated Node and all its children have been drawn.
     *
     * Custom drawing consists of five layers: Behind, Content, Front, Foreground, and Overlay.
     * 
     * - The Foreground and Overlay layers are drawn after child nodes.
     * - The Overlay layer differs from Foreground in that it can draw outside the bounds of the component.
     *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ItemDragInfo {
    /**
     * Obtains the X coordinate of the drag window, in vp.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * Obtains the Y coordinate of the drag window, in vp.
     *
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
 * 定义拖拽手势触发前的各阶段状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PreDragStatus {
    /**
     * 拖拽手势启动阶段。(按下50ms时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ACTION_DETECTING_STATUS = 0,
    /**
     * 拖拽准备完成，可发起拖拽阶段。(按下500ms时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    READY_TO_TRIGGER_DRAG_ACTION = 1,
    /**
     * 拖拽浮起动效发起阶段。(按下800ms时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LIFT_STARTED = 2,
    /**
     * 拖拽浮起动效结束阶段。(浮起动效完全结束时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LIFT_FINISHED = 3,
    /**
     * 拖拽落回动效发起阶段。(落回动效发起时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LANDING_STARTED = 4,
    /**
     * 拖拽落回动效结束阶段。(落回动效结束时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_LANDING_FINISHED = 5,
    /**
     * 拖拽浮起落位动效中断。(已满足READY_TO_TRIGGER_DRAG_ACTION状态后，未达到动效阶段，手指抬手时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ACTION_CANCELED_BEFORE_DRAG = 6,
    /**
     * 拖拽准备完成，可发起拖拽阶段。(按下350ms时触发)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREPARING_FOR_DRAG_DETECTION = 7
}
/**
 * 定义拖拽过程中拖拽项的相关信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragItemInfo {
    /**
     * 设置拖拽过程中显示的图片。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pixelMap?: PixelMap;
    /**
     * 拖拽过程中显示自定义组件，如果设置了pixelMap，则忽略此值。
     * 
     * **说明：** 
     * 
     * 不支持全局builder。如果builder中使用了[Image]{@link ./common}组件，应尽量开启同步加载，即配置Image的
     * [syncLoad]{@link ImageAttribute#syncLoad}为true。该builder只用于生成当次拖拽
     * 中显示的图片，builder的修改不会同步到当前正在拖拽的图片，对builder的修改需要在下一次拖拽时生效。
     * 
     * builder传参时，建议传参格式为builder: ()=>{this.customBuilder()}，用以保证this指向的正确性。具体请参考
     * [将@Builder装饰的函数当作CustomBuilder类型使用](docroot://ui/state-management/arkts-builder.md#将builder装饰的函数当作custombuilder类型使用)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    builder?: CustomBuilder;
    /**
     * 拖拽项的附加信息，用于描述拖拽项。
     *
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
 * 焦点控制模块。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare namespace focusControl {
    /**
     * 方法语句中可使用的全局接口，调用此接口可以主动让焦点在下一帧渲染时转移至参数指定的组件上。
     * 
     * 如果需要指定组件立刻获焦，推荐使用FocusController中的焦点同步转移接口
     * [requestFocus]{@link @ohos.arkui.UIContext:FocusController#requestFocus}。
     *
     * @param { string } value - 目标组件使用接口key(value: string)或id(value: string)绑定的字符串。
     * @returns { boolean } 返回值表示是否成功给目标组件申请到焦点。若参数指向的目标组件存在且已挂载组件树，并具备获焦能力，则返回true，否则返回false。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    function requestFocus(value: string): boolean;
}
/**
 * 光标样式。
 * 
 * > **说明：**
 * >
 * > 直接使用cursorControl可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用getUIContext()获取
 * > [UIContext]{@link @ohos.arkui.UIContext}实例，并使用
 * > [getCursorController]{@link @ohos.arkui.UIContext:UIContext.getCursorController}获取绑定实例的cursorControl。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PointerStyle = pointer.PointerStyle;
/**
 * 控制鼠标光标的显示样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare namespace cursorControl {
    /**
     * 方法语句中可使用的全局接口，调用该接口可更改当前的鼠标光标样式。
     *
     * @param { PointerStyle } value - 设置的鼠标样式。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    function setCursor(value: PointerStyle): void;
    /**
     * 方法语句中可使用的全局接口，调用此接口可将鼠标光标恢复成默认箭头样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    function restoreDefault(): void;
}
/**
 * [BaseEvent]{@link BaseEvent}中参数target的类型。
 *
 * 触发事件的元素对象的显示区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EventTarget {
    /**
     * 目标元素的区域信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    area: Area;
    /**
     * 开发者设置的节点[id]{@link CommonMethod.id}。默认值：undefined
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id?: string;
}
/**
 * 定义输入源对应的设备类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SourceType {
    /**
     * 未知输入源。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Unknown = 0,
    /**
     * 鼠标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Mouse,
    /**
     * 触摸屏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TouchScreen,
    /**
     * 按键。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    KEY = 4,
    /**
     * 手柄。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    JOYSTICK = 5
}
/**
 * 定义输入源对应的工具类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SourceTool {
    /**
     * 未知输入源。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Unknown = 0,
    /**
     * 手指输入。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Finger = 1,
    /**
     * 手写笔输入。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Pen = 2,
    /**
     * 鼠标输入。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MOUSE = 7,
    /**
     * 触控板输入。触控板单指输入被视为鼠标输入操作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOUCHPAD = 9,
    /**
     * 手柄输入。
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
 *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PickerTextStyle {
    /**
     * Font color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * Text style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    font?: Font;
}
/**
 * Provide an interface for the button style of picker
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PickerDialogButtonStyle {
    /**
     * Describes the button style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: ButtonType;
    /**
     * Describes the button style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style?: ButtonStyleMode;
    /**
     * Describes the button role.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    role?: ButtonRole;
    /**
     * Describes the button text size.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontSize?: Length;
    /**
     * Describes the button text color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontColor?: ResourceColor;
    /**
     * Describes the button font weight.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontWeight?: FontWeight | int | string;
    /**
     * Describes the button font style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontStyle?: FontStyle;
    /**
     * Describes the button font family.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontFamily?: Resource | string;
    /**
     * Describes the button background color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * Describes the button border radius.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderRadius?: Length | BorderRadiuses;
    /**
     * Define whether the button default to responding to the Enter key
     *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MultiShadowOptions {
    /**
     * Shadow blur radius.
     * Unit: vp.
     * 
     * <p>**NOTE**:
     * <br>A value less than or equal to 0 is handled as the default value.
     * </p>
     *
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
 * Define the edges for expanding the safe area in layout.
 *
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
    LARGE = 1,
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
 * @param { Array<string> } keys - Indicate the modifier keys to query.
 * @returns { boolean } - the query result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ModifierKeyStateGetter = (keys: Array<string>) => boolean;
/**
 * 基础事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BaseEvent {
    /**
     * 触发手势事件的元素对象。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    target: EventTarget;
    /**
     * 事件时间戳，触发事件时距离系统启动的时间间隔。
     *
     * 单位：ns
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
    /**
     * 事件输入设备的类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    source: SourceType;
    /**
     * 水平轴值。
     * 
     * 默认值：0
     * 
     * **说明：**
     * 
     * 当前仅在鼠标滚轮或触控板双指滑动触发的Pan手势，或使用Ctrl+鼠标滚轮触发的Pinch手势中可以获取。
     * 
     * 对于Shift+鼠标滚轮触发的横向滚动场景，axisHorizontal为0，滚动值体现在axisVertical中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisHorizontal?: double;
    /**
     * 垂直轴值。
     * 
     * 默认值：0
     * 
     * **说明：**
     * 
     * 当前仅在鼠标滚轮或触控板双指滑动触发的Pan手势，或使用Ctrl+鼠标滚轮触发的Pinch手势中可以获取。
     * 
     * 对于Shift+鼠标滚轮触发的横向滚动场景，滚动值体现在axisVertical中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisVertical?: double;
    /**
     * 按压的压力大小。
     * 
     * 默认值：0
     * 
     * 取值范围：[0,1]，典型值0.913168，压感大小与数值正相关。在部分设备中，由于设备的硬件参数配置不同，可能会返回大于1的值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressure: double;
    /**
     * 手写笔在设备平面上的投影与设备平面X轴的夹角。
     * 
     * 单位：deg 
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tiltX: double;
    /**
     * 手写笔在设备平面上的投影与设备平面Y轴的夹角。
     * 
     * 单位：deg 
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tiltY: double;
    /**
     * 手写笔与设备平面的夹角。
     *
     * 单位：deg
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rollAngle?: double;
    /**
     * 事件输入源的类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    sourceTool: SourceTool;
    /**
     * 获取功能键按压状态。支持功能键'Ctrl'\|'Alt'\|'Shift'。
     *
     * **说明：**
     *
     * 此接口不支持在手写笔场景下使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getModifierKeyState?: ModifierKeyStateGetter;
    /**
     * 触发当前事件的输入设备ID。
     *
     * 默认值：0
     *
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deviceId?: int;
    /**
     * 事件发生的屏幕ID。
     *
     * 默认值：0
     *
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetDisplayId?: int;
    /**
     * 双指缩放比例。
     * 
     * 默认值：0
     * 
     * **说明：**
     * 
     * 仅在触控板上通过双指缩放操作触发的Pinch手势，或在轴事件中，可以获取该值；在其他场景下，获取到的将是默认值。
     * 
     * 缩放比例是指在双指缩放事件触发过程中，双指当前距离与最初按下时距离的比值。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisPinch?: double;
}
/**
 * Border image option
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BorderImageOption {
    /**
     * Slice width of the upper left corner, upper right corner, lower left corner,
     * and lower right corner of the border image.
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    slice?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Repeat mode of the source image's slices on the border.
     *
     * @default RepeatMode.Stretch
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeat?: RepeatMode;
    /**
     * Border image source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    source?: string | Resource | LinearGradientOptions;
    /**
     * Width of the border image.
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Amount by which the border image is extended beyond the border box.
     *
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly matchParent: LayoutPolicy;

    /**
     * The component fills its content which means its size is as large as its children but it is constained by its
     * parent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly wrapContent: LayoutPolicy;

    /**
     * The component fills its content which means its size is as large as its children.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly fixAtIdealSize: LayoutPolicy;
}
/**
 * 继承于[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ClickEvent extends BaseEvent {
    /**
     * 点击位置在当前应用屏幕坐标系中的X坐标。
     *
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * 点击位置在当前应用屏幕坐标系中的Y坐标。
     *
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * 点击位置在当前应用窗口坐标系中的X坐标。onClick的distanceThreshold设置后，点击位置为抬手点。
     *
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * 点击位置在当前应用窗口坐标系中的Y坐标。onClick的distanceThreshold设置后，点击位置为抬手点。
     *
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 点击位置在被点击元素为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。onClick的
     * [distanceThreshold]{@link CommonMethod.default onClick(event: Callback<ClickEvent> | undefined, distanceThreshold: double | undefined)}
     * 设置后，点击位置为抬手点。触发事件的是键盘或手柄时，点击位置为被点击元素的中心点。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 点击位置在被点击元素为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。onClick的distanceThreshold设置后，点击位置为抬手点。触发事件的是键盘或手
     * 柄时，点击位置为被点击元素的中心点。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 表示事件是由左手点击还是右手点击触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hand?: InteractionHand;
    /**
     * 阻止默认事件。
     * 
     * > **说明：**
     * >
     * > 该接口仅支持部分组件使用，当前支持组件：[RichEditor]{@link ./common}、[Hyperlink]{@link ./common}，不支持的组件在使用时会抛出异常。暂不支持异步调用和提供
     * > Modifier接口。
     *
     * @throws { BusinessError } 100017 - Component does not support prevent function.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preventDefault(): void;

    /**
     * 点击位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * 点击位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
    /**
     * Gets the coordinates of the top-left corner of the current component based on its real-time position.
     *
     * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
     *     real-time position.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default getCurrentLocalPosition(): Coordinate2D;
}
/**
 * 继承于[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface HoverEvent extends BaseEvent {
    /**
     * 鼠标光标或手写笔位置在当前组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：[0, +∞)
     * 
     * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double;
    /**
     * 鼠标光标或手写笔位置在当前组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：[0, +∞)
     * 
     * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: double;
    /**
     * 鼠标光标或手写笔位置在当前应用窗口坐标系中的X坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：[0, +∞)
     * 
     * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX?: double;
    /**
     * 鼠标光标或手写笔位置在当前应用窗口坐标系中的Y坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：[0, +∞)
     * 
     * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY?: double;
    /**
     * 鼠标光标或手写笔位置在当前应用屏幕坐标系中的X坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：[0, +∞)
     * 
     * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX?: double;
    /**
     * 鼠标光标或手写笔位置在当前应用屏幕坐标系中的Y坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：[0, +∞)
     * 
     * **原子化服务API：**  从API version 15开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY?: double;
    /**
     * 阻塞事件冒泡。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;

    /**
     * 鼠标光标或手写笔位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * 鼠标光标或手写笔位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
}
/**
 * 继承于[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MouseEvent extends BaseEvent {
    /**
     * 鼠标按键。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    button: MouseButton;
    /**
     * 鼠标动作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: MouseAction;
    /**
     * 鼠标位置在当前应用屏幕坐标系中的X坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * 鼠标位置在当前应用屏幕坐标系中的Y坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * 鼠标位置在当前应用窗口坐标系中的X坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * 鼠标位置在当前应用窗口坐标系中的Y坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 鼠标位置在事件响应组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 鼠标位置在事件响应组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
    /**
     * 鼠标设备在二维平面X轴的移动增量。其数值为鼠标硬件的原始移动数据，使用物理世界中鼠标移动的距离单位进行表示。上报数值由硬件本身决定，并非屏幕的物理/逻辑像素。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rawDeltaX?: double;
    /**
     * 鼠标设备在二维平面Y轴的移动增量。其数值为鼠标硬件的原始移动数据，使用物理世界中鼠标移动的距离单位进行表示。上报数值由硬件本身决定，并非屏幕的物理/逻辑像素。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rawDeltaY?: double;
    /**
     * 当前按下的鼠标按键集合。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressedButtons?: MouseButton[];

    /**
     * 鼠标位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * 鼠标位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;

    /**
     * 用于事件处理的唯一标识。
     * 
     * 取值范围：[0, +∞)
     * 
     * **说明：** 在使用[postInputEventWithStrategy]{@link ../BuilderNode:BuilderNode#postInputEventWithStrategy}接口分发事件时会使用该字
     * 段，事件每分发一次字段会增加100000。
     * 
     * 多次使用相同的eventHandleId进行事件分发将导致事件响应异常。仅在构造事件的时候需要对此字段赋值，其余情况开发者无需处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    eventHandleId?: int;
    /**
     * Gets the coordinates of the top-left corner of the current component based on its real-time position.
     *
     * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
     *     real-time position.
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
 * 鼠标事件历史点信息。
 * 
 * 历史点按时间顺序排列，获取到的第一个历史点是最早发生的事件的信息，最后一个是最新发生事件的信息。历史点的数量取决于系统事件队列的配置和硬件性能。历史点主要用于如下场景：
 * 
 * 1. 平滑绘制：使用历史点可以实现更平滑的绘制效果，特别是在鼠标快速移动时。
 *  
 * 2. 手势识别：通过分析历史点的轨迹，可以识别各种鼠标手势。
 *  
 * 3. 性能优化：在一个事件回调中处理多个历史点，减少事件处理频率，提升性能。
 *  
 * 4. 轨迹分析：分析鼠标移动轨迹，用于绘图应用或手势控制。
 * 5. 数据分析：历史点中的timestamp可用于计算鼠标移动速度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface MouseHistoricalPoint {
  /**
   * 鼠标指针相对于被点击组件左上角的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  x: double;
  
  /**
   * 鼠标指针相对于被点击组件左上角的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  y: double;
  
  /**
   * 鼠标指针相对于整个屏幕左上角的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayX: double;
  
  /**
   * 鼠标指针相对于整个屏幕左上角的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayY: double;
  
  /**
   * 鼠标指针相对于应用窗口左上角的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  windowX: double;
  
  /**
   * 鼠标指针相对于应用窗口左上角的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  windowY: double;

  /**
   * 鼠标位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  globalDisplayX: double;

  /**
   * 鼠标位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  globalDisplayY: double;
  
  /**
   * 鼠标事件的时间戳。
   * 
   * 单位：ns
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  timestamp: long;
}
/**
 * The accessibility hover action triggers this method invocation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AccessibilityHoverEvent extends BaseEvent {
    /**
     * Type of the accessibility hover event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: AccessibilityHoverType;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the event hit element.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the event hit element.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the device screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the device screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the current window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the current window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * X coordinate of the point relative to the global display.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * Y coordinate of the point relative to the global display.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
}
/**
 * 触摸事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TouchObject {
    /**
     * 触摸事件的类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: TouchType;
    /**
     * 手指唯一标识符。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: int;
    /**
     * 触摸点在当前应用屏幕坐标系中的X坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * 触摸点在当前应用屏幕坐标系中的Y坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * 触摸点在当前应用窗口坐标系中的X坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * 触摸点在当前应用窗口坐标系中的Y坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 触摸点在事件响应组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 触摸点在事件响应组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 表示事件是由左手点击还是右手点击触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hand?: InteractionHand;
    /**
     * 当前手指按下的时间。
     * 
     * 单位：ns
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressedTime?: long;
    /**
     * 当前手指按压的压力值。
     * 
     * 取值范围：[0,65535)，压力越大，值越大。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressure?: double;
    /**
     * 当前手指按压区域的宽度。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: double;
    /**
     * 当前手指按压区域的高度。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: double;

    /**
     * 触摸点在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * 触摸点在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
    /**
     * Gets the coordinates of the top-left corner of the current component based on its real-time position.
     *
     * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
     *     real-time position.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default getCurrentLocalPosition(): Coordinate2D;
}
/**
 * 历史点信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface HistoricalPoint {
    /**
     * 历史点对应触摸事件的基础信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    touchObject: TouchObject;
    /**
     * 历史点对应触摸事件中手指与屏幕的触摸区域大小。
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size: int;
    /**
     * 历史点对应触摸事件的压力大小。
     * 
     * 默认值：0
     * 
     * 取值范围：[0,65535)，压力越大，值越大。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    force: double;
    /**
     * 历史点对应触摸事件的时间戳，表示触发事件时距离系统启动的时间间隔。
     * 
     * 单位：ns
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
}
/**
 * 继承于[BaseEvent]{@link BaseEvent}。在非事件注入场景下，changedTouches是按屏幕刷新率重采样的点，而touches是按器件刷新率上报的点，因此changedTouches与touches的数据可
 * 能不同。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TouchEvent extends BaseEvent {
    /**
     * 触摸事件的类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: TouchType;
    /**
     * 全部屏幕触点（多指）的信息，每个元素代表一个触点。在使用该属性时，需要校验是否为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    touches: TouchObject[];
    /**
     * 发生变化而产生事件的手指信息。在使用该属性时，需要校验是否为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    changedTouches: TouchObject[];
    /**
     * 阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
    /**
     * 获取当前帧的所有历史点。不同设备每帧的触摸事件频率不同，且该接口仅能在[TouchEvent]{@link TouchEvent}中调用，用于获取触发[onTouch]{@link CommonMethod.onTouch}时
     * 当前帧历史点的相关信息。[onTouch]{@link CommonMethod.onTouch}一帧通常只会调用一次，如果当前帧收到的[TouchEvent]{@link TouchEvent}数目大于1，会将该帧最后一个点
     * 通过[onTouch]{@link CommonMethod.onTouch}返回，其余点作为历史点。如果多指在同一帧上报事件，可能触发多次onTouch。
     *
     * @returns { Array<HistoricalPoint> | undefined } 由历史点组成的数组。如果内部运行时环境异常，可能返回undefined。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getHistoricalPoints(): Array<HistoricalPoint> | undefined;
    /**
     * 阻止默认事件。
     * 
     * > **说明：**
     * >
     * > 该接口仅支持部分组件使用，当前支持组件：[Hyperlink]{@link ./common}，不支持的组件在使用时会抛出异常。暂不支持异步调用和提供Modifier接口。
     *
     * @throws { BusinessError } 100017 - Component does not support prevent function.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preventDefault(): void;

    /**
     * 用于事件处理的唯一标识。
     * 
     * 取值范围：[0, +∞)
     * 
     * **说明：** 在使用[postInputEventWithStrategy]{@link ../BuilderNode:BuilderNode#postInputEventWithStrategy}接口分发事件时会使用该字
     * 段，事件每分发一次字段会增加100000。
     * 
     * 多次使用相同的eventHandleId进行事件分发将导致事件响应异常。仅在构造事件的时候需要对此字段赋值，其余情况开发者无需处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    eventHandleId?: int;
}
/**
 * 轴事件的对象说明，继承于[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AxisEvent extends BaseEvent {
    /**
     * 轴事件的动作类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: AxisAction;
    /**
     * 鼠标光标在当前应用屏幕坐标系中的X坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * 鼠标光标在当前应用屏幕坐标系中的Y坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * 鼠标光标在当前应用窗口坐标系中的X坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * 鼠标光标在当前应用窗口坐标系中的Y坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 鼠标光标在被点击元素为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 鼠标光标在被点击元素为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 鼠标轴滚动步长配置。
     * 
     * **说明：** 仅支持鼠标滚轮，取值范围：[0~65535]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollStep?: int;
    /**
     * 用于事件处理的唯一标识。
     * 
     * 取值范围：[0, +∞)
     * 
     * **说明：** 在使用[postInputEventWithStrategy]{@link ../BuilderNode:BuilderNode#postInputEventWithStrategy}接口分发事件时会使用该字
     * 段，事件每分发一次字段会增加100000。
     * 
     * 多次使用相同的eventHandleId进行事件分发将导致事件响应异常。仅在构造事件的时候需要对此字段赋值，其余情况开发者无需处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    eventHandleId?: int;
    /**
     * 激活事件冒泡。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    propagation(): void;
    /**
     * 获取此次轴事件的水平轴值。
     *
     * @returns { double } 水平轴值。<br>单位：vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getHorizontalAxisValue(): double;
    /**
     * 获取此次轴事件的垂直轴值。
     *
     * @returns { double } 垂直轴值。<br>单位：vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVerticalAxisValue(): double;
    /**
     * 返回此次轴事件双指缩放的比例。
     *
     * @returns { double } 双指缩放比例。<br/> **说明：** 缩放比例指的是触控板双指缩放事件触发过程中双指当前的距离与双指最初按下时的距离的比值。<br/>默认值：0
     *     <br/>取值范围：[0, +∞)<br/>
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPinchAxisScaleValue(): double;
    /**
     * 检测此轴事件是否包含指定的轴类型。
     *
     * @param { AxisType } axisType - 轴事件的轴类型。
     * @returns { boolean } 此轴事件是否包含指定的轴类型。
     *     <br>true：包含指定的轴类型；false：不包含指定的轴类型。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hasAxis(axisType: AxisType): boolean;

    /**
     * 鼠标光标在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * 鼠标光标在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
     * 
     * 单位：vp
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
    /**
     * Gets the coordinates of the top-left corner of the current component based on its real-time position.
     *
     * @returns { Coordinate2D } - return the coordinates of the top-left corner of the current component based on its
     *     real-time position.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default getCurrentLocalPosition(): Coordinate2D;
}
/**
 * 组件区域变化时的回调类型。
 *
 * @param { SizeOptions } oldValue - 目标元素变化之前的宽高。
 * @param { SizeOptions } newValue - 目标元素变化之后的宽高。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SizeChangeCallback = (oldValue: SizeOptions, newValue: SizeOptions) => void;
/**
 * 自定义手势识别器判定回调类型。
 *
 * @param { BaseGestureEvent } event - 当前基础手势事件信息。<br/>
 * @param { GestureRecognizer } current - 当前即将要响应的识别器对象。<br/>
 * @param { Array<GestureRecognizer> } recognizers - 响应链上的其他手势识别器对象。<br/>
 * @param { Array<TouchRecognizer> } [touchRecognizers] - 响应链上的Touch识别器对象。 默认值为null，表示在当前手势绑定组件及其子孙组件没有可响应的Touch识别器。<br/>
 * @returns { GestureJudgeResult } 手势是否裁决成功的判定结果。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer, recognizers: Array<GestureRecognizer>, touchRecognizers?: Array<TouchRecognizer>) => GestureJudgeResult;
/**
 * 系统内置手势与响应链上其他组件的手势设置并行关系的回调事件类型。
 *
 * @param { GestureRecognizer } current - 当前组件的系统内置手势识别器，当前版本只提供内置的
 *     [GestureType]{@link GestureControl.GestureType}.PAN_GESTURE类型的手势识别器。
 * @param { Array<GestureRecognizer> } others - 响应链上更高优先级的其他组件相同类别的手势识别器。
 * @returns { GestureRecognizer } 与current识别器绑定并行关系的某个手势识别器。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;
/**
 * 手势与响应链上其他组件的手势设置并行关系的回调事件类型。
 *
 * @param { GestureRecognizer } current - 当前组件的手势识别器，当前仅支持
 *     [GestureType]{@link GestureControl.GestureType}.PAN_GESTURE类型的手势识别器。
 * @param { Array<GestureRecognizer> } others - 响应链上优先级高于当前组件的其他组件所持有的同类型
 *     [GestureType]{@link GestureControl.GestureType}的手势识别器。
 * @returns { GestureRecognizer } 与current识别器绑定并行关系的某个手势识别器。
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
 * 动态指定手势识别器是否参与手势处理的回调事件类型，回调内参数的生命周期跟随回调本身，参数内的方法仅支持在回调内同步使用。
 *
 * @param { BaseGestureEvent } event - [触摸测试](docroot://ui/arkts-interaction-basic-principles.md#触摸测试)结束后的基础手势事件的信息。
 *     <br/>**说明：** <br/>仅包含BaseGestureEvent的信息，不包含其子类拓展信息。<br/>axisHorizontal和axisVertical的值为0。
 * @param { Array<GestureRecognizer> } recognizers - [触摸测试](docroot://ui/arkts-interaction-basic-principles.md#触摸测试)结束后，
 *     所有手势识别器对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TouchTestDoneCallback = (event: BaseGestureEvent, recognizers: Array<GestureRecognizer>) => void;
/**
 * 定义在[onGestureCollectIntercept]{@link CommonMethod.onGestureCollectIntercept}中使用的回调类型。
 *
 * @param { Array<GestureRecognizer> } recognizers - 响应链上组件的手势识别器对象。
 * @param { Array<TouchRecognizer> } [touchRecognizers] - 响应链上组件的触摸识别器对象。<br/>默认值为null。
 * @returns { GestureCollectIntervention } 手势收集干预结果。
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
 * @returns { boolean } True means keyboard is needed, false means keyboard is not needed.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export type OnNeedSoftkeyboardCallback = () => boolean;
/**
 * Defines the PixelMap type object for ui component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PixelMap = image.PixelMap;

/**
 * pixelmap object with release function.
 *
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
 * 当设置[DragResult]{@link DragResult}为DROP_ENABLED后，可设置DragBehavior为复制（COPY）或剪切（MOVE）。当DragBehavior为复制（COPY）时，拖拽对象的角标会显示加
 * 号；为剪切（MOVE）时，拖拽对象的角标不会显示加号。DragBehavior用来向开发者描述数据的处理方式是复制（COPY）还是剪切（MOVE），但无法最终决定对数据的实际处理方式。DragBehavior会通过onDragEnd带
 * 回给数据拖出方，发起拖拽的一方可通过DragBehavior来区分做出的是复制（COPY）还是剪切（MOVE）数据的不同行为。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DragBehavior {
    /**
     * 指定对数据的处理方式为复制。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COPY = 0,
    /**
     * 指定对数据的处理方式为剪切。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MOVE
}
/**
 * 拖拽动画类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DragAnimationType {
    /**
     * 使用默认拖拽动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    DEFAULT = 0,
    /**
     * 使用跟手变形拖拽动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_HAND_MORPH = 1
}
/**
 * 拖拽相关的数据。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type UnifiedData = unifiedDataChannel.UnifiedData;
/**
 * 拖拽相关数据的简介。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Summary = unifiedDataChannel.Summary;
/**
 * 标准化数据类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type UniformDataType = uniformTypeDescriptor.UniformDataType;
/**
 * 作为startDataLoading的入参对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DataSyncOptions = unifiedDataChannel.GetDataParams;

/**
 * 落入操作时使用的数据加载参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type DataLoadParams = unifiedDataChannel.DataLoadParams;

/**
 * 定义回调上下文信息的类，用于在悬停检测回调中传递给应用程序，使其能访问拖拽状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type SpringLoadingContext = dragController.SpringLoadingContext;

/**
 * 定义拖拽的悬停检测配置参数的接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type DragSpringLoadingConfiguration = dragController.DragSpringLoadingConfiguration;

/**
 * 定义拖拽操作的结果及组件的落入选定状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DragResult {
    /**
     * 拖拽结果尚未设置，在[onDragStart]{@link CommonMethod.onDragStart}，[onDragEnter]{@link CommonMethod.onDragEnter}，
     * [onDragMove]{@link CommonMethod.onDragMove}，[onDragLeave]{@link CommonMethod.onDragLeave}，
     * [onDrop]{@link CommonMethod.default onDrop(event: ((event: DragEvent, extraParams?: string) => void) | undefined)}
     * 中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    UNKNOWN = -1,
    /**
     * 拖拽成功，在
     * [onDrop]{@link CommonMethod.default onDrop(event: ((event: DragEvent, extraParams?: string) => void) | undefined)}
     * 中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DRAG_SUCCESSFUL = 0,
    /**
     * 拖拽失败，在
     * [onDrop]{@link CommonMethod.default onDrop(event: ((event: DragEvent, extraParams?: string) => void) | undefined)}
     * 中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DRAG_FAILED = 1,
    /**
     * 拖拽取消，在
     * [onDrop]{@link CommonMethod.default onDrop(event: ((event: DragEvent, extraParams?: string) => void) | undefined)}
     * 中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DRAG_CANCELED = 2,
    /**
     * 组件允许落入，在[onDragEnter]{@link CommonMethod.onDragEnter}，[onDragMove]{@link CommonMethod.onDragMove}，
     * [onDragLeave]{@link CommonMethod.onDragLeave}中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DROP_ENABLED = 3,
    /**
     * 组件不允许落入，在[onDragEnter]{@link CommonMethod.onDragEnter}，[onDragMove]{@link CommonMethod.onDragMove}，
     * [onDragLeave]{@link CommonMethod.onDragLeave}中使用。
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
 * 拖拽事件信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragEvent {
    /**
     * 获取当前拖拽点相对于屏幕左上角的x轴坐标。
     *
     * @returns { double } 当前拖拽点相对于屏幕左上角的x轴坐标，单位为vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDisplayX(): double;
    /**
     * 获取当前拖拽点相对于屏幕左上角的y轴坐标。
     *
     * @returns { double } 当前拖拽点相对于屏幕左上角的y轴坐标，单位为vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDisplayY(): double;
    /**
     * 获取拖拽点相对于窗口左上角的x轴坐标。
     *
     * @returns { double } 当前拖拽点相对于窗口左上角的x轴坐标，单位为vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getWindowX(): double;
    /**
     * 获取拖拽点相对于窗口左上角的y轴坐标。
     *
     * @returns { double } 当前拖拽点相对于窗口左上角的y轴坐标，单位为vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getWindowY(): double;
    /**
     * 切换复制和剪贴模式的角标显示状态。
     * 
     * 默认值：DragBehavior.COPY。
     *
     * @default COPY
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dragBehavior: DragBehavior;
    /**
     * 当拖拽结束时，是否禁用系统默认落位动效。
     * 
     * 应用可将该值设定为true来禁用系统默认落位动效，并实现自己的自定义落位动效。
     * 
     * 当不配置或设置为false时，系统默认落位动效生效，当[setResult]{@link DragEvent.setResult}设置为DRAG_SUCCESSFUL时，落位为缩小消失动效，不为DRAG_SUCCESSFUL
     * 时，则为放大消失动效。
     * 
     * 当未禁用系统默认落位动效时，应用不应再实现自定义动效，以避免动效上的冲突。
     * 
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    useCustomDropAnimation: boolean;
    /**
     * 设置拖拽过程中需要自动隐藏的组件uniqueId，支持传入单个uniqueId或数组。
     * 
     * 仅在[onDragStart]{@link CommonMethod.onDragStart}回调中设置生效。拖拽成功发起后，系统会在显示拖拽预览窗口前隐藏目标组件。
     * 
     * 若拖拽源本身也需要隐藏，需要同时传入拖拽源组件的uniqueId。
     * 
     * 组件的uniqueId可通过[UIContext.getFrameNodeById()]{@link @ohos.arkui.UIContext:UIContext.getFrameNodeById}配合
     * [FrameNode.getUniqueId()]{@link ../FrameNode:FrameNode#getUniqueId}获取。
     * 
     * 开发者应在[onDragEnd]{@link CommonMethod.onDragEnd}或
     * [onDrop]{@link CommonMethod.default onDrop(event: ((event: DragEvent, extraParams?: string) => void) | undefined)}
     * 中恢复组件显示状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    autoHideComponentUniqueIds?: int | int[];
    /**
     * 设置拖拽动画类型。该属性仅支持在[onDragStart]{@link CommonMethod#onDragStart}阶段设置，可在[onDragStart]{@link CommonMethod#onDragStart}、
     * [onDragEnter]{@link CommonMethod#onDragEnter}、[onDragMove]{@link CommonMethod#onDragMove}、
     * [onDragLeave]{@link CommonMethod#onDragLeave}、
     * [onDrop]{@link CommonMethod#onDrop(event: ((event: DragEvent, extraParams?: string) => void) | undefined)}、
     * [onDragEnd]{@link CommonMethod#onDragEnd}回调中获取。
     *
     * @default DragAnimationType.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    dragAnimationType?: DragAnimationType;
    /**
     * 向DragEvent中设置用于拖拽的数据。
     *
     * @param { UnifiedData } unifiedData - 拖拽相关的数据。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setData(unifiedData: UnifiedData): void;
    /**
     * 获取拖拽相关数据。
     *
     * @returns { UnifiedData | undefined } 从DragEvent中获取拖拽相关数据。数据获取结果请参考错误码说明。
     * @throws { BusinessError } 190001 - Data not found.
     * @throws { BusinessError } 190002 - Data error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getData(): UnifiedData | undefined;
    /**
     * 获取所拖拽数据的概要，包括数据类型及大小信息；在延迟拖拽场景下，只能获取到数据类型信息。
     *
     * @returns { Summary | undefined } 拖拽相关数据的概要。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getSummary(): Summary | undefined;
    /**
     * 在DragEvent中设置拖拽结果。
     *
     * @param { DragResult } dragResult - 拖拽结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setResult(dragResult: DragResult): void;
    /**
     * 获取拖拽结果。
     *
     * @returns { DragResult } 从DragEvent中获取的拖拽结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getResult(): DragResult;
    /**
     * 获取拖拽预览图相对于当前窗口的位置，以及预览图尺寸信息。
     *
     * @returns { Rectangle } 拖拽预览图相对于当前窗口的位置，以及预览图尺寸信息，单位vp，其中x和y代表预览图左上角的窗口坐标，width和height代表预览图的尺寸。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPreviewRect(): Rectangle;
    /**
     * 获取当前拖拽的x轴方向拖动速度。
     *
     * @returns { double } 当前拖拽的x轴方向拖动速度。坐标轴原点为屏幕左上角，单位为vp，分正负方向速度，从左往右为正，反之为负。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVelocityX(): double;
    /**
     * 获取当前拖拽的y轴方向拖动速度。
     *
     * @returns { double } 当前拖拽的y轴方向拖动速度。坐标轴原点为屏幕左上角，单位为vp，分正负方向速度，从上往下为正，反之为负。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVelocityY(): double;
    /**
     * 获取当前拖拽的主方向拖动速度。
     *
     * @returns { double } 当前拖拽的主方向拖动速度。为xy轴方向速度的平方和的算术平方根，单位为vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVelocity(): double;
    /**
     * 获取功能键按压状态。支持功能键 'Ctrl' | 'Alt' | 'Shift'。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getModifierKeyState?: ModifierKeyStateGetter;
    /**
     * 异步获取拖拽数据，并通知开发者当前数据同步进度，仅支持在onDrop阶段使用。
     *
     * @param { DataSyncOptions } options - 获取拖拽数据时的参数，包含目标路径、文件冲突选项、进度条类型等。数据传输过程中可使用
     *     [cancelDataLoading]{@link @ohos.arkui.UIContext:DragController#cancelDataLoading}接口取消数据加载。
     * @returns { string | undefined } 拖拽数据的标识，用于区分每次拖拽。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 190003 - Operation not allowed for current phase.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startDataLoading(options: DataSyncOptions): string | undefined;
    /**
     * 设置自定义落位动效的执行函数，仅在
     * [useCustomDropAnimation]{@link DragEvent#useCustomDropAnimation}为true时有效。
     *
     * @param { VoidCallback } customDropAnimation - 在此回调函数中实现自定义落位动效。<br/> **说明：** <br/>1. 该接口仅在onDrop回调中使用有效。<br/> 2.
     *     使用前需设置useCustomDropAnimation为true，否则该接口不生效。<br/> 3. 不要在动画callback中实现与动效无关的逻辑，避免影响执行效率。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    executeDropAnimation(customDropAnimation: VoidCallback): void;

    /**
     * 使用系统的内置动效，且该动效只有系统应用可使用。仅支持在onDrop阶段使用。
     *
     * @param { string } configuration - 动效配置参数，字符串内容为json格式。
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 190003 - Operation not allowed for current phase.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    enableInternalDropAnimation(configuration: string): void;

    /**
     * 获取当前拖拽事件发生时所在的屏幕ID，不支持在[onDragEnd]{@link CommonMethod.onDragEnd}阶段使用。
     *
     * @returns { int } 当前拖拽事件发生时所在的屏幕ID。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDisplayId(): int;

    /**
     * 获取拖起方包名。
     *
     * @returns { string } 拖起方的包名。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getDragSource(): string;

    /**
     * 获取是否是跨设备拖拽，跨设备拖拽时为true。
     *
     * @returns { boolean } 是否是跨设备拖拽，返回true表示是跨设备拖拽，返回false表示不是跨设备拖拽。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isRemote(): boolean;

    /**
     * 设置起拖方延迟提供数据。使用此方法向系统提供数据加载参数，而不是直接提供完整的数据对象。当用户在目标应用程序上落入时，系统将使用此参数从起拖方请求实际数据。与[setData]{@link DragEvent.setData}
     * 方法同时使用，以最后调用的方法为准。该接口仅在[onDragStart]{@link CommonMethod.onDragStart}回调中生效。
     *
     * @param { DataLoadParams } dataLoadParams - 落入操作时使用的数据加载参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    setDataLoadParams(dataLoadParams: DataLoadParams): void;

    /**
     * 当前拖拽点相对于全局屏幕的左上角的X坐标。
     *
     * @returns { double } 返回当前拖拽点相对于全局屏幕的左上角的X坐标。<br/>单位：vp，取值范围：[0, +∞)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getGlobalDisplayX(): double;

    /**
     * 当前拖拽点相对于全局屏幕的左上角的Y坐标。
     *
     * @returns { double } 返回当前拖拽点相对于全局屏幕的左上角的Y坐标。<br/>单位：vp<br/>取值范围：[0, +∞)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getGlobalDisplayY(): double;

    /**
     * 设置一个跟手变形落位动效执行完成后的回调，该回调由系统在拖拽框架动效结束后触发。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 1. 该接口仅在[dragAnimationType]{@link DragEvent#dragAnimationType}设置为DragAnimationType.FOLLOW_HAND_MORPH时生效。
     * >
     * > 2. 不要在回调中实现与动效无关的逻辑，避免影响执行效率。
     *
     * @param { VoidCallback } onAnimationFinished - 拖拽框架动效结束后触发的回调。
     * @param { string } [animationOption] - 落位动效参数。<br> 参数为JSON字符串格式，包含以下字段：<br> **CubicCurveEnable**: boolean，表示是否启用三次曲线
     *     动画。设置为true时启用三次曲线动画，设置为false时不启用。<br> **SpringEnable**: boolean，表示是否启用弹簧动画。设置为true时启用弹簧动画效果，设置为false时不启用。 <br>
     *     **dropAnimationCurve**: number[]，表示落位动画曲线参数，其含义由SpringEnable和CubicCurveEnable决定（SpringEnable优先级更高）。当
     *     SpringEnable为true时，数组长度为3，格式为[response, dampingRatio, blendDuration]，对应
     *     [curves.springMotion]{@link @ohos.curves:curves.springMotion}的弹簧曲线参数；当SpringEnable为false且CubicCurveEnable为true
     *     时，数组长度为4，格式为[x1, y1, x2, y2]，对应[curves.cubicBezierCurve]{@link @ohos.curves:curves.cubicBezierCurve}的三次贝塞尔曲线控制点
     *     参数。<br> **说明：** SpringEnable优先级高于CubicCurveEnable，当两者同时为true时，以弹簧动画为准。当SpringEnable和CubicCurveEnable均未正确设置时，使用默
     *     认弹簧动效。<br> **dropPosition**: number[]，落位位置坐标。数组长度为2，格式为[x, y]，单位为px，表示拖拽元素落位时的目标位置坐标，取值范围为(-∞, +∞)。<br>
     *     **dropSize**: number[]，落位尺寸。数组长度为2，格式为[width, height]，单位为px，表示拖拽元素落位时的目标尺寸，取值范围为(0, +∞)。
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    executeFollowHandMorphDropAnimation(onAnimationFinished: VoidCallback, animationOption?: string): void;
}

/**
 * 拖拽事件的回调函数。
 *
 * @param { DragEvent } event - event为拖拽事件信息，包括拖拽点坐标。
 * @param { string } [extraParams] - extraParams为拖拽事件额外信息，需要解析为JSON格式。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnDragEventCallback = (event: DragEvent, extraParams?: string) => void;
/**
 * 设置落入过程的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DropOptions {
    /**
     * 设置拖拽是否提前获取数据。true表示不提前获取数据，false表示提前获取数据，默认值为false。
     * 
     * **说明：**
     * 
     * 当使用[startDataLoading]{@link DragEvent.startDataLoading}获取数据时需设置该参数为true，防止拖拽提前获取数据。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disableDataPrefetch?: boolean;
}
/**
 * 按键事件信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface KeyEvent {
    /**
     * 按键的类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: KeyType;
    /**
     * 按键的键值。按键设备提供的键值请参考[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyCode: int;
    /**
     * 按键的名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyText: string;
    /**
     * 触发当前按键的输入设备类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keySource: KeySource;
    /**
     * 触发当前按键的输入设备ID。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deviceId: int;
    /**
     * 按键发生时元键（即键盘左下角紧挨Ctrl键或Fn标记了窗口logo的按键）的状态，1表示按压态，0表示未按压态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    metaKey: int;
    /**
     * 事件时间戳。触发事件时距离系统启动的时间间隔，单位：ns。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
    /**
     * 阻塞事件冒泡传递。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
    /**
     * 按键对应的意图。
     * 
     * 默认值：IntentionCode.INTENTION_UNKNOWN。
     *
     * @default IntentionCode.INTENTION_UNKNOWN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    intentionCode: IntentionCode;
    /**
     * 获取功能键按压状态。支持功能键 'Ctrl'\|'Alt'\|'Shift'。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getModifierKeyState?: ModifierKeyStateGetter;
    /**
     * 按键的Unicode码值。支持范围为非空格的基本拉丁字符：0x0021-0x007E，不支持字符为0。组合键场景下，返回当前keyEvent对应按键的Unicode码值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    unicode?: long;
    /**
     * NumLock是否锁定。
     * 
     * true表示NumLock锁定；false表示NumLock解锁。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isNumLockOn?: boolean;
 
    /**
     * CapsLock是否锁定。
     * 
     * true表示CapsLock锁定；false表示CapsLock解锁。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isCapsLockOn?: boolean;
  
    /**
     * ScrollLock是否锁定。
     * 
     * true表示ScrollLock锁定；false表示ScrollLock解锁。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isScrollLockOn?: boolean;
}
/**
 * 焦点轴事件的对象说明，继承于[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FocusAxisEvent extends BaseEvent {
    /**
     * 焦点轴事件的轴值表。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    axisMap: Map<AxisModel, double>;
    /**
     * 阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopPropagation(): void;
}
/**
 * 组件接收表冠事件的数据结构。内容包括时间戳、旋转角速度、旋转角度、表冠动作和阻止事件冒泡。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CrownEvent {
    /**
     * 时间戳。触发事件时距离系统启动的时间间隔。
     * 
     * 单位：ns
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: long;
    /**
     * 旋转角速度。
     * 
     * 单位：deg/s
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angularVelocity: double;
    /**
     * 相对旋转角度。
     * 
     * 单位：deg 
     * 
     * 取值范围:[-360, 360]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    degree: double;
    /**
     * 表冠动作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: CrownAction;
    /**
     * 阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。
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
 * 定义用于多态样式的回调类型。
 *
 * @param { CommonMethod } instance - 提供组件的实例。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CustomStyles = (instance: CommonMethod) => void;
/**
 * 组件不同状态下的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StateStyles {
    /**
     * 组件无状态时的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    normal?: CustomStyles;
    /**
     * 组件按下状态的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressed?: CustomStyles;
    /**
     * 组件禁用状态的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disabled?: CustomStyles;
    /**
     * 组件获焦状态的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    focused?: CustomStyles;
    /**
     * 组件点击状态的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    clicked?: CustomStyles;
    /**
     * 组件选中状态的样式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    selected?: CustomStyles;

     /**
      * 组件悬浮状态的样式。
      *
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @since 26.0.0 static
      */
     hovered?: CustomStyles;
}
/**
 * 气泡文本的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupMessageOptions {
    /**
     * 设置气泡信息文本颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textColor?: ResourceColor;
    /**
     * 设置气泡信息字体属性。
     * 
     * **说明：** 
     * 
     * 1. 不支持设置family。
     * 2. Font中的weight属性不支持传入number类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    font?: Font;
}
/**
 * 关闭原因类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DismissReason {
    /**
     * 点击三键back、侧滑（左滑/右滑）、键盘ESC。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PRESS_BACK = 0,
    /**
     * 点击遮障层时。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOUCH_OUTSIDE = 1,
    /**
     * 点击关闭按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CLOSE_BUTTON = 2,
    /**
     * 下拉关闭。
     * 
     * **说明：** 
     * 
     * 该接口仅支持在[半模态转场]{@link ../../@internal/component/ets/common}中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SLIDE_DOWN = 3,
    /**
     * 侧滑（左滑/右滑）关闭。默认表示向右滑动关闭，镜像场景表示向左滑动关闭，不支持选择向左或向右滑动。
     * 
     * **说明：** 
     * 
     * 该接口仅支持在[半模态转场]{@link ../../@internal/component/ets/common}中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SLIDE = 4
}
/**
 * 气泡关闭的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DismissPopupAction {
    /**
     * Popup关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dismiss(): void;
    /**
     * 关闭原因，返回本次拦截Popup消失的事件原因。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reason: DismissReason;
}
/**
 * 气泡的显示状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupStateChangeParam {
    /**
     * 气泡的显示状态。返回true时，表示气泡从关闭到打开，返回false时，表示气泡从打开到关闭。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isVisible: boolean;
}
/**
 * 气泡状态变化事件回调。
 *
 * @param { PopupStateChangeParam } event - 气泡当前的显示状态。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PopupStateChangeCallback = (event: PopupStateChangeParam) => void;
/**
 * 设置遮罩层颜色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupMaskType {
    /**
     * 设置遮罩层颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color: ResourceColor;
}
/**
 * 设置描边线性渐变的颜色和方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupBorderLinearGradient {
    /**
     * 线性渐变的方向。
     * 
     * 默认值：GradientDirection.Bottom 
     * 
     * **说明：** 
     * 
     * 当线性渐变的方向设置为GradientDirection.None时，显示默认值。
     *
     * @default GradientDirection.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction?: GradientDirection;
    /**
     * 指定渐变色颜色和其对应的百分比位置的数组，设置非法颜色直接跳过。
     * 
     * **说明：** 
     * 
     * 颜色设置方式可参考：[ResourceColor]{@link ResourceColor}，非[ResourceColor]{@link ResourceColor}范围内的颜色值即为非法颜色。
     * 
     * 数组内颜色设置为undefined或者null时，默认为黑色。
     * 
     * colors参数的约束：
     * 
     * [ResourceColor]{@link ResourceColor}表示填充的颜色，number表示指定颜色所处的位置，取值范围为[0,1.0]，0表示需要设置渐变色的容器的起始位置，1.0表示容器的结束位置。为实现多个颜
     * 色渐变效果，建议多个数组中number参数递增设置，如后一个数组number参数比前一个数组number小时，按照等于前一个数组number的值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colors: Array<[ResourceColor | undefined, double]>;
}
/**
 * 配置弹出气泡的参数。使用[UIContext]{@link @ohos.arkui.UIContext}中的
 * [getPromptAction()]{@link @ohos.arkui.UIContext:UIContext#getPromptAction}方法获取到
 * [PromptAction]{@link @ohos.arkui.UIContext}对象，再通过该对象调用[openPopup]{@link @ohos.arkui.UIContext:PromptAction.openPopup}
 * 和[updatePopup]{@link @ohos.arkui.UIContext:PromptAction.updatePopup}时options的属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupCommonOptions {
    /**
     * 气泡组件优先显示的位置，当前位置显示不下时，会自动调整位置。
     *
     * 默认值：Placement.Bottom
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 18开始，该接口支持在原子化服务中使用。
     *
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * 气泡的颜色。如需去除模糊背景填充效果，需将backgroundBlurStyle设置为BlurStyle.NONE。
     *
     * 默认值：透明色[Transparent]{@link Color}加模糊背景填充效果[COMPONENT_ULTRA_THICK]{@link BlurStyle}。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    popupColor?: ResourceColor;
    /**
     * 设置是否显示箭头。
     * 
     * true：显示箭头；false：不显示箭头。
     * 
     * 默认值：true
     * 
     * **说明：** 
     * 
     * 当页面可用空间无法让气泡完全避让时，气泡会覆盖到组件上并且不显示箭头。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * 页面有操作时，气泡是否自动关闭。
     * 
     * true：自动关闭气泡；false：气泡不会自动关闭。
     * 
     * 默认值：true 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    autoCancel?: boolean;
    /**
     * 气泡状态变化事件回调，参数isVisible为气泡的显示状态。返回true时，表示气泡从关闭到打开，返回false时，表示气泡从打开到关闭。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onStateChange?: PopupStateChangeCallback;
    /**
     * Popup箭头在气泡处的偏移。
     * 
     * 箭头在气泡上下方时，数值为0表示箭头居最左侧，偏移量为箭头至最左侧的距离，默认居中。
     * 
     * 箭头在气泡左右侧时，偏移量为箭头至最上侧的距离，默认居中。
     * 
     * 显示在屏幕边缘时，气泡会自动左右偏移，数值为0时箭头始终指向绑定组件。
     * 
     * 单位：vp
     * 
     * **说明：** 
     * 
     * 1. 没设置arrowOffset的情况下，气泡箭头与四个角的距离不能小于圆角半径。
     * 2. 只有arrowPointPosition不设置或者设置为null、undefined时，arrowOffset属性才生效。
     * 3. 不支持设置百分比。
     * 4. 负值按照0值处理。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * 气泡是否显示在创建的子窗里。
     * 
     * true：气泡会显示在创建的子窗里；false：气泡会显示在对应的主窗中。
     * 
     * 默认值：false
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * 设置气泡是否有遮罩层及遮罩颜色。
     * 
     * true：显示透明色遮罩层；false：不显示遮罩层。
     * 
     * Color：显示指定颜色的遮罩层。
     * 
     * 默认值：true
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | PopupMaskType;
    /**
     * 设置Popup与宿主节点的间距。不支持设置百分比。
     * 
     * 默认值：8
     * 
     * 单位：vp
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetSpace?: Length;
    /**
     * 设置Popup组件相对于placement设置的显示位置的偏移。
     * 
     * 默认值：{ x: 0, y: 0 }
     * 
     * 单位：vp
     * 
     * **说明：**
     * 
     * 不支持设置百分比。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * 气泡宽度，未设置或者异常值场景下，气泡自适应内容宽度。
     * 
     * 单位：vp
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * 气泡箭头相对于父组件显示位置，气泡箭头在垂直和水平方向上有Start，Center，End三个位置点可选。以上所有位置点均位于父组件区域的范围内，不会超出父组件的边界范围。
     * 
     * 默认值：ArrowPointPosition.CENTER
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * 设置箭头宽度。若所设置的箭头宽度超过所在边的长度减去两倍的气泡圆角大小，则不绘制气泡箭头。
     * 
     * 默认值：16
     * 
     * 单位：vp
     * 
     * **说明：**
     * 
     * 不支持设置百分比。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * 设置箭头高度。
     * 
     * 默认值：8
     * 
     * 单位：vp
     * 
     * **说明：**
     * 
     * 不支持设置百分比。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * 设置气泡圆角半径。
     * 
     * 默认值：20
     * 
     * 单位：vp
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: Dimension;
    /**
     * 设置气泡阴影。
     * 
     * 默认值：ShadowStyle.OUTER_DEFAULT_MD 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * 设置气泡模糊背景参数。
     * 
     * 默认值：BlurStyle.COMPONENT_ULTRA_THICK
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * 设置气泡弹出后是否获焦。
     * 
     * true：气泡可以获焦；false：气泡不会获焦。
     * 
     * 默认值：false 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    focusable?: boolean;
    /**
     * 自定义设置Popup气泡显示和退出的动画效果。
     * 
     * **说明：**
     * 
     * 1. 不设置时使用默认的显示/退出动效。
     * 2. 显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。
     * 3. 退出动效中按back键，不会打断退出动效，back键不被响应。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * 设置Popup交互式关闭拦截开关及拦截回调函数，默认值为true，Popup响应点击、侧滑（左滑/右滑）、三键back。
     * 
     * 1. 当为boolean类型时，如果设置为false，则不响应点击、侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC退出事件，仅当设置"气泡显示状态"参数show值为false时才退出；如果设置为true，则正常响应退出事件；
     * 2. 如果设置为函数类型，则拦截退出事件且执行回调函数。侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC在回调函数中返回的reason为PRESS_BACK，点击为TOUCH_OUTSIDE。
     * 
     * **说明：**
     * 
     * 1. 在onWillDismiss回调中，不能再做onWillDismiss拦截。
     * 2. 不支持通过[updatePopup]{@link @ohos.arkui.UIContext:PromptAction.updatePopup}进行更新。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 18开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
     * Popup组件是否响应悬停态（半折叠状态）变化，即在悬停态下是否触发避让折痕区域。
     * 
     * 默认值：false，2in1设备默认为true。未设置或者值为非法值时，生效默认值。
     * 
     * **说明：** 
     * 
     * 1. 如果Popup的弹出位置在悬停态折痕区域，Popup组件不会响应悬停态。
     * 2. 2in1设备从API version 20开始生效。
     * 3. 2in1设备仅在窗口瀑布模式下生效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 18开始，该接口支持在原子化服务中使用。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * 气泡绑定的宿主组件或其宿主组件的父容器添加了旋转、缩放等变换时，气泡是否跟随宿主组件变换。
     * 
     * true：气泡可以拿到变换后宿主的位置，显示到相应位置；false：气泡拿不到宿主变换后的位置，可能显示异常。
     * 
     * 默认值：false 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 13开始，该接口支持在原子化服务中使用。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    followTransformOfTarget?: boolean;
    /**
     * 设置Popup避让时是否覆盖指向组件。
     * 
     * 默认值：AvoidanceMode.COVER_TARGET 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @default AvoidanceMode.COVER_TARGET
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    avoidTarget?: AvoidanceMode;
    /**
     * 设置Popup组件外描边的宽度。
     * 
     * 默认值：1 
     * 
     * 单位：vp
     * 
     * **说明：** 
     * 
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件外描边的情况下，该接口需要和outlineLinearGradient配合使用。
     * 3. 当设置双描边时，建议外描边宽度不超过10vp。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension;
    /**
     * 设置Popup组件内描边的宽度。
     * 
     * 默认值：1 
     * 
     * 单位：vp
     * 
     * **说明：** 
     * 
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件内描边的情况下，该接口需要和borderLinearGradient配合使用。
     * 3. 当设置双描边时，建议内描边宽度不超过10vp。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension;
    /**
     * 设置Popup组件外描边线性渐变的颜色。
     * 
     * **说明：** 
     * 
     * 1. outlineLinearGradient不设置或者设置为null、undefined时，外描边没有线性渐变效果。
     * 2. outlineLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * 设置Popup组件内描边线性渐变的颜色。
     * 
     * **说明：** 
     * 
     * 1. borderLinearGradient不设置或者设置为null、undefined时，内描边没有线性渐变效果。
     * 2. borderLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderLinearGradient?: PopupBorderLinearGradient;
    /**
   * Define the popup theme color mode.
   *
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;

    /**
     * 设置气泡的显示层级模式。
     *
     * 默认值：LevelMode.OVERLAY
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    levelMode?: LevelMode;

  /**
   * 弹出气泡关闭时的回调函数。
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;

  /**
   * 弹出气泡关闭动画开始前的回调函数。
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
   * 弹出气泡显示动画开始前的回调函数。
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillAppear?: VoidCallback;

  /**
   * 弹出气泡显示时的回调函数。
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidAppear?: VoidCallback;
}
/**
 * 悬浮气泡自定义参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TipsOptions {
    /**
     * 设置悬浮气泡的显示时延。显示时延的最大值为4000ms，设置超过4000ms的值以4000ms为准。
     * 
     * 默认值：700
     * 
     * 单位：ms
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    appearingTime?: int;
    /**
     * 设置悬浮气泡的隐藏时延。隐藏时延的最大值为4000ms，设置超过4000ms的值以4000ms为准。
     * 
     * 默认值：300
     * 
     * 单位：ms
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disappearingTime?: int;
    /**
     * 多个组件连续弹出悬浮气泡时，悬浮气泡的显示时延。显示时延的最大值为4000ms，设置超过4000ms的值以4000ms为准。 
     * 
     * 默认值：300
     * 
     * 单位：ms
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    appearingTimeWithContinuousOperation?: int;
    /**
     * 多个组件连续弹出悬浮气泡时，悬浮气泡的隐藏时延。隐藏时延的最大值为4000ms，设置超过4000ms的值以4000ms为准。 
     * 
     * 默认值：0
     * 
     * 单位：ms
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disappearingTimeWithContinuousOperation?: int;
    /**
     * 设置是否显示气泡箭头。
     * 
     * 默认值：true
     * 
     * true：显示箭头；false：不显示箭头。
     * 
     * **说明：** 
     * 
     * 当页面可用空间无法让气泡完全避让时，气泡会覆盖到组件上并且不显示气泡箭头。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * 气泡箭头相对于父组件显示位置，气泡箭头在垂直和水平方向上有 "Start"、"Center"、"End"三个位置点可选。所有位置点均位于父组件区域范围内，不会超出父组件的边界范围，也不会覆盖圆角范围。
     * 
     * 默认值：ArrowPointPosition.CENTER
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * 设置气泡箭头宽度。若所设置的宽度超过所在边的长度减去两倍的气泡圆角大小，则不绘制气泡箭头。
     * 
     * 默认值：16
     * 
     * 单位：vp
     * 
     * **说明：**
     * 
     * 不支持设置百分比。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
     *
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * 设置气泡箭头高度。
     * 
     * 默认值：8
     * 
     * 单位：vp
     * 
     * **说明：**
     * 
     * 不支持设置百分比。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
     *
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * 设置Tips跟随类型。
     * 
     * 默认值：TipsAnchorType.TARGET
     * 
     * **说明：**
     * 
     * Tips的跟随类型为TipsAnchorType.CURSOR时，Tips不显示箭头。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupButton {
    /**
     * Button text value
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: string;
    /**
     * action
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: VoidCallback;
}
/**
 * 基础气泡的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopupOptions {
    /**
     * 气泡信息内容。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    message: string;
    /**
     * 设置Popup组件相对于宿主节点的显示位置，默认值为Placement.Bottom。
     * 
     * 如果同时设置了`placementOnTop`和`placement`，则以`placement`的设置为准。如果开发者设置的位置上无法完整显示气泡，气泡会自动避让至可以完整显示的位置。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * 第一个按钮。默认无此按钮。取值为undefined时，按默认值处理。
     * 
     * value：气泡里主按钮的文本。
     * 
     * action：点击主按钮的回调函数。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    primaryButton?: PopupButton;
    /**
     * 第二个按钮。默认无此按钮。取值为undefined时，按默认值处理。
     * 
     * value：气泡里辅助按钮的文本。
     * 
     * action：点击辅助按钮的回调函数。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    secondaryButton?: PopupButton;
    /**
     * 气泡状态变化事件回调，参数isVisible为气泡的显示状态。返回true时，表示气泡从关闭到打开，返回false时，表示气泡从打开到关闭。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onStateChange?: PopupStateChangeCallback;
    /**
     * Popup箭头在气泡处的偏移。
     * 
     * 箭头在气泡上下方时，数值为0表示箭头居最左侧，偏移量为箭头至最左侧的距离，默认居中。
     * 
     * 箭头在气泡左右侧时，偏移量为箭头至最上侧的距离，默认居中。
     * 
     * 显示在屏幕边缘时，气泡会自动左右偏移，数值为0时箭头始终指向绑定组件。
     * 
     * 单位：vp
     * 
     * **说明：** 
     * 
     * 1. 没设置arrowOffset的情况下，气泡箭头与四个角的距离不能小于圆角半径。
     * 2. 只有arrowPointPosition不设置或者设置为null、undefined时，arrowOffset属性才生效。
     * 3. 不支持设置百分比。
     * 4. 负值按照0值处理。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * 气泡是否显示在创建的子窗里。
     * 
     * true：气泡会显示在创建的子窗里；false：气泡会显示在对应的主窗中。
     * 
     * 默认值：false
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * 设置气泡是否有遮罩层及遮罩颜色。
     * 
     * true：显示透明色遮罩层；false：不显示遮罩层。
     * 
     * Color：显示指定颜色的遮罩层。
     * 
     * 默认值：true
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | PopupMaskType;
    /**
     * 设置气泡信息文本参数。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    messageOptions?: PopupMessageOptions;
    /**
     * 设置Popup与宿主节点的间距。不支持设置百分比。
     * 
     * 默认值：8
     * 
     * 单位：vp
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetSpace?: Length;
    /**
     * 设置是否显示箭头。
     * 
     * true：显示箭头；false：不显示箭头。
     * 
     * 默认值：true
     * 
     * **说明：** 
     * 
     * 当页面可用空间无法让气泡完全避让时，气泡会覆盖到组件上并且不显示箭头。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * 设置Popup组件相对于placement设置的显示位置的偏移。
     * 
     * 默认值：{ x: 0, y: 0 }
     * 
     * 单位：vp
     * 
     * **说明：**
     * 
     * 不支持设置百分比。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * 气泡的颜色。如需去除模糊背景填充效果，需将backgroundBlurStyle设置为BlurStyle.NONE。
     * 
     * 默认值：透明色[Transparent]{@link Color}加模糊背景填充效果[COMPONENT_ULTRA_THICK]{@link BlurStyle}。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    popupColor?: Color | string | Resource | long;
    /**
     * 页面有操作时，气泡是否自动关闭。
     * 
     * true：自动关闭气泡；false：气泡不会自动关闭。
     * 
     * 默认值：true 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    autoCancel?: boolean;
    /**
     * 气泡宽度，未设置或者异常值场景下，气泡自适应内容宽度。
     * 
     * 单位：vp
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * 气泡箭头相对于父组件显示位置，气泡箭头在垂直和水平方向上有Start，Center，End三个位置点可选。以上所有位置点均位于父组件区域的范围内，不会超出父组件的边界范围。
     * 
     * 默认值：ArrowPointPosition.CENTER
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * 设置箭头宽度。若所设置的箭头宽度超过所在边的长度减去两倍的气泡圆角大小，则不绘制气泡箭头。
     * 
     * 默认值：16
     * 
     * 单位：vp
     * 
     * **说明：**
     * 
     * 不支持设置百分比。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * 设置箭头高度。
     * 
     * 默认值：8
     * 
     * 单位：vp
     * 
     * **说明：**
     * 
     * 不支持设置百分比。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * 设置气泡圆角半径。
     * 
     * 默认值：20
     * 
     * 单位：vp
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: Dimension;
    /**
     * 设置气泡阴影。
     * 
     * 默认值：ShadowStyle.OUTER_DEFAULT_MD 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * 设置气泡模糊背景参数。
     * 
     * 默认值：BlurStyle.COMPONENT_ULTRA_THICK
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * 自定义设置Popup气泡显示和退出的动画效果。
     * 
     * **说明：**
     * 
     * 1. 不设置时使用默认的显示/退出动效。
     * 2. 显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。
     * 3. 退出动效中按back键，不会打断退出动效，back键不被响应。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * 设置Popup交互式关闭拦截开关及拦截回调函数，默认值为true，Popup响应点击、侧滑（左滑/右滑）、三键back。
     * 
     * 1. 当为boolean类型时，如果设置为false，则不响应点击、侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC退出事件，仅当设置"气泡显示状态"参数show值为false时才退出；如果设置为true，则正常响应退出事件；
     * 2. 如果设置为函数类型，则拦截退出事件且执行回调函数。侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC在回调函数中返回的reason为PRESS_BACK，点击为TOUCH_OUTSIDE。
     * 
     * **说明：**
     * 
     * 在onWillDismiss回调中，不能再做onWillDismiss拦截。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
     * Popup组件是否响应悬停态（半折叠状态）变化，即在悬停态下是否触发避让折痕区域。
     * 
     * 默认值：false，2in1设备默认为true。未设置或者值为非法值时，生效默认值。
     * 
     * **说明：** 
     * 
     * 1. 如果Popup的弹出位置在悬停态折痕区域，Popup组件不会响应悬停态。
     * 2. 2in1设备从API version 20开始生效。
     * 3. 2in1设备仅在窗口瀑布模式下生效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 18开始，该接口支持在原子化服务中使用。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * 气泡绑定的宿主组件或其宿主组件的父容器添加了旋转、缩放等变换时，气泡是否跟随宿主组件变换。
     * 
     * true：气泡可以拿到变换后宿主的位置，显示到相应位置；false：气泡拿不到宿主变换后的位置，可能显示异常。
     * 
     * 默认值：false 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 13开始，该接口支持在原子化服务中使用。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    followTransformOfTarget?: boolean;
    /**
     * 气泡是否避让软键盘，默认不避让。设置为避让后，气泡显示空间不足时，由原先居中覆盖父组件的方式改为平移覆盖父组件，且气泡箭头不指向宿主时，不再显示箭头。
     * 
     * 默认值：KeyboardAvoidMode.NONE 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 15开始，该接口支持在原子化服务中使用。
     *
     * @default KeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyboardAvoidMode?: KeyboardAvoidMode;
    /**
     * 设置Popup避让时是否覆盖指向组件。
     * 
     * 默认值：AvoidanceMode.COVER_TARGET 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @default AvoidanceMode.COVER_TARGET
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    avoidTarget?: AvoidanceMode;
    /**
     * 设置Popup组件外描边的宽度。
     * 
     * 默认值：1 
     * 
     * 单位：vp
     * 
     * **说明：** 
     * 
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件外描边的情况下，该接口需要和outlineLinearGradient配合使用。
     * 3. 当设置双描边时，建议外描边宽度不超过10vp。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension;
    /**
     * 设置Popup组件内描边的宽度。
     * 
     * 默认值：1 
     * 
     * 单位：vp
     * 
     * **说明：** 
     * 
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件内描边的情况下，该接口需要和borderLinearGradient配合使用。
     * 3. 当设置双描边时，建议内描边宽度不超过10vp。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension;
    /**
     * 设置Popup组件外描边线性渐变的颜色。
     * 
     * **说明：** 
     * 
     * 1. outlineLinearGradient不设置或者设置为null、undefined时，外描边没有线性渐变效果。
     * 2. outlineLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * 设置Popup组件内描边线性渐变的颜色。
     * 
     * **说明：** 
     * 
     * 1. borderLinearGradient不设置或者设置为null、undefined时，内描边没有线性渐变效果。
     * 2. borderLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderLinearGradient?: PopupBorderLinearGradient;
    /**
   * Define the popup theme color mode.
   *
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;

    /**
     * 设置气泡的显示层级模式。
     * 
     * 默认值：LevelMode.OVERLAY
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    levelMode?: LevelMode;

  /**
   * 弹出气泡关闭动画开始前的回调函数。
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
   * 弹出气泡显示时的回调函数。
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidAppear?: VoidCallback;

  /**
   * 弹出气泡显示动画开始前的回调函数。
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillAppear?: VoidCallback;

  /**
   * 弹出气泡关闭时的回调函数。
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;
}
/**
 * 弹出自定义气泡的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CustomPopupOptions {
    /**
     * 提示气泡内容的构造器。
     *
     * **说明：**
     * 
     * 1. Popup为通用属性，自定义Popup中不支持再次弹出Popup。对builder下的第一层容器组件不支持使用[Position]{@link Position}属性，如果使用将导致气泡不显示。
     * 2. builder中若使用自定义组件，自定义组件的[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)和[aboutToDisappear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttodisappear)生命周期与Popup气泡的显隐无关，不能使用其生命周期判断Popup气泡的显隐。
     * 3. 该构造器的builder仅支持定义在UI组件中，例如可以定义在Builder函数、方法或者[build](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#build)方法里。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    builder: CustomBuilder;
    /**
     * 气泡组件优先显示的位置，当前位置显示不下时，会自动调整位置。
     *
     * 默认值：Placement.Bottom
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * 气泡的颜色。如需去除模糊背景填充效果，需将backgroundBlurStyle设置为BlurStyle.NONE。
     *
     * API version 10，默认值：'#4d4d4d'
     *
     * API version 11及以后，默认值：透明色[Transparent]{@link Color}加模糊背景填充效果[COMPONENT_ULTRA_THICK]{@link BlurStyle}
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default TRANSPARENT plus COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    popupColor?: Color | string | Resource | long;
    /**
     * 设置是否显示箭头。
     *
     * true：显示箭头；false：不显示箭头。
     *
     * 默认值：true
     *
     * **说明：**
     *
     * 当页面可用空间无法让气泡完全避让时，气泡会覆盖到组件上并且不显示箭头。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * 页面有操作时，气泡是否自动关闭。
     *
     * true：自动关闭气泡；false：气泡不会自动关闭。
     *
     * 默认值：true
     *
     * **说明：**
     *
     * 如果要实现点击气泡内消失需要在builder中先放一个布局组件，然后再将Popup高级组件放在布局组件里面，再在布局组件的
     * [onClick]{@link CommonMethod#onClick(event: (event: ClickEvent) => void)}事件中修改控制显隐的状态变量show为false。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    autoCancel?: boolean;
    /**
     * 气泡状态变化事件回调，参数isVisible为气泡的显示状态。返回true时，表示气泡从关闭到打开，返回false时，表示气泡从打开到关闭。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onStateChange?: PopupStateChangeCallback;
    /**
     * Popup箭头在气泡处的偏移。
     *
     * 箭头在气泡上下方时，数值为0表示箭头居最左侧，偏移量为箭头至最左侧的距离，默认居中。
     *
     * 箭头在气泡左右侧时，偏移量为箭头至最上侧的距离，默认居中。
     *
     * 显示在屏幕边缘时，气泡会自动左右偏移，数值为0时箭头始终指向绑定组件。
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 没设置arrowOffset的情况下，气泡箭头与四个角的距离不能小于圆角半径。
     * 2. 只有arrowPointPosition不设置或者设置为null、undefined时，arrowOffset属性才生效。
     * 3. 不支持设置百分比。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * 气泡是否显示在创建的子窗里。
     *
     * true：气泡会显示在创建的子窗里；false：气泡会显示在对应的主窗中。
     *
     * 默认值：false
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * 设置气泡是否有遮罩层及遮罩颜色。
     *
     * true：显示透明色遮罩层；false：不显示遮罩层。
     *
     * Color：显示指定颜色的遮罩层。
     *
     * 默认值：true
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | PopupMaskType;
    /**
     * 设置Popup与宿主节点的间距。不支持设置百分比。
     *
     * 默认值：8
     *
     * 单位：vp
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    targetSpace?: Length;
    /**
     * 设置Popup组件相对于placement设置的显示位置的偏移。
     *
     * 默认值：{ x: 0, y: 0 }
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * 气泡宽度，未设置或者异常值场景下，气泡自适应内容宽度。
     *
     * 单位：vp
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * 气泡箭头相对于父组件显示位置，气泡箭头在垂直和水平方向上有Start、Center、End三个位置点可选。以上所有位置点均位于父组件区域的范围内，不会超出父组件的边界范围。
     *
     * 默认值：ArrowPointPosition.CENTER
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * 设置箭头宽度。若所设置的箭头宽度超过所在边的长度减去两倍的气泡圆角大小，则不绘制气泡箭头。
     *
     * 默认值：16
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowWidth?: Dimension;
    /**
     * 设置箭头高度。
     *
     * 默认值：8
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 不支持设置百分比。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowHeight?: Dimension;
    /**
     * 设置气泡圆角半径。
     *
     * 默认值：20
     *
     * 单位：vp
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: Dimension;
    /**
     * 设置气泡阴影。
     *
     * 默认值：ShadowStyle.OUTER_DEFAULT_MD 
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * 设置气泡模糊背景参数。
     *
     * 默认值：BlurStyle.COMPONENT_ULTRA_THICK 
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * 设置气泡弹出后是否获焦。
     *
     * true：气泡可以获焦；false：气泡不会获焦。
     *
     * 默认值：false
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    focusable?: boolean;
    /**
     * 自定义设置Popup气泡显示和退出的动画效果。
     *
     * **说明：**
     *
     * 1. 不设置时使用默认的显示/退出动效。
     * 2. 显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。
     * 3. 退出动效中按back键，不会打断退出动效，back键不被响应。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * 设置Popup交互式关闭拦截开关及拦截回调函数，默认值为true，Popup响应点击、侧滑（左滑/右滑）、三键back。
     *
     * 1. 当为boolean类型时，如果设置为false，则不响应点击、侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC退出事件，仅当设置"气泡显示状态"参数show值为false时才退出；如果设置为true，则正常响应退出事件；
     * 2. 如果设置为函数类型，则拦截退出事件且执行回调函数。侧滑（左滑/右滑）、三键back、路由跳转或键盘ESC在回调函数中返回的reason为PRESS_BACK，点击为TOUCH_OUTSIDE。
     *
     * **说明：**
     *
     * 在onWillDismiss回调中，不能再做onWillDismiss拦截。 
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
     * Popup组件是否响应悬停态（半折叠状态）变化，即在悬停态下是否触发避让折痕区域。
     *
     * 默认值：false，2in1设备默认为true。未设置或者值为非法值时，生效默认值。
     *
     * **说明：**
     *
     * 1. 如果Popup的弹出位置在悬停态折痕区域，Popup组件不会响应悬停态。
     * 2. 2in1设备从API version 20开始生效。
     * 3. 2in1设备仅在窗口瀑布模式下生效。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 18开始，该接口支持在原子化服务中使用。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * 气泡绑定的宿主组件或其宿主组件的父容器添加了旋转、缩放等变换时，气泡是否跟随宿主组件变换。
     *
     * true：气泡可以拿到变换后宿主的位置，显示到相应位置；false：气泡拿不到宿主变换后的位置，可能显示异常。
     *
     * 默认值：false
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 13开始，该接口支持在原子化服务中使用。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    followTransformOfTarget?: boolean;
    /**
     * 气泡是否避让软键盘，默认不避让。设置为避让后，气泡显示空间不足时，由原先居中覆盖父组件的方式改为平移覆盖父组件，且气泡箭头不指向宿主时，不再显示箭头。
     *
     * 默认值：KeyboardAvoidMode.NONE
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 15开始，该接口支持在原子化服务中使用。
     *
     * @default KeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyboardAvoidMode?: KeyboardAvoidMode;
    /**
     * 设置Popup避让时是否覆盖指向组件。
     *
     * 默认值：AvoidanceMode.COVER_TARGET
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @default AvoidanceMode.COVER_TARGET
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    avoidTarget?: AvoidanceMode;
    /**
     * 设置Popup组件外描边的宽度。
     *
     * 默认值：1
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件外描边的情况下，该接口需要和outlineLinearGradient配合使用。
     * 3. 当设置双描边时，建议外描边宽度不超过10vp。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension;
    /**
     * 设置Popup组件内描边的宽度。
     *
     * 默认值：1
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 1. 不支持设置百分比，设置百分比时按0处理。
     * 2. 在没有设置Popup组件内描边的情况下，该接口需要和borderLinearGradient配合使用。
     * 3. 当设置双描边时，建议内描边宽度不超过10vp。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension;
    /**
     * 设置Popup组件外描边线性渐变的颜色。
     *
     * **说明：**
     *
     * 1. outlineLinearGradient不设置或者设置为null、undefined时，外描边没有线性渐变效果。
     * 2. outlineLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * 设置Popup组件内描边线性渐变的颜色。
     *
     * **说明：**
     *
     * 1. borderLinearGradient不设置或者设置为null、undefined时，内描边没有线性渐变效果。
     * 2. borderLinearGradient设置时，direction默认值是：GradientDirection.Bottom。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderLinearGradient?: PopupBorderLinearGradient;
    /**
   * Define the popup theme color mode.
   *
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;

    /**
     * 设置气泡的显示层级模式。
     *
     * 默认值：LevelMode.OVERLAY
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    levelMode?: LevelMode;

  /**
   * 弹出气泡显示时的回调函数。
   *
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   *
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidAppear?: VoidCallback;

  /**
   * 弹出气泡关闭动画开始前的回调函数。
   *
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   *
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
   * 弹出气泡关闭时的回调函数。
   *
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   *
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;

  /**
   * 弹出气泡显示动画开始前的回调函数。
   *
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   *
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillAppear?: VoidCallback;
}

/**
 * 菜单的预览样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MenuPreviewMode {
    /**
     * 不显示预览内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,
    /**
     * 预览内容为触发长按悬浮菜单组件的截图。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IMAGE = 1
}
/**
 * 动画开始和结束时相对预览原图缩放比例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type AnimationNumberRange = [
    double,
    double
];
/**
 * 长按预览时显示的样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ContextMenuAnimationOptions {
    /**
     * 动画开始和结束时相对预览原图缩放比例。
     *
     * 默认值：[0.95, 1.1]
     *
     * **说明：**
     *
     * 缩放比例需要根据实际开发场景设置，建议设置值为小于预览图宽度或布局的最大限制。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default -
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale?: AnimationNumberRange;
    /**
     * 设置菜单显示和退出的过渡效果。
     *
     * **说明：**
     *
     * 在菜单退出动效过程中，横竖屏切换时，菜单会避让。二级菜单不继承自定义动效。弹出过程中可以点击二级菜单，但在退出动效执行过程中不允许点击二级菜单。
     *
     * 详细描述见[TransitionEffect]{@link TransitionEffect}对象说明。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * 在自定义预览图（preview为CustomBuilder类型）以及长按弹出（[responseType]{@link ResponseType}指定为LongPress）菜单的场景下，hoverScale用于为绑定组件的截图
     * 浮起动画设置两个参数：相对于预览原图的起始与结束缩放比例。hoverScale设置后，浮起动画和预览图之间会有切换过渡动效。
     *
     * **说明：**
     *
     * 倍率设置参数小于等于0时，不生效。
     *
     * [bindContextMenu<sup>12+</sup>]{@link CommonMethod.bindContextMenu}场景下，不生效。
     *
     * 设置transition接口时，不生效。
     *
     * 使用此接口且同时使用scale接口时，scale接口起始值不生效。
     *
     * 为保障最佳体验，最终预览图尺寸不建议小于原组件截图尺寸。当前预览动效宽高会受组件截图和自定义预览大小影响，请根据实际使用情况自行保障展示效果。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hoverScale?: AnimationNumberRange;
    /**
     * 在自定义预览图（preview为CustomBuilder类型）以及长按弹出（[responseType]{@link ResponseType}指定为LongPress）菜单的场景下，且
     * hoverScaleInterruption为true时，在触发拖拽效果前抬起手是否允许取消预览菜单弹出。true表示允许取消预览菜单弹出，false表示不允许取消预览菜单弹出。
     *
     * 默认值：false
     *
     * **说明：**
     *
     * 未设置hoverScale接口或设置了transition接口时，该参数不生效。长按时长不足以触发拖拽效果时抬起手，预览菜单hoverScale效果回退，预览菜单不弹出，并可触发原组件上绑定的click等手势事件。长按时长足以
     * 触发拖拽效果后抬起手，预览菜单正常弹出，并不再触发原组件上绑定的click等手势事件。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hoverScaleInterruption?: boolean;
}
/**
 * 预览图的缩放方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PreviewScaleMode {
    /**
     * 预览图根据[Placement]{@link Placement}自动调整预览图宽高及缩放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 0,
    /**
     * 预览图不缩放，大小保持不变。最终仍会受到安全区的限制而出现压缩、裁剪。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CONSTANT = 1,
    /**
     * 预览图缩放时保持宽高比。
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static get IDENTITY(): ContentTransitionEffect;

  /**
   * When the content changes,there is a smooth fade-in and fade-out effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static get OPACITY(): ContentTransitionEffect;
}
/**
 * 圆角类型。
 *
 * @unionmember { Length } 长度类型，用于描述尺寸单位。
 * @unionmember { BorderRadiuses } 圆角类型，用于描述组件边框圆角半径。
 * @unionmember { LocalizedBorderRadiuses } 圆角类型，用于描述组件边框圆角半径
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type BorderRadiusType = Length | BorderRadiuses | LocalizedBorderRadiuses;
/**
 * 菜单弹出时振动效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum HapticFeedbackMode {
    /**
     * 菜单弹出时不振动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DISABLED = 0,
    /**
     * 菜单弹出时振动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLED = 1,
    /**
     * 菜单振动效果跟随系统，当前为菜单有蒙层时振动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 2
}

/**
 * 菜单避让软键盘的模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MenuKeyboardAvoidMode {
  /**
   * 菜单不避让软键盘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * 菜单避让软键盘。如果空间不足，会平移或重新调整菜单大小避让软键盘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TRANSLATE_AND_RESIZE = 1
}

/**
 * 菜单项的信息。
 * **表1：同时设置offset与placement时菜单的偏移位置**
 *
 * | placement设置的值                                            | 菜单的偏移量说明                                             |
 * | ------------------------------------------------------------ | ------------------------------------------------------------ |
 * | Placement.TopLeft、Placement.Top、Placement.TopRight         | offset的x为正数，菜单相对组件向右进行偏移，offset的y为正数，菜单相对组件向上进行偏移。 |
 * | Placement.BottomLeft、Placement.Bottom、Placement.BottomRight | offset的x为正数，菜单相对组件向左进行偏移，offset的y为正数，菜单相对组件向下进行偏移。 |
 * | Placement.RightTop、Placement.Right、Placement.RightBottom   | offset的x为正数，菜单相对组件向右进行偏移，offset的y为正数，菜单相对组件向下进行偏移。 |
 *
 * **表2：同时设置arrowOffset与placement时菜单箭头的默认位置**
 *
 * | placement设置的值                           | 菜单箭头的位置说明                                           |
 * | ------------------------------------------- | ------------------------------------------------------------ |
 * | Placement.Top、Placement.Bottom             | 箭头显示在水平方向且默认居中，且距离菜单左侧边缘距离为箭头安全距离。 |
 * | Placement.Left、Placement.Right             | 箭头显示在垂直方向且默认居中，且距离菜单上侧距离为箭头安全距离。 |
 * | Placement.TopLeft、Placement.BottomLeft     | 箭头默认显示在水平方向，且距离菜单左侧边缘距离为箭头安全距离。 |
 * | Placement.TopRight、Placement.BottomRight   | 箭头默认显示在水平方向，且距离菜单右侧距离为箭头安全距离。   |
 * | Placement.LeftTop、Placement.RightTop       | 箭头默认显示在垂直方向，且距离菜单上侧距离为箭头安全距离。   |
 * | Placement.LeftBottom、Placement.RightBottom | 箭头默认显示在垂直方向，且距离菜单下侧距离为箭头安全距离。   |
 *
 * **表3：enableArrow为true且placement未设置或者值为非法值的菜单默认位置**
 * | 接口 | 菜单默认位置 |
 * |------|-------------|
 * | [bindMenu](#bindmenu) | Placement.BottomLeft |
 * | [bindMenu<sup>11+</sup>](#bindmenu11) | Placement.BottomLeft |
 * | [bindContextMenu<sup>8+</sup>](#bindcontextmenu8) | Placement.Top |
 * | [bindContextMenu<sup>12+</sup>](#bindcontextmenu12) | Placement.BottomLeft |
 * | [bindContextMenuWithResponse<sup>23+</sup>](#bindcontextmenuwithresponse23) | Placement.Top |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ContextMenuOptions {
    /**
     * 菜单弹出位置的偏移量，不会导致菜单显示超出屏幕范围。
     *
     * 默认值：{ x: 0, y: 0 }，不支持设置百分比。
     *
     * **说明：**
     *
     * 菜单类型为相对父组件区域弹出时，自动根据菜单位置属性 (placement)将区域的宽或高计入偏移量中。
     *
     * offset最终取值与placement设置值的关系参见表1：同时设置offset与placement时菜单的偏移位置。
     *
     * 未设置、异常值或者undefined时按默认{ x: 0, y: 0 }处理。若传入偏移量超出屏幕范围外，则会就近约束到屏幕范围内。
     *
     * 如果菜单调整了显示位置（与placement初始值主方向不一致），则偏移值 (offset) 失效。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default {x:0,y:0} - Percentage values are not supported.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Position;
    /**
     * 菜单组件优先显示的位置，当前位置显示不下时，会自动调整位置。
     *
     * **说明：**
     *
     * 1. 作为[bindMenu]{@link CommonMethod.default bindMenu(content: Array<MenuElement> | CustomBuilder | undefined, options?: MenuOptions)}入参时，默认值为Placement.BottomLeft。
     * 2. 作为[bindContextMenu<sup>8+</sup>]{@link CommonMethod.default bindContextMenu(content: CustomBuilder | undefined, responseType: ResponseType | undefined, options?: ContextMenuOptions)}或[bindContextMenuWithResponse<sup>23+</sup>]{@link CommonMethod.bindContextMenuWithResponse}入参时，默认效果为菜单跟随点击位置弹出。
     * 3. 作为[bindContextMenu<sup>12+</sup>]{@link CommonMethod.bindContextMenu}入参时，默认值为Placement.BottomLeft。
     * 4. placement值设置为undefined、null或缺省时，按默认值处理。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default Placement.BottomLeft
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    placement?: Placement;
    /**
     * 是否显示箭头。如果菜单的大小和位置不足以放置箭头时，不会显示箭头。
     *
     * 默认值：false，不显示箭头。
     *
     * **说明：**
     *
     * enableArrow为true时，placement未设置或者值为非法值，默认在目标物上方显示（此时菜单默认位置与接口的关系参见表3：enableArrow为true且placement未设置或者值为非法值的菜单默认位置），
     * 否则按照placement的位置优先显示。当前位置显示不下时，会自动调整位置，enableArrow为undefined时，不显示箭头。bindContextMenu从API version 10开始支持该属性；
     * bindMenu从API version 12开始支持该属性。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableArrow?: boolean;
    /**
     * 箭头在菜单处的偏移。偏移量必须合法且转换为具体数值时大于0才会生效，另外该值生效时不会导致箭头超出菜单四周的安全距离。
     *
     * 默认值：0
     *
     * 单位：vp
     *
     * **说明：**
     *
     * 箭头距菜单四周的安全距离为菜单圆角大小与箭头宽度的一半之和。
     *
     * 根据配置的placement来计算是在水平还是垂直方向上偏移。
     *
     * 箭头在菜单水平方向时，偏移量为箭头至最左侧箭头安全距离处的距离。箭头在菜单垂直方向时，偏移量为箭头至最上侧箭头安全距离处的距离。
     *
     * 根据配置的placement的不同，箭头展示的默认位置不同：
     *
     * 在菜单不发生避让的情况下，箭头最终位置与placement设置值的关系参见表2：同时设置arrowOffset与placement时菜单箭头的默认位置。
     *
     * bindContextMenu从API version 10开始支持该属性；bindMenu从API version 12开始支持该属性。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default 0vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    arrowOffset?: Length;
    /**
     * 长按悬浮菜单或使用[bindContextMenu<sup>12+</sup>]{@link CommonMethod.bindContextMenu}显示菜单的预览内容样式，可以为目标组件的截图，也可以为用户自定义的内容。
     *
     * 默认值：MenuPreviewMode.NONE，无预览内容。
     *
     * **说明：**
     *
     * - 不支持[responseType]{@link ResponseType}为ResponseType.RightClick时触发，如果[responseType]{@link ResponseType}为
     * ResponseType.RightClick，则不会显示预览内容。
     * - 当未设置preview参数或preview参数设置为MenuPreviewMode.NONE时，enableArrow参数生效。
     * - 当preview参数设置为MenuPreviewMode.IMAGE或CustomBuilder时，enableArrow为true时也不显示箭头。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default MenuPreviewMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preview?: MenuPreviewMode | CustomBuilder;
    /**
     * 设置预览图边框圆角半径。
     *
     * 默认值：16vp
     *
     * **说明：**
     *
     * 当水平方向上两个圆角半径之和的最大值超过预览图的宽度，或者垂直方向上两个圆角半径之和的最大值超过预览图的高度时，应采用预览图所能允许的最大圆角半径值。
     *
     * 圆角设置越大，圆角动画变化越快。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewBorderRadius?: BorderRadiusType;
    /**
     * 设置菜单的边框圆角半径。
     *
     * 默认值：2in1设备上默认值8vp，其他设备上默认值20vp。
     *
     * **说明：**
     *
     * 支持百分比。
     *
     * 当水平方向两个圆角半径之和的最大值超出菜单宽度或垂直方向两个圆角半径之和的最大值超出菜单高度时，采用菜单默认圆角半径值。
     *
     * 当设置Length类型且传参为异常值时，菜单圆角取默认值。
     *
     * 当设置BorderRadiuses或LocalizedBorderRadiuses类型且传参为异常值时，菜单默认没有圆角。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default 8vp for 2-in-1 devices and 20vp for other devices
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;
    /**
     * 菜单弹出后的事件回调。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAppear?: () => void;
    /**
     * 菜单消失后的事件回调。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDisappear?: () => void;
    /**
     * 菜单显示动效前的事件回调。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    aboutToAppear?: () => void;
    /**
     * 菜单退出动效前的事件回调。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    aboutToDisappear?: () => void;
    /**
     * 设置预览图与菜单布局时距上下左右边界的最小边距。
     *
     * **说明：**
     *
     * 仅支持vp、px、fp、lpx、百分比。
     *
     * 当margin设置异常值或负值时，按默认值处理。
     *
     * 若preview为CustomBuilder，设置margin.left或margin.right时，预览图取消最大栅格的宽度限制。
     *
     * 注意应避免设置过大的margin导致布局区域变小，使得预览图和菜单无法正常布局。
     *
     * 当水平方向上margin之和超过布局最大宽度时，margin.left和margin.right均不生效，按默认值处理。
     *
     * 当垂直方向上margin之和超过布局最大高度时，margin.top和margin.bottom均不生效，按默认值处理。
     *
     * 边距默认值为左右边距16vp，上边距16vp, 下边距为4vp。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 13开始，该接口支持在原子化服务中使用。<
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    layoutRegionMargin?: Margin;
    /**
     * 控制长按预览的显示效果。
     *
     * 默认值：{ scale: [0.95, 1.1], transition: undefined, hoverScale: undefined }。
     *
     * **说明：**
     *
     * 倍率设置参数小于等于0时，不生效。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewAnimationOptions?: ContextMenuAnimationOptions;
    /**
     * 菜单背板颜色。
     *
     * 默认值：Color.Transparent。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * 菜单背板模糊材质。
     *
     * 默认值：BlurStyle.COMPONENT_ULTRA_THICK。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * 背景模糊效果。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 18开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * 背景效果参数。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 18开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * 设置菜单显示和退出的过渡效果。
     *
     * **说明：**
     *
     * 菜单退出动效过程中，进行横竖屏切换，菜单会避让。二级菜单不继承自定义动效。弹出过程可以点击二级菜单，退出动效执行过程不允许点击二级菜单。
     *
     * 详细描述见[TransitionEffect]{@link TransitionEffect}对象说明。 
     *
     * 动效曲线使用弹簧曲线，在动效退出时，由于弹簧曲线的回弹震荡，菜单消失后有较长的拖尾，使得其他事件无法响应。
     *
     * 当设置transition自定义动效时，菜单的默认显示和退出动效不生效。 
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
      * 菜单组件是否响应悬停态（半折叠状态）变化，即在悬停态下是否触发避让折痕区域。
      *
      * 默认值：false，2in1设备默认为true。未设置或者值为非法值时，生效默认值。
      *
      * **说明：**
      *
      * 1. 如果菜单的弹出位置在悬停态折痕区域，菜单组件不会响应悬停态。
      * 2. 2in1设备从API version 20开始生效。
      * 3. 2in1设备仅在窗口瀑布模式下生效。
      *
      * **原子化服务API（仅ArkTS-Dyn）：** 从API version 18开始，该接口支持在原子化服务中使用。
      *
      * @default false
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @since 23 static
      */
    enableHoverMode?: boolean;
    /**
     * 菜单弹出时振动效果。
     *
     * 默认值：HapticFeedbackMode.DISABLED，菜单弹出时不振动。
     *
     * **说明：**
     *
     * 只有一级菜单可配置弹出时振动效果。
     *
     * 仅当用户启用系统触感反馈且在工程的[module.json5](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段开启
     * ohos.permission.VIBRATE振动权限时，方可生效。配置如下：
     *
     * ![menuEnableHapticFeedback](docroot://reference/apis-arkui/arkui-ts/figures/menuEnableHapticFeedback.png)
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 18开始，该接口支持在原子化服务中使用。
     *
     * @default HapticFeedbackMode.DISABLED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hapticFeedbackMode?: HapticFeedbackMode;
    /**
     * 设置菜单边框外描边颜色。
     *
     * **说明：**
     *
     * 默认值：'#19ffffff'
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @default '#19ffffff'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineColor?: ResourceColor | EdgeColors;
    /**
     * 设置菜单边框外描边宽度。
     *
     * 默认值：0vp
     *
     * **说明：**
     *
     * 不支持百分比，若需要外描边效果，outlineWidth为必填项。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @default 0vp - Percentage values are not supported.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outlineWidth?: Dimension | EdgeOutlineWidths;
    /**
     * 设置菜单是否有蒙层及蒙层样式。
     *
     * true：有蒙层；false：没有蒙层；MenuMaskType：自定义蒙层的样式。
     *
     * 默认值：菜单有预览图时默认显示蒙层，否则不显示。
     *
     * **说明：**
     *
     * 当设备配置不显示菜单蒙层时，该接口不生效。如当前在2in1设备上该接口不生效。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @default true when preview is enabled, or is false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mask?: boolean | MenuMaskType;
    /**
     * 设置菜单的模态模式。
     *
     * **说明：**
     *
     * 默认值：ModalMode.AUTO
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @default ModalMode.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    modalMode?: ModalMode;
    /**
     * 菜单弹出后的事件回调。
     *
     * **说明：**
     *
     * 1. 正常时序依次为：aboutToAppear>>onWillAppear>>onAppear>>onDidAppear>>aboutToDisappear>>onWillDisappear>>onDisappear>>onDidDisappear。
     * 2. 快速点击弹出，消失菜单时，存在onWillDisappear在onDidAppear前生效。
     * 3. 当菜单入场动效未完成时关闭菜单，该回调不会触发。
     *
     * 4.onAppear和onDidAppear触发时机相同，onDidAppear在onAppear后生效。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidAppear?: VoidCallback;
    /**
     * 菜单消失后的事件回调。
     *
     * **说明：**
     *
     * 1. 正常时序依次为：aboutToAppear>>onWillAppear>>onAppear>>onDidAppear>>aboutToDisappear>>onWillDisappear>>onDisappear>>onDidDisappear。
     * 2. onDisappear和onDidDisappear触发时机相同，onDidDisappear在onDisappear后生效。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidDisappear?: VoidCallback;
    /**
     * 菜单显示动效前的事件回调。
     *
     * **说明：**
     *
     * 1. 正常时序依次为：aboutToAppear>>onWillAppear>>onAppear>>onDidAppear>>aboutToDisappear>>onWillDisappear>>onDisappear>>onDidDisappear。
     * 2. aboutToAppear是初始化时触发调用，onWillAppear是在动画执行前触发调用，onWillAppear在aboutToAppear之后执行。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillAppear?: VoidCallback;
    /**
     * 菜单退出动效前的事件回调。
     *
     * **说明：**
     *
     * 1. 正常时序依次为：aboutToAppear>>onWillAppear>>onAppear>>onDidAppear>>aboutToDisappear>>onWillDisappear>>onDisappear>>onDidDisappear。
     * 2. 快速点击弹出，消失菜单时，存在onWillDisappear在onDidAppear前生效。
     * 3. aboutToDisappear和onWillDisappear触发时机相同，onWillDisappear在aboutToDisappear后生效。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDisappear?: VoidCallback;
    /**
     * 预览图缩放方式。
     *
     * 默认值：PreviewScaleMode.AUTO
     *
     * **说明：**
     *
     * 布局空间不足时，控制预览图的缩放方式。未设置或设置undefined按照PreviewScaleMode.AUTO处理。当设置成PreviewScaleMode.CONSTANT时，如果预览图过大，剩余的空间不足以放置菜单时，
     * 菜单将重叠显示在预览图之下。
     *
     * 预览图的最大宽高不会超过预览图最大可布局区域（窗口大小减去上下左右的安全边距）。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @default PreviewScaleMode.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewScaleMode?: PreviewScaleMode;
    /**
     * 设置预览图宽高的可布局区域，预览图的百分比依据此设置计算，最终可能因安全区限制而被压缩或裁剪。
     *
     * **说明：**
     *
     * 未设置或设置为undefined时，百分比依据窗口大小计算。若设置为AvailableLayoutArea.SAFE_AREA，预览图的可布局区域为窗口大小减去上下左右的安全边距。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    availableLayoutArea?: AvailableLayoutArea;
    /**
     * 通过设定水平与垂直偏移量，控制菜单相对于绑定组件左上角的弹出位置，与单独使用offset接口不同的是可以覆盖显示在绑定组件上。
     *
     * 默认值：{ x: undefined, y: undefined }，不支持设置百分比。
     *
     * **说明：**
     *
     * 1. 当菜单处于预览状态时，设定的偏移量将无法生效。
     * 2. 预设的placement对齐参数将不再生效。
     * 3. 叠加offset参数的偏移量，最终确定菜单的精确弹出位置。
     * 4. 当水平与垂直偏移量均设为负值时，菜单重置到Placement.BottomLeft进行显示。
     * 5. 当水平或垂直偏移量存在undefined或null时，效果等同于不设置anchorPosition，此时预设的placement对齐参数可以生效。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @default { x: 0, y: 0 }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    anchorPosition?: Position;
    /**
 	 * Define the menu theme color mode.
 	 * 
 	 * @default AnchoredColorMode.FOLLOW_TARGET
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	colorMode?: AnchoredColorMode;
    /**
     * 设置菜单是否避让软键盘。
     *
     * **说明：**
     *
     * 未设置或设置为undefined时，按照MenuKeyboardAvoidMode.NONE处理。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 23开始，该接口支持在原子化服务中使用。
     *
     * @default MenuKeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    keyboardAvoidMode?: MenuKeyboardAvoidMode;

    /**
     * 设置菜单避让软键盘的最小距离。
     *
     * **说明：**
     *
     * 未设置、设置为负数或undefined时，按照8vp处理。仅在keyboardAvoidMode设置为避让软键盘时生效。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 23开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    minKeyboardAvoidDistance?: LengthMetrics;
    /**
   * 设置菜单与目标组件之间的间距。
   *
   * **说明：**
   *
   * - 同时使用targetSpace与offset时，两者会叠加生效。推荐使用targetSpace设置菜单与目标的间距，使用offset设置菜单弹出位置的偏移量。
   * - 二级菜单会避让targetSpace范围。
   * - 设置为负数或undefined时，菜单与目标组件之间的间距为默认8vp，且子菜单不避让targetSpace。
   * - targetSpace属性在存在默认placement时可直接生效，无默认placement的场景，需配合placement属性使用才可生效。
   * - anchorPosition的优先级要高于targetSpace。
   * - 不支持设置百分比。
   *
   * **原子化服务API（仅ArkTS-Dyn）：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
   *
   * <
 	 *
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 static
 	 */
 	targetSpace?: LengthMetrics;
    /**
     * Set system-styled materials for menu. The material effect behaves differently on devices with different
     * level of computing powers. On devices with lower computing power, it affects attributes such as the
     * backgroundColor, borderWidth, borderColor, shadow. On devices with higher computing power, it adds a filter
     * effect
     * at the system material layer, which can produce an effect similar to glass.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @since 23 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * 设置菜单显示的最大高度。
     *
     * **说明：** 默认最大高度是可用高度的80%。
     *
     * 设置为0或负数以及设置为undefined时，按照默认最大高度处理。设置的菜单最大高度不能超过可用高度的100%。
     *
     * 预览图场景下不支持此能力，菜单按默认最大高度显示。
     *
     * 如果菜单所有选项的实际高度之和小于设定的高度，菜单的高度按实际高度显示。
     *
     * <
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    maxHeight?: LengthMetrics;
    /**
     * 设置菜单滚动条状态。
     *
     * 默认值：BarState.Auto
     *
     * 未设置或者设置为undefined时，按照BarState.Auto处理。
     *
     * <
     *
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
     * @default EdgeLightMode.EDGELIGHT_DISABLED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    edgeLightMode?: EdgeLightMode;
}
/**
 * 菜单项的信息，继承自[ContextMenuOptions]{@link ContextMenuOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuOptions extends ContextMenuOptions {
    /**
     * 菜单标题。
     *
     * **说明：**
     *
     * 仅在content设置为Array<[MenuElement]{@link MenuElement}> 时生效。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    title?: ResourceStr;
    /**
     * 是否在子窗口显示菜单。
     *
     * true：在子窗口显示菜单；false：不在子窗显示菜单。
     *
     * 默认值：2in1设备上为true，其他设备为false。
     *
     * **说明：**
     *
     * 仅对2in1设备生效。
     *
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
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
 * 当前屏幕触点所在组件的坐标系、id和尺寸相关信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TouchTestInfo {
    /**
     * 按压点相对于窗口左上角的x轴坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * 按压点相对于窗口左上角的y轴坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 按压点相对于父组件左上角的x轴坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    parentX: double;
    /**
     * 按压点相对于父组件左上角的y轴坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    parentY: double;
    /**
     * 按压点相对于子组件左上角的x轴坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 按压点相对于子组件左上角的y轴坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 子组件的位置和宽高。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rect: RectResult;
    /**
     * 子组件的唯一标识。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: string;
}
/**
 * 自定义事件分发结果，开发者通过返回结果来影响事件分发。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TouchResult {
    /**
     * 事件派发策略。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strategy: TouchTestStrategy;
    /**
     * 子组件的唯一标识。
     * 
     * 当strategy为TouchTestStrategy.DEFAULT时，id是可选的；当strategy是TouchTestStrategy.FORWARD_COMPETITION或
     * TouchTestStrategy.FORWARD时，id是必需的（如果没有返回id，则当成TouchTestStrategy.DEFAULT处理）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id?: string;
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FadingEdgeOptions {
    /**
     * The length of FadingEdge.
     *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NestedScrollOptions {
    /**
     * Set NestedScrollMode when the scrollable component scrolls forward
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollForward: NestedScrollMode;
    /**
     * Set NestedScrollMode when the scrollable component scrolls backward
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollBackward: NestedScrollMode;
}
/**
 * 菜单项的图标、文本和交互信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuElement {
    /**
     * 菜单项文本。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: ResourceStr;
    /**
     * 菜单项图标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * 设置菜单项图标。通过Modifier配置菜单项图标，若同时配置symbolIcon和icon的情况下，icon图标不显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolIcon?: SymbolGlyphModifier;
    /**
     * 菜单条目是否可进行交互。
     *
     * true：菜单条目可以进行交互；false：菜单条目不可以进行交互。
     *
     * 默认值：true
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enabled?: boolean;
    /**
     * 点击菜单项的事件回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: () => void;
}

/**
 * Defines the attribute modifier.
 *
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
 * 开发者需要自定义class实现ContentModifier接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ContentModifier<T> {
    /**
     * 定制内容区的Builder。
     * **T参数支持范围:**
     * ButtonConfiguration、CheckBoxConfiguration、CheckBoxGroupConfiguration、DataPanelConfiguration、
     * TextClockConfiguration、TextTimerConfiguration、ToggleConfiguration、GaugeConfiguration、LoadingProgressConfiguration、
     * MenuItemConfiguration、RadioConfiguration、ProgressConfiguration、RatingConfiguration、SliderConfiguration
     *
     * **属性支持范围:**
     *
     * 支持通用属性enabled，contentModifier。
     *
     * @returns { WrappedBuilder<CustomBuilderT<T>> } 返回封装带参builder函数的WrappedBuilder对象
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    applyContent(): WrappedBuilder<CustomBuilderT<T>>;
}
/**
 * 开发者需要自定义class实现ContentModifier接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CommonConfiguration<T> {
    /**
     * 如果该值为true，则contentModifier可用，并且可以响应triggerChange等操作，如果设置为false，则不会响应triggerChange等操作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enabled: boolean;
    /**
     * 用于将用户需要的组件信息发送到自定义内容区。
     *
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
 * 设置拖拽预览图的显示模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DragPreviewMode {
    /**
     * 系统根据拖拽场景自动改变跟手点位置，根据规则自动对拖拽背板图进行缩放变换等。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 1,
    /**
     * 禁用系统对拖拽背板图的缩放行为。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DISABLE_SCALE = 2,
    /**
     * 启用非文本类组件默认阴影效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_DEFAULT_SHADOW = 3,
    /**
     * 启用非文本类组件统一圆角效果，默认值12vp。当应用自身设置的圆角值大于默认值或modifier设置的圆角时，则显示应用自定义圆角效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_DEFAULT_RADIUS = 4,
    /**
     * 启用支持原拖拽对象灰显（透明度）效果，对文本内容拖拽不生效。用户拖起时原对象显示灰显效果，释放时原对象恢复原有效果。开启默认灰显效果后，不建议在拖拽开始后自行修改透明度，如果开发者在拖拽发起后自行修改应用透明度，则灰显效果将被
     * 覆盖，且在结束拖拽时无法正确恢复原始透明度效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_DRAG_ITEM_GRAY_EFFECT = 5,
    /**
     * 启用支持多选对象鼠标拖拽不聚拢效果，各拖拽图显示在其原始位置的相对位置，当满足多选的情况下且isMultiSelectionEnabled为true时该参数才生效。不聚拢效果优先级高于
     * [dragPreview]{@link CommonMethod#dragPreview}。不支持二次拖拽、圆角和缩放设置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_MULTI_TILE_EFFECT = 6,
    /**
     * 启用支持以拖拽预览图初始尺寸计算跟手点位置，长按浮起图和拖拽图不一致时使用。鼠标拖拽，设置DragPreviewMode.ENABLE_MULTI_TILE_EFFECT时不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW = 7
}
/**
 * 当一个节点上同时设置长按浮起预览（参考[bindContextMenu]{@link CommonMethod.bindContextMenu}）与拖拽时，使用该字段设置长按浮起预览图与拖拽预览图过渡动效方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DraggingSizeChangeEffect {
    /**
     * 发起拖拽时直接从菜单预览图切换为最终尺寸的拖拽预览图。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 发起拖拽时，由菜单预览图直接切换为拖拽预览图，尺寸逐步从菜单预览图尺寸过渡到最终预览图尺寸，设置了[DragPreviewMode]{@link DragPreviewMode}中的DISABLE_SCALE枚举值时尺寸过渡不
     * 生效。这在长按浮起预览图与拖拽预览图相同时使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SIZE_TRANSITION = 1,
    /**
     * 发起拖拽时，由菜单预览图逐步过渡切换为最终拖拽预览图，设置[DragPreviewMode]{@link DragPreviewMode}中的DISABLE_SCALE时尺寸过渡不生效。这常用于菜单预览图与拖拽预览图差异较大时
     * 使用，过渡效果包含内容透明度及尺寸变化。
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
 * 设置拖拽过程中预览图处理模式及数量角标的显示。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragPreviewOptions {
    /**
     * 表示拖拽过程中背板图处理模式。
     * 
     * 默认值：DragPreviewMode.AUTO
     * 
     * 当组件同时设置DragPreviewMode.AUTO和其它枚举值时，以DragPreviewMode.AUTO为准，其它枚举值设置无效。
     *
     * @default DragPreviewMode.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mode?: DragPreviewMode | Array<DragPreviewMode>;
    /**
     * 用于配置拖拽背板图的样式Modifier对象，可使用图片组件所支持的属性和样式来配置背板图样式，当前支持透明度，阴影，背景模糊度，圆角。文本拖拽只支持默认效果，不支持通过modifier进行自定义。
     * 
     * 1.透明度
     * 
     * 通过[opacity]{@link CommonMethod.opacity}设置不透明度，不透明度的取值范围为0-1。设置0或不设置时采用背板图透明度的默认值0.95，设置1或异常值时不透明。
     * 
     * 2.阴影
     * 
     * 通过[shadow]{@link CommonMethod.shadow}设置阴影。
     * 
     * 3.背景模糊度
     * 
     * 通过[backgroundEffect]{@link CommonMethod.backgroundEffect}或
     * [backgroundBlurStyle]{@link CommonMethod.backgroundBlurStyle}设置背景模糊度，如果两者同时设置，以后设置的属性为准。
     * 
     * 4.圆角
     * 
     * 通过[border]{@link CommonMethod.border}或[borderRadius]{@link CommonMethod.borderRadius}设置圆角，当同时在mode和modifier中设置圆角，
     * mode设置的圆角显示优先级低于modifier设置。
     * 
     * 默认值：空，无法修改属性。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    modifier?: ImageModifier;
    /**
     * 控制数量角标是否显示，或强制设置显示的数量。当设置数量角标时取值范围为[0，2<sup>31</sup>-1]，超过取值范围时会按默认状态处理。当设置为浮点数时，只显示整数部分。
     * 
     * **说明：** 
     * 
     * 在多选拖拽场景，需通过该接口设置拖拽对象的数量。
     * 
     * 默认值：true。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    numberBadge?: boolean | long;
    /**
     * 用于选择长按浮起图与拖拽预览图过渡效果。
     * 
     * 默认值：DraggingSizeChangeEffect.DEFAULT。
     *
     * @default DraggingSizeChangeEffect.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    sizeChangeEffect?: DraggingSizeChangeEffect;
}
/**
 * 设置拖拽过程中预览图浮起的交互模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DragInteractionOptions {
  /**
   * 表示拖拽过程中背板图是否支持多选聚拢效果。true表示支持多选聚拢效果，false表示不支持多选聚拢效果。该参数只在[Grid]{@link ./common}和[List]{@link ./common}组件中的
   * [GridItem]{@link ./common}组件和[ListItem]{@link ./common}组件生效。
   * 
   * 当一个item组件设置为多选拖拽时，该组件的子组件不可拖拽。聚拢组件预览图设置的优先级为[dragPreview]{@link CommonMethod#dragPreview}
   * 中的string，dragPreview中的PixelMap，组件自截图，不支持dragPreview中的Builder形式。
   * 
   * 不支持组件绑定[bindContextMenu]{@link CommonMethod.bindContextMenu}中参数存在isShown的模式。
   * 
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isMultiSelectionEnabled?: boolean;
  /**
   * 表示是否启用长按浮起阶段组件自身的默认点按效果（缩小）。true表示启用默认点按效果，false表示不启用默认点按效果。
   * 
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  defaultAnimationBeforeLifting?: boolean;
  /**
   * 设置在拖拽至可滚动组件边缘时是否触发自动滚屏。true表示触发自动滚屏，false表示不触发自动滚屏。
   * 
   * 默认值：true
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableEdgeAutoScroll?: boolean;
  /**
   * 表示拖拽时是否启用震动。true表示启用震动，false表示不启用震动。仅在存在蒙层的预览（通过[bindContextMenu]{@link CommonMethod.bindContextMenu}）场景生效。
   * 
   * **注意：** 仅当应用具备 ohos.permission.VIBRATE 权限，且用户启用了触感反馈时才会生效。
   * 
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableHapticFeedback?: boolean;
  /**
   * 表示长按拖拽时，是否禁用浮起效果。true表示禁用浮起效果，false表示不禁用浮起效果。
   * 
   * 如果设置为true，当组件支持拖拽并同时设置[bindContextMenu]{@link CommonMethod.bindContextMenu}时，仅弹出配置的自定义菜单预览。 
   * 
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isLiftingDisabled?: boolean;
}
/**
* 配置自定义拖拽过程中的预览图样式。
*
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @stagemodelonly
* @since 23 static
*/
export declare interface PreviewConfiguration {
  /**
   * 自定义配置的预览图是否仅用于浮起。
   * 
   * **说明：** 
   * 
   * 默认值为false。true表示自定义预览图仅用于浮起，false表示可用于浮起和拖拽。设置为true时，如果发起长按拖拽，浮起时的预览图为自定义配置的预览图，拖拽时的预览图不使用
   * [dragPreview](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-drag-drop.md#dragpreview11)属性，优先使用开
   * 发者在[onDragStart]{@link CommonMethod.onDragStart}中返回的预览图，如果[onDragStart]{@link CommonMethod.onDragStart}中没有返回预览图则使
   * 用组件自截图。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onlyForLifting?: boolean;
  /**
   * 组件预览builder是否在设置时加载。
   * 
   * 默认值为false。true表示组件预览builder在设置时加载，false表示组件预览builder不在设置时加载。
   *
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
   * Defines the threshold range
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
 * 悬浮气泡弹窗信息。
 * 
 * @unionmember { ResourceStr } 字符串类型，用于描述字符串入参可以使用的类型。
 * @unionmember { StyledString } 属性字符串。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TipsMessageType = ResourceStr | StyledString;
/**
 * 子窗菜单的模态模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ModalMode {
    /**
     * 自动模式，菜单组件在当前设备的默认行为。当前版本在所有设备上的效果等同于ModalMode.NONE。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 0,
    /**
     * 除菜单自身区域外，其他区域均可传递事件，下层控件可响应事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 1,
    /**
     * 菜单所在应用的窗口与菜单区域不可传递事件，其他区域可传递事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TARGET_WINDOW = 2
}
/**
 * 设置蒙层样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuMaskType {
    /**
     * 设置蒙层颜色。
     *
     * 默认值：$r('sys.color.ohos_id_color_mask_thin')
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * 设置蒙层模糊材质。
     *
     * 默认值：BlurStyle.BACKGROUND_THIN
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
}
/**
 * 预览图宽高设置为百分比时的参考可布局区域大小。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AvailableLayoutArea {
    /**
     * 参考可布局区域大小为窗口大小减去上下左右安全边距。
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface BackgroundImageOptions {
    /**
     * Sets the synchronous or asynchronous mode for background image loading.
     * The default parameter type is bool, and the default value is false.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    syncLoad?: boolean;
    /**
     * Set the repeat style of the background image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeat?: ImageRepeat;
}
/**
 * Defines background options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BackgroundOptions {
    /**
     * Set the alignment of the custom background and component.
     *
     * Anonymous Object Rectification.
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
     *     Default value: undefined
     *     A custom modifier applies only to the FrameNode of the currently bound component, not to its subnodes.
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
     * @param { Array<LayoutSafeAreaType> | undefined } [types] - The region type to expand the component's layout safe
     *     area into.
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
     * @default HitTestMode.default - Both the node and its child nodes respond to the hit test of a touch event,
     *     but its sibling nodes are blocked from the hit test. The hit test for ancestor nodes is not affected.
     * @param { HitTestMode | undefined } value - the hit test mode.
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
     * @param { Padding | LengthMetrics | LocalizedPadding | undefined } paddingValue - Indicates safeArea padding
     *     values
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
     *
     * @param { ResourceColor | EdgeColors | LocalizedEdgeColors | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors | undefined): this;
    /**
     * Sets the radius of the border rounded corners.
     * The radius is restricted by the component size. The maximum value is half of the component width or height.
     * NOTE
     * 
     * 1. **RenderStrategy.FAST**: The current component and its child components will be drawn directly
     * onto the canvas with rounded corners applied.
     * 2. **RenderStrategy.OFFSCREEN**: The current component and its child components will first be rendered onto
     * an off-screen canvas, then undergo a rounded corner clipping, and finally be drawn onto the main canvas.
     *
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
     * @param { Dimension | EdgeOutlineWidths | undefined } value - Outline thickness. Percentage values are not
     *     supported.
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
     *
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
     *
     * @default (2^31-1)vp
     * @param { Callback<ClickEvent> | undefined } event - this function callback executed when the click
     *     action is recognized
     * @param { double | undefined } distanceThreshold - the distance threshold of finger's movement when
     *     detecting a click action
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
     * @param { AccessibilityCallback | undefined } callback - A callback instance used when the component is touched
     *     after accessibility mode is enabled.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onAccessibilityHover(callback: AccessibilityCallback | undefined): this;
   
    /**
     * prompt for current component and descendants unable to handle accessibility hover event
     *
     * @param { AccessibilityTransparentCallback | undefined } callback - A callback instance used when current
     *     component and
     *     descendants not handled accessibility hover event
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
     *
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
     *     only effective when isGroup is true, the default value is true.
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
     * Its **radius** parameter must be set to **0** when the animation ends; otherwise, there may be unexpected
     * results.
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
     * @param { double | InvertOptions | undefined } value - value indicates the scale of the conversion or the options
     *     of invert.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default invert(value: double | InvertOptions | undefined): this;
    /**
     * Applies a system bar effect to the component, which means to invert colors based on the background and add a
     * blur.
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
     * Specify whether the current component participates in the fusion effect of the ancestor component
     * UnionEffectContainer
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
     * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher
     * display level.
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
     * left and right for alignment in the horizontal direction. Prioritize this API in aligning
     * child components in the relative container.
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
     * <br>If only width and aspectRatio are set, the height is calculated using the following formula: width/
     * aspectRatio.
     * <br>If only height and aspectRatio are set, the width is calculated using the following formula: height x 
     * aspectRatio.
     * <br>If width, height, and aspectRatio are all set, the explicitly set height is ignored, and the effective height
     * is
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
     * This feature is primarily designed to enhance the smoothness and efficiency of drag-and-drop operations. Below 
     * are
     * some common scenarios suitable for supporting this feature:
     * 
     * - In a file manager, when dragging a file and hovering over a folder, the folder is automatically opened.
     * - On a desktop launcher, when dragging a file and hovering over an application icon, the application is
     * automatically opened.
     *
     * @param { Callback<SpringLoadingContext> | null | undefined } callback Registers the callback for spring loading
     *     response, or
     *     sets it to null to disable the support for spring loading.
     * @param { DragSpringLoadingConfiguration } [configuration] The initialized spring loading configuration which is
     *     only used when the entire spring detecting.
     * @returns { this } - return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onDragSpringLoading(callback: Callback<SpringLoadingContext> | null | undefined, configuration?: DragSpringLoadingConfiguration): this;
    /**
     * This function is called when the drag event is end.
     *
     * @param { ((event: DragEvent, extraParams?: string) => void) | undefined } event - indicates the function to be
     *     called.
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
     * @param { CustomBuilder | DragItemInfo | string | undefined } preview - preview of the component for dragging
     *     process
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
     * @param { Callback<PreDragStatus> | undefined } callback callback - The callback will be triggered when the
     *     preDrag status change.
     * @returns { this } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onPreDrag(callback: Callback<PreDragStatus> | undefined): this;
    /**
     * Add mask text to the current component. The layout is the same as that of the current component.
     *
     * @param { string | CustomBuilder | ComponentContent<T> | undefined } value [since 23 - 24]
     * @param { OverlayOptions } [options] [since 23]
     * @param { string | CustomBuilder | ComponentContent<Object> | undefined } value [since 26.0.0]
     * @returns { this } [since 23]
     * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
     * @stagemodelonly
     * @since 23 static
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
     * @param { BlendMode | Blender | undefined } effect - When the effect type is BlendMode type, define Different
     *     hybrid modes.
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
    * 为组件绑定Tips悬浮气泡。
    *
    * > **说明：**
    * >
    * > 当绑定bindTips的组件设置通用属性[enable]{@link CommonMethod#enabled}为false时，仍支持弹出悬浮气泡。
    *
    * @param { TipsMessageType | undefined } 弹窗信息内容。设置为undefined时，默认不显示信息内容。
    * @param { TipsOptions } [options] 配置悬浮气泡的参数。<br/>
    *  默认值：
    *  {
    *      appearingTime: 700,
    *      disappearingTime: 300,
    *      appearingTimeWithContinuousOperation: 300,
    *      disappearingTimeWithContinuousOperation: 0, 
    *      enableArrow: true,
    *      arrowPointPosition: ArrowPointPosition.CENTER,
    *      arrowWidth: 16,arrowHeight: 8,
    *      showAtAnchor: TipsAnchorType.TARGET
    *  }
    * @returns { this } 返回当前组件。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default bindTips(message: TipsMessageType | undefined, options?: TipsOptions): this;
    /**
     * 为组件绑定Popup气泡。
     *
     * > **说明：**
     * >
     * > - 不支持在输入法类型窗口中使用子窗（showInSubWindow为true）的bindPopup，详情见输入法框架的约束与限制说明
     * > [createPanel]{@link @ohos.inputMethodEngine:inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo)}
     * > 。
     * >
     * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { boolean | undefined } show - 气泡显示状态。Popup气泡必须等待页面全部构建完成才能展示，因此show不能在页面构建中设置为true，
     *  否则会导致Popup气泡显示位置及形状错误。该参数从API version 18开始支持
     *  [!!语法](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
     *  取undefined时，按默认值处理。<br/>true：弹出气泡；false：关闭气泡。<br/>默认值：false
     * @param { PopupOptions | CustomPopupOptions | undefined } 配置弹出气泡的参数。取undefined时，气泡将无法弹出。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindPopup(show: boolean | undefined, popup: PopupOptions | CustomPopupOptions | undefined): this;
    /**
     * 给组件绑定菜单，点击后弹出菜单。弹出的菜单项支持图标+文本排列以及自定义组件两种功能。
     *
     * > **说明：**
     * >
     * > 从API version 20开始，该接口仅当content的入参类型为Array\<MenuElement\>时支持在
     * > [attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { Array<MenuElement> | CustomBuilder | undefined } content - 配置菜单项图标和文本的数组，或者自定义组件。设置undefined时，与上一次弹出内容保持一致。
     * @param { MenuOptions } [options] - 配置弹出菜单的参数。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindMenu(content: Array<MenuElement> | CustomBuilder | undefined, options?: MenuOptions): this;
    /**
     * 给组件绑定菜单，菜单的显隐通过控制绑定的isShow触发。弹出的菜单项支持图标+文本排列以及自定义组件两种功能。
     *
     * > **说明：**
     * >
     * > 从API version 20开始，该接口仅当content的入参类型为Array\<MenuElement\>时支持在
     * > [attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - 支持开发者通过状态变量控制显隐。菜单必须等待页面全部构建才能展示，
     *  因此不能在页面构建中设置为true，否则会导致显示位置及形状错误，该参数从API version 18开始支持
     *  [!!语法](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
     *  <br/>true：弹出菜单；false：关闭菜单。<br/>默认值：false <br/>设置undefined时与默认值保持一致。
     * @param { Array<MenuElement> | CustomBuilder | undefined } content - 配置菜单项图标和文本的数组，或者自定义组件。设置undefined时，与上一次弹出内容保持一致。
     * @param { MenuOptions } [options] - 配置弹出菜单的参数。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindMenu(isShow: boolean | Bindable<boolean> | undefined, content: Array<MenuElement> | CustomBuilder | undefined, options?: MenuOptions): this;
    /**
     * 给组件绑定菜单，控制菜单显隐的触发方式为长按或右键点击，弹出的菜单项需自定义。若需通过代码逻辑控制菜单显隐，请使用
     * [bindContextMenu<sup>12+</sup>]{@link CommonMethod.bindContextMenu}。
     *
     * > **说明：**
     * >
     * > - 不支持在输入法类型窗口中使用bindContextMenu(默认子窗实现)，详情见输入法框架的约束与限制说明
     * > [createPanel]{@link @ohos.inputMethodEngine:inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo)}
     * > 。
     * >
     * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { CustomBuilder | undefined } content - 自定义菜单内容构造器。设置undefined时，与上一次弹出内容保持一致。
     * @param { ResponseType | undefined } responseType - 菜单弹出条件，长按或者右键点击。不支持鼠标长按。
     *  设置undefined时，[responseType]{@link ResponseType}值为ResponseType.LongPress。
     * @param { ContextMenuOptions } [options] - 配置弹出菜单的参数。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContextMenu(content: CustomBuilder | undefined, responseType: ResponseType | undefined, options?: ContextMenuOptions): this;
    /**
     * 给组件绑定菜单，控制菜单显隐的触发方式为长按或右键点击，弹出的菜单需自定义样式和内容。
     *
     * > **说明：**
     * >
     * > - 不支持在输入法类型窗口中使用bindContextMenuWithResponse（默认子窗实现），详情见输入法框架的约束与限制说明
     * > [createPanel]{@link @ohos.inputMethodEngine:inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo)}
     * > 。
     * >
     * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { CustomBuilderT<ResponseType> | undefined } content - 自定义菜单内容构造器。入参为触发菜单的方式，开发者可据此实现差异化的内容。当传入undefined时，无菜单弹出。
     * @param { ContextMenuOptions } [options] - 配置弹出菜单的参数。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions): this;
    /**
     * 给组件绑定菜单，菜单的显隐通过控制绑定的isShown触发。
     *
     * 当isShown为true时，弹出菜单；为false时，隐藏菜单。菜单项支持自定义。
     *
     * 菜单弹出位置仅由placement设置决定，与点击位置无关。
     *
     * > **说明：**
     * >
     * > - 不支持在输入法类型窗口中使用bindContextMenu(默认子窗实现)，详情见输入法框架的约束与限制说明
     * > [createPanel]{@link @ohos.inputMethodEngine:inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo)}
     * > 。
     * >
     * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { boolean | Bindable<boolean> | undefined } isShow - 支持开发者通过状态变量控制显隐。菜单必须等待页面全部构建完成后才能展示，
     *  如果在页面构建前或构建中设置为true，可能导致显示位置及形状错误、无法正常弹出显示等问题。不支持长按触发拖拽。
     *  该参数从API version 18开始支持[!!语法](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
     *  <br/>true：弹出菜单；false：关闭菜单。<br/>默认值：false <br/>设置undefined时与默认值保持一致。
     * @param { CustomBuilder | undefined } content - 自定义菜单内容构造器。<br/>设置undefined时，与上一次弹出内容保持一致。
     * @param { ContextMenuOptions } [options] - 配置弹出菜单的参数。 
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default bindContextMenu(isShow: boolean | Bindable<boolean> | undefined, content: CustomBuilder | undefined, options?: ContextMenuOptions): this;
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
     * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of
     *     component changed and get close to any number in ratios defined by options.
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
     * @param { Array<ModifierKey> | undefined } keys - The modifier keys modify the action of key when the key are
     *     pressed at the same time.
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
     *
     * @param { string | undefined } nextId - set component next accessibility focus id
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityNextFocusId(nextId: string | undefined): this;
    /**
     * Sets the accessibility default foucs flag
     *
     * @param { boolean | undefined } focus - if the component is accessibility default focus,focus set true
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityDefaultFocus(focus: boolean | undefined): this;
    /**
     * Sets accessibility same page mode
     *
     * @param { AccessibilitySamePageMode | undefined } pageMode - accessibility same page mode
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityUseSamePage(pageMode: AccessibilitySamePageMode | undefined): this;
    /**
     * Sets accessibilityScrollTriggerable
     *
     * @param { boolean | undefined } isTriggerable - set property of supporting scroll in accessibility
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityScrollTriggerable(isTriggerable: boolean | undefined): this;
    /**
     * Sets the accessibility text.
     * 
     * <p><strong>NOTE</strong>
     * <br>When a component does not contain a text attribute, you can use this API to set an accessibility
     * <br>text attribute, so that accessibility services can announce the specified content for the component.
     * <br>If a component has both text content and accessibility text, only the accessibility text is announced.
     * <br>If a component is grouped for accessibility purposes but lacks both text content and accessibility
     * <br>text, the screen reader will concatenate text from its child components (depth-first traversal).
     * <br>To prioritize accessibility text concatenation, set accessibilityPreferred in accessibilityGroup.
     * </p>
     *
     * @param { Resource | string | undefined } text - set accessibility text, default value is "".
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityText(text: Resource | string | undefined): this;
    /**
     * Sets accessibility role,role indicates the custom type of the component
     *
     * @param { AccessibilityRoleType | undefined } role - set accessibility component type
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default accessibilityRole(role: AccessibilityRoleType | undefined): this;
    /**
     * Register accessibility focus callback,when the component is focused or out of focus,the callback will be executed
     *
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
     *
     * @param { AccessibilityActionInterceptCallback | undefined } callback - accessibility action intercept callback
     *     function
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
     * 
     * <p><strong>NOTE</strong>:
     * <br>Reference resource of the accessibility description. You can specify further explanation
     * <br>of the current component, for example, possible operation consequences, especially those that
     * <br>cannot be learned from component attributes and accessibility text. If a component contains
     * <br>both text information and the accessibility description, the text is read first and then the
     * <br>accessibility description, when the component is selected.</p>
     *
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
     * 
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
     *
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
     * Reuse id is used for identify the reuse type of each @ComponentV2 custom component, which can give user control 
     * of sub-component recycle and reuse.
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
     * @param { ((gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult) | undefined } callback - A
     *     callback
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
     * 
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
     * Provides a callback to set the parallel relationship between built-in gestures and gestures of other components 
     * in the response chain.
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
     * @param { ShouldRecognizerParallelWithCallback | undefined } callback - A callback instance used when a component
     *     is
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
     * @default false
     * @param { boolean | undefined } monopolize - indicate the monopoly of events
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default monopolizeEvents(monopolize: boolean | undefined): this;
    /**
     * When the component does a touch test, a user-defined callback is triggered.
     *
     * @param { Callback<TouchEvent, HitTestMode> | undefined } callback - A callback instance used when the component
     *     does a touch test.
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
     * When the events and gestures on this node and higher-priority nodes have been collected, the callback is 
     * executed.
     * This callback is used to intervene in the event and gesture collection results.
     *
     * @param { GestureCollectInterceptCallback } callback - A callback instance used when the component does a touch
     *     test.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onGestureCollectIntercept(callback: GestureCollectInterceptCallback): this;
    /**
     * Set system-styled materials for the component. The material effect behaves differently on devices with different
     * level of computing powers. On devices with lower computing power, it affects attributes such as the
     * backgroundColor, borderWidth, borderColor, shadow. On devices with higher computing power, it adds a filter effect
     * at the system material layer, which can produce an effect similar to glass.
     *
     * @param { SystemUiMaterial | undefined } material - System-styled material. Undefined indicates reverting to
     *     the effect of no system material. [since 23]
     * @returns { this } [since 23]
     * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @since 23 static
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
     * @param { string | Resource | undefined } description the state anouncement text of the component under
     *     accessibility.
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
     *
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
     *
     * @param { string | undefined } label - the inspector label.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default inspectorLabel(label: string | undefined): this;
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CommonAttribute = CommonMethod;
/**
 * 浮层的定位。
 *
 * > **说明：**
 * >
 * > align和offset都设置时，效果重叠，浮层相对于组件方位定位后，再基于当前位置的左上角进行偏移。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface OverlayOptions {
    /**
     * 设置浮层相对于组件的方位。
     *
     * 默认值：TopStart
     *
     * @default TopStart
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    align?: Alignment;
    /**
     * 设置浮层基于自身左上角的偏移量。浮层默认处于组件左上角。
     *
     * @default - the overlay is in the upper left corner of the component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: OverlayOffset;
}
/**
 * 设置浮层基于自身左上角的偏移量。浮层默认处于组件左上角。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface OverlayOffset {
    /**
     * 横向偏移量。
     *
     * 默认值：0
     *
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: double;
    /**
     * 纵向偏移量。
     *
     * 默认值：0
     *
     * 单位：vp
     *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PixelRoundPolicy {
    /**
     * Rounding for alignment with the start edge.
     *
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: PixelRoundCalcPolicy;
    /**
     * Rounding for alignment with the top edge.
     *
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    top?: PixelRoundCalcPolicy;
    /**
     * Rounding for alignment with the end edge.
     *
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: PixelRoundCalcPolicy;
    /**
     * Rounding for alignment with the bottom edge.
     *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GeometryInfo extends SizeResult {
    /**
     * Sub component borderWidth info.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth: EdgeWidth;
    /**
     * Sub component margin info.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    margin: Margin;
    /**
     * Sub component padding info.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    padding: Padding;
}
/**
 * Provides the child component layout information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Layoutable {
    /**
     * Measurement result of the child component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    measureResult: MeasureResult;
    /**
     * Unique ID of the child component.
     *
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
     *     occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getMargin(): DirectionalEdgesT<double> | undefined;
    /**
     * Call this method to get the padding of sub component.
     *
     * @returns { DirectionalEdgesT<double> | undefined } Padding of the child component, unit is vp. If some errors
     *     occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPadding(): DirectionalEdgesT<double> | undefined;
    /**
     * Obtains the border width of the child component.
     *
     * @returns { DirectionalEdgesT<double> | undefined } the borderWidth of sub component, unit is vp. If some errors
     *     occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getBorderWidth(): DirectionalEdgesT<double> | undefined;
}
/**
 * Sub component info passed from framework when measure happens.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Measurable {
    /**
     * Unique ID that the system assigns to the child component.
     *
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
     *     occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getMargin(): DirectionalEdgesT<double> | undefined;
    /**
     * Obtains the padding of the child component.
     *
     * @returns { DirectionalEdgesT<double> | undefined } the padding of sub component, unit is vp. If some errors
     *     occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPadding(): DirectionalEdgesT<double> | undefined;
    /**
     * Obtains the border width of the child component.
     *
     * @returns { DirectionalEdgesT<double> | undefined } Border width of the child component, unit is vp. If some
     *     errors
     *     occur in the internal runtime environment, returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getBorderWidth(): DirectionalEdgesT<double> | undefined;
}
/**
 * Provides the component size information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SizeResult {
    /**
     * Width obtained from the measurement result. Unit: vp.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width: double;
    /**
     * Height obtained from the measurement result. Unit: vp.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height: double;
}
/**
 * Provides the measurement result of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MeasureResult extends SizeResult {
}
/**
 * The navigation destination information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NavDestinationInfo = uiObserver.NavDestinationInfo;
/**
 * The navigation information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NavigationInfo = uiObserver.NavigationInfo;
/**
 * The router page information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type RouterPageInfo = uiObserver.RouterPageInfo;
/**
 * UIContext.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type UIContext = _UIContext;
/**
 * DrawContext.
 *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
 * @systemapi [since 23 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @since 23 static
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PromptActionDialogController = promptAction.DialogController;
/**
 * 位置和尺寸类型，用于描述组件的位置和宽高。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RectResult {
    /**
     * 水平方向横坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 竖直方向纵坐标。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 内容宽度大小。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width: double;
    /**
     * 内容高度大小。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height: double;
}
/**
 * CaretOffset info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CaretOffset {
    /**
     * Get the index of the CaretOffset
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int;
    /**
     * Get the x of the relative position.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: int;
    /**
     * Get the y of the relative position.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: int;
}
/**
 * Defines the span options of TextContentController.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextContentControllerOptions {
    /**
     * the offset that add a text at.
     *
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
     *
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
     *     <br>Default value: false.
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
     * @param { function | undefined } event - Callback function, triggered when the scrollable reaches the end
     *     position.
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
     * Sets the maximum initial velocity at the start of the fling animation that occurs after gesture-driven scrolling 
     * ends.
     *
     * @param { double | undefined } speedLimit - Maximum initial velocity at the start of the fling animation.
     *     <br>Default value: <em>9000</em>
     *     <br>Unit: vp/s
     *     <br>Value range: (0, +∞). If this parameter is set to a value less than or equal to 0, the default value is
     *     used.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default flingSpeedLimit(speedLimit: double | undefined): this;
    /**
     * Sets the content clipping area for this scrollable component.
     *
     * @param { ContentClipMode | RectShape | undefined } clip - A value from enum ContentClipMode or a customized clip
     *     rect.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default clipContent(clip: ContentClipMode | RectShape | undefined): this;
    /**
     * Set the sensitivity of rotating crown.
     *
     * @param { CrownSensitivity | undefined } sensitivity - The sensitivity of rotating crown, default value is {
     *     MEDIUM }.
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
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ScrollResult {
    /**
     * Get the actual offset by which the scrollable scrolls in vp.
     *
     * @returns { double } actual offset by which the scrollable scrolls in vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    get offsetRemain(): double;

    /**
     * Set the actual offset by which the scrollable scrolls in vp.
     *
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
 * @param { boolean } willFling - whether start fling animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnDidStopDraggingCallback = (willFling: boolean) => void;
/**
 * Defines the callback type used in onItemDragStart.
 *
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
 * @returns { boolean | int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnGetPreviewBadgeCallback = () => (boolean | int);
/**
 * Defines the callback type used in OnVisibleIndexesChange.
 *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ItemDragEventHandler {
    /**
     * This callback is triggered when the item is long pressed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onLongPress?: Callback<int>;
    /**
     * This callback is triggered when the item is dragged.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDragStart?: Callback<int>;
    /**
     * This callback is triggered when an item is moved through other items.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onMoveThrough?: OnMoveHandler;
    /**
     * This callback is triggered when the item is dropped.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDrop?: Callback<int>;
}
/**
 * Define DynamicNode.
 *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EdgeEffectOptions {
    /**
     * Enable Sliding effect when component does not full screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    alwaysEnabled: boolean;
    /**
     * Set the effective edge of the edge effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    effectEdge?: int;
}
/**
 * Enumerates the effective edge of the edge effect.
 *
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
     *     If the main axis is horizontal, it indicates width.
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
     *     If the main axis is horizontal, it indicates width.
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
     *     If the main axis is horizontal, it indicates width.
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
     *     splice(1, 1), Delete the second child.
     *     splice(1, 2, [100, 100]), Change the main size of the second and third children to 100vp.
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EditModeOptions {
    /**
     * Define whether to gather selected items in grid or list when item is long pressed for context menu.
     *
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
 * 通过设置光源和被照亮的类型实现点光源照亮周围组件的UI效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PointLightStyle {
  /**
   * 设置光源属性，光源会影响到周围标记为可以被照亮的组件，并在组件上产生光效。
   *
   * 默认值：无光源
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
   * 设置当前组件是否可以被光源照亮，以及被照亮的类型。
   *
   * 默认值：IlluminatedType.NONE
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
   * 设置组件的发光强度，取值范围为[0, 1]，超出取值范围时会转换为默认值。
   *
   * 默认值：0
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
 * 一个组件支持添加1个光源。
 *
 * @interface LightSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
declare interface LightSource {
  /**
   * 光源相对于当前组件的X坐标。
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  positionX: Dimension;
  /**
   * 光源相对于当前组件的Y坐标。
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  positionY: Dimension;
  /**
   * 光源高度。光源越高，照射范围越大。
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  positionZ: Dimension;
  /**
   * 光源强度，建议取值范围0-1。当光源强度为0时，光源不发光。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  intensity: double;
  /**
   * 光源颜色。
   *
   * 默认值：Color.White
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
 * @param { T } data
 * @returns { V }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Callback<T, V = void> = (data: T) => V;
/**
 * hover事件的回调类型。
 *
 * @param { boolean } isHover - 是否处于hover状态，true表示处于hover状态，false表示不在hover状态。
 * @param { HoverEvent} event - 获取鼠标或手写笔悬浮的位置坐标。
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
 * @param { TouchEvent } event - The value of event contains information about original accessibility hover event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type AccessibilityTransparentCallback = (event: TouchEvent) => void

/**
 * 关于区域变化相关的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface VisibleAreaEventOptions {
    /**
     * 阈值数组。其中，每个阈值代表组件可见面积（即组件在屏幕显示区的面积，只计算父组件内的面积，超出父组件部分不会计算）与组件自身面积的比值。每个阈值的取值范围为[0.0, 1.0]，如果开发者设置的阈值小于0.0，则实际取值为0.
     * 0；如果设置的阈值大于1.0，则实际取值为1.0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ratios: Array<double>;
    /**
     * 定义了开发者期望的计算间隔，单位为ms。当该字段小于100或为NaN时，默认取值为100；当该字段大于2^31-1时，默认取值为2^31-1。
     * 
     * 默认值：1000
     *
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    expectedUpdateInterval?: int;
    /**
     * 设置可见区域计算模式。
     * 
     * 当measureFromViewport设置为true时，系统在计算该组件的可见区域时，会考虑父组件的[clip]{@link CommonMethod.clip} 属性设置。如果父组件的
     * [clip]{@link CommonMethod.clip}为false，则认为其内的子组件可以超出其区域进行显示，因此超出父组件的区域也将被视为可见区域纳入计算；如果父组件的
     * [clip]{@link CommonMethod.clip}设置为true，则组件超出父组件的区域会被裁剪，无法显示，因此会被视为不可见区域进行计算。而当measureFromViewport设置为false时，则不考虑
     * [clip]{@link CommonMethod.clip}的影响，直接将组件超出父组件的部分视为不可见区域。
     * 
     * 默认值：false 
     * 
     * measureFromViewport设置为true时，祖先节点设置[scale]{@link CommonMethod.scale}属性，组件可见比例会被正确计算。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    measureFromViewport?: boolean;
}
/**
 * 组件区域变化事件的回调类型。
 *
 * @param { Area } oldValue - 区域变化前的信息，包括：目标元素的宽度、高度、相对于父元素的坐标和目标元素左上角在当前窗口坐标系中的位置坐标。
 * @param { Area } newValue - 区域变化后的信息，包括：目标元素的宽度、高度、相对于父元素的坐标和目标元素左上角在当前窗口坐标系中的位置坐标。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type AreaChangeCallback = (oldValue: Area, newValue: Area) => void;
/**
 * 区域变化相关的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface AreaChangeOptions {
  /**
   * 区域变化的计算时间间隔，单位为ms。当该字段大于2^31-1时，默认取值为2^31-1。
   * 
   * 默认值：1000
   *
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  expectedUpdateInterval?: int;
}
/**
 * 组件可见区域变化事件的回调类型。
 *
 * @param { boolean } isExpanding - 视组件的可见面积与自身面积的比值与上一次回调相比的情况而定，比值变大为true，比值变小为false。
 * @param { double } currentRatio - 触发回调时，组件可见面积与自身面积的比值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type VisibleAreaChangeCallback = (isExpanding: boolean, currentRatio: double) => void;
/**
 * 用于设置基础事件回调。方法入参为undefined的时候，重置对应的事件回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UICommonEvent {
    /**
     * 设置[点击事件]{@link ./common}的回调。
     *
     * @param { Callback<ClickEvent> | undefined } callback - 点击事件的回调函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnClick(callback: Callback<ClickEvent> | undefined): void;
    /**
     * 设置[触摸事件]{@link ./common}的回调。
     *
     * @param { Callback<TouchEvent> | undefined } callback - 触摸事件的回调函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnTouch(callback: Callback<TouchEvent> | undefined): void;
    /**
     * 设置[onAppear]{@link CommonMethod.onAppear}挂载显示事件的回调。
     *
     * @param { VoidCallback | undefined } callback - 挂载显示事件的回调函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnAppear(callback: VoidCallback | undefined): void;
    /**
     * 设置[onDisAppear]{@link CommonMethod.onDisAppear}卸载消失事件的回调。
     *
     * @param { VoidCallback | undefined } callback - 卸载消失事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnDisappear(callback: VoidCallback | undefined): void;
    /**
     * 设置[按键事件]{@link ./common}的回调。
     *
     * @param { Callback<KeyEvent> | undefined } callback - 按键事件的回调函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void;
    /**
     * 设置[onFocus]{@link CommonMethod.onFocus}获焦事件的回调。
     *
     * @param { VoidCallback | undefined } callback - 获焦事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnFocus(callback: VoidCallback | undefined): void;
    /**
     * 设置[onBlur]{@link CommonMethod.onBlur}失焦事件的回调。
     *
     * @param { VoidCallback | undefined } callback - 失焦事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnBlur(callback: VoidCallback | undefined): void;
    /**
     * 设置[onHover]{@link CommonMethod.onHover}悬浮事件的回调。
     *
     * @param { HoverCallback | undefined } callback - 悬浮事件的回调函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnHover(callback: HoverCallback | undefined): void;
    /**
     * 设置[onMouse]{@link CommonMethod.onMouse}鼠标事件的回调。
     *
     * @param { Callback<MouseEvent> | undefined } callback - 鼠标事件的回调函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnMouse(callback: Callback<MouseEvent> | undefined): void;
    /**
     * 设置[onSizeChange]{@link CommonMethod.onSizeChange}组件区域变化事件的回调。
     *
     * @param { SizeChangeCallback | undefined } callback - 组件区域变化事件的回调函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnSizeChange(callback: SizeChangeCallback | undefined): void;
    /**
     * 设置限制回调间隔的
     * [onVisibleAreaChange]{@link CommonMethod.default onVisibleAreaChange(ratios: Array<double> | undefined, event: VisibleAreaChangeCallback | undefined)}
     * 可见区域变化事件的回调。
     *
     * @param { VisibleAreaEventOptions } options - 可见区域变化相关的参数。
     * @param { VisibleAreaChangeCallback | undefined } event - 可见区域变化事件的回调函数。当组件可见面积与自身面积的比值接近options中设置的阈值时触发该回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;
}
/**
 * Defines a UIScrollableCommonEvent which is used to set event to target component.
 *
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
 * 用于设置组件绑定的手势。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UIGestureEvent {
    /**
     * 添加手势。
     *
     * @param { GestureHandler } gesture - 手势处理器对象。
     * @param { GesturePriority } [priority] - 绑定手势的优先级。
     *     <br>默认值：GesturePriority.NORMAL
     * @param { GestureMask } [mask] - 事件响应设置。
     *     <br>默认值：GestureMask.Normal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addGesture(gesture: GestureHandler, priority?: GesturePriority, mask?: GestureMask): void;
    /**
     * 绑定可与子组件手势同时触发的手势。
     *
     * @param { GestureHandler } gesture - 手势处理器对象。
     * @param { GestureMask } [mask] - 事件响应设置。
     *     <br>默认值：GestureMask.Normal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    addParallelGesture(gesture: GestureHandler, mask?: GestureMask): void;
    /**
     * 移除该组件上通过modifier绑定的设置为指定标志的手势。
     *
     * @param { string } tag - 手势处理器标志。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    removeGestureByTag(tag: string): void;
    /**
     * 清除该组件上通过modifier绑定的所有手势。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    clearGestures(): void;
}
/**
 * 开发者需要自定义class实现GestureModifier接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GestureModifier {
    /**
     * 手势更新函数。
     * 
     * 开发者可根据需要自定义实现该方法，对组件设置需要绑定的手势，支持使用if/else语法进行动态设置。若在当次手势操作过程中触发了组件上的手势动态切换，该切换效果在当次手势结束（所有手指抬起）后的下一次手势操作中生效。
     *
     * @param { UIGestureEvent } event - UIGestureEvent对象，用于设置组件需要绑定的手势。
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
 * 设置对应的按键对应的走焦目的组件，缺省则遵循默认走焦规则。
 * 
 * > **说明：**
 * >
 * > 直接使用focusControl可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用getUIContext()获取
 * > [UIContext]{@link @ohos.arkui.UIContext}实例，并使用
 * > [getFocusController]{@link @ohos.arkui.UIContext:UIContext.getFocusController}获取绑定实例的focusControl。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FocusMovement {
    /**
     * 通过tab键走焦到组件的id。
     * 
     * 默认值为重置forward为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    forward?: string;
    /**
     * 通过shift+tab键走焦到组件的id。
     * 
     * 默认值为重置backward为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backward?: string;
    /**
     * 通过方向键上键走焦到组件的id。
     * 
     * 默认值为重置up为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    up?: string;
    /**
     * 通过方向键下键走焦到组件的id。
     * 
     * 默认值为重置down为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    down?: string;
    /**
     * 通过方向键左键走焦到组件的id。
     * 
     * 默认值为重置left为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    left?: string;
    /**
     * 通过方向键右键走焦到组件的id。
     * 
     * 默认值为重置right为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    right?: string;
}
/**
 * 弹窗避让键盘时，避让模式的枚举类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum KeyboardAvoidMode {
    /**
     * 默认避让软键盘并在到达极限高度之后进行高度压缩。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 不避让软键盘
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 1
}
/**
 * Enumerates the type of area in hover mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum HoverModeAreaType {
    /**
     * Layout top half screen when the phone in hover mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP_SCREEN = 0,
    /**
     * Layout bottom half screen when the phone in hover mode.
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DateRange {
    /**
     * Defines the start date of the date range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: Date;
    /**
     * Defines the end date of the date range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: Date;
}
/**
 * Indicates the information when the provider of the embedded UI is terminated.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TerminationInfo {
    /**
     * Defines the termination code.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    code: int;
    /**
     * Defines the additional termination information.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    want?: Want;
}
/**
 * Defines the format for displaying dates and times.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DateTimeOptions = intl.DateTimeOptions;

/**
 * Defines a bindable property
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Bindable<T> {
    /**
     * Defines value of the bindable property.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly value: T;
    /**
     * Defines the callback of the bindable property which will be invoked when the property is changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly onChange: Callback<T>;
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
 * 输入事件拦截结果接口，用于监听器回调[InputEventListener]{@link InputEventListener}返回是否拦截的决策。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface InputEventInterceptResult {
  /**
   * 输入事件拦截动作。
   * 
   * CONTINUE：允许事件继续传递到UI框架。
   * 
   * BLOCK：阻止事件传递到UI框架。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  action: InputEventInterceptAction;
}

/**
 * 输入事件监听器标识对象。
 * 
 * 此对象由系统创建并返回，作为监听器的唯一标识。
 * 
 * > **说明：**
 * >
 * > - 对象为空对象，不包含任何可访问的成员。
 * >
 * > - 开发者无法主动构造此对象，只能通过[addLocalInputEventMonitor]{@link @ohos.arkui.UIContext:UIContext#addLocalInputEventMonitor}接口注册
 * > 获取。
 * >
 * > - 用于后续解除注册时验证身份。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface InputEventMonitor {
  // Empty interface, no members
  // Used only as an identifier
}

/**
 * 原始输入事件包装器类。
 * 
 * 提供统一的接口来访问不同类型的输入事件，确保类型安全和向后兼容性。
 * 
 * 此类封装了原始的MouseEvent、TouchEvent或KeyEvent对象，并通过类型安全的方法访问。
 * 
 * 此类为抽象类，开发者无法自行创建实例。系统会在触发输入事件监听器时自动创建实例并传递回调函数。
 * 
 * > **说明：**
 * >
 * > 由于监听器在事件派发给具体组件之前执行，事件中的一些字段将无法提供有效值：如触发对象[target]{@link EventTarget}、相对于组件的坐标
 * > [x]{@link MouseEvent#x}和[y]{@link MouseEvent#y}、[getCurrentLocalPosition]{@link TouchObject#getCurrentLocalPosition}和
 * > [stopPropagation]{@link TouchEvent#stopPropagation}方法、TouchEvent的[preventDefault]{@link TouchEvent#preventDefault}和
 * > [getHistoricalPoints]{@link TouchEvent#getHistoricalPoints}方法以及KeyEvent的[metaKey]{@link KeyEvent#metaKey}属性和
 * > [getModifierKeyState]{@link KeyEvent#getModifierKeyState}方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare abstract class RawInputEventWrapper {
  /**
   * 判断是否为鼠标事件。
   *
   * @returns { boolean } 判断是否为鼠标事件，如果是鼠标事件则返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isMouseEvent(): boolean;

  /**
   * 判断是否为触摸事件。
   *
   * @returns { boolean } 判断是否为触摸事件，如果是触摸事件则返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isTouchEvent(): boolean;

  /**
   * 判断是否为按键事件。
   *
   * @returns { boolean } 判断是否为按键事件，如果是按键事件则返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isKeyEvent(): boolean;

  /**
   * 获取鼠标事件。
   *
   * @returns { MouseEvent | null } 获取鼠标事件，如果是鼠标事件则返回事件对象，否则返回null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  asMouseEvent(): MouseEvent | null;

  /**
   * 获取触摸事件。
   *
   * @returns { TouchEvent | null } 获取触摸事件，如果是触摸事件则返回事件对象，否则返回null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  asTouchEvent(): TouchEvent | null;

  /**
   * 获取按键事件。
   *
   * @returns { KeyEvent | null } 获取按键事件，如果是按键事件则返回事件对象，否则返回null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  asKeyEvent(): KeyEvent | null;
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
 * 输入事件监听器回调函数类型。
 * 
 * > **说明：**
 * >
 * > - RawInputEventWrapper是抽象类，开发者无法使用`new`运算符创建实例。
 * >
 * > - 系统会在事件触发时自动创建实例并通过此参数传递给回调函数。
 * >
 * > - 当前回调参数event仅会封装以下原始输入事件类型：
 * > [MouseEvent]{@link MouseEvent}、[TouchEvent]{@link TouchEvent}、[KeyEvent]{@link KeyEvent}。开发者可通过
 * > [asMouseEvent]{@link RawInputEventWrapper#asMouseEvent}、[asTouchEvent]{@link RawInputEventWrapper#asTouchEvent}、
 * > [asKeyEvent]{@link RawInputEventWrapper#asKeyEvent}获取对应事件对象。
 * >
 * > - 请勿在回调中执行耗时操作（如复杂计算或网络请求），否则可能导致应用卡顿。
 * >
 * > - 监听器在UI线程中同步执行会直接阻塞事件处理流程。建议只进行简单的判断和计算。
 *
 * @param { RawInputEventWrapper } event - 输入事件包装器，系统自动创建和传递，开发者无需手动创建。
 * @returns { InputEventInterceptResult } 事件拦截结果。
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