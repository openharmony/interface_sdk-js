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
 * @file
 * @kit ArkUI
 */

/**
 * Enumerates the icon styles.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enumerates the icon styles.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 * @deprecated since 15
 */
declare enum LocationIconStyle {
  /**
   * Icon filled with the specified color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Icon filled with the specified color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  FULL_FILLED = 0,

  /**
   * Icon rendered as lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Icon rendered as lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  LINES = 1
}

/**
 * Enumerates the text that can be displayed on the location button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enumerates the text that can be displayed on the location button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 * @deprecated since 15
 */
declare enum LocationDescription {
  /**
   * Current Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Current Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  CURRENT_LOCATION = 0,

  /**
   * Add Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Add Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  ADD_LOCATION = 1,

  /**
   * Select Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Select Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  SELECT_LOCATION = 2,

  /**
   * Share Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Share Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  SHARE_LOCATION = 3,

  /**
   * Send Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Send Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  SEND_LOCATION = 4,

  /**
   * Locating
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Locating
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  LOCATING = 5,

  /**
   * Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  LOCATION = 6,

  /**
   * Send Current Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Send Current Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  SEND_CURRENT_LOCATION = 7,

  /**
   * Relocation
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Relocation
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  RELOCATION = 8,

  /**
   * Punch In
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Punch In
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  PUNCH_IN = 9,

  /**
   * Current Position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Current Position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  CURRENT_POSITION = 10
}

/**
 * Declares the interface for setting the location button options.
 *
 * @interface LocationButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Declares the interface for setting the location button options.
 *
 * @interface LocationButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 * @deprecated since 15
 */
declare interface LocationButtonOptions {
  /**
   * Style of the icon to be drawn.
   *
   * @type { ?LocationIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Style of the icon to be drawn.
   *
   * @type { ?LocationIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  icon?: LocationIconStyle;

  /**
   * Text to be displayed on the button.
   *
   * @type { ?LocationDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Text to be displayed on the button.
   *
   * @type { ?LocationDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  text?: LocationDescription;

  /**
   * Type of the button.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Type of the button.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  buttonType?: ButtonType;
}

/**
 * Enumerates the click event results of the location button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enumerates the click event results of the location button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 * @deprecated since 15
 */
declare enum LocationButtonOnClickResult {
  /**
   * Success.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Success.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  SUCCESS = 0,

  /**
   * Failure because the application is not temporarily authorized for accessing location data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Failure because the application is not temporarily authorized for accessing location data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1
}

/**
 * Defines the interface for setting a location button.
 *
 * @interface LocationButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the interface for setting a location button.
 *
 * @interface LocationButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 * @deprecated since 15
 */
interface LocationButtonInterface {
  /**
   * Creates a location button.
   *
   * @returns { LocationButtonAttribute } TReturns the attribute of the location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Creates a location button.
   *
   * @returns { LocationButtonAttribute } TReturns the attribute of the location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  (): LocationButtonAttribute;

  /**
   * Creates a location button with the specified composition.
   * If an attribute is not set, the corresponding element will not be drawn.
   *
   * @param { LocationButtonOptions } options - Indicates the options of the location button.
   * @returns { LocationButtonAttribute } Returns the attribute of the location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Creates a location button with the specified composition.
   * If an attribute is not set, the corresponding element will not be drawn.
   *
   * @param { LocationButtonOptions } options - Indicates the options of the location button.
   * @returns { LocationButtonAttribute } Returns the attribute of the location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   * @deprecated since 15
   */
  (options: LocationButtonOptions): LocationButtonAttribute;
}

/**
 * Callback function when the location button is clicked.
 *
 * @typedef { function } LocationButtonCallback
 * @param { ClickEvent } event - The click event.
 * @param { LocationButtonOnClickResult } result - The result of click event.
 * @param { BusinessError<void> } [error] - The error code and message of click event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18
 */
type LocationButtonCallback = (event: ClickEvent, result: LocationButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * Defines the attributes of the location button.
 *
 * @extends SecurityComponentMethod<LocationButtonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the attributes of the location button.
 *
 * @extends SecurityComponentMethod<LocationButtonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 * @deprecated since 15
 */
declare class LocationButtonAttribute extends SecurityComponentMethod<LocationButtonAttribute> {
  /**
   * Called when the location button is clicked.
   *
   * @param { function } event
   * @returns { LocationButtonAttribute } Returns the attribute of the location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Called when the location button is clicked.
   *
   * @param { function } event
   * @returns { LocationButtonAttribute } Returns the attribute of the location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the location button is clicked.
   *
   * @param { LocationButtonCallback } event
   * @returns { LocationButtonAttribute } Returns the attribute of the location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  onClick(event: LocationButtonCallback): LocationButtonAttribute;
}

/**
 * Defines a button that interacts with the security component service to
 * request the authorization for accessing location data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines a button that interacts with the security component service to
 * request the authorization for accessing location data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 * @deprecated since 15
 * @useinstead ohos.abilityAccessCtrl#requestPermissionsFromUser
 */
declare const LocationButton: LocationButtonInterface;

/**
 * Defines a location button instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines a location button instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 * @deprecated since 15
 */
declare const LocationButtonInstance: LocationButtonAttribute;
