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
 * Enum the icon and text layout direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SecLocationButtonLayoutDirection {
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
 * Relative position of the icon and text.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SecLocationButtonLayoutOrder {
  /**
   * Icon will be placed on the left when horizontal layout is set. Icon will be placed on the top when Vertical layout is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ICON_FIRST = 0,
  /**
   * Text will be placed on the left when horizontal layout is set. Text will be placed on the top when Vertical layout is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  TEXT_FIRST = 1
}

/**
 * Enum the icon styles.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum LocationIconStyle {
  /**
   * Icon filled with the specified color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  FULL_FILLED = 0,
  /**
   * Icon rendered as lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LINES = 1
}

/**
 * Enum the texts that can be displayed on the location button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum LocationDescription {
  /**
   * Current Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CURRENT_LOCATION = 0,

  /**
   * Add Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ADD_LOCATION = 1,

  /**
   * Select Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SELECT_LOCATION = 2,

  /**
   * Share Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SHARE_LOCATION = 3,

  /**
   * Send Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SEND_LOCATION = 4,

  /**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LOCATING = 5,

  /**
   * Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LOCATION = 6,

  /**
   * Send Current Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SEND_CURRENT_LOCATION = 7,

  /**
   * Relocation
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  RELOCATION = 8,

  /**
   * Punch In
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  PUNCH_IN = 9,

  /**
   * Current Position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CURRENT_POSITION = 10
}

/**
 * Enum the location button background types.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum BackgroundButtonType {
  /**
   * Capsule type (rounded corners default to half the height).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CAPTURE_BACKGROUND = 0,

  /**
   * Round type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CIRCLE_BACKGROUND = 1,

  /**
   * Common type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NORMAL_BACKGROUND = 2
}

/**
 * Declares the interface for setting the location button options.
 *
 * @interface SecLocationButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface SecLocationButtonOptions {
  /**
   * Style of the icon to be drawn.
   *
   * @type { ?LocationIconStyle }
   * @default LocationIconStyle.FULL_FILLED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  icon?: LocationIconStyle;

  /**
   * Text to be displayed on the icon.
   *
   * @type { ?LocationDescription }
   * @default LocationDescription.CURRENT_LOCATION
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  text?: LocationDescription;

  /**
   * Button background type.
   *
   * @type { ?BackgroundButtonType }
   * @default BackgroundButtonType.NORMAL_BACKGROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  background?: BackgroundButtonType;
}

/**
 * Enum location button click event result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SecLocationButtonOnClickResult {
  /**
   * Location button click event success.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LOCATION_BUTTON_CLICK_SUCCESS = 0,
  /**
   * Location button click event is failed because the app can not be granted with location permission.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LOCATION_BUTTON_CLICK_GRANT_FAILED = 1
}

/**
 * Defines the interface for setting a location button.
 *
 * @interface SecLocationButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
interface SecLocationButtonInterface {
  /**
   * Creates a location button.
   *
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (): LocationButtonAttribute;

  /**
   * Creates a location button with the specified composition. If an attribute is not set, the corresponding element will not be drawn.
   *
   * @param { SecLocationButtonOptions } option - options of the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (option: SecLocationButtonOptions): LocationButtonAttribute;
}

/**
 * Defines the attributes of the location button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare class LocationButtonAttribute {
  /**
   * Icon size.
   *
   * @param { Length } value - Indicates the size of the icon.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  iconSize(value: Length): LocationButtonAttribute;

  /**
   * Layout style of the icon and text.
   *
   * @param { SecLocationButtonLayoutDirection } value - Indicates the layout direction of the icon and the text.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  layoutStyle(value: SecLocationButtonLayoutDirection): LocationButtonAttribute;

  /**
   * Sets align.
   * How to align the text.
   * 
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  align(value: Alignment): LocationButtonAttribute;

  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   * Sliding direction. The enumerated values support logical AND (&) and logical OR (|).
   * 
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  direction(value: Direction): LocationButtonAttribute;

  /**
   * Position of the button.
   *
   * @param { Position } value - Indicates the position of the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  position(value: Position): LocationButtonAttribute;

  /**
   * Anchor point of the component for positioning. The top start edge of the component is used as the reference point for offset.
   *
   * @param { Position } value - Indicates the anchor point of the element when it is positioned.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  markAnchor(value: Position): LocationButtonAttribute;

  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position } value - Indicates the offset value.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offset(value: Position): LocationButtonAttribute;

  /**
   * Font size of the inner text.
   *
   * @param { Length } value - Indicates the font size of the text in the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontSize(value: Length): LocationButtonAttribute;

  /**
   * Font style of the inner text.
   *
   * @param { FontStyle } value - Indicates the font style of the text in the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontStyle(value: FontStyle): LocationButtonAttribute;

  /**
   * Font weight of the inner text.
   *
   * @param { number | FontWeight | string } value - Indicates the font weight of the text in the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontWeight(value: number | FontWeight | string): LocationButtonAttribute;

  /**
   * Font family of the inner text.
   *
   * @param { string | Resource } value - Indicates the font family of the text in the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontFamily(value: string | Resource): LocationButtonAttribute;

  /**
   * Font color of the inner text.
   *
   * @param { ResourceColor } value - Indicates the font color of the text in the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor(value: ResourceColor): LocationButtonAttribute;

  /**
   * Color of the icon.
   *
   * @param { ResourceColor } value - Indicates the icon color in the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  iconColor(value: ResourceColor): LocationButtonAttribute;

  /**
   * Background color.
   *
   * @param { ResourceColor } value - Indicates the background color of the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  backgroundColor(value: ResourceColor): LocationButtonAttribute;

  /**
   * Style of the border.
   *
   * @param { BorderStyle } value - Indicates the border style of the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderStyle(value: BorderStyle): LocationButtonAttribute;

  /**
   * Width of the border.
   *
   * @param { Length } value - Indicates the border width of the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderWidth(value: Length): LocationButtonAttribute;

  /**
   * Color of the border.
   *
   * @param { ResourceColor } value - Indicates the border color of the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderColor(value: ResourceColor): LocationButtonAttribute;

  /**
   * Border radius.
   *
   * @param { Length } value - Indicates the border radius of the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderRadius(value: Length): LocationButtonAttribute;

  /**
   * Background padding.
   *
   * @param { Padding | Length } value - Indicates the background padding of the secure location button.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  backgroundPadding(value: Padding | Length): LocationButtonAttribute;

  /**
   * Padding between the text and icon.
   *
   * @param { Length } value - Indicates the padding between the text and icon.
   * @returns { LocationButtonAttribute } The attribute of the secure location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textIconPadding(value: Length): LocationButtonAttribute;
}

/**
 * Defines a button that interacts with the security component service to request the authorization for accessing location data.
 * It's a button added to the UI that allows users to grant the application one-time authorization to access the location information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const SecLocationButton: SecLocationButtonInterface;

/**
 * Defines a location button instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const SecurityLocationInstance: LocationButtonAttribute;
