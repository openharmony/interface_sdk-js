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
 * Defines Marquee constructor options.
 *
 * Anonymous Object Rectification.
 * @interface MarqueeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
interface MarqueeOptions {
  /**
   * Control whether the running lamp enters the playing state.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Control whether the running lamp enters the playing state.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Control whether the running lamp enters the playing state.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Control whether the running lamp enters the playing state.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Control whether the running lamp enters the playing state.
   *
   * Anonymous Object Rectification.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  start: boolean;

  /**
   * Scroll animation text scroll step, when step is larger than the text width of Marquee, take the default value.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Scroll animation text scroll step, when step is larger than the text width of Marquee, take the default value.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Scroll animation text scroll step, when step is larger than the text width of Marquee, take the default value.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Scroll animation text scroll step, when step is larger than the text width of Marquee, take the default value.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Scroll animation text scroll step, when step is larger than the text width of Marquee, take the default value.
   *
   * Anonymous Object Rectification.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  step?: number;

  /**
   * Set the number of times the scroll is repeated, infinite loop if it is less than or equal to zero.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set the number of times the scroll is repeated, infinite loop if it is less than or equal to zero.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set the number of times the scroll is repeated, infinite loop if it is less than or equal to zero.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set the number of times the scroll is repeated, infinite loop if it is less than or equal to zero.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Set the number of times the scroll is repeated, infinite loop if it is less than or equal to zero.
   *
   * Anonymous Object Rectification.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  loop?: number;

  /**
   * Set text to scroll from the beginning or backward.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set text to scroll from the beginning or backward.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set text to scroll from the beginning or backward.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set text to scroll from the beginning or backward.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Set text to scroll from the beginning or backward.
   *
   * Anonymous Object Rectification.
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  fromStart?: boolean;

  /**
   * Text that needs scrolling.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Text that needs scrolling.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Text that needs scrolling.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Text that needs scrolling.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Text that needs scrolling.
   *
   * Anonymous Object Rectification.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  src: string;
}

/**
 * Provides the interface for the marquee attributes.
 *
 * @interface MarqueeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides the interface for the marquee attributes.
 *
 * @interface MarqueeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides the interface for the marquee attributes.
 *
 * @interface MarqueeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides the interface for the marquee attributes.
 *
 * @interface MarqueeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface MarqueeInterface {
  /**
   * Create marquee.
   *
   * @param { object } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Create marquee.
   *
   * @param { object } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Create marquee.
   *
   * @param { object } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Create marquee.
   *
   * @param { object } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Create marquee.
   *
   * Anonymous Object Rectification.
   * @param { MarqueeOptions } options - Marquee options.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  (options: MarqueeOptions): MarqueeAttribute;
}

/**
 * Declares marquee properties.
 *
 * @extends CommonMethod<MarqueeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Declares marquee properties.
 *
 * @extends CommonMethod<MarqueeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Declares marquee properties.
 *
 * @extends CommonMethod<MarqueeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Declares marquee properties.
 *
 * @extends CommonMethod<MarqueeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class MarqueeAttribute extends CommonMethod<MarqueeAttribute> {
  /**
   * Set marquee font Color.
   *
   * @param { ResourceColor } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set marquee font Color.
   *
   * @param { ResourceColor } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set marquee font Color.
   *
   * @param { ResourceColor } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set marquee font Color.
   *
   * @param { ResourceColor } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  fontColor(value: ResourceColor): MarqueeAttribute;

  /**
   * Set marquee font size.
   *
   * @param { Length } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set marquee font size.
   *
   * @param { Length } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set marquee font size.
   *
   * @param { Length } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set marquee font size.
   *
   * @param { Length } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  fontSize(value: Length): MarqueeAttribute;

  /**
   * Set marquee allow scale.
   *
   * @param { boolean } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set marquee allow scale.
   *
   * @param { boolean } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set marquee allow scale.
   *
   * @param { boolean } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set marquee allow scale.
   *
   * @param { boolean } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  allowScale(value: boolean): MarqueeAttribute;

  /**
   * Set marquee font weight.
   *
   * @param { number | FontWeight | string } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set marquee font weight.
   *
   * @param { number | FontWeight | string } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set marquee font weight.
   *
   * @param { number | FontWeight | string } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set marquee font weight.
   *
   * @param { number | FontWeight | string } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  fontWeight(value: number | FontWeight | string): MarqueeAttribute;

  /**
   * Set marquee font family.
   *
   * @param { string | Resource } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set marquee font family.
   *
   * @param { string | Resource } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set marquee font family.
   *
   * @param { string | Resource } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set marquee font family.
   *
   * @param { string | Resource } value
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  fontFamily(value: string | Resource): MarqueeAttribute;

  /**
   * Marquee scrolling strategy after text update.
   *
   * @param { MarqueeUpdateStrategy } value - The scrolling strategy after text update.
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  marqueeUpdateStrategy(value: MarqueeUpdateStrategy): MarqueeAttribute;

  /**
   * Called when scrolling starts.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when scrolling starts.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when scrolling starts.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when scrolling starts.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onStart(event: () => void): MarqueeAttribute;

  /**
   * Called when scrolling to the bottom.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when scrolling to the bottom.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when scrolling to the bottom.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when scrolling to the bottom.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onBounce(event: () => void): MarqueeAttribute;

  /**
   * Called when scrolling is complete.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when scrolling is complete.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when scrolling is complete.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when scrolling is complete.
   *
   * @param { function } event
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onFinish(event: () => void): MarqueeAttribute;
}

/**
 * Defines Marquee Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Marquee Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Marquee Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Marquee Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Marquee: MarqueeInterface;

/**
 * Defines Marquee Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Marquee Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Marquee Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Marquee Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const MarqueeInstance: MarqueeAttribute;
