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
 * Defines the time format returned by the date picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DatePickerResult {
  /**
   * Year of the selected date.
   *
   * Value range: related to the set **start** and **end** parameters. If **start** and **end** are not set, the value
   * range is [1970, 2100].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  year?: number;

  /**
   * Index of the month of the selected date. The index starts from 0, where **0** indicates January and **11**
   * indicates December.
   *
   * Value range: related to the set **start** and **end** parameters. If **start** and **end** are not set, the value
   * range is [0, 11].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  month?: number;

  /**
   * Day of the selected date.
   *
   * Value range: related to the set **start** and **end** parameters. If **start** and **end** are not set, the value
   * range is [1, 31].
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
 * Enumerates date display modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum DatePickerMode {
  /**
   * Three-column display: year, month, and day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DATE = 0,

  /**
   * Two-column display: year and month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  YEAR_AND_MONTH = 1,

  /**
   * Two-column display: month and day.
   *
   * In this mode, the year remains unchanged and takes the value specified by the **selected** parameter. If
   * **selected** is not specified, the current system year is used. When scrolling the month causes the date to exceed
   * the valid range, the date is automatically adjusted to the last day of the month.
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
 * Describes the parameters of the date picker.
 *
 * > **NOTE**
 * >
 * > - For details about how to use **Date**, see [TimePickerOptions]{@link TimePickerOptions}.
 * >
 * > - Modifying the attributes in **DatePickerOptions** while the **DatePicker** component is scrolling will cause
 * > these attributes to fail to take effect.
 * >
 * > - If the start and end dates to be set are outside the range of \[Date('1900-01-31'), Date('2100-12-31')], it is
 * > recommended to use [DatePickerComponent]{@link @ohos.arkui.advanced.DatePickerComponent}.
 * > > **NOTE**
 * >
 * > Handling in the case of date configuration exceptions:
 * >
 * > - If the start date is later than the end date, and the selected date is not set, the start date, end date, and
 * > selected date are set to the default values.
 * >
 * > - If the start date is later than the end date, and the selected date is earlier than the default start date, the
 * > start date and end date are set to the default values, and the selected date is set to the default start date.
 * >
 * > - If the start date is later than the end date, and the selected date is later than the default end date, the start
 * > date and end date are set to the default values, and the selected date is set to the default end date.
 * >
 * > - If the start date is later than the end date, and the selected date is within the range of the default start date
 * > and end date, the start date and end date are set to the default values, and the selected date is set to the
 * > specified value.
 * >
 * > - If the selected date is earlier than the start date, the start date is set to the selected date.
 * >
 * > - If the selected date is later than the end date, the end date is set to the selected date.
 * >
 * > - If the start date is later than the current system date, and the selected date is not set, the start date is set
 * > to the selected date.
 * >
 * > - If the end date is earlier than the current system date, and the selected date is not set, the end date is set to
 * > the selected date.
 * >
 * > - If the set date is in invalid format, for example, **'1999-13-32'**, the default value is used.
 * >
 * > - If the start date or end date is earlier than the earliest date in the valid date range, the start date or end
 * > date is set to the default state date.
 * >
 * > - If the start date or end date is later than the latest date in the valid date range, the start date or end date
 * > is set to the default end date.
 * >
 * > - If both the start date and end date are earlier than the earliest date in the valid date range, the start date
 * > and end date are set to the earliest date in the valid date range.
 * >
 * > - If both the start date and end date are later than the latest date in the valid date range, the start date and
 * > end date are set to the latest date in the valid date range.
 * > > **NOTE**
 * >
 * > Handle exceptions for the start and end dates first, followed by exceptions for the selected date.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DatePickerOptions {
  /**
   * Start date of the picker. It applies to scenarios where the lower limit of selectable dates needs to be restricted,
   * for example, only dates after a certain date are allowed to be selected. <!--RP1--><!--RP1End-->
   *
   * Default value: **Date('1970-01-01')**
   *
   * Value range: [Date('1900-01-31'), Date('2100-12-31')]
   *
   * **Note:**
   *
   * When **start** or **end** is set to a non-default value, **canLoop** does not take effect.
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
   * End date of the picker. It applies to scenarios where the upper limit of selectable dates needs to be restricted,
   * for example, setting the expiration date of a validity period. <!--RP2--><!--RP2End-->
   *
   * Default value: **Date('2100-12-31')**
   *
   * Value range: [Date('1900-01-31'), Date('2100-12-31')]
   *
   * **Note:**
   *
   * When **start** or **end** is set to a non-default value, **canLoop** does not take effect.
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
   * Date of the selected item. It applies to scenarios where an initial selected date needs to be preset, for example,
   * editing an existing record or displaying a specified date by default.
   *
   * Default value: current system date (affected by the **start** and **end** parameters; see the abnormal situation
   * description below for details).
   *
   * Configurable date range of the **Date** object: [Date('1900-01-31'), Date('2100-12-31')]. The valid range of the
   * **selected** parameter: it must be within the date range set by the **start** and **end** parameters.
   *
   * Since API version 10, this parameter supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
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
   * Date display mode. It applies to scenarios where the date display columns need to be customized, for example, only
   * the year and month or the month and day need to be selected. If this parameter is not passed,
   * **DatePickerMode.DATE** is used by default, and the year, month, and day columns are displayed.
   *
   * In [DatePickerDialog]{@link ./date_picker}, when **showTime** of
   * [DatePickerDialogOptions]{@link DatePickerDialogOptions} is set to **true**, this parameter does not take effect,
   * and the year, month, and day columns are displayed by default. This is to ensure layout rationality, because an
   * additional time column is displayed when **showTime** is set to **true**.
   *
   * **Note:**
   *
   * The preceding **DatePickerDialog**-related restriction applies only to the **DatePickerDialog** component.
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
 * **DatePicker** is a component for selecting a date through scrolling interaction. It supports switching between the
 * Gregorian and lunar calendars, and allows you to configure the date range, selection mode, and text style. It is used
 * in application scenarios where users need to select a date, providing a unified date selection interaction
 * experience, improving user experience, and reducing development workload.
 *
 * > **NOTE**
 * >
 * > - Avoid changing component attributes during animation processes.
 * >
 * > - The maximum number of rows that can be displayed varies by screen orientation: In portrait mode, the default
 * > number of rows is 5. In landscape mode, the number of rows depends on the system configuration. If no system
 * > configuration is set, the default is 3 rows. To check the specific system configuration value for landscape mode,
 * > use **$r('sys.float.ohos_id_picker_show_count_landscape')**.
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
   * Creates a date picker based on the specified date range. Use cases include application features that require users
   * to select a date, such as birthday selection, meeting booking, and itinerary arrangement.
   *
   * @param { DatePickerOptions } options - Parameters for configuring the date picker component. If this parameter is
   *     not passed, the default configuration is used (**start** defaults to **Date('1970-01-01')**, **end** defaults
   *     to **Date('2100-12-31')**, and **selected** defaults to the current system date).
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
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
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
   * Sets whether to display dates in lunar calendar format.
   *
   * > **NOTE**
   * >
   * > This attribute takes effect only for Simplified Chinese and Traditional Chinese. In other languages, setting this
   * > attribute has no effect.
   *
   * @param { boolean } value - Whether to display dates in lunar calendar format.
   *     <br>- **true**: Display dates in lunar calendar format.
   *     <br>- **false**: Do not display dates in lunar calendar format.
   *     <br>Default value: **false**
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lunar(value: boolean): DatePickerAttribute;

  /**
   * Sets whether to display dates in lunar calendar format. Compared with
   * [lunar]{@link DatePickerAttribute#lunar(value: boolean)}, the **isLunar** parameter supports the **undefined**
   * type.
   *
   * > **NOTE**
   * >
   * > This attribute takes effect only for Simplified Chinese and Traditional Chinese. In other languages, setting this
   * > attribute has no effect.
   *
   * @param { Optional<boolean> } isLunar - Whether to display dates in lunar calendar format.
   *     <br>- **true**: Display dates in lunar calendar format.
   *     <br>- **false**: Do not display dates in lunar calendar format.
   *     <br>Default value: **false**
   *     <br>If the value of **isLunar** is **undefined**, the default value is used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  lunar(isLunar: Optional<boolean>): DatePickerAttribute;

  /**
   * Sets the text style for edge items (the second item above or below the selected item).
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight of the edge items.
   *     <br>Default value:
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
   * Sets the text style for edge items (the second item above or below the selected item). Compared to
   * [disappearTextStyle<sup>10+</sup>]{@link DatePickerAttribute#disappearTextStyle(value: PickerTextStyle)}, this API
   * supports the **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight of the edge items.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '14fp',
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>If the value of **style** is **undefined**, the default value is used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disappearTextStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;

  /**
   * Sets the text style for candidate items (the first item immediately above or below the selected item).
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight of the candidate items.
   *     <br>Default value:
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
   * Sets the text style for candidate items (the first item immediately above or below the selected item). Compared to
   * [textStyle<sup>10+</sup>]{@link DatePickerAttribute#textStyle(value: PickerTextStyle)}, this API supports the
   * **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight of the candidate items.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp',
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>If the value of **style** is undefined, the default value is used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;

  /**
   * Sets the text style for the selected item.
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight of the selected item.
   *     <br>Default value:
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
   * Sets the text style for the selected item. Compared to
   * [selectedTextStyle<sup>10+</sup>]{@link DatePickerAttribute#selectedTextStyle(value: PickerTextStyle)}, this API
   * supports the **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight of the selected item.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff007dff',
   *     <br>font: {
   *     <br>size: '20fp',
   *     <br>weight: FontWeight.Medium
   *     <br>}
   *     <br>}
   *     <br>If the value of **style** is undefined, the default value is used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedTextStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;

  /**
   * Triggered when the date picker snaps to the selected item. This event cannot be triggered by two-way bound state
   * variables.
   *
   * This API is supported since API version 8 and deprecated since API version 10. You are advised to use
   * [onDateChange]{@link DatePickerAttribute#onDateChange(callback: Callback<Date>)} instead.
   *
   * @param { function } callback - Callback used to return the selected time, including the year, month, and day
   *     fields.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DatePickerAttribute#onDateChange(callback: Callback<Date>)
   */
  onChange(callback: (value: DatePickerResult) => void): DatePickerAttribute;

  /**
   * Triggered when the options are completely settled at the selected position after the text content of the
   * **DatePicker** is swiped. Settling means that the scrolling animation ends and the options stop stably at the
   * selected position. It cannot be triggered by two-way bound state variables, but can respond to the user's swipe
   * operation.
   *
   * @param { function } callback - Callback used to return the selected time. The year, month, and day are the selected
   *     date; the hour and minute depend on the hour and minute of the current system time; and the second is always 0
   *     0. This is applicable to scenarios where the selected date needs to be obtained, the UI needs to be updated, or
   *     service logic needs to be executed after the user confirms the date selection. [since 10 - 17]
   * @param { Callback<Date> } callback - Callback used to return the selected time. The year, month, and day are the
   *     selected date; the hour and minute depend on the hour and minute of the current system time; and the second is
   *     always 00. This is applicable to scenarios where the selected date needs to be obtained, the UI needs to be
   *     updated, or service logic needs to be executed after the user confirms the date selection. [since 18]
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDateChange(callback: Callback<Date>): DatePickerAttribute;

  /**
   * Triggered when the date picker snaps to the selected item. This event cannot be triggered by two-way bound state
   * variables. Compared to
   * [onDateChange<sup>10+</sup>]{@link DatePickerAttribute#onDateChange(callback: Callback<Date>)}, this API supports
   * the **undefined** type for the **callback** parameter.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Optional<Callback<Date>> } callback - Callback used to return the selected time. The year, month, and day
   *     are the selected date; the hour and minute depend on the hour and minute of the current system time; and the
   *     second is always 00. This is applicable to scenarios where the selected date needs to be obtained, the UI needs
   *     to be updated, or service logic needs to be executed after the user confirms the date selection.
   *     <br>If the value of **callback** is **undefined**, the callback is not used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onDateChange(callback: Optional<Callback<Date>>): DatePickerAttribute;

  /**
   * Sets the sensitivity to the digital crown rotation.
   *
   * @param { Optional<CrownSensitivity> } sensitivity - Crown response sensitivity.
   *     <br>Default value: **CrownSensitivity.MEDIUM**, indicating a moderate response speed.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): DatePickerAttribute;

  /**
   * Sets whether to enable haptic feedback.
   *
   * @param { Optional<boolean> } enable - Whether to enable haptic feedback.
   *     <br>- **true**: enable haptic feedback.
   *     <br>- **false**: disable haptic feedback.
   *     <br>Default value: **true**
   *     <br>After this parameter is set to **true**, whether it takes effect depends on whether the system hardware
   *     supports it.
   *     <br>If the value of **enable** is **undefined**, the default value is used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): DatePickerAttribute;

  /**
   * Sets whether to enable cyclic scrolling.
   *
   * @param { Optional<boolean> } isLoop - Whether to enable cyclic scrolling.
   *     <br>- **true**: enable cyclic scrolling. The year increments/decrements in a linked manner as the month
   *     scrolls cyclically, and the month increments/decrements in a linked manner as the day scrolls cyclically.
   *     <br>- **false**: disable cyclic scrolling. The year, month, and day stop scrolling when they reach the top or
   *     bottom of their respective columns, and they remain independent of each other without linked increment/
   *     decrement.
   *     <br>Default value: **true**
   *     <br>If the value of **isLoop** is undefined, the default value is used.
   *     <br>**Note:**
   *     <br>When [start]{@link DatePickerOptions} or [end]{@link DatePickerOptions} is set to a non-default value,
   *     **canLoop** does not take effect. This is because after a date range limit is set, cyclic scrolling may cause
   *     the date to exceed the valid range. To ensure the accuracy of date selection, the non-cyclic mode is forcibly
   *     used.
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
 * Defines the style of the lunar calendar switch in the **DatePickerDialog** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface LunarSwitchStyle {
  /**
   * Background color of the switch when it is on.
   *
   * Default value: **$r('sys.color.ohos_id_color_text_primary_actived')**
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
   * Border color of the switch when it is off.
   *
   * Default value: **$r('sys.color.ohos_id_color_switch_outline_off')**
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
   * Color of the inner icon of the switch.
   *
   * Default value: **Color.White**
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
 * Defines the configuration options of the date picker dialog box.
 *
 * Inherited from [DatePickerOptions]{@link DatePickerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DatePickerDialogOptions extends DatePickerOptions {
  /**
   * Whether the date is displayed in the lunar calendar.
   *
   * - **true**: displayed in the lunar calendar.
   * - **false**: not displayed in the lunar calendar.
   *
   * Default value: **false**
   *
   * **NOTE**
   *
   * This attribute takes effect only in the Simplified Chinese and Traditional Chinese language environments. In other
   * language environments, setting this attribute has no effect.
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
   * Whether to display the switch for switching to the lunar calendar.
   *
   * - **true**: display the switch for switching to the lunar calendar.
   * - **false**: do not display the switch for switching to the lunar calendar.
   *
   * Default value: **false**
   *
   * **NOTE**
   *
   * After the switch is turned on, it takes effect only in the Simplified Chinese and Traditional Chinese environments.
   * In other language environments, the lunar calendar does not take effect. Therefore, it is recommended that the
   * switch not be displayed in other language environments.
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
   * Color style of the lunar calendar switch. This parameter takes effect only when **lunarSwitch** is **true**.
   *
   * Default value: **{
   *
   * selectedColor: `$r('sys.color.ohos_id_color_text_primary_actived')`,
   *
   * unselectedColor: `$r('sys.color.ohos_id_color_switch_outline_off')`,
   *
   * strokeColor: Color.White
   *
   * }**
   *
   * @default { selectedColor: $r('sys.color.ohos_id_color_text_primary_actived'),
   *     unselectedColor: $r('sys.color.ohos_id_color_switch_outline_off'),
   *     strokeColor: Color.White }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  lunarSwitchStyle?: LunarSwitchStyle;

  /**
   * Whether to display the time picker in the dialog box.
   *
   * - **true**: display the time picker.
   * - **false**: do not display the time picker.
   *
   * Default value: **false**
   *
   * **NOTE**
   *
   * 1. When **showTime** is true, tapping the title date of the dialog box switches between the "date picker" and
   * "date picker + time picker" pages.
   * 2. When **showTime** is **true**, the mode parameter does not take effect, and the date-only page always displays
   * the year, month, and day columns.
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
   * Whether the time picker displayed in the dialog box uses the 24-hour format. This parameter takes effect only when
   * **showTime** is **true**.
   *
   * - true: display the 24-hour format.
   * - false: display the 12-hour format.
   *
   * Default value: **false**
   *
   * **NOTE**
   *
   * When the displayed time picker uses the 12-hour format, the AM and PM indicators do not switch automatically based
   * on the hour.
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
   * The text color, font size, and font weight of the edge items (the second item above or below the selected item).
   *
   * Default value:
   *
   * **{
   *
   * color: '#ff182431',
   *
   * font: {
   *
   * size: '14fp',
   *
   * weight: FontWeight.Regular
   *
   * }
   *
   * }**
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
   * Text color, font size, and font weight of the candidate items (the first item above or below the selected item).
   *
   * Default value:
   *
   * **{
   *
   * color: '#ff182431',
   *
   * font: {
   *
   * size: '16fp',
   *
   * weight: FontWeight.Regular
   *
   * }
   *
   * }**
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
   * Display style, importance, role, background color, corner radius, text color, font size, font weight, font style,
   * font list, and whether the button responds to the Enter key by default for the confirm button. Pass this parameter
   * when you need to customize the appearance or behavior of the confirm button. If not passed, the system default
   * button style is used.
   *
   * **NOTE**
   *
   * 1. At most one of **acceptButtonStyle** and **cancelButtonStyle** can have the **primary** field set to **true**.
   * If both are set to **true**, the **primary** field does not take effect and remains at the default value **false**.
   * 2. The button height is 40 vp by default and does not change in the care mode - large font scenario. Even if the
   * button style is set to the rounded rectangle [ROUNDED_RECTANGLE]{@link ButtonType}, the button is still displayed
   * as a capsule button [Capsule]{@link ButtonType}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * Display style, importance, role, background color, corner radius, text color, font size, font weight, font style,
   * font list, and whether the button responds to the Enter key by default for the cancel button. Pass this parameter
   * when you need to customize the appearance or behavior of the cancel button. If not passed, the system default
   * button style is used.
   *
   * **NOTE**
   *
   * 1. At most one of **acceptButtonStyle** and **cancelButtonStyle** can have the **primary** field set to **true**.
   * If both are set to **true**, the **primary** field does not take effect and remains at the default value **false**.
   * 2. The button height is 40 vp by default and does not change in the care mode - large font scenario. Even if the
   * button style is set to the rounded rectangle [ROUNDED_RECTANGLE]{@link ButtonType}, the button is still displayed
   * as a capsule button [Capsule]{@link ButtonType}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * Text color, font size, and font weight of the selected item.
   *
   * Default value:
   *
   * **{
   *
   * color: '#ff007dff',
   *
   * font: {
   *
   * size: '20fp',
   *
   * weight: FontWeight.Medium
   *
   * }
   *
   * }**
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
   * Mask area of the dialog box. Events within the mask area are not passed through, while events outside the mask area
   * are passed through.
   *
   * Default value: **{ x: 0, y: 0, width: '100%', height: '100%' }**
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
   * Alignment of the dialog box in the vertical direction.
   *
   * Default value: **DialogAlignment.Default**
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
   * Offset of the dialog box relative to the position specified by alignment. Set this parameter when you need to fine-
   * tune the position of the dialog box (for example, to achieve precise position control together with alignment). If
   * not set, the dialog box is displayed at the position aligned by alignment.
   *
   * Default value: **{ dx: 0 , dy: 0 }**
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
   * Triggered when the "OK" button in the dialog box is tapped. The callback parameter value is the currently selected
   * date, including the year, month, and day.
   *
   * **NOTE**
   *
   * Supported since API version 8 and deprecated since API version 10. Use **onDateAccept** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead datePicker/DatePickerDialogOptions#onDateAccept
   */
  onAccept?: (value: DatePickerResult) => void;

  /**
   * Triggered when the "Cancel" button in the dialog box is tapped. Callback signature: () => void, with no parameters
   * and no return value.
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
   * Triggered when the current selected item changes as the sliding picker in the dialog box is swiped. The callback
   * parameter value is the currently selected date, including the year, month, and day.
   *
   * **NOTE**
   *
   * Supported since API version 8 and deprecated since API version 10. Use onDateChange instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead datePicker/DatePickerDialogOptions#onDateChange
   */
  onChange?: (value: DatePickerResult) => void;

  /**
   * Triggered when the "OK" button in the dialog box is tapped. Callback signature: **(value: Date) => void**, where
   * **value** is the date selected by the user, including the year, month, and day. When **showTime** is true, it also
   * includes the hour and minute. Developers can save the date selected by the user or execute subsequent business
   * logic in this callback.
   *
   * **NOTE**
   *
   * When **showTime** is set to **true**, the hour and minute in **value** are those selected by the picker. Otherwise,
   * the hour and minute in **value** are those of the system time.
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
   * Triggered when the current selected item changes as the date in the dialog box is swiped. Callback signature:
   * **(value: Date) => void**, where **value** is the currently selected date, including the year, month, and day. When
   * **showTime** is **true**, it also includes the hour and minute. This callback is triggered in real time while the
   * user swipes the picker, which differs from **onDateAccept**, which is triggered only after the OK button is tapped.
   *
   * **NOTE**
   *
   * When **showTime** is set to **true**, the hour and minute in value are those selected by the picker. Otherwise, the
   * hour and minute in value are those of the system time.
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
   * Background color of the dialog box.
   *
   * Default value: **Color.Transparent**
   *
   * **NOTE**
   *
   * When **backgroundColor** is set to a non-transparent color, **backgroundBlurStyle** must be set to
   * **BlurStyle.NONE**. Otherwise, the displayed color will not meet the expected effect.
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
   * Background blur material of the dialog box.
   *
   * Default value: **BlurStyle.COMPONENT_ULTRA_THICK**
   *
   * **NOTE**
   *
   * Set this parameter to **BlurStyle.NONE** to disable the background blur. When **backgroundBlurStyle** is set to a
   * value other than NONE, do not set **backgroundColor**. Otherwise, the displayed color will not meet the expected
   * effect.
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
   * Background blur effect parameters, used to customize the display style of the dialog box background blur. It
   * supports configuring attributes such as the color mode, adaptive color, and scale ratio to achieve different
   * background blur visual effects. For the default value, see the **BackgroundBlurStyleOptions** type description.
   *
   * **NOTE**
   *
   * When not set, the default effect of **backgroundBlurStyle (BlurStyle.COMPONENT_ULTRA_THICK)** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Background effect parameters, used to customize the display effect of the dialog box background. It supports
   * configuring attributes such as the blur radius, saturation, brightness, and color to achieve different background
   * visual effects. For the default value, see the **BackgroundEffectOptions** type description.
   *
   * **NOTE**
   *
   * When not set, this parameter does not take effect, and the dialog box background blur effect is determined by
   * **backgroundBlurStyle**. When set, it overrides the effect of **backgroundBlurStyle**. Since API version 26.0.0,
   * after **systemMaterial** is set, neither **backgroundEffect** nor **backgroundBlurStyle** takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Event callback after the dialog box is displayed.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is: **onWillAppear** >> **onDidAppear** >>
   * (**onDateAccept**\/**onCancel**\/**onDateChange**) >> **onWillDisappear** >> **onDidDisappear**.
   * 2. Callback events that change the display effect of the dialog box set in **onDidAppear** take effect the next
   * time **showDatePickerDialog** is called.
   * 3. When the dialog box is rapidly and consecutively triggered to pop up and close, **onWillDisappear** may take
   * effect before **onDidAppear**.
   * 4. When the dialog box is closed before its entrance animation is complete, this callback is not triggered.
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
   * Event callback after the dialog box disappears.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is: **onWillAppear** >> **onDidAppear** >> (onDateAccept/onCancel/onDateChange)
   * >> **onWillDisappear** >> **onDidDisappear**.
   * 2. When the dialog box is rapidly and consecutively triggered to pop up and close, **onWillDisappear** may take
   * effect before **onDidAppear**.
   * 3. When the dialog box is closed before its entrance animation is complete, this callback is not triggered.
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
   * Event callback before the dialog box display animation.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is: **onWillAppear** >> **onDidAppear** >> (onDateAccept/onCancel/onDateChange)
   * >> **onWillDisappear** >> **onDidDisappear**.
   * 2. Callback events that change the display effect of the dialog box set in **onWillAppear** take effect the next
   * time **showDatePickerDialog** is called.
   * 3. When the dialog box is rapidly and consecutively triggered to pop up and close, **onWillDisappear** may take
   * effect before **onDidAppear**.
   * 4. When the dialog box is closed before its entrance animation is complete, **onDidAppear** and subsequent
   * callbacks are not triggered.
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
   * Event callback before the dialog box exit animation.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is: **onWillAppear** >> **onDidAppear** >> (onDateAccept/onCancel/onDateChange)
   * >> **onWillDisappear** >> **onDidDisappear**.
   * 2. When the dialog box is rapidly and consecutively triggered to pop up and close, **onWillDisappear** may take
   * effect before **onDidAppear**.
   * 3. When the dialog box is closed before its entrance animation is complete, this callback is not triggered.
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
   * Shadow of the dialog box background.
   *
   * On 2-in-1 devices, in the default scenario, the focused shadow value is **ShadowStyle.OUTER_FLOATING_MD**, and the
   * unfocused shadow value is **ShadowStyle.OUTER_FLOATING_SM**. Other devices have no shadow by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Whether the hour and minute are displayed with a leading zero. Currently, only the hour and minute parameters are
   * supported, and this parameter takes effect only when **showTime** is **true**.
   *
   * Default value:
   *
   * **hour**: The default value is "2-digit" in the 24-hour format. Sets whether the hour is displayed as two digits.
   * If the actual value is less than 10, a leading zero is added and displayed, that is, "0X". The default value is "
   * numeric" in the 12-hour format, that is, no leading zero. The optional values are "numeric" or "2-digit". If
   * another value is passed, the default value is used.
   *
   * **minute**: The default value is "2-digit". Sets whether the minute is displayed as two digits. If the actual value
   * is less than 10, a leading zero is added and displayed, that is, "0X". The optional values are "numeric" or "2-
   * digit". If another value is passed, the default value is used.
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
   * Whether to respond to the hover state. The hover state refers to the interaction mode when devices such as foldable
   * devices are in the hover folded state, rather than mouse hover.
   *
   * - true: respond to the hover state.
   * - **false**: do not respond to the hover state.
   *
   * Default value: **false**
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
   * Default display area of the dialog box in the hover state. This parameter takes effect only when
   * **enableHoverMode** is **true**.
   *
   * Default value: **HoverModeAreaType.BOTTOM_SCREEN**
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
   * Whether to enable touch feedback.
   *
   * - **true**: enable touch feedback (select this when you need to provide operation feedback to users).
   * - **false**: disable touch feedback (select this when touch feedback is not needed or the device does not support
   * it).
   *
   * Default value: **true**
   *
   * **NOTE**
   *
   * 1. After this parameter is set to **true**, whether it takes effect depends on whether the system hardware
   * supports it.
   * 2. To enable touch feedback, configure the **requestPermissions** field in the "module" of the
   * **src/main/module.json5** file of the project to enable the vibration permission. The configuration is as follows:
   *
   * "requestPermissions": [{"name": "ohos.permission.VIBRATE"}]
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
   * Whether cyclic scrolling is supported.
   *
   * - **true**: cyclic scrolling is supported. The year is linked and incremented or decremented as the month scrolls
   * cyclically, and the month is linked and incremented or decremented as the day scrolls cyclically.
   * - **false**: cyclic scrolling is not supported. When the year, month, or day reaches the top or bottom of its
   * column, it can no longer be scrolled, and the year, month, and day can no longer be linked and incremented or
   * decremented.
   *
   * Default value: **true**
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
   * System material of the dialog box.
   *
   * **NOTE**
   *
   * - The default value is an **ImmersiveMaterial** object whose style of **ImmersiveOptions** is
   * **ImmersiveStyle.ULTRA_THICK**. When set to **undefined**, it is consistent with the default value. Different
   * materials have different effects. For details about **ImmersiveMaterial**, see the
   * [SystemUiMaterial]{@link SystemUiMaterial} type definition.
   * - This interface affects the background color
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, background blur
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle,
   * options?: BackgroundBlurStyleOptions)},
   * background blur effect [backgroundBlurStyleOptions]{@link BackgroundBlurStyleOptions}, background effect
   * [backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}, border color
   * [borderColor]{@link CommonMethod#borderColor}, border width [borderWidth]{@link CommonMethod#borderWidth}, and
   * shadow [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}. When the system material is set,
   * the preceding interfaces do not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;
  /**
   * Distortion animation mode of the dialog box under the system material. This parameter is passed when a custom
   * distortion animation effect for the dialog box is needed.
   *
   * **Default value:** **DistortionMode.DISTORTION_AUTO**
   *
   * **System API:** This is a system API.
   *
   * **Note:** When the value is **DISTORTION_AUTO**, the
   * {@link ImmersiveMaterial} material type must be set
   * for it to take effect, and the distortion effect is automatically applied based on the device computing power tier
   * (effective on high- and mid-tier devices, not effective on low-tier devices). Distortion animation increases
   * rendering overhead, so use it with caution on low-end devices. For the meaning of each enum value, see
   * {@link DistortionMode}.
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;
  /**
   * Edge light animation mode of the dialog box under the system material. This parameter is passed when a custom edge
   * light animation effect for the dialog box is needed.
   *
   * **Default value:** **EdgeLightMode.EDGELIGHT_AUTO**
   *
   * **System API:** This is a system API.
   *
   * **Note:** When the value is **EDGELIGHT_AUTO**, the
   * {@link ImmersiveMaterial} material type must be set
   * for it to take effect, and the edge light effect is automatically applied based on the device computing power tier
   * (effective on high-tier devices, not effective on mid- and low-tier devices). Edge light animation increases
   * rendering overhead, so use it with caution on low-end devices. For the meaning of each enum value, see
   * {@link EdgeLightMode}.
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
 * Creates a date picker based on the specified date range and displays it in a dialog box. This component is suitable
 * for scenarios where users need to quickly select a date, such as schedule arrangement, activity arrangement, and
 * birthday setting. Using this component simplifies the development process, provides a unified date selection user
 * experience, and supports multiple customization options to meet different requirements.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class DatePickerDialog {
  /**
   * Shows a date picker dialog box.
   *
   * > **NOTE**
   * >
   * > Since API version 10, you can use the
   * > [showDatePickerDialog]{@link @ohos.arkui.UIContext:UIContext.showDatePickerDialog} API in
   * > [UIContext]{@link @ohos.arkui.UIContext}, which ensures that the date picker dialog box is shown in the intended
   * > UI instance.
   *
   * @param { DatePickerDialogOptions } options - Parameters for configuring the date picker dialog box. If this
   *     parameter is not set, the dialog box is not displayed.
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
 * **DatePicker** is a component for selecting a date through scrolling interaction. It supports switching between the
 * Gregorian and lunar calendars, and allows you to configure the date range, selection mode, and text style. It is used
 * in application scenarios where users need to select a date, providing a unified date selection interaction
 * experience, improving user experience, and reducing development workload.
 *
 * > **NOTE**
 * >
 * > - Avoid changing component attributes during animation processes.
 * >
 * > - The maximum number of rows that can be displayed varies by screen orientation: In portrait mode, the default
 * > number of rows is 5. In landscape mode, the number of rows depends on the system configuration. If no system
 * > configuration is set, the default is 3 rows. To check the specific system configuration value for landscape mode,
 * > use **$r('sys.float.ohos_id_picker_show_count_landscape')**.
 *
 * ###### Child Components
 *
 * This is a basic component and is not recommended to contain child components.
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
 * Defines DatePicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const DatePickerInstance: DatePickerAttribute;