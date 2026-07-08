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
 * Enumerates icon styles of the **SaveButton** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SaveIconStyle {
  /**
   * Filled style icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  FULL_FILLED = 0,

  /**
   * Line style icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LINES = 1,

  /**
   * Picture-attached icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  PICTURE = 2
}

/**
 * Enumerates the text that can be displayed on the save button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SaveDescription {
  /**
   * Download
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DOWNLOAD = 0,

  /**
   * Download File
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DOWNLOAD_FILE = 1,

  /**
   * Save
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SAVE = 2,

  /**
   * Save Image
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SAVE_IMAGE = 3,

  /**
   * Save File
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SAVE_FILE = 4,

  /**
   * Download and Share
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DOWNLOAD_AND_SHARE = 5,

  /**
   * Receive
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RECEIVE = 6,

  /**
   * Continue to Receive
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CONTINUE_TO_RECEIVE = 7,

  /**
   * Save to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  SAVE_TO_GALLERY = 8,

  /**
   * Export to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  EXPORT_TO_GALLERY = 9,

  /**
   * Quick save to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  QUICK_SAVE_TO_GALLERY = 10,

  /**
   * Resave to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  RESAVE_TO_GALLERY = 11,

  /**
   * Save all
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  SAVE_ALL = 12
}

/**
 * Defines options for the save button, including icon, text, and button type.
 *
 * > **NOTE**
 * >
 * > - You are advised to specify at least one of **icon** or **text**.
 * > - If neither **icon** nor **text** is specified, **SaveButton** is created with default styles as follows:
 * > **SaveIconStyle** defaults to **FULL_FILLED**, **SaveDescription** to **DOWNLOAD**, and **ButtonType** to
 * > **Capsule**.
 * >
 * > - The **icon**, **text**, and **buttonType** parameters do not support dynamic modification.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SaveButtonOptions {
  /**
   * Icon style of the **SaveButton** component.
   * <br>If this parameter is not specified, no icon is displayed. If neither **icon** nor **text** is provided, the
   * component uses the default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: SaveIconStyle;

  /**
   * Text on the **SaveButton** component.
   * <br>If this parameter is not specified, no text is displayed. If neither **text** nor **icon** is provided, the
   * component uses the default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  text?: SaveDescription;

  /**
   * Background type of the **SaveButton** component.
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
 * Enumerates the authorization results after the **SaveButton** component is tapped.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SaveButtonOnClickResult {
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
  TEMPORARY_AUTHORIZATION_FAILED = 1,

  /**
   * Authorization is canceled by the user through a dialog box after the **SaveButton** component is clicked. This
   * value is returned in the callback result only when [userCancelEvent]{@link SaveButtonAttribute#userCancelEvent} is
   * triggered with its parameter set to **true**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   */
  CANCELED_BY_USER = 2
}

