'use static';
/*
* Copyright (C) 2026 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
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

import { Callback } from '@ohos.base';
import { PropRef } from '@ohos.arkui.stateManagement';
import { Component, Builder } from '@ohos.arkui.component';

/**
 * DateMode enum defines the mode of the date picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DateMode {
  /**
   * Date displays three columns: year, month, and day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DATE = 0,

  /**
   * Date displays two columns: year and month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  YEAR_AND_MONTH = 1,

  /**
   * Defines a mode that displays the date as month and day. In this mode, when the month changes from December to
   * January, the year does not increment; when the month changes from January to December, the year does not decrement.
   * The year remains unchanged at its current setting.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MONTH_AND_DAY = 2
}

/**
 * DisplayMode enum defines the display mode of the picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DisplayMode {
  /**
   * Displays only the date.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DATE = 0,

  /**
   * Displays only the time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TIME = 1,

  /**
   * Displays both date and time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DATE_TIME = 2
}

/**
 * DatePickerComponentResult defines the selection result of the date time picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class DatePickerComponentResult {
  /**
   * Year of the selected date.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  year?: int;

  /**
   * Month index of the selected date, starting from 0, where 0 indicates January and 11 indicates December.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  month?: int;

  /**
   * Day of the selected date.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  day?: int;

  /**
   * Hour part of the selected time.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  hour?: int;

  /**
   * Minute part of the selected time.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  minute?: int;

  /**
   * Second part of the selected time.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  second?: int;
}

/**
 * TimeFormat enum defines the format of the time picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum TimeFormat {
  /**
   * Displays hour and minute.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  HOUR_MINUTE = 0,

  /**
   * Displays hour, minute, and second.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  HOUR_MINUTE_SECOND = 1
}

/**
 * CommonOptions defines common options for the date time picker.
 *
 * > **Description:**
 * >
 * > - For Date usage, refer to
 * > [TimePickerOptions](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-timepicker.md#timepickeroptions对象说明)。
 * >
 * > - The text size of DatePickerComponent adapts between 14vp and 16vp. When the component width is too narrow,
 * > text may be truncated.
 * >
 * > - When parameters are omitted or set to undefined, default values are used.
 * >
 * > - In [DateOptions]{@link DateOptions}, setting start, end, and selected only takes effect for the date part
 * > (year, month, day). In [TimeOptions]{@link TimeOptions}, setting start, end, and selected only takes effect for the
 * > time part (hour, minute, second).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class CommonOptions {
  /**
   * Start date or time of the picker.
   *
   * Default value: Date(1970, 0, 1, 0, 0, 0)
   *
   * Value range: [Date(0, 0, 1, 0, 0, 0), Date(10000, 11, 31,23, 59, 59)]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  start?: Date;

  /**
   * End date or time of the picker.
   *
   * Default value: Date(2100, 12, 31, 23, 59, 59)
   *
   * Value range: [Date(0, 0, 1, 0, 0, 0), Date(10000, 11, 31,23, 59, 59)]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  end?: Date;

  /**
   * Selected date.
   * Default value is the current system date or time.
   *
   * @default current system date or time
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  loop?: boolean;

  /**
   * Callback triggered after date or time is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onChange?: Callback<DatePickerComponentResult>;

  /**
   * Callback triggered when a picker item is selected and scrolling stops.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 26.0.0 static
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
 * @since 26.0.0 static
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
   * @since 26.0.0 static
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
   * This only takes effect in Simplified Chinese and Traditional Chinese language environments. In other language
   * environments, setting this property has no effect.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
 * @since 26.0.0 static
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
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  useMilitaryTime?: boolean;
}

/**
 * DatePickerComponentOptions defines options for the date time picker component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  displayMode?: DisplayMode;

  /**
   * Date options.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  dateOptions?: DateOptions;

  /**
   * Time options.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  timeOptions?: TimeOptions;
}

/**
 * DatePickerComponent component is used to select date (year, month, day) and time (hour, minute, second).
 *
 * > **Description:**
 * >
 * > - This component interface can only be used in Stage model.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Component
export declare struct DatePickerComponent {
  /**
   * Defines options for the date time picker component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @PropRef
  options: DatePickerComponentOptions;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  build(): void;
}