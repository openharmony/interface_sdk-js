/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * Enumeration of different types of EmbeddedDpiFollowStrategy.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum EmbeddedDpiFollowStrategy {
  /**
   * Followed the host DPI.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FOLLOW_HOST_DPI = 0,

  /**
   * Followed the EmbeddedUIExtensionAbility.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}

/**
 * Enumeration of different types of EmbeddedWindowModeFollowStrategy.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum EmbeddedWindowModeFollowStrategy {
  /**
   * Followed the host Window Mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FOLLOW_HOST_WINDOW_MODE = 0,

  /**
   * Followed the EmbeddedUIExtensionAbility.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1
}

/**
 * This interface is used to set the options for EmbeddedComponentAttribute during construction
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface EmbeddedOptions {
  /**
   * Set placeholder.
   * If set placeholder ComponentContent, show placeholder node when connection is not established.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * Set Areachange placeholder.
   * If the Areachange placeholder ComponentContent is set, the placeholder node is displayed until
   * the EmbeddedComponent size change is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  areaChangePlaceholder?: Record<string, ComponentContent>;

  /**
   * Set EmbeddedComponent Content Dpi Follow Strategy.
   *
   * @default EmbeddedDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  dpiFollowStrategy?: EmbeddedDpiFollowStrategy;

  /**
   * Set EmbeddedComponent Content Window Mode Follow Strategy.
   *
   * @default EmbeddedWindowModeFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  windowModeFollowStrategy?: EmbeddedWindowModeFollowStrategy;
}

/**
 * The **EmbeddedComponent** is a component used to embed into the current page the UI provided by another
 * [EmbeddedUIExtensionAbility]{@link @ohos.app.ability.EmbeddedUIExtensionAbility:EmbeddedUIExtensionAbility} in the
 * same application. The EmbeddedUIExtensionAbility runs in an independent process for UI layout and rendering.
 *
 * It is usually used in modular development scenarios where process isolation is required.
 *
 * > **NOTE**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
interface EmbeddedComponentInterface {
  /**
   * Creates a cross-process embedded component to display the UI of the EmbeddedUIExtensionAbility with the same bundle
   * name.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } loader - EmbeddedUIExtensionAbility to load.
   * @param { EmbeddedType } type - Type of the provider.
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  (
  loader: import('../api/@ohos.app.ability.Want').default,
  type: EmbeddedType
): EmbeddedComponentAttribute;

  /**
   * Construct the EmbeddedComponent.<br/>
   * Called when the EmbeddedComponent is used.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } loader - indicates initialization parameter.
   * @param { EmbeddedType } type - indicates type of the EmbeddedComponent.
   * @param { EmbeddedOptions } [options] - construction configuration of EmbeddedComponent.
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (
  loader: import('../api/@ohos.app.ability.Want').default,
  type: EmbeddedType,
  options?: EmbeddedOptions
): EmbeddedComponentAttribute;
}

/**
 * Provides the result returned by the started **EmbeddedUIExtensionAbility**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TerminationInfo {
  /**
   * Result code returned when the EmbeddedUIExtensionAbility exits. The result code is determined by the data passed
   * when terminateSelfWithResult or terminateSelf is called.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  code: number;

  /**
   * Data returned when the EmbeddedUIExtensionAbility exits.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  want?: import('../api/@ohos.app.ability.Want').default;
}

/**
 * The [universal attributes]{@link ./common} are supported.
 *
 * Event information related to screen coordinates is converted based on the position, width, and height of the
 * **EmbeddedComponent**, before being transferred to the EmbeddedUIExtensionAbility for processing.
 *
 * Universal events, such as the [click event]{@link ./common}, are not supported. Only the following events are
 * supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare class EmbeddedComponentAttribute extends CommonMethod<EmbeddedComponentAttribute> {
  /**
   * Triggered when the the launched EmbeddedUIExtensionAbility exits normally by calling
   * [terminateSelfWithResult]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * or
   * [terminateSelf]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession#terminateSelf(callback: AsyncCallback<void>)}.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { import('../api/@ohos.base').Callback<TerminationInfo> } callback - Callback used to return the result from
   *     the EmbeddedUIExtensionAbility.
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onTerminated(callback: import('../api/@ohos.base').Callback<TerminationInfo>): EmbeddedComponentAttribute;

  /**
   * Called when an error occurs during the running of the started EmbeddedUIExtensionAbility. Through the **code**,
   * **name**, and **message** in the callback parameters, error information can be obtained and handled. For details
   * about the error codes, see [UIExtension Error Codes](docroot://reference/apis-arkui/errorcode-uiextension.md).
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { import('../api/@ohos.base').ErrorCallback } callback - Callback used to return the error information of
   *     the [BusinessError]{@link @ohos.base:BusinessError} type. The error information can be obtained and processed
   *     based on the **code**, **name**, and **message** parameters.
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onError(callback: import('../api/@ohos.base').ErrorCallback): EmbeddedComponentAttribute;

  /**
   * Callback called when the EmbeddedUIExtensionAbility draw the first frame.
   *
   * @param { Callback<void> } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onDrawReady(callback: Callback<void>): EmbeddedComponentAttribute;
}

/**
 * The **EmbeddedComponent** is a component used to embed into the current page the UI provided by another
 * [EmbeddedUIExtensionAbility]{@link @ohos.app.ability.EmbeddedUIExtensionAbility:EmbeddedUIExtensionAbility} in the
 * same application. The EmbeddedUIExtensionAbility runs in an independent process for UI layout and rendering.
 *
 * It is usually used in modular development scenarios where process isolation is required.
 *
 * > **NOTE**
 *
 * ###### Constraints
 *
 * The **EmbeddedComponent** is supported only on devices configured with multi-process permissions.
 *
 * The **EmbeddedComponent** can be used only in the UIAbility, and the EmbeddedUIExtensionAbility to start must belong
 * to the same application as the UIAbility.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const EmbeddedComponent: EmbeddedComponentInterface;

/**
 * Defines EmbeddedComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const EmbeddedComponentInstance: EmbeddedComponentAttribute;
