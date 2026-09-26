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
import { Resource, Dimension, BorderRadiuses, SizeOptions, ResourceColor } from './units';
import { ButtonType } from './button';
import { ClickEvent, AttributeModifier, CommonMethod } from './common';
import { SecurityComponentMethod } from './securityComponent';
import { BusinessError } from '../../@ohos.base';
import { ComponentBuilder } from './builder';
import { FontWeight } from './enums';
import { SymbolRenderingStrategy } from './symbolglyph';
/**
 * Enumerates icon styles of the **SaveButton** component.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SaveIconStyle {
  /**
   * Filled style icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FULL_FILLED = 0,
  /**
   * Line style icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LINES = 1,
  /**
   * Picture-attached icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  PICTURE = 2
}
/**
 * Enumerates the text that can be displayed on the save button.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SaveDescription {
  /**
   * Download
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWNLOAD = 0,
  /**
   * Download File
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWNLOAD_FILE = 1,
  /**
   * Save
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE = 2,
  /**
   * Save Image
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE_IMAGE = 3,
  /**
   * Save File
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE_FILE = 4,
  /**
   * Download and Share
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWNLOAD_AND_SHARE = 5,
  /**
   * Receive
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RECEIVE = 6,
  /**
   * Continue to Receive
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTINUE_TO_RECEIVE = 7,
  /**
   * Save to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE_TO_GALLERY = 8,
  /**
   * Export to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EXPORT_TO_GALLERY = 9,
  /**
   * Quick save to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  QUICK_SAVE_TO_GALLERY = 10,
  /**
   * Resave to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RESAVE_TO_GALLERY = 11,

  /**
   * Save all
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE_ALL = 12
}
/**
 * Defines options for the save button, including icon, text, and button type.
 *
 * > **NOTE**
 * >
 * > - You are advised to specify at least one of **icon** or **text**.
 * >
 * > - If neither **icon** nor **text** is specified, **SaveButton** is created with default styles as follows:
 * > **SaveIconStyle** defaults to **FULL_FILLED**, **SaveDescription** to **DOWNLOAD**, and **ButtonType** to
 * > **Capsule**.
 * >
 * > - The **icon**, **text**, and **buttonType** parameters do not support dynamic modification.
 *
 * @interface SaveButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SaveButtonOptions {
  /**
   * Icon style of the **SaveButton** component.
   * <br>If this parameter is not specified, no icon is displayed. If neither **icon** nor **text** is provided, the
   * component uses the default style.
   *
   * @type { ?SaveIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: SaveIconStyle;

  /**
   * Text on the **SaveButton** component.
   * <br>If this parameter is not specified, no text is displayed. If neither **text** nor **icon** is provided, the
   * component uses the default style.
   *
   * @type { ?SaveDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: SaveDescription;

  /**
   * Background type of the **SaveButton** component.
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
 * Enumerates the authorization results after the **SaveButton** component is tapped.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SaveButtonOnClickResult {
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
  TEMPORARY_AUTHORIZATION_FAILED = 1,
  /**
   * Authorization is canceled by the user through a dialog box after the **SaveButton** component is clicked. This
   * value is returned in the callback result only when [userCancelEvent]{@link SaveButtonAttribute#userCancelEvent} is
   * triggered with its parameter set to **true**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CANCELED_BY_USER = 2
}
/**
 * Triggered when the **SaveButton** component is clicked.
 *
 * @param { ClickEvent } event - Click event object, which includes information such as click position, timestamp, and
 *     input device.
 * @param { SaveButtonOnClickResult } result - Authorization result.
 *     <br>Returns **SUCCESS** if temporary authorization is granted for the save operation, and media library APIs can
 *     be accessed. Returns **TEMPORARY_AUTHORIZATION_FAILED** if temporary authorization fails and users cannot
 *     proceed with subsequent save actions. Returns **CANCELED_BY_USER** if users manually cancel authorization in the
 *     dialog box. This result is returned only when [userCancelEvent]{@link SaveButtonAttribute#userCancelEvent} is
 *     called with its parameter set to **true**. If **userCancelEvent** is not set to **true**,
 *     **TEMPORARY_AUTHORIZATION_FAILED** is returned when users cancel authorization instead.
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
 * @since 23 static
 */
