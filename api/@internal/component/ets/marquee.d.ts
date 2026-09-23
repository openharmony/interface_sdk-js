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
 * Describes the initialization options of the **Marquee** component.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface MarqueeOptions {
  /**
   * Controls whether the marquee enters the playing state.
   *
   * true: play; false: do not play.
   *
   * **Note:**
   *
   * When the loop parameter is set to a finite number greater than 0 and playback is complete, you cannot reset the
   * scroll count and restart playback by changing the start parameter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  start: boolean;

  /**
   * Text step of the scrolling animation.
   *
   * Value Range: [0, text width]. When step is greater than the text width of the Marquee, the default value is used.
   *
   * Default Value: 6
   *
   * Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @default 6 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  step?: number;

  /**
   * Sets the loop count of repeated scrolling. When the value is less than or equal to 0, the scrolling loops
   * infinitely.
   *
   * Default Value: -1
   *
   * **Note:**
   *
   * On ArkTS widgets, this parameter scrolls only once when visible regardless of the value set. When it is set to a
   * finite number greater than 0 and playback is complete, you cannot reset the scroll count and restart playback by
   * changing the start parameter.
   *
   * @default -1 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  loop?: number;

  /**
   * Sets the scrolling direction of the text.
   *
   * true: the text scrolls forward from the beginning; false: the text scrolls in reverse.
   *
   * Default Value: true
   *
   * @default true [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fromStart?: boolean;

  /**
   * Text to be scrolled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  src: string;

  /**
   * Spacing between two rounds of marquee scrolling. When the unit attribute of the LengthMetrics object is
   * LengthUnit.PERCENT, this setting does not take effect and the default value is used.
   *
   * Default Value: width of the Marquee component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  spacing?: LengthMetrics;

  /**
   * Sets the delay between two rounds of scrolling.
   * +∞). A value less than 0 is equivalent to 0.
   * Unit: millisecond
   * . Default value: 0
   * Value Range: [0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  delay?: number;
}

/**
 * The **Marquee** component is used to scroll and display a single line of text. It supports custom scrolling speed,
 * direction, and loop count. Text scrolling is activated only when the content width is greater than or equal to the
 * component's width; otherwise, no scrolling occurs. It is suitable for scenarios where long text needs to be displayed
 * in limited space, such as scrolling news headlines, notifications and announcements, and advertisement carousels. It
 * effectively saves interface space and attracts user attention.
 *
 * > **NOTE**
 * >
 * > To ensure that scrolling frame rates are not affected, it is recommended that the number of **Marquee** components
 * > in a scrolling component does not exceed 4, or use [TextOverflow.MARQUEE]{@link TextOverflow} of the
 * > [Text]{@link ./text} component instead.
 * >
 * > For scenarios where the **Marquee** component requires dynamic frame rates, use the
 * > [MarqueeDynamicSyncScene]{@link @ohos.arkui.UIContext} API.
 * >
 * > When the text width is smaller than the **Marquee** component's width, use the [property animation]{@link ./common}
 * > to implement scrolling.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface MarqueeInterface {

  /**
   * Creates a marquee.
   *
   * @param { object } value [since 8 - 17]
   * @param { MarqueeOptions } options - Parameters of the marquee. [since 18]
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options: MarqueeOptions): MarqueeAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class MarqueeAttribute extends CommonMethod<MarqueeAttribute> {
  /**
   * Sets the font color. If this API is not called, the default font color is '#e6182431', which indicates dark gray (
   * with an opacity of about 90%). On Wearable devices, the default font color is '#c5ffffff', which indicates white (
   * with an opacity of about 77%).
   *
   * @param { ResourceColor } value - Font color.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontColor(value: ResourceColor): MarqueeAttribute;

  /**
   * Sets the text size.
   *
   * @param { Length } value - Font size. When fontSize is of the number type, the fp unit is used. The default font
   *     size is 16fp. Percentage strings are not supported.
   *     <br>Default value on Wearable devices: 15fp
   *     <br>**Note:**
   *     <br>When used with the [allowScale]{@link MarqueeAttribute#allowScale} attribute, the value must be set in fp
   *     units.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontSize(value: Length): MarqueeAttribute;

  /**
   * Sets whether to allow text scaling. If this API is not called, text scaling is not allowed by default.
   *
   * @param { boolean } value - Whether to allow text scaling.
   *     <br>true: text scaling is allowed; false: text scaling is not allowed.
   *     <br>**Note:**
   *     <br>This takes effect only when [fontSize]{@link MarqueeAttribute#fontSize} is in fp units.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  allowScale(value: boolean): MarqueeAttribute;

  /**
   * Sets the font weight of the text. If the value is set too large, the text may be truncated under different fonts.
   * If this API is not called, the default font weight is FontWeight.Normal (normal weight, corresponding to the value
   * 400).
   *
   * @param { number | FontWeight | string } value - Font weight of the text.
   *     <br>For the number type, the value ranges from 100 to 900, at an interval of 100. The default value is 400. A
   *     larger value indicates a bolder font. For the string type, only the string form of the number type value is
   *     supported, for example, "400", as well as "bold", "bolder", "lighter", "regular", and "medium", which
   *     correspond to the respective enum values in FontWeight. If the value is set too large, the font may be
   *     truncated in different fonts.
   *     <br>If a value beyond the value range is passed, the default value is used. If a value that does not meet the
   *     interval requirement is passed, the passed value is used when enableVariableFontWeight of fontWeightConfigs is
   *     set to true; otherwise, the default value is used.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontWeight(value: number | FontWeight | string): MarqueeAttribute;

  /**
   * Sets the font family.
   *
   * @param { string | Resource } value - Font family. Default font: **'HarmonyOS Sans'**
   *     <br>Supported fonts include **'HarmonyOS Sans'** and custom fonts registered using
   *     [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync}.
   *     <br>Only the 'HarmonyOS Sans' font is supported for widgets.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontFamily(value: string | Resource): MarqueeAttribute;

  /**
   * Scrolling strategy of the **Marquee** component after its attributes are updated. (This attribute takes effect when
   * the **Marquee** component is in the playing state and the text content width is greater than or equal to the
   * component's width.) If this API is not called, MarqueeUpdateStrategy.DEFAULT is used by default.
   *
   * Usage scenarios:
   *
   * - MarqueeUpdateStrategy.DEFAULT: suitable for scenarios where you want to restart scrolling with the default
   * strategy after the content is updated.
   * - MarqueeUpdateStrategy.PRESERVE_POSITION: suitable for scenarios where you want to keep the current scrolling
   * position and continue scrolling when the content is dynamically updated, such as real-time clocks, stock prices,
   * and other dynamic content display.
   *
   * @param { MarqueeUpdateStrategy } value - Scrolling strategy of the marquee after the marquee component properties
   *     are updated.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  marqueeUpdateStrategy(value: MarqueeUpdateStrategy): MarqueeAttribute;

  /**
   * Triggered when the marquee text changes or starts scrolling.
   *
   * @param { function } event - Callback invoked when the marquee text changes or starts scrolling.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onStart(event: () => void): MarqueeAttribute;

  /**
   * Triggered when a complete scrolling cycle is completed. If the loop count is not 1, this event is triggered
   * multiple times.
   *
   * @param { function } event - Callback invoked when a complete scrolling is finished.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onBounce(event: () => void): MarqueeAttribute;

  /**
   * Triggered when the marquee has finished the number of scrolling times set by the **loop** attribute.
   *
   * @param { function } event - Callback invoked when the marquee has finished the number of scrolling times set by the
   *     **loop** attribute.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onFinish(event: () => void): MarqueeAttribute;

  /**
   * Triggered when the marquee finishes scrolling or stops.
   *
   * When the marquee stops, it restarts the loop from the beginning. This does not include the pause scenario, and
   * pausing does not trigger this callback.
   *
   * @param { Callback<void> | undefined } event - Triggered when the marquee finishes scrolling or stops.
   *     <br>When set to undefined, the callback is not executed.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onStop(event: Callback<void> | undefined): MarqueeAttribute;
}

/**
 * The **Marquee** component is used to scroll and display a single line of text. It supports custom scrolling speed,
 * direction, and loop count. Text scrolling is activated only when the content width is greater than or equal to the
 * component's width; otherwise, no scrolling occurs. It is suitable for scenarios where long text needs to be displayed
 * in limited space, such as scrolling news headlines, notifications and announcements, and advertisement carousels. It
 * effectively saves interface space and attracts user attention.
 *
 * > **NOTE**
 * >
 * > To ensure that scrolling frame rates are not affected, it is recommended that the number of **Marquee** components
 * > in a scrolling component does not exceed 4, or use [TextOverflow.MARQUEE]{@link TextOverflow} of the
 * > [Text]{@link ./text} component instead.
 * >
 * > For scenarios where the **Marquee** component requires dynamic frame rates, use the
 * > [MarqueeDynamicSyncScene]{@link @ohos.arkui.UIContext} API.
 * >
 * > When the text width is smaller than the **Marquee** component's width, use the [property animation]{@link ./common}
 * > to implement scrolling.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const Marquee: MarqueeInterface;

/**
 * Defines Marquee Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const MarqueeInstance: MarqueeAttribute;