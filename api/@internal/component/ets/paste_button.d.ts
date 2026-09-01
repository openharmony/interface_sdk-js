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
 * Enumerates icon styles of the **PasteButton** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum PasteIconStyle {
  /**
   * Line style icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LINES = 0
}

/**
 * Enumerates the text that can be displayed on the paste button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum PasteDescription {
  /**
   * Paste
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface PasteButtonOptions {
  /**
   * Icon style of the **PasteButton** component.
   * Default value: No icon is displayed.
   * <br>If neither **icon** nor **text** is provided, the component uses the default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: PasteIconStyle;

  /**
   * Text on the **PasteButton** component.
   * Default value: No text description is displayed.
   * <br>If the icon is not transferred, the control is displayed in the default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  text?: PasteDescription;

  /**
   * Shape of the **PasteButton** component.
   * Default value: ButtonType.Capsule.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  buttonType?: ButtonType;
}

/**
 * Enumerates the authorization results after the **PasteButton** component is tapped.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum PasteButtonOnClickResult {
  /**
   * Authorization is successful.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SUCCESS = 0,

  /**
   * Authorization fails.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1
}

/**
 * Defines the interface for setting a paste button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface PasteButtonInterface {
  /**
   * Creates a **PasteButton** component with an icon, text, and background by default. After creation, the system
   * triggers an authorization check when the button is tapped. Upon successful authorization, the application gains
   * permission to read the current clipboard content.
   * <br>**Description**</br>
   * <ul><li>You may want to learn the [restrictions on security component styles](docroot://security/AccessToken/security-component-overview.md#constraints)
   * to avoid authorization failures caused by incompliant styles.</li></ul>
   *
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (): PasteButtonAttribute;

  /**
   * Creates a paste button with the specified icon, text and button type. After creation, the system triggers an
   * authorization check when the button is tapped. Upon successful authorization, the app gains temporary permission to
   * read the clipboard.
   * <br>**Description**</br>
   * <ul><li>You may want to learn the [restrictions on security component styles](docroot://security/AccessToken/security-component-overview.md#constraints)
   * to avoid authorization failures caused by incompliant styles.</li></ul>
   *
   * @param { PasteButtonOptions } options - Configuration options for the paste button, used to set properties such as
   *     icon, text and button type.
   *     <br>You are advised to explicitly set at least one of **icon** or **text** to help users identify the button.
   *     <br>If neither **icon** nor **text** is specified, **options** does not take effect and the button is displayed
   *     in the default style.<br>{<br>icon: PasteIconStyle.LINES,<br>text:PasteDescription.PASTE,
   *     <br>buttonType: ButtonType.Capsule <br>}.
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (options: PasteButtonOptions): PasteButtonAttribute;
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
 *     <br>Default value:undefined.
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
 * @atomicservice
 * @since 18 dynamic
 */
type PasteButtonCallback = (event: ClickEvent, result: PasteButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * This component can only inherit the [universal attributes of security components]{@link ./security_component}.
 *
 * <br>Only the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class PasteButtonAttribute extends SecurityComponentMethod<PasteButtonAttribute> {
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
   * @param { function } event - Callback for the click event, used to handle the authorization result after the paste
   *     button is clicked.
   *     <br>From API version 10 to 17, the parameter type is (event: [ClickEvent]{@link ClickEvent},
   *     result: [PasteButtonOnClickResult]{@link PasteButtonOnClickResult}) => void. [since 10 - 17].
   * @param { PasteButtonCallback } event - Callback for the click event, used to handle the authorization result after
   *     the paste button is clicked.
   *     <br>Starting from API version 18, **PasteButtonCallback** is adopted uniformly, which additionally provides
   *     error information. [since 18].
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onClick(event: PasteButtonCallback): PasteButtonAttribute;
}

/**
 * **PasteButton** is a security component that provides paste functionality. When users tap this component, the
 * application temporarily gains pasteboard read permissions.
 * <br>**Description**</br>
 * ###### Key Enums
 * <li>[PasteIconStyle]{@link PasteIconStyle}: Enumeration of icon styles for the paste button. Specifies the icon
 * style displayed.</li>
 * <li>[PasteDescription]{@link PasteDescription}: Enumeration of text descriptions for the paste button. Specifies
 * the text description displayed.</li>
 * <li>[PasteButtonOnClickResult]{@link PasteButtonOnClickResult}: Enumeration of click results for the paste
 * button. Indicates whether authorization succeeds after a click.</li>
 * ###### Key APIs
 * <li>[PasteButtonOptions]{@link PasteButtonOptions}: Configuration object for the paste button. Defines
 * properties including icon, text and button type.</li>
 * <li>[PasteButtonCallback]{@link PasteButtonCallback}: Callback for paste button clicks. Returns click events,
 * authorization results and error messages.</li>
 * ###### Child Components
 * <li>Not supported.</li></ul>
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare const PasteButton: PasteButtonInterface;

/**
 * Defines a paste button instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare const PasteButtonInstance: PasteButtonAttribute;