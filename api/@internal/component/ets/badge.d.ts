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
 * Enumerates the display positions of a badge.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BadgePosition {

  /**
   * The badge is displayed in the upper right corner of the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  RightTop,

  /**
   * The badge is vertically centered on the right of the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Right,

  /**
   * The badge is vertically centered on the left of the parent component.
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
 * Describes the badge style. It includes the font color, font size, badge color, badge size, etc.
 *
 * > **NOTE**
 * >
 * > - When **borderWidth** is set to a value greater than 0 and **borderColor** is different from **badgeColor**, the
 * > badge is drawn before the border. Edge pixels are anti-aliased, which produces semi-transparent pixels. This causes
 * > the border in **badgeColor** to become visible at the four corners. To implement related scenarios, it is
 * > recommended that you use the [Text]{@link text} component with its 
 * > [outline]{@link CommonMethod#outline(value: OutlineOptions)} attribute instead of the **Badge** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeStyle {

  /**
   * Font color.
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
   * Font size. The value of this parameter is a string of the number type. The unit can be px, vp, fp, or lpx, for
   * example, 10 or 10fp. If no unit is specified, fp is used by default.
   *
   * Default value: **10vp**
   *
   * Default unit: fp
   *
   * The value must be greater than 0. If the value is **0**, the text is not displayed. If the value is less than 0,
   * the default value is used.
   *
   * **NOTE**
   *
   * 1. Percentage values are not supported. If a percentage value is set, the default value is used.
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
   * Badge size. The value of this parameter is a string of the number type. The unit can be px, vp, fp, or lpx, for
   * example, 10 or 16fp. If no unit is specified, fp is used by default. If the value is **0**, the badge is not
   * displayed.
   *
   * Unit: fp. Default value: **16vp**.
   *
   * **NOTE**
   *
   * 1. Percentage values are not supported. If a percentage value is set, the default value is used.
   * 2. If **fontSize** is set and **badgeSize** is smaller than fontSize, **badgeSize** will take effect based on the
   * value of **fontSize**.
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
   * Color of the background border.
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
   * Width of the background border.
   *
   * Default value: **1**
   *
   * Unit: vp
   *
   * **NOTE**
   *
   * Percentage values are not supported. If a percentage value is set, the default value is used.
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
   * Font weight of the text. For the number type, the value ranges from 100 to 900, at an interval of 100. A larger
   * value indicates a bolder font. For the number type, if the value is not within the range, the default value **400**
   * is used. For the string type, only strings that represent a number, for example, **400**, and the following
   * enumerated values of **FontWeight** are supported: **bold**, **bolder**, **lighter**, **regular**, and **medium**.
   *
   * Default value: **FontWeight.Normal**
   *
   * **NOTE**
   *
   * Percentage values are not supported. If a percentage value is set, the default value is used. The ResourceStr type
   * is supported since API version 20.
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
   * Color of the background outer border.
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
   * Width of the background outer border.
   *
   * Default value: **0**.
   *
   * Unit: vp
   *
   * Percentage values are not supported. If a percentage value is set, the default value is used.
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
   * Whether to enable avoidance when the badge text is extended.
   *
   * The value **true** means to enable avoidance, and **false** means the opposite.
   *
   * Default value: **false**.
   *
   * **NOTE**
   *
   * 1. The avoidance effect is that the badge text is extended to the inside of the component.
   * 2. When the width of the outer border is greater than 0, the extension start point of the badge is the inner side
   * of the outer border.
   * 3. When position is set to a specific coordinate value, the badge does not perform avoidance.
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
 * Provides basic parameters for creating a badge.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeParam {

  /**
   * Position to display the badge relative to the parent component.
   *
   * Default value: **BadgePosition.RightTop**
   *
   * **NOTE**
   *
   * With the **Position** type, percentage values are not supported. If an invalid value is set, the default value
   * **(0,0)**, which indicates the upper left corner of the component, will be used.
   *
   * With the **BadgePosition** type, the position is mirrored based on the [Direction]{@link Direction} property.
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
   * Style of the badge, including the font color, font size, badge color, and badge size.
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
 * Inherits from [BadgeParam]{@link BadgeParam} and has all attributes of **BadgeParam**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeParamWithNumber extends BadgeParam {

  /**
   * Number of notifications.
   *
   * **NOTE**
   *
   * If the value is less than or equal to 0 and less than the value of **maxCount**, no badge is displayed.
   *
   * Value range: [-2147483648, 2147483647]. If the value is out of the range, 4294967296 is added or subtracted so that
   * the value is within the range. If the value is not an integer, it is rounded off to the nearest integer. For
   * example, 5.5 is rounded off to 5.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  count: number;

  /**
   * Maximum number of messages. If the number of messages exceeds the maximum, only **maxCount+** is displayed. For
   * example, if **maxCount** is 99, **99+** is displayed.
   *
   * Default value: **99**
   *
   * Value range: [-2147483648, 2147483647]. If the value is out of the range, 4294967296 is added or subtracted so that
   * the value is within the range. If the value is not an integer, it is rounded off to the nearest integer. For
   * example, 5.5 is rounded off to 5.
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
 * Inherits from [BadgeParam]{@link BadgeParam} and has all attributes of **BadgeParam**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeParamWithString extends BadgeParam {

  /**
   * Text string of the badge content.
   *
   * **NOTE**
   *
   * The ResourceStr type is supported since API version 20.
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
 * The **Badge** component is a container that can be attached to another component for notification and reminder
 * purposes.
 *
 * ###### Child Components
 *
 * This component supports only one child component.
 *
 * > **NOTE**
 * >
 * > - Allowed child component types: built-in and custom components, including rendering control types (
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md), [ForEach]{@link for_each}, and
 * > [LazyForEach]{@link lazy_for_each}).
 * >
 * > - A custom component defaults to a width and height of 0. You must explicitly set its width and height; otherwise,
 * > the **Badge** component will not be displayed.
 * >
 * > - When there are multiple child components, only the last child component is displayed on the UI. However, the
 * > status update of other child components will still cause the badge and its child components to be re-rendered.
 * >
 * > - Child component layout is independent and does not automatically adjust to avoid overlapping with the badge.
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
   * Creates a badge with the given numerical value.
   *
   * @param { BadgeParamWithNumber } value - Options of the numeric badge.
   * @returns { BadgeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: BadgeParamWithNumber): BadgeAttribute;

  /**
   * Creates a badge with the given string.
   *
   * @param { BadgeParamWithString } value - Options of the string-type badge.
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
 * The [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md) are supported.
 *
 * The [universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md) are supported.
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
 * The **Badge** component is a container that can be attached to another component for notification and reminder
 * purposes.
 *
 * ###### Child Components
 *
 * This component supports only one child component.
 *
 * > **NOTE**
 * >
 * > - Allowed child component types: built-in and custom components, including rendering control types (
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md), [ForEach]{@link for_each}, and
 * > [LazyForEach]{@link lazy_for_each}).
 * >
 * > - A custom component defaults to a width and height of 0. You must explicitly set its width and height; otherwise,
 * > the **Badge** component will not be displayed.
 * >
 * > - When there are multiple child components, only the last child component is displayed on the UI. However, the
 * > status update of other child components will still cause the badge and its child components to be re-rendered.
 * >
 * > - Child component layout is independent and does not automatically adjust to avoid overlapping with the badge.
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