/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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

import { Callback } from './@ohos.base';
import window from './@ohos.window';
import uiExtension from './@ohos.arkui.uiExtension';
/**
 * Intended only for the **UIExtensionComponent** that has process isolation requirements, the **uiExtensionHost**
 * module provides APIs for obtaining the host application window information and information about the component
 * itself.
 *
 * > **NOTE**
 * >
 * > No new function will be added to this module. Related functions will be provided in the
 * > [uiExtension]{@link @ohos.arkui.uiExtension:uiExtension} interface.
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace uiExtensionHost {
  /**
   * Transition Controller
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface UIExtensionHostWindowProxy {
    /**
     * Obtains the area where this window cannot be displayed, for example, the system bar area, notch, gesture area,
     * and soft keyboard area.
     *
     * @param { window.AvoidAreaType } type - Type of the avoidance area.
     * @returns { window.AvoidArea } Avoidance area for the content of the host window.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getWindowAvoidArea(type: window.AvoidAreaType): window.AvoidArea;

    /**
     * Subscribes to events of system avoidance area changes.
     *
     * @param { 'avoidAreaChange' } type - Event type. The value is fixed at **'avoidAreaChange'**, indicating the event
     *     of changes to the area where the window cannot be displayed.
     * @param { Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }> } callback - Callback function that
     *     receives the information about the current avoidance area. The **type** parameter indicates the type of the
     *     avoidance area, and the **area** parameter indicates the avoidance area for the content of the window.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listener has been registered.
     *     3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    on(type: 'avoidAreaChange', callback: Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }>): void;

    /**
     * Register the callback of avoidAreaChange
     *
     * @param { Callback<uiExtension.AvoidAreaInfo> } callback
     *     - Callback used to return the area.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listener has been registered.
     *     3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onAvoidAreaChange(callback: Callback<uiExtension.AvoidAreaInfo>): void;

    /**
     * Unsubscribes from events of system avoidance area changes.
     *
     * @param { 'avoidAreaChange' } type - Event type. The value is fixed at **'avoidAreaChange'**, indicating the event
     *     of changes to the area where the window cannot be displayed.
     * @param { Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }> } callback - Callback used for
     *     unsubscription. If a value is passed in, the corresponding subscription is canceled. If no value is passed in
     *     , all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listening type is not registered.
     *     3. The listener has not been registered.
     *     4. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    off(type: 'avoidAreaChange', callback?: Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }>): void;

    /**
     * Unregister the callback of avoidAreaChange
     *
     * @param { Callback<uiExtension.AvoidAreaInfo> }  [callback]
     *     - Unregister the callback function. If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listening type is not registered.
     *     3. The listener has not been registered.
     *     4. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offAvoidAreaChange(callback?: Callback<uiExtension.AvoidAreaInfo>): void;

    /**
     * Subscribes to size change events of the component (**EmbeddedComponent** or **UIExtensionComponent**).
     *
     * @param { 'windowSizeChange' } type - Event type. The value is fixed at **'windowSizeChange'**, indicating the
     *     component (**EmbeddedComponent** or **UIExtensionComponent**) size change events.
     * @param { Callback<window.Size> } callback - Callback function that receives the current component size as the
     *     input parameter.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listener has been registered.
     *     3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    on(type: 'windowSizeChange', callback: Callback<window.Size>): void;

    /**
     * Subscribes to the component (EmbeddedComponent or UIExtensionComponent) size change event.
     *
     * @param { Callback<window.Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listener has been registered.
     *     3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onWindowSizeChange(callback: Callback<window.Size>): void;

    /**
     * Unsubscribes from size change events of the component (**EmbeddedComponent** or **UIExtensionComponent**).
     *
     * @param { 'windowSizeChange' } type - Event type. The value is fixed at **'windowSizeChange'**, indicating the
     *     component (**EmbeddedComponent** or **UIExtensionComponent**) size change events.
     * @param { Callback<window.Size> } [callback] - Callback used to return the size of the current component (
     *     **EmbeddedComponent** or **UIExtensionComponent**). If a value is passed in, the corresponding subscription
     *     is canceled. If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listening type is not registered.
     *     3. The listener has not been registered.
     *     4. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    off(type: 'windowSizeChange', callback?: Callback<window.Size>): void;

    /**
     * Unsubscribes from the component (EmbeddedComponent or UIExtensionComponent) size change event.
     *
     * @param { Callback<window.Size> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listening type is not registered.
     *     3. The listener has not been registered.
     *     4. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offWindowSizeChange(callback?: Callback<window.Size>): void;

    /**
     * Information about the host application window and the **UIExtensionComponent**.
     *
     * Note: Due to architecture restrictions, avoid obtaining the value in
     * [onSessionCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate}. Instead, when
     * possible, obtain the value after receiving the
     * [on('windowSizeChange')]{@link @ohos.uiExtensionHost:uiExtensionHost.UIExtensionHostWindowProxy.on(type: 'windowSizeChange', callback: Callback<window.Size>)}
     * callback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    properties: UIExtensionHostWindowProxyProperties;

    /**
     * Sets whether to hide non-secure windows. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > - A non-secure window refers to any window that may obstruct the
     * > [EmbeddedComponent]{@link ./@internal/component/ets/embedded_component} or
     * > [UIExtensionComponent]{@link ./@internal/component/ets/ui_extension_component}, such as global floating windows
     * > , host subwindows, and dialog box windows created by the host application (excluding windows of these types
     * > created by system applications).
     * >
     * > - When using the **EmbeddedComponent** or **UIExtensionComponent** to display sensitive information, call this
     * > API to hide non-secure windows and prevent information obstruction. Hidden non-secure windows will reappear
     * > when the **EmbeddedComponent** or **UIExtensionComponent** is hidden or destroyed.
     * >
     * > - On PCs/2-in-1 devices, global floating windows within non-secure windows remain visible when
     * > **hideNonSecureWindows(true)** is called.
     *
     * @permission ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS [since 12]
     * @param { boolean } shouldHide - Whether to hide insecure windows. The value **true** means to hide insecure
     *     windows, and **false** means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. Permission denied. Interface caller does not have permission "ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS".
     *     2. The UIExtension window proxy is abnormal. [since 12]
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    hideNonSecureWindows(shouldHide: boolean): Promise<void>;

    /**
     * Creates a subwindow for this **UIExtensionHostWindowProxy** instance. This API uses a promise to return the
     * result.
     *
     * @param { string } name - Name of the subwindow.
     * @param { window.SubWindowOptions } subWindowOptions - Parameters used for creating the subwindow.
     * @returns { Promise<window.Window> } Promise used to return the subwindow created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible causes:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300035 - Creating a subwindow is not allowed in the current context. Possible cause:
     *     1. An AgentUIExtensionAbility cannot create a subwindow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    createSubWindowWithOptions(name: string, subWindowOptions: window.SubWindowOptions): Promise<window.Window>;

    /**
     * Create subwindow.
     *
     * @param { string } name - Name of the subwindow.
     * @param { window.SubWindowOptions } subWindowConfig - Configuration parameters for creating the subwindow.
     * @param { boolean } followCreatorLifecycle - Whether the lifecycle of the subwindow follows creator of
     *     subwindow. If true, when the creator goes to background, the subwindow will also go to background, when the
     *     creator returns to foreground, the subwindow will also return to foreground. If false, the subwindow will
     *     not change when the creator goes to background or returns to foreground.
     * @returns { Promise<window.Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible causes:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300035 - Creating a subwindow is not allowed in the current context. Possible cause:
     *     1. An AgentUIExtensionAbility cannot create a subwindow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    createSubWindowWithOptions(name: string, subWindowConfig: window.SubWindowOptions,
        followCreatorLifecycle: boolean): Promise<window.Window>;

    /**
     * Adds or deletes the watermark flag for this window. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > With the watermark flag added, the watermark is applied on the full screen when the window is in the foreground
     * > , regardless of whether the window is displayed in full screen, floating, and split screen mode.
     *
     * @param { boolean } enable - Whether to add or delete the flag. The value **true** means to add the watermark flag
     *     , and **false** means to delete the watermark flag.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - The UIExtension window proxy is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setWaterMarkFlag(enable: boolean): Promise<void>;

    /**
     * Sets whether to enable privacy protection for the UIExtension component during non-system screenshots. This API
     * uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > When privacy protection is enabled, neither
     * > [window.snapshot]{@link @ohos.window:window.snapshot} nor
     * > [UIContext.getComponentSnapshot](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getcomponentsnapshot12)
     * > will capture the content of the current component (excluding subwindows created under this component).
     *
     * @param { boolean } shouldHide - Whether to enable privacy protection for screenshots. The value **true** means to
     *     enable privacy protection for screenshots, and **false** means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The UIExtension window proxy is abnormal.
     *     2. Not the UIExtensionAbility process calling.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    hidePrivacyContentForHost(shouldHide: boolean): Promise<void>;
  }

  /**
   * Defines information about the host application window and **UIExtensionComponent**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface UIExtensionHostWindowProxyProperties {
    /**
     * Position, width, and height of the **UIExtensionComponent**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    uiExtensionHostWindowProxyRect: window.Rect;
  }
}

export default uiExtensionHost;