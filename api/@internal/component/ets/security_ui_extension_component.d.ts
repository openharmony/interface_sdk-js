/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file System API
 * @kit ArkUI
 */

/**
 * Defines the enum of the resolution following strategy for **SecurityUIExtensionComponent**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum SecurityDpiFollowStrategy {
  /**
   * The resolution follows the host application.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FOLLOW_HOST_DPI = 0,

  /**
   * The resolution follows the **UIExtensionAbility**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}

/**
 * Defines the options to be passed when constructing **SecurityUIExtensionComponent**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface SecurityUIExtensionOptions {
  /**
   * Whether the **UIExtensionComponent** forwards the upper-level caller information when it is used for nesting.
   * **true**: yes; **false**: no.
   * The default value is **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  isTransferringCaller?: boolean;

  /**
   * Placeholder to be displayed before the **SecurityUIExtensionComponent** establishes a connection with the
   * **UIExtensionAbility**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * Resolution following strategy for **SecurityUIExtensionComponent**, used to control whether the embedded
   * **UIExtensionAbility** content follows the host application's resolution or uses its own resolution.
   * Default value: **FOLLOW_UI_EXTENSION_ABILITY_DPI**
   * .
   *
   * @default SecurityDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  dpiFollowStrategy?: SecurityDpiFollowStrategy;
}

/**
 * Defines the result returned when the started **UIExtensionAbility** exits normally.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface TerminationInfo {
  /**
   * Result code returned when the **UIExtensionAbility** exits. The value **0** indicates that the
   * **UIExtensionAbility** exits normally, and a non-zero value indicates that the **UIExtensionAbility** exits
   * abnormally. The meaning of the result code is defined by the **UIExtensionAbility** that is started.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  code: int;

  /**
   * Data returned when the **UIExtensionAbility** exits.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  want?: import('../api/@ohos.app.ability.Want').default;
}

/**
 * Implements a **SecurityUIExtensionProxy** instance for the component host to send data to, subscribe to, or
 * unsubscribe from the started ability through the connection established between the two parties.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface SecurityUIExtensionProxy {
  /**
   * Asynchronously sends data to the ability started by the component host through the connection established between
   * the two parties.
   *
   * @param { Record<string, Object> } data - Data to be asynchronously sent to the started **UIExtensionAbility**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  send(data: Record<string, Object>): void;

  /**
   * Synchronously sends data to the ability started by the component host through the connection established between
   * the two parties.
   *
   * @param { Record<string, Object> } data - Data to be synchronously sent to the started **UIExtensionAbility**.
   * @returns { Record<string, Object> } Data returned by the extension ability.
   * @throws { BusinessError } 100011 - No callback has been registered to response this request.
   * @throws { BusinessError } 100012 - Transferring data failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  sendSync(data: Record<string, Object>): Record<string, Object>;

  /**
   * Subscribes to the callback triggered for asynchronous registration of the started ability. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { 'asyncReceiverRegister' } type - The value is fixed to **asyncReceiverRegister**, indicating a
   *     subscription to the callback triggered for asynchronous registration of the extended ability.
   * @param { Callback<UIExtensionProxy> } callback - Callback triggered after the extension ability registers a
   *     [setReceiveDataCallback]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession#setReceiveDataCallback(callback: (data: Record<string, Object>) => void)}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * Subscribes to the callback triggered for synchronous registration of the started ability. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { 'syncReceiverRegister' } type - The value is fixed to **syncReceiverRegister**, indicating subscription to
   *     the asynchronous registration of the extension ability.
   * @param { Callback<UIExtensionProxy> } callback - Callback triggered after the extension ability registers a
   *     [setReceiveDataForResultCallback]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession#setReceiveDataForResultCallback(callback: (data: Record<string, Object>) => Record<string, Object>)}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * Unsubscribes from the callback triggered for the asynchronous registration of the started ability. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { 'asyncReceiverRegister' } type - The value is fixed to **asyncReceiverRegister**, indicating
   *     unsubscription from the callback triggered for asynchronous registration of the extended ability.
   * @param { Callback<UIExtensionProxy> } [callback] - Callback function. If this parameter is left empty, it means
   *     unsubscribing from all callbacks triggered after **UIExtensionAbility**'s asynchronous registration. If this
   *     parameter is not empty, it means unsubscribing from callbacks corresponding to **type**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;

  /**
   * Unsubscribes from the callback triggered for the synchronous registration of the started ability. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { 'syncReceiverRegister' } type - The value is fixed to **syncReceiverRegister**, indicating unsubscription
   *     to the asynchronous registration of the extension ability.
   * @param { Callback<UIExtensionProxy> } [callback] - Callback to unsubscribe from. If this parameter is left empty,
   *     it means unsubscribing from all callbacks triggered after **UIExtensionAbility**'s synchronous registration.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;
}

/**
 * **SecurityUIExtensionComponent** is used to embed the UI provided by another application on the current page. The
 * displayed content runs in another process, and the current application does not participate in its layout and
 * rendering.
 *
 * It is typically used in modular development scenarios that require process isolation. Currently,
 * **SecurityUIExtensionComponent** can only start **UIExtensionAbility** of the
 * [PhotoPicker]{@link @ohos.file.PhotoPickerComponent} type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
interface SecurityUIExtensionComponentInterface {
  /**
   * Creates a **SecurityUIExtensionComponent** component to embed and display the UI provided by a remote
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } want - Ability information to load. The
   *     **UIExtensionAbilit**y to be started is determined by both **bundleName** and **abilityName**. In addition, the
   *     **ability.want.params.uiExtensionType** field must be specified in **parameters** to indicate the type of the
   *     **UIExtensionAbility**. Currently, only **sysPicker/photoPicker** is supported.
   * @param { SecurityUIExtensionOptions } [options] - Options used to construct **SecurityUIExtensionComponent**. If
   *     this parameter is left empty, the default value is used for each field.
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  (
    want: import('../api/@ohos.app.ability.Want').default,
    options?: SecurityUIExtensionOptions
  ): SecurityUIExtensionComponentAttribute;
}

/**
 * The [universal attributes]{@link ./common} are supported.
 *
 * The following events are supported:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare class SecurityUIExtensionComponentAttribute extends CommonMethod<SecurityUIExtensionComponentAttribute> {
  /**
   * Triggered when the **UIExtensionAbility** connection is complete. This API uses an asynchronous callback to return
   * the result. You can then use the returned [SecurityUIExtensionProxy]{@link SecurityUIExtensionProxy} to send data
   * to the started ability.
   *
   * @param { import('../api/@ohos.base').Callback<SecurityUIExtensionProxy> } callback - Callback invoked to send data
   *     to the remote ability.
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onRemoteReady(
    callback: import('../api/@ohos.base').Callback<SecurityUIExtensionProxy>
  ): SecurityUIExtensionComponentAttribute;

  /**
   * Triggered when the data sent by the started **UIExtensionAbility** is received. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { import('../api/@ohos.base').Callback<{ [key: string]: Object }> } callback - Callback invoked to return
   *     the data received from the remote ability.
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onReceive(
    callback: import('../api/@ohos.base').Callback<{ [key: string]: Object }>
  ): SecurityUIExtensionComponentAttribute;

  /**
   * Triggered when an exception occurs during the running of the started ability extension, excluding the scenario
   * where the **UIExtensionAbility** is disconnected. This API uses an asynchronous callback to return the result.
   *
   * @param { import('../api/@ohos.base').ErrorCallback } callback - Callback used to receive exception information.
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onError(
    callback: import('../api/@ohos.base').ErrorCallback
  ): SecurityUIExtensionComponentAttribute;

  /**
   * Triggered when the started **UIExtensionAbility** exits normally by calling
   * [terminateSelfWithResult]{@link ../../../application/UIAbilityContext:UIAbilityContext#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * or
   * [terminateSelf]{@link ../../../application/UIAbilityContext:UIAbilityContext#terminateSelf(callback: AsyncCallback<void>)}.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { Callback<TerminationInfo> } callback - Callback function, which is used to receive the result returned by
   *     **UIExtensionAbility**.
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onTerminated(callback: Callback<TerminationInfo>): SecurityUIExtensionComponentAttribute;
}

/**
 * **SecurityUIExtensionComponent** is used to embed the UI provided by another application on the current page. The
 * displayed content runs in another process, and the current application does not participate in its layout and
 * rendering.
 *
 * It is typically used in modular development scenarios that require process isolation. Currently,
 * **SecurityUIExtensionComponent** can only start **UIExtensionAbility** of the
 * [PhotoPicker]{@link @ohos.file.PhotoPickerComponent} type.
 *
 * ###### Child Components
 *
 * None
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const SecurityUIExtensionComponent: SecurityUIExtensionComponentInterface;

/**
 * Defines UIExtensionComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const SecurityUIExtensionComponentInstance: SecurityUIExtensionComponentAttribute;
