
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

import { Resource } from '../../global/resource';

import { CommonMethod, PickerTextStyle, Callback, BlurStyle, PickerDialogButtonStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, DateRange, BackgroundBlurStyleOptions, BackgroundEffectOptions, DistortionMode, EdgeLightMode, SystemUiMaterial } from './common';

import { Offset, ResourceColor, VoidCallback } from "./units";

import { ComponentBuilder, CustomBuilder } from './builder';

import { AttributeModifier } from "./common";

/**
 * 对齐方式类型。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum CalendarAlign {

  /**
     * 设置选择器与入口组件的对齐方式为左对齐。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  START = 0,

  /**
     * 设置选择器与入口组件的对齐方式为居中对齐。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CENTER = 1,

  /**
     * 设置选择器与入口组件的对齐方式为右对齐。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  END = 2
}

/**
 * 日历选择器组件的参数说明。
 *
 * @interface CalendarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CalendarOptions {

  /**
     * 描述日期选中态底板样式。
     * 
     * 取值范围：[0.0, 16.0]
     * 
     * 单位：vp
     * 
     * 默认值：16.0，即底板样式为圆形。
     * 
     * **说明：**
     * 
     * 当hintRadius为0.0时表示底板样式为直角矩形；当hintRadius为(0.0, 16.0)时，底板样式为圆角矩形；当hintRadius为负数或大于16.0时，恢复为默认值16.0。
     *
   * @type { ?(double | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  hintRadius?: double | Resource;

  /**
     * 设置选中项的日期。选中的日期未设置或日期格式不符合规范则为默认值。
     * 
     * 默认值：当前系统日期。
     * 
     * 取值范围：[Date('0001-01-01'), Date('5000-12-31')]
     *
   * @type { ?Date }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selected?: Date;

  /**
     * 设置开始日期。
     * 
     * 默认值：Date('0001-01-01')
     * 
     * 取值范围：[Date('0001-01-01'), Date('5000-12-31')]
     *
   * @type { ?Date }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start?: Date;

  /**
     * 设置结束日期。
     * 
     * 默认值：Date('5000-12-31')
     * 
     * 取值范围：[Date('0001-01-01'), Date('5000-12-31')]
     *
   * @type { ?Date }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end?: Date;

  /**
     * 设置禁用日期区间。
     * 
     * **说明：**
     * 
     * 1. 若日期区间内的开始日期或结束日期未设置或设置为异常值，则该日期区间无效。
     * 2. 若在日期区间内，结束日期早于开始日期，则该日期区间无效。
     * 3. 当在入口区选定某日期，通过上下箭头调整日期进行增加或减少操作时，若遇到禁用日期，系统将自动跳过整个禁用区间。
     *
   * @type { ?DateRange[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  disabledDateRange?: DateRange[];
}

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}，还支持以下事件：
 *
 * @extends CommonMethod
 * @interface CalendarPickerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface CalendarPickerAttribute extends CommonMethod {
  /**
     * 设置选择器与入口组件的对齐方式。
     *
   * @param { CalendarAlign | undefined } alignType - 对齐方式的类型。<br/>默认值：CalendarAlign.END
     *     <br/>当alignType的值为undefined时，使用默认值。
   * @param { Offset } [offset] - 按照对齐方式的类型对齐后，选择器相对入口组件的偏移量。<br/>默认值：{dx: 0, dy: 0}
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default edgeAlign(alignType: CalendarAlign | undefined, offset?: Offset): this;

  /**
     * 入口区的文本颜色、字号、字体粗细。
     *
   * @param { PickerTextStyle | undefined } value - 设置入口区的文本颜色、字号、字体粗细。<br/>默认值：<br/>{<br/>color:
     *     '#ff182431',<br/>font: {<br/>size: '16fp', <br/>weight: FontWeight.Regular<br/>}<br/>}
     *     <br/>当value的值为undefined时，使用默认值。
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textStyle(value: PickerTextStyle | undefined): this;

  /**
     * 选择日期时触发该事件。不能通过双向绑定的状态变量触发。
     *
   * @param { Callback<Date> | undefined } callback - 选中的日期值。<br>当callback的值为undefined时，不使用回调函数。
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(callback: Callback<Date> | undefined): this;

  /**
     * 设置日历选择器中系统当前日期是否保持高亮显示。
     *
   * @param { boolean | undefined } enabled - 设置日历选择器中系统当前日期是否保持高亮显示。<br/>- true：系统当前日期在日历
     *     选择器内保持高亮显示。<br/>- false：系统当前日期在日历选择器内不保持高亮显示。
     *     <br/>默认值：false<br/>当enabled的值为undefined时，使用默认值。
   * @returns { CalendarPickerAttribute } the attribute of the calendar picker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default markToday(enabled: boolean | undefined): this;

  /**
     * 设置属性修改器。
     *
   * @param { AttributeModifier<CalendarPickerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { CalendarPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<CalendarPickerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 日历选择器弹窗选项。
 * 
 * 继承自[CalendarOptions]{@link CalendarOptions}。
 * 
 * > **说明：**
 * >
 * > 在应用窗口缩小过程中，弹窗的宽度会被不断压缩，当缩小到一定程度时会导致其内容无法完整显示，保证CalendarPickerDialog内容能够
 * > 完整显示的最小窗口宽度为386vp。
 *
 * @extends CalendarOptions
 * @interface CalendarDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CalendarDialogOptions extends CalendarOptions {

  /**
     * 点击弹窗中的“确定”按钮时触发该回调。
     * 
     * 回调函数的参数表示选中的日期值。
     *
   * @type { ?Callback<Date> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onAccept?: Callback<Date>;

  /**
     * 点击弹窗中的“取消”按钮时触发该回调。
     *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCancel?: VoidCallback;

  /**
     * 选择弹窗中日期使当前选中项改变时触发该回调。
     * 
     * 回调函数的参数表示选中的日期值。
     *
   * @type { ?Callback<Date> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onChange?: Callback<Date>;

  /**
     * 弹窗背板颜色。
     * 
     * 默认值：Color.Transparent
     * 
     * **说明：** 
     * 
     * 当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则显示的颜色将不符合预期效果。
     *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundColor?: ResourceColor;

  /**
     * 弹窗背板模糊材质。
     * 
     * 默认值：BlurStyle.COMPONENT_ULTRA_THICK
     * 
     * **说明：** 
     * 
     * 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，
     * 否则显示的颜色将不符合预期效果。
     *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundBlurStyle?: BlurStyle;

  /**
     * 背景模糊效果。
     *
   * @type { ?BackgroundBlurStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
     * 背景效果参数。
     *
   * @type { ?BackgroundEffectOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
     * 设置确认按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、
     * 按钮是否默认响应Enter键。
     * 
     * **说明：**
     * 
     * acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，二者primary字段均配置为true时均不生效。
     *
   * @type { ?PickerDialogButtonStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
     * 设置取消按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、
     * 按钮是否默认响应Enter键。
     * 
     * **说明：**
     * 
     * acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，二者primary字段均配置为true时均不生效。
     *
   * @type { ?PickerDialogButtonStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
     * 弹窗弹出后的事件回调。
     * 
     * **说明：**
     * 
     * 1.正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
     * 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
     * 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
     * 4. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。
     *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidAppear?: VoidCallback;

  /**
     * 弹窗消失后的事件回调。
     * 
     * **说明：**
     * 
     * 1.正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
     *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;

  /**
     * 弹窗显示动效前的事件回调。
     * 
     * **说明：**
     * 
     * 1.正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
     * 2.在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
     *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillAppear?: VoidCallback;

  /**
     * 弹窗退出动效前的事件回调。
     * 
     * **说明：**
     * 
     * 1.正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
     * 2.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
     *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
     * 设置弹窗背板的阴影。
     * 
     * 当设备为2in1时，默认场景下，获焦时阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦时为ShadowStyle.OUTER_FLOATING_SM。
     *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
     * 是否响应悬停态。
     * 
     * - true：响应悬停态。
     * - false：不响应悬停态。
     * 
     * 默认值：false
     *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableHoverMode?: boolean;

  /**
     * 悬停态下弹窗默认展示区域。
     * 
     * 默认值：HoverModeAreaType.BOTTOM_SCREEN。
     *
   * @type { ?HoverModeAreaType }
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  hoverModeArea?: HoverModeAreaType;

  /**
     * 设置日历选择器弹窗中系统当前日期是否保持高亮显示。
     * 
     * - true：系统当前日期在日历选择器弹窗内保持高亮显示。
     * - false：系统当前日期在日历选择器弹窗内不保持高亮显示。
     * 
     * 默认值：false
     *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  markToday?: boolean;

  /**
     * 为对话框设置系统风格的材质。不同的材质具有不同的效果，可以影响对话框的背景颜色、边框、阴影等视觉属性。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  systemMaterial?: SystemUiMaterial;

  /**
     * 设置对话框的形变动画模式。
     *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  distortionMode?: DistortionMode;

  /**
     * 设置对话框的边缘光动画模式。
     *
   * @default EdgeLightMode.EDGELIGHT_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  edgeLightMode?: EdgeLightMode;
}

/**
 * Defines CalendarPickerDialog which uses show method to show CalendarPicker dialog.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class CalendarPickerDialog {

  /**
     * 定义日历选择器弹窗。
     *
   * @param { CalendarDialogOptions } [options] - 配置日历选择器弹窗参数。参数缺省时无法弹出弹窗。
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static show(options?: CalendarDialogOptions): void;
}

/**
 * 定义日历选择器组件。
 *
 * @param { CalendarOptions } [options] - calendar options.
 * @returns { CalendarPickerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function CalendarPicker(
    options?: CalendarOptions
): CalendarPickerAttribute;