/**
 * Defines the interface for setting a save button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface SaveButtonInterface {
  /**
   * Creates a **SaveButton** component with an icon, text, and background. When the user taps the save button for the
   * first time, a dialog will pop up. Once the user grants permission, the app obtains temporary authorization to
   * access media library APIs. No dialog box will appear for subsequent uses.
   * <br>In API version 19 or earlier, authorization remains valid for 10 seconds. After authorization expires, existing
   * file handles acquired during the valid period remain available for read and write operations.
   * <br>In API version 20 or later, authorization remains valid for 1 minute. After authorization expires, existing
   * file handles acquired during the valid period remain available for read and write operations.
   * <br>**Description**</br>
   * <ul><li>You may want to learn the [restrictions on security component
   * styles](docroot://security/AccessToken/security-component-overview.md#constraints) to avoid authorization failures
   * caused by incompliant styles.</li></ul>
   *
   * @returns { SaveButtonAttribute } Returns the attribute of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (): SaveButtonAttribute;

  /**
   * Creates a save button with the specified icon, text and button type. When the user taps the save button for the
   * first time, a dialog will pop up. Once the user grants permission, the app obtains temporary authorization to
   * access media library APIs. No dialog box will appear for subsequent uses.
   * <br>In API version 19 or earlier, authorization remains valid for 10 seconds. After authorization expires, existing
   * file handles acquired during the valid period remain available for read and write operations.
   * <br>In API version 20 or later, authorization remains valid for 1 minute. After authorization expires, existing
   * file handles acquired during the valid period remain available for read and write operations.
   * <br>**Description**</br>
   * <ul><li>You may want to learn the
   * [restrictions on security
   * component styles](docroot://security/AccessToken/security-component-overview.md#constraints)
   * to avoid authorization failures caused by incompliant styles.</li></ul>
   *
   * @param { SaveButtonOptions } options - Configuration options for the save button, used to set properties such as
   *     icon, text and button type.
   *     <br>You are advised to explicitly set at least one of **icon** and **text** to help users identify the button.
   *     If both are not specified, the component uses the default style.
   * @returns { SaveButtonAttribute } Returns the attribute of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (options: SaveButtonOptions): SaveButtonAttribute;
}

/**
 * Triggered when the **SaveButton** component is clicked.
 *
 * @param { ClickEvent } event - Click event object, which includes information such as click position, timestamp, and
 *     input device.
 * @param { SaveButtonOnClickResult } result - Authorization result.
 *     <br>Returns **SUCCESS** if temporary authorization is
 *     granted for the save operation, and media library APIs can be accessed. Returns
 *     **TEMPORARY_AUTHORIZATION_FAILED** if temporary authorization fails and users cannot proceed with subsequent save
 *     actions. Returns **CANCELED_BY_USER** if users manually cancel authorization in the dialog box. This result is
 *     returned only when [userCancelEvent]{@link SaveButtonAttribute#userCancelEvent} is called with its parameter set
 *     to **true**. If **userCancelEvent** is not set to **true**, **TEMPORARY_AUTHORIZATION_FAILED** is returned when
 *     users cancel authorization instead.
 * @param { BusinessError<void> } [error] - Error code and message when the component is clicked. If this parameter is
 *     not specified, the value is **undefined**. Use the **result** parameter to determine the authorization status.
 *     <br>
 *     Error code 1 indicates an internal system error. Possible causes and solutions are as follows:
 *     <br>1. Inter-Process Communication (IPC) failure. Check the system status and try again.
 *     <br>2. Failed to display the security component dialog box. Check whether the save button is blocked or complies
 *     with style constraints for security components. Correct the issues and retry.
 *     <br>Error code 2 indicates invalid property settings. Possible causes are as follows:
 *     <br>1. The font or icon size is too small.
 *     <br>2. The font or icon color is too similar to the background color.
 *     <br>3. The font or icon color is too transparent.
 *     <br>4. The padding is negative.
 *     <br>5. The component is obscured by other components or windows.
 *     <br>6. Text extends beyond the component background area.
 *     <br>7. The component exceeds the window or screen bounds.
 *     <br>8. The component size is too large.
 *     <br>9. The component text is truncated and not fully displayed.
 *     <br>10. Other improper property settings affect the display of the security component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
type SaveButtonCallback = (event: ClickEvent, result: SaveButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * Universal attributes are not supported. This component supports the attributes listed below, as well as
 * [universal attributes of security components]{@link ./security_component}. Only the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class SaveButtonAttribute extends SecurityComponentMethod<SaveButtonAttribute> {
  /**
   * Triggered when the **SaveButton** component is clicked. When a user clicks the save button for the first time, an
   * authorization dialog box is displayed. If the user allows authorization, the app obtains temporary access to media
   * library APIs. For details about the authorization duration, see the description of the
   * [SaveButton](docroot://reference/apis-arkui/arkui-ts/ts-security-components-savebutton.md#savebutton-1)
   * constructor. Authorization fails if the user declines authorization or closes the dialog box.
   *
   * @param { function } event - Callback object for the click event, which carries click details, authorization result
   *     and error information.
   *     <br>From API version 10 to 17, the parameter type is (event: [ClickEvent]{@link ClickEvent},
   *     result: [SaveButtonOnClickResult]{@link SaveButtonOnClickResult}) => void. [since 10 - 17].
   * @param { SaveButtonCallback } event - Callback object for the click event, which carries click details,
   *     authorization result and error information.
   *     <br>Starting from API version 18, **SaveButtonCallback** is adopted
   *     uniformly, which additionally provides error information. [since 18].
   * @returns { SaveButtonAttribute } Returns the attribute of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onClick(event: SaveButtonCallback): SaveButtonAttribute;

  /**
   * Sets the icon of the **SaveButton** component.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Resource } icon - Custom icon resource information. Only data sources of the Resource type are supported.
   *     <br>Images in the following formats are supported: PNG, JPG, JPEG, BMP, SVG, WebP, GIF, and HEIF. For details
   *     about the supported image formats, see [Image]{@link ./image}. If the resource is not an image resource or the
   *     format is not supported, the icon is displayed as blank.
   *     <br>Since API version 26.0.0, data sources of the Resource type in Symbol format are supported.
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, the custom icon does not
   *     take effect and the save button uses the default style.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  setIcon(icon: Resource): SaveButtonAttribute;

  /**
   * Sets the text of the **SaveButton** component.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { string | Resource } text - Custom text, used to replace the default system text for business-specific
   *     scenarios. When a string is passed, the text content is directly used. When a Resource is passed, multi-
   *     language adaptation is implemented via resource management.
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, this setting does not
   *     take effect and the save button uses the default style.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  setText(text: string | Resource): SaveButtonAttribute;

  /**
   * Sets the icon size of the **SaveButton** component.
   *
   * @param { Dimension | SizeOptions } size - Icon size. Pixel units such as vp and px are supported.
   *     <br>The default width and height are 16 vp.<br>Percentage strings are not supported. If a percentage string is
   *     passed as a Dimension parameter, the icon
   *     will be displayed with the default size. If either the **width** or **height** property of a SizeOptions type
   *     parameter is set to a percentage string, the icon will be displayed with a size of 0 vp.
   *     <br>For the system icons provided by the **SaveButton** component:
   *     <br>- Dimension type: Width and height are both set to the specified value.
   *     <br>- SizeOptions type: If width and height are different, the smaller value is used for both. If only one
   *     value is specified, it applies to both dimensions. This rule ensures square display and consistent visual
   *     appearance of system icons.
   *     <br>For custom icons:
   *     <br>- Dimension type: Width and height are both set to the specified value.
   *     <br>- SizeOptions type: It is recommended that you set both width and height explicitly; if only one value is
   *     set, it applies to both dimensions. Custom icons support flexible sizing to adapt to different image aspect
   *     ratios.
   *     <br>- If the specified size's aspect ratio does not match the custom icon's original ratio, the icon displays
   *     in [ImageFit.Cover]{@link ImageFit} mode.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  iconSize(size: Dimension | SizeOptions): SaveButtonAttribute;

  /**
   * Sets the corner radius of the **SaveButton** component.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Dimension | BorderRadiuses } radius - Corner radius of the **SaveButton** component. You can set the
   *     radius for each of the four corners individually.
   *     <br>The default value is 0 vp for all four corners. Units such as vp and px are supported, and valid values are
   *     greater than or equal to 0. Negative values are automatically clamped to **0**.
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, the corner radius
   *     setting of the icon does not take effect.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  iconBorderRadius(radius: Dimension | BorderRadiuses): SaveButtonAttribute;

  /**
   * Sets the press effect of the **SaveButton** component.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { boolean } enabled - Whether to enable the press effect. **true** to enable, **false** otherwise.
   *     <br>Default value: **false**.<br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON**
   *     permission, the press effect setting does not take effect.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  stateEffect(enabled: boolean): SaveButtonAttribute;

  /**
   * Sets the user authorization cancellation event for the **SaveButton** component. This API can be used to
   * distinguish between user cancellation and authorization failures for differentiated service logic, such as logging
   * user behaviors or prompting users to retry.
   *
   * @param { boolean } enabled - Whether to receive the user authorization cancellation event of the save button.
   *     <br>Default value: **false**.<br>The value **true** indicates that when a user manually cancels authorization in
   *     the authorization dialog box, the callback returns the result **CANCELED_BY_USER**. The value **false** indicates
   *     that user cancellation is not distinguished from other scenarios.
   *     <br/>You are advised to enable this parameter if your service needs to distinguish between user cancellation and
   *     system errors/authorization failures.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 21 dynamic
   */
  userCancelEvent(enabled: boolean): SaveButtonAttribute;
  /**
   * Sets the color of the symbol icon for the save button.
   *
   * - Before calling this method, you need to call [setIcon]{@link SaveButtonAttribute#setIcon} to configure a symbol-
   * style icon resource (i.e., **$r('sys.symbol.xxx')**).
   * - If no symbol icon is set, the color set via this method does not take effect.
   * - It is recommended that you use this API together with
   * [symbolRenderingStrategy]{@link SaveButtonAttribute#symbolRenderingStrategy} to achieve different rendering
   * effects.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Array<ResourceColor> } color - Symbol icon color of the save button. This parameter applies to scenarios
   *     where the symbol icon needs to be consistent with the service visual style.
   *     <br>Default value: varies depending on
   *     [symbolRenderingStrategy]{@link SaveButtonAttribute#symbolRenderingStrategy}.
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, the setting does not
   *     take effect.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolIconColor(color: Array<ResourceColor>): SaveButtonAttribute;

  /**
   * Sets the rendering strategy for the symbol icon of the save button.
   *
   * - Before calling this method, you need to call [setIcon]{@link SaveButtonAttribute#setIcon} to configure a symbol-
   * style icon resource (i.e., **$r('sys.symbol.*xxx*')**).
   * - The configured rendering strategy will not apply if no symbol icon is set.
   * - When this parameter is used together with [symbolIconColor]{@link SaveButtonAttribute#symbolIconColor}, the
   * rendering strategy determines how the color array is applied.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { SymbolRenderingStrategy } strategy - Rendering strategy for the symbol icon of the save button, which
   *     defines how the symbol icon is rendered.
   *     <br>Default value: SymbolRenderingStrategy.SINGLE.
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, the setting does not
   *     take effect.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolRenderingStrategy(strategy: SymbolRenderingStrategy): SaveButtonAttribute;

  /**
   * Sets the font weight of the symbol icon for the save button.
   *
   * - Before calling this method, you need to call [setIcon]{@link SaveButtonAttribute#setIcon} to configure a symbol-
   * style icon resource (i.e., **$r('sys.symbol.*xxx*')**).
   * - If no symbol icon is configured, the font weight setting will not apply.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { number | FontWeight | string | Resource } fontWeight - Symbol icon font weight of the save button.
   *     <br>For the number type: The value range is [100, 900] with an increment of 100. Larger values result in bolder
   *     font weight.
   *     <br>For the string type: The value can be a numeric string of the number type (for example, **"400"**) or a
   *     lowercase string of the enumerated value of [FontWeight]{@link FontWeight} (for example, **"normal"**).
   *     <br>Default value: **FontWeight.Normal** (the corresponding value is **400**)
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, the setting does not
   *     take effect.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolFontWeight(fontWeight: number | FontWeight | string | Resource): SaveButtonAttribute;
}

/**
 * **SaveButton** is a system API for the save security control. It applies to scenarios where apps need temporary media
 * library access permissions to save images or videos, such as saving images to albums and exporting media content.
 * After the **SaveButton** component is integrated into an app, a confirmation dialog will appear when the user taps
 * the component for the first time. If the user allows access, the app obtains temporary authorization to call media
 * library APIs. For related APIs, see
 * [Interface (PhotoAccessHelper)]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper}. If the user
 * denies access or dismisses the dialog, authorization will not be granted for this operation. No more dialog box is
 * displayed for authorization.
 * <br>
 * For API version 19 and earlier, the authorization duration is 10 seconds. For API version 20 and later, the
 * authorization duration is 1 minute.
 * You need to call media library APIs to obtain file handles and complete temporary-authorized operations such as
 * creating media resources within the authorization period. After authorization expires, existing file handles acquired
 * during the valid period remain available for read and write operations.
 * <br>**Description**</br>
 * ###### Key Enums
 * <li>[SaveIconStyle]{@link SaveIconStyle}: Enumeration of icon styles for the save button. Specifies the icon
 * style displayed.</li>
 * <li>[SaveDescription]{@link SaveDescription}: Enumeration of text descriptions for the save button. Specifies the
 * text description displayed.</li>
 * <li>[SaveButtonOnClickResult]{@link SaveButtonOnClickResult}: Enumeration of click results for the save button.
 * Indicates whether authorization succeeds after a click.</li>
 * ###### Key APIs
 * <li>[SaveButtonOptions]{@link SaveButtonOptions}: Configuration object for the save button. Defines properties
 * including icon, text and button type.</li>
 * <li>[SaveButtonCallback]{@link SaveButtonCallback}: Callback for save button clicks. Returns click events,
 * authorization results and error messages.</li>
 * ###### Child Components
 * <li>Not supported.</li></ul>
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare const SaveButton: SaveButtonInterface;

/**
 * Defines a save button instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare const SaveButtonInstance: SaveButtonAttribute;