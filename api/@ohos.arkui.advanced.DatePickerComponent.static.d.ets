'use static'
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
import { PropRef } from './arkui/stateManagement/decorator';

/**
 * Defines mode of date picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DateMode {
  /**
   * The date displays three columns: year, month, and day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DATE = 0,

  /**
   * The date displays two columns: year and month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  YEAR_AND_MONTH = 1,

  /**
   * Defines a mode that displays dates in months and days of the month.
   * In this mode, when the month changes from December to January,
   * year does not increment by one; if month changes from January to December,
   * the year does not decrement. The year remains fixed at its currently set value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MONTH_AND_DAY = 2
}

/**
 * Enum for DisplayMode
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DisplayMode {
  /**
   * Display date only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DATE = 0,

  /**
   * Display time only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TIME = 1,

  /**
   * Display both date and time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DATE_TIME = 2
}

/**
 * Defines result of DatePickerComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DatePickerComponentResult {
  /**
   * Year of selected date.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  year?: int;

  /**
   * Month index of selected date.
   * The index is zero-based. 0 indicates January, and 11 indicates December.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  month?: int;

  /**
   * Day of selected date.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  day?: int;

  /**
   * Hour portion of selected time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  hour?: int;

  /**
   * Minute portion of selected time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  minute?: int;

  /**
   * Second portion of selected time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  second?: int;
}

/**
 * Enum for TimeFormat
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum TimeFormat {
  /**
   * Hour and minute.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  HOUR_MINUTE = 0,

  /**
   * Hour and minute and second.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  HOUR_MINUTE_SECOND = 1
}

/**
 * Defines common options for DatePickerComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface CommonOptions {
  /**
   * Start date or time of picker.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  start?: Date;

  /**
   * End date or time of picker.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  end?: Date;

  /**
   * Selected date.
   *
   * @default current system date or time
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selected?: Date;

  /**
   * Sets whether to enable the wheel mode.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  loop?: boolean;

  /**
   * This event is triggered when a DatePickerComponent value is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onChange?: Callback<DatePickerComponentResult>;

  /**
   * This event is triggered when a Picker item is selected and scrolling has stopped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onScrollStop?: Callback<DatePickerComponentResult>;

  /**
   * Enable or disable haptic feedback.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableHapticFeedback?: boolean;
}

/**
 * Defines date options for DatePickerComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DateOptions extends CommonOptions {
  /**
   * Defines mode of date picker.
   *
   * @default DateMode.DATE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  mode?: DateMode;

  /**
   * Specifies whether to display lunar calendar.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  lunar?: boolean;
}

/**
 * Defines time options for DatePickerComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface TimeOptions extends CommonOptions {
  /**
   * Defines format of time picker.
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
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  useMilitaryTime?: boolean;
}

/**
 * Defines options for DatePickerComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DatePickerComponentOptions {
  /**
   * Display mode of picker.
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
 * Defines DatePickerComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Component
export declare struct DatePickerComponent {
  /**
   * The options of a date picker view component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @PropRef
  options: DatePickerComponentOptions;
}
