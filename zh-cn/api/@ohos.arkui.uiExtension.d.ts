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
 * 用于[EmbeddedUIExtensionAbility](docroot://application-models/embeddeduiextensionability.md)（或
 * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}）中获取宿主应用的窗口信息或对应的
 * [EmbeddedComponent]{@link ./@internal/component/ets/embedded_component}<!--Del-->（或
 * [UIExtensionComponent]{@link ./@internal/component/ets/ui_extension_component}）<!--DelEnd-->组件的信息。
 * 
 * > **说明**
 * >
 * > 从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace uiExtension {
  /**
   * UIExtension窗口代理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface WindowProxy {
    /**
     * 获取宿主应用窗口内容规避的区域；如系统栏区域、刘海屏区域、手势区域、软键盘区域等与宿主窗口内容重叠时，需要宿主窗口内容避让的区域。
     *
     * @param { window.AvoidAreaType } type - 表示避让区类型。
     * @returns { window.AvoidArea } Avoidance area for the content of the host window.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowAvoidArea(type: window.AvoidAreaType): window.AvoidArea;

    /**
     * 注册系统避让区变化的监听。
     *
     * @param { 'avoidAreaChange' } type - 监听的事件类型，固定为'avoidAreaChange'，即系统避让区变化事件。
     * @param { Callback<AvoidAreaInfo> } callback - 回调函数：入参用于接收当前避让区的信息。
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
     * 注销系统避让区变化的监听。
     *
     * @param { 'avoidAreaChange' } type - 注销的事件类型，固定为'avoidAreaChange'，即系统避让区变化事件。
     * @param { Callback<AvoidAreaInfo> } callback - 回调函数：如果传入该参数，则关闭该监听。如果未传入参数，则关闭所有系统避让区变化的监听。
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
     * 注册组件（EmbeddedComponent或UIExtensionComponent）尺寸变化的监听。
     *
     * @param { 'windowSizeChange' } type - 监听的事件类型，固定为'windowSizeChange'，即组件（EmbeddedComponent或UIExtensionComponent）尺寸变
     *     化事件。
     * @param { Callback<window.Size> } callback - 回调函数：入参用于接收当前组件（EmbeddedComponent或UIExtensionComponent）的尺寸。
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
     * 注销组件（EmbeddedComponent或UIExtensionComponent）尺寸变化的监听。
     *
     * @param { 'windowSizeChange' } type - 注销的事件类型，固定值：'windowSizeChange'，即组件（EmbeddedComponent或UIExtensionComponent）尺寸
     *     变化事件。
     * @param { Callback<window.Size> } [callback] - 回调函数。返回当前的组件（EmbeddedComponent或UIExtensionComponent）尺寸。如果传入该参数，则关闭该
     *     监听。如果未传入参数，则关闭组件（EmbeddedComponent或UIExtensionComponent）尺寸变化的监听。
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
     * 设置是否隐藏不安全窗口，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 不安全窗口是指可能遮挡[EmbeddedComponent]{@link ./@internal/component/ets/embedded_component}（或
     * > [UIExtensionComponent]{@link ./@internal/component/ets/ui_extension_component}）组件的窗口，如全局悬浮窗、宿主子窗口和宿主创建的Dialog窗口
     * > （不包括系统应用创建的上述类型窗口）。
     * >
     * > - 当EmbeddedComponent（或UIExtensionComponent）组件被用来显示敏感操作提示内容时，可以选择隐藏不安全窗口，保护敏感操作提示内容不会被遮挡。当EmbeddedComponent（或
     * > UIExtensionComponent）组件不显示或销毁时，不安全窗口会重新显示。
     * >
     * > - 针对PC/2in1设备，当调用hideNonSecureWindows(true)时，不安全窗口中的全局悬浮窗不会被隐藏。
     *
     * @permission ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS
     * @param { boolean } shouldHide - 指示是否隐藏不安全窗口，true表示隐藏，false表示不隐藏。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    hideNonSecureWindows(shouldHide: boolean): Promise<void>;

    /**
     * 创建该WindowProxy实例下的子窗口，使用Promise异步回调。
     *
     * @param { string } name - 子窗口的名字。
     * @param { window.SubWindowOptions } subWindowOptions - 子窗口参数。
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
     *     3. The subWindow has been created and can not be created again.
     *     4. It is not allowed to create non-secure window when secure extension exists.
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
     * 创建该WindowProxy实例下的子窗口，可通过设置followCreatorLifecycle，决定子窗是否跟随组件（EmbeddedComponent或UIExtensionComponent）的生命周期，使用
     * Promise异步回调。
     *
     * @param { string } name - 子窗口的名字。
     * @param { window.SubWindowOptions } subWindowConfig - 子窗口参数。
     * @param { boolean } followCreatorLifecycle - 子窗生命周期是否跟组件（EmbeddedComponent或UIExtensionComponent）保持同步。true表示该组件隐藏时，
     *     子窗隐藏，该组件显示时子窗显示，false表示子窗的显隐不跟随该组件变化。
     * @returns { Promise<window.Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     *     3. The subWindow has been created and can not be created again.
     *     4. It is not allowed to create non-secure window when secure extension exists.
     * @throws { BusinessError } 1300035 - Creating a subwindow is not allowed in the current context. Possible cause:
     *     1. An AgentUIExtensionAbility cannot create a subwindow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    createSubWindowWithOptions(name: string, subWindowConfig: window.SubWindowOptions,
        followCreatorLifecycle: boolean): Promise<window.Window>;

    /**
     * 为当前窗口添加或删除安全水印标志，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 添加安全水印标志后，窗口在前台时会将当前全屏幕覆盖水印。全屏、悬浮窗、分屏等场景下只要有添加了安全水印标志的窗口在前台，就会显示全屏水印。
     *
     * @param { boolean } enable - 是否对窗口添加标志位。true表示添加，false表示删除。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 1300002 - The UIExtension window proxy is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    setWaterMarkFlag(enable: boolean): Promise<void>;

    /**
     * 组件（EmbeddedComponent或UIExtensionComponent）的信息。
     * 
     * **约束：** 由于架构约束，不建议在
     * [onSessionCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate}阶段同步获取该值，建议在收到
     * [on('windowSizeChange')]{@link @ohos.arkui.uiExtension:uiExtension.WindowProxy.on(type: 'windowSizeChange', callback: Callback<window.Size>)}
     * 回调之后获取。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    properties: WindowProxyProperties;

    /**
     * 注销组件（EmbeddedComponent或UIExtensionComponent）位置及尺寸变化的监听。
     *
     * @param { 'rectChange' } type - 监听事件，固定为'rectChange'，即组件（EmbeddedComponent或UIExtensionComponent）矩形变化事件。
     * @param { Callback<RectChangeOptions> } callback - 回调函数。返回当前组件（EmbeddedComponent或UIExtensionComponent）矩形变化值及变化原因。如
     *     果传入参数，则关闭该监听。如果未传入参数，则关闭所有组件（EmbeddedComponent或UIExtensionComponent）矩形变化的监听。
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
     * 设置组件（EmbeddedComponent或UIExtensionComponent）占用事件，宿主将不响应组件区域内被占用的事件。
     *
     * @param { int } eventFlags - 占用的事件类型，具体取值可见[EventFlag]{@link uiExtension.EventFlag}枚举值。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    occupyEvents(eventFlags: int): Promise<void>;

    /**
     * 注册组件（EmbeddedComponent或UIExtensionComponent）位置及尺寸变化的监听。
     *
     * @param { 'rectChange' } type - 监听事件，固定为'rectChange'，即组件（EmbeddedComponent或UIExtensionComponent）矩形变化事件。
     * @param { 'number' } reasons - 触发组件（EmbeddedComponent或UIExtensionComponent）位置及尺寸变化的原因，具体取值可参考
     *     [RectChangeReason]{@link uiExtension.RectChangeReason}枚举值。
     * @param { Callback<RectChangeOptions> } callback - 回调函数。返回当前组件（EmbeddedComponent或UIExtensionComponent）矩形变化值及变化原因。
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
     *     <br>取值范围为全体整数。
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
   * 用于表示窗口避让区的信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface AvoidAreaInfo {
    /**
     * 窗口避让区类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    type: window.AvoidAreaType;

    /**
     * 窗口内容避让区域。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    area: window.AvoidArea;
  }

  /**
   * 用于表示组件的相关信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface WindowProxyProperties {
    /**
     * 组件（EmbeddedComponent或UIExtensionComponent）的位置和宽高。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    uiExtensionHostWindowProxyRect: window.Rect;
  }

  /**
   * 组件（EmbeddedComponent或UIExtensionComponent）矩形（位置及尺寸）变化返回的值及变化原因。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface RectChangeOptions {

    /**
     * 组件矩形变化后的值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    rect: window.Rect;

    /**
     * 组件矩形变化的原因。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    reason: RectChangeReason;
  }

  /**
   * 事件类型枚举。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum EventFlag {

    /**
     * 左滑事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_PAN_GESTURE_LEFT = 0x00000001,

    /**
     * 右滑事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_PAN_GESTURE_RIGHT = 0x00000002,

    /**
     * 长按事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_LONG_PRESS = 0x00000200,

    /**
     * 上滑事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_PAN_GESTURE_UP = 0x00000004,

    /**
     * 点击事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_CLICK = 0x00000100,

    /**
     * 无事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_NONE = 0x00000000,

    /**
     * 下滑事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    EVENT_PAN_GESTURE_DOWN = 0x00000008
  }

  /**
   * 组件（EmbeddedComponent或UIExtensionComponent）矩形（位置及尺寸）变化的原因。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  enum RectChangeReason {

    /**
     * 组件所在的宿主窗口矩形变化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    HOST_WINDOW_RECT_CHANGE = 0x0001
  }
}

export default uiExtension;