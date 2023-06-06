/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * Enumerates the layout direction of the icon and text.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SecurityComponentLayoutDirection {
  /**
   * Horizontal layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  HORIZONTAL = 0,

  /**
   * Vertical layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  VERTICAL = 1
}

/**
 * Enumerates the relative position of the icon and text.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SecurityComponentLayoutOrder {
  /**
   * The icon will be placed on the left in horizontal layout and on the top in vertical layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ICON_FIRST = 0,

  /**
   * The text will be placed on the left in horizontal layout and on the top in vertical layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  TEXT_FIRST = 1
}

/**
 * Defines the attributes of a security component.
 *
 * @typedef SecurityComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface SecurityComponentAttribute {
  /**
   * Icon size.
   *
   * @param { Length } value - Indicates the size of the icon.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  iconSize(value: Length): SecurityComponentAttribute;

  /**
   * Layout direction of the icon and text.
   *
   * @param { SecurityComponentLayoutDirection } value - Indicates the layout direction of the icon and text.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  layoutDirection(value: SecurityComponentLayoutDirection): SecurityComponentAttribute;

  /**
   * Layout order of the icon and text.
   *
   * @param { SecurityComponentLayoutOrder } value - Indicates the layout order of the icon and text.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  layoutOrder(value: SecurityComponentLayoutOrder): SecurityComponentAttribute;

  /**
   * Position of the security component.
   *
   * @param { Position } value - Indicates the position of the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  position(value: Position): SecurityComponentAttribute;

  /**
   * Anchor of the security component for positioning. The top start edge of the component is used as
   * the reference point for offset.
   *
   * @param { Position } value - Indicates the anchor of the component when it is positioned.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  markAnchor(value: Position): SecurityComponentAttribute;

  /**
   * Coordinate offset relative to the layout position.
   * Setting this attribute does not affect the layout of the parent container.
   * The position is adjusted only during drawing.
   *
   * @param { Position } value - Indicates the offset value.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offset(value: Position): SecurityComponentAttribute;

  /**
   * Font size of the inner text.
   *
   * @param { Length } value - Indicates the font size of the text in the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontSize(value: Length): SecurityComponentAttribute;

  /**
   * Font style of the inner text.
   *
   * @param { FontStyle } value - Indicates the font style of the text in the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontStyle(value: FontStyle): SecurityComponentAttribute;

  /**
   * Font weight of the inner text.
   *
   * @param { number | FontWeight | string } value - Indicates the font weight of the text in the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontWeight(value: number | FontWeight | string): SecurityComponentAttribute;

  /**
   * Font family of the inner text.
   *
   * @param { string | Resource } value - Indicates the font family of the text in the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontFamily(value: string | Resource): SecurityComponentAttribute;

  /**
   * Font color of the inner text.
   *
   * @param { ResourceColor } value - Indicates the font color of the text in the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor(value: ResourceColor): SecurityComponentAttribute;

  /**
   * Color of the icon.
   *
   * @param { ResourceColor } value - Indicates the icon color in the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  iconColor(value: ResourceColor): SecurityComponentAttribute;

  /**
   * Background color.
   *
   * @param { ResourceColor } value - Indicates the background color of the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  backgroundColor(value: ResourceColor): SecurityComponentAttribute;

  /**
   * Style of the border.
   *
   * @param { BorderStyle } value - Indicates the border style of the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderStyle(value: BorderStyle): SecurityComponentAttribute;

  /**
   * Width of the border.
   *
   * @param { Length } value - Indicates the border width of the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderWidth(value: Length): SecurityComponentAttribute;

  /**
   * Color of the border.
   *
   * @param { ResourceColor } value - Indicates the border color of the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderColor(value: ResourceColor): SecurityComponentAttribute;

  /**
   * Radius of the border.
   *
   * @param { Length } value - Indicates the border radius of the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderRadius(value: Length): SecurityComponentAttribute;

  /**
   * Padding between the background border and icon/inner text.
   *
   * @param { Padding | Length } value - Indicates the padding of the security component.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  padding(value: Padding | Length): SecurityComponentAttribute;

  /**
   * Space between the inner text and icon.
   *
   * @param { Length } value - Indicates the space between the inner text and icon.
   * @returns { SecurityComponentAttribute } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textIconSpace(value: Length): SecurityComponentAttribute;
}

/**
 * Defines a security component instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const SecurityComponentInstance: SecurityComponentAttribute;
