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
 * Enumerates the badge display positions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BadgePosition {
  /**
   * The badge is displayed in the upper right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  RightTop,

  /**
   * The badge is displayed vertically centered on the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Right,

  /**
   * The badge is displayed vertically centered on the left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Left,
}

/**
 * Defines the style of a badge, including the text color, size, font weight, badge color, and badge size.
 *
 * > **NOTE**
 * >
 * > When `borderWidth` is greater than 0 and the colors of `borderColor` and `badgeColor` are different, the badge is
 * > drawn first and then the border. Because edge pixels are anti-aliased, semi-transparent pixels are generated, and
 * > border lines in the `badgeColor` color appear at the four corners. To implement such a scenario, you are advised to
 * > use the [Text]{@link ./text} component and set [outline]{@link CommonMethod#outline(value: OutlineOptions)} instead
 * > of the Badge component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeStyle {
  /**
   * Text color.
   *
   * Default value: **Color.White**
   *
   * @default Color.White
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color?: ResourceColor;

  /**
   * Text size. The string type supports only the string form of a number value, which can carry a unit. The supported
   * units are "px", "vp", "fp", and "lpx", for example, "10" and "10fp". If no unit is carried, the default unit is "fp
   * ".
   *
   * Default value: **10vp**
   *
   * Default unit: **fp**
   *
   * Value range: greater than 0. When the value is 0, the text is not displayed. When the value is less than 0, the
   * default value is used.
   *
   * **NOTE**
   *
   * 1. Percentage is not supported. When a percentage is set, the default value is used.
   * 2. The ResourceStr type is supported since API version 20.
   *
   * @type { ?(number | string) } [since 7 - 19]
   * @type { ?(number | ResourceStr) } [since 20]
   * @default 10vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize?: number | ResourceStr;

  /**
   * Size of the badge. The string type supports only the string form of a number value, which can carry a unit. The
   * supported units are "px", "vp", "fp", and "lpx", for example, "16" and "16fp". If no unit is carried, the default
   * unit is "fp".
   *
   * Default value: **16vp**
   *
   * Default unit: **fp**
   *
   * Value range: greater than 0. When the value is 0, the badge is not displayed. When the value is less than 0, the
   * default value is used.
   *
   * **NOTE**
   *
   * 1. Percentage is not supported. When a percentage is set, the default value is used.
   * 2. The ResourceStr type is supported since API version 20.
   * 3. When **fontSize** is set and **badgeSize** is smaller than **fontSize**, **badgeSize** takes effect as **fontSize**.
   *
   * @type { ?(number | string) } [since 7 - 19]
   * @type { ?(number | ResourceStr) } [since 20]
   * @default 16vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  badgeSize?: number | ResourceStr;

  /**
   * Badge color.
   *
   * Default value: **Color.Red**
   *
   * @default Color.Red
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  badgeColor?: ResourceColor;

  /**
   * Base border color.
   *
   * Default value: **Color.Red**
   *
   * @default Color.Red
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderColor?: ResourceColor;

  /**
   * Base border width.
   *
   * Default value: **1**
   *
   * Unit: **vp**
   *
   * **NOTE**
   *
   * Percentage is not supported. When a percentage is set, the default value is used.
   *
   * @default 1vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderWidth?: Length;

  /**
   * Font weight of the text. For the number type, the value range is [100, 900] at an interval of 100. A larger value
   * indicates a heavier font weight. When a number value outside the range is set, the default value 400 is used. The
   * string type supports only the string form of a number value, for example, "400", as well as "bold", "bolder", "
   * lighter", "regular", and "medium", which correspond to the respective enum values in FontWeight.
   *
   * Default value: **FontWeight.Normal**
   *
   * **NOTE**
   *
   * Percentage is not supported. When a percentage is set, the default value is used. The ResourceStr type is supported
   * since API version 20.
   *
   * @type { ?(number | FontWeight | string) } [since 10 - 19]
   * @type { ?(number | FontWeight | ResourceStr) } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontWeight?: number | FontWeight | ResourceStr;

  /**
   * Base outer border color.
   *
   * Default value: **Color.White**
   *
   * @default Color.White
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  outerBorderColor?: ResourceColor;

  /**
   * Base outer border width.
   *
   * Default value: **0**
   *
   * Unit: **vp**
   *
   * Percentage is not supported. When a percentage is set, the default value is used.
   *
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  outerBorderWidth?: LengthMetrics;

  /**
   * Whether to avoid the badge text when it extends beyond the component.
   *
   * The value **true** means to avoid, and **false** means not to avoid.
   *
   * Default value: **false**
   *
   * **NOTE**
   *
   * 1. The avoidance effect means that the badge text extends toward the inside of the component.
   * 2. When the outer border width is greater than 0, the badge starts to extend from the inner side of the outer border.
   * 3. When **position** is set to specific coordinate values, the badge does not perform avoidance.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  enableAutoAvoidance?: boolean;
}

/**
 * Contains the basic parameters for creating a Badge component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeParam {
  /**
   * Badge display position.
   *
   * Default value: **BadgePosition.RightTop**
   *
   * **NOTE**
   *
   * When **Position** is used as an input parameter, percentage is not supported. If an invalid value is set, it is
   * processed as (0,0), which is the upper left corner of the component.
   *
   * When **BadgePosition** is used as an input parameter, the mirrored display is controlled by the
   * [Direction]{@link Direction} attribute.
   *
   * @type { ?(BadgePosition) } [since 7 - 9]
   * @type { ?(BadgePosition | Position) } [since 10]
   * @default BadgePosition.RightTop
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  position?: BadgePosition | Position;

  /**
   * Style of the **Badge** component, including the text color, size, badge color, and badge size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  style: BadgeStyle;
}

/**
 * BadgeParamWithNumber inherits from [BadgeParam]{@link BadgeParam} and has all the attributes of BadgeParam.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeParamWithNumber extends BadgeParam {
  /**
   * Number of reminder messages.
   *
   * **NOTE**
   *
   * When the value is less than or equal to 0 and less than **maxCount**, the badge is not displayed.
   *
   * Value range: [-2147483648, 2147483647]. If the value is out of range, 4294967296 is added to or subtracted from it
   * to keep it within the range. If the value is not an integer, the decimal part is discarded, for example, 5.5
   * becomes 5.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  count: number;

  /**
   * Maximum number of messages. When the number exceeds the maximum, only **maxCount+** is displayed. For example, when
   * **maxCount** is 99, `99+` is displayed.
   *
   * Default value: **99**
   *
   * Value range: [-2147483648, 2147483647]. If the value is out of range, 4294967296 is added to or subtracted from it
   * to keep it within the range. If the value is not an integer, the decimal part is discarded, for example, 5.5
   * becomes 5.
   *
   * @default 99
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxCount?: number;
}

/**
 * BadgeParamWithString inherits from [BadgeParam]{@link BadgeParam} and has all the properties of BadgeParam.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeParamWithString extends BadgeParam {
  /**
   * Text string of the prompt content.
   *
   * **NOTE**
   *
   * When **value** is an empty string, no text is displayed and only a dot badge is displayed.
   *
   * Since API version 20, the ResourceStr type is supported.
   *
   * @type { string } [since 7 - 19]
   * @type { ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  value: ResourceStr;
}

/**
 * A badge container component that can be attached to a single component for information reminders. It supports three
 * badge formats: number, string, and dot. You can customize the badge style (text color, size, badge color, and size)
 * and display position. It is suitable for scenarios where users need to be reminded of new or unread messages, such as
 * unread message counts and new feature prompts, helping users quickly identify and focus on important information and
 * improving user experience.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface BadgeInterface {
  /**
   * Creates a badge component based on a number.
   *
   * @param { BadgeParamWithNumber } value -Parameters of the number badge component, used to configure the **Badge**
   *     component created based on a number, including the message count, display position, and style.
   * @returns { BadgeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: BadgeParamWithNumber): BadgeAttribute;

  /**
   * Creates a badge component based on a string.
   *
   * @param { BadgeParamWithString } value - Parameters of the string badge component.
   * @returns { BadgeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: BadgeParamWithString): BadgeAttribute;
}

/**
 * The [universal attributes]{@link ./common} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class BadgeAttribute extends CommonMethod<BadgeAttribute> {}

/**
 * A badge container component that can be attached to a single component for information reminders. It supports three
 * badge formats: number, string, and dot. You can customize the badge style (text color, size, badge color, and size)
 * and display position. It is suitable for scenarios where users need to be reminded of new or unread messages, such as
 * unread message counts and new feature prompts, helping users quickly identify and focus on important information and
 * improving user experience.
 *
 * ###### Child Components
 *
 * This component supports only one child component.
 *
 * > **NOTE**
 * >
 * > - Child component types: system components and custom components, supporting rendering control types (
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), and
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)).
 * >
 * > - The width and height of a custom component are 0 by default. You need to set its width and height; otherwise, the
 * > badge component will not be displayed.
 * >
 * > - When there are multiple child components, only the last child component is displayed on the UI, but the state
 * > updates of the remaining child components still trigger the re-layout and re-rendering of **Badge** and all its
 * > child components.
 * >
 * > - It does not affect the layout of child components, that is, it does not actively avoid the content of child
 * > components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Badge: BadgeInterface;

/**
 * Defines Badge Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const BadgeInstance: BadgeAttribute;