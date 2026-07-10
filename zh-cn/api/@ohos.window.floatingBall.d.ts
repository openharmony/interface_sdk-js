/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import type BaseContext from './application/BaseContext';
import type image from './@ohos.multimedia.image';
import type Want from './@ohos.app.ability.Want';
import type { Callback } from './@ohos.base';

/**
 * 该模块提供闪控球的基础功能，包括判断设备是否支持闪控球功能，以及创建闪控球控制器来启动、更新或停止闪控球。适用于跨应用的题目搜索、账单记录、商品比价、抢单、翻译场景，以及金融类应用的实时盯盘场景，以小窗模式呈现内容。闪控球以悬浮小组件
 * 形式显示在其他应用之上，即时呈现应用的关键信息。
 *
 * > **说明：**
 * >
 * > - 针对系统能力SystemCapability.Window.SessionManager，请先使用
 * > [canIUse()]{@link canIUse}接口判断当前设备是否支持此syscap及对应接口。
 *
 * @syscap SystemCapability.Window.SessionManager
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace floatingBall {
  /**
   * 判断当前设备是否支持闪控球功能。
   *
   * @returns { boolean } 当前设备是否支持闪控球功能。true表示支持，false则表示不支持。
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  function isFloatingBallEnabled(): boolean;

  /**
   * 创建闪控球控制器，使用Promise异步回调。
   *
   * @param { FloatingBallConfiguration } config - 创建闪控球控制器的参数。该参数不能为空，并且构造该参数的context不能为空。
   * @returns { Promise<FloatingBallController> } Promise对象。返回当前创建的闪控球控制器。
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible causes:
   *     <br>1.The context parameter is null.
   *     <br>2.The FloatingBallConfiguration parameter is null.
   * @throws { BusinessError } 1300023 - Floating ball internal error. Possible causes:
   *     <br>1.The application context or main window is invalid.
   *     <br>2.System internal error, such as null pointer or insufficient memory.
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  function create(config: FloatingBallConfiguration): Promise<FloatingBallController>;

  /**
   * 创建闪控球控制器时需要提供的参数配置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface FloatingBallConfiguration {
    /**
     * 表示上下文环境。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    context: BaseContext;
  }

  /**
   * 闪控球控制器实例，用于启动、更新、停止闪控球以及注册回调等操作。
   *
   * 下列API示例中都需先使用[floatingBall.create()]{@link floatingBall.create}方法获取到闪控球控制器实例（即floatingBallController），再通过此实例调用对应方法。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface FloatingBallController {
    /**
     * 启动闪控球，使用Promise异步回调。
     *
     * @permission ohos.permission.USE_FLOAT_BALL
     * @param { FloatingBallParams } params - 启动闪控球的参数。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission verification failed, usually returned by VerifyAccessToken.
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible causes:
     *     <br>1. FloatingBallParams parameter is null.
     *     <br>2. Parameter is invalid, such as invalid icon object, template type,
     *            or title (empty or exceeds 64 bytes).
     * @throws { BusinessError } 1300020 - Failed to create the floating ball window. Possible cause:
     *     The main window is not shown.
     * @throws { BusinessError } 1300021 - Failed to start multiple floating ball windows.
     * @throws { BusinessError } 1300022 - Repeated floating ball operation.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible causes:
     *     <br>1.The floating ball controller has been destroyed.
     *     <br>2.Internal error, failed to show the floating ball window.
     *           Such as insufficient resources or abnormal window service.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball window is not created or has been destroyed.
     * @throws { BusinessError } 1300025 - The floating ball state does not support this operation. Possible cause:
     *     The floating ball state is stopping.
     * @throws { BusinessError } 1300034 - This operation conflicts with other floating windows. Possible cause:
     *     App has already started float view. [since 26.0.0]
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    startFloatingBall(params: FloatingBallParams): Promise<void>;

    /**
     * 更新闪控球，使用Promise异步回调。
     *
     * @param { FloatingBallParams } params - 更新闪控球的参数。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     Internal error, the window type is not a floating ball.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: The process ID
     *     calling the API does not match the process ID of the session that created the floating ball.
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible causes:
     *     <br>1.FloatingBallParams parameter is null.
     *     <br>2.Parameter is invalid, such as invalid icon object, template type,
     *           or title (empty or exceeds 64 bytes).
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball window is not created or has been destroyed.
     * @throws { BusinessError } 1300025 - The floating ball state does not support this operation. Possible cause:
     *     The floating ball is not started.
     * @throws { BusinessError } 1300027 - When updating the floating ball, the template type cannot be changed.
     * @throws { BusinessError } 1300028 - Updating static template-based floating balls is not supported.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    updateFloatingBall(params: FloatingBallParams): Promise<void>;

    /**
     * 停止闪控球，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 1300022 - Repeated floating ball operation.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball window is not created or has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    stopFloatingBall(): Promise<void>;

    /**
     * 注册闪控球生命周期状态变化的监听事件。不再使用时，取消监听以避免内存泄漏。
     *
     * @param { 'stateChange' } type - 监听事件，固定为'stateChange'，即闪控球生命周期状态变化事件。
     * @param { Callback<FloatingBallState> } callback - 回调函数。返回当前的闪控球生命周期状态。
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified.
     *     <br>2.Callback is null or not callable.
     * @throws { BusinessError } 1300022 - Repeated floating ball operation.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball controller has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    on(type: 'stateChange', callback: Callback<FloatingBallState>): void;

    /**
     * Register floating ball stateChange event listener.
     *
     * @param { Callback<FloatingBallState> } callback - Used to handle {'stateChange'} command.
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified.
     *     <br>2.Callback is null or not callable.
     * @throws { BusinessError } 1300022 - Repeated floating ball operation.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball controller has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onStateChange(callback: Callback<FloatingBallState>): void;

    /**
     * 取消闪控球生命周期状态变化的监听事件。
     *
     * @param { 'stateChange' } type - 监听事件，固定为'stateChange'，即闪控球生命周期状态变化事件。
     * @param { Callback<FloatingBallState> } [callback] - 回调函数。返回当前的闪控球生命周期状态。若传入参数，则停止该监听。若未传入参数，则停止所有闪控球生命周期状态变化的监听。
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified.
     *     <br>2.Callback is null or not callable.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball controller has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    off(type: 'stateChange', callback?: Callback<FloatingBallState>): void;

    /**
     * Unregister floating ball stateChange event listener.
     *
     * @param { Callback<FloatingBallState> } [callback] - Indicates the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified.
     *     <br>2.Callback is null or not callable.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball controller has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offStateChange(callback?: Callback<FloatingBallState>): void;

    /**
     * 注册闪控球的点击监听事件，不使用时，取消监听以避免内存泄漏。
     *
     * @param { 'click' } type - 监听事件，固定为'click'，即闪控球点击事件。
     * @param { Callback<void> } callback - 回调函数。当点击闪控球事件发生时的回调。该回调函数不返回任何参数。
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified.
     *     <br>2.Callback is null or not callable.
     * @throws { BusinessError } 1300022 - Repeated floating ball operation.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball controller has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    on(type: 'click', callback: Callback<void>): void;

    /**
     * Register floating ball click event listener.
     *
     * @param { Callback<void> } callback - Used to handle {'click'} command.
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified.
     *     <br>2.Callback is null or not callable.
     * @throws { BusinessError } 1300022 - Repeated floating ball operation.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball controller has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onClick(callback: Callback<void>): void;

    /**
     * 取消闪控球点击的监听事件。
     *
     * @param { 'click' } type - 监听事件，固定为'click'，即闪控球点击事件。
     * @param { Callback<void> } [callback] - 回调函数。当点击闪控球事件发生时的回调。该回调函数不返回任何参数。若传入参数，则关闭特定的监听。若未传入参数，则关闭所有闪控球点击的监听。
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified.
     *     <br>2.Callback is null or not callable.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball controller has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    off(type: 'click', callback?: Callback<void>): void;

    /**
     * Unregister floating ball click event listener.
     *
     * @param { Callback<void> } [callback] - Indicates the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified.
     *     <br>2.Callback is null or not callable.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball controller has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offClick(callback?: Callback<void>): void;

    /**
     * 注册闪控球销毁事件的监听。当闪控球销毁时，回调函数会接收到销毁原因的字符串。不再使用时，调用[offDestroy](#offdestroy)接口取消监听以避免内存泄漏。
     *
     * @param { Callback<string> } callback - 回调函数。返回闪控球停止的原因。停止原因包括：
     *     <br>- "APP_STOP"：应用主动停止。
     *     <br>- "DUMPSTER_STOP"：拖动到垃圾桶触发停止。
     *     <br>- "LONG_PRESS_SINGLE_STOP"：长按单个闪控球触发停止。
     *     <br>- "LONG_PRESS_ALL_STOP"：长按全部闪控球触发停止。
     *     <br>- "MAIN_WINDOW_DESTROY_STOP"：context关联的主窗口被销毁后触发停止。
     *     <br>- "SQUEEZE"：超出设备闪控球数量上限，被其他闪控球挤占停止。
     *     <br>- "FLOAT_VIEW_STOP"：与标准悬浮窗绑定后，绑定状态下跟随标准悬浮窗停止。
     *     <br>- "STOP_IN_SIDEBAR"：在侧边栏中被停止。
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible cause:
     *     Callback is null or not callable.
     * @throws { BusinessError } 1300022 - Repeated floating ball operation.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball controller has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onDestroy(callback: Callback<string>): void;

    /**
     * 取消闪控球销毁事件的监听。
     *
     * @param { Callback<string> } [callback] - 回调函数。若传入参数，则取消该监听；若未传入参数，则取消所有闪控球销毁事件的监听。
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible cause:
     *     Callback is null or not callable.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible cause:
     *     The floating ball controller has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offDestroy(callback?: Callback<string>): void;

    /**
     * 获得闪控球窗口信息，使用Promise异步回调。
     *
     * @returns { Promise<FloatingBallWindowInfo> } Promise对象，返回闪控球窗口信息。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     Internal error, the window type is not a floating ball.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: The process ID
     *     calling the API does not match the process ID of the session that created the floating ball.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible causes:
     *     <br>1. The floating ball controller has been destroyed.
     *     <br>2. The floating ball window is not created or has been destroyed.
     * @throws { BusinessError } 1300025 - The floating ball state does not support this operation. Possible cause:
     *     The floating ball is not started.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    getFloatingBallWindowInfo(): Promise<FloatingBallWindowInfo>;

    /**
     * 恢复应用主窗口并加载指定页面。使用Promise异步回调。仅支持在点击闪控球后调用；若应用拥有`ohos.permission.AUTO_RESTORE_MAIN_WINDOW`权限，可以无需点击直接调用该接口。
     *
     * @permission ohos.permission.USE_FLOAT_BALL
     * @param { Want } want - 加载指定页面的Want。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission verification failed, usually returned by VerifyAccessToken.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     Internal error, the window type is not a floating ball.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: The process ID
     *     calling the API does not match the process ID of the session that created the floating ball.
     * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible cause:
     *     Want parameter is null or invalid.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     System error, such as a null pointer, insufficient memory.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible causes:
     *     <br>1.The floating ball controller has been destroyed.
     *     <br>2.The floating ball window is not created or has been destroyed.
     * @throws { BusinessError } 1300025 - The floating ball state does not support this operation. Possible cause:
     *     The floating ball is not started.
     * @throws { BusinessError } 1300026 - Failed to restore the main window. Possible causes:
     *     1. Invalid parameter. The provided bundleName does not match the caller's application bundleName.
     *     2. The application lacks the ohos.permission.AUTO_RESTORE_MAIN_WINDOW permission,
     *        and no user interaction (click) on the floating ball has occurred.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    restoreMainWindow(want: Want): Promise<void>;

    /**
     * 设置闪控球在应用内是否可见。使用Promise异步回调。
     *
     * - 当应用处于多任务界面时（[生命周期状态](docroot://windowmanager/window-overview.md#生命周期状态)为PAUSED），闪控球不可见。
     * - 默认情况（即未调用此接口设置时）和调用此接口传入true时：除多任务界面外，闪控球均可见。
     * - 调用此接口传入false时：当应用处于前台（[生命周期状态](docroot://windowmanager/window-overview.md#生命周期状态)为SHOWN或者RESUMED）时，闪控球不可见；当应用处于
     *   后台（[生命周期状态](docroot://windowmanager/window-overview.md#生命周期状态)为HIDDEN）时，闪控球可见。
     *
     * @param { boolean } isVisible - true表示闪控球在应用内可见；false表示闪控球在应用内不可见。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error.
     * @throws { BusinessError } 1300023 - Floating ball internal error. Possible cause:
     *     The floating ball controller is null.
     * @throws { BusinessError } 1300024 - The floating ball window state is abnormal. Possible causes:
     *     The floating ball window has not been created or has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setFloatingBallVisibilityInApp(isVisible: boolean): Promise<void>;
  }

  /**
   * 启动和更新闪控球的配置参数。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface FloatingBallParams {
    /**
     * 闪控球模板。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    template: FloatingBallTemplate;

    /**
     * 闪控球标题，不可为空字符串，大小不超过64字节。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    title: string;

    /**
     * 闪控球标题颜色，为不带透明度的十六进制颜色格式（例如'#008EF5'或'#FF008EF5'）。如果背景颜色没有指定，不允许指定标题颜色。
     *
     * @default Set different default values according to the 'backgroundColor'.
     *     - If 'backgroundColor' is provided, when 'backgroundColor' is light color, default value is '#E5FFFFFF',
     *       otherwise is '#E5000000'.
     *     - If 'backgroundColor' is not provided, default value is $r('sys.color.font_primary').
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    titleColor?: string;

    /**
     * 闪控球内容，大小不超过64字节。不传入时默认为空字符串，不显示闪控球内容。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    content?: string;

    /**
     * 闪控球内容颜色，为不带透明度的十六进制颜色格式（例如'#008EF5'或'#FF008EF5'）。如果背景颜色没有指定，不允许指定内容颜色。
     *
     * @default Set different default values according to the 'backgroundColor'.
     *     - If 'backgroundColor' is provided, when 'backgroundColor' is light color, default value is '#99FFFFFF',
     *       otherwise is '#99000000'
     *     - If 'backgroundColor' is not provided, default value is $r('sys.color.font_secondary')
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    contentColor?: string;

    /**
     * 闪控球背景颜色，为不带透明度的十六进制颜色格式（例如'#008EF5'或'#FF008EF5'），不传入时闪控球跟随系统深浅色模式的默认背景色。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    backgroundColor?: string;

    /**
     * 闪控球图标，图标像素的总字节数不超过192KB（图标像素的总字节数通过
     * [getPixelBytesNumber]{@link @ohos.multimedia.image:image.PixelMap.getPixelBytesNumber}获取）。
     * 建议图标像素宽高为128px*128px。实际显示效果依赖于设备能力和闪控球UI样式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    icon?: image.PixelMap;

    /**
     * 闪控球文本更新时的动画类型。默认为FloatingBallTextUpdateAnimationType.ANIMATION_NONE。
     *
     * @default FloatingBallTextUpdateAnimationType.ANIMATION_NONE
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    textUpdateAnimationType?: FloatingBallTextUpdateAnimationType;
  }

  /**
   * 闪控球生命周期状态的枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum FloatingBallState {
    /**
     * 表示闪控球启动。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    STARTED = 1,

    /**
     * 表示闪控球停止。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    STOPPED = 2
  }

  /**
   * 闪控球模板类型的枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum FloatingBallTemplate {
    /**
     * 静态布局，支持标题和图标。使用此模板时，FloatingBallParams中的title参数和icon参数必传。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    STATIC = 1,

    /**
     * 普通文本布局，支持标题和内容。使用此模板时，FloatingBallParams中的title参数必传。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    NORMAL = 2,

    /**
     * 强调文本布局，支持图标、标题和内容。使用此模板时，FloatingBallParams中的title参数必传。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    EMPHATIC = 3,

    /**
     * 纯文本布局，只支持标题。使用此模板时，FloatingBallParams中的title参数必传。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    SIMPLE = 4
  }

  /**
   * 闪控球窗口信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface FloatingBallWindowInfo {
    /**
     * 闪控球窗口ID。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    readonly windowId: int;
  }

  /**
   * 闪控球文本更新动画类型的枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum FloatingBallTextUpdateAnimationType {
    /**
     * 无动画。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ANIMATION_NONE = 0,

    /**
     * 淡入淡出动画。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ANIMATION_OPACITY = 1
  }
}

export default floatingBall;