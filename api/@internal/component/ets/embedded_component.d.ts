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
 * Defines the DPI follow strategy, which is used to set the DPI to follow either the host or the
 * **EmbeddedUIExtensionAbility**. For example, when the **EmbeddedUIExtensionAbility** needs to maintain visual
 * consistency with the host app, you can choose to follow the host DPI. When the
 * **EmbeddedUIExtensionAbility** needs to independently adapt to the DPI configuration of its own resources, you can
 * choose to follow the **EmbeddedUIExtensionAbility** DPI.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum EmbeddedDpiFollowStrategy {
  /**
   * The DPI follows the host.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FOLLOW_HOST_DPI = 0,

  /**
   * The DPI follows the **EmbeddedUIExtensionAbility**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}

/**
 * Defines the window mode follow strategy, which is used to set the window mode to follow either the host or the
 * **EmbeddedUIExtensionAbility**. For example, when the **EmbeddedUIExtensionAbility** needs to maintain the same
 * window mode (such as full screen or split screen) as the host app, you can choose to follow the host. When the
 * **EmbeddedUIExtensionAbility** needs to independently control the window mode, you can choose to follow the
 * **EmbeddedUIExtensionAbility**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum EmbeddedWindowModeFollowStrategy {
  /**
   * The window mode follows the host.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FOLLOW_HOST_WINDOW_MODE = 0,

  /**
   * The window mode follows the **EmbeddedUIExtensionAbility**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1
}

/**
 * Used to pass optional construction parameters when creating an **EmbeddedComponent**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface EmbeddedOptions {
  /**
   * Placeholder to display before the **EmbeddedComponent** establishes a connection with the
   * **EmbeddedUIExtensionAbility**.<br>Default value: **null**, indicating no placeholder is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * Sets the size-change placeholder, which is displayed when the size of the **EmbeddedComponent** changes and the
   * content rendering of the **EmbeddedUIExtensionAbility** is not complete. The key is the size-change scenario
   * type (for example, **"FOLD_TO_EXPAND"** indicates the fold-to-expand scenario), and the value is the placeholder
   * component for the corresponding scenario. The currently supported key includes: **FOLD_TO_EXPAND**. If an
   * unsupported key is passed in, the placeholder does not take effect. Default value: **null**, indicating that no
   * size-change placeholder is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  areaChangePlaceholder?: Record<string, ComponentContent>;

  /**
   * DPI to follow the host or the **EmbeddedUIExtensionAbility**.<br>Default value:
   * **FOLLOW_UI_EXTENSION_ABILITY_DPI**, indicating that the DPI follows the **EmbeddedUIExtensionAbility**.
   *
   * @default EmbeddedDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  dpiFollowStrategy?: EmbeddedDpiFollowStrategy;

  /**
   * Window mode to follow the host or the **EmbeddedUIExtensionAbility**.<br>Default value:
   * **FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE**, indicating that the window mode follows the
   * **EmbeddedUIExtensionAbility**.<br>**Since:** 26.0.0
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
 * **EmbeddedComponent** is used to embed, in the current page, the UI provided by an
 * [EmbeddedUIExtensionAbility]{@link @ohos.app.ability.EmbeddedUIExtensionAbility:EmbeddedUIExtensionAbility} within
 * the same app or from another app that meets cross-application permission conditions. The
 * **EmbeddedUIExtensionAbility** runs in an independent process, handling page layout and rendering.
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
   * Creates a cross-process embedded component to display the UI of the **EmbeddedUIExtensionAbility** with the same
   * bundle name or that meets cross-application permission conditions.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } loader - **EmbeddedUIExtensionAbility** to be loaded.
   * @param { EmbeddedType } type - Type of the provider. Currently, the supported value is
   *     [EmbeddedType]{@link EmbeddedType}.EMBEDDED_UI_EXTENSION, indicating that the embedded UI is provided by
   *     **EmbeddedUIExtensionAbility**.
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
   * Creates a cross-process embedded component to display the UI of the **EmbeddedUIExtensionAbility** with the same
   * bundle name or that meets cross-application permission conditions. Compared with the API in API version 12, this
   * API adds the **options** parameter for passing construction parameters.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } loader - **EmbeddedUIExtensionAbility** to load.
   * @param { EmbeddedType } type - Type of the provider. The currently supported value is
   *     [EmbeddedType]{@link EmbeddedType}.EMBEDDED_UI_EXTENSION, indicating that the embedded UI is provided by an
   *     **EmbeddedUIExtensionAbility**.
   * @param { EmbeddedOptions } [options] - Optional configuration for the embedded component, used to set the
   *     placeholder, DPI follow strategy, window mode follow strategy, and more. For details, see
   *     [EmbeddedOptions]{@link EmbeddedOptions}.
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
   * Result code returned when the pulled **EmbeddedUIExtensionAbility** exits, determined by the data passed in when
   * `terminateSelfWithResult` or `terminateSelf` is called. If the exit is through `terminateSelf`, the default
   * value of code is **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  code: number;

  /**
   * Data returned when the pulled **EmbeddedUIExtensionAbility** exits. If the exit is through `terminateSelf`, the
   * value is **undefined**.
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
 * > **NOTE**
 *
 * > The default and minimum width and height of the **EmbeddedComponent** are both 10 vp. The following width- and
 * > height-related attributes are not supported: **constraintSize**, **aspectRatio**, **layoutWeight**,
 * > **flexBasis**, **flexGrow**, and **flexShrink**.
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
   * @param { import('../api/@ohos.base').Callback<TerminationInfo> } callback - Callback used to receive the return
   *     result of **EmbeddedUIExtensionAbility**. The input parameter type is
   *     [TerminationInfo]{@link TerminationInfo}.
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
   * @param { import('../api/@ohos.base').ErrorCallback } callback - Callback used to receive error information. The
   *     input parameter type is [BusinessError]{@link @ohos.base:BusinessError}. You can obtain error information
   *     through **code**, **name**, and **message** in the parameter and handle it accordingly.
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onError(callback: import('../api/@ohos.base').ErrorCallback): EmbeddedComponentAttribute;

  /**
   * Triggered when the launched [EmbeddedUIExtensionAbility]{@link @ohos.app.ability.EmbeddedUIExtensionAbility:EmbeddedUIExtensionAbility}
   * draws its first frame.
   *
   * @param { Callback<void> } callback - Callback invoked when the first frame is drawn by the
   *     **EmbeddedUIExtensionAbility**.
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onDrawReady(callback: Callback<void>): EmbeddedComponentAttribute;
}

/**
 * **EmbeddedComponent** is used to embed, in the current page, the UI provided by an
 * [EmbeddedUIExtensionAbility]{@link @ohos.app.ability.EmbeddedUIExtensionAbility:EmbeddedUIExtensionAbility} within
 * the same app or from another app that meets cross-application permission conditions. The
 * **EmbeddedUIExtensionAbility** runs in an independent process, handling page layout and rendering.
 *
 * It is usually used in modular development scenarios where process isolation is required.
 *
 * > **NOTE**
 *
 * ###### Constraints
 *
 * The **EmbeddedComponent** is supported only on devices configured with multi-process permissions. Developers can
 * use the **canIUse** API or check system settings to determine whether the current device supports multi-process
 * permissions.
 *
 * **EmbeddedComponent** can only be used in a **UIAbility**, and by default, the launched
 * **EmbeddedUIExtensionAbility** must belong to the same app as the **UIAbility**. Since API version 26.0.0,
 * cross-application launching of the **EmbeddedUIExtensionAbility** by the **EmbeddedComponent** is allowed when all
 * of the following conditions are met:
 *
 * - The app to which the **EmbeddedComponent** belongs has applied for the
 * **ohos.permission.SUPPORT_CROSS_APP_EMBED_FOR_OA** permission (this permission can only be applied for by
 * enterprise normal apps).
 *
 * - The appIdentifier of the app is in the allowlist of apps supported by the **EmbeddedUIExtensionAbility** (that is,
 * the **appIdentifierAllowList** attribute of the extensionAbilities tag).
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
