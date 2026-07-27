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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum DatePickerMode {
  /**
   * 显示年、月、日三列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DATE = 0,

  /**
   * 显示年、月二列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  YEAR_AND_MONTH = 1,

  /**
   * 显示月、日二列。
   * 
   * 在此模式下，年份始终保持不变，取值为selected参数指定的年份。若selected未指定则取当前系统年份。当月份滚动导致日期超出有效范围时，
   * 日期会自动调整至该月最后一天。
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
 * >
 * > - 如果需要设置的起止日期范围在\[Date('1900-01-31'), Date('2100-12-31')]之外，推荐使用
 * > [DatePickerComponent]{@link @ohos.arkui.advanced.DatePickerComponent}。
 *
 * > **起始日期、结束日期和选中日期的异常情形说明：**
 * >
 * > - 起始日期晚于结束日期，选中日期未设置：起始日期、结束日期和选中日期都为默认值。
 * > - 起始日期晚于结束日期，选中日期早于起始日期默认值：起始日期、结束日期都为默认值，选中日期为起始日期默认值。
 * > - 起始日期晚于结束日期，选中日期晚于结束日期默认值：起始日期、结束日期都为默认值，选中日期为结束日期默认值。
 * > - 起始日期晚于结束日期，选中日期在起始日期与结束日期默认值范围内：起始日期、结束日期都为默认值，选中日期为设置的值。
 * > - 选中日期早于起始日期：选中日期为起始日期。
 * > - 选中日期晚于结束日期：选中日期为结束日期。
 * > - 起始日期晚于当前系统日期，选中日期未设置：选中日期为起始日期。
 * > - 结束日期早于当前系统日期，选中日期未设置：选中日期为结束日期。
 * > - 日期格式不符合规范，如'1999-13-32'：取默认值。
 * > - 起始日期或结束日期早于系统有效范围：起始日期或结束日期取起始日期默认值。
 * > - 起始日期或结束日期晚于系统有效范围：起始日期或结束日期取结束日期默认值。
 * > - 起始日期与结束日期同时早于系统有效范围：起始日期与结束日期取系统有效范围最早日期。
 * > - 起始日期与结束日期同时晚于系统有效范围：起始日期与结束日期取系统有效范围最晚日期。
 *
 * > **说明：**
 * >
 * > 先处理起始日期与结束日期的异常情形，再处理选中日期的异常情形。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DatePickerOptions {
  /**
   * 指定选择器的起始日期。适用于需要限制可选日期下限的场景，如仅允许选择某一日期之后的日期。
   * 
   * > 默认值：Date('1970-01-01')
   * 
   * > 取值范围：[Date('1900-01-31'), Date('2100-12-31')]
   * 
   * > **说明：**
   * >
   * > 设置了start或end且为非默认值的场景下，canLoop不生效。
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
   * 指定选择器的结束日期。适用于需要限制可选日期上限的场景，如设置有效期截止日。
   * 
   * > 默认值：Date('2100-12-31')
   * 
   * > 取值范围：[Date('1900-01-31'), Date('2100-12-31')]
   * 
   * > **说明：**
   * >
   * > 设置了start或end且为非默认值的场景下，canLoop不生效。
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
   * 设置选中项的日期。适用于需要预设初始选中日期（如编辑已有记录、默认显示指定日期）的场景。
   * 
   * > 默认值：当前系统日期（受start和end参数影响，详见下方异常情形说明）。
   * 
   * > Date对象可配置的日期范围：[Date('1900-01-31'), Date('2100-12-31')]，selected参数的有效取值范围：必须在start和end参数设置的日
   * > 期范围内。
   * 
   * > 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
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
   * 设置日期展示模式。适用于需要自定义日期展示列的场景，如仅需选择年月或月日。不传入时默认为DatePickerMode.DATE，显示年、月、日三列。
   * 
   * 在[DatePickerDialog]{@link ./date_picker}中，当
   * [DatePickerDialogOptions]{@link DatePickerDialogOptions}的showTime设置为true时，此参数不生效，默认显示年、月、日三列。
   * 这是为保证布局合理性，当showTime为true时会额外显示时间列。
   * 
   * > **说明：**
   * >
   * > 上述DatePickerDialog相关限制仅适用于DatePickerDialog组件。
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
 * DatePicker是滑动选择日期的组件，支持公历和农历切换，可配置日期范围、选择模式和文本样式。用于需要用户选择日期的应用场景，
 * 提供统一的日期选择交互体验，能够提升用户体验，减少开发工作量。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 该组件不建议开发者在动效过程中修改属性数据。
 * >
 * > - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。
 * > 可通过$r('sys.float.ohos_id_picker_show_count_landscape')查看横屏时的具体配置值。
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
   * 根据指定日期范围创建日期选择器。使用场景包括：生日选择、会议预订、行程安排等需要用户选择日期的应用功能。
   *
   * @param { DatePickerOptions } options - 配置日期选择器组件的参数。不传该参数时使用默认配置（start默认为Date('1970-01-01')，
   * end默认为Date('2100-12-31')，selected默认为当前系统日期）。
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
   * @param { boolean } value - 日期是否显示为农历。
   *     <br>- true：显示为农历。
   *     <br>- false：不显示为农历。
   *     <br>默认值：false
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lunar(value: boolean): DatePickerAttribute;

  /**
   * 设置日期是否显示为农历。与[lunar]{@link DatePickerAttribute#lunar(value: boolean)}相比，
   * isLunar参数新增了对undefined类型的支持。
   * 
   * > **说明：**
   * >
   * > 仅在简体中文和繁体中文语言环境下生效，其他语言环境下设置该属性无效果。
   *
   * @param { Optional<boolean> } isLunar - 日期是否显示为农历。
   *     <br>- true：显示为农历。
   *     <br>- false：不显示为农历。
   *     <br>默认值：false
   *     <br>当isLunar的值为undefined时，使用默认值。
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
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '14fp', 
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle(value: PickerTextStyle): DatePickerAttribute;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本样式。与
   * [disappearTextStyle<sup>10+</sup>]{@link DatePickerAttribute#disappearTextStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 边缘项的文本颜色、字号、字体粗细。
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '14fp', 
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>当style的值为undefined时，使用默认值。
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
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp', 
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
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
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp', 
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>当style的值为undefined时，使用默认值。
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
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff007dff',
   *     <br>font: {
   *     <br>size: '20fp', 
   *     <br>weight: FontWeight.Medium
   *     <br>}
   *     <br>}
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle(value: PickerTextStyle): DatePickerAttribute;

  /**
   * 设置选中项的文本样式。
   * 与[selectedTextStyle<sup>10+</sup>]{@link DatePickerAttribute#selectedTextStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 选中项的文本颜色、字号、字体粗细。
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff007dff',
   *     <br>font: {
   *     <br>size: '20fp', 
   *     <br>weight: FontWeight.Medium
   *     <br>}
   *     <br>}
   *     <br>当style的值为undefined时，使用默认值。
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
   * 从API version 8开始支持，从API version 10开始废弃，建议使用
   * [onDateChange]{@link DatePickerAttribute#onDateChange(callback: Callback<Date>)}替代。
   *
   * @param { function } callback - 返回选中的时间，包含年、月、日字段。
   * @returns { DatePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DatePickerAttribute#onDateChange(callback: Callback<Date>)
   */
  onChange(callback: (value: DatePickerResult) => void): DatePickerAttribute;

  /**
   * 滑动DatePicker文本内容后，选项完全归位至选中项位置时，触发该回调。归位是指滚动动画结束、选项稳定停靠在选中位置。不
   * 能通过双向绑定的状态变量触发，可以响应用户的滑动操作。
   *
   * @param { function } callback - Selected date, where the year, month, and day portions are subject to the selection,
   *     the hour and minute portions are subject to the current system time, and the second portion is always
   *     **00**. [since 10 - 17]
   * @param { Callback<Date> } callback - 返回选中的时间，年、月、日为选中的日期，时、分取决于当前系统时间的时、分，秒恒为00。
   * 适用于需要在用户确认日期选择后获取选中日期、更新界面或执行业务逻辑的场景。 [since 18]
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
   * @param { Optional<Callback<Date>> } callback - 返回选中的时间，年、月、日为选中的日期，时、分取决于当前系统时间的时、分，秒恒为00。
   * 适用于需要在用户确认日期选择后获取选中日期、更新界面或执行业务逻辑的场景。
   * <br>当callback的值为undefined时，不使用回调函数。
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
   * @param { Optional<CrownSensitivity> } sensitivity - 表冠响应灵敏度。
   *     <br>默认值：CrownSensitivity.MEDIUM，响应速度适中。
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
   * @param { Optional<boolean> } enable - 设置是否开启触控反馈。
   *     <br>- true：开启触控反馈。
   *     <br>- false：不开启触控反馈。
   *     <br>默认值：true
   *     <br>设置为true后，其生效情况取决于系统的硬件是否支持。
   *     <br>当enable的值为undefined时，使用默认值。
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
   * @param { Optional<boolean> } isLoop - 是否可循环滚动。
     *     <br>- true：可循环滚动，年份随着月份的循环滚动进行联动加减，月份随着日的循环滚动进行联动加减。
     *     <br>- false：非循环滚动，年、月、日到达本列的顶部或底部时停止滚动，年、月、日之间保持独立，不进行联动加减。
     *     <br>默认值：true
     *     <br>当isLoop的值为undefined时，使用默认值。
     *     <br>**说明：**
     *     <br>设置了[start]{@link DatePickerOptions}或[end]{@link DatePickerOptions}且为非默认值的场景下，canLoop不生效。
     *         这是因为设置了日期范围限制后，循环滚动可能导致日期超出有效范围，为确保日期选择的准确性，强制使用非循环模式。
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
   * > 默认值：$r('sys.color.ohos_id_color_text_primary_actived')。
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
   * > 默认值：$r('sys.color.ohos_id_color_switch_outline_off')。
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
   * > 默认值：Color.White。
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
   * > 默认值：false
   * 
   * > **说明：**
   * >
   * > 仅在简体中文和繁体中文语言环境下生效，其他语言环境下设置该属性无效果。
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
   * > 默认值：false
   * 
   * > **说明：**
   * >
   * > 开关打开后，仅在简体中文和繁体中文环境下生效，在其他语言环境农历不生效，因此建议在其他语言环境设置为不展示开关。
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
   * 设置农历开关的颜色样式。仅当lunarSwitch为true时生效。
   * 
   * > 默认值：
   * > <br>{
   * > <br>selectedColor: `$r('sys.color.ohos_id_color_text_primary_actived')`,
   * > <br>unselectedColor: `$r('sys.color.ohos_id_color_switch_outline_off')`,
   * > <br>strokeColor: Color.White
   * > <br>}
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
   * > 默认值：false
   * 
   * > **说明：**
   * >
   * > 1. 当showTime为true时，点击弹窗的标题日期可以在"日期选择器"和"日期选择器+时间选择器"两个页面中切换。
   * > 2. 当showTime为true时，mode参数不生效，此时纯日期选择页面固定显示年、月、日三列。
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
   * > 默认值：false
   * 
   * > **说明：**
   * >
   * > 当展示的时间选择器为12小时制时，上午和下午的标识不会根据小时数自动切换。
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
   * > 默认值：
   * >
   * > <br>{
   * > <br>color: '#ff182431',
   * > <br>font: {
   * > <br>size: '14fp',
   * > <br>weight: FontWeight.Regular
   * > <br>}
   * > <br>}
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
   * > 默认值：
   * >
   * > <br>{
   * > <br>color: '#ff182431',
   * > <br>font: {
   * > <br>size: '16fp',
   * > <br>weight: FontWeight.Regular
   * > <br>}
   * > <br>}
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
   * 设置确认按钮显示样式、重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、按钮是否默认响应Enter键。
   * 当需要自定义确认按钮外观或行为时传入此参数。不传入时使用系统默认按钮样式。
   * 
   * > **说明：**
   * >
   * > 1. acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
   * > 保持默认值false。
   * >
   * > 2. 按钮高度默认40vp，在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
   * > [ROUNDED_RECTANGLE]{@link ButtonType#ROUNDED_RECTANGLE}，呈现效果依然是胶囊型按钮[Capsule]{@link ButtonType#Capsule}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * 设置取消按钮显示样式、重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、按钮是否默认响应Enter键。
   * 当需要自定义取消按钮外观或行为时传入此参数。不传入时使用系统默认按钮样式。
   * 
   * > **说明：**
   * >
   * > 1. acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
   * > 保持默认值false。
   * >
   * > 2. 按钮高度默认40vp，在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
   * > [ROUNDED_RECTANGLE]{@link ButtonType#ROUNDED_RECTANGLE}，呈现效果依然是胶囊型按钮[Capsule]{@link ButtonType#Capsule}。
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
   * > 默认值：
   * >
   * > <br>{
   * > <br>color: '#ff007dff',
   * > <br>font: {
   * > <br>size: '20fp',
   * > <br>weight: FontWeight.Medium
   * > <br>}
   * > <br>}
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
   * > 默认值：{ x: 0, y: 0, width: '100%', height: '100%' }
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
   * > 默认值：DialogAlignment.Default
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
   * 弹窗相对alignment所在位置的偏移量。当需要微调弹窗位置时设置此参数（如与alignment配合实现精确位置控制），
   * 不设置时弹窗按alignment对齐位置显示。
   * 
   * > 默认值：{ dx: 0 , dy: 0 }
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
   * 点击弹窗中的“确定”按钮时触发该回调。回调参数value为当前选中的日期，包含年、月、日信息。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 10开始废弃。建议使用onDateAccept。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead datePicker/DatePickerDialogOptions#onDateAccept
   */
  onAccept?: (value: DatePickerResult) => void;

  /**
   * 点击弹窗中的“取消”按钮时触发该回调。回调签名：() => void，无参数和返回值。
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
   * 滑动弹窗中的滑动选择器使当前选中项改变时触发该回调。回调参数value为当前选中的日期，包含年、月、日信息。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 10开始废弃。建议使用onDateChange。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead datePicker/DatePickerDialogOptions#onDateChange
   */
  onChange?: (value: DatePickerResult) => void;

  /**
   * 点击弹窗中的“确定”按钮时触发该回调。回调签名：(value: Date) => void，其中value为用户选择的日期，包含年月日信息；当showTime为true时，
   * 还包含时和分信息。开发者可在此回调中保存用户选择的日期或执行后续业务逻辑。
   * 
   * > **说明：**
   * >
   * > 当showTime设置为true时，value中时和分为选择器选择的时和分。否则，value中时和分为系统时间的时和分。
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
   * 滑动弹窗中的日期使当前选中项改变时触发该回调。回调签名：(value: Date) => void，其中value为当前选中的日期，包含年月日信息；
   * 当showTime为true时，还包含时和分信息。此回调在用户滑动选择器过程中实时触发，与onDateAccept仅在点击确定后触发的时机不同。
   * 
   * > **说明：**
   * >
   * > 当showTime设置为true时，value中时和分为选择器选择的时和分。否则，value中时和分为系统时间的时和分。
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
   * > 默认值：Color.Transparent
   * 
   * > **说明：**
   * >
   * > 当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则显示的颜色将不符合预期效果。
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
   * > 默认值：BlurStyle.COMPONENT_ULTRA_THICK
   *
   * > **说明：**
   * >
   * > 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，
   * > 否则显示的颜色将不符合预期效果。
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
   * 背景模糊效果参数，用于自定义弹窗背景模糊的显示样式，支持配置颜色模式、自适应颜色、缩放比例等属性，实现不同的背景模糊视觉效果。
   * 默认值请参考BackgroundBlurStyleOptions类型说明。
   * 
   * > **说明：**
   * >
   * > 未设置时沿用backgroundBlurStyle的默认效果（BlurStyle.COMPONENT_ULTRA_THICK）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 背景效果参数，用于自定义弹窗背景的显示效果，支持配置模糊半径、饱和度、亮度、颜色等属性，实现不同的背景视觉效果。默认值请参考
   * BackgroundEffectOptions类型说明。
   * 
   * > **说明：**
   * >
   * > 未设置时不生效，此时弹窗背景模糊效果由backgroundBlurStyle决定；设置后将覆盖backgroundBlurStyle的效果。从API版本26.0.0开始，
   * > 设置systemMaterial后backgroundEffect与backgroundBlurStyle均不生效。
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
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
   * >
   * > 2. 在onDidAppear内设置改变弹窗显示效果的回调事件，再次调用showDatePickerDialog时生效。
   * >
   * > 3. 快速连续触发弹出与关闭时，存在onWillDisappear在onDidAppear前生效。
   * >
   * > 4. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。
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
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
   * >
   * > 2. 快速连续触发弹出与关闭时，存在onWillDisappear在onDidAppear前生效。
   * >
   * > 3. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。
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
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
   * >
   * > 2. 在onWillAppear内设置改变弹窗显示效果的回调事件，再次调用showDatePickerDialog时生效。
   * >
   * > 3. 快速连续触发弹出与关闭时，存在onWillDisappear在onDidAppear前生效。
   * >
   * > 4. 当弹窗入场动效未完成时关闭弹窗，onDidAppear和后续回调不会触发。
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
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
   * >
   * > 2. 快速连续触发弹出与关闭时，存在onWillDisappear在onDidAppear前生效。
   * >
   * > 3. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。
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
   * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * 设置时分是否显示前导0，目前只支持设置hour和minute参数，仅当showTime为true时生效。
   * 
   * > 默认值：
   * >
   * > - hour: 24小时制默认为"2-digit"，设置hour是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"；
   * > 12小时制默认为"numeric"，即没有前导0。可选值为"numeric"或"2-digit"，传入其他值时按默认值处理。
   * > - minute: 默认为"2-digit"，设置minute是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"。
   * > 可选值为"numeric"或"2-digit"，传入其他值时按默认值处理。
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
   * 是否响应悬停态。悬停态指折叠屏等设备处于悬停折叠状态时的交互模式，而非鼠标悬停。
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
   * 设置悬停态下弹窗默认展示区域，仅在enableHoverMode为true时生效。
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
   * - true：开启触控反馈（当需要为用户提供操作反馈时选择）。
   * - false：不开启触控反馈（当不需要触控反馈或设备不支持时选择）。
   * 
   * > 默认值：true
   * 
   * > **说明：**
   * >
   * > 1. 设置为true后，其生效情况取决于系统的硬件是否支持。
   * > 2. 开启触控反馈时，需要在工程的src/main/module.json5文件的"module"内配置requestPermissions字段开启振动权限，配置如下：
   * >
   * > "requestPermissions": [{"name": "ohos.permission.VIBRATE"}]
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
   * - true：可循环，年份随着月份的循环滚动进行联动加减，月份随着日的循环滚动进行联动加减。
   * - false：不可循环，年、月、日到达本列的顶部或底部时，无法再进行滚动，年、月、日之间也无法再联动加减。
   * 
   * > 默认值：true
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
   * 设置弹窗的系统材质。
   * 
   * > **说明：**
   * >
   * > - 默认值为ImmersiveOptions的style为ImmersiveStyle.ULTRA_THICK的ImmersiveMaterial对象，设置undefined时与默认值保持一致。
   * > 不同的材质具有不同的效果。关于ImmersiveMaterial的详细说明，请参考[SystemUiMaterial]{@link SystemUiMaterial}类型定义。
   * > - 该接口影响背景色[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、背景模糊
   * > [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)}
   * > 、背景模糊效果[backgroundBlurStyleOptions]{@link BackgroundBlurStyleOptions}、背景效果
   * > [backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}、边框颜色
   * > [borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * > [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}，当设置系统材质时，上述接口不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;
  /**
   * 设置系统材质下弹窗的非线性动画模式。当需要自定义弹窗的非线性动画效果时传入此参数。
   * 
   * > **默认值：** DistortionMode.DISTORTION_AUTO
   * 
   * > **系统接口：** 此接口为系统接口。
   * 
   * > **说明：** 当取值为 DISTORTION_AUTO 时，需设置[ImmersiveMaterial]{@link ImmersiveMaterial} 类型材质方可生效，
   * > 并依据设备算力档位自动生效非线性效果（高中档算力设备生效，低档算力设备不生效）。非线性动画会增加渲染开销，建议在低端设备上谨慎使用。
   * > 各枚举取值含义请参见[DistortionMode]{@link DistortionMode}。
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;
  /**
   * 设置系统材质下弹窗的流光动画模式。当需要自定义弹窗的流光动画效果时传入此参数。
   * 
   * > **默认值：** EdgeLightMode.EDGELIGHT_AUTO
   * 
   * > **系统接口：** 此接口为系统接口。
   * 
   * > **说明：** 当取值为 EDGELIGHT_AUTO 时，需设置[ImmersiveMaterial]{@link ImmersiveMaterial} 类型材质方可生效，
   * > 并依据设备算力档位自动生效流光效果（高档算力设备生效，中低档算力设备不生效）。流光动画会增加渲染开销，建议在低端设备上谨慎使用。
   * > 各枚举取值含义请参见[EdgeLightMode]{@link EdgeLightMode}。
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
   * >
   * > 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [showDatePickerDialog]{@link @ohos.arkui.UIContext:UIContext.showDatePickerDialog}来明确UI的执行上下文。
   *
   * @param { DatePickerDialogOptions } options - 配置日期选择器弹窗的参数，缺省时不弹出弹窗。
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
 * DatePicker是滑动选择日期的组件，支持公历和农历切换，可配置日期范围、选择模式和文本样式。用于需要用户选择日期的应用场景，
 * 提供统一的日期选择交互体验，能够提升用户体验，减少开发工作量。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 该组件不建议开发者在动效过程中修改属性数据。
 * >
 * > - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。
 * > 可通过$r('sys.float.ohos_id_picker_show_count_landscape')查看横屏时的具体配置值。
 * 
 * > ###### 子组件
 * >
 * > 该组件为基础组件，不建议包含子组件。
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
 * 定义日期选择器组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const DatePickerInstance: DatePickerAttribute;