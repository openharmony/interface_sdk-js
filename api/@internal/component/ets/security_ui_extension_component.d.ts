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
   * Whether to forward the Caller information of the upper-level caller (that is, the identity information of the
   * **Ability** that initiates the call) when **SecurityUIExtensionComponent** is nested, so as to support call chain
   * passing in multi-level nesting scenarios.<br>**true**: forwards the Caller information of the upper level;
   * **false**: does not forward the Caller information of the upper level.<br>Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  isTransferringCaller?: boolean;

  /**
   * Placeholder displayed before the connection between **SecurityUIExtensionComponent** and the
   * **UIExtensionAbility** is established. No placeholder is displayed if this attribute is not set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * Resolution following strategy for **SecurityUIExtensionComponent**, used to control whether the embedded
   * **UIExtensionAbility** content follows the host application's resolution or uses its own resolution.<br>Default
   * value: **FOLLOW_UI_EXTENSION_ABILITY_DPI**
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
   * Result code returned when the launched **UIExtensionAbility** exits. The value **0** indicates normal exit, and a
   * non-zero value indicates abnormal exit. The specific meaning of the result code is defined by the launched
   * **UIExtensionAbility**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  code: int;

  /**
   * Data returned when the launched **UIExtensionAbility** exits. This field is empty if no data is returned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  want?: import('../api/@ohos.app.ability.Want').default;
}

/**
 * Used to send data to the launched **Ability** and subscribe to and unsubscribe from event callbacks after a
 * successful connection is established.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface SecurityUIExtensionProxy {
  /**
   * Used to send data to the launched **Ability** after a successful connection is established, providing
   * asynchronous sending capability. The data will be received and processed by the extension **Ability** through
   * [setReceiveDataCallback]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession#setReceiveDataCallback(callback: (data: Record<string, Object>) => void)}.
   *
   * @param { Record<string, Object> } data - Data asynchronously sent to the launched **Ability**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  send(data: Record<string, Object>): void;

  /**
   * Sends data to the launched **Ability** after a successful connection is established. The data will be processed by
   * the launched **Ability** through **setReceiveDataForResultCallback** and the result will be returned.
   *
   * @param { Record<string, Object> } data - Data synchronously sent to the launched **Ability**.
   * @returns { Record<string, Object> } Response data returned by the launched **Ability** after processing the
   *     synchronous send request.
   * @throws { BusinessError } 100011 - No callback has been registered to respond to this request.
   * @throws { BusinessError } 100012 - Transferring data failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  sendSync(data: Record<string, Object>): Record<string, Object>;

  /**
   * After a successful connection is established, subscribes to the callback triggered when the launched **Ability**
   * performs asynchronous registration. This API uses an asynchronous callback to return the result.
   *
   * @param { 'asyncReceiverRegister' } type - Fixed value **'asyncReceiverRegister'**, which indicates the callback
   *     triggered when the launched **Ability** performs asynchronous registration.
   * @param { Callback<UIExtensionProxy> } callback - Callback triggered after the launched **Ability** registers
   *     [setReceiveDataCallback]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession#setReceiveDataCallback(callback: (data: Record<string, Object>) => void)}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * After a successful connection is established, subscribes to the callback triggered when the launched **Ability**
   * performs synchronous registration. This API uses an asynchronous callback to return the result.
   *
   * @param { 'syncReceiverRegister' } type - Fixed value **'syncReceiverRegister'**, which indicates the callback
   *     triggered when the launched **Ability** performs synchronous registration.
   * @param { Callback<UIExtensionProxy> } callback - Callback function. Callback triggered after the launched
   *     **Ability** registers
   *     [setReceiveDataForResultCallback]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession#setReceiveDataForResultCallback(callback: (data: Record<string, Object>) => Record<string, Object>)}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * Unsubscribes from the callback triggered when the launched **Ability** performs asynchronous registration. This
   * API uses an asynchronous callback to return the result.
   *
   * @param { 'asyncReceiverRegister' } type - Fixed value **'asyncReceiverRegister'**, used to unsubscribe from the
   *     callback triggered when the launched **Ability** performs asynchronous registration.
   * @param { Callback<UIExtensionProxy> } [callback] - Callback function. If this parameter is left empty, all
   *     callbacks for asynchronous registration are unsubscribed. If it is not empty, the specified callback for
   *     asynchronous registration is unsubscribed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;

  /**
   * Unsubscribes from the callback triggered when the launched **Ability** performs synchronous registration. This
   * API uses an asynchronous callback to return the result.
   *
   * @param { 'syncReceiverRegister' } type - Fixed value **'syncReceiverRegister'**, used to unsubscribe from the
   *     callback triggered when the launched **Ability** performs synchronous registration.
   * @param { Callback<UIExtensionProxy> } [callback] - Callback function. If it is empty, unsubscribes from all
   *     synchronously registered callbacks. If it is not empty, unsubscribes from the specified synchronously
   *     registered callback.
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
   *     **UIExtensionAbility** to be started is determined by both **bundleName** and **abilityName**. In addition,
   *     the **ability.want.params.uiExtensionType** field must be specified in **parameters** to indicate the type of
   *     the **UIExtensionAbility**. Currently, only **sysPicker/photoPicker** is supported.
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
   * @param { import('../api/@ohos.base').Callback<SecurityUIExtensionProxy> } callback - Callback whose input parameter
   *     is **SecurityUIExtensionProxy**, which can be used to send data to the peer **Ability** and subscribe to
   *     events.
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
   *     the data received from the peer **Ability**. The data is a **Record<string, Object>** key-value pair, and the
   *     specific fields are customized by the sender (the launched Ability) through the **sendData** method.
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
   * Callback triggered when an exception occurs during the running of the launched **UIExtensionAbility**. This does
   * not include the scenario where the connection to the **UIExtensionAbility** is disconnected. This API uses an
   * asynchronous callback to return the result.
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
