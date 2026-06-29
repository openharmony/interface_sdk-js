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
 * controller: TextClockController = new TextClockController()
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
   * Starts the **<TextClock\>** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  start();

  /**
   * Stops the **<TextClock\>** component.
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
   * Time zone offset of the text clock.
   *
   * The value range is [-14, 12], indicating UTC+12 to UTC-12. A negative value indicates Eastern Standard Time, and a
   * positive value indicates Western Standard Time. For example, **-8** indicates UTC+8. If the value is a floating
   * point number within the value range, it is rounded off, with the decimal portion discarded.
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
   * **false**: The text clock is disabled.
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
 * Options to construct TextClock component.
 *
 * @interface TextClockOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface TextClockOptions {

  /**
   * Time zone offset.
   *
   * The value range is [-14, 12], indicating UTC+12 to UTC-12. A negative value indicates Eastern Standard Time, and a
   * positive value indicates Western Standard Time. For example, **-8** indicates UTC+8. If the value is a floating
   * point number within the value range, it is rounded off, with the decimal portion discarded.
   *
   * For countries or regions crossing the International Date Line, use -13 (UTC+13) and -14 (UTC+14) to ensure time
   * consistency across the country or region. If the set value is not within the valid range, the time zone offset of
   * the current system will be used.
   *
   * Default value: time zone offset of the current system
   *
   * The value is not rounded when it is a floating point number in the { 9.5, 3.5, -3.5, -4.5, -5.5, -5.75, -6.5, -9.5,
   * -10.5, -12.75 } set.
   *
   * **Widget capability**: Since API version 11, this feature is supported in ArkTS widgets.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  timeZoneOffset?: number;

  /**
   * Controller to control the status of the **<TextClock>** component.
   *
   * **Widget capability**: Since API version 11, this feature is supported in ArkTS widgets.
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
 * The **TextClock** component displays the current system time in text format for different time zones. The time is
 * accurate to seconds.
 *
 * When the component is invisible, the time change stops. The visible status of a component is processed based on
 * [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}.
 * If the visible threshold **ratios** is greater than 0, the component is visible.
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
   * @param { object } options - Options of the text clock. [since 8 - 17]
   * @param { TextClockOptions } [options] - Options of the text clock. [since 18]
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
 * In addition to the
 * [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following
 * attributes are supported.
 *
 * In addition to the [universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md), the
 * following events are supported.
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
   * **y**: year (**yyyy** indicates the complete year, and **yy** indicates the last two digits of the year.)
   *
   * **M**: month (To display 01 for January, use **MM** instead.)
   *
   * **d**: day (To display 01 for the first day, use **dd** instead.)
   *
   * **E**: day of week (To display the full name, use **EEEE**; to display the abbreviation, use **E**, **EE**, or
   * **EEE**.)
   *
   * **H**: hour (24-hour format); **h**: hour (12-hour format)
   *
   * **m**: minute
   *
   * **s**: second
   *
   * **SS**: centisecond (If the number of S characters in the format is less than 3, all are treated as centiseconds.)
   *
   * **SSS**: millisecond (If the number of S characters in the format is greater than or equal to 3, all are treated as
   * milliseconds.)
   *
   * **a**: morning/afternoon (This parameter does not take effect when the hour part is set to **H**.)
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
   * Default value outside of widgets: 12-hour format: aa hh:mm:ss; 24-hour format: HH:mm:ss.
   *
   * Default value in widgets: 12-hour format: hh:mm, 24-hour format: HH:mm.
   *
   * When used in widgets, the minimum time unit is minute. In this case, if the format contains seconds or
   * centiseconds, the default value will be used.
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
   * @param { string } value - Time format to set. [since 8 - 19]
   * @param { ResourceStr } value - Time format to set.[since 20]
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
   * @param { ResourceColor } value - Font color.<br>Default value for wearables: '#c5ffffff'; default value for other
   *     devices: '#e6182431'
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
   * @param { Length } value - Font size. If **fontSize** is of the number type, the unit fp is used. The default font
   *     size is 16 fp. The value cannot be a percentage.
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
   * @param { FontStyle } value - Font style.<br>Default value: **FontStyle.Normal**, indicating the standard font style
   *     (non-italic)
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
   * @param { number | FontWeight | string } value - Font width of the text. The value range of the number type is
   *     [100, 900]. The value interval is 100. A larger value indicates a wider font. If the value of the number type
   *     is not within the value range, the default value is **400**. For the string type, only strings that represent a
   *     number, for example, **"400"**, and the following enumerated values of **FontWeight** are supported:
   *     **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**.<br>Default value:
   *     **FontWeight.Normal**
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
   * @param { ResourceStr } value - Font family. Default font: **'HarmonyOS Sans'**<br>The 'HarmonyOS Sans' font and
   *     [registered custom fonts]{@link @ohos.font:font} are supported for applications.<br>Only the 'HarmonyOS Sans'
   *     font is supported for widgets.
   * @returns { TextClockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontFamily(value: ResourceStr): TextClockAttribute;

  /**
   * Sets the text shadow. It supports input parameters in an array to implement multiple text shadows. This API does
   * not work with the **fill** attribute or coloring strategy.
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - Font shadow of the text.
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
   * @param { string } value - Font feature.
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
   * @param { ContentModifier<TextClockConfiguration> } modifier - Content modifier to apply to the text clock.<br>
   *     **modifier**: content modifier. You need to customize a class to implement the **ContentModifier** API.
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
   * @param { Optional<DateTimeOptions> } dateTimeOptions - Whether to display leading zeros in the hour. It only
   *     supports setting the **hour** parameter. When the parameter value is **{hour: "2-digit"}**, a leading zero is
   *     displayed. When the parameter value is **{hour: "numeric"}**, no leading zero is displayed.<br>Default value:
   *     **undefined**. By default, leading zeros are displayed in 24-hour format, but not displayed in 12-hour format.
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
 * The **TextClock** component displays the current system time in text format for different time zones. The time is
 * accurate to seconds.
 *
 * When the component is invisible, the time change stops. The visible status of a component is processed based on
 * [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}.
 * If the visible threshold **ratios** is greater than 0, the component is visible.
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