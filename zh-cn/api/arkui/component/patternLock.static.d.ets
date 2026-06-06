'use static';
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
import { ResourceColor, Length } from "./units";
import { LengthMetrics } from '../Graphics';
import { CommonMethod, Callback } from './common';
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier } from "./common";

/**
 * 图案密码状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PatternLockChallengeResult {
    /**
     * 图案密码正确。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CORRECT = 1,
    /**
     * 图案密码错误。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    WRONG = 2
}
/**
 * 圆环样式的参数说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CircleStyleOptions {
    /**
     * 背景圆环颜色。
     * 默认值：'# 33182431'。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * 背景圆环的半径。
     * 默认值：circleRadius的1.833（即11/6）倍。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: LengthMetrics;
    /**
     * 选中宫格圆点后的波浪效果开关。
     * true：显示波浪效果；false：不显示波浪效果。
     * 默认值：true。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableWaveEffect?: boolean;
    /**
     * 背景圆环是否显示在宫格圆点上层。
     * true：背景圆环显示在宫格圆点上层，遮盖宫格圆点；false：背景圆环显示在宫格圆点下层，不遮盖宫格圆点。
     * 默认值：false。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableForeground?: boolean;
}
/**
 * PatternLock组件的控制器，用于重置组件状态和设置图案密码的正确或错误状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PatternLockController {
    /**
     * PatternLockController的构造函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor();
    /**
     * 重置组件状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reset(): void;
    /**
     * 设置图案密码的正确或错误状态。
     *
     * @param { PatternLockChallengeResult } result - 图案密码状态。包括正确和错误状态。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setChallengeResult(result: PatternLockChallengeResult): void;
}
/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。
 *
 * 除支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)外，还支持以下事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface PatternLockAttribute extends CommonMethod {
    /**
     * 设置组件的宽度和高度（宽高相同）。当设置为0或负数时，组件不显示。
     *
     * > **说明：**
     * >
     * > PatternLock组件设置了通用属性宽高比[aspectRatio]{@link CommonMethod#aspectRatio}，且不等于1时（组件尺寸被设定为长方形），九宫格依然绘制为正方形（超出组件范围）。
     *
     * @param { Length | undefined } value - 组件的宽度和高度。默认值：288vp<br/>设置undefined时按默认值处理。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default sideLength(value: Length | undefined): this;
    /**
     * 设置宫格中圆点的半径。设置为0或负数时，取默认值。
     *
     * @param { Length | undefined } value - 宫格中圆点的半径。<br/>默认值：6vp<br/>取值范围：(0, sideLength/11]。设置小于等于0的值时，按默认值处理；超过最大值时，
     *     按最大值处理。<br/>设置undefined时按默认值处理。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default circleRadius(value: Length | undefined): this;
    /**
     * 设置背景颜色。
     *
     * @param { ResourceColor | undefined } value - 背景颜色，默认为透明色。<br/>设置undefined时按默认值处理。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default backgroundColor(value: ResourceColor | undefined): this;
    /**
     * 设置宫格圆点在“未选中”状态的填充颜色。
     *
     * @param { ResourceColor | undefined } value - 宫格圆点在“未选中”状态的填充颜色。<br/>默认值：'#ff182431'<br/>设置undefined时按默认值处理。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default regularColor(value: ResourceColor | undefined): this;
    /**
     * 设置宫格圆点在“选中”状态的填充颜色。
     *
     * @param { ResourceColor | undefined } value - 宫格圆点在“选中”状态的填充颜色。<br/>默认值：'#ff182431'<br/>设置undefined时按默认值处理。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedColor(value: ResourceColor | undefined): this;
    /**
     * 设置宫格圆点在“激活”状态的填充颜色，“激活”状态为手指经过圆点但还未选中的状态。
     *
     * @param { ResourceColor | undefined } value - 宫格圆点在“激活”状态的填充颜色。<br/>默认值：'#ff182431'<br/>设置undefined时按默认值处理。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default activeColor(value: ResourceColor | undefined): this;
    /**
     * 设置连线的颜色。
     *
     * @param { ResourceColor | undefined } value - 连线的颜色。<br/>默认值：'#33182431'<br/>设置undefined时按默认值处理。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default pathColor(value: ResourceColor | undefined): this;
    /**
     * 设置连线的宽度。设置为0或负数时连线不显示。
     *
     * @param { double | string | undefined } value - 连线的宽度。<br/>默认值：12vp<br/>取值范围：(0, sideLength/3]，设置为0或负数时连线不显示，超过最大值
     *     按最大值处理。<br/>设置undefined时按默认值处理。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default pathStrokeWidth(value: double | string | undefined): this;
    /**
     * 密码输入结束时触发该回调。
     *
     * @param { Callback<Array<int>> | undefined } callback
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onPatternComplete(callback: Callback<Array<int>> | undefined): this;
    /**
     * 设置在完成密码输入后再次在组件区域按下时是否重置组件状态。
     *
     * @param { boolean | undefined } value - 在完成密码输入后再次在组件区域按下时是否重置组件状态。<br/>true：完成密码输入后再次在组件区域按下时重置组件状态（即清除之前输入的密码）；
     *     false：完成密码输入后再次在组件区域按下时不重置组件状态。<br/>默认值：true<br/>设置undefined时按默认值处理。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default autoReset(value: boolean | undefined): this;
    /**
     * 密码输入选中宫格圆点时触发该回调。
     *
     * 回调参数为选中宫格圆点顺序的数字，数字为选中宫格圆点的索引值（第一行圆点从左往右依次为0、1、2，第二行圆点从左往右依次为3、4、5，第三行圆点从左往右依次为6、7、8）。
     *
     * @param {  Callback<int> | undefined } callback - 密码输入选中宫格圆点时触发该回调。<br/>设置为undefined时不会执行回调。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDotConnect(callback: Callback<int> | undefined): this;
    /**
     * 设置宫格圆点在“激活”状态下的背景圆环样式。
     *
     * @param { CircleStyleOptions | undefined } options - 宫格圆点在“激活”状态的背景圆环样式。设置undefined时按默认样式处理。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default activateCircleStyle(options: CircleStyleOptions | undefined): this;
    /**
     * 设置未选中的宫格圆点在密码路径经过时是否自动选中。
     *
     * @param { boolean } skipped - 未选中的宫格圆点在密码路径经过时是否自动选中。<br/>true：跳过选中密码路径经过的宫格圆点；false：自动选中密码路径经过的宫格圆点。默认值：false。<br
     *     />设置undefined时按默认值处理。
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default skipUnselectedPoint(skipped: boolean | undefined): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<PatternLockAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<PatternLockAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * 设置PatternLock组件选项。
     *
     * @param { PatternLockController } [controller] - PatternLock组件控制器。
     * @returns { PatternLockAttribute } 返回PatternLock属性实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setPatternLockOptions(controller?: PatternLockController): this;
}
/**
 * 创建图案密码锁组件。
 *
 * @param { PatternLockController } [controller] - 设置PatternLock组件控制器，可用于重置组件状态和设置图案密码的正确或错误状态。
 * @returns { PatternLockAttribute } The attribute of the PatternLock.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function PatternLock(
    controller?: PatternLockController
): PatternLockAttribute;

/**
 * 定义PatternLock组件。
 *
 * @param { CustomBuilderT<PatternLockAttribute> } style - PatternLock属性实例。
 * @returns { PatternLockAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function PatternLock(
    style: CustomBuilderT<PatternLockAttribute>,
): PatternLockAttribute;