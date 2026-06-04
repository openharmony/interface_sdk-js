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
 * 仅用于在有进程隔离诉求的UIExtensionComponent组件中为提供方应用提供宿主应用的窗口信息和组件本身的信息。
 * 
 * > **说明**
 * >
 * > 后续此接口不再新增功能，相关功能在接口[uiExtension]{@link @ohos.arkui.uiExtension:uiExtension}中提供。
 * >
 * > 从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > 本模块接口为系统接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace uiExtensionHost {
  /**
   * Transition Controller
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface UIExtensionHostWindowProxy {
    /**
     * 获取宿主应用窗口内容规避的区域；如系统栏区域、刘海屏区域、手势区域、软键盘区域等与宿主窗口内容重叠时，需要宿主窗口内容避让的区域。
     *
     * @param { window.AvoidAreaType } type - 表示避让区类型。
     * @returns { window.AvoidArea } Avoidance area for the content of the host window.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    getWindowAvoidArea(type: window.AvoidAreaType): window.AvoidArea;

    /**
     * 注册系统避让区变化的监听。
     *
     * @param { 'avoidAreaChange' } type - 监听的事件类型，固定为'avoidAreaChange'，即系统避让区变化事件。
     * @param { Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }> } callback - 回调函数：入参用于接收当前避让区的信息，其中，"
     *     type"表示窗口避让区类型，"area"表示窗口内容避让区域。
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
     * 注销系统避让区变化的监听。
     *
     * @param { 'avoidAreaChange' } type - 注销的事件类型，固定为'avoidAreaChange'，即系统避让区变化事件。
     * @param { Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }> } callback - 回调函数：如果传入该参数，则关闭该监听。如果未传入参
     *     数，则关闭所有系统避让区变化的监听。
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
     * UIExtensionComponent组件以及宿主窗口的信息。
     * 
     * **约束：** 由于架构约束，不建议在
     * [onSessionCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate}阶段同步获取该值，建议在收到
     * [on('windowSizeChange')]{@link @ohos.uiExtensionHost:uiExtensionHost.UIExtensionHostWindowProxy.on(type: 'windowSizeChange', callback: Callback<window.Size>)}
     * 回调之后获取。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    properties: UIExtensionHostWindowProxyProperties;

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
     * @permission ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS [since 12]
     * @param { boolean } shouldHide - 指示是否隐藏不安全窗口，true表示隐藏，false表示不隐藏。
     * @returns { Promise<void> } 无返回结果的Promise对象。、
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
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    hideNonSecureWindows(shouldHide: boolean): Promise<void>;

    /**
     * 创建该UIExtensionHostWindowProxy实例下的子窗口，使用Promise异步回调。
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
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    createSubWindowWithOptions(name: string, subWindowOptions: window.SubWindowOptions): Promise<window.Window>;

    /**
     * 创建该UIExtensionHostWindowProxy实例下的子窗口，可通过设置followCreatorLifecycle，决定子窗是否跟随组件（EmbeddedComponent或
     * UIExtensionComponent）的生命周期，使用Promise异步回调。
     *
     * @param { string } name - 子窗口的名字。
     * @param { window.SubWindowOptions } subWindowConfig - 子窗口参数。
     * @param { boolean } followCreatorLifecycle - 子窗生命周期是否跟组件（EmbeddedComponent或UIExtensionComponent）保持同步。true表示该组件隐藏时，
     *     子窗隐藏，该组件显示时子窗显示，false表示子窗的显隐不跟随该组件变化。
     * @returns { Promise<window.Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible causes:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     *     3. The subWindow has been created and can not be created again.
     *     4. It is not allowed to create non-secure window when secure extension exists.
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
     * 设置UIExtension组件在非系统截图时的隐私内容保护开关，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 开启截图隐私内容保护后，使用窗口截图[window.snapshot](docroot://reference/apis-arkui/arkts-apis-window-Window.md#snapshot9)或者组件截图
     * > [UIContext.getComponentSnapshot](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getcomponentsnapshot12)
     * > 将无法截取到当前组件的内容（不包括该组件下创建的子窗）。
     *
     * @param { boolean } shouldHide - 是否开启截图隐私保护。true表示开启，false表示不开启。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    hidePrivacyContentForHost(shouldHide: boolean): Promise<void>;
  }

  /**
   * 用于表示宿主应用窗口和UIExtensionComponent组件的信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface UIExtensionHostWindowProxyProperties {
    /**
     * UIExtensionComponent的位置和宽高。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    uiExtensionHostWindowProxyRect: window.Rect;
  }
}

export default uiExtensionHost;