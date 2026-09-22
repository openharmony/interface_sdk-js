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
 * Defines the controller for controlling the **TextTimer** component. A **TextTimer** component can only be bound to
 * one controller, and the relevant commands can only be called after the component has been created. A
 * **TextTimerController** can control only the last **TextTimer** component bound to it.
 *
 * ###### Objects to Import
 *
 * ``` ts
 * textTimerController: TextTimerController = new TextTimerController();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TextTimerController {
  /**
   * A constructor used to create a **TextTimerController** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Starts the timer. This API must be called after the **TextTimer** component is created and the controller is bound.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  start();

  /**
   * Pauses the timer. This API must be called after the component is created.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  pause();

  /**
   * Resets the timer. This API must be called after the component is created.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  reset();
}

/**
 * Defines the **TextTimer** configuration used by the **ContentModifier** API.
 *
 * You need a custom class to implement the **ContentModifier** API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TextTimerConfiguration extends CommonConfiguration<TextTimerConfiguration> {
  /**
   * Initial time of the timer, in milliseconds. This parameter takes effect when isCountDown is set to true.
   *
   * Default Value: 60000
   *
   * Value Range: (0, 86400000), that is, no more than 24 hours. If the value is out of the range, the default value is
   * used.
   *
   * @default 60000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  count: number;

  /**
   * Whether to count down.
   *
   * true: The timer counts down, for example, from 30 seconds~0 seconds; false: The timer counts up, for example, from
   * 0 seconds~30 seconds.
   *
   * Default Value: false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isCountDown: boolean;

  /**
   * Whether the timer has started.
   *
   * true: The timer has started; false: The timer has not started.
   *
   * Default Value: false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  started: boolean;

  /**
   * Elapsed time of the timer, in the minimum unit of the configured format.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  elapsedTime: number;

  /**
   * Initial time of the timer in the count-up mode. This parameter takes effect only when isCountDown is set to false.
   *
   * Value Range: [-2147483648, 2147483647]. Negative values are supported.
   *
   * Default Value: 0
   *
   * Unit: ms
   *
   * When the value is negative, the timer starts counting from the negative value, passes 0, and then continues
   * counting toward positive values.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  startTime?: number;
}

/**
 * Sets the options used to build the **TextTimer** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
interface TextTimerOptions {
  /**
   * Countdown switch.
   *
   * true: The timer counts down, for example, from 30 seconds to 0 seconds.
   *
   * false: The timer counts up, for example, from 0 seconds to 30 seconds.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  isCountDown?: boolean;

  /**
   * Initial time of the timer, in milliseconds. This parameter takes effect when isCountDown is true.
   *
   * Default value: 60000
   *
   * Value range: (0, 86400000), that is, no more than 24 hours. If the value is out of the range, the default value is
   * used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  count?: number;

  /**
   * Controller of the TextTimer, used to start, pause, and reset the timer programmatically. If this parameter is not
   * passed, the timer can still be displayed normally but its state cannot be controlled through code.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller?: TextTimerController;

  /**
   * Initial time of the timer in count-up mode. This parameter takes effect only when isCountDown is false.
   *
   * Value range: [−2147483648, 2147483647].
   *
   * Default value: 0
   *
   * Unit: ms
   *
   * When the value is negative, the timer starts counting from the negative value and continues counting toward
   * positive values after passing 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  startTime?: number;
}

/**
 * **TextTimer** is a component that displays timing information in text format and controls the timer state. It
 * supports both count-up and countdown modes and allows custom display formats. It is suitable for scenarios that need
 * to show the passage of time, such as stopwatches and event countdowns. It is commonly used in countdown scenarios,
 * such as exam countdowns, limited-time activities, and sports timing.
 *
 * When the component is invisible (not in the locked-screen state or the application background state), the UI time
 * change stops (that is, the component is not drawn at this time), but [onTimer]{@link TextTimerAttribute#onTimer} is
 * still triggered normally.
 *
 * > **NOTE**
 * >
 * > This component is supported since API version 8. Newly added APIs will be marked with a superscript to indicate
 * > their
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface TextTimerInterface {
  /**
   * Create TextTimer component.
   *
   * @param { TextTimerOptions } options - Component parameter that displays timing information through text and
   *     controls the timer state. Pass this parameter when you need to customize the timer configuration (for example,
   *     set the countdown switch, timing duration, initial time, controller, and so on); if it is not passed, the
   *     default configuration of TextTimerOptions is used.
   *     <br>The default value inherits from [TextTimerOptions]{@link TextTimerOptions}.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: TextTimerOptions): TextTimerAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class TextTimerAttribute extends CommonMethod<TextTimerAttribute> {
  /**
   * Sets the custom time format, which must contain at least one of the following keywords: **HH**, **mm**, **ss**, and
   * **SS**. When date formats such as **yy**, **MM**, and **dd** are used, they are not supported, and the default
   * format **'HH:mm:ss.SS'** is used instead.
   *
   * The timer update frequency is processed based on the minimum unit of **format**. For example, when **format** is
   * set to **'HH:mm'**, the update frequency is one minute. When a high-precision **format** (for example, one
   * containing **SS**) is set, the intervals of the **onTimer** callback may be uneven.
   *
   * @param { string } value - Custom time format displayed by the timer. It must contain at least one of the keywords
   *     HH, mm, ss, or SS.
   *     <br>Default value: 'HH:mm:ss.SS'
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  format(value: string): TextTimerAttribute;

  /**
   * Sets the font color.
   *
   * @param { ResourceColor } value - Font color.
   *     <br>Default value on Wearable devices: '#c5ffffff', displayed in white.
   *     <br>Default value on other devices: '#e6182431', displayed in black.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontColor(value: ResourceColor): TextTimerAttribute;

  /**
   * Sets the font size.
   *
   * @param { Length } value - Font size.
   *     <br>Default value: 16fp
   *     <br>When value is of the number type in Length, the unit is fp. When value is of the string type in Length, if
   *     the set value does not start with a digit, it is processed as 0fp; if the set value starts with a digit, and
   *     the content after the digit contains characters other than [pixel units]{@link ./common} (such as letters and
   *     special symbols), the numeric part at the beginning of the string is used, with the unit being fp.
   *     <br>For example, when the set value is "abc", the value is 0fp; when the set value is "10vp", the value is 10
   *     vp; when the set value is "10vp11abc", the value is 10fp. Percentage strings are not supported.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontSize(value: Length): TextTimerAttribute;

  /**
   * Sets the font style.
   *
   * @param { FontStyle } value - Font style, for example, the italic font style.
   *     <br>Default value: FontStyle.Normal
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontStyle(value: FontStyle): TextTimerAttribute;

  /**
   * Sets the font weight of the text. If the value is too large, the text in different fonts may be truncated.
   *
   * @param { number | FontWeight | string } value - Font weight of the text. For the number type, the value range is
   *     [100, 900], with an interval of 100. A larger value indicates a heavier font weight. The default value for a
   *     number outside the value range is 400. For the [ResourceStr]{@link ResourceStr} type, only the string form of
   *     the number value is supported, for example, "400", as well as "bold", "bolder", "lighter", "regular", and "
   *     medium", which correspond to the respective enum values in FontWeight.
   *     <br>Default value: FontWeight.Normal
   *     <br>Since API version 20, the Resource type is supported. [since 8 - 19]
   * @param { number | FontWeight | ResourceStr } value - Font weight of the text. For the number type, the value range
   *     is [100, 900], with an interval of 100. A larger value indicates a heavier font weight. The default value for a
   *     number outside the value range is 400. For the [ResourceStr]{@link ResourceStr} type, only the string form of
   *     the number value is supported, for example, "400", as well as "bold", "bolder", "lighter", "regular", and "
   *     medium", which correspond to the respective enum values in FontWeight.
   *     <br>Default value: FontWeight.Normal
   *     <br>Since API version 20, the Resource type is supported. [since 20]
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): TextTimerAttribute;

  /**
   * Sets the font family.
   *
   * @param { ResourceStr } value - Font family. The default font is **'HarmonyOS Sans'**.
   *     <br>The 'HarmonyOS Sans' font and [registered custom fonts]{@link @ohos.font:font} are supported for
   *     applications.
   *     <br>Only the 'HarmonyOS Sans' font is supported for widgets.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontFamily(value: ResourceStr): TextTimerAttribute;

  /**
   * Triggered when the time text changes. This event is not triggered in the locked-screen state or the application
   * background state. When the component is invisible (not in the locked-screen state or the application background
   * state), the UI time change stops, but this event is still triggered normally. When a high-precision
   * [format]{@link TextTimerAttribute#format} (**SS**) is set, the callback intervals may be uneven, and the time
   * intervals between two adjacent callbacks may differ.
   *
   * @param { function } event - utc: Linux timestamp, which is the amount of time that has elapsed since January 1, 197
   *     0, in the minimum unit of the format.
   *     <br>elapsedTime: Elapsed time of the timer, in the minimum unit of the
   *     format.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onTimer(event: (utc: number, elapsedTime: number) => void): TextTimerAttribute;

  /**
   * Sets the text shadow effect. This API supports input parameters in an array to implement multiple text shadows. The
   * **fill** field and the smart color picking mode are not supported.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - Parameters of the text shadow effect, including the color,
   *     blur radius, and offset.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textShadow(value: ShadowOptions | Array<ShadowOptions>): TextTimerAttribute;

  /**
   * Customizes the content area of **TextTimer**. When the default text display style cannot meet the requirements,
   * this API can be used to implement a custom timer UI effect.
   *
   * @param { ContentModifier<TextTimerConfiguration> } modifier - Method for customizing the content area on the
   *     TextTimer component.
   *     <br>modifier: content modifier. The developer needs to define a custom class to implement the ContentModifier
   *     interface.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<TextTimerConfiguration>): TextTimerAttribute;
}

/**
 * **TextTimer** is a component that displays timing information in text format and controls the timer state. It
 * supports both count-up and countdown modes and allows custom display formats. It is suitable for scenarios that need
 * to show the passage of time, such as stopwatches and event countdowns. It is commonly used in countdown scenarios,
 * such as exam countdowns, limited-time activities, and sports timing.
 *
 * When the component is invisible (not in the locked-screen state or the application background state), the UI time
 * change stops (that is, the component is not drawn at this time), but [onTimer]{@link TextTimerAttribute#onTimer} is
 * still triggered normally.
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
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const TextTimer: TextTimerInterface;

/**
 * Defines TextTimer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const TextTimerInstance: TextTimerAttribute;