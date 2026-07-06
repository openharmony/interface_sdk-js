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
   * Whether to start scrolling.
   *
   * **true**: yes; **false**: no
   *
   * **NOTE**
   *
   * This parameter cannot be used to restart scrolling that has been completed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  start: boolean;

  /**
   * Step length of the scrolling animation text. If the value is greater than the text width of the marquee, the
   * default value is used.
   *
   * Default value: **6**
   *
   * Unit: [vp]{@link common}
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
   * Number of times the marquee will scroll. If the value is less than or equal to **0**, the marquee will scroll
   * continuously.
   *
   * Default value: **-1**
   *
   * **NOTE**
   *
   * Regardless of the value, the marquee scrolls only once on an ArkTS widget.
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
   * Whether the text scrolls from the start.
   *
   * **true**: Scroll from the start.
   *
   * **false**: Scroll from the end.
   *
   * Default value: **true**.
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
   * Text to scroll.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  src: string;

  /**
   * The spacing between two rounds of marquee.
   *
   * Default value is marquee width.
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
   * The waiting time between each round of the marquee.
   *
   * Default value: 0.
   *
   * Unit: ms.
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
 * The **Marquee** component is used to display a scrolling piece of text. Text scrolling is activated only when the
 * content width is greater than or equal to the component's width.
 *
 * > **NOTE**
 * >
 * > To ensure that scrolling frame rates are not affected, it is recommended that the number of **Marquee** components
 * > in a scroll container does not exceed four, or alternatively, use the [Text]{@link text} component's
 * > [TextOverflow.MARQUEE]{@link TextOverflow} as a substitute.
 * >
 * > For the scenario where the frame rate of the **Marquee** component is dynamic, you can use the
 * > [MarqueeDynamicSyncScene]{@link @ohos.arkui.UIContext} API.
 * >
 * > If the text width is less than the **Marquee** component width, use the [property animation]{@link common} to
 * > implement scrolling.
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
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
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
   * Sets the font color.
   *
   * @param { ResourceColor } value - Font color.<br>Default value: **'#c5ffffff'** (light blue) on wearables;
   *     **'e6182431'** (black) on other devices
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
   * @param { Length } value - Font size. If **fontSize** is of the number type, the unit fp is used. The default font
   *     size is 16 fp. This parameter cannot be set in percentage.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontSize(value: Length): MarqueeAttribute;

  /**
   * Sets whether to allow text to scale.
   *
   * @param { boolean } value - Whether to allow text to scale.<br>**true**: yes; **false**: no<br>Default value:
   *     **false**<br>**NOTE**<br>This parameter is effective only when [fontSize]{@link MarqueeAttribute#fontSize} is
   *     in fp units.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  allowScale(value: boolean): MarqueeAttribute;

  /**
   * Sets the font weight. If the value is too large, the text may be clipped depending on the font.
   *
   * @param { number | FontWeight | string } value - Font weight. For the number type, the value range is [100, 900], at
   *     an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the
   *     string type, only strings that represent a number, for example, **400**, and the following enumerated values of
   *     **FontWeight** are supported: **bold**, **bolder**, **lighter**, **regular**, and **medium**.<br>Default value:
   *     **FontWeight.Normal**
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
   * @param { string | Resource } value - Font family. Default font: **'HarmonyOS Sans'**<br>Supported fonts include
   *     **'HarmonyOS Sans'** and custom fonts registered using
   *     [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync}.<br>Only the 'HarmonyOS Sans' font
   *     is supported for widgets.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontFamily(value: string | Resource): MarqueeAttribute;

  /**
   * Sets the scrolling strategy for the marquee after its attributes are updated. (This attribute takes effect when the
   * marquee is in the playing state and the text content width exceeds the width of the marquee component.)
   *
   * @param { MarqueeUpdateStrategy } value - Scrolling strategy for the marquee after its attributes are updated.<br>
   *     Default value: **MarqueeUpdateStrategy.DEFAULT**
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
   * Triggered when the marquee has reached the end. This event will be triggered for multiple times if the **loop**
   * attribute is not set to **1**.
   *
   * @param { function } event - Callback invoked when the marquee has finished scrolling once.
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
   * Called when scrolling is stoped.
   *
   * <p><strong>NOTE</strong>:
   * <br>If event is set to undefined, the current event will be unbound.
   * </p>
   *
   * @param { Callback<void> | undefined } event
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
 * The **Marquee** component is used to display a scrolling piece of text. Text scrolling is activated only when the
 * content width is greater than or equal to the component's width.
 *
 * > **NOTE**
 * >
 * > To ensure that scrolling frame rates are not affected, it is recommended that the number of **Marquee** components
 * > in a scroll container does not exceed four, or alternatively, use the [Text]{@link text} component's
 * > [TextOverflow.MARQUEE]{@link TextOverflow} as a substitute.
 * >
 * > For the scenario where the frame rate of the **Marquee** component is dynamic, you can use the
 * > [MarqueeDynamicSyncScene]{@link @ohos.arkui.UIContext} API.
 * >
 * > If the text width is less than the **Marquee** component width, use the [property animation]{@link common} to
 * > implement scrolling.
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