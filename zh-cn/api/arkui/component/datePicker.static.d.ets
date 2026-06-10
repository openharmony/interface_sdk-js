
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

import { CommonMethod, PickerTextStyle, PickerDialogButtonStyle, Rectangle, Callback, BlurStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, BackgroundBlurStyleOptions, BackgroundEffectOptions, DateTimeOptions, Bindable, DistortionMode, EdgeLightMode, SystemUiMaterial } from './common';

import { ResourceColor, Offset, VoidCallback } from "./units";

import { DialogAlignment } from "./alertDialog";

import { CrownSensitivity } from "./enums";

import { ComponentBuilder, CustomBuilder } from './builder';

import { AttributeModifier } from "./common";

/**
 * 日期选择器返回的时间格式。
 *
 * @interface DatePickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DatePickerResult {

  /**
     * 选中日期的年。
     * 
     * 取值范围：与设置的start、end有关，如果没有设置start、end，取值范围为[1970, 2100]。
     *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  year?: int;

  /**
     * 选中日期的月的索引值，索引从0开始，0表示1月，11表示12月。
     * 
     * 取值范围：与设置的start、end有关，如果没有设置start、end，取值范围为[0, 11]。
     *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  month?: int;

  /**
     * 选中日期的日。
     * 
     * 取值范围：与设置的start、end有关，如果没有设置start、end，取值范围为[1, 31]。
     *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  day?: int;
}

/**
 * 设置日期展示模式。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DatePickerMode {

  /**
     * 显示年、月、日三列。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DATE = 0,

  /**
     * 显示年、月二列。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  YEAR_AND_MONTH = 1,

  /**
     * 显示月、日二列。
     * 
     * 在此模式下，年份始终保持不变。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MONTH_AND_DAY = 2
}

/**
 * 日期选择器组件的参数说明。
 * 
 * **说明：**
 *
 * - Date的使用请参考[TimePickerOptions]{@link TimePickerOptions}。
 *
 * - 在DatePicker组件滑动过程中修改DatePickerOptions中的属性，会导致这些属性无法生效。
 * 
 * **说明：**
 *
 * - 先处理起始日期与结束日期的异常情形，再处理选中日期的异常情形。
 *
 * @interface DatePickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DatePickerOptions {

  /**
     * 指定选择器的起始日期。
     * 
     * 默认值：Date('1970-1-1')
     * 
     * 取值范围：[Date('1900-01-31'), Date('2100-12-31')]
     *
   * @type { ?Date }
   * @default Date('1970-1-1')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start?: Date;

  /**
     * 指定选择器的结束日期。
     * 
     * 默认值：Date('2100-12-31')
     * 
     * 取值范围：[Date('1900-01-31'), Date('2100-12-31')]
     *
   * @type { ?Date }
   * @default Date('2100-12-31')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end?: Date;

  /**
     * 设置选中项的日期。
     * 
     * 默认值：当前系统日期。
     * 
     * 取值范围：[Date('1900-01-31'), Date('2100-12-31')]
     *
     * 从API version 23开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync-static.md)双向绑定变量。
     *
   * @type { ?(Date | Bindable<Date>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selected?: Date | Bindable<Date>;

  /**
     * 设置日期展示模式。
     * 
     * 默认值：DatePickerMode.DATE，显示年、月、日三列。
     * 
     * 在[DatePickerDialog]{@link ./datePicker.static}中，当[DatePickerDialogOptions]
     * (docroot://reference/apis-arkui/arkui-ts/ts-methods-datepicker-dialog.md#datepickerdialogoptions)的showTime设置
     * 为true时，此参数不生效，默认显示年、月、日三列。
     *
   * @type { ?DatePickerMode }
   * @default DatePickerMode.DATE - which means to display three columns: year, month, and day.
   * <br>Decimal values are rounded off.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  mode?: DatePickerMode;
}

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @extends CommonMethod
 * @interface DatePickerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface DatePickerAttribute extends CommonMethod {
  /**
     * 设置日期是否显示为农历。
     * 
     * **说明：**
     *
     * - 仅在简体中文和繁体中文语言环境下生效，其他语言环境下设置该属性无效果。
     *
   * @param { boolean | undefined } value - 日期是否显示为农历。
     *     - true：显示为农历。
     *     - false：不显示为农历。
     *     默认值：false
     *     当value的值为undefined时，使用默认值。
   * @default false
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lunar(value: boolean | undefined): this;

  /**
     * 设置边缘项（以选中项为基准向上或向下的第二项）的文本样式。
     *
   * @param { PickerTextStyle | undefined } value - 边缘项的文本颜色、字号、字体粗细。
     *     默认值：{ color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
     *     当value的值为undefined时，使用默认值。
   * @default {<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default disappearTextStyle(value: PickerTextStyle | undefined): this;

  /**
     * 设置待选项（以选中项为基准向上或向下的第一项）的文本样式。
     *
   * @param { PickerTextStyle | undefined } value - 待选项的文本颜色、字号、字体粗细。
     *     默认值：{ color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }
     *     当value的值为undefined时，使用默认值。
   * @default {<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textStyle(value: PickerTextStyle | undefined): this;

  /**
     * 设置选中项的文本样式。
     *
   * @param { PickerTextStyle | undefined } value - 选中项的文本颜色、字号、字体粗细。
     *     默认值：{ color: '#ff007dff', font: { size: '20fp',  weight: FontWeight.Medium } }
     *     当value的值为undefined时，使用默认值。
   * @default {<br>color: '#ff007dff',<br>font: {<br>size: '20vp', <br>weight: FontWeight.Medium<br>}<br>}
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedTextStyle(value: PickerTextStyle | undefined): this;

  /**
     * 滑动DatePicker文本内容后，选项完全归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。
     *
   * @param { Callback<Date> | undefined } callback
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDateChange(callback: Callback<Date> | undefined): this;

  /**
     * 设置表冠灵敏度。
     * 
     * **说明：**
     *
     * - 用于穿戴设备圆形屏幕使用。组件响应[表冠事件]{@link ./common}，需要先获取焦点。
     *
   * @param { CrownSensitivity | undefined } sensitivity - 表冠响应灵敏度。
     *     默认值：CrownSensitivity.MEDIUM，响应速度适中。
     *     当sensitivity的值为undefined时，使用默认值。
   * @default CrownSensitivity.MEDIUM
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;

  /**
     * 设置是否开启触控反馈。
     *
   * @param { boolean | undefined } enable - 设置是否开启触控反馈。
     *     - true：开启触控反馈。
     *     - false：不开启触控反馈。
     *     默认值：true
     *     设置为true后，其生效情况取决于系统的硬件是否支持。当enable的值为undefined时，使用默认值。
   * @default true
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableHapticFeedback(enable: boolean | undefined): this;

  /**
     * 设置是否可循环滚动。
     *
   * @param { boolean | undefined } isLoop
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default canLoop(isLoop: boolean | undefined): this;

  /**
     * 设置属性修改器。
     *
   * @param { AttributeModifier<DatePickerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<DatePickerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 农历开关样式。
 *
 * @interface LunarSwitchStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LunarSwitchStyle {

  /**
     * 开关开启时的背景颜色。
     * 
     * 默认值：$r('sys.color.ohos_id_color_text_primary_actived')
     *
   * @type { ?ResourceColor }
   * @default $r('sys.color.ohos_id_color_text_primary_actived')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedColor?: ResourceColor;

  /**
     * 开关关闭时的边框颜色。
     * 
     * 默认值：$r('sys.color.ohos_id_color_switch_outline_off')
     *
   * @type { ?ResourceColor }
   * @default $r('sys.color.ohos_id_color_switch_outline_off')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  unselectedColor?: ResourceColor;

  /**
     * 开关内部图标颜色。
     * 
     * 默认值：Color.White
     *
   * @type { ?ResourceColor }
   * @default Color.White
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strokeColor?: ResourceColor;
}

/**
 * 日期选择器弹窗选项。
 * 
 * 继承自[DatePickerOptions]{@link DatePickerOptions}。
 *
 * @extends DatePickerOptions
 * @interface DatePickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DatePickerDialogOptions extends DatePickerOptions {

  /**
     * 日期是否显示为农历。
     * 
     * - true：显示为农历。
     * - false：不显示为农历。
     * 
     * 默认值：false
     * 
     * **说明：**
     * 
     * - 仅在简体中文和繁体中文语言环境下生效，其他语言环境下设置该属性无效果。
     *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lunar?: boolean;

  /**
     * 是否展示切换农历的开关。
     * 
     * - true：展示切换农历的开关。
     * - false：不展示切换农历的开关。
     * 
     * 默认值：false
     * 
     * **说明：**
     * 
     * - 开关打开后，仅在简体中文和繁体中文环境下生效，在其他语言环境农历不生效。因此建议在其他语言环境设置为不展示开关。
     *
   * @type { ?boolean } value - indicates whether to show the switch to display the lunar.
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lunarSwitch?: boolean;

  /**
     * 设置农历开关的颜色样式。
     * 
     * 默认值：{ selectedColor: `$r('sys.color.ohos_id_color_text_primary_actived')`,
     *          unselectedColor: `$r('sys.color.ohos_id_color_switch_outline_off')`, strokeColor: Color.White }
     *
   * @type { ?LunarSwitchStyle }
   * @default { selectedColor: $r('sys.color.ohos_id_color_text_primary_actived'),
   * <br>unselectedColor: $r('sys.color.ohos_id_color_switch_outline_off'), strokeColor: Color.White }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lunarSwitchStyle?: LunarSwitchStyle;

  /**
     * 是否在弹窗内展示时间选择器。
     * 
     * - true：展示时间选择器。
     * - false：不展示时间选择器。
     * 
     * 默认值：false
     * 
     * **说明：**
     * 
     * 1. 当showTime为true时，点击弹窗的标题日期可以在"日期选择器"和"日期选择器+时间选择器"两个页面中切换。 
     * 2. 当showTime为true时，mode参数不生效，"日期选择器"页面显示默认年、月、日三列。
     *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showTime?: boolean;

  /**
     * 弹窗内展示的时间选择器是否为24小时制，仅当showTime为true时生效。
     * 
     * - true：显示24小时制。
     * - false：显示12小时制。
     * 
     * 默认值：false
     * 
     * **说明：** 
     * 
     * - 当展示的时间选择器为12小时制时，上午和下午的标识不会根据小时数自动切换。
     *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  useMilitaryTime?: boolean;

  /**
     * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。
     * 
     * 默认值： { color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
     *
   * @type { ?PickerTextStyle }
   * @default {<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  disappearTextStyle?: PickerTextStyle;

  /**
     * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。
     * 
     * 默认值： { color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }
     *
   * @type { ?PickerTextStyle }
   * @default {<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textStyle?: PickerTextStyle;

  /**
     * 设置确认按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、按钮是否默认响应Enter键。
     * 
     * **说明：**
     * 
     * 1. acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
     *    保持默认值false。
     * 
     * 2. 按钮高度默认40vp，在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
     *    [ROUNDED_RECTANGLE](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype)，呈现效果
     *    依然是胶囊型按钮[Capsule](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype)。
     *
   * @type { ?PickerDialogButtonStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
     * 设置取消按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、按钮是否默认响应Enter键。
     * 
     * **说明：**
     * 
     * 1. acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
     *    保持默认值false。
     * 
     * 2. 按钮高度默认40vp，在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
     *    [ROUNDED_RECTANGLE](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype)，呈现效果
     *    依然是胶囊型按钮[Capsule](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype)。
     *
   * @type { ?PickerDialogButtonStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
     * 设置选中项的文本颜色、字号、字体粗细。
     * 
     * 默认值： { color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }
     *
   * @type { ?PickerTextStyle }
   * @default {<br>color: '#ff007dff',<br>font: {<br>size: '20vp', <br>weight: FontWeight.Medium<br>}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedTextStyle?: PickerTextStyle;

  /**
     * 弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。
     * 
     * 默认值：{ x: 0, y: 0, width: '100%', height: '100%' }
     *
   * @type { ?Rectangle }
   * @default { x: 0, y: 0, width: '100%', height: '100%' }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maskRect?: Rectangle;

  /**
     * 弹窗在竖直方向上的对齐方式。
     * 
     * 默认值：DialogAlignment.Default
     *
   * @type { ?DialogAlignment }
   * @default DialogAlignment.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  alignment?: DialogAlignment;

  /**
     * 弹窗相对alignment所在位置的偏移量。
     * 
     * 默认值：{ dx: 0 , dy: 0 }
     *
   * @type { ?Offset }
   * @default { dx: 0 , dy: 0 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offset?: Offset;

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
     * 点击弹窗中的“确定”按钮时触发该回调。
     * 
     * **说明：**
     * 
     * - 当showTime设置为true时，回调接口返回值value中时和分为选择器选择的时和分。否则，返回值value中时和分为系统时间的时和分。
     *
   * @type { ?Callback<Date> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDateAccept?: Callback<Date>;

  /**
     * 滑动弹窗中的日期使当前选中项改变时触发该回调。
     * 
     * **说明：**
     * 
     * - 当showTime设置为true时，回调接口返回值value中时和分为选择器选择的时和分。否则，返回值value中时和分为系统时间的时和分。
     *
   * @type { ?Callback<Date> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDateChange?: Callback<Date>;

  /**
     * 弹窗背板颜色。
     * 
     * 默认值：Color.Transparent
     * 
     * **说明：** 
     * 
     * - 当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则显示的颜色将不符合预期效果。
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
     * - 设置为BlurStyle.NONE关闭背景虚化。设置backgroundBlurStyle为非NONE值时，不要设置backgroundColor，
     *   否则显示的颜色将不符合预期效果。
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
     * 弹窗弹出后的事件回调。
     * 
     * **说明：**
     * 
     * 1. 正常时序为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
     * 2. 在onDidAppear内设置改变弹窗显示效果的回调事件。二次弹出生效。
     * 3. 快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
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
     * 1. 正常时序为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
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
     * 1. 正常时序为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
     * 2. 在onWillAppear内设置改变弹窗显示效果的回调事件。二次弹出生效。
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
     * 1. 正常时序为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
     * 2. 快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
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
     * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。                 
     *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
     * 设置时分是否显示前导0，目前只支持设置hour和minute参数。
     * 
     * 默认值：
     * 
     * hour: 24小时制默认为"2-digit"，设置hour是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"；
     *       12小时制默认为"numeric"，即没有前导0。
     * minute: 默认为"2-digit"，设置minute是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"。
     *
   * @type { ?DateTimeOptions }
   * @default hour: In the 24-hour format, it defaults to 2-digit, which means a leading zero is used;
   * <br>In the 12-hour format, it defaults to numeric, which means no leading zero is used.
   * <br>minute: defaults to 2-digit, which means a leading zero is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dateTimeOptions?: DateTimeOptions;

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
     * 默认值：HoverModeAreaType.BOTTOM_SCREEN 
     *
   * @type { ?HoverModeAreaType }
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  hoverModeArea?: HoverModeAreaType;

  /**
     * 设置是否开启触控反馈。
     * 
     * - true：开启触控反馈。
     * - false：不开启触控反馈。
     * 
     * 默认值：true
     * 
     * **说明**：
     * 
     * 1. 设置为true后，其生效情况取决于系统的硬件是否支持。
     * 2. 开启触控反馈时，需要在工程的src/main/module.json5文件的"module"内配置requestPermissions字段开启振动权限。
     *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableHapticFeedback?: boolean;

  /**
     * 设置是否可循环滚动。
     * 
     * 默认值：true
     * 
     * **说明：**
     * 
     * true：可循环，年份随着月份的循环滚动进行联动加减，月份随着日的循环滚动进行联动加减。
     * false：不可循环，年、月、日到达本列的顶部或底部时，无法再进行滚动，年、月、日之间也无法再联动加减。
     *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  canLoop?: boolean;

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
 * 定义日期选择器组件。
 *
 * @param { DatePickerOptions } [options] - 日期选择器选项。
 * @returns { DatePickerAttribute } 日期选择器属性.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function DatePicker(
    options?: DatePickerOptions
): DatePickerAttribute;
