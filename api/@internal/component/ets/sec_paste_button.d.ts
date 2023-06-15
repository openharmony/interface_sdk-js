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
 * Enumerates the icon styles.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum PasteIconStyle {
  /**
   * Icon rendered as lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LINES = 0
}

/**
 * Enumerates the text that can be displayed on the paste button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum PasteDescription {
  /**
   * Paste
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  PASTE = 0
}

/**
 * Declares the interface for setting the paste button options.
 *
 * @interface SecPasteButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface SecPasteButtonOptions {
  /**
   * Style of the icon to be drawn.
   *
   * @type { ?PasteIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  icon?: PasteIconStyle;

  /**
   * Text to be displayed on the button.
   *
   * @type { ?PasteDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  text?: PasteDescription;

  /**
   * Type of the button.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  buttonType?: ButtonType;
}

/**
 * Enumerates the click event results of the paste button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SecPasteButtonOnClickResult {
  /**
   * Success.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SUCCESS = 0,

  /**
   * Failure because the application is not temporarily authorized for accessing the current pasteboard data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1
}

/**
 * Defines the interface for setting a paste button.
 *
 * @interface SecPasteButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
interface SecPasteButtonInterface {
  /**
   * Creates a paste button.
   *
   * @returns { SecPasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (): SecPasteButtonAttribute;

  /**
   * Creates a paste button with the specified composition.
   * If an attribute is not set, the corresponding element will not be drawn.
   *
   * @param { SecPasteButtonOptions } options - Indicates the options of the paste button.
   * @returns { SecPasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (options: SecPasteButtonOptions): SecPasteButtonAttribute;
}

/**
 * Defines the attributes of the paste button.
 *
 * @typedef SecPasteButtonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface SecPasteButtonAttribute extends SecurityComponentAttribute {
  /**
   * Called when the paste button is clicked.
   *
   * @param { (event: ClickEvent, result: SecPasteButtonOnClickResult) => void } event - Indicates the
   * click event result.
   * @returns { SecPasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onClick(event: (event: ClickEvent, result: SecPasteButtonOnClickResult) => void): SecPasteButtonAttribute;
}

/**
 * Defines a button that interacts with the security component service to
 * request the permission for accessing the current pasteboard data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const SecPasteButton: SecPasteButtonInterface;

/**
 * Defines a paste button instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const SecPasteButtonInstance: SecPasteButtonAttribute;
