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
 * ```ts
 * textTimerController: TextTimerController = new TextTimerController()
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
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
   * Starts the timer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  start();

  /**
   * Pauses the timer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  pause();

  /**
   * Resets the timer.
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
   * Timer duration, in milliseconds. It is effective only when **isCountDown** is **true**. The maximum value is 864000
   * 00 ms (24 hours). If the value is between 0 and 86,400,000, it is used as the initial countdown time. Otherwise,
   * the default value is used as the initial countdown time.
   *
   * Default value: **60000**
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
   * Whether the timer is a countdown.
   *
   * **true**: The timer counts down, e.g., from 30s to 0s. **false**: The timer counts up, e.g., from 0s to 30s.
   *
   * Default value: **false**
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
   * Whether the timer has already started.
   *
   * **true**: The timer has started. **false**: The timer has not started.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  started: boolean;

  /**
   * Elapsed time of the timer, in the minimum unit of the format.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  elapsedTime: number;

  /**
   * The start time of the timer.It is effective when isCountDown is false.
   *
   * Default value: **0**
   *
   * Unit: ms.
   *
   * When the value is negative, the timer starts with a negative value and continues with a positive value after 0.
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
   * **true**: The timer counts down (for example, from 30 seconds to 0 seconds).
   *
   * **false**: The timer counts up (for example, from 0 seconds to 30 seconds).
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
   * Timer duration, in milliseconds. It is effective only when **isCountDown** is **true**. The maximum value is 864000
   * 00 ms (24 hours). If 0 < **count** < 86400000, **count** is the initial value of the timer. Otherwise, the default
   * value is used as the initial value.
   *
   * Default value: **60000**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  count?: number;

  /**
   * **TextTimer** controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller?: TextTimerController;

  /**
   * The start time of the timer.It is effective when isCountDown is false.
   *
   * Default value: **0**
   *
   * Unit: ms.
   *
   * When the value is negative, the timer starts with a negative value and continues with a positive value after 0.
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
 * The **TextTimer** component displays timing information and is controlled in text format.
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
   * @param { TextTimerOptions } options - Parameters of the **TextTimer** component. The default value is inherited
   *     from [TextTimerOptions]{@link TextTimerOptions}.
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
 * In addition to the
 * [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following
 * attributes are supported.
 *
 * In addition to the [universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md), the
 * following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class TextTimerAttribute extends CommonMethod<TextTimerAttribute> {

  /**
   * Sets the custom format. The value must contain at least one of the following keywords: **HH**, **mm**, **ss**, and
   * **SS**. If the date format is yy, MM, or dd, the default value is used.
   *
   * The timer update frequency is in the minimum unit of **format**. For example, if **format** is set to **'HH:mm'**,
   * the update frequency is one minute.
   *
   * @param { string } value - Custom date display format.<br>Default value: **'HH:mm:ss.SS'**
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
   * @param { ResourceColor } value - Font color.<br>Default value on wearable devices: **'#c5ffffff'**, indicating that
   *     the text is displayed in white.<br>Default value on other devices: **'#e6182431'**, indicating that the text is
   *     displayed in black.
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
   * @param { Length } value - Font size. When the value is of the number type in Length, the unit is fp. The default
   *     font size is 16 fp. When the value is of the string type in Length:<br>- If the string does not start with a
   *     digit, it is treated as 0 fp.<br>- If the string starts with a digit and contains characters other than
   *     [pixel units](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md) (such as letters or special
   *     characters), the leading numeric part is extracted as the value and the unit is fp. For example, the value
   *     **"abc"** is treated as **0fp**, **"10vp"** is treated as **10vp**, and **"10vp11abc"** is treated as **10fp**.
   *     The value cannot be a percentage.
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
   * @param { FontStyle } value - Font style, for example, italic.<br>Default value: **FontStyle.Normal**
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
   * @param { number | FontWeight | string } value - Font weight of the text. The value range of the number type is
   *     [100, 900]. The value interval is 100. A larger value indicates a wider font. If the value of the number type
   *     is not within the value range, the default value is **400**. The [ResourceStr]{@link ResourceStr} type supports
   *     only strings of the number type, such as **"400"**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and
   *     **"medium"**, corresponding to the enums in **FontWeight**.<br>Default value: **FontWeight.Normal**<br>The
   *     Resource type is supported since API version 20. [since 8 - 19]
   * @param { number | FontWeight | ResourceStr } value - Font weight of the text. The value range of the number type is
   *     [100, 900]. The value interval is 100. A larger value indicates a wider font. If the value of the number type
   *     is not within the value range, the default value is **400**. The [ResourceStr]{@link ResourceStr} type supports
   *     only strings of the number type, such as **"400"**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and
   *     **"medium"**, corresponding to the enums in **FontWeight**.<br>Default value: **FontWeight.Normal**<br>The
   *     Resource type is supported since API version 20. [since 20]
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
   * @param { ResourceStr } value - Font family. The default font is **'HarmonyOS Sans'**.<br>The 'HarmonyOS Sans' font
   *     and [registered custom fonts]{@link @ohos.font:font} are supported for applications.<br>Only the 'HarmonyOS
   *     Sans' font is supported for widgets.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontFamily(value: ResourceStr): TextTimerAttribute;

  /**
   * Event triggered when the time text changes. This event is not triggered when the screen is locked or the
   * application is running in the background. When high-precision [format]{@link TextTimerAttribute#format}s (such as
   * **SS**) are used, the callback interval may vary.
   *
   * @param { function } event - utc: Linux timestamp, which is the amount of time that has elapsed since January 1, 197
   *     0, in the minimum unit of the format.<br>elapsedTime: Elapsed time of the timer, in the minimum unit of the
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
   * Sets the text shadow. It supports input parameters in an array to implement multiple text shadows. This API does
   * not work with the **fill** attribute or coloring strategy.
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
   * Creates a content modifier.
   *
   * @param { ContentModifier<TextTimerConfiguration> } modifier - Content modifier to apply to the **TextTimer**
   *     component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
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
 * The **TextTimer** component displays timing information and is controlled in text format.
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