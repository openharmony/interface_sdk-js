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
 * Implements the controller of the **TextClock** component. You can bind the controller to the component to control its
 * start and stop. A **TextClock** component can be bound to only one controller.
 *
 * ###### Objects to Import
 *
 * ```ts
 * controller: TextClockController = new TextClockController();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TextClockController {
  /**
   * A constructor used to create a **TextClockController** instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Starts the text clock. Before using this API, bind the TextClockController to the TextClock component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  start();

  /**
   * Stops the text clock. Before using this API, bind the TextClockController to the TextClock component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  stop();
}

/**
 * You need a custom class to implement the **ContentModifier** API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TextClockConfiguration extends CommonConfiguration<TextClockConfiguration> {
  /**
   * Time zone offset of the current text clock.
   *
   * The value range is [-14, 12], indicating from UTC+12 to UTC-12, where a negative value indicates an east time zone
   * and a positive value indicates a west time zone. For example, UTC+8 is -8. When the set value is a floating-point
   * number within this range, it is rounded by discarding the decimal part. However, no rounding is performed when the
   * set value is a floating-point number in the set { 9.5, 3.5, -3.5, -4.5, -5.5, -5.75, -6.5, -9.5, -10.5, -12.75 }.
   * When the set value is outside the value range, the time zone offset of the current system is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  timeZoneOffset: number;

  /**
   * Whether the text clock is started.
   *
   * **true**: The text clock is started.
   *
   * **false**: The text clock is stopped.
   *
   * Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  started: boolean;

  /**
   * Time zone offset of the text clock in seconds from UTC.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  timeValue: number;
}

/**
 * Options used to build the **TextClock** component.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer
 * > element's @since version number is higher than inner elements'. This does not affect API usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface TextClockOptions {
  /**
   * Sets the time zone offset, in hours.
   *
   * The value ranges from -14 to 12, indicating the range from UTC+12 to UTC-12, where a negative value indicates an
   * east time zone and a positive value indicates a west time zone. For example, UTC+8 is -8. When the value is a
   * floating-point number within this range, it is rounded to an integer, with the decimal part discarded.
   *
   * For countries or regions that span the International Date Line, use -13 (UTC+13) and -14 (UTC+14) to ensure that
   * the entire country or region is in the same time zone. When the value is outside the range, the time zone offset of
   * the current system is used.
   *
   * Default value: the time zone offset of the current system
   *
   * When the value is a floating-point number in the set { 9.5, 3.5, -3.5, -4.5, -5.5, -5.75, -6.5, -9.5, -10.5, -12.75
   * }, it is not rounded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  timeZoneOffset?: number;

  /**
   * Binds a controller to control the state of the text clock. Pass this parameter when the start and stop of the clock
   * need to be controlled by code. If it is not passed, the clock still runs and displays normally, but its start and
   * stop cannot be controlled by code.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller?: TextClockController;
}

/**
 * The TextClock component displays the current system time on the device in text form. It supports time display in
 * different time zones and custom time formats, with a precision of up to seconds. It is suitable for scenarios where
 * the system time needs to be displayed in real time on the application UI and multiple time zones need to be
 * supported. It helps developers quickly implement time text display without manually calculating and updating the
 * time.
 *
 * When the component is invisible, the time change stops. The visible status of a component is processed based on
 * [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}.
 * If the visible threshold **ratios** is greater than 0, the component is visible.
 *
 * > **NOTE**
 * >
 * > This component is supported since API version 8. Newly added APIs will be marked with a superscript to indicate
 * > their
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface TextClockInterface {
  /**
   * Create TextClock component.
   *
   * @param { object } options - Component parameter for displaying the current system time as text. If not passed, the
   *     default configuration is used. For the default value of each attribute, see TextClockOptions. [since 8 - 17]
   * @param { TextClockOptions } [options] - Component parameter for displaying the current system time as text. If not
   *     passed, the default configuration is used. For the default value of each attribute, see
   *     TextClockOptions. [since 18]
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: TextClockOptions): TextClockAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class TextClockAttribute extends CommonMethod<TextClockAttribute> {
  /**
   * Sets the time format, for example, **yyyy/MM/dd** or **yyyy-MM-dd**.
   *
   * y: year (yyyy indicates the full year, and yy indicates the last two digits of the year)
   *
   * M: month (use MM to display the month as 01)
   *
   * d: day (use dd to display the day as 01)
   *
   * E: day of the week (use EEEE to display Saturday, and use E, EE, or EEE to display Sat)
   *
   * H: hour (24-hour format)
   *
   * h: hour (12-hour format)
   *
   * m: minute
   *
   * s: second
   *
   * SS: centisecond (if the number of S in the format is less than 3, all are processed as centiseconds)
   *
   * SSS: millisecond (if the number of S in the format is greater than or equal to 3, all are processed as milliseconds
   * )
   *
   * a: AM/PM (this parameter does not take effect when the hour format is set to H)
   *
   * Date separators: year, month, day, slash (/), hyphen (-), and period (.) (Custom separator styles are allowed.
   * Letters cannot be used as separators, while Chinese characters can be treated as separators.)
   *
   * The parts of the date can be used alone or combined with each other as needed. The time can be updated as frequent
   * as once per second. As such, whenever possible, avoid setting the centisecond and millisecond parts separately.
   *
   * When an invalid letter is set, the letter is ignored. If all letters in **format** are invalid, the display format
   * follows the system's language and hour format settings.
   *
   * If **format** is an empty string ("") or **undefined**, the default value is used.
   *
   * Default value in non-widget scenarios: 12-hour format: aa hh:mm:ss; 24-hour format: HH:mm:ss.
   *
   * Default value in widgets: 12-hour format: hh:mm; 24-hour format: HH:mm.
   *
   * When used in a widget, the minimum time unit is minute. If the set format contains seconds or centiseconds, the
   * default value is used.
   *
   * The following table shows how different settings of **format** work out.
   *
   * | Input Format              | Display Effect         |
   * | ------------------------- | ---------------------- |
   * | EEEE, M, d, yyyy          | Saturday, Feb, 4, 2023 |
   * | M d, yyyy                 | Feb 4, 2023            |
   * | EEEE, M, d                | Saturday, Feb, 4       |
   * | M d                       | Feb 4                  |
   * | MM/dd/yyyy                | Feb/04/2023            |
   * | EEEE MM dd                | Saturday Feb 04        |
   * | yyyy                      | 2023                   |
   * | yy                        | 23                     |
   * | MM                        | Feb                    |
   * | M                         | Feb                    |
   * | dd (complete date)        | 04                     |
   * | d                         | 4                      |
   * | EEEE (full name)          | Saturday               |
   * | E, EE, EEE (abbreviation) | Sat                    |
   * | M d, yyyy                 | Feb 4, 2023            |
   * | yyyy/M/d                  | 2023/Feb/4             |
   * | yyyy-M-d                  | 2023-Feb-4             |
   * | yyyy.M.d                  | 2023.Feb.4             |
   * | HH:mm:ss                  | 17:00:04               |
   * | aa hh:mm:ss               | AM 5:00:04             |
   * | hh:mm:ss                  | 5:00:04                |
   * | HH:mm                     | 17:00                  |
   * | aa hh:mm                  | AM 5:00                |
   * | hh:mm                     | 5:00                   |
   * | mm:ss                     | 00:04                  |
   * | mm:ss.SS                  | 00:04.91               |
   * | mm:ss.SSS                 | 00:04.536              |
   * | hh:mm:ss aa               | 5:00:04 AM             |
   * | HH                        | 17                     |
   *
   * @param { string } value - Time format to display.
   *     <br>Since API version 20, the Resource type is supported. [since 8 - 19]
   * @param { ResourceStr } value - Time format to display.
   *     <br>Since API version 20, the Resource type is supported. [since 20]
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  format(value: ResourceStr): TextClockAttribute;

  /**
   * Triggered when the time changes.
   *
   * This event does not take effect when the component is invisible.
   *
   * If the event is not used in a widget, it is triggered when the change occurs in seconds.
   *
   * If the event is used in a widget, it is triggered when the change occurs in minutes.
   *
   * @param { function } event - Unix time stamp, which is the number of seconds that have elapsed since the Unix epoch.
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDateChange(event: (value: number) => void): TextClockAttribute;

  /**
   * Sets the font color.
   *
   * @param { ResourceColor } value - Font Color.
   *     <br>Default value on Wearable devices: '#c5ffffff'; default value on other devices: '#e6182431'
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontColor(value: ResourceColor): TextClockAttribute;

  /**
   * Sets the font size.
   *
   * @param { Length } value - Font size. When fontSize is of the number type, the unit fp is used.
   *     <br>The default font size is 16fp. Percentage strings are not supported. If a percentage string is passed in,
   *     the default value is used.
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontSize(value: Length): TextClockAttribute;

  /**
   * Sets the font style.
   *
   * @param { FontStyle } value - Font style.
   *     <br>Default value: FontStyle.Normal, which indicates the standard font style (not italic).
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontStyle(value: FontStyle): TextClockAttribute;

  /**
   * Sets the font weight of the text. If the value is too large, the text in different fonts may be truncated.
   *
   * @param { number | FontWeight | string } value - Font weight of the text. For the number type, the value ranges from
   *     100 to 900, at an interval of 100. A larger value indicates a heavier font. The default value is 400 for values
   *     outside the range of the number type. For the string type, the following values are supported: the string form
   *     of a number type value (for example, 400), and the enum values 'lighter' (corresponding to 300), 'regular' (
   *     corresponding to 400), 'medium' (corresponding to 500), 'bold' (corresponding to 700), and 'bolder' (
   *     corresponding to 900), which correspond to the respective enum values in FontWeight.
   *     <br>Default value: FontWeight.Normal
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontWeight(value: number | FontWeight | string): TextClockAttribute;

  /**
   * Sets the font family.
   *
   * @param { ResourceStr } value - Font list. The default font is 'HarmonyOS Sans'.
   *     <br>The application currently supports the 'HarmonyOS Sans' font and
   *     [registered custom fonts]{@link @ohos.font:font}.
   *     <br>The card currently supports only the 'HarmonyOS Sans' font.
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontFamily(value: ResourceStr): TextClockAttribute;

  /**
   * Sets the text shadow effect. This API supports passing an array as the input parameter to implement multiple text
   * shadows. The fill field and the smart color mode are not supported.
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - Text shadow effect. Supports a single shadow object or an
   *     array of shadow objects to achieve multiple shadow effects. The ShadowOptions object contains attributes such
   *     as radius (blur radius), color (shadow color), offsetX (X-axis offset), and offsetY (Y-axis offset).
   *     <br>The fill field and the smart color picking mode are not supported. For details about the attributes, see
   *     [ShadowOptions]{@link ShadowOptions}.
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textShadow(value: ShadowOptions | Array<ShadowOptions>): TextClockAttribute;

  /**
   * Sets the font feature, for example, monospaced digits.
   *
   * Format: normal \| \<feature-tag-value\>
   *
   * Format of **\<feature-tag-value\>**: \<string\> \[ \<integer\> \| on \| off ]
   *
   * There can be multiple **\<feature-tag-value\>** values, which are separated by commas (,).
   *
   * For example, the input format for monospaced clock fonts is "ss01" on.
   *
   * @param { string } value - Text feature effect, used to set the OpenType features of the text. Format: normal | <
   *     feature-tag-value>, where the <feature-tag-value> format is: <string> [ <integer> | on | off ]. Multiple
   *     features can be set, separated by ','. For example, the format for using monospaced clock digits is:
   *     '"ss01" on'.
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontFeature(value: string): TextClockAttribute;

  /**
   * Creates a content modifier.
   *
   * @param { ContentModifier<TextClockConfiguration> } modifier - Method for customizing the content area on the
   *     TextClock component.
   *     <br>modifier: content modifier. Developers need to customize a class to implement the ContentModifier API.
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<TextClockConfiguration>): TextClockAttribute;

  /**
   * Sets whether to display a leading zero for the hour.
   *
   * @param { Optional<DateTimeOptions> } dateTimeOptions - Sets whether to display a leading zero for the hour. Only
   *     the hour parameter is supported. The value {hour: "2-digit"} indicates that a leading zero is displayed, and
   *     the value {hour: "numeric"} indicates that no leading zero is displayed.
   *     <br>Default value: undefined. By default, a leading zero is displayed in the 24-hour format and not displayed
   *     in the 12-hour format.
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  dateTimeOptions(dateTimeOptions: Optional<DateTimeOptions>): TextClockAttribute;
}

/**
 * The TextClock component displays the current system time on the device in text form. It supports time display in
 * different time zones and custom time formats, with a precision of up to seconds. It is suitable for scenarios where
 * the system time needs to be displayed in real time on the application UI and multiple time zones need to be
 * supported. It helps developers quickly implement time text display without manually calculating and updating the
 * time.
 *
 * When the component is invisible, the time change stops. The visible status of a component is processed based on
 * [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}.
 * If the visible threshold **ratios** is greater than 0, the component is visible.
 *
 * > **NOTE**
 * >
 * > This component is supported since API version 8. Newly added APIs will be marked with a superscript to indicate
 * > their
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const TextClock: TextClockInterface;

/**
 * Defines TextClock Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const TextClockInstance: TextClockAttribute;