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
 * @file System API
 * @kit ArkUI
 */

/**
 * Enumeration of different types of DpiFollowStrategy.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 */
declare enum DpiFollowStrategy {
  /**
   * The DPI settings follow the host.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  FOLLOW_HOST_DPI = 0,

  /**
   * The DPI settings follow the UIExtensionAbility.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}

/**
 * Enumerates the following strategies of the window mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 18 dynamic
 */
declare enum WindowModeFollowStrategy {
  /**
   * The window mode follows the host.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  FOLLOW_HOST_WINDOW_MODE = 0,

  /**
   * The window mode follows the UIExtensionAbility.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1
}

/**
 * Describes the optional construction parameters during **UIExtensionComponent** construction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 */
declare interface UIExtensionOptions {
  /**
   * Whether the **UIExtensionComponent** forwards the upper-level caller information when it is used for nesting.
   *
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  isTransferringCaller?: boolean;

  /**
   * Placeholder to be displayed before the UIExtensionComponent establishes a connection with the UIExtensionAbility.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * Placeholder for size changes, displayed when the UIExtensionComponent's size changes and the internal rendering of
   * **UIExtension** is not completed. The key value can be **FOLD_TO_EXPAND** (size change for folding and expanding)
   * or **UNDEFINED** (default size change).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  areaChangePlaceholder?: Record<string, ComponentContent>;

  /**
   * Whether the DPI settings follow the host or UIExtensionAbility.
   *
   * Default value: **FOLLOW_UI_EXTENSION_ABILITY_DPI**
   *
   * @default DpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  dpiFollowStrategy?: DpiFollowStrategy;

  /**
   * Following strategy of the window mode.
   *
   * Default value: **FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE**
   *
   * @default WindowModeFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  windowModeFollowStrategy?: WindowModeFollowStrategy;
}

/**
 * Indicates the information when the provider of the embedded UI is terminated.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 */
declare interface TerminationInfo {
  /**
   * Defines the termination code.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  code: number;

  /**
   * Defines the additional termination information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  want?: import('../api/@ohos.app.ability.Want').default;
}

/**
 * Triggered to encapsulate the data sent by the started ability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 18 dynamic
 */
declare type ReceiveCallback = import('../api/@ohos.base').Callback<Record<string, Object>>;

/**
 * Implements a **UIExtensionProxy** instance for the component host to send data to, subscribe to, or unsubscribe from
 * the started UIExtensionAbility through the connection established between the two parties.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare interface UIExtensionProxy {
  /**
   * Asynchronously sends data from the component host to the started UIExtensionAbility through the connection
   * established between the two parties.
   *
   * @param { object } data - Data to be asynchronously sent to the started UIExtensionAbility. In versions earlier than
   *     API version 18, the data type is **Object**. [since 10 - 17]
   * @param { Record<string, Object> } data - Data to be asynchronously sent to the started UIExtensionAbility. In
   *     versions earlier than API version 18, the data type is **Object**. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  send(data: Record<string, Object>): void;

  /**
   * Synchronously sends data from the component host to the started UIExtensionAbility through the connection
   * established between the two parties.
   *
   * @param { object } data - Data to be synchronously sent to the started UIExtensionAbility. [since 11 - 17]
   * @param { Record<string, Object> } data - Data to be synchronously sent to the started UIExtensionAbility. [since 18]
   * @returns { object } data - data transferred from the UIExtensionAbility [since 11 - 17]
   * @returns { Record<string, Object> } data - Data transferred from the UIExtensionAbility. [since 18]
   * @throws { BusinessError } 100011 - No callback has been registered to respond to this request.
   * @throws { BusinessError } 100012 - Transferring data failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  sendSync(data: Record<string, Object>): Record<string, Object>;

  /**
   * Subscribes to asynchronous registration of the started UIExtensionAbility through the connection established
   * between the component host and UIExtensionAbility.
   *
   * @param { 'asyncReceiverRegister' } type - Event type. The value is fixed at **'asyncReceiverRegister'**.
   * @param { function } callback - Callback. It is triggered after UIExtensionAbility registers the
   *     **setReceiveDataCallback** method. [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } callback - Callback. It is triggered after UIExtensionAbility registers the
   *     **setReceiveDataCallback** method. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * Subscribes to synchronous registration of the started UIExtensionAbility through the connection established between
   * the component host and UIExtensionAbility.
   *
   * @param { 'syncReceiverRegister' } type - Event type. The value is fixed at **'syncReceiverRegister'**.
   * @param { function } callback - Callback. It is triggered after the UIExtensionAbility registers
   *     **setReceiveDataForResultCallback**. [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } callback - Callback. It is triggered after the UIExtensionAbility registers
   *     **setReceiveDataForResultCallback**. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * Unsubscribes from asynchronous registration of the started UIExtensionAbility through the connection established
   * between the component host and UIExtensionAbility.
   *
   * @param { 'asyncReceiverRegister' } type - Event type. The value is fixed at **'asyncReceiverRegister'**.
   * @param { function } callback - Callback. If this parameter is left empty, it means unsubscribing from all callbacks
   *     triggered after UIExtensionAbility's asynchronous registration.<br> If this parameter is not empty, it means
   *     unsubscribing from callbacks corresponding to **type**. [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } [callback] - Callback. If this parameter is left empty, it means
   *     unsubscribing from all callbacks triggered after UIExtensionAbility's asynchronous registration.<br> If this
   *     parameter is not empty, it means unsubscribing from callbacks corresponding to **type**. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;

  /**
   * Unsubscribes from synchronous registration of the started UIExtensionAbility through the connection established
   * between the component host and UIExtensionAbility.
   *
   * @param { 'syncReceiverRegister' } type - Event type. The value is fixed at **'syncReceiverRegister'**.
   * @param { function } callback - Callback. If this parameter is left empty, it means unsubscribing from all callbacks
   *     triggered after UIExtensionAbility's synchronous registration.<br> If this parameter is not empty, it means
   *     unsubscribing from callbacks corresponding to **type**. [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } [callback] - Callback. If this parameter is left empty, it means
   *     unsubscribing from all callbacks triggered after UIExtensionAbility's synchronous registration.<br> If this
   *     parameter is not empty, it means unsubscribing from callbacks corresponding to **type**. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;
}

/**
 * **UIExtensionComponent** is used to embed UIs provided by other applications in the local application UI. The
 * embedded content runs in another process, and the local application does not participate in its layout and rendering.
 *
 * It is usually used in modular development scenarios where process isolation is required.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
interface UIExtensionComponentInterface {

  /**
   * Construct the UIExtensionComponent.<br/>
   * Called when the UIExtensionComponent is used.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } want - Ability to start.
   * @param { UIExtensionOptions } [options] - Construction parameters. [since 11]
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  (
    want: import('../api/@ohos.app.ability.Want').default,
    options?: UIExtensionOptions
  ): UIExtensionComponentAttribute;
}

/**
 * The [universal attributes]{@link ./common} are supported.
 *
 * Universal events, such as the [click event]{@link ./common}, are not supported.
 *
 * The events are passed to the remote UIExtensionAbility for processing after coordinate conversion.
 *
 * The following events are supported:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare class UIExtensionComponentAttribute extends CommonMethod<UIExtensionComponentAttribute> {
  /**
   * Invoked when the connection to the remote UIExtensionAbility is set up, that is, the UIExtensionAbility is ready to
   * receive data through the proxy.
   *
   * @param { import('../api/@ohos.base').Callback<UIExtensionProxy> } callback - Callback invoked to send data to the
   *     remote Ability.
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  onRemoteReady(
    callback: import('../api/@ohos.base').Callback<UIExtensionProxy>
  ): UIExtensionComponentAttribute;

  /**
   * Invoked when the data sent by the started UIExtensionAbility is received. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { import('../api/@ohos.base').Callback<{ [key: string]: Object }> } callback - Callback invoked to return
   *     the data received from the remote ability. [since 10 - 17]
   * @param { ReceiveCallback } callback - Callback invoked to return the data received from the remote
   *     ability. [since 18]
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  onReceive(callback: ReceiveCallback): UIExtensionComponentAttribute;

  /**
   * Invoked when the started UIExtensionAbility calls **terminateSelfWithResult**. After this callback is invoked,
   * **OnRelease** is invoked.
   *
   * The result data of the remote UIExtensionAbility can be processed in this callback. For details, see
   * [AbilityResult]{@link ../../../ability/abilityResult:AbilityResult}.
   *
   * @param { import('../api/@ohos.base').Callback<{code: number;want?: import('../api/@ohos.app.ability.Want').default;
   *     }> } callback
   *     - called when the UIExtensionAbility is terminated with result data.
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead UIExtensionComponentAttribute#onTerminated
   */
  onResult(
    callback: import('../api/@ohos.base').Callback<{
      code: number;
      want?: import('../api/@ohos.app.ability.Want').default;
    }>
  ): UIExtensionComponentAttribute;

