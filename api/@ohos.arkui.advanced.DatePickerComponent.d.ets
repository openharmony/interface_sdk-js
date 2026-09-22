/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * Enumerates the modes of the date picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum DateMode {
  /**
   * Three columns: year, month, and day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DATE = 0,

  /**
   * Two columns: year and month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  YEAR_AND_MONTH = 1,

  /**
   * Two columns: month and day. In this mode, the year is specified by **selected** and remains unchanged; if
   * **selected** is not specified, the current system year is used. When the month changes from December to January,
   * the year does not increment. When the month changes from January to December, the year does not decrement. When
   * scrolling through months causes the day to exceed the valid range, the day is automatically adjusted to the last
   * day of that month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  MONTH_AND_DAY = 2
}

/**
 * Enumerates the display modes of the picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum DisplayMode {
  /**
   * Date only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DATE = 0,

  /**
   * Time only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TIME = 1,

  /**
   * Both date and time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DATE_TIME = 2
}

/**
 * Defines the selection result of the date and time picker, including the year, month, day, hour, minute, and second
 * selected by the user. It is used to pass the specific date and time values in the **onChange** and **onScrollStop**
 * callbacks.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class DatePickerComponentResult {
  /**
   * Year of the selected date.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  year?: int;

  /**
   * Month index of the selected date, starting from 0. The value **0** indicates January, and **11** indicates
   * December.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  month?: int;

  /**
   * Day of the selected date.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  day?: int;

  /**
   * Hour of the selected time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  hour?: int;

  /**
   * Minute of the selected time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  minute?: int;

  /**
   * Second of the selected time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  second?: int;
}

/**
 * Enumerates the formats of the time picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum TimeFormat {
  /**
   * Hours and minutes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  HOUR_MINUTE = 0,

  /**
   * Hours, minutes, and seconds.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  HOUR_MINUTE_SECOND = 1
}

/**
 * Defines the common options of the date and time picker.
 *
 * > **NOTE**
 * >
 * > - The parameter order of the **Date** constructor is: year, month index (0-11), day, hour, minute, second. Note:
 * > The year parameter must be greater than 99 or less than 0 to avoid 1900s mapping.
 * >
 * > - For the usage of **Date**, see [TimePickerOptions]{@link TimePickerOptions}. Note that when you need to set a
 * > year between 1 and 99, do not use the **new Date(1, 0, 1)** syntax. The JavaScript **new Date(year, month, day)**
 * > constructor has special handling for years 1-99: it automatically adds 1900 to the input year, which results in the
 * > year 1901 instead of the intended year 1. In this case, use the **new Date('0001-01-01')** syntax instead.
 * >
 * > - The text font size of **DatePickerComponent** varies with the total number of displayed columns. When the number
 * > of columns is 6 or more, the font size is 14 vp; otherwise, it is 16 vp. Text truncation may occur when the
 * > component width is too narrow.
 * >
 * > - When a parameter is omitted or set to **undefined**, the default value is used.
 * >
 * > - When **start**, **end**, and **selected** in [DateOptions]{@link DateOptions} are set, only the date part (year,
 * > month, day) takes effect. When they are set in [TimeOptions]{@link TimeOptions}, only the time part (hour, minute,
 * > second) takes effect. The system automatically filters the corresponding parts of the **Date** object and applies
 * > constraints based on the configured **displayMode** and the corresponding **Options** type.
 *
 * > **NOTE**
 * >
 * > - **onChange** is triggered when the user selects a date or time, and is used to respond to the user's selection.
 * >
 * > - **onScrollStop** is triggered after scrolling completely stops, and returns the current selected item regardless
 * > of whether the value has changed.
 * >
 * > - Both can be used together or separately as needed: **onChange** is used for immediate response to user selection,
 * > and **onScrollStop** is used to obtain the stable result after scrolling stops.
 * > > **NOTE**
 * >
 * > Exception handling for the start date, end date, and selected date:
 * >
 * > - If the start date is later than the end date, and the selected date is not set, the start date, end date, and
 * > selected date all use the default values.
 * >
 * > - If the start date is later than the end date, and the selected date is earlier than the default start date, the
 * > start date and end date use the default values, and the selected date uses the default start date.
 * >
 * > - If the start date is later than the end date, and the selected date is later than the default end date, the start
 * > date and end date use the default values, and the selected date uses the default end date.
 * >
 * > - If the start date is later than the end date, and the selected date is within the range of the default start date
 * > and default end date, the start date and end date use the default values, and the selected date uses the set value.
 * >
 * > - If the selected date is earlier than the start date, the selected date is set to the start date.
 * >
 * > - If the selected date is later than the end date, the selected date is set to the end date.
 * >
 * > - If the start date is later than the current system date, and the selected date is not set, the selected date is
 * > set to the start date.
 * >
 * > - If the end date is earlier than the current system date, and the selected date is not set, the selected date is
 * > set to the end date.
 * >
 * > - If the **Date** object constructor parameters are invalid or non-compliant, for example, the year, month, or day
 * > parameters are out of the valid range, or an invalid string is passed, resulting in an invalid date, the default
 * > value is used.
 * >
 * > - If the start date or end date is earlier than the minimum value of the valid range, the start date or end date
 * > uses the default start date.
 * >
 * > - If the start date or end date is later than the maximum value of the valid range, the start date or end date uses
 * > the default end date.
 * >
 * > - If both the start date and end date are earlier than the minimum value of the valid range, the start date and end
 * > date use the earliest date in the system valid range.
 * >
 * > - If both the start date and end date are later than the maximum value of the valid range, the start date and end
 * > date use the latest date in the system valid range.
 * > > **NOTE**
 * >
 * > Exception handling for the start time and end time:
 * >
 * > - If the start time is later than the end time, the start time and end time both use the default values.
 * >
 * > - If the selected time is earlier than the start time, the selected time is set to the start time.
 * >
 * > - If the selected time is later than the end time, the selected time is set to the end time.
 * >
 * > - If the start time is later than the current system time, and the selected time is not set, the selected time is
 * > set to the start time.
 * >
 * > - If the end time is earlier than the current system time, and the selected time is not set, the selected time is
 * > set to the end time.
 * >
 * > - If the **Date** object constructor parameters are invalid or non-compliant, for example, the hour, minute, or
 * > second parameters are out of the valid range, or an invalid string is passed, resulting in an invalid date, the
 * > default value is used.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class CommonOptions {
  /**
   * Start date or time of the picker.
   *
   * Default value: **Date('1970-01-01T00:00:00')**
   *
   * Value range: [Date('0001-01-01T00:00:00'), Date('9999-12-31T23:59:59')]
   *
   * **NOTE**
   *
   * When **start** is set to a valid value, **loop** does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  start?: Date;

  /**
   * End date or time of the picker.
   *
   * Default value: **Date('2100-12-31T23:59:59')**
   *
   * Value range: [Date('0001-01-01T00:00:00'), Date('9999-12-31T23:59:59')]
   *
   * **NOTE**
   *
   * When **end** is set to a valid value, **loop** does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  end?: Date;

  /**
   * Selected date or time, displayed as the initial selected value after being set.
   *
   * Default value: current system date or time.
   *
   * **NOTE**
   *
   * In the **DateMode.MONTH_AND_DAY** mode, only the **month** and **day** fields can be selected. The **year** field
   * is specified by **selected**; if no value is specified, the current system year is used and remains unchanged
   * during scrolling.
   *
   * @default current system date or time
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  selected?: Date;

  /**
   * Whether to enable loop mode.
   *
   * - **true**: Loop mode is enabled, allowing continuous cyclic selection when scrolling to the boundary.
   * - **false**: Loop mode is disabled, and scrolling stops at the boundary.
   *
   * Default value: **true**
   *
   * **Use scenarios:**
   *
   * Loop mode is applicable to scenarios requiring continuous scrolling selection, such as quickly browsing years and
   * months. Non-loop mode is applicable to scenarios requiring clear boundary ranges.
   *
   * **NOTE**
   *
   * When [start]{@link CommonOptions} or [end]{@link CommonOptions} is set to a valid value, this parameter does not
   * take effect.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  loop?: boolean;

  /**
   * Callback triggered when a date or time is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onChange?: Callback<DatePickerComponentResult>;

  /**
   * Callback triggered when the picker item is selected and scrolling stops.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onScrollStop?: Callback<DatePickerComponentResult>;

  /**
   * Whether to enable haptic feedback.
   *
   * Default value: **true**
   *
   * - **true**: Haptic feedback is enabled, applicable to scenarios where enhanced user interaction experience is
   * needed, such as gaming and musical instrument applications.
   * - **false**: Haptic feedback is disabled, applicable to scenarios where haptic feedback is not required or device
   * resources need to be conserved.
   *
   * **NOTE**
   *
   * 1. When this parameter is set to **true**, whether it takes effect depends on whether the system hardware
   * supports it.
   * 2. To enable haptic feedback, configure the **requestPermissions** field in the
   * [module.json5](docroot://quick-start/module-configuration-file.md) file of the project to request the vibration
   * permission. The configuration is as follows:
   *
   * **"requestPermissions": [{"name": "ohos.permission.VIBRATE"}]**
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableHapticFeedback?: boolean;
}

/**
 * Defines the options of the date picker.
 *
 * This API inherits from [CommonOptions]{@link CommonOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class DateOptions extends CommonOptions {
  /**
   * Mode of the date picker.
   *
   * Default value: DateMode.DATE
   *
   * @default DateMode.DATE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  mode?: DateMode;

  /**
   * Whether to display the lunar calendar.
   *
   * - **true**: The lunar calendar is displayed. This is applicable to scenarios where the traditional lunar calendar
   * is required, such as traditional festivals, lunar birthdays, and lunar anniversaries.
   * - **false**: The lunar calendar is not displayed. This is applicable to scenarios where the Gregorian calendar is
   * used.
   *
   * Default value: **false**
   *
   * **NOTE**
   *
   * This attribute takes effect only in the simplified Chinese and traditional Chinese language environments. It has no
   * effect in other language environments.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  lunar?: boolean;
}

/**
 * Defines the options of the time picker.
 *
 * This API inherits from [CommonOptions]{@link CommonOptions}.
 *
 * > **NOTE**
 * >
 * > If the **start** or **end** parameter is set to a valid value, the **loop** parameter will not take effect. For
 * > details, see the parameter description of [CommonOptions]{@link CommonOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class TimeOptions extends CommonOptions {
  /**
   * Format of the time picker.
   *
   * Default value: **TimeFormat.HOUR_MINUTE**
   *
   * @default TimeFormat.HOUR_MINUTE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  format?: TimeFormat;

  /**
   * Whether to display time in 24-hour format.
   *
   * - **true**: The time is displayed in 24-hour format, applicable to international applications and professional
   * scenarios that require precise time expression (such as healthcare, transportation, and military).
   * - **false**: The time is displayed in 12-hour format, applicable to daily application scenarios targeting general
   * users, which better aligns with users' everyday reading habits.
   *
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  useMilitaryTime?: boolean;
}

/**
 * Defines the options of the date and time picker component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class DatePickerComponentOptions {
  /**
   * Display mode of the picker.
   *
   * Default value: **DisplayMode.DATE**
   *
   * **NOTE**
   *
   * - **DATE**: Displays only the date using **dateOptions**. This value is applicable to scenarios where only the date
   * needs to be selected, such as birthday selection and schedule date setting.
   * - **TIME**: Displays only the time using **timeOptions**. This value is applicable to scenarios where only the time
   * needs to be selected, such as alarm setting and reminder time setting.
   * - **DATE_TIME**: Displays both the date and time, with **dateOptions** and **timeOptions** taking effect
   * simultaneously. This value is applicable to scenarios where both the date and time need to be selected, such as
   * event scheduling and meeting time setting.
   *
   * @default DisplayMode.DATE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  displayMode?: DisplayMode;

  /**
   * Date options.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  dateOptions?: DateOptions;

  /**
   * Time options.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  timeOptions?: TimeOptions;
}

/**
 * The **DatePickerComponent** is used to select dates (year, month, and day) and times (hour, minute, and second).
 *
 * ###### Child Components
 *
 * None
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@Component
export declare struct DatePickerComponent {
  /**
   * Options of the date and time picker component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Prop
  options: DatePickerComponentOptions;
}