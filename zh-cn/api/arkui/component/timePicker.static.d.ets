
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

import { ResourceColor, Offset, VoidCallback } from "./units";

import { CommonMethod, PickerTextStyle, PickerDialogButtonStyle, Rectangle, BlurStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, BackgroundBlurStyleOptions, BackgroundEffectOptions, Callback, DateTimeOptions, Bindable, DistortionMode, EdgeLightMode, SystemUiMaterial } from './common';

import { DialogAlignment } from "./alertDialog";

import { CrownSensitivity } from "./enums";

import { ComponentBuilder, CustomBuilder } from './builder';

import { AttributeModifier } from "./common";

/**
 * 返回24小时制时间。
 *
 * @interface TimePickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TimePickerResult {

  /**
     * 选中时间的时。
     * 
     * 取值范围：[0-23]
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  hour: int;

  /**
     * 选中时间的分。
     * 
     * 取值范围：[0-59]
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minute: int;

  /**
     * 选中时间的秒。
     * 
     * 取值范围：[0-59]
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  second: int;
}

/**
 * 时间选择器的数据格式。
 *
 * @enum {int}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TimePickerFormat {

  /**
     * Hour and minute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOUR_MINUTE = 0,

  /**
     * Hour and minute and second
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOUR_MINUTE_SECOND = 1
}

/**
 * 时间选择器组件的参数说明。
 * 
 * 在TimePicker组件滑动过程中修改TimePickerOptions中的属性，会导致这些属性无法生效。
 * 
 * **Date**
 * 
 * Date对象用于处理日期和时间，使用方式如下。
 * 
 * **方式1：** new Date()
 * 
 * 获取系统当前日期和时间。
 * 
 * **方式2：** new Date(value: number | string)
 *
 * **方式3：** new Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: 
 * number, ms?: number)
 *
 * @interface TimePickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TimePickerOptions {

  /**
     * 设置选中项的时间。
     * 
     * 默认值：当前系统时间
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
     * 指定需要显示的TimePicker的格式。
     * 
     * 默认值：TimePickerFormat.HOUR_MINUTE
     *
   * @type { ?TimePickerFormat }
   * @default HOUR_MINUTE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  format?: TimePickerFormat;

  /**
     * 指定时间选择组件的起始时间。
     * 
     * 默认值：Date(0, 0, 0, 0, 0, 0)
     * 
     * **说明：**
     * 
     * 1. 仅设置的小时和分钟生效。
     * 2. 设置了start且为非默认值的场景下，loop不生效。
     *
   * @type { ?Date }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start?: Date;

  /**
     * 指定时间选择组件的结束时间。
     * 
     * 默认值：Date(0, 0, 0, 23, 59, 59)
     * 
     * **说明：**
     * 
     * 1. 仅设置的小时和分钟生效。
     * 2. 设置了end且为非默认值的场景下，loop不生效。
     *
   * @type { ?Date }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end?: Date;
}

/**
 * 选择时间时触发该事件。
 *
 * @typedef {function} OnTimePickerChangeCallback
 * @param { TimePickerResult } result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTimePickerChangeCallback = (result: TimePickerResult) => void;

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @extends CommonMethod
 * @interface TimePickerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface TimePickerAttribute extends CommonMethod {
  /**
     * 设置展示时间是否为24小时制。如果展示时间为12小时制，上下午与小时无联动。
     *
   * @param { boolean | undefined } value
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default useMilitaryTime(value: boolean | undefined): this;

  /**
     * 设置是否启用循环模式。
     *
   * @param { boolean | undefined } value - 是否启用循环模式。
     *     默认值：true
     *     当value的值为undefined时，使用默认值。true表示启用循环模式，false表示不启用循环模式。
   * @returns { TimePickerAttribute }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default loop(value: boolean | undefined): this;

  /**
     * 设置边缘项（以选中项为基准向上或向下的第二项）的文本样式。
     *
   * @param { PickerTextStyle | undefined } value - 边缘项的文本颜色、字号和字体粗细。
     *     默认值：{ color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
     *     当value的值为undefined时，使用默认值。
   * @returns { TimePickerAttribute }
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
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textStyle(value: PickerTextStyle | undefined): this;

  /**
     * 设置选中项的文本颜色、字号和字体粗细。
     *
   * @param { PickerTextStyle | undefined } value - 选中项的文本颜色、字号、字体粗细。
     *     默认值：{ color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }
     *     当value的值为undefined时，使用默认值。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedTextStyle(value: PickerTextStyle | undefined): this;

  /**
     * 设置时分秒是否显示前导0。
     *
   * @param { DateTimeOptions | undefined } value - 设置时分秒是否显示前导0，目前只支持设置hour、minute和second参数。
     *     默认值：hour: 24小时制默认为"2-digit"，设置hour是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"；
     *                  12小时制默认为"numeric"，即没有前导0。
     *            minute: 默认为"2-digit"，设置minute是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"。
     *            second: 默认为"2-digit"，设置second是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"。
     *     当value的值为undefined时，使用默认值。
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default dateTimeOptions(value: DateTimeOptions | undefined): this;

  /**
     * 滑动TimePicker后，时间选项归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。与[onChange]{@link onChange}相比，
     * callback参数类型为[OnTimePickerChangeCallback]{@link OnTimePickerChangeCallback} \| undefined。
     * 
     * 回调会在滑动动画结束后触发，如果需要快速获取索引值变化，建议使用[onEnterSelectedArea]{@link onEnterSelectedArea}接口。
     *
   * @param { OnTimePickerChangeCallback | undefined } callback
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(callback: OnTimePickerChangeCallback | undefined): this;

  /**
     * 滑动TimePicker过程中，选项进入分割线区域内，触发该回调。
     * 
     * 与[onChange]{@link onChange}事件的差别在于，该事件的触发时机早于[onChange]{@link onChange}事件，当当前滑动列滑动距离超过选中项
     * 高度的一半时，选项此时已经进入分割线区域内，会触发该事件。当[enableCascade]{@link enableCascade}设置为true时，由于上午/下午列与小
     * 时列存在联动关系，不建议使用该回调。该回调标识的是滑动过程中选项进入分割线区域内的节点，而联动变化的选项并不涉及滑动，因此，回调的返回值
     * 中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。
     * 
     * **说明：**
     *
     * - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
   * @param { Callback<TimePickerResult> | undefined } callback
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onEnterSelectedArea(callback: Callback<TimePickerResult> | undefined): this;

  /**
     * 设置是否支持触控反馈。
     * 
     * 开启触控反馈时，需要在工程的src/main/module.json5文件的"module"内配置requestPermissions字段开启振动权限，配置如下：
     *
   * @param { boolean | undefined } enable - 是否支持触控反馈。
     *     默认值：true
     *     当enable的值为undefined时，使用默认值。true表示开启触控反馈，false表示不开启触控反馈。
     *     设置为true后，其生效情况取决于系统的硬件是否支持。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableHapticFeedback(enable: boolean | undefined): this;

  /**
     * 设置表冠灵敏度。
     *
   * @param { CrownSensitivity | undefined } sensitivity
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;

  /**
     * 设置上午和下午的标识是否根据小时数自动切换，仅在[useMilitaryTime]{@link useMilitaryTime}设置为false时生效。
     *
   * @param { boolean | undefined } enabled - 上午和下午的标识是否根据小时数自动切换，仅在useMilitaryTime设置为false时生效。
     *     - true：自动切换。
     *     - false：不自动切换。
     *     默认值：false
     *     当enabled设置为true时，仅在loop参数同时为true时生效。当enabled的值为undefined时，使用默认值。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableCascade(enabled: boolean | undefined): this;

  /**
     * 设置属性修改器。
     *
   * @param { AttributeModifier<TimePickerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<TimePickerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 时间选择器弹窗选项。
 * 
 * 继承自[TimePickerOptions]{@link TimePickerOptions}。
 *
 * @extends TimePickerOptions
 * @interface TimePickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TimePickerDialogOptions extends TimePickerOptions {

  /**
     * 时间是否以24小时制展示。
     * 
     * - true：时间以24小时制展示。
     * - false：时间以12小时制展示。
     * 
     * 默认值：false
     *
   * @type { ?boolean }
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
     * 1. acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，保持
     *    默认值false。
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maskRect?: Rectangle;

  /**
     * 设置弹窗在垂直方向上的对齐方式。
     * 
     * 默认值：DialogAlignment.Default
     *
   * @type { ?DialogAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  alignment?: DialogAlignment;

  /**
     * 设置弹窗相对alignment所在位置的偏移量。
     * 
     * 默认值：{ dx: 0, dy: 0 }
     *
   * @type { ?Offset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offset?: Offset;

  /**
     * 点击弹窗中的“确定”按钮时触发该回调。
     *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onAccept?: (value: TimePickerResult) => void;

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
     * 滑动弹窗中的选择器后，选项归位至选中项位置时，触发该回调。
     *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onChange?: (value: TimePickerResult) => void;

  /**
     * 滑动过程中，选项进入分割线区域内，触发该回调。与onChange事件的差别在于，该事件的触发时机早于onChange事件，当当前滑动列滑动距离超过选中
     * 项高度的一半时，选项此时已经进入分割线区域内，会触发该事件。
     * 
     * **说明：**
     * 
     * - 当enableCascade设置为true时，由于上午/下午列与小时列存在联动关系，不建议使用该回调。该回调标识的是滑动过程中选项进入分割线区域内的节
     *   点，而联动变化的选项并不涉及滑动，因此，回调的返回值中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。
     *
   * @type { ?Callback<TimePickerResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onEnterSelectedArea?: Callback<TimePickerResult>;

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
     * - 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则显示的颜色将不
     *   符合预期效果。
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
     * 设置上午和下午的标识是否根据小时数自动切换，仅在useMilitaryTime设置为false时生效。
     * 
     * - true：自动切换。
     * - false：不自动切换。
     * 
     * 默认值：false
     * 
     * 当enableCascade设置为true时，仅在loop参数同时为true时生效。
     *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableCascade?: boolean;

  /**
     * 弹窗弹出后的事件回调。
     * 
     * **说明：**
     * 
     * 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
     * 2. 在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
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
     * 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
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
     * 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
     * 2. 在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
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
     * 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
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
     * **说明：**
     * 
     * - 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。
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
     * 
     * minute: 默认为"2-digit"，设置minute是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"。
     *
   * @type { ?DateTimeOptions }
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
 * 定义时间选择器组件。
 *
 * @param { TimePickerOptions } [options] - 时间选择器组件选项。
 * @returns { TimePickerAttribute } 时间选择器属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function TimePicker(
    options?: TimePickerOptions
): TimePickerAttribute;