export type SaveButtonCallback 
  = (event: ClickEvent, result: SaveButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * Universal attributes are not supported. This component supports the attributes listed below, as well as
 * [universal attributes of security components]{@link ./securityComponent}. Only the following events are supported.
 *
 * @extends SecurityComponentMethod
 * @interface SaveButtonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SaveButtonAttribute extends SecurityComponentMethod {
  /**
   * Triggered when the **SaveButton** component is clicked. When a user clicks the save button for the first time, an
   * authorization dialog box is displayed. If the user allows authorization, the app obtains temporary access to media
   * library APIs. For details about the authorization duration, see the description of the
   * [SaveButton]{@link SaveButton} constructor. Authorization fails if the user declines authorization or closes the
   * dialog box.
   *
   * @param { SaveButtonCallback | undefined } event - Callback object for the click event, which carries click details,
   *     authorization result and error information.
   *     <br>When set to **undefined**, no callback is registered.
   * @returns { SaveButtonAttribute } Returns the attribute of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onClick(event: SaveButtonCallback | undefined): this;

  /**
   * Sets the icon of the **SaveButton** component.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Resource | undefined } icon - Custom icon resource information. Only data sources of the Resource type are
   *     supported.
   *     <br>Images in the following formats are supported: PNG, JPG, JPEG, BMP, SVG, WebP, GIF, and HEIF. For details
   *     about the supported image formats, see [Image]{@link ./image}. If the resource is not an image resource or the
   *     format is not supported, the icon is displayed as blank.
   *     <br>Since API version 26.0.0, data sources of the Resource type in Symbol format are supported.
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, the custom icon does not
   *     take effect and the save button uses the default style.
   *     <br>When set to **undefined**, the save button keeps the default style.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setIcon(icon: Resource | undefined): this;

  /**
   * Sets the text of the **SaveButton** component.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { string | Resource | undefined } text - Custom text, used to replace the default system text for
   *     business-specific scenarios. When a string is passed, the text content is directly used. When a Resource is
   *     passed, multi-language adaptation is implemented via resource management.
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, this setting does not
   *     take effect and the save button uses the default style.
   *     <br>When set to **undefined**, the save button keeps the default style.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setText(text: string | Resource | undefined): this;

  /**
   * Sets the icon size of the **SaveButton** component.
   *
   * @param { Dimension | SizeOptions | undefined } size - Icon size. Pixel units such as vp and px are supported.
   *     <br>The default width and height are 16 vp.<br>Percentage strings are not supported. If a percentage string is
   *     passed as a Dimension parameter, the icon will be displayed with the default size. If either the **width** or
   *     **height** property of a SizeOptions type parameter is set to a percentage string, the icon will be displayed
   *     with a size of 0 vp.
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
   *     in [ImageFit.Cover]{@link ./enums:ImageFit} mode.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconSize(size: Dimension | SizeOptions | undefined): this;

  /**
   * Sets the corner radius of the icon of the **SaveButton** component.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Dimension | BorderRadiuses | undefined } radius - Corner radius of the icon of the **SaveButton**
   *     component. You can set the radius for each of the four corners individually.
   *     <br>The default value is 0 vp for all four corners. Units such as vp and px are supported, and valid values are
   *     greater than or equal to 0. Negative values are automatically clamped to **0**.
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, the corner radius
   *     setting of the icon does not take effect.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconBorderRadius(radius: Dimension | BorderRadiuses | undefined): this;

  /**
   * Sets the press effect of the **SaveButton** component.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { boolean | undefined } enabled - Whether to enable the press effect. **true** to enable, **false**
   *     otherwise.
   *     <br>Default value: **true**.<br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON**
   *     permission, the press effect setting does not take effect.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stateEffect(enabled: boolean | undefined): this;

  /**
   * Sets the user authorization cancellation event for the **SaveButton** component. This API can be used to
   * distinguish between user cancellation and authorization failures for differentiated service logic, such as logging
   * user behaviors or prompting users to retry.
   *
   * @param { boolean | undefined } enabled - Whether to receive the user authorization cancellation event of the save
   *     button.
   *     <br>Default value: **false**.<br>The value **true** indicates that when a user manually cancels authorization
   *     in the authorization dialog box, the callback returns the result **CANCELED_BY_USER**. The value **false**
   *     indicates that user cancellation is not distinguished from other scenarios.
   *     <br/>You are advised to enable this parameter if your service needs to distinguish between user cancellation
   *     and system errors/authorization failures.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  userCancelEvent(enabled: boolean | undefined): this;

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
   * @param { Array<ResourceColor> | undefined } color - Symbol icon color of the save button. This parameter applies to
   *     scenarios where the symbol icon needs to be consistent with the service visual style.
   *     <br>Default value: varies depending on
   *     [symbolRenderingStrategy]{@link SaveButtonAttribute#symbolRenderingStrategy}.
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, the setting does not
   *     take effect.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolIconColor(color: Array<ResourceColor> | undefined): this;

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
   * @param { SymbolRenderingStrategy | undefined } strategy - Rendering strategy for the symbol icon of the save
   *     button, which defines how the symbol icon is rendered.
   *     <br>Default value: SymbolRenderingStrategy.SINGLE.
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, the setting does not
   *     take effect.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolRenderingStrategy(strategy: SymbolRenderingStrategy | undefined): this;

  /**
   * Sets the font weight of the symbol icon for the save button.
   *
   * - Before calling this method, you need to call [setIcon]{@link SaveButtonAttribute#setIcon} to configure a symbol-
   * style icon resource (i.e., **$r('sys.symbol.*xxx*')**).
   * - If no symbol icon is configured, the font weight setting will not apply.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { int | FontWeight | string | Resource | undefined } fontWeight - Symbol icon font weight of the save
   *     button.
   *     <br>For the number type: The value range is [100, 900] with an increment of 100. Larger values result in
   *     bolder font weight.
   *     <br>For the string type: The value can be a numeric string of the number type (for example, **"400"**) or a
   *     lowercase string of the enumerated value of [FontWeight]{@link FontWeight} (for example, **"normal"**).
   *     <br>Default value: **FontWeight.Normal** (the corresponding value is **400**)
   *     <br>If the app does not have the **ohos.permission.CUSTOMIZE_SAVE_BUTTON** permission, the setting does not
   *     take effect.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolFontWeight(fontWeight: int | FontWeight | string | Resource | undefined): this;
}


/**
 * Creates a **SaveButton** component with an icon, text, and background. When the user taps the save button for the
 * first time, a dialog will pop up. Once the user grants permission, the app obtains temporary authorization to
 * access media library APIs. No dialog box will appear for subsequent uses.
 * <br>Authorization remains valid for 1 minute. After authorization expires, existing file handles acquired during
 * the valid period remain available for read and write operations.
 * <br>**Description**</br>
 * <ul><li>You may want to learn the [restrictions on security component
 * styles](docroot://security/AccessToken/security-component-overview.md#constraints) to avoid authorization failures
 * caused by incompliant styles.</li></ul>
 *
 * @param { SaveButtonOptions } [options] - Configuration options for the save button, used to set properties such as
 *     icon, text and button type.
 *     <br>If this parameter is not specified, the component is created with the default style: **icon:
 *     SaveIconStyle.FULL_FILLED**, **text: SaveDescription.DOWNLOAD**, and **buttonType: ButtonType.Capsule**.
 *     <br>You are advised to explicitly set at least one of **icon** and **text** to help users identify the button.
 * @returns { SaveButtonAttribute } Attributes of the save button.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function SaveButton(
    options?: SaveButtonOptions 
): SaveButtonAttribute
