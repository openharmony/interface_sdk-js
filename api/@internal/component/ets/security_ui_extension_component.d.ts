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
 * @file
 * @kit ArkUI
 */

/**
 * Enumeration of different types of DpiFollowStrategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum SecurityDpiFollowStrategy {
  /**
   * Followed the host DPI.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FOLLOW_HOST_DPI = 0,

  /**
   * Followed the UIExtensionAbility.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1,
}

/**
 * This interface is used to set the options for UIExtensionComponentAttribute during construction
 *
 * @interface SecurityUIExtensionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface SecurityUIExtensionOptions {
  /**
   * Set whether the current capability is used as a Caller.<br/>
   * If set to true, as a Caller, the current token of UIExtensionComponent is set to rootToken.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  isTransferringCaller?: boolean;

  /**
   * Set placeholder.
   * If set placeholder ComponentContent, show placeholder node when connection is not established.
   *
   * @type { ?ComponentContent }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * Set UIExtensionComponent Content Dpi Follow Strategy.
   *
   * @type { ?SecurityDpiFollowStrategy }
   * @default SecurityDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  dpiFollowStrategy?: SecurityDpiFollowStrategy;
}

/**
 * Indicates the information when the provider of the embedded UI is terminated.
 *
 * @interface TerminationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface TerminationInfo {
  /**
   * Defines the termination code.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
   code: int;

  /**
   * Defines the additional termination information.
   *
   * @type { ?import('../api/@ohos.app.ability.Want').default }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
   want?: import('../api/@ohos.app.ability.Want').default;
}

/**
 * This interface is used for send data to the UIExtensionAbility.<br/>
 * It is returned from onRemoteReady callback of UIExtensionComponent<br/>
 * when UIExtensionAbility connects successfully
 *
 * @interface SecurityUIExtensionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface SecurityUIExtensionProxy {
  /**
   * This function is for sending data to the UIExtensionAbility.
   *
   * @param { Record<string, Object> } data
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  send(data: Record<string, Object>): void;

  /**
   * This function is for sending data to the UIExtensionAbility and waiting the result in blocking mode.
   *
   * @param { Record<string, Object> } data - data send to the UIExtensionAbility
   * @returns { Record<string, Object> } data - data transferred from the UIExtensionAbility
   * @throws { BusinessError } 100011 - No callback has been registered to response this request.
   * @throws { BusinessError } 100012 - Transferring data failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  sendSync(data: Record<string, Object>): Record<string, Object>;

  /**
   * Register the listener that watches for async data receiver callback being registered by UIExtensionAbility.
   *
   * @param { 'asyncReceiverRegister' } type - Indicates the type of event.
   * @param { Callback<UIExtensionProxy> } callback - callback of the listened event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * Register the listener that watches for sync data receiver callback being registered by UIExtensionAbility.
   *
   * @param { 'syncReceiverRegister' } type - Indicates the type of event.
   * @param { Callback<UIExtensionProxy> } callback - callback of the listened event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * Deregisters the listener that watches for async data receiver callback being registered by UIExtensionAbility.
   *
   * @param { 'asyncReceiverRegister' } type - type of the listened event.
   * @param { Callback<UIExtensionProxy> } [callback] - callback of the listened event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;

  /**
   * Deregisters the listener that watches for sync data receiver callback being registered by UIExtensionAbility.
   *
   * @param { 'syncReceiverRegister' } type - type of the listened event.
   * @param { Callback<UIExtensionProxy> } [callback] - callback of the listened event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;
}

/**
 * Provide an interface for the UIExtensionComponent, which is used
 * <br/>to render UI of a remote UIExtensionAbility
 *
 * @interface SecurityUIExtensionComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
interface SecurityUIExtensionComponentInterface {
  /**
   * Construct the UIExtensionComponent.<br/>
   * Called when the UIExtensionComponent is used.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } want - indicates the want of UIExtensionAbility
   * @param { SecurityUIExtensionOptions } [options] - Construction configuration of UIExtensionComponentAttribute
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
 * Define the attribute functions of UIExtensionComponent.
 *
 * @extends CommonMethod<SecurityUIExtensionComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare class SecurityUIExtensionComponentAttribute extends CommonMethod<SecurityUIExtensionComponentAttribute> {
  /**
   * callback called when remote UIExtensionAbility object is
   * <br/>ready for receive data
   *
   * @param { import('../api/@ohos.base').Callback<SecurityUIExtensionProxy> } callback
   *     When the remote UIExtensionAbility object is ready to receive data
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
   * called when data received from UIExtensionAbility.
   *
   * @param { import('../api/@ohos.base').Callback<{ [key: string]: Object }> } callback
   *     called when data received from UIExtensionAbility.
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
   * called when some error occurred except disconnected from UIExtensionAbility.
   *
   * @param { import('../api/@ohos.base').ErrorCallback } callback
   *     called when some error occurred except disconnected from UIExtensionAbility.
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
   * Called when the provider of the embedded UI is terminated.
   *
   * @param { Callback<TerminationInfo> } callback
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onTerminated(callback: Callback<TerminationInfo>): SecurityUIExtensionComponentAttribute;
}

/**
 * Defines SecurityUIExtensionComponent Component.
 *
 * @type { SecurityUIExtensionComponentInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const SecurityUIExtensionComponent: SecurityUIExtensionComponentInterface;

/**
 * Defines UIExtensionComponent Component instance.
 *
 * @type { SecurityUIExtensionComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const SecurityUIExtensionComponentInstance: SecurityUIExtensionComponentAttribute;
