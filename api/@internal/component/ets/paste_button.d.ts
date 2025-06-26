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

/*** if arkts 1.2 */
import { ButtonType } from './button';
import { ClickEvent } from './common';
import { SecurityComponentMethod } from './securityComponent';
import { BusinessError } from '../../@ohos.base'
/*** endif */

/**
 * Enumerates the icon styles.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enumerates the icon styles.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum PasteIconStyle {
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
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  LINES = 0
}

/**
 * Enumerates the text that can be displayed on the paste button.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enumerates the text that can be displayed on the paste button.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum PasteDescription {
  /**
   * Paste
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Paste
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  PASTE = 0
}

/**
 * Declares the interface for setting the paste button options.
 *
 * @interface PasteButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Declares the interface for setting the paste button options.
 *
 * @interface PasteButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface PasteButtonOptions {
  /**
   * Style of the icon to be drawn.
   *
   * @type { ?PasteIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Style of the icon to be drawn.
   *
   * @type { ?PasteIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  icon?: PasteIconStyle;

  /**
   * Text to be displayed on the button.
   *
   * @type { ?PasteDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Text to be displayed on the button.
   *
   * @type { ?PasteDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  text?: PasteDescription;

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
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  buttonType?: ButtonType;
}

/**
 * Enumerates the click event results of the paste button.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enumerates the click event results of the paste button.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum PasteButtonOnClickResult {
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
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  SUCCESS = 0,

  /**
   * Failure because the application is not temporarily authorized for accessing the current pasteboard data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Failure because the application is not temporarily authorized for accessing the current pasteboard data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1
}

/**
 * Defines the interface for setting a paste button.
 *
 * @interface PasteButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the interface for setting a paste button.
 *
 * @interface PasteButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PasteButtonInterface {
  /**
   * Creates a paste button.
   *
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Creates a paste button.
   *
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  (): PasteButtonAttribute;

  /**
   * Creates a paste button with the specified composition.
   * If an attribute is not set, the corresponding element will not be drawn.
   *
   * @param { PasteButtonOptions } options - Indicates the options of the paste button.
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Creates a paste button with the specified composition.
   * If an attribute is not set, the corresponding element will not be drawn.
   *
   * @param { PasteButtonOptions } options - Indicates the options of the paste button.
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  (options: PasteButtonOptions): PasteButtonAttribute;
}

/**
 * Callback function when the paste button is clicked.
 *
 * @typedef { function } PasteButtonCallback
 * @param { ClickEvent } event - The click event.
 * @param { PasteButtonOnClickResult } result - The result of click event.
 * @param { BusinessError<void> } [error] - The error code and message of click event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'18', '1.2':'20'}
 * @arkts 1.1&1.2
 */
type PasteButtonCallback = (event: ClickEvent, result: PasteButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * Defines the attributes of the paste button.
 *
 * @extends SecurityComponentMethod<PasteButtonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the attributes of the paste button.
 *
 * @extends SecurityComponentMethod<PasteButtonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class PasteButtonAttribute extends SecurityComponentMethod<PasteButtonAttribute> {
  /**
   * Called when the paste button is clicked.
   *
   * @param { function } event
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Called when the paste button is clicked.
   *
   * @param { function } event
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the paste button is clicked.
   *
   * @param { PasteButtonCallback } event
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onClick(event: PasteButtonCallback): PasteButtonAttribute;
}

/**
 * Defines a button that interacts with the security component service to
 * request the permission for accessing the current pasteboard data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines a button that interacts with the security component service to
 * request the permission for accessing the current pasteboard data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare const PasteButton: PasteButtonInterface;

/**
 * Defines a paste button instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines a paste button instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare const PasteButtonInstance: PasteButtonAttribute;
