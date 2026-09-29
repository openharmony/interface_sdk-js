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
 * Used to pass optional construction parameters when the **UIExtensionComponent** is constructed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 */
declare interface UIExtensionOptions {
  /**
   * Whether to forward the Caller information of the previous level when **UIExtensionComponent** is nested. The value
   * **true** indicates that the Caller information of the previous level is forwarded, and **false** indicates that
   * it is not forwarded.<br> Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  isTransferringCaller?: boolean;

  /**
   * Placeholder displayed before the connection between **UIExtensionComponent** and **UIExtensionAbility** is
   * established. Pass this parameter when a loading state or prompt content needs to be displayed to users before the
   * connection is established. If this parameter is not set, no placeholder content is displayed by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * Placeholder displayed when the size of **UIExtensionComponent** changes and the internal rendering of
   * **UIExtensionAbility** is not complete. The key supports only "FOLD_TO_EXPAND" (fold-to-expand size change) and
   * "UNDEFINED" (default size change). Other key values do not take effect. If this parameter is not set, no
   * size-change placeholder content is displayed by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  areaChangePlaceholder?: Record<string, ComponentContent>;

  /**
   * Provides an API for setting whether the DPI follows the host or the **UIExtensionAbility**.<br> Default value:
   * **FOLLOW_UI_EXTENSION_ABILITY_DPI**
   *
   * @default DpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  dpiFollowStrategy?: DpiFollowStrategy;

  /**
   * Provides an API for setting the window mode so that it follows the host or the **UIExtensionAbility**.<br> Default
   * value: **FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE**
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
 * Triggered when the started UIExtensionAbility exits properly by calling **terminateSelfWithResult** or
 * **terminateSelf**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 */
declare interface TerminationInfo {
  /**
   * Result code returned when the launched **UIExtensionAbility** exits. The result code is determined by the data
   * passed in when `terminateSelfWithResult` or `terminateSelf` is called.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  code: number;

  /**
   * Data returned when the launched **UIExtensionAbility** exits. The default value is **undefined**.
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
 * Used for the component user to send data to the launched Ability and to subscribe to and unsubscribe from the
 * registration events of the extension Ability after a connection is successfully established between the two parties.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare interface UIExtensionProxy {
  /**
   * Used in the scenario where the component user sends data to the launched Ability after a connection is
   * successfully established between the two parties, providing asynchronous data sending.
   *
   * > **NOTE**
   * > Both **send** and **sendSync** can be used to send data to the launched Ability. **send** is asynchronous and
   * > has no return value, and is suitable for scenarios where the reply from the extension Ability is not required.
   * > **sendSync** is synchronous and can obtain the reply data from the extension Ability, and is suitable for
   * > scenarios where the processing result needs to be obtained synchronously.
   *
   * @param { object } data - Data asynchronously sent to the launched **UIExtensionAbility**. In versions earlier than
   *     API version 18, the type of data is Object. [since 10 - 17]
   * @param { Record<string, Object> } data - Data asynchronously sent to the launched **UIExtensionAbility**. In
   *     versions earlier than API version 18, the type of data is Object. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  send(data: Record<string, Object>): void;

  /**
   * Used in the scenario where the component user sends data to the launched Ability after a connection is
   * successfully established between the two parties, providing synchronous data sending.
   *
   * @param { object } data - Data synchronously sent to the launched **UIExtensionAbility**. Before API version 18,
   *     the type of data is Object. [since 11 - 17]
   * @param { Record<string, Object> } data - Data synchronously sent to the launched **UIExtensionAbility**. Before
   *     API version 18, the type of data is Object. [since 18]
   * @returns { object } data - Data replied by the extension Ability. [since 11 - 17]
   * @returns { Record<string, Object> } data - Data replied by the extension Ability. [since 18]
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
   * > **NOTE**
   * > **asyncReceiverRegister** and **syncReceiverRegister** subscribe to the asynchronous and synchronous data
   * > receiving registration events of the extension Ability, respectively. When the extension Ability calls
   * > **setReceiveDataCallback** to register asynchronous receiving, the **asyncReceiverRegister** callback is
   * > triggered. When the extension Ability calls **setReceiveDataForResultCallback** to register synchronous
   * > receiving, the **syncReceiverRegister** callback is triggered. Developers should select the corresponding event
   * > to subscribe to based on the data receiving mode used by the extension Ability.
   *
   * @param { 'asyncReceiverRegister' } type - Event type. The value is **'asyncReceiverRegister'**, indicating
   *     subscription to the asynchronous registration callback of the extended Ability.
   * @param { function } callback - Callback invoked when the extended Ability registers **setReceiveDataCallback**.
   *     [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } callback - Callback invoked when the extended Ability registers
   *     **setReceiveDataCallback**. [since 18]
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
   * @param { 'syncReceiverRegister' } type - Event type. The value is **'syncReceiverRegister'**, indicating
   *     subscription to the synchronous registration callback of the extension Ability.
   * @param { function } callback - Callback invoked when the extension Ability registers
   *     **setReceiveDataForResultCallback**. [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } callback - Callback invoked when the extension Ability registers
   *     **setReceiveDataForResultCallback**. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * Used in the scenario where the component user unsubscribes from the asynchronous registration event of the
   * launched Ability after a connection is successfully established between the two parties. This method is used
   * together with **on('asyncReceiverRegister')** to cancel the subscription registered through
   * **on('asyncReceiverRegister')**. When it is no longer necessary to listen for the asynchronous registration
   * event (for example, before the component is destroyed), call this method to unsubscribe to avoid the callback
   * being unable to be released.
   *
   * @param { 'asyncReceiverRegister' } type - Event type. The value is **'asyncReceiverRegister'**, which indicates
   *     unsubscribing from the asynchronous registration callback of the extension Ability.
   * @param { function } callback - Callback for the asynchronous registration event. If this parameter is left empty,
   *     all asynchronous registration callbacks of the extension Ability are unsubscribed.<br> If it is not empty, the
   *     corresponding asynchronous registration callback is unsubscribed. [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } [callback] - Callback for the asynchronous registration event. If this
   *     parameter is left empty, all asynchronous registration callbacks of the extension Ability are
   *     unsubscribed.<br> If it is not empty, the corresponding asynchronous registration callback is unsubscribed.
   *     [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;

  /**
   * Used in the scenario where the component user unsubscribes from the synchronous registration event of the
   * launched Ability after a connection is successfully established between the two parties. This method is used
   * together with **on('syncReceiverRegister')** to cancel the subscription registered through
   * **on('syncReceiverRegister')**. When it is no longer necessary to listen for the synchronous registration event
   * (for example, before the component is destroyed), call this method to unsubscribe to avoid the callback being
   * unable to be released.
   *
   * @param { 'syncReceiverRegister' } type - Event type. The value is **'syncReceiverRegister'**, which indicates
   *     unsubscribing from the synchronous registration callback of the extension Ability.
   * @param { function } callback - Callback for the synchronous registration event. If this parameter is left empty,
   *     it indicates unsubscribing from all callbacks triggered after the synchronous registration of the extension
   *     Ability.<br> If this parameter is not empty, it indicates unsubscribing from the corresponding synchronous
   *     registration callback. [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } [callback] - Callback for the synchronous registration event. If this
   *     parameter is left empty, it indicates unsubscribing from all callbacks triggered after the synchronous
   *     registration of the extension Ability.<br> If this parameter is not empty, it indicates unsubscribing from
   *     the corresponding synchronous registration callback. [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;
}

/**
 * **UIExtensionComponent** is used to embed UIs provided by other apps in the local page. The displayed content runs
 * in another process, and the local app does not participate in its layout or rendering. Through process isolation,
 * secure UI isolation and crash isolation between apps can be achieved, while supporting independent development and
 * deployment of modules.
 *
 * It is usually used in modular development scenarios where process isolation is required, such as embedding
 * functional modules provided by third-party apps and implementing UI capability extension between apps.
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
   * @param { import('../api/@ohos.app.ability.Want').default } want - Ability to load, which must be a UI-capable
   *     Ability extension. In the **parameters** of Want, set the
   *     **ability.want.params.uiExtensionType** field, whose value must be consistent with the type configured for
   *     the extension Ability in **module.json5**.
   * @param { UIExtensionOptions } [options] - Construction parameters to pass, used to customize the configuration of
   *     **UIExtensionComponent** (such as setting the placeholder, DPI following policy, window mode following
   *     policy, etc.). Pass this parameter when the preceding configurations need to be customized; otherwise, the
   *     default configuration is used. [since 11]
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
 * The component converts the coordinates of the event and then passes it to the launched Ability for processing.
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
   * @param { import('../api/@ohos.base').Callback<UIExtensionProxy> } callback - Callback invoked when the
   *     **UIExtensionAbility** is connected. The input parameter is **UIExtensionProxy**, through which data can be
   *     sent to the launched **Ability**.
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
   *     the data received from the launched Ability. [since 10 - 17]
   * @param { ReceiveCallback } callback - Callback invoked to return the data received from the launched Ability.
   *     [since 18]
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  onReceive(callback: ReceiveCallback): UIExtensionComponentAttribute;

  /**
   * When the launched Ability extension calls **terminateSelfWithResult**, this callback is invoked first, and then
   * **onRelease** is invoked.
   *
   * The result data of the launched **Ability** can be processed in this callback. For details, see
   * [AbilityResult]{@link ../../../ability/abilityResult:AbilityResult}.
   *
   * @param { import('../api/@ohos.base').Callback<{code: number;want?: import('../api/@ohos.app.ability.Want').default;
   *     }> } callback
   *     - Callback invoked to return the result data when the launched **Ability** extension calls
   *     **terminateSelfWithResult**.
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
   * @param { Callback<TerminationInfo> } callback - Callback used to return the result from the
   *     **UIExtensionAbility**. The type is [TerminationInfo]{@link TerminationInfo}.
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
 * **UIExtensionComponent** is used to embed UIs provided by other apps in the local page. The displayed content runs
 * in another process, and the local app does not participate in its layout or rendering. Through process isolation,
 * secure UI isolation and crash isolation between apps can be achieved, while supporting independent development and
 * deployment of modules.
 *
 * It is usually used in modular development scenarios where process isolation is required, such as embedding
 * functional modules provided by third-party apps and implementing UI capability extension between apps.
 *
 * ###### Constraints
 *
 * This component does not support preview.
 *
 * The launched Ability (app component) must be a UI-enabled Ability extension. For details about how to implement a
 * UI-enabled Ability extension, see
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
