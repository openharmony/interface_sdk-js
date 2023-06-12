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
declare enum SaveIconStyle {
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
 * Enumerates the text that can be displayed on the save button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SaveDescription {
  /**
   * Download
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  DOWNLOAD = 0,

  /**
   * Download Files
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  DOWNLOAD_FILES = 1,

  /**
   * Save
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SAVE = 2,

  /**
   * Save Images
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SAVE_IMAGES = 3,

  /**
   * Save Files
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SAVE_FILES = 4,

  /**
   * Download and Share
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  DOWNLOAD_AND_SHARE = 5,

  /**
   * Receive
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  RECEIVE = 6,

  /**
   * Continue to Receive
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CONTINUE_TO_RECEIVE = 7
}

/**
 * Declares the interface for setting the save button options.
 *
 * @interface SecSaveButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface SecSaveButtonOptions {
  /**
   * Style of the icon to be drawn.
   *
   * @type { ?SaveIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  icon?: SaveIconStyle;

  /**
   * Text to be displayed on the button.
   *
   * @type { ?SaveDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  text?: SaveDescription;

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
 * Enumerates the click event results of the save button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SecSaveButtonOnClickResult {
  /**
   * Success.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SUCCESS = 0,

  /**
   * Failure because the application is not temporarily authorized for saving files.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1
}

/**
 * Defines the interface for setting a save button.
 *
 * @interface SecSaveButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
interface SecSaveButtonInterface {
  /**
   * Creates a save button.
   *
   * @returns { SecSaveButtonAttribute } Returns the attribute of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (): SecSaveButtonAttribute;

  /**
   * Creates a save button with the specified composition.
   * If an attribute is not set, the corresponding element will not be drawn.
   *
   * @param { SecSaveButtonOptions } options - Indicates the options of the save button.
   * @returns { SecSaveButtonAttribute } Returns the attribute of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (options: SecSaveButtonOptions): SecSaveButtonAttribute;
}

/**
 * Defines the attributes of the save button.
 *
 * @typedef SecSaveButtonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface SecSaveButtonAttribute extends SecurityComponentAttribute {
  /**
   * Called when the save button is clicked.
   *
   * @param { (event: ClickEvent, result: SecSaveButtonOnClickResult) => void } event - Indicates the
   * click event result.
   * @returns { SecSaveButtonAttribute } Returns the attribute of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onClick(event: (event: ClickEvent, result: SecSaveButtonOnClickResult) => void): SecSaveButtonAttribute;
}

/**
 * Defines a button that interacts with the security component service to
 * request the permission for saving files in the media library.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const SecSaveButton: SecSaveButtonInterface;

/**
 * Defines a save button instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const SecSaveButtonInstance: SecSaveButtonAttribute;
