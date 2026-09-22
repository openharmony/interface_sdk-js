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
 * Returns the selected time result, where hour ranges from 0 to 23, regardless of the display format.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TimePickerResult {
  /**
   * Hour of the selected time.
   *
   * Value range: [0-23], independent of the display format.
   *
   * @type { ?number } [since 8 - 10]
   * @type { number } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hour: number;

  /**
   * Minute of the selected time.
   *
   * Value range: [0-59]
   *
   * @type { ?number } [since 8 - 10]
   * @type { number } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  minute: number;

  /**
   * Second of the selected time.
   *
   * Value range: [0-59]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  second: number;
}

/**
 * Enumerates time display formats of the time picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum TimePickerFormat {
  /**
   * Time format displaying hours and minutes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  HOUR_MINUTE,

  /**
   * Time format displaying hours, minutes, and seconds.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  HOUR_MINUTE_SECOND
}

/**
 * Describes the parameters of the time picker.
 *
 * Property modifications made to **TimePickerOptions** during the **TimePicker** scrolling process may not take effect.
 *
 *
 * The **Date** object is used to handle dates and time. It can be used in the following ways:
 *
 * **Method 1**: new Date()
 *
 * Obtains the current system date and time.
 *
 * **Method 2**: new Date(value: number | string)
 *
 * - **value** (mandatory): number&nbsp;\|&nbsp;string. Sets the date format.
 *
 * number: milliseconds, the number of milliseconds elapsed since 00:00:00 on January 1, 1970. Value range: [0, +∞).
 *
 * string: a string in time format, for example, '2025-02-20 08:00:00' or '2025-02-20T08:00:00'.
 *
 * **Method 3**: new Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?:
 * number, ms?: number)
 *
 * - **year** (mandatory): number. Year, for example, **2025**.
 * - **monthIndex** (mandatory): number. Month index (value range: 0 to 11), where 0 indicates January and 11 indicates
 * December. For example, 0 indicates January and 2 indicates March. A value out of range causes a date calculation
 * error.
 * - **date** (optional): number. Date, for example, **10** (if **hours** is set, **date** cannot be omitted).
 * - **hours** (optional): number. Hour (value range: [0, 23]). A value out of range causes a date calculation error.
 * For example, 15 (if minutes is set, hours cannot be omitted). Unit: hour.
 * - **minutes** (optional): number. Minute (value range: [0, 59]). A value out of range causes a date calculation
 * error. For example, 20 (if seconds is set, minutes cannot be omitted). Unit: minute.
 * - **seconds** (optional): number. Second (value range: [0, 59]). A value out of range causes a date calculation
 * error. For example, 20 (if ms is set, seconds cannot be omitted). Unit: second.
 * - **ms** (optional): number. Millisecond (value range: [0, 999]). A value out of range causes a date calculation
 * error. For example, 10. Unit: ms (millisecond).
 *
 * > **NOTE**
 * >
 * > Handling in the case of date configuration exceptions:
 * >
 * > - If the start time is later than the end time, both start time and end time are set to their default values.
 * >
 * > - If the selected time is earlier than the start time, the selected time is set to the start time.
 * >
 * > - If the selected time is later than the end time, the selected time is set to the end time.
 * >
 * > - If the start time is later than the current system time and the selected time is not set, the selected time is
 * > set to the start time.
 * >
 * > - If the end time is earlier than the current system time and the selected time is not set, the selected time is
 * > set to the end time.
 * >
 * > - If the time format is invalid, such as **'01:61:61'**, the default value is used.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TimePickerOptions {
  /**
   * Sets the time of the selected item.
   *
   * Default value: current system time
   *
   * Since API version 10, this parameter supports [$$](docroot://ui/state-management/arkts-two-way-sync.md) two-way
   * binding variables.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected?: Date;

  /**
   * Specifies the format of the TimePicker to be displayed.
   *
   * Default value: TimePickerFormat.HOUR_MINUTE
   *
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @default HOUR_MINUTE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  format?: TimePickerFormat;

  /**
   * Specifies the start time of the TimePicker component.
   *
   * Default value: the start time is 00:00:00 (hour = 0, minute = 0)
   *
   * **Note:**
   *
   * 1. Only the set hour and minute take effect.
   * 2. When start or end is set to a non-default value, loop does not take effect.
   *
   * **Atomic service API:** Since API version 18, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  start?: Date;

  /**
   * Specifies the end time of the TimePicker component.
   *
   * Default value: the end time is 23:59:59 (hour = 23, minute = 59)
   *
   * **Note:**
   *
   * 1. Only the set hour and minute take effect.
   * 2. When start or end is set to a non-default value, loop does not take effect.
   *
   * **Atomic service API:** Since API version 18, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  end?: Date;
}

/**
 * **TimePicker** is a component for selecting a time by sliding. It supports 12/24-hour formats, multiple time formats
 * (hour/minute/second), loop scrolling, style customization, and time range restrictions. It is suitable for scenarios
 * where users need to select a time, such as schedule arrangement, time reservation, and task management. It improves
 * user experience, reduces input errors, and can be quickly integrated into applications.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 8. New APIs added in later versions are marked with a superscript
 * > to indicate their
 * >
 * > - It is not recommended to modify attribute data of this component during animation.
 * >
 * > - The maximum number of displayed rows differs between landscape and portrait modes. In portrait mode, the default
 * > is 5 rows. In landscape mode, it depends on the system configuration, and the default is 3 rows when not
 * > configured. You can use the following parameter to view the specific configuration value: $r('
 * > sys.float.ohos_id_picker_show_count_landscape').
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface TimePickerInterface {
  /**
   * Creates a sliding picker, which uses a 24-hour time range by default. It is suitable for scenarios where a time
   * needs to be selected, such as schedule arrangement, alarm setting, and time recording.
   *
   * @param { TimePickerOptions } options - Parameters for configuring the TimePicker component. Pass this parameter
   *     when you need to customize the initial selected time, time format, time range, and other configurations. If
   *     this parameter is not passed, the default configuration is used (the initial selected time is the current
   *     system time, the time format is hour and minute by default, and the time range is 00:00-23:59 by default, with
   *     the default end time being 23:59:59).
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: TimePickerOptions): TimePickerAttribute;
}
/**
 * Defines the options for a **DateTimeOptions** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DateTimeOptions = import('../api/@ohos.intl').default.DateTimeOptions;

/**
 * Triggered when a time is selected.
 *
 * @param { TimePickerResult } result - Selected time result. The value of hour ranges from 0 to 23, regardless of the
 *     display format.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTimePickerChangeCallback = (result: TimePickerResult) => void;

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class TimePickerAttribute extends CommonMethod<TimePickerAttribute> {
  /**
   * Sets whether the time is displayed in 24-hour format. If this API is not used, the system time format is used by
   * default. The 24-hour format is suitable for precise time recording and scheduling scenarios, while the 12-hour
   * format is suitable for more intuitive time display requirements such as daily alarm setting.
   *
   * @param { boolean } value - Whether the time is displayed in 24-hour format.
   *     <br>- true: The time is displayed in 24-hour format.
   *     <br>- false: The time is displayed in 12-hour format.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  useMilitaryTime(value: boolean): TimePickerAttribute;

  /**
   * Sets whether the time is displayed in 24-hour format. If this attribute is not specified, the system time format is
   * used by default. Compared with [useMilitaryTime]{@link TimePickerAttribute#useMilitaryTime(value: boolean)}, this
   * API supports the **undefined** type for the **isMilitaryTime** parameter.
   *
   * @param { Optional<boolean> } isMilitaryTime - Whether the displayed time is in 24-hour format.
   *     <br>- true: The displayed time is in 24-hour format.
   *     <br>- false: The displayed time is in 12-hour format.
   *     <br>When the value of isMilitaryTime is undefined, the system setting is followed.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  useMilitaryTime(isMilitaryTime: Optional<boolean>): TimePickerAttribute;

  /**
   * Sets whether to enable loop mode. Loop mode is suitable for scenarios where the time needs to be selected through
   * continuous scrolling, while non-loop mode is suitable for scenarios with a fixed time range restriction.
   *
   * @param { boolean } value - Whether to enable loop mode.
   *     <br>- true: loop mode is enabled.
   *     <br>- false: loop mode is disabled.
   *     <br>Default value: true
   *     <br>**Note:** When start or end is set to a non-default value, loop does not take effect.
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  loop(value: boolean): TimePickerAttribute;

  /**
   * Sets whether to enable loop scrolling. Compared with
   * [loop<sup>11+</sup>]{@link TimePickerAttribute#loop(value: boolean)}, this API supports the **undefined** type for
   * the **isLoop** parameter.
   *
   * > **NOTE**
   * >
   * > When **start** or **end** is set to a non-default value, **loop** does not take effect.
   *
   * @param { Optional<boolean> } isLoop - Whether to enable loop mode.
   *     <br>- true: enable loop mode.
   *     <br>- false: disable loop mode.
   *     <br>Default value: true
   *     <br>When the value of isLoop is undefined, the default value is used.
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  loop(isLoop: Optional<boolean>): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of edge items (the second item above or below the selected item).
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight of the edge items (the second item above
   *     or below the selected item).
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '14fp',
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle(value: PickerTextStyle): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of edge items (the second item above or below the selected item).
   * Compared with
   * [disappearTextStyle<sup>10+</sup>]{@link TimePickerAttribute#disappearTextStyle(value: PickerTextStyle)}, this API
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
   *     <br>When the value of style is undefined, the default value is used.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disappearTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of candidate items (the item immediately adjacent to the selected
   * item, above or below).
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight of the options.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp',
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle(value: PickerTextStyle): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of candidate items (the item immediately adjacent to the selected
   * item, above or below). Compared with
   * [textStyle<sup>10+</sup>]{@link TimePickerAttribute#textStyle(value: PickerTextStyle)}, this API supports the
   * **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight of the options.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp',
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>When the value of style is undefined, the default value is used.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of the selected item.
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
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle(value: PickerTextStyle): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of the selected item. Compared with
   * [selectedTextStyle<sup>10+</sup>]{@link TimePickerAttribute#selectedTextStyle(value: PickerTextStyle)}, the
   * **style** parameter additionally supports the **undefined** type.
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
   *     <br>When the value of style is undefined, the default value is used.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;

  /**
   * Sets whether to display a leading zero for the hour, minute, and second. '2-digit' is suitable for scenarios where
   * a unified format is required (such as tables and reports), while 'numeric' is suitable for more concise display
   * requirements.
   *
   * @param { DateTimeOptions } value - Sets whether to display leading zeros for the hour, minute, and second.
   *     <br>Default value:
   *     <br>hour: The default value is "2-digit" in the 24-hour format, which sets whether the hour is displayed as a 2
   *     -digit number. If the actual value is less than 10, a leading zero is added and displayed, that is, "0X". The
   *     default value is "numeric" in the 12-hour format, that is, no leading zero.
   *     <br>minute: The default value is "2-digit", which sets whether the minute is displayed as a 2-digit number. If
   *     the actual value is less than 10, a leading zero is added and displayed, that is, "0X".
   *     <br>second: The default value is "2-digit", which sets whether the second is displayed as a 2-digit number. If
   *     the actual value is less than 10, a leading zero is added and displayed, that is, "0X".
   *     <br> When the values of hour, minute, and second are set to undefined, the display effect follows the same
   *     rules as their default values.
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dateTimeOptions(value: DateTimeOptions): TimePickerAttribute;

  /**
   * Sets whether to display a leading zero for the hours, minutes, and seconds. Compared with
   * [dateTimeOptions<sup>12+</sup>]{@link TimePickerAttribute#dateTimeOptions(value: DateTimeOptions)}, this API
   * supports the **undefined** type for the **timeFormat** parameter.
   *
   * @param { Optional<DateTimeOptions> } timeFormat - Sets whether the hour, minute, and second are displayed with a
   *     leading zero. Currently, only the hour, minute, and second parameters are supported.
   *     <br>Default value:
   *     <br>hour: The default value is "2-digit" in the 24-hour format. Sets whether the hour is displayed as a 2-digit
   *     number. If the actual value is less than 10, a leading zero is added and displayed, that is, "0X". The default
   *     value is "numeric" in the 12-hour format, that is, no leading zero.
   *     <br>minute: The default value is "2-digit". Sets whether the minute is displayed as a 2-digit number. If the
   *     actual value is less than 10, a leading zero is added and displayed, that is, "0X".
   *     <br>second: The default value is "2-digit". Sets whether the second is displayed as a 2-digit number. If the
   *     actual value is less than 10, a leading zero is added and displayed, that is, "0X".
   *     <br> When the values of hour, minute, and second are set to undefined, the display effect follows the same
   *     rules as their default values.
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  dateTimeOptions(timeFormat: Optional<DateTimeOptions>): TimePickerAttribute;

  /**
   * Triggered when the time option returns to the selected item position after the TimePicker is scrolled. It cannot be
   * triggered by the state variable of two-way binding. It applies to scenarios where operations such as saving and
   * updating the UI need to be performed after the user confirms the time selection.
   *
   * The callback is triggered after the scroll animation ends. If you need to obtain index changes quickly, use the
   * [onEnterSelectedArea]{@link TimePickerAttribute#onEnterSelectedArea} API instead. Note that when
   * [enableCascade]{@link TimePickerAttribute#enableCascade} is set to true, because the AM/PM column and the hour
   * column are linked, the behavior of this callback may not meet expectations, and it is not recommended to use it in
   * this scenario.
   *
   * @param { function } callback - Time in 24-hour format.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: (value: TimePickerResult) => void): TimePickerAttribute;

  /**
   * Triggered when the time picker snaps to the selected item. This event cannot be triggered by two-way bound state
   * variables. Compared with
   * [onChange]{@link TimePickerAttribute#onChange(callback: (value: TimePickerResult) => void)}, this API supports the
   * **undefined** type for the **callback** parameter.
   *
   * The callback is triggered after the scroll animation ends. If you need to obtain index changes quickly, use the
   * [onEnterSelectedArea]{@link TimePickerAttribute#onEnterSelectedArea} API instead. Note that when
   * [enableCascade]{@link TimePickerAttribute#enableCascade} is set to true, because the AM/PM column and the hour
   * column are linked, the behavior of this callback may not meet expectations, and it is not recommended to use it in
   * this scenario.
   *
   * @param { Optional<OnTimePickerChangeCallback> } callback - Callback invoked when the time is selected.
   *     <br>When the value of callback is undefined, the callback is not used.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onChange(callback: Optional<OnTimePickerChangeCallback>): TimePickerAttribute;

  /**
   * Triggered when an option enters the divider area during the scrolling of the TimePicker. It applies to scenarios
   * that require a quick response, such as updating the UI in real time and validating the time range in real time
   * during scrolling. Compared with onChange, this callback is triggered earlier and is suitable for scenarios that
   * require immediate feedback.
   *
   * The difference from the [onChange]{@link TimePickerAttribute#onChange(callback: (value: TimePickerResult) => void)}
   * event is that this event is triggered earlier than the
   * [onChange]{@link TimePickerAttribute#onChange(callback: (value: TimePickerResult) => void)} event. When the scroll
   * distance of the scrolled column exceeds half the height of the selected item, the option has already entered the
   * divider area, and this event is triggered. When [enableCascade]{@link TimePickerAttribute#enableCascade} is set to
   * true, because the AM/PM column and the hour column are linked (that is, the AM/PM indicator is automatically
   * adjusted based on the hour value), it is not recommended to use this callback. This callback marks the point at
   * which the option enters the divider area during scrolling, while the options changed by the linkage do not involve
   * scrolling. Therefore, in the return value of the callback, only the value of the currently scrolled column changes
   * normally, and the values of the other unscrolled columns remain unchanged.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Callback<TimePickerResult> } callback - Callback triggered during the scrolling of the time picker when an
   *     item enters the divider area.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnterSelectedArea(callback: Callback<TimePickerResult>): TimePickerAttribute;

  /**
   * Sets whether to enable haptic feedback.
   *
   * To enable haptic feedback, you must declare the following permission under **requestPermissions** in **module** in
   * **src/main/module.json5** of the project.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * @param { boolean } enable - Whether to enable haptic feedback.
   *     <br>- true: Enable haptic feedback.
   *     <br>- false: Disable haptic feedback.
   *     <br>Default value: true
   *     <br>If this parameter is set to true but the system hardware does not support the vibration function, no
   *     vibration feedback is generated.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  enableHapticFeedback(enable: boolean): TimePickerAttribute;

  /**
   * Sets whether to enable haptic feedback. Compared with
   * [enableHapticFeedback<sup>12+</sup>]{@link TimePickerAttribute#enableHapticFeedback(enable: boolean)}, the enable
   * parameter additionally supports the undefined type.
   *
   * To enable haptic feedback, you must declare the following permission under **requestPermissions** in **module** in
   * **src/main/module.json5** of the project.
   *
   * @param { Optional<boolean> } enable - Whether to enable haptic feedback.
   *     <br>- true: haptic feedback is enabled.
   *     <br>- false: haptic feedback is disabled.
   *     <br>Default value: true
   *     <br>When the value of enable is undefined, the default value is used.
   *     <br>If the value is set to true but the system hardware does not support vibration, no vibration feedback is
   *     generated.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): TimePickerAttribute;

  /**
   * Sets the crown sensitivity. High sensitivity applies to scenarios where the time needs to be adjusted quickly, and
   * low sensitivity applies to scenarios where the time needs to be adjusted precisely.
   *
   * @param { Optional<CrownSensitivity> } sensitivity - Crown response sensitivity.
   *     <br>Default value: CrownSensitivity.MEDIUM, indicating a moderate response speed.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): TimePickerAttribute;

  /**
   * Sets whether the AM/PM indicator automatically switches based on the hour value. This takes effect only when
   * [useMilitaryTime]{@link TimePickerAttribute#useMilitaryTime(value: boolean)} is set to false. Automatic switching
   * applies to daily consumer scenarios such as alarms and schedules that emphasize operation efficiency and a smooth
   * experience, while manual switching applies to scenarios such as healthcare and legal affairs that demand strict
   * time precision and tolerate no ambiguity.
   *
   * @param { boolean } enabled - Whether the AM/PM indicator automatically switches based on the hour. This parameter
   *     takes effect only when useMilitaryTime is set to false.
   *     <br>- true: automatically switches. When enabled is set to true, it takes effect only when the loop parameter
   *     is also set to true.
   *     <br>- false: does not automatically switch. The AM/PM indicator must be selected manually and is not
   *     automatically adjusted based on the hour.
   *     <br>Default value: false
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableCascade(enabled: boolean): TimePickerAttribute;
}

/**
 * Defines the configuration options of the time picker dialog box.
 *
 * Inherited from [TimePickerOptions]{@link TimePickerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TimePickerDialogOptions extends TimePickerOptions {
  /**
   * Whether to display the time in 24-hour format or 12-hour format.
   *
   * - **true**: 24-hour format.
   * - **false**: 12-hour format.
   *
   * Default value: **false**.
   *
   * **Note**: The enableCascade parameter takes effect only when this parameter is set to false.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  useMilitaryTime?: boolean;

  /**
   * Text color, font size, and font weight of edge items (the second item above or below the selected item).
   *
   * Default value:
   *
   * {
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
   * }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle?: PickerTextStyle;

  /**
   * Text color, font size, and font weight of candidate items (the first item immediately above or below the selected
   * item).
   *
   * Default value:
   *
   * {
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
   * }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle?: PickerTextStyle;

  /**
   * Style of the accept button.
   *
   * Default value: See [PickerDialogButtonStyle]{@link PickerDialogButtonStyle}.
   *
   * **NOTE**
   *
   * 1. In **acceptButtonStyle** and **cancelButtonStyle**, at most one **primary** field can be set to **true**.
   * If both are set to **true**, the **primary** field will remain at the default value of **false**.
   * 2. The default button height is 40 vp, and the unit of **borderRadius** is vp. The default button height remains
   * fixed even in accessibility and large-font modes. In addition, even if the button style is set to
   * [ROUNDED_RECTANGLE]{@link ButtonType}, the displayed effect is still a capsule button
   * ([Capsule]{@link ButtonType}).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * Style of the cancel button.
   *
   * Default value: See [PickerDialogButtonStyle]{@link PickerDialogButtonStyle}.
   *
   * **NOTE**
   *
   * 1. In **acceptButtonStyle** and **cancelButtonStyle**, at most one **primary** field can be set to **true**.
   * If both are set to **true**, the **primary** field will remain at the default value of **false**.
   * 2. The default button height is 40 vp, and the unit of **borderRadius** is vp. The default button height remains
   * fixed even in accessibility and large-font modes. In addition, even if the button style is set to
   * [ROUNDED_RECTANGLE]{@link ButtonType}, the displayed effect is still a capsule button
   * ([Capsule]{@link ButtonType}).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * Font color, font size, and font weight of the selected item.
   *
   * Default value:
   *
   * {
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
   * }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle?: PickerTextStyle;

  /**
   * Mask area of the dialog box. Events outside the mask area are transparently transmitted, and events within the mask
   * area are not.
   *
   * Default value: **{ x: 0, y: 0, width: '100%', height: '100%' }**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskRect?: Rectangle;

  /**
   * Alignment mode of the dialog box in the vertical direction.
   *
   * Default value: **DialogAlignment.Default**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the dialog box relative to the alignment position.
   *
   * Default value: **{ dx: 0 , dy: 0 }**
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: Offset;

  /**
   * Callback invoked when the OK button in the dialog box is clicked. The callback parameter is the selected time
   * value, which is of the **TimePickerResult** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAccept?: (value: TimePickerResult) => void;

  /**
   * Callback invoked when the cancel button in the dialog box is clicked. This callback has no parameter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCancel?: () => void;

  /**
   * Triggered when the text picker in the dialog box snaps to the selected item. The callback parameter is the selected
   * time value, which is of the **TimePickerResult** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange?: (value: TimePickerResult) => void;

  /**
   * Callback invoked when the sliding distance of the current column exceeds half of the height of the selected item
   * and the item enters the selection zone during scrolling. The difference between this event and the **onChange**
   * event is that this event is triggered in real time during the sliding, which is applicable to scenarios where a
   * real-time listener is required. The **onChange** event is triggered after the item is moved back to the selected
   * position, which is applicable to scenarios where the final selected value needs to be confirmed.
   *
   * **NOTE**
   *
   * When **enableCascade** is set to **true**, using this callback is not recommended due to the interdependent
   * relationship between the AM/PM and hour columns. This callback indicates the moment an option enters the divider
   * area during scrolling, and only the value of the currently scrolled column will change. The values of other non-
   * scrolled columns will remain unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnterSelectedArea?: Callback<TimePickerResult>;

  /**
   * Backplane color of the dialog box.
   *
   * Default value: **Color.Transparent**
   *
   * **NOTE**
   *
   * 1. When **backgroundColor** is set to a non-transparent color, **backgroundBlurStyle** must be set to
   * **BlurStyle.NONE**; otherwise, the color display may not meet the expected effect.
   * 2. In 26.0.0 and later versions, the **backgroundColor** parameter does not take effect after
   * **systemMaterial** is set.
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
   * Background blur style of the dialog box.
   *
   * Default value: **BlurStyle.COMPONENT_ULTRA_THICK**
   *
   * **NOTE**
   *
   * 1. Setting this parameter to **BlurStyle.NONE** disables the background blur. When **backgroundBlurStyle** is
   * set to a value other than **NONE**, do not set **backgroundColor**. If you do, the color display may not
   * produce the expected visual effect.
   * 2. Since API version 26.0.0, **backgroundBlurStyle** does not take effect after **systemMaterial** is set.
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
   * Background blur effect parameter, which is used to customize the display style of the pop-up window background
   * blur. You can configure attributes such as the color mode, adaptive color, and zoom ratio to achieve different
   * background blur effects.
   *
   * **NOTE**
   *
   * If this parameter is not set, the default effect of
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle,
   * options?: BackgroundBlurStyleOptions)}
   * (**BlurStyle.COMPONENT_ULTRA_THICK**) is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Background effect parameter, which is used to customize the display effect of the pop-up window background. You can
   * configure attributes such as the blur radius, saturation, brightness, and color to achieve different background
   * effects.
   *
   * **NOTE**
   *
   * If this parameter is not set, the setting does not take effect. In this case, the background blur effect of the
   * dialog box is determined by
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle,
   * options?: BackgroundBlurStyleOptions)}.
   * If this parameter is set, the **backgroundBlurStyle** effect will be overwritten. From API version 26.0.0, after
   * **systemMaterial** is set, neither **backgroundEffect** nor **backgroundBlurStyle** takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Whether the AM/PM indicator automatically switches based on the hour value. Only takes effect when
   * **useMilitaryTime** is set to **false**.
   *
   * - **true**: The AM/PM indicator automatically switches based on the hour value.
   * - **false**: The AM/PM indicator remains static regardless of hour changes.
   *
   * Default value: **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableCascade?: boolean;

  /**
   * Event callback after the dialog box appears.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onAccept/onCancel/onChange)
   * > onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onDidAppear**. The settings
   * take effect next time the dialog box appears.
   * 3. If the user closes the dialog box immediately after it appears, **onWillDisappear** is invoked before
   * **onDidAppear**.
   * 4. If the dialog box is closed before its entrance animation is finished, this callback is not invoked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidAppear?: () => void;

  /**
   * Event callback after the dialog box disappears.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onAccept/onCancel/onChange)
   * > onWillDisappear > onDidDisappear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDisappear?: () => void;

  /**
   * Event callback when the dialog box is about to appear.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onAccept/onCancel/onChange)
   * > onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onWillAppear**. The settings
   * take effect next time the dialog box appears.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillAppear?: () => void;

  /**
   * Event callback when the dialog box is about to disappear.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onAccept/onCancel/onChange)
   * > onWillDisappear > onDidDisappear.
   * 2. If the user closes the dialog box immediately after it appears, **onWillDisappear** is invoked before
   * **onDidAppear**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDisappear?: () => void;

  /**
   * Shadow of the dialog box.
   *
   * Default value on 2-in-1 devices: **ShadowStyle.OUTER_FLOATING_MD** when the dialog box is focused and
   * **ShadowStyle.OUTER_FLOATING_SM** otherwise. On other devices, the dialog box has no shadow by default.
   *
   * **NOTE**
   *
   * In API version 26.0.0 and later, the **shadow** effect does not take effect after **systemMaterial** is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Whether to display leading zeros for the time. Currently, only the **hour** and **minute** parameters can be set.
   * Setting other parameters does not take effect.
   *
   * Default value:
   *
   * **hour**: For the 24-hour format, the default value is **"2-digit"**, meaning the hour is displayed as a two-digit
   * number. If the actual value is less than 10, a leading zero is added, displayed as "0X". For the 12-hour format,
   * the default value is **"numeric"**, meaning no leading zero.
   *
   * **minute**: The default value is **"2-digit"**, meaning the minute is displayed as a two-digit number. If the
   * actual value is less than 10, a leading zero is added, displayed as "0X".
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dateTimeOptions?: DateTimeOptions;

  /**
   * Whether to enable the hover mode. The hover state refers to the interaction mode when a device such as a foldable
   * device is in the hover and folded state, not the mouse hover state.
   *
   * - **true**: Respond when the device is in semi-folded mode.
   * - **false**: Do not respond when the device is in semi-folded mode.
   *
   * Default value: **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Display area of the dialog box in hover mode. This parameter is valid only when **enableHoverMode** is set to
   * **true**.
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
   * Whether to enable haptic feedback.
   *
   * - **true**: Enable haptic feedback.
   * - **false**: Disable haptic feedback.
   *
   * Default value: **true**.
   *
   * **NOTE**
   *
   * 1. Whether this parameter takes effect after being set to **true** depends on hardware support.
   * 2. To enable haptic feedback, you must declare the following permission under **requestPermissions** in
   * **module** in **src/main/module.json5** of the project.
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
   * System material of the dialog box.
   *
   * **NOTE**
   *
   * - Default value: {@link ImmersiveMaterial}
   * object whose **style** in
   * {@link ImmersiveOptions} is
   * **ImmersiveStyle.ULTRA_THICK** If this parameter is set to **undefined**, the default value is used.
   * - Different materials produce distinct effects. This API impacts the following attributes:
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)},
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle,
   * options?: BackgroundBlurStyleOptions)},
   * [backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)},
   * [borderColor]{@link CommonMethod#borderColor}, [borderWidth]{@link CommonMethod#borderWidth}, and
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}. When the system material is set, the
   * aforementioned attributes do not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;
  /**
   * Distortion animation mode of the dialog box under system materials.
   *
   * **Default value:** **DistortionMode.DISTORTION_AUTO**
   *
   * **System API:** This is a system API.
   *
   * **Note:** When the value is **DISTORTION_AUTO**, the
   * {@link ImmersiveMaterial} material type must be set
   * for the effect to take effect, and the distortion effect is automatically applied based on the device computing
   * power tier (effective on high- and mid-tier computing power devices, ineffective on low-tier computing power
   * devices). Distortion animation increases rendering overhead, so exercise caution when using it on low-end devices.
   * For the meaning of each enum value, see
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
   * Edge light animation mode of the dialog box under system materials.
   *
   * **Default value:** **EdgeLightMode.EDGELIGHT_AUTO**
   *
   * **System API:** This is a system API.
   *
   * **Note:** When the value is **EDGELIGHT_AUTO**, the
   * {@link ImmersiveMaterial} material type must be set
   * for the effect to take effect, and the edge light effect is automatically applied based on the device computing
   * power tier (effective on high-tier computing power devices, ineffective on mid- and low-tier computing power
   * devices). Edge light animation increases rendering overhead, so exercise caution when using it on low-end devices.
   * For the meaning of each enum value, see
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
 * * A time picker dialog box is a dialog box that allows users to select a time from the 24-hour range through
 * scrolling. This component is applicable to scenarios where users need to select a time, such as setting an alarm
 * clock, scheduling, or booking a time. This component provides intuitive time selection interaction, supports
 * switching between the 12-hour format and 24-hour format, and allows you to customize the style and layout,
 * helping your app quickly implement the time selection function and improving user experience.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TimePickerDialog {
  /**
   * Shows a time picker dialog box.
   *
   * > **NOTE**
   * >
   * > Since API version 10, you can use the
   * > [showTimePickerDialog]{@link @ohos.arkui.UIContext:UIContext.showTimePickerDialog} API in
   * > [UIContext]{@link @ohos.arkui.UIContext}, which ensures that the time picker dialog box is shown in the intended
   * > UI instance.
   *
   * @param { TimePickerDialogOptions } options - Parameters of the time picker dialog box. If the parameter is not
   *     specified, the dialog box is not displayed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#showTimePickerDialog
   */
  static show(options?: TimePickerDialogOptions);
}

/**
 * **TimePicker** is a component for selecting a time by sliding. It supports 12/24-hour formats, multiple time formats
 * (hour/minute/second), loop scrolling, style customization, and time range restrictions. It is suitable for scenarios
 * where users need to select a time, such as schedule arrangement, time reservation, and task management. It improves
 * user experience, reduces input errors, and can be quickly integrated into applications.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 8. New APIs added in later versions are marked with a superscript
 * > to indicate their
 * >
 * > - It is not recommended to modify attribute data of this component during animation.
 * >
 * > - The maximum number of displayed rows differs between landscape and portrait modes. In portrait mode, the default
 * > is 5 rows. In landscape mode, it depends on the system configuration, and the default is 3 rows when not
 * > configured. You can use the following parameter to view the specific configuration value: $r('
 * > sys.float.ohos_id_picker_show_count_landscape').
 *
 * ###### Child Components
 *
 * This is a basic component, and it is not recommended to include child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const TimePicker: TimePickerInterface;

/**
 * Defines TimePicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const TimePickerInstance: TimePickerAttribute;