  /**
   * Invoked when the started UIExtensionAbility is destroyed.
   *
   * If the UIExtensionAbility is destroyed correctly by calling **terminateSelfWithResult** or **terminateSelf**, the
   * value of **releaseCode** is **0**.
   *
   * If the UIExtensionAbility is destroyed because it crashes or is forced stopped, the value of **releaseCode** is
   * **1**.
   *
   * @param { import('../api/@ohos.base').Callback<number> } callback - Callback invoked to return the code when the
   *     ability is destroyed. The value **0** indicates that the ability is destroyed normally, and the value **1**
   *     indicates that the ability is destroyed abnormally.
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead UIExtensionComponentAttribute#onTerminated or UIExtensionComponentAttribute#onError
   */
  onRelease(
    callback: import('../api/@ohos.base').Callback<number>
  ): UIExtensionComponentAttribute;

  /**
   * Invoked when an error occurs during the running of the UIExtensionAbility. Through the **code**, **name**, and
   * **message** in the callback parameters, error information can be obtained and handled. For details about the error
   * codes, see [UIExtension Error Codes](docroot://reference/apis-arkui/errorcode-uiextension.md).
   *
   * @param { import('../api/@ohos.base').ErrorCallback } callback - Callback. It returns the error information.
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  onError(
    callback: import('../api/@ohos.base').ErrorCallback
  ): UIExtensionComponentAttribute;

  /**
   * Called when the started UIExtensionAbility is terminated by calling **terminateSelfWithResult** or
   * **terminateSelf**.
   *
   * @param { Callback<TerminationInfo> } callback - Callback used to return the result from the UIExtensionAbility.
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  onTerminated(callback: Callback<TerminationInfo>): UIExtensionComponentAttribute;

  /**
   * Triggered when the started UIExtensionAbility draws the first frame.
   *
   * @param { Callback<void> } callback - Callback. It is called when the UIExtensionAbility draws its first frame.
   *     The type is void.
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  onDrawReady(callback: Callback<void>): UIExtensionComponentAttribute;
}

/**
 * **UIExtensionComponent** is used to embed UIs provided by other applications in the local application UI. The
 * embedded content runs in another process, and the local application does not participate in its layout and rendering.
 *
 * It is usually used in modular development scenarios where process isolation is required.
 *
 * ###### Constraints
 *
 * This component does not support preview.
 *
 * The ability to be started must be a UIExtensionAbility, an extension ability with UI. For details about how to
 * implement a UIExtensionAbility, see
 * [@ohos.app.ability.UIExtensionAbility (Base Class for ExtensionAbilities with UI)]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}.
 *
 * The width and height of the component must be explicitly set to non-zero valid values.
 *
 * The scenario where scrolling continues after the edge is reached is not supported. When both the
 * **UIExtensionComponent** host and the UIExtensionAbility support content scrolling, gesture-based scrolling will
 * cause simultaneous responses from both inside and outside the **UIExtensionComponent**. This includes, but is not
 * limited to, scrollable containers such as [Scroll]{@link ./scroll}, [Swiper]{@link ./swiper}, [List]{@link ./list},
 * and [Grid]{@link ./grid}. For details about how to avoid the simultaneous scrolling inside and outside the
 * **UIExtensionComponent**, see
 * [Example 2](docroot://reference/apis-arkui/arkui-ts/ts-container-ui-extension-component-sys.md#example-2-isolating-scrolling-inside-and-outside-of-uiextensioncomponent).
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare const UIExtensionComponent: UIExtensionComponentInterface;

/**
 * Defines UIExtensionComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare const UIExtensionComponentInstance: UIExtensionComponentAttribute;
