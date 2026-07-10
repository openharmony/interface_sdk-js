/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
import type { Callback } from './@ohos.base';
import type floatingBall from './@ohos.window.floatingBall';
import window from './@ohos.window';
/*** if arkts static */
import { LocalStorage } from '@ohos.arkui.stateManagement';
/*** endif */

/**
 * 标准悬浮窗是悬浮在桌面/应用界面上的小型窗口，提供灵活的窗口管理能力。
 *
 * 本模块提供标准悬浮窗能力，包括判断设备是否支持标准悬浮窗功能、创建标准悬浮窗控制器以启动、更新或停止标准悬浮窗等。
 *
 * **适用场景：**
 *
 * 标准悬浮窗适用于需要在独立小窗口中持续展示应用内容或提供快捷操作的场景。例如：
 *
 * - 股市盯盘应用：用户在浏览其他应用时，通过标准悬浮窗实时查看股票行情变化，无需频繁切换应用。
 * - 手机直播应用：主播在直播过程中使用标准悬浮窗展示自定义的互动面板或控制界面，方便实时操作和互动。
 *
 * **与闪控球联动：**
 *
 * 本模块可与[@ohos.window.floatingBall]{@link @ohos.window.floatingBall:floatingBall}（闪控球）联合使用。通过
 * [floatView.bind]{@link floatView.bind}接口将标准悬浮窗控制器与闪控球控制器绑定后，用户点击闪控球可展开为标准悬浮窗，点击标准悬浮窗左上角的缩小按钮可收起为闪控球，实现两种窗口形态的相互切换。
 *
 * **全局悬浮窗和标准悬浮窗对比**
 *
 * - 共同点：全局悬浮窗和标准悬浮窗均为一种特殊的应用辅助窗口，具备在应用主窗口和对应Ability退至后台后仍然可以在前台显示的能力。可以用于应用退至后台后，使用其继续显示UI。
 * - 区别：
 *  - 全局悬浮窗由开发者管理并实现UI绘制，无统一UI及动效。
 *  - 标准悬浮窗由系统管理并统一绘制UI，动效更为高端精致。
 *  - 标准悬浮窗支持与[闪控球]{@link @ohos.window.floatingBall:floatingBall}互相绑定联合使用，实现更复杂场景。
 *
 * **起始版本：** 26.0.0
 *
 * > **说明：**
 * >
 * > - 针对系统能力SystemCapability.Window.SessionManager，请先使用
 * > [canIUse()](docroot://reference/common/js-apis-syscap.md#caniuse)接口判断当前设备是否支持此syscap及对应接口。
 * >
 * > - 本模块接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Window.SessionManager
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace floatView {
  /**
   * 判断当前设备是否支持标准悬浮窗功能。
   *
   * @returns { boolean } 当前设备是否支持标准悬浮窗功能。true表示支持，false则表示不支持。
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isFloatViewEnabled(): boolean;

  /**
   * 创建标准悬浮窗控制器。使用Promise异步回调。
   *
   * @param { FloatViewConfiguration } config - 创建标准悬浮窗控制器的参数。该参数以及构造该参数的context不能为null或者undefined，否则抛出401。其他参数异常情况抛出130
   *     0016。
   * @returns { Promise<FloatViewController> } Promise对象。返回当前创建的标准悬浮窗控制器。
   * @throws { BusinessError } 801 - Capability not supported. Possible cause: Call the API on unsupported device.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
   *     1. This window context is abnormal.
   *     2. System error, such as a null pointer, insufficient memory or a JS engine exception.
   * @throws { BusinessError } 1300016 - Parameter error.
   *     Possible cause: Invalid template type.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function create(config: FloatViewConfiguration): Promise<FloatViewController>;

  /**
   * 绑定标准悬浮窗和闪控球。需要先创建[标准悬浮窗控制器]{@link floatView.FloatViewController}和
   * [闪控球控制器]{@link @ohos.window.floatingBall:floatingBall.FloatingBallController}，且均未启动。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > - 绑定成功后，调用[start()]{@link floatView.FloatViewController.start}或
   * > [startFloatingBall()]{@link @ohos.window.floatingBall:floatingBall.FloatingBallController.startFloatingBall}均会同时创
   * > 建标准悬浮窗窗口和闪控球窗口，并触发对应窗口已注册的状态回调。但同一时刻仅展示其中一个窗口，展示顺序取决于先调用哪个控制器的启动接口。
   * >
   * > - 绑定成功后，用户可通过点击操作在标准悬浮窗窗口与闪控球之间进行切换。
   * >
   * > - 绑定成功后，调用任一控制器的停止接口（[stop()]{@link floatView.FloatViewController.stop}或
   * > [stopFloatingBall()]{@link @ohos.window.floatingBall:floatingBall.FloatingBallController.stopFloatingBall}）会同时销毁标
   * > 准悬浮窗窗口和闪控球窗口，并触发对应窗口已注册的状态回调。
   *
   * @permission ohos.permission.USE_FLOAT_BALL and ohos.permission.FLOAT_VIEW
   * @param { FloatViewController } floatViewController - 标准悬浮窗控制器。
   * @param { floatingBall.FloatingBallController } floatingBallController - 闪控球控制器。
   * @param { floatingBall.FloatingBallParams } floatingBallParams - 闪控球参数。绑定时设置的参数会覆盖掉闪控球控制器启动时已保存的参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed. Possible cause:
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported on this device. Possible cause:
   *     Call api on unsupported device.
   * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible cause:
   *     Invalid floating ball params.
   * @throws { BusinessError } 1300025 - The floating ball state does not support this operation. Possible cause:
   *     1. The floating ball has started but not stopped yet.
   *     2. The floating ball controller has been bound.
   * @throws { BusinessError } 1300031 - The floatView state does not support this operation. Possible cause:
   *     1. The float view has started but not stopped yet.
   *     2. The float view controller has been bound.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function bind(floatViewController: FloatViewController, floatingBallController: floatingBall.FloatingBallController,
    floatingBallParams: floatingBall.FloatingBallParams): Promise<void>;

  /**
   * 解绑标准悬浮窗和闪控球。需要在[标准悬浮窗控制器]{@link floatView.FloatViewController}和
   * [闪控球控制器]{@link @ohos.window.floatingBall:floatingBall.FloatingBallController}均停止后才可解绑。使用Promise异步回调。
   *
   * @param { FloatViewController } floatViewController - 标准悬浮窗控制器。
   * @param { floatingBall.FloatingBallController } floatingBallController - 闪控球控制器。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 801 - Capability not supported on this device. Possible cause:
   *     Call api on unsupported device.
   * @throws { BusinessError } 1300025 - The floating ball state does not support this operation. Possible cause:
   *     1. The floating ball has started but not stopped yet.
   *     2. The floatingBallController has not been bound.
   * @throws { BusinessError } 1300031 - The floatView state does not support this operation. Possible cause:
   *     1. The float view has started but not stopped yet.
   *     2. The floatViewController has not been bound.
   *     3. The floatViewController and the floatingBallController are not bound together.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function unbind(floatViewController: FloatViewController,
    floatingBallController: floatingBall.FloatingBallController): Promise<void>;

  /**
   * 根据传入的模板类型获取对应标准悬浮窗窗口的限制，单位为px。
   *
   * @param { FloatViewTemplateType } templateType - 标准悬浮窗模板类型。
   * @returns { FloatViewLimits } 返回标准悬浮窗窗口的限制，包括最大尺寸、最小尺寸和宽高比的限制范围。
   * @throws { BusinessError } 801 - Capability not supported. Possible cause:
   *     Call the API on unsupported device.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
   *     System error, such as a null pointer, insufficient memory or a JS engine exception.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
   *     Internal IPC error.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Invalid template type.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getFloatViewLimits(templateType: FloatViewTemplateType): FloatViewLimits;

  /**
   * 创建标准悬浮窗控制器时需要提供的参数配置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewConfiguration {
    /**
     * 表示上下文环境。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    context: BaseContext;

    /**
     * 标准悬浮窗的模板类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    templateType: FloatViewTemplateType;

    /**
     * 控制关闭窗口时是否弹出确认对话框.如果为 true，则点击关闭按钮时需要用户确认；如果为 false，则不需要确认，直接关闭。
     * 默认值： 默认值为false。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isConfirmOnClose?: boolean;
  }

  /**
   * 切换悬浮窗模板并修改窗口尺寸时需要提供的参数配置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface TemplateProperty {
    /**
     * 标准悬浮窗的模板类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    templateType: FloatViewTemplateType;

    /**
     * 更新模板类型时需要提供的窗口尺寸。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    size: window.Size;
  }

  /**
   * 标准悬浮窗控制器实例。用于启动、停止标准悬浮窗以及注册回调等操作。
   *
   * 下列API示例中都需先使用[floatView.create()]{@link floatView.create}方法获取到标准悬浮窗控制器实例（即floatViewController），再通过此实例调用对应方法。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewController {

    /**
     * 根据当前工程中指定的页面路径为标准悬浮窗加载具体页面内容，通过LocalStorage传递状态属性至加载页面。使用Promise异步回调。
     *
     * @param { string } path - 要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。不支持相对路径写法，需与main_pages.json中的src取值保持一致。
     * @param { LocalStorage } [storage] - 页面级UI状态存储单元，用于为加载到窗口的页面内容传递状态属性。默认值为空。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300016 - Parameter error. Possible causes: Invalid path.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setUIContext(path: string, storage?: LocalStorage): Promise<void>;

    /**
     * 根据指定路由页面名称为当前窗口加载[命名路由](docroot://ui/arkts-routing.md#命名路由)页面，通过LocalStorage传递状态属性至加载页面，使用Promise异步回调。
     *
     * @param { string } name - 命名路由页面的名称。
     * @param { LocalStorage } [storage] - 页面级UI状态存储单元，用于为加载到窗口的页面内容传递状态属性。默认值为空。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300016 - Parameter error. Possible causes: Invalid name.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setUIContextByName(name: string, storage?: LocalStorage): Promise<void>;

    /**
     * 设置标准悬浮窗窗口大小。建议先调用[getFloatViewLimits]{@link floatView.getFloatViewLimits}接口获取推荐的宽高范围和宽高比范围，再根据推荐值调用本接口。窗口实际大小变化可通
     * 过[onRectChange]{@link floatView.FloatViewController.onRectChange(callback: Callback<FloatViewRectChangeInfo>)}接口监
     * 听。使用Promise异步回调。
     *
     * @param { window.Size } size - 表示窗口的大小。建议大小满足[getFloatViewLimits]{@link floatView.getFloatViewLimits}接口返回的限制。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @throws { BusinessError } 1300016 - Parameter error.
     *     Possible cause: The value of the size is less than or equal to 0.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setWindowSize(size: window.Size): Promise<void>;

    /**
     * 切换标准悬浮窗的模板并改变其窗口尺寸。建议先调用[getFloatViewLimits]{@link floatView.getFloatViewLimits}接口获取目标模板类型推荐的宽高范围和宽高比范围，再根据推荐值调用本
     * 接口。窗口实际大小变化可通过
     * [onRectChange]{@link floatView.FloatViewController.onRectChange(callback: Callback<FloatViewRectChangeInfo>)}接口监听
     * 。使用Promise异步回调。
     *
     * @param { TemplateProperty } templateProperty - 表示需要切换的窗口模板类型及大小。建议大小满足
     *     [getFloatViewLimits]{@link floatView.getFloatViewLimits}接口返回的限制。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid template type.
     *     2. The value of the size is less than or equal to 0.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    switchTemplate(templateProperty: TemplateProperty): Promise<void>;

    /**
     * 启动标准悬浮窗窗口。接口返回不表示start流程结束，需要通过
     * [onStateChange]{@link floatView.FloatViewController.onStateChange(callback: Callback<FloatViewStateChangeInfo>)}接
     * 口监听到STARTED回调时判断启动成功。建议在调用[setUIContext()]{@link floatView.FloatViewController.setUIContext}或
     * [setUIContextByName()]{@link floatView.FloatViewController.setUIContextByName}后调用start()。使用Promise异步回调。
     *
     * @permission ohos.permission.FLOAT_VIEW
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed. Possible cause:
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @throws { BusinessError } 1300030 - Repeated operations on the float view. Possible cause:
     *     The float view is starting or has already started.
     * @throws { BusinessError } 1300031 - The float view state does not support this operation. Possible cause:
     *     The float view is stopping.
     * @throws { BusinessError } 1300033 - Failed to start float view. Possible causes:
     *     1. Start multiple float views.
     *     2. The main window of context is not foreground.
     * @throws { BusinessError } 1300034 - This operation conflicts with other floating windows. Possible cause:
     *     App has already started floating ball or pip window.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    start(): Promise<void>;

    /**
     * 停止标准悬浮窗窗口。接口返回不表示stop流程结束，需要通过
     * [onStateChange]{@link floatView.FloatViewController.onStateChange(callback: Callback<FloatViewStateChangeInfo>)}接
     * 口监听到STOPPED回调时判断停止成功。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @throws { BusinessError } 1300030 - Repeated operations on the float view. Possible cause:
     *     The float view is stopping or has already stopped.
     * @throws { BusinessError } 1300031 - This operation is not supported on the float view in the current state.
     *     Possible cause: The float view window is not started.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stop(): Promise<void>;

    /**
     * 设置应用在前台时标准悬浮窗窗口是否可见。使用Promise异步回调。
     *
     * 创建标准悬浮窗后未调用此接口前，默认其在应用处于前台时为可见状态。
     *
     * @param { boolean } isVisible - 应用在前台时标准悬浮窗是否可见，true表示可见，false表示不可见。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setFloatViewVisibilityInApp(isVisible: boolean): Promise<void>;

    /**
     * 恢复标准悬浮窗的主窗口到前台显示。如果主窗口已处于前台时调用，将抬升主窗口层级。此接口只能在标准悬浮窗窗口被点击后使用。当主窗口处于PAUSED生命周期或处于多任务状态时，调用接口将抛出错误码1300032。使用Promise
     * 异步回调。
     *
     * @param { Record<string, Object> } [wantParameters] - 恢复标准悬浮窗的主窗口时会给主窗口传递的自定义参数，主窗口会在触发
     *     [onNewWant]{@link @ohos.app.ability.AbilityLifecycleCallback:AbilityLifecycleCallback#onNewWant?(ability: UIAbility)}
     *     回调时收到。默认值为空，代表不向主窗传入任何自定义参数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @throws { BusinessError } 1300031 - This operation is not supported on the float view in the current state.
     *     Possible cause: The float view window is not started when restoring.
     * @throws { BusinessError } 1300032 - Failed to restore the main window. Possible cause:
     *     1. User has never clicked the float view window before restore.
     *     2. The float view window is not in the foreground.
     *     3. The main window is in PAUSED lifecycle state.
     *     4. The main window is in background during recent.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    restoreMainWindow(wantParameters?: Record<string, Object>): Promise<void>;

    /**
     * 获取标准悬浮窗窗口的属性。
     *
     * @returns { FloatViewProperties } 返回标准悬浮窗窗口的属性。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300031 - This operation is not supported on the float view in the current state.
     *     Possible cause: The float view window has not started, has stopped, or is in an error state.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getWindowProperties(): FloatViewProperties;

    /**
     * 注册标准悬浮窗状态变化的监听事件。不再使用时，取消监听以避免内存泄漏。
     *
     * @param { Callback<FloatViewStateChangeInfo> } callback - 回调函数。返回当前的标准悬浮窗状态变化信息。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300030 - Repeated operations on the float view. Possible cause:
     *     The callback has already registered.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onStateChange(callback: Callback<FloatViewStateChangeInfo>): void;

    /**
     * 取消标准悬浮窗状态变化的监听事件。
     *
     * @param { Callback<FloatViewStateChangeInfo> } [callback] - 回调函数。返回当前的标准悬浮窗状态变化信息。若传入参数，则停止该监听。若未传入参数，则停止所有标准悬浮窗状态
     *     变化的监听。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offStateChange(callback?: Callback<FloatViewStateChangeInfo>): void;

    /**
     * 注册标准悬浮窗矩形区域（位置和大小）变化的监听事件。不再使用时，取消监听以避免内存泄漏。
     *
     * @param { Callback<FloatViewRectChangeInfo> } callback - 回调函数。返回当前的标准悬浮窗矩形区域变化信息。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300030 - Repeated operations on the float view. Possible cause:
     *     The callback has already registered.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onRectChange(callback: Callback<FloatViewRectChangeInfo>): void;

    /**
     * 取消标准悬浮窗矩形区域变化的监听事件。
     *
     * @param { Callback<FloatViewRectChangeInfo> } [callback] - 回调函数。返回当前的标准悬浮窗矩形区域变化信息。若传入参数，则停止该监听。若未传入参数，则停止所有标准悬浮窗矩
     *     形区域变化的监听。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offRectChange(callback?: Callback<FloatViewRectChangeInfo>): void;

    /**
     * 注册标准悬浮窗限制变化的监听事件，当限制规格变化时触发回调，例如设备折叠或者展开。不再使用时，取消监听以避免内存泄漏。
     *
     * @param { Callback<FloatViewLimits> } callback - 回调函数。返回当前的标准悬浮窗限制变化信息。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300030 - Repeated operations on the float view. Possible cause:
     *     The callback has already registered.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onLimitsChange(callback: Callback<FloatViewLimits>): void;

    /**
     * 取消标准悬浮窗限制变化的监听事件。
     *
     * @param { Callback<FloatViewLimits> } [callback] - 回调函数。返回当前的标准悬浮窗限制变化信息。若传入参数，则停止该监听。若未传入参数，则停止所有标准悬浮窗限制变化的监听。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offLimitsChange(callback?: Callback<FloatViewLimits>): void;
  }

  /**
   * 标准悬浮窗模板类型的枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum FloatViewTemplateType {
    /**
     * 圆角矩形。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ROUNDED_RECTANGLE = 0,

    /**
     * 水平的条状矩形。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HORIZONTAL_BAR = 1
  }

  /**
   * 标准悬浮窗窗口的属性。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewProperties {
    /**
     * 标准悬浮窗的模板类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    templateType: FloatViewTemplateType;

    /**
     * 标准悬浮窗窗口ID。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowId: int;

    /**
     * 标准悬浮窗所在屏幕ID。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayId: int;

    /**
     * 标准悬浮窗窗口矩形区域。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowRect: window.Rect;

    /**
     * 标准悬浮窗窗口缩放比例。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowScale: double;

    /**
     * 标准悬浮窗内容的避让区域。
     *
     * **注意：**
     *
     * 通过[setUIContext()]{@link floatView.FloatViewController.setUIContext}或
     * [setUIContextByName()]{@link floatView.FloatViewController.setUIContextByName}加载的页面中，位于避让区域的组件将不响应手势事件，添加需要手势响应事件
     * 的组件时，请注意避让这些区域。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    avoidArea: window.AvoidArea;

    /**
     * 标准悬浮窗是否在侧边栏中。true为在侧边栏中，false为不在侧边栏中。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    inSidebar: boolean;
  }

  /**
   * 标准悬浮窗的宽高比限制范围。宽高比比值由窗口矩形区域的宽除以高获得。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface RatioLimit {
    /**
     * 标准悬浮窗的宽高比最小值。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minRatio: double;

    /**
     * 标准悬浮窗的宽高比最大值。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxRatio: double;
  }

  /**
   * 标准悬浮窗窗口的限制。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewLimits {
    /**
     * 标准悬浮窗的最小尺寸。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minSize: window.Size;

    /**
     * 标准悬浮窗的最大尺寸。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxSize: window.Size;

    /**
     * 标准悬浮窗的宽高比限制范围。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ratioLimits: Array<RatioLimit>;
  }

  /**
   * 标准悬浮窗状态变化信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewStateChangeInfo {
    /**
     * 标准悬浮窗的状态。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: FloatViewState;

    /**
     * 标准悬浮窗停止的原因。该参数仅在状态为FloatViewState.STOPPED时有效，在其他状态下默认为空字符串。停止原因和对应含义如下：
     *
     * "APP_STOP"：应用主动停止
     *
     * "STOP_IN_SIDEBAR"：在侧边栏被关闭
     *
     * "TITLE_BAR_STOP_CLICK"：标题栏点击关闭按钮
     *
     * "DUMPSTER_STOP"：拖入垃圾桶停止
     *
     * "REPLACE_STOP"：被其他标准悬浮窗挤占
     *
     * "FLOATING_BALL_STOP"：绑定状态下跟随闪控球停止
     *
     * "MAIN_WINDOW_DESTROY_STOP"：context关联的主窗被销毁后停止
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopReason: string;
  }

  /**
   * 标准悬浮窗状态的枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum FloatViewState {
    /**
     * 标准悬浮窗已启动并显示。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STARTED = 1,

    /**
     * 标准悬浮窗已隐藏。上滑进入多任务界面时触发、使用
     * [setFloatViewVisibilityInApp]{@link floatView.FloatViewController.setFloatViewVisibilityInApp}接口设置了应用在前台时隐藏标准悬浮窗且
     * 应用处于前台时触发。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HIDDEN = 2,

    /**
     * 标准悬浮窗已停止。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STOPPED = 3,

    /**
     * 标准悬浮窗在侧边栏中。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    IN_SIDEBAR = 4,

    /**
     * 标准悬浮窗切换为闪控球。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    IN_FLOATING_BALL = 5,

    /**
     * 标准悬浮窗发生异常。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ERROR = 6
  }

  /**
   * 标准悬浮窗矩形区域变化信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewRectChangeInfo {
    /**
     * 标准悬浮窗窗口矩形区域。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowRect: window.Rect;

    /**
     * 标准悬浮窗窗口缩放比例。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowScale: double;

    /**
     * 标准悬浮窗矩形区域变化的原因。原因和对应含义如下：
     *
     * "POSITION_CHANGE"：位置变化
     *
     * "SIZE_CHANGE"：大小变化
     *
     * "RECT_CHANGE"：位置大小同时变化
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reason: string;
  }

}

export default floatView;