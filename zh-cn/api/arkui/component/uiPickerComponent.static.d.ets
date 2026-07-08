
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { ResourceColor, BorderRadiuses, LocalizedBorderRadiuses } from "./units";

import { CommonMethod } from './common';

import { LengthMetrics } from './../Graphics';

import { AttributeModifier } from "./common";

import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * UIPickerComponent容器的参数说明。
 *
 * @interface UIPickerComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UIPickerComponentOptions {

  /**
   * 选中项的索引值。</br>取值范围：[0, 子组件的个数-1]内的整数。不在取值范围内时，使用默认值；设置小数时，使用向下取整后的整数。
   * </br>默认值：0
   * 
   * **说明：**
   * 
   * 统计子组件的个数时，不包含Row容器内的子组件，Row容器及其子组件共同视为1个子组件。
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedIndex?: int;
}

/**
 * 定义[onChange]{@link onChange}和[onScrollStop]{@link onScrollStop}事件的回调类型。
 *
 * @typedef {function} OnUIPickerComponentCallback
 * @param { int } selectedIndex - 当前选中项的索引值。</br>取值范围：[0, 子组件的个数-1]内的整数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type OnUIPickerComponentCallback = (selectedIndex: int) => void;

/**
 * 设置选中项指示器的类型。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PickerIndicatorType {

  /**
   * 通过给选中项添加背景，标识选中项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BACKGROUND = 0,

  /**
   * 通过在选中项的上下边缘添加分割线，标识选中项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DIVIDER = 1
}

/**
 * 选中项指示器样式的参数说明。
 *
 * @interface PickerIndicatorStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PickerIndicatorStyle {

  /**
   * 选中项指示器的类型。
   * 
   * 默认值：PickerIndicatorType.BACKGROUND
   * 
   * 当type的值为小数时，使用向下取整后的整数；当type的值不在PickerIndicatorType枚举范围内时，使用默认值。
   *
   * @type { PickerIndicatorType } type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: PickerIndicatorType;

  /**
   * 分割线的线宽。
   * 
   * 默认值：2.0px
   * 
   * 单位：与LengthMetrics一致。
   * 
   * 取值范围：[0, 选中项高度的一半（即20vp）]。strokeWidth小于0或大于选中项高度的一半时使用默认值。不支持“百分比”类型。
   * 
   * **说明：**
   * 
   * 1. 当type为PickerIndicatorType.DIVIDER时生效。
   * 2. 通过LengthMetrics.resource方式设置时，使用非长度属性的值会按照0vp处理。
   *
   * @type { ?LengthMetrics } strokeWidth
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strokeWidth?: LengthMetrics;

  /**
   * 分割线的颜色。
   * 
   * 默认值：'sys.color.comp_divider'
   * 
   * **说明：**
   * 
   * 当type为PickerIndicatorType.DIVIDER时生效。
   *
   * @type { ?ResourceColor } dividerColor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dividerColor?: ResourceColor;

  /**
   * 分割线与UIPickerComponent容器侧边起始端的距离。
   * 
   * 默认值：0
   * 
   * 单位：与LengthMetrics一致。
   * 
   * 取值范围：startMargin与endMargin之和不得超过UIPickerComponent容器的宽度。设置小于0或startMargin与endMargin之和超过
   * UIPickerComponent容器的宽度时，使用默认值。不支持“百分比”类型。
   * 
   * **说明：**
   * 
   * 当type为PickerIndicatorType.DIVIDER时生效。
   *
   * @type { ?LengthMetrics } startMargin
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  startMargin?: LengthMetrics;

  /**
   * 分割线与UIPickerComponent容器侧边结束端的距离。
   * 
   * 默认值：0
   * 
   * 单位：与LengthMetrics一致。
   * 
   * 取值范围：startMargin与endMargin之和不得超过UIPickerComponent容器的宽度。设置小于0或startMargin与endMargin之和超过
   * UIPickerComponent容器的宽度时，使用默认值。不支持“百分比”类型。
   * 
   * **说明：**
   * 
   * 当type为PickerIndicatorType.DIVIDER时生效。
   *
   * @type { ?LengthMetrics } endMargin
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  endMargin?: LengthMetrics;

  /**
   * 选中项背景的颜色。
   * 
   * 默认值：'sys.color.comp_background_tertiary'
   * 
   * **说明：**
   * 
   * 当type为PickerIndicatorType.BACKGROUND时生效。
   *
   * @type { ?ResourceColor } backgroundColor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundColor?: ResourceColor;

  /**
   * 选中项背景的边框圆角半径。
   * 
   * 默认值：{ value:12, unit:LengthUnit.vp }，即四个圆角半径均为12vp。
   * 
   * 取值范围：取选中项的宽和高之中较小的边长为x，最大不超过x的一半。当取值小于0时，使用默认值；当取值大于最大值时，使用最大值。
   * 
   * **说明：**
   * 
   * 1. 当type为PickerIndicatorType.BACKGROUND时生效。
   * 2. [LengthMetrics]{@link ../../../arkui/Graphics:LengthMetrics}：统一设置四个圆角半径的大小和单位。
   * 3. [BorderRadiuses]{@link BorderRadiuses}：单独设置四个圆角半径的大小（单位为vp）。
   * 4. [LocalizedBorderRadiuses]{@link LocalizedBorderRadiuses}：单独设置四个圆角半径的大小和单位。
   *
   * @type { ?(LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses) } borderRadius
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderRadius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
}

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @extends CommonMethod
 * @interface UIPickerComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UIPickerComponentAttribute extends CommonMethod {
  /**
   * 滑动选择器选项时，若选中项发生变化，触发该事件。
   * 
   * > **说明：**
   * >
   * > 如果某个选项有一半以上的区域进入选中项区域内，则该选项成为选中项。
   * >
   * > 选中项区域可通过设置[selectionIndicator]{@link selectionIndicator}进行标识。如果设置选中项指示器为背景，则背景区域即为
   * > 选中项区域。如果设置选中项指示器为分割线，则上下分割线的中心线内的区域为选中项区域。
   *
   * @param { OnUIPickerComponentCallback | undefined } callback - 当选中项发生变化时触发的回调函数。<br/>当callback的值为
   *      undefined时，不使用回调函数。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(callback: OnUIPickerComponentCallback | undefined): UIPickerComponentAttribute;

  /**
   * 选择器滑动停止时，触发该事件。选择器滑动停止指某次行为触发的滑动动画完全结束。如果某次滑动动画还未结束时又触发了新的滑动动画，
   * 则不属于滑动停止。
   *
   * @param { OnUIPickerComponentCallback | undefined } callback - 当选择器滑动停止时触发的回调函数。<br/>当callback的值为
   *      undefined时，不使用回调函数。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollStop(callback: OnUIPickerComponentCallback | undefined): UIPickerComponentAttribute;

  /**
   * 设置选项列是否可循环滚动。
   *
   * @param { boolean | undefined } isLoop
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default canLoop(isLoop: boolean | undefined): UIPickerComponentAttribute;

  /**
   * 设置是否开启触控反馈。
   * 
   * 开启触控反馈时，需要在工程的src/main/module.json5文件的"module"内配置requestPermissions字段开启振动权限。
   *
   * @param { boolean | undefined } enable - 设置是否开启触控反馈。<br/>- true：开启触控反馈。<br/>- false：不开启触控反馈。
   *     <br/>默认值：true<br/>当enable的值为undefined时，使用默认值。<br/>开启后，是否存在触控反馈取决于系统硬件支持情况。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableHapticFeedback(enable: boolean | undefined): UIPickerComponentAttribute;

  /**
   * 设置选中项指示器的样式。
   *
   * @param { PickerIndicatorStyle | undefined } style
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectionIndicator(style: PickerIndicatorStyle | undefined): UIPickerComponentAttribute;

  /**
   * 设置属性修改器。
   *
   * @param { AttributeModifier<UIPickerComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<UIPickerComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * 设置UIPickerComponent容器每个选项的高度。未通过该接口设置时，每个选项的高度为40vp。
   *
   * @param { LengthMetrics | undefined } height - 选项高度。<br/>单位：与
   *     [LengthMetrics]{@link ../../../arkui/Graphics:LengthMetrics}一致。<br/>取值范围：[40vp, 64vp]<br/>设置小于40vp或
   *     大于64vp时，使用默认值40vp。<br/>当height的值为undefined时，使用默认值40vp。<br/>不支持"百分比"类型。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default itemHeight(height: LengthMetrics | undefined): this;

  /**
   * 设置UIPickerComponent容器可见选项的数量。未通过该接口设置时，可见选项的数量为7行。
   *
   * @param { int | undefined } count - 可见选项数量。<br/>取值范围：[2, 9]内的整数。<br/>设置小数时，使用向下取整后的整数。
   *     <br/>设置偶数时，自动转为不小于该值的奇数（例如2变为3、8变为9）。
   *     <br/>设置不在取值范围内时，使用默认值7行。<br/>当count的值为undefined时，使用默认值7行。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default displayedItemCount(count: int | undefined): this;
}

/**
 * 定义UIPickerComponent组件。
 *
 * @param { UIPickerComponentOptions } [options] - picker options.
 * @param { CustomBuilder } [content_]
 * @returns { UIPickerComponentAttribute } - The attribute of the Picker.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function UIPickerComponent(
    options?: UIPickerComponentOptions, 
    content_?: CustomBuilder
): UIPickerComponentAttribute;
