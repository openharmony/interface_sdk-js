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
 * Defines the badge position property.
 * @since 7
 */
/**
 * Defines the badge position property.
 * @form
 * @since 9
 */
/**
 * Defines the badge position property.
 * @form
 * @crossplatform
 * @since 10
 */
declare enum BadgePosition {
  /**
   * The dot is displayed vertically centered on the right.
   * @since 7
   */
  /**
   * The dot is displayed vertically centered on the right.
   * @form
   * @since 9
   */
  /**
   * The dot is displayed vertically centered on the right.
   * @form
   * @crossplatform
   * @since 10
   */
  RightTop,

  /**
   * Dots are displayed in the upper right corner.
   * @since 7
   */
  /**
   * Dots are displayed in the upper right corner.
   * @form
   * @since 9
   */
  /**
   * Dots are displayed in the upper right corner.
   * @form
   * @crossplatform
   * @since 10
   */
  Right,

  /**
   * The dot is displayed in the left vertical center.
   * @since 7
   */
  /**
   * The dot is displayed in the left vertical center.
   * @form
   * @since 9
   */
  /**
   * The dot is displayed in the left vertical center.
   * @form
   * @crossplatform
   * @since 10
   */
  Left,
}

/**
 * BadgeStyle object
 * @since 7
 */
/**
 * BadgeStyle object
 * @form
 * @since 9
 */
/**
 * BadgeStyle object
 * @form
 * @crossplatform
 * @since 10
 */
declare interface BadgeStyle {
  /**
   * Text Color
   * @since 7
   */
  /**
   * Text Color
   * @form
   * @since 9
   */
  /**
   * Text Color
   * @form
   * @crossplatform
   * @since 10
   */
  color?: ResourceColor;

  /**
   * Text size.
   * @since 7
   */
  /**
   * Text size.
   * @form
   * @since 9
   */
  /**
   * Text size.
   * @form
   * @crossplatform
   * @since 10
   */
  fontSize?: number | string;

  /**
   * Size of a badge.
   * @since 7
   */
  /**
   * Size of a badge.
   * @form
   * @since 9
   */
  /**
   * Size of a badge.
   * @form
   * @crossplatform
   * @since 10
   */
  badgeSize?: number | string;

  /**
   * Color of the badge.
   * @since 7
   */
  /**
   * Color of the badge.
   * @form
   * @since 9
   */
  /**
   * Color of the badge.
   * @form
   * @crossplatform
   * @since 10
   */
  badgeColor?: ResourceColor;

  /**
   * Define the border color of the badge.
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the border color of the badge.
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  borderColor?: ResourceColor;

  /**
   * Define the border width of the badge.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the border width of the badge.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  borderWidth?: Length;

  /**
   * Define the font weight of the badge.
   * @type { number | FontWeight | string}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the font weight of the badge.
   * @type { number | FontWeight | string}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  fontWeight?: number | FontWeight | string;
}

/**
 * Defines the base param of badge.
 * @since 7
 */
/**
 * Defines the base param of badge.
 * @form
 * @since 9
 */
/**
 * Defines the base param of badge.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface BadgeParam {
  /**
   * Set the display position of the prompt point.
   * @since 7
   */
  /**
   * Set the display position of the prompt point.
   * @form
   * @since 9
   */
  /**
   * Set the display position of the prompt point.
   * @form
   * @crossplatform
   * @since 10
   */
  position?: BadgePosition;

  /**
   * Defines the style of the Badge component, including the text color, size, dot color, and size.
   * @since 7
   */
  /**
   * Defines the style of the Badge component, including the text color, size, dot color, and size.
   * @form
   * @since 9
   */
  /**
   * Defines the style of the Badge component, including the text color, size, dot color, and size.
   * @form
   * @crossplatform
   * @since 10
   */
  style: BadgeStyle;
}

/**
 * Defines the badge param with count and maxCount.
 * @since 7
 */
/**
 * Defines the badge param with count and maxCount.
 * @form
 * @since 9
 */
