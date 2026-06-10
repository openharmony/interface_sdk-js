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
 */

/**
 * 日期选择器返回的时间格式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DatePickerResult {

  /**
   * 选中日期的年。
   * 
   * 取值范围：与设置的start、end有关，如果没有设置start、end，取值范围为[1970, 2100]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  year?: number;

  /**
   * 选中日期的月的索引值，索引从0开始，0表示1月，11表示12月。
   * 
   * 取值范围：与设置的start、end有关，如果没有设置start、end，取值范围为[0, 11]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  month?: number;

  /**
   * 选中日期的日。
   * 
   * 取值范围：与设置的start、end有关，如果没有设置start、end，取值范围为[1, 31]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  day?: number;
}

/**
 * 设置日期展示模式。
 * 
 * | 名称 | 值 | 说明 |
 * | -------- | - |-------- |
 * | DATE | 0 | 显示年、月、日三列。|
 * | YEAR_AND_MONTH | 1 | 显示年、月二列。|
 * | MONTH_AND_DAY | 2 | 显示月、日二列。
 * 
 * 在此模式下，年份始终保持不变。|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum DatePickerMode {

  /**
   * The date displays three columns: year, month, and day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DATE = 0,

  /**
   * The date displays two columns: year and month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  YEAR_AND_MONTH = 1,

  /**
   * Defines a mode that displays the date in months and days of the month.
   * In this mode, if the month changes from December to January,
   * the year does not increment by one; if the month changes from January to December,
   * the year does not decrement by one. The year remains fixed at the currently set value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  MONTH_AND_DAY = 2
}

/**
 * 日期选择器组件的参数说明。
 * 
 * > **说明：**
 * >
 * > - Date的使用请参考[TimePickerOptions]{@link TimePickerOptions}。
 * >
 * > - 在DatePicker组件滑动过程中修改DatePickerOptions中的属性，会导致这些属性无法生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DatePickerOptions {

  /**
   * 指定选择器的起始日期。
   * 
   * 默认值：Date('1970-1-1')
   * 
   * 取值范围：[Date('1900-01-31'), Date('2100-12-31')]
   *
   * @default Date('1970-1-1') [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  start?: Date;

  /**
   * 指定选择器的结束日期。
   * 
   * 默认值：Date('2100-12-31')
   * 
   * 取值范围：[Date('1900-01-31'), Date('2100-12-31')]
   *
   * @default Date('2100-12-31') [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  end?: Date;

  /**
   * 设置选中项的日期。
   * 
   * 默认值：当前系统日期。
   * 
   * 取值范围：[Date('1900-01-31'), Date('2100-12-31')]
   * 
   * 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * @default current system date [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected?: Date;

  /**
   * 设置日期展示模式。
   * 
   * 默认值：DatePickerMode.DATE，显示年、月、日三列。
   * 
   * 在[DatePickerDialog]{@link ./date_picker}中，当[DatePickerDialogOptions]
   * (docroot://reference/apis-arkui/arkui-ts/ts-methods-datepicker-dialog.md#datepickerdialogoptions)的showTime设置为
   * true时，此参数不生效，默认显示年、月、日三列。
   *
   * @default DatePickerMode.DATE - which means to display three columns: year, month, and day.
   *     <br>Decimal values are rounded off.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mode?: DatePickerMode;
}

/**
 * 滑动选择日期的组件。
 * 
 * > **说明：**
 * 
 * > - 该组件不建议开发者在动效过程中修改属性数据。
 * >
 * > - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。
 *     可通过如下参数查看具体配置值$r('sys.float.ohos_id_picker_show_count_landscape')。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface DatePickerInterface {

  /**
   * 根据指定日期范围创建日期选择器。
   *
   * @param { DatePickerOptions } options - 配置日期选择器组件的参数。
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: DatePickerOptions): DatePickerAttribute;
}

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @extends CommonMethod [since 8 - 10]
 * @extends CommonMethod<DatePickerAttribute> [since 11]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class DatePickerAttribute extends CommonMethod<DatePickerAttribute> {

  /**
   * 设置日期是否显示为农历。
   * 
   * > **说明：**
   * >
   * > 仅在简体中文和繁体中文语言环境下生效，其他语言环境下设置该属性无效果。
   *
   * @param { boolean } value - 日期是否显示为农历。<br/>- true：显示为农历。<br/>- false：不显示为农历。<br/>默认值：false
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lunar(value: boolean): DatePickerAttribute;

  /**
   * 设置弹窗的日期是否显示为农历。与[lunar]{@link DatePickerAttribute#lunar(value: boolean)}相比，
   * isLunar参数新增了对undefined类型的支持。
   * 
   * > **说明：**
   * >
   * > 仅在简体中文和繁体中文语言环境下生效，其他语言环境下设置该属性无效果。
   *
   * @param { Optional<boolean> } isLunar - 日期是否显示为农历。- true：显示为农历。- false：不显示为农历。
   *     默认值：false<br/>当isLunar的值为undefined时，使用默认值。
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  lunar(isLunar: Optional<boolean>): DatePickerAttribute;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本样式。
   *
   * @param { PickerTextStyle } value - 边缘项的文本颜色、字号、字体粗细。
   *      默认值： { color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle(value: PickerTextStyle): DatePickerAttribute;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本样式。
   * 与[disappearTextStyle(10+)]{@link DatePickerAttribute#disappearTextStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 边缘项的文本颜色、字号、字体粗细。
   *      默认值： { color: '#ff182431', font: {size: '14fp', weight: FontWeight.Regular } }
   *      当style的值为undefined时，使用默认值。
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disappearTextStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本样式。
   *
   * @param { PickerTextStyle } value - 待选项的文本颜色、字号、字体粗细。
   *      默认值： { color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle(value: PickerTextStyle): DatePickerAttribute;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本样式。与
   * [textStyle<sup>10+</sup>]{@link DatePickerAttribute#textStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 待选项的文本颜色、字号、字体粗细。
   *      默认值： { color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }
   *      当style的值为undefined时，使用默认值。
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;

  /**
   * 设置选中项的文本样式。
   *
   * @param { PickerTextStyle } value - 选中项的文本颜色、字号、字体粗细。
   *      默认值： { color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle(value: PickerTextStyle): DatePickerAttribute;

  /**
   * 设置选中项的文本样式。与[selectedTextStyle<sup>10+</sup>]
   * {@link DatePickerAttribute#selectedTextStyle(value: PickerTextStyle)}相比，style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 选中项的文本颜色、字号、字体粗细。
   *      默认值： { color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }
   *      当style的值为undefined时，使用默认值。
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedTextStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;

  /**
   * 滑动DatePicker文本内容后，选项完全归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。
   *
   * @param { function } callback - 返回选中的时间。
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DatePickerAttribute#onDateChange(callback: Callback<Date>)
   */
  onChange(callback: (value: DatePickerResult) => void): DatePickerAttribute;

  /**
   * 滑动DatePicker文本内容后，选项完全归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。
   *
   * @param { function } callback - Selected date, where the year, month, and day portions are subject to the selection,
   *     the hour and minute portions are subject to the current system time, and the second portion is always
   *     **00**. [since 10 - 17]
   * @param { Callback<Date> } callback - 返回选中的时间，年、月、日为选中的日期，时、分取决于当
   *        前系统时间的时、分，秒恒为00。 [since 18]
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDateChange(callback: Callback<Date>): DatePickerAttribute;

  /**
   * 滑动DatePicker文本内容后，选项完全归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。与
   * [onDateChange<sup>10+</sup>]{@link DatePickerAttribute#onDateChange(callback: Callback<Date>)}相比，
   * callback参数新增了对undefined类型的支持。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<Callback<Date>> } callback - 返回选中的时间，年、月、日为选中的日期，时、分取决于当前系统
   *      时间的时、分，秒恒为00。<br/>当callback的值为undefined时，不使用回调函数。
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onDateChange(callback: Optional<Callback<Date>>): DatePickerAttribute;

  /**
   * 设置表冠灵敏度。
   *
   * @param { Optional<CrownSensitivity> } sensitivity - 表冠响应灵敏度。<br/>默认值：CrownSensitivity.MEDIUM，响应速度适中。
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): DatePickerAttribute;

  /**
   * 设置是否开启触控反馈。
   *
   * @param { Optional<boolean> } enable - 设置是否开启触控反馈。- true：开启触控反馈。- false：不开启触控反馈。
   *      默认值：true<br/>设置为true后，其生效情况取决于系统的硬件是否支持。当enable的值为undefined时，使用默认值。
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): DatePickerAttribute;

  /**
   * 设置是否可循环滚动。
   *
   * @param { Optional<boolean> } isLoop - 是否可循环滚动。<br/>- true：可循环滚动，年份随着月份的循环滚动进行联动加减，
   *     月份随着日的循环滚动进行联动加减。- false：不可循环滚动，年、月、日到达本列的顶部或底部时，无法再进行滚动，年、月、日
   *     之间也无法再联动加减。<br/>默认值：true<br/>当isLoop的值为undefined时，使用默认值。
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  canLoop(isLoop: Optional<boolean>): DatePickerAttribute;
}

/**
 * 定义了DatePickerDialog组件中农历切换开关的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface LunarSwitchStyle {

  /**
   * 设置开关开启时开关的背景颜色。
   * 
   * 默认值：$r('sys.color.ohos_id_color_text_primary_actived')。
   *
   * @default $r('sys.color.ohos_id_color_text_primary_actived')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  selectedColor?: ResourceColor;

  /**
   * 设置开关未开启时开关的边框颜色。
   * 
   * 默认值：$r('sys.color.ohos_id_color_switch_outline_off')。
   *
   * @default $r('sys.color.ohos_id_color_switch_outline_off')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  unselectedColor?: ResourceColor;

  /**
   * 设置开关内部图标颜色。
   * 
   * 默认值：Color.White。
   *
   * @default Color.White
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  strokeColor?: ResourceColor;
}

/**
 * 日期选择器弹窗选项。
 * 
 * 继承自[DatePickerOptions]{@link DatePickerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DatePickerDialogOptions extends DatePickerOptions {

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
   * 仅在简体中文和繁体中文语言环境下生效，其他语言环境下设置该属性无效果。
   *
   * @default false [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
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
   * 开关打开后，仅在简体中文和繁体中文环境下生效，在其他语言环境农历不生效。因此建议在其他语言环境设置为不展示开关。
   *
   * @default false [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lunarSwitch?: boolean;

  /**
   * 设置农历开关的颜色样式。
   * 
   * 默认值：{ selectedColor: `$r('sys.color.ohos_id_color_text_primary_actived')`,
   *         unselectedColor: `$r('sys.color.ohos_id_color_switch_outline_off')`,
   *         strokeColor: Color.White }
   *
   * @default { selectedColor: $r('sys.color.ohos_id_color_text_primary_actived'),
   *            unselectedColor: $r('sys.color.ohos_id_color_switch_outline_off'),
   *            strokeColor: Color.White }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
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
   * @default false [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
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
   * 当展示的时间选择器为12小时制时，上午和下午的标识不会根据小时数自动切换。
   *
   * @default false [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  useMilitaryTime?: boolean;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。
   * 
   * 默认值：{ color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
   *
   * @default { color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle?: PickerTextStyle;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。
   * 
   * 默认值：{ color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }
   *
   * @default { color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle?: PickerTextStyle;

  /**
   * 设置确认按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、按钮是否默认响应Enter键。
   * 
   * **说明：**
   * 
   * 1.acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
   *   保持默认值false。
   * 
   * 2.按钮高度默认40vp，在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
   * [ROUNDED_RECTANGLE](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype)，
   * 呈现效果依然是胶囊型按钮[Capsule](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * 设置取消按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、按钮是否默认响应Enter键。
   * 
   * **说明：**
   * 
   * 1.acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，
   *   则primary字段不生效，保持默认值false。
   * 
   * 2.按钮高度默认40vp，在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
   * [ROUNDED_RECTANGLE](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype)，
   * 呈现效果依然是胶囊型按钮[Capsule](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * 设置选中项的文本颜色、字号、字体粗细。
   * 
   * 默认值：{ color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }
   *
   * @default { color: '#ff007dff', font: { size: '20vp', weight: FontWeight.Medium } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle?: PickerTextStyle;

  /**
   * 弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。
   * 
   * 默认值：{ x: 0, y: 0, width: '100%', height: '100%' }
   *
   * @default { x: 0, y: 0, width: '100%', height: '100%' } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskRect?: Rectangle;

  /**
   * 弹窗在竖直方向上的对齐方式。
   * 
   * 默认值：DialogAlignment.Default
   *
   * @default DialogAlignment.Default [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * 弹窗相对alignment所在位置的偏移量。
   * 
   * 默认值：{ dx: 0 , dy: 0 }
   *
   * @default { dx: 0 , dy: 0 } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: Offset;

  /**
   * 点击弹窗中的“确定”按钮时触发该回调。
   * 
   * **说明：**
   * 
   * 从API version 8 开始支持，从 API version 10 开始废弃。建议使用onDateAccept。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead datePicker/DatePickerDialogOptions#onDateAccept
   */
  onAccept?: (value: DatePickerResult) => void;

  /**
   * 点击弹窗中的“取消”按钮时触发该回调。
   *
   * @type { ?function } [since 8 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCancel?: VoidCallback;

  /**
   * 滑动弹窗中的滑动选择器使当前选中项改变时触发该回调。
   * 
   * **说明：**
   * 
   * 从API version 8 开始支持，从 API version 10 开始废弃。建议使用onDateChange。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead datePicker/DatePickerDialogOptions#onDateChange
   */
  onChange?: (value: DatePickerResult) => void;

  /**
   * 点击弹窗中的“确定”按钮时触发该回调。
   * 
   * **说明：**
   * 
   * 当showTime设置为true时，回调接口返回值value中时和分为选择器选择的时和分。否则，返回值value中时和分为系统时间的时和分。
   *
   * @type { ?function } [since 10 - 17]
   * @type { ?Callback<Date> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDateAccept?: Callback<Date>;

  /**
   * 滑动弹窗中的日期使当前选中项改变时触发该回调。
   * 
   * **说明：**
   * 
   * 当showTime设置为true时，回调接口返回值value中时和分为选择器选择的时和分。否则，返回值value中时和分为系统时间的时和分。
   *
   * @type { ?function } [since 10 - 17]
   * @type { ?Callback<Date> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDateChange?: Callback<Date>;

  /**
   * 弹窗背板颜色。
   * 
   * 默认值：Color.Transparent
   * 
   * **说明：** 
   * 
   * 当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则显示的颜色将不符合预期效果。
   *
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 弹窗背板模糊材质。
   * 
   * 默认值：BlurStyle.COMPONENT_ULTRA_THICK
   * 
   * **说明：** 
   * 
   * 设置为BlurStyle.NONE关闭背景虚化。设置backgroundBlurStyle为非NONE值时，不要设置backgroundColor，否则显示的颜色将不符合预期效果。
   *
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 背景模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 背景效果参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * 弹窗弹出后的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
   * 
   * 2.在onDidAppear内设置改变弹窗显示效果的回调事件。二次弹出生效。
   * 
   * 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
   * 
   * 4. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidAppear?: VoidCallback;

  /**
   * 弹窗消失后的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDisappear?: VoidCallback;

  /**
   * 弹窗显示动效前的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
   * 
   * 2.在onWillAppear内设置改变弹窗显示效果的回调事件。二次弹出生效。
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillAppear?: VoidCallback;

  /**
   * 弹窗退出动效前的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
   * 
   * 2.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDisappear?: VoidCallback;

  /**
   * 设置弹窗背板的阴影。
   * 
   * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @default hour: In the 24-hour format, it defaults to 2-digit, which means a leading zero is used;
   *     <br>In the 12-hour format, it defaults to numeric, which means no leading zero is used.
   *     <br>minute: defaults to 2-digit, which means a leading zero is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @default false - meaning not to enable the hover mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * 悬停态下弹窗默认展示区域。
   * 
   * 默认值：HoverModeAreaType.BOTTOM_SCREEN
   *
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
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
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
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
   * 
   * false：不可循环，年、月、日到达本列的顶部或底部时，无法再进行滚动，年、月、日之间也无法再联动加减。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  canLoop?: boolean;

  /**
   * 为对话框设置系统风格的材质。不同的材质具有不同的效果，可以影响对话框的背景颜色、边框、阴影等视觉属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * 设置对话框的形变动画模式。
   *
   * 默认值：DistortionMode.DISTORTION_AUTO
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;

  /**
   * 设置对话框的边缘光动画模式。
   *
   * 默认值：EdgeLightMode.EDGELIGHT_AUTO
   *
   * @default EdgeLightMode.EDGELIGHT_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;
}

/**
 * 根据指定的日期范围创建日期滑动选择器并展示在弹窗上。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class DatePickerDialog {

  /**
   * 定义日期滑动选择器弹窗并弹出。
   * 
   * > **说明：**
   * 
   * showDatePickerDialog需先获取[UIContext]{@link @ohos.arkui.UIContext}实例后再进行调用。
   * 
   * - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   *   [showDatePickerDialog](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#showdatepickerdialog)
   *   来明确UI的执行上下文。
   *
   * @param { DatePickerDialogOptions } options - 配置日期选择器弹窗的参数。参数缺省时无法弹出弹窗。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#showDatePickerDialog
   */
  static show(options?: DatePickerDialogOptions);
}

/**
 * 滑动选择日期的组件。
 * 
 * **说明：**
 * 
 * - 该组件不建议开发者在动效过程中修改属性数据。
 *
 * - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。可通过如下参数查看具体配置值
 *     $r('sys.float.ohos_id_picker_show_count_landscape')。
 * 
 * 子组件
 * 
 * 该组件为基础组件，不建议包含子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const DatePicker: DatePickerInterface;

/**
 * 定义日期滑动选择组件实例.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const DatePickerInstance: DatePickerAttribute;