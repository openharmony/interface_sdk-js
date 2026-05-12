/*
 * Copyright (c) 2024 Huawei Device Co., Ltd1.
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
/**
 * The **uiExtension** module provides APIs for the
 * [EmbeddedUIExtensionAbility](docroot://application-models/embeddeduiextensionability.md) (or
 * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}) to obtain the host application
 * window information or the information about the corresponding
 * [EmbeddedComponent]{@link ./@internal/component/ets/embedded_component}<!--Del--> (or
 * [UIExtensionComponent]{@link ./@internal/component/ets/ui_extension_component})<!--DelEnd--> component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace uiExtension {
  /**
   * The proxy of the UIExtension window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface WindowProxy {
    /**
     * Obtains the area where this window cannot be displayed, for example, the system bar area, notch, gesture area,
     * and soft keyboard area.
     *
     * @param { window.AvoidAreaType } type - Type of the avoidance area.
     * @returns { window.AvoidArea } Avoidance area for the content of the host window.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowAvoidArea(type: window.AvoidAreaType): window.AvoidArea;

    /**
     * Subscribes to events of system avoidance area changes.
     *
     * @param { 'avoidAreaChange' } type - Event type. The value is fixed at **'avoidAreaChange'**, indicating the event
     *     of changes to the area where the window cannot be displayed.
     * @param { Callback<AvoidAreaInfo> } callback - Callback function that receives the information about the current
     *     avoidance area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listener has been registered.
     *     3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'avoidAreaChange', callback: Callback<AvoidAreaInfo>): void;

    /**
     * Subscribes to the event indicating changes to the area where the window cannot be displayed.
     *
     * @param { Callback<AvoidAreaInfo> } callback - Callback used to return the avoid area information.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listener has been registered.
     *     3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAvoidAreaChange(callback: Callback<AvoidAreaInfo>): void;

    /**
     * Unsubscribes from events of system avoidance area changes.
     *
     * @param { 'avoidAreaChange' } type - Event type. The value is fixed at **'avoidAreaChange'**, indicating the event
     *     of changes to the area where the window cannot be displayed.
     * @param { Callback<AvoidAreaInfo> } callback - Callback used for unsubscription. If a value is passed in, the
     *     corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event
     *     are canceled.
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
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaInfo>): void;

    /**
     * Unsubscribes from the event indicating changes to the area where the window cannot be displayed.
     *
     * @param { Callback<AvoidAreaInfo> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listening type is not registered.
     *     3. The listener has not been registered.
     *     4. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offAvoidAreaChange(callback?: Callback<AvoidAreaInfo>): void;

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
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
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
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
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
     * @stagemodelonly
     * @since 23 static
     */
    offWindowSizeChange(callback?: Callback<window.Size>): void;

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
     * @permission ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS
     * @param { boolean } shouldHide - Whether to hide non-secure windows. The value **true** means to hide non-secure
     *     windows, and **false** means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. Permission denied. Interface caller does not have permission "ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS".
     *     2. The UIExtension window proxy is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    hideNonSecureWindows(shouldHide: boolean): Promise<void>;

    /**
     * Creates a subwindow for this window proxy. This API uses a promise to return the result.
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
     * @stagemodelonly
     * @atomicservice
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
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300035 - Creating a subwindow is not allowed in the current context. Possible cause:
     *     1. An AgentUIExtensionAbility cannot create a subwindow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 dynamic&static
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
     * Information about the component (**EmbeddedComponent** or **UIExtensionComponent**).
     *
     * Note: Due to architecture restrictions, avoid obtaining the value in
     * [onSessionCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate}. Instead, when
     * possible, obtain the value after receiving the
     * [on('windowSizeChange')]{@link @ohos.arkui.uiExtension:uiExtension.WindowProxy.on(type: 'windowSizeChange', callback: Callback<window.Size>)}
     * callback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    properties: WindowProxyProperties;

    /**
     * Unsubscribes from position and size change events of the component (**EmbeddedComponent** or
     * **UIExtensionComponent**).
     *
     * @param { 'rectChange' } type - Event type. The value is fixed at **'rectChange'**, indicating the rectangle
     *     change event for the component (**EmbeddedComponent** or **UIExtensionComponent**).
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the current rectangle change values and
     *     the reason for the change of the component (**EmbeddedComponent** or **UIExtensionComponent**). If a value is
     *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listening type is not registered.
     *     3. The listener has not been registered.
     *     4. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     */
    off(type: 'rectChange', callback?: Callback<RectChangeOptions>): void;

    /**
     * Unsubscribes from changes in the position and size of the component (EmbeddedComponent or UIExtensionComponent).
     *     This API can be used only on 2-in-1 devices.
     *
     * @param { Callback<RectChangeOptions> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listening type is not registered.
     *     3. The listener has not been registered.
     *     4. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offRectChange(callback?: Callback<RectChangeOptions>): void;

    /**
     * Sets the events that the component (**EmbeddedComponent** or **UIExtensionComponent**) will occupy, preventing
     * the host from responding to these events within the component's area.
     *
     * @param { int } eventFlags - Type of events to occupy. For details about the available values, see
     *     [EventFlag]{@link uiExtension.EventFlag}.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    occupyEvents(eventFlags: int): Promise<void>;

    /**
     * Subscribes to position and size change events of the component (**EmbeddedComponent** or **UIExtensionComponent**
     * ).
     *
     * @param { 'rectChange' } type - Event type. The value is fixed at **'rectChange'**, indicating the rectangle
     *     change event for the component (**EmbeddedComponent** or **UIExtensionComponent**).
     * @param { 'number' } reasons - Reason why the position and size of the component (**EmbeddedComponent** or
     *     **UIExtensionComponent**) change. For details about the values, see
     *     [RectChangeReason]{@link uiExtension.RectChangeReason}.
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the current rectangle change values and
     *     the reason for the change of the component (**EmbeddedComponent** or **UIExtensionComponent**).
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listener has been registered.
     *     3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     */
    on(type: 'rectChange', reasons: number, callback: Callback<RectChangeOptions>): void;

    /**
     * Subscribes to changes in the position and size of the component (EmbeddedComponent or UIExtensionComponent).
     *     This API can be used only on 2-in-1 devices.
     *
     * @param { int } reasons - The reasons of component rect change.
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the RectChangeOptions.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     * <br> 1. The listening type is not supported.
     * <br> 2. The listener has been registered.
     * <br> 3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onRectChange(reasons: int, callback: Callback<RectChangeOptions>): void;
  }

  /**
   * Represents the information about the avoidance area of the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface AvoidAreaInfo {
    /**
     * Type of the avoidance area of the window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    type: window.AvoidAreaType;

    /**
     * Avoidance area for the content of the window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    area: window.AvoidArea;
  }

  /**
   * Provides information about a component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface WindowProxyProperties {
    /**
     * Position and size of the component (**EmbeddedComponent** or **UIExtensionComponent**).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    uiExtensionHostWindowProxyRect: window.Rect;
  }

  /**
   * Provides the values and reasons returned when the rectangle (position and size) of the component (
   * **EmbeddedComponent** or **UIExtensionComponent**) changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface RectChangeOptions {

    /**
     * New values of the rectangle of the component after the change.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    rect: window.Rect;

    /**
     * Reason for the rectangle change.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    reason: RectChangeReason;
  }

  /**
   * Enumerates event types.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum EventFlag {

    /**
     * Pan-left event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_PAN_GESTURE_LEFT = 0x00000001,

    /**
     * Pan-right event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_PAN_GESTURE_RIGHT = 0x00000002,

    /**
     * Long press event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_LONG_PRESS = 0x00000200,

    /**
     * Pan-up event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_PAN_GESTURE_UP = 0x00000004,

    /**
     * Click event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_CLICK = 0x00000100,

    /**
     * No event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_NONE = 0x00000000,

    /**
     * Pan-down event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_PAN_GESTURE_DOWN = 0x00000008
  }

  /**
   * Enumerates the reasons for changes in the rectangle (position and size) of the component (**EmbeddedComponent** or
   * **UIExtensionComponent**).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  enum RectChangeReason {

    /**
     * The rectangle of the host window containing the component changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    HOST_WINDOW_RECT_CHANGE = 0x0001
  }
}

export default uiExtension;