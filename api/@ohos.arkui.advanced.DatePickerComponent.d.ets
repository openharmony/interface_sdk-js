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
 * DateMode enum defines the mode of the date picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum DateMode {
  /**
   * Date displays three columns: year, month, and day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DATE = 0,

  /**
   * Date displays two columns: year and month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  YEAR_AND_MONTH = 1,

  /**
   * Defines a mode that displays the date as month and day. In this mode, when the month changes from December to
   * January, the year does not increment; when the month changes from January to December, the year does not decrement.
   * The year remains unchanged at its current setting.
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
 * DisplayMode enum defines the display mode of the picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum DisplayMode {
  /**
   * Displays only the date.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DATE = 0,

  /**
   * Displays only the time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TIME = 1,

  /**
   * Displays both date and time.
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
 * DatePickerComponentResult defines the selection result of the date time picker.
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
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  year?: int;

  /**
   * Month index of the selected date, starting from 0, where 0 indicates January and 11 indicates December.
   * The value should be an integer.
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
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  day?: int;

  /**
   * Hour part of the selected time.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  hour?: int;

  /**
   * Minute part of the selected time.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  minute?: int;

  /**
   * Second part of the selected time.
   * The value should be an integer.
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
 * TimeFormat enum defines the format of the time picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum TimeFormat {
  /**
   * Displays hour and minute.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  HOUR_MINUTE = 0,

  /**
   * Displays hour, minute, and second.
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
 * CommonOptions defines common options for the date time picker.
 *
 * > **Description:**
 * >
 * > - For Date usage, refer to
 * > [TimePickerOptions](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-timepicker.md#timepickeroptions)。
 * >
 * > - The text size of DatePickerComponent changes based on the total number of columns displayed. When the number of
 * > columns is 6 or more, the text size is 14vp; in other cases, it is 16vp. When the component width is too narrow,
 * > text may be truncated.
 * >
 * > - When parameters are omitted or set to undefined, default values are used.
 * >
 * > - In [DateOptions]{@link DateOptions}, setting start, end, and selected only takes effect for the date part (year,
 * > month, day). In [TimeOptions]{@link TimeOptions}, setting start, end, and selected only takes effect for the time
 * > part (hour, minute, second).
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
   * Default value: Date(1970, 0, 1, 0, 0, 0)
   *
   * Value range: [Date(0, 0, 1, 0, 0, 0), Date(10000, 11, 31,23, 59, 59)]
   *
   * **Description:**
   *
   * When start is set to a valid value, loop does not take effect.
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
   * Default value: Date(2100, 12, 31, 23, 59, 59)
   *
   * Value range: [Date(0, 0, 1, 0, 0, 0), Date(10000, 11, 31,23, 59, 59)]
   *
   * **Description:**
   *
   * When end is set to a valid value, loop does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  end?: Date;

  /**
   * Selected date.
   * Default value is the current system date or time.
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
   * Sets whether to enable loop mode.
   *
   * - true: Enable loop mode.
   * - false: Disable loop mode.
   *
   * Default value: true
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
   * Callback triggered after date or time is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onChange?: Callback<DatePickerComponentResult>;

  /**
   * Callback triggered when a picker item is selected and scrolling stops.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onScrollStop?: Callback<DatePickerComponentResult>;

  /**
   * Enables or disables haptic feedback.
   *
   * Default value: true
   *
   * - true: Enable haptic feedback.
   * - false: Disable haptic feedback.
   *
   * **Description**:
   *
   * 1. When set to true, its effectiveness depends on whether the system's hardware supports it.
   * 2. To enable haptic feedback, you need to configure the requestPermissions field in the project's
   * [module.json5](docroot://quick-start/module-configuration-file.md) to enable vibration permission, as follows:
   *
   * "requestPermissions": [{"name": "ohos.permission.VIBRATE"}]
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
 * DateOptions defines options for the date picker.
 *
 * Inherits from [CommonOptions]{@link CommonOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class DateOptions extends CommonOptions {
  /**
   * Defines the mode of the date picker.
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
   * Specifies whether to display as lunar calendar.
   *
   * - true: Display as lunar calendar.
   * - false: Do not display as lunar calendar.
   *
   * Default value: false
   *
   * **Description**:
   *
   * This only takes effect in Simplified Chinese and Traditional Chinese language environments.
   * In other language environments, setting this property has no effect.
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
 * TimeOptions defines options for the time picker.
 *
 * Inherits from [CommonOptions]{@link CommonOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class TimeOptions extends CommonOptions {
  /**
   * Defines the format of the time picker.
   *
   * Default value: TimeFormat.HOUR_MINUTE
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
   * Specifies whether to display time in 24-hour format.
   *
   * - true: Time is displayed in 24-hour format.
   * - false: Time is displayed in 12-hour format.
   *
   * Default value: false
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
 * DatePickerComponentOptions defines options for the date time picker component.
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
   * Default value: DisplayMode.DATE
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
 * DatePickerComponent component is used to select date (year, month, day) and time (hour, minute, second).
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
   * Defines options for the date time picker component.
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