/**
 * Defines the badge param with count and maxCount.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface BadgeParamWithNumber extends BadgeParam {
  /**
   * Set the number of reminder messages.
   * @since 7
   */
  /**
   * Set the number of reminder messages.
   * @form
   * @since 9
   */
  /**
   * Set the number of reminder messages.
   * @form
   * @crossplatform
   * @since 10
   */
  count: number;

  /**
   * Maximum number of messages. If the number of messages exceeds the maximum, only maxCount+ is displayed.
   * @since 7
   */
  /**
   * Maximum number of messages. If the number of messages exceeds the maximum, only maxCount+ is displayed.
   * @form
   * @since 9
   */
  /**
   * Maximum number of messages. If the number of messages exceeds the maximum, only maxCount+ is displayed.
   * @form
   * @crossplatform
   * @since 10
   */
  maxCount?: number;
}

/**
 * Defines the badge param with string value.
 * @since 7
 */
/**
 * Defines the badge param with string value.
 * @form
 * @since 9
 */
/**
 * Defines the badge param with string value.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface BadgeParamWithString extends BadgeParam {
  /**
   * Text string of the prompt content.
   * @since 7
   */
  /**
   * Text string of the prompt content.
   * @form
   * @since 9
   */
  /**
   * Text string of the prompt content.
   * @form
   * @crossplatform
   * @since 10
   */
  value: string;
}

/**
 * Defines Badge Component.
 * @since 7
 */
/**
 * Defines Badge Component.
 * @form
 * @since 9
 */
/**
 * Defines Badge Component.
 * @form
 * @crossplatform
 * @since 10
 */
interface BadgeInterface {
  /**
   * position: Set the display position of the prompt point.
   * maxCount: Maximum number of messages. If the number of messages exceeds the maximum, only maxCount+ is displayed.
   * count: Set the number of reminder messages.
   * style: You can set the style of the Badge component, including the text color, size, dot color, and size.
   * @since 7
   */
  /**
   * position: Set the display position of the prompt point.
   * maxCount: Maximum number of messages. If the number of messages exceeds the maximum, only maxCount+ is displayed.
   * count: Set the number of reminder messages.
   * style: You can set the style of the Badge component, including the text color, size, dot color, and size.
   * @form
   * @since 9
   */
  /**
   * position: Set the display position of the prompt point.
   * maxCount: Maximum number of messages. If the number of messages exceeds the maximum, only maxCount+ is displayed.
   * count: Set the number of reminder messages.
   * style: You can set the style of the Badge component, including the text color, size, dot color, and size.
   * @form
   * @crossplatform
   * @since 10
   */
  (value: BadgeParamWithNumber): BadgeAttribute;

  /**
   * value: Text string of the prompt content.
   * position: Set the display position of the prompt point.
   * maxCount: Maximum number of messages. If the number of messages exceeds the maximum, only maxCount+ is displayed.
   * style: You can set the style of the Badge component, including the text color, size, dot color, and size.
   * @since 7
   */
  /**
   * value: Text string of the prompt content.
   * position: Set the display position of the prompt point.
   * maxCount: Maximum number of messages. If the number of messages exceeds the maximum, only maxCount+ is displayed.
   * style: You can set the style of the Badge component, including the text color, size, dot color, and size.
   * @form
   * @since 9
   */
  /**
   * value: Text string of the prompt content.
   * position: Set the display position of the prompt point.
   * maxCount: Maximum number of messages. If the number of messages exceeds the maximum, only maxCount+ is displayed.
   * style: You can set the style of the Badge component, including the text color, size, dot color, and size.
   * @form
   * @crossplatform
   * @since 10
   */
  (value: BadgeParamWithString): BadgeAttribute;
}

/**
 * Defines Badge Component attribute.
 * @since 7
 */
/**
 * Defines Badge Component attribute.
 * @form
 * @since 9
 */
/**
 * Defines Badge Component attribute.
 * @form
 * @crossplatform
 * @since 10
 */
declare class BadgeAttribute extends CommonMethod<BadgeAttribute> {}

/**
 * Defines Badge Component.
 * @since 7
 */
/**
 * Defines Badge Component.
 * @form
 * @since 9
 */
/**
 * Defines Badge Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Badge: BadgeInterface;

/**
 * Defines Badge Component instance.
 * @since 7
 */
/**
 * Defines Badge Component instance.
 * @form
 * @since 9
 */
/**
 * Defines Badge Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const BadgeInstance: BadgeAttribute;
