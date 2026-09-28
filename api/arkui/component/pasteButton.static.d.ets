/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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

import { ButtonType } from './button';
import { ClickEvent, AttributeModifier, CommonMethod } from './common';
import { SecurityComponentMethod } from './securityComponent';
import { BusinessError } from '../../@ohos.base';
import { ComponentBuilder } from './builder';

/**
 * Enumerates icon styles of the **PasteButton** component.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PasteIconStyle {
  /**
   * Line style icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LINES = 0
}

/**
 * Enumerates the text that can be displayed on the paste button.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PasteDescription {
  /**
   * Paste
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PASTE = 0
}

/**
 * Defines options for the paste button, including icon, text and button type.
 *
 * > **NOTE**
 * >
 * > - You are advised to specify at least one of **icon** or **text**.
 *
 * > - If neither **icon** nor **text** is specified, **PasteButton** is created with default styles as follows:
 * > **PasteIconStyle** defaults to **LINES**, **PasteDescription** to **PASTE**, and **ButtonType** to **Capsule**.
 *
 * > - The **icon**, **text**, and **buttonType** parameters do not support dynamic modification. Styles and properties
 * > of security components are verified by the system upon creation. Dynamic changes may cause the component to
 * > violate specifications for security components and invalidate authorization.
 *
 * @interface PasteButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PasteButtonOptions {
  /**
   * Icon style of the **PasteButton** component.
   * Default value: No icon is displayed.
   * <br>If neither **icon** nor **text** is provided, the component uses the default style.
   *
   * @type { ?PasteIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: PasteIconStyle;

  /**
   * Text on the **PasteButton** component.
   * Default value: No text description is displayed.
   * <br>If neither **text** nor **icon** is provided, the component uses the default style.
   *
   * @type { ?PasteDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: PasteDescription;

  /**
   * Shape of the **PasteButton** component.
   * Default value: ButtonType.Capsule.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  buttonType?: ButtonType;
}

/**
 * Enumerates the authorization results after the **PasteButton** component is tapped.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PasteButtonOnClickResult {
  /**
   * Authorization is successful.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SUCCESS = 0,
  /**
   * Authorization fails.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1
}

/**
 * Triggered when the **PasteButton** component is clicked.
 *
 * @param { ClickEvent } event - Click event object, which includes information such as click position, timestamp and
 *     input device.
 * @param { PasteButtonOnClickResult } result - Authorization result for clipboard access permission.
 *     <br>A return value of **SUCCESS** means temporary read permission for current clipboard content is granted,
 *     and clipboard reading operations can proceed. A return value of **TEMPORARY_AUTHORIZATION_FAILED** means the
 *     authorization failed, and you must not attempt to read clipboard content.
 * @param { BusinessError<void> } [error] - Error code and message when the component is clicked.
 *     <br>Default value: undefined.
 *     <br>Use the **result** parameter to determine the authorization status.<br>Error code 1 indicates an internal
 *     system error. Check the system status and try again.<br>Error code
 *     2 indicates property configuration errors, including but not limited to:<br>1. The font or icon size is too
 *     small.<br>2. The font or icon color is similar to the component background color.<br>3. The font or icon color is
 *     too transparent.<br>4. The padding is negative.<br>5. The component is obscured by other components or windows.
 *     <br>6. Text extends beyond the component background area.<br>7. The component exceeds the window or screen
 *      bounds.<br>8. The component size is too large.<br>9. The component text is truncated and not fully displayed.
 *     <br>10. Improper settings of some security component properties prevent the component from displaying correctly.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PasteButtonCallback 
  = (event: ClickEvent, result: PasteButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * This component can only inherit the [universal attributes of security components]{@link ./securityComponent}.
 *
 * <br>Only the following events are supported.
 *
 * @extends SecurityComponentMethod
 * @interface PasteButtonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PasteButtonAttribute extends SecurityComponentMethod {
  /**
   * Triggered when the paste button is clicked, returning the authorization result. Upon successful authorization, the
   * application obtains temporary permission to read clipboard content.
   *
   * > **NOTE**
   * > - You may want to learn the
   * > [restrictions on security component
   * styles](docroot://security/AccessToken/security-component-overview.md#constraints)
   * > to avoid authorization failures caused by incompliant styles.
   *
   * @param { PasteButtonCallback | undefined } event - Callback for the click event, used to handle the authorization
   *     result after the paste button is clicked.
   *     <br>When set to **undefined**, no callback is registered.
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onClick(event: PasteButtonCallback | undefined): this;
}

/**
 * Creates a **PasteButton** component with an icon, text, and background by default. After creation, the system
 * triggers an authorization check when the button is tapped. Upon successful authorization, the application gains
 * permission to read the current clipboard content.
 * <br>**Description**</br>
 * <ul><li>You may want to learn the
 * [restrictions on security component styles](docroot://security/AccessToken/security-component-overview.md#constraints)
 * to avoid authorization failures caused by incompliant styles.</li></ul>
 *
 * @param { PasteButtonOptions } [options] - Configuration options for the paste button, used to set properties such as
 *     icon, text and button type.
 *     <br>If this parameter is not specified, the component is created with the default style: **icon:
 *     PasteIconStyle.LINES**, **text: PasteDescription.PASTE**, and **buttonType: ButtonType.Capsule**.
 *     <br>You are advised to explicitly set at least one of **icon** or **text** to help users identify the button.
 * @returns { PasteButtonAttribute } Attributes of the paste button.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function PasteButton(
    options?: PasteButtonOptions
): PasteButtonAttribute